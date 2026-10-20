/**
 * /api/admin/emails
 *   GET  -> list the most recent transactional emails (the outbox log)
 *   POST -> { action: 'requeue', id } re-queue an additive copy for delivery
 *
 * The `email_outbox` table intentionally has NO select policy for anon or
 * authenticated roles (it stores other users' email bodies and recipients),
 * so only the service_role key can read it. That privileged read is still
 * gated behind an admin session check (auth.getUser + profiles.is_admin) on
 * the user-scoped client, so nothing is exposed to non-admins and no RLS
 * policy is loosened. The requeue never mutates history: it inserts a fresh
 * row with a new idempotency_key so the outbox worker delivers again without
 * violating the UNIQUE idempotency_key constraint.
 */
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { createAdminClient } from '@/utils/supabase/admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function requireAdmin(): Promise<{ ok: true } | { ok: false; status: number; error: string }> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, status: 401, error: 'Unauthorized' };
  const { data: profile } = await supabase
    .from('profiles')
    .select('is_admin')
    .eq('id', user.id)
    .single();
  if (!profile?.is_admin) return { ok: false, status: 403, error: 'Forbidden' };
  return { ok: true };
}

const LIST_COLUMNS =
  'id, template_type, recipient_email, subject, status, delivery_status, attempts, locale, last_error, last_error_kind, provider_message_id, created_at, sent_at, delivered_at, opened_at';

export async function GET(req: NextRequest) {
  try {
    const guard = await requireAdmin();
    if (!guard.ok) return NextResponse.json({ error: guard.error }, { status: guard.status });

    const admin = createAdminClient();
    const { searchParams } = new URL(req.nextUrl);
    const status = searchParams.get('status');
    const rawLimit = parseInt(searchParams.get('limit') || '100', 10);
    const limit = Math.min(Number.isFinite(rawLimit) ? rawLimit : 100, 200);

    let query = admin
      .from('email_outbox')
      .select(LIST_COLUMNS)
      .order('created_at', { ascending: false })
      .limit(limit);
    if (status && status !== 'all') query = query.eq('status', status);

    const { data: emails, error } = await query;
    if (error) throw error;

    return NextResponse.json({ success: true, emails: emails ?? [] });
  } catch (error: any) {
    console.error('[Admin] Emails fetch error:', error);
    return NextResponse.json(
      { success: false, error: 'FETCH_FAILED', message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const guard = await requireAdmin();
    if (!guard.ok) return NextResponse.json({ error: guard.error }, { status: guard.status });

    const body = await req.json().catch(() => ({}));
    const { action, id } = body || {};
    if (action !== 'requeue' || typeof id !== 'string' || !id) {
      return NextResponse.json({ error: 'INVALID_REQUEST' }, { status: 400 });
    }

    const admin = createAdminClient();
    const { data: original, error: readError } = await admin
      .from('email_outbox')
      .select('*')
      .eq('id', id)
      .single();
    if (readError || !original) {
      return NextResponse.json({ error: 'NOT_FOUND' }, { status: 404 });
    }

    const {
      id: _id,
      created_at: _created,
      updated_at: _updated,
      ...rest
    } = original;

    const copy = {
      ...rest,
      idempotency_key: `${original.idempotency_key}-manual-${Date.now()}`,
      status: 'pending',
      attempts: 0,
      provider_message_id: null,
      last_error: null,
      last_error_kind: null,
      sent_at: null,
      delivered_at: null,
      opened_at: null,
      delivery_status: null,
      available_at: new Date().toISOString(),
    };

    const { data: created, error: insertError } = await admin
      .from('email_outbox')
      .insert(copy)
      .select('id')
      .single();
    if (insertError) throw insertError;

    return NextResponse.json({ success: true, id: created?.id });
  } catch (error: any) {
    console.error('[Admin] Emails requeue error:', error);
    return NextResponse.json(
      { success: false, error: 'REQUEUE_FAILED', message: error.message },
      { status: 500 }
    );
  }
}
