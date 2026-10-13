import React from 'react';
import { Metadata } from 'next';
import ItTechnicianClient from '../it-technician/ItTechnicianClient';
import { localizeMetadata } from '@/lib/site-i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return await localizeMetadata(locale, {
        
  title: "In-Home IT Technician - Online Support | VOLTRIS",
  description: "Remote and in-person technical support in the comfort of your home. Solve computer problems, formatting, and maintenance without leaving home. 24/7 service.",
  keywords: [
    "in-home it technician",
    "residential it technician",
    "format pc at home",
    "computer help at home",
    "home visit it technician",
    "residential technical support",
    "repair pc at home",
    "technical service at home"
  ],
  openGraph: {
    title: "In-Home IT Technician | VOLTRIS",
    description: "Solve your computer problems without leaving home with our elite remote technical support.",
    url: "https://www.voltrisoptimizer.com/it-technician-home-visit",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630 }]
  },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/it-technician-home-visit`,
            languages: {
                'en': `/en/it-technician-home-visit`,
                'es': `/es/it-technician-home-visit`,
                'pt-br': `/pt-br/it-technician-home-visit`,
                'de': `/de/it-technician-home-visit`,
                'fr': `/fr/it-technician-home-visit`,
                'it': `/it/it-technician-home-visit`,
                'ja': `/ja/it-technician-home-visit`,
                'ko': `/ko/it-technician-home-visit`,
                'ar': `/ar/it-technician-home-visit`,
                'ru': `/ru/it-technician-home-visit`,
                'zh-cn': `/zh-cn/it-technician-home-visit`,
                'vi': `/vi/it-technician-home-visit`,
                'tr': `/tr/it-technician-home-visit`,
                'id': `/id/it-technician-home-visit`,
                'pl': `/pl/it-technician-home-visit`,
                'x-default': `/en/it-technician-home-visit`
            }
        }
    });
}

export default function ItTechnicianHomeVisitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "In-Home IT Technician",
            "description": "Remote residential technical support for computers and notebooks.",
            "provider": {
              "@type": "Organization",
              "name": "VOLTRIS",
              "url": "https://www.voltrisoptimizer.com"
            }
          })
        }}
      />
      <ItTechnicianClient
        title="In-Home IT Technician"
        description="The comfort of your home combined with cutting-edge technology. We solve slowness, virus, and formatting problems without you needing to transport your machine."
        badge="Your Private Technician at Home"
      />
    </>
  );
}
