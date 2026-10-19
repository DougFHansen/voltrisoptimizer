/**
 * Rótulos do PDF de fatura nos 15 idiomas suportados (FASE 8/9/10 da missão
 * VOLTRIS INTERNACIONAL).
 *
 * IMPORTANTE — limitação de fonte: `pdf-lib` com `StandardFonts` só cobre
 * WinAnsiEncoding (latim + acentos ocidentais). Para **ja/ko/zh-cn/ru/ar**
 * o renderer (`lib/invoice-pdf.ts`) cai para **English** nos rótulos do PDF,
 * mas a moeda e o formato de data continuam locais. Isso é um trade-off
 * consciente para não embutir TTFs Unicode no bundle. Os mesmos rótulos em
 * UTF-8 são usados no corpo do e-mail (HTML) nesses idiomas, sem problema.
 */

import type { Locale } from './locale.ts';

export type InvoiceCopyKey =
    | 'docTitle'
    | 'docNumberLabel'
    | 'billToLabel'
    | 'issuedOnLabel'
    | 'dueDateLabel'
    | 'servicePeriodLabel'
    | 'planLabel'
    | 'descriptionCol'
    | 'qtyCol'
    | 'unitPriceCol'
    | 'totalCol'
    | 'subtotalLabel'
    | 'taxLabel'
    | 'totalDueLabel'
    | 'statusPaid'
    | 'statusPending'
    | 'statusRefunded'
    | 'statusPastDue'
    | 'statusCanceled'
    | 'licenseKeyLabel'
    | 'licenseExpiresLabel'
    | 'customerBlock'
    | 'companyBlock'
    | 'thankYouNote'
    | 'footerLegal'
    | 'footerContact';

const COPY: Record<Locale, Record<InvoiceCopyKey, string>> = {
    'en': {
        docTitle: 'INVOICE', docNumberLabel: 'Invoice #', billToLabel: 'Bill to',
        issuedOnLabel: 'Issued on', dueDateLabel: 'Due date', servicePeriodLabel: 'Service period', planLabel: 'Plan',
        descriptionCol: 'Description', qtyCol: 'Qty', unitPriceCol: 'Unit price', totalCol: 'Total',
        subtotalLabel: 'Subtotal', taxLabel: 'Tax', totalDueLabel: 'Total due',
        statusPaid: 'PAID', statusPending: 'PENDING', statusRefunded: 'REFUNDED',
        statusPastDue: 'PAST DUE', statusCanceled: 'CANCELED',
        licenseKeyLabel: 'License key', licenseExpiresLabel: 'License expires',
        customerBlock: 'Customer', companyBlock: 'From',
        thankYouNote: 'Thank you for your business.',
        footerLegal: 'This invoice was issued electronically and is valid without signature.',
        footerContact: 'Questions? {supportEmail}',
    },
    'es': {
        docTitle: 'FACTURA', docNumberLabel: 'Factura n.º', billToLabel: 'Facturar a',
        issuedOnLabel: 'Emitida el', dueDateLabel: 'Vencimiento', servicePeriodLabel: 'Periodo del servicio', planLabel: 'Plan',
        descriptionCol: 'Descripción', qtyCol: 'Cant.', unitPriceCol: 'Precio unit.', totalCol: 'Total',
        subtotalLabel: 'Subtotal', taxLabel: 'Impuesto', totalDueLabel: 'Total a pagar',
        statusPaid: 'PAGADA', statusPending: 'PENDIENTE', statusRefunded: 'REEMBOLSADA',
        statusPastDue: 'VENCIDA', statusCanceled: 'CANCELADA',
        licenseKeyLabel: 'Clave de licencia', licenseExpiresLabel: 'La licencia vence',
        customerBlock: 'Cliente', companyBlock: 'De',
        thankYouNote: 'Gracias por su compra.',
        footerLegal: 'Esta factura se emitió electrónicamente y es válida sin firma.',
        footerContact: '¿Preguntas? {supportEmail}',
    },
    'fr': {
        docTitle: 'FACTURE', docNumberLabel: 'Facture n°', billToLabel: 'Facturer à',
        issuedOnLabel: 'Émise le', dueDateLabel: "Date d'échéance", servicePeriodLabel: 'Période de service', planLabel: 'Formule',
        descriptionCol: 'Désignation', qtyCol: 'Qté', unitPriceCol: 'Prix unitaire', totalCol: 'Total',
        subtotalLabel: 'Sous-total', taxLabel: 'Taxe', totalDueLabel: 'Total à payer',
        statusPaid: 'PAYÉE', statusPending: 'EN ATTENTE', statusRefunded: 'REMBOURSÉE',
        statusPastDue: 'EXPIRÉE', statusCanceled: 'ANNULÉE',
        licenseKeyLabel: 'Clé de licence', licenseExpiresLabel: 'Licence expire le',
        customerBlock: 'Client', companyBlock: 'Émetteur',
        thankYouNote: 'Merci de votre confiance.',
        footerLegal: 'Cette facture a été émise électroniquement et est valable sans signature.',
        footerContact: 'Une question ? {supportEmail}',
    },
    'de': {
        docTitle: 'RECHNUNG', docNumberLabel: 'Rechnungs-Nr.', billToLabel: 'Rechnungsempfänger',
        issuedOnLabel: 'Ausgestellt am', dueDateLabel: 'Fällig am', servicePeriodLabel: 'Zeitraum', planLabel: 'Tarif',
        descriptionCol: 'Bezeichnung', qtyCol: 'Menge', unitPriceCol: 'Einzelpreis', totalCol: 'Betrag',
        subtotalLabel: 'Zwischensumme', taxLabel: 'Steuer', totalDueLabel: 'Gesamtbetrag',
        statusPaid: 'BEZAHLT', statusPending: 'AUSSTEHEND', statusRefunded: 'ERSTATTET',
        statusPastDue: 'ÜBERFÄLLIG', statusCanceled: 'STORNIERT',
        licenseKeyLabel: 'Lizenzschlüssel', licenseExpiresLabel: 'Läuft ab am',
        customerBlock: 'Kunde', companyBlock: 'Absender',
        thankYouNote: 'Vielen Dank für Ihr Vertrauen.',
        footerLegal: 'Diese Rechnung wurde elektronisch erstellt und ist ohne Unterschrift gültig.',
        footerContact: 'Fragen? {supportEmail}',
    },
    'it': {
        docTitle: 'FATTURA', docNumberLabel: 'Fattura n.', billToLabel: 'Fatturare a',
        issuedOnLabel: 'Emessa il', dueDateLabel: 'Scadenza', servicePeriodLabel: 'Periodo di servizio', planLabel: 'Piano',
        descriptionCol: 'Descrizione', qtyCol: 'Q.tà', unitPriceCol: 'Prezzo unit.', totalCol: 'Totale',
        subtotalLabel: 'Subtotale', taxLabel: 'Imposta', totalDueLabel: 'Totale da pagare',
        statusPaid: 'PAGATA', statusPending: 'IN ATTESA', statusRefunded: 'RIMBORSATA',
        statusPastDue: 'SCADUTA', statusCanceled: 'ANNULLATA',
        licenseKeyLabel: 'Codice di licenza', licenseExpiresLabel: 'Licenza scade il',
        customerBlock: 'Cliente', companyBlock: 'Mittente',
        thankYouNote: 'Grazie per la fiducia.',
        footerLegal: 'Questa fattura è emessa elettronicamente e vale senza firma.',
        footerContact: 'Domande? {supportEmail}',
    },
    'ja': {
        docTitle: '請求書', docNumberLabel: '請求書番号', billToLabel: '請求先',
        issuedOnLabel: '発行日', dueDateLabel: '支払期限', servicePeriodLabel: 'サービス期間', planLabel: 'プラン',
        descriptionCol: '項目', qtyCol: '数量', unitPriceCol: '単価', totalCol: '合計',
        subtotalLabel: '小計', taxLabel: '税', totalDueLabel: '合計金額',
        statusPaid: '支払済', statusPending: '未払', statusRefunded: '返金済',
        statusPastDue: '期限過剰', statusCanceled: 'キャンセル',
        licenseKeyLabel: 'ライセンスキー', licenseExpiresLabel: '有効期限',
        customerBlock: 'お客様', companyBlock: '発行元',
        thankYouNote: 'ご利用いただきありがとうございます。',
        footerLegal: '本請求書は電子的に発行され、署名なしで有効です。',
        footerContact: 'ご質問：{supportEmail}',
    },
    'ko': {
        docTitle: '인보이스', docNumberLabel: '인보이스 번호', billToLabel: '청구 대상',
        issuedOnLabel: '발행일', dueDateLabel: '만료일', servicePeriodLabel: '서비스 기간', planLabel: '요금제',
        descriptionCol: '항목', qtyCol: '수량', unitPriceCol: '단가', totalCol: '합계',
        subtotalLabel: '소계', taxLabel: '세금', totalDueLabel: '총 결제 금액',
        statusPaid: '결제 완료', statusPending: '대기 중', statusRefunded: '환불 완료',
        statusPastDue: '연체', statusCanceled: '취소됨',
        licenseKeyLabel: '라이선스 키', licenseExpiresLabel: '만료일',
        customerBlock: '고객', companyBlock: '발신',
        thankYouNote: '이용해 주셔서 감사합니다.',
        footerLegal: '이 인보이스는 전자적으로 발행되었으며 서명 없이 유효합니다.',
        footerContact: '문의: {supportEmail}',
    },
    'ar': {
        docTitle: 'فاتورة', docNumberLabel: 'رقم الفاتورة', billToLabel: 'فاتورة إلى',
        issuedOnLabel: 'تاريخ الإصدار', dueDateLabel: 'تاريخ الاستحقاق', servicePeriodLabel: 'فترة الخدمة', planLabel: 'الخطة',
        descriptionCol: 'البيان', qtyCol: 'الكمية', unitPriceCol: 'سعر الوحدة', totalCol: 'الإجمالي',
        subtotalLabel: 'المجموع الفرعي', taxLabel: 'الضريبة', totalDueLabel: 'المبلغ المستحق',
        statusPaid: 'مدفوعة', statusPending: 'قيد الانتظار', statusRefunded: 'مستردة',
        statusPastDue: 'متأخرة', statusCanceled: 'ملغاة',
        licenseKeyLabel: 'مفتاح الترخيص', licenseExpiresLabel: 'ينتهي الترخيص في',
        customerBlock: 'العميل', companyBlock: 'من',
        thankYouNote: 'شكرًا لثقتكم.',
        footerLegal: 'هذه الفاتورة صادرة إلكترونيًا وتعتبر صحيحة بدون توقيع.',
        footerContact: 'لديك سؤال؟ {supportEmail}',
    },
    'pt-br': {
        docTitle: 'NOTA FISCAL', docNumberLabel: 'Documento nº', billToLabel: 'Faturar para',
        issuedOnLabel: 'Emitida em', dueDateLabel: 'Vencimento', servicePeriodLabel: 'Período do serviço', planLabel: 'Plano',
        descriptionCol: 'Descrição', qtyCol: 'Qtd.', unitPriceCol: 'Preço unit.', totalCol: 'Total',
        subtotalLabel: 'Subtotal', taxLabel: 'Imposto', totalDueLabel: 'Total a pagar',
        statusPaid: 'PAGO', statusPending: 'PENDENTE', statusRefunded: 'REEMBOLSADO',
        statusPastDue: 'VENCIDO', statusCanceled: 'CANCELADO',
        licenseKeyLabel: 'Chave de licença', licenseExpiresLabel: 'Licência expira em',
        customerBlock: 'Cliente', companyBlock: 'Emitente',
        thankYouNote: 'Obrigado pela sua confiança.',
        footerLegal: 'Este documento foi emitido eletronicamente e é válido sem assinatura.',
        footerContact: 'Dúvidas? {supportEmail}',
    },
    'ru': {
        docTitle: 'СЧЁТ', docNumberLabel: 'Счёт №', billToLabel: 'Плательщик',
        issuedOnLabel: 'Дата выставления', dueDateLabel: 'Срок оплаты', servicePeriodLabel: 'Период обслуживания', planLabel: 'Тариф',
        descriptionCol: 'Наименование', qtyCol: 'Кол-во', unitPriceCol: 'Цена', totalCol: 'Сумма',
        subtotalLabel: 'Промежуточный итог', taxLabel: 'Налог', totalDueLabel: 'Итого к оплате',
        statusPaid: 'ОПЛАЧЕНО', statusPending: 'ОЖИДАНИЕ', statusRefunded: 'ВОЗВРАТ',
        statusPastDue: 'ПРОСРОЧЕНО', statusCanceled: 'ОТМЕНЕНО',
        licenseKeyLabel: 'Ключ лицензии', licenseExpiresLabel: 'Лицензия истекает',
        customerBlock: 'Покупатель', companyBlock: 'Продавец',
        thankYouNote: 'Спасибо за покупку.',
        footerLegal: 'Этот счёт выставлен в электронном виде и действителен без подписи.',
        footerContact: 'Вопросы? {supportEmail}',
    },
    'zh-cn': {
        docTitle: '发票', docNumberLabel: '发票号', billToLabel: '开票至',
        issuedOnLabel: '开票日期', dueDateLabel: '到期日', servicePeriodLabel: '服务期', planLabel: '套餐',
        descriptionCol: '项目', qtyCol: '数量', unitPriceCol: '单价', totalCol: '合计',
        subtotalLabel: '小计', taxLabel: '税费', totalDueLabel: '应付总额',
        statusPaid: '已支付', statusPending: '待支付', statusRefunded: '已退款',
        statusPastDue: '已逾期', statusCanceled: '已取消',
        licenseKeyLabel: '许可证密钥', licenseExpiresLabel: '许可证到期日',
        customerBlock: '客户', companyBlock: '开票方',
        thankYouNote: '感谢您的惠顾。',
        footerLegal: '本发票为电子发票，无需签名即具法律效力。',
        footerContact: '问题请联系 {supportEmail}',
    },
    'vi': {
        docTitle: 'HÓA ĐƠN', docNumberLabel: 'Số hóa đơn', billToLabel: 'Xuất cho',
        issuedOnLabel: 'Ngày lập', dueDateLabel: 'Hạn nộp', servicePeriodLabel: 'Kỳ dịch vụ', planLabel: 'Gói',
        descriptionCol: 'Mô tả', qtyCol: 'SL', unitPriceCol: 'Đơn giá', totalCol: 'Thành tiền',
        subtotalLabel: 'Tạm tính', taxLabel: 'Thuế', totalDueLabel: 'Tổng thanh toán',
        statusPaid: 'ĐÃ THANH TOÁN', statusPending: 'CHỜ THANH TOÁN', statusRefunded: 'ĐÃ HOÀN TIỀN',
        statusPastDue: 'QUÁ HẠN', statusCanceled: 'ĐÃ HỦY',
        licenseKeyLabel: 'Mã bản quyền', licenseExpiresLabel: 'Hạn bản quyền',
        customerBlock: 'Khách hàng', companyBlock: 'Bên bán',
        thankYouNote: 'Cảm ơn quý khách đã tin tưởng.',
        footerLegal: 'Hóa đơn này được phát hành điện tử và có giá trị không cần chữ ký.',
        footerContact: 'Thắc mắc? {supportEmail}',
    },
    'tr': {
        docTitle: 'FATURA', docNumberLabel: 'Fatura no', billToLabel: 'Fatura edilen',
        issuedOnLabel: 'Düzenleme tarihi', dueDateLabel: 'Son ödeme', servicePeriodLabel: 'Hizmet dönemi', planLabel: 'Plan',
        descriptionCol: 'Açıklama', qtyCol: 'Adet', unitPriceCol: 'Birim fiyat', totalCol: 'Tutar',
        subtotalLabel: 'Ara toplam', taxLabel: 'Vergi', totalDueLabel: 'Ödenecek toplam',
        statusPaid: 'ÖDENDİ', statusPending: 'BEKLEMEDE', statusRefunded: 'İADE EDİLDİ',
        statusPastDue: 'GECKMİ', statusCanceled: 'İPTAL',
        licenseKeyLabel: 'Lisans anahtarı', licenseExpiresLabel: 'Lisans bitişi',
        customerBlock: 'Müteri', companyBlock: 'Arayan',
        thankYouNote: 'İlginiz için teşekkür ederiz.',
        footerLegal: 'Bu fatura elektronik olarak düzenlenmiş ve imzasız geçerlidir.',
        footerContact: 'Soru? {supportEmail}',
    },
    'id': {
        docTitle: 'INVOICE', docNumberLabel: 'No. Invoice', billToLabel: 'Tagihan untuk',
        issuedOnLabel: 'Diterbitkan', dueDateLabel: 'Jatuh tempo', servicePeriodLabel: 'Periode layanan', planLabel: 'Paket',
        descriptionCol: 'Uraian', qtyCol: 'Jml', unitPriceCol: 'Harga satuan', totalCol: 'Total',
        subtotalLabel: 'Subtotal', taxLabel: 'Pajak', totalDueLabel: 'Total bayar',
        statusPaid: 'LUNAS', statusPending: 'TERTUNDA', statusRefunded: 'DIRETUR',
        statusPastDue: 'JATUH TEMPO', statusCanceled: 'DIBATALKAN',
        licenseKeyLabel: 'Kunci lisensi', licenseExpiresLabel: 'Lisensi kedaluwarsa',
        customerBlock: 'Pelanggan', companyBlock: 'Penagih',
        thankYouNote: 'Terima kasih atas kepercayaan Anda.',
        footerLegal: 'Invoice ini diterbitkan secara elektronik dan sah tanpa tanda tangan.',
        footerContact: 'Pertanyaan? {supportEmail}',
    },
    'pl': {
        docTitle: 'FAKTURA', docNumberLabel: 'Faktura nr', billToLabel: 'Fakturować do',
        issuedOnLabel: 'Wystawiono', dueDateLabel: 'Termin płatności', servicePeriodLabel: 'Okres usługi', planLabel: 'Plan',
        descriptionCol: 'Opis', qtyCol: 'Ilość', unitPriceCol: 'Cena jedn.', totalCol: 'Razem',
        subtotalLabel: 'Suma częściowa', taxLabel: 'Podatek', totalDueLabel: 'Do zapłaty',
        statusPaid: 'OPŁACONO', statusPending: 'OCZEKUJE', statusRefunded: 'ZWRÓCONO',
        statusPastDue: 'ZALEGŁA', statusCanceled: 'ANULOWANA',
        licenseKeyLabel: 'Klucz licencyjny', licenseExpiresLabel: 'Licencja wygasa',
        customerBlock: 'Klient', companyBlock: 'Sprzedawca',
        thankYouNote: 'Dziękujemy za zaufanie.',
        footerLegal: 'Niniejsza faktura została wystawiona elektronicznie i jest ważna bez podpisu.',
        footerContact: 'Pytania? {supportEmail}',
    },
};

/** Todos os 15 idiomas têm exatamente as mesmas chaves. Fica barato e evita gap. */
export function invoiceCopy(locale: Locale, key: InvoiceCopyKey): string {
    const dict = COPY[locale] ?? COPY['en'];
    return dict[key] ?? COPY['en'][key] ?? key;
}

export function invoiceCopyTemplate(locale: Locale, key: InvoiceCopyKey): string {
    return invoiceCopy(locale, key);
}

/**
 * Locale cujos rótulos sobrevivem à codificação WinAnsi (cp1252) do
 * `StandardFonts.Helvetica` do `pdf-lib`. **tr** (ğ/ş/ı), **pl** (ł/ą/ę/ż),
 * **vi** (đ/ư/ơ) têm chars fora de cp1252, então caem para English no PDF.
 * O corpo do E-MAIL (HTML) usa UTF-8 e renderiza o nativo.
 */
export const LOCALES_WITH_UNICODE_PDF_FONT: ReadonlySet<Locale> = new Set<Locale>([
    'en', 'es', 'fr', 'de', 'it', 'pt-br', 'id',
]);

export function pdfCopyLocale(locale: Locale): Locale {
    return LOCALES_WITH_UNICODE_PDF_FONT.has(locale) ? locale : 'en';
}

export const INVOICE_COPY_KEYS: readonly InvoiceCopyKey[] = [
    'docTitle', 'docNumberLabel', 'billToLabel', 'issuedOnLabel', 'dueDateLabel', 'servicePeriodLabel',
    'planLabel', 'descriptionCol', 'qtyCol', 'unitPriceCol', 'totalCol',
    'subtotalLabel', 'taxLabel', 'totalDueLabel',
    'statusPaid', 'statusPending', 'statusRefunded', 'statusPastDue', 'statusCanceled',
    'licenseKeyLabel', 'licenseExpiresLabel', 'customerBlock', 'companyBlock',
    'thankYouNote', 'footerLegal', 'footerContact',
];
