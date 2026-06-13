import { metadata as guideMetadata } from './metadata';
import Script from 'next/script';

export const metadata = guideMetadata;

export default function SegurancaDigitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Essential Digital Security Guide",
    "description": "Complete step-by-step guide to protect your computer against viruses, malware, and cyberattacks.",
    "image": "https://www.voltrisoptimizer.com/logo.png",
    "totalTime": "PT2H",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Install and Configure Antivirus",
        "text": "Choose, install, and properly configure a professional antivirus for malware protection."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Configure Firewall",
        "text": "Enable and configure the Windows firewall correctly to control network traffic."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Create Secure Passwords",
        "text": "Create strong passwords and use password managers, as well as enabling two-factor authentication."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Secure Browsing",
        "text": "Learn to recognize secure sites, protect yourself against phishing, and keep browsers updated."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Ransomware Protection",
        "text": "Implement specific measures for protection against ransomware and other types of malware."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Security Updates",
        "text": "Keep Windows and all programs updated to fix security vulnerabilities."
      }
    ]
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Essential Digital Security Guide",
    "description": "Complete guide to protect your computer against viruses, malware, and cyberattacks.",
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
      "@id": "https://www.voltrisoptimizer.com/guides/seguranca-digital"
    }
  };

  return (
    <>
      <Script
        id="seguranca-digital-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="seguranca-digital-article-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      {children}
    </>
  );
}

