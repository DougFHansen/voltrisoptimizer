import { metadata as guideMetadata } from './metadata';
import Script from 'next/script';

export const metadata = guideMetadata;

export default function BackupDadosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Backup Your Data",
    "description": "Complete step-by-step guide to effectively backing up your important files using different methods.",
    "image": "https://www.voltrisoptimizer.com/logo.png",
    "totalTime": "PT1H",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Identify Data for Backup",
        "text": "Determine which files and folders are important and should be included in the backup."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Backup to External HD",
        "text": "Make a manual or automatic backup of important data to an external HD or flash drive."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Cloud Backup",
        "text": "Configure automatic backup to cloud services like Google Drive, OneDrive, or Dropbox."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Full System Backup",
        "text": "Create a complete system image using Windows tools or third-party software."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Implement 3-2-1 Strategy",
        "text": "Apply the 3-2-1 rule: 3 copies, 2 different types of media, 1 copy off-site."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Verify and Test Backups",
        "text": "Periodically test the integrity and restoration capability of backups."
      }
    ]
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Backup Your Data",
    "description": "Complete guide on effective methods to perform a full backup of your important files.",
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
    "datePublished": "2026-04-08T23:36:35Z",
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.voltrisoptimizer.com/guias/backup-dados"
    }
  };

  return (
    <>
      <Script
        id="backup-dados-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="backup-dados-article-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      {children}
    </>
  );
}

