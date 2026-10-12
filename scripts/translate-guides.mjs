import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { fileURLToPath } = require('url');
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Resumable guide translator using Gemini (free tier).
// Reads lib/guides-i18n/strings.en.json (unique English strings) and writes a
// per-language dictionary lib/guides-i18n/data/{lang}.json = { english: translated }.
// Robust: tolerant JSON extraction, recursive batch splitting on any failure,
// HTML/URL/code integrity validation, per-string English fallback, checkpointing.
//
// Usage:
//   node scripts/translate-guides.mjs --lang es            (full)
//   node scripts/translate-guides.mjs --lang es --limit 30 (test)
//   node scripts/translate-guides.mjs --lang all           (every target lang)

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'lib/guides-i18n/data');
const STRINGS = path.join(ROOT, 'lib/guides-i18n/strings.en.json');
const MODEL = process.env.GEMINI_MODEL || 'gemini-3.1-flash-lite';
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
let BATCH = parseInt(getArg('--batch') || '20', 10);
const CONC = parseInt(getArg('--concurrency') || '3', 10);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Atomic JSON write (temp + rename) so git/build never sees a half-written file.
function saveJson(p, obj) {
  const tmp = p + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(obj));
  fs.renameSync(tmp, p);
}

function tagSignature(s) {
  const tags = (s.match(/<\/?[a-zA-Z][^>]*>/g) || []).map((t) => t.replace(/\s+/g, ' ').trim().toLowerCase());
  return { count: tags.length, names: tags.map((t) => t.match(/^<\/?([a-zA-Z]+)/)?.[1].toLowerCase()).sort().join(','), codes: (s.match(/<code[\s\S]*?<\/code>/g) || []).length };
}

// Extract the first JSON array from a possibly noisy response (code fences, prose).
function parseArray(text) {
  const cleaned = String(text).replace(/```json/gi, '').replace(/```/g, '').trim();
  const start = cleaned.indexOf('[');
  const end = cleaned.lastIndexOf(']');
  if (start < 0 || end <= start) throw new Error('sem array JSON');
  return JSON.parse(cleaned.slice(start, end + 1));
}

async function callGeminiRaw(prompt, retries = 5) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0, responseMimeType: 'application/json', maxOutputTokens: 24000 },
        }),
      });
      if (res.status === 429) { const w = Math.min(90000, 5000 * (attempt + 1) + Math.random() * 4000); console.log(`\n  429 rate-limit, aguardando ${(w / 1000) | 0}s...`); await sleep(w); continue; }
      if (res.status >= 500) { console.log(`\n  HTTP ${res.status} (servidor), retry ${attempt + 1}...`); await sleep(3000 * (attempt + 1)); continue; }
      if (!res.ok) { const j = await res.json().catch(() => ({})); throw new Error(`HTTP ${res.status}: ${(j.error && j.error.message) || ''}`.slice(0, 160)); }
      const j = await res.json();
      const out = j.candidates?.[0]?.content?.parts?.map((p) => p.text).join('');
      if (!out) throw new Error('resposta vazia');
      return out;
    } catch (e) {
      if (attempt === retries) throw e;
      await sleep(2500 * (attempt + 1));
    }
  }
  throw new Error('retries esgotados');
}

function makePrompt(sources, langName) {
  return `You are a professional software/tech localizer. Translate each of the following ${sources.length} English strings into ${langName}.
STRICT RULES:
- Output MUST be a valid JSON array of exactly ${sources.length} strings, same order, no commentary.
- Preserve ALL HTML tags, attributes, CSS class names, URLs, and inline <code> content EXACTLY. Only translate the human-readable text between tags.
- Keep product/brand names unchanged (Windows, NVIDIA, AMD, CS2, OBS, Discord, DirectX, BIOS, etc.).
- Keep numbers, units, code and keyboard shortcuts as-is.
- Escape all double quotes and backslashes correctly in JSON.
INPUT (JSON array):
${JSON.stringify(sources)}`;
}

// Validate a translated item against its source; returns {ok,tr,reason}.
function check(src, tr) {
  if (typeof tr !== 'string' || !tr.trim()) return { ok: false, tr: src, reason: 'vazio' };
  const a = tagSignature(src), b = tagSignature(tr);
  if (a.count !== b.count || a.names !== b.names || a.codes !== b.codes) return { ok: false, tr: src, reason: `html ${a.count}/${b.count}` };
  return { ok: true, tr };
}

// Translate a batch; on any structural failure split recursively so good items survive.
async function translateItems(sources, langName, depth = 0) {
  let parsed;
  try {
    parsed = parseArray(await callGeminiRaw(makePrompt(sources, langName)));
    if (!Array.isArray(parsed) || parsed.length !== sources.length) throw new Error(`len ${Array.isArray(parsed) ? parsed.length : typeof parsed} != ${sources.length}`);
  } catch (e) {
    if (sources.length > 1 && depth < 6) {
      const mid = Math.ceil(sources.length / 2);
      const [l, r] = await Promise.all([translateItems(sources.slice(0, mid), langName, depth + 1), translateItems(sources.slice(mid), langName, depth + 1)]);
      return l.concat(r);
    }
    return sources.map((s) => ({ src: s, ok: false, tr: s, reason: String(e.message).slice(0, 40) }));
  }
  return sources.map((s, i) => { const c = check(s, parsed[i]); return { src: s, ...c }; });
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
  if (!todo.length) { console.log(`nada a fazer. (${lang}: ${Object.keys(dict).length} traduzidas)`); return; }

  let done = 0, failed = 0, processed = 0;
  const window = BATCH * CONC;
  for (let i = 0; i < todo.length; i += window) {
    const slice = todo.slice(i, i + window);
    const chunks = [];
    for (let j = 0; j < slice.length; j += BATCH) chunks.push(slice.slice(j, j + BATCH));
    const groups = await Promise.all(chunks.map((c) => translateItems(c, langName)));
    for (const results of groups) for (const r of results) { if (r.ok) { dict[r.src] = r.tr; done++; } else { failed++; } }
    saveJson(dictPath, dict);
    processed += slice.length;
    const pct = Math.min(100, Math.round((processed / todo.length) * 100));
    process.stdout.write(`\r  ${String(pct).padStart(3)}% | ok=${done} falhas=${failed} | ${processed}/${todo.length} strings   `);
    await sleep(300);
  }
  console.log(`\n  -> ${lang}: ${Object.keys(dict).length}/${sources.length} traduzidas (${failed} falhas de integridade, re-tentaveis).`);
}

(async () => {
  const langs = langArg === 'all' ? ALL_LANGS : [langArg];
  for (const l of langs) { await runLang(l); }
  console.log('\nCONCLUIDO.');
})().catch((e) => { console.error('\nFATAL:', e.message); process.exit(1); });
