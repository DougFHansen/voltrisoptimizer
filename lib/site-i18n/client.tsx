'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Dict } from './apply';

// Webpack compilation hash (unique per build), replaced as a global at bundle time.
declare const __webpack_hash__: string;

/**
 * Client-side access to the per-locale site dictionary (English-keyed).
 *
 * IMPORTANT (performance): the dictionary is a single global file that grows to
 * megabytes as the translation loop fills it. We deliberately DO NOT pass it as
 * a prop from the server layout — that would inline the whole dictionary into
 * every static page's HTML/RSC payload. Instead the provider fetches it once,
 * lazily, from the CDN-cacheable /api/site-dict/[locale] route and memoizes it
 * per locale in module scope (shared across all provider instances).
 *
 * Any string missing from the dictionary falls back to the original English,
 * never blank. Static page bodies are additionally translated by the
 * SiteTextTranslator DOM walker; this provider covers inline t() call sites
 * (e.g. CookieBanner) whose text is mixed with other nodes.
 */
type SiteT = (english: string) => string;

const SiteTContext = createContext<SiteT>((s: string) => s);

export function useSiteT(): SiteT {
  return useContext(SiteTContext);
}

// Identity translator for English (source of truth) or when no dict is present.
function makeTFromDict(dict?: Dict | null): SiteT {
  if (!dict || Object.keys(dict).length === 0) return (s: string) => s;
  return (s: string) => (Object.prototype.hasOwnProperty.call(dict, s) ? dict[s] : s);
}

// Module-scope cache so the dictionary is fetched at most once per locale.
const dictCache: Record<string, Dict | null> = {};
// Per-deploy cache-busting token (webpack compilation hash, unique per build)
// so a new deployment with fresh translations is not shadowed by a stale
// `force-cache` copy from a previous build.
const BUILD: string = typeof __webpack_hash__ !== 'undefined' ? __webpack_hash__ : 'dev';

async function fetchDict(locale: string): Promise<Dict | null> {
  const l = (locale || 'en').toLowerCase();
  if (l === 'en' || l === 'en-us') return null; // source of truth, nothing to do
  if (l in dictCache) return dictCache[l];
  try {
    const res = await fetch(`/api/site-dict/${l}?v=${BUILD}`, { cache: 'force-cache' });
    if (!res.ok) return (dictCache[l] = null);
    const json = (await res.json()) as Dict;
    dictCache[l] = json;
    return json;
  } catch {
    return (dictCache[l] = null);
  }
}

export function SiteTProvider({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const [dict, setDict] = useState<Dict | null>(() => dictCache[(locale || 'en').toLowerCase()] ?? null);

  useEffect(() => {
    let cancelled = false;
    const l = (locale || 'en').toLowerCase();
    if (l === 'en' || l === 'en-us') {
      setDict(null);
      return;
    }
    if (l in dictCache) {
      setDict(dictCache[l]);
      return;
    }
    fetchDict(locale).then((d) => {
      if (!cancelled) setDict(d);
    });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  const t = useMemo(() => makeTFromDict(dict), [dict]);
  return <SiteTContext.Provider value={t}>{children}</SiteTContext.Provider>;
}

/** Small helper component to translate a piece of visible text inline in JSX. */
export function T({ children }: { children: string }) {
  const t = useSiteT();
  return <>{t(children)}</>;
}
