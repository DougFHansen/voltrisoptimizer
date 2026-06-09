import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'autenticacao-dois-fatores',
  title: "Two-Factor Authentication (2FA): The Ultimate Security Guide (2026)",
  description: "Your password has already leaked. Learn how to shield your Instagram, Steam, Google, and Discord accounts with 2FA. Discover why SMS is insecure and which apps to use.",
  category: 'security',
  difficulty: 'Beginner',
  time: '30 min'
};

const title = "Two-Factor Authentication (2FA): The Ultimate Security Guide (2026)";
const description = "Your password has already leaked. Learn how to shield your Instagram, Steam, Google, and Discord accounts with 2FA. Discover why SMS is insecure, which apps to use (Authy vs Google vs Microsoft), and how not to lose access if your phone breaks.";

const keywords = [
  'how to activate two factor authentication guide 2026',
  'best 2fa apps google authenticator vs authy',
  'protect instagram and facebook account 2FA tutorial',
  'steam guard mobile authenticator security',
  'recover account with lost 2FA backup codes',
  'yubikey worth it in 2026',
  'sim swap scam sms 2fa danger'
];

export const metadata: Metadata = createGuideMetadata('autenticacao-dois-fatores', title, description, keywords);

export default function TwoFactorGuide() {
  const summaryTable = [
    { label: "Security Level", value: "Critical (Mandatory)" },
    { label: "SMS", value: "Insecure (Avoid)" },
    { label: "Recommended Apps", value: "Authy, Ente Auth, 2FAS" },
    { label: "Hardware (Pro)", value: "YubiKey (NFC/USB)" },
    { label: "Main Risk", value: "Losing phone without backup" },
    { label: "Solution", value: "Recovery Codes (Print them)" }
  ];

  const contentSections = [
    {
      title: "Why Your Password Protects NOTHING Anymore",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, billions of passwords leak annually in "Data Breaches". If you use the same password in two places, hackers use automatic scripts ("Credential Stuffing") to test your email/password across all services (PSN, Steam, Banks).
          <br/><br/>
          <strong>Two-Factor Authentication (2FA)</strong> requires something you <em>KNOW</em> (password) and something you <em>HAVE</em> (phone/key). Even if the hacker has your password, they can't get in without the code.
        </p>
        
        <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/20 mb-6">
          <h4 class="text-red-400 font-bold mb-2">⚠️ The Danger of SMS (SIM Swap)</h4>
          <p class="text-sm text-gray-300">
            <strong>NEVER use SMS as 2FA if you can avoid it.</strong> Criminals can clone your SIM card (SIM Swap) by calling the operator and impersonating you. With that, they receive the password recovery SMS and steal your WhatsApp, Instagram, and Bank accounts in minutes. Always use <strong>Authenticator Apps</strong>.
          </p>
        </div>
      `
    },
    {
      title: "The Best 2FA Apps in 2026",
      content: `
        <p class="mb-4 text-gray-300">Forget the old Google Authenticator (it lacked cloud backup for years, though it has it now, many migrated). Here are the best modern options:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div class="bg-gray-800/50 p-4 rounded-lg border border-purple-500/30">
                <h5 class="font-bold text-white mb-2">Authy (Twilio)</h5>
                <p class="text-sm text-gray-300">
                    <strong>Pros:</strong> Syncs across multiple devices (PC, Tablet, Phone). If you lose your phone, install on the new one and restore everything via a master password.
                    <br/><strong>Cons:</strong> Recently suffered a leak of associated phone numbers (not keys, but IDs).
                </p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg border border-emerald-500/30">
                <h5 class="font-bold text-white mb-2">2FAS (Open Source)</h5>
                <p class="text-sm text-gray-300">
                    <strong>Pros:</strong> The choice of privacy experts. Open source, cloud backup (encrypted), clean interface, browser extension that auto-fills.
                    <br/><strong>Verdict:</strong> The Best of 2026.
                </p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg border border-blue-500/30">
                <h5 class="font-bold text-white mb-2">Microsoft Authenticator</h5>
                <p class="text-sm text-gray-300">
                    <strong>Pros:</strong> Mandatory for businesses and Outlook/Xbox accounts. Offers cloud backup and "Push" notifications (press Approve instead of typing a code).
                </p>
            </div>
        </div>
      `
    },
    {
      title: "Practical Tutorial: Activating on Main Accounts",
      content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-pink-500 font-bold mb-1">Instagram / Facebook</h4>
                <ol class="list-decimal list-inside text-sm text-gray-400">
                    <li>Settings > Accounts Center (Meta) > Password and Security.</li>
                    <li>Two-Factor Authentication.</li>
                    <li>Choose "Authentication App" (DO NOT choose SMS).</li>
                    <li>Copy the setup key or scan the QR Code with <strong>2FAS</strong>.</li>
                    <li><strong>Store the Backup Codes in a safe place!</strong></li>
                </ol>
            </div>
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-indigo-400 font-bold mb-1">Discord</h4>
                <ol class="list-decimal list-inside text-sm text-gray-400">
                    <li>Settings Gear > My Account.</li>
                    <li>Enable Two-Factor Authentication.</li>
                    <li>Scan the QR Code.</li>
                    <li>Download the <code>discord_backup_codes.txt</code>.</li>
                </ol>
            </div>
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-blue-400 font-bold mb-1">Steam (Steam Guard)</h4>
                <p class="text-xs text-gray-400 mb-2">Steam uses its own app, it doesn't natively accept Authy/Google Auth.</p>
                <ol class="list-decimal list-inside text-sm text-gray-400">
                    <li>Download the Steam app on your phone.</li>
                    <li>Menu > Steam Guard > Add Authenticator.</li>
                    <li>Note the "Rxxxxx" recovery code (Starts with R).</li>
                    <li>Without this R code, recovering the account is a support nightmare.</li>
                </ol>
            </div>
        </div>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Hacker Level: Physical Security Keys (YubiKey)",
      content: `
        <h4 class="text-white font-bold mb-3">What is a Security Key?</h4>
        <p class="mb-4 text-gray-300">
          It's a USB device that looks like a flash drive. To log in, you insert the key and touch it.
          <br/><strong>Supreme Advantage:</strong> It is <strong>Phishing-immune</strong>. If you enter a fake site like <code>g0ogle.com</code> and try to log in, the key knows the domain is wrong and refuses to authenticate. 2FA apps don't protect you from this (you type the code into the fake site and the hacker uses it).
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
                <h5 class="text-green-400 font-bold mb-2">Google Titan / YubiKey 5</h5>
                <p class="text-sm text-gray-300">
                    The leading brands. They cost between R$ 300 to R$ 600. A high investment, but they guarantee NSA-level security for your Google, Cloudflare, Binance, and Github accounts.
                </p>
            </div>
            <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h5 class="text-blue-400 font-bold mb-2">Passkeys (The Future)</h5>
                <p class="text-sm text-gray-300">
                   Windows Hello and TouchID now work as security keys via the FIDO2 standard. Modern sites (Google, Amazon) allow creating "Passkeys". Your face/fingerprint becomes the 2FA. Extremely secure and practical.
                </p>
            </div>
        </div>
      `
    },
    {
      title: "Disaster Plan: I Lost My Phone, Now What?",
      content: `
        <p class="mb-4 text-gray-300 text-lg font-bold text-red-400">
            If you lose your phone and have no backup, you lose the account. Google/Meta support rarely returns accounts without 2FA.
        </p>
        <h4 class="text-white font-bold mb-3">Voltris Security Protocol</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 bg-[#0A0A0F] p-5 rounded-xl border border-gray-700">
            <li><strong>Print Backup Codes:</strong> Every service offers "10 single-use codes" when activating 2FA. Print or save them on an offline flash drive.</li>
            <li><strong>Activate 2FA on Multiple Devices:</strong> Authy and 2FAS allow having the app on a Tablet or old PC. Leave a spare device at home logged in.</li>
            <li><strong>Recovery Email:</strong> Ensure your recovery email has a different password from the main email.</li>
            <li><strong>Physical Key as Backup:</strong> Add a YubiKey as a secondary method, stored in a safe.</li>
        </ol>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "2FA Phishing: The New Scam",
      content: `
        <h4 class="text-white font-bold mb-3">How do Hackers bypass 2FA?</h4>
        <p class="mb-4 text-gray-300">
          They create fake login screens identical to the original ones.
          <br/>1. You type your login and password into the fake site.
          <br/>2. The fake site asks for the 2FA code.
          <br/>3. You look at the app and type it in.
          <br/>4. The fake site sends the code to the real site in real-time.
          <br/>5. The hacker gets in.
          <br/><br/>
          <strong>Defense:</strong> ALWAYS check the site's URL (address) before typing the 2FA code. If you use a YubiKey/Passkey, this scam is impossible.
        </p>
      `
    }
  ];

  const faqItems = [
    {
      question: "Can I use the same 2FA app for all my accounts?",
      answer: "Yes! A single app (like 2FAS or Authy) can manage codes for Instagram, Google, Facebook, Amazon, Government portals, etc. Centralizing is practical and secure as long as access to the app is protected by biometrics."
    },
    {
      question: "What happens if I uninstall the 2FA app?",
      answer: "You lose access to the codes. If you haven't enabled cloud backup in the app beforehand, you'll lose access to your accounts. Before formatting your phone, make sure Authy/2FAS backup is active and you know the backup password."
    },
    {
      question: "I received a 2FA code by SMS without asking. Am I hacked?",
      answer: "Someone has your password and is trying to log in. 2FA saved you! Change your password immediately. Do not approve the login request."
    },
    {
      question: "Does the government require 2FA?",
      answer: "For higher security levels (Silver/Gold), it's highly recommended. Government portals support standard apps (OTP). Use it to protect your documents and identity."
    }
  ];

  const externalReferences = [
    { name: "2FAS Authenticator (Official Site)", url: "https://2fas.com/" },
    { name: "Authy Download", url: "https://authy.com/download/" },
    { name: "YubiKey (Hardware Key)", url: "https://www.yubico.com/" },
    { name: "Password Strength Test (Kaspersky)", url: "https://password.kaspersky.com/" },
    { name: "Have I Been Pwned? (Check for Leaks)", url: "https://haveibeenpwned.com/" }
  ];

  const relatedGuides = [
    {
      href: "/guides/seguranca-senhas-gerenciadores",
      title: "Password Managers",
      description: "Bitwarden vs LastPass: Where to store your passwords."
    },
    {
      href: "/guides/identificacao-phishing",
      title: "Identify Scams",
      description: "How to avoid fake sites that steal 2FA."
    },
    {
      href: "/guides/recuperacao-dados-hd-corrompido",
      title: "Data Backups",
      description: "Protect your files beyond your accounts."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="30 min"
      difficultyLevel="Beginner"
      contentSections={contentSections}
      advancedContentSections={advancedContentSections}
      additionalContentSections={additionalContentSections}
      summaryTable={summaryTable}
      faqItems={faqItems}
      externalReferences={externalReferences}
      relatedGuides={relatedGuides}
    />
  );
}