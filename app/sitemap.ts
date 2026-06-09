import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { generateSitemapUrls } from '@/lib/seo';

/**
 * Helper to get real last modified date from file system.
 * This is crucial for Google to know which pages to re-index.
 */
function getLastModified(filePath: string): Date {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch (error) {
    return new Date(); // Fallback to now
  }
}

/**
 * Deep recursive scanner to find all "page.tsx" files in the "app" directory.
 * Filters out admin, auth, and deleted "blog" pages to ensure absolute SEO cleanliness.
 */
function getPageRoutes(dir: string, baseUrl: string = ''): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;

  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      // SKIP: Admin, Dashboard, Auth, Restricted Area, and the DELETED Blog
      const skipDirs = [
        'api', 'components', 'dashboard', 'admin',
        'restricted-area-admin', 'auth', 'private',
        '_', '.'
      ];

      const shouldSkip = skipDirs.some(skip =>
        file.startsWith(skip) || file === skip
      );

      if (!shouldSkip) {
        results = results.concat(getPageRoutes(filePath, `${baseUrl}/${file}`));
      }
    } else if (file === 'page.tsx' || file === 'page.js') {
      // Found a valid public page
      const route = baseUrl || '/';
      // Double check it's not a dynamic bracket route which needs specific params
      if (!route.includes('[') && !route.includes('blog')) {
        results.push(route);
      }
    }
  });

  return results;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = 'https://www.voltrisoptimizer.com'; // Atualizado para o domínio internacional
  const appDir = path.join(process.cwd(), 'app');

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
    '/lgpd': 0.5,
    '/login': 0.3,
    '/perfil': 0.3,
    '/reset-password': 0.3,
  };

  // 1. Dynamic Discovery of all static pages (including 300+ guides)
  const allRoutes = getPageRoutes(appDir);

  const sitemapEntries = allRoutes.map(route => {
    // Determine the physical file for modification date
    const relativePath = route === '/' ? 'page.tsx' : `${route}/page.tsx`;
    const filePath = path.join(appDir, relativePath);

    // Determine category priority
    let priority = 0.6; // Default
    if (priorityMap[route]) {
      priority = priorityMap[route];
    } else if (route.startsWith('/guides/')) {
      priority = 0.7; // Deep content guides
    } else if (route.startsWith('/it-technician-in/')) {
      priority = 0.8; // High-value regional pages
    } else if (route.startsWith('/process/')) {
      priority = 0.5; // Process pages
    } else if (route.startsWith('/all-services/')) {
      priority = 0.7; // Service subpages
    } else if (route.startsWith('/optimize-windows-for-')) {
      priority = 0.7; // Optimization guides
    } else if (route.startsWith('/how-to-')) {
      priority = 0.7; // How-to guides
    } else if (route.startsWith('/improve-')) {
      priority = 0.7; // Performance guides
    }

    const changeFreq = priority >= 0.9 ? 'daily' : (priority >= 0.7 ? 'weekly' : 'monthly');

    return {
      url: `${domain}${route === '/' ? '' : route}`,
      lastModified: getLastModified(filePath),
      changeFrequency: changeFreq as 'daily' | 'weekly' | 'monthly',
      priority: priority,
    };
  });

  // 2. Technical SEO - Regional Coverage (Dynamic Params)
  // We explicitly include the 27 state capitals for maximum regional resonance
  const regionalSlugs = [
    'sao-paulo', 'rio-de-janeiro', 'belo-horizonte', 'curitiba',
    'porto-alegre', 'salvador', 'brasilia', 'fortaleza',
    'recife', 'goiania', 'florianopolis', 'manaus',
    'belem', 'vitoria', 'campo-grande', 'cuiaba',
    'sao-luis', 'natal', 'joao-pessoa', 'maceio',
    'teresina', 'aracaju', 'palmas', 'rio-branco',
    'porto-velho', 'boa-vista', 'macapa'
  ];

  const regionalRoutes = regionalSlugs.map(slug => ({
    url: `${domain}/it-technician-in/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Combine and deduplicate if necessary
  const combined = [...sitemapEntries, ...regionalRoutes];

  // Use a Map to ensure unique URLs (deep organization)
  const uniqueSitemap = Array.from(
    new Map(combined.map(item => [item.url, item])).values()
  );

  return uniqueSitemap;
}