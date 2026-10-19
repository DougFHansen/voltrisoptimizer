import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import ts from 'typescript';

// Focused audit: which visible UI strings in login + dashboard surfaces are NOT
// present as keys in the current dictionary (strings.en.json). Uses the same
// extraction heuristics as extract-site-strings.mjs.
const require = createRequire(import.meta.url);
const { fileURLToPath } = require('url');
const REPO = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const ROOTS = [
  'app/[locale]/login',
  'app/dashboard',
  'app/auth',
  'components/dashboard',
  'components/notifications',
  'components/tickets',
  'app/context',
];

const DISPLAY_KEYS = new Set(['title','description','desc','summary','subtitle','text','content','body','label','heading','question','answer','cta','buttontext','btntext','caption','tagline','message','role','location','name','placeholder','helper','button','btn','ok','cancel','confirm','error','success','warning','tooltip','empty','emptyText','confirmLabel','cancelLabel','title2']);
const norm = (v) => String(v).replace(/\s+/g, ' ').trim();
function isProse(s){ const t=s.trim(); if(t.length<2)return false; if(!/[A-Za-z]{2}/.test(t))return false; if(/^https?:\/\//i.test(t))return false; if(/^[#/].+/.test(t))return false; if(/[{}<>`]|=>|\$\{/.test(t))return false; if(/^[a-z0-9]+(-[a-z0-9]+)+$/.test(t))return false; if(/^[\w.-]+\.(png|jpe?g|svg|webp|ico|gif|json|xml|ts|tsx|js|css|mp3|wav)$/i.test(t))return false; return true; }
function add(set,raw){ if(typeof raw!=='string')return; const v=norm(raw); if(v&&isProse(v))set.add(v); }
function collectDeep(node,set){ if(!node)return; if(ts.isStringLiteral(node)||ts.isNoSubstitutionTemplateLiteral(node)){add(set,node.text);return;} if(ts.isArrayLiteralExpression(node)){node.elements.forEach(e=>collectDeep(e,set));return;} node.forEachChild(c=>collectDeep(c,set)); }
function collectDisplay(obj,set){ for(const p of obj.properties){ if(!ts.isPropertyAssignment(p))continue; const name=p.name.getText().replace(/^['"]|['"]$/g,'').toLowerCase(); if(!DISPLAY_KEYS.has(name))continue; const i=p.initializer; if(ts.isStringLiteral(i)||ts.isNoSubstitutionTemplateLiteral(i))add(set,i.text); } }
function extract(file){ const set=new Set(); let src; try{ src=ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true);}catch{ return set;} function visit(n){ if(ts.isJsxText(n))add(set,n.text); if(ts.isObjectLiteralExpression(n))collectDisplay(n,set); if(ts.isJsxAttribute(n)){ const an=n.name.getText(); if(['placeholder','aria-label','title','alt','label'].includes(an)&&n.initializer&&ts.isStringLiteral(n.initializer))add(set,n.initializer.text);} n.forEachChild(visit);} visit(src); return set; }
function walk(dir,out=[]){ if(!fs.existsSync(dir))return out; for(const e of fs.readdirSync(dir,{withFileTypes:true})){ const full=path.join(dir,e.name); if(e.isDirectory()){ if(['node_modules','.next','.git'].includes(e.name))continue; walk(full,out);} else if(/\.tsx?$/.test(e.name))out.push(full);} return out; }

const dictSet = new Set(JSON.parse(fs.readFileSync(path.join(REPO,'lib/guides-i18n/strings.en.json'),'utf8')).map(norm));

const all = new Set();
let fileCount = 0;
for (const r of ROOTS) for (const f of walk(path.join(REPO, r))) { fileCount++; for (const s of extract(f)) all.add(s); }
const missing = [...all].filter((s) => !dictSet.has(s));

console.log('arquivos analisados:', fileCount);
console.log('candidatas visiveis:', all.size);
console.log('JA no dicionario   :', all.size - missing.length);
console.log('FALTANDO (ficam EN):', missing.length);
console.log('\n--- amostra de faltando (ate 60) ---');
missing.slice(0, 60).forEach((s) => console.log('  * ' + s.slice(0, 80)));
fs.writeFileSync(path.join(REPO,'scripts/_missing.json'), JSON.stringify(missing, null, 2));
