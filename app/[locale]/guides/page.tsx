import { Metadata } from 'next';
import { getLocalizedAlternates } from '@/lib/seo';
import GuiasClient from './GuiasClient';
import { getAllGuides } from '@/lib/guides';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
  title: 'Technical Guides and Tutorials | VOLTRIS',
  description: 'Learn how to format, optimize, remove viruses and solve problems on your PC with our detailed guides written by specialists.',
  keywords: 'guide formatting windows, pc optimization tutorial, remove virus pc, fix slow internet, assemble gaming pc, backup data, digital security',
  openGraph: {
    title: 'Technical Guides and Tutorials | VOLTRIS',
    description: 'Step-by-step tutorials to solve your computer problems.',
    url: 'https://www.voltrisoptimizer.com/guides',
    type: 'website',
  },
        ...getLocalizedAlternates('/guides', locale)};
}

export default function Guias() {
  const guides = getAllGuides();
  return <GuiasClient initialGuides={guides} />;
}
