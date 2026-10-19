/**
 * TEMPLATE LAYOUT + RENDERERS DE E-MAIL (FASE 3/4/5/6 da missão internacional).
 *
 * Porta do motor de templates do VOLTRIS Brasil (arquitetura auditada),
 * reescrito sobre a matriz i18n do INTL. Este arquivo é a ÚNICA porta de saída
 * HTML do projeto. Se um segundo módulo começar a escrever `<table>` de e-mail,
 * é aqui que a gente precisa corrigir.
 *
 * Regras de compatibilidade de cliente (missão §6):
 *   - Layout em `<table role="presentation">`. Gmail/Outlook ignoram flex/grid.
 *   - `bgcolor` + `<a>` é o único botão confiável no Outlook desktop.
 *   - SEM `border-radius` em `<td>`/`<tr>`: quinas saem diferentes por cliente,
 *     o que é pior do que canto reto consistente.
 *   - Degradê SEMPRE com `background-color` sólido de reserva por baixo.
 *   - `dir="rtl"` no `<body>` e no `<table>` raiz quando o idioma é RTL (árabe
 *     nos 15 suportados); a matriz `LOCALE_META` manda a direção.
 *   - Todo dado vindo do usuário passa por `escapeHtml` antes de entrar.
 *   - `text/plain` sempre presente (`alt` no `multipart`) — usuários de leitor
 *     só-texto não podem ver HTML cru.
 *   - 600px fixos com `max-width` para o mobile; fonte sistema (sem webfonts,
 *     que são bloqueadas por Gmail/Outlook por padrão).
 *
 * Identidade visual INTL: mesma paleta do site (rosa #FF4B6B, roxo #8B31FF,
 * azul #31A8FF) sobre base escura #08080c. Nada de "logo como imagem externa":
 * muitos clientes bloqueiam imagens e um e-mail sem logo é aceitável, um e-mail
 * com ícone quebrado não é.
 */

import {
    LOCALE_META,
    DEFAULT_LOCALE,
    normalizeLocale,
    type Locale,
} from './locale.ts';
import {
    emailCopy,
    interpolate,
    type EmailCopyKey,
} from './email-copy.ts';

// ============================================================================
// PALETA
// ============================================================================

export const COLORS = {
    bg: '#08080c',
    surface: '#12121a',
    surfaceAlt: '#1a1a26',
    border: '#2a2a3a',
    text: '#f2f3f7',
    textSoft: '#a8adbd',
    textMuted: '#6f7488',
    pink: '#FF4B6B',
    purple: '#8B31FF',
    blue: '#31A8FF',
    green: '#22c55e',
    amber: '#f59e0b',
    rose: '#f43f5e',
    cyan: '#22d3ee',
} as const;

const WIDTH = 600;

// ============================================================================
// ESCAPE (o único ponto de entrada de dados do usuário)
// ============================================================================

/**
 * Escapa para o contexto HTML/texto do e-mail. Ordem importa: `&` primeiro,
 * senão os outros escapes viram `&amp;lt;`.
 */
export function escapeHtml(value: unknown): string {
    if (value === null || value === undefined) return '';
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * Sanitiza uma URL antes de colocá-la no `href`. Bloqueia `javascript:` e
 * `data:` (vetor de XSS clássico em e-mail), aceita `https?://` e caminho
 * relativo. Se a URL vier lixo, devolve `#` (o botão fica inerte, mas o link
 * em texto abaixo ainda permite ao usuário colar o endereço).
 */
export function safeHref(url: string | null | undefined): string {
    const s = (url ?? '').trim();
    if (!s) return '#';
    if (/^https?:\/\//i.test(s)) return s;
    if (/^mailto:/i.test(s)) return s;
    if (s.startsWith('/')) return s;
    return '#';
}

// ============================================================================
// CONTEXT (URLs)
// ============================================================================

export interface EmailContext {
    siteUrl: string;
    supportEmail: string;
}

/**
 * URLs construídas a partir do ambiente — nunca hard-coded. Fallback é o domínio
 * oficial internacional, não o brasileiro.
 */
export function getEmailContext(): EmailContext {
    const site = (process.env.NEXT_PUBLIC_BASE_URL || 'https://www.voltrisoptimizer.com').replace(/\/$/, '');
    return {
        siteUrl: site,
        supportEmail: process.env.VOLTRIS_EMAIL || 'support@voltrisoptimizer.com',
    };
}

// ============================================================================
// TIPOS PÚBLICOS
// ============================================================================

export interface RenderedEmail {
    subject: string;
    /** Preheader curto exibido na listagem do cliente de e-mail. */
    preheader: string;
    html: string;
    text: string;
    /** Locale REALMENTE usado (auditoria; sempre um dos 15). */
    locale: Locale;
    /** Direção do layout (para o outbox registrar). */
    direction: 'ltr' | 'rtl';
}

// ============================================================================
// BLOCOS DE LAYOUT
// ============================================================================

/** Marca no topo: texto VOLTRIS + tagline do produto + barra tricolor. */
export function logoBlock(copy: (k: EmailCopyKey) => string): string {
    return `
        <tr>
          <td style="padding:32px 32px 20px 32px;" align="left">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="6" style="width:6px;background:${COLORS.pink};font-size:0;line-height:0;">&nbsp;</td>
                <td width="4" style="width:4px;background:${COLORS.purple};font-size:0;line-height:0;">&nbsp;</td>
                <td width="4" style="width:4px;background:${COLORS.blue};font-size:0;line-height:0;">&nbsp;</td>
                <td style="padding-left:16px;">
                  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:22px;font-weight:800;letter-spacing:2px;color:${COLORS.text};line-height:1;">VOLTRIS</div>
                  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;color:${COLORS.purple};padding-top:5px;">${escapeHtml(copy('brandTagline').toUpperCase())}</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>`;
}

/** Faixa colorida da marca (fallback sólido, sem degradê). */
export function brandBar(): string {
    return `
        <tr>
          <td height="5" style="height:5px;background:${COLORS.purple};font-size:0;line-height:0;mso-line-height-rule:exactly;">&nbsp;</td>
        </tr>`;
}

/** Cabeçalho com degradê + cor sólida por baixo (Outlook ignora linear-gradient). */
export function hero(kicker: string, title: string, subtitle?: string): string {
    return `
        <tr>
          <td align="center" bgcolor="${COLORS.surfaceAlt}"
              style="padding:0;background-color:${COLORS.surfaceAlt};background-image:linear-gradient(135deg, ${COLORS.pink} 0%, ${COLORS.purple} 52%, ${COLORS.blue} 100%);">
            <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:2.5px;color:rgba(255,255,255,0.82);padding-top:26px;text-transform:uppercase;">
              ${escapeHtml(kicker)}
            </div>
            <h1 style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:24px;font-weight:800;color:#ffffff;margin:10px 28px 0 28px;line-height:1.28;">
              ${escapeHtml(title)}
            </h1>
            ${subtitle
        ? `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.9);margin:10px 28px 26px 28px;line-height:1.55;">${escapeHtml(subtitle)}</div>`
        : '<div style="font-size:0;line-height:0;">&nbsp;</div>'}
          </td>
        </tr>`;
}

/**
 * Botão do e-mail. Sem border-radius de propósito (Outlook ignora silenciosa-
 * mente em `<td>`). O link em texto abaixo é OBRIGATÓRIO: se o botão quebrar,
 * o usuário ainda consegue colar a URL.
 */
export function button(label: string, href: string): string {
    const safeUrl = safeHref(href);
    return `
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:24px auto;">
          <tr>
            <td align="center" bgcolor="${COLORS.purple}" style="background-color:${COLORS.purple};">
              <a href="${escapeHtml(safeUrl)}"
                 style="display:inline-block;padding:14px 32px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.3px;">
                ${escapeHtml(label)}
              </a>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-top:8px;">
              <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:11px;color:${COLORS.textMuted};word-break:break-all;">
                ${escapeHtml(safeUrl === '#' ? '' : safeUrl)}
              </div>
            </td>
          </tr>
        </table>`;
}

/** Parágrafo padrão. */
export const paragraph = (text: string): string =>
    `<p style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:14px;color:${COLORS.textSoft};line-height:1.7;margin:0 0 14px 0;">${text}</p>`;

/** Caixa de aviso (nota cinza com borda). */
export function noteBlock(innerHtml: string): string {
    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:14px 0 4px 0;">
          <tr>
            <td style="background:${COLORS.surfaceAlt};border-left:3px solid ${COLORS.blue};padding:14px 18px;">
              <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:12px;color:${COLORS.textSoft};line-height:1.6;">
                ${innerHtml}
              </div>
            </td>
          </tr>
        </table>`;
}

/** Rodapé comum (copyright + suporte). */
export function footerBlock(copy: (k: EmailCopyKey) => string, ctx: EmailContext): string {
    const year = new Date().getFullYear();
    const copyright = interpolate(copy('footerCopyright'), { year });
    return `
        <tr>
          <td style="padding:24px 32px 32px 32px;border-top:1px solid ${COLORS.border};">
            <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:12px;color:${COLORS.textMuted};line-height:1.7;">
              ${escapeHtml(copyright)}<br>
              <a href="mailto:${escapeHtml(ctx.supportEmail)}" style="color:${COLORS.blue};text-decoration:none;">${escapeHtml(ctx.supportEmail)}</a>
              &nbsp;·&nbsp;
              <a href="${escapeHtml(safeHref(ctx.siteUrl))}" style="color:${COLORS.blue};text-decoration:none;">${escapeHtml(ctx.siteUrl.replace(/^https?:\/\//, ''))}</a>
            </div>
          </td>
        </tr>`;
}

// ============================================================================
// SHELL (envoltório do documento inteiro, com suporte RTL)
// ============================================================================

/**
 * Shell do documento. `dir` vem da matriz (`LOCALE_META[locale].direction`).
 * Sem `xmlns:v`, `xmlns:o` e `[if mso]` — são truques de template antigo e a
 * regra "compatível sem inventar" aqui é respeitar a ordem HTML5 padrão, que
 * Outlook moderno (2016+/Outlook.com) honra sem hacks.
 */
export function renderShell(opts: {
    locale: Locale;
    preheader: string;
    body: string;
}): string {
    const meta = LOCALE_META[opts.locale];
    const dir = meta.direction;
    const langAttr = opts.locale === 'pt-br' ? 'pt-BR' : opts.locale === 'zh-cn' ? 'zh-CN' : opts.locale.toUpperCase().split('-')[0];
    return `<!DOCTYPE html>
<html lang="${escapeHtml(langAttr)}" dir="${dir}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="dark light">
  <meta name="supported-color-schemes" content="dark light">
  <title>${escapeHtml(opts.preheader)}</title>
  <style>
    /* Só media query e dark-mode override. Todo o resto é inline, porque
       Gmail/Outlook removem <style> em algumas configurações. */
    @media only screen and (max-width:620px) {
      .voltris-shell { width:100% !important; }
      .voltris-pad  { padding-left:20px !important; padding-right:20px !important; }
    }
    @media (prefers-color-scheme: light) {
      .voltris-body { background-color:#f5f5f7 !important; }
    }
  </style>
</head>
<body class="voltris-body" style="margin:0;padding:0;background-color:${COLORS.bg};">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escapeHtml(opts.preheader)}</div>
  <table role="presentation" class="voltris-shell" width="${WIDTH}" cellpadding="0" cellspacing="0" border="0" align="center" dir="${dir}"
         style="width:100%;max-width:${WIDTH}px;background-color:${COLORS.surface};margin:0 auto;border-collapse:collapse;">
    ${opts.body}
  </table>
</body>
</html>`;
}

// ============================================================================
// RENDERERS DE AUTH (FASE 4 confirmação + FASE 5 recuperação)
// ============================================================================

export interface AuthEmailParams {
    /** E-mail de destino (já validado por quem chama). */
    to: string;
    /** Confirmação ou redefinição. */
    kind: 'confirmation' | 'recovery';
    /** Link gerado pelo Supabase Auth (`?confirmation_token=` / `?token=`). */
    actionUrl: string;
    /** Locale bruto do perfil / metadata / header; será normalizado aqui. */
    locale: string;
    /** Nome para a saudação. Pode vir vazio (caímos na forma sem nome). */
    firstName?: string | null;
    /** Minutos até o link expirar. Default 60 (Supabase padrão). */
    expiryMinutes?: number;
}

/**
 * Monta o e-mail de AUTH (confirmação de conta OU recuperação de senha) no
 * idioma resolvido. Este é o render chamado pelo Send Email Hook do Supabase.
 *
 * Nunca lança por idioma: `normalizeLocale` manda lixo para 'en', que é a
 * referência da matriz, e o e-mail sai legível.
 */
export function renderAuthEmail(params: AuthEmailParams): RenderedEmail {
    const locale = normalizeLocale(params.locale) as Locale;
    const copy = (key: EmailCopyKey) => emailCopy(locale, key);
    const ctx = getEmailContext();
    const minutes = params.expiryMinutes ?? 60;

    const name = (params.firstName ?? '').trim();
    const firstNameForCopy = name ? name.split(' ')[0] : '';

    // Cumprimento: com nome quando houver, sem nome quando não houver.
    const greeting = firstNameForCopy
        ? interpolate(copy('greetingHelloName'), { first_name: firstNameForCopy })
        : copy('greetingHello');

    const isConfirm = params.kind === 'confirmation';

    const subject = copy(isConfirm ? 'confirmSubject' : 'recoverSubject');
    const preheader = copy(isConfirm ? 'confirmPreheader' : 'recoverPreheader');
    const heading = copy(isConfirm ? 'confirmHeading' : 'recoverHeading');
    const kicker = isConfirm ? 'VOLTRIS' : 'VOLTRIS';
    const bodyLine = interpolate(
        copy(isConfirm ? 'confirmBody' : 'recoverBody'),
        { first_name: firstNameForCopy }
    );
    const ctaLabel = copy(isConfirm ? 'confirmCta' : 'recoverCta');
    const ignoreLine = copy(isConfirm ? 'confirmIgnore' : 'recoverIgnore');
    const expiryLine = isConfirm
        ? interpolate(copy('confirmExpiry'), { minutes })
        : '';
    const securityLine = copy('securityNote');
    const supportLine = copy('footerSupport');

    const body = `
        ${logoBlock(copy)}
        ${brandBar()}
        ${hero(kicker, heading)}
        <tr><td class="voltris-pad" style="padding:26px 32px 8px 32px;">
          ${paragraph(escapeHtml(greeting))}
          ${paragraph(escapeHtml(bodyLine))}
          ${button(ctaLabel, params.actionUrl)}
          ${expiryLine ? noteBlock(`<div>${escapeHtml(expiryLine)}</div>`) : ''}
          ${noteBlock(`
            <div>${escapeHtml(securityLine)}</div>
            <div style="margin-top:8px;">${escapeHtml(ignoreLine)}</div>
          `)}
        </td></tr>
        ${footerBlock(copy, ctx)}
    `;

    // text/plain alternativo (mesmo conteúdo, sem markup).
    const textLines: string[] = [
        heading,
        '',
        greeting,
        bodyLine,
        '',
        `${ctaLabel}: ${params.actionUrl}`,
        '',
    ];
    if (expiryLine) textLines.push(expiryLine);
    textLines.push(securityLine);
    textLines.push(ignoreLine);
    textLines.push('');
    textLines.push(supportLine);
    textLines.push(`${ctx.siteUrl.replace(/^https?:\/\//, '')} · ${ctx.supportEmail}`);

    const html = renderShell({ locale, preheader, body });

    return {
        subject,
        preheader,
        html,
        text: textLines.filter(Boolean).join('\n'),
        locale,
        direction: LOCALE_META[locale].direction,
    };
}

/**
 * Helper para o Send Email Hook: gera o mailto de suporte sem sair do padrão.
 * Não é usado dentro do render acima (que usa `<a href="mailto:...">` direto);
 * fica exposto para testes e futuras extensões.
 */
export function supportMailto(): string {
    const ctx = getEmailContext();
    return `mailto:${ctx.supportEmail}`;
}
