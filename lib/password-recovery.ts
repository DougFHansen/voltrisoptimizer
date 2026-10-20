/**
 * PASSWORD RECOVERY LOGIC (VOLTRIS INTERNATIONAL)
 * ================================================
 *
 * Ported from the Brazilian reference implementation and adapted to the
 * international site. Kept OUT of the component for two practical reasons:
 *
 *  1. Next.js only allows exporting `default` and a few route constants from a
 *     `page.tsx` — exporting a function from a page breaks `.next/types`.
 *  2. Isolating the logic lets us TEST it with no browser and no Supabase, which
 *     is what FASE 13 of the parity mission requires.
 *
 * The Supabase recovery link arrives in one of two shapes and BOTH must be
 * handled:
 *
 *   IMPLICIT   /{locale}/reset-password#access_token=…&type=recovery
 *              (the fragment is NEVER sent to the server — only the browser sees it)
 *   PKCE       /{locale}/reset-password?code=…
 *
 * i18n NOTE: every prose string here is written in ENGLISH — the source of truth
 * keyed into the site-wide English dictionary (lib/guides-i18n/data/{lang}.json).
 * The DOM SiteTextTranslator maps English -> the 15 languages at runtime, so the
 * UI must be authored in English (NOT Portuguese, as the BR site does). Unknown
 * strings simply stay English.
 */

/** Minimum password length, matching the signup requirement. */
export const MIN_PASSWORD_LENGTH = 8;

export interface PasswordCheck {
  ok: boolean;
  label: string;
}

export function validatePassword(pw: string): PasswordCheck[] {
  return [
    { ok: pw.length >= MIN_PASSWORD_LENGTH, label: `At least ${MIN_PASSWORD_LENGTH} characters` },
    { ok: /[A-Za-z]/.test(pw), label: 'At least one letter' },
    { ok: /\d/.test(pw), label: 'At least one number' },
  ];
}

export function isPasswordAcceptable(pw: string): boolean {
  return validatePassword(pw).every((c) => c.ok);
}

export function passwordsMatch(a: string, b: string): boolean {
  return a.length > 0 && a === b;
}

// ---------------------------------------------------------------------------
// Link interpretation
// ---------------------------------------------------------------------------

export type RecoveryErrorReason = 'expired' | 'malformed' | 'missing';

export type RecoveryLinkState =
  | { status: 'checking' }
  | { status: 'valid'; hasPasswordIdentity: boolean }
  | { status: 'invalid'; reason: RecoveryErrorReason; message: string };

/** Raw URL input, isolated so it can be tested without `window`. */
export interface RecoveryUrlParts {
  hash: string;
  search: string;
}

/** Reads `window.location` on its own, so it can be injected into a test. */
export function readLocationParts(): RecoveryUrlParts {
  if (typeof window === 'undefined') return { hash: '', search: '' };
  const raw = window.location.hash;
  return {
    hash: raw.startsWith('#') ? raw.slice(1) : raw,
    search: window.location.search.startsWith('?') ? window.location.search.slice(1) : window.location.search,
  };
}

/**
 * Interprets the link URL WITHOUT touching the network.
 *
 * It returns WHAT TO DO, not the result of the call: the caller executes, because
 * setSession/exchangeCodeForSession are async. Separating the two responsibilities
 * is what lets us test the 4 link shapes — valid, expired, invalid, missing — with
 * no Supabase at all.
 */
export function interpretRecoveryLink(parts: RecoveryUrlParts):
  | { kind: 'error'; reason: RecoveryErrorReason; message: string }
  | { kind: 'pkce'; code: string }
  | { kind: 'implicit'; accessToken: string; refreshToken: string }
  | { kind: 'validating' } {

  // The URL is a trust boundary: the parser must not depend on the caller having
  // stripped the "#". Without this normalization, URLSearchParams would read the
  // key as "#access_token" and a valid link would fall into the "no token" case.
  const rawHash = parts.hash ?? '';
  const hash = (rawHash.startsWith('#') ? rawHash.slice(1) : rawHash).replace(/^\/+/, '');
  const rawSearch = parts.search ?? '';
  const search = rawSearch.startsWith('?') ? rawSearch.slice(1) : rawSearch;

  const hashParams = new URLSearchParams(hash);
  const query = new URLSearchParams(search);

  // 1. Explicit error — expired, already-used, or invalid token.
  const code = hashParams.get('error_code') || query.get('error_code');
  const name = hashParams.get('error') || query.get('error');
  const desc = hashParams.get('error_description') || query.get('error_description');

  if (code || name) {
    // Only otp_expired is an expiry. otp_disabled means email delivery is OFF in
    // the project — a configuration problem, not a dead link, and guidance differs.
    const expired = /otp_expired/i.test(`${code ?? ''} ${name ?? ''}`);
    return {
      kind: 'error',
      reason: expired ? 'expired' : 'malformed',
      message: expired
        ? 'This link expired or has already been used. Reset links are only valid for a short time and can only be used once.'
        : desc
            ? `We could not validate this link: ${desc}`
            : 'We could not validate this reset link.',
    };
  }

  // 2. PKCE.
  const pkce = query.get('code');
  if (pkce) return { kind: 'pkce', code: pkce };

  // 3. Implicit.
  const at = hashParams.get('access_token');
  const rt = hashParams.get('refresh_token');
  if (at && rt) return { kind: 'implicit', accessToken: at, refreshToken: rt };

  // 4. No token at all.
  return {
    kind: 'error',
    reason: 'missing',
    message:
      'This page only works when opened from the link sent to your email. If you opened it directly, the address does not carry the required authorization.',
  };
}

/**
 * Is this URL a RECOVERY LINK? The Supabase link can land on ANY page (not only
 * /reset-password) because the project's Site URL is the default destination when
 * the redirect URL is not in the allowed list. Recognizing it anywhere lets the
 * app forward it to /reset-password and NOT auto-open a session.
 */
export function isRecoveryLink(parts: RecoveryUrlParts, pathname?: string): boolean {
  const rawHash = parts.hash ?? '';
  const hash = (rawHash.startsWith('#') ? rawHash.slice(1) : rawHash).replace(/^\/+/, '');
  const rawSearch = parts.search ?? '';
  const search = rawSearch.startsWith('?') ? rawSearch.slice(1) : rawSearch;

  const hashParams = new URLSearchParams(hash);
  const query = new URLSearchParams(search);

  if (hashParams.get('type') === 'recovery' && hashParams.get('access_token')) return true;
  if (hashParams.get('error_code') || hashParams.get('error')) return true;
  if (query.get('error_code')) return true;

  // PKCE: ?code= is the recovery link shape under PKCE. The OAuth callback also
  // uses ?code=, but that is a SERVER route (/auth/callback). In the browser, a
  // ?code= on any other page is a recovery link that landed in the wrong place.
  if (query.get('code')) {
    const path = (pathname ?? '').replace(/\/+$/, '');
    if (!/(^|\/)auth\/callback$/.test(path)) return true;
  }

  return false;
}

/**
 * Builds the destination URL for /reset-password, preserving the token.
 * The token may be in the fragment (#access_token=…) or the query (?code=…).
 * Losing either makes a valid link look invalid. `pathname` is localized by the
 * caller (e.g. '/pt-br/reset-password') so the recovery keeps the user language.
 */
export function redirectToReset(parts: RecoveryUrlParts, pathname = '/reset-password'): string {
  const hash = parts.hash ? (parts.hash.startsWith('#') ? parts.hash : `#${parts.hash}`) : '';
  const search = parts.search ? (parts.search.startsWith('?') ? parts.search : `?${parts.search}`) : '';
  return `${pathname}${search}${hash}`;
}

/**
 * Error while EXCHANGING the token (the step before showing the form).
 * "invalid flow state, no valid flow state found" is the real reported case: the
 * code verifier is stored in the browser where the link was REQUESTED. If the
 * person opened the link in another browser/device, the verifier is gone.
 */
export function explainTokenExchangeError(message: string | null | undefined): string {
  const m = (message ?? '').toLowerCase();
  if (/flow state|verifier|no valid flow/.test(m)) {
    return 'This link must be opened in the SAME browser where you requested the reset. Ask for a new link and open it on the same device (no private mode).';
  }
  if (/expired|otp_expired|invalid/.test(m)) {
    return 'This link expired or has already been used. Ask for a new link to continue.';
  }
  if (/email.*confirm|not confirmed/.test(m)) {
    return 'This email has not been confirmed yet. Confirm it before resetting the password.';
  }
  if (/rate|too many/.test(m)) {
    return 'Too many attempts in a short time. Wait a few minutes and try again.';
  }
  return 'We could not validate this link. Ask for a new link to continue.';
}

/**
 * Does the user have a local password?
 * An account created with Google only has no `email` identity. Setting a password
 * on it CREATES a second identity — Google access keeps working. Legitimate, but
 * must be stated, because refusing would leave a Google user with no path to a password.
 */
export function hasPasswordIdentity(identities: Array<{ provider?: string }> | null | undefined): boolean {
  const list = identities ?? [];
  if (list.length === 0) return true; // No metadata: do not invent a restriction; updateUser decides.
  return list.some((i) => i.provider === 'email');
}

// ---------------------------------------------------------------------------
// Supabase error messages, translated into something actionable
// ---------------------------------------------------------------------------

/** updateUser returns raw English messages. A raw error is exactly the reported
 *  defect, so each known case becomes a sentence that says what to do. */
export function explainUpdateError(message: string): string {
  const m = (message ?? '').toLowerCase();
  if (/session|token|jwt|expired|invalid/i.test(m)) {
    return 'Your recovery session expired. Ask for a new link to reset the password.';
  }
  if (/new password should be different|same as the old/i.test(m)) {
    return 'The new password must be different from the current one.';
  }
  if (/email.*confirm|not confirmed/i.test(m)) {
    return 'This email has not been confirmed yet. Confirm it before resetting the password.';
  }
  if (/rate|too many/i.test(m)) {
    return 'Too many attempts in a short time. Wait a few minutes and try again.';
  }
  return message || 'We could not reset the password. Please try again.';
}

/** Returns the locale segment of a recovery/reset path, e.g. 'pt-br' -> '/pt-br/reset-password'. */
export function resetPathForLocale(locale: string): string {
  const l = (locale || 'en').toLowerCase();
  return `/${l}/reset-password`;
}
