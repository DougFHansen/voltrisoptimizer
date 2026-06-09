import React from 'react';
import Link from 'next/link';
import { generateBreadcrumbs } from './Breadcrumbs';

interface InternalLinkingProps {
  currentPath: string;
  maxLinks?: number;
  showRelatedServices?: boolean;
  showRelatedGuides?: boolean;
  className?: string;
}

// Mapeamento de conteúdo relacionado para SEO
const relatedContentMap: Record<string, {
  services: Array<{ title: string; url: string; description: string }>;
  guides: Array<{ title: string; url: string; description: string }>;
  categories: Array<{ title: string; url: string; count: number }>;
}> = {
  '/': {
    services: [
      { title: 'PC Optimization', url: '/pc-optimization', description: 'Boost FPS and system performance' },
      { title: 'Windows Formatting', url: '/format-windows', description: 'Clean installation service' },
      { title: 'Game Error Fixes', url: '/gaming-errors', description: 'Fix VAN 9003, GTA crashes, more' },
      { title: 'Website Creation', url: '/create-website', description: 'Professional web development' },
    ],
    guides: [
      { title: 'Gaming Optimization Guide', url: '/guides/gaming-optimization-pc', description: 'Complete FPS boost tutorial' },
      { title: 'Windows 11 Optimization', url: '/guides/debloat-windows-11-optimization-powershell', description: 'Remove bloatware safely' },
      { title: 'Hardware Upgrade Guide', url: '/guides/upgrade-old-pc-worth-it', description: 'When to upgrade vs new build' },
      { title: 'Monitor Configuration', url: '/guides/g-sync-freesync-correct-configuration', description: 'G-Sync vs FreeSync setup' },
    ],
    categories: [
      { title: 'Gaming Performance', url: '/guides?category=gaming', count: 45 },
      { title: 'Windows Optimization', url: '/guides?category=windows', count: 38 },
      { title: 'Hardware Guides', url: '/guides?category=hardware', count: 52 },
      { title: 'Troubleshooting', url: '/guides?category=troubleshooting', count: 29 },
    ]
  },
  '/pc-optimization': {
    services: [
      { title: 'Game Error Fixes', url: '/gaming-errors', description: 'Fix gaming issues remotely' },
      { title: 'Windows Formatting', url: '/format-windows', description: 'Fresh start optimization' },
      { title: 'Voltris Optimizer', url: '/voltrisoptimizer', description: 'Automated optimization software' },
    ],
    guides: [
      { title: 'Reduce Input Lag', url: '/guides/reduce-input-lag-keyboard-mouse', description: 'Eliminate input delay' },
      { title: 'GPU Overclocking', url: '/guides/overclock-gpu-msi-afterburner', description: 'Safe GPU tuning guide' },
      { title: 'RAM Optimization', url: '/guides/how-to-reduce-input-lag-keyboard-mouse', description: 'Memory tuning for gaming' },
      { title: 'Network Optimization', url: '/guides/reduce-ping-regedit-cmd-games', description: 'Reduce ping and lag' },
    ],
    categories: [
      { title: 'Gaming Guides', url: '/guides?category=gaming', count: 45 },
      { title: 'Performance Tuning', url: '/guides?category=performance', count: 31 },
    ]
  },
  '/guides': {
    services: [
      { title: 'PC Optimization', url: '/pc-optimization', description: 'Professional optimization service' },
      { title: 'Game Error Fixes', url: '/gaming-errors', description: 'Remote gaming support' },
      { title: 'Technical Support', url: '/services', description: 'Complete IT solutions' },
    ],
    guides: [
      { title: 'Windows 11 Complete Guide', url: '/guides/clean-format-windows-11-rufus-gpt', description: 'Clean installation tutorial' },
      { title: 'SSD vs HDD Comparison', url: '/guides/ssd-vs-hdd-guide', description: 'Storage performance analysis' },
      { title: 'CPU Overclocking', url: '/guides/overclock-processor', description: 'Safe CPU tuning' },
      { title: 'PC Building Guide', url: '/guides/cheap-gaming-pc-cost-benefit-2026', description: 'Build your own PC' },
    ],
    categories: [
      { title: 'All Categories', url: '/guides', count: 164 },
      { title: 'Gaming', url: '/guides?category=gaming', count: 45 },
      { title: 'Hardware', url: '/guides?category=hardware', count: 52 },
      { title: 'Software', url: '/guides?category=software', count: 38 },
    ]
  }
};

export default function InternalLinking({ 
  currentPath, 
  maxLinks = 6, 
  showRelatedServices = true,
  showRelatedGuides = true,
  className = '' 
}: InternalLinkingProps) {
  const relatedContent = relatedContentMap[currentPath] || relatedContentMap['/'];
  const breadcrumbs = generateBreadcrumbs(currentPath);

  // Gerar links baseados no contexto atual
  const generateContextualLinks = () => {
    const allLinks = [
      ...(showRelatedServices ? relatedContent.services.map(s => ({ ...s, type: 'service' })) : []),
      ...(showRelatedGuides ? relatedContent.guides.map(g => ({ ...g, type: 'guide' })) : []),
    ];

    // Ordenar por relevância e limitar
    return allLinks
      .sort(() => Math.random() - 0.5) // Randomizar para variedade
      .slice(0, maxLinks);
  };

  const contextualLinks = generateContextualLinks();

  return (
    <div className={`internal-linking ${className}`}>
      {/* Schema.org structured data for SiteNavigationElement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SiteNavigationElement',
            name: 'Related Content',
            url: currentPath,
            hasPart: contextualLinks.map(link => ({
              '@type': 'WebPage',
              name: link.title,
              url: `https://www.voltrisoptimizer.com${link.url}`,
              description: link.description
            }))
          })
        }}
      />

      {/* Breadcrumbs for context */}
      <div className="mb-6">
        <div className="text-sm text-gray-600 mb-2">Current page path:</div>
        <div className="flex flex-wrap gap-2">
          {breadcrumbs.map((crumb, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
            >
              {crumb.label}
            </span>
          ))}
        </div>
      </div>

      {/* Related Services */}
      {showRelatedServices && relatedContent.services.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedContent.services.slice(0, 4).map((service, index) => (
              <Link
                key={`service-${index}`}
                href={service.url}
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 group"
              >
                <h4 className="font-medium text-blue-900 group-hover:text-blue-800 mb-1">
                  {service.title}
                </h4>
                <p className="text-sm text-blue-700">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related Guides */}
      {showRelatedGuides && relatedContent.guides.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Guides</h3>
          <div className="space-y-3">
            {relatedContent.guides.slice(0, 4).map((guide, index) => (
              <Link
                key={`guide-${index}`}
                href={guide.url}
                className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
              >
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 mb-1">
                  {guide.title}
                </h4>
                <p className="text-sm text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      {relatedContent.categories.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Browse by Category</h3>
          <div className="flex flex-wrap gap-3">
            {relatedContent.categories.map((category, index) => (
              <Link
                key={`category-${index}`}
                href={category.url}
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                {category.title}
                <span className="ml-2 px-2 py-1 bg-gray-300 text-gray-600 rounded-full text-xs">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Contextual Links (SEO) */}
      {contextualLinks.length > 0 && (
        <div className="hidden">
          {/* Links para SEO - hidden but accessible to crawlers */}
          {contextualLinks.map((link, index) => (
            <Link
              key={`seo-${index}`}
              href={link.url}
              className="sr-only"
              aria-label={`Related ${link.type}: ${link.title}`}
            >
              {link.title} - {link.description}
            </Link>
          ))}
        </div>
      )}

      {/* Popular Content */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Popular Content</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/guides/valorant-van-9003-secure-boot-tpm-fix"
            className="block p-3 border rounded-lg hover:border-blue-300 transition-colors"
          >
            <h4 className="font-medium text-gray-900 mb-1">Fix Valorant VAN 9003</h4>
            <p className="text-sm text-gray-600">Complete TPM and Secure Boot guide</p>
          </Link>
          <Link
            href="/guides/gta-v-fps-optimization-complete-guide"
            className="block p-3 border rounded-lg hover:border-blue-300 transition-colors"
          >
            <h4 className="font-medium text-gray-900 mb-1">GTA V FPS Optimization</h4>
            <p className="text-sm text-gray-600">Maximize performance in GTA 5</p>
          </Link>
          <Link
            href="/guides/ssd-vs-hdd-guide"
            className="block p-3 border rounded-lg hover:border-blue-300 transition-colors"
          >
            <h4 className="font-medium text-gray-900 mb-1">SSD vs HDD Guide</h4>
            <p className="text-sm text-gray-600">Storage performance comparison</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Helper function to generate internal links dynamically
export function generateInternalLinks(currentPath: string, context: 'service' | 'guide' | 'general' = 'general') {
  const baseLinks = [
    { title: 'Home', url: '/', description: 'Return to homepage' },
    { title: 'Services', url: '/services', description: 'View all services' },
    { title: 'Guides', url: '/guides', description: 'Browse technical guides' },
    { title: 'About', url: '/about', description: 'Learn about Voltris' },
    { title: 'Contact', url: '/contact', description: 'Get in touch' },
  ];

  const serviceLinks = [
    { title: 'PC Optimization', url: '/pc-optimization', description: 'Boost performance' },
    { title: 'Game Fixes', url: '/gaming-errors', description: 'Fix gaming errors' },
    { title: 'Windows Setup', url: '/format-windows', description: 'Clean installation' },
    { title: 'Voltris Software', url: '/voltrisoptimizer', description: 'Optimization tool' },
  ];

  const guideLinks = [
    { title: 'Gaming Guides', url: '/guides?category=gaming', description: 'Performance tutorials' },
    { title: 'Hardware Guides', url: '/guides?category=hardware', description: 'Component optimization' },
    { title: 'Windows Guides', url: '/guides?category=windows', description: 'System tuning' },
    { title: 'Troubleshooting', url: '/guides?category=troubleshooting', description: 'Error fixes' },
  ];

  switch (context) {
    case 'service':
      return [...baseLinks, ...serviceLinks];
    case 'guide':
      return [...baseLinks, ...guideLinks];
    default:
      return baseLinks;
  }
}
