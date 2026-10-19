/**
 * TRANSACTIONAL EMAIL OUTBOX (VOLTRIS Internacional — missão FASE 14).
 *
 * Porta do VOLTRIS Brasil (arquitetura auditada/testada). É esta a peça que faz
 * "enviar e-mail" ser confiável, sustentada na regra da missão:
 *
 *   "A emissão da licença e a confirmação do pagamento NÃO podem depender de a
 *    Resend estar disponível."
 *
 * Desenho TRANSACIONAL-OUTBOX (não "enviar direto no webhook"):
 *   1. O webhook confirma o pagamento e emite a licença (caminho já testado).
 *   2. No MESMO passo, grava a intenção de e-mail na tabela `email_outbox`.
 *      Se a gravação falhar, a compra continua válida — só o aviso se atrasa.
 *   3. O worker pega as linhas pendentes, chama a Resend e grava o resultado.
 *   4. Falha transitória volta para `pending` com backoff até um teto; depois
 *      vira `failed` e fica visível no admin.
 *
 * Idempotência (o ponto mais delicado):
 *   - `idempotency_key` tem índice ÚNICO no banco: um segundo
 *     `checkout.session.completed` do mesmo evento vira no-op por conflito.
 *   - A MESMA chave vai como header `Idempotency-Key` para a Resend, cobrindo o
 *     caso em que a Resend aceita e a resposta se perde no caminho de volta.
 *   - A reserva da linha é um único `UPDATE ... WHERE status IN (...)` — sem
 *     SELECT-then-UPDATE, dois workers não mandam o mesmo e-mail.
 */

import type { SupabaseClient } from '@supabase/supabase-js';
import { createAdminClient } from '@/utils/supabase/admin';
import { sendEmail, isValidEmail, type ClassifiedResendError } from '@/lib/resend-client';
import {
    logSuccess,
    logWarn,
    logError,
    logInfo,
    maskEmail,
    type OperationContext,
} from '@/lib/voltris-log';

// ============================================================================
// TIPOS
// ============================================================================

export type EmailTemplateType =
    | 'purchase_confirmation'
    | 'subscription_renewed'
    | 'renewal_canceled'
    | 'refund_requested'
    | 'refund_processing'
    | 'refund_confirmed'
    | 'refund_failed'
    | 'payment_failed';

export type EmailOutboxStatus =
    | 'pending'      // aguardando envio (1ª tentativa ou retry programado)
    | 'processing'   // reservado por um worker (evita envio concorrente)
    | 'sent'         // a Resend ACEITOU (NÃO significa entregue na caixa)
    | 'failed'       // rejeitado definitivamente (credencial/remetente/payload)
    | 'canceled';    // cancelado de propósito (ex.: compra reclassificada)

export interface EnqueueInput {
    template: EmailTemplateType;
    /** E-mail do destinatário. Se ausente, é resolvido pelo userId. */
    to?: string | null;
    userId?: string | null;
    paymentId?: string | null;
    licenseKey?: string | null;
    subscriptionId?: string | null;
    /**
     * CHAVE DE IDEMPOTÊNCIA DO EVENTO LÓGICO. Determinística a partir do FATO
     * de negócio, nunca de Date.now()/Math.random(). Ex.: `purchase:<payment_id>`,
     * `renewal:<stripe_invoice_id>`, `cancel:<subscription_id>:<data>`.
     */
    idempotencyKey: string;
    /** Idioma já resolvido no momento da renderização (auditoria/reprocesso). */
    locale?: string | null;
    /** Dados já renderizados; evita re-renderizar e divergir do enviado. */
    subject: string;
    html: string;
    text: string;
    /** Anexo (a fatura em PDF), em bytes. */
    attachment?: { filename: string; content: Buffer } | null;
    /** Contexto para o admin (sem PII além do necessário). */
    meta?: Record<string, unknown>;
}

export interface EnqueueResult {
    queued: boolean;
    /** true quando já existia linha com a mesma chave (evento repetido). */
    duplicate: boolean;
    outboxId: string | null;
}

// ============================================================================
// FILA
// ============================================================================

/**
 * Grava a intenção de envio. NUNCA lança por falha de e-mail: uma exceção aqui
 * derrubaria a emissão da licença junto — exatamente o que a missão proíbe.
 */
export async function enqueueEmail(
    input: EnqueueInput,
    supabase: SupabaseClient = createAdminClient(),
    ctx?: OperationContext
): Promise<EnqueueResult> {
    try {
        let recipient = (input.to ?? '').trim();

        // Sem destinatário no payload: resolve pelo usuário. O e-mail é do cliente
        // e vem do banco (nunca do corpo de uma requisição).
        if (!recipient && input.userId) {
            const { data } = await supabase
                .from('profiles')
                .select('email')
                .eq('id', input.userId)
                .maybeSingle();
            recipient = (data?.email ?? '').trim();
        }

        if (!isValidEmail(recipient)) {
            logWarn(ctx ?? fallbackCtx('EMAIL_ENQUEUE'), 'invalid recipient — nothing enqueued', {
                userId: input.userId ?? null,
                template: input.template,
            });
            return { queued: false, duplicate: false, outboxId: null };
        }

        const { data, error } = await supabase
            .from('email_outbox')
            .insert({
                template_type: input.template,
                idempotency_key: input.idempotencyKey,
                recipient_email: recipient,
                user_id: input.userId ?? null,
                payment_id: input.paymentId ?? null,
                license_key: input.licenseKey ?? null,
                subscription_id: input.subscriptionId ?? null,
                locale: input.locale ?? null,
                subject: input.subject.slice(0, 300),
                html_body: input.html,
                text_body: input.text,
                attachment_name: input.attachment?.filename ?? null,
                attachment_content: input.attachment
                    ? Buffer.from(input.attachment.content).toString('base64')
                    : null,
                attachment_size: input.attachment?.content.length ?? null,
                status: 'pending',
                attempts: 0,
                meta: input.meta ?? null,
                available_at: new Date().toISOString(),
            })
            .select('id')
            .single();

        if (error) {
            // 23505 = já existe linha com esta chave. Caminho ESPERADO quando a
            // Stripe reenvia um webhook: o e-mail já foi (ou será) enviado.
            if (error.code === '23505' || /duplicate key/i.test(error.message)) {
                logInfo(ctx ?? fallbackCtx('EMAIL_ENQUEUE'), 'duplicate event — outbox already holds the key', {
                    key: input.idempotencyKey,
                    template: input.template,
                });
                return { queued: true, duplicate: true, outboxId: null };
            }

            logError(ctx ?? fallbackCtx('EMAIL_ENQUEUE'), 'failed to write to outbox', {
                error: error.message,
                template: input.template,
                key: input.idempotencyKey,
            });
            return { queued: false, duplicate: false, outboxId: null };
        }

        logSuccess(ctx ?? fallbackCtx('EMAIL_ENQUEUE'), 'email enqueued', {
            template: input.template,
            to: maskEmail(recipient),
            key: input.idempotencyKey,
        });

        return { queued: true, duplicate: false, outboxId: (data as { id: string }).id };
    } catch (err: any) {
        // Última linha de defesa: o e-mail NUNCA derruba o fluxo comercial.
        logError(ctx ?? fallbackCtx('EMAIL_ENQUEUE'), 'exception while enqueueing email', {
            error: String(err?.message ?? err).slice(0, 200),
            template: input.template,
        });
        return { queued: false, duplicate: false, outboxId: null };
    }
}

// ============================================================================
// WORKER
// ============================================================================

export const MAX_ATTEMPTS = 5;

/**
 * Backoff exponencial COM JITTER. Sem jitter, N linhas que falharam juntas
 * (indisponibilidade da Resend) voltam no mesmo instante e repetem a rajada.
 */
export function backoffMs(attempt: number, retryAfterSec?: number): number {
    if (retryAfterSec && retryAfterSec > 0) return retryAfterSec * 1000;
    const base = Math.min(2 ** (attempt - 1) * 60_000, 6 * 60 * 60_000); // máx. 6 h
    const jitter = Math.floor(base * 0.3 * Math.random());
    return base + jitter;
}

export interface ProcessResult {
    processed: number;
    sent: number;
    failed: number;
    retried: number;
    skipped: number;
}

interface OutboxRow {
    id: string;
    template_type: string;
    idempotency_key: string;
    recipient_email: string;
    subject: string;
    html_body: string;
    text_body: string | null;
    attachment_name: string | null;
    attachment_content: string | null;
    payment_id: string | null;
    license_key: string | null;
    subscription_id: string | null;
    user_id: string | null;
    attempts: number;
    status: string;
    meta: Record<string, unknown> | null;
    available_at: string | null;
    created_at: string;
}

/**
 * Processa a fila. Seguro para chamar em paralelo: a reserva da linha é atômica.
 *
 * @param limit teto de linhas por passagem (protege o tempo da função serverless)
 */
export async function processOutbox(
    limit = 10,
    supabase: SupabaseClient = createAdminClient(),
    ctx?: OperationContext
): Promise<ProcessResult> {
    const opCtx = ctx ?? fallbackCtx('EMAIL_WORKER');
    const result: ProcessResult = { processed: 0, sent: 0, failed: 0, retried: 0, skipped: 0 };

    // Reserva atômica: só o worker que marcar `processing` envia. `.in(...)` +
    // `available_at <= now` cobre fila nova E recuperação de linhas presas em
    // 'processing' por um worker que morreu.
    const { data: claimed, error: claimErr } = await supabase
        .from('email_outbox')
        .update({ status: 'processing', updated_at: new Date().toISOString() })
        .in('status', ['pending', 'processing'])
        .lte('available_at', new Date().toISOString())
        .or(`status.eq.pending,updated_at.lt.${new Date(Date.now() - 5 * 60_000).toISOString()}`)
        .order('available_at', { ascending: true })
        .limit(limit)
        .select('*');

    if (claimErr) {
        logError(opCtx, 'could not claim outbox rows', { error: claimErr.message });
        return result;
    }

    const rows = (claimed ?? []) as OutboxRow[];

    for (const row of rows) {
        result.processed += 1;
        try {
            const attempts = (row.attempts ?? 0) + 1;

            const send = await sendEmail({
                to: row.recipient_email,
                subject: row.subject,
                html: row.html_body,
                ...(row.text_body ? { text: row.text_body } : {}),
                ...(row.attachment_name && row.attachment_content
                    ? {
                        attachments: [{
                            filename: row.attachment_name,
                            content: Buffer.from(row.attachment_content, 'base64'),
                        }],
                    }
                    : {}),
                idempotencyKey: row.idempotency_key,
                tags: [
                    { name: 'template', value: row.template_type },
                    ...(row.payment_id ? [{ name: 'payment', value: row.payment_id }] : []),
                ],
            });

            if (send.ok) {
                await supabase.from('email_outbox').update({
                    status: 'sent',
                    provider_message_id: send.providerMessageId,
                    sent_at: new Date().toISOString(),
                    attempts,
                    last_error: null,
                    updated_at: new Date().toISOString(),
                }).eq('id', row.id);
                result.sent += 1;
                logSuccess(opCtx, 'email accepted by Resend', {
                    template: row.template_type,
                    to: maskEmail(row.recipient_email),
                    provider_id: send.providerMessageId,
                });
                continue;
            }

            const err: ClassifiedResendError | undefined = send.error;
            const exhausted = attempts >= MAX_ATTEMPTS;

            if (!err?.retryable || exhausted) {
                await supabase.from('email_outbox').update({
                    status: 'failed',
                    attempts,
                    last_error: (err?.message ?? 'unknown error').slice(0, 500),
                    last_error_kind: err?.kind ?? 'UNKNOWN',
                    updated_at: new Date().toISOString(),
                }).eq('id', row.id);
                result.failed += 1;
                logError(opCtx, 'email failed permanently', {
                    template: row.template_type,
                    to: maskEmail(row.recipient_email),
                    kind: err?.kind,
                    attempts,
                });
                continue;
            }

            const wait = backoffMs(attempts, err?.retryAfterSec);
            await supabase.from('email_outbox').update({
                status: 'pending',
                attempts,
                last_error: (err?.message ?? 'unknown error').slice(0, 500),
                last_error_kind: err?.kind ?? 'UNKNOWN',
                available_at: new Date(Date.now() + wait).toISOString(),
                updated_at: new Date().toISOString(),
            }).eq('id', row.id);
            result.retried += 1;
            logWarn(opCtx, 'email failed transiently — rescheduled', {
                template: row.template_type,
                kind: err?.kind,
                attempts,
                retry_in_ms: wait,
            });
        } catch (err: any) {
            // Um erro aqui é bug nosso, não da Resend. A linha volta para a fila
            // em vez de ficar presa em 'processing' para sempre.
            result.skipped += 1;
            logError(opCtx, 'error processing outbox row', {
                outbox_id: row.id,
                error: String(err?.message ?? err).slice(0, 200),
            });
            await supabase.from('email_outbox').update({
                status: 'pending',
                last_error: String(err?.message ?? err).slice(0, 500),
                available_at: new Date(Date.now() + 60_000).toISOString(),
                updated_at: new Date().toISOString(),
            }).eq('id', row.id);
        }
    }

    return result;
}

/**
 * Reenvio manual e AUDITADO. Não reutiliza a `idempotency_key` original de
 * propósito (se usasse, a Resend recusaria como duplicata e nada seria enviado).
 */
export async function resendOutboxEmail(
    outboxId: string,
    adminUserId: string
): Promise<{ ok: boolean; error?: string }> {
    const ctx = fallbackCtx('EMAIL_RESEND');
    const supabase = createAdminClient();

    const { data: row, error } = await supabase
        .from('email_outbox')
        .select('*')
        .eq('id', outboxId)
        .maybeSingle();

    if (error || !row) {
        return { ok: false, error: 'Record not found.' };
    }

    const r = row as OutboxRow;

    if (r.status === 'sent') {
        return { ok: false, error: 'This email was already accepted by Resend. Resending would create a duplicate.' };
    }

    const newKey = `${r.idempotency_key}.resend:${Date.now()}`;

    const result = await enqueueEmail(
        {
            template: r.template_type as EmailTemplateType,
            to: r.recipient_email,
            idempotencyKey: newKey,
            subject: r.subject,
            html: r.html_body,
            text: r.text_body ?? '',
            paymentId: null,
            attachment: r.attachment_name && r.attachment_content
                ? { filename: r.attachment_name, content: Buffer.from(r.attachment_content, 'base64') }
                : null,
            meta: {
                manual_resend: true,
                original_outbox_id: outboxId,
                requested_by: adminUserId,
            },
        },
        supabase,
        ctx
    );

    if (!result.queued) {
        return { ok: false, error: 'Could not enqueue the resend.' };
    }

    await supabase.from('email_outbox').update({
        status: 'canceled',
        last_error: 'Manually resent by administrator.',
        meta: { ...(r.meta ?? {}), manual_resend: true },
        updated_at: new Date().toISOString(),
    }).eq('id', outboxId);

    await supabase.from('audit_logs').insert({
        event_type: 'EMAIL_MANUAL_RESEND',
        metadata: {
            outbox_id: outboxId,
            template: r.template_type,
            admin_user_id: adminUserId,
            at: new Date().toISOString(),
        },
    });

    logSuccess(ctx, 'manual resend enqueued', { outbox_id: outboxId, admin: adminUserId });
    return { ok: true };
}

// ============================================================================
// DIAGNÓSTICO
// ============================================================================

export interface OutboxStats {
    pending: number;
    processing: number;
    sent: number;
    failed: number;
    canceled: number;
    oldestPendingMinutes: number | null;
    backlogWarning: boolean;
}

/** Acima disso a fila não está "atrasada", está PRESA. */
const BACKLOG_WARNING_MINUTES = 30;

export async function getOutboxStats(supabase: SupabaseClient = createAdminClient()): Promise<OutboxStats> {
    const { data } = await supabase.from('email_outbox').select('status, available_at, created_at').limit(5000);
    const rows = (data ?? []) as Array<{ status: string; available_at: string; created_at: string }>;

    const stats: OutboxStats = {
        pending: 0, processing: 0, sent: 0, failed: 0, canceled: 0,
        oldestPendingMinutes: null,
        backlogWarning: false,
    };

    let oldest: number | null = null;
    for (const r of rows) {
        if (r.status === 'pending') {
            stats.pending += 1;
            const t = new Date(r.created_at).getTime();
            if (Number.isFinite(t) && (oldest === null || t < oldest)) oldest = t;
        } else if (r.status === 'processing') stats.processing += 1;
        else if (r.status === 'sent') stats.sent += 1;
        else if (r.status === 'failed') stats.failed += 1;
        else if (r.status === 'canceled') stats.canceled += 1;
    }

    stats.oldestPendingMinutes =
        oldest === null ? null : Math.floor((Date.now() - oldest) / 60_000);

    stats.backlogWarning =
        stats.oldestPendingMinutes !== null && stats.oldestPendingMinutes >= BACKLOG_WARNING_MINUTES;

    return stats;
}

/** Ctx descartável para quando o chamador não tem um (uso pontual). */
function fallbackCtx(operation: 'EMAIL_ENQUEUE' | 'EMAIL_WORKER' | 'EMAIL_RESEND'): OperationContext {
    return {
        correlationId: `${operation}-${Date.now().toString(36)}`,
        operation,
        startedAt: Date.now(),
        meta: {},
    };
}
