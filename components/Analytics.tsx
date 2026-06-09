import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface AnalyticsProps {
  measurementId?: string;
  gtmId?: string;
  enableDebugMode?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  interface Window {
    gtag?: any;
    dataLayer?: any[];
  }
}

export default function Analytics({ 
  measurementId = 'G-YOUR_MEASUREMENT_ID', 
  gtmId = 'GTM-YOUR_CONTAINER_ID',
  enableDebugMode = false 
}: AnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Inicializar Google Analytics
    if (typeof window !== 'undefined' && measurementId) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function() {
        window.dataLayer!.push(arguments);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: false, // Enviaremos manualmente
        debug_mode: enableDebugMode,
        custom_map: {
          custom_parameter_1: 'page_category',
          custom_parameter_2: 'content_type',
          custom_parameter_3: 'user_type'
        }
      });

      // Google Tag Manager
      if (gtmId) {
        (function(w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode?.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', gtmId);
      }
    }
  }, [measurementId, gtmId, enableDebugMode]);

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag && pathname) {
      window.gtag('config', measurementId, {
        page_location: `https://www.voltrisoptimizer.com${pathname}`,
      });
    }
  }, [pathname, measurementId]);

  // Enviar page view inicial
  useEffect(() => {
    if (window.gtag && measurementId) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [measurementId]);

  return (
    <>
      {/* Google Analytics */}
      {measurementId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${measurementId}', {
                  page_title: document.title,
                  page_location: window.location.href,
                  send_page_view: false,
                  debug_mode: ${enableDebugMode}
                });
              `
            }}
          />
        </>
      )}

      {/* Google Tag Manager noscript */}
      {gtmId && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      )}

      {/* Schema.org para Analytics */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://www.voltrisoptimizer.com',
            name: 'Voltris',
            description: 'Professional PC optimization and technical support services',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.voltrisoptimizer.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            },
            audience: {
              '@type': 'Audience',
              audienceType: 'PC users, gamers, businesses'
            },
            about: [
              {
                '@type': 'Thing',
                name: 'PC Optimization'
              },
              {
                '@type': 'Thing',
                name: 'Gaming Performance'
              },
              {
                '@type': 'Thing',
                name: 'Technical Support'
              }
            ]
          })
        }}
      />
    </>
  );
}

// Custom hooks para analytics
export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: 'user_interaction',
        value: 1,
        ...parameters
      });
    }
  };

  const trackPageView = (path: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-YOUR_MEASUREMENT_ID', {
        page_path: path,
        page_title: title || document.title,
        send_page_view: true
      });
    }
  };

  const trackConversion = (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value || 0,
        currency: 'USD'
      });
    }
  };

  const trackCustomDimension = (dimension: string, value: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'custom_dimension', {
        custom_parameter: dimension,
        custom_value: value
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackConversion,
    trackCustomDimension
  };
}

// Componente para Search Console verification
export function SearchConsoleVerification({ verificationCode }: { verificationCode: string }) {
  return (
    <meta
      name="google-site-verification"
      content={verificationCode}
    />
  );
}

// Componente para Bing Webmaster Tools
export function BingVerification({ verificationCode }: { verificationCode: string }) {
  return (
    <meta
      name="msvalidate.01"
      content={verificationCode}
    />
  );
}

// Componente para Yandex Webmaster
export function YandexVerification({ verificationCode }: { verificationCode: string }) {
  return (
    <meta
      name="yandex-verification"
      content={verificationCode}
    />
  );
}

// Componente completo de verificação
export function VerificationMetaTags({
  googleVerification,
  bingVerification,
  yandexVerification
}: {
  googleVerification?: string;
  bingVerification?: string;
  yandexVerification?: string;
}) {
  return (
    <>
      {googleVerification && <SearchConsoleVerification verificationCode={googleVerification} />}
      {bingVerification && <BingVerification verificationCode={bingVerification} />}
      {yandexVerification && <YandexVerification verificationCode={yandexVerification} />}
    </>
  );
}

// Enhanced Analytics com eventos customizados
export function EnhancedAnalytics() {
  const { trackEvent, trackConversion } = useAnalytics();

  useEffect(() => {
    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
        
        // Track milestones
        if (scrollPercentage === 25 || scrollPercentage === 50 || scrollPercentage === 75 || scrollPercentage === 90) {
          trackEvent('scroll_depth', {
            event_category: 'engagement',
            event_label: `${scrollPercentage}%`,
            value: scrollPercentage
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackEvent]);

  useEffect(() => {
    // Track time on page
    const startTime = Date.now();
    
    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      
      if (timeOnPage > 10) {
        trackEvent('time_on_page', {
          event_category: 'engagement',
          event_label: `${timeOnPage}s`,
          value: timeOnPage
        });
      }
    };
  }, [trackEvent]);

  return null;
}

// Schema.org para organização
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
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
      availableLanguage: ['English', 'Portuguese'],
      areaServed: 'Worldwide',
      hoursAvailable: '24/7'
    },
    sameAs: [
      'https://twitter.com/voltris',
      'https://facebook.com/voltris',
      'https://instagram.com/voltris',
      'https://linkedin.com/company/voltris'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressRegion: 'SP',
      addressLocality: 'São Paulo'
    },
    foundingDate: '2020',
    numberOfEmployees: '10-50',
    knowsAbout: [
      'PC Optimization',
      'Gaming Performance',
      'Windows Support',
      'Technical Support',
      'Hardware Troubleshooting',
      'Software Configuration'
    ],
    serviceType: 'Technical Support Services'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
