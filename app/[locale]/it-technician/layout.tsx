import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
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
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/it-technician`,
            languages: {
                'en': `/en/it-technician`,
                'es': `/es/it-technician`,
                'pt-br': `/pt-br/it-technician`,
                'de': `/de/it-technician`,
                'fr': `/fr/it-technician`,
                'it': `/it/it-technician`,
                'ja': `/ja/it-technician`,
                'ko': `/ko/it-technician`,
                'ar': `/ar/it-technician`
            }
        }
    };
}

export default function TecnicoInformaticaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
