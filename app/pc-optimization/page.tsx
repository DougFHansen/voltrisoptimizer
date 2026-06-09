import { Metadata } from 'next';
import OtimizacaoPcClient from './OtimizacaoPcClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'PC Optimization and FPS Boost - Gamer & Professional | VOLTRIS',
  description: 'Boost your Windows PC performance. Professional optimization for games (high FPS), work, and heavy software. Reduction of input lag and stuttering.',
  keywords: [
    'pc optimization', 'boost fps', 'reduce input lag', 'optimize windows for games',
    'speed up slow pc', 'windows tuning', 'gamer optimization', 'system cleaning'
  ],
  alternates: {
    canonical: 'https://www.voltrisoptimizer.com/pc-optimization',
  },
  openGraph: {
    title: 'Professional PC Optimization and Windows Performance | VOLTRIS',
    description: 'Maximum performance for your computer. Gain up to 40% more FPS in your favorite games.',
    url: 'https://www.voltrisoptimizer.com/pc-optimization',
    type: 'website',
  }
};

export default function PcOptimizationPage() {
  return (
    <>
      <JsonLd
        type="Service"
        data={{
          name: "Professional PC Optimization",
          description: "Specialized tuning and Windows optimization service for maximum speed.",
          provider: {
            "@type": "Organization",
            "name": "VOLTRIS",
            "url": "https://www.voltrisoptimizer.com"
          },
          serviceType: "IT and Technology",
          areaServed: { "@type": "Country", "name": "USA" },
          offers: {
            "@type": "Offer",
            "price": "9.90",
            "priceCurrency": "USD"
          }
        }}
      />
      <JsonLd
        type="FAQPage"
        data={{
          mainEntity: [
            {
              "@type": "Question",
              "name": "How much FPS do I gain with VOLTRIS optimization?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our optimization delivers between 20% to 40% FPS gain, depending on the hardware."
              }
            },
            {
              "@type": "Question",
              "name": "Is the PC optimization service safe?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Our adjustments are made via Windows software registry and services."
              }
            }
          ]
        }}
      />
      <OtimizacaoPcClient />
    </>
  );
}