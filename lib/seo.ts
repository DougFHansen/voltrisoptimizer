export function getLocalizedAlternates(currentPath: string, currentLocale: string) {
    const locales = ['en', 'es', 'pt-br', 'de', 'fr', 'it', 'ja', 'ko', 'ar', 'ru', 'zh-cn', 'vi', 'tr', 'id', 'pl'];
    
    // Ensure path starts with / and clean up locale prefix if present
    const pathWithoutLocale = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
    const pathParts = pathWithoutLocale.split('/');
    
    let cleanPath = pathWithoutLocale;
    if (pathParts.length > 1 && locales.includes(pathParts[1])) {
        pathParts.splice(1, 1);
        cleanPath = pathParts.join('/') || '/';
    }

    const languages: Record<string, string> = {
        'x-default': `https://www.voltrisoptimizer.com/en${cleanPath === '/' ? '' : cleanPath}`
    };

    locales.forEach(l => {
        languages[l] = `https://www.voltrisoptimizer.com/${l}${cleanPath === '/' ? '' : cleanPath}`;
    });

    return {
        canonical: `https://www.voltrisoptimizer.com/${currentLocale}${cleanPath === '/' ? '' : cleanPath}`,
        languages
    };
}
