import { Metadata } from 'next';
import HowItWorksClient from './HowItWorksClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
    title: 'How Voltris Optimizer Works | Performance Science (Kernel & AI)',
    description: 'Understand the technology behind Voltris Optimizer. Thread optimization, system latency reduction, and intelligent debloat for Gamers, Streamers, and Businesses.',
    keywords: [
        'how voltris works',
        'pc optimization technology',
        'windows latency reduction explained',
        'windows kernel optimization',
        'fps boost software how it works',
        'unnecessary windows processes',
        'is voltris safe',
        'performance software engineering',
        'dpc latency explained',
        'obs streamer optimization'
    ],
    openGraph: {
        title: 'Performance Engineering: How Voltris Speeds Up Your PC',
        description: "It's not magic, it's engineering. See how we act on the Windows Kernel to unlock hardware in Games, Streaming, and Workstations.",
        url: 'https://www.voltrisoptimizer.com/voltrisoptimizer/how-it-works',
        type: 'article',
        images: [
            {
                url: 'https://www.voltrisoptimizer.com/og-how-it-works.jpg',
                width: 1200,
                height: 630,
                alt: 'Voltris Optimizer Workflow Diagram',
            },
        ],
    },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/voltrisoptimizer/how-it-works`,
            languages: {
                'en': `/en/voltrisoptimizer/how-it-works`,
                'es': `/es/voltrisoptimizer/how-it-works`,
                'pt-br': `/pt-br/voltrisoptimizer/how-it-works`,
                'de': `/de/voltrisoptimizer/how-it-works`,
                'fr': `/fr/voltrisoptimizer/how-it-works`,
                'it': `/it/voltrisoptimizer/how-it-works`,
                'ja': `/ja/voltrisoptimizer/how-it-works`,
                'ko': `/ko/voltrisoptimizer/how-it-works`,
                'ar': `/ar/voltrisoptimizer/how-it-works`
            }
        }
    };
}

export default function HowItWorksPage() {
    return <HowItWorksClient />;
}
