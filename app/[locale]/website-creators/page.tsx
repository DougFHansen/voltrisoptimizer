import React from 'react';
import { Metadata } from 'next';
import WebsiteCreatorsClient from './WebsiteCreatorsClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
  title: "Website Creators - Specialized Web Development Team | VOLTRIS",
  description: "Professional and specialized website creators. Experienced team in web development, responsive design, and SEO. Sites that convert visitors into customers with guaranteed quality.",
  keywords: [
    "website creators",
    "web developers",
    "website creation team",
    "web professionals",
    "website development",
    "web programmers",
    "web designers",
    "web agency",
    "web studio",
    "professional website creators",
    "frontend developer",
    "UI/UX designer",
    "React programmer",
    "Next.js developer",
    "WordPress website creator",
    "development team",
    "technology professionals",
    "web specialists",
    "responsive website creators",
    "SEO website developers"
  ],
  openGraph: {
    title: "Website Creators - Specialized Web Development Team | VOLTRIS",
    description: "Professional and specialized website creators. Experienced team in web development, responsive design, and SEO.",
    url: "https://www.voltrisoptimizer.com/website-creators",
    type: "website",
    images: [
      {
        url: "/remotebanner.jpg",
        width: 1200,
        height: 630,
        alt: "Website Creators - Specialized VOLTRIS Team"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Creators - Specialized Web Development Team | VOLTRIS",
    description: "Professional and specialized website creators. Experienced team in web development.",
    images: ["/remotebanner.jpg"]
  },
  alternates: {
    
  },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/website-creators`,
            languages: {
                'en': `/en/website-creators`,
                'es': `/es/website-creators`,
                'pt-br': `/pt-br/website-creators`,
                'de': `/de/website-creators`,
                'fr': `/fr/website-creators`,
                'it': `/it/website-creators`,
                'ja': `/ja/website-creators`,
                'ko': `/ko/website-creators`,
                'ar': `/ar/website-creators`
            }
        }
    };
}

export default function WebsiteCreatorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VOLTRIS - Website Creators",
            "description": "Specialized team in professional website creation and web development",
            "url": "https://www.voltrisoptimizer.com",
            "logo": "https://www.voltrisoptimizer.com/logo.png",
            "employee": [
              {
                "@type": "Person",
                "jobTitle": "Frontend Developer",
                "name": "VOLTRIS Team"
              },
              {
                "@type": "Person",
                "jobTitle": "Designer UI/UX",
                "name": "VOLTRIS Team"
              },
              {
                "@type": "Person",
                "jobTitle": "SEO Specialist",
                "name": "VOLTRIS Team"
              }
            ],
            "serviceArea": {
              "@type": "Country",
              "name": "Worldwide"
            }
          })
        }}
      />
      <WebsiteCreatorsClient />
    </>
  );
}