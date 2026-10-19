/**
 * Dispatcher de e-mails de cobrança (FASE 10/11/12/13 da missão VOLTRIS
 * INTERNACIONAL).
 *
 * Camada fina entre os handlers do webhook Stripe e o `enqueueEmail` do
 * outbox já existente. Responsabilidades:
 *
 *  1. Resolver locale (perfil > metadata > payment email > 'en') **antes** de
 *     renderizar — a chave de idempotência precisa ser estável e o locale é
 *     parte do payload gravado.
 *  2. Montar o `InvoiceData` via `buildInvoiceData` com o payment row que o
 *     webhook já buscou (uma ida ao banco só).
 *  3. Chamar o renderer certo (`renderPurchaseEmail`, `renderRenewalEmail`,
 *     `renderPastDueEmail`, `renderCancellationEmail`, `renderRefundEmail`).
 *  4. Gravar no outbox com `idempotencyKey` **determinística por FATO**
 *     (`purchase:<payment_id>`, `renewal:<stripe_invoice_id>`,
 *     `past-due:<stripe_invoice_id>`, `cancel:<subscription_id>`,
 *     `refund:<payment_id>`). Nunca Date.now().
 *
 * Este dispatcher NUNCA lança. Uma exceção aqui derrubaria a emissão da
 * licença junto. Se algo falhar, logamos `EMAIL_ENQUEUE` em warn e saímos
 * com `{queued:false, duplicate:false, outboxId:null}` — a compra continua
 * válida, só o e-mail fica para o admin reprocessar.
 */

import type { SupabaseClient } from '@supabase/supabase-js';
import { createAdminClient } from '@/utils/supabase/admin';
import {
    enqueueEmail,
    type EnqueueResult,
    type EmailTemplateType,
} from './email-outbox';
import { buildInvoiceData, type PaymentRow, type LicenseRow, type CustomerProfileRow } from './invoice-data';
import {
    renderPurchaseEmail,
    renderRenewalEmail,
    renderPastDueEmail,
    renderCancellationEmail,
    renderRefundEmail,
} from './email-billing-templates';
import { normalizeLocale, DEFAULT_LOCALE, type Locale } from './locale.ts';
import { logWarn, logError, maskEmail, startOperation, type OperationContext } from './voltris-log';

/**
 * Garante um ctx mesmo quando o chamador não passou — os renders de e-mail
 * podem lançar por dados quebrados, e esses caminhos precisam chegar ao log
 * estruturado. Uma linha só por dispatch.
 */
function ensureCtx(ctx: OperationContext | undefined, refId: string): OperationContext {
    return ctx ?? startOperation('EMAIL_ENQUEUE', refId);
}

// ---------------------------------------------------------------------------
// Tipos de entrada
// ---------------------------------------------------------------------------

export interface DispatchPurchaseInput {
    payment: PaymentRow;
    profile?: CustomerProfileRow | null;
    license?: LicenseRow | null;
    requestedLocale?: string | null;
    /** URL pública do PDF; vem do webhook (site base + payment id). */
    downloadUrl: string;
    ctx?: OperationContext;
}

export interface DispatchRenewalInput extends DispatchPurchaseInput {
    /** `invoice.id` da Stripe — chave determinística da renovação. */
    stripeInvoiceId: string;
}

export interface DispatchPastDueInput {
    payment: PaymentRow;
    profile?: CustomerProfileRow | null;
    stripeInvoiceId: string;
    billingPortalUrl?: string | null;
    ctx?: OperationContext;
}

export interface DispatchCancellationInput {
    payment: PaymentRow;
    profile?: CustomerProfileRow | null;
    license?: LicenseRow | null;
    /** Subscription id da Stripe que encerrou. */
    stripeSubscriptionId: string;
    ctx?: OperationContext;
}

export interface DispatchRefundInput {
    payment: PaymentRow;
    profile?: CustomerProfileRow | null;
    license?: LicenseRow | null;
    ctx?: OperationContext;
}

// ---------------------------------------------------------------------------
// Helpers internos
// ---------------------------------------------------------------------------

function resolveLocaleFor(
    input: { requestedLocale?: string | null; profile?: CustomerProfileRow | null },
): Locale {
    const candidates = [input.requestedLocale, input.profile?.preferred_locale ?? null];
    for (const c of candidates) {
        if (!c) continue;
        const n = normalizeLocale(c);
        if (n && n !== DEFAULT_LOCALE) return n as Locale;
        // 'en' explícito ainda é válido; retorna direto.
        if (String(c).toLowerCase() === 'en') return 'en';
    }
    return DEFAULT_LOCALE as Locale;
}

function buildBaseUrl(): string {
    const s = (process.env.NEXT_PUBLIC_BASE_URL || 'https://www.voltrisoptimizer.com').replace(/\/$/, '');
    return s;
}

/** Chave de download pública do PDF — mesma usada no botão do e-mail. */
function invoiceDownloadUrl(paymentId: string): string {
    return `${buildBaseUrl()}/api/invoices/${paymentId}/download`;
}

/**
 * Carrega profile + license no banco se o caller não os passou. Uma query por
 * campo; o webhook já roda dentro de uma transação lógica, e uma falha aqui
 * só impede o e-mail (a licença continua emitida).
 */
async function loadProfile(supabase: SupabaseClient, userId: string | null): Promise<CustomerProfileRow | null> {
    if (!userId) return null;
    try {
        const { data } = await supabase
            .from('profiles')
            .select('id, full_name, email, preferred_locale')
            .eq('id', userId)
            .maybeSingle<CustomerProfileRow>();
        return data ?? null;
    } catch {
        return null;
    }
}

async function loadLicense(supabase: SupabaseClient, paymentId: string): Promise<LicenseRow | null> {
    try {
        const { data } = await supabase
            .from('licenses')
            .select('license_key, expires_at')
            .eq('payment_id', paymentId)
            .maybeSingle<LicenseRow>();
        return data ?? null;
    } catch {
        return null;
    }
}

// ---------------------------------------------------------------------------
// APIs públicas (uma por FATO de negócio)
// ---------------------------------------------------------------------------

export async function dispatchPurchaseEmail(
    input: DispatchPurchaseInput,
    supabase: SupabaseClient = createAdminClient(),
): Promise<EnqueueResult> {
    const locale = resolveLocaleFor(input);
    const dl = input.downloadUrl || invoiceDownloadUrl(input.payment.id);
    const invoice = buildInvoiceData({
        payment: input.payment,
        profile: input.profile ?? null,
        license: input.license ?? null,
        requestedLocale: locale,
        downloadUrl: dl,
    });
    let rendered: ReturnType<typeof renderPurchaseEmail>;
    try {
        rendered = renderPurchaseEmail({
            invoice,
            locale,
            firstName: input.profile?.full_name ?? null,
        });
    } catch (err: any) {
        logWarn(ensureCtx(input.ctx, input.payment.id), 'render purchase falhou; e-mail não enfileirado', {
            error: err?.message ?? String(err),
            payment: input.payment.id,
        });
        return { queued: false, duplicate: false, outboxId: null };
    }

    return enqueueEmail({
        template: 'purchase_confirmation' as EmailTemplateType,
        to: input.payment.email ?? input.profile?.email ?? null,
        userId: input.payment.user_id ?? input.profile?.id ?? null,
        paymentId: input.payment.id,
        licenseKey: input.license?.license_key ?? null,
        idempotencyKey: `purchase:${input.payment.id}`,
        locale,
        subject: rendered.subject,
        html: rendered.html,
        text: rendered.text,
        meta: {
            invoice_number: invoice.invoiceNumber,
            currency: invoice.currency,
            direction: rendered.direction,
        },
    }, supabase, input.ctx);
}

export async function dispatchRenewalEmail(
    input: DispatchRenewalInput,
    supabase: SupabaseClient = createAdminClient(),
): Promise<EnqueueResult> {
    const locale = resolveLocaleFor(input);
    const dl = input.downloadUrl || invoiceDownloadUrl(input.payment.id);
    const invoice = buildInvoiceData({
        payment: input.payment,
        profile: input.profile ?? null,
        license: input.license ?? null,
        requestedLocale: locale,
        downloadUrl: dl,
    });
    try {
        const rendered = renderRenewalEmail({
            invoice,
            locale,
            firstName: input.profile?.full_name ?? null,
        });
        return enqueueEmail({
            template: 'subscription_renewed' as EmailTemplateType,
            to: input.payment.email ?? input.profile?.email ?? null,
            userId: input.payment.user_id ?? input.profile?.id ?? null,
            paymentId: input.payment.id,
            licenseKey: input.license?.license_key ?? null,
            idempotencyKey: `renewal:${input.stripeInvoiceId}`,
            locale,
            subject: rendered.subject,
            html: rendered.html,
            text: rendered.text,
            meta: { invoice_number: invoice.invoiceNumber, currency: invoice.currency },
        }, supabase, input.ctx);
    } catch (err: any) {
        logWarn(ensureCtx(input.ctx, input.payment.id), 'render renewal falhou; e-mail não enfileirado', {
            error: err?.message ?? String(err),
            payment: input.payment.id,
        });
        return { queued: false, duplicate: false, outboxId: null };
    }
}

export async function dispatchPastDueEmail(
    input: DispatchPastDueInput,
    supabase: SupabaseClient = createAdminClient(),
): Promise<EnqueueResult> {
    const locale = resolveLocaleFor(input);
    const invoice = buildInvoiceData({
        payment: input.payment,
        profile: input.profile ?? null,
        requestedLocale: locale,
        downloadUrl: invoiceDownloadUrl(input.payment.id),
    });
    try {
        const rendered = renderPastDueEmail({
            invoice,
            locale,
            firstName: input.profile?.full_name ?? null,
            billingPortalUrl: input.billingPortalUrl ?? null,
        });
        return enqueueEmail({
            template: 'payment_failed' as EmailTemplateType,
            to: input.payment.email ?? input.profile?.email ?? null,
            userId: input.payment.user_id ?? input.profile?.id ?? null,
            paymentId: input.payment.id,
            idempotencyKey: `past-due:${input.stripeInvoiceId}`,
            locale,
            subject: rendered.subject,
            html: rendered.html,
            text: rendered.text,
            meta: { invoice_number: invoice.invoiceNumber, currency: invoice.currency },
        }, supabase, input.ctx);
    } catch (err: any) {
        logWarn(ensureCtx(input.ctx, input.payment.id), 'render past-due falhou; e-mail não enfileirado', {
            error: err?.message ?? String(err),
            payment: input.payment.id,
        });
        return { queued: false, duplicate: false, outboxId: null };
    }
}

export async function dispatchCancellationEmail(
    input: DispatchCancellationInput,
    supabase: SupabaseClient = createAdminClient(),
): Promise<EnqueueResult> {
    const locale = resolveLocaleFor(input);
    const invoice = buildInvoiceData({
        payment: input.payment,
        profile: input.profile ?? null,
        license: input.license ?? null,
        requestedLocale: locale,
        downloadUrl: invoiceDownloadUrl(input.payment.id),
        licenseRevoked: true,
    });
    try {
        const rendered = renderCancellationEmail({
            invoice,
            locale,
            firstName: input.profile?.full_name ?? null,
        });
        // Idempotência por subscription: uma linha por cancelamento. Se a
        // Stripe reenviar o evento, o outbox trata como duplicate.
        return enqueueEmail({
            template: 'renewal_canceled' as EmailTemplateType,
            to: input.payment.email ?? input.profile?.email ?? null,
            userId: input.payment.user_id ?? input.profile?.id ?? null,
            paymentId: input.payment.id,
            subscriptionId: input.stripeSubscriptionId,
            idempotencyKey: `cancel:${input.stripeSubscriptionId}`,
            locale,
            subject: rendered.subject,
            html: rendered.html,
            text: rendered.text,
            meta: { invoice_number: invoice.invoiceNumber },
        }, supabase, input.ctx);
    } catch (err: any) {
        logWarn(ensureCtx(input.ctx, input.payment.id), 'render cancellation falhou; e-mail não enfileirado', {
            error: err?.message ?? String(err),
            payment: input.payment.id,
        });
        return { queued: false, duplicate: false, outboxId: null };
    }
}

export async function dispatchRefundEmail(
    input: DispatchRefundInput,
    supabase: SupabaseClient = createAdminClient(),
): Promise<EnqueueResult> {
    const locale = resolveLocaleFor(input);
    const invoice = buildInvoiceData({
        payment: input.payment,
        profile: input.profile ?? null,
        license: input.license ?? null,
        requestedLocale: locale,
        downloadUrl: invoiceDownloadUrl(input.payment.id),
    });
    try {
        const rendered = renderRefundEmail({
            invoice,
            locale,
            firstName: input.profile?.full_name ?? null,
        });
        return enqueueEmail({
            template: 'refund_confirmed' as EmailTemplateType,
            to: input.payment.email ?? input.profile?.email ?? null,
            userId: input.payment.user_id ?? input.profile?.id ?? null,
            paymentId: input.payment.id,
            idempotencyKey: `refund:${input.payment.id}`,
            locale,
            subject: rendered.subject,
            html: rendered.html,
            text: rendered.text,
            meta: { invoice_number: invoice.invoiceNumber, currency: invoice.currency },
        }, supabase, input.ctx);
    } catch (err: any) {
        logWarn(ensureCtx(input.ctx, input.payment.id), 'render refund falhou; e-mail não enfileirado', {
            error: err?.message ?? String(err),
            payment: input.payment.id,
            recipient: maskEmail(input.payment.email ?? null),
        });
        return { queued: false, duplicate: false, outboxId: null };
    }
}

/**
 * Wrapper "carrega o que falta e chama". Usado no webhook para o caso em que
 * só se tem o `payment.id` (renovações: a gente já tem tudo em mãos).
 */
export async function dispatchPurchaseEmailLoadingExtras(
    base: Omit<DispatchPurchaseInput, 'profile' | 'license' | 'downloadUrl'> & { downloadUrl?: string },
    supabase: SupabaseClient = createAdminClient(),
): Promise<EnqueueResult> {
    const profile = base.payment.user_id ? await loadProfile(supabase, base.payment.user_id) : null;
    const license = await loadLicense(supabase, base.payment.id);
    return dispatchPurchaseEmail({
        ...base,
        profile,
        license,
        downloadUrl: base.downloadUrl ?? invoiceDownloadUrl(base.payment.id),
    }, supabase);
}
