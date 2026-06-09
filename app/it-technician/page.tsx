import React from 'react';
import { Metadata } from 'next';
import ItTechnicianClient from './ItTechnicianClient';

export const metadata: Metadata = {
  title: "IT Technician - Specialized Remote Support | VOLTRIS",
  description: "Specialized remote technical support for IT. Solve computer problems, formatting, optimization, and Windows system maintenance safely and efficiently.",
  keywords: [
    "it technician",
    "computer technical support",
    "remote computer repair",
    "notebook maintenance",
    "windows technician",
    "remote it support",
    "it technical assistance",
    "remote pc formatting",
    "remote virus removal",
    "windows optimization"
  ],
  openGraph: {
    title: "IT Technician - Specialized Remote Support | VOLTRIS",
    description: "Specialized remote technical support for IT. 24/7 service worldwide.",
    url: "https://www.voltrisoptimizer.com/it-technician",
    type: "website",
    images: [{ url: "/remotebanner.jpg", width: 1200, height: 630 }]
  }
};

export default function ItTechnicianPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Specialized IT Technician",
            "description": "Remote IT technical support services for Windows.",
            "provider": {
              "@type": "Organization",
              "name": "VOLTRIS",
              "url": "https://www.voltrisoptimizer.com"
            },
            "areaServed": { "@type": "Place", "name": "Worldwide" }
          })
        }}
      />
      <ItTechnicianClient />
    </>
  );
}
