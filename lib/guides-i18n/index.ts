import { applyGuideDict, type Dict } from './apply';
import { loadGuideDict } from './dict-map';

const EN_LOCALES = new Set(['en', 'en-us', 'en_us']);

/**
 * Returns the translation dictionary for a given locale + guide slug, or null
 * when none exists (=> English fallback). English is the source of truth.
 */
export async function getGuideDict(locale: string, slug: string): Promise<Dict | null> {
  const l = (locale || 'en').toLowerCase();
  if (EN_LOCALES.has(l)) return null;
  if (!slug) return null;
  try {
    return await loadGuideDict(l, slug);
  } catch {
    return null;
  }
}

/**
 * Translate a guide props object for the given locale + slug.
 * Safe by construction: missing dictionary or missing entries fall back to the
 * original English strings, so a page can never render blank/broken.
 */
export async function localizeGuideProps<T extends { title?: string; description?: string }>(
  props: T,
  locale: string,
  slug: string
): Promise<T> {
  const dict = await getGuideDict(locale, slug);
  return applyGuideDict(props, dict);
}
