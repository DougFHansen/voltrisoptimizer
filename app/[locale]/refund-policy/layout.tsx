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

  const title = 'Refund & Cancellation Policy';
  const description = '7-day money-back guarantee. Simple refund process with no bureaucracy.';
  const keywords = ['refund policy', 'money back guarantee', 'cancellation policy', 'voltris refund', '7 day guarantee'];

  const localeMap: Record<string, string> = {
    'en': `/en/refund-policy`,
    'es': `/es/refund-policy`,
    'pt-br': `/pt-br/refund-policy`,
    'de': `/de/refund-policy`,
    'fr': `/fr/refund-policy`,
    'it': `/it/refund-policy`,
    'ja': `/ja/refund-policy`,
    'ko': `/ko/refund-policy`,
    'ar': `/ar/refund-policy`
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
      url: `https://www.voltrisoptimizer.com/${locale}/refund-policy`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Voltris`,
      description,
    },
    alternates: {
      canonical: `https://www.voltrisoptimizer.com/${locale}/refund-policy`,
      languages: localeMap,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RefundPolicyLayout({ children, params }: LayoutProps) {
  return <>{children}</>;
}