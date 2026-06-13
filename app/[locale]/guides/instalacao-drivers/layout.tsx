import { metadata as guideMetadata } from './metadata';
import Script from 'next/script';

export const metadata = guideMetadata;

export default function InstalacaoDriversLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Driver Installation and Update",
    "description": "Complete step-by-step guide to install, update, and manage computer drivers.",
    "image": "https://www.voltrisoptimizer.com/logo.png",
    "totalTime": "PT45M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Identify Required Drivers",
        "text": "Use Device Manager to identify which drivers need to be installed or updated."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Automatic Installation via Windows",
        "text": "Use Windows Update to automatically install drivers."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Download from Manufacturer",
        "text": "Download drivers directly from official hardware manufacturer websites."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Install in the Correct Order",
        "text": "Install drivers in the recommended order: chipset, network, video, audio, and others."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Troubleshooting",
        "text": "Resolve common problems related to driver installation and functionality."
      }
    ]
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Driver Installation and Update",
    "description": "Complete guide on how to install, update, and manage computer drivers.",
    "image": "https://www.voltrisoptimizer.com/logo.png",
    "author": {
      "@type": "Organization",
      "name": "VOLTRIS",
      "url": "https://www.voltrisoptimizer.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VOLTRIS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.voltrisoptimizer.com/logo.png"
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.voltrisoptimizer.com/guides/instalacao-drivers"
    }
  };

  return (
    <>
      <Script
        id="instalacao-drivers-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="instalacao-drivers-article-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      {children}
    </>
  );
}

