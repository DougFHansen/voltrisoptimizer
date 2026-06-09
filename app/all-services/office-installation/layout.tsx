import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Microsoft Office Installation - Remote & Professional | VOLTRIS',
    description: 'Installation and activation of Microsoft Office (Word, Excel, PowerPoint). Complete configuration, OneDrive synchronization, and technical support. 100% remote service.',
    keywords: ['office installation', 'install microsoft office', 'activate office', 'remote office setup', 'configure office', 'office word excel'],
    alternates: {
        canonical: 'https://www.voltrisoptimizer.com/all-services/office-installation'
    },
    openGraph: {
        title: 'Microsoft Office Installation - Remote & Professional | VOLTRIS',
        description: 'Installation and activation of Microsoft Office with complete configuration.',
        url: 'https://www.voltrisoptimizer.com/all-services/office-installation',
        type: 'website',
        locale: 'en_US',
        siteName: 'VOLTRIS',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'VOLTRIS - Office Installation' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Microsoft Office Installation | VOLTRIS',
        description: 'Professional Office installation and configuration.',
        images: ['/logo.png']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
    }
};

export default function InstalacaoOfficeLayout({ children }: { children: React.ReactNode }) {
    return children;
}
