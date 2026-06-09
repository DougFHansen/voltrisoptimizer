#!/usr/bin/env node

/**
 * CORREÇÃO SIMPLES DE IMPORTS
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

class SimpleImportFixer {
  constructor() {
    this.fixed = 0;
  }

  async run() {
    console.log('🔧 CORRIGINDO IMPORTS...');
    
    const files = glob.sync('./app/**/*.{tsx,ts}');
    
    for (const filePath of files) {
      await this.fixFile(filePath);
    }
    
    console.log(`✅ ${this.fixed} arquivos corrigidos`);
  }

  async fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const original = content;
      
      // Move imports para o topo
      content = content.replace(/];\s*\n\s*import \{ useTranslation \} from '@\/contexts\/I18nContext';/g, '];\n\nimport { useTranslation } from \'@/contexts/I18nContext\';');
      content = content.replace(/\}\s*\n\s*import \{ useTranslation \} from '@\/contexts\/I18nContext';/g, '}\n\nimport { useTranslation } from \'@/contexts/I18nContext\';');
      
      if (content !== original) {
        fs.writeFileSync(filePath, content);
        this.fixed++;
        console.log(`✅ ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Erro em ${filePath}:`, error.message);
    }
  }
}

const fixer = new SimpleImportFixer();
fixer.run();
