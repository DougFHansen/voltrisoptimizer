import { metadata as guideMetadata } from './metadata';
import Script from 'next/script';

export const metadata = guideMetadata;

export default function ResolverErrosWindowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Fix Common Windows Errors",
    "description": "Complete step-by-step guide to diagnose and fix the most frequent Windows errors.",
    "image": "https://www.voltrisoptimizer.com/logo.png",
    "totalTime": "PT2H",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Understand the Error",
        "text": "Identify the specific type of error, note down error codes and exact messages for research."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Fix Blue Screen (BSOD)",
        "text": "Note error code, check hardware, update drivers, and diagnose memory issues."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Fix Startup Issues",
        "text": "Use Automatic Repair, System Restore, or repair commands via Command Prompt."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Fix Freezes",
        "text": "Check temperatures, test RAM, check hard disk, and diagnose drivers."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Use Diagnostic Tools",
        "text": "Utilize SFC, DISM, Event Viewer, and other Windows tools for advanced diagnosis."
      }
    ]
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Fix Common Windows Errors",
    "description": "Complete guide to diagnose and fix the most frequent Windows errors.",
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
      "@id": "https://www.voltrisoptimizer.com/guides/resolver-erros-windows"
    }
  };

  return (
    <>
      <Script
        id="resolver-erros-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="resolver-erros-article-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      {children}
    </>
  );
}

