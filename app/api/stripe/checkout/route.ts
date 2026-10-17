import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createAdminClient } from '@/utils/supabase/admin';
import { createClient } from '@/utils/supabase/server';
import {
    SERVICE_CATALOG,
    resolveLicenseProduct,
    currencyForLocale,
    toMinorUnits,
    type Currency,
} from '@/lib/license-catalog';
import {
    startOperation,
    getOrCreateCorrelationId,
    logSuccess,
    logError,
    logSupabaseError,
    maskEmail,
} from '@/lib/voltris-log';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.voltrisoptimizer.com';

/**
 * POST /api/stripe/checkout (INTERNACIONAL)
 *
 * Espelha a metodologia auditada do site BR, com suporte a multi-moeda:
 *  - usuario/email sai da SESSAO (cookie), nunca do body do navegador;
 *  - plano/periodo validados contra o catalogo canonico (lib/license-catalog);
 *  - MOEDA derivada do idioma do visitante (body.locale ou cookie voltris-locale),
 *    nunca o cliente escolhe o valor: o preco vem SEMPRE do servidor;
 *  - payments gravado completo (provider/billing_period/currency) com erro verificado;
 *  - log estruturado com correlation id.
 */
export async function POST(req: NextRequest) {
    const correlationId = getOrCreateCorrelationId(req);
    const ctx = startOperation('STRIPE_CHECKOUT', correlationId);

    try {
        const body = await req.json().catch(() => ({}));
        const licenseType = String(body.license_type ?? '').toLowerCase();
        const billingPeriod = String(body.billing_period ?? 'month');

        // Idioma -> moeda. Fonte: body.locale, senao cookie voltris-locale, senao en.
        const localeFromCookie = req.cookies.get('voltris-locale')?.value;
        const locale = String(body.locale ?? localeFromCookie ?? 'en');
        const currency: Currency = currencyForLocale(locale);

        // 1. Identidade: sessao autenticada e a unica fonte de user_id/email.
        const auth = await createClient();
        const { data: sessionData, error: authError } = await auth.auth.getUser();
        const user = sessionData?.user ?? null;

        if (authError || !user) {
            logError(ctx, 'checkout sem sessao autenticada', { ip: req.headers.get('x-forwarded-for') });
            return NextResponse.json(
                { error: 'Please log in to purchase a license.' },
                { status: 401 }
            );
        }
        ctx.userId = user.id;

        const service = SERVICE_CATALOG[licenseType];
        const product = resolveLicenseProduct(licenseType, billingPeriod, currency);

        if (!product && !service) {
            return NextResponse.json({ error: 'Invalid plan or service' }, { status: 400 });
        }

        const isLicense = !!product;
        const mode = isLicense ? 'subscription' : 'payment';
        const name = isLicense ? product.name : service.name;
        const svcCurrency: Currency = service?.currency ?? 'usd';
        const useCurrency: Currency = isLicense ? product.currency : svcCurrency;
        const amount = isLicense ? product.amount : service.amount;
        // Menor unidade respeita moedas sem decimal (JPY/KRW).
        const minorAmount = isLicense ? product.minorAmount : toMinorUnits(service.amount, svcCurrency);
        const referenceId = `${isLicense ? 'st' : 'sv'}_${Date.now()}`;
        const email = user.email!;

        const supabase = createAdminClient();

        // 2. Registrar intencao de pagamento (erro verificado — sem silent fail).
        const { error: payInsertError } = await supabase.from('payments').insert([{
            reference_id: referenceId,
            provider: 'stripe',
            user_id: user.id,
            email,
            customer_name: user.user_metadata?.full_name || 'Voltris Customer',
            plan_type: licenseType,
            billing_period: isLicense ? billingPeriod : null,
            amount,
            currency: useCurrency,
            status: 'pending',
        }]);

        if (payInsertError) {
            logSupabaseError(ctx, 'registrar pagamento pendente', payInsertError);
            return NextResponse.json({ error: 'Could not start the payment' }, { status: 500 });
        }

        // 3. Sessao Stripe (preco e moeda sempre do servidor/catalogo).
        const sessionOptions: any = {
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: useCurrency,
                        product_data: {
                            name,
                            description: isLicense
                                ? `Voltris Optimizer — ${billingPeriod === 'month' ? 'Monthly' : 'Annual'} subscription`
                                : 'Voltris Professional Service',
                        },
                        unit_amount: minorAmount,
                    },
                    quantity: 1,
                },
            ],
            mode,
            success_url: `${BASE_URL}/dashboard?checkout_success=true&type=${isLicense ? 'license' : 'service'}&ref=${referenceId}`,
            cancel_url: isLicense ? `${BASE_URL}/buy-license` : `${BASE_URL}/services`,
            customer_email: email,
            metadata: {
                reference_id: referenceId,
                user_id: user.id,
                license_type: isLicense ? product.plan : licenseType,
                billing_period: isLicense ? billingPeriod : '',
                currency: useCurrency,
                locale,
                type: isLicense ? 'license' : 'service',
            },
        };

        if (isLicense) {
            sessionOptions.line_items[0].price_data.recurring = { interval: product.period };
        }

        const session = await stripe.checkout.sessions.create(sessionOptions);

        logSuccess(ctx, 'sessao stripe criada', {
            ref: referenceId,
            plan: licenseType,
            period: billingPeriod,
            currency: useCurrency,
            user: maskEmail(email),
            session: session.id,
        });

        return NextResponse.json({ id: session.id, url: session.url });
    } catch (error: any) {
        logError(ctx, 'checkout falhou', { error: error?.message });
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
