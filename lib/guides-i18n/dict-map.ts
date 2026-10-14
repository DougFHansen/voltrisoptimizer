import type { Dict } from './apply';

// Carregamento sob demanda por idioma (era import estático dos 14 JSONs).
// Cada data/{lang}.json tem ~19k chaves; importar TODOS estaticamente fazia o
// webpack materializar um módulo gigante (~60MB de JSON -> centenas de MB de
// objetos) no grafo do servidor, estourando a RAM no `next build` da Vercel
// (OOM / SIGKILL na fase de compilação). Com import() por idioma, cada arquivo
// vira um chunk assíncrono próprio: o webpack não os mantém unidos na memória e
// só o idioma realmente usado é carregado (e fica em cache). Caminhos literais
// preservam a análise do webpack (chunks são rastreados e publicados).
const LOADERS: Record<string, () => Promise<any>> = {
  es: () => import('./data/es.json'),
  'pt-br': () => import('./data/pt-br.json'),
  de: () => import('./data/de.json'),
  fr: () => import('./data/fr.json'),
  it: () => import('./data/it.json'),
  ja: () => import('./data/ja.json'),
  ko: () => import('./data/ko.json'),
  ar: () => import('./data/ar.json'),
  ru: () => import('./data/ru.json'),
  'zh-cn': () => import('./data/zh-cn.json'),
  vi: () => import('./data/vi.json'),
  tr: () => import('./data/tr.json'),
  id: () => import('./data/id.json'),
  pl: () => import('./data/pl.json'),
};

// Cache por processo: cada idioma é lido/re-montado no máximo uma vez.
const cache: Record<string, Dict | null> = {};

/**
 * Resolve the translation dictionary for a locale. The dictionary is keyed by
 * the exact English source string, so it is shared across all slugs; a string
 * with no entry simply falls back to English (see applyGuideDict).
 * `slug` is kept in the signature for future per-slug overrides.
 */
export async function loadGuideDict(locale: string, _slug?: string): Promise<Dict | null> {
  const l = (locale || 'en').toLowerCase();
  const loader = LOADERS[l];
  if (!loader) return null;
  if (l in cache) return cache[l];
  try {
    const mod = await loader();
    const dict = (mod && mod.default ? mod.default : mod) as Dict;
    cache[l] = dict;
    return dict;
  } catch {
    cache[l] = null;
    return null;
  }
}
