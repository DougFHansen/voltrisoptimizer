import type { Metadata } from "next";
import Script from "next/script";
import ReactQueryProvider from "./ReactQueryProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import IndexNowWrapper from "@/components/IndexNowWrapper";
import CookieBanner from "@/components/CookieBanner";
import { Inter } from 'next/font/google';
import "./globals.css";
import ClientNotificationProvider from './components/ClientNotificationProvider';
import ClientPWAInstall from "./components/ClientPWAInstall";
import { AuthProvider } from '@/app/context/AuthContext';
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "VOLTRIS - PC Optimization, Gaming Performance and Technical Support",
    template: "%s | VOLTRIS"
  },
  description: "The authority in gaming performance and Windows optimization. Download Voltris Optimizer, check our FPS guides, and request expert technical support.",
  metadataBase: new URL('https://www.voltrisoptimizer.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'EYJAjAzE4uxNYRh9b4sg0-BFnBw_ux0ANiXH3y2eU5Q',
    other: {
      'msvalidate.01': 'B3EA85422343FBF303FC4E7243937093',
    },
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.className} ${inter.variable} font-sans`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://grainy-gradients.vercel.app" crossOrigin="anonymous" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B31FF" />
        <meta name="msapplication-TileColor" content="#8B31FF" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

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
        <AuthProvider>
          <ClientNotificationProvider>
            <ReactQueryProvider>
              <CookieBanner />
              {children}
              <ClientPWAInstall />
              <GoogleAnalytics />
              <IndexNowWrapper />
            </ReactQueryProvider>
          </ClientNotificationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}