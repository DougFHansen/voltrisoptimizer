#!/usr/bin/env node

// Script para testar API de traduções
import http from 'http';

const testTranslations = async (locale) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: `/api/translations/${locale}`,
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ status: res.statusCode, data: json });
        } catch (e) {
          resolve({ status: res.statusCode, error: 'Invalid JSON', data });
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.end();
  });
};

const main = async () => {
  const locales = ['en', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'ar', 'pt-br'];
  
  console.log('🔍 Testando API de traduções...\n');
  
  for (const locale of locales) {
    try {
      const result = await testTranslations(locale);
      
      if (result.status === 200) {
        const hasTranslations = Object.keys(result.data).length > 0;
        console.log(`✅ ${locale}: ${hasTranslations ? 'OK' : 'VAZIO'}`);
      } else {
        console.log(`❌ ${locale}: Status ${result.status}`);
      }
    } catch (error) {
      console.log(`❌ ${locale}: Erro - ${error.message}`);
    }
  }
};

main();
