#!/usr/bin/env node

/**
 * SCRIPT DE EXTRAÇÃO AUTOMÁTICA DE TEXTOS
 * Varre todas as páginas e componentes para extrair strings hardcoded
 * Gera keys de tradução automáticas
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Configurações
const CONFIG = {
  srcDir: './app',
  componentsDir: './components',
  outputDir: './locales',
  supportedLocales: ['pt-br', 'en', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'ar'],
  defaultLocale: 'pt-br'
};

// Padrões para encontrar textos
const TEXT_PATTERNS = [
  // JSX text content
  />([^<>{}\n\r]{3,})</g,
  // Button text
  /<button[^>]*>([^<>{}\n\r]{3,})<\/button>/gi,
  // Heading tags
  /<h[1-6][^>]*>([^<>{}\n\r]{3,})<\/h[1-6]>/gi,
  // Paragraph tags
  /<p[^>]*>([^<>{}\n\r]{3,})<\/p>/gi,
  // Span text
  /<span[^>]*>([^<>{}\n\r]{3,})<\/span>/gi,
  // Div text (cuidadoso)
  /<div[^>]*class="[^"]*text[^"]*"[^>]*>([^<>{}\n\r]{3,})<\/div>/gi,
  // Alt attributes
  /alt="([^"]{3,})"/gi,
  // Title attributes
  /title="([^"]{3,})"/gi,
  // Placeholder
  /placeholder="([^"]{3,})"/gi
];

// Padrões para IGNORAR
const IGNORE_PATTERNS = [
  /^[{]\s*.*[}]$/, // Expressões JSX
  /^[A-Z_][A-Z0-9_]*$/, // Constantes
  /^\s*$/, // Linhas vazias
  /^[0-9]+$/, // Números
  /^https?:\/\//, // URLs
  /^\.\.\./, // ...
  /^[{}()\[\]]$/, // Apenas brackets
  /className|style|onClick|onSubmit|href|src/i, // Atributos HTML
  /React|useState|useEffect|import|export|from/i, // Palavras reservadas
  /px|py|pt|pb|pl|pr|mt|mb|ml|mr|w-|h-|bg-|text-|flex|grid/i // Classes Tailwind
];

class TextExtractor {
  constructor() {
    this.extractedTexts = new Map();
    this.fileCount = 0;
  }

  // Extrai textos de um arquivo
  extractFromFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const texts = new Set();
      
      TEXT_PATTERNS.forEach(pattern => {
        let match;
        while ((match = pattern.exec(content)) !== null) {
          const text = match[1] || match[0];
          const cleanText = this.cleanText(text);
          
          if (this.isValidText(cleanText)) {
            texts.add(cleanText);
          }
        }
      });
      
      return Array.from(texts);
    } catch (error) {
      console.error(`Erro ao ler arquivo ${filePath}:`, error.message);
      return [];
    }
  }

  // Limpa o texto
  cleanText(text) {
    return text
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/[{}]/g, '')
      .replace(/^\s*\.\.\.\s*$/, '') // Remove ...
      .replace(/^\s*[{}]\s*$/, ''); // Remove brackets
  }

  // Verifica se o texto é válido para tradução
  isValidText(text) {
    if (!text || text.length < 3) return false;
    
    // Verifica se não deve ignorar
    for (const pattern of IGNORE_PATTERNS) {
      if (pattern.test(text)) return false;
    }
    
    // Verifica se contém letras (não apenas números/símbolos)
    return /[a-zA-Zá-úÁ-Úà-ùÀ-ùãõÃÕçÇ]/.test(text);
  }

  // Gera key automática baseada no texto
  generateKey(text, filePath) {
    const fileName = path.basename(filePath, path.extname(filePath));
    const cleanText = text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '_')
      .substring(0, 50);
    
    // Usa nome do arquivo + texto limpo
    const baseKey = `${fileName}.${cleanText}`;
    
    // Garante unicidade
    let key = baseKey;
    let counter = 1;
    while (this.extractedTexts.has(key)) {
      key = `${baseKey}_${counter}`;
      counter++;
    }
    
    return key;
  }

  // Processa todos os arquivos
  async processAllFiles() {
    const patterns = [
      `${CONFIG.srcDir}/**/*.{tsx,ts,jsx,js}`,
      `${CONFIG.componentsDir}/**/*.{tsx,ts,jsx,js}`
    ];
    
    for (const pattern of patterns) {
      const files = glob.sync(pattern);
      
      for (const filePath of files) {
        console.log(`Processando: ${filePath}`);
        const texts = this.extractFromFile(filePath);
        
        texts.forEach(text => {
          const key = this.generateKey(text, filePath);
          this.extractedTexts.set(key, {
            text,
            file: filePath,
            key
          });
        });
        
        this.fileCount++;
      }
    }
    
    console.log(`\n✅ Processados ${this.fileCount} arquivos`);
    console.log(`✅ Extraídos ${this.extractedTexts.size} textos`);
  }

  // Gera arquivos de tradução
  generateTranslationFiles() {
    // Cria diretório de locales se não existir
    if (!fs.existsSync(CONFIG.outputDir)) {
      fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }
    
    // Gera para cada locale
    CONFIG.supportedLocales.forEach(locale => {
      const translations = {};
      
      this.extractedTexts.forEach(({ text, key }) => {
        if (locale === CONFIG.defaultLocale) {
          // Locale padrão usa o texto original
          translations[key] = text;
        } else {
          // Outros locales ficam vazios para tradução manual
          translations[key] = ''; // Placeholder para tradução
        }
      });
      
      const filePath = path.join(CONFIG.outputDir, locale, 'extracted.json');
      const dirPath = path.dirname(filePath);
      
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      fs.writeFileSync(filePath, JSON.stringify(translations, null, 2), 'utf8');
      console.log(`📝 Gerado: ${filePath} (${Object.keys(translations).length} keys)`);
    });
  }

  // Gera CSV para tradutores
  generateCSV() {
    const csvLines = ['key,pt-br,en,es,fr,de,it,ja,ko,ar,context'];
    
    this.extractedTexts.forEach(({ text, key, file }) => {
      const context = path.relative('.', file);
      const row = [
        `"${key}"`,
        `"${text}"`, // pt-br (original)
        '""', // en
        '""', // es
        '""', // fr
        '""', // de
        '""', // it
        '""', // ja
        '""', // ko
        '""', // ar
        `"${context}"` // context
      ];
      csvLines.push(row.join(','));
    });
    
    const csvPath = './translations_to_review.csv';
    fs.writeFileSync(csvPath, csvLines.join('\n'), 'utf8');
    console.log(`📊 Gerado CSV para tradução: ${csvPath}`);
  }

  // Executa tudo
  async run() {
    console.log('🚀 Iniciando extração automática de textos...\n');
    
    await this.processAllFiles();
    this.generateTranslationFiles();
    this.generateCSV();
    
    console.log('\n✨ Extração concluída com sucesso!');
    console.log('\n📋 Próximos passos:');
    console.log('1. Revise o arquivo translations_to_review.csv');
    console.log('2. Preencha as traduções');
    console.log('3. Importe o CSV de volta para os arquivos JSON');
    console.log('4. Execute o script de substituição automática');
  }
}

// Executa o script
const extractor = new TextExtractor();
extractor.run().catch(console.error);

export default TextExtractor;
