import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname;
  const path = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams;

  // Forçar canonicalização WWW
  if (hostname === 'voltrisoptimizer.com') {
    const url = request.nextUrl.clone();
    url.hostname = 'www.voltrisoptimizer.com';
    return NextResponse.redirect(url, 301);
  }

  // Detectar idioma do usuário
  const acceptLanguage = request.headers.get('accept-language') || '';
  const userLang = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase() || 'en';
  
  // Determinar se conteúdo é PT ou EN baseado na URL
  const isPortugueseContent = path.includes('/servicos') || 
                              path.includes('/guias') || 
                              path.includes('/sobre') || 
                              path.includes('/contato') ||
                              path.includes('/faq') ||
                              path.includes('/voltrisoptimizer') ||
                              path.includes('/otimizacao-pc') ||
                              path.includes('/formatar-windows') ||
                              path.includes('/erros-jogos') ||
                              path.includes('/manutencao-computador') ||
                              path.includes('/suporte-tecnico-remoto') ||
                              path.includes('/criar-site') ||
                              path.includes('/adquirir-licenca') ||
                              path.includes('/exterior');

  // Adicionar headers SEO
  const response = NextResponse.next();
  
  // Hreflang tags CORRIGIDAS - URLs funcionais
  if (isPortugueseContent) {
    response.headers.set('link', 
      `<https://www.voltrisoptimizer.com${path}>; rel="canonical", ` +
      `<https://www.voltrisoptimizer.com${path}>; rel="alternate"; hreflang="pt-br", ` +
      `<https://www.voltrisoptimizer.com${path}>; rel="alternate"; hreflang="en", ` +
      `<https://www.voltrisoptimizer.com${path}>; rel="alternate"; hreflang="x-default"`
    );
  } else {
    response.headers.set('link', 
      `<https://www.voltrisoptimizer.com${path}>; rel="canonical", ` +
      `<https://www.voltrisoptimizer.com${path}>; rel="alternate"; hreflang="en", ` +
      `<https://www.voltrisoptimizer.com${path}>; rel="alternate"; hreflang="pt-br", ` +
      `<https://www.voltrisoptimizer.com${path}>; rel="alternate"; hreflang="x-default"`
    );
  }

  // Language detection header
  response.headers.set('x-detected-language', userLang);
  response.headers.set('x-content-language', isPortugueseContent ? 'pt-br' : 'en');

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api|assets|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|json)$).*)',
  ],
}
