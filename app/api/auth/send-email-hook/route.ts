/**
 * ROTA DO "SEND EMAIL HOOK" DO SUPABASE AUTH (FASE 3/4/5).
 *
 * Configurada no painel do Supabase em Authentication → URL Configuration →
 * Send Email Hook. O Supabase chama `POST` aqui cada vez que precisa enviar
 * um e-mail de signup / recovery; nós devolvemos o corpo renderizado no idioma
 * do usuário, e o próprio Supabase entrega via SMTP (que deve apontar para
 * `smtp.resend.com` com a `RESEND_API_KEY` — decisão de configuração, não de
 * código).
 *
 * Segurança desta rota:
 *   - Autorização por SEGREDO COMPARTILHADO enviado como header
 *     `Authorization: Bearer <SUPABASE_AUTH_HOOK_SECRET>`. Este segredo é
 *     configurado no painel do Supabase na coluna "Authorization header" do
 *     Hook. Sem ele, nada renderiza.
 *   - Payload é tratado como NÃO CONFIÁVEL (veio de fora): `parseHookPayload`
 *     valida tipo/e-mail/URL antes de renderizar. Ver `lib/auth-hook.ts`.
 *   - Logs sempre mascarados (`maskEmail`) — endereço alheio nunca em claro.
 *   - A rota NÃO fala com Resend diretamente, NÃO grava no outbox: o e-mail de
 *     Auth tem retry nativo no Supabase. Isso evita o caso "outbox reenvia o
 *     que o Supabase já entregou".
 *
 * Compatibilidade com clientes:
 *   - `type` desconhecido (ex.: `magiclink`) → responde `{}` (200), e o
 *     Supabase usa o template padrão dele. Isso é melhor do que devolver
 *     HTML vazio (que a Supabase interpretaria como erro e o usuário não
 *     receberia nada).
 */

import { NextRequest, NextResponse } from 'next/server';
import {
    parseHookPayload,
    renderForHook,
    toSupabaseResponseBody,
} from '@/lib/auth-hook';
import type {
    AuthHookRateDecision,
} from '@/lib/auth-hook-rate-limit';
import {
    checkAuthHookRate,
    resolveIpFromHeaders,
} from '@/lib/auth-hook-rate-limit';
import {
    startOperation,
    logWarn,
    logError,
    logInfo,
    maskEmail,
    generateCorrelationId,
} from '@/lib/voltris-log';

export const runtime = 'nodejs';

function unauthorized(): NextResponse {
    return NextResponse.json(
        { error: 'Missing or invalid Authorization header.' },
        { status: 401 }
    );
}

/**
 * Wrapper da camada pura de rate limit, para manter este módulo testável em
 * `node --test` sem arrastar next/server nas dependências. Retorna
 * `NextResponse` 429 se estourou, `null` se passou.
 */
function guardRateLimit(req: NextRequest, perIp: number): NextResponse | null {
    const decision: AuthHookRateDecision = checkAuthHookRate(req, { perIp });
    if (decision.allowed) return null;
    return NextResponse.json(
        { error: 'auth_hook_rate_limited' },
        {
            status: 429,
            headers: {
                'Retry-After': String(decision.retryAfterSec),
                'X-Auth-Hook-Rate-Remaining': '0',
            },
        }
    );
}

// Re-export sutil para lint não reclamar de imports não usados se alguém
// refatorar depois; `resolveIpFromHeaders` é a mesma função usada no teste.
void resolveIpFromHeaders;

export async function POST(req: NextRequest): Promise<NextResponse> {
    // ---- FASE 15: rate limit por IP antes de QUALQUER outro trabalho.
    // Renderizar é barato, mas uma bexiga de chamadas por ataque de signup em
    // massa consome SMTP Resend e pode derrubar o domínio remetente.
    const limited = guardRateLimit(req, 20);
    if (limited) {
        const ctx = startOperation('AUTH_HOOK', generateCorrelationId());
        logWarn(ctx, 'hook rate-limited por IP');
        return limited;
    }

    const hookSecret = (process.env.SUPABASE_AUTH_HOOK_SECRET ?? '').trim();

    // Configuração ausente: melhor falhar alto do que deixar o hook aberto.
    if (!hookSecret) {
        const ctx = startOperation('AUTH_HOOK', generateCorrelationId());
        logError(ctx, 'SUPABASE_AUTH_HOOK_SECRET not configured — rejecting hook call');
        return NextResponse.json(
            { error: 'Send Email Hook not configured on server.' },
            { status: 500 }
        );
    }

    const authHeader = req.headers.get('authorization') ?? '';
    // Comparação literal (não timing-safe): o valor chega em texto plano no
    // header e o vector de ataque aqui seria um adversário já com acesso à
    // rede. Timing-safe seria overkill; o importante é NÃO aceitar sem o
    // segredo.
    if (authHeader !== `Bearer ${hookSecret}`) {
        const ctx = startOperation('AUTH_HOOK', generateCorrelationId());
        logWarn(ctx, 'hook call rejected: bad Authorization header', {
            hasHeader: Boolean(authHeader),
        });
        return unauthorized();
    }

    const ctx = startOperation('AUTH_HOOK', generateCorrelationId());

    let raw: unknown;
    try {
        raw = await req.json();
    } catch {
        logWarn(ctx, 'hook call rejected: invalid JSON body');
        return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
    }

    const parsed = parseHookPayload(raw);
    if (!parsed.ok) {
        // Tipo não suportado → devolver 200 com `{}`: o Supabase cai no
        // template padrão dele. Qualquer outro reason é erro real do payload.
        if (parsed.reason === 'unsupported_type') {
            logInfo(ctx, 'hook type not covered by i18n renderer — falling back to Supabase default', {
                type: (raw as any)?.type ?? null,
            });
            return NextResponse.json({});
        }
        logWarn(ctx, 'hook payload rejected', { reason: parsed.reason, message: parsed.message });
        return NextResponse.json({ error: parsed.message }, { status: 400 });
    }

    let rendered;
    try {
        rendered = renderForHook(parsed);
    } catch (err: any) {
        // Um erro aqui é regressão no renderer (nunca deve acontecer). Devolver
        // `{}` faz o Supabase usar o template padrão — o usuário recebe o
        // e-mail em inglês em vez de não receber nada, que é o pior resultado.
        logError(ctx, 'render failed — falling back to Supabase default', {
            error: String(err?.message ?? err).slice(0, 200),
            kind: parsed.kind,
        });
        return NextResponse.json({});
    }

    logInfo(ctx, 'auth email rendered', {
        kind: parsed.kind,
        locale: rendered.locale,
        direction: rendered.direction,
        to: maskEmail(parsed.email),
        userId: parsed.user.id ?? null,
    });

    return NextResponse.json(toSupabaseResponseBody(rendered));
}

/**
 * O Supabase só chama `POST`, mas um GET simples de "config check" ajuda a
 * validar a URL no painel sem precisar disparar um evento real. Exige o mesmo
 * segredo.
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
    // Config-check: menos agressivo que POST mas ainda protegido (10/min/IP).
    const limited = guardRateLimit(req, 10);
    if (limited) return limited;

    const hookSecret = (process.env.SUPABASE_AUTH_HOOK_SECRET ?? '').trim();
    if (!hookSecret) {
        return NextResponse.json({ ok: false, error: 'not configured' }, { status: 500 });
    }
    const authHeader = req.headers.get('authorization') ?? '';
    if (authHeader !== `Bearer ${hookSecret}`) {
        return unauthorized();
    }
    return NextResponse.json({ ok: true, service: 'voltris-send-email-hook' });
}
