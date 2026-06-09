import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Use - VOLTRIS',
    description: 'Terms and conditions for using VOLTRIS services. Read carefully before hiring our technical support and website creation services.',
    keywords: ['terms of use', 'terms and conditions', 'service terms', 'voltris contract', 'legal terms'],
    alternates: {
        canonical: 'https://www.voltrisoptimizer.com/terms-of-use'
    },
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
    }
};

export default function TermsOfUseLayout({ children }: { children: React.ReactNode }) {
    return children;
}
