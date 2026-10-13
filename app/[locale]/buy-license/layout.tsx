import { Metadata } from 'next';
import { localizeMetadata } from '@/lib/site-i18n';
import { getLocalizedAlternates } from '@/lib/seo';

// Página é client component ("use client"), então o metadata/hreflang mora aqui
// no layout (server). Padrão igual ao de termos-of-use/about: metadata localizada
// + canonical por idioma + hreflang cobrindo os 15 idiomas.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const { canonical, languages } = getLocalizedAlternates('/buy-license', locale);
  return await localizeMetadata(locale, {
    title: 'Buy VOLTRIS License - PC Optimization & Gaming Performance Plans',
    description: 'Choose your VOLTRIS Optimizer plan: a one-time lifetime license or a subscription for professional PC optimization, higher FPS and expert remote support.',
    keywords: ['buy voltris optimizer', 'voltris license price', 'pc optimization software', 'fps booster purchase', 'voltris subscription', 'download voltris optimizer'],
    openGraph: {
      title: 'Buy VOLTRIS License - PC Optimization & Gaming Plans',
      description: 'One-time or subscription plans for professional PC optimization and FPS boost.',
      url: canonical,
      type: 'website',
    },
    alternates: { canonical, languages },
  });
}

export default function BuyLicenseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
