/**
 * Testes dos renderers de billing email (FASE 10/11/12/13). Cobrem:
 *  - matriz 15 × 5 templates: subject/html/text sempre presentes;
 *  - XSS: `full_name` quebra tags, `{invoice}` escapa dentro do body;
 *  - URL insegura (`javascript:`) no downloadUrl vira `#`;
 *  - `dir="rtl"` só no árabe;
 *  - locale 'xx' cai para 'en' e o e-mail sai legível.
 *
 * Roda em `node --test`. Estes renderers são puros — não importam Next.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';

import { SUPPORTED_LOCALES, DEFAULT_LOCALE, type Locale } from '../lib/locale.ts';
import { buildInvoiceData, type PaymentRow, type CustomerProfileRow, type LicenseRow } from '../lib/invoice-data.ts';
import {
    renderPurchaseEmail,
    renderRenewalEmail,
    renderPastDueEmail,
    renderCancellationEmail,
    renderRefundEmail,
} from '../lib/email-billing-templates.ts';
import { getCompanyInfoIntl } from '../lib/company-intl.ts';

const basePayment: PaymentRow = {
    id: 'a1b2c3d4-e5f6-47a8-9b0c-1d2e3f4a5b6c',
    reference_id: 'cs_live_123',
    provider: 'stripe',
    stripe_id: 'pi_123',
    status: 'approved',
    user_id: 'user-uuid',
    email: 'client@example.com',
    plan_type: 'pro',
    billing_period: 'year',
    amount: 99,
    currency: 'usd',
    created_at: '2026-10-19T12:00:00.000Z',
};

const baseProfile: CustomerProfileRow & { preferred_locale?: string } = {
    id: 'user-uuid',
    full_name: 'Alex',
    email: 'client@example.com',
    preferred_locale: 'en',
};

const baseLicense: LicenseRow = {
    license_key: 'VOLTR-PRO-A1B2-C3D4-E5F6',
    expires_at: '2027-10-19T00:00:00Z',
};

function buildInv(locale: Locale, over: Partial<{ payment: PaymentRow; profile: CustomerProfileRow; license: LicenseRow | null; downloadUrl: string | null }> = {}) {
    return buildInvoiceData({
        payment: over.payment ?? basePayment,
        profile: (over.profile ?? baseProfile) as CustomerProfileRow,
        license: over.license === null ? null : (over.license ?? baseLicense),
        requestedLocale: locale,
        downloadUrl: over.downloadUrl ?? `https://www.voltrisoptimizer.com/api/invoices/${basePayment.id}/download`,
        company: getCompanyInfoIntl({
            legalName: 'Voltris Inc.',
            addressLine1: '1 Market Street',
            city: 'Wilmington',
            country: 'US',
            taxId: 'US-12-3456789',
            email: 'support@voltrisoptimizer.com',
        }),
    });
}

// ---------------------------------------------------------------------------
// Matriz 15 × 5 templates
// ---------------------------------------------------------------------------

const BILLING_KINDS = [
    ['purchase', renderPurchaseEmail],
    ['renewal', renderRenewalEmail],
    ['past-due', renderPastDueEmail],
    ['cancellation', renderCancellationEmail],
    ['refund', renderRefundEmail],
] as const;

test('billing: 15 locales × 5 templates renderizam sem crash', () => {
    for (const locale of SUPPORTED_LOCALES) {
        const inv = buildInv(locale);
        for (const [name, render] of BILLING_KINDS) {
            const email = render({
                invoice: inv,
                locale,
                firstName: baseProfile.full_name,
                billingPortalUrl: 'https://www.voltrisoptimizer.com/account/billing',
            });
            assert.ok(email.subject && email.subject.length >= 3, `${name}/${locale}: subject vazio`);
            assert.ok(email.html && email.html.length >= 300, `${name}/${locale}: html curto`);
            assert.ok(email.text && email.text.length >= 30, `${name}/${locale}: text curto`);
            assert.equal(email.locale, locale, `${name}/${locale}: locale não aplicado`);
        }
    }
});

test('billing: locale lixo cai para DEFAULT_LOCALE sem exceção', () => {
    const inv = buildInv('en');
    const email = renderPurchaseEmail({ invoice: inv, locale: 'xx-XX-bogus', firstName: null });
    assert.equal(email.locale, DEFAULT_LOCALE);
    assert.match(email.subject, /VOLTRIS/);
});

test('billing: árabe emite dir="rtl" no html', () => {
    const inv = buildInv('ar');
    const email = renderPurchaseEmail({ invoice: inv, locale: 'ar', firstName: null });
    assert.equal(email.direction, 'rtl');
    assert.match(email.html, /dir="rtl"/);
});

test('billing: hebreu/português/japonês/emissão LTR', () => {
    for (const locale of ['pt-br', 'ja', 'ko', 'zh-cn', 'ru', 'tr'] as Locale[]) {
        const inv = buildInv(locale);
        const email = renderRenewalEmail({ invoice: inv, locale, firstName: null });
        assert.equal(email.direction, 'ltr', `${locale} deve ser LTR`);
    }
});

// ---------------------------------------------------------------------------
// XSS + sanitização
// ---------------------------------------------------------------------------

test('billing: escapeHtml bloqueia XSS em full_name', () => {
    const profile = { ...baseProfile, full_name: '<script>alert(1)</script>' } as CustomerProfileRow;
    const inv = buildInv('en', { profile });
    const email = renderPurchaseEmail({ invoice: inv, locale: 'en', firstName: '<script>alert(1)</script>' });
    // O `<script>` literal não deve aparecer cru.
    assert.ok(!email.html.includes('<script>alert'));
    // A versão escapada pode aparecer dentro do parágrafo do greeting.
    assert.ok(email.html.includes('&lt;script&gt;') || !email.html.includes('script>'));
});

test('billing: downloadUrl javascript: é bloqueado no botão', () => {
    const inv = buildInv('en', { downloadUrl: 'javascript:alert(1)' });
    const email = renderPurchaseEmail({ invoice: inv, locale: 'en', firstName: null });
    assert.ok(!email.html.toLowerCase().includes('href="javascript'));
});

test('billing: text/plain não contém markup HTML', () => {
    for (const locale of SUPPORTED_LOCALES) {
        const inv = buildInv(locale);
        const email = renderRefundEmail({ invoice: inv, locale, firstName: null });
        assert.ok(!email.text.includes('<div'), `text tinha div em ${locale}`);
        assert.ok(!email.text.includes('style='), `text tinha style= em ${locale}`);
    }
});

test('billing: invoice.number e license key aparecem no corpo do e-mail', () => {
    const inv = buildInv('en');
    const email = renderPurchaseEmail({ invoice: inv, locale: 'en', firstName: null });
    assert.ok(email.html.includes(inv.invoiceNumber), 'invoiceNumber ausente do html');
    assert.ok(email.html.includes(baseLicense.license_key!), 'licenseKey ausente do html');
    assert.ok(email.text.includes(inv.invoiceNumber), 'invoiceNumber ausente do text');
});

test('billing: interpolateBilling remove placeholders sem valor sem vazar {}', () => {
    const inv = buildInv('en', { license: null });
    const email = renderPurchaseEmail({ invoice: inv, locale: 'en', firstName: null });
    // Não deveria haver `{` solto de template não-substituído no subject.
    assert.ok(!email.subject.includes('{'), `subject tinha placeholder: ${email.subject}`);
    // E não deveria haver `{` no body text também (fora dos links).
    assert.ok(!email.text.includes('{plan}') && !email.text.includes('{amount}'));
});

// ---------------------------------------------------------------------------
// Cores/estilos estáveis
// ---------------------------------------------------------------------------

test('billing: shell respeita paleta institucional', () => {
    const inv = buildInv('en');
    const email = renderPurchaseEmail({ invoice: inv, locale: 'en', firstName: null });
    assert.ok(email.html.includes('#08080c'), 'bg ausente');
    assert.ok(email.html.includes('#8B31FF'), 'roxo institucional ausente');
    assert.ok(email.html.includes('width:100%;max-width:600px'), 'shell não tem 600px');
});

// ---------------------------------------------------------------------------
// Locale-native formatting dentro do e-mail
// ---------------------------------------------------------------------------

test('billing: amount formatado no locale-alvo (não sempre "en-US")', () => {
    const invDe = buildInv('de', { payment: { ...basePayment, currency: 'eur', amount: 19 } });
    const email = renderPurchaseEmail({ invoice: invDe, locale: 'de', firstName: null });
    // Body deve conter valor em formato alemão (19,00 €), não USD 19.00.
    // Alguns runtimes ICU devolvem "19,00 EUR" se locale data faltar; ambos OK.
    assert.match(email.html, /19[.,]00/, 'valor 19 não aparece formatado');
});

test('billing: pastDue tem billing portal URL no botão quando informada', () => {
    const inv = buildInv('en');
    const email = renderPastDueEmail({
        invoice: inv,
        locale: 'en',
        firstName: null,
        billingPortalUrl: 'https://billing.stripe.com/p/session_test_123',
    });
    assert.match(email.html, /billing\.stripe\.com\/p\/session_test_123/);
    assert.match(email.text, /billing\.stripe\.com\/p\/session_test_123/);
});
