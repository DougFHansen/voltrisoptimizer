import { Metadata } from 'next';
import { localizeMetadata } from '@/lib/site-i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return await localizeMetadata(locale, {
        title: `Technical Service Bundles | Formatting + Optimization + Assistance - VOLTRIS`,
        description: `Combined technical service bundles: Windows formatting, PC optimization, technical assistance, and optimization software. Save and get the best performance.`,
        keywords: [],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/combined-services`,
            languages: {
                'en': `/en/combined-services`,
                'es': `/es/combined-services`,
                'pt-br': `/pt-br/combined-services`,
                'de': `/de/combined-services`,
                'fr': `/fr/combined-services`,
                'it': `/it/combined-services`,
                'ja': `/ja/combined-services`,
                'ko': `/ko/combined-services`,
                'ar': `/ar/combined-services`,
                'ru': `/ru/combined-services`,
                'zh-cn': `/zh-cn/combined-services`,
                'vi': `/vi/combined-services`,
                'tr': `/tr/combined-services`,
                'id': `/id/combined-services`,
                'pl': `/pl/combined-services`,
                'x-default': `/en/combined-services`
            }
        }
    });
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }