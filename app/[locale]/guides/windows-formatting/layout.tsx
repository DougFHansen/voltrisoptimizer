import { metadata as guideMetadata } from './metadata';
import Script from 'next/script';

export const metadata = guideMetadata;

export default function FormatacaoWindowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Complete Windows Formatting Guide",
    "description": "Learn how to format your Windows computer safely and completely with this professional step-by-step guide.",
    "image": "https://www.voltrisoptimizer.com/logo.png",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "totalTime": "PT4H",
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Windows installation media"
      },
      {
        "@type": "HowToTool",
        "name": "External HD or USB flash drive for backup"
      },
      {
        "@type": "HowToTool",
        "name": "Windows product key"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Full Data Backup",
        "text": "Perform a full backup of all important files before starting the formatting process.",
        "image": "https://www.voltrisoptimizer.com/logo.png"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Preparation for Formatting",
        "text": "Create Windows installation media and download manufacturer drivers.",
        "image": "https://www.voltrisoptimizer.com/logo.png"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Formatting Process",
        "text": "Configure boot through the installation media and perform a clean Windows installation.",
        "image": "https://www.voltrisoptimizer.com/logo.png"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Initial Setup and Post-Installation",
        "text": "Install drivers, Windows updates, and restore data from backup.",
        "image": "https://www.voltrisoptimizer.com/logo.png"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Initial Optimizations",
        "text": "Configure performance, disable unnecessary startup programs, and optimize power plans.",
        "image": "https://www.voltrisoptimizer.com/logo.png"
      }
    ]
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Windows Formatting Guide",
    "description": "Learn how to format your Windows computer safely and completely. Professional step-by-step guide.",
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
      "@id": "https://www.voltrisoptimizer.com/guides/formatacao-windows"
    }
  };

  return (
    <>
      <Script
        id="formatacao-windows-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="formatacao-windows-article-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      {children}
    </>
  );
}
