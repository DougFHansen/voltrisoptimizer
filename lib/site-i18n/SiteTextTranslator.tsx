'use client';

import { useEffect } from 'react';
import type { Dict } from './apply';

// Webpack compilation hash (unique per build), replaced as a global at bundle time.
declare const __webpack_hash__: string;

/**
 * Client-side text translator for arbitrary client-component prose (Fase 2 of
 * the "translate the whole site" plan).
 *
 * Why this exists: page bodies live in 'use client' components whose JSX text
 * (and inline data arrays) cannot be rewritten safely at every call site, and a
 * server <Children> walker does not reach a client component's internal tree.
 * The SEO-critical surfaces (metadata + the 316 guide bodies + guide listing)
 * are already translated on the server. This component covers the remaining
 * visible text by translating DOM text nodes against the SAME per-locale,
 * English-keyed dictionary the guides use — so behavior is identical to a t()
 * lookup: exact English source -> translation, anything unknown stays English.
 *
 * Care taken to never break layout:
 *  - Only whole text nodes whose whitespace-normalized value EXACTLY equals a
 *    dictionary key are replaced (never partial/inline-mixed fragments, so
 *    "Hello {name}" style nodes and inline <Link>/<strong> siblings are safe).
 *  - Skips <script>/<style>/<code>/<pre>/<textarea> and noscript.
 *  - React-safe for DYNAMIC views: React reuses the same text node when a
 *    ternary like `isLogin ? 'Welcome' : 'Create Account'` flips, updating only
 *    the node's data (characterData) rather than remounting it. We therefore
 *    re-evaluate a node EVERY time its current text changes and treat the new
 *    value as fresh English source — instead of caching the first English we
 *    ever saw on that node (which caused a stale/incorrect translation after a
 *    client-side view switch). To stay idempotent and avoid double-translating
 *    our own output we remember, per node/attribute, the exact translated value
 *    we last wrote, and only skip while the DOM still holds that value.
 *  - MutationObserver covers SPA nav, lazy reveals AND later text/attr changes.
 *  - English locale fetches nothing and is inert (no cost, no flash).
 *
 * The dictionary is fetched once from a CDN-cacheable API route (never inlined
 * into each static page's HTML) and memoized per locale in module scope.
 */
const SKIP_SELECTOR = 'script,style,code,pre,textarea,noscript';
// Any element (or ancestor) carrying `data-notrans` is protected from DOM text
// translation. Used by UI that must always render in its own hand-authored text
// regardless of locale (e.g. the language selector, whose entries are written in
// their native script by design and must never be machine-translated).
const NO_TRANS_ATTR = 'data-notrans';
// Visible text also lives in a handful of attributes (search placeholders, icon
// tooltips, accessible labels, image alts). We translate the same exact-match,
// re-evaluable way as text nodes.
const TRANSLATE_ATTRS = ['placeholder', 'aria-label', 'title', 'alt'] as const;
// Per-node last-written translated value, so re-walks never double-translate and
// never mistake our own output for English source. Cleared implicitly when React
// (or the app) overwrites the node, because the stored value then no longer
// matches the DOM and we re-evaluate.
interface VTNode { __trOut?: string }
interface VTAttr { __trAttrs?: Record<string, string> }
const dictCache: Record<string, Dict | null> = {};
// Per-deploy cache-busting token. `__webpack_hash__` is the compilation hash,
// unique per build and inlined by webpack on both server and client, so a new
// deployment (fresh translations) forces the browser to re-fetch the dictionary
// instead of serving a stale `force-cache` copy from a previous build.
const BUILD: string = typeof __webpack_hash__ !== 'undefined' ? __webpack_hash__ : 'dev';

function normalized(v: string): string {
  return v.replace(/\s+/g, ' ').trim();
}

function shouldSkip(node: Node): boolean {
  let p: HTMLElement | null = node.parentElement;
  while (p) {
    if (p.matches(SKIP_SELECTOR)) return true;
    if (p.hasAttribute(NO_TRANS_ATTR)) return true;
    p = p.parentElement;
  }
  return false;
}

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

export default function SiteTextTranslator({ locale }: { locale: string }) {
  useEffect(() => {
    let cancelled = false;
    let observer: MutationObserver | null = null;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let dict: Record<string, string> | null = null;

    const translateText = (node: Text) => {
      if (shouldSkip(node) || !dict) return;
      const cur = node.nodeValue;
      if (cur == null) return;
      const vt = node as Text & VTNode;
      // Already showing exactly what we last wrote -> untouched by React since;
      // nothing to do (keeps re-walks idempotent, no double translation).
      if (vt.__trOut != null && cur === vt.__trOut) return;
      const key = normalized(cur);
      if (!key) return;
      const tr = dict[key];
      if (tr && tr !== cur) {
        // Replace only the text run, preserving leading/trailing whitespace.
        const lead = (cur.match(/^\s*/) || [''])[0];
        const trail = (cur.match(/\s*$/) || [''])[0];
        const out = lead + tr + trail;
        node.nodeValue = out;
        vt.__trOut = out;
      }
    };

    const translateAttrs = (el: Element) => {
      if (shouldSkip(el) || !dict) return;
      const vt = el as Element & VTAttr;
      const store = (vt.__trAttrs ||= {});
      for (const a of TRANSLATE_ATTRS) {
        const cur = el.getAttribute(a);
        if (cur == null) continue;
        // Skip only while the attribute still holds exactly our last output.
        if (store[a] != null && cur === store[a]) continue;
        const key = normalized(cur);
        if (!key) continue;
        const tr = dict[key];
        if (tr && tr !== cur) {
          el.setAttribute(a, tr);
          store[a] = tr;
        }
      }
    };

    const walk = (root: Node) => {
      if (root.nodeType === 3) { translateText(root as Text); return; }
      if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      if (root.nodeType === 1) translateAttrs(root as Element);
      let tn: Node | null;
      while ((tn = walker.nextNode())) {
        if (tn === root) continue;
        if (tn.nodeType === 1) translateAttrs(tn as Element);
        else translateText(tn as Text);
      }
    };

    fetchDict(locale).then((loaded) => {
      if (cancelled || !loaded || Object.keys(loaded).length === 0) return;
      const m: Record<string, string> = {};
      for (const k of Object.keys(loaded)) {
        const n = normalized(k);
        if (n) m[n] = loaded[k];
      }
      dict = m;

      walk(document.body);

      observer = new MutationObserver((muts) => {
        for (const mu of muts) {
          if (mu.type === 'childList') {
            mu.addedNodes.forEach((nd) => {
              if (nd.nodeType === 1 || nd.nodeType === 3) walk(nd);
            });
          } else if (mu.type === 'characterData') {
            // React (or the app) rewrote an existing text node for a new view:
            // re-evaluate it as fresh English source.
            const t = mu.target as Text;
            (t as Text & VTNode).__trOut = undefined;
            translateText(t);
          } else if (mu.type === 'attributes') {
            const el = mu.target as Element;
            if (el.nodeType === 1 && mu.attributeName) {
              const vt = el as Element & VTAttr;
              if (vt.__trAttrs) delete vt.__trAttrs[mu.attributeName];
              translateAttrs(el);
            }
          }
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: [...TRANSLATE_ATTRS],
      });

      // Catch-all re-walks for content injected after first paint but not via a
      // mutation we can see cleanly (e.g. next/script JSON-LD, delayed reveals,
      // the cookie banner). walk() is idempotent and only ever rewrites nodes
      // whose CURRENT text is an English key, so this is safe to repeat.
      const t1 = setTimeout(() => { if (!cancelled) walk(document.body); }, 900);
      const t2 = setTimeout(() => { if (!cancelled) walk(document.body); }, 2500);
      timers.push(t1, t2);
    });

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [locale]);

  // No DOM of its own.
  return null;
}
