/**
 * Notifies the backend about a started download
 */
export async function notifyDownload(fileName: string) {
  console.log(`[Notification] Triggering download notification for: ${fileName}`);
  try {
    const response = await fetch('/api/notifications/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fileName,
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      }),
    });
    return await response.json();
  } catch (error) {
    console.error('[Notification] Failed to report download:', error);
  }
}

/**
 * Notifies the backend about access to a strategic page
 */
export async function notifyPageView(pageName: string) {
  try {
    await fetch('/api/notifications/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventType: 'PAGE_VIEW',
        details: pageName,
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      }),
    });
  } catch (error) {
    console.error('[Notification] Failed to report page view:', error);
  }
}

/**
 * Notifies the backend about a purchase attempt (checkout click)
 */
export async function notifyPurchaseAttempt(planName: string, billingPeriod: string) {
  try {
    await fetch('/api/notifications/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventType: 'PURCHASE_CLICK',
        details: `Plan: ${planName} (${billingPeriod === 'month' ? 'Monthly' : 'Annual'})`,
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      }),
    });
  } catch (error) {
    console.error('[Notification] Failed to report purchase attempt:', error);
  }
}
