import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Service Agreement | Professional Process | Voltris',
    description: 'Learn about the Voltris service agreement: security, transparency, privacy, and customer guarantees. Read the terms!',
    alternates: {
        canonical: '/processo/contrato',
    },
    openGraph: {
        title: 'Service Agreement | Professional Process | Voltris',
        description: 'See how our contract protects you: clear terms, guarantees, privacy, and legal compliance.',
        url: 'https://www.voltrisoptimizer.com/processo/contrato',
        type: 'article',
        images: [
            {
                url: '/about-img.webp',
                width: 1200,
                height: 630,
                alt: 'Voltris Service Agreement',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Service Agreement | Professional Process | Voltris',
        description: 'Clear terms and legal security for our customers.',
        images: ['/about-img.webp'],
    },
};

export default function ContratoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
