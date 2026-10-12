import type { Metadata } from 'next';

// A página /services-integration é um Client Component ('use client') e por isso
// não pode exportar `metadata` diretamente. Este layout (Server Component) faz a
// ponte e fornece os metadados de SEO, incluindo um canonical auto-referente
// correto (antes apontava para /integracao-servicos, que é apenas um redirect).
export const metadata: Metadata = {
  title: 'Technical Service Integration | Formatting + Optimization + Assistance - VOLTRIS',
  description: 'How our formatting, optimization, and technical assistance services work together to maximize your PC performance. Integrated solutions for complete results.',
  keywords: [
    'service integration',
    'formatting optimization assistance',
    'integrated technical services',
    'complete pc solutions',
  ],
  alternates: {
    canonical: 'https://www.voltrisoptimizer.com/services-integration',
  },
  openGraph: {
    title: 'Technical Service Integration | Formatting + Optimization + Assistance - VOLTRIS',
    description: 'How our formatting, optimization, and technical assistance services work together to maximize your PC performance. Integrated solutions for complete results.',
    url: 'https://www.voltrisoptimizer.com/services-integration',
    type: 'website',
    images: [{
      url: 'https://www.voltrisoptimizer.com/logo.png',
      width: 1200,
      height: 630,
      alt: 'Technical Service Integration',
    }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
