import type { Viewport } from "next";
import Script from "next/script";
import { Inter } from 'next/font/google';
import "./globals.css";
import { headers } from 'next/headers';
import JsonLd from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#8B31FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = headersList.get('x-locale') || 'en';
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${inter.className} ${inter.variable} font-sans`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://grainy-gradients.vercel.app" crossOrigin="anonymous" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#8B31FF" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XY0CKLVY2B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XY0CKLVY2B', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <JsonLd
          type="Organization"
          data={{
            name: "VOLTRIS - PC Optimization and Expert Technical Support",
            description: "Experts in remote technical support and computer optimization for maximum performance.",
            url: "https://www.voltrisoptimizer.com",
            logo: "https://www.voltrisoptimizer.com/logo.png",
            sameAs: [
              "https://www.instagram.com/voltrisoptimizer.com"
            ]
          }}
        />

        <JsonLd
          type="SoftwareApplication"
          data={{
            name: "Voltris Optimizer",
            operatingSystem: "Windows 10, Windows 11",
            applicationCategory: "UtilitiesApplication",
            offers: {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            aggregateRating: {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1250"
            }
          }}
        />

        {/* Schema.org Person - Author for E-E-A-T */}
        <JsonLd
          type="Person"
          data={{
            name: "Douglas Felipe",
            jobTitle: "CEO & IT Infrastructure Specialist",
            url: "https://www.voltrisoptimizer.com",
            description: "Specialist in system performance optimization and IT infrastructure with 10+ years of experience. Authority in remote global support and digital security.",
            knowsAbout: [
              "Windows Optimization",
              "Cybersecurity for Remote Work",
              "Managed IT Services (MSP)",
              "Digital Privacy",
              "Remote Desktop Support"
            ],
            worksFor: {
              "@type": "Organization",
              name: "VOLTRIS",
              url: "https://www.voltrisoptimizer.com"
            },
            sameAs: [
              "https://www.linkedin.com/in/dougfhansen",
              "https://www.instagram.com/voltrisoptimizer.com"
            ]
          }}
        />

        {/* Schema.org WebSite with Global Context */}
        <JsonLd
          type="WebSite"
          data={{
            name: "VOLTRIS",
            url: "https://www.voltrisoptimizer.com",
            description: "The authority in gaming performance, Windows optimization, and remote technical support.",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://www.voltrisoptimizer.com/?s={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }}
        />

        {/* Global Service Schema for AEO/GEO */}
        <JsonLd 
          type="Service"
          data={{
            name: "Expert Remote Technical Support",
            description: "High performance remote technical support available globally.",
            provider: {
              "@type": "Organization",
              name: "VOLTRIS",
              url: "https://www.voltrisoptimizer.com"
            },
            areaServed: [
              { "@type": "Country", name: "US" },
              { "@type": "Country", name: "BR" },
              { "@type": "Country", name: "PT" },
              { "@type": "Country", name: "DE" },
              { "@type": "Country", name: "FR" },
              { "@type": "Country", name: "IT" },
              { "@type": "Country", name: "JP" },
              { "@type": "Country", name: "KR" },
              { "@type": "Country", name: "ES" },
              { "@type": "Country", name: "GB" },
              { "@type": "Country", name: "CA" },
              { "@type": "Country", name: "AU" }
            ],
            serviceType: "Remote Technical Support",
            termsOfService: "https://www.voltrisoptimizer.com/terms-of-use"
          }}
        />
      </head>
      <body className={`antialiased ${inter.className} ${inter.variable} font-sans`} role="document" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
