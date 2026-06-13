import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
    title: 'Terms of Use - VOLTRIS',
    description: 'Terms and conditions for using VOLTRIS services. Read carefully before hiring our technical support and website creation services.',
    keywords: ['terms of use', 'terms and conditions', 'service terms', 'voltris contract', 'legal terms'],
    
    openGraph: {
        title: 'Terms of Use - VOLTRIS',
        description: 'Terms and conditions for using our services.',
        url: 'https://www.voltrisoptimizer.com/terms-of-use',
        type: 'website',
        locale: 'en_US',
        siteName: 'VOLTRIS',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'VOLTRIS - Terms of Use' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Terms of Use | VOLTRIS',
        description: 'Terms and conditions of use.',
        images: ['/logo.png']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
    },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/terms-of-use`,
            languages: {
                'en': `/en/terms-of-use`,
                'es': `/es/terms-of-use`,
                'pt-br': `/pt-br/terms-of-use`,
                'de': `/de/terms-of-use`,
                'fr': `/fr/terms-of-use`,
                'it': `/it/terms-of-use`,
                'ja': `/ja/terms-of-use`,
                'ko': `/ko/terms-of-use`,
                'ar': `/ar/terms-of-use`
            }
        }
    };
}

export default function TermsOfUseLayout({ children }: { children: React.ReactNode }) {
    return children;
}
