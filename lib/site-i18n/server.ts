import { loadSiteDict } from './dict-map';
import { makeT, type Dict } from './apply';

/**
 * Server-side helper: resolve the locale's dictionary and return a synchronous
 * `t(english)` function plus the raw dict (for applySiteDict on data trees).
 * Call this at the top of an async server component/page:
 *   const { t } = await getSiteT(locale);
 * then route every user-facing string through t('...').
 */
export async function getSiteT(locale: string): Promise<{ t: (s: string) => string; dict: Dict | null }> {
  const dict = await loadSiteDict(locale);
  return { t: makeT(dict), dict };
}

type MetaLike = Record<string, any>;

/**
 * Localize the safe, user-facing fields of a Next.js Metadata object WITHOUT a
 * deep walk (which would corrupt URL objects / alternates). Only `title`,
 * `description` and `keywords` at the top level, plus `title`/`description`
 * inside `openGraph`/`twitter`, are routed through the locale dictionary.
 * Every other field (canonical, languages, metadataBase, robots, images, urls)
 * is returned untouched. Untranslated strings fall back to English.
 */
export async function localizeMetadata<T extends MetaLike>(locale: string, meta: T): Promise<T> {
  const { t } = await getSiteT(locale);
  if (!meta || typeof meta !== 'object') return meta;
  const out: MetaLike = { ...meta };
  const keys = ['title', 'description'];
  for (const k of keys) if (typeof out[k] === 'string') out[k] = t(out[k]);
  if (Array.isArray(out.keywords)) out.keywords = out.keywords.map((s: any) => (typeof s === 'string' ? t(s) : s));
  else if (typeof out.keywords === 'string') out.keywords = t(out.keywords);
  for (const block of ['openGraph', 'twitter']) {
    if (out[block] && typeof out[block] === 'object') {
      const b = { ...out[block] };
      for (const k of keys) if (typeof b[k] === 'string') b[k] = t(b[k]);
      out[block] = b;
    }
  }
  return out as T;
}
