import { notFound } from 'next/navigation';
import path from 'path';

// Lista de idiomas suportados
export const supportedLocales = [
  'en',
  'es', 
  'fr',
  'de',
  'it',
  'ja',
  'ko',
  'ar',
  'pt-br'
] as const;

export type Locale = typeof supportedLocales[number];

// Locale padrão
export const defaultLocale: Locale = 'en';

// Configurações de região para cada locale
export const localeConfig = {
  'en': { name: 'English', region: 'US', direction: 'ltr' },
  'es': { name: 'Español', region: 'ES', direction: 'ltr' },
  'fr': { name: 'Français', region: 'FR', direction: 'ltr' },
  'de': { name: 'Deutsch', region: 'DE', direction: 'ltr' },
  'it': { name: 'Italiano', region: 'IT', direction: 'ltr' },
  'ja': { name: '日本語', region: 'JP', direction: 'ltr' },
  'ko': { name: '한국어', region: 'KR', direction: 'ltr' },
  'ar': { name: 'العربية', region: 'SA', direction: 'rtl' },
  'pt-br': { name: 'Português', region: 'BR', direction: 'ltr' }
} as const;

// Função para validar se um locale é suportado
export function isValidLocale(locale: string): locale is Locale {
  return supportedLocales.includes(locale as Locale);
}

// Função para obter o locale a partir do pathname
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const potentialLocale = segments[0];
  
  if (isValidLocale(potentialLocale)) {
    return potentialLocale;
  }
  
  return defaultLocale;
}

// Função para criar pathname com locale
export function createLocalizedPathname(pathname: string, locale: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  
  // Remove o locale atual se existir
  if (isValidLocale(segments[0])) {
    segments.shift();
  }
  
  // Adiciona o novo locale (exceto para o locale padrão)
  const newSegments = locale === defaultLocale ? segments : [locale, ...segments];
  
  return '/' + newSegments.join('/');
}

// Função para carregar traduções
export async function getTranslations(locale: Locale, page: string = 'common') {
  try {
    // Para ambiente de produção, usa import dinâmico
    if (typeof window === 'undefined') {
      // Server-side: usa fs
      const fs = await import('fs');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'locales', locale, 'pages.json');
      
      if (!fs.existsSync(filePath)) {
        console.warn(`Translation file not found: ${filePath}`);
        return {};
      }
      
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const translations = JSON.parse(fileContent);
      
      return translations[page] || translations.common || {};
    } else {
      // Client-side: usa fetch da API
      const response = await fetch(`/api/translations?locale=${locale}&page=${page}`);
      if (!response.ok) {
        console.error(`Error loading translations for ${locale}/${page}`);
        return {};
      }
      return await response.json();
    }
  } catch (error) {
    console.error(`Error loading translations for ${locale}/${page}:`, error);
    return {};
  }
}

// Função para obter metadados SEO internacional
export function getInternationalSEO(
  pageKey: string,
  currentLocale: Locale,
  pathname: string
) {
  const baseUrl = 'https://www.voltrisoptimizer.com';
  const currentPath = createLocalizedPathname(pathname, currentLocale);
  
  // Gera hreflangs para todos os idiomas
  const hreflangs: Array<{ locale: string; url: string }> = supportedLocales.map(locale => ({
    locale,
    url: `${baseUrl}${createLocalizedPathname(pathname, locale)}`
  }));
  
  // Adiciona x-default para o locale padrão
  hreflangs.push({
    locale: 'x-default',
    url: `${baseUrl}${createLocalizedPathname(pathname, defaultLocale)}`
  });
  
  return {
    canonical: `${baseUrl}${currentPath}`,
    hreflangs,
    currentLocale,
    alternates: {
      canonical: currentPath,
      languages: hreflangs.reduce((acc, { locale, url }) => {
        acc[locale] = url;
        return acc;
      }, {} as Record<string, string>)
    }
  };
}

// Função para detectar locale preferido do usuário
export function getPreferredLocale(acceptLanguage?: string): Locale {
  if (!acceptLanguage) return defaultLocale;
  
  const preferredLocales = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase())
    .map(lang => {
      // Mapeia códigos de linguagem para nossos locales
      const localeMap: Record<string, Locale> = {
        'en': 'en',
        'es': 'es',
        'fr': 'fr', 
        'de': 'de',
        'it': 'it',
        'ja': 'ja',
        'ko': 'ko',
        'ar': 'ar',
        'pt': 'pt-br',
        'pt-br': 'pt-br'
      };
      
      return localeMap[lang] || localeMap[lang.split('-')[0]];
    })
    .filter(Boolean) as Locale[];
  
  // Retorna o primeiro locale suportado ou o padrão
  return preferredLocales.find(locale => isValidLocale(locale)) || defaultLocale;
}

// Função para obter URL amigável baseada no idioma
export function getLocalizedSlug(slug: string, locale: Locale): string {
  const slugMap: Record<Locale, Record<string, string>> = {
    'en': {
      'voltris-optimizer': 'voltris-optimizer',
      'otimizacao-pc': 'pc-optimization',
      'guias': 'guides',
      'servicos': 'services',
      'contato': 'contact',
      'sobre': 'about'
    },
    'es': {
      'voltris-optimizer': 'voltris-optimizer',
      'otimizacao-pc': 'optimizacion-pc',
      'guias': 'guias',
      'servicios': 'servicios',
      'contacto': 'contacto',
      'sobre': 'sobre'
    },
    'fr': {
      'voltris-optimizer': 'voltris-optimizer',
      'otimizacao-pc': 'optimisation-pc',
      'guides': 'guides',
      'services': 'services',
      'contact': 'contact',
      'a-propos': 'a-propos'
    },
    'de': {
      'voltris-optimizer': 'voltris-optimizer',
      'otimizacao-pc': 'pc-optimierung',
      'anleitungen': 'anleitungen',
      'dienstleistungen': 'dienstleistungen',
      'kontakt': 'kontakt',
      'uber-uns': 'uber-uns'
    },
    'it': {
      'voltris-optimizer': 'voltris-optimizer',
      'otimizacao-pc': 'ottimizzazione-pc',
      'guide': 'guide',
      'servizi': 'servizi',
      'contatto': 'contatto',
      'chi-siamo': 'chi-siamo'
    },
    'ja': {
      'voltris-optimizer': 'voltris-optimizer',
      'otimizacao-pc': 'pc最適化',
      'ガイド': 'guides',
      'サービス': 'services',
      'お問い合わせ': 'contact',
      '会社概要': 'about'
    },
    'ko': {
      'voltris-optimizer': 'voltris-optimizer',
      'otimizacao-pc': 'pc최적화',
      '가이드': 'guides',
      '서비스': 'services',
      '문의': 'contact',
      '회사소개': 'about'
    },
    'ar': {
      'voltris-optimizer': 'voltris-optimizer',
      'otimizacao-pc': 'تحسين-الكمبيوتر',
      'الأدلة': 'guides',
      'الخدمات': 'services',
      'اتصال': 'contact',
      'من-نحن': 'about'
    },
    'pt-br': {
      'voltris-optimizer': 'voltris-optimizer',
      'otimizacao-pc': 'otimizacao-pc',
      'guias': 'guias',
      'servicos': 'servicos',
      'contato': 'contato',
      'sobre': 'sobre'
    }
  };
  
  return slugMap[locale]?.[slug] || slug;
}
