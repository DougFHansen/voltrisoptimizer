/**
 * RENDERERS DE E-MAIL DE COBRANÇA (FASE 10/11/12/13 da missão VOLTRIS
 * INTERNACIONAL).
 *
 * Consome os blocos compartilhados do `email-templates.ts` (mesmo shell,
 * mesma paleta, mesma regra de escape/RTL) e as strings específicas do
 * `email-billing-copy.ts`. Cada renderer recebe um `InvoiceData` já
 * formatado e devolve o `RenderedEmail` pronto para o outbox.
 *
 * Regras:
 *  - Locale SEMPRE um dos 15 oficiais; qualquer lixo cai em 'en'.
 *  - Todo dado do cliente (plan name, invoice number, license key, e-mail)
 *    passa por `escapeHtml` ANTES de entrar no HTML. Nada de `dangerously`.
 *  - Valor monetário vem formatado em locale-native (`formatMoney` usa
 *    `Intl.NumberFormat`), então o e-mail em árabe mostra `١٢٫٠٠ د.إ`, o
 *    em japonês mostra `￥1,200`, etc. O PDF é diferente (WinAnsi-safe) e
 *    isso é intencional.
 *  - A rota de download do PDF entra como `invoice.downloadUrl`; se vier
 *    nula, omitimos o botão (nunca mostramos link morto).
 */

import {
    LOCALE_META,
    normalizeLocale,
    type Locale,
} from './locale.ts';
import { emailCopy, interpolate, type EmailCopyKey } from './email-copy.ts';
import {
    billingEmailCopy,
    interpolateBilling,
    type BillingEmailCopyKey,
} from './email-billing-copy.ts';
import {
    COLORS,
    escapeHtml,
    logoBlock,
    brandBar,
    hero,
    button,
    paragraph,
    noteBlock,
    footerBlock,
    renderShell,
    getEmailContext,
    type RenderedEmail,
} from './email-templates.ts';
import {
    formatMoney,
    formatDate,
    type InvoiceData,
} from './invoice-data.ts';

// ---------------------------------------------------------------------------
// Params comuns
// ---------------------------------------------------------------------------

export interface BillingEmailParams {
    /** Snapshot imprimível (moeda, data, plano, chave de licença, número). */
    invoice: InvoiceData;
    /** Locale alvo. Vem do perfil; lixo → 'en'. */
    locale: string;
    /** Nome para saudação. */
    firstName?: string | null;
    /** URL do portal Stripe (para "update payment method"); opcional. */
    billingPortalUrl?: string | null;
}

function billingCopy(locale: Locale, key: BillingEmailCopyKey): string {
    return billingEmailCopy(locale, key);
}

function formatMoneyForLocale(inv: InvoiceData, locale: Locale): string {
    return formatMoney(inv.totalDue, inv.currency, locale);
}

function formatExpiryForLocale(inv: InvoiceData, locale: Locale): string {
    // Prioridade: vencimento da licença; se não, período do serviço; senão, due date.
    return formatDate(inv.licenseExpiresISO ?? inv.periodEndISO ?? inv.dueDateISO, locale);
}

function greetingFor(locale: Locale, firstName?: string | null): string {
    const name = (firstName ?? '').trim();
    const first = name ? name.split(' ')[0] : '';
    return first
        ? interpolate(emailCopy(locale, 'greetingHelloName'), { first_name: first })
        : emailCopy(locale, 'greetingHello');
}

/** Monta a faixa de metadados abaixo do corpo (Invoice #, chave, validade). */
function invoiceMetaBlock(locale: Locale, inv: InvoiceData): string {
    const rows: Array<[string, string]> = [];
    rows.push([billingCopy(locale, 'invoiceNumberLabel'), inv.invoiceNumber]);
    if (inv.licenseKey) {
        rows.push([billingCopy(locale, 'licenseKeyLabel'), inv.licenseKey]);
    }
    const inner = rows
        .map(([k, v]) =>
            `<tr>
              <td style="padding:4px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:12px;color:${COLORS.textMuted};">${escapeHtml(k)}</td>
              <td style="padding:4px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:12px;color:${COLORS.text};text-align:right;font-weight:700;">${escapeHtml(v)}</td>
            </tr>`,
        )
        .join('');
    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:16px 0 4px 0;background:${COLORS.surfaceAlt};border-left:3px solid ${COLORS.purple};">
          <tr><td style="padding:12px 18px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${inner}</table>
          </td></tr>
        </table>`;
}

function finalize(locale: Locale, subject: string, preheader: string, bodyHtml: string, textLines: string[]): RenderedEmail {
    return {
        subject,
        preheader,
        html: renderShell({ locale, preheader, body: bodyHtml }),
        text: textLines.filter(Boolean).join('\n'),
        locale,
        direction: LOCALE_META[locale].direction,
    };
}

function copyFor(locale: Locale): (k: EmailCopyKey) => string {
    return (k) => emailCopy(locale, k);
}

// ---------------------------------------------------------------------------
// Purchase confirmation
// ---------------------------------------------------------------------------

export function renderPurchaseEmail(params: BillingEmailParams): RenderedEmail {
    const locale = normalizeLocale(params.locale) as Locale;
    const ctx = getEmailContext();
    const inv = params.invoice;

    const planName = inv.planDisplayName;
    const amount = formatMoneyForLocale(inv, locale);
    const expiry = formatExpiryForLocale(inv, locale);
    const period = inv.billingPeriodLabel;
    const vars = { plan: planName, amount, period, expiry, invoice: inv.invoiceNumber };

    const subject = interpolateBilling(billingCopy(locale, 'purchaseSubject'), vars);
    const preheader = interpolateBilling(billingCopy(locale, 'purchasePreheader'), vars);
    const heading = billingCopy(locale, 'purchaseHeading');
    const bodyLine = interpolateBilling(billingCopy(locale, 'purchaseBody'), vars);
    const ctaLabel = billingCopy(locale, 'purchaseCtaLabel');
    const greet = greetingFor(locale, params.firstName);
    const supportLine = emailCopy(locale, 'footerSupport');

    const body = `
        ${logoBlock(copyFor(locale))}
        ${brandBar()}
        ${hero('VOLTRIS', heading)}
        <tr><td class="voltris-pad" style="padding:26px 32px 8px 32px;">
          ${paragraph(escapeHtml(greet))}
          ${paragraph(escapeHtml(bodyLine))}
          ${invoiceMetaBlock(locale, inv)}
          ${inv.downloadUrl ? button(ctaLabel, inv.downloadUrl) : ''}
          ${noteBlock(`<div>${escapeHtml(supportLine)}</div>`)}
        </td></tr>
        ${footerBlock(copyFor(locale), ctx)}
    `;

    const text: string[] = [
        heading,
        '',
        greet,
        bodyLine,
        '',
        `${billingCopy(locale, 'invoiceNumberLabel')}: ${inv.invoiceNumber}`,
    ];
    if (inv.licenseKey) text.push(`${billingCopy(locale, 'licenseKeyLabel')}: ${inv.licenseKey}`);
    if (inv.downloadUrl) text.push(`${ctaLabel}: ${inv.downloadUrl}`);
    text.push('');
    text.push(supportLine);
    text.push(`${ctx.siteUrl.replace(/^https?:\/\//, '')} · ${ctx.supportEmail}`);

    return finalize(locale, subject, preheader, body, text);
}

// ---------------------------------------------------------------------------
// Renewal success
// ---------------------------------------------------------------------------

export function renderRenewalEmail(params: BillingEmailParams): RenderedEmail {
    const locale = normalizeLocale(params.locale) as Locale;
    const ctx = getEmailContext();
    const inv = params.invoice;

    const planName = inv.planDisplayName;
    const amount = formatMoneyForLocale(inv, locale);
    const expiry = formatExpiryForLocale(inv, locale);
    const period = inv.billingPeriodLabel;
    const vars = { plan: planName, amount, period, expiry, invoice: inv.invoiceNumber };

    const subject = interpolateBilling(billingCopy(locale, 'renewalSubject'), vars);
    const preheader = interpolateBilling(billingCopy(locale, 'renewalPreheader'), vars);
    const heading = billingCopy(locale, 'renewalHeading');
    const bodyLine = interpolateBilling(billingCopy(locale, 'renewalBody'), vars);
    const greet = greetingFor(locale, params.firstName);
    const supportLine = emailCopy(locale, 'footerSupport');

    const body = `
        ${logoBlock(copyFor(locale))}
        ${brandBar()}
        ${hero('VOLTRIS', heading)}
        <tr><td class="voltris-pad" style="padding:26px 32px 8px 32px;">
          ${paragraph(escapeHtml(greet))}
          ${paragraph(escapeHtml(bodyLine))}
          ${invoiceMetaBlock(locale, inv)}
          ${inv.downloadUrl ? button(billingCopy(locale, 'purchaseCtaLabel'), inv.downloadUrl) : ''}
          ${noteBlock(`<div>${escapeHtml(supportLine)}</div>`)}
        </td></tr>
        ${footerBlock(copyFor(locale), ctx)}
    `;

    const text: string[] = [
        heading,
        '',
        greet,
        bodyLine,
        '',
        `${billingCopy(locale, 'invoiceNumberLabel')}: ${inv.invoiceNumber}`,
    ];
    if (inv.downloadUrl) text.push(`${billingCopy(locale, 'purchaseCtaLabel')}: ${inv.downloadUrl}`);
    text.push('');
    text.push(supportLine);

    return finalize(locale, subject, preheader, body, text);
}

// ---------------------------------------------------------------------------
// Payment failed / past due
// ---------------------------------------------------------------------------

export function renderPastDueEmail(params: BillingEmailParams): RenderedEmail {
    const locale = normalizeLocale(params.locale) as Locale;
    const ctx = getEmailContext();
    const inv = params.invoice;

    const planName = inv.planDisplayName;
    const amount = formatMoneyForLocale(inv, locale);
    const expiry = formatExpiryForLocale(inv, locale);
    const vars = { plan: planName, amount, expiry, invoice: inv.invoiceNumber, period: inv.billingPeriodLabel };

    const subject = interpolateBilling(billingCopy(locale, 'pastDueSubject'), vars);
    const preheader = interpolateBilling(billingCopy(locale, 'pastDuePreheader'), vars);
    const heading = billingCopy(locale, 'pastDueHeading');
    const bodyLine = interpolateBilling(billingCopy(locale, 'pastDueBody'), vars);
    const ctaLabel = billingCopy(locale, 'pastDueCtaLabel');
    const greet = greetingFor(locale, params.firstName);
    const supportLine = emailCopy(locale, 'footerSupport');

    const portalHref = params.billingPortalUrl ?? `${ctx.siteUrl}/account/billing`;

    const body = `
        ${logoBlock(copyFor(locale))}
        ${brandBar()}
        ${hero('VOLTRIS', heading)}
        <tr><td class="voltris-pad" style="padding:26px 32px 8px 32px;">
          ${paragraph(escapeHtml(greet))}
          ${paragraph(escapeHtml(bodyLine))}
          ${button(ctaLabel, portalHref)}
          ${noteBlock(`<div>${escapeHtml(supportLine)}</div>`)}
        </td></tr>
        ${footerBlock(copyFor(locale), ctx)}
    `;

    const text: string[] = [
        heading,
        '',
        greet,
        bodyLine,
        '',
        `${ctaLabel}: ${portalHref}`,
        '',
        supportLine,
    ];

    return finalize(locale, subject, preheader, body, text);
}

// ---------------------------------------------------------------------------
// Cancellation notice
// ---------------------------------------------------------------------------

export function renderCancellationEmail(params: BillingEmailParams): RenderedEmail {
    const locale = normalizeLocale(params.locale) as Locale;
    const ctx = getEmailContext();
    const inv = params.invoice;

    const planName = inv.planDisplayName;
    const expiry = formatExpiryForLocale(inv, locale);
    const vars = { plan: planName, expiry, invoice: inv.invoiceNumber, amount: formatMoneyForLocale(inv, locale), period: inv.billingPeriodLabel };

    const subject = interpolateBilling(billingCopy(locale, 'canceledSubject'), vars);
    const preheader = subject;
    const heading = billingCopy(locale, 'canceledHeading');
    const bodyLine = interpolateBilling(billingCopy(locale, 'canceledBody'), vars);
    const greet = greetingFor(locale, params.firstName);
    const supportLine = emailCopy(locale, 'footerSupport');

    const body = `
        ${logoBlock(copyFor(locale))}
        ${brandBar()}
        ${hero('VOLTRIS', heading)}
        <tr><td class="voltris-pad" style="padding:26px 32px 8px 32px;">
          ${paragraph(escapeHtml(greet))}
          ${paragraph(escapeHtml(bodyLine))}
          ${noteBlock(`<div>${escapeHtml(supportLine)}</div>`)}
        </td></tr>
        ${footerBlock(copyFor(locale), ctx)}
    `;

    const text: string[] = [
        heading,
        '',
        greet,
        bodyLine,
        '',
        supportLine,
    ];

    return finalize(locale, subject, preheader, body, text);
}

// ---------------------------------------------------------------------------
// Refund confirmation
// ---------------------------------------------------------------------------

export function renderRefundEmail(params: BillingEmailParams): RenderedEmail {
    const locale = normalizeLocale(params.locale) as Locale;
    const ctx = getEmailContext();
    const inv = params.invoice;

    const amount = formatMoneyForLocale(inv, locale);
    const vars = { plan: inv.planDisplayName, amount, expiry: formatExpiryForLocale(inv, locale), invoice: inv.invoiceNumber, period: inv.billingPeriodLabel };

    const subject = interpolateBilling(billingCopy(locale, 'refundedSubject'), vars);
    const preheader = subject;
    const heading = billingCopy(locale, 'refundedHeading');
    const bodyLine = interpolateBilling(billingCopy(locale, 'refundedBody'), vars);
    const greet = greetingFor(locale, params.firstName);
    const supportLine = emailCopy(locale, 'footerSupport');

    const body = `
        ${logoBlock(copyFor(locale))}
        ${brandBar()}
        ${hero('VOLTRIS', heading)}
        <tr><td class="voltris-pad" style="padding:26px 32px 8px 32px;">
          ${paragraph(escapeHtml(greet))}
          ${paragraph(escapeHtml(bodyLine))}
          ${invoiceMetaBlock(locale, inv)}
          ${noteBlock(`<div>${escapeHtml(supportLine)}</div>`)}
        </td></tr>
        ${footerBlock(copyFor(locale), ctx)}
    `;

    const text: string[] = [
        heading,
        '',
        greet,
        bodyLine,
        '',
        `${billingCopy(locale, 'invoiceNumberLabel')}: ${inv.invoiceNumber}`,
        '',
        supportLine,
    ];

    return finalize(locale, subject, preheader, body, text);
}
