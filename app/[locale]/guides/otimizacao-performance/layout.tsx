import { metadata as guideMetadata } from './metadata';
import Script from 'next/script';

export const metadata = guideMetadata;

export default function OtimizacaoPerformanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Optimize Your PC's Performance",
    "description": "Complete step-by-step guide to optimize and speed up your Windows computer using professional techniques.",
    "image": "https://www.voltrisoptimizer.com/logo.png",
    "totalTime": "PT1H",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Deep Cleaning of Temporary Files",
        "text": "Remove temporary files and cache using Windows tools and manual cleaning."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Startup Programs Optimization",
        "text": "Manage and disable unnecessary programs that start automatically with Windows."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "RAM Memory Optimization",
        "text": "Free up RAM memory by closing unused programs and optimizing system services."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Hard Drive Optimization",
        "text": "Defragment disk (HDD) and check for errors to improve performance."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Windows Registry Optimization",
        "text": "Clean invalid and orphaned Windows registry entries (with caution and backup)."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Network Optimization",
        "text": "Adjust TCP/IP settings and clear DNS cache to improve connectivity."
      }
    ]
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Optimize Your PC's Performance",
    "description": "Complete guide with professional techniques to speed up and optimize your Windows computer.",
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
      "@id": "https://www.voltrisoptimizer.com/guides/otimizacao-performance"
    }
  };

  return (
    <>
      <Script
        id="otimizacao-performance-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="otimizacao-performance-article-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      {children}
    </>
  );
}

