import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { TelegramService } from '@/services/telegramService';
import { oauthDestination } from '@/lib/auth-safe';
import { isProfileComplete } from '@/lib/profile-completeness';
import { normalizeLocale, localeFromAcceptLanguage, DEFAULT_LOCALE } from '@/lib/locale';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');
  // 'next' pode vir como query param (OAuth Google passa via redirectTo) ou como parâmetro direto.
  // SEMPRE normalizado: um ?next controlado por terceiros jamais pode apontar para fora do domínio
  // (open redirect com sessão recém-criada). oauthDestination devolve só caminho interno.
  const next = oauthDestination(searchParams.get('next'));

  console.log('🔍 [OAuth Callback] Iniciando callback');
  console.log('🔍 [OAuth Callback] Código:', code ? 'SIM' : 'NÃO');
  console.log('🔍 [OAuth Callback] Erro:', error);
  console.log('🔍 [OAuth Callback] Descrição do erro:', errorDescription);

  // Se há erro na URL, redirecionar com mensagem clara
  if (error) {
    console.error('❌ [OAuth Callback] Erro na URL:', error, errorDescription);
    return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent(`Erro OAuth: ${errorDescription || error}`)}`);
  }

  if (code) {
    try {
      console.log('🔍 [OAuth Callback] Criando cliente Supabase...');
      const supabase = await createClient();
      console.log('✅ [OAuth Callback] Cliente Supabase criado');
      
      console.log('🔍 [OAuth Callback] Trocando código por sessão...');
      let { data, error: authError } = await supabase.auth.exchangeCodeForSession(code);

      if (authError) {
        console.error('❌ [OAuth Callback] Erro ao trocar código por sessão:', authError);

        // O code pode já ter sido consumido pelo supabase-js do navegador
        // (detectSessionInUrl) quando o Google cai primeiro na home -- porque o
        // redirectTo não está na allowlist do Supabase -- e o fallback de HomeClient
        // reenvia o MESMO code para cá. A troca falha com "invalid flow state, no valid
        // flow state found", mas a sessão já está nos cookies: é inofensiva e não deve
        // ser mostrada ao usuário como erro de autenticação.
        const { data: sessaoAtual } = await supabase.auth.getUser();
        if (sessaoAtual?.user) {
          console.log('✅ [OAuth Callback] Code já consumido pelo navegador; sessão existente:', sessaoAtual.user.id);
          // Cast: o tipo de data é a união {user,session} | {null,null}, então 'session:
          // null' com 'user' preenchido não é representável -- mas nenhuma linha abaixo
          // lê data.session, só data.user.
          data = { user: sessaoAtual.user, session: null } as unknown as typeof data;
        } else {
          return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent(`Erro de autenticação: ${authError.message}`)}`);
        }
      }
      
      console.log('✅ [OAuth Callback] Sessão criada com sucesso para usuário:', data.user?.id);
      // Não logar e-mail/metadata: PII e dados de terceiros ficam retidos no log da plataforma.
      // O id (opaco) basta para correlacionar o fluxo em caso de suporte.
      
      if (data.user) {
        // Verificar se o perfil existe
        console.log('🔍 [OAuth Callback] Verificando perfil do usuário...');
        
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single();

        if (profileError) {
          console.error('❌ [OAuth Callback] Erro ao buscar perfil:', profileError);
          
          // Se o perfil não existe, tentar criar usando Admin Client (bypassa RLS)
          if (profileError.code === 'PGRST116') {
            console.log('🔍 [OAuth Callback] Perfil não encontrado, tentando criar manualmente via Admin...');
            const { createAdminClient } = await import('@/utils/supabase/admin');
            const adminSupabase = createAdminClient();
            
            const { error: insertError } = await adminSupabase
              .from('profiles')
              .insert({
                id: data.user.id,
                full_name: data.user.user_metadata?.full_name || data.user.email || 'Usuário',
                // Idioma so entra AQUI (perfil novo). Se o cliente ja escolheu um
                // idioma no metadata, ele vence; senao detectamos pelo
                // Accept-Language; senao padrao. Nunca sobrescrevemos um perfil
                // existente (este bloco so roda quando o perfil nao existia).
                preferred_locale: normalizeLocale(
                  data.user.user_metadata?.preferred_locale ??
                    localeFromAcceptLanguage(request.headers.get('accept-language')) ??
                    DEFAULT_LOCALE
                ),
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
              });
              
            if (insertError) {
              // Se o erro for Violação de Chave Única (23505), significa que a Trigger do Postgres acabou de criar o perfil! (Race condition resolvida)
              if (insertError.code === '23505') {
                console.log('✅ [OAuth Callback] Perfil criado simultaneamente pela Trigger do DB. Prosseguindo...');
              } else {
                console.error('❌ [OAuth Callback] Erro ao criar perfil manualmente:', insertError);
                console.log('🔍 [OAuth Callback] Tentando inserção mínima...');
                
                // Tentar inserção mínima
                const { error: minInsertError } = await adminSupabase
                  .from('profiles')
                  .insert({
                    id: data.user.id,
                    full_name: 'Usuário'
                  });
                  
                if (minInsertError && minInsertError.code !== '23505') {
                  console.error('❌ [OAuth Callback] Erro na inserção mínima:', minInsertError);
                  return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent('Erro ao criar perfil do usuário')}`);
                } else {
                  console.log('✅ [OAuth Callback] Perfil criado (ou já existia) após inserção mínima');
                }
              }
            } else {
              console.log('✅ [OAuth Callback] Perfil criado manualmente com sucesso');
              
              // Notificar Sucesso no Telegram (Novo Cadastro via Google)
              try {
                await TelegramService.notifyPageView(
                  `Novo Cadastro Realizado: ${data.user.email} (Via Google)`, 
                  `${origin}/login`
                );
              } catch (err) {
                console.error('Erro ao notificar Telegram no callback:', err);
              }
            }
            return NextResponse.redirect(`${origin}/dashboard/profile?completar=1&google=1&redirect=${encodeURIComponent(next)}`);
          }
          
          return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent('Erro ao buscar perfil do usuário')}`);
        }

        console.log('✅ [OAuth Callback] Perfil encontrado para:', data.user.id);

        // Cadastro 100% completo: mesma regra canônica do gate e do ProfileClient
        // (todos os campos obrigatórios, em qualquer país). Google não traz nenhum
        // deles, então o primeiro acesso cai na tela de conclusão.
        const missingFields = !isProfileComplete(profile);
        
        if (missingFields) {
          console.log('🔍 [OAuth Callback] Perfil incompleto, redirecionando para completar cadastro');
          return NextResponse.redirect(`${origin}/dashboard/profile?completar=1&google=1&redirect=${encodeURIComponent(next)}`);
        } else {
          console.log('✅ [OAuth Callback] Perfil completo, redirecionando para:', next);
          // `next` já saiu por oauthDestination: é caminho interno, nunca //host nem URL externa.
          return NextResponse.redirect(`${origin}${next}`);
        }
      }
    } catch (error) {
      console.error('❌ [OAuth Callback] Erro inesperado no callback:', error);
      return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent('Erro inesperado durante autenticação')}`);
    }
  }

  console.log('❌ [OAuth Callback] Código não fornecido, redirecionando para login');
  return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent('Código de autenticação inválido')}`);
} 