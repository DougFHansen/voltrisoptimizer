import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Remote PC Formatting - Windows 10 and 11 | VOLTRIS',
    description: 'Complete remote formatting of your computer. Clean Windows installation, drivers, essential programs, and optimization. Fast and secure service, without leaving home.',
    keywords: [
        'remote pc formatting',
        'format pc online',
        'windows 10 formatting',
        'windows 11 formatting',
        'clean windows install',
        'remote computer formatting',
        'backup and formatting',
        'professional formatting'
    ],
    alternates: {
        canonical: 'https://www.voltrisoptimizer.com/formatacao'
    },
    openGraph: {
        title: 'Remote Formatting and Optimization | Professional Service',
        description: 'Complete remote formatting with backup, driver installation, and optimization. Professional 100% online service.',
        url: 'https://www.voltrisoptimizer.com/formatacao',
        type: 'website',
        locale: 'en_US',
        siteName: 'VOLTRIS',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'VOLTRIS - Remote PC Formatting'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Remote PC Formatting | VOLTRIS',
        description: 'Complete remote formatting with backup and optimization.',
        images: ['/logo.png'],
        creator: '@voltris'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
};

export default function FormatacaoLayout({ children }: { children: React.ReactNode }) {
    return children;
}
