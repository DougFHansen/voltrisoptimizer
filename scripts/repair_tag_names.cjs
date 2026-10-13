// Repara tags HTML corrompidas pela tradução por máquina dentro dos valores:
//  (a) NOMES de tag traduzidos (ex.: <tbody> -> <corpo>)
//  (b) ATRIBUTOS corrompidos (ex.: class="... الرائدة-relaxed ..." em árabe)
// Estratégia principal: RESTAURAÇÃO POSICIONAL — se KEY e VAL têm a mesma
// SEQUÊNCIA de nomes de tags (mesma ordem), substituímos cada tag do VAL
// (com seus atributos) pela tag correspondente da KEY, preservando 100% do
// texto traduzido entre tags. Cases onde a ordem diverge -> entrada removida
// para retradução (fallback inglês seguro).
// Rode: node scripts/repair_tag_names.cjs [--apply]
const fs = require('fs');
const path = require('path');
const APPLY = process.argv.includes('--apply');
const DATA = path.join(process.cwd(), 'lib', 'guides-i18n', 'data');
const LANGS = ['es', 'pt-br', 'de', 'fr', 'it', 'ja', 'ko', 'ar'];

const VALID = new Set([
  'a','abbr','address','area','article','aside','audio','b','base','bdi','bdo','blockquote','body','br',
  'button','canvas','caption','cite','code','col','colgroup','data','datalist','dd','del','details','dfn',
  'dialog','div','dl','dt','em','embed','fieldset','figcaption','figure','footer','form','h1','h2','h3',
  'h4','h5','h6','head','header','hgroup','hr','html','i','iframe','img','input','ins','kbd','label','legend',
  'li','link','main','map','mark','menu','meta','meter','nav','noscript','object','ol','optgroup','option',
  'output','p','param','picture','pre','progress','q','rp','rt','ruby','s','samp','script','section','select',
  'slot','small','source','span','strong','style','sub','summary','sup','svg','table','tbody','td','template',
  'textarea','tfoot','th','thead','time','title','tr','track','u','ul','var','video','wbr',
]);

const TAG_RE = /<\s*(\/?)\s*([a-zA-ZÀ-ÿ][a-zA-Z0-9À-ÿ\-]*)\b[^>]*?>/g;

function tagNames(s) {
  const out = [];
  let m;
  TAG_RE.lastIndex = 0;
  while ((m = TAG_RE.exec(String(s)))) out.push(m[2].toLowerCase());
  return out;
}
// ocorrências completas (offsets + string) das tags
function tagSpans(s) {
  const out = [];
  let m;
  TAG_RE.lastIndex = 0;
  while ((m = TAG_RE.exec(String(s)))) out.push({ start: m.index, end: m.index + m[0].length, full: m[0], name: m[2].toLowerCase() });
  return out;
}

let totalRestored = 0, totalRenamed = 0, totalDropped = 0, totalClean = 0;
const report = [];
for (const l of LANGS) {
  const file = path.join(DATA, l + '.json');
  const dict = JSON.parse(fs.readFileSync(file, 'utf8'));
  let restored = 0, renamed = 0, dropped = 0, clean = 0;
  for (const [k, v0] of Object.entries(dict)) {
    if (!/<[a-z]/i.test(k)) continue;
    const v = String(v0);
    const keyNames = tagNames(k);
    const valNames = tagNames(v);
    if (keyNames.length === valNames.length && keyNames.every((t, i) => t === valNames[i])) {
      // nomes na mesma ordem; ainda precisa checar atributos corrompidos? Não:
      // se as sequências batem e os nomes são válidos, restauramos os spans
      // completos da KEY para garantir atributos íntegros (barato e seguro).
      const ks = tagSpans(k), vs = tagSpans(v);
      let rebuilt = '';
      let last = 0;
      for (let i = 0; i < vs.length; i++) {
        rebuilt += v.slice(last, vs[i].start) + ks[i].full;
        last = vs[i].end;
      }
      rebuilt += v.slice(last);
      if (rebuilt !== v) { dict[k] = rebuilt; restored++; } else { clean++; }
      continue;
    }

    // ordem diverge -> tentativa de conserto de NOMES inválidos (1:1 posicional)
    const invalidVal = [...new Set(valNames.filter((t) => !VALID.has(t)))];
    const missingFromVal = [...new Set(keyNames.filter((t) => !valNames.includes(t)))];
    let fixed = v;
    let ok = invalidVal.length > 0 && invalidVal.length === missingFromVal.length;
    if (ok) {
      // conserto nome a nome por posição na sequência
      const vnSeq = valNames.slice();
      const knSeq = keyNames.slice();
      if (vnSeq.length === knSeq.length) {
        for (let i = 0; i < vnSeq.length; i++) {
          if (vnSeq[i] !== knSeq[i] && !VALID.has(vnSeq[i])) {
            fixed = fixed.replace(new RegExp('(<\\s*/?\\s*)' + vnSeq[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?=[\\s/>])'), '$1' + knSeq[i]);
            renamed++;
            vnSeq[i] = knSeq[i];
          }
        }
        // após conserto de nomes, restaura spans da KEY (conserta atributos tb)
        const kn2 = tagNames(fixed);
        if (kn2.length === keyNames.length && kn2.every((t, i) => t === keyNames[i])) {
          const ks = tagSpans(k), vs = tagSpans(fixed);
          let rebuilt = '';
          let last = 0;
          for (let i = 0; i < vs.length; i++) { rebuilt += fixed.slice(last, vs[i].start) + ks[i].full; last = vs[i].end; }
          rebuilt += fixed.slice(last);
          fixed = rebuilt;
        } else { ok = false; }
      } else { ok = false; }
    }

    const a = keyNames.slice().sort().join(',');
    const b = tagNames(fixed).slice().sort().join(',');
    if (ok && a === b && fixed !== v) { dict[k] = fixed; }
    else if (a === b && fixed === v && invalidVal.length === 0) { clean++; }
    else { delete dict[k]; dropped++; }
  }
  totalRestored += restored; totalRenamed += renamed; totalDropped += dropped; totalClean += clean;
  report.push(`${l.padEnd(6)} já-ok: ${String(clean).padStart(4)} | spans restaurados: ${String(restored).padStart(4)} | nomes consertados: ${String(renamed).padStart(4)} | removidas: ${dropped}`);
  if (APPLY && (restored || renamed || dropped)) fs.writeFileSync(file, JSON.stringify(dict, null, 2) + '\n', 'utf8');
}
console.log(report.join('\n'));
console.log(`TOTAL: ${totalRestored} entradas com spans restaurados, ${totalRenamed} nomes de tag consertados, ${totalDropped} removidas, ${totalClean} já-ok ${APPLY ? '(GRAVADO)' : '(dry-run)'}`);
