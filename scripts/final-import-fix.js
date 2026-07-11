#!/usr/bin/env node

/**
 * CORREÇÃO FINAL DE IMPORTS
 */

import fs from 'fs';
import { glob } from 'glob';

const filesToFix = [
  './app/cluster-conteudo/page.tsx',
  './app/como-desativar-windows-update-permanente/page.tsx',
  './app/como-remover-arquivos-duplicados-windows-11/page.tsx',
  './app/corrigir-100-disco-windows-11/page.tsx'
];

for (const filePath of filesToFix) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Move import para depois do array/objeto
    content = content.replace(/(\];\s*\n\s*)(import \{ useTranslation \} from '@\/contexts\/I18nContext';)/g, '$1\n\n$2');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Corrigido: ${filePath}`);
  }
}

console.log('🎉 Correções finais concluídas!');
