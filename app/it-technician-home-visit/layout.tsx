import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'At-Home IT Technician - Remote & On-Site Support | VOLTRIS',
    description: 'Looking for an IT technician who does house calls? VOLTRIS offers remote and on-site technical support worldwide. Fix your PC problems without leaving home.',
    keywords: [
        'at home IT technician',
        'home computer repair',
        'remote technical support',
        'IT technician near me',
        'home PC assistance',
        'computer maintenance at home',
        'format PC at home',
        'doorstep IT service'
    ],
    alternates: {
        canonical: '/it-technician-home-visit',
    },
    openGraph: {
        title: 'At-Home IT Technician | VOLTRIS',
        description: 'Technical support for your computer from the comfort of your home. Remote and on-site service worldwide.',
        url: 'https://www.voltrisoptimizer.com/it-technician-home-visit',
        type: 'website',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'VOLTRIS Home IT Technician',
            },
        ],
    },
};

export default function TecnicoAtendeCasaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
