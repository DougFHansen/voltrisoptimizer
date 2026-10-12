// Applies a per-locale translation dictionary to a guide's props tree.
// The dictionary is keyed by the EXACT English source string:
//   { "<english string>": "<translated string>" }
// Any string not present in the dict is returned unchanged (English fallback),
// so a missing/partial translation can NEVER break or blank a page.

// Object keys whose values are identifiers/links/dates and must not be translated.
const SKIP_KEYS = new Set([
  'href', 'url', 'slug', 'id', 'image', 'src', 'icon', 'key',
  'author', 'lastUpdated', 'showVoltrisOptimizerCTA',
]);

export type Dict = Record<string, string>;

function walk(node: any, dict: Dict): any {
  if (typeof node === 'string') {
    return Object.prototype.hasOwnProperty.call(dict, node) ? dict[node] : node;
  }
  if (Array.isArray(node)) {
    return node.map((item) => walk(item, dict));
  }
  if (node && typeof node === 'object') {
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(node)) {
      out[k] = SKIP_KEYS.has(k) ? v : walk(v, dict);
    }
    return out;
  }
  return node;
}

/**
 * Returns a translated copy of the guide props for the given dictionary.
 * When dict is empty (locale === 'en' or no translation yet) it returns the
 * original object untouched.
 */
export function applyGuideDict<T>(props: T, dict?: Dict | null): T {
  if (!dict || Object.keys(dict).length === 0) return props;
  return walk(props, dict) as T;
}
