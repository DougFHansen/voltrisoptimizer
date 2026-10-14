import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import RegionsClient from '../../RegionsClient';
import { regionsData, getCityData } from '../../data';
import { getSiteT } from '@/lib/site-i18n';
import { getLocalizedAlternates } from '@/lib/seo';

// Título/descrição programáticos usam chaves-template no dicionário com tokens-tag
// <city></city>/<country></country>: no pipeline de tradução as TAGS são preservadas
// verbatim (só o texto entre elas é traduzido), então a ordem das palavras fica
// correta em cada idioma; depois injetamos os topônimos e normalizamos o espaçamento.
// hreflang/canonical vêm de getLocalizedAlternates.
export async function generateMetadata({ params }: { params: Promise<{ locale: string; country: string; city: string }> }): Promise<Metadata> {
    const { locale, country: countrySlug, city: citySlug } = await params;
    const data = getCityData(countrySlug, citySlug);

    if (!data) return { title: 'Remote IT Technician' };

    const { city, country } = data;
    const { t } = await getSiteT(locale);
    const fill = (s: string) => s
        .replace(/<city><\/city>/g, ' ' + city.name + ' ')
        .replace(/<country><\/country>/g, ' ' + country.name + ' ')
        .replace(/\s+/g, ' ')
        .replace(/\s+([,.;:!?])/g, '$1')
        .trim();
    const { canonical, languages } = getLocalizedAlternates(`/regions/${country.slug}/${city.slug}`, locale);

    return {
        title: fill(t('Professional Remote IT Support in <city></city>, <country></country> | VOLTRIS')),
        description: fill(t('Advanced remote PC optimization, performance enhancement, system repair, and Windows maintenance services for clients in <city></city> and worldwide.')),
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
            canonical,
            languages
        },
        openGraph: {
            title: fill(t('Remote IT Support in <city></city> | VOLTRIS')),
            description: fill(t('Get elite online computer maintenance and gaming optimization right in <city></city>, <country></country>. 100% remote.')),
            url: canonical,
            type: 'website',
            images: [{ url: '/logo.png', width: 1200, height: 630 }]
        }
    };
}

// Pré-render estático por idioma (locale × país × cidade). O OOM do build era na
// COMPILAÇÃO (webpack empacotando o dicionário gigante), não aqui; com o dict-map
// agora carregando cada idioma sob demanda, o pré-render volta a ser barato e as
// páginas de cidade ficam 100% estáticas (como os guias).
const LOCALES = ['en', 'es', 'pt-br', 'de', 'fr', 'it', 'ja', 'ko', 'ar', 'ru', 'zh-cn', 'vi', 'tr', 'id', 'pl'];

export async function generateStaticParams() {
    const params: { locale: string; country: string; city: string }[] = [];
    LOCALES.forEach((locale) => {
        regionsData.forEach(country => {
            country.cities.forEach(city => {
                params.push({ locale, country: country.slug, city: city.slug });
            });
        });
    });
    return params;
}

export default async function RegionPage({ params }: { params: Promise<{ locale: string; country: string; city: string }> }) {
    const { locale, country: countrySlug, city: citySlug } = await params;
    const data = getCityData(countrySlug, citySlug);

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
                        "url": `https://www.voltrisoptimizer.com/${locale}/regions/${country.slug}/${city.slug}`,
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
