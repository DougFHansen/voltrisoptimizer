import { Metadata } from 'next';
import Script from 'next/script';
import { localizeMetadata } from '@/lib/site-i18n';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return await localizeMetadata(locale, {
        title: `About Voltris | System Optimization and Technical Support Specialists`,
        description: `Learn about the history of Voltris, our founder Douglas Felipe Moraes Gonçalves, our mission, and the technical methodology that sets our Windows system optimization support apart.`,
        keywords: [],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/about`,
            languages: {
                'en': `/en/about`,
                'es': `/es/about`,
                'pt-br': `/pt-br/about`,
                'de': `/de/about`,
                'fr': `/fr/about`,
                'it': `/it/about`,
                'ja': `/ja/about`,
                'ko': `/ko/about`,
                'ar': `/ar/about`,
                'ru': `/ru/about`,
                'zh-cn': `/zh-cn/about`,
                'vi': `/vi/about`,
                'tr': `/tr/about`,
                'id': `/id/about`,
                'pl': `/pl/about`,
                'x-default': `/en/about`
            }
        }
    });
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "VOLTRIS",
        "description": "Specialized company in remote technical support and website creation, with over 5000 clients served and 98% satisfaction rate.",
        "url": "https://www.voltrisoptimizer.com",
        "logo": "https://www.voltrisoptimizer.com/logo.png",
        "foundingDate": "2015",
        "numberOfEmployees": "10-50",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English", "Portuguese"],
            "areaServed": "Worldwide"
        },
        "sameAs": [
            "https://www.facebook.com/voltris",
            "https://www.instagram.com/voltris",
            "https://www.linkedin.com/company/voltris"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "VOLTRIS Technology Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Remote Technical Support",
                        "description": "Specialized remote support for Windows systems and PC optimization"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Website Creation",
                        "description": "Development of responsive and SEO-optimized websites"
                    }
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "5000",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    return (
        <>
            <Script
                id="about-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            {children}
        </>
    );
}
