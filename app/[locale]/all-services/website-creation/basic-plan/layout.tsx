import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
    title: 'Essential Plan - Professional Web Creation | VOLTRIS',
    description: 'Essential Plan for website creation. Professional, responsive, and SEO-optimized site. Ideal for small businesses and freelancers. From $199.90.',
    keywords: ['essential website plan', 'cheap professional site', 'basic website creation', 'small business site', 'freelancer professional site'],
    
    openGraph: {
        title: 'Essential Plan - Professional Web Creation | VOLTRIS',
        description: 'Professional, responsive, and SEO-optimized site. Ideal for small businesses.',
        url: 'https://www.voltrisoptimizer.com/all-services/website-creation/basic-plan',
        type: 'website',
        locale: 'en_US',
        siteName: 'VOLTRIS',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'VOLTRIS - Essential Plan' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Essential Plan - Web Creation | VOLTRIS',
        description: 'Professional website for small businesses.',
        images: ['/logo.png']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
    },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/all-services/website-creation/basic-plan`,
            languages: {
                'en': `/en/all-services/website-creation/basic-plan`,
                'es': `/es/all-services/website-creation/basic-plan`,
                'pt-br': `/pt-br/all-services/website-creation/basic-plan`,
                'de': `/de/all-services/website-creation/basic-plan`,
                'fr': `/fr/all-services/website-creation/basic-plan`,
                'it': `/it/all-services/website-creation/basic-plan`,
                'ja': `/ja/all-services/website-creation/basic-plan`,
                'ko': `/ko/all-services/website-creation/basic-plan`,
                'ar': `/ar/all-services/website-creation/basic-plan`
            }
        }
    };
}

export default function PlanoBasicoLayout({ children }: { children: React.ReactNode }) {
    return children;
}
