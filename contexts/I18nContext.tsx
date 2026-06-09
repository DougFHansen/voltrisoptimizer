'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Locale, isValidLocale, defaultLocale } from '@/lib/i18n';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, page?: string) => string;
  isRTL: boolean;
  direction: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

export function useTranslation(page?: string) {
  const { t, locale } = useI18n();
  return { t: (key: string) => t(key, page), locale };
}

export function I18nProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  // Estado inicializado diretamente com o locale do servidor — sem fallback para pt-br aqui
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Carrega traduções sempre que o locale mudar
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/api/translations/${locale}`);
        if (response.ok) {
          const data = await response.json();
          setTranslations(data);
        }
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };

    loadTranslations();
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    if (isValidLocale(newLocale) && newLocale !== locale) {
      setLocaleState(newLocale);
      if (typeof window !== 'undefined') {
        localStorage.setItem('voltris-locale', newLocale);
      }
    }
  }, [locale]);

  // Função de tradução
  // Estratégia de resolução:
  // 1. Tenta resolver a key diretamente a partir da raiz de translations
  // 2. Se não encontrar, tenta a partir de translations[page]
  // 3. Retorna a key original como fallback
  const t = (key: string, page: string = 'common'): string => {
    const keys = key.split('.');

    // Tentativa 1: resolver diretamente da raiz (para keys como 'home.services.optimizer.title')
    let value: any = translations;
    let found = true;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        found = false;
        break;
      }
    }
    if (found && typeof value === 'string') return value;

    // Tentativa 2: resolver a partir de translations[page] (para keys curtas sem prefixo)
    value = translations[page];
    if (value) {
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return key; // fallback: retorna a key original
        }
      }
      if (typeof value === 'string') return value;
    }

    return key; // fallback final
  };

  const isRTL = locale === 'ar';
  const direction = isRTL ? 'rtl' : 'ltr';

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, isRTL, direction }}>
      {children}
    </I18nContext.Provider>
  );
}
