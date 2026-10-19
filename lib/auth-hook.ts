/**
 * SUPABASE AUTH "SEND EMAIL HOOK" — lógica pura (FASE 3/4/5).
 *
 * Este módulo é node-testable: não importa Next/React/DOM nem fala com rede. A
 * rota HTTP em `app/api/auth/send-email-hook/route.ts` é o único lugar que
 * transforma um `NextRequest` numa chamada daqui. Assim o teste cobre o parser
 * + a resolução de idioma + o render sem depender do servidor HTTP.
 *
 * O que o hook entrega:
 *   - O payload do Supabase Auth para `confirmation` (signup) e `recovery`
 *     (reset de senha) é renderizado no idioma RESOLVIDO do usuário usando a
 *     matriz dos 15 idiomas (`lib/email-copy.ts` + `lib/email-templates.ts`).
 *   - Tipos não suportados (`magiclink`, `email_change`, `invite`,
 *     `reauthentication`) caem no template padrão do Supabase (return `{}`),
 *     porque ainda não têm copy oficial nos 15 idiomas e inventar texto em
 *     e-mail é pior do que deixar o padrão do fornecedor.
 *
 * Segurança:
 *   - O payload chega de um serviço externo (Supabase). Nada do corpo é
 *     confiado sem validação: `email` precisa ser válido, `action_url` precisa
 *     ser uma URL real (http/https), `type` precisa estar na lista.
 *   - A autenticação do chamador (shared secret em `Authorization: Bearer`) é
 *     verificada na ROTA, não aqui — este módulo só faz parsing/render.
 *   - `firstName` vem do `user_metadata` e é escapado no render (nunca vai cru
 *     para o HTML).
 *
 * Entrega:
 *   - Este módulo NÃO envia o e-mail. Retorna `{ subject, html, textPlaintext }`
 *     e é o Supabase Auth que entrega usando o SMTP configurado (o padrão da
 *     missão é apontar o SMTP do Supabase para `smtp.resend.com`, com a mesma
 *     `RESEND_API_KEY`). Isso mantém o retry nativo do Auth e evita enviar o
 *     mesmo e-mail duas vezes (uma pelo worker do outbox, outra pelo Auth).
 */

import { resolveUserLocale, type Locale } from './locale.ts';
import { renderAuthEmail, type RenderedEmail } from './email-templates.ts';
import { isValidEmail } from './resend-client.ts';

// ============================================================================
// TIPOS DO PAYLOAD (o mínimo que a missão exige; o resto é ignorado)
// ============================================================================

export interface HookUser {
    id?: string;
    email?: string;
    phone?: string | null;
    user_metadata?: {
        preferred_locale?: unknown;
        first_name?: unknown;
        full_name?: unknown;
        name?: unknown;
        [k: string]: unknown;
    };
    app_metadata?: Record<string, unknown>;
    [k: string]: unknown;
}

export interface HookPayload {
    aud?: string;
    /**
     * Tipos suportados por padrão em Supabase Auth:
     *   signup | recovery | magiclink | email_change | invite | reauthentication
     * Também aparecem variantes "deprecated" (`confirmation`) em payloads mais
     * antigos. Tratamos `confirmation` como sinônimo de `signup`.
     */
    type?: string;
    user?: HookUser;
    /** URL que o Supabase montou com o token (confirmación / reset). */
    action_url?: string;
    /** Compat: alguns clientes mandam `verification_url` em vez de `action_url`. */
    verification_url?: string;
    data?: Record<string, unknown>;
}

export type SupportedKind = 'confirmation' | 'recovery';

// ============================================================================
// MAPPING: Supabase `type` → nosso `kind`
// ============================================================================

/**
 * Devolve o `kind` suportado para o `type` vindo do hook, ou `null` quando
 * não suportado (a rota então responde `{}` e o Supabase cai no template
 * padrão dele).
 */
export function mapSupabaseTypeToKind(type: string | undefined | null): SupportedKind | null {
    if (typeof type !== 'string') return null;
    const t = type.trim().toLowerCase();
    // Supabase moderno usa 'signup'; variantes antigas/documentadas mandam
    // 'confirmation'. São o mesmo evento: "confirmar o endereço de e-mail".
    if (t === 'signup' || t === 'confirmation') return 'confirmation';
    if (t === 'recovery') return 'recovery';
    // magiclink / invite / email_change / reauthentication: fora do escopo
    // desta fatia (a missão prioriza confirmação + recuperação).
    return null;
}

// ============================================================================
// EXTRAÇÃO SEGURA DE CAMPOS
// ============================================================================

/** Extrai o nome para a saudação, respeitando a hieráquica do user_metadata. */
function extractFirstName(user: HookUser | undefined): string {
    const m = user?.user_metadata ?? {};
    // Ordem: first_name > nome completo dividido (pega o primeiro token) > name.
    if (typeof m.first_name === 'string' && m.first_name.trim()) return m.first_name.trim();
    if (typeof m.full_name === 'string' && m.full_name.trim()) return m.full_name.trim().split(/\s+/)[0];
    if (typeof m.name === 'string' && m.name.trim()) return m.name.trim().split(/\s+/)[0];
    return '';
}

/**
 * Extrai o locale:
 *   1. `user_metadata.preferred_locale` (fonte primária, gravada pela Fatia 1)
 *   2. `user_metadata.locale` (compatibilidade com clientes antigos)
 *   3. `user_metadata.language` (alias comum em OAuth providers)
 *   4. fallback → DEFAULT_LOCALE ('en')
 *
 * Sempre devolve um dos 15 oficiais (garantia do `resolveUserLocale`).
 */
export function extractLocale(user: HookUser | undefined): Locale {
    const m = user?.user_metadata ?? {};
    return resolveUserLocale({
        metadataLocale: m.preferred_locale ?? m.locale ?? m.language,
    });
}

// ============================================================================
// VALIDAÇÃO
// ============================================================================

export type ParseResult =
    | { ok: true; kind: SupportedKind; email: string; actionUrl: string; user: HookUser }
    | { ok: false; reason: 'unsupported_type' | 'missing_email' | 'missing_action_url' | 'invalid_email' | 'invalid_action_url' | 'invalid_payload'; message: string };

/**
 * Valida e extrai o mínimo necessário. NUNCA lança — sempre devolve uma
 * discriminated union. A rota decide qual HTTP code devolver conforme o reason.
 */
export function parseHookPayload(raw: unknown): ParseResult {
    if (raw === null || typeof raw !== 'object') {
        return { ok: false, reason: 'invalid_payload', message: 'Body must be a JSON object.' };
    }
    const p = raw as HookPayload;

    const kind = mapSupabaseTypeToKind(p.type);
    if (!kind) {
        return { ok: false, reason: 'unsupported_type', message: `Hook type "${p.type ?? ''}" not supported by i18n renderer.` };
    }

    const user = p.user ?? {};
    const email = (user.email ?? '').trim();
    if (!email) {
        return { ok: false, reason: 'missing_email', message: 'user.email missing.' };
    }
    if (!isValidEmail(email)) {
        return { ok: false, reason: 'invalid_email', message: 'user.email is not a valid address.' };
    }

    const actionUrl = (p.action_url ?? p.verification_url ?? '').trim();
    if (!actionUrl) {
        return { ok: false, reason: 'missing_action_url', message: 'action_url missing.' };
    }
    // `javascript:` e `data:` em action_url dariam XSS no botão do e-mail.
    // Aceitamos apenas http(s).
    if (!/^https?:\/\//i.test(actionUrl)) {
        return { ok: false, reason: 'invalid_action_url', message: 'action_url must be http(s).' };
    }

    return { ok: true, kind, email, actionUrl, user };
}

// ============================================================================
// RENDER
// ============================================================================

/**
 * Produz o corpo final (subject + html + text) a partir do payload já validado.
 * A resposta HTTP devolve este objeto embrulhado em `{ body: {...} }`, que é o
 * formato que o Supabase Auth espera.
 */
export function renderForHook(parse: Extract<ParseResult, { ok: true }>): RenderedEmail {
    return renderAuthEmail({
        to: parse.email,
        kind: parse.kind,
        actionUrl: parse.actionUrl,
        locale: extractLocale(parse.user),
        firstName: extractFirstName(parse.user),
        // O Supabase não expõe o TTL por aqui; o padrão do GoTrue é 24h (1440m)
        // para recovery e 24h para confirmation. Deixamos 24h em português
        // claro na mensagem.
        expiryMinutes: 1440,
    });
}

// ============================================================================
// RESPOSTA (o shape aceito pelo Supabase Auth)
// ============================================================================

export interface SupabaseHookResponseBody {
    subject: string;
    html: string;
    textPlaintext?: string;
}

export function toSupabaseResponseBody(r: RenderedEmail): { body: SupabaseHookResponseBody } {
    return {
        body: {
            subject: r.subject,
            html: r.html,
            textPlaintext: r.text,
        },
    };
}
