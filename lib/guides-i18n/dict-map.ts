import type { Dict } from './apply';

// Static dictionary imports per target language. Generated data lives in
// ./data/{lang}.json (produced by scripts/translate-guides.mjs). Keeping these
// as static JSON imports (instead of fs) preserves static generation (SSG) and
// avoids leaking Node fs into any client boundary.
import dictEs from './data/es.json';
import dictPtbr from './data/pt-br.json';
import dictDe from './data/de.json';
import dictFr from './data/fr.json';
import dictIt from './data/it.json';
import dictJa from './data/ja.json';
import dictKo from './data/ko.json';
import dictAr from './data/ar.json';
import dictRu from './data/ru.json';
import dictZhcn from './data/zh-cn.json';
import dictVi from './data/vi.json';
import dictTr from './data/tr.json';
import dictId from './data/id.json';
import dictPl from './data/pl.json';

const DICTS: Record<string, Dict> = {
  es: dictEs as Dict,
  'pt-br': dictPtbr as Dict,
  de: dictDe as Dict,
  fr: dictFr as Dict,
  it: dictIt as Dict,
  ja: dictJa as Dict,
  ko: dictKo as Dict,
  ar: dictAr as Dict,
  ru: dictRu as Dict,
  'zh-cn': dictZhcn as Dict,
  vi: dictVi as Dict,
  tr: dictTr as Dict,
  id: dictId as Dict,
  pl: dictPl as Dict,
};

/**
 * Resolve the translation dictionary for a locale. The dictionary is keyed by
 * the exact English source string, so it is shared across all slugs; a string
 * with no entry simply falls back to English (see applyGuideDict).
 * `slug` is kept in the signature for future per-slug overrides.
 */
export async function loadGuideDict(locale: string, _slug: string): Promise<Dict | null> {
  const l = (locale || 'en').toLowerCase();
  return DICTS[l] ?? null;
}
