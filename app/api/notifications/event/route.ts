import { NextRequest, NextResponse } from 'next/server';
import { TelegramService } from '@/services/telegramService';

/**
 * POST /api/notifications/event
 * Triggered for strategic events (Page View, Purchase Click)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { eventType, details, pageUrl } = body;

    if (!eventType) {
      return NextResponse.json({ error: 'Missing eventType' }, { status: 400 });
    }

    // Process based on event type
    try {
        if (eventType === 'PAGE_VIEW') {
            await TelegramService.notifyPageView(details || 'Strategic Page', pageUrl || 'Unknown');
        } else if (eventType === 'PURCHASE_CLICK') {
            await TelegramService.notifyPurchaseClick(details || 'Purchase Click', pageUrl || 'Unknown');
        }
    } catch (err) {
      console.error('[API] Telegram event notification failed:', err);
    }

    return NextResponse.json({ success: true, message: 'Event notification sent' });
  } catch (error) {
    console.error('[API] Event notification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
