import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import ts from 'typescript';

// Site-wide translatable-string extractor (Fase 1 of the "translate whole site"
// plan). Read-only over the source: it NEVER writes to page/component files.
// It collects English source strings from the surfaces NOT covered by the guide
// body extractor, then UNIONS them with the existing guide strings so a single
// dictionary (lib/guides-i18n/data/{lang}.json) serves the whole site.
//
// Sources scanned:
//   1. guideMetadata.title / .description of every guide page (listing cards).
//   2. generateMetadata() title / description / keywords of public pages + layout.
//   3. JSX text nodes (visible prose) of public pages under app/[locale] (non-guides)
//      and of the shared UI components in components/.
//
// Safety filters: skip code-looking strings (paths, class names, interpolation,
// identifiers), require at least two letters, drop pure punctuation/numbers.

const require = createRequire(import.meta.url);
const { fileURLToPath } = require('url');
const REPO = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const LOCALE_DIR = path.join(REPO, 'app/[locale]');
const GUIDES_DIR = path.join(LOCALE_DIR, 'guides');
const COMPONENTS_DIR = path.join(REPO, 'components');
const OUT_DIR = path.join(REPO, 'lib/guides-i18n');
const STRINGS = path.join(OUT_DIR, 'strings.en.json');

const META_FIELDS = new Set(['title', 'description', 'summary', 'subtitle']);
const META_ARRAY_FIELDS = new Set(['keywords']);

// Object property names whose string values are visible UI text in client
// components (services/testimonials/features cards, CTA buttons, etc.). Only
// used when scanning non-guide component/page files (display mode).
const DISPLAY_KEYS = new Set([
  'title', 'description', 'desc', 'summary', 'subtitle', 'text', 'content',
  'body', 'label', 'heading', 'question', 'answer', 'cta', 'buttontext',
  'btntext', 'caption', 'tagline', 'message', 'role', 'location', 'name',
  'price', 'period', 'feature', 'highlight', 'placeholder', 'helper',
]);

function isSentence(s) {
  // sentence-ish UI text: has a space or is a reasonably long word.
  const t = s.trim();
  return /\s/.test(t) || t.length >= 8;
}

function isProse(s) {
  const t = s.trim();
  if (t.length < 2) return false;
  if (!/[A-Za-z]{2}/.test(t)) return false;                 // needs letters
  if (/^https?:\/\//i.test(t)) return false;                // urls
  if (/^[#/].+/.test(t)) return false;                      // paths / ids
  if (/[{}<>`]|=>|\$\{/.test(t)) return false;              // code / interpolation / tags
  if (/^[a-z0-9]+(-[a-z0-9]+)+$/.test(t)) return false;     // kebab ids like text-center
  if (/^[\w.-]+\.(png|jpe?g|svg|webp|ico|gif|json|xml|ts|tsx|js|css|mp3|wav)$/i.test(t)) return false; // files
  return true;
}

function add(set, raw) {
  if (typeof raw !== 'string') return;
  const v = raw.replace(/\s+/g, ' ').trim();
  if (v && isProse(v)) set.add(v);
}

function collectStringsDeep(node, set) {
  if (!node) return;
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) { add(set, node.text); return; }
  if (ts.isArrayLiteralExpression(node)) { node.elements.forEach((e) => collectStringsDeep(e, set)); return; }
  node.forEachChild((c) => collectStringsDeep(c, set));
}

function collectMetaObject(objNode, set) {
  for (const prop of objNode.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    const name = prop.name.getText();
    if (META_FIELDS.has(name)) {
      collectStringsDeep(prop.initializer, set);
    } else if (META_ARRAY_FIELDS.has(name) && ts.isArrayLiteralExpression(prop.initializer)) {
      for (const el of prop.initializer.elements) if (ts.isStringLiteral(el)) add(set, el.text);
    }
  }
}

function collectDisplayObject(objNode, set) {
  for (const prop of objNode.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    const name = prop.name.getText().replace(/^['"]|['"]$/g, '');
    if (!DISPLAY_KEYS.has(name)) continue;
    const init = prop.initializer;
    if (ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init)) {
      add(set, init.text);
    } else if (ts.isArrayLiteralExpression(init)) {
      for (const el of init.elements) {
        if ((ts.isStringLiteral(el) || ts.isNoSubstitutionTemplateLiteral(el)) && isSentence(el.text)) add(set, el.text);
      }
    }
  }
}

function collectArraySentences(arrNode, set) {
  for (const el of arrNode.elements) {
    if ((ts.isStringLiteral(el) || ts.isNoSubstitutionTemplateLiteral(el)) && isSentence(el.text)) add(set, el.text);
  }
}

function extractFromFile(filePath, display = false) {
  const set = new Set();
  let src;
  try {
    src = ts.createSourceFile(filePath, fs.readFileSync(filePath, 'utf8'), ts.ScriptTarget.Latest, true);
  } catch {
    return set;
  }
  function visit(node) {
    // guideMetadata / metadata / const X: Metadata = { ... } object literals
    if (ts.isVariableDeclaration(node) && node.initializer && ts.isObjectLiteralExpression(node.initializer)) {
      const nm = node.name.getText();
      if (/metadata/i.test(nm)) collectMetaObject(node.initializer, set);
    }
    // return { title, description } inside generateMetadata
    if (ts.isObjectLiteralExpression(node)) {
      const parent = node.parent;
      const inReturn = parent && ts.isReturnStatement(parent);
      const isMetaAssign = parent && ts.isVariableDeclaration(parent) && /metadata/i.test(parent.name.getText());
      if (inReturn || isMetaAssign) collectMetaObject(node, set);
    }
    // JSX text nodes (visible prose)
    if (ts.isJsxText(node)) add(set, node.text);
    // display-mode: object data cards (services/testimonials/features) + string arrays
    if (display) {
      if (ts.isObjectLiteralExpression(node)) collectDisplayObject(node, set);
      if (ts.isArrayLiteralExpression(node)) collectArraySentences(node, set);
    }
    // placeholder / aria-label / title attributes with string literals
    if (ts.isJsxAttribute(node)) {
      const an = node.name.getText();
      if (['placeholder', 'aria-label', 'title', 'alt'].includes(an) && node.initializer && ts.isStringLiteral(node.initializer)) {
        add(set, node.initializer.text);
      }
    }
    node.forEachChild(visit);
  }
  visit(src);
  return set;
}

function walkTsFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(entry.name)) continue;
      walkTsFiles(full, out);
    } else if (/\.tsx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

// ---- Collect ----
const siteSet = new Set();
let filesScanned = 0;

// 1. guide pages: guideMetadata title/description (cards + per-page metadata)
//    Also the guides LISTING page (app/[locale]/guides/page.tsx), whose
//    generateMetadata title/description are NOT slug-subfolder pages.
{
  const listing = path.join(GUIDES_DIR, 'page.tsx');
  if (fs.existsSync(listing)) { for (const s of extractFromFile(listing)) siteSet.add(s); filesScanned++; }
}
for (const slug of fs.readdirSync(GUIDES_DIR).filter((f) => fs.statSync(path.join(GUIDES_DIR, f)).isDirectory())) {
  const p = path.join(GUIDES_DIR, slug, 'page.tsx');
  if (!fs.existsSync(p)) continue;
  for (const s of extractFromFile(p)) siteSet.add(s);
  filesScanned++;
}

// 2. public pages under [locale] excluding guides
for (const f of walkTsFiles(LOCALE_DIR)) {
  if (f.startsWith(GUIDES_DIR)) continue;
  for (const s of extractFromFile(f, true)) siteSet.add(s);
  filesScanned++;
}

// 3. shared UI components (Header, Footer, sections, etc.)
for (const f of walkTsFiles(COMPONENTS_DIR)) {
  for (const s of extractFromFile(f, true)) siteSet.add(s);
  filesScanned++;
}

// ---- Union with existing guide body strings ----
const existing = fs.existsSync(STRINGS) ? JSON.parse(fs.readFileSync(STRINGS, 'utf8')) : [];
const existingSet = new Set(existing);
const brandNew = [...siteSet].filter((s) => !existingSet.has(s));
const merged = [...existing, ...brandNew];

// ---- Atomic write ----
const tmp = STRINGS + '.tmp';
fs.writeFileSync(tmp, JSON.stringify(merged, null, 0));
fs.renameSync(tmp, STRINGS);

console.log('==== EXTRATOR DE STRINGS DO SITE (Fase 1) ====');
console.log('arquivos varridos:', filesScanned);
console.log('strings candidatas do site (pos-filtro):', siteSet.size);
console.log('ja existiam (corpo das guias):', existing.length);
console.log('NOVAS adicionadas:', brandNew.length);
console.log('TOTAL em strings.en.json:', merged.length);
console.log('amostra de novas:');
brandNew.slice(0, 12).forEach((s) => console.log('  -', s.slice(0, 90)));
