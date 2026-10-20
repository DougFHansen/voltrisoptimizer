/**
 * PASSWORD RECOVERY FLOW TESTS — VOLTRIS INTERNATIONAL (FASE 2 / FASE 13).
 *
 * These pin the parity port of the Brazilian recovery experience:
 *   - BOTH Supabase link formats are recognized;
 *   - expired/invalid/missing link produces a message that SAYS WHAT TO DO;
 *   - the password is only accepted when it meets the product requirements;
 *   - a Google-only session is not treated as a local-password account;
 *   - the recovery session is never destroyed before/after the exchange;
 *   - redirects keep the locale, the raw Supabase error never reaches the screen.
 *
 * Run: npm test  (node --test)
 */

import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  interpretRecoveryLink,
  validatePassword,
  isPasswordAcceptable,
  passwordsMatch,
  hasPasswordIdentity,
  explainUpdateError,
  explainTokenExchangeError,
  resetPathForLocale,
  MIN_PASSWORD_LENGTH,
  type RecoveryUrlParts,
} from '../lib/password-recovery.ts';

const RESET_PAGE = 'app/[locale]/reset-password/page.tsx';

const AT = 'eyJhbGciOiJIUzI1NiJ9.access-token';
const RT = 'v1-refresh-token';

function url(hash: string, search = ''): RecoveryUrlParts {
  return { hash, search };
}

// ---------------------------------------------------------------------------
// Expired / invalid / missing link
// ---------------------------------------------------------------------------

describe('expired or invalid link is recognized and explained', () => {
  test('otp_expired becomes an expiry message with instructions', () => {
    const r = interpretRecoveryLink(url('error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired'));
    assert.equal(r.kind, 'error');
    if (r.kind !== 'error') return;
    assert.equal(r.reason, 'expired');
    assert.ok(r.message.toLowerCase().includes('expired'));
    assert.ok(r.message.includes('new link') || r.message.includes('used'), 'must tell the user what to do');
  });

  test('generic invalid token is not treated as expired', () => {
    const r = interpretRecoveryLink(url('error=access_denied&error_code=otp_disabled'));
    assert.equal(r.kind, 'error');
    if (r.kind !== 'error') return;
    assert.equal(r.reason, 'malformed');
  });

  test('error with a description is passed to the user', () => {
    const r = interpretRecoveryLink(url('error=server_error&error_description=No+user+found'));
    assert.equal(r.kind, 'error');
    if (r.kind !== 'error') return;
    assert.ok(r.message.includes('No user found'));
  });

  test('error in the QUERY is also read (not only the fragment)', () => {
    const r = interpretRecoveryLink(url('', 'error_code=otp_expired&error=access_denied'));
    assert.equal(r.kind, 'error');
    if (r.kind !== 'error') return;
    assert.equal(r.reason, 'expired');
  });

  test('page opened with NO token says it must come from the email', () => {
    const r = interpretRecoveryLink(url(''));
    assert.equal(r.kind, 'error');
    if (r.kind !== 'error') return;
    assert.equal(r.reason, 'missing');
    assert.ok(r.message.includes('link sent to your email'));
  });

  test('empty hash with empty query is not interpreted as valid', () => {
    const r = interpretRecoveryLink(url('#'));
    assert.equal(r.kind, 'error');
  });
});

// ---------------------------------------------------------------------------
// Valid link in BOTH formats
// ---------------------------------------------------------------------------

describe('valid link is recognized in both Supabase formats', () => {
  test('IMPLICIT: token in the fragment', () => {
    const r = interpretRecoveryLink(url(`access_token=${AT}&refresh_token=${RT}&type=recovery`));
    assert.equal(r.kind, 'implicit');
    if (r.kind !== 'implicit') return;
    assert.equal(r.accessToken, AT);
    assert.equal(r.refreshToken, RT);
  });

  test('PKCE: code in the query', () => {
    const r = interpretRecoveryLink(url('', 'code=abc-123'));
    assert.equal(r.kind, 'pkce');
    if (r.kind !== 'pkce') return;
    assert.equal(r.code, 'abc-123');
  });

  test('fragment WITHOUT refresh_token is not accepted as valid', () => {
    const r = interpretRecoveryLink(url(`access_token=${AT}`));
    assert.equal(r.kind, 'error');
  });

  test('a link with a leading "#" behaves like one without it', () => {
    const withHash = interpretRecoveryLink(url(`#access_token=${AT}&refresh_token=${RT}`));
    assert.equal(withHash.kind, 'implicit');
  });

  test('extra Supabase params do not break parsing', () => {
    const r = interpretRecoveryLink(url(`access_token=${AT}&refresh_token=${RT}&token_type=bearer&expires_in=3600&type=recovery`));
    assert.equal(r.kind, 'implicit');
  });

  test('error takes PRECEDENCE over the token', () => {
    const r = interpretRecoveryLink(url(`error=access_denied&error_code=otp_expired&access_token=${AT}&refresh_token=${RT}`));
    assert.equal(r.kind, 'error');
  });
});

// ---------------------------------------------------------------------------
// Password requirements
// ---------------------------------------------------------------------------

describe('password requirements', () => {
  test('short password is refused', () => assert.equal(isPasswordAcceptable('Ab1'), false));
  test('password without a number is refused', () => assert.equal(isPasswordAcceptable('abcdefghij'), false));
  test('password without a letter is refused', () => assert.equal(isPasswordAcceptable('1234567890'), false));
  test('valid password is accepted', () => assert.equal(isPasswordAcceptable('Voltris2026'), true));

  test('the length boundary is exactly where it should be', () => {
    assert.equal(MIN_PASSWORD_LENGTH, 8);
    assert.equal(isPasswordAcceptable('a'.repeat(6) + '1'), false);
    assert.equal(isPasswordAcceptable('a'.repeat(7) + '1'), true);
  });

  test('each requirement is reported individually', () => {
    const checks = validatePassword('Ab1');
    assert.equal(checks.length, 3);
    assert.equal(checks[0].ok, false);
    assert.ok(checks.every((c) => typeof c.label === 'string' && c.label.length > 0));
  });

  test('different passwords are rejected', () => assert.equal(passwordsMatch('Voltris2026', 'Voltris2027'), false));
  test('equal passwords are accepted', () => assert.equal(passwordsMatch('Voltris2026', 'Voltris2026'), true));
  test('an empty field is never considered a match', () => assert.equal(passwordsMatch('', ''), false));
});

// ---------------------------------------------------------------------------
// Identity (Google-only accounts)
// ---------------------------------------------------------------------------

describe('user identity', () => {
  test('an account with a local password is recognized', () => assert.equal(hasPasswordIdentity([{ provider: 'email' }]), true));
  test('a Google-only account has NO local password', () => assert.equal(hasPasswordIdentity([{ provider: 'google' }]), false));
  test('a hybrid account (Google + email) HAS a local password', () => assert.equal(hasPasswordIdentity([{ provider: 'google' }, { provider: 'email' }]), true));
  test('with no metadata, no restriction is invented', () => {
    assert.equal(hasPasswordIdentity([]), true);
    assert.equal(hasPasswordIdentity(null), true);
  });
});

// ---------------------------------------------------------------------------
// Raw Supabase errors never reach the screen
// ---------------------------------------------------------------------------

describe('a Supabase error never reaches the screen raw', () => {
  test('a session error becomes an ask-for-a-new-link instruction', () => {
    const m = explainUpdateError('Auth session missing');
    assert.ok(!/missing/i.test(m), 'the raw text must not leak');
    assert.ok(m.includes('Ask for a new link'));
  });
  test('same-as-current password is explained', () => {
    const m = explainUpdateError('New password should be different from the old password');
    assert.ok(m.toLowerCase().includes('different'));
  });
  test('unconfirmed email is explained', () => {
    const m = explainUpdateError('Email not confirmed');
    assert.ok(m.toLowerCase().includes('confirm'));
  });
  test('rate limit is explained', () => {
    const m = explainUpdateError('Too many requests');
    assert.ok(m.toLowerCase().includes('attempt'));
  });
  test('unknown error returns something displayable, never empty', () => {
    assert.ok(explainUpdateError('').length > 0);
    assert.ok(explainUpdateError('generic failure').length > 0);
  });
  test('token exchange "flow state" error is explained', () => {
    const m = explainTokenExchangeError('invalid flow state, no valid flow state found');
    assert.ok(m.includes('SAME browser'));
  });
});

// ---------------------------------------------------------------------------
// Locale preservation (international-specific)
// ---------------------------------------------------------------------------

describe('locale is preserved in the recovery path', () => {
  test('resetPathForLocale builds a localized reset path', () => {
    assert.equal(resetPathForLocale('pt-br'), '/pt-br/reset-password');
    assert.equal(resetPathForLocale('JA'), '/ja/reset-password');
    assert.equal(resetPathForLocale(''), '/en/reset-password');
  });
});

// ---------------------------------------------------------------------------
// Account integrity: never recreate a user
// ---------------------------------------------------------------------------

describe('account integrity', () => {
  const src = readFileSync(RESET_PAGE, 'utf8');
  test('the reset page does not insert into profiles', () => {
    assert.equal(/\.from\(\s*['"]profiles['"]\s*\)\s*\.\s*insert/.test(src), false);
  });
  test('the page calls neither signUp nor signIn', () => {
    assert.equal(/auth\.signUp/.test(src), false, 'signup would create a new user');
    assert.equal(/auth\.signIn/.test(src), false, 'signIn would authenticate another account');
  });
  test('the change is done only by updateUser with the new password', () => {
    assert.ok(src.includes('auth.updateUser({ password })'));
  });
  test('the page never destroys the recovery session with signOut', () => {
    assert.equal(/auth\.signOut\(\)/.test(src), false, 'the user must land on the dashboard authenticated');
  });
  test('after the change the user goes to the dashboard', () => {
    assert.ok(src.includes("router.replace('/dashboard')"));
  });
});

// ---------------------------------------------------------------------------
// Required interface
// ---------------------------------------------------------------------------

describe('the screen delivers what FASE 2 requires', () => {
  const src = readFileSync(RESET_PAGE, 'utf8');
  test('title is "Create new password"', () => assert.ok(src.includes('Create new password')));
  test('has show/hide password', () => {
    assert.ok(src.includes('showPw'));
    assert.ok(/Hide passwords\|Show passwords|Hide passwords|Show passwords/.test(src));
  });
  test('has a loading state', () => {
    assert.ok(/Validating your link/.test(src));
    assert.ok(/Resetting/.test(src));
  });
  test('has a success message', () => assert.ok(/Password reset/.test(src)));
  test('handles an expired link with a request-another option', () => {
    assert.ok(/Invalid link/.test(src));
    assert.ok(/Send a new link/.test(src));
  });
  test('errors have role=alert (announced to screen readers)', () => assert.ok(src.includes('role="alert"')));
  test('is responsive and keeps long text on screen', () => {
    assert.ok(src.includes('max-w-md'));
    assert.ok(src.includes('px-4'));
    assert.ok(src.includes('w-full'));
    assert.ok(src.includes('break-all') || src.includes('break-words'), 'long email must be able to wrap');
  });
  test('the button only enables with a valid password AND confirmation', () => {
    assert.ok(/disabled=\{loading \|\| !passwordOk \|\| !match\}/.test(src));
  });
});
