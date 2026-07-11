import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  image?: string;
  description?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showStructuredData?: boolean;
}

export default function Breadcrumbs({ 
  items, 
  className = "flex items-center space-x-2 text-sm text-gray-600 mb-6",
  showStructuredData = true 
}: BreadcrumbsProps) {
  // Gerar structured data para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.voltrisoptimizer.com/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? `https://www.voltrisoptimizer.com${item.href}` : undefined,
        "image": item.image,
        "description": item.description
      }))
    ]
  };

  return (
    <>
      {showStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      <nav
        className={className}
        aria-label="Breadcrumb navigation"
        role="navigation"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* Home - Always first */}
        <span
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            itemProp="item"
            className="flex items-center hover:text-[#31A8FF] transition-colors duration-200 group"
            aria-label="Navigate to home page"
            title="Home page"
          >
            <Home className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
            <span itemProp="name" className="font-medium">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
          <meta itemProp="url" content="https://www.voltrisoptimizer.com/" />
        </span>

        {/* Dynamic breadcrumbs */}
        {items.map((item, index) => {
          const position = index + 2;
          const isLast = index === items.length - 1;
          
          return (
            <React.Fragment key={index}>
              <ChevronRight 
                className="w-4 h-4 text-gray-400 flex-shrink-0" 
                aria-hidden="true"
              />
              <span
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    itemProp="item"
                    className={`hover:text-[#31A8FF] transition-colors duration-200 ${
                      isLast ? 'text-gray-900 font-medium' : 'text-gray-600'
                    }`}
                    title={item.description || item.label}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span 
                    className="text-gray-900 font-medium" 
                    aria-current="page" 
                    itemProp="name"
                    title={item.description}
                  >
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={position.toString()} />
                {item.href && (
                  <meta itemProp="url" content={`https://www.voltrisoptimizer.com${item.href}`} />
                )}
                {item.image && (
                  <meta itemProp="image" content={item.image} />
                )}
              </span>
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}

// Helper function to generate breadcrumbs from URL
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const pathSegments = pathname.split('/').filter(segment => segment);
  const breadcrumbs: BreadcrumbItem[] = [];
  
  // Mapeamento de segmentos para labels amigáveis
  const segmentMap: Record<string, string> = {
    'servicos': 'Services',
    'guias': 'Guides',
    'sobre': 'About',
    'contato': 'Contact',
    'faq': 'FAQ',
    'voltrisoptimizer': 'Voltris Optimizer',
    'otimizacao-pc': 'PC Optimization',
    'formatar-windows': 'Windows Formatting',
    'erros-jogos': 'Game Errors',
    'manutencao-computador': 'PC Maintenance',
    'suporte-tecnico-remoto': 'Remote Support',
    'criar-site': 'Website Creation',
    'adquirir-licenca': 'License Purchase',
    'exterior': 'International'
  };

  let currentPath = '';
  
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label = segmentMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    breadcrumbs.push({
      label,
      href: index === pathSegments.length - 1 ? undefined : currentPath,
      description: `Navigate to ${label} page`
    });
  });

  return breadcrumbs;
}