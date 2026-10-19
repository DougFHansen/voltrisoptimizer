/**
 * Builder puro que transforma o estado do banco em um `InvoiceData` pronto para
 * o renderer do PDF e para o corpo do e-mail (FASE 8/9/10 da missão VOLTRIS
 * INTERNACIONAL).
 *
 * Por que "puro": o renderer precisa de strings formatadas por locale
 * (moeda + data), mas não pode depender do Next nem do Supabase — só do
 * snapshot. Isso deixa o teste rodar com `node --test` sem montar servidor.
 *
 * Regras:
 *  - **Nunca inventa** valor, data, chave ou nome. Campo ausente vira `'—'`.
 *  - Moeda vem SEMPRE do payment row (fonte de verdade da Stripe). Locale é
 *    só formatação.
 *  - Status `refunded`/`past_due`/`canceled` muda o selo do PDF, mas não a
 *    linha — a linha sempre é o FATO cobrado.
 *  - Invoice number determinístico por payment.id (UUID truncado em 8 chars).
 */

import type { Locale } from './locale.ts';
import { LOCALE_META, DEFAULT_LOCALE } from './locale.ts';
import {
    LICENSE_PLANS,
    type PlanType,
    type BillingPeriod,
    type Currency,
    currencyForLocale,
} from './license-catalog.ts';
import {
    getCompanyInfoIntl,
    formatAddressOneLine,
    type CompanyInfoIntl,
} from './company-intl.ts';

/** Subconjunto da tabela `payments` que a fatura consome. */
export interface PaymentRow {
    id: string;
    reference_id: string | null;
    provider: string | null;
    stripe_id: string | null;
    status: string | null;
    user_id: string | null;
    email: string | null;
    plan_type: string | null;
    billing_period: string | null;
    amount: number | string | null;
    currency: string | null;
    created_at: string | null;
    /** Periodo de servico efetivo; opcional — vem do license row quando existe. */
    service_start?: string | null;
    service_end?: string | null;
}

/** Subconjunto da tabela `licenses` para expor chave + vencimento. */
export interface LicenseRow {
    license_key: string | null;
    expires_at: string | null;
}

/** Subconjunto de `profiles` para nome do cliente. */
export interface CustomerProfileRow {
    id: string;
    full_name: string | null;
    email: string | null;
    preferred_locale?: string | null;
}

export type InvoiceStatus = 'paid' | 'pending' | 'refunded' | 'past_due' | 'canceled';

export interface InvoiceLineItem {
    description: string;
    quantity: number;
    /** Valor cheio (não menor unidade). */
    unitPrice: number;
    lineTotal: number;
}

export interface InvoiceData {
    invoiceNumber: string;
    issueDateISO: string;
    dueDateISO: string;
    periodStartISO: string | null;
    periodEndISO: string | null;
    currency: Currency;
    /** Locale efetivo para formatação de moeda + data + rótulos. */
    locale: Locale;
    status: InvoiceStatus;
    customerName: string;
    customerEmail: string;
    planKey: PlanType | null;
    planDisplayName: string;
    billingPeriodLabel: string;
    lineItems: InvoiceLineItem[];
    subtotal: number;
    tax: number;
    totalDue: number;
    licenseKey: string | null;
    licenseExpiresISO: string | null;
    company: CompanyInfoIntl;
    companyAddressLine: string;
    supportEmail: string;
    /** URL do PDF; presente quando a rota de download está disponível. */
    downloadUrl: string | null;
}

const DASH = '—';

// ---------------------------------------------------------------------------
// Helpers de parsing/normalização
// ---------------------------------------------------------------------------

function toNumber(v: number | string | null | undefined, fallback = 0): number {
    if (typeof v === 'number' && Number.isFinite(v)) return v;
    if (typeof v === 'string') {
        const n = Number(v);
        if (Number.isFinite(n)) return n;
    }
    return fallback;
}

function mapStatus(pay: PaymentRow['status'], license?: { revoked?: boolean } | null): InvoiceStatus {
    if (license?.revoked) return 'canceled';
    const s = (pay ?? '').toLowerCase();
    if (s === 'refunded') return 'refunded';
    if (s === 'approved' || s === 'paid' || s === 'succeeded') return 'paid';
    if (s === 'past_due') return 'past_due';
    if (s === 'failed' || s === 'canceled' || s === 'cancelled') return 'canceled';
    return 'pending';
}

function resolveLocale(input: {
    requestedLocale?: string | null;
    profileLocale?: string | null;
    customerEmail?: string | null;
}): Locale {
    const candidates = [input.requestedLocale, input.profileLocale];
    for (const c of candidates) {
        if (!c) continue;
        const v = String(c).toLowerCase();
        if ((LOCALE_META as Record<string, unknown>)[v]) return v as Locale;
    }
    return DEFAULT_LOCALE;
}

function resolveCurrency(pay: PaymentRow, locale: Locale): Currency {
    const raw = (pay.currency ?? '').toString().toLowerCase();
    if (raw && ['usd', 'eur', 'brl', 'jpy', 'krw', 'pln'].includes(raw)) {
        return raw as Currency;
    }
    return currencyForLocale(locale);
}

function truncateId(id: string): string {
    // UUID vem com hífens; sem eles, 8 chars bastam para legibilidade.
    const clean = id.replace(/-/g, '').toUpperCase();
    return clean.slice(0, 8);
}

function computeDueDate(issueISO: string): string {
    // Fatura internacional padrão: net 7 dias. É o suficiente para cartão
    // (Stripe cobra na hora) e deixa margem para PIX-like offline se vier.
    const d = new Date(issueISO);
    d.setUTCDate(d.getUTCDate() + 7);
    return d.toISOString();
}

function planBillingLabel(period: string | null | undefined): string {
    if (period === 'year') return 'Annual';
    if (period === 'month') return 'Monthly';
    return DASH;
}

function planDescription(planKey: PlanType | null, period: BillingPeriod | null): string {
    if (!planKey) return 'Voltris License';
    const base = LICENSE_PLANS[planKey]?.displayName ?? 'Voltris License';
    if (!period) return base;
    return `${base} — ${planBillingLabel(period)}`;
}

// ---------------------------------------------------------------------------
// Render helpers (exportados para o PDF/e-mail usarem as mesmas strings)
// ---------------------------------------------------------------------------

/**
 * Formata número na moeda do locale. Retorna `'—'` se o número não for finito.
 * JPY/KRW nunca mostram casas decimais — o Intl cuida disso automaticamente
 * a partir do código ISO da moeda.
 */
export function formatMoney(value: number, currency: Currency, locale: Locale): string {
    if (!Number.isFinite(value)) return DASH;
    try {
        return new Intl.NumberFormat(LOCALE_META[locale].intl, {
            style: 'currency',
            currency: currency.toUpperCase(),
        }).format(value);
    } catch {
        // Fallback se o runtime Node não tiver o locale embutido (ICU small).
        return `${currency.toUpperCase()} ${value.toFixed(2)}`;
    }
}

export function formatDate(iso: string | null | undefined, locale: Locale): string {
    if (!iso) return DASH;
    const t = new Date(iso).getTime();
    if (!Number.isFinite(t)) return DASH;
    try {
        return new Intl.DateTimeFormat(LOCALE_META[locale].intl, {
            year: 'numeric', month: 'short', day: '2-digit',
        }).format(new Date(t));
    } catch {
        return iso.slice(0, 10);
    }
}

export function formatDateRange(
    startISO: string | null | undefined,
    endISO: string | null | undefined,
    locale: Locale,
): string {
    if (!startISO && !endISO) return DASH;
    const a = formatDate(startISO, locale);
    const b = formatDate(endISO, locale);
    if (a === DASH) return b;
    if (b === DASH) return a;
    return `${a} → ${b}`;
}

// ---------------------------------------------------------------------------
// Builder
// ---------------------------------------------------------------------------

export interface BuildInvoiceInput {
    payment: PaymentRow;
    profile?: CustomerProfileRow | null;
    license?: LicenseRow | null;
    /** Locale explícito (ex.: query string do download) tem precedência. */
    requestedLocale?: string | null;
    company?: CompanyInfoIntl;
    supportEmail?: string;
    downloadUrl?: string | null;
    /** Estado de revogação (vindo de `licenses.revoked`). */
    licenseRevoked?: boolean;
}

/**
 * Constrói o documento. Não lança — sempre devolve algo imprimível. Se vier
 * dado faltante, aparece `'—'`; se vier inconsistente, prioriza o payment
 * row (fonte Stripe) sobre qualquer input do cliente.
 */
export function buildInvoiceData(input: BuildInvoiceInput): InvoiceData {
    const { payment, profile, license } = input;
    const company = input.company ?? getCompanyInfoIntl();
    const supportEmail = input.supportEmail ?? company.email;

    const locale = resolveLocale({
        requestedLocale: input.requestedLocale,
        profileLocale: profile?.preferred_locale ?? null,
        customerEmail: payment.email ?? profile?.email ?? null,
    });

    const currency = resolveCurrency(payment, locale);
    const status = mapStatus(payment.status, input.licenseRevoked ? { revoked: true } : null);

    const planKey: PlanType | null =
        payment.plan_type && payment.plan_type in LICENSE_PLANS
            ? (payment.plan_type as PlanType)
            : null;
    const planDisplayName = planKey
        ? LICENSE_PLANS[planKey].displayName
        : payment.plan_type ?? DASH;
    const billingPeriod: BillingPeriod | null =
        payment.billing_period === 'year' || payment.billing_period === 'month'
            ? payment.billing_period
            : null;
    const billingPeriodLabel = planBillingLabel(billingPeriod);

    const amountFull = toNumber(payment.amount, 0);
    // Imposto = 0 no modelo internacional (Stripe já traz `amount_total`
    // com VAT incl. para EU via TaxCalc se habilitado). Manter `tax` como
    // linha separada permite o dia em que ligarmos Stripe Tax sem mexer no PDF.
    const subtotal = amountFull;
    const tax = 0;
    const totalDue = amountFull;

    const issueDateISO = payment.created_at ?? new Date().toISOString();
    const dueDateISO = computeDueDate(issueDateISO);

    const description = planDescription(planKey, billingPeriod);

    const lineItems: InvoiceLineItem[] = [{
        description,
        quantity: 1,
        unitPrice: subtotal,
        lineTotal: subtotal,
    }];

    const customerName = (profile?.full_name ?? '').trim()
        || (payment.email ?? '').trim()
        || DASH;
    const customerEmail = payment.email ?? profile?.email ?? DASH;

    return {
        invoiceNumber: `VOL-${truncateId(payment.id)}`,
        issueDateISO,
        dueDateISO,
        periodStartISO: payment.service_start ?? null,
        periodEndISO: payment.service_end ?? license?.expires_at ?? null,
        currency,
        locale,
        status,
        customerName,
        customerEmail,
        planKey,
        planDisplayName,
        billingPeriodLabel,
        lineItems,
        subtotal,
        tax,
        totalDue,
        licenseKey: license?.license_key ?? null,
        licenseExpiresISO: license?.expires_at ?? null,
        company,
        companyAddressLine: formatAddressOneLine(company),
        supportEmail,
        downloadUrl: input.downloadUrl ?? null,
    };
}
