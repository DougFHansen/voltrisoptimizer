import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import ts from 'typescript';

// Reads every guide page.tsx and, using the TypeScript AST, collects the
// translatable English strings from a FIXED set of rendered fields only.
// It NEVER writes to the guide files (safe / read-only). Output goes to
// lib/guides-i18n/ as data used later by the translation pipeline + loader.

const require = createRequire(import.meta.url);
function fileDirname() {
  // ESM __dirname shim
  const { fileURLToPath } = require('url');
  return path.dirname(fileURLToPath(import.meta.url));
}
const REPO = path.join(fileDirname(), '..');
const GUIDES_DIR = path.join(REPO, 'app/[locale]/guides');
const OUT_DIR = path.join(REPO, 'lib/guides-i18n');

// Fields that carry human prose rendered by GuideTemplate.
const TARGET_VARS = new Set([
  'title', 'description', 'keywords', 'summaryTable',
  'contentSections', 'advancedContentSections', 'additionalContentSections',
  'faqItems', 'relatedGuides',
]);
// Object keys whose VALUES are identifiers/links and must never be translated.
const SKIP_VALUE_KEYS = new Set(['href', 'url', 'slug', 'id', 'image', 'src', 'icon', 'key']);

function collectLiterals(node, strings, skipThisValue = false) {
  if (!node || skipThisValue) return;
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    const t = node.text.trim();
    if (t && !/^\s*$/.test(t)) strings.add(node.text); // keep original spacing for content
    return;
  }
  if (ts.isTemplateExpression(node)) {
    // Guides should not interpolate inside translatable prose; capture as-is marker.
    const t = node.getText().trim();
    if (t) strings.add(node.head.text + '/*EXPR*/');
    return;
  }
  if (ts.isObjectLiteralExpression(node)) {
    for (const prop of node.properties) {
      if (ts.isPropertyAssignment(prop)) {
        const name = prop.name.getText();
        const skip = SKIP_VALUE_KEYS.has(name);
        collectLiterals(prop.initializer, strings, skip);
      } else if (ts.isShorthandPropertyAssignment(prop)) {
        // ignore
      } else if (ts.isSpreadElement(prop)) {
        collectLiterals(prop.argumentExpression, strings);
      }
    }
    return;
  }
  if (ts.isArrayLiteralExpression(node)) {
    for (const el of node.elements) collectLiterals(el, strings);
    return;
  }
  // Binary concat "a" + "b" etc.
  if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
    collectLiterals(node.left, strings);
    collectLiterals(node.right, strings);
    return;
  }
  // Fallback: descend children.
  node.forEachChild((c) => collectLiterals(c, strings));
}

function extractFromFile(filePath) {
  const src = ts.createSourceFile(filePath, fs.readFileSync(filePath, 'utf8'), ts.ScriptTarget.Latest, true);
  const strings = new Set();
  function visit(node) {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && TARGET_VARS.has(node.name.text)) {
      if (node.initializer) collectLiterals(node.initializer, strings);
    }
    node.forEachChild(visit);
  }
  visit(src);
  return strings;
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const folders = fs.readdirSync(GUIDES_DIR).filter((f) =>
  fs.statSync(path.join(GUIDES_DIR, f)).isDirectory()
);

const bySlug = {};
let totalUnique = 0;
let totalChars = 0;
let parsedOk = 0, parsedEmpty = 0;

for (const slug of folders) {
  const pagePath = path.join(GUIDES_DIR, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  const set = extractFromFile(pagePath);
  const arr = [...set];
  bySlug[slug] = arr;
  if (arr.length) parsedOk++; else parsedEmpty++;
  const joined = arr.join('');
  totalUnique += arr.length;
  totalChars += joined.length;
}

// Global dedup of unique strings (what actually needs a model call).
const globalSet = new Set();
for (const arr of Object.values(bySlug)) for (const s of arr) globalSet.add(s);
const uniqueStrings = [...globalSet];
const uniqueChars = uniqueStrings.reduce((a, s) => a + s.length, 0);

fs.writeFileSync(path.join(OUT_DIR, 'by-slug.json'), JSON.stringify(bySlug, null, 0));
fs.writeFileSync(path.join(OUT_DIR, 'strings.en.json'), JSON.stringify(uniqueStrings, null, 0));

console.log('==== EXTRATOR DE STRINGS DAS GUIAS ====');
console.log('pastas de guia processadas:', folders.length);
console.log('guias com conteudo extraido:', parsedOk, '| vazias (sem alvo):', parsedEmpty);
console.log('strings (com repeticoes entre guias):', totalUnique);
console.log('strings UNICAS a traduzir:', uniqueStrings.length);
console.log('caracteres unicos a traduzir:', uniqueChars, '(~' + Math.round(uniqueChars / 1000) + 'k)');
console.log('amostra das 3 maiores:');
uniqueStrings.slice().sort((a, b) => b.length - a.length).slice(0, 3).forEach((s) => console.log('  -', s.length + ' chars |', s.replace(/\s+/g, ' ').slice(0, 80) + '...'));
console.log('\nEscrito: lib/guides-i18n/by-slug.json e strings.en.json');
