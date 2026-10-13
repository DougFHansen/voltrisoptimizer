import { Metadata } from 'next';
import { localizeMetadata } from '@/lib/site-i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return await localizeMetadata(locale, {
        
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
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/all-services/windows-support`,
            languages: {
                'en': `/en/all-services/windows-support`,
                'es': `/es/all-services/windows-support`,
                'pt-br': `/pt-br/all-services/windows-support`,
                'de': `/de/all-services/windows-support`,
                'fr': `/fr/all-services/windows-support`,
                'it': `/it/all-services/windows-support`,
                'ja': `/ja/all-services/windows-support`,
                'ko': `/ko/all-services/windows-support`,
                'ar': `/ar/all-services/windows-support`,
                'ru': `/ru/all-services/windows-support`,
                'zh-cn': `/zh-cn/all-services/windows-support`,
                'vi': `/vi/all-services/windows-support`,
                'tr': `/tr/all-services/windows-support`,
                'id': `/id/all-services/windows-support`,
                'pl': `/pl/all-services/windows-support`,
                'x-default': `/en/all-services/windows-support`
            }
        }
    });
}

export default function SuporteWindowsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
