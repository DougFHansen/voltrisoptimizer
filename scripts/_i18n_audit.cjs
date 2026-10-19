const fs = require('fs');
const path = require('path');

const root = process.cwd();
const enArr = JSON.parse(fs.readFileSync(path.join(root, 'lib/guides-i18n/strings.en.json'), 'utf8'));
const norm = (v) => String(v).replace(/\s+/g, ' ').trim();
const enSet = new Set(enArr.map(norm));
console.log('strings.en.json array:', enArr.length, '| chaves normalizadas únicas:', enSet.size);

const dataDir = path.join(root, 'lib/guides-i18n/data');
const langs = fs.readdirSync(dataDir).filter((f) => f.endsWith('.json')).map((f) => f.replace('.json', ''));
const norm2 = (v) => String(v).replace(/\s+/g, ' ').trim();
console.log('lang      keys     untranslated(value==key)  empty  missingVsEnSource');
for (const l of langs) {
  const obj = JSON.parse(fs.readFileSync(path.join(dataDir, l + '.json'), 'utf8'));
  const keys = Object.keys(obj);
  let same = 0, empty = 0;
  for (const k of keys) {
    const v = obj[k];
    if (v == null || norm2(v) === '') empty++;
    else if (norm2(v) === norm2(k)) same++;
  }
  // how many EN source strings have NO entry at all in this lang
  let missing = 0;
  const keySet = new Set(keys.map(norm2));
  for (const s of enSet) if (!keySet.has(s)) missing++;
  console.log(
    l.padEnd(9),
    String(keys.length).padEnd(8),
    String(same).padEnd(24),
    String(empty).padEnd(6),
    missing
  );
}
