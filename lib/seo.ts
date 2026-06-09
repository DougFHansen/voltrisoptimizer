import { Metadata } from 'next';
import { getTranslations, getInternationalSEO, Locale } from '@/lib/i18n';

interface SEOConfig {
  pageKey: string;
  locale: Locale;
  pathname: string;
}

export async function generateInternationalMetadata({ 
  pageKey, 
  locale, 
  pathname 
}: SEOConfig): Promise<Metadata> {
  const translations = await getTranslations(locale, pageKey);
  const seo = getInternationalSEO(pageKey, locale, pathname);
  
  const title = translations.title || translations.headings?.hero || 'VOLTRIS';
  const description = translations.metaDescription || translations.paragraphs?.hero || '';
  
  return {
    title: {
      default: title,
      template: `%s | ${translations.common?.siteName || 'VOLTRIS'}`
    },
    description,
    keywords: translations.seo?.keywords?.general || [],
    authors: [{ name: 'VOLTRIS' }],
    creator: 'VOLTRIS',
    publisher: 'VOLTRIS',
    metadataBase: new URL('https://www.voltrisoptimizer.com'),
    alternates: seo.alternates,
    openGraph: {
      type: 'website',
      locale: locale.replace('-', '_').toUpperCase(),
      url: seo.canonical,
      siteName: translations.common?.siteName || 'VOLTRIS',
      title: title,
      description: description,
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ['/logo.png'],
      creator: '@voltris',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'googlee3ce0f951f1010fe',
      other: {
        'msvalidate.01': 'B3EA85422343FBF303FC4E7243937093',
      },
    },
    category: 'technology',
  };
}

// Gera hreflang tags para SEO internacional
export function generateHreflangTags(
  pageKey: string,
  currentLocale: Locale,
  pathname: string
) {
  const seo = getInternationalSEO(pageKey, currentLocale, pathname);
  
  return seo.hreflangs.map(({ locale, url }) => ({
    rel: 'alternate',
    hrefLang: locale,
    href: url,
  }));
}

// Gera sitemap URLs para todos os idiomas
export function generateSitemapUrls(
  pages: Array<{ path: string; priority?: number; changefreq?: string }>
) {
  const baseUrl = 'https://www.voltrisoptimizer.com';
  const urls: any[] = [];
  
  pages.forEach(page => {
    // Adiciona URL para cada locale suportado
    ['en', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'ar', 'pt-br'].forEach(locale => {
      const localizedPath = locale === 'pt-br' 
        ? page.path 
        : `/${locale}${page.path}`;
      
      urls.push({
        url: `${baseUrl}${localizedPath}`,
        lastModified: new Date(),
        changeFrequency: page.changefreq || 'weekly',
        priority: page.priority || 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}${page.path}`,
            es: `${baseUrl}/es${page.path}`,
            fr: `${baseUrl}/fr${page.path}`,
            de: `${baseUrl}/de${page.path}`,
            it: `${baseUrl}/it${page.path}`,
            ja: `${baseUrl}/ja${page.path}`,
            ko: `${baseUrl}/ko${page.path}`,
            ar: `${baseUrl}/ar${page.path}`,
            'pt-br': `${baseUrl}${page.path}`,
          }
        }
      });
    });
  });
  
  return urls;
}
