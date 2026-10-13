#!/usr/bin/env node
// High-throughput bulk translator using the free Google Translate "batchexecute"
// endpoint. Complements the LLM loop (translate-guides.mjs): this achieves FULL
// COVERAGE of every extracted string across all 8 target locales quickly, while
// the LLM loop can later overwrite/verify the highest-priority ones.
//
// Design:
//  - Single source of truth: lib/guides-i18n/strings.en.json (English source list).
//  - Dictionaries: lib/guides-i18n/data/{lang}.json = { english: translation }.
//  - Resumable & idempotent: only translates strings NOT already present in the
//    target dict. Existing (LLM) translations are preserved unless --overwrite.
//  - Batchexecute accepts many `q=` params in one POST -> one response array.
//  - Conservative throttling + 429 backoff to avoid abuse detection.
//
// Usage:
//   node scripts/google_bulk_translate.mjs                 // all langs, fill gaps
//   node scripts/google_bulk_translate.mjs --lang es fr    // only these langs
//   node scripts/google_bulk_translate.mjs --batch 40 --delay 1200

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const STRINGS = path.join(ROOT, 'lib/guides-i18n/strings.en.json');
const DATA_DIR = path.join(ROOT, 'lib/guides-i18n/data');

// Our locale code -> Google (CL) language code.
const LANG_MAP = {
  es: 'es', 'pt-br': 'pt', de: 'de', fr: 'fr',
  it: 'it', ja: 'ja', ko: 'ko', ar: 'ar',
};
const ALL_LANGS = Object.keys(LANG_MAP);

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const arg = (n) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : null; };

const langsArg = argv
  .filter((a, i) => i > 0 && argv[i - 1] === '--lang')
  .filter((v) => v in LANG_MAP);
const LANGS = flag('--lang') && langsArg.length ? langsArg : ALL_LANGS;
const BATCH = parseInt(arg('--batch') || '30', 10);
const DELAY = parseInt(arg('--delay') || '900', 10);
const OVERWRITE = flag('--overwrite');
const LIMIT = parseInt(arg('--limit') || '0', 10) || Infinity;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function readJson(p, fallback) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fallback; }
}
function saveJson(p, obj) {
  const tmp = p + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(obj));
  fs.renameSync(tmp, p);
}

// Extract a single translated string from one Google batchexecute item. The
// `translate_a/t` client=gtx endpoint returns a FLAT array of strings (one per
// q=, same order). Some variants return nested [sentence-chunks] arrays, so we
// handle both defensively.
function itemText(item) {
  if (typeof item === 'string') return item;
  if (Array.isArray(item)) {
    if (typeof item[0] === 'string') return item[0];
    if (Array.isArray(item[0])) return item[0][1] || item[0][0] || '';
  }
  return '';
}

async function googleBatch(texts, from, to, attempt = 0) {
  const url = 'https://translate.googleapis.com/translate_a/t?client=gtx&sl=' + from + '&tl=' + to + '&dt=t';
  const body = 'q=' + texts.map(encodeURIComponent).join('&q=');
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (res.status === 429) {
    const w = Math.min(120000, 5000 * (attempt + 1) + Math.random() * 3000);
    console.log(`\n  429, aguardando ${(w / 1000) | 0}s...`);
    await sleep(w);
    return googleBatch(texts, from, to, attempt + 1);
  }
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const json = await res.json();
  // This endpoint returns a flat array of translated strings (one per q=, same
  // order). Older nested form is [ [ item, ... ] ]. Normalize to a plain array.
  const arr = Array.isArray(json) ? json : [json];
  return arr.map(itemText);
}

async function runLang(lang, sources) {
  const gLang = LANG_MAP[lang];
  const dictPath = path.join(DATA_DIR, `${lang}.json`);
  const dict = readJson(dictPath, {});
  const todo = sources.filter((s) => OVERWRITE || !(s in dict)).slice(0, LIMIT);
  console.log(`\n===== ${lang} | total=${sources.length} | na-dict=${Object.keys(dict).length} | a-traduzir=${todo.length} | batch=${BATCH} =====`);
  if (!todo.length) { console.log(`nada a fazer (${lang}).`); return; }

  let done = 0, failed = 0;
  for (let i = 0; i < todo.length; i += BATCH) {
    const slice = todo.slice(i, i + BATCH);
    try {
      const out = await googleBatch(slice, 'en', gLang);
      for (let k = 0; k < slice.length; k++) {
        const src = slice[k];
        const tr = (out[k] || '').trim();
        if (tr) { dict[src] = tr; done++; } else { failed++; }
      }
    } catch (e) {
      failed += slice.length;
      console.log(`\n  batch @${i} falhou: ${e.message}`);
      await sleep(4000);
    }
    saveJson(dictPath, dict);
    const pct = Math.min(100, Math.round(((i + BATCH) / todo.length) * 100));
    process.stdout.write(`\r  ${String(pct).padStart(3)}% | ok=${done} falhas=${failed} / ${todo.length}   `);
    await sleep(DELAY);
  }
  console.log(`\n  -> ${lang}: ${Object.keys(dict).length}/${sources.length} na dict.`);
}

(async () => {
  if (!fs.existsSync(STRINGS)) throw new Error('strings.en.json ausente');
  const sources = readJson(STRINGS, []);
  console.log(`Google bulk-translate | ${sources.length} strings | langs=${LANGS.join(',')}`);
  for (const l of LANGS) await runLang(l, sources);
  // Remaining summary.
  let totalResum = 0;
  for (const l of LANGS) {
    const d = readJson(path.join(DATA_DIR, `${l}.json`), {});
    totalResum += sources.filter((s) => !(s in d)).length;
  }
  console.log(`\nGOOGLE_RESUM=${totalResum}`);
})().catch((e) => { console.error('\nFATAL:', e.message); process.exit(1); });
