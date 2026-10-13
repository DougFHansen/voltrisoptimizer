// Quality pass for the English-keyed site dictionaries.
// 1) Applies curated overrides for high-visibility UI labels (nav, buttons).
// 2) Runs automatic integrity checks: broken HTML tags, brand-name drift,
//    non-native (untranslated) output for ja/ko/ar.
// Run: node scripts/quality_pass.mjs [--apply]
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DATA = path.join(ROOT, 'lib', 'guides-i18n', 'data');
const APPLY = process.argv.includes('--apply');
const LANGS = ['es', 'pt-br', 'de', 'fr', 'it', 'ja', 'ko', 'ar'];

// Curated, country-correct labels for chrome that machine translation got wrong
// or translated literally ("Home" -> "Lar"/"Heim", "About" -> "Um"/"Di").
// Value === key means "keep English" (natural for that market).
const OVERRIDES = {
  'pt-br': { Home: 'Home', Sobre: 'Sobre' },
  es: { Home: 'Inicio', About: 'Acerca de', Download: 'Descargar', Accept: 'Aceptar' },
  de: {
    Home: 'Home',
    About: 'Über uns',
    Guides: 'Ratgeber',
    Download: 'Download',
    'Global Coverage': 'Weltweite Abdeckung',
  },
  fr: { Home: 'Accueil', Download: 'Télécharger', Guides: 'Guides' },
  it: { Home: 'Home', About: 'Chi siamo', Download: 'Scarica', Accept: 'Accetta', Contact: 'Contatti' },
  ja: { Home: 'ホーム', About: '概要', Contact: 'お問い合わせ', Accept: '同意する', Download: 'ダウンロード' },
  ko: { Home: '홈', About: '회사 소개', Contact: '문의', Accept: '동의', Download: '다운로드' },
  ar: { Home: 'الرئيسية', About: 'من نحن', Contact: 'اتصل بنا', Accept: 'قبول', Download: 'تحميل' },
};

let totalFixes = 0;
for (const lang of LANGS) {
  const file = path.join(DATA, `${lang}.json`);
  const dict = JSON.parse(fs.readFileSync(file, 'utf8'));
  const ov = OVERRIDES[lang] || {};
  let fixes = 0;
  for (const [k, v] of Object.entries(ov)) {
    if (k in dict && dict[k] !== v) {
      dict[k] = v;
      fixes++;
    } else if (!(k in dict) && k !== v) {
      // key not extracted yet (shouldn't happen for nav labels) — add it
      dict[k] = v;
      fixes++;
    }
  }
  totalFixes += fixes;
  console.log(`${lang.padEnd(6)} overrides aplicados: ${fixes}`);
  if (APPLY && fixes > 0) {
    fs.writeFileSync(file, JSON.stringify(dict, null, 2) + '\n', 'utf8');
  }
}
console.log(`-- TOTAL overrides: ${totalFixes} ${APPLY ? '(GRAVADO)' : '(dry-run, use --apply)'}`);

// ---------- integrity checks ----------
console.log('\n===== CHECKS DE INTEGRIDADE =====');
let tagBroken = 0;
let brandDrift = 0;
let nonNative = 0;
const scripts = { ja: /[\u3040-\u30ff\u4e00-\u9fff]/, ko: /[\uac00-\ud7af]/, ar: /[\u0600-\u06ff]/ };

for (const lang of LANGS) {
  const dict = JSON.parse(fs.readFileSync(path.join(DATA, `${lang}.json`), 'utf8'));
  for (const [k, v] of Object.entries(dict)) {
    // 1) source has HTML tags -> translation must keep the same tag multiset
    const srcTags = (k.match(/<\/?[a-z][^>]*>/gi) || []).map((t) => t.toLowerCase().replace(/\s+/g, ' ').trim()).sort();
    if (srcTags.length) {
      const trTags = (String(v).match(/<\/?[a-z][^>]*>/gi) || []).map((t) => t.toLowerCase().replace(/\s+/g, ' ').trim()).sort();
      if (srcTags.length !== trTags.length || srcTags.some((t, i) => t !== trTags[i])) tagBroken++;
    }
    // 2) brand: source mentions Voltris -> translation should too (any script)
    if (/\bvoltris\b/i.test(k) && !/voltris/i.test(String(v))) brandDrift++;
    // 3) ja/ko/ar should contain native script (allow short tech/brand strings)
    if (scripts[lang] && String(k).length > 8 && !scripts[lang].test(String(v)) && /[a-z]{4,}/i.test(k)) {
      nonNative++;
    }
  }
}
console.log(`tags HTML quebradas (todas idiomas): ${tagBroken}`);
console.log(`marca "Voltris" perdida em menções:  ${brandDrift}`);
console.log(`sem escrita nativa (ja/ko/ar):       ${nonNative}`);
