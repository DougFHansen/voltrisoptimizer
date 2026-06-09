import React from 'react';

interface GlobalStructuredDataProps {
  region?: string;
  language?: string;
  domain?: string;
}

export default function GlobalStructuredData({ 
  region = 'us', 
  language = 'en-us',
  domain = 'voltris.com'
}: GlobalStructuredDataProps) {
  
  // Configurações regionais
  const regionalConfig = {
    'us': {
      domain: 'voltris.com',
      currency: 'USD',
      phone: '+1-555-0123',
      address: {
        streetAddress: '123 Tech Street',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        postalCode: '94105',
        addressCountry: 'US'
      },
      reviews: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4.9",
            bestRating: "5"
          },
          author: {
            "@type": "Person",
            name: "John Smith"
          },
          reviewBody: "Excellent PC optimization service! Boosted my gaming FPS by 40%."
        },
        {
          "@type": "Review", 
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4.8",
            bestRating: "5"
          },
          author: {
            "@type": "Person",
            name: "Sarah Johnson"
          },
          reviewBody: "Professional technical support with fast response times."
        }
      ]
    },
    'br': {
      domain: 'voltris.com.br',
      currency: 'BRL',
      phone: '+55-11-99671-6235',
      address: {
        streetAddress: 'Av. Paulista, 1000',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        postalCode: '01310-100',
        addressCountry: 'BR'
      },
      reviews: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4.9",
            bestRating: "5"
          },
          author: {
            "@type": "Person",
            name: "Carlos Silva"
          },
          reviewBody: "Serviço excelente de otimização! Meu PC ficou muito mais rápido."
        }
      ]
    },
    'uk': {
      domain: 'voltris.co.uk',
      currency: 'GBP',
      phone: '+44-20-7123-4567',
      address: {
        streetAddress: '123 Tech Street',
        addressLocality: 'London',
        addressRegion: 'England',
        postalCode: 'EC1A 1BB',
        addressCountry: 'GB'
      },
      reviews: []
    },
    'de': {
      domain: 'voltris.de',
      currency: 'EUR',
      phone: '+49-30-12345678',
      address: {
        streetAddress: 'Tech Straße 123',
        addressLocality: 'Berlin',
        addressRegion: 'Berlin',
        postalCode: '10115',
        addressCountry: 'DE'
      },
      reviews: []
    }
  };

  const config = regionalConfig[region as keyof typeof regionalConfig] || regionalConfig['us'];

  // Organization Schema para E-A-T global
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `https://www.${config.domain}#organization`,
    "name": "Voltris",
    "url": `https://www.${config.domain}`,
    "logo": {
      "@type": "ImageObject",
      "url": `https://www.${config.domain}/logo.png`,
      "width": 512,
      "height": 512
    },
    "description": "Professional PC optimization and technical support services worldwide",
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "areaServed": "Worldwide",
    "knowsAbout": [
      "PC Optimization",
      "Gaming Performance", 
      "Windows Support",
      "Technical Support",
      "Hardware Troubleshooting",
      "Software Configuration",
      "Network Optimization",
      "Security Services"
    ],
    "serviceType": "Technical Support Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technical Support Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PC Optimization",
            "description": "Complete PC performance optimization service"
          },
          "price": "29.99",
          "priceCurrency": config.currency
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Game Error Fixes",
            "description": "Remote troubleshooting for gaming issues"
          },
          "price": "19.99",
          "priceCurrency": config.currency
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": config.phone,
      "contactType": "customer service",
      "availableLanguage": ["English", "Portuguese", "German", "Spanish", "French"],
      "hoursAvailable": "24/7",
      "areaServed": "Worldwide"
    },
    "address": config.address,
    "sameAs": [
      "https://twitter.com/voltris",
      "https://facebook.com/voltris", 
      "https://instagram.com/voltris",
      "https://linkedin.com/company/voltris",
      "https://youtube.com/@voltris"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": config.reviews
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://www.${config.domain}#service`,
    "name": "Voltris Technical Support",
    "url": `https://www.${config.domain}`,
    "logo": {
      "@type": "ImageObject", 
      "url": `https://www.${config.domain}/logo.png`
    },
    "image": `https://www.${config.domain}/images/service-og.jpg`,
    "description": "Expert PC optimization and technical support services with 24/7 availability",
    "provider": {
      "@type": "Organization",
      "@id": `https://www.${config.domain}#organization`,
      "name": "Voltris"
    },
    "serviceType": "Technical Support",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "PC Support Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PC Performance Optimization",
            "description": "Complete system optimization for maximum performance"
          },
          "price": "29.99",
          "priceCurrency": config.currency,
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Gaming Performance Boost",
            "description": "Specialized optimization for gaming performance"
          },
          "price": "39.99",
          "priceCurrency": config.currency,
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "hoursAvailable": "24/7",
    "telephone": config.phone,
    "address": config.address,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247"
    }
  };

  // Local Business Schema para SEO regional
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.${config.domain}#local`,
    "name": "Voltris",
    "url": `https://www.${config.domain}`,
    "telephone": config.phone,
    "address": config.address,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": region === 'br' ? "-23.5505" : "37.7749",
      "longitude": region === 'br' ? "-46.6333" : "-122.4194"
    },
    "openingHours": [
      "Mo-Su 00:00-23:59"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Credit Card", "PayPal", "Bank Transfer"],
    "currenciesAccepted": config.currency,
    "serviceArea": "Worldwide",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247"
    }
  };

  // Person Schema para E-A-T (Autores/Experts)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `https://www.${config.domain}#expert`,
    "name": "Voltris Technical Team",
    "url": `https://www.${config.domain}/about`,
    "jobTitle": "PC Optimization Specialists",
    "worksFor": {
      "@type": "Organization",
      "@id": `https://www.${config.domain}#organization`,
      "name": "Voltris"
    },
    "knowsAbout": [
      "PC Hardware",
      "Windows Optimization",
      "Gaming Performance",
      "Network Configuration",
      "Security Systems",
      "Cloud Services"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Computer Science Institutes"
      }
    ],
    "award": [
      "Best Technical Support Service 2023",
      "Top PC Optimization Provider 2022"
    ],
    "sameAs": [
      "https://linkedin.com/company/voltris"
    ]
  };

  // WebSite Schema com capabilities
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `https://www.${config.domain}#website`,
    "url": `https://www.${config.domain}`,
    "name": "Voltris",
    "description": "Professional PC optimization and technical support services worldwide",
    "inLanguage": language,
    "publisher": {
      "@type": "Organization",
      "@id": `https://www.${config.domain}#organization`,
      "name": "Voltris"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": `https://www.${config.domain}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ReadAction",
        "target": `https://www.${config.domain}/guides`,
        "object": {
          "@type": "WebPage",
          "name": "Technical Guides"
        }
      }
    ],
    "isAccessibleForFree": true,
    "isFamilyFriendly": true,
    "genre": ["Technology", "Computers", "Gaming", "Technical Support"],
    "audience": {
      "@type": "Audience",
      "audienceType": "PC users, gamers, businesses, IT professionals"
    }
  };

  // FAQ Schema para E-A-T
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://www.${config.domain}#faq`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Voltris offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voltris offers PC optimization, gaming performance boost, Windows formatting, game error fixes, and remote technical support services worldwide."
        }
      },
      {
        "@type": "Question", 
        "name": "How quickly can you help with PC issues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer 24/7 remote support with response times under 5 minutes for urgent issues."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support international customers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we support customers worldwide with multilingual support in English, Portuguese, German, Spanish, and French."
        }
      },
      {
        "@type": "Question",
        "name": "What is your success rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We maintain a 99.2% success rate with 4.9/5 star rating from over 1,200 customer reviews."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  );
}
