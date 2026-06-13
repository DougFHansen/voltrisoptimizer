import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
    title: 'All Support and Development Services | VOLTRIS',
    description: 'Check out all VOLTRIS services: Remote technical support, website creation, Windows optimization, virus removal, network installation and more. Complete 100% online solutions.',
    keywords: [
        'technical support services',
        'professional website creation',
        'pc optimization',
        'remote formatting',
        'windows support',
        'office installation',
        'game error fix',
        '24h remote support'
    ],
    
    openGraph: {
        title: 'Our Services | VOLTRIS Technology and Support',
        description: 'Complete solutions in technical support and web development. Worldwide service.',
        url: 'https://www.voltrisoptimizer.com/all-services',
        type: 'website',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'VOLTRIS Services',
            },
        ],
    },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/all-services`,
            languages: {
                'en': `/en/all-services`,
                'es': `/es/all-services`,
                'pt-br': `/pt-br/all-services`,
                'de': `/de/all-services`,
                'fr': `/fr/all-services`,
                'it': `/it/all-services`,
                'ja': `/ja/all-services`,
                'ko': `/ko/all-services`,
                'ar': `/ar/all-services`
            }
        }
    };
}

export default function AllServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
