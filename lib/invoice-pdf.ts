/**
 * Renderer do PDF de fatura (FASE 8/9/10 da missão VOLTRIS INTERNACIONAL).
 *
 * Usa `pdf-lib` + `StandardFonts.Helvetica/HelveticaBold`. Restrição técnica
 * inescapável: a codificação `WinAnsi` (cp1252) destes fontes cobre latim +
 * acentos ocidentais, **€** e **¥**, mas NÃO cobre coreano (₩), polonês (ł),
 * cirílico, CJK ou árabe. Para não corromper bytes no PDF:
 *
 *  - **Rótulos** do PDF: `pdfCopyLocale(locale)` cai para `en` nos idiomas sem
 *    cobertura Unicode no fonte base (`ja/ko/zh-cn/ru/ar`). O corpo do E-MAIL
 *    continua nativo.
 *  - **Números de moeda**: sempre formatados em `en-US` sem símbolo (usando
 *    código ISO depois do valor), para nunca quebrar em cp1252.
 *  - **Datas**: `en-GB medium` → "19 Oct 2026" — legível em todo lugar.
 *
 * Se um dia embutirmos um TTF Unicode (via `fontkit`), só o `sanitized()`
 * some; nada mais muda.
 */

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import type { Locale } from './locale.ts';
import { LOCALE_META } from './locale.ts';
import { invoiceCopy, pdfCopyLocale, type InvoiceCopyKey } from './invoice-copy.ts';
import {
    formatMoney,
    formatDate,
    formatDateRange,
    type InvoiceData,
} from './invoice-data.ts';

// Paleta institucional da marca internacional (mesma dos e-mails).
const BRAND_PURPLE = rgb(0x8B / 255, 0x31 / 255, 0xFF / 255);
const BRAND_DARK_BG = rgb(0x08 / 255, 0x08 / 255, 0x0c / 255);
const BRAND_LIGHT_TEXT = rgb(0xF5 / 255, 0xF6 / 255, 0xFA / 255);
const INK = rgb(0x11 / 255, 0x13 / 255, 0x18 / 255);
const INK_MUTED = rgb(0x55 / 255, 0x5a / 255, 0x66 / 255);
const RULE = rgb(0xD9 / 255, 0xDD / 255, 0xE4 / 255);
const BADGE_PAID = rgb(0x18 / 255, 0x8f / 255, 0x4a / 255);
const BADGE_PENDING = rgb(0xB4 / 255, 0x7A / 255, 0x00 / 255);
const BADGE_REFUND = rgb(0x2E / 255, 0x6C / 255, 0xC7 / 255);
const BADGE_CANCELED = rgb(0x9A / 255, 0x3A / 255, 0x3A / 255);

const PAGE_W = 595.28; // A4 portrait
const PAGE_H = 841.89;
const MARGIN_X = 48;
const MARGIN_TOP = 56;
const MARGIN_BOTTOM = 60;

/**
 * Codifica o texto para WinAnsi: troca por `?` qualquer caractere fora de
 * cp1252. Não é lossless por design — é a prova visível de que o locale
 * escolheu rótulo English (sanitized já devia ter evitado, mas se um dado
 * arbitrário vier do banco, isto impede crash).
 */
function sanitizeWinAnsi(input: string): string {
    let out = '';
    for (const ch of input) {
        const code = ch.codePointAt(0)!;
        if (code === 0x0A || code === 0x0D || code === 0x09) { out += ch; continue; }
        if (code < 0x20) continue; // remove controles
        // cp1252 cobre 0x20-0x7E e 0xA0-0xFF com exceções; aproximamos.
        if (code <= 0x7E) { out += ch; continue; }
        if (code >= 0xA0 && code <= 0xFF) { out += ch; continue; }
        // Substituições úteis para símbolos monetários comuns.
        if (code === 0x20AC) { out += '€'; continue; } // € está em cp1252 0x80
        if (code === 0xFFFD) { out += '?'; continue; }
        out += '?';
    }
    return out;
}

interface Font { name: StandardFonts; size: number; bold?: boolean }

/** Locale-native só quando a fonte padrão cobre; senão English. */
function pickLocale(target: Locale): Locale {
    return pdfCopyLocale(target);
}

/**
 * Data no PDF SEMPRE em `en-GB` para ser legível na página. Locale afeta só
 * os RÓTULULOS. (O e-mail mantém a data nativa do idioma.)
 */
function formatPdfDate(iso: string | null | undefined): string {
    if (!iso) return '—';
    const t = new Date(iso).getTime();
    if (!Number.isFinite(t)) return '—';
    try {
        return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(new Date(t));
    } catch {
        return iso.slice(0, 10);
    }
}

function formatPdfDateRange(startISO: string | null | undefined, endISO: string | null | undefined): string {
    if (!startISO && !endISO) return '—';
    const a = formatPdfDate(startISO);
    const b = formatPdfDate(endISO);
    if (a === '—') return b;
    if (b === '—') return a;
    return `${a} - ${b}`;
}

/**
 * Moeda SEMPRE em `en-US` no PDF (sem símbolo não-cp1252), com código ISO
 * depois do valor. Ex.: `12,000.00 KRW`, `€1,500.00`, `¥12,000`.
 * Estratégia: tenta Intl nativo em `en-US`; se o output tiver char fora de
 * cp1252, remove o símbolo e apende o código.
 */
function formatPdfMoney(value: number, currency: string): string {
    const code = String(currency).toUpperCase();
    let formatted = '';
    try {
        formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: code,
            minimumFractionDigits: currency.toLowerCase() === 'jpy' || currency.toLowerCase() === 'krw' ? 0 : 2,
            maximumFractionDigits: currency.toLowerCase() === 'jpy' || currency.toLowerCase() === 'krw' ? 0 : 2,
        }).format(value);
    } catch {
        formatted = `${code} ${value.toFixed(2)}`;
    }
    if (isWinAnsiSafe(formatted)) return formatted;
    // Fallback: só dígitos + separadores + código ISO.
    const digitsOnly = formatted.replace(/[^0-9.,\-]/g, '').trim();
    return `${digitsOnly} ${code}`;
}

function isWinAnsiSafe(s: string): boolean {
    for (const ch of s) {
        const code = ch.codePointAt(0)!;
        if (code < 0x20 || code === 0x7F) continue;
        if (code <= 0x7E) continue;
        if (code >= 0xA0 && code <= 0xFF) continue;
        if (code === 0x20AC) continue; // €
        return false;
    }
    return true;
}

// ---------------------------------------------------------------------------
// API principal
// ---------------------------------------------------------------------------

export interface RenderInvoicePdfOptions {
    /** Sobrescreve o locale-alvo do PDF (para auditoria de fallback). */
    forceCopyLocale?: Locale;
}

/**
 * Gera o PDF. Retorna `Uint8Array` pronto para `new Response(bytes)`.
 *
 * Locale do PDF (labels) = `pdfCopyLocale(invoice.locale)`, exceto se
 * `forceCopyLocale` vier setado (usado em teste).
 */
export async function renderInvoicePdf(
    invoice: InvoiceData,
    options: RenderInvoicePdfOptions = {},
): Promise<Uint8Array> {
    const pdf = await PDFDocument.create();
    pdf.setProducer('Voltris Optimizer International');
    pdf.setCreator('Voltris Invoice Service');
    pdf.setTitle(`Invoice ${invoice.invoiceNumber}`);
    pdf.setAuthor(invoice.company.legalName !== '—' ? invoice.company.legalName : 'Voltris');

    const regular = await pdf.embedFont(StandardFonts.Helvetica);
    const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
    const page = pdf.addPage([PAGE_W, PAGE_H]);

    const copyLocale = options.forceCopyLocale ?? pickLocale(invoice.locale);
    const t = (k: InvoiceCopyKey) => invoiceCopy(copyLocale, k);

    // --- Top bar da marca
    page.drawRectangle({ x: 0, y: PAGE_H - 90, width: PAGE_W, height: 90, color: BRAND_DARK_BG });
    page.drawText(sanitizeWinAnsi(invoice.company.displayName || 'VOLTRIS'), {
        x: MARGIN_X, y: PAGE_H - 45, size: 22, font: bold, color: BRAND_LIGHT_TEXT,
    });
    page.drawText(sanitizeWinAnsi(t('docTitle')), {
        x: PAGE_W - MARGIN_X - 140, y: PAGE_H - 45, size: 22, font: bold, color: BRAND_PURPLE,
    });
    page.drawText(sanitizeWinAnsi(`${t('docNumberLabel')}: ${invoice.invoiceNumber}`), {
        x: PAGE_W - MARGIN_X - 260, y: PAGE_H - 68, size: 10, font: regular, color: BRAND_LIGHT_TEXT,
    });

    // --- Status badge (canto direito, abaixo da header bar)
    const badgeColor = pickStatusColor(invoice.status, t);
    drawStatusBadge(page, { x: PAGE_W - MARGIN_X - 130, y: PAGE_H - 138 }, badgeColor.label, badgeColor.color, bold);

    // --- Metadados (Emitida / Vencimento / Período)
    let cursorY = PAGE_H - MARGIN_TOP - 100;
    cursorY = drawMetaLine(page, regular, bold, cursorY, t('issuedOnLabel'), formatPdfDate(invoice.issueDateISO));
    cursorY = drawMetaLine(page, regular, bold, cursorY, t('dueDateLabel'), formatPdfDate(invoice.dueDateISO));
    cursorY = drawMetaLine(page, regular, bold, cursorY, t('servicePeriodLabel'), formatPdfDateRange(invoice.periodStartISO, invoice.periodEndISO));

    // --- Blocos De / Cliente
    cursorY -= 10;
    const leftX = MARGIN_X;
    const rightX = PAGE_W / 2 + 20;
    drawPartyBlock(page, { x: leftX, y: cursorY }, regular, bold, t('companyBlock'), [
        invoice.company.legalName,
        invoice.companyAddressLine,
        invoice.company.taxId !== '—' ? `${invoice.company.taxIdLabel}: ${invoice.company.taxId}` : '',
        invoice.company.email,
        invoice.company.website,
    ].filter(Boolean));
    drawPartyBlock(page, { x: rightX, y: cursorY }, regular, bold, t('customerBlock'), [
        invoice.customerName,
        invoice.customerEmail,
    ].filter(Boolean));
    cursorY -= 110;
    // --- Tabela de itens
    cursorY = drawLineItemsTable(page, { x: MARGIN_X, y: cursorY }, regular, bold, invoice, t, copyLocale);

    // --- Totais (à direita, abaixo da tabela)
    cursorY = drawTotals(page, { x: PAGE_W - MARGIN_X - 220, y: cursorY }, regular, bold, invoice, t, copyLocale);

    // --- Nota de licença (se houver)
    if (invoice.licenseKey) {
        cursorY -= 12;
        cursorY = drawMetaLine(page, regular, bold, cursorY, t('licenseKeyLabel'), invoice.licenseKey);
        if (invoice.licenseExpiresISO) {
            cursorY = drawMetaLine(page, regular, bold, cursorY, t('licenseExpiresLabel'), formatPdfDate(invoice.licenseExpiresISO));
        }
    }

    // --- Thank-you + footer legal
    cursorY -= 20;
    page.drawLine({
        start: { x: MARGIN_X, y: cursorY },
        end: { x: PAGE_W - MARGIN_X, y: cursorY },
        thickness: 0.6, color: RULE,
    });
    cursorY -= 20;
    page.drawText(sanitizeWinAnsi(t('thankYouNote')), {
        x: MARGIN_X, y: cursorY, size: 11, font: bold, color: BRAND_PURPLE,
    });
    cursorY -= 18;
    page.drawText(sanitizeWinAnsi(t('footerLegal')), {
        x: MARGIN_X, y: cursorY, size: 9, font: regular, color: INK_MUTED,
    });
    cursorY -= 14;
    page.drawText(sanitizeWinAnsi(
        t('footerContact').replace('{supportEmail}', invoice.supportEmail),
    ), {
        x: MARGIN_X, y: cursorY, size: 9, font: regular, color: INK_MUTED,
    });

    // --- Rodapé com número de página
    drawFooter(page, regular, invoice.invoiceNumber);

    return pdf.save();
}

// ---------------------------------------------------------------------------
// Primitivos de desenho
// ---------------------------------------------------------------------------

function pickStatusColor(status: InvoiceData['status'], t: (k: InvoiceCopyKey) => string): { label: string; color: ReturnType<typeof rgb> } {
    switch (status) {
        case 'paid': return { label: t('statusPaid'), color: BADGE_PAID };
        case 'refunded': return { label: t('statusRefunded'), color: BADGE_REFUND };
        case 'past_due': return { label: t('statusPastDue'), color: BADGE_CANCELED };
        case 'canceled': return { label: t('statusCanceled'), color: BADGE_CANCELED };
        default: return { label: t('statusPending'), color: BADGE_PENDING };
    }
}

function drawStatusBadge(
    page: ReturnType<PDFDocument['addPage']>,
    pos: { x: number; y: number },
    label: string,
    color: ReturnType<typeof rgb>,
    bold: Awaited<ReturnType<PDFDocument['embedFont']>>,
) {
    const width = 120, height = 24;
    page.drawRectangle({ x: pos.x, y: pos.y, width, height, color });
    const text = sanitizeWinAnsi(label.toUpperCase());
    const textWidth = bold.widthOfTextAtSize(text, 10);
    page.drawText(text, {
        x: pos.x + (width - textWidth) / 2,
        y: pos.y + height / 2 - 4,
        size: 10, font: bold, color: rgb(1, 1, 1),
    });
}

function drawMetaLine(
    page: ReturnType<PDFDocument['addPage']>,
    regular: Awaited<ReturnType<PDFDocument['embedFont']>>,
    bold: Awaited<ReturnType<PDFDocument['embedFont']>>,
    y: number,
    label: string,
    value: string,
): number {
    page.drawText(sanitizeWinAnsi(label), {
        x: MARGIN_X, y, size: 9, font: regular, color: INK_MUTED,
    });
    page.drawText(sanitizeWinAnsi(value), {
        x: MARGIN_X + 140, y, size: 10, font: bold, color: INK,
    });
    return y - 18;
}

function drawPartyBlock(
    page: ReturnType<PDFDocument['addPage']>,
    pos: { x: number; y: number },
    regular: Awaited<ReturnType<PDFDocument['embedFont']>>,
    bold: Awaited<ReturnType<PDFDocument['embedFont']>>,
    heading: string,
    lines: string[],
) {
    page.drawText(sanitizeWinAnsi(heading.toUpperCase()), {
        x: pos.x, y: pos.y, size: 9, font: bold, color: BRAND_PURPLE,
    });
    let y = pos.y - 16;
    for (const line of lines) {
        page.drawText(sanitizeWinAnsi(line), {
            x: pos.x, y, size: 10, font: regular, color: INK, maxWidth: PAGE_W / 2 - MARGIN_X - 20,
        });
        y -= 14;
    }
}

function drawLineItemsTable(
    page: ReturnType<PDFDocument['addPage']>,
    pos: { x: number; y: number },
    regular: Awaited<ReturnType<PDFDocument['embedFont']>>,
    bold: Awaited<ReturnType<PDFDocument['embedFont']>>,
    invoice: InvoiceData,
    t: (k: InvoiceCopyKey) => string,
    copyLocale: Locale,
): number {
    const cols = [
        { label: t('descriptionCol'), x: pos.x, width: 260, align: 'left' as const },
        { label: t('qtyCol'), x: pos.x + 270, width: 50, align: 'center' as const },
        { label: t('unitPriceCol'), x: pos.x + 330, width: 100, align: 'right' as const },
        { label: t('totalCol'), x: pos.x + 440, width: 100, align: 'right' as const },
    ];
    // Header row
    let y = pos.y;
    page.drawRectangle({ x: pos.x - 8, y: y - 4, width: PAGE_W - MARGIN_X * 2 + 16, height: 22, color: rgb(0xF5 / 255, 0xF6 / 255, 0xFA / 255) });
    for (const c of cols) {
        // Sanitize **antes** de medir: `widthOfTextAtSize` também usa a
        // Encoding WinAnsi por dentro e lança se o char estiver fora de
        // cp1252 (mesmo cenário do drawText).
        const headerText = sanitizeWinAnsi(c.label.toUpperCase());
        const headerW = bold.widthOfTextAtSize(headerText, 9);
        page.drawText(headerText, {
            x: c.align === 'right' ? c.x + c.width - headerW
                : c.align === 'center' ? c.x + c.width / 2 - headerW / 2
                    : c.x,
            y, size: 9, font: bold, color: INK_MUTED,
        });
    }
    y -= 22;
    // Rows
    for (const item of invoice.lineItems) {
        const qty = sanitizeWinAnsi(String(item.quantity));
        const unit = sanitizeWinAnsi(formatMoneyPdf(item.unitPrice, invoice.currency));
        const tot = sanitizeWinAnsi(formatMoneyPdf(item.lineTotal, invoice.currency));
        const desc = sanitizeWinAnsi(item.description);
        page.drawText(desc, {
            x: cols[0].x, y, size: 10, font: regular, color: INK, maxWidth: cols[0].width,
        });
        page.drawText(qty, {
            x: cols[1].x + cols[1].width / 2 - regular.widthOfTextAtSize(qty, 10) / 2, y, size: 10, font: regular, color: INK,
        });
        page.drawText(unit, {
            x: cols[2].x + cols[2].width - regular.widthOfTextAtSize(unit, 10), y, size: 10, font: regular, color: INK,
        });
        page.drawText(tot, {
            x: cols[3].x + cols[3].width - regular.widthOfTextAtSize(tot, 10), y, size: 10, font: bold, color: INK,
        });
        page.drawLine({
            start: { x: pos.x - 8, y: y - 8 },
            end: { x: PAGE_W - MARGIN_X + 8, y: y - 8 },
            thickness: 0.5, color: RULE,
        });
        y -= 26;
    }
    return y - 6;
}

function drawTotals(
    page: ReturnType<PDFDocument['addPage']>,
    pos: { x: number; y: number },
    regular: Awaited<ReturnType<PDFDocument['embedFont']>>,
    bold: Awaited<ReturnType<PDFDocument['embedFont']>>,
    invoice: InvoiceData,
    t: (k: InvoiceCopyKey) => string,
    copyLocale: Locale,
): number {
    let y = pos.y;
    const rows = [
        { label: t('subtotalLabel'), value: formatMoneyPdf(invoice.subtotal, invoice.currency), bold: false },
        { label: t('taxLabel'), value: formatMoneyPdf(invoice.tax, invoice.currency), bold: false },
    ];
    for (const r of rows) {
        const lblText = sanitizeWinAnsi(r.label);
        const valText = sanitizeWinAnsi(r.value);
        page.drawText(lblText, { x: pos.x, y, size: 10, font: regular, color: INK_MUTED });
        page.drawText(valText, {
            x: pos.x + 220 - regular.widthOfTextAtSize(valText, 10), y, size: 10, font: regular, color: INK,
        });
        y -= 18;
    }
    page.drawLine({ start: { x: pos.x, y: y + 4 }, end: { x: pos.x + 220, y: y + 4 }, thickness: 0.7, color: RULE });
    y -= 12;
    const totalLabel = sanitizeWinAnsi(t('totalDueLabel'));
    const totalValue = sanitizeWinAnsi(formatMoneyPdf(invoice.totalDue, invoice.currency));
    page.drawText(totalLabel, { x: pos.x, y, size: 12, font: bold, color: INK });
    page.drawText(totalValue, {
        x: pos.x + 220 - bold.widthOfTextAtSize(totalValue, 12), y, size: 12, font: bold, color: BRAND_PURPLE,
    });
    return y - 22;
}

function drawFooter(
    page: ReturnType<PDFDocument['addPage']>,
    regular: Awaited<ReturnType<PDFDocument['embedFont']>>,
    invoiceNumber: string,
) {
    const text = sanitizeWinAnsi(`Voltris · Invoice ${invoiceNumber}`);
    const w = regular.widthOfTextAtSize(text, 8);
    page.drawText(text, {
        x: (PAGE_W - w) / 2, y: 30, size: 8, font: regular, color: INK_MUTED,
    });
}

/** Wrapper local para uso dentro do renderer PDF (força en-US + fallback). */
function formatMoneyPdf(value: number, currency: string): string {
    return formatPdfMoney(value, currency);
}

/** Exportado só para teste; nada além usa. */
export const __test = {
    sanitizeWinAnsi,
    isWinAnsiSafe,
    formatPdfMoney,
    formatPdfDate,
    formatPdfDateRange,
    pickLocale,
};

/** Re-export para compatibilidade com o caller do email que formata em locale-native. */
export { formatMoney, formatDate, formatDateRange, LOCALE_META };
export type { InvoiceData };
