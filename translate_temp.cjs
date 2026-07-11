const fs = require('fs');
const filePath = 'e:/Minhas Coisas/Desktop/APLICATIVO VOLTRIS/Site Voltris/app/exterior/servicos/[service]/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/O que está incluso/g, "What's included");
content = content.replace(/Nosso Processo/g, "Our Process");
content = content.replace(/Pronto para resolver seu problema\?/g, "Ready to solve your problem?");
content = content.replace(/Nossa equipe especializada está pronta para atender você com qualidade internacional/g, "Our specialized team is ready to serve you with international quality");
content = content.replace(/Solicitar Serviço/g, "Request Service");
content = content.replace(/Ver Outros Serviços/g, "View Other Services");
content = content.replace(/Atendimento especializado em português para brasileiros no exterior/g, "Specialized support in English for global users");
content = content.replace(/Voltar aos Serviços/g, "Back to Services");
content = content.replace(/Serviço não encontrado/g, "Service not found");
content = content.replace(/Benefícios do Serviço/g, "Service Benefits");
content = content.replace(/Investimento/g, "Investment");
content = content.replace(/Disponível/g, "Available");

// Translate serviceData keys and general titles
content = content.replace(/Remoção de Vírus e Malware/g, "Virus and Malware Removal");
content = content.replace(/Remoção completa de vírus/g, "Complete removal of viruses");
content = content.replace(/Correção de Erros no Windows\/Mac/g, "Windows/Mac Error Fixing");
content = content.replace(/Solução rápida de problemas e erros/g, "Quick resolution of issues and errors");
content = content.replace(/Correção de Erros em Jogos/g, "Game Error Fixing");
content = content.replace(/Especialistas em resolver problemas em jogos/g, "Experts in resolving game issues");
content = content.replace(/Instalação de Programas e Softwares/g, "Program and Software Installation");
content = content.replace(/Instalação e configuração remota/g, "Remote installation and configuration");
content = content.replace(/Recuperação de Dados Perdidos/g, "Lost Data Recovery");
content = content.replace(/Recuperação especializada de arquivos/g, "Specialized recovery of files");
content = content.replace(/Configuração de Redes e Internet/g, "Network and Internet Configuration");
content = content.replace(/Otimização de conexões de internet/g, "Internet connection optimization");
content = content.replace(/Suporte a Serviços em Nuvem/g, "Cloud Services Support");
content = content.replace(/Assistência especializada com Google Workspace/g, "Specialized assistance with Google Workspace");
content = content.replace(/Consultoria de TI Internacional/g, "International IT Consulting");
content = content.replace(/Planejamento estratégico de tecnologia/g, "Strategic technology planning");

fs.writeFileSync(filePath, content);
console.log('Translated successfully');
