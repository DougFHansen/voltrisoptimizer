import { Metadata } from 'next';
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
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/guides`,
            languages: {
                'en': `/en/guides`,
                'es': `/es/guides`,
                'pt-br': `/pt-br/guides`,
                'de': `/de/guides`,
                'fr': `/fr/guides`,
                'it': `/it/guides`,
                'ja': `/ja/guides`,
                'ko': `/ko/guides`,
                'ar': `/ar/guides`
            }
        }
    };
}

export default function Guias() {
  const guides = getAllGuides();
  return <GuiasClient initialGuides={guides} />;
}
