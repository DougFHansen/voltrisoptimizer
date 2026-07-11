import { Metadata } from 'next';
import ServicosClient from './ServicosClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
  title: 'All Services | VOLTRIS - Remote Technical Support',
  description: 'Discover our premium technical support services: formatting, optimization, virus removal, program installation, and web creation. Fast and secure assistance.',
  keywords: 'it services, technical support price, pc formatting cost, pc optimization price, website creation quote, virus cleaning price',
  openGraph: {
    title: 'All Services | VOLTRIS',
    description: 'Complete solutions in remote technical support and web development.',
    url: 'https://www.voltrisoptimizer.com/all-services',
    type: 'website',
  },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/all-services`,
            languages: {
                'en': `/en/all-services`,
                'es': `/es/all-services`,
                'pt-br': `/pt-br/all-services`,
                'de': `/de/all-services`,
                'fr': `/fr/all-services`,
                'it': `/it/all-services`,
                'ja': `/ja/all-services`,
                'ko': `/ko/all-services`,
                'ar': `/ar/all-services`
            }
        }
    };
}

export default function ServicosPage() {
  return (
    <>
      <ServicosClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Remote IT and Technical Support Services",
            "provider": {
              "@type": "Organization",
              "name": "Voltris",
              "url": "https://www.voltrisoptimizer.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Global"
            },
            "serviceType": [
              "Remote Technical Support",
              "PC Formatting",
              "Computer Optimization",
              "Windows Support",
              "Digital Security",
              "Program Installation",
              "Web Creation"
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceLocation": {
                "@type": "VirtualLocation",
                "url": "https://www.voltrisoptimizer.com"
              }
            }
          })
        }}
      />
    </>
  );
}
