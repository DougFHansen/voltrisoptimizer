'use client';

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * PASSWORD RECOVERY CLIENT — IMPLICIT flow, on purpose.
 * (Ported from the Brazilian reference; env var names are identical here.)
 *
 * The site uses `@supabase/ssr`, which works with PKCE. Under PKCE, the reset
 * request stores a "code verifier" in a cookie of the site where it was asked,
 * and the emailed link comes back with a `?code=` that must be exchanged against
 * that verifier.
 *
 * The verifier lives in a COOKIE of the requesting browser. The Supabase link,
 * however, passes through a redirect chain (http -> https -> www) and the cookie
 * does not survive it — the verifier simply no longer exists when the link
 * arrives. The error is:
 *
 *     invalid flow state, no valid flow state found
 *
 * and the person is told to "open in the same browser" even when they are in the
 * same browser (the Lax/Strict cookie does not cross the navigation coming from
 * the email client).
 *
 * WITH THE IMPLICIT FLOW the link comes back with the token in the FRAGMENT
 * (`#access_token=…&type=recovery`): there is no verifier, no cookie, and the
 * link works in ANY browser, on ANY device, after clearing site data. That is
 * what a professional system needs: the link must work for whoever receives it,
 * not only for whoever requested it.
 *
 * This client is single-use: it does not persist a session and never reads the
 * URL, so it never races the app's shared SSR singleton over the same token.
 */
let cliente: SupabaseClient | null = null;

export function recoveryClient(): SupabaseClient {
  if (cliente) return cliente;
  cliente = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        flowType: 'implicit',
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    }
  );
  return cliente;
}
