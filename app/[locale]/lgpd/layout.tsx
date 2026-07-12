import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const locales = ['en', 'es', 'pt-br', 'de', 'fr', 'it', 'ja', 'ko', 'ar'];
  
  if (!locales.includes(locale)) {
    notFound();
  }

  const title = 'LGPD - Lei Geral de Proteção de Dados';
  const description = 'Data protection compliance according to the General Data Protection Law (LGPD).';
  const keywords = ['lgpd', 'data protection', 'privacy', 'security', 'voltris lgpd'];

  const localeMap: Record<string, string> = {
    'en': `/en/lgpd`,
    'es': `/es/lgpd`,
    'pt-br': `/pt-br/lgpd`,
    'de': `/de/lgpd`,
    'fr': `/fr/lgpd`,
    'it': `/it/lgpd`,
    'ja': `/ja/lgpd`,
    'ko': `/ko/lgpd`,
    'ar': `/ar/lgpd`
  };

  return {
    title: `${title} | Voltris`,
    description,
    keywords,
    openGraph: {
      title: `${title} | Voltris`,
      description,
      locale,
      type: 'website',
      url: `https://www.voltrisoptimizer.com/${locale}/lgpd`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Voltris`,
      description,
    },
    alternates: {
      canonical: `https://www.voltrisoptimizer.com/${locale}/lgpd`,
      languages: localeMap,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LGPDLayout({ children, params }: LayoutProps) {
  return <>{children}</>;
}
