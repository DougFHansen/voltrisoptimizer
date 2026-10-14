import type { Dict } from './apply';

// Carregamento LAZY por idioma via import() dinâmico.
//
// Contexto do OOM na Vercel: antes, 3 páginas de guia estavam marcadas
// 'use client' e importavam GuideTemplate -> que puxa este módulo. Isso fazia o
// webpack EMBUTIR OS 14 DICIONÁRIOS INTEIROS (~92MB) NOS CHUNKS DE NAVEGADOR,
// estourando a RAM na fase de COMPILAÇÃO do `next build` (SIGKILL/OOM). As
// páginas 'use client' foram corrigidas para servidor, tirando o dict do alvo
// client. Aqui, import() por idioma ainda mantém o pico menor que o import
// estático (cada idioma vira um chunk assíncrono próprio, materializado sob
// demanda) e — crucialmente — os chunks emitidos são RASTREADOS AUTOMATICAMENTE
// pelo Next/Vercel para dentro das funções, garantindo que o dict exista em
// runtime SEM depender de outputFileTracingIncludes (frágil p/ rotas dinâmicas).
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

// Cache por processo: cada idioma é carregado/montado no máximo uma vez.
const cache: Record<string, Dict | null> = {};

/**
 * Resolve the translation dictionary for a locale. Keyed by the exact English
 * source string, so it is shared across all slugs; missing entries fall back to
 * English (see applyGuideDict). `slug` is kept for future per-slug overrides.
 */
export async function loadGuideDict(locale: string, _slug?: string): Promise<Dict | null> {
  const l = (locale || 'en').toLowerCase();
  const loader = LOADERS[l];
  if (!loader) return null; // English (source) or unsupported locale
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
