/**
 * PROVA DO PARSER + RENDER DO "SEND EMAIL HOOK" (FASE 3B).
 *
 * Cobre só a lógica PURA (`lib/auth-hook.ts`): parsing, validação, resolução de
 * locale e render nos 15 idiomas. A rota HTTP em `app/api/auth/send-email-hook/`
 * apenas embrulha isso em `NextResponse` — o comportamento dela é verificado no
 * checklist manual, não aqui (rode sem servidor Next).
 *
 * Roda em `node --test tests/auth-hook.test.ts`.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
    mapSupabaseTypeToKind,
    parseHookPayload,
    renderForHook,
    extractLocale,
    toSupabaseResponseBody,
    type HookPayload,
} from '../lib/auth-hook.ts';
import { EMAIL_COPY } from '../lib/email-copy.ts';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '../lib/locale.ts';

// ============================================================================
// mapSupabaseTypeToKind
// ============================================================================

test('mapSupabaseTypeToKind: signup e confirmation caem em confirmation', () => {
    assert.equal(mapSupabaseTypeToKind('signup'), 'confirmation');
    assert.equal(mapSupabaseTypeToKind('confirmation'), 'confirmation');
    assert.equal(mapSupabaseTypeToKind('SIGNUP'), 'confirmation');
});

test('mapSupabaseTypeToKind: recovery cai em recovery', () => {
    assert.equal(mapSupabaseTypeToKind('recovery'), 'recovery');
    assert.equal(mapSupabaseTypeToKind('Recovery'), 'recovery');
});

test('mapSupabaseTypeToKind: tipos fora do escopo devolvem null', () => {
    for (const t of ['magiclink', 'invite', 'email_change', 'reauthentication', 'xx', '']) {
        assert.equal(mapSupabaseTypeToKind(t), null, `${t} deveria ser unsupported`);
    }
    assert.equal(mapSupabaseTypeToKind(undefined), null);
    assert.equal(mapSupabaseTypeToKind(null), null);
});

// ============================================================================
// parseHookPayload
// ============================================================================

const VALID_CONFIRM: HookPayload = {
    type: 'signup',
    user: { id: 'u1', email: 'user@example.com', user_metadata: { preferred_locale: 'fr' } },
    action_url: 'https://app.voltrisoptimizer.com/auth/confirm?token=abc',
};

test('parseHookPayload aceita payload válido de signup', () => {
    const r = parseHookPayload(VALID_CONFIRM);
    assert.equal(r.ok, true);
    if (r.ok) {
        assert.equal(r.kind, 'confirmation');
        assert.equal(r.email, 'user@example.com');
        assert.equal(r.actionUrl, VALID_CONFIRM.action_url);
    }
});

test('parseHookPayload aceita recovery com action_url', () => {
    const r = parseHookPayload({
        type: 'recovery',
        user: { id: 'u2', email: 'a@b.co' },
        action_url: 'https://x.com/reset',
    });
    assert.equal(r.ok && r.kind, 'recovery');
});

test('parseHookPayload usa verification_url como fallback de action_url', () => {
    // Compat com clientes Supabase antigos.
    const r = parseHookPayload({
        type: 'signup',
        user: { id: 'u3', email: 'a@b.co' },
        verification_url: 'https://x.com/verify',
    });
    assert.equal(r.ok && r.actionUrl, 'https://x.com/verify');
});

test('parseHookPayload rejeita body não-objeto', () => {
    for (const bad of [null, undefined, 'string', 42, true]) {
        const r = parseHookPayload(bad);
        assert.equal(r.ok, false);
        if (!r.ok) assert.equal(r.reason, 'invalid_payload');
    }
});

test('parseHookPayload rejeita tipo não suportado', () => {
    const r = parseHookPayload({ type: 'magiclink', user: { email: 'a@b.co' }, action_url: 'https://x/y' });
    assert.equal(r.ok, false);
    if (!r.ok) assert.equal(r.reason, 'unsupported_type');
});

test('parseHookPayload rejeita e-mail ausente / inválido', () => {
    const missing = parseHookPayload({ type: 'signup', user: {}, action_url: 'https://x' });
    assert.equal(!missing.ok && missing.reason, 'missing_email');

    const invalid = parseHookPayload({
        type: 'signup',
        user: { email: 'nao-e-email' },
        action_url: 'https://x',
    });
    assert.equal(!invalid.ok && invalid.reason, 'invalid_email');
});

test('parseHookPayload rejeita action_url ausente', () => {
    const r = parseHookPayload({ type: 'signup', user: { email: 'a@b.co' } });
    assert.equal(r.ok, false);
    if (!r.ok) assert.equal(r.reason, 'missing_action_url');
});

test('parseHookPayload rejeita action_url javascript: / data: (vetor de XSS)', () => {
    for (const bad of ['javascript:alert(1)', 'data:text/html,<script>', 'file:///etc/passwd']) {
        const r = parseHookPayload({
            type: 'signup',
            user: { email: 'a@b.co' },
            action_url: bad,
        });
        assert.equal(r.ok, false, `${bad} deveria ser barrado`);
        if (!r.ok) assert.equal(r.reason, 'invalid_action_url');
    }
});

// ============================================================================
// extractLocale
// ============================================================================

test('extractLocale: preferred_locale é a fonte primária', () => {
    assert.equal(extractLocale({ user_metadata: { preferred_locale: 'de' } }), 'de');
    assert.equal(extractLocale({ user_metadata: { preferred_locale: 'pt-BR' } }), 'pt-br');
});

test('extractLocale: aliases "locale" e "language" funcionam como fallback', () => {
    assert.equal(extractLocale({ user_metadata: { locale: 'it' } }), 'it');
    assert.equal(extractLocale({ user_metadata: { language: 'tr' } }), 'tr');
});

test('extractLocale: nada viável cai no DEFAULT_LOCALE (en)', () => {
    assert.equal(extractLocale({}), DEFAULT_LOCALE);
    assert.equal(extractLocale(undefined), DEFAULT_LOCALE);
    assert.equal(extractLocale({ user_metadata: { preferred_locale: 'xx' } }), DEFAULT_LOCALE);
});

// ============================================================================
// renderForHook + toSupabaseResponseBody
// ============================================================================

test('renderForHook produz um corpo válido no idioma do user_metadata', () => {
    const parsed = parseHookPayload(VALID_CONFIRM);
    assert.equal(parsed.ok, true);
    if (!parsed.ok) return;
    const rendered = renderForHook(parsed);
    assert.equal(rendered.locale, 'fr');
    assert.equal(rendered.subject, EMAIL_COPY['fr'].confirmSubject);
});

test('toSupabaseResponseBody devolve o shape aceito pelo Supabase Auth', () => {
    const parsed = parseHookPayload(VALID_CONFIRM);
    assert.equal(parsed.ok, true);
    if (!parsed.ok) return;
    const rendered = renderForHook(parsed);
    const resp = toSupabaseResponseBody(rendered);
    assert.ok(resp.body);
    assert.equal(typeof resp.body.subject, 'string');
    assert.equal(typeof resp.body.html, 'string');
    assert.equal(typeof resp.body.textPlaintext, 'string');
    assert.match(resp.body.html, /^<!DOCTYPE html>/i);
});

test('fluxo completo: os 15 oficiais todos produzem subject na sua língua', () => {
    // Matriz mínima de FASE 16: um signup com cada locale oficial devolve o
    // subject daquela linha. Se uma string sumir do dicionário, isso quebra.
    for (const locale of SUPPORTED_LOCALES) {
        const parsed = parseHookPayload({
            type: 'signup',
            user: { id: 'u', email: 'a@b.co', user_metadata: { preferred_locale: locale } },
            action_url: 'https://x/y',
        });
        assert.equal(parsed.ok, true, `${locale}: parse falhou`);
        if (!parsed.ok) continue;
        const rendered = renderForHook(parsed);
        assert.equal(rendered.locale, locale);
        assert.equal(rendered.subject, EMAIL_COPY[locale].confirmSubject, `${locale}: subject errado`);
    }
});

test('fluxo completo recovery em 15 idiomas', () => {
    for (const locale of SUPPORTED_LOCALES) {
        const parsed = parseHookPayload({
            type: 'recovery',
            user: { id: 'u', email: 'a@b.co', user_metadata: { preferred_locale: locale } },
            action_url: 'https://x/reset',
        });
        if (!parsed.ok) continue;
        const rendered = renderForHook(parsed);
        assert.equal(rendered.subject, EMAIL_COPY[locale].recoverSubject);
    }
});

test('firstName em user_metadata aparece no corpo (escapado)', () => {
    const parsed = parseHookPayload({
        type: 'signup',
        user: {
            id: 'u',
            email: 'a@b.co',
            user_metadata: { preferred_locale: 'en', first_name: 'Alice' },
        },
        action_url: 'https://x/y',
    });
    if (!parsed.ok) { assert.fail('parse ok esperado'); return; }
    const rendered = renderForHook(parsed);
    assert.match(rendered.html, /Alice/);
});

test('full_name fallback quando first_name ausente (pega o primeiro token)', () => {
    const parsed = parseHookPayload({
        type: 'signup',
        user: {
            id: 'u',
            email: 'a@b.co',
            user_metadata: { preferred_locale: 'en', full_name: 'Ada Lovelace' },
        },
        action_url: 'https://x/y',
    });
    if (!parsed.ok) { assert.fail(); return; }
    const rendered = renderForHook(parsed);
    assert.match(rendered.html, /Ada/);
    assert.ok(!rendered.html.match(/Loveland/), 'só o primeiro token deveria aparecer');
});
