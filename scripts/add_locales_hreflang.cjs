// Codemod: add new locales (+ x-default) to every hardcoded `languages: { ... }`
// hreflang block under app/[locale]. Derives the base path from existing entries.
// Idempotent: skips blocks that already contain 'ru'.
// Usage: node scripts/add_locales_hreflang.cjs [--apply]
const fs = require('fs');
const path = require('path');

const APPLY = process.argv.includes('--apply');
const NEW = ['ru', 'zh-cn', 'vi', 'tr', 'id', 'pl'];
const KNOWN = ['en', 'es', 'pt-br', 'de', 'fr', 'it', 'ja', 'ko', 'ar', ...NEW];
const BASE = 'app/[locale]';

function walk(d, acc) {
  for (const f of fs.readdirSync(d)) {
    const fp = path.join(d, f);
    if (fs.statSync(fp).isDirectory()) walk(fp, acc);
    else if (f === 'page.tsx' || f === 'layout.tsx') acc.push(fp);
  }
  return acc;
}

// brace-match an object literal starting at src[openIdx] === '{'
function matchBrace(src, openIdx) {
  let depth = 0, i = openIdx, inStr = null;
  for (; i < src.length; i++) {
    const c = src[i], prev = src[i - 1];
    if (inStr) {
      if (c === '\\') { i++; continue; }
      if (c === inStr && prev !== '\\') inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

let touched = 0, skipped = 0, noBlock = 0;
const report = [];

for (const file of walk(BASE, [])) {
  const norm = file.replace(/\\/g, '/');
  if (norm === 'app/[locale]/page.tsx') { report.push('SKIP-HOME (manual)'); continue; }
  let src = fs.readFileSync(file, 'utf8');
  const keyIdx = src.indexOf('languages:');
  if (keyIdx === -1) { noBlock++; continue; }
  const openIdx = src.indexOf('{', keyIdx);
  const closeIdx = matchBrace(src, openIdx);
  if (closeIdx === -1) { report.push('BRACE-FAIL ' + file); continue; }
  const inner = src.slice(openIdx + 1, closeIdx);

  // parse entries: 'loc': `value`  |  'loc': 'value'
  const entryRe = /(['"`])([a-z-]+)\1\s*:\s*(['"`])((?:[^'"`\\]|\\.)*?)\3/g;
  const entries = [];
  let m;
  while ((m = entryRe.exec(inner))) entries.push({ key: m[2], keyDelim: m[1], delim: m[3], val: m[4] });
  if (!entries.length) { report.push('NO-ENTRIES ' + file); continue; }
  if (entries.some(e => e.key === 'ru')) { skipped++; continue; }

  // derive basePath from a single-token known locale
  const ref = entries.find(e => KNOWN.includes(e.key));
  const val = ref.val;
  const abs = val.match(/^(https?:\/\/[^/]+)\/([a-z-]+)(\/.*)?$/);
  const rel = val.match(/^\/([a-z-]+)(\/.*)?$/);
  let prefix = '', rest = '';
  if (abs) { prefix = abs[1]; rest = abs[3] || ''; }
  else if (rel) { rest = rel[2] || ''; }
  else { report.push('PATH-FAIL ' + file + ' :: ' + val); continue; }

  // delimiter + indentation style
  const delim = ref.delim;
  const keyDelim = ref.keyDelim || "'";
  const lineRe = /^([ \t]*)\S/;
  const firstLine = inner.split('\n').find(l => l.trim());
  const indent = (lineRe.exec(firstLine) || [, '                '])[1];

  // rebuild: keep existing entries, ensure trailing comma on last, append new + x-default
  const existing = entries.map(e => `${indent}${e.keyDelim}${e.key}${e.keyDelim}: ${e.delim}${e.val}${e.delim}`).join(',\n');
  const mk = (loc) => `${indent}${keyDelim}${loc}${keyDelim}: ${delim}${prefix}/${loc}${rest}${delim}`;
  const newLines = NEW.map(mk);
  const xdefault = `${indent}${keyDelim}x-default${keyDelim}: ${delim}${prefix}/en${rest}${delim}`;
  const block = '{\n' + [existing, ...newLines, xdefault].join(',\n') + '\n' + indent.slice(0, Math.max(0, indent.length - 4)) + '}';

  const out = src.slice(0, openIdx) + block + src.slice(closeIdx + 1);
  if (APPLY) fs.writeFileSync(file, out);
  touched++;
  report.push((APPLY ? 'OK ' : 'DRY ') + file + '  path=' + (prefix || '') + rest);
}

console.log(report.join('\n'));
console.log(`\nAPPLY=${APPLY} | touched=${touched} | skipped(has ru)=${skipped} | no-languages-block=${noBlock}`);
