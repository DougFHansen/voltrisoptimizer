/**
 * CLIENTE RESEND CENTRALIZADO (VOLTRIS Internacional — missão FASE 14/15).
 *
 * Porta do VOLTRIS Brasil (arquitetura já auditada e testada), adaptada ao
 * ambiente internacional. Uma ÚNICA porta de saída para a Resend em todo o
 * projeto: nenhum outro arquivo fala com `api.resend.com` — é o que garante que
 * remetente, timeout, retry e classificação de erro sejam os mesmos em toda
 * parte (e que a API key nunca vaze).
 *
 * Diferenças para o BR, de propósito:
 *  - Domínio verificado é `voltrisoptimizer.com` (não `voltris.com.br`). O
 *    ambiente pode sobrepor com `RESEND_VERIFIED_DOMAIN` (string literal).
 *  - Strings de diagnóstico em inglês (convenção de string-fonte do INTL).
 *  - Somente servidor: este módulo é importado só por rotas de API / Edge /
 *    scripts com runtime `nodejs`/deno. A `RESEND_API_KEY` jamais chega aqui via
 *    `NEXT_PUBLIC_`.
 */

import { Resend } from 'resend';

/** Timeout padrão por chamada (SDK v4 não expõe timeout no construtor). */
export const RESEND_TIMEOUT_MS = 10_000;

/**
 * Leitura PREGUIÇOSA do ambiente, de propósito: congelar no topo do módulo faria
 * `getResendConfigStatus` mentir depois do primeiro import (o que acontece na
 * validação de configuração) e tornaria o comportamento impraticável de testar.
 */
function fromEmail(): string {
    return process.env.RESEND_FROM_EMAIL?.trim() ?? '';
}

function fromName(): string {
    return process.env.RESEND_FROM_NAME?.trim() ?? '';
}

/**
 * Domínio cujos remetentes a Resend aceita. Default internacional
 * (voltrisoptimizer.com); sobreponível via `RESEND_VERIFIED_DOMAIN`. Evita
 * descobrir o 403/422 só no primeiro envio real.
 */
function verifiedDomain(): RegExp {
    const custom = process.env.RESEND_VERIFIED_DOMAIN?.trim();
    if (custom) {
        try {
            return new RegExp(`@${custom.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i');
        } catch {
            /* cai no default se a env vier malformada */
        }
    }
    return /@voltrisoptimizer\.com$/i;
}

/** Validação de e-mail ANTES de gastar uma chamada de API (bounce fere a reputação). */
const EMAIL_RE = /^[^\s@,;:<>()[\]\\]+@[^\s@,;:<>()[\]\\]+\.[A-Za-z]{2,}$/;

export function isValidEmail(value: unknown): value is string {
    if (typeof value !== 'string') return false;
    const trimmed = value.trim();
    if (trimmed.length < 6 || trimmed.length > 254) return false;
    if (trimmed.includes('..')) return false;
    return EMAIL_RE.test(trimmed);
}

/** Remetente no formato exigido pela Resend: `Nome <email>`. */
export function senderHeader(): string {
    const email = fromEmail();
    if (!email) {
        throw new ResendConfigError(
            'RESEND_FROM_EMAIL missing: the sender is required to send (verified domain on Resend).'
        );
    }
    return `${fromName() || 'VOLTRIS'} <${email}>`;
}

export interface ResendConfigStatus {
    configured: boolean;
    problems: string[];
}

/**
 * Diagnóstico da configuração. Usado na validação de startup, na rota de
 * diagnóstico e no painel admin — sempre devolve MOTIVO, nunca lança.
 */
export function getResendConfigStatus(): ResendConfigStatus {
    const problems: string[] = [];
    const email = fromEmail();

    if (!process.env.RESEND_API_KEY?.trim()) {
        problems.push('RESEND_API_KEY missing.');
    }
    if (!email) {
        problems.push('RESEND_FROM_EMAIL missing.');
    } else if (!isValidEmail(email)) {
        problems.push(`RESEND_FROM_EMAIL invalid: "${email}".`);
    }
    if (!fromName()) {
        problems.push('RESEND_FROM_NAME missing (used as the sender display name).');
    }
    if (email && !verifiedDomain().test(email)) {
        problems.push(`RESEND_FROM_EMAIL (${email}) is not on the verified international domain.`);
    }

    return { configured: problems.length === 0, problems };
}

/** Lança erro CONTROLADO quando a configuração não permite enviar. */
export function assertResendConfigured(): void {
    const status = getResendConfigStatus();
    if (!status.configured) {
        throw new ResendConfigError(status.problems.join(' '));
    }
}

export class ResendConfigError extends Error {
    readonly code = 'RESEND_NOT_CONFIGURED';
    constructor(message: string) {
        super(message);
        this.name = 'ResendConfigError';
    }
}

// ---------------------------------------------------------------------------
// Classificação de erro (a decisão de repetir ou desistir depende do tipo)
// ---------------------------------------------------------------------------

export type ResendFailureKind =
    | 'CONFIG'        // sem chave/remetente — repetir não muda nada
    | 'AUTH'          // 401/403 — chave inválida ou sem permissão
    | 'RATE_LIMIT'    // 429 — limite diário/mensal ou throttling
    | 'SENDER'        // 4xx de remetente/domínio — configuração do domínio
    | 'VALIDATION'    // 4xx de payload — bug ou dado inválido
    | 'TIMEOUT'       // abort por tempo
    | 'NETWORK'       // DNS/TLS/socket — transitório
    | 'SERVER'        // 5xx da Resend — transitório
    | 'UNKNOWN';

export interface ClassifiedResendError {
    kind: ResendFailureKind;
    /** true quando uma nova tentativa pode resolver. */
    retryable: boolean;
    /** Mensagem segura para log/BD — NUNCA contém a API key. */
    message: string;
    status?: number;
    /** `Retry-After` em segundos, quando a Resend enviar. */
    retryAfterSec?: number;
}

export function classifyResendError(error: unknown): ClassifiedResendError {
    if (error instanceof Error && (error.name === 'AbortError' || error.name === 'TimeoutError')) {
        return {
            kind: 'TIMEOUT',
            retryable: true,
            message: `Timed out after ${RESEND_TIMEOUT_MS}ms talking to Resend.`,
        };
    }

    const anyErr = error as {
        statusCode?: number;
        status?: number;
        message?: string;
        name?: string;
        retryAfter?: number;
        headers?: Record<string, string>;
    } | null;

    const status = anyErr?.statusCode ?? anyErr?.status;
    const rawMessage = String(anyErr?.message ?? 'unknown error');

    if (error instanceof ResendConfigError) {
        return { kind: 'CONFIG', retryable: false, message: rawMessage };
    }

    const safe = scrubSecrets(rawMessage);

    if (status === 401) {
        return { kind: 'AUTH', retryable: false, status, message: 'Resend rejected the credential (401). Check RESEND_API_KEY.' };
    }
    if (status === 403) {
        return { kind: 'AUTH', retryable: false, status, message: 'Resend denied permission (403). Check the key permissions.' };
    }
    if (status === 429) {
        const retryAfter = Number(anyErr?.retryAfter ?? anyErr?.headers?.['retry-after'] ?? '') || undefined;
        return {
            kind: 'RATE_LIMIT',
            retryable: true,
            status,
            retryAfterSec: retryAfter,
            message: 'Resend send limit reached (429).',
        };
    }
    if (status === 422) {
        // 422 costuma ser "sender not authorized" / domínio não verificado.
        return { kind: 'SENDER', retryable: false, status, message: `Resend refused the send (422): ${safe}` };
    }
    if (status && status >= 400 && status < 500) {
        return { kind: 'VALIDATION', retryable: false, status, message: `Payload rejected (${status}): ${safe}` };
    }
    if (status && status >= 500) {
        return { kind: 'SERVER', retryable: true, status, message: `Resend unavailable (${status}): ${safe}` };
    }

    if (error instanceof Error && /fetch failed|ENOTFOUND|ECONNREFUSED|ECONNRESET|EAI_AGAIN|certificate/i.test(error.message)) {
        return { kind: 'NETWORK', retryable: true, message: `Network failure contacting Resend: ${safe}` };
    }

    return { kind: 'UNKNOWN', retryable: true, message: safe };
}

/** Remove qualquer segredo que por ventura apareça numa mensagem de erro. */
export function scrubSecrets(message: string): string {
    const key = process.env.RESEND_API_KEY?.trim();
    let out = message;
    if (key) {
        out = out.split(key).join('[REDACTED]');
    }
    // Cobre o formato "re_xxxxx" mesmo sem a chave exata no texto.
    out = out.replace(/\bre_[A-Za-z0-9_]{10,}\b/g, '[REDACTED]');
    return out.slice(0, 500);
}

// ---------------------------------------------------------------------------
// Instância do SDK (uma por processo; o estado real vive no outbox)
// ---------------------------------------------------------------------------

let client: Resend | null = null;

export function getResend(): Resend {
    if (client) return client;
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
        throw new ResendConfigError('RESEND_API_KEY missing.');
    }
    client = new Resend(apiKey);
    return client;
}

export interface SendResult {
    ok: boolean;
    /** Id da mensagem na Resend (só existe se a API aceitou). */
    providerMessageId: string | null;
    error?: ClassifiedResendError;
    /** Mensagem de erro crua (sem segredo), quando houver. */
    errorMessage?: string;
}

/**
 * Chamada única de envio, já com timeout e classificação de erro. Devolve
 * SEMPRE um resultado estruturado — nunca lança por erro da Resend.
 */
export async function sendEmail(params: {
    to: string;
    subject: string;
    html: string;
    text?: string;
    /** Anexos (ex.: a fatura em PDF). */
    attachments?: Array<{ filename: string; content: Buffer }>;
    /** Tags usadas para rastrear/deduplicar no outbox. */
    tags?: Array<{ name: string; value: string }>;
    headers?: Record<string, string>;
    /** Chave de idempotência da Resend (evita reenvio do mesmo payload). */
    idempotencyKey?: string;
}): Promise<SendResult> {
    // 1. Destinatário válido: não gastar chamada da API com e-mail inválido.
    if (!isValidEmail(params.to)) {
        return {
            ok: false,
            providerMessageId: null,
            error: {
                kind: 'VALIDATION',
                retryable: false,
                message: 'Invalid recipient: send cancelled before calling the API.',
            },
        };
    }

    // 2. Configuração válida em runtime.
    try {
        assertResendConfigured();
    } catch (err) {
        const classified = classifyResendError(err);
        return { ok: false, providerMessageId: null, error: classified };
    }

    try {
        const resend = getResend();

        const sendPromise = resend.emails.send(
            {
                from: senderHeader(),
                to: [params.to],
                subject: params.subject,
                html: params.html,
                ...(params.text ? { text: params.text } : {}),
                ...(params.attachments?.length
                    ? {
                        attachments: params.attachments.map((a) => ({
                            filename: a.filename,
                            content: a.content.toString('base64'),
                        })),
                    }
                    : {}),
                ...(params.tags?.length ? { tags: params.tags } : {}),
                ...(params.headers ? { headers: params.headers } : {}),
            } as Parameters<typeof resend.emails.send>[0],
            params.idempotencyKey ? { idempotencyKey: params.idempotencyKey } : undefined,
        );

        // Timeout próprio. A corrida NÃO cancela o fetch subjacente, e é por isso
        // que a `idempotencyKey` é obrigatória na prática: se a Resend aceitar e a
        // resposta se perder, o retry reapresenta o MESMO payload e a Resend
        // devolve a mensagem já registrada em vez de enviar uma segunda.
        let timer: ReturnType<typeof setTimeout> | undefined;
        const timeoutPromise = new Promise<never>((_, reject) => {
            timer = setTimeout(() => {
                const err = new Error(`Resend did not respond in ${RESEND_TIMEOUT_MS}ms`);
                err.name = 'TimeoutError';
                reject(err);
            }, RESEND_TIMEOUT_MS);
        });

        let response;
        try {
            response = await Promise.race([sendPromise, timeoutPromise]);
        } finally {
            if (timer) clearTimeout(timer);
        }

        if (response.error) {
            const classified = classifyResendError(response.error);
            return {
                ok: false,
                providerMessageId: null,
                error: classified,
                errorMessage: scrubSecrets(JSON.stringify(response.error)),
            };
        }

        return { ok: true, providerMessageId: response.data?.id ?? null };
    } catch (err) {
        const classified = classifyResendError(err);
        return {
            ok: false,
            providerMessageId: null,
            error: classified,
            errorMessage: scrubSecrets(String((err as Error)?.message ?? err)),
        };
    }
}
