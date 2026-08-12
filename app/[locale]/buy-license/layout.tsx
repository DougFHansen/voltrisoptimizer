import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: 'Buy License - Voltris Optimizer',
        description: 'Get your Voltris Optimizer license and unlock advanced Windows optimization, FPS boost, and expert technical support.',
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/buy-license`,
            languages: {
                'en': `/en/buy-license`,
                'es': `/es/buy-license`,
                'pt-br': `/pt-br/buy-license`,
                'de': `/de/buy-license`,
                'fr': `/fr/buy-license`,
                'it': `/it/buy-license`,
                'ja': `/ja/buy-license`,
                'ko': `/ko/buy-license`,
                'ar': `/ar/buy-license`
            }
        }
    };
}

export default function BuyLicenseLayout({ children }: { children: React.ReactNode }) {
    return children;
}
