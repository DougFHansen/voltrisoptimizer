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
import { getSiteT } from '@/lib/site-i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    // Localize the site-wide fallback metadata (used by every page that does not
    // define its own). Untranslated strings fall back to English safely.
    const { t } = await getSiteT(locale);
    return {
        
  title: t("VOLTRIS - PC Optimization, Gaming Performance and Technical Support"),
  description: t("The authority in gaming performance and Windows optimization. Download Voltris Optimizer, check our FPS guides, and request expert technical support."),
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
  }};
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
