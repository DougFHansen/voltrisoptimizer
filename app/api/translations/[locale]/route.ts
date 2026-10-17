import { NextResponse } from 'next/server';
import { Locale, isValidLocale } from '@/lib/i18n';
import fs from 'fs';
import path from 'path';

// Cache de traduções (armazena o resultado já mesclado com o inglês-fonte).
const translationsCache = new Map<Locale, any>();

/**
 * Deep-merge entre dois objetos de tradução. `override` vence `base`, recursivo
 * apenas para objetos puros — strings e arrays são substituídos por inteiro.
 * Assim cada idioma mantém o que traduziu e herda do inglês apenas o que falta.
 */
function deepMerge(base: any, override: any): any {
  if (override === undefined || override === null) return base;
  if (
    typeof base !== 'object' || base === null ||
    typeof override !== 'object' || override === null ||
    Array.isArray(base) || Array.isArray(override)
  ) {
    return override;
  }
  const out: Record<string, any> = { ...base };
  for (const key of Object.keys(override)) {
    out[key] = key in base ? deepMerge(base[key], override[key]) : override[key];
  }
  return out;
}

// Lê locales/<lng>/common.json; retorna null se não existir ou estiver corrompido.
function readCommon(locale: string): any | null {
  const filePath = path.join(process.cwd(), 'locales', locale, 'common.json');
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error(`🔥 API ERROR - Failed to parse common.json for ${locale}:`, err);
    return null;
  }
}

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

  if (translationsCache.has(validatedLocale)) {
    console.log(`🔥 API DEBUG - Cache hit for locale: ${locale}`);
    return NextResponse.json(translationsCache.get(validatedLocale));
  }

  try {
    // Inglês é a fonte de verdade e a camada de fallback (item 5 do plano):
    // qualquer chave ausente no idioma atual resolve para o inglês — nunca a
    // key crua na tela, e nunca português do Brasil para visitantes que não
    // falam português. O arquivo do próprio idioma entra por cima e mantém
    // tudo o que já foi traduzido nativamente.
    const enBase = readCommon('en') ?? {};
    const overlay = validatedLocale === 'en' ? null : readCommon(validatedLocale);
    const merged = overlay ? deepMerge(enBase, overlay) : enBase;

    translationsCache.set(validatedLocale, merged);
    console.log(`🔥 API DEBUG - Merged translations keys for ${locale}:`, Object.keys(merged));

    return NextResponse.json(merged);
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
