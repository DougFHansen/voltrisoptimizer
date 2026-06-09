import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Online IT Technician - Specialized Remote Support | VOLTRIS',
    description: 'Online IT technician for remote technical support worldwide. Specialists in Windows, formatting, optimization, and computer maintenance.',
    keywords: [
        'IT technician',
        'online IT technician',
        'remote technical support',
        'computer technician',
        'computer assistance',
        'systems maintenance',
        'Windows technician'
    ],
    alternates: {
        canonical: '/it-technician',
    },
    openGraph: {
        title: 'Online IT Technician | VOLTRIS Remote Support',
        description: 'Specialized remote technical support for computers. Fast and secure service worldwide.',
        url: 'https://www.voltrisoptimizer.com/it-technician',
        type: 'website',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'VOLTRIS IT Technician',
            },
        ],
    },
};

export default function TecnicoInformaticaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
