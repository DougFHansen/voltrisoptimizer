import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Essential Plan - Professional Web Creation | VOLTRIS',
    description: 'Essential Plan for website creation. Professional, responsive, and SEO-optimized site. Ideal for small businesses and freelancers. From $199.90.',
    keywords: ['essential website plan', 'cheap professional site', 'basic website creation', 'small business site', 'freelancer professional site'],
    alternates: {
        canonical: 'https://www.voltrisoptimizer.com/all-services/website-creation/basic-plan'
    },
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
    }
};

export default function PlanoBasicoLayout({ children }: { children: React.ReactNode }) {
    return children;
}
