'use client';

import { useEffect, useState } from 'react';
import { SiteTProvider } from '@/lib/site-i18n/client';
import SiteTextTranslator from '@/lib/site-i18n/SiteTextTranslator';

/**
 * Locale wrapper for middleware "bypass" routes (/regions, /international) that
 * live OUTSIDE app/[locale], so the localized layout never provides them with an
 * i18n context or the DOM text translator.
 *
 * We read the visitor's chosen language from the `voltris-locale` cookie (the
 * same one the LanguageSelector sets) and provide BOTH translation layers the
 * rest of the site relies on:
 *  - <SiteTProvider> so client components (e.g. RegionsClient) can call t() for
 *    templated sentences with interpolated city names.
 *  - <SiteTextTranslator> the DOM walker for server-rendered static prose.
 *
 * Defaults to 'en' (inert: provider returns identity t, translator fetches
 * nothing) until the cookie is read on the client, so there is no hydration
 * mismatch.
 */
export default function ClientLocaleI18n({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState('en');
  useEffect(() => {
    const m = document.cookie.match(/(?:^|;\s*)voltris-locale=([^;]+)/);
    if (m) setLocale(decodeURIComponent(m[1]));
  }, []);

  // Sincroniza o atributo lang (e dir p/ RTL) do <html> com o idioma efetivo.
  // Rotas de bypass são renderizadas pelo layout raiz com lang="en", então
  // ajustamos no cliente para refletir o idioma escolhido (bom p/ SEO/acesso).
  useEffect(() => {
    const html = document.documentElement;
    if (!html) return;
    html.lang = locale;
    html.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);
  return (
    <SiteTProvider locale={locale}>
      {children}
      <SiteTextTranslator locale={locale} />
    </SiteTProvider>
  );
}
