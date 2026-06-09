import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Service Scheduling | Professional Process | Voltris',
    description: 'Understand the Voltris service scheduling process: flexibility, quick confirmation, checklist, and premium service. Book your slot online!',
    alternates: {
        canonical: '/processo/agendamento',
    },
    openGraph: {
        title: 'Service Scheduling | Professional Process | Voltris',
        description: 'See how service scheduling works at Voltris. Professional and secure service.',
        url: 'https://www.voltrisoptimizer.com/processo/agendamento',
        type: 'article',
        images: [
            {
                url: '/about-img.webp',
                width: 1200,
                height: 630,
                alt: 'Voltris Service Scheduling',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Service Scheduling | Professional Process | Voltris',
        description: 'See how service scheduling works at Voltris.',
        images: ['/about-img.webp'],
    },
};

export default function AgendamentoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
