import { NextResponse, type NextRequest } from 'next/server'

const locales = ['en', 'es', 'pt-br', 'de', 'fr', 'it', 'ja', 'ko', 'ar'];
const defaultLocale = 'en';

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

  // Forçar canonicalização WWW
  if (hostname === 'voltrisoptimizer.com') {
    const url = request.nextUrl.clone();
    url.hostname = 'www.voltrisoptimizer.com';
    return NextResponse.redirect(url, 301);
  }

  // Verificar se o pathname já contém um locale suportado
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirecionar para a subpasta do locale detectado
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api|assets|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|json)$).*)',
  ],
}
