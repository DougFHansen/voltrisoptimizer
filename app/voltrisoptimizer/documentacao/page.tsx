import { Metadata } from 'next';
import DocumentacaoClient from './DocumentacaoClient';

export const metadata: Metadata = {
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
  alternates: {
    canonical: 'https://www.voltrisoptimizer.com/voltrisoptimizer/documentacao',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DocumentacaoPage() {
  return <DocumentacaoClient />;
}
