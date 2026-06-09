import { metadata as aboutMetadata } from './metadata';
import Script from 'next/script';

export const metadata = aboutMetadata;

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
