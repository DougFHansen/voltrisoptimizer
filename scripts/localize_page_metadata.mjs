// Codemod: localize server-rendered page <title>/description for every public
// page that still returns hardcoded metadata.
//
// Rationale: the 316 /guides/* pages already localize via createGuideMetadata,
// and the home page localizes via a per-locale title map. The remaining ~74
// pages (marketing / service / top-level extra guides) return English (or fixed)
// `title`/`description` in their `generateMetadata`, so crawlers see an English
// <title> on every locale even though the body is translated client-side.
//
// The fix wraps the returned metadata object with `localizeMetadata(locale, …)`,
// which runs the shared English-keyed dictionary over title/description/keywords
// (falls back to the input when a string is not a key — e.g. already-localized or
// non-English sources — so it never blanks or corrupts existing output).
//
// Usage:
//   node scripts/localize_page_metadata.mjs          # dry-run (report only)
//   node scripts/localize_page_metadata.mjs --apply  # write changes
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const APP_LOCALE = path.join(ROOT, 'app', '[locale]');
const APPLY = process.argv.includes('--apply');
const IMPORT_LINE = "import { localizeMetadata } from '@/lib/site-i18n';";

// Files we deliberately do NOT touch (already localized a different way).
const SKIP_FILES = new Set([path.join(APP_LOCALE, 'page.tsx')]); // home: titles[locale] map

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) {
      // never descend into API / non-page helper dirs
      walk(fp, out);
    } else if (e.name === 'page.tsx') {
      out.push(fp);
    }
  }
  return out;
}

// Given src and an index at an opening '{' or '(', return the index just AFTER
// the matching close delimiter. String/template/comment aware.
function matchDelim(src, openIdx) {
  const open = src[openIdx];
  const close = open === '{' ? '}' : open === '(' ? ')' : null;
  if (!close) throw new Error('not an opener');
  let depth = 0;
  let i = openIdx;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    // line comment
    if (c === '/' && src[i + 1] === '/') { i += 2; continue; }
    // block comment
    if (c === '/' && src[i + 1] === '*') { const j = src.indexOf('*/', i + 2); i = j < 0 ? n : j + 2; continue; }
    // strings
    if (c === '"' || c === "'") {
      i++;
      while (i < n) { if (src[i] === '\\') { i += 2; continue; } if (src[i] === c) { i++; break; } i++; }
      continue;
    }
    // template literal (handles ${ ... } with nested braces/strings)
    if (c === '`') {
      i++;
      while (i < n) {
        if (src[i] === '\\') { i += 2; continue; }
        if (src[i] === '`') { i++; break; }
        if (src[i] === '$' && src[i + 1] === '{') {
          // recurse into the ${ } expression using a lightweight brace counter
          let d = 1; i += 2;
          while (i < n && d > 0) {
            const cc = src[i];
            if (cc === '{') d++;
            else if (cc === '}') d--;
            else if (cc === '"' || cc === "'") { const q = cc; i++; while (i < n) { if (src[i] === '\\') { i += 2; continue; } if (src[i] === q) break; i++; } }
            else if (cc === '`') { const end = matchDelim(src, i); i = end - 1; }
            i++;
          }
          continue;
        }
        i++;
      }
      continue;
    }
    if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) return i + 1; }
    i++;
  }
  throw new Error('unbalanced delimiter');
}

const report = { wrapped: [], skippedAlready: [], skippedNoGen: [], skippedGuide: [], errors: [] };

for (const fp of walk(APP_LOCALE)) {
  if (SKIP_FILES.has(fp)) { report.skippedAlready.push({ fp, why: 'excluded (home)' }); continue; }
  let src = fs.readFileSync(fp, 'utf8');
  if (!/export\s+async\s+function\s+generateMetadata\b/.test(src)) { report.skippedNoGen.push({ fp }); continue; }
  if (src.includes('createGuideMetadata')) { report.skippedGuide.push({ fp }); continue; }
  if (src.includes('localizeMetadata(')) { report.skippedAlready.push({ fp, why: 'already wrapped' }); continue; }

  const rel = path.relative(ROOT, fp);
  try {
    // locate generateMetadata body
    const gmIdx = src.search(/export\s+async\s+function\s+generateMetadata\b/);
    const braceIdx = src.indexOf('{', src.indexOf(')', gmIdx)); // function body open brace
    const bodyEnd = matchDelim(src, braceIdx);
    const body = src.slice(braceIdx + 1, bodyEnd - 1);

    if (!/\bconst\s*\{[^}]*\blocale\b[^}]*\}\s*=\s*await\s+params/.test(body) &&
        !/\blocale\b/.test(body)) {
      report.errors.push({ fp, why: 'no `locale` in scope' });
      continue;
    }

    // find the RETURN that yields the metadata object (first top-level `return` in body)
    const m = body.match(/\breturn\b/);
    if (!m) { report.errors.push({ fp, why: 'no return' }); continue; }
    const absReturn = braceIdx + 1 + m.index;
    // skip whitespace + optional '(' after `return`
    let p = absReturn + 'return'.length;
    while (p < src.length && /\s/.test(src[p])) p++;
    let objOpen = p;
    let wrapCloseExpr;
    if (src[p] === '(') {
      const parenEnd = matchDelim(src, p);
      // inside parens, find the object literal
      let q = p + 1; while (q < src.length && /\s/.test(src[q])) q++;
      if (src[q] !== '{') { report.errors.push({ fp, why: 'return (…) not an object' }); continue; }
      const objEnd = matchDelim(src, q);
      const objExpr = src.slice(q, objEnd);
      wrapCloseExpr = { start: q, end: objEnd, objExpr, trailing: src.slice(objEnd, parenEnd - 1) };
    } else if (src[p] === '{') {
      const objEnd = matchDelim(src, p);
      const objExpr = src.slice(p, objEnd);
      wrapCloseExpr = { start: p, end: objEnd, objExpr, trailing: '' };
    } else {
      report.errors.push({ fp, why: 'return value not an object literal (dynamic?)' });
      continue;
    }

    const replacement = `await localizeMetadata(locale, ${wrapCloseExpr.objExpr})`;
    const nextSrc =
      src.slice(0, wrapCloseExpr.start) +
      replacement +
      src.slice(wrapCloseExpr.end);

    // ensure import present
    let finalSrc = nextSrc;
    if (!/from\s+'@\/lib\/site-i18n'/.test(finalSrc) || !finalSrc.includes(IMPORT_LINE)) {
      // insert after the last import statement at top
      const importRe = /^[ \t]*import[^\n]*\n/gm;
      let last = 0, mm;
      while ((mm = importRe.exec(finalSrc))) last = mm.index + mm[0].length;
      if (last > 0) finalSrc = finalSrc.slice(0, last) + IMPORT_LINE + '\n' + finalSrc.slice(last);
      else finalSrc = IMPORT_LINE + '\n' + finalSrc;
    }

    if (APPLY) fs.writeFileSync(fp, finalSrc, 'utf8');
    report.wrapped.push({ fp: rel });
  } catch (err) {
    report.errors.push({ fp, why: String(err.message) });
  }
}

console.log(`\n=== localize_page_metadata (${APPLY ? 'APPLY' : 'DRY-RUN'}) ===`);
console.log(`wrapped: ${report.wrapped.length}`);
report.wrapped.forEach((x) => console.log('  + ' + x.fp));
console.log(`\nskipped (already localized / guides / excluded): ${report.skippedAlready.length + report.skippedGuide.length}`);
report.skippedAlready.concat(report.skippedGuide).forEach((x) => console.log('  = ' + path.relative(ROOT, x.fp) + (x.why ? `  (${x.why})` : '')));
if (report.errors.length) {
  console.log(`\n!! NEEDS MANUAL REVIEW (${report.errors.length}):`);
  report.errors.forEach((x) => console.log('  ! ' + path.relative(ROOT, x.fp) + '  -> ' + x.why));
}
