import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname;
  const path = request.nextUrl.pathname;

  // Forçar WWW para voltrisoptimizer.com
  if (hostname === 'voltrisoptimizer.com') {
    const url = request.nextUrl.clone();
    url.hostname = 'www.voltrisoptimizer.com';
    return NextResponse.redirect(url, 301);
  }

  // Redirecionar domínios antigos para voltrisoptimizer.com
  if (hostname.includes('voltris.com') || hostname.includes('voltris.com.br') ||
      hostname.includes('voltris.co.uk') || hostname.includes('voltris.de')) {
    const url = request.nextUrl.clone();
    url.hostname = 'www.voltrisoptimizer.com';
    return NextResponse.redirect(url, 301);
  }

  // Configurar headers SEO simples (apenas inglês)
  const response = NextResponse.next();
  response.headers.set('link',
    `<https://www.voltrisoptimizer.com${path}>; rel="canonical", ` +
    `<https://www.voltrisoptimizer.com${path}>; rel="alternate"; hreflang="en", ` +
    `<https://www.voltrisoptimizer.com${path}>; rel="alternate"; hreflang="x-default"`
  );
  response.headers.set('content-language', 'en');

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api|assets|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|json)$).*)',
  ],
}
