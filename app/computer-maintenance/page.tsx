import { Metadata } from 'next';
import ManutencaoComputadorClient from './ManutencaoComputadorClient';

export const metadata: Metadata = {
  title: 'Professional Computer Maintenance | VOLTRIS - Cleaning, Parts, and Preventive Maintenance',
  description: 'Professional computer maintenance service with full diagnosis, internal cleaning, part replacement, and preventive maintenance. Certified technicians with warranty and worldwide service.',
  keywords: [
    'computer maintenance', 'pc cleaning', 'computer part replacement',
    'preventive pc maintenance', 'hardware diagnosis', 'computer repair',
    'technical assistance', 'notebook maintenance', 'cooler replacement', 'psu replacement',
    'desktop maintenance', 'computer revision', 'original computer parts',
    'preventive maintenance', 'internal pc cleaning', 'thermal paste replacement'
  ],
  openGraph: {
    title: 'Professional Computer Maintenance | VOLTRIS',
    description: 'Professional computer maintenance service with full diagnosis, internal cleaning, part replacement, and preventive maintenance.',
    url: 'https://www.voltrisoptimizer.com/manutencao-computador',
    siteName: 'VOLTRIS',
    images: [{ url: '/remotebanner.jpg', width: 1200, height: 630, alt: 'Professional Computer Maintenance VOLTRIS' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Computer Maintenance | VOLTRIS',
    description: 'Certified technicians for complete maintenance of your computer.',
    images: ['/remotebanner.jpg'],
    creator: '@voltris',
  },
  alternates: {
    canonical: 'https://www.voltrisoptimizer.com/manutencao-computador',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function ManutencaoComputadorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Professional Computer Maintenance',
            'description': 'Professional computer maintenance service with full diagnosis, internal cleaning, part replacement, and preventive maintenance.',
            'provider': { '@type': 'Organization', 'name': 'VOLTRIS', 'url': 'https://www.voltrisoptimizer.com', 'telephone': '+5511996716235' },
            'serviceType': 'Hardware Maintenance',
            'areaServed': { '@type': 'Country', 'name': 'Worldwide' }
          })
        }}
      />
      <ManutencaoComputadorClient />
    </>
  );
}