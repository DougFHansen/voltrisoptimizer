#!/usr/bin/env node

/**
 * CORREÇÃO AUTOMÁTICA DE SINTAXE
 * Fix para erros gerados pelo script de substituição
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

class SyntaxFixer {
  constructor() {
    this.fixed = 0;
    this.errors = 0;
  }

  async run() {
    console.log('🔧 CORRIGINDO ERROS DE SINTAXE...');
    console.log('='.repeat(50));

    const patterns = [
      './app/**/*.{tsx,ts,jsx,js}',
      './components/**/*.{tsx,ts,jsx,js}'
    ];

    for (const pattern of patterns) {
      const files = glob.sync(pattern);
      
      for (const filePath of files) {
        await this.fixFile(filePath);
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log('📊 RELATÓRIO FINAL');
    console.log('='.repeat(50));
    console.log(`✅ Arquivos corrigidos: ${this.fixed}`);
    console.log(`❌ Erros: ${this.errors}`);
    console.log('='.repeat(50));
  }

  async fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Padrão 1: useTranslation dentro dos parâmetros da função
      const pattern1 = /export default function \w+\(\{\s*const \{ t \} = useTranslation\('[^']+'\);\s*([^}]+)\}/g;
      
      if (pattern1.test(content)) {
        content = content.replace(pattern1, (match, params) => {
          modified = true;
          const cleanParams = params.replace(/^\s+|\s+$/g, '').replace(/,$/, '');
          return `export default function ({\n  ${cleanParams}\n}) {\n  const { t } = useTranslation('common');`;
        });
      }

      // Padrão 2: useTranslation no meio dos parâmetros
      const pattern2 = /export default function \w+\(\{\s*([^}]+)\s*const \{ t \} = useTranslation\('[^']+'\);\s*([^}]+)\}/g;
      
      if (pattern2.test(content)) {
        content = content.replace(pattern2, (match, before, after) => {
          modified = true;
          const cleanBefore = before.replace(/^\s+|\s+$/g, '').replace(/,$/, '');
          const cleanAfter = after.replace(/^\s+|\s+$/g, '').replace(/,$/, '');
          const allParams = [cleanBefore, cleanAfter].filter(p => p).join(',\n  ');
          return `export default function ({\n  ${allParams}\n}) {\n  const { t } = useTranslation('common');`;
        });
      }

      // Padrão 3: useTranslation no início incorreto
      const pattern3 = /export default function \w+\(\{\s*const \{ t \} = useTranslation\('[^']+'\);\s*([^}]+)\s*:\s*[^}]+\}/g;
      
      if (pattern3.test(content)) {
        content = content.replace(pattern3, (match, params) => {
          modified = true;
          
          // Extrai o tipo/interface
          const typeMatch = match.match(/:\s*[^}]+\}/);
          const typePart = typeMatch ? typeMatch[0] : '';
          
          const cleanParams = params.replace(/^\s+|\s+$/g, '').replace(/,$/, '');
          
          if (typePart) {
            return `export default function ({\n  ${cleanParams}\n} ${typePart} {\n  const { t } = useTranslation('common');`;
          } else {
            return `export default function ({\n  ${cleanParams}\n}) {\n  const { t } = useTranslation('common');`;
          }
        });
      }

      // Padrão 4: Correção específica para AnimatedSection
      if (filePath.includes('AnimatedSection')) {
        const animatedPattern = /export default function AnimatedSection\(\{\s*const \{ t \} = useTranslation\('common'\);\s*children[^}]+\}/g;
        if (animatedPattern.test(content)) {
          content = content.replace(animatedPattern, `export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true
}: AnimatedSectionProps) {
  const { t } = useTranslation('common');`);
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixed++;
        console.log(`✅ Corrigido: ${filePath}`);
      }

    } catch (error) {
      this.errors++;
      console.error(`❌ Erro em ${filePath}:`, error.message);
    }
  }
}

// Executa
const fixer = new SyntaxFixer();
fixer.run();
