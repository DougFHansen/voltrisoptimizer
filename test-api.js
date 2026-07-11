#!/usr/bin/env node

// Teste simples da API Key OpenAI
import OpenAI from 'openai';

// Carrega .env.local
import fs from 'fs';
import path from 'path';

const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  const lines = content.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.startsWith('OPENAI_API_KEY')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').trim();
        const cleanValue = value.replace(/^"|"$/g, '');
        process.env[key.trim()] = cleanValue;
      }
    }
  }
}

const apiKey = process.env.OPENAI_API_KEY;
console.log(`🔑 Testando API Key: ${apiKey?.substring(0, 15)}...`);

const openai = new OpenAI({ apiKey });

async function testAPI() {
  try {
    console.log('📡 Enviando requisição de teste...');
    
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: 'Say "API working" in English' }
      ],
      max_tokens: 10
    });
    
    console.log('✅ API funcionando!');
    console.log(`📝 Resposta: ${response.choices[0].message.content}`);
    
  } catch (error) {
    console.error('❌ Erro na API:');
    console.error(`Status: ${error.status}`);
    console.error(`Message: ${error.message}`);
    
    if (error.status === 401) {
      console.log('\n💡 Soluções possíveis:');
      console.log('1. Verifique se a API Key está correta');
      console.log('2. Verifique se a API Key tem permissão para chat completions');
      console.log('3. Verifique se há saldo disponível na conta OpenAI');
      console.log('4. Tente gerar uma nova API Key em: https://platform.openai.com/account/api-keys');
    }
  }
}

testAPI();
