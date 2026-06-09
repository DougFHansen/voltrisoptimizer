import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'LGPD - General Data Protection Law | VOLTRIS',
    description: 'Information on how VOLTRIS treats your personal data in accordance with LGPD (Brazilian General Data Protection Law). Learn about our security and privacy procedures.',
    keywords: ['lgpd', 'data protection', 'privacy', 'data security', 'general data protection law', 'personal data'],
    alternates: {
        canonical: 'https://www.voltrisoptimizer.com/lgpd'
    },
    openGraph: {
        title: 'LGPD - General Data Protection Law | VOLTRIS',
        description: 'How VOLTRIS treats your personal data in accordance with LGPD.',
        url: 'https://www.voltrisoptimizer.com/lgpd',
        type: 'website',
        locale: 'en_US',
        siteName: 'VOLTRIS',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'VOLTRIS - LGPD' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LGPD | VOLTRIS',
        description: 'Data protection and privacy.',
        images: ['/logo.png']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
    }
};

export default function LGPDLayout({ children }: { children: React.ReactNode }) {
    return children;
}
