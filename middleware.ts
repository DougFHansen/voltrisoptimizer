import { NextResponse, type NextRequest } from 'next/server'

const locales = ['en', 'es', 'pt-br', 'de', 'fr', 'it', 'ja', 'ko', 'ar'];
const defaultLocale = 'en';

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'X-DNS-Prefetch-Control': 'on',
  'Server': 'Voltris Web Network',
};

function addSecurityHeaders(response: NextResponse): NextResponse {
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  response.headers.delete('x-powered-by');
  response.headers.delete('x-vercel-id');
  response.headers.delete('x-vercel-cache');
  return response;
}

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || '';
  const userLang = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase();
  
  if (userLang === 'pt') return 'pt-br';
  
  if (userLang && locales.includes(userLang)) {
    return userLang;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.nextUrl.hostname;
  const protocol = request.nextUrl.protocol;

  // Single-hop Global Canonicalization (Protocol and WWW)
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';
  const needsProtocolRedirect = protocol === 'http:' && !isLocalhost;
  const needsHostnameRedirect = hostname === 'voltrisoptimizer.com';

  if (needsProtocolRedirect || needsHostnameRedirect) {
    const url = request.nextUrl.clone();
    if (!isLocalhost) {
      url.protocol = 'https:';
    }
    if (hostname === 'voltrisoptimizer.com') {
      url.host = 'www.voltrisoptimizer.com';
    }
    return addSecurityHeaders(NextResponse.redirect(url, 301));
  }

  // Bypass para rotas não-localizadas da aplicação (Dashboard, Auth, API, etc)
  const bypassPaths = [
    '/auth', 
    '/dashboard', 
    '/api', 
    '/debug-commands', 
    '/test-commands', 
    '/debug-link', 
    '/international', 
    '/regions', 
    '/services-integration',
    '/sitemap',     // Bypasses all sitemaps (sitemap.xml, sitemap-images.xml)
    '/robots.txt'
  ];
  
  if (bypassPaths.some((path) => pathname.startsWith(path))) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', defaultLocale);
    return addSecurityHeaders(NextResponse.next({ request: { headers: requestHeaders } }));
  }

  // Verificar se o pathname já contém um locale suportado
  const localeMatch = locales.find((l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`);

  if (localeMatch) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', localeMatch);
    return addSecurityHeaders(NextResponse.next({ request: { headers: requestHeaders } }));
  }

  // Redirecionar para a subpasta do locale detectado
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return addSecurityHeaders(NextResponse.redirect(request.nextUrl));
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|assets|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|json|xml|txt)$).*)',
  ],
}
