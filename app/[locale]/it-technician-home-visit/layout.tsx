import { Metadata } from 'next';
import { localizeMetadata } from '@/lib/site-i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return await localizeMetadata(locale, {
        
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
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/it-technician-home-visit`,
            languages: {
                'en': `/en/it-technician-home-visit`,
                'es': `/es/it-technician-home-visit`,
                'pt-br': `/pt-br/it-technician-home-visit`,
                'de': `/de/it-technician-home-visit`,
                'fr': `/fr/it-technician-home-visit`,
                'it': `/it/it-technician-home-visit`,
                'ja': `/ja/it-technician-home-visit`,
                'ko': `/ko/it-technician-home-visit`,
                'ar': `/ar/it-technician-home-visit`,
                'ru': `/ru/it-technician-home-visit`,
                'zh-cn': `/zh-cn/it-technician-home-visit`,
                'vi': `/vi/it-technician-home-visit`,
                'tr': `/tr/it-technician-home-visit`,
                'id': `/id/it-technician-home-visit`,
                'pl': `/pl/it-technician-home-visit`,
                'x-default': `/en/it-technician-home-visit`
            }
        }
    });
}

export default function TecnicoAtendeCasaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
