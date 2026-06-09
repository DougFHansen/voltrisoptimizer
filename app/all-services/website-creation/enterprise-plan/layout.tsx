import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enterprise Plan - High-Level Corporate Sites | VOLTRIS',
    description: 'Enterprise Plan for website creation. Complete solution for large companies with management systems, integrations, administrative dashboard, and dedicated 24/7 support.',
    keywords: ['enterprise website plan', 'corporate site', 'large company website', 'business portal', 'site with dashboard'],
    alternates: {
        canonical: 'https://www.voltrisoptimizer.com/all-services/website-creation/enterprise-plan'
    },
    openGraph: {
        title: 'Enterprise Plan - High-Level Corporate Sites | VOLTRIS',
        description: 'Complete solution for large companies with dedicated 24/7 support.',
        url: 'https://www.voltrisoptimizer.com/all-services/website-creation/enterprise-plan',
        type: 'website',
        locale: 'en_US',
        siteName: 'VOLTRIS',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'VOLTRIS - Enterprise Plan' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Enterprise Plan - Corporate Sites | VOLTRIS',
        description: 'Complete solution for large companies.',
        images: ['/logo.png']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
    }
};

export default function PlanoEmpresarialLayout({ children }: { children: React.ReactNode }) {
    return children;
}
