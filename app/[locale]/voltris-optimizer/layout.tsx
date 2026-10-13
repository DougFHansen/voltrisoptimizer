import { Metadata } from 'next';
import { localizeMetadata } from '@/lib/site-i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return await localizeMetadata(locale, {
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
                'ar': `/ar/voltris-optimizer`,
                'ru': `/ru/voltris-optimizer`,
                'zh-cn': `/zh-cn/voltris-optimizer`,
                'vi': `/vi/voltris-optimizer`,
                'tr': `/tr/voltris-optimizer`,
                'id': `/id/voltris-optimizer`,
                'pl': `/pl/voltris-optimizer`,
                'x-default': `/en/voltris-optimizer`
            }
        }
    });
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }