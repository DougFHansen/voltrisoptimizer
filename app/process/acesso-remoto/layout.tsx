import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Secure Remote Access | Professional Process | Voltris',
    description: 'Learn how Voltris secure remote access works: encryption, client control, full transparency, and compliance with international privacy standards.',
    alternates: {
        canonical: '/processo/acesso-remoto',
    },
    openGraph: {
        title: 'Secure Remote Access | Professional Process | Voltris',
        description: 'Remote service with security, transparency, and professional tools. See how we protect your data!',
        url: 'https://www.voltrisoptimizer.com/processo/acesso-remoto',
        type: 'article',
        images: [
            {
                url: '/about-img.webp',
                width: 1200,
                height: 630,
                alt: 'Voltris Secure Remote Access',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Secure Remote Access | Professional Process | Voltris',
        description: 'Remote service with security, transparency, and professional tools.',
        images: ['/about-img.webp'],
    },
};

export default function AcessoRemotoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
