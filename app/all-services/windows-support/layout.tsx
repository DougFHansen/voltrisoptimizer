import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Professional Windows Support - Monthly Maintenance Plans | VOLTRIS',
    description: 'Keep your Windows always updated and secure with our monthly support plans. Optimization, backup, anti-virus, and 24/7 priority remote support.',
    keywords: [
        'windows support',
        'monthly computer maintenance',
        'it support plan',
        'business technical support',
        'monthly windows optimization',
        'cloud backup windows',
        'remote windows technician'
    ],
    alternates: {
        canonical: '/all-services/windows-support',
    },
    openGraph: {
        title: 'Professional Windows Support | VOLTRIS Plans',
        description: 'Monthly support plans for home users and businesses. Performance and security guaranteed.',
        url: 'https://www.voltrisoptimizer.com/all-services/windows-support',
        type: 'website',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'VOLTRIS Windows Support',
            },
        ],
    },
};

export default function SuporteWindowsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
