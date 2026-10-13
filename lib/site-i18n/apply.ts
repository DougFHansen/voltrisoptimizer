import { applyGuideDict, type Dict } from '../guides-i18n/apply';

export { applyGuideDict as applySiteDict };
export type { Dict };

/**
 * Build a synchronous translate function bound to a dictionary. Used inside
 * server components (after awaiting the dict from locale) and provided to
 * client components via context. Safe by construction: with no dictionary, or
 * for any string not present, it returns the original English text unchanged.
 */
export function makeT(dict?: Dict | null): (s: string) => string {
  if (!dict || Object.keys(dict).length === 0) return (s: string) => s;
  return (s: string) => (Object.prototype.hasOwnProperty.call(dict, s) ? dict[s] : s);
}
