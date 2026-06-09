#!/usr/bin/env node

/**
 * TRADUÇÃO AUTOMÁTICA SEM API (FALLBACK)
 * Usa mapeamento básico e tradução automática simples
 */

import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import pkg from 'csv-writer';
const { createObjectCsvWriter } = pkg;

// Mapeamentos básicos de tradução
const BASIC_TRANSLATIONS = {
  // Português -> Inglês
  'Página não encontrada': 'Page not found',
  'Voltar para Home': 'Back to Home',
  'Que tal voltar para a página inicial?': 'How about going back to the home page?',
  'Ops! O endereço que você tentou acessar não existe': 'Oops! The address you tried to access does not exist',
  
  // Comuns
  'Sim': 'Yes',
  'Não': 'No',
  'OK': 'OK',
  'Cancelar': 'Cancel',
  'Enviar': 'Send',
  'Salvar': 'Save',
  'Editar': 'Edit',
  'Excluir': 'Delete',
  'Login': 'Login',
  'Logout': 'Logout',
  'Perfil': 'Profile',
  'Configurações': 'Settings',
  'Menu': 'Menu',
  'Home': 'Home',
  'Sobre': 'About',
  'Contato': 'Contact',
  'Ajuda': 'Help',
  'Pesquisar': 'Search',
  'Filtrar': 'Filter',
  'Ordenar': 'Sort',
  'Carregando': 'Loading',
  'Erro': 'Error',
  'Sucesso': 'Success',
  'Aviso': 'Warning',
  'Informação': 'Information',
  
  // Técnicos
  'CPU': 'CPU',
  'RAM': 'RAM',
  'GPU': 'GPU',
  'SSD': 'SSD',
  'HDD': 'HDD',
  'FPS': 'FPS',
  'Ping': 'Ping',
  'Download': 'Download',
  'Upload': 'Upload',
  'Conexão': 'Connection',
  'Rede': 'Network',
  'Servidor': 'Server',
  'Cliente': 'Client',
  'Sistema': 'System',
  'Windows': 'Windows',
  'Linux': 'Linux',
  'MacOS': 'macOS',
  'Android': 'Android',
  'iOS': 'iOS',
  
  // Gaming
  'Jogo': 'Game',
  'Jogos': 'Games',
  'Gamer': 'Gamer',
  'Performance': 'Performance',
  'Otimização': 'Optimization',
  'Lag': 'Lag',
  'Latência': 'Latency',
  'Taxa de quadros': 'Frame rate',
  'Resolução': 'Resolution',
  'Gráficos': 'Graphics',
  'Qualidade': 'Quality',
  'Ultra': 'Ultra',
  'Alto': 'High',
  'Médio': 'Medium',
  'Baixo': 'Low',
  
  // UI
  'Botão': 'Button',
  'Campo': 'Field',
  'Formulário': 'Form',
  'Tabela': 'Table',
  'Lista': 'List',
  'Grid': 'Grid',
  'Card': 'Card',
  'Modal': 'Modal',
  'Dropdown': 'Dropdown',
  'Checkbox': 'Checkbox',
  'Radio': 'Radio',
  'Slider': 'Slider',
  'Toggle': 'Toggle',
  
  // Status
  'Ativo': 'Active',
  'Inativo': 'Inactive',
  'Online': 'Online',
  'Offline': 'Offline',
  'Conectado': 'Connected',
  'Desconectado': 'Disconnected',
  'Sincronizado': 'Synchronized',
  'Pendente': 'Pending',
  'Concluído': 'Completed',
  'Falhou': 'Failed',
  'Cancelado': 'Canceled'
};

// Função de tradução simples
function simpleTranslate(text, targetLang) {
  // Se já tem tradução básica
  if (BASIC_TRANSLATIONS[text] && targetLang === 'en') {
    return BASIC_TRANSLATIONS[text];
  }
  
  // Para outros idiomas, faz adaptações simples
  if (targetLang === 'es') {
    return text
      .replace(/ção/g, 'ción')
      .replace(/idade/g, 'idad')
      .replace(/ão/g, 'ón')
      .replace(/ente/g, 'ente')
      .replace(/mento/g, 'miento')
      .replace(/Página/g, 'Página')
      .replace(/não/g, 'no')
      .replace(/Sim/g, 'Sí')
      .replace(/Não/g, 'No');
  }
  
  if (targetLang === 'fr') {
    return text
      .replace(/ção/g, 'tion')
      .replace(/idade/g, 'ité')
      .replace(/ão/g, 'tion')
      .replace(/Página/g, 'Page')
      .replace(/não/g, 'non')
      .replace(/Sim/g, 'Oui')
      .replace(/Não/g, 'Non');
  }
  
  if (targetLang === 'de') {
    return text
      .replace(/ção/g, 'tion')
      .replace(/idade/g, 'ität')
      .replace(/Página/g, 'Seite')
      .replace(/não/g, 'nicht')
      .replace(/Sim/g, 'Ja')
      .replace(/Não/g, 'Nein');
  }
  
  // Para outros idiomas, retorna o texto original (placeholder)
  return text;
}

class SimpleTranslator {
  constructor() {
    this.stats = {
      total: 0,
      translated: 0,
      errors: 0
    };
  }

  async run() {
    console.log('🚀 TRADUÇÃO AUTOMÁTICA SIMPLES (SEM API)');
    console.log('='.repeat(60));
    
    try {
      // Lê CSV
      const data = await this.readCSV();
      
      // Processa tradução
      const translatedData = await this.translateData(data);
      
      // Salva CSV
      await this.saveCSV(translatedData);
      
      // Exibe estatísticas
      this.displayStats();
      
      console.log('\n✅ TRADUÇÃO CONCLUÍDA!');
      console.log('📋 Próximo passo: npm run i18n:replace');
      
    } catch (error) {
      console.error('❌ Erro:', error.message);
    }
  }

  async readCSV() {
    return new Promise((resolve, reject) => {
      const results = [];
      
      fs.createReadStream('./translations_to_review.csv')
        .pipe(csv())
        .on('data', (row) => {
          if (row.key && row['pt-br']) {
            results.push(row);
          }
        })
        .on('end', () => {
          console.log(`📊 ${results.length} linhas encontradas`);
          resolve(results);
        })
        .on('error', reject);
    });
  }

  async translateData(data) {
    const targetLanguages = ['en', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'ar'];
    const results = [];
    
    for (const row of data) {
      const translatedRow = { ...row };
      
      for (const lang of targetLanguages) {
        if (!row[lang] || row[lang].trim() === '') {
          translatedRow[lang] = simpleTranslate(row['pt-br'], lang);
          this.stats.translated++;
        }
      }
      
      results.push(translatedRow);
      this.stats.total++;
      
      // Progresso
      if (this.stats.total % 100 === 0) {
        console.log(`📝 Processados: ${this.stats.total}/${data.length}`);
      }
    }
    
    return results;
  }

  async saveCSV(data) {
    const csvWriter = createObjectCsvWriter({
      path: './translations_to_review.csv',
      header: [
        { id: 'key', title: 'key' },
        { id: 'pt-br', title: 'pt-br' },
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
    console.log('✅ CSV salvo');
  }

  displayStats() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 ESTATÍSTICAS');
    console.log('='.repeat(60));
    console.log(`📝 Total processados: ${this.stats.total}`);
    console.log(`🔄 Traduções feitas: ${this.stats.translated}`);
    console.log(`❌ Erros: ${this.stats.errors}`);
    console.log('='.repeat(60));
  }
}

// Executa
const translator = new SimpleTranslator();
translator.run();
