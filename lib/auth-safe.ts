/**
 * Helpers puros do fluxo de autenticação VOLTRIS.
 *
 * Sem nenhum import de alias (@/) nem de supabase-js de propósito: este arquivo é
 * exercitado direto por `node --test tests/auth-safe.test.ts`, então cada regra de
 * segurança abaixo tem prova executável e não só revisão de código.
 *
 * Origem: auditoria de autenticação (out/2026). Os três buracos que viraram regras
 * aqui:
 *  1. `${origin}${next}` no /auth/callback aceitava `@host` e `//host`, ou seja,
 *     um `?next=` controlado por terceiros mandava o usuário para fora do domínio
 *     depois do login (open redirect com sessão recém-criada).
 *  2. O login consultava "esse e-mail existe?" num endpoint antes de tentar a
 *     senha e devolvia "Email not found". Isso é um oráculo de enumeração de
 *     contas e ainda por cima escondia o caso real (conta criada pelo Google não
 *     tem senha).
 *  3. Qualquer falha do GoTrue virava 'Incorrect password', o que fez o dono da
 *     conta jurar que tinha digitado a senha errada quando na verdade o e-mail
 *     ainda não estava confirmado.
 */

/** Caminho interno seguro, sempre começado por `/`. */
export const SAFE_REDIRECT_FALLBACK = '/dashboard';

/**
 * Normaliza o `next`/`redirect` que veio de query string para um caminho relativo
 * do próprio app. Qualquer coisa que possa trocar de host é descartada e vira
 * `fallback`.
 *
 * Casos bloqueados (todos testados):
 *  - `https://evil.com` / `http://evil.com`  → não começa com `/`
 *  - `//evil.com`                            → protocol-relative
 *  - `/evil.com\@evil.com`                   → barra invertida confunde navegadores
 *  - `/@evil.com` é ACEITO: continua sendo caminho do próprio site.
 */
export function safeRedirectPath(
  raw: string | null | undefined,
  fallback: string = SAFE_REDIRECT_FALLBACK
): string {
  if (typeof raw !== 'string') return fallback;
  const valor = raw.trim();
  if (!valor.startsWith('/')) return fallback;
  if (valor.startsWith('//')) return fallback;
  if (valor.includes('\\')) return fallback;
  if (/[\r\n]/.test(valor)) return fallback;

  // URL base falsa: só para o parser validar caminho/query/hash. Se o input tiver
  // host embutido, o origin muda e a função rejeita.
  let url: URL;
  try {
    url = new URL(valor, 'http://voltris.invalid');
  } catch {
    return fallback;
  }
  if (url.origin !== 'http://voltris.invalid') return fallback;

  const caminho = url.pathname + url.search + url.hash;
  return caminho === '/' ? SAFE_REDIRECT_FALLBACK : caminho;
}

/** Destino final do callback OAuth, já com `/` isolado tratado. */
export function oauthDestination(next: string | null | undefined): string {
  const caminho = safeRedirectPath(next);
  return caminho === '/' ? SAFE_REDIRECT_FALLBACK : caminho;
}

export type AuthFailureKind =
  | 'invalid-credentials'
  | 'email-not-confirmed'
  | 'rate-limited'
  | 'unknown';

export interface AuthFailure {
  kind: AuthFailureKind;
  /** Texto em inglês: é a fonte de verdade do i18n (SiteTextTranslator). */
  message: string;
  /** Deve oferecer "Entrar com Google" / "definir senha" (conta sem senha). */
  suggestOAuth: boolean;
  /** Deve oferecer reenvio de confirmação de e-mail. */
  suggestConfirm: boolean;
}

/**
 * Converte o erro do GoTrue em uma única mensagem pública que não revela se o
 * e-mail existe. O GoTrue já devolve "Invalid login credentials" para os dois
 * casos (senha errada e usuário inexistente); a regra é não reconstruir o oráculo
 * no front.
 */
export function describeAuthFailure(codeOrMessage: string | null | undefined): AuthFailure {
  const texto = String(codeOrMessage ?? '').toLowerCase();

  if (/not confirmed|confirm your email|email confirmation|unconfirmed/.test(texto)) {
    return {
      kind: 'email-not-confirmed',
      message: 'Your email address is not confirmed yet. Check your inbox for the confirmation link, or send it again.',
      suggestOAuth: false,
      suggestConfirm: true,
    };
  }

  if (/too many|rate limit|attempt|for security purposes/.test(texto)) {
    return {
      kind: 'rate-limited',
      message: 'Too many attempts. Wait a minute and try again.',
      suggestOAuth: false,
      suggestConfirm: false,
    };
  }

  if (/invalid login credentials|invalid credentials|invalid password|password/.test(texto)) {
    return {
      kind: 'invalid-credentials',
      message: 'Email or password is incorrect. If you signed up with Google, use the Google button — or reset your password to set one.',
      suggestOAuth: true,
      suggestConfirm: false,
    };
  }

  return {
    kind: 'unknown',
    message: 'We could not sign you in. Check your credentials and try again.',
    suggestOAuth: true,
    suggestConfirm: false,
  };
}

/** Validação frouxa de e-mail: só para rotear "login por e-mail" vs "por username". */
export function looksLikeEmail(valor: string): boolean {
  const v = String(valor ?? '').trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/**
 * Username aceitável para o endpoint de login por username. O banco tem
 * profiles.login UNIQUE e a coluna é text; o limite evita varredura com payloads
 * absurdos e o padrão barra caracteres que poderiam montar cláusulas de ILIKE.
 */
export function isPlausibleLogin(valor: unknown): valor is string {
  return typeof valor === 'string' && /^[a-zA-Z0-9_.-]{2,50}$/.test(valor);
}

/**
 * Só responde true para provedores que a conta pode "ter" como identidade. Usado
 * pelo painel de conexões para não inventar provider que o projeto não habilitou.
 */
export const LINKABLE_PROVIDERS = ['google', 'github', 'apple', 'azure', 'facebook'] as const;
export type LinkableProvider = (typeof LINKABLE_PROVIDERS)[number];

export function isLinkableProvider(valor: unknown): valor is LinkableProvider {
  return typeof valor === 'string' && (LINKABLE_PROVIDERS as readonly string[]).includes(valor);
}

/**
 * Decisão do painel "Como você entra": precisa de pelo menos uma forma de entrar
 * restando, senão o unlink destrói o acesso da pessoa. O próprio GoTrue também
 * recusa, mas a UI deve explicar antes do clique.
 */
export function podeDesvincular(identidades: Array<{ provider: string }>, temSenha: boolean): boolean {
  if (identidades.length <= 1) return false;
  const restam = identidades.length - 1;
  return restam >= 1 || temSenha;
}
