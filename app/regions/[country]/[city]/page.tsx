import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import RegionsClient from '../../RegionsClient';
import { regionsData, getCityData } from '../../data';

export async function generateMetadata({ params }: { params: { country: string, city: string } }): Promise<Metadata> {
    const data = getCityData(params.country, params.city);

    if (!data) return { title: 'Remote IT Technician' };

    const { city, country } = data;

    return {
        title: `Professional Remote IT Support in ${city.name}, ${country.name} | VOLTRIS`,
        description: `Advanced remote PC optimization, performance enhancement, system repair, and Windows maintenance services for clients in ${city.name} and worldwide.`,
        keywords: [
            `remote it support ${city.name}`,
            `remote pc repair ${city.name}`,
            `computer optimization ${city.name}`,
            `it technician ${city.name}`,
            `gaming pc optimization ${country.name}`,
            `remote computer maintenance ${city.name}`,
            `windows support ${city.name}`,
            `virus removal remote ${city.name}`
        ],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/regions/${country.slug}/${city.slug}`
        },
        openGraph: {
            title: `Remote IT Support in ${city.name} | VOLTRIS`,
            description: `Get elite online computer maintenance and gaming optimization right in ${city.name}, ${country.name}. 100% remote.`,
            url: `https://www.voltrisoptimizer.com/regions/${country.slug}/${city.slug}`,
            type: 'website',
            images: [{ url: '/remotebanner.jpg', width: 1200, height: 630 }]
        }
    };
}

export async function generateStaticParams() {
    const params: { country: string, city: string }[] = [];
    
    regionsData.forEach(country => {
        country.cities.forEach(city => {
            params.push({
                country: country.slug,
                city: city.slug
            });
        });
    });

    return params;
}

export default function RegionPage({ params }: { params: { country: string, city: string } }) {
    const data = getCityData(params.country, params.city);

    if (!data) {
        notFound();
    }

    const { country, city } = data;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": `VOLTRIS - Remote IT Support in ${city.name}`,
                        "description": `Remote computer optimization, gaming performance boost, and maintenance for clients in ${city.name}.`,
                        "url": `https://www.voltrisoptimizer.com/regions/${country.slug}/${city.slug}`,
                        "telephone": "+5511996716235",
                        "areaServed": {
                            "@type": "City",
                            "name": city.name,
                            "containedInPlace": {
                                "@type": "Country",
                                "name": country.name
                            }
                        },
                        "serviceArea": {
                            "@type": "GeoCircle",
                            "description": "Worldwide Remote Support"
                        },
                        "makesOffer": {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Remote PC Optimization & IT Technical Support"
                            }
                        },
                        "openingHours": "Mo-Su 00:00-23:59"
                    })
                }}
            />
            <RegionsClient
                cityName={city.name}
                countryName={country.name}
                continentName={country.continent}
            />
        </>
    );
}
