#!/usr/bin/env node

import fs from 'fs';

const filesToFix = [
  './app/cluster-conteudo/page.tsx',
  './app/como-desativar-windows-update-permanente/page.tsx',
  './app/como-remover-arquivos-duplicados-windows-11/page.tsx'
];

for (const filePath of filesToFix) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove linhas em branco e move import para o topo
    content = content.replace(/\n\s*\n\s*\n\s*import \{ useTranslation \} from '@\/contexts\/I18nContext';/g, '');
    
    // Adiciona import no topo (depois do último import existente)
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex > -1) {
      const insertPosition = content.indexOf('\n', lastImportIndex) + 1;
      content = content.slice(0, insertPosition) + 
                '\nimport { useTranslation } from \'@/contexts/I18nContext\';' + 
                content.slice(insertPosition);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Corrigido: ${filePath}`);
  }
}

console.log('🎉 Correções finais concluídas!');
