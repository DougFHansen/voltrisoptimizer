import { Metadata } from 'next';
import { localizeMetadata } from '@/lib/site-i18n';
import { getLocalizedAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const { canonical, languages } = getLocalizedAlternates('/international/services', locale);
    return await localizeMetadata(locale, {
        title: 'IT Services for Brazilians Abroad | VOLTRIS',
        description: 'Complete IT services for Brazilians living abroad. Remote technical support, website creation, cloud solutions, and technology consulting. Available worldwide 24/7.',
        keywords: ['it services abroad', 'brazilian it support', 'remote tech support', 'website creation abroad', 'cloud solutions'],
        alternates: {
            canonical,
            languages,
        },
        openGraph: {
            title: 'IT Services for Brazilians Abroad | VOLTRIS',
            description: 'Complete IT services for Brazilians living abroad. Available worldwide 24/7.',
            url: canonical,
            type: 'website',
            locale: 'en_US',
            siteName: 'VOLTRIS',
            images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'VOLTRIS - Services' }]
        },
        twitter: {
            card: 'summary_large_image',
            title: 'IT Services Abroad | VOLTRIS',
            description: 'Complete IT services for Brazilians abroad.',
            images: ['/logo.png']
        },
        robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
        }
    });
}

export default function InternationalServicesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
