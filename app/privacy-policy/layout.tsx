import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - VOLTRIS',
    description: 'VOLTRIS Privacy Policy. Learn how we collect, use, and protect your personal information. Transparency and security first.',
    keywords: ['privacy policy', 'voltris privacy', 'personal data protection', 'data usage', 'information security'],
    alternates: {
        canonical: 'https://www.voltrisoptimizer.com/privacy-policy'
    },
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
    }
};

export default function PoliticaPrivacidadeLayout({ children }: { children: React.ReactNode }) {
    return children;
}
