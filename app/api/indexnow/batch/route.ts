import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * API Endpoint para notificação em massa de URLs para IndexNow
 * Use este endpoint para notificar o Google/Bing sobre todas as páginas do site
 * 
 * Uso: POST /api/indexnow/batch
 * Body: { "urls": ["url1", "url2", ...] } ou omita para gerar automaticamente
 */

function getAllPageRoutes(dir: string, baseUrl: string = ''): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;

  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      const skipDirs = [
        'api', 'components', 'dashboard', 'admin',
        'restricted-area-admin', 'auth', 'private',
        '_', '.', 'locale'
      ];

      const shouldSkip = skipDirs.some(skip =>
        file.startsWith(skip) || file === skip
      );

      if (!shouldSkip) {
        results = results.concat(getAllPageRoutes(filePath, `${baseUrl}/${file}`));
      }
    } else if (file === 'page.tsx' || file === 'page.js') {
      const route = baseUrl || '/';
      if (!route.includes('[')) {
        results.push(route);
      }
    }
  });

  return results;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { urls } = body;

    const domain = 'https://www.voltrisoptimizer.com';
    const appDir = path.join(process.cwd(), 'app');
    
    // Se URLs não fornecidas, gerar automaticamente do sistema de arquivos
    let allUrls: string[] = [];
    
    if (urls && Array.isArray(urls) && urls.length > 0) {
      allUrls = urls;
    } else {
      const allRoutes = getAllPageRoutes(appDir);
      allUrls = allRoutes.map(route => 
        `${domain}${route === '/' ? '' : route}`
      );
      
      // Excluir páginas privadas
      const excludedPaths = [
        '/dashboard',
        '/restricted-area-admin',
        '/auth',
        '/login',
        '/reset-password',
        '/perfil'
      ];
      
      allUrls = allUrls.filter(url => 
        !excludedPaths.some(path => url.includes(path))
      );
    }

    // IndexNow aceita até 100 URLs por requisição
    const batchSize = 100;
    const batches = [];
    
    for (let i = 0; i < allUrls.length; i += batchSize) {
      batches.push(allUrls.slice(i, i + batchSize));
    }

    const apiKey = 'dc9bd7eedab94ddca8eb96ea792838d4';
    const host = 'www.voltrisoptimizer.com';
    const keyLocation = `https://${host}/${apiKey}.txt`;

    const results = [];

    for (const batch of batches) {
      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          host,
          key: apiKey,
          keyLocation,
          urlList: batch,
        }),
      });

      results.push({
        batch: batch.length,
        success: response.ok,
        status: response.status,
      });

      // Rate limiting: esperar 1 segundo entre batches
      if (batches.indexOf(batch) < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    const successCount = results.filter(r => r.success).length;
    const totalUrls = allUrls.length;

    return NextResponse.json({
      success: true,
      message: `Submitted ${totalUrls} URLs to IndexNow in ${batches.length} batches`,
      details: {
        totalUrls,
        batches: batches.length,
        successfulBatches: successCount,
        results,
      },
    });
  } catch (error) {
    console.error('IndexNow Batch Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET endpoint para listar todas as URLs que seriam enviadas
export async function GET() {
  try {
    const domain = 'https://www.voltrisoptimizer.com';
    const appDir = path.join(process.cwd(), 'app');
    const allRoutes = getAllPageRoutes(appDir);
    
    const allUrls = allRoutes.map(route => 
      `${domain}${route === '/' ? '' : route}`
    );

    const excludedPaths = [
      '/dashboard',
      '/restricted-area-admin',
      '/auth',
      '/login',
      '/reset-password',
      '/perfil'
    ];
    
    const filteredUrls = allUrls.filter(url => 
      !excludedPaths.some(path => url.includes(path))
    );

    return NextResponse.json({
      totalUrls: filteredUrls.length,
      urls: filteredUrls,
    });
  } catch (error) {
    console.error('IndexNow List Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
