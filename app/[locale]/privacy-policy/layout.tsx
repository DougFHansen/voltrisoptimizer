import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
    title: 'Privacy Policy - VOLTRIS',
    description: 'VOLTRIS Privacy Policy. Learn how we collect, use, and protect your personal information. Transparency and security first.',
    keywords: ['privacy policy', 'voltris privacy', 'personal data protection', 'data usage', 'information security'],
    
    openGraph: {
        title: 'Privacy Policy - VOLTRIS',
        description: 'How we collect, use, and protect your personal information.',
        url: 'https://www.voltrisoptimizer.com/privacy-policy',
        type: 'website',
        locale: 'en_US',
        siteName: 'VOLTRIS',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'VOLTRIS - Privacy Policy' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Privacy Policy | VOLTRIS',
        description: 'Protection and privacy of your data.',
        images: ['/logo.png']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
    },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/privacy-policy`,
            languages: {
                'en': `/en/privacy-policy`,
                'es': `/es/privacy-policy`,
                'pt-br': `/pt-br/privacy-policy`,
                'de': `/de/privacy-policy`,
                'fr': `/fr/privacy-policy`,
                'it': `/it/privacy-policy`,
                'ja': `/ja/privacy-policy`,
                'ko': `/ko/privacy-policy`,
                'ar': `/ar/privacy-policy`
            }
        }
    };
}

export default function PoliticaPrivacidadeLayout({ children }: { children: React.ReactNode }) {
    return children;
}
