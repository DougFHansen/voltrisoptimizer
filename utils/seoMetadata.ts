import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  price?: string;
  availability?: string;
  rating?: number;
  reviewCount?: number;
}

// Mapeamento de metadados para páginas principais
export const seoMetadataMap: Record<string, SEOConfig> = {
  '/': {
    title: 'Voltris - Professional PC Optimization & Gaming Performance',
    description: 'Maximize your PC performance with Voltris expert optimization services. Boost FPS, reduce lag, and enhance gaming experience. Remote technical support worldwide.',
    keywords: 'PC optimization, gaming performance, FPS boost, technical support, Windows optimization, remote assistance',
    type: 'website',
    image: '/images/home-og.jpg'
  },
  '/servicos': {
    title: 'IT Services - Remote Technical Support & PC Optimization | Voltris',
    description: 'Complete IT services: remote technical support, Windows formatting, PC optimization, and professional website creation. Expert assistance worldwide.',
    keywords: 'IT services, technical support, PC optimization, remote assistance, Windows formatting, website creation',
    type: 'service',
    image: '/images/services-og.jpg'
  },
  '/guias': {
    title: 'Technical Guides & Tutorials - PC Optimization & Gaming | Voltris',
    description: 'Step-by-step technical guides for PC optimization, gaming performance, Windows troubleshooting, and hardware maintenance. Expert tutorials.',
    keywords: 'PC guides, gaming tutorials, Windows optimization, technical support, hardware guides',
    type: 'website',
    image: '/images/guides-og.jpg'
  },
  '/voltrisoptimizer': {
    title: 'Voltris Optimizer - PC Performance Software with Remote Control',
    description: 'Professional PC optimization software with web-based remote control. Boost gaming FPS, accelerate business performance, cloud technology.',
    keywords: 'PC optimizer, gaming software, performance boost, remote control, cloud optimization',
    type: 'product',
    price: '29.99',
    availability: 'https://schema.org/InStock',
    rating: 4.9,
    reviewCount: 1247,
    image: '/images/voltris-optimizer-og.jpg'
  },
  '/otimizacao-pc': {
    title: 'PC Optimization & FPS Boost - Gaming & Professional Performance',
    description: 'Maximum PC performance optimization. Gain up to 40% more FPS in games, reduce input lag, speed up system. Professional optimization service.',
    keywords: 'PC optimization, FPS boost, gaming performance, input lag, system speed',
    type: 'service',
    image: '/images/pc-optimization-og.jpg'
  },
  '/formatar-windows': {
    title: 'Professional Windows Formatting - Clean Installation Service',
    description: 'Expert Windows formatting service with backup, driver installation, and gaming optimization. Remote clean installation worldwide.',
    keywords: 'Windows formatting, clean installation, system setup, gaming optimization, remote formatting',
    type: 'service',
    image: '/images/windows-formatting-og.jpg'
  },
  '/erros-jogos': {
    title: 'Game Error Fixes - Valorant VAN 9003, GTA V, CS2, Roblox',
    description: 'Fix game errors remotely: VAN 9003, GTA crashes, VAC errors, Roblox issues. Get back to gaming fast with expert technical support.',
    keywords: 'game errors, VAN 9003, GTA fixes, CS2 problems, Roblox troubleshooting, gaming support',
    type: 'service',
    image: '/images/game-errors-og.jpg'
  },
  '/sobre': {
    title: 'About Voltris - PC Optimization & Technical Support Experts',
    description: 'Meet Voltris team of PC optimization and technical support experts. Our mission, methodology, and commitment to performance engineering.',
    keywords: 'about Voltris, company profile, technical support experts, PC optimization team',
    type: 'website',
    image: '/images/about-og.jpg'
  },
  '/contato': {
    title: 'Contact Voltris - Technical Support & PC Optimization Services',
    description: 'Get in touch with Voltris for PC optimization, gaming support, and technical services. Remote assistance available worldwide. Quick response.',
    keywords: 'contact Voltris, technical support, PC optimization, gaming assistance, remote help',
    type: 'website',
    image: '/images/contact-og.jpg'
  },
  '/faq': {
    title: 'Frequently Asked Questions - Voltris Services & Support',
    description: 'Common questions about Voltris PC optimization, gaming performance, remote support, and technical services. Get answers fast.',
    keywords: 'FAQ, Voltris questions, PC optimization help, technical support FAQ, gaming assistance',
    type: 'website',
    image: '/images/faq-og.jpg'
  }
};

// Gerar metadados dinamicamente baseado na URL
export function generateMetadata(path: string, customConfig?: Partial<SEOConfig>): Metadata {
  const baseConfig = seoMetadataMap[path] || seoMetadataMap['/'];
  const config = { ...baseConfig, ...customConfig };
  
  const canonicalUrl = `https://www.voltrisoptimizer.com${path}`;
  const imageUrl = config.image || '/images/default-og.jpg';

  const metadata: Metadata = {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: config.author || 'Voltris' }],
    creator: 'Voltris',
    publisher: 'Voltris',
    
    // Open Graph
    openGraph: {
      type: (config.type === 'product' || config.type === 'service') ? 'website' : (config.type as 'website' | 'article') || 'website',
      locale: 'en_US',
      alternateLocale: 'pt_BR',
      url: canonicalUrl,
      title: config.title,
      description: config.description,
      siteName: 'Voltris',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      site: '@voltris',
      creator: '@voltris',
      title: config.title,
      description: config.description,
      images: [imageUrl],
    },
    
    // Robots e Indexação
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
    
    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
        'pt-BR': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    
    // Verificação
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
    
    // Additional meta
    other: {
      'theme-color': '#0f172a',
      'msapplication-TileColor': '#0f172a',
      'apple-mobile-web-app-title': 'Voltris',
      'application-name': 'Voltris',
    },
    
    // Article specific metadata
    ...(config.type === 'article' && {
      article: {
        publishedTime: config.publishedTime,
        modifiedTime: config.modifiedTime,
        authors: [config.author || 'Voltris'],
        section: config.section,
      },
    }),
    
    // Product specific metadata
    ...(config.type === 'product' && {
      product: {
        price: config.price,
        availability: config.availability,
        brand: 'Voltris',
        rating: config.rating,
        reviewCount: config.reviewCount,
      },
    }),
  };

  return metadata;
}

// Gerar structured data para páginas específicas
export function generateStructuredData(path: string, config?: Partial<SEOConfig>) {
  const baseConfig = seoMetadataMap[path] || seoMetadataMap['/'];
  const finalConfig = { ...baseConfig, ...config };
  
  const canonicalUrl = `https://www.voltrisoptimizer.com${path}`;
  
  // Usar tipo genérico para evitar erros TypeScript
  const structuredData: any = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.voltrisoptimizer.com#organization',
        name: 'Voltris',
        url: 'https://www.voltrisoptimizer.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.voltrisoptimizer.com/logo.png',
          width: 512,
          height: 512
        },
        description: 'Professional PC optimization and technical support services',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+55-11-99671-6235',
          contactType: 'customer service',
          availableLanguage: ['English', 'Portuguese']
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.voltrisoptimizer.com#website',
        url: 'https://www.voltrisoptimizer.com',
        name: 'Voltris',
        description: finalConfig.description,
        publisher: {
          '@id': 'https://www.voltrisoptimizer.com#organization'
        }
      }
    ]
  };

  // Adicionar WebPage
  if (finalConfig.type !== 'product') {
    structuredData['@graph'].push({
      '@type': 'WebPage',
      '@id': canonicalUrl,
      url: canonicalUrl,
      name: finalConfig.title,
      description: finalConfig.description,
      datePublished: finalConfig.publishedTime,
      dateModified: finalConfig.modifiedTime
    });
  }

  // Adicionar Product se for produto
  if (finalConfig.type === 'product') {
    structuredData['@graph'].push({
      '@type': 'Product',
      '@id': `${canonicalUrl}#product`,
      name: finalConfig.title,
      description: finalConfig.description,
      brand: {
        '@type': 'Brand',
        name: 'Voltris'
      },
      offers: {
        '@type': 'Offer',
        url: canonicalUrl,
        priceCurrency: 'USD',
        price: finalConfig.price,
        availability: finalConfig.availability || 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Voltris'
        }
      },
      aggregateRating: finalConfig.rating && finalConfig.reviewCount ? {
        '@type': 'AggregateRating',
        ratingValue: finalConfig.rating,
        reviewCount: finalConfig.reviewCount,
        bestRating: 5,
        worstRating: 1
      } : undefined
    });
  }

  // Adicionar Service se for serviço
  if (finalConfig.type === 'service') {
    structuredData['@graph'].push({
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: finalConfig.title,
      description: finalConfig.description,
      serviceType: 'Technical Support Service',
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Technical Support Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Remote Technical Support'
            }
          }
        ]
      }
    });
  }

  return structuredData;
}

// Helper para gerar keywords automaticamente
export function generateKeywords(title: string, description: string, additionalKeywords?: string[]): string {
  const words = [
    ...title.toLowerCase().split(' '),
    ...description.toLowerCase().split(' '),
    ...(additionalKeywords || [])
  ];
  
  // Remover stopwords e duplicatas
  const stopwords = ['de', 'da', 'do', 'para', 'com', 'sem', 'em', 'um', 'uma', 'o', 'a', 'os', 'as', 'e', 'ou', 'mas', 'por', 'na', 'no', 'se', 'teu', 'sua', 'seu', 'meu', 'minha', 'nosso', 'nossa', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they'];
  
  const filteredWords = words.filter(word => 
    word.length > 2 && 
    !stopwords.includes(word) &&
    !/^\d+$/.test(word)
  );
  
  // Limitar a 10 keywords mais importantes
  const uniqueWords = [...new Set(filteredWords)].slice(0, 10);
  
  return uniqueWords.join(', ');
}
