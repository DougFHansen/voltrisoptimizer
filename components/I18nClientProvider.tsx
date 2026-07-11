'use client';

import { useEffect } from 'react';
import { I18nProvider } from '@/contexts/I18nContext';
import { Locale } from '@/lib/i18n';

interface I18nClientProviderProps {
  children: React.ReactNode;
  initialLocale: Locale;
}

// Mapa de locale para lang do html e direção
const localeHtmlConfig: Record<Locale, { lang: string; dir: 'ltr' | 'rtl' }> = {
  'en':    { lang: 'en',    dir: 'ltr' },
  'es':    { lang: 'es',    dir: 'ltr' },
  'fr':    { lang: 'fr',    dir: 'ltr' },
  'de':    { lang: 'de',    dir: 'ltr' },
  'it':    { lang: 'it',    dir: 'ltr' },
  'ja':    { lang: 'ja',    dir: 'ltr' },
  'ko':    { lang: 'ko',    dir: 'ltr' },
  'ar':    { lang: 'ar',    dir: 'rtl' },
  'pt-br': { lang: 'pt-BR', dir: 'ltr' },
};

export default function I18nClientProvider({ children, initialLocale }: I18nClientProviderProps) {
  // Atualiza o atributo lang e dir do <html> no client para refletir o locale correto.
  // Isso é necessário para roteamento dinâmico sem duplicar a tag <html>.
  useEffect(() => {
    const config = localeHtmlConfig[initialLocale] || localeHtmlConfig['pt-br'];
    document.documentElement.lang = config.lang;
    document.documentElement.dir = config.dir;
  }, [initialLocale]);

  return (
    <I18nProvider initialLocale={initialLocale}>
      {children}
    </I18nProvider>
  );
}
