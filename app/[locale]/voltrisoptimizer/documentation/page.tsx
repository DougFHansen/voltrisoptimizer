import { Metadata } from 'next';
import DocumentationClient from './DocumentationClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
  title: 'Technical Documentation | Voltris Optimizer',
  description: 'Detailed analysis of the engineering behind Voltris Optimizer. Learn how we optimize the Windows Kernel, Services, and Networks.',
  keywords: [
    'technical documentation',
    'voltris optimizer tech specs',
    'windows kernel optimization',
    'disabled windows services',
    'tcp ip tuning',
    'voltris safety',
    'software architecture'
  ],
  openGraph: {
    title: 'Voltris Optimizer | Technical Documentation',
    description: 'Dive into the technical architecture of Voltris Optimizer. Security, Performance, and Software Engineering explained.',
    url: 'https://www.voltrisoptimizer.com/voltrisoptimizer/documentation',
    type: 'article',
    siteName: 'Voltris Technology',
    locale: 'en_US',
  },
  
  robots: {
    index: true,
    follow: true,
  },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/voltrisoptimizer/documentation`,
            languages: {
                'en': `/en/voltrisoptimizer/documentation`,
                'es': `/es/voltrisoptimizer/documentation`,
                'pt-br': `/pt-br/voltrisoptimizer/documentation`,
                'de': `/de/voltrisoptimizer/documentation`,
                'fr': `/fr/voltrisoptimizer/documentation`,
                'it': `/it/voltrisoptimizer/documentation`,
                'ja': `/ja/voltrisoptimizer/documentation`,
                'ko': `/ko/voltrisoptimizer/documentation`,
                'ar': `/ar/voltrisoptimizer/documentation`
            }
        }
    };
}

export default function DocumentationPage() {
  return <DocumentationClient />;
}
