import { Metadata } from 'next';
import { localizeMetadata } from '@/lib/site-i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return await localizeMetadata(locale, {
        
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
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/all-services/software-installation`,
            languages: {
                'en': `/en/all-services/software-installation`,
                'es': `/es/all-services/software-installation`,
                'pt-br': `/pt-br/all-services/software-installation`,
                'de': `/de/all-services/software-installation`,
                'fr': `/fr/all-services/software-installation`,
                'it': `/it/all-services/software-installation`,
                'ja': `/ja/all-services/software-installation`,
                'ko': `/ko/all-services/software-installation`,
                'ar': `/ar/all-services/software-installation`,
                'ru': `/ru/all-services/software-installation`,
                'zh-cn': `/zh-cn/all-services/software-installation`,
                'vi': `/vi/all-services/software-installation`,
                'tr': `/tr/all-services/software-installation`,
                'id': `/id/all-services/software-installation`,
                'pl': `/pl/all-services/software-installation`,
                'x-default': `/en/all-services/software-installation`
            }
        }
    });
}

export default function InstalacaoProgramasLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
