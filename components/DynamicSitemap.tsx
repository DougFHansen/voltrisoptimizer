import React from 'react';
import Link from 'next/link';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  alternates?: {
    'pt-br': string;
    'en': string;
  };
}

interface DynamicSitemapProps {
  entries: SitemapEntry[];
  className?: string;
}

export default function DynamicSitemap({ entries, className = '' }: DynamicSitemapProps) {
  // Gerar XML sitemap
  const generateXMLSitemap = () => {
    const xmlEntries = entries.map(entry => {
      const alternateLinks = entry.alternates ? Object.entries(entry.alternates)
        .map(([lang, url]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />`)
        .join('\n') : '';

      return `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${alternateLinks ? '\n' + alternateLinks : ''}
  </url>`;
    }).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlEntries}
</urlset>`;
  };

  // Gerar structured data para SiteMap
  const generateSiteMapSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'SiteMap',
      url: 'https://www.voltrisoptimizer.com/sitemap.xml',
      hasPart: entries.map(entry => ({
        '@type': 'WebPage',
        url: entry.url,
        dateModified: entry.lastmod,
        potentialAction: {
          '@type': 'ReadAction',
          target: entry.url
        }
      }))
    };
  };

  return (
    <div className={`dynamic-sitemap ${className}`}>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSiteMapSchema())
        }}
      />

      {/* Visual Sitemap for Users */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Site Map</h2>
        
        {/* Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-900">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-blue-600 hover:text-blue-800 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/pc-optimization" className="text-blue-600 hover:text-blue-800 transition-colors">
                  PC Optimization
                </Link>
              </li>
              <li>
                <Link href="/format-windows" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Windows Formatting
                </Link>
              </li>
              <li>
                <Link href="/gaming-errors" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Game Error Fixes
                </Link>
              </li>
              <li>
                <Link href="/voltrisoptimizer" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Voltris Optimizer Software
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-900">Guides & Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides" className="text-green-600 hover:text-green-800 transition-colors">
                  All Guides
                </Link>
              </li>
              <li>
                <Link href="/guides?category=gaming" className="text-green-600 hover:text-green-800 transition-colors">
                  Gaming Guides
                </Link>
              </li>
              <li>
                <Link href="/guides?category=hardware" className="text-green-600 hover:text-green-800 transition-colors">
                  Hardware Guides
                </Link>
              </li>
              <li>
                <Link href="/guides?category=windows" className="text-green-600 hover:text-green-800 transition-colors">
                  Windows Guides
                </Link>
              </li>
              <li>
                <Link href="/guides?category=troubleshooting" className="text-green-600 hover:text-green-800 transition-colors">
                  Troubleshooting
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-900">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-purple-600 hover:text-purple-800 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-purple-600 hover:text-purple-800 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-purple-600 hover:text-purple-800 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/buy-license" className="text-purple-600 hover:text-purple-800 transition-colors">
                  Purchase License
                </Link>
              </li>
              <li>
                <Link href="/international" className="text-purple-600 hover:text-purple-800 transition-colors">
                  International Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Guides */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/guides/valorant-van-9003-secure-boot-tpm-fix" 
                  className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium text-gray-900">Fix Valorant VAN 9003</span>
            </Link>
            <Link href="/guides/gta-v-fps-optimization-complete-guide" 
                  className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium text-gray-900">GTA V FPS Guide</span>
            </Link>
            <Link href="/guides/ssd-vs-hdd-guide" 
                  className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium text-gray-900">SSD vs HDD</span>
            </Link>
            <Link href="/guides/debloat-windows-11-otimizacao-powershell" 
                  className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium text-gray-900">Windows 11 Debloat</span>
            </Link>
          </div>
        </div>

        {/* Categories Overview */}
        <div className="border-t pt-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Categories</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Gaming (45 guides)</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Hardware (52 guides)</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Windows (38 guides)</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Troubleshooting (29 guides)</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Software (31 guides)</span>
          </div>
        </div>

        {/* SEO Info */}
        <div className="border-t pt-6 mt-6">
          <div className="text-sm text-gray-600">
            <p className="mb-2">
              <strong>Total Pages:</strong> {entries.length} indexed pages
            </p>
            <p className="mb-2">
              <strong>Last Updated:</strong> {new Date().toISOString().split('T')[0]}
            </p>
            <p>
              <strong>XML Sitemap:</strong> 
              <Link href="/sitemap.xml" className="ml-1 text-blue-600 hover:text-blue-800">
                sitemap.xml
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Hidden XML Sitemap for crawlers */}
      <div className="hidden">
        <pre className="text-xs">
          {generateXMLSitemap()}
        </pre>
      </div>
    </div>
  );
}

// Helper function to generate sitemap entries
export function generateSitemapEntries(): SitemapEntry[] {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const entries: SitemapEntry[] = [
    // Main pages
    {
      url: 'https://www.voltrisoptimizer.com/',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0,
      alternates: {
        'pt-br': 'https://www.voltrisoptimizer.com/',
        'en': 'https://www.voltrisoptimizer.com/en'
      }
    },
    {
      url: 'https://www.voltrisoptimizer.com/services',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternates: {
        'pt-br': 'https://www.voltrisoptimizer.com/servicos',
        'en': 'https://www.voltrisoptimizer.com/en/services'
      }
    },
    {
      url: 'https://www.voltrisoptimizer.com/guides',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.9,
      alternates: {
        'pt-br': 'https://www.voltrisoptimizer.com/guias',
        'en': 'https://www.voltrisoptimizer.com/en/guides'
      }
    },
    {
      url: 'https://www.voltrisoptimizer.com/pc-optimization',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternates: {
        'pt-br': 'https://www.voltrisoptimizer.com/otimizacao-pc',
        'en': 'https://www.voltrisoptimizer.com/en/pc-optimization'
      }
    },
    {
      url: 'https://www.voltrisoptimizer.com/voltrisoptimizer',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternates: {
        'pt-br': 'https://www.voltrisoptimizer.com/voltrisoptimizer',
        'en': 'https://www.voltrisoptimizer.com/en/voltris-optimizer'
      }
    },
    {
      url: 'https://www.voltrisoptimizer.com/format-windows',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8,
      alternates: {
        'pt-br': 'https://www.voltrisoptimizer.com/formatar-windows',
        'en': 'https://www.voltrisoptimizer.com/en/windows-formatting'
      }
    },
    {
      url: 'https://www.voltrisoptimizer.com/gaming-errors',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.8,
      alternates: {
        'pt-br': 'https://www.voltrisoptimizer.com/erros-jogos',
        'en': 'https://www.voltrisoptimizer.com/en/game-errors'
      }
    },
    {
      url: 'https://www.voltrisoptimizer.com/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
      alternates: {
        'pt-br': 'https://www.voltrisoptimizer.com/sobre',
        'en': 'https://www.voltrisoptimizer.com/en/about'
      }
    },
    {
      url: 'https://www.voltrisoptimizer.com/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
      alternates: {
        'pt-br': 'https://www.voltrisoptimizer.com/contact',
        'en': 'https://www.voltrisoptimizer.com/contact'
      }
    },
    {
      url: 'https://www.voltrisoptimizer.com/faq',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6,
      alternates: {
        'pt-br': 'https://www.voltrisoptimizer.com/faq',
        'en': 'https://www.voltrisoptimizer.com/en/faq'
      }
    },
    {
      url: 'https://www.voltrisoptimizer.com/buy-license',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8,
      alternates: {
        'pt-br': 'https://www.voltrisoptimizer.com/adquirir-licenca',
        'en': 'https://www.voltrisoptimizer.com/en/purchase-license'
      }
    }
  ];

  // Add popular guides dynamically
  const popularGuides = [
    'valorant-van-9003-secure-boot-tpm-fix',
    'gta-v-otimizacao-fps-guia-completo',
    'ssd-vs-hdd-guide',
    'debloat-windows-11-otimizacao-powershell',
    'overwatch-2-otimizacao-fps-input-lag-reduce-buffering',
    'roblox-fps-unlocker-bloat-fix-bloxstrap',
    'obs-studio-melhores-configuracoes-stream-2026',
    'reduzir-ping-regedit-cmd-jogos'
  ];

  popularGuides.forEach(guide => {
    entries.push({
      url: `https://www.voltrisoptimizer.com/guides/${guide}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7,
      alternates: {
        'pt-br': `https://www.voltrisoptimizer.com/guides/${guide}`,
        'en': `https://www.voltrisoptimizer.com/en/guides/${guide}`
      }
    });
  });

  return entries;
}

