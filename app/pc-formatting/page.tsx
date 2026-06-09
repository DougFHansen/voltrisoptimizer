import { Metadata } from 'next';
import PcFormattingClient from './PcFormattingClient';

export const metadata: Metadata = {
  title: 'Professional Remote PC Formatting | VOLTRIS - Full System Reset',
  description: 'Professional remote PC formatting service with secure backup, clean Windows installation, and essential software. Global technical support.',
  keywords: [
    'pc formatting', 'remote formatting', 'system cleanup', 'windows installation',
    'pc reset', 'secure backup', 'software installation', 'laptop formatting',
    'system restore', 'deep cleaning', 'windows formatting', 'clean install',
    'system recovery', 'preventive maintenance', 'computer formatting', 'data backup'
  ],
  openGraph: {
    title: 'Professional Remote PC Formatting | VOLTRIS',
    description: 'Professional remote PC formatting service with secure backup, clean Windows installation, and essential software.',
    url: 'https://www.voltrisoptimizer.com/formatacao-pc',
    siteName: 'VOLTRIS',
    images: [{ url: '/remotebanner.jpg', width: 1200, height: 630, alt: 'Professional Remote PC Formatting VOLTRIS' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Remote PC Formatting | VOLTRIS',
    description: 'Remote formatting with secure backup and clean Windows installation.',
    images: ['/remotebanner.jpg'],
    creator: '@voltris',
  },
  alternates: {
    canonical: 'https://www.voltrisoptimizer.com/pc-formatting',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function PcFormattingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Professional Remote PC Formatting',
            'description': 'Professional remote PC formatting service with secure backup, clean Windows installation, and essential software.',
            'provider': { '@type': 'Organization', 'name': 'VOLTRIS', 'url': 'https://www.voltrisoptimizer.com', 'telephone': '+5511996716235' },
            'serviceType': 'Computer Formatting',
            'areaServed': { '@type': 'Country', 'name': 'Worldwide' },
            'offers': { '@type': 'Offer', 'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'USD', 'price': '29.90' } }
          })
        }}
      />
      <PcFormattingClient />
    </>
  );
}