import { Metadata } from 'next';
import FormatarWindowsClient from './FormatarWindowsClient';
import JsonLd from '@/components/JsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
  title: 'Professional Windows Formatting - Remote Technical Support | VOLTRIS',
  description: 'Specialized Windows 10 and 11 formatting service. Clean installation, data backup, updated drivers, and gaming optimization. 24h secure remote assistance.',
  keywords: [
    'windows formatting', 'remote pc format', 'windows 11 installation', 'windows 10 installation',
    'it technical support', 'format notebook', 'file backup', 'windows optimization'
  ],
  
  openGraph: {
    title: 'Professional and Optimized Windows Formatting | VOLTRIS',
    description: 'Leave your computer like new. Professional formatting with backup and gaming optimization.',
    url: 'https://www.voltrisoptimizer.com/format-windows',
    type: 'website',
  },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/format-windows`,
            languages: {
                'en': `/en/format-windows`,
                'es': `/es/format-windows`,
                'pt-br': `/pt-br/format-windows`,
                'de': `/de/format-windows`,
                'fr': `/fr/format-windows`,
                'it': `/it/format-windows`,
                'ja': `/ja/format-windows`,
                'ko': `/ko/format-windows`,
                'ar': `/ar/format-windows`
            }
        }
    };
}

export default function WindowsFormattingPage() {
  return (
    <>
      <JsonLd
        type="Service"
        data={{
          name: "Professional Windows Formatting",
          description: "Clean Windows installation with backup and performance optimization.",
          provider: {
            "@type": "Organization",
            "name": "VOLTRIS",
            "url": "https://www.voltrisoptimizer.com"
          },
          serviceType: "IT Technical Support",
          areaServed: { "@type": "Country", "name": "USA" },
          offers: {
            "@type": "Offer",
            "price": "25.00",
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
              "name": "How long does Windows formatting take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The process takes between 2 to 4 hours, ensuring a complete backup and installation of all optimized drivers."
              }
            },
            {
              "@type": "Question",
              "name": "Does the formatting include gaming optimization?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, in our Premium and Gamer plans we include system tuning for maximum FPS and lower latency."
              }
            }
          ]
        }}
      />
      <FormatarWindowsClient />
    </>
  );
}