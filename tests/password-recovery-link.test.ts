/**
 * RECOVERY LINK — the real defect, and the international fix.
 *
 * The reported symptom (both sites): the user clicks the email link, a tab opens,
 * they briefly see the login, a red error flashes, and "out of nowhere" they are
 * logged into their own account — instead of the create-new-password screen.
 *
 * ROOT CAUSE: the Supabase recovery link's default destination is the project's
 * Site URL. If the redirect URL is not in the ALLOWED list, the site's
 * `redirectTo` is IGNORED and the link sends the user to the Site URL with the
 * token in the fragment. With the token in the fragment, supabase-js opens a
 * session by itself (detectSessionInUrl).
 *
 * The international site keeps its own @supabase/ssr PKCE singleton (it must not
 * be changed here, to avoid regressing Google OAuth — FASE 8), so the fix is:
 *   1. the login REQUESTS the link through the dedicated IMPLICIT recovery client,
 *      with a LOCALE-PRESERVING redirect, and confirms with a toast (never alert);
 *   2. the reset page RECOGNIZES the link format (expired / missing / valid) by
 *      reading the URL, adopts the recovery session, and after the change sends
 *      the user to /dashboard authenticated;
 *   3. nothing writes profiles, signs up, or signs in during recovery.
 *
 * Run: npm test  (node --test)
 */

import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  isRecoveryLink,
  redirectToReset,
  interpretRecoveryLink,
} from '../lib/password-recovery.ts';

const loginPage = readFileSync('app/[locale]/login/page.tsx', 'utf8');
const resetPage = readFileSync('app/[locale]/reset-password/page.tsx', 'utf8');
const recoveryClient = readFileSync('lib/recovery-client.ts', 'utf8');

describe('recognize the recovery link', () => {
  test('implicit (fragment) link is recognized', () => {
    const parts = { hash: 'access_token=abc.def&refresh_token=xyz&type=recovery', search: '' };
    assert.equal(isRecoveryLink(parts, '/'), true);
    assert.equal(isRecoveryLink(parts, '/pt-br/login'), true);
  });

  test('expired link (error in the fragment) is recognized', () => {
    assert.equal(isRecoveryLink({ hash: 'error=access_denied&error_code=otp_expired', search: '' }, '/'), true);
  });

  test('PKCE is recovery on any page except the OAuth callback', () => {
    const parts = { hash: '', search: 'code=pkce-123' };
    assert.equal(isRecoveryLink(parts, '/reset-password'), true);
    assert.equal(isRecoveryLink(parts, '/'), true);
    assert.equal(isRecoveryLink(parts, '/en/login'), true);
    // The OAuth callback is a SERVER route (?code= there is Google, not recovery).
    assert.equal(isRecoveryLink(parts, '/auth/callback'), false);
  });

  test('a common URL is not a recovery link', () => {
    assert.equal(isRecoveryLink({ hash: '', search: '' }, '/dashboard'), false);
    assert.equal(isRecoveryLink({ hash: '', search: 'tab=licenses' }, '/dashboard'), false);
  });

  test('the destination preserves the token (fragment and query)', () => {
    assert.equal(
      redirectToReset({ hash: 'access_token=abc&type=recovery', search: '' }),
      '/reset-password#access_token=abc&type=recovery'
    );
    assert.equal(redirectToReset({ hash: '', search: 'code=pkce' }), '/reset-password?code=pkce');
    // localized caller keeps the language segment
    assert.equal(
      redirectToReset({ hash: '', search: 'code=pkce' }, '/ja/reset-password'),
      '/ja/reset-password?code=pkce'
    );
  });
});

describe('the login requests the link the international-safe way', () => {
  test('it asks through the implicit recovery client', () => {
    assert.match(loginPage, /recoveryClient\(\)\.auth\.resetPasswordForEmail/);
  });
  test('the redirect keeps the locale segment', () => {
    assert.match(loginPage, /\/\$\{loc\}\/reset-password/);
    assert.match(loginPage, /localeFromPathname\(window\.location\.pathname\)/);
  });
  test('no raw alert() is used for the confirmation', () => {
    assert.ok(!/alert\(["']Email sent!["']\)/.test(loginPage), 'the old confirmation used a raw alert');
    assert.match(loginPage, /toast\.success\(/);
  });
});

describe('the reset page exchanges the link and never destroys the session', () => {
  test('it interprets the recovery link on the client', () => {
    assert.match(resetPage, /interpretRecoveryLink\(readLocationParts\(\)\)/);
  });
  test('there is no signOut ejecting the user from their own account', () => {
    assert.ok(!/auth\.signOut\(\)/.test(resetPage));
    assert.match(resetPage, /router\.replace\('\/dashboard'\)/);
  });
  test('resend uses the implicit client and the localized path', () => {
    assert.match(resetPage, /recoveryClient\(\)\.auth\.resetPasswordForEmail/);
    assert.match(resetPage, /resetPathForLocale\(locale\)/);
  });
  test('the token-exchange error is explained, not shown raw', () => {
    assert.match(resetPage, /explainTokenExchangeError/);
  });
});

describe('the link request uses the IMPLICIT flow (works in any browser)', () => {
  test('an implicit recovery client exists', () => {
    assert.match(recoveryClient, /flowType: 'implicit'/);
    assert.match(recoveryClient, /persistSession: false/);
    assert.match(recoveryClient, /detectSessionInUrl: false/);
  });
});

describe('link interpretation stays correct', () => {
  test('valid fragment', () => {
    assert.equal(interpretRecoveryLink({ hash: 'access_token=abc&refresh_token=xyz', search: '' }).kind, 'implicit');
  });
  test('PKCE', () => {
    assert.equal(interpretRecoveryLink({ hash: '', search: 'code=abc' }).kind, 'pkce');
  });
  test('expired link', () => {
    assert.equal(interpretRecoveryLink({ hash: 'error_code=otp_expired', search: '' }).kind, 'error');
  });
});
