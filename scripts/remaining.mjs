import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// Prints the total number of (string x language) pairs still missing a
// translation across all 8 target locales. Used by finish_build.ps1 to know
// when the bulk translation pass has essentially finished.
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = JSON.parse(fs.readFileSync(path.join(ROOT, 'lib/guides-i18n/strings.en.json'), 'utf8'));
let missing = 0;
const detail = [];
for (const f of ['es', 'pt-br', 'de', 'fr', 'it', 'ja', 'ko', 'ar']) {
  try {
    const d = JSON.parse(fs.readFileSync(path.join(ROOT, 'lib/guides-i18n/data', f + '.json'), 'utf8'));
    const m = src.filter((s) => !(s in d)).length;
    missing += m;
    detail.push(f + '=' + m);
  } catch {
    missing += src.length;
    detail.push(f + '=ERR');
  }
}
if (process.argv.includes('--verbose')) console.log(detail.join(' '));
process.stdout.write(String(missing));
