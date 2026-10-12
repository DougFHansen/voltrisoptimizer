// Auto-generated integration point. For now it always returns null, which the
// loader interprets as "no translation available -> keep English".
//
// After the translation pipeline runs, scripts/build-guide-dict-map.mjs will
// REGENERATE this file with a static import map so Next bundles each per-slug,
// per-language dictionary as its own chunk (keeps each guide route light).
//
// Shape of a dictionary: { "<english string>": "<translated string>" }

import type { Dict } from './apply';

export async function loadGuideDict(
  _locale: string,
  _slug: string
): Promise<Dict | null> {
  return null;
}
