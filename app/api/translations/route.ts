import { NextRequest, NextResponse } from 'next/server';
import { getTranslations, isValidLocale, defaultLocale } from '@/lib/i18n';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') || defaultLocale;

  if (!isValidLocale(locale)) {
    return NextResponse.json(
      { error: 'Invalid locale' },
      { status: 400 }
    );
  }

  try {
    // Carrega todas as traduções do locale
    const translations = await getTranslations(locale as any);
    
    return NextResponse.json(translations);
  } catch (error) {
    console.error('Error loading translations:', error);
    
    // Fallback para locale padrão
    if (locale !== defaultLocale) {
      try {
        const fallbackTranslations = await getTranslations(defaultLocale);
        return NextResponse.json(fallbackTranslations);
      } catch (fallbackError) {
        console.error('Error loading fallback translations:', fallbackError);
      }
    }

    return NextResponse.json(
      { error: 'Failed to load translations' },
      { status: 500 }
    );
  }
}
