import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { fileURLToPath } = require('url');
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Codemod: make every guide page pass `locale` (from params) and its `slug`
// to <GuideTemplate>, so the i18n loader can translate the body while keeping
// static generation (SSG). Idempotent: pages already wired are skipped.
// Usage: node scripts/codemod-guide-locale.mjs [--apply]

const APPLY = process.argv.includes('--apply');
const GUIDES_DIR = path.join(__dirname, '..', 'app/[locale]/guides');

const folders = fs.readdirSync(GUIDES_DIR).filter((f) => {
  try { return fs.statSync(path.join(GUIDES_DIR, f)).isDirectory(); } catch { return false; }
});

let changed = 0, skipped = 0, noTemplate = 0, noDefault = 0;
const report = [];

for (const slug of folders) {
  const pagePath = path.join(GUIDES_DIR, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) { skipped++; continue; }
  let src = fs.readFileSync(pagePath, 'utf8');

  // Already wired?
  if (/slug=\{?["']/.test(src) && /locale=\{locale\}/.test(src)) { skipped++; continue; }

  // 1. Must render <GuideTemplate (skip pages that use the client template directly)
  if (!/<GuideTemplate[\s>]/.test(src)) { noTemplate++; report.push(`SEM <GuideTemplate>: ${slug}`); continue; }

  // 2. Make default export async + read params.locale
  const defRe = /export default (?:async )?function (\w+)\s*\(\s*\)\s*\{/;
  const defMatch = src.match(defRe);
  if (!defMatch) { noDefault++; report.push(`DEFAULT EXPORT NAO RECONHECIDO: ${slug}`); continue; }
  src = src.replace(
    defRe,
    `export default async function $1({ params }: { params: Promise<{ locale: string }> }) {\n    const { locale } = await params;`
  );

  // 3. Inject locale + slug into the first <GuideTemplate opening tag
  src = src.replace(
    /(<GuideTemplate\s*\r?\n)/,
    `$1            locale={locale}\n            slug="${slug}"\n`
  );

  changed++;
  if (APPLY) fs.writeFileSync(pagePath, src);
}

console.log('==== CODEMOD GUIDE LOCALE ====', APPLY ? '(APLICADO)' : '(dry-run)');
console.log('pastas:', folders.length);
console.log('alteradas:', changed, '| ja-wired/puladas:', skipped, '| sem <GuideTemplate>:', noTemplate, '| default nao reconhecido:', noDefault);
if (report.length) { console.log('--- avisos ---'); report.slice(0, 40).forEach((r) => console.log('  ' + r)); }
if (!APPLY) console.log('\n(dry-run: adicione --apply para escrever)');
