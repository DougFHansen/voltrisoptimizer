import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Scans app/[locale]/guides/*/page.tsx at BUILD time and extracts the
// `guideMetadata` object exported by every guide. The result is written to
// lib/guides-manifest.json, which is imported (bundled) by lib/guides.ts.
//
// Why: the guides listing page previously read the filesystem at RUNTIME via
// fs.readdirSync('app/[locale]/guides'). On Vercel the source folder is not
// part of the serverless bundle, so the scan returned [] and the page showed
// "No guide found" for every locale. Generating a static JSON manifest at
// prebuild time (same pattern already used for app/sitemap-routes.json) makes
// the listing work reliably at runtime.

const guidesDir = path.join(__dirname, '../app/[locale]/guides');
const outputFile = path.join(__dirname, '../lib/guides-manifest.json');

const validCategories = [
  'inteligencia-artificial', 'otimizacao', 'games-fix', 'windows-erros',
  'hardware', 'perifericos', 'software', 'rede-seguranca', 'windows-geral',
  'emulacao', 'linux'
];

function normalizeCategory(rawCategory) {
  let c = (rawCategory || 'outros').toLowerCase();
  const map = {
    windows: 'windows-geral',
    jogos: 'games-fix',
    games: 'games-fix',
    rede: 'rede-seguranca',
    seguranca: 'rede-seguranca',
    emuladores: 'emulacao',
    'network-security': 'rede-seguranca',
    network: 'rede-seguranca',
    security: 'rede-seguranca',
    optimization: 'otimizacao',
    otimizacao: 'otimizacao',
  };
  if (map[c]) c = map[c];
  if (!validCategories.includes(c)) c = 'windows-geral';
  return c;
}

function extractGuides() {
  const guides = [];
  if (!fs.existsSync(guidesDir)) {
    console.warn(`[guides-manifest] guides dir not found: ${guidesDir}`);
    return guides;
  }

  for (const folder of fs.readdirSync(guidesDir)) {
    const fullPath = path.join(guidesDir, folder);
    if (!fs.statSync(fullPath).isDirectory()) continue;

    const pagePath = path.join(fullPath, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, 'utf8');
    const match = content.match(
      /export const guideMetadata(?:\s*:\s*[\w<>\[\]]+)?\s*=\s*\{([\s\S]*?)\}(?:;|\s*$)/
    );
    if (!match) continue;

    const block = match[1];
    const getValue = (key) => {
      const m = block.match(new RegExp(`${key}:\\s*["'\`]((?:[^"'\\\\\`]|\\\\.)*)["'\`]`));
      return m ? m[1].replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\`/g, '`') : '';
    };

    const title = getValue('title');
    if (!title) continue; // must have a title

    guides.push({
      id: folder, // folder name is the canonical slug used in links
      title,
      description: getValue('description'),
      category: normalizeCategory(getValue('category')),
      difficulty: getValue('difficulty') || 'Iniciante',
      time: getValue('time') || '10 min',
    });
  }

  // Stable ordering for deterministic diffs
  guides.sort((a, b) => a.id.localeCompare(b.id));
  return guides;
}

const guides = extractGuides();
fs.writeFileSync(outputFile, JSON.stringify(guides, null, 2));
console.log(`Successfully generated guides manifest with ${guides.length} guides.`);
