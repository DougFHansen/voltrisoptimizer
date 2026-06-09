import { Metadata } from 'next';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function generateBreadcrumbJsonLd(breadcrumbs: BreadcrumbItem[]) {
  const itemListElement = breadcrumbs.map((breadcrumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: breadcrumb.name,
    item: `https://www.voltrisoptimizer.com${breadcrumb.href}`
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  };
}

export function generateArticleJsonLd({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  keywords
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  keywords: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://www.voltrisoptimizer.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'VOLTRIS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.voltrisoptimizer.com/logo.png'
      }
    },
    datePublished: datePublished,
    dateModified: dateModified,
    image: image,
    keywords: keywords,
    articleBody: description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.voltrisoptimizer.com'
    }
  };
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VOLTRIS',
    url: 'https://www.voltrisoptimizer.com',
    description: 'Suporte técnico remoto especializado em Windows e criação de sites profissionais',
    publisher: {
      '@type': 'Organization',
      name: 'VOLTRIS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.voltrisoptimizer.com/logo.png'
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.voltrisoptimizer.com/buscar?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateSoftwareApplicationSchema({
  name,
  description,
  url,
  applicationCategory,
  operatingSystem,
  offers,
  features,
  softwareVersion,
  datePublished,
  dateModified
}: {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
  features: string[];
  softwareVersion: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    url: url,
    applicationCategory: applicationCategory,
    operatingSystem: operatingSystem,
    offers: {
      '@type': 'Offer',
      price: offers.price,
      priceCurrency: offers.priceCurrency,
      availability: offers.availability,
      seller: {
        '@type': 'Organization',
        name: 'VOLTRIS'
      }
    },
    features: features,
    softwareVersion: softwareVersion,
    datePublished: datePublished,
    dateModified: dateModified,
    creator: {
      '@type': 'Organization',
      name: 'VOLTRIS',
      url: 'https://www.voltrisoptimizer.com'
    },
    softwareHelp: {
      '@type': 'CreativeWork',
      url: 'https://www.voltrisoptimizer.com/voltrisoptimizer/documentacao'
    },
    softwareRequirements: [
      'Windows 10',
      'Windows 11',
      'DirectX 11',
      '6 GB livres em disco'
    ]
  };
}