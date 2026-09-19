import { Metadata } from 'next';
import { getLocalizedAlternates } from '@/lib/seo';
import GuiasClient from './GuiasClient';
import { getAllGuides } from '@/lib/guides';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const { canonical, languages } = getLocalizedAlternates('/guides', locale);
    return {

  title: 'Technical Guides and Tutorials | VOLTRIS',
  description: 'Learn how to format, optimize, remove viruses and solve problems on your PC with our detailed guides written by specialists.',
  keywords: 'guide formatting windows, pc optimization tutorial, remove virus pc, fix slow internet, assemble gaming pc, backup data, digital security',
  metadataBase: new URL('https://www.voltrisoptimizer.com'),
  alternates: { canonical, languages },
  openGraph: {
    title: 'Technical Guides and Tutorials | VOLTRIS',
    description: 'Step-by-step tutorials to solve your computer problems.',
    url: canonical,
    type: 'website',
  }};
}

export default function Guias() {
  const guides = getAllGuides();
  return <GuiasClient initialGuides={guides} />;
}
