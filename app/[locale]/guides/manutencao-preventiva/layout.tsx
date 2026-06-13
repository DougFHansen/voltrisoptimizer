import { metadata as guideMetadata } from './metadata';
import Script from 'next/script';

export const metadata = guideMetadata;

export default function ManutencaoPreventivaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Preventive Computer Maintenance",
    "description": "Complete guide on preventive maintenance routines to keep your computer running perfectly.",
    "image": "https://www.voltrisoptimizer.com/logo.png",
    "totalTime": "PT3H",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Weekly Maintenance",
        "text": "Quick antivirus scan, temporary files cleanup, and disk space check."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Monthly Maintenance",
        "text": "Full antivirus scan, system updates, disk error check, and defragmentation."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Quarterly Maintenance",
        "text": "Physical cleaning of the computer, hardware check, full backup, and complete security review."
      }
    ]
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Preventive Computer Maintenance",
    "description": "Complete guide on preventive maintenance routines to keep your computer running perfectly.",
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
      "@id": "https://www.voltrisoptimizer.com/guides/manutencao-preventiva"
    }
  };

  return (
    <>
      <Script
        id="manutencao-preventiva-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="manutencao-preventiva-article-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      {children}
    </>
  );
}


