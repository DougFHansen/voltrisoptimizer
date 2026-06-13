import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
    title: 'Professional Plan - Advanced Web Creation | VOLTRIS',
    description: 'Professional Plan for website creation. Complete site with advanced features, integrated blog, optimized SEO, and premium support. Ideal for growing businesses.',
    keywords: ['professional website plan', 'business site', 'create complete website', 'site with blog', 'advanced professional site'],
    
    openGraph: {
        title: 'Professional Plan - Advanced Web Creation | VOLTRIS',
        description: 'Complete site with advanced features and premium support.',
        url: 'https://www.voltrisoptimizer.com/all-services/website-creation/professional-plan',
        type: 'website',
        locale: 'en_US',
        siteName: 'VOLTRIS',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'VOLTRIS - Professional Plan' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Professional Plan - Web Creation | VOLTRIS',
        description: 'Complete site for growing businesses.',
        images: ['/logo.png']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
    },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/all-services/website-creation/professional-plan`,
            languages: {
                'en': `/en/all-services/website-creation/professional-plan`,
                'es': `/es/all-services/website-creation/professional-plan`,
                'pt-br': `/pt-br/all-services/website-creation/professional-plan`,
                'de': `/de/all-services/website-creation/professional-plan`,
                'fr': `/fr/all-services/website-creation/professional-plan`,
                'it': `/it/all-services/website-creation/professional-plan`,
                'ja': `/ja/all-services/website-creation/professional-plan`,
                'ko': `/ko/all-services/website-creation/professional-plan`,
                'ar': `/ar/all-services/website-creation/professional-plan`
            }
        }
    };
}

export default function PlanoProfissionalLayout({ children }: { children: React.ReactNode }) {
    return children;
}
