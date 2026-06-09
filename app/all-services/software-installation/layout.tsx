import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Essential Software Installation | Remote Program Setup | VOLTRIS',
    description: 'Essential program installation, remote software setup, security, speed, and specialized support. Install Google Chrome, WhatsApp, Zoom, and more!',
    keywords: [
        'software installation',
        'install programs remotely',
        'professional software setup',
        'install Google Chrome',
        'install WhatsApp',
        'install Zoom',
        'essential software setup',
        'remote support',
        'secure installation'
    ],
    alternates: {
        canonical: '/all-services/software-installation',
    },
    openGraph: {
        title: 'Essential Software Installation | VOLTRIS Remote Support',
        description: 'Install essential programs securely and quickly with specialized remote support. Immediate assistance!',
        url: 'https://www.voltrisoptimizer.com/all-services/software-installation',
        type: 'website',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'VOLTRIS Software Installation',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Essential Software Installation | VOLTRIS Remote Support',
        description: 'Install essential programs securely and quickly with specialized remote support.',
        images: ['/logo.png'],
    },
};

export default function InstalacaoProgramasLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
