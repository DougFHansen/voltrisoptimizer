import type { Metadata } from "next";
import ReactQueryProvider from "../ReactQueryProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import IndexNowWrapper from "@/components/IndexNowWrapper";
import CookieBanner from "@/components/CookieBanner";
import ClientNotificationProvider from '../components/ClientNotificationProvider';
import ClientPWAInstall from "../components/ClientPWAInstall";
import { AuthProvider } from '@/app/context/AuthContext';

import I18nClientProvider from '@/components/I18nClientProvider';
import { Locale, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
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
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}`,
            languages: {
                'en': `/en`,
                'es': `/es`,
                'pt-br': `/pt-br`,
                'de': `/de`,
                'fr': `/fr`,
                'it': `/it`,
                'ja': `/ja`,
                'ko': `/ko`,
                'ar': `/ar`
            }
        }
    };
}

// Supported Locales
const supportedLocales: Locale[] = ['en', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'ar', 'pt-br'];

// Generates static parameters for each locale
export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!isValidLocale(locale)) {
    notFound();
  }

  const validLocale = locale as Locale;

  return (
    <AuthProvider>
      <ClientNotificationProvider>
        <ReactQueryProvider>
          <CookieBanner />
          <I18nClientProvider initialLocale={validLocale}>
            {children}
          </I18nClientProvider>
          <ClientPWAInstall />
          <GoogleAnalytics />
          <IndexNowWrapper />
        </ReactQueryProvider>
      </ClientNotificationProvider>
    </AuthProvider>
  );
}
