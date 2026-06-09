import React from 'react';
import { Metadata } from 'next';
import CreateWebsiteClient from './CreateWebsiteClient';

export const metadata: Metadata = {
  title: "Professional Website Creation: Surpassing Wix and WordPress | VOLTRIS",
  description: "Create a professional website with performance superior to Wix and WordPress. Ultra-fast Next.js development, native 10/10 SEO, and premium design. The best value for your company.",
  keywords: [
    "create professional website", "high-performance website creation", "premium web development",
    "site better than wix", "site better than wordpress", "how to create a site that sells",
    "website creation company", "responsive and fast site", "10/10 SEO for websites",
    "next.js developer brazil", "modern institutional site", "landing page that converts",
    "voltris website creation", "site optimized for google and bing"
  ],
  openGraph: {
    title: "Professional Website Creation: Superior High Performance | VOLTRIS",
    description: "Your company deserves a site that loads in milliseconds. Forget generic solutions. Go with VOLTRIS.",
    url: "https://www.voltrisoptimizer.com/criar-site",
    type: "website",
    images: [
      {
        url: "/logo-seo-web.png",
        width: 1200,
        height: 630,
        alt: "Professional Website Creation VOLTRIS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Create a Professional Website Superior to WordPress | VOLTRIS",
    images: ["/logo-seo-web.png"]
  },
  alternates: {
    canonical: "https://www.voltrisoptimizer.com/create-website"
  }
};

export default function CreateWebsitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Create Website - Professional Web Development",
            "description": "Professional and responsive website creation services with modern design and optimized SEO",
            "provider": {
              "@type": "Organization",
              "name": "VOLTRIS",
              "url": "https://www.voltrisoptimizer.com"
            },
            "serviceType": "Web Development",
            "areaServed": {
              "@type": "Country",
              "name": "Worldwide"
            },
            "offers": {
              "@type": "Offer",
              "price": "197.90",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
      <CreateWebsiteClient />
    </>
  );
}
