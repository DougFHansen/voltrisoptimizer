import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appDir = path.join(__dirname, '../app');
const outputFile = path.join(__dirname, '../app/sitemap-routes.json');

function getPageRoutes(dir, baseUrl = '') {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      const skipDirs = [
        'api', 'components', 'dashboard', 'admin',
        'restricted-area-admin', 'auth', 'private',
        'debug-commands', 'test-commands', 'debug-link',
        'login', 'reset-password', 'perfil',
        'pix-limitation', 'cluster-conteudo', 'process',
        '_', '.'
      ];

      const shouldSkip = skipDirs.some(skip => file.startsWith(skip) || file === skip);

      if (!shouldSkip) {
        results = results.concat(getPageRoutes(filePath, `${baseUrl}/${file}`));
      }
    } else if (file === 'page.tsx' || file === 'page.js') {
      const route = baseUrl || '/';
      if ((!route.includes('[') || route.includes('[locale]')) && !route.includes('blog')) {
        results.push({ route, lastModified: stat.mtime });
      }
    }
  });

  return results;
}

const routes = getPageRoutes(appDir);
fs.writeFileSync(outputFile, JSON.stringify(routes, null, 2));
console.log(`Successfully generated ${routes.length} routes for sitemap.`);
