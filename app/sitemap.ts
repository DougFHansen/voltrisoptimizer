import fs from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';
import { regionsData } from '@/app/[locale]/regions/data';
import sitemapRoutes from './sitemap-routes.json';

/**
 * Slugs de guias que hoje são apenas FONTES de redirect permanente (definidas
 * em next.config.js -> redirects()). Algumas pastas antigas ainda existem no
 * filesystem, então o gerador de rotas as inclui; porém elas retornam 3xx.
 * Mantê-las no sitemap cria entradas que redirecionam (não ideal: o sitemap
 * deve listar apenas URLs finais 200). Removemo-las aqui de forma automática e
 * auto-maintained: qualquer slug que seja fonte de redirect é filtrado.
 */
function getRedirectSourceGuideSlugs(): Set<string> {
  try {
    const cfg = fs.readFileSync(path.join(process.cwd(), 'next.config.js'), 'utf8');
    const set = new Set<string>();
    const re = /source:\s*['"`]\/:locale\/guides\/([^'"`/?]+)['"`]/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(cfg))) set.add(m[1]);
    return set;
  } catch {
    return new Set();
  }
}

const REDIRECT_SOURCE_GUIDES = getRedirectSourceGuideSlugs();

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = 'https://www.voltrisoptimizer.com'; // Updated to the international domain
  
  // Lista de todos os idiomas suportados pela plataforma internacional
  const supportedLocales = ['en', 'es', 'pt-br', 'de', 'fr', 'it', 'ja', 'ko', 'ar', 'ru', 'zh-cn', 'vi', 'tr', 'id', 'pl'];

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

    // Descartar guias que são apenas fontes de redirect (evita URL 3xx no sitemap).
    const guideMatch = routeWithoutLocale.match(/^\/guides\/([^/]+)\/?$/);
    if (guideMatch && REDIRECT_SOURCE_GUIDES.has(guideMatch[1])) {
      return [];
    }

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

    // Rotas ainda servidas SEM prefixo de locale (páginas fixas globais).
    // /regions e /international saíram daqui: agora são localizadas ([locale]/...)
    // e são multiplicadas por idioma no bloco principal / em regionalRoutes.
    const fixedNonLocalized = ['/services-integration'];
    const isFixedRoute = fixedNonLocalized.some(r => routeWithoutLocale === r || routeWithoutLocale.startsWith(r + '/'));

    if (isFixedRoute) {
      return {
        url: `${domain}${routeWithoutLocale}`,
        lastModified: new Date(entry.lastModified),
        changeFrequency: changeFreq as 'daily' | 'weekly' | 'monthly',
        priority: priority,
      };
    }

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

  // 2. Technical SEO - Regional Coverage. As páginas de região agora são
  // localizadas ([locale]/regions/pais/cidade): emitir uma URL por idioma p/
  // cada país+cidade, alinhado com o hreflang gerado nas próprias páginas.
  const regionalRoutes = regionsData ? supportedLocales.flatMap(locale =>
    regionsData.flatMap(country =>
      country.cities.map(city => ({
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