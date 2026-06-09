/**
 * Script para testar o endpoint de notificação em massa IndexNow
 * Uso: node scripts/test-indexnow-batch.js
 */

async function testIndexNowBatch() {
  try {
    console.log('🚀 Iniciando teste de notificação em massa IndexNow...');
    
    // Primeiro, listar todas as URLs que seriam enviadas
    console.log('📋 Listando URLs...');
    const listResponse = await fetch('http://localhost:3000/api/indexnow/batch');
    const listData = await listResponse.json();
    
    console.log(`✅ Total de URLs encontradas: ${listData.totalUrls}`);
    console.log(`📊 Primeiras 10 URLs:`, listData.urls.slice(0, 10));
    
    // Confirmar antes de enviar
    console.log('\n⚠️  Deseja enviar todas as URLs para IndexNow?');
    console.log('Isso notificará o Google/Bing sobre todas as páginas do site.');
    console.log('Pressione Ctrl+C para cancelar ou aguarde 5 segundos...');
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Enviar notificação em massa
    console.log('\n📤 Enviando notificação em massa para IndexNow...');
    const batchResponse = await fetch('http://localhost:3000/api/indexnow/batch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    
    const batchData = await batchResponse.json();
    
    if (batchResponse.ok) {
      console.log('✅ Sucesso!');
      console.log(`📊 Detalhes:`, batchData.details);
    } else {
      console.error('❌ Erro:', batchData);
    }
    
  } catch (error) {
    console.error('❌ Erro ao testar IndexNow batch:', error);
  }
}

// Executar teste
testIndexNowBatch();
