'use client';

import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { useAuth } from '@/app/hooks/useAuth';
import { isProfileComplete } from '@/lib/profile-completeness';
import VoltrisIcon from './VoltrisIcon';

const PROFILE_PATH = '/dashboard/profile';
const COMPLETION_URL = `${PROFILE_PATH}?completar=1`;

/**
 * Bloqueia o dashboard enquanto o cadastro do usuário não estiver 100% completo.
 *
 * Fonte única da decisão: lib/profile-completeness (a mesma do /auth/callback e do
 * ProfileClient). O gate consulta o perfil de forma autoritativa (não depende do
 * timing do AuthContext) e:
 *   - incomplete + em outra aba → redireciona para /dashboard/profile?completar=1
 *     e mostra um aviso de "conclua o cadastro" enquanto troca de rota;
 *   - incomplete + já na aba de perfil → deixa o ProfileClient renderizar o
 *     formulário (com o banner de conclusão);
 *   - complete → deixa passar.
 *
 * Fail-open em erro de rede: uma falha transitória do Supabase jamais pode
 * aprisionar um usuário já autenticado do lado de fora do próprio painel. Nesse
 * caso deixamos passar (o callback e o ProfileClient ainda exigem os campos no
 * salvamento).
 */
export default function ProfileCompletionGate({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const [state, setState] = useState<'checking' | 'complete' | 'incomplete'>('checking');

  const onProfileRoute = typeof pathname === 'string' && pathname.startsWith(PROFILE_PATH);

  const check = useCallback(async () => {
    if (!user) {
      setState('complete');
      return;
    }
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();
      if (error) {
        console.warn('[ProfileCompletionGate] Falha ao ler perfil, liberando UI:', error.message);
        setState('complete');
        return;
      }
      setState(isProfileComplete(data) ? 'complete' : 'incomplete');
    } catch (err) {
      console.warn('[ProfileCompletionGate] Exceção ao ler perfil, liberando UI:', err);
      setState('complete');
    }
  }, [user]);

  useEffect(() => {
    if (loading || !user) {
      setState('checking');
      return;
    }
    check();
    // ProfileClient emite 'auth-changed' após salvar um cadastro completo.
    const handler = () => check();
    window.addEventListener('auth-changed', handler);
    return () => window.removeEventListener('auth-changed', handler);
  }, [user, loading, check]);

  useEffect(() => {
    if (state === 'incomplete' && !onProfileRoute) {
      router.replace(COMPLETION_URL);
    }
  }, [state, onProfileRoute, router]);

  // Sem usuário: deixa a página cuidar do redirect de login (AuthGuard).
  if (!user) return <>{children}</>;

  // Só bloqueamos quando SABEMOS que está incompleto. Durante a checagem inicial
  // deixamos a própria página mostrar seu loading — assim um salvamento de perfil
  // (que religa loading via refreshAuth) nunca pisca a tela de bloqueio.
  if (state === 'incomplete' && !onProfileRoute) return <GateScreen />;

  return <>{children}</>;
}

function GateScreen() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/25">
        <VoltrisIcon name="lock" size={22} />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-bold text-white tracking-tight">Complete your registration to continue</p>
        <p className="text-xs text-slate-400 max-w-md">
          We need all of your profile information before opening the dashboard. Taking you to your profile…
        </p>
      </div>
      <div className="mt-1 h-6 w-6 rounded-full border-2 border-slate-700 border-t-indigo-500 animate-spin" />
    </div>
  );
}
