import fs from 'fs';
import path from 'path';

/**
 * Server-side locale message loader for the client `I18nProvider`.
 *
 * The provider used to start with an EMPTY translation object and fetch
 * `/api/translations/{locale}` asynchronously. Because the language switcher
 * performs a HARD navigation, every fresh page load (and every language change)
 * mounted the provider with `{}` first, so `t()` fell back to returning the raw
 * key ("hero_title_1", "billing_monthly", ...) for a few frames until the fetch
 * resolved — the visible "key flash" the user reported across the whole site.
 *
 * Fix: compute the merged messages on the server (these files are tiny, ~4-12 KB)
 * and pass them to the provider as the initial state, so the very first render —
 * including the server-rendered HTML, before hydration — already shows the real
 * translations. English is the source of truth and the fallback layer (any key
 * missing in the active locale resolves to English, never to the raw key).
 *
 * This mirrors the exact merge logic of app/api/translations/[locale]/route.ts so
 * SSR and the runtime fetch (kept only as a safety refresh) stay identical.
 */

// Cache per process so a build/render of thousands of pages reads each file once.
const cache = new Map<string, Record<string, any>>();

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

function readCommon(locale: string): any | null {
  const filePath = path.join(process.cwd(), 'locales', locale, 'common.json');
  try {
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

export function loadLocaleMessages(locale: string): Record<string, any> {
  const l = (locale || 'en').toLowerCase();
  if (cache.has(l)) return cache.get(l)!;
  const enBase = readCommon('en') ?? {};
  const overlay = l === 'en' ? null : readCommon(l);
  const merged = overlay ? deepMerge(enBase, overlay) : enBase;
  cache.set(l, merged);
  return merged;
}
