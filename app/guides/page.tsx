import { Metadata } from 'next';
import GuiasClient from './GuiasClient';
import { getAllGuides } from '@/lib/guides';

export const metadata: Metadata = {
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
    canonical: 'https://www.voltrisoptimizer.com/guides',
  },
};

export default function Guias() {
  const guides = getAllGuides();
  return <GuiasClient initialGuides={guides} />;
}
