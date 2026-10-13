import { Metadata } from 'next';
import { localizeMetadata } from '@/lib/site-i18n';
import { getLocalizedAlternates } from '@/lib/seo';

// Página é client component ("use client"); metadata/hreflang ficam no layout
// (server). Cobertura de SEO multilíngue igual às demais páginas públicas.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const { canonical, languages } = getLocalizedAlternates('/glossary', locale);
  return await localizeMetadata(locale, {
    title: 'PC, Gaming & Technology Glossary - Terms Explained | VOLTRIS',
    description: 'Plain-language dictionary of PC hardware, Windows, gaming and security terms: BIOS, drivers, malware, FPS, throttling, SSD and more. Learn the tech jargon fast.',
    keywords: ['pc glossary', 'computer terms explained', 'what is bios', 'what are drivers', 'tech dictionary gaming', 'windows terminology'],
    openGraph: {
      title: 'PC, Gaming & Technology Glossary | VOLTRIS',
      description: 'Plain-language dictionary of PC, Windows, gaming and security terms.',
      url: canonical,
      type: 'website',
    },
    alternates: { canonical, languages },
  });
}

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
