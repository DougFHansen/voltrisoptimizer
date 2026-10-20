import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { NotificationService } from '@/services/notificationService';

export async function POST(req: NextRequest) {
    try {
        const supabase = await createClient();

        // 1. Autenticação e Validação
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { items, total, notes } = body;

        if (!items || !Array.isArray(items) || items.length === 0) {
            return NextResponse.json({ error: 'Invalid order: no items' }, { status: 400 });
        }

        console.log(`🛒 New order for ${user.email} (Total: US$ ${total})`);

        // 2. Buscar perfil completo do usuário (para usar nome na notificação)
        const { data: profile } = await supabase
            .from('profiles')
            .select('full_name, email')
            .eq('id', user.id)
            .single();

        const userName = profile?.full_name || user.email || 'Customer';

        // 3. Criar Pedido no Banco (Transacional se possível, mas Supabase requer RPC para transação multi-tabela estrita. Aqui faremos sequencial com tratamento de erro)

        // Inserir Order Header
        const { data: order, error: orderError } = await supabase
            .from('orders')
            .insert({
                user_id: user.id,
                total: total,
                status: 'pending',
                service_name: items[0].service_name || 'Voltris Services', // Simplificação para display
                service_description: items.map((i: any) => i.service_name).join(', '),
                notes: notes,
                items: items, // Salvando JSONB com detalhes dos itens
                created_at: new Date().toISOString()
            })
            .select()
            .single();

        if (orderError) {
            console.error('❌ Erro ao criar pedido:', orderError);
            return NextResponse.json({ error: 'Error processing order' }, { status: 500 });
        }

        console.log('✅ Pedido criado com sucesso:', order.id);

        // 4. SISTEMA DE NOTIFICAÇÕES (Enterprise)
        // OBRIGATÓRIO: Notificar Usuário e Admins via NotificationService persistente

        try {
            // A) Notify the customer (confirmation). Stored as English
            // source-of-truth; the notification renderer localizes on display.
            await NotificationService.notify({
                recipients: [user.id],
                type: 'order',
                title: 'Order received! 🚀',
                message: `Your order #${order.id.slice(0, 8)} has been received and is being processed.`,
                sound: 'chime',
                actionUrl: `/dashboard?tab=orders`,
            });

            // B) Notify admins (sale alert). Amount uses the international
            // currency (US$), never a Brazilian currency mask. Links to the
            // consolidated admin Orders tab rather than a standalone page.
            await NotificationService.notifyAdmins({
                type: 'order',
                title: '💰 New order placed',
                message: `${userName} placed an order of US$ ${Number(total).toFixed(2)}.`,
                sound: 'chime',
                actionUrl: `/restricted-area-admin?tab=orders`,
            });

        } catch (notifError) {
            // Não falhamos o request do pedido se a notificação falhar, mas logamos erro crítico
            console.error('⚠️ Pedido criado, mas falha no sistema de notificações:', notifError);
        }

        return NextResponse.json({
            success: true,
            orderId: order.id,
            message: 'Order successfully created'
        });

    } catch (error: any) {
        console.error('❌ Erro interno no Order API:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
