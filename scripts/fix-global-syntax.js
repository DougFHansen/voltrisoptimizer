#!/usr/bin/env node

/**
 * CORREÇÃO GLOBAL DE SINTAXE
 * Fix para imports no lugar errado
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

class GlobalSyntaxFixer {
  constructor() {
    this.fixed = 0;
    this.errors = 0;
  }

  async run() {
    console.log('🔧 CORREÇÃO GLOBAL DE SINTAXE...');
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

      // Padrão 1: import no meio de arrays/objetos
      const pattern1 = /];\s*\n\s*import \{ useTranslation \} from '@\/contexts\/I18nContext';/g;
      
      if (pattern1.test(content)) {
        content = content.replace(pattern1, '];\n\nimport { useTranslation } from \'@/contexts/I18nContext\';\n');
        modified = true;
      }

      // Padrão 2: import no meio de funções
      const pattern2 = /\}\s*\n\s*import \{ useTranslation \} from '@\/contexts\/I18nContext';/g;
      
      if (pattern2.test(content)) {
        content = content.replace(pattern2, '}\n\nimport { useTranslation } from \'@/contexts/I18nContext\';\n');
        modified = true;
      }

      // Padrão 3: useTranslation no lugar errado na função
      const pattern3 = /function \w+\(\{\s*const \{ t \} = useTranslation\('common'\);\s*([^}]+)\s*\}):\s*[^{]+\s*\{/g;
      
      if (pattern3.test(content)) {
        content = content.replace(pattern3, (match, params) => {
          modified = true;
          // Extrai o tipo do final
          const typeMatch = match.match(/}:\s*([^{]+)\s*\{/);
          const typePart = typeMatch ? `: ${typeMatch[1]}` : '';
          
          return `function ({\n  ${params.replace(/,$/, '')}\n})${typePart} {\n  const { t } = useTranslation('common');`;
        });
      }

      // Padrão 4: Correção específica para dashboard layout
      if (filePath.includes('dashboard/layout')) {
        const dashboardPattern = /function DashboardLayoutInner\(\{\s*const \{ t \} = useTranslation\('common'\);\s*children \}: \{ children: React\.Node \} \) \{/g;
        if (dashboardPattern.test(content)) {
          content = content.replace(dashboardPattern, `function DashboardLayoutInner({\n  children\n}: { children: React.ReactNode }) {\n  const { t } = useTranslation('common');`);
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
const fixer = new GlobalSyntaxFixer();
fixer.run();
