/**
 * Script para enviar notificação em massa de todas as URLs para IndexNow
 * Uso: node scripts/submit-indexnow-batch.js
 * Este script notifica o Google/Bing sobre todas as páginas do site
 */

async function submitIndexNowBatch() {
  try {
    console.log('🚀 Iniciando envio em massa para IndexNow...');
    
    // Enviar notificação em massa (gera URLs automaticamente)
    const response = await fetch('https://www.voltrisoptimizer.com/api/indexnow/batch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Sucesso!');
      console.log(`📊 ${data.message}`);
      console.log(`📈 Detalhes:`, data.details);
    } else {
      console.error('❌ Erro:', data);
    }
    
  } catch (error) {
    console.error('❌ Erro ao enviar para IndexNow:', error);
    console.log('💡 Dica: Certifique-se de que o site está online e acessível');
  }
}

// Executar envio
submitIndexNowBatch();
