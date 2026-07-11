import { MetadataRoute } from 'next';
import { regionsData } from '@/app/regions/data';
import sitemapRoutes from './sitemap-routes.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = 'https://www.voltrisoptimizer.com'; // Updated to the international domain
  
  // Lista de todos os idiomas suportados pela plataforma internacional
  const supportedLocales = ['en', 'es', 'pt-br', 'de', 'fr', 'it', 'ja', 'ko', 'ar'];

  // Business-Critical Priorities for Google (Siloing Strategy)
  const priorityMap: Record<string, number> = {
    '/': 1.0,
    '/services': 0.9,
    '/all-services': 0.9,
    '/format-windows': 0.9,
    '/pc-optimization': 0.9,
    '/technical-support': 0.9,
    '/it-technician': 0.9,
    '/remote-technical-support': 0.9,
    '/gaming-errors': 0.9,
    '/computer-maintenance': 0.9,
    '/voltrisoptimizer': 0.9,
    '/buy-license': 0.8,
    '/guides': 0.8,
    '/international': 0.8,
    '/create-website': 0.8,
    '/contact': 0.7,
    '/about': 0.7,
    '/faq': 0.7,
    '/privacy-policy': 0.5,
    '/terms-of-use': 0.5,
  };

  // 1. Dynamic Discovery of all static pages (from pregenerated JSON)
  const allRoutes = sitemapRoutes as Array<{ route: string, lastModified: string }>;

  const sitemapEntries = allRoutes.flatMap(entry => {
    // Ex: route = '/[locale]/format-windows'
    const routeWithoutLocale = entry.route.replace('/[locale]', '') || '/';

    // Determine category priority
    let priority = 0.6; // Default
    if (priorityMap[routeWithoutLocale]) {
      priority = priorityMap[routeWithoutLocale];
    } else if (routeWithoutLocale.startsWith('/guides/')) {
      priority = 0.7; // Deep content guides
    } else if (routeWithoutLocale.startsWith('/it-technician-in/')) {
      priority = 0.8; // High-value regional pages
    } else if (routeWithoutLocale.startsWith('/all-services/')) {
      priority = 0.7; // Service subpages
    } else if (routeWithoutLocale.startsWith('/optimize-windows-for-')) {
      priority = 0.7; // Optimization guides
    } else if (routeWithoutLocale.startsWith('/how-to-')) {
      priority = 0.7; // How-to guides
    }

    const changeFreq = priority >= 0.9 ? 'daily' : (priority >= 0.7 ? 'weekly' : 'monthly');

    // Multiplicar essa rota por todos os idiomas para indexação massiva global
    return supportedLocales.map(locale => {
      const localeUrlPath = routeWithoutLocale === '/' ? `/${locale}` : `/${locale}${routeWithoutLocale}`;

      return {
        url: `${domain}${localeUrlPath}`,
        lastModified: new Date(entry.lastModified),
        changeFrequency: changeFreq as 'daily' | 'weekly' | 'monthly',
        priority: priority,
      };
    });
  });

  // 2. Technical SEO - Regional Coverage (Dynamic Params multiplied by Locales)
  const regionalRoutes = regionsData ? regionsData.flatMap(country => 
    country.cities.flatMap(city => 
      supportedLocales.map(locale => ({
        url: `${domain}/${locale}/regions/${country.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }))
    )
  ) : [];

  // Combine and deduplicate if necessary
  const combined = [...sitemapEntries, ...regionalRoutes];
  const uniqueUrls = new Map();
  combined.forEach(entry => {
    uniqueUrls.set(entry.url, entry);
  });

  return Array.from(uniqueUrls.values());
}