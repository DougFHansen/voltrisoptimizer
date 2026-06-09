
import { Metadata } from 'next';
import FormatacaoClient from './FormatacaoClient';

export const metadata: Metadata = {
  title: "Remote PC and Laptop Formatting | Clean Windows Install - VOLTRIS",
  description: "Remote PC formatting service with secure backup. Clean installation of Windows 10/11, drivers and essential programs. Specialized technical support.",
  keywords: [
    "remote pc formatting",
    "laptop formatting",
    "install windows 11 remotely",
    "virus removal",
    "pc freezing formatting",
    "backup and formatting",
    "it technician formatting"
  ],
  openGraph: {
    title: "Remote Computer Formatting | Professional Windows Installation",
    description: "Make your PC feel new again. Online formatting service with total data security and warranty.",
    url: "https://www.voltrisoptimizer.com/formatacao",
    type: "website",
    images: [{ url: "/format-banner.jpg", width: 1200, height: 630 }]
  }
};

export default function FormatacaoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Remote Computer Formatting",
            "provider": {
              "@type": "Organization",
              "name": "VOLTRIS",
              "url": "https://www.voltrisoptimizer.com"
            },
            "serviceType": "Computer Repair",
            "areaServed": {
              "@type": "Country",
              "name": "Worldwide"
            },
            "offers": {
              "@type": "Offer",
              "price": "19.90",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      <FormatacaoClient />
    </>
  );
}
