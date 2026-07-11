#!/usr/bin/env node

/**
 * SCRIPT DE SUBSTITUIÇÃO AUTOMÁTICA
 * Substitui strings hardcoded por chamadas de tradução
 * BASEADO NO CSV GERADO PELO SCRIPT ANTERIOR
 */

import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { glob } from 'glob';

class TextReplacer {
  constructor() {
    this.translations = new Map();
    this.fileCount = 0;
    this.replacementCount = 0;
  }

  // Carrega traduções do CSV
  async loadTranslations(csvPath) {
    return new Promise((resolve, reject) => {
      const translations = new Map();
      
      fs.createReadStream(csvPath)
        .pipe(csv())
        .on('data', (row) => {
          if (row.key && row['pt-br']) {
            translations.set(row.key, {
              original: row['pt-br'],
              key: row.key,
              file: row.context
            });
          }
        })
        .on('end', () => {
          this.translations = translations;
          console.log(`📥 Carregadas ${translations.size} traduções`);
          resolve();
        })
        .on('error', reject);
    });
  }

  // Processa um arquivo fazendo substituições
  processFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let fileReplacements = 0;

      // Para cada tradução, tenta substituir no arquivo
      this.translations.forEach(({ original, key }) => {
        // Padrões para encontrar o texto no arquivo
        const patterns = [
          // Texto direto em tags
          new RegExp(`>${this.escapeRegex(original)}<`, 'g'),
          // Em button
          new RegExp(`(<button[^>]*>)${this.escapeRegex(original)}(</button>)`, 'g'),
          // Em headings
          new RegExp(`(<h[1-6][^>]*>)${this.escapeRegex(original)}(</h[1-6]>)`, 'g'),
          // Em paragraphs
          new RegExp(`(<p[^>]*>)${this.escapeRegex(original)}(</p>)`, 'g'),
          // Em spans
          new RegExp(`(<span[^>]*>)${this.escapeRegex(original)}(</span>)`, 'g'),
          // Alt attributes
          new RegExp(`(alt=")${this.escapeRegex(original)}(")`, 'g'),
          // Title attributes
          new RegExp(`(title=")${this.escapeRegex(original)}(")`, 'g'),
          // Placeholder
          new RegExp(`(placeholder=")${this.escapeRegex(original)}(")`, 'g')
        ];

        patterns.forEach(pattern => {
          const matches = content.match(pattern);
          if (matches) {
            // Substitui pelo texto com tradução
            const replacement = pattern.source.includes('alt=') || 
                               pattern.source.includes('title=') || 
                               pattern.source.includes('placeholder=') ?
              `$1{t('${key}')}$2` :
              `>$1{t('${key}')}$2<`;
            
            content = content.replace(pattern, replacement);
            modified = true;
            fileReplacements += matches.length;
          }
        });
      });

      // Se o arquivo foi modificado, salva
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.replacementCount += fileReplacements;
        console.log(`✏️  ${filePath} (${fileReplacements} substituições)`);
        return true;
      }

      return false;
    } catch (error) {
      console.error(`Erro ao processar ${filePath}:`, error.message);
      return false;
    }
  }

  // Escapa regex para uso seguro
  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Adiciona import useTranslation se necessário
  addTranslationImport(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Verifica se já tem o import
      if (content.includes('useTranslation') || content.includes('I18nContext')) {
        return false;
      }

      // Verifica se é um componente React
      if (!content.includes('export default') && !content.includes('export const')) {
        return false;
      }

      // Encontra onde adicionar o import (após os imports existentes)
      const importRegex = /import[^;]+;/g;
      const imports = content.match(importRegex) || [];
      const lastImport = imports[imports.length - 1];

      if (lastImport) {
        const importStatement = "import { useTranslation } from '@/contexts/I18nContext';";
        content = content.replace(lastImport, `${lastImport}\n${importStatement}`);
        
        // Adiciona useTranslation no componente
        const componentMatch = content.match(/export default function (\w+)|export const (\w+)/);
        if (componentMatch) {
          const componentName = componentMatch[1] || componentMatch[2];
          const functionStart = content.indexOf(`function ${componentName}`) || 
                               content.indexOf(`const ${componentName}`);
          
          if (functionStart > -1) {
            const openingBrace = content.indexOf('{', functionStart);
            if (openingBrace > -1) {
              content = content.slice(0, openingBrace + 1) + 
                       '\n  const { t } = useTranslation(\'common\');' + 
                       content.slice(openingBrace + 1);
            }
          }
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`➕ Adicionado useTranslation em: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      console.error(`Erro ao adicionar import em ${filePath}:`, error.message);
      return false;
    }
  }

  // Processa todos os arquivos
  async processAllFiles() {
    const patterns = [
      './app/**/*.{tsx,ts,jsx,js}',
      './components/**/*.{tsx,ts,jsx,js}'
    ];
    
    for (const pattern of patterns) {
      const files = glob.sync(pattern);
      
      for (const filePath of files) {
        // Ignora arquivos de tradução
        if (filePath.includes('/locales/') || filePath.includes('/contexts/')) {
          continue;
        }

        this.fileCount++;
        
        // Primeiro adiciona import se necessário
        const importAdded = this.addTranslationImport(filePath);
        
        // Depois processa substituições
        const wasModified = this.processFile(filePath);
        
        if (importAdded || wasModified) {
          console.log(`📝 Modificado: ${filePath}`);
        }
      }
    }
  }

  // Gera relatório
  generateReport() {
    const report = {
      date: new Date().toISOString(),
      filesProcessed: this.fileCount,
      totalReplacements: this.replacementCount,
      translationsLoaded: this.translations.size,
      summary: `${this.fileCount} arquivos processados, ${this.replacementCount} substituições feitas`
    };

    fs.writeFileSync('./replacement-report.json', JSON.stringify(report, null, 2));
    console.log('\n📊 Relatório gerado: replacement-report.json');
    console.log(`📈 Resumo: ${report.summary}`);
  }

  // Executa tudo
  async run(csvPath = './translations_to_review.csv') {
    console.log('🚀 Iniciando substituição automática...\n');
    
    // Verifica se CSV existe
    if (!fs.existsSync(csvPath)) {
      console.error(`❌ Arquivo CSV não encontrado: ${csvPath}`);
      console.log('💡 Execute primeiro o script de extração: node scripts/extract-texts.js');
      return;
    }

    await this.loadTranslations(csvPath);
    await this.processAllFiles();
    this.generateReport();
    
    console.log('\n✨ Substituição concluída com sucesso!');
    console.log('\n📋 Próximos passos:');
    console.log('1. Teste a aplicação');
    console.log('2. Verifique se há erros de compilação');
    console.log('3. Ajuste manualmente se necessário');
    console.log('4. Commit das mudanças');
  }
}

// Executa o script
const replacer = new TextReplacer();
const csvPath = process.argv[2] || './translations_to_review.csv';
replacer.run(csvPath).catch(console.error);

export default TextReplacer;
