// Repara valores de dicionário corrompidos com escapes literais (\n, \", \\)
// que vazaram do tradutor em massa. Estratégia:
//  - Se o VALOR contém escapes literais mas a CHAVE não, o valor está danificado:
//    revertemos o dano de escape ( \\n -> newline real, \\" -> aspas ) e,
//    em seguida, se ainda houver tags/estrutura inconsistente, REMOVEMOS a entrada
//    para que o loop de tradução a refaça do zero (fallback inglês é seguro).
// Rode: node scripts/repair_escape_values.mjs [--apply]
const fs = require('fs');
const path = require('path');
const APPLY = process.argv.includes('--apply');
const DATA = path.join(process.cwd(), 'lib', 'guides-i18n', 'data');
const LANGS = ['es', 'pt-br', 'de', 'fr', 'it', 'ja', 'ko', 'ar'];

function hasLiteralEscapes(s) {
  return s.indexOf('\\n') !== -1 || s.indexOf('\\"') !== -1 || s.indexOf('\\t') !== -1;
}

let totalFixed = 0, totalDropped = 0;
for (const l of LANGS) {
  const file = path.join(DATA, l + '.json');
  const dict = JSON.parse(fs.readFileSync(file, 'utf8'));
  let fixed = 0, dropped = 0;
  for (const [k, v] of Object.entries(dict)) {
    const s = String(v);
    if (!hasLiteralEscapes(s)) continue;
    // revert escape corruption: literal "\\n" -> "\n", '\\"' -> '"', "\\t" -> "\t"
    let unescaped = s.split('\\\\n').join('\n').split('\\\\\\"').join('"').split('\\\\t').join('\t');
    // also handle single-backslash artifacts: "\n" as 2 chars already covered; stray "\\" left?
    if (hasLiteralEscapes(unescaped)) unescaped = unescaped.split('\\n').join('\n').split('\\"').join('"');
    // sanity: if key has HTML tags, repaired value must have same tag count
    const srcTags = (k.match(/<[a-z][a-z0-9]*/gi) || []).length;
    const valTags = (unescaped.match(/<[a-z][a-z0-9]*/gi) || []).length;
    if (srcTags > 0 && valTags !== srcTags) {
      delete dict[k]; // structure still broken -> let translator redo it
      dropped++;
    } else {
      dict[k] = unescaped;
      fixed++;
    }
  }
  totalFixed += fixed; totalDropped += dropped;
  console.log(`${l.padEnd(6)} reparados: ${fixed}  removidos(p/ retraduzir): ${dropped}`);
  if (APPLY && (fixed || dropped)) fs.writeFileSync(file, JSON.stringify(dict, null, 2) + '\n', 'utf8');
}
console.log(`TOTAL: ${totalFixed} reparados, ${totalDropped} removidos ${APPLY ? '(GRAVADO)' : '(dry-run)'}`);
