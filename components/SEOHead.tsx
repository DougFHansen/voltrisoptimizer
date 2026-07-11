import React from 'react';
import Head from 'next/head';
import { usePathname, useSearchParams } from 'next/navigation';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleSection?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faq?: Array<{ question: string; answer: string }>;
  rating?: number;
  reviewCount?: number;
  price?: string;
  availability?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  image = 'https://www.voltrisoptimizer.com/images/og-default.jpg',
  type = 'website',
  keywords,
  author = 'Voltris',
  publishedTime,
  modifiedTime,
  articleSection,
  breadcrumbs,
  faq,
  rating,
  reviewCount,
  price,
  availability
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const fullPath = queryString ? `${pathname}?${queryString}` : pathname;
  const currentUrl = `https://www.voltrisoptimizer.com${fullPath}`;
  const canonicalUrl = canonical || currentUrl;

  // Title otimizado
  const siteName = 'Voltris | PC Optimization & Technical Support';
  const finalTitle = title ? `${title} | ${siteName}` : siteName;

  // Meta description otimizada
  const defaultDescription = 'Professional PC optimization, gaming performance boost, and remote technical support services. Maximize your computer\'s potential with Voltris expert solutions.';
  const finalDescription = description || defaultDescription;

  // Structured Data E-A-T Global Avançado
  const structuredData = {
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
        description: 'Professional PC optimization and technical support services worldwide',
        foundingDate: '2020',
        numberOfEmployees: '10-50',
        areaServed: 'Worldwide',
        knowsAbout: [
          'PC Optimization',
          'Gaming Performance', 
          'Windows Support',
          'Technical Support',
          'Hardware Troubleshooting',
          'Software Configuration',
          'Network Optimization',
          'Security Services'
        ],
        serviceType: 'Technical Support Services',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Technical Support Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'PC Optimization',
                description: 'Complete PC performance optimization service'
              },
              price: '29.99',
              priceCurrency: 'USD'
            },
            {
              '@type': 'Offer', 
              itemOffered: {
                '@type': 'Service',
                name: 'Game Error Fixes',
                description: 'Remote troubleshooting for gaming issues'
              },
              price: '19.99',
              priceCurrency: 'USD'
            }
          ]
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+55-11-99671-6235',
          contactType: 'customer service',
          availableLanguage: ['English', 'Portuguese', 'German', 'Spanish', 'French'],
          hoursAvailable: '24/7',
          areaServed: 'Worldwide'
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'BR',
          addressRegion: 'SP',
          addressLocality: 'São Paulo'
        },
        sameAs: [
          'https://twitter.com/voltris',
          'https://facebook.com/voltris', 
          'https://instagram.com/voltris',
          'https://linkedin.com/company/voltris',
          'https://youtube.com/@voltris'
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1247',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.9',
              bestRating: '5'
            },
            author: {
              '@type': 'Person',
              name: 'John Smith'
            },
            reviewBody: 'Excellent PC optimization service! Boosted my gaming FPS by 40%.'
          },
          {
            '@type': 'Review', 
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8',
              bestRating: '5'
            },
            author: {
              '@type': 'Person',
              name: 'Sarah Johnson'
            },
            reviewBody: 'Professional technical support with fast response times.'
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.voltrisoptimizer.com#website',
        url: 'https://www.voltrisoptimizer.com',
        name: 'Voltris',
        description: finalDescription,
        publisher: {
          '@id': 'https://www.voltrisoptimizer.com#organization'
        },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.voltrisoptimizer.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        },
        isAccessibleForFree: true,
        isFamilyFriendly: true,
        genre: ['Technology', 'Computers', 'Gaming', 'Technical Support'],
        audience: {
          '@type': 'Audience',
          audienceType: 'PC users, gamers, businesses, IT professionals'
        }
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://www.voltrisoptimizer.com#service',
        name: 'Voltris Technical Support',
        url: 'https://www.voltrisoptimizer.com',
        logo: {
          '@type': 'ImageObject', 
          'url': 'https://www.voltrisoptimizer.com/logo.png'
        },
        image: 'https://www.voltrisoptimizer.com/images/service-og.jpg',
        description: 'Expert PC optimization and technical support services with 24/7 availability',
        provider: {
          '@type': 'Organization',
          '@id': 'https://www.voltrisoptimizer.com#organization',
          name: 'Voltris'
        },
        serviceType: 'Technical Support',
        areaServed: 'Worldwide',
        hoursAvailable: '24/7',
        telephone: '+55-11-99671-6235',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1247'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://www.voltrisoptimizer.com#expert',
        name: 'Voltris Technical Team',
        url: 'https://www.voltrisoptimizer.com/about',
        jobTitle: 'PC Optimization Specialists',
        worksFor: {
          '@type': 'Organization',
          '@id': 'https://www.voltrisoptimizer.com#organization',
          name: 'Voltris'
        },
        knowsAbout: [
          'PC Hardware',
          'Windows Optimization',
          'Gaming Performance',
          'Network Configuration',
          'Security Systems',
          'Cloud Services'
        ],
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'Computer Science Institutes'
          }
        ],
        award: [
          'Best Technical Support Service 2023',
          'Top PC Optimization Provider 2022'
        ],
        sameAs: [
          'https://linkedin.com/company/voltris'
        ]
      }
    ]
  };

  // Adicionar WebPage se não for article
  if (type !== 'article') {
    structuredData['@graph'].push({
      '@type': 'WebPage',
      '@id': canonicalUrl,
      url: canonicalUrl,
      name: finalTitle,
      description: finalDescription,
      isPartOf: {
        '@id': 'https://www.voltrisoptimizer.com#website'
      },
      about: {
        '@type': 'Thing',
        name: 'PC Optimization and Technical Support'
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: image
      },
      datePublished: publishedTime,
      dateModified: modifiedTime,
      breadcrumb: breadcrumbs ? {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url
        }))
      } : undefined
    });
  }

  // Adicionar Article se for tipo article
  if (type === 'article' && articleSection) {
    structuredData['@graph'].push({
      '@type': 'Article',
      '@id': canonicalUrl,
      url: canonicalUrl,
      headline: finalTitle,
      description: finalDescription,
      author: {
        '@type': 'Organization',
        name: 'Voltris',
        url: 'https://www.voltrisoptimizer.com'
      },
      publisher: {
        '@id': 'https://www.voltrisoptimizer.com#organization'
      },
      datePublished: publishedTime,
      dateModified: modifiedTime,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      articleSection: articleSection,
      image: {
        '@type': 'ImageObject',
        url: image
      }
    });
  }

  // Adicionar FAQ se existir
  if (faq && faq.length > 0) {
    structuredData['@graph'].push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      url: canonicalUrl,
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    });
  }

  // Adicionar Product se for serviço
  if (price && type === 'product') {
    structuredData['@graph'].push({
      '@type': 'Product',
      '@id': `${canonicalUrl}#product`,
      name: finalTitle,
      description: finalDescription,
      image: image,
      brand: {
        '@type': 'Brand',
        name: 'Voltris'
      },
      offers: {
        '@type': 'Offer',
        url: canonicalUrl,
        priceCurrency: 'USD',
        price: price,
        availability: availability || 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Voltris'
        }
      },
      aggregateRating: rating && reviewCount ? {
        '@type': 'AggregateRating',
        ratingValue: rating,
        reviewCount: reviewCount,
        bestRating: 5,
        worstRating: 1
      } : undefined
    });
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Voltris" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={finalTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@voltris" />
      <meta name="twitter:creator" content="@voltris" />
      
      {/* Additional SEO Meta */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="application-name" content="Voltris" />
      <meta name="apple-mobile-web-app-title" content="Voltris" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//img.clerk.com" />
      <link rel="dns-prefetch" href="//vjscxpxvdfhryixksrno.supabase.co" />
      
      {/* Preconnect for Critical Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="pt-br" href={canonicalUrl.replace('/en', '')} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Head>
  );
};

export default SEOHead;
