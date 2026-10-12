import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { fileURLToPath } = require('url');
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Resumable guide translator using Gemini (free tier).
// Reads lib/guides-i18n/strings.en.json (unique English strings) and writes a
// per-language dictionary lib/guides-i18n/data/{lang}.json = { english: translated }.
// HTML/URLs/code are preserved; each batch is validated (tag structure) and
// retried on failure; already-translated strings are skipped (checkpoint).
//
// Usage:
//   node scripts/translate-guides.mjs --lang es            (full)
//   node scripts/translate-guides.mjs --lang es --limit 30 (test)
//   node scripts/translate-guides.mjs --lang all           (every target lang)

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'lib/guides-i18n/data');
const STRINGS = path.join(ROOT, 'lib/guides-i18n/strings.en.json');
const MODEL = process.env.GEMINI_MODEL || 'gemini-flash-lite-latest';
const LANG_NAMES = {
  es: 'Spanish', 'pt-br': 'Brazilian Portuguese', de: 'German', fr: 'French',
  it: 'Italian', ja: 'Japanese', ko: 'Korean', ar: 'Arabic',
};
const ALL_LANGS = Object.keys(LANG_NAMES);

function apiKey() {
  for (const line of fs.readFileSync(path.join(ROOT, '.env.local'), 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*GEMINI_API_KEY\s*=\s*(.+?)\s*$/);
    if (m) return m[1].replace(/^"|"$/g, '');
  }
  throw new Error('GEMINI_API_KEY ausente no .env.local');
}
const KEY = apiKey();

const args = process.argv.slice(2);
const getArg = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const langArg = getArg('--lang') || 'all';
const LIMIT = parseInt(getArg('--limit') || '0', 10) || Infinity;
const BATCH = parseInt(getArg('--batch') || '15', 10);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function tagSignature(s) {
  // Sorted list of HTML tag names + attribute-bearing tokens, to verify integrity.
  const tags = (s.match(/<\/?[a-zA-Z][^>]*>/g) || []).map((t) => t.replace(/\s+/g, ' ').trim().toLowerCase());
  return { count: tags.length, names: tags.map((t) => t.match(/^<\/?([a-zA-Z]+)/)?.[1].toLowerCase()).sort().join(','), codes: (s.match(/<code[\s\S]*?<\/code>/g) || []).length };
}

async function callGemini(text, retries = 4) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text }] }],
          generationConfig: { temperature: 0, responseMimeType: 'application/json', maxOutputTokens: 20000 },
        }),
      });
      if (res.status === 429) { const w = Math.min(60000, 4000 * (attempt + 1) + Math.random() * 3000); console.log(`  429 rate-limit, aguardando ${(w / 1000) | 0}s...`); await sleep(w); continue; }
      if (!res.ok) { const j = await res.json().catch(() => ({})); throw new Error(`HTTP ${res.status}: ${(j.error && j.error.message) || ''}`.slice(0, 160)); }
      const j = await res.json();
      const out = j.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!out) throw new Error('resposta vazia');
      return JSON.parse(out.replace(/^```json\s*|\s*```$/g, '').trim());
    } catch (e) {
      if (attempt === retries) throw e;
      console.log(`  retry ${attempt + 1}: ${e.message}`);
      await sleep(2500 * (attempt + 1));
    }
  }
}

async function translateBatch(sources, langName) {
  const prompt =
`You are a professional software/tech localizer. Translate each of the following ${sources.length} English strings into ${langName}.
STRICT RULES:
- Preserve ALL HTML tags, attributes, CSS class names, URLs, and inline <code> content EXACTLY. Only translate the human-readable text between tags.
- Keep product/brand names unchanged (Windows, NVIDIA, AMD, CS2, OBS, Discord, DirectX, BIOS, etc.).
- Keep numbers, units and keyboard shortcuts as-is.
- Return ONLY a JSON array of exactly ${sources.length} strings, same order, no commentary.
INPUT (JSON array):
${JSON.stringify(sources)}`;
  const out = await callGemini(prompt);
  if (!Array.isArray(out) || out.length !== sources.length) throw new Error(`saida invalida (esperado ${sources.length}, veio ${Array.isArray(out) ? out.length : typeof out})`);
  // integrity check per item
  return out.map((t, i) => {
    const src = sources[i];
    if (typeof t !== 'string' || !t.trim()) return { ok: false, src, tr: src, reason: 'vazio' };
    const a = tagSignature(src), b = tagSignature(t);
    if (a.count !== b.count || a.names !== b.names || a.codes !== b.codes) {
      return { ok: false, src, tr: src, reason: `html (${a.count}/${b.count} tags)` };
    }
    return { ok: true, src, tr: t };
  });
}

async function runLang(lang) {
  const langName = LANG_NAMES[lang];
  if (!langName) throw new Error('idioma desconhecido: ' + lang);
  const sources = JSON.parse(fs.readFileSync(STRINGS, 'utf8'));
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const dictPath = path.join(DATA_DIR, `${lang}.json`);
  const dict = fs.existsSync(dictPath) ? JSON.parse(fs.readFileSync(dictPath, 'utf8')) : {};

  const todo = sources.filter((s) => !(s in dict)).slice(0, LIMIT);
  console.log(`\n===== ${lang} (${langName}) | total=${sources.length} | ja=${sources.length - todo.length} | a_fazer=${todo.length} | batch=${BATCH} | model=${MODEL} =====`);
  if (!todo.length) { console.log('nada a fazer.'); return; }

  let done = 0, failed = 0;
  for (let i = 0; i < todo.length; i += BATCH) {
    const batch = todo.slice(i, i + BATCH);
    let results;
    try { results = await translateBatch(batch, langName); }
    catch (e) { console.log(`  [batch ${i}] FALHOU: ${e.message} (pula; retomavel)`); failed += batch.length; await sleep(3000); continue; }
    for (let k = 0; k < batch.length; k++) {
      const r = results[k];
      if (r.ok) { dict[batch[k]] = r.tr; done++; }
      else { failed++; /* leave untranslated -> English fallback; retried next run */ }
    }
    fs.writeFileSync(dictPath, JSON.stringify(dict));
    const pct = Math.round(((i + batch.length) / todo.length) * 100);
    process.stdout.write(`\r  ${pct}% | ok=${done} falhas=${failed} | ${((i + batch.length) / todo.length * todo.length) | 0}/${todo.length} strings   `);
    await sleep(1200); // throttle for free tier
  }
  console.log(`\n  -> ${lang}: ${Object.keys(dict).length}/${sources.length} traduzidas (${failed} com falha de integridade, serao re-tentadas).`);
}

(async () => {
  const langs = langArg === 'all' ? ALL_LANGS : [langArg];
  for (const l of langs) { await runLang(l); }
  console.log('\nCONCLUIDO.');
})();
