/**
 * Fonte única de verdade sobre "o perfil do usuário está 100% completo?" e sobre
 * como o telefone é guardado em padrão internacional.
 *
 * Assim como lib/auth-safe.ts, este arquivo é puro (nenhum import de @/ nem de
 * supabase-js de propósito): ele é exercitado direto por
 * `node --test tests/profile-completeness.test.ts`, então cada regra abaixo tem
 * prova executável, não só revisão de código. O mesmo módulo é usado pelo
 * /auth/callback (server), pelo gate do dashboard (client) e pelo ProfileClient,
 * garantindo que os três discordem zero sobre o que significa "completo".
 *
 * Contexto (site internacional): o cadastro manual já grava o telefone em E.164
 * com "+" (ex.: "+5511999999999"), porque junta o DDI do país ao número nacional.
 * O editor de perfil precisa usar exatamente o mesmo formato, senão o DDI aparece
 * duplicado ou se perde ao trocar de país. As funções toE164/nationalPart fazem
 * essa ponte de forma determinística usando o DDI conhecido do país.
 */

/**
 * A forma mínima aceita: qualquer objeto (interface `Profile`, um literal do
 * formulário, o registro vindo do Supabase) ou null/undefined. O corpo de
 * missingProfileFields faz o guard de tipo e o cast para índice.
 */
export type ProfileLike = object | null | undefined;

/**
 * Os oito campos que a VOLTRIS exige de TODO usuário, independente do país.
 * É a definição canônica de "cadastro completo": nome, usuário, país, telefone,
 * CEP/código postal, cidade, estado/província e endereço.
 */
export const REQUIRED_PROFILE_FIELDS = [
  'full_name',
  'login',
  'country',
  'phone',
  'address',
  'city',
  'state',
  'cep',
] as const;

export type RequiredProfileField = (typeof REQUIRED_PROFILE_FIELDS)[number];

/** Rótulos em inglês (fonte do i18n) para mensagens de "faltam campos". */
export const REQUIRED_PROFILE_LABELS: Record<RequiredProfileField, string> = {
  full_name: 'Full name',
  login: 'Username',
  country: 'Country',
  phone: 'Phone / WhatsApp',
  address: 'Address',
  city: 'City',
  state: 'State',
  cep: 'ZIP / Postal Code',
};

function isFilled(value: unknown): boolean {
  return value != null && String(value).trim() !== '';
}

/** Lista os campos obrigatórios ainda vazios (null, '' ou só espaços). */
export function missingProfileFields(profile: ProfileLike): RequiredProfileField[] {
  if (!profile || typeof profile !== 'object') {
    return [...REQUIRED_PROFILE_FIELDS];
  }
  const out: RequiredProfileField[] = [];
  for (const field of REQUIRED_PROFILE_FIELDS) {
    if (!isFilled((profile as Record<string, unknown>)[field])) out.push(field);
  }
  return out;
}

/** Verdadeiro só quando TODOS os campos obrigatórios estão preenchidos. */
export function isProfileComplete(profile: ProfileLike): boolean {
  return missingProfileFields(profile).length === 0;
}

// ---------------------------------------------------------------------------
// Telefone internacional (E.164)
// ---------------------------------------------------------------------------

/** Só dígitos de uma string de telefone. */
export function phoneDigits(value: string | null | undefined): string {
  return String(value ?? '').replace(/\D/g, '');
}

/**
 * Monta o número canônico para o banco: DDI (com "+") + dígitos nacionais.
 * `dialCode` chega como "+55" (formato de DIAL_CODES). Aceita também "+55", "55"
 * ou "0055" e sempre devolve com "+". Se não houver número, devolve ''.
 */
export function toE164(dialCode: string, national: string): string {
  const digits = phoneDigits(national);
  if (!digits) return '';
  const ddi = phoneDigits(dialCode);
  if (!ddi) return `+${digits}`;
  return `+${ddi}${digits}`;
}

/**
 * Recupera a parte nacional (sem DDI) de um número já salvo, usando o DDI do país.
 * Como o DDI é conhecido, o recorte é exato mesmo quando o próprio DDD nacional
 * começa com os mesmos dígitos do DDI (ex.: Brasil DDI 55 + DDD 55).
 * Se o salvo não começar com o DDI (legado só-nacional), devolve os dígitos tal qual.
 */
export function nationalPart(dialCode: string, stored: string | null | undefined): string {
  const digits = phoneDigits(stored);
  const ddi = phoneDigits(dialCode);
  if (ddi && digits.length > ddi.length && digits.startsWith(ddi)) {
    return digits.slice(ddi.length);
  }
  return digits;
}

/**
 * Regra leve e mundial de plausibilidade do número nacional (sem DDI):
 *  - Brasil: 10 (fixo) ou 11 (celular) dígitos.
 *  - Demais países: entre 6 e 15 dígitos (faixa do padrão E.164 para o assinante).
 * Não valida operadora nem formato local — só impede números obviously incompletos
 * de travar a emissão de nota fiscal / suporte, sem ofender nenhum país.
 */
export function isPhonePlausible(country: string, national: string): boolean {
  const digits = phoneDigits(national);
  if (country === 'Brazil') return digits.length === 10 || digits.length === 11;
  return digits.length >= 6 && digits.length <= 15;
}
