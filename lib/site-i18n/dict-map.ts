import type { Dict } from '../guides-i18n/apply';
import { loadGuideDict } from '../guides-i18n/dict-map';

export type { Dict };

const EN_LOCALES = new Set(['en', 'en-us', 'en_us']);

/**
 * Site-wide dictionary loader. Shares the SAME English-keyed dictionary used by
 * the guide bodies (lib/guides-i18n/data/{lang}.json), so there is a single
 * source of truth for the whole site. The translation loop keeps writing to
 * that location; this is just a locale-aware accessor for non-guide surfaces
 * (page metadata, service listings, UI components).
 *
 * Returns null for English (source of truth) or unknown locales, which makes
 * every consumer fall back to the original English string.
 */
export async function loadSiteDict(locale: string): Promise<Dict | null> {
  const l = (locale || 'en').toLowerCase();
  if (EN_LOCALES.has(l)) return null;
  // slug is unused: the dictionary is global (keyed by exact English string).
  return loadGuideDict(l, '');
}
