import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
    title: 'IT Services - Technical Support and Web Design | VOLTRIS',
    description: 'Discover all our services: remote technical support, formatting, PC optimization, website creation, software installation and much more. Worldwide service.',
    keywords: ['it services', 'technical support', 'web design', 'computer maintenance', 'IT services', 'remote IT', 'pc formatting', 'windows optimization'],
    
    openGraph: {
        title: 'IT Services - Technical Support and Web Design | VOLTRIS',
        description: 'Complete IT Services: remote technical support, formatting, optimization and professional website creation.',
        url: 'https://www.voltrisoptimizer.com/services',
        type: 'website',
        locale: 'en_US',
        siteName: 'VOLTRIS',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'VOLTRIS - IT Services' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IT Services | VOLTRIS',
        description: 'Complete IT services and remote technical support.',
        images: ['/logo.png']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
    },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/services`,
            languages: {
                'en': `/en/services`,
                'es': `/es/services`,
                'pt-br': `/pt-br/services`,
                'de': `/de/services`,
                'fr': `/fr/services`,
                'it': `/it/services`,
                'ja': `/ja/services`,
                'ko': `/ko/services`,
                'ar': `/ar/services`
            }
        }
    };
}


export default function ServicosLayout({ children }: { children: React.ReactNode }) {
    return children;
}
