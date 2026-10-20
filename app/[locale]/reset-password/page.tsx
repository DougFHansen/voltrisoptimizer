'use client';

/**
 * "CREATE NEW PASSWORD" PAGE — VOLTRIS INTERNATIONAL
 * ==================================================
 *
 * The visible tip of the recovery flow. The logic lives in
 * `lib/password-recovery.ts` (pure, testable without a browser) and the request
 * for a fresh link uses `lib/recovery-client.ts` (implicit flow, so the link
 * works in any browser/device).
 *
 * This is a port of the proven Brazilian experience, adapted to the international
 * site. It fixes the previous, thinner version that:
 *
 *   1. read NEITHER Supabase link format and only reacted to an implicit session;
 *   2. swallowed an expired link (`#error=otp_expired`) and only failed on submit;
 *   3. had no resend path, no password requirements checklist, no Google-identity
 *      notice, no accessibility (role=alert / aria-describedby), no show/hide, and
 *      dumped the raw Supabase error text on screen;
 *   4. redirected to `/login` without the locale segment, dropping the language.
 *
 * Behaviour now matches the BR reference:
 *   - distinguishes a valid link from an expired/invalid/missing one;
 *   - signals that a RECOVERY session is active (this is official Supabase
 *     behaviour — the link token opens a session — and saying it beats a forced
 *     logout that would break the reset itself);
 *   - requires recovery context before enabling the form, so another account's
 *     session cannot overwrite this password;
 *   - ends on the dashboard, authenticated, the way a user expects.
 *
 * i18n: every prose string is authored in ENGLISH (the dictionary's source of
 * truth). The DOM SiteTextTranslator renders it in the user's language. Redirects
 * keep the `/{locale}` prefix (except `/dashboard`, a non-localized bypass route).
 */

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';
import { recoveryClient } from '@/lib/recovery-client';
import { localeFromPathname } from '@/lib/locale';
import type { AuthChangeEvent, Session } from '@supabase/supabase-js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Eye, EyeOff, AlertTriangle, CheckCircle2, Mail } from 'lucide-react';
import {
  interpretRecoveryLink,
  readLocationParts,
  validatePassword,
  isPasswordAcceptable,
  passwordsMatch,
  hasPasswordIdentity,
  explainUpdateError,
  explainTokenExchangeError,
  resetPathForLocale,
  type RecoveryLinkState,
} from '@/lib/password-recovery';

export default function ResetPasswordPage() {
  const [link, setLink] = useState<RecoveryLinkState>({ status: 'checking' });
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resending, setResending] = useState(false);

  const router = useRouter();
  // One single client for the whole page. The shared SSR client (PKCE +
  // detectSessionInUrl) absorbs the recovery token; this page reads the session
  // it produced and performs the password update inside that recovery context.
  const supabase = useMemo(() => createClient(), []);
  const mounted = useRef(true);

  const locale =
    typeof window !== 'undefined' ? localeFromPathname(window.location.pathname) : 'en';

  const checks = validatePassword(password);
  const passwordOk = isPasswordAcceptable(password);
  const match = passwordsMatch(password, confirm);

  useEffect(() => {
    mounted.current = true;

    const adoptSession = (session: Session | null) => {
      if (!mounted.current || !session) return;
      setEmail(session.user?.email ?? null);
      setLink({
        status: 'valid',
        hasPasswordIdentity: hasPasswordIdentity(session.user?.identities),
      });
    };

    (async () => {
      const parsed = interpretRecoveryLink(readLocationParts());

      if (parsed.kind === 'error') {
        setLink({ status: 'invalid', reason: parsed.reason, message: parsed.message });
        return;
      }

      if (parsed.kind === 'validating') {
        setLink({
          status: 'invalid',
          reason: 'missing',
          message: 'We could not read the recovery link.',
        });
        return;
      }

      // A real token is present (implicit fragment or PKCE code). The shared SSR
      // client is already trying to consume it; adopt the session if/when it
      // lands. If none shows up shortly, the link was expired/used -> actionable.
      const { data } = await supabase.auth.getSession();
      if (mounted.current) {
        if (data.session) {
          adoptSession(data.session);
          return;
        }
        window.setTimeout(() => {
          if (mounted.current) {
            setLink({
              status: 'invalid',
              reason: 'expired',
              message: explainTokenExchangeError(null),
            });
          }
        }, 4000);
      }
    })();

    // A late PASSWORD_RECOVERY event revalidates the screen.
    const { data: sub } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        if (!mounted.current) return;
        if (event === 'PASSWORD_RECOVERY') adoptSession(session);
      }
    );

    return () => {
      mounted.current = false;
      sub.subscription.unsubscribe();
    };
  }, [supabase]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!passwordOk) {
      setError('The password does not meet the minimum requirements.');
      return;
    }
    if (!match) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) {
        setError(explainUpdateError(updateError.message));
        return;
      }

      setSuccess(true);

      // The recovery session stays valid after the change — it is what lets the
      // user straight into the panel with the new password. No forced signOut.
      // `/dashboard` is a non-localized bypass route, so no locale prefix is needed.
      window.history.replaceState({}, '', '/dashboard');
      window.setTimeout(() => {
        router.replace('/dashboard');
      }, 1200);
    } finally {
      setLoading(false);
    }
  };

  const resend = async () => {
    if (!email) {
      router.push(`${resetPathForLocale(locale).replace('/reset-password', '/login')}?recovery=1`);
      return;
    }
    setResending(true);
    try {
      // Same implicit client as the initial request: the re-sent link must also
      // work in any browser. Keep the locale so the user stays in their language.
      await recoveryClient().auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}${resetPathForLocale(locale)}`,
      });
      router.push(`${resetPathForLocale(locale).replace('/reset-password', '/login')}?recovery=sent`);
    } finally {
      setResending(false);
    }
  };

  return (
    <>
      <Header />
      <div className="pt-16 sm:pt-20 min-h-screen flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-[#171313] p-8 rounded-lg shadow-lg border border-[#8B31FF]/10">

          {link.status === 'checking' && (
            <div className="text-center py-8" role="status" aria-live="polite">
              <div className="w-10 h-10 border-2 border-[#8B31FF] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="mt-4 text-sm text-[#adb5bd]">Validating your link…</p>
            </div>
          )}

          {link.status === 'invalid' && (
            <div role="alert">
              <div className="flex items-start gap-3 mb-4">
                <FiIcon />
                <h2 className="text-xl font-bold text-white">Invalid link</h2>
              </div>
              <p className="text-sm text-[#adb5bd] mb-6 break-words">{link.message}</p>
              <button
                onClick={resend}
                disabled={resending}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-white font-semibold transition-all disabled:opacity-50"
              >
                {resending ? 'Sending…' : 'Send a new link'}
              </button>
              <Link href={resetPathForLocale(locale).replace('/reset-password', '/login')} className="mt-4 block text-center text-sm text-[#8B31FF] hover:underline">
                Back to login
              </Link>
            </div>
          )}

          {link.status === 'valid' && !success && (
            <>
              <h2 className="text-2xl font-bold text-center mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF]">
                Create new password
              </h2>
              <p className="text-center text-sm text-[#adb5bd] mb-6 break-all">{email}</p>

              {!link.hasPasswordIdentity && (
                <div className="mb-5 flex items-start gap-2 rounded-lg border border-[#31A8FF]/30 bg-[#31A8FF]/10 p-3">
                  <Mail className="mt-0.5 shrink-0 text-[#31A8FF]" size={16} />
                  <p className="text-xs text-[#adb5bd]">
                    Your account uses Google sign-in. Setting a password makes it a
                    second way to sign in — your Google access stays exactly the same.
                  </p>
                </div>
              )}

              <form onSubmit={submit} noValidate>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                    New password
                  </label>
                  <div className="relative">
                    <input
                      type={showPw ? 'text' : 'password'}
                      id="password"
                      autoComplete="new-password"
                      className="w-full px-4 py-2 pr-11 rounded-lg bg-[#2a2a2e] text-white border border-[#8B31FF]/30 focus:border-[#FF4B6B] focus:outline-none"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-describedby="password-reqs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((v) => !v)}
                      aria-label={showPw ? 'Hide passwords' : 'Show passwords'}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#adb5bd] hover:text-white"
                    >
                      {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <ul id="password-reqs" className="mb-5 space-y-1">
                  {checks.map((c) => (
                    <li
                      key={c.label}
                      className={`text-xs flex items-center gap-1.5 ${c.ok ? 'text-emerald-400' : 'text-[#6c757d]'}`}
                    >
                      <CheckCircle2 size={12} className={c.ok ? '' : 'opacity-30'} />
                      {c.label}
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block text-white text-sm font-bold mb-2">
                    Confirm new password
                  </label>
                  <input
                    type={showPw ? 'text' : 'password'}
                    id="confirmPassword"
                    autoComplete="new-password"
                    className="w-full px-4 py-2 rounded-lg bg-[#2a2a2e] text-white border border-[#8B31FF]/30 focus:border-[#FF4B6B] focus:outline-none"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    aria-describedby="match-hint"
                  />
                  <p id="match-hint" aria-live="polite" className="mt-1 text-xs">
                    {confirm.length > 0 && !match && (
                      <span className="text-[#FF4B6B]">Passwords do not match.</span>
                    )}
                  </p>
                </div>

                {error && (
                  <div role="alert" className="mb-4 rounded-lg border border-[#FF4B6B]/30 bg-[#FF4B6B]/10 p-3">
                    <p className="text-sm text-[#FFB3C0]">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || !passwordOk || !match}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-white font-semibold hover:shadow-[0_0_20px_rgba(139,49,255,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Resetting…' : 'Confirm new password'}
                </button>
              </form>
            </>
          )}

          {success && (
            <div className="text-center py-6" role="status" aria-live="polite">
              <CheckCircle2 className="text-emerald-400 mx-auto mb-4" size={44} />
              <p className="text-lg font-semibold text-white mb-1">Password reset!</p>
              <p className="text-sm text-[#adb5bd]">Your password was changed. Taking you to the dashboard…</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

/** Small wrapper so the invalid-state header keeps a stable alert icon. */
function FiIcon() {
  return <AlertTriangle className="text-amber-500 mt-1 shrink-0" size={22} />;
}
