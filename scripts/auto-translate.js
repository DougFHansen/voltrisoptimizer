#!/usr/bin/env node

/**
 * SISTEMA AUTOMÁTICO DE TRADUÇÃO I18N
 * Engenheiro Sênior Especialista em Internacionalização
 * 
 * Funcionalidades:
 * - Lê CSV existente
 * - Detecta traduções faltantes
 * - Traduz automaticamente com OpenAI
 * - Não sobrescreve traduções existentes
 * - Processamento em lote seguro
 * - Retry automático em caso de erro
 * - Logs detalhados de progresso
 */

import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import pkg from 'csv-writer';
const { createObjectCsvWriter } = pkg;
import OpenAI from 'openai';

// Carrega variáveis de ambiente do .env.local
function loadEnvFile() {
  const envPath = path.join(process.cwd(), '.env.local');
  
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    const lines = content.split('\n');
    
    console.log(`📖 Lendo .env.local: ${envPath}`);
    console.log(`📝 ${lines.length} linhas encontradas`);
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        if (trimmed.startsWith('OPENAI_API_KEY')) {
          console.log(`🔑 Encontrada: ${trimmed.substring(0, 20)}...`);
        }
        
        const [key, ...valueParts] = trimmed.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=').trim();
          // Remove aspas se existirem
          const cleanValue = value.replace(/^"|"$/g, '');
          process.env[key.trim()] = cleanValue;
        }
      }
    }
    
    console.log('✅ .env.local carregado');
    console.log(`🔑 API Key final: ${process.env.OPENAI_API_KEY?.substring(0, 15)}...`);
  } else {
    console.log('⚠️ .env.local não encontrado');
  }
}

// Carrega variáveis de ambiente
loadEnvFile();

// Configurações
const CONFIG = {
  csvPath: './translations_to_review.csv',
  outputPath: './translations_to_review.csv',
  batchSize: 10, // Processa 10 textos por vez para controlar custos
  maxRetries: 3,
  delayBetweenBatches: 1000, // 1 segundo entre batches
  targetLanguages: ['en', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'ar'],
  openAI: {
    model: 'gpt-3.5-turbo',
    maxTokens: 1000,
    temperature: 0.3
  }
};

class AutoTranslator {
  constructor() {
    // Verifica se API Key foi carregada
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey || apiKey.includes('xxxx') || apiKey === 'sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx') {
      console.error('❌ API Key inválida ou não configurada!');
      console.error('💡 Configure OPENAI_API_KEY no .env.local');
      console.error('📝 Exemplo: OPENAI_API_KEY=sk-proj-SUA_KEY_REAL_AQUI');
      process.exit(1);
    }
    
    console.log(`✅ API Key configurada: ${apiKey.substring(0, 10)}...${apiKey.substring(-5)}`);
    
    this.openai = new OpenAI({
      apiKey: apiKey
    });
    this.stats = {
      total: 0,
      alreadyTranslated: 0,
      newlyTranslated: 0,
      errors: 0,
      skipped: 0
    };
    this.startTime = Date.now();
  }

  // Valida estrutura do CSV antes de processar
  async validateCSV() {
    console.log('🔍 Validando estrutura do CSV...');
    
    if (!fs.existsSync(CONFIG.csvPath)) {
      throw new Error(`❌ Arquivo CSV não encontrado: ${CONFIG.csvPath}`);
    }

    const content = fs.readFileSync(CONFIG.csvPath, 'utf8');
    const lines = content.split('\n');
    
    if (lines.length < 2) {
      throw new Error('❌ CSV parece estar vazio ou inválido');
    }

    const header = lines[0].toLowerCase();
    const requiredColumns = ['key', 'pt', ...CONFIG.targetLanguages];
    
    for (const col of requiredColumns) {
      if (!header.includes(col)) {
        throw new Error(`❌ Coluna obrigatória não encontrada: ${col}`);
      }
    }

    console.log('✅ Estrutura do CSV validada');
    return true;
  }

  // Lê o CSV e retorna array de objetos
  async readCSV() {
    console.log('📖 Lendo arquivo CSV...');
    
    return new Promise((resolve, reject) => {
      const results = [];
      
      fs.createReadStream(CONFIG.csvPath)
        .pipe(csv())
        .on('data', (row) => {
          // Valida linha básica - usa 'pt-br' em vez de 'pt'
          if (row.key && row['pt-br']) {
            results.push(row);
          }
        })
        .on('end', () => {
          console.log(`📊 ${results.length} linhas válidas encontradas`);
          resolve(results);
        })
        .on('error', reject);
    });
  }

  // Detecta quais traduções estão faltando
  detectMissingTranslations(data) {
    console.log('🔍 Detectando traduções faltantes...');
    
    const missing = [];
    
    for (const row of data) {
      const missingLanguages = [];
      
      for (const lang of CONFIG.targetLanguages) {
        if (!row[lang] || row[lang].trim() === '') {
          missingLanguages.push(lang);
        }
      }
      
      if (missingLanguages.length > 0) {
        missing.push({
          key: row.key,
          pt: row['pt-br'], // Usa 'pt-br'
          missingLanguages,
          context: row.context || ''
        });
      }
    }
    
    this.stats.total = data.length;
    this.stats.alreadyTranslated = data.length - missing.length;
    
    console.log(`📈 ${missing.length} textos precisam de tradução`);
    console.log(`✅ ${this.stats.alreadyTranslated} textos já estão traduzidos`);
    
    return missing;
  }

  // Traduz texto usando OpenAI com retry automático
  async translateWithRetry(ptText, missingLanguages, retryCount = 0) {
    try {
      const prompt = `Traduza o texto abaixo para múltiplos idiomas.
Mantenha tom natural, fluente e profissional.
Adapte para contexto de site/app moderno.
Evite tradução literal.
Seja consistente com termos comuns (login, dashboard, settings, menu, etc).
NÃO adicione explicações ou comentários.
Retorne APENAS JSON válido.

Texto: "${ptText}"

Retorne no formato EXATO:
{
  "en": "...",
  "es": "...", 
  "fr": "...",
  "de": "...",
  "it": "...",
  "ja": "...",
  "ko": "...",
  "ar": "..."
}`;

      const response = await this.openai.chat.completions.create({
        model: CONFIG.openAI.model,
        messages: [
          {
            role: 'system',
            content: 'Você é um tradutor profissional especializado em aplicações web modernas. Sempre retorne JSON válido sem comentários.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: CONFIG.openAI.maxTokens,
        temperature: CONFIG.openAI.temperature
      });

      const content = response.choices[0].message.content.trim();
      
      // Tenta fazer parse do JSON
      let translations;
      try {
        // Remove possíveis marcações de código
        const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim();
        translations = JSON.parse(cleanContent);
      } catch (parseError) {
        console.warn('⚠️ Resposta da IA não é JSON válido, tentando extrair...');
        // Fallback: tenta extrair manualmente
        translations = this.extractTranslationsFromText(content);
      }

      // Valida se todos os idiomas estão presentes
      for (const lang of CONFIG.targetLanguages) {
        if (!translations[lang]) {
          console.warn(`⚠️ Idioma ${lang} não encontrado na resposta`);
          translations[lang] = ''; // Deixa vazio para retry posterior
        }
      }

      return translations;

    } catch (error) {
      if (retryCount < CONFIG.maxRetries) {
        console.warn(`⚠️ Erro na tradução, tentando novamente (${retryCount + 1}/${CONFIG.maxRetries})...`);
        await this.sleep(2000 * (retryCount + 1)); // Backoff exponencial
        return this.translateWithRetry(ptText, missingLanguages, retryCount + 1);
      }
      
      console.error(`❌ Falha na tradução após ${CONFIG.maxRetries} tentativas:`, error.message);
      throw error;
    }
  }

  // Fallback para extrair traduções de texto não-JSON
  extractTranslationsFromText(text) {
    const translations = {};
    
    for (const lang of CONFIG.targetLanguages) {
      const pattern = new RegExp(`"${lang}"\\s*:\\s*"([^"]*)"`, 'i');
      const match = text.match(pattern);
      translations[lang] = match ? match[1] : '';
    }
    
    return translations;
  }

  // Processa um lote de traduções
  async processBatch(batch) {
    console.log(`🔄 Processando lote de ${batch.length} textos...`);
    
    const results = [];
    
    for (const item of batch) {
      try {
        console.log(`📝 Traduzindo: ${item.key.substring(0, 50)}...`);
        
        const translations = await this.translateWithRetry(item.pt, item.missingLanguages);
        
        // Mescla com traduções existentes
        const result = {
          key: item.key,
          pt: item.pt,
          context: item.context,
          ...translations
        };
        
        results.push(result);
        this.stats.newlyTranslated++;
        
        console.log(`✅ Concluído: ${item.key}`);
        
      } catch (error) {
        console.error(`❌ Erro ao traduzir ${item.key}:`, error.message);
        this.stats.errors++;
        
        // Mantém linha original em caso de erro
        results.push({
          key: item.key,
          pt: item.pt,
          context: item.context,
          // Deixa outros idiomas vazios
          ...Object.fromEntries(CONFIG.targetLanguages.map(lang => [lang, '']))
        });
      }
      
      // Pequeno delay entre requisições
      await this.sleep(500);
    }
    
    return results;
  }

  // Salva CSV atualizado
  async saveCSV(data) {
    console.log('💾 Salvando CSV atualizado...');
    
    const csvWriter = createObjectCsvWriter({
      path: CONFIG.outputPath,
      header: [
        { id: 'key', title: 'key' },
        { id: 'pt', title: 'pt-br' },
        { id: 'en', title: 'en' },
        { id: 'es', title: 'es' },
        { id: 'fr', title: 'fr' },
        { id: 'de', title: 'de' },
        { id: 'it', title: 'it' },
        { id: 'ja', title: 'ja' },
        { id: 'ko', title: 'ko' },
        { id: 'ar', title: 'ar' },
        { id: 'context', title: 'context' }
      ]
    });

    await csvWriter.writeRecords(data);
    console.log('✅ CSV salvo com sucesso');
  }

  // Função utilitária de delay
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Exibe estatísticas finais
  displayStats() {
    const duration = Date.now() - this.startTime;
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    
    console.log('\n' + '='.repeat(60));
    console.log('📊 ESTATÍSTICAS FINAIS');
    console.log('='.repeat(60));
    console.log(`⏱️  Tempo total: ${minutes}m ${seconds}s`);
    console.log(`📝 Total de textos: ${this.stats.total}`);
    console.log(`✅ Já traduzidos: ${this.stats.alreadyTranslated}`);
    console.log(`🆕 Novamente traduzidos: ${this.stats.newlyTranslated}`);
    console.log(`❌ Erros: ${this.stats.errors}`);
    console.log(`⏭️  Ignorados: ${this.stats.skipped}`);
    console.log(`📈 Taxa de sucesso: ${((this.stats.newlyTranslated / (this.stats.newlyTranslated + this.stats.errors)) * 100).toFixed(1)}%`);
    console.log('='.repeat(60));
  }

  // Executa todo o processo
  async run() {
    try {
      console.log('🚀 INICIANDO TRADUÇÃO AUTOMÁTICA I18N');
      console.log('='.repeat(60));
      
      // 1. Valida CSV
      await this.validateCSV();
      
      // 2. Lê dados
      const data = await this.readCSV();
      
      // 3. Detecta faltantes
      const missing = this.detectMissingTranslations(data);
      
      if (missing.length === 0) {
        console.log('🎉 Todos os textos já estão traduzidos!');
        this.displayStats();
        return;
      }
      
      // 4. Processa em lotes
      const results = [];
      const batches = [];
      
      for (let i = 0; i < missing.length; i += CONFIG.batchSize) {
        batches.push(missing.slice(i, i + CONFIG.batchSize));
      }
      
      console.log(`📦 Processando ${batches.length} lotes de ${CONFIG.batchSize} textos...`);
      
      for (let i = 0; i < batches.length; i++) {
        const batch = batches[i];
        console.log(`\n📦 Lote ${i + 1}/${batches.length}`);
        
        const batchResults = await this.processBatch(batch);
        results.push(...batchResults);
        
        // Delay entre lotes para não sobrecarregar a API
        if (i < batches.length - 1) {
          console.log(`⏳ Aguardando ${CONFIG.delayBetweenBatches}ms antes do próximo lote...`);
          await this.sleep(CONFIG.delayBetweenBatches);
        }
      }
      
      // 5. Mescla com dados existentes
      const finalData = [];
      
      for (const originalRow of data) {
        const translatedRow = results.find(r => r.key === originalRow.key);
        
        if (translatedRow) {
          // Usa traduzido - mantém 'pt-br' original
          const mergedRow = { ...translatedRow };
          mergedRow['pt-br'] = originalRow['pt-br']; // Garante que pt-br original seja mantido
          finalData.push(mergedRow);
        } else {
          // Mantém original (já estava traduzido)
          finalData.push(originalRow);
        }
      }
      
      // 6. Salva CSV atualizado
      await this.saveCSV(finalData);
      
      // 7. Exibe estatísticas
      this.displayStats();
      
      console.log('\n🎉 TRADUÇÃO CONCLUÍDA COM SUCESSO!');
      console.log('📋 Próximo passo: npm run i18n:replace');
      
    } catch (error) {
      console.error('\n❌ ERRO FATAL:', error.message);
      process.exit(1);
    }
  }
}

// Executa o script
const translator = new AutoTranslator();
translator.run().catch(console.error);

export default AutoTranslator;
