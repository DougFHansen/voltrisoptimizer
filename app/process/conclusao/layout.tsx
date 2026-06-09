import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Conclusion & Guarantee | Professional Process | Voltris',
    description: 'See how Voltris services are concluded: testing, documentation, warranty, and post-service support. Total satisfaction!',
    alternates: {
        canonical: '/processo/conclusao',
    },
    openGraph: {
        title: 'Conclusion & Guarantee | Professional Process | Voltris',
        description: 'Professional completion, 30-day warranty, 24/7 support, and complete documentation.',
        url: 'https://www.voltrisoptimizer.com/processo/conclusao',
        type: 'article',
        images: [
            {
                url: '/about-img.webp',
                width: 1200,
                height: 630,
                alt: 'Voltris Conclusion & Guarantee',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Conclusion & Guarantee | Professional Process | Voltris',
        description: 'Professional completion and total satisfaction guarantee.',
        images: ['/about-img.webp'],
    },
};

export default function ConclusaoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
