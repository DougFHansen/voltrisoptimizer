/**
 * IndexNow API Integration for Bing Webmaster Tools
 * API Key: dc9bd7eedab94ddca8eb96ea792838d4
 * 
 * This file provides functions to submit URLs to IndexNow API
 * for real-time indexing across participating search engines.
 */

const INDEXNOW_API_KEY = 'dc9bd7eedab94ddca8eb96ea792838d4';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const DOMAIN = 'www.voltrisoptimizer.com';

/**
 * Submit a single URL to IndexNow
 */
export async function submitSingleUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: DOMAIN,
        key: INDEXNOW_API_KEY,
        keyLocation: `https://${DOMAIN}/${INDEXNOW_API_KEY}.txt`,
        url: url,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('IndexNow submission failed:', error);
    return false;
  }
}

/**
 * Submit multiple URLs to IndexNow (bulk submission)
 */
export async function submitMultipleUrls(urls: string[]): Promise<boolean> {
  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: DOMAIN,
        key: INDEXNOW_API_KEY,
        keyLocation: `https://${DOMAIN}/${INDEXNOW_API_KEY}.txt`,
        urlList: urls,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('IndexNow bulk submission failed:', error);
    return false;
  }
}

/**
 * Auto-submit important pages when content changes
 */
export async function autoSubmitChangedPages(pageUrls: string[]): Promise<void> {
  const importantPages = pageUrls.filter(url => 
    url.includes('/') || // Homepage
    url.includes('/servicos') ||
    url.includes('/guias') ||
    url.includes('/voltrisoptimizer') ||
    url.includes('/otimizacao-pc')
  );

  if (importantPages.length > 0) {
    await submitMultipleUrls(importantPages);
  }
}
