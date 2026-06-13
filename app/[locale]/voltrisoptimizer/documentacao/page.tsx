import { Metadata } from 'next';
import DocumentacaoClient from './DocumentacaoClient';

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
    url: 'https://www.voltrisoptimizer.com/voltrisoptimizer/documentacao',
    type: 'article',
    siteName: 'Voltris Technology',
    locale: 'en_US',
  },
  
  robots: {
    index: true,
    follow: true,
  },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/voltrisoptimizer/documentacao`,
            languages: {
                'en': `/en/voltrisoptimizer/documentacao`,
                'es': `/es/voltrisoptimizer/documentacao`,
                'pt-br': `/pt-br/voltrisoptimizer/documentacao`,
                'de': `/de/voltrisoptimizer/documentacao`,
                'fr': `/fr/voltrisoptimizer/documentacao`,
                'it': `/it/voltrisoptimizer/documentacao`,
                'ja': `/ja/voltrisoptimizer/documentacao`,
                'ko': `/ko/voltrisoptimizer/documentacao`,
                'ar': `/ar/voltrisoptimizer/documentacao`
            }
        }
    };
}

export default function DocumentacaoPage() {
  return <DocumentacaoClient />;
}
