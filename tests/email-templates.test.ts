/**
 * MATRIZ 15 IDIOMAS × 2 TEMPLATES AUTH (confirmação + recuperação).
 * (FASE 3/4/5/16 da missão internacional.)
 *
 * Cobre o mínimo inegociável:
 *   - Os 15 oficiais resolvem no idioma nativo (subject + heading não caem em
 *     'en', exceto quando o locale é deliberadamente o inglês).
 *   - Lixo caem em 'en' (fallback), nunca undefined dentro do e-mail.
 *   - `dir="rtl"` só dispara no 'ar'. Todos os outros têm `dir="ltr"`.
 *   - `escapeHtml` barra injeção em `{first_name}` e na URL.
 *   - `safeHref` barra `javascript:` / `data:` (vetor de XSS em e-mail).
 *   - `interpolate` não quebra com variável ausente (marker some, texto ainda
 *     é válido).
 *   - `text/plain` sempre tem o link cru (usuário de leitor só-texto).
 *   - Toda linha de cópia vem da matriz EMAIL_COPY (não existe string solta no
 *     renderer, que é o critério da missão).
 *
 * Roda sem tocar em Resend/Next: `node --test tests/email-templates.test.ts`.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '../lib/locale.ts';
import {
    EMAIL_COPY,
    EMAIL_COPY_KEYS,
    emailCopy,
    interpolate,
} from '../lib/email-copy.ts';
import {
    escapeHtml,
    safeHref,
    renderAuthEmail,
    type RenderedEmail,
} from '../lib/email-templates.ts';

// ============================================================================
// MATRIZ (dados de teste)
// ============================================================================

const EXPECTED_LOCALES = SUPPORTED_LOCALES;

// ============================================================================
// 1. Matriz completa nos 15 idiomas
// ============================================================================

test('EMAIL_COPY cobre os 15 oficiais', () => {
    const keys = Object.keys(EMAIL_COPY).sort();
    const expected = [...EXPECTED_LOCALES].sort();
    assert.deepEqual(keys, expected, 'matriz diverge da lista SUPPORTED_LOCALES');
});

test('cada locale tem todas as chaves preenchidas (sem string vazia)', () => {
    for (const locale of EXPECTED_LOCALES) {
        const bundle = EMAIL_COPY[locale];
        for (const key of EMAIL_COPY_KEYS) {
            const value = bundle[key];
            assert.ok(
                typeof value === 'string' && value.trim().length > 0,
                `${locale}.${key} ausente ou vazio`
            );
        }
    }
});

test('emailCopy cai no inglês quando locale não existe', () => {
    const v = emailCopy('xx-YY' as any, 'confirmSubject');
    assert.equal(v, EMAIL_COPY[DEFAULT_LOCALE].confirmSubject);
});

test('emailCopy cai no inglês quando chave específica está vazia (defensivo)', () => {
    // Não há lacuna real na matriz hoje; este teste protege contra uma futura
    // regressão em que alguém edite uma string e a deixe vazia.
    const backup = EMAIL_COPY['de'].recoverCta;
    try {
        EMAIL_COPY['de'].recoverCta = '';
        assert.equal(emailCopy('de', 'recoverCta'), EMAIL_COPY[DEFAULT_LOCALE].recoverCta);
    } finally {
        EMAIL_COPY['de'].recoverCta = backup;
    }
});

// ============================================================================
// 2. interpolate
// ============================================================================

test('interpolate substitui marcadores e tolera ausentes', () => {
    assert.equal(interpolate('Hello {first_name}!', { first_name: 'Ada' }), 'Hello Ada!');
    assert.equal(interpolate('Expires in {minutes}m', { minutes: 30 }), 'Expires in 30m');
    // Vazio → marcador some, texto continua válido.
    assert.equal(interpolate('Hi {first_name},', {}), 'Hi ,');
    assert.equal(interpolate('Hi {first_name},', { first_name: null }), 'Hi ,');
});

// ============================================================================
// 3. escapeHtml / safeHref (segurança)
// ============================================================================

test('escapeHtml barra os cinco caracteres críticos na ordem certa', () => {
    assert.equal(
        escapeHtml('<a href="x">&\'</a>'),
        '&lt;a href=&quot;x&quot;&gt;&amp;&#39;&lt;/a&gt;'
    );
    // Ordem & primeiro: sem isto "&" viraria "&amp;amp;".
    assert.equal(escapeHtml('&<'), '&amp;&lt;');
});

test('escapeHtml engole null/undefined sem lançar', () => {
    assert.equal(escapeHtml(null), '');
    assert.equal(escapeHtml(undefined), '');
});

test('safeHref aceita https/http/mailto e relativo, barra o resto', () => {
    assert.equal(safeHref('https://a.com/x'), 'https://a.com/x');
    assert.equal(safeHref('http://a.com'), 'http://a.com');
    assert.equal(safeHref('mailto:a@b.com'), 'mailto:a@b.com');
    assert.equal(safeHref('/dashboard'), '/dashboard');
    assert.equal(safeHref('javascript:alert(1)'), '#');
    assert.equal(safeHref('data:text/html,<script>'), '#');
    assert.equal(safeHref(null), '#');
    assert.equal(safeHref(''), '#');
    assert.equal(safeHref('  JAVASCRIPT:alert(1)'), '#');
});

// ============================================================================
// 4. renderAuthEmail — confirmação, nos 15 idiomas
// ============================================================================

/** Assinatura mínima: o e-mail é válido se o idioma aparece no subject. */
function expectLocalized(r: RenderedEmail, locale: string, kind: 'confirmation' | 'recovery'): void {
    const subjectKey = kind === 'confirmation' ? 'confirmSubject' : 'recoverSubject';
    const expectedSubject = EMAIL_COPY[locale][subjectKey];
    assert.equal(r.subject, expectedSubject, `subject deve ser a string da matriz em ${locale} (${kind})`);
    assert.equal(r.locale, locale);
    assert.equal(r.direction, locale === 'ar' ? 'rtl' : 'ltr');
}

test('renderAuthEmail (confirmation) roda nos 15 oficiais e usa a matriz', () => {
    for (const locale of EXPECTED_LOCALES) {
        const r = renderAuthEmail({
            to: 'user@example.com',
            kind: 'confirmation',
            actionUrl: 'https://app.voltrisoptimizer.com/auth/confirm?token=abc',
            locale,
            firstName: 'Alice',
            expiryMinutes: 30,
        });
        expectLocalized(r, locale, 'confirmation');

        // Preheader presente (linha de assunto complementar).
        assert.ok(r.preheader.length > 0);

        // HTML tem o botão com a URL.
        assert.match(r.html, /<a href="https:\/\/app\.voltrisoptimizer\.com\/auth\/confirm\?token=abc"/);
        // text/plain sempre tem o link em texto puro.
        assert.match(r.text, /https:\/\/app\.voltrisoptimizer\.com\/auth\/confirm\?token=abc/);
    }
});

test('renderAuthEmail (recovery) roda nos 15 oficiais', () => {
    for (const locale of EXPECTED_LOCALES) {
        const r = renderAuthEmail({
            to: 'user@example.com',
            kind: 'recovery',
            actionUrl: 'https://app.voltrisoptimizer.com/auth/reset?token=xyz',
            locale,
            firstName: 'Bob',
        });
        expectLocalized(r, locale, 'recovery');
        assert.match(r.html, /<a href="https:\/\/app\.voltrisoptimizer\.com\/auth\/reset\?token=xyz"/);
    }
});

// ============================================================================
// 5. Fallback + RTL + segurança
// ============================================================================

test('locale lixo (ex. "xx") cai no inglês sem explodir', () => {
    const r = renderAuthEmail({
        to: 'user@example.com',
        kind: 'confirmation',
        actionUrl: 'https://app.voltrisoptimizer.com/auth/confirm?token=abc',
        locale: 'xx',
        firstName: 'Alice',
    });
    assert.equal(r.locale, DEFAULT_LOCALE);
    assert.equal(r.subject, EMAIL_COPY[DEFAULT_LOCALE].confirmSubject);
});

test('árabe dispara dir="rtl" no <body> e na tabela raiz', () => {
    const r = renderAuthEmail({
        to: 'user@example.com',
        kind: 'confirmation',
        actionUrl: 'https://app.voltrisoptimizer.com/auth/confirm?token=abc',
        locale: 'ar',
    });
    assert.equal(r.direction, 'rtl');
    // Conta as ocorrências. `dir="rtl"` precisa estar no <html> e na <table>.
    const rtlCount = (r.html.match(/dir="rtl"/g) ?? []).length;
    assert.ok(rtlCount >= 2, `esperado dir="rtl" no html e na tabela, veio ${rtlCount}`);
    assert.ok(!/dir="ltr"/.test(r.html), 'locale árabe não deveria ter ltr em lugar nenhum');
});

test('hebraico (fora da matriz) cai em en e mantém ltr', () => {
    // Não é um dos 15. O teste protege contra a regressão de "se alguém
    // adicionar hebraico no front sem completar a matriz, o e-mail sai".
    const r = renderAuthEmail({
        to: 'user@example.com',
        kind: 'confirmation',
        actionUrl: 'https://app.voltrisoptimizer.com/auth/confirm?token=abc',
        locale: 'he',
    });
    assert.equal(r.locale, 'en');
    assert.equal(r.direction, 'ltr');
});

test('firstName com HTML malicioso é escapado, não injeta', () => {
    const r = renderAuthEmail({
        to: 'user@example.com',
        kind: 'confirmation',
        actionUrl: 'https://app.voltrisoptimizer.com/auth/confirm?token=abc',
        locale: 'en',
        firstName: '<script>alert(1)</script>',
    });
    assert.ok(!r.html.includes('<script>alert'), 'script não deveria aparecer cru no HTML');
    assert.ok(r.html.includes('&lt;script&gt;'), 'script deveria chegar escapado');
});

test('actionUrl javascript: é neutralizada pelo safeHref', () => {
    const r = renderAuthEmail({
        to: 'user@example.com',
        kind: 'confirmation',
        actionUrl: 'javascript:alert(1)',
        locale: 'en',
    });
    assert.ok(!r.html.includes('href="javascript:'), 'href javascript deveria virar #');
    assert.match(r.html, /href="#"/);
});

test('nome ausente usa a forma sem nome (greetingHello) sem deixar buraco', () => {
    const r = renderAuthEmail({
        to: 'user@example.com',
        kind: 'confirmation',
        actionUrl: 'https://app.voltrisoptimizer.com/auth/confirm?token=abc',
        locale: 'en',
        firstName: null,
    });
    // O corpo usa a saudação genérica, sem "Hi ,".
    assert.ok(!r.html.match(/Hi\s*,/), 'nao deveria haver "Hi ," sem nome');
});

// ============================================================================
// 6. Estabilidade do shell
// ============================================================================

test('HTML sempre tem DOCTYPE, viewport, charset e preheader invisível', () => {
    const r = renderAuthEmail({
        to: 'user@example.com',
        kind: 'confirmation',
        actionUrl: 'https://app.voltrisoptimizer.com/auth/confirm?token=abc',
        locale: 'en',
    });
    assert.match(r.html, /^<!DOCTYPE html>/i);
    assert.match(r.html, /<meta charset="utf-8">/i);
    assert.match(r.html, /name="viewport"/);
    // Preheader fica numa <div> com display:none.
    assert.match(r.html, /display:none;max-height:0;overflow:hidden/);
});

test('todas as 15 locales produzem HTML com o mesmo esqueleto (mesma paleta)', () => {
    // Uma regressão em uma string de uma locale não deveria mudar a paleta nem
    // a largura (600px) do documento. É uma checagem estrutural barata.
    for (const locale of EXPECTED_LOCALES) {
        const r = renderAuthEmail({
            to: 'user@example.com',
            kind: 'confirmation',
            actionUrl: 'https://app.voltrisoptimizer.com/x',
            locale,
        });
        assert.match(r.html, /max-width:600px/);
        assert.match(r.html, /background-color:#08080c/);
        assert.match(r.html, /background-color:#12121a/);
        assert.match(r.html, /#8B31FF/);
    }
});

test('text/plain nunca contém markup HTML', () => {
    for (const locale of EXPECTED_LOCALES) {
        const r = renderAuthEmail({
            to: 'user@example.com',
            kind: 'recovery',
            actionUrl: 'https://app.voltrisoptimizer.com/reset',
            locale,
            firstName: 'Zoe',
        });
        assert.ok(!r.text.includes('<'), `text em ${locale} não deveria ter <`);
        assert.ok(!r.text.includes('>'), `text em ${locale} não deveria ter >`);
    }
});
