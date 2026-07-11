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
      </head>
      <body className={`antialiased ${inter.className} ${inter.variable} font-sans`} role="document" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
