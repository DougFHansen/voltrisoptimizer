/**
 * STRINGS DE E-MAIL — 15 IDIOMAS (FASE 3/4/5/6 da missão internacional).
 *
 * Este arquivo é PURO (só dados): nenhuma importação de Next/React/Resend. Isso
 * é deliberado — assim o Send Email Hook (Edge Function em Deno), o worker do
 * outbox (Node), os testes em `node --test` e o painel admin podem importar as
 * MESMAS strings sem arrastar dependências de runtime.
 *
 * Regras de qualidade:
 *   - Cobre os 15 locales oficiais (`SUPPORTED_LOCALES` em `lib/locale.ts`).
 *     Adicionar um 16º sem completar cópia aqui quebra o teste em
 *     `email-copy.test.ts`, e é exatamente assim que a missão quer que a gente
 *     descubra a regressão ANTES de um cliente russo receber um e-mail em inglês.
 *   - Nada de placeholders técnicos soltos: `{first_name}` / `{brand}` /
 *     `{minutes}` são interpados por `interpolate()` em `email-templates.ts`.
 *   - `dir` do layout (RTL/LTR) mora em `lib/locale.ts`, não aqui.
 *   - As strings não contêm HTML; o renderer escapa antes de inserir.
 *   - Zero dados fiscais / morada da empresa: isso é decisão FASE 8 e, até o
 *     usuário preencher, usamos os mesmos placeholders seguros do site.
 *
 * Referência de tradução: pt-BR, en, es, fr, de, it seguem convenção formal de
 * suporte SaaS (uso de "você"/"usted"/"Sie"/"tu"/"você" conforme o registro do
 * mercado). ja/ko/zh-cn usam a norma local de tom respeitoso para software
 * (敬語 / 합쇼체 / 您). ar usa padrão MSA neutro. ru/pl/tr/vi/id seguem a
 * convenção local de "Вы"/"Państwo"/"siz"/"bạn"/"Anda".
 */

/** Todas as chaves que um locale precisa fornecer. */
export const EMAIL_COPY_KEYS = [
    'confirmSubject',
    'confirmPreheader',
    'confirmHeading',
    'confirmBody',
    'confirmCta',
    'confirmExpiry',
    'confirmIgnore',
    'recoverSubject',
    'recoverPreheader',
    'recoverHeading',
    'recoverBody',
    'recoverCta',
    'recoverIgnore',
    'securityNote',
    'brandTagline',
    'footerCopyright',
    'footerSupport',
    'greetingHello',
    'greetingHelloName',
] as const;

export type EmailCopyKey = (typeof EMAIL_COPY_KEYS)[number];

export type EmailCopy = Record<EmailCopyKey, string>;

// ============================================================================
// 15 IDIOMAS
// ============================================================================

export const EMAIL_COPY: Record<string, EmailCopy> = {
    'en': {
        confirmSubject: 'Confirm your VOLTRIS account',
        confirmPreheader: 'One click and your account is ready.',
        confirmHeading: 'Welcome to VOLTRIS',
        confirmBody: 'Please confirm your email address to activate your VOLTRIS account.',
        confirmCta: 'Confirm email address',
        confirmExpiry: 'This link expires in {minutes} minutes.',
        confirmIgnore: 'If you did not create a VOLTRIS account, you can safely ignore this email.',
        recoverSubject: 'Reset your VOLTRIS password',
        recoverPreheader: 'A request was made to change your password.',
        recoverHeading: 'Password reset',
        recoverBody: 'We received a request to reset the password on your VOLTRIS account.',
        recoverCta: 'Choose a new password',
        recoverIgnore: 'If you did not request this change, you can safely ignore this email. Your current password remains active.',
        securityNote: 'For your security, do not share this link with anyone.',
        brandTagline: 'Performance optimizer for gamers and creators',
        footerCopyright: '© {year} VOLTRIS. All rights reserved.',
        footerSupport: 'Need help? Reply to this email.',
        greetingHello: 'Hello,',
        greetingHelloName: 'Hi {first_name},',
    },
    'es': {
        confirmSubject: 'Confirma tu cuenta de VOLTRIS',
        confirmPreheader: 'Un clic y tu cuenta estará lista.',
        confirmHeading: 'Bienvenido a VOLTRIS',
        confirmBody: 'Confirma tu correo electrónico para activar tu cuenta de VOLTRIS.',
        confirmCta: 'Confirmar correo electrónico',
        confirmExpiry: 'Este enlace caduca en {minutes} minutos.',
        confirmIgnore: 'Si no creaste una cuenta en VOLTRIS, puedes ignorar este correo con seguridad.',
        recoverSubject: 'Restablece tu contraseña de VOLTRIS',
        recoverPreheader: 'Recibimos una solicitud para cambiar tu contraseña.',
        recoverHeading: 'Restablecer contraseña',
        recoverBody: 'Recibimos una solicitud para restablecer la contraseña de tu cuenta VOLTRIS.',
        recoverCta: 'Elegir una nueva contraseña',
        recoverIgnore: 'Si no solicitaste este cambio, puedes ignorar este correo con seguridad. Tu contraseña actual sigue activa.',
        securityNote: 'Por tu seguridad, no compartas este enlace con nadie.',
        brandTagline: 'Optimizador de rendimiento para gamers y creadores',
        footerCopyright: '© {year} VOLTRIS. Todos los derechos reservados.',
        footerSupport: '¿Necesitas ayuda? Responde a este correo.',
        greetingHello: 'Hola,',
        greetingHelloName: 'Hola {first_name},',
    },
    'fr': {
        confirmSubject: 'Confirmez votre compte VOLTRIS',
        confirmPreheader: 'Un clic et votre compte est prêt.',
        confirmHeading: 'Bienvenue sur VOLTRIS',
        confirmBody: 'Veuillez confirmer votre adresse e-mail pour activer votre compte VOLTRIS.',
        confirmCta: 'Confirmer mon adresse e-mail',
        confirmExpiry: 'Ce lien expire dans {minutes} minutes.',
        confirmIgnore: 'Si vous n’avez pas créé de compte VOLTRIS, vous pouvez ignorer cet e-mail en toute sécurité.',
        recoverSubject: 'Réinitialisez votre mot de passe VOLTRIS',
        recoverPreheader: 'Une demande de changement de mot de passe a été reçue.',
        recoverHeading: 'Réinitialisation du mot de passe',
        recoverBody: 'Nous avons reçu une demande de réinitialisation du mot de passe de votre compte VOLTRIS.',
        recoverCta: 'Choisir un nouveau mot de passe',
        recoverIgnore: 'Si vous n’êtes pas à l’origine de cette demande, ignorez cet e-mail. Votre mot de passe actuel reste actif.',
        securityNote: 'Pour votre sécurité, ne partagez ce lien avec personne.',
        brandTagline: 'Optimiseur de performance pour gamers et créateurs',
        footerCopyright: '© {year} VOLTRIS. Tous droits réservés.',
        footerSupport: 'Besoin d’aide ? Répondez à cet e-mail.',
        greetingHello: 'Bonjour,',
        greetingHelloName: 'Bonjour {first_name},',
    },
    'de': {
        confirmSubject: 'Bestätigen Sie Ihr VOLTRIS-Konto',
        confirmPreheader: 'Ein Klick, und Ihr Konto ist bereit.',
        confirmHeading: 'Willkommen bei VOLTRIS',
        confirmBody: 'Bitte bestätigen Sie Ihre E-Mail-Adresse, um Ihr VOLTRIS-Konto zu aktivieren.',
        confirmCta: 'E-Mail-Adresse bestätigen',
        confirmExpiry: 'Dieser Link ist {minutes} Minuten gültig.',
        confirmIgnore: 'Falls Sie kein VOLTRIS-Konto erstellt haben, können Sie diese E-Mail bedenkenlos ignorieren.',
        recoverSubject: 'VOLTRIS-Passwort zurücksetzen',
        recoverPreheader: 'Eine Anfrage zur Passwortänderung wurde gestellt.',
        recoverHeading: 'Passwort zurücksetzen',
        recoverBody: 'Wir haben eine Anfrage erhalten, das Passwort Ihres VOLTRIS-Kontos zurückzusetzen.',
        recoverCta: 'Neues Passwort wählen',
        recoverIgnore: 'Falls Sie diese Änderung nicht angefordert haben, ignorieren Sie diese E-Mail. Ihr aktives Passwort bleibt gültig.',
        securityNote: 'Teilen Sie diesen Link aus Sicherheitsgründen mit niemandem.',
        brandTagline: 'Performance-Optimizer für Gamer und Creator',
        footerCopyright: '© {year} VOLTRIS. Alle Rechte vorbehalten.',
        footerSupport: 'Sie brauchen Hilfe? Antworten Sie auf diese E-Mail.',
        greetingHello: 'Hallo,',
        greetingHelloName: 'Hallo {first_name},',
    },
    'it': {
        confirmSubject: 'Conferma il tuo account VOLTRIS',
        confirmPreheader: 'Un clic e il tuo account è pronto.',
        confirmHeading: 'Benvenuto su VOLTRIS',
        confirmBody: 'Conferma il tuo indirizzo e-mail per attivare l’account VOLTRIS.',
        confirmCta: 'Conferma indirizzo e-mail',
        confirmExpiry: 'Questo link scade tra {minutes} minuti.',
        confirmIgnore: 'Se non hai creato un account VOLTRIS, puoi ignorare questa e-mail in tutta sicurezza.',
        recoverSubject: 'Reimposta la password di VOLTRIS',
        recoverPreheader: ' Abbiamo ricevuto una richiesta di cambio password.',
        recoverHeading: 'Reimposta password',
        recoverBody: 'Abbiamo ricevuto una richiesta di reimpostazione della password del tuo account VOLTRIS.',
        recoverCta: 'Scegli una nuova password',
        recoverIgnore: 'Se non hai richiesto questo cambio, ignora questa e-mail. La password attuale resta attiva.',
        securityNote: 'Per la tua sicurezza, non condividere questo link con nessuno.',
        brandTagline: 'Ottimizzatore di prestazioni per gamer e creator',
        footerCopyright: '© {year} VOLTRIS. Tutti i diritti riservati.',
        footerSupport: 'Serve aiuto? Rispondi a questa e-mail.',
        greetingHello: 'Ciao,',
        greetingHelloName: 'Ciao {first_name},',
    },
    'ja': {
        confirmSubject: 'VOLTRIS アカウントの確認',
        confirmPreheader: 'ワンクリックでアカウントが有効になります。',
        confirmHeading: 'VOLTRIS へようこそ',
        confirmBody: 'VOLTRIS アカウントを有効にするため、メールアドレスをご確認ください。',
        confirmCta: 'メールアドレスを確認する',
        confirmExpiry: 'このリンクは {minutes} 分後に失効します。',
        confirmIgnore: 'VOLTRIS アカウントを作成していない場合は、このメールを無視してください。',
        recoverSubject: 'VOLTRIS パスワードのリセット',
        recoverPreheader: 'パスワード変更のご依頼を受け付けました。',
        recoverHeading: 'パスワードのリセット',
        recoverBody: 'VOLTRIS アカウントのパスワードリセットのご依頼を受け付けました。',
        recoverCta: '新しいパスワードを設定する',
        recoverIgnore: 'ご依頼に心当たりがない場合は、このメールを無視してください。現在のパスワードは有効のままです。',
        securityNote: 'セキュリティのため、このリンクを誰とも共有しないでください。',
        brandTagline: 'ゲーマーとクリエイターのためのパフォーマンス最適化',
        footerCopyright: '© {year} VOLTRIS. All rights reserved.',
        footerSupport: 'お困りですか？このメールにご返信ください。',
        greetingHello: 'こんにちは,',
        greetingHelloName: '{first_name} 様,',
    },
    'ko': {
        confirmSubject: 'VOLTRIS 계정을 확인하세요',
        confirmPreheader: '한 번의 클릭으로 계정이 활성화됩니다.',
        confirmHeading: 'VOLTRIS에 오신 것을 환영합니다',
        confirmBody: 'VOLTRIS 계정을 활성화하려면 이메일을 확인해 주세요.',
        confirmCta: '이메일 확인하기',
        confirmExpiry: '이 링크는 {minutes}분 후 만료됩니다.',
        confirmIgnore: 'VOLTRIS 계정을 만드신 적이 없다면 이 이메일을 무시하셔도 안전합니다.',
        recoverSubject: 'VOLTRIS 비밀번호 재설정',
        recoverPreheader: '비밀번호 변경 요청이 접수되었습니다.',
        recoverHeading: '비밀번호 재설정',
        recoverBody: 'VOLTRIS 계정의 비밀번호 재설정 요청이 접수되었습니다.',
        recoverCta: '새 비밀번호 설정',
        recoverIgnore: '이 변경을 요청하지 않으셨다면 이 이메일을 무시하셔도 됩니다. 현재 비밀번호는 그대로 유지됩니다.',
        securityNote: '보안을 위해 이 링크를 다른 사람과 공유하지 마세요.',
        brandTagline: '게이머와 크리에이터를 위한 성능 최적화',
        footerCopyright: '© {year} VOLTRIS. All rights reserved.',
        footerSupport: '도움이 필요하신가요? 이 이메일에 답변해 주세요.',
        greetingHello: '안녕하세요,',
        greetingHelloName: '{first_name}님,',
    },
    'ar': {
        confirmSubject: 'أكّد حسابك في VOLTRIS',
        confirmPreheader: 'نقرة واحدة ويصبح حسابك جاهزًا.',
        confirmHeading: 'مرحبًا بك في VOLTRIS',
        confirmBody: 'يرجى تأكيد بريدك الإلكتروني لتفعيل حسابك في VOLTRIS.',
        confirmCta: 'تأكيد البريد الإلكتروني',
        confirmExpiry: 'تنتهي صلاحية هذا الرابط بعد {minutes} دقيقة.',
        confirmIgnore: 'إذا لم تقم بإنشاء حساب في VOLTRIS، يمكنك تجاهل هذا البريد بأمان.',
        recoverSubject: 'إعادة تعيين كلمة المرور في VOLTRIS',
        recoverPreheader: 'وصلنا طلب لتغيير كلمة المرور.',
        recoverHeading: 'إعادة تعيين كلمة المرور',
        recoverBody: 'وصلنا طلب لإعادة تعيين كلمة مرور حسابك في VOLTRIS.',
        recoverCta: 'اختيار كلمة مرور جديدة',
        recoverIgnore: 'إذا لم تطلب هذا التغيير، يمكنك تجاهل هذا البريد. كلمة مرورك الحالية تبقى فعّالة.',
        securityNote: 'لأمانك، لا تشارك هذا الرابط مع أي شخص.',
        brandTagline: 'محسّن الأداء للاعّابين والمبدعين',
        footerCopyright: '© {year} VOLTRIS. جميع الحقوق محفوظة.',
        footerSupport: 'تحتاج مساعدة؟ ردّ على هذا البريد.',
        greetingHello: 'مرحبًا,',
        greetingHelloName: 'مرحبًا {first_name}،',
    },
    'pt-br': {
        confirmSubject: 'Confirme sua conta VOLTRIS',
        confirmPreheader: 'Um clique e sua conta está pronta.',
        confirmHeading: 'Bem-vindo ao VOLTRIS',
        confirmBody: 'Confirme seu e-mail para ativar sua conta VOLTRIS.',
        confirmCta: 'Confirmar e-mail',
        confirmExpiry: 'Este link expira em {minutes} minutos.',
        confirmIgnore: 'Se você não criou uma conta VOLTRIS, ignore este e-mail com segurança.',
        recoverSubject: 'Redefinir sua senha do VOLTRIS',
        recoverPreheader: 'Recebemos um pedido para trocar sua senha.',
        recoverHeading: 'Redefinição de senha',
        recoverBody: 'Recebemos um pedido para redefinir a senha da sua conta VOLTRIS.',
        recoverCta: 'Escolher nova senha',
        recoverIgnore: 'Se você não pediu esta troca, ignore este e-mail. Sua senha atual continua ativa.',
        securityNote: 'Por segurança, não compartilhe este link com ninguém.',
        brandTagline: 'Otimizador de desempenho para gamers e criadores',
        footerCopyright: '© {year} VOLTRIS. Todos os direitos reservados.',
        footerSupport: 'Precisa de ajuda? Responda este e-mail.',
        greetingHello: 'Olá,',
        greetingHelloName: 'Olá {first_name},',
    },
    'ru': {
        confirmSubject: 'Подтвердите аккаунт VOLTRIS',
        confirmPreheader: 'Одно нажатие — и аккаунт готов.',
        confirmHeading: 'Добро пожаловать в VOLTRIS',
        confirmBody: 'Подтвердите адрес электронной почты, чтобы активировать аккаунт VOLTRIS.',
        confirmCta: 'Подтвердить e-mail',
        confirmExpiry: 'Ссылка действительна в течение {minutes} мин.',
        confirmIgnore: 'Если вы не создавали аккаунт VOLTRIS, просто проигнорируйте это письмо.',
        recoverSubject: 'Сброс пароля VOLTRIS',
        recoverPreheader: 'Мы получили запрос на смену пароля.',
        recoverHeading: 'Сброс пароля',
        recoverBody: 'Мы получили запрос на сброс пароля к вашему аккаунту VOLTRIS.',
        recoverCta: 'Выбрать новый пароль',
        recoverIgnore: 'Если вы не запрашивали смену пароля, проигнорируйте письмо. Текущий пароль остаётся активным.',
        securityNote: 'В целях безопасности никому не передавайте эту ссылку.',
        brandTagline: 'Оптимизатор производительности для геймеров и создателей',
        footerCopyright: '© {year} VOLTRIS. Все права защищены.',
        footerSupport: 'Нужна помощь? Ответьте на это письмо.',
        greetingHello: 'Здравствуйте,',
        greetingHelloName: 'Здравствуйте, {first_name}!',
    },
    'zh-cn': {
        confirmSubject: '确认您的 VOLTRIS 账户',
        confirmPreheader: '点击一下即可启用账户。',
        confirmHeading: '欢迎使用 VOLTRIS',
        confirmBody: '请确认您的电子邮箱以启用 VOLTRIS 账户。',
        confirmCta: '确认邮箱地址',
        confirmExpiry: '此链接将在 {minutes} 分钟后失效。',
        confirmIgnore: '如果您没有注册 VOLTRIS 账户，可以安全地忽略此邮件。',
        recoverSubject: '重置您的 VOLTRIS 密码',
        recoverPreheader: '我们收到了修改密码的请求。',
        recoverHeading: '重置密码',
        recoverBody: '我们收到重置 VOLTRIS 账户密码的请求。',
        recoverCta: '设置新密码',
        recoverIgnore: '如果您没有发起此请求，请忽略此邮件。当前密码仍然有效。',
        securityNote: '为了您的安全，请勿将此链接分享给任何人。',
        brandTagline: '面向玩家与创作者的性能优化工具',
        footerCopyright: '© {year} VOLTRIS。保留所有权利。',
        footerSupport: '需要帮助？请回复此邮件。',
        greetingHello: '您好，',
        greetingHelloName: '{first_name}，您好，',
    },
    'vi': {
        confirmSubject: 'Xác minh tài khoản VOLTRIS của bạn',
        confirmPreheader: 'Một lần nhấn là tài khoản sẵn sàng.',
        confirmHeading: 'Chào mừng bạn đến với VOLTRIS',
        confirmBody: 'Vui lòng xác minh email để kích hoạt tài khoản VOLTRIS.',
        confirmCta: 'Xác minh email',
        confirmExpiry: 'Liên kết này hết hạn sau {minutes} phút.',
        confirmIgnore: 'Nếu bạn không tạo tài khoản VOLTRIS, bạn có thể bỏ qua email này một cách an toàn.',
        recoverSubject: 'Đặt lại mật khẩu VOLTRIS',
        recoverPreheader: 'Chúng tôi vừa nhận yêu cầu đổi mật khẩu.',
        recoverHeading: 'Đặt lại mật khẩu',
        recoverBody: 'Chúng tôi nhận được yêu cầu đặt lại mật khẩu tài khoản VOLTRIS của bạn.',
        recoverCta: 'Chọn mật khẩu mới',
        recoverIgnore: 'Nếu bạn không yêu cầu thay đổi này, hãy bỏ qua email này. Mật khẩu hiện tại vẫn còn hiệu lực.',
        securityNote: 'Vì lý do bảo mật, đừng chia sẻ liên kết này với bất kỳ ai.',
        brandTagline: 'Tối ưu hiệu năng cho game thủ và nhà sáng tạo',
        footerCopyright: '© {year} VOLTRIS. Bảo lưu mọi quyền.',
        footerSupport: 'Cần trợ giúp? Trả lời email này.',
        greetingHello: 'Xin chào,',
        greetingHelloName: 'Xin chào {first_name},',
    },
    'tr': {
        confirmSubject: 'VOLTRIS hesabınızı doğrulayın',
        confirmPreheader: 'Tek tıkla hesabınız hazır.',
        confirmHeading: 'VOLTRIS’e hoş geldiniz',
        confirmBody: 'VOLTRIS hesabınızı etkinleştirmek için e-posta adresinizi doğrulayın.',
        confirmCta: 'E-posta adresini doğrula',
        confirmExpiry: 'Bu bağlantı {minutes} dakika sonra geçerliliğini yitirir.',
        confirmIgnore: 'Bir VOLTRIS hesabı oluşturmadıysanız bu e-postayı güvenle yok sayabilirsiniz.',
        recoverSubject: 'VOLTRIS şifrenizi sıfırlayın',
        recoverPreheader: 'Şifre değişikliği isteği aldık.',
        recoverHeading: 'Şifre sıfırlama',
        recoverBody: 'VOLTRIS hesabınızın şifresini sıfırlama isteği aldık.',
        recoverCta: 'Yeni şifre belirle',
        recoverIgnore: 'Bu değişikliği siz talep etmediyseniz bu e-postayı yok sayın. Mevcut şifreniz aktif kalmaya devam eder.',
        securityNote: 'Güvenliğiniz için bu bağlantıyı kimseyle paylaşmayın.',
        brandTagline: 'Oyuncular ve içerik üreticileri için performans iyileştirici',
        footerCopyright: '© {year} VOLTRIS. Tüm hakları saklıdır.',
        footerSupport: 'Yardıma mı ihtiyacınız var? Bu e-postayı yanıtlayın.',
        greetingHello: 'Merhaba,',
        greetingHelloName: 'Merhaba {first_name},',
    },
    'id': {
        confirmSubject: 'Konfirmasi akun VOLTRIS Anda',
        confirmPreheader: 'Satu klik dan akun Anda siap.',
        confirmHeading: 'Selamat datang di VOLTRIS',
        confirmBody: 'Konfirmasi alamat email Anda untuk mengaktifkan akun VOLTRIS.',
        confirmCta: 'Konfirmasi email',
        confirmExpiry: 'Tautan ini kedaluwarsa dalam {minutes} menit.',
        confirmIgnore: 'Jika Anda tidak membuat akun VOLTRIS, silakan abaikan email ini.',
        recoverSubject: 'Reset password VOLTRIS Anda',
        recoverPreheader: 'Kami menerima permintaan perubahan password.',
        recoverHeading: 'Reset password',
        recoverBody: 'Kami menerima permintaan reset password akun VOLTRIS Anda.',
        recoverCta: 'Buat password baru',
        recoverIgnore: 'Jika Anda tidak meminta perubahan ini, abaikan email ini. Password Anda saat ini tetap aktif.',
        securityNote: 'Demi keamanan, jangan bagikan tautan ini kepada siapa pun.',
        brandTagline: 'Pengoptimal performa untuk gamer dan kreator',
        footerCopyright: '© {year} VOLTRIS. Hak cipta dilindungi.',
        footerSupport: 'Butuh bantuan? Balas email ini.',
        greetingHello: 'Halo,',
        greetingHelloName: 'Hai {first_name},',
    },
    'pl': {
        confirmSubject: 'Potwierdź konto VOLTRIS',
        confirmPreheader: 'Jedno kliknięcie i konto jest gotowe.',
        confirmHeading: 'Witamy w VOLTRIS',
        confirmBody: 'Potwierdź adres e-mail, aby aktywować konto VOLTRIS.',
        confirmCta: 'Potwierdź adres e-mail',
        confirmExpiry: 'Ten wygasnie za {minutes} minut.',
        confirmIgnore: 'Jeśli nie tworzyłeś konta VOLTRIS, możesz bezpiecznie zignorować tę wiadomość.',
        recoverSubject: 'Zresetuj hasło do VOLTRIS',
        recoverPreheader: 'Otrzymaliśmy prośbę o zmianę hasła.',
        recoverHeading: 'Reset hasła',
        recoverBody: 'Otrzymaliśmy prośbę o zresetowanie hasła do Twojego konta VOLTRIS.',
        recoverCta: 'Ustaw nowe hasło',
        recoverIgnore: 'Jeśli nie requestowałeś tej zmiany, zignoruj tę wiadomość. Obecne hasło pozostaje aktywne.',
        securityNote: 'Dla bezpieczeństwa nie udostępniaj tego łącza nikomu.',
        brandTagline: 'Optymalizator wydajności dla graczy i twórców',
        footerCopyright: '© {year} VOLTRIS. Wszelkie prawa zastrzeżone.',
        footerSupport: 'Potrzebujesz pomocy? Odpowiedz na tę wiadomość.',
        greetingHello: 'Cześć,',
        greetingHelloName: 'Cześć {first_name},',
    },
};

/** Locale usado quando uma chave some ou chega vazia (fallback controlado). */
export const EMAIL_FALLBACK_LOCALE = 'en';

/**
 * Busca UMA string respeitando a matriz completa. Se o locale não existir OU a
 * chave estiver em branco, cai no inglês (a referência da matriz). Nunca devolve
 * `undefined` — uma string faltando em produção viria "undefined" dentro do
 * e-mail, o que é pior do que a forma em inglês.
 */
export function emailCopy(locale: string, key: EmailCopyKey): string {
    const bundle = EMAIL_COPY[locale] ?? EMAIL_COPY[EMAIL_FALLBACK_LOCALE];
    const value = bundle?.[key];
    if (typeof value === 'string' && value.trim().length > 0) return value;
    return EMAIL_COPY[EMAIL_FALLBACK_LOCALE][key];
}

/**
 * Interpola marcadores `{name}` com o `vars` dado. Sem regex sofisticado: só
 * substituição literal, e NADA é HTML-escaped aqui — quem insere no layout é
 * que escapa (ver `renderAuthEmail`). Se um valor não vier, o marcador é
 * trocado por string vazia (o texto resultante ainda é válido).
 */
export function interpolate(template: string, vars: Record<string, string | number | undefined | null>): string {
    return template.replace(/\{(\w+)\}/g, (_m, name: string) => {
        const v = vars[name];
        return v === undefined || v === null ? '' : String(v);
    });
}
