import { NextResponse } from 'next/server';
import { Locale, isValidLocale } from '@/lib/i18n';
import fs from 'fs';
import path from 'path';

// Cache de traduções
const translationsCache = new Map<Locale, any>();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const validatedLocale = locale as Locale;

  console.log(`🔥 API DEBUG - Loading translations for locale: ${locale}`);

  if (!isValidLocale(locale)) {
    console.log(`🔥 API DEBUG - Invalid locale: ${locale}`);
    return NextResponse.json({ error: 'Invalid locale' }, { status: 400 });
  }

  // Se já tem cache, retorna
  if (translationsCache.has(locale)) {
    console.log(`🔥 API DEBUG - Cache hit for locale: ${locale}`);
    return NextResponse.json(translationsCache.get(locale));
  }

  try {
    // Carrega traduções do arquivo JSON
    const filePath = path.join(process.cwd(), 'locales', locale, 'common.json');
    console.log(`🔥 API DEBUG - File path: ${filePath}`);
    console.log(`🔥 API DEBUG - File exists: ${fs.existsSync(filePath)}`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`🔥 API DEBUG - File not found, using fallback`);
      // Fallback para português se arquivo não existir
      const fallbackPath = path.join(process.cwd(), 'locales', 'pt-br', 'common.json');
      const fallbackContent = fs.readFileSync(fallbackPath, 'utf8');
      const fallbackTranslations = JSON.parse(fallbackContent);
      
      translationsCache.set(locale, fallbackTranslations);
      return NextResponse.json(fallbackTranslations);
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log(`🔥 API DEBUG - File content length: ${fileContent.length}`);
    const translations = JSON.parse(fileContent);
    console.log(`🔥 API DEBUG - Parsed translations keys:`, Object.keys(translations));
    
    // Cache
    translationsCache.set(locale, translations);
    
    return NextResponse.json(translations);
  } catch (error) {
    console.error(`🔥 API ERROR - Failed to load translations for ${locale}:`, error);
    
    // Retorna traduções vazias se falhar
    return NextResponse.json({
      common: {},
      home: {},
      services: {},
      guides: {},
    });
  }
}
