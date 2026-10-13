import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// One-off wiring codemod (Fase 2). For every section layout.tsx that defines
// generateMetadata under app/[locale], wrap the returned metadata object with
// localizeMetadata(locale, {...}) so title/description/keywords go through the
// site dictionary, and add the import. Read-only dry run unless --apply.
// Excludes: root [locale]/layout.tsx (wired by hand) and login (out of scope).

const REPO = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = path.join(REPO, 'app/[locale]');
const APPLY = process.argv.includes('--apply');

const SKIP = [
  path.join(BASE, 'layout.tsx'),        // root layout already wired
  path.join(BASE, 'login', 'layout.tsx'), // auth page: out of scope
];

function findLayoutsWithGenerateMetadata(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (full.startsWith(path.join(BASE, 'guides'))) continue; // handled via createGuideMetadata
      findLayoutsWithGenerateMetadata(full, out);
    } else if (e.name === 'layout.tsx') {
      const txt = fs.readFileSync(full, 'utf8');
      if (txt.includes('generateMetadata')) out.push(full);
    }
  }
  return out;
}

// Return the index just past the matching close brace for the `{` at `open`.
function matchBrace(txt, open) {
  let depth = 0;
  for (let i = open; i < txt.length; i++) {
    const c = txt[i];
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

function processFile(file) {
  if (SKIP.includes(file)) return { file, status: 'skip-list' };
  let txt = fs.readFileSync(file, 'utf8');

  const gmIdx = txt.indexOf('async function generateMetadata');
  if (gmIdx === -1) return { file, status: 'no-gm' };

  // find the first `return` after gmIdx that is followed by an object literal
  const rIdx = txt.indexOf('return', gmIdx);
  if (rIdx === -1) return { file, status: 'no-return' };
  let j = rIdx + 'return'.length;
  while (j < txt.length && /\s/.test(txt[j])) j++;
  if (txt[j] !== '{') return { file, status: 'return-not-object' };

  const close = matchBrace(txt, j);
  if (close === -1) return { file, status: 'unbalanced-brace' };
  // must be followed by optional whitespace then ';'
  let k = close + 1;
  while (k < txt.length && /\s/.test(txt[k])) k++;
  if (txt[k] !== ';') return { file, status: 'return-object-not-stmt-end' };

  const objText = txt.slice(j, close + 1);

  // Build the new return statement.
  const before = txt.slice(0, rIdx);
  const after = txt.slice(close + 1);
  let next = before + 'return await localizeMetadata(locale, ' + objText + ')' + after;

  // Ensure locale is destructured from awaited params.
  if (!/const\s*\{\s*locale\s*\}\s*=\s*await\s*params/.test(next)) {
    return { file, status: 'no-locale-param' };
  }

  // Ensure import present.
  if (!/from '@\/lib\/site-i18n'/.test(next)) {
    const lines = next.split('\n');
    // insert after the last import line at top
    let lastImport = -1;
    for (let i = 0; i < Math.min(lines.length, 30); i++) {
      if (/^\s*import\s/.test(lines[i]) || (/^\s*}\s*from\s/.test(lines[i]))) lastImport = i;
    }
    lines.splice(lastImport + 1, 0, "import { localizeMetadata } from '@/lib/site-i18n';");
    next = lines.join('\n');
  }

  if (APPLY && next !== txt) fs.writeFileSync(file, next);
  return { file, status: 'wired' };
}

const files = findLayoutsWithGenerateMetadata(BASE);
console.log('==== WIRE METADATA (Fase 2) —', APPLY ? 'APPLY' : 'DRY RUN', '====');
let wired = 0;
for (const f of files) {
  const r = processFile(f);
  if (r.status === 'wired') wired++;
  console.log((r.status + '  ').padEnd(10) + f.replace(REPO + path.sep, ''));
}
console.log('total layouts:', files.length, '| wired:', wired);
