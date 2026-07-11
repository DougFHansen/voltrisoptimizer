import { Metadata } from 'next';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
    title: 'Website Creation - Basic, Professional, and Enterprise Plans | VOLTRIS',
    description: 'Hire professional website creation: responsive design, SEO, and hosting. Basic, professional, and enterprise plans. Free quotes.',
    keywords: [
        'website creation',
        'web development',
        'responsive design',
        'SEO',
        'hosting',
        'professional websites',
        'website development',
        'web design'
    ],
    
    openGraph: {
        title: 'Website Creation - Basic, Professional, and Enterprise Plans | VOLTRIS',
        description: 'Professional websites with responsive design, SEO, and hosting. Plans for small businesses and enterprises.',
        url: 'https://www.voltrisoptimizer.com/all-services/website-creation',
        type: 'website',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'Professional Website Creation VOLTRIS',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Website Creation - Basic, Professional, and Enterprise Plans | VOLTRIS',
        description: 'Professional websites with responsive design, SEO, and hosting. Plans for all business sizes.',
        images: ['/logo.png'],
    },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/all-services/website-creation`,
            languages: {
                'en': `/en/all-services/website-creation`,
                'es': `/es/all-services/website-creation`,
                'pt-br': `/pt-br/all-services/website-creation`,
                'de': `/de/all-services/website-creation`,
                'fr': `/fr/all-services/website-creation`,
                'it': `/it/all-services/website-creation`,
                'ja': `/ja/all-services/website-creation`,
                'ko': `/ko/all-services/website-creation`,
                'ar': `/ar/all-services/website-creation`
            }
        }
    };
}

export default function CriacaoSitesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Website Creation",
        "description": "Professional website creation with responsive design, SEO optimization, and included hosting",
        "provider": {
            "@type": "Organization",
            "name": "VOLTRIS",
            "url": "https://www.voltrisoptimizer.com"
        },
        "serviceType": "Web Development",
        "areaServed": {
            "@type": "Country",
            "name": "Worldwide"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Website Creation Plans",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "name": "Basic Plan",
                    "price": "199.00",
                    "priceCurrency": "USD",
                    "description": "Website up to 5 pages with responsive design and basic SEO optimization"
                },
                {
                    "@type": "Offer",
                    "name": "Professional Plan",
                    "price": "399.00",
                    "priceCurrency": "USD",
                    "description": "Website up to 10 pages with premium design and advanced SEO optimization"
                },
                {
                    "@type": "Offer",
                    "name": "Enterprise Plan",
                    "price": "799.00",
                    "priceCurrency": "USD",
                    "description": "Custom website with unlimited pages and e-commerce capabilities"
                }
            ]
        }
    };

    return (
        <>
            <Script
                id="website-creation-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            {children}
        </>
    );
}
