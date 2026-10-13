import { Metadata } from 'next';
import { getLocalizedAlternates } from '@/lib/seo';
import { localizeMetadata } from '@/lib/site-i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return await localizeMetadata(locale, {
        title: 'Services & Technical Support | VOLTRIS',
        description: 'Expert PC optimization, format, virus removal, and error correction services. Remote technical support for maximum performance.',
        keywords: 'pc optimization services, format computer, remote technical support, virus removal, fix windows errors, gaming pc optimization',
        openGraph: {
            title: 'Services & Technical Support | VOLTRIS',
            description: 'Expert PC optimization, format, virus removal, and error correction services.',
            url: `https://www.voltrisoptimizer.com/${locale}/services`,
            type: 'website',
        },
        alternates: getLocalizedAlternates('/services', locale)
    });
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
