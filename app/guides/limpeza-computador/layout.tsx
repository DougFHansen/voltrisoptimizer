import { metadata as guideMetadata } from './metadata';
import Script from 'next/script';

export const metadata = guideMetadata;

export default function LimpezaComputadorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Complete Computer Cleanup Guide",
    "description": "Complete step-by-step guide to clear temporary files, cache, unneeded programs, and optimize disk space.",
    "image": "https://www.voltrisoptimizer.com/logo.png",
    "totalTime": "PT1H",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Clear Temporary Files",
        "text": "Use Windows Disk Cleanup and manually clear temporary folders to remove unnecessary files."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Clear Browser Cache",
        "text": "Clear cache, cookies, and temporary data from all installed browsers (Chrome, Edge, Firefox)."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Uninstall Unused Programs",
        "text": "Identify and uninstall programs that are no longer used to free up disk space."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Clean System Files and Logs",
        "text": "Clear Windows logs and remove old update files to free up additional space."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Clean Downloads and Large Files",
        "text": "Analyze disk space, clear the downloads folder, and find/remove duplicate files."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Clear Program Cache",
        "text": "Clear cache accumulated by programs such as Spotify, Discord, Steam, Adobe, and others."
      }
    ]
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Computer Cleanup Guide",
    "description": "Complete guide with professional techniques to clear temporary files, cache, and optimize disk space.",
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
      "@id": "https://www.voltrisoptimizer.com/guides/limpeza-computador"
    }
  };

  return (
    <>
      <Script
        id="limpeza-computador-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="limpeza-computador-article-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      {children}
    </>
  );
}


