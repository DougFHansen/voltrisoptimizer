import I18nClientProvider from '@/components/I18nClientProvider';
import { Locale, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

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
    <I18nClientProvider initialLocale={validLocale}>
      {children}
    </I18nClientProvider>
  );
}
