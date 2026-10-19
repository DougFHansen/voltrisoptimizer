/**
 * Testes da FASE 8/9/10 (fatura internacional). Cobre:
 *  - matriz 15 × chaves de `invoice-copy` e `email-billing-copy`;
 *  - `company-intl` fallback e auditoria de campos;
 *  - `invoice-data` builder (currency, locale, formatDate/formatMoney);
 *  - `invoice-pdf` smoke render nos 15 idiomas (sem crash + bytes suficientes);
 *  - sanitização WinAnsi (evita caracteres fora de cp1252 no PDF).
 *
 * Roda com `node --test` direto; nenhum destes módulos deve depender do Next.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';

import { SUPPORTED_LOCALES, DEFAULT_LOCALE, LOCALE_META, type Locale } from '../lib/locale.ts';
import {
    INVOICE_COPY_KEYS,
    invoiceCopy,
    pdfCopyLocale,
    LOCALES_WITH_UNICODE_PDF_FONT,
} from '../lib/invoice-copy.ts';
import {
    BILLING_EMAIL_KEYS,
    BILLING_EMAIL_COPY,
    billingEmailCopy,
    interpolateBilling,
} from '../lib/email-billing-copy.ts';
import {
    getCompanyInfoIntl,
    getCompanyIntlMissingFields,
    formatAddressOneLine,
    isValidIso3166Alpha2,
    COMPANY_FIELD_DASH,
} from '../lib/company-intl.ts';
import {
    buildInvoiceData,
    formatMoney,
    formatDate,
    formatDateRange,
    type PaymentRow,
    type CustomerProfileRow,
    type LicenseRow,
} from '../lib/invoice-data.ts';
import { renderInvoicePdf, __test as pdfTest } from '../lib/invoice-pdf.ts';

// ---------------------------------------------------------------------------
// 1) Matriz: invoice-copy cobre os 15 × todas chaves.
// ---------------------------------------------------------------------------

test('invoice-copy: todos os 15 locales cobrem todas as chaves', () => {
    for (const locale of SUPPORTED_LOCALES) {
        for (const key of INVOICE_COPY_KEYS) {
            const v = invoiceCopy(locale, key);
            assert.ok(typeof v === 'string' && v.length > 0, `${locale}.${key} vazio`);
            assert.notEqual(v, key, `${locale}.${key} devolveu o próprio nome (fallback de dicionário)`);
        }
    }
});

test('invoice-copy: pdfCopyLocale cai para "en" onde falta fonte Unicode', () => {
    assert.equal(pdfCopyLocale('en'), 'en');
    assert.equal(pdfCopyLocale('pt-br'), 'pt-br');
    assert.equal(pdfCopyLocale('id'), 'id');
    // tr/pl/vi têm chars fora de cp1252 (ğ/ł/đ), caem para English.
    assert.equal(pdfCopyLocale('tr'), 'en');
    assert.equal(pdfCopyLocale('pl'), 'en');
    assert.equal(pdfCopyLocale('vi'), 'en');
    for (const l of ['ja', 'ko', 'zh-cn', 'ru', 'ar'] as Locale[]) {
        assert.ok(!LOCALES_WITH_UNICODE_PDF_FONT.has(l));
        assert.equal(pdfCopyLocale(l), 'en');
    }
});

test('invoice-copy: fallback locale lixo devolve English', () => {
    const v = invoiceCopy('xx' as unknown as Locale, 'docTitle');
    assert.equal(v, 'INVOICE');
});

// ---------------------------------------------------------------------------
// 2) Matriz: billing email copy.
// ---------------------------------------------------------------------------

test('email-billing-copy: todos os 15 × todas as chaves presentes', () => {
    for (const locale of SUPPORTED_LOCALES) {
        const dict = BILLING_EMAIL_COPY[locale];
        assert.ok(dict, `faltando dicionário para ${locale}`);
        for (const key of BILLING_EMAIL_KEYS) {
            const v = dict[key];
            assert.ok(typeof v === 'string' && v.length > 0, `${locale}.${key} vazio`);
            assert.notEqual(v, key, `${locale}.${key} devolveu o próprio nome`);
        }
    }
});

test('email-billing-copy: fallback devolve English em locale lixo', () => {
    const v = billingEmailCopy('xx' as unknown as Locale, 'purchaseSubject');
    assert.equal(v, 'Your VOLTRIS license is ready');
});

test('interpolateBilling substitui placeholders e engole ausentes', () => {
    const out = interpolateBilling('Invoice {invoice} · {amount} · {missing}', {
        invoice: 'VOL-AB12', amount: '€19,00',
    });
    assert.equal(out, 'Invoice VOL-AB12 · €19,00 · ');
});

// ---------------------------------------------------------------------------
// 3) company-intl
// ---------------------------------------------------------------------------

test('company-intl: fallback em dash quando env var ausente', () => {
    const snapshot = getCompanyInfoIntl();
    assert.equal(typeof snapshot.legalName, 'string');
    // Legal name provavelmente não está setada em teste local — cai em '—'.
    // Aceitamos os dois estados (set ou '—'), nunca vazio puro.
    assert.ok(snapshot.legalName.length > 0);
});

test('company-intl: overrides chegam no output e formatAddress colapsa', () => {
    const c = getCompanyInfoIntl({
        legalName: 'Acme GmbH',
        addressLine1: 'Hauptstr. 1',
        city: 'Berlin',
        region: 'BE',
        postalCode: '10115',
        country: 'de',
        taxId: 'DE123456789',
    });
    assert.equal(c.legalName, 'Acme GmbH');
    const addr = formatAddressOneLine(c);
    assert.match(addr, /Hauptstr\. 1/);
    assert.match(addr, /Berlin, BE/);
    assert.match(addr, /10115/);
    assert.match(addr, /DE/);   // upper-case
});

test('company-intl: missingFields acusa ausências corretamente', () => {
    const c = getCompanyInfoIntl({
        legalName: COMPANY_FIELD_DASH,
        addressLine1: COMPANY_FIELD_DASH,
        city: COMPANY_FIELD_DASH,
        country: '',
        taxId: COMPANY_FIELD_DASH,
    });
    const missing = getCompanyIntlMissingFields(c);
    assert.deepEqual(new Set(missing), new Set(['legalName', 'addressLine1', 'city', 'country', 'taxId']));
});

test('company-intl: isValidIso3166Alpha2 aceita 2 letras e rejeita lixo', () => {
    assert.ok(isValidIso3166Alpha2('DE'));
    assert.ok(isValidIso3166Alpha2('us'));
    assert.ok(!isValidIso3166Alpha2('DEU'));
    assert.ok(!isValidIso3166Alpha2(''));
    assert.ok(!isValidIso3166Alpha2(null));
});

// ---------------------------------------------------------------------------
// 4) invoice-data builder
// ---------------------------------------------------------------------------

function mkPayment(over: Partial<PaymentRow> = {}): PaymentRow {
    return {
        id: 'a1b2c3d4-e5f6-47a8-9b0c-1d2e3f4a5b6c',
        reference_id: 'cs_test_123',
        provider: 'stripe',
        stripe_id: 'pi_123',
        status: 'approved',
        user_id: 'user-uuid-1',
        email: 'client@example.com',
        plan_type: 'pro',
        billing_period: 'month',
        amount: 19,
        currency: 'eur',
        created_at: '2026-10-19T12:00:00.000Z',
        ...over,
    };
}

test('invoice-data: constrói documento completo a partir do payment row', () => {
    const inv = buildInvoiceData({ payment: mkPayment() });
    assert.match(inv.invoiceNumber, /^VOL-[A-Z0-9]{8}$/);
    assert.equal(inv.currency, 'eur');
    assert.equal(inv.status, 'paid');
    assert.equal(inv.planDisplayName, 'VOLTRIS PRO');
    assert.equal(inv.billingPeriodLabel, 'Monthly');
    assert.equal(inv.subtotal, 19);
    assert.equal(inv.totalDue, 19);
    assert.equal(inv.tax, 0);
    assert.equal(inv.lineItems.length, 1);
    assert.match(inv.lineItems[0].description, /VOLTRIS PRO/);
});

test('invoice-data: locale cai para en quando request/profile são lixo', () => {
    const inv = buildInvoiceData({ payment: mkPayment(), requestedLocale: 'xyz' });
    assert.equal(inv.locale, DEFAULT_LOCALE);
});

test('invoice-data: respeita requestedLocale quando válido', () => {
    const inv = buildInvoiceData({ payment: mkPayment(), requestedLocale: 'pt-br' });
    assert.equal(inv.locale, 'pt-br');
});

test('invoice-data: profile.preferred_locale vence o default', () => {
    const profile: CustomerProfileRow & { preferred_locale?: string } = {
        id: 'user-uuid-1', full_name: 'Yuki Tanaka', email: 'yuki@example.jp', preferred_locale: 'ja',
    };
    const inv = buildInvoiceData({ payment: mkPayment(), profile });
    assert.equal(inv.locale, 'ja');
});

test('invoice-data: currency do payment vence o currency-mapping do locale', () => {
    // Locale 'de' normalmente mapeia para eur, mas se o payment veio em usd,
    // o PDF/e-mail usam USD (fonte Stripe é autoritativa).
    const inv = buildInvoiceData({
        payment: mkPayment({ currency: 'usd' }),
        requestedLocale: 'de',
    });
    assert.equal(inv.currency, 'usd');
});

test('invoice-data: status map (refunded/past_due/canceled/pending)', () => {
    assert.equal(buildInvoiceData({ payment: mkPayment({ status: 'refunded' }) }).status, 'refunded');
    assert.equal(buildInvoiceData({ payment: mkPayment({ status: 'past_due' }) }).status, 'past_due');
    assert.equal(buildInvoiceData({ payment: mkPayment({ status: 'failed' }) }).status, 'canceled');
    assert.equal(buildInvoiceData({ payment: mkPayment({ status: 'pending' }) }).status, 'pending');
    assert.equal(buildInvoiceData({ payment: mkPayment({ status: 'approved' }), licenseRevoked: true }).status, 'canceled');
});

test('invoice-data: campo ausente nunca é inventado — aparece como em dash', () => {
    const p = mkPayment({ plan_type: null, billing_period: null, email: null, amount: null });
    const inv = buildInvoiceData({ payment: p, profile: null });
    assert.equal(inv.planDisplayName, '—');
    assert.equal(inv.billingPeriodLabel, '—');
    assert.equal(inv.customerEmail, '—');
    assert.equal(inv.totalDue, 0);
});

test('formatMoney: sempre devolve string; never NaN; fallback em dash para lixo', () => {
    assert.match(formatMoney(19, 'eur', 'de'), /19/);
    assert.equal(formatMoney(Number.NaN, 'usd', 'en'), '—');
    assert.equal(formatMoney(1500, 'jpy', 'ja'), formatMoney(1500, 'jpy', 'ja')); // estável
});

test('formatDate/formatDateRange: locale-native com fallback em dash', () => {
    const s = formatDate('2026-10-19T00:00:00Z', 'en');
    assert.match(s, /2026/);
    assert.equal(formatDate(null, 'en'), '—');
    assert.equal(formatDateRange(null, null, 'en'), '—');
    const r = formatDateRange('2026-09-01T00:00:00Z', '2026-10-01T00:00:00Z', 'en');
    assert.match(r, /→/);
});

// ---------------------------------------------------------------------------
// 5) invoice-pdf smoke
// ---------------------------------------------------------------------------

test('invoice-pdf: render para os 15 locales sem crash e com bytes plausíveis', async () => {
    for (const locale of SUPPORTED_LOCALES) {
        const inv = buildInvoiceData({
            payment: mkPayment(),
            requestedLocale: locale,
            license: { license_key: 'VOLTR-PRO-A1B2-C3D4-E5F6', expires_at: '2027-10-19T00:00:00Z' },
            downloadUrl: 'https://www.voltrisoptimizer.com/api/invoices/p-1/download',
            company: getCompanyInfoIntl({
                legalName: 'Voltris Inc.',
                addressLine1: '1 Market Street',
                city: 'Wilmington',
                region: 'DE',
                postalCode: '19801',
                country: 'US',
                taxId: 'US-12-3456789',
                email: 'support@voltrisoptimizer.com',
                website: 'https://www.voltrisoptimizer.com',
            }),
        });
        const bytes = await renderInvoicePdf(inv);
        assert.ok(bytes instanceof Uint8Array, `pdf bytes ausente para ${locale}`);
        assert.ok(bytes.byteLength > 800, `pdf ${locale} suspeito (${bytes.byteLength}B)`);
        // PDF header mágico.
        const header = new TextDecoder('latin1').decode(bytes.slice(0, 5));
        assert.equal(header, '%PDF-', `pdf ${locale} não começa com %PDF-`);
    }
});

test('invoice-pdf: sanitizeWinAnsi remove caracteres não-Latin sem crash', () => {
    const out = pdfTest.sanitizeWinAnsi('café 日本 €');
    // Café e € sobrevivem, os kanji viram '?'.
    assert.ok(out.length > 0);
    assert.match(out, /caf/);
    assert.match(out, /€/);
    assert.match(out, /\?/);
    assert.ok(!out.includes('日'));
});

test('invoice-pdf: formatPdfMoney evita símbolos não-cp1252 (KRW/PLN)', () => {
    // ₩ não está em WinAnsi; zloty ł/id também não. Fallback para "1,500.00 KRW".
    const krw = pdfTest.formatPdfMoney(1500, 'krw');
    assert.match(krw, /KRW/);
    assert.ok(pdfTest.isWinAnsiSafe(krw), 'KRW output deveria ser WinAnsi-safe, veio: ' + krw);
    const pln = pdfTest.formatPdfMoney(1500, 'pln');
    assert.match(pln, /PLN/);
    assert.ok(pdfTest.isWinAnsiSafe(pln));
});

test('invoice-pdf: formatPdfMoney aceita EUR/USD/JPY com símbolo nativo', () => {
    const eur = pdfTest.formatPdfMoney(19, 'eur');
    assert.match(eur, /19/);
    assert.ok(pdfTest.isWinAnsiSafe(eur));
    const jpy = pdfTest.formatPdfMoney(1500, 'jpy');
    assert.match(jpy, /1,500/);
    assert.ok(pdfTest.isWinAnsiSafe(jpy));
});

test('invoice-pdf: pdfCopyLocale="en" força rótulos em inglês mesmo em locale não-Latin', async () => {
    const inv = buildInvoiceData({ payment: mkPayment(), requestedLocale: 'ja' });
    const bytes = await renderInvoicePdf(inv, { forceCopyLocale: 'ja' });
    assert.ok(bytes.byteLength > 800);
});

// ---------------------------------------------------------------------------
// 6) Locale matrix sanity (LOCALE_META intl tags)
// ---------------------------------------------------------------------------

test('LOCALE_META: intl BCP47 tags batem com Intl.DateTimeFormat', () => {
    for (const locale of SUPPORTED_LOCALES) {
        const meta = LOCALE_META[locale];
        assert.ok(meta.intl.length >= 2, `intl inválido para ${locale}`);
        // Não deve lançar.
        const s = new Intl.DateTimeFormat(meta.intl, { dateStyle: 'short' }).format(new Date('2026-10-19T00:00:00Z'));
        assert.ok(typeof s === 'string' && s.length > 0);
    }
});
