/**
 * Rate limit do Send Email Hook (FASE 15 da missão VOLTRIS INTERNACIONAL).
 *
 * O hook é chamado pelo Supabase Auth a cada signup/recovery. Sem limite, um
 * bot que crie contas em massa dispara milhares de render + milhares de SMTP
 * sends pela Resend — custo real e risco de bloqueio do remetente.
 *
 * Estratégia: janela fixa de 60 s em memória, bucket por IP. Em serverless
 * cada instância conta sozinha (limitação honesta — o teto real é N × limite);
 * isso já barra força bruta óbvia e loops de script, e é o mesmo compromisso
 * assumido em `lib/license-rate-guard.ts`.
 *
 * Resposta quando estoura: `429` com `Retry-After` em segundos — o Supabase
 * trata 4xx como rejeição e NÃO reenvia, o que é exatamente o que queremos
 * (não insistir em um ataque). Para o caso legítimo (poucos usuários atrás do
 * mesmo NAT), retry humano acontece em >1 min.
 *
 * Nota sobre IP: usa `x-forwarded-for` (primeiro hop), fallback `x-real-ip`,
 * senão `unknown`. Não tentamos hash do header completo — a informação é
 * passageira (só a contagem importa) e nunca é persistida.
 *
 * Dividimos a lógica em duas camadas para manter o núcleo testável em `node
 * --test` sem depender de `next/server`:
 *   1. `checkAuthHookRateByIp(ipKey, opts, dry)` — puro sobre string.
 *   2. `checkAuthHookRate(req, opts)` / `maybeRateLimitResponse(req, opts)` —
 *      wrappers que extraem o IP de um `NextRequest` e formam o `NextResponse`.
 */

/**
 * Camada pura: recebe a chave de IP já resolvida e devolve a decisão.
 * Não conhece NextRequest nem NextResponse — portanto roda em node puro.
 */
export interface AuthHookRateDecision {
    allowed: boolean;
    remaining: number;
    retryAfterSec: number;
}

export interface AuthHookRateOptions {
    /** Requests permitidos por IP por janela. Default 20. */
    perIp?: number;
    /** Janela em ms. Default 60_000 (1 min). */
    windowMs?: number;
    /** Teto de chaves em memória. Default 5_000. */
    maxKeys?: number;
}

const DEFAULTS: Required<AuthHookRateOptions> = {
    perIp: 20,
    windowMs: 60_000,
    maxKeys: 5_000,
};

interface Bucket {
    count: number;
    resetAt: number;
}

// Map global do processo. Sobrevive entre invocações na mesma instância
// (Vercel warm / node server). Não precisa de persistência.
const BUCKETS = new Map<string, Bucket>();

/**
 * Resolve o IP de uma requisição a partir dos headers padrão.
 * `x-forwarded-for` primeiro hop → `x-real-ip` → `unknown`.
 * Exportado para que a rota e o teste compartilhem a mesma regra.
 */
export function resolveIpFromHeaders(getHeader: (name: string) => string | null): string {
    const xff = getHeader('x-forwarded-for');
    if (xff) {
        const first = xff.split(',')[0]?.trim();
        if (first) return first;
    }
    const real = getHeader('x-real-ip');
    if (real) return real.trim();
    return 'unknown';
}

/**
 * Checa + incrementa o bucket do IP. `dry=true` não incrementa (útil para
 * testar config sem gastar o orçamento).
 */
export function checkAuthHookRateByIp(
    key: string,
    opts: AuthHookRateOptions = {},
    dry = false,
): AuthHookRateDecision {
    const cfg = { ...DEFAULTS, ...opts };
    const now = Date.now();

    let bucket = BUCKETS.get(key);
    if (!bucket || bucket.resetAt <= now) {
        // Reset / criação. Impede crescimento sem teto.
        if (BUCKETS.size >= cfg.maxKeys) {
            // Remove a entrada com resetAt mais antigo (aproximação FIFO).
            let oldestKey: string | null = null;
            let oldestTime = Number.POSITIVE_INFINITY;
            for (const [k, b] of BUCKETS) {
                if (b.resetAt < oldestTime) { oldestTime = b.resetAt; oldestKey = k; }
            }
            if (oldestKey) BUCKETS.delete(oldestKey);
        }
        bucket = { count: 0, resetAt: now + cfg.windowMs };
        BUCKETS.set(key, bucket);
    }

    if (!dry) bucket.count += 1;
    const allowed = bucket.count <= cfg.perIp;
    const retryAfterMs = Math.max(0, bucket.resetAt - now);
    return {
        allowed,
        remaining: Math.max(0, cfg.perIp - bucket.count),
        retryAfterSec: Math.max(1, Math.ceil(retryAfterMs / 1000)),
    };
}

/**
 * Camada Next: aceita qualquer objeto com `.headers.get` (NextRequest é um).
 * Mantido separado para que o teste em node não precise importar next/server.
 */
export function checkAuthHookRate(
    req: { headers: { get(name: string): string | null } },
    opts: AuthHookRateOptions = {},
    dry = false,
): AuthHookRateDecision {
    return checkAuthHookRateByIp(resolveIpFromHeaders((n) => req.headers.get(n)), opts, dry);
}

/**
 * Retorna `NextResponse` 429 quando estourou, ou `null` quando passou.
 * Import dinâmico de next/server só quando realmente precisa formar a resposta,
 * para que o módulo carregue em `node --test` sem problema.
 */
export async function maybeRateLimitResponseAsync(
    req: { headers: { get(name: string): string | null } },
    opts: AuthHookRateOptions = {},
): Promise<unknown | null> {
    const d = checkAuthHookRate(req, opts);
    if (d.allowed) return null;
    const { NextResponse } = await import('next/server');
    return NextResponse.json(
        { error: 'auth_hook_rate_limited' },
        {
            status: 429,
            headers: {
                'Retry-After': String(d.retryAfterSec),
                'X-Auth-Hook-Rate-Remaining': '0',
            },
        },
    );
}

/**
 * Versão síncrona para a rota (que roda em Next, onde `next/server` já está
 * carregado). Mantém a API existente usada em `app/api/auth/send-email-hook`.
 */
export function maybeRateLimitResponse(
    req: { headers: { get(name: string): string | null } },
    opts: AuthHookRateOptions = {},
): { status: number; headers: Record<string, string>; body: unknown } | null {
    const d = checkAuthHookRate(req, opts);
    if (d.allowed) return null;
    // A rota real chama NextResponse.json em cima deste shape. Para não
    // importar next/server neste módulo (mantendo-o testável em node),
    // devolvemos o shape bruto; o caller embrulha em NextResponse.
    return {
        status: 429,
        headers: {
            'Retry-After': String(d.retryAfterSec),
            'X-Auth-Hook-Rate-Remaining': '0',
        },
        body: { error: 'auth_hook_rate_limited' },
    };
}

/** Resetado só em teste. */
export function __resetAuthHookRateForTest() {
    BUCKETS.clear();
}

/** Exposto para testes inspecionarem tamanho do bucket. */
export function __authHookRateBucketCount(): number {
    return BUCKETS.size;
}
