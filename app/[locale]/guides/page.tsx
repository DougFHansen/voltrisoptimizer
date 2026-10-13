import { Metadata } from 'next';
import { getLocalizedAlternates } from '@/lib/seo';
import GuiasClient from './GuiasClient';
import { getAllGuides } from '@/lib/guides';
import { getSiteT, loadSiteDict, applySiteDict } from '@/lib/site-i18n';
import { localizeMetadata } from '@/lib/site-i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const { canonical, languages } = getLocalizedAlternates('/guides', locale);
    // Route every user-facing string through the locale dictionary (English-keyed).
    // Any string not yet translated falls back to the original English safely.
    const { t } = await getSiteT(locale);
    return await localizeMetadata(locale, {

  title: t('Technical Guides and Tutorials | VOLTRIS'),
  description: t('Learn how to format, optimize, remove viruses and solve problems on your PC with our detailed guides written by specialists.'),
  keywords: 'guide formatting windows, pc optimization tutorial, remove virus pc, fix slow internet, assemble gaming pc, backup data, digital security',
  metadataBase: new URL('https://www.voltrisoptimizer.com'),
  alternates: { canonical, languages },
  openGraph: {
    title: t('Technical Guides and Tutorials | VOLTRIS'),
    description: t('Step-by-step tutorials to solve your computer problems.'),
    url: canonical,
    type: 'website',
  }});
}

export default async function Guias({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await loadSiteDict(locale);
  // Translate the card metadata (title/description) on the server BEFORE it is
  // handed to the client component, so the listing ships translated in the HTML.
  const guides = applySiteDict(getAllGuides(), dict);
  return <GuiasClient initialGuides={guides} />;
}
