/**
 * Rota de download do PDF de fatura (FASE 9 da missão VOLTRIS INTERNACIONAL).
 *
 * Autenticação obrigatória + guarda IDOR:
 *  - `payment_id` vem da URL;
 *  - usuário só baixa a própria fatura (matching por `user_id` OU por `email`
 *    do perfil quando o payment não tem `user_id` — caso trial/anônimo);
 *  - se nenhum bater, 403. Se `payment_id` não existir, 404 (nunca 500, para
 *    não revelar existência do ID).
 *
 * Locale do PDF: `?lang=xx` (query) > `profiles.preferred_locale` > user_metadata >
 * 'en'. Passado explicitamente para `buildInvoiceData` via `requestedLocale`.
 * Cache: `private, max-age=0, must-revalidate` — nunca público (a chave de
 * licença mora dentro do PDF).
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { createAdminClient } from '@/utils/supabase/admin';
import { buildInvoiceData, type PaymentRow, type LicenseRow, type CustomerProfileRow } from '@/lib/invoice-data';
import { renderInvoicePdf } from '@/lib/invoice-pdf';
import { startOperation, logError, logWarn, logSuccess, maskEmail, type VoltrisOperation } from '@/lib/voltris-log';

export const runtime = 'nodejs';

interface Params {
    params: Promise<{ id: string }>;
}

const OP: VoltrisOperation = 'INVOICE_DOWNLOAD' as VoltrisOperation;

export async function GET(req: NextRequest, ctx: Params) {
    const { id: rawId } = await ctx.params;
    const paymentId = (rawId ?? '').trim();
    const op = startOperation(OP, paymentId || undefined);

    if (!paymentId) {
        return NextResponse.json({ error: 'MISSING_ID' }, { status: 400 });
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        logWarn(op, 'download tentado sem sessão', { payment: paymentId });
        return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 });
    }

    // Busca o payment com admin client para conseguir checar user_id que o
    // RLS normalmente esconderia de outro usuário. A guarda IDOR é feita AQUI,
    // em código, NUNCA confiando só em RLS (que é por `user_id` — se
    // `payment.user_id` for null, RLS não deixa ver NINGUÉM, e a gente
    // precisa comparar e-mail manualmente).
    const admin = createAdminClient();
    const { data: payRow, error: payErr } = await admin
        .from('payments')
        .select('id, reference_id, provider, stripe_id, status, user_id, email, plan_type, billing_period, amount, currency, created_at')
        .eq('id', paymentId)
        .maybeSingle<{
            id: string;
            reference_id: string | null;
            provider: string | null;
            stripe_id: string | null;
            status: string | null;
            user_id: string | null;
            email: string | null;
            plan_type: string | null;
            billing_period: string | null;
            amount: number | string | null;
            currency: string | null;
            created_at: string | null;
        }>();

    if (payErr) {
        logError(op, 'falha ao buscar payment', { error: payErr.message });
        return NextResponse.json({ error: 'INTERNAL' }, { status: 500 });
    }
    if (!payRow) {
        logWarn(op, 'payment não existe', { payment: paymentId, user: maskEmail(user.email) });
        return NextResponse.json({ error: 'NOT_FOUND' }, { status: 404 });
    }

    // Guarda IDOR: `user_id` OU e-mail do perfil. Se ambos divergirem → 403.
    const ownsByUserId = payRow.user_id && payRow.user_id === user.id;
    const userEmail = (user.email ?? '').toLowerCase().trim();
    const payEmail = (payRow.email ?? '').toLowerCase().trim();
    const ownsByEmail = !!userEmail && !!payEmail && userEmail === payEmail;
    if (!ownsByUserId && !ownsByEmail) {
        logWarn(op, 'tentativa de acesso a fatura de terceiros bloqueada', {
            payment: paymentId,
            requester: maskEmail(user.email),
            owner: maskEmail(payEmail),
        });
        return NextResponse.json({ error: 'FORBIDDEN' }, { status: 403 });
    }

    // Perfil + locale.
    const { data: profile } = await admin
        .from('profiles')
        .select('id, full_name, email, preferred_locale')
        .eq('id', user.id)
        .maybeSingle<CustomerProfileRow & { preferred_locale?: string | null }>();

    // Licença vinculada ao payment (chave + vencimento). Uma consulta só; se
    // não houver, o PDF não mostra a linha de licença — mas o documento sai.
    const { data: licenseRow } = await admin
        .from('licenses')
        .select('license_key, expires_at, revoked')
        .eq('payment_id', payRow.id)
        .maybeSingle<LicenseRow & { revoked?: boolean }>();

    // Locale pedido na query tem precedência sobre o perfil (permite que um
    // usuário baixe sua própria fatura em outro idioma para um parceiro).
    const url = new URL(req.url);
    const requestedLocale = url.searchParams.get('lang');

    // Reconstruímos um PaymentRow tipado para o builder puro.
    const payment: PaymentRow = {
        id: payRow.id,
        reference_id: payRow.reference_id,
        provider: payRow.provider,
        stripe_id: payRow.stripe_id,
        status: payRow.status,
        user_id: payRow.user_id,
        email: payRow.email,
        plan_type: payRow.plan_type,
        billing_period: payRow.billing_period,
        amount: payRow.amount,
        currency: payRow.currency,
        created_at: payRow.created_at,
    };

    const downloadUrl = `${url.protocol}//${url.host}/api/invoices/${payRow.id}/download`;

    const invoice = buildInvoiceData({
        payment,
        profile: profile ?? null,
        license: licenseRow ? { license_key: licenseRow.license_key, expires_at: licenseRow.expires_at } : null,
        licenseRevoked: !!licenseRow?.revoked,
        requestedLocale,
        downloadUrl,
    });

    let bytes: Uint8Array;
    try {
        bytes = await renderInvoicePdf(invoice);
    } catch (err: any) {
        logError(op, 'render do PDF falhou', { error: err?.message ?? String(err) });
        return NextResponse.json({ error: 'PDF_RENDER_FAILED' }, { status: 500 });
    }

    logSuccess(op, 'fatura servida', {
        payment: paymentId,
        user: maskEmail(user.email),
        locale: invoice.locale,
        size: bytes.byteLength,
    });

    const filename = `voltris-invoice-${invoice.invoiceNumber}.pdf`;
    return new NextResponse(Buffer.from(bytes), {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${filename}"`,
            'Content-Length': String(bytes.byteLength),
            'Cache-Control': 'private, no-store, must-revalidate',
            'X-Invoice-Locale': invoice.locale,
        },
    });
}
