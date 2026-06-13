import React from 'react';
import { Metadata } from 'next';
import ItTechnicianClient from '../it-technician/ItTechnicianClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
  title: "IT Technician in My Area - Worldwide Remote Support | VOLTRIS",
  description: "IT technician in your area with remote support. Worldwide service, 100% online. Solve computer problems without leaving home.",
  keywords: [
    "it technician in my area",
    "it technician near me",
    "technical support my city",
    "local tech support",
    "computer technician region",
    "it technician neighborhood",
    "computer repair near me"
  ],
  openGraph: {
    title: "IT Technician in My Area | VOLTRIS",
    description: "Worldwide service with immediate remote support. The closest technician to you is one click away.",
    url: "https://www.voltrisoptimizer.com/it-technician-my-region",
    type: "website",
    images: [{ url: "/remotebanner.jpg", width: 1200, height: 630 }]
  },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/it-technician-my-region`,
            languages: {
                'en': `/en/it-technician-my-region`,
                'es': `/es/it-technician-my-region`,
                'pt-br': `/pt-br/it-technician-my-region`,
                'de': `/de/it-technician-my-region`,
                'fr': `/fr/it-technician-my-region`,
                'it': `/it/it-technician-my-region`,
                'ja': `/ja/it-technician-my-region`,
                'ko': `/ko/it-technician-my-region`,
                'ar': `/ar/it-technician-my-region`
            }
        }
    };
}

export default function ItTechnicianMyRegionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Regional IT Technician",
            "description": "Localized remote technical support for all cities worldwide.",
            "provider": {
              "@type": "Organization",
              "name": "VOLTRIS",
              "url": "https://www.voltrisoptimizer.com"
            }
          })
        }}
      />
      <ItTechnicianClient
        title="IT Technician in Your Area"
        description="No matter where you are in the world, our team serves your region with instant remote support. Local technical support quality with the speed of the internet."
        badge="Immediate Worldwide Service"
      />
    </>
  );
}
