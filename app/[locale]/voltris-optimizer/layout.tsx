import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `Download Voltris Optimizer 2025/2026 | Boost FPS & Gaming Performance`,
        description: `The best PC optimization software. Gain up to 30% more FPS in Valorant, CS2, and Fortnite. Real Input Lag reduction in 1 click. Download the 2025/2026 version for free!`,
        keywords: [],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/voltris-optimizer`,
            languages: {
                'en': `/en/voltris-optimizer`,
                'es': `/es/voltris-optimizer`,
                'pt-br': `/pt-br/voltris-optimizer`,
                'de': `/de/voltris-optimizer`,
                'fr': `/fr/voltris-optimizer`,
                'it': `/it/voltris-optimizer`,
                'ja': `/ja/voltris-optimizer`,
                'ko': `/ko/voltris-optimizer`,
                'ar': `/ar/voltris-optimizer`
            }
        }
    };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }