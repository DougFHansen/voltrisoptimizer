import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'protecao-dados-privacidade',
  title: "Digital Privacy: How to Protect Your Data in 2026",
  description: "Are you being tracked? Learn how to protect your online privacy, configure social networks, and prevent personal data leaks in 2026.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '35 min'
};

const title = "Digital Privacy: How to Protect Your Data in 2026";
const description = "Are you being tracked? Learn how to protect your online privacy, configure social networks, and prevent personal data leaks in 2026.";
const keywords = [
    'digital privacy how to protect data 2026 guide',
    'how to avoid online tracking tutorial 2026',
    'google instagram privacy settings 2026',
    'best browsers for privacy guide 2026',
    'prevent personal data leak tutorial 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('protecao-dados-privacidade', title, description, keywords, locale);
}

export default function PrivacyProtectionGuide() {
    const summaryTable = [
        { label: "Tool #1", value: "Two-Factor Authentication (2FA)" },
        { label: "Browser", value: "Brave / Tor (For anonymity)" },
        { label: "Search Engine", value: "DuckDuckGo / Brave Search" },
        { label: "Difficulty", value: "Easy/Intermediate" }
    ];

    const contentSections = [
        {
            title: "The Value of Your Data in 2026",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, your personal data (shopping habits, location, search history) is the fuel of the digital economy. Large companies use this information to train AIs and create precise psychological profiles for targeted advertising. Protecting your privacy is not just about "hiding secrets," but about reclaiming control over your own digital identity and preventing your information from being sold on the black market.
        </p>
      `
        },
        {
            title: "1. The Browser is Your First Defense",
            content: `
        <p class="mb-4 text-gray-300">Stop making it easy for trackers:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Script Blockers:</strong> Use <i>uBlock Origin</i>. It prevents websites from loading invisible trackers that follow you from site to site.</li>
            <li><strong>Privacy Browsers:</strong> <i>Brave</i> blocks everything natively. If you seek total anonymity, use the <i>Tor Browser</i>, which masks your IP through multiple layers of connection.</li>
            <li><strong>Private Search:</strong> Google stores everything you search. Try using <i>DuckDuckGo</i> or <i>Brave Search</i>, which do not log your search history.</li>
        </ul >
      `
        },
        {
            title: "2. Social Media and the Digital \"Bubble\"",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Setup Checklist:</h4>
            <p class="text-sm text-gray-300">
                1. <strong>Meta (Instagram/WhatsApp):</strong> Go to 'Account Center' and disable tracking outside the platforms. <br/>
                2. <strong>Google:</strong> Go to 'My Account' > Data and Privacy and enable **Auto-Delete** for location and web activity history every 3 months. <br/>
                3. <strong>Leaks:</strong> Check if your email has already been leaked on <i>haveibeenpwned.com</i>. If so, change your password immediately.
            </p>
        </div>
      `
        },
        {
            title: "3. The \"Incognito Mode\" Myth",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Warning:</strong> 
            <br/><br/>Incognito Mode (Private Window) only prevents history from being saved on your **physical computer**. Your Internet Service Provider (ISP), your employer (on corporate networks), and the sites you visit still know exactly who you are and what you're doing. For real connection protection, using a **reliable VPN** or **Tor** routing is indispensable in 2026.
        </p>
      `
        }
    ];
    
    const faqItems = [
      {
        question: "What is digital privacy and why is it important in 2026?",
        answer: `
          <p class="text-gray-300 mb-2">Digital privacy refers to the control you have over your personal information online. In 2026, it's crucial because your personal data, such as shopping habits, location, and search history, are the fuel of the digital economy. Protecting your privacy helps prevent invasive psychological profiling, fraud, and misuse of your information.</p>
          <p class="text-gray-300">Additionally, digital privacy is a fundamental right guaranteed by laws such as the GDPR in Europe and similar regulations worldwide.</p>
        `
      },
      {
        question: "What is the difference between browsing in incognito mode and using a VPN?",
        answer: `
          <p class="text-gray-300 mb-2">Incognito mode only prevents the browser from saving history, cookies, and form data on your device. It does not hide your identity from websites, ISPs, or governments. A VPN (Virtual Private Network) masks your IP and encrypts your traffic, offering real protection against surveillance and tracking.</p>
          <p class="text-gray-300">Therefore, incognito mode protects your privacy locally, while a VPN protects your connection and identity across the internet.</p>
        `
      },
      {
        question: "What are the best browsers for privacy?",
        answer: `
          <p class="text-gray-300 mb-2">The best privacy-focused browsers include:</p>
          <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
            <li><strong>Brave:</strong> Blocks trackers and ads natively</li>
            <li><strong>Tor Browser:</strong> Maximum anonymity, routes connection through multiple layers</li>
            <li><strong>Firefox:</strong> Highly customizable with privacy extensions</li>
            <li><strong>LibreWolf:</strong> A Firefox fork focused exclusively on privacy</li>
          </ul>
          <p class="text-gray-300">Each has different levels of anonymity and compatibility with conventional websites.</p>
        `
      },
      {
        question: "How can I check if my data has already been leaked?",
        answer: `
          <p class="text-gray-300 mb-2">You can check if your data has already been leaked using services like <i>Have I Been Pwned</i> (haveibeenpwned.com). This site allows you to verify if your email or password has been part of any public data breaches.</p>
          <p class="text-gray-300">If you find your email in a breach, it's crucial to immediately change the passwords for the affected accounts and enable two-factor authentication (2FA).</p>
        `
      },
      {
        question: "What are the essential privacy settings on social media?",
        answer: `
          <p class="text-gray-300 mb-2">Essential privacy settings include:</p>
          <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
            <li>Limiting the audience of your posts (public, friends, only you)</li>
            <li>Disabling activity tracking outside the platform</li>
            <li>Controlling who can find you via email or phone number</li>
            <li>Disabling the use of data for personalized advertising purposes</li>
          </ul>
          <p class="text-gray-300">Review these settings regularly, as platforms frequently change defaults automatically.</p>
        `
      },
      {
        question: "What is browser fingerprinting and how can I protect myself?",
        answer: `
          <p class="text-gray-300 mb-2">Browser fingerprinting is a technique that identifies unique users based on combinations of browser settings and characteristics, such as version, plugins, screen resolution, languages, and timezone.</p>
          <p class="text-gray-300">To protect yourself, use browsers with anti-fingerprinting protection (like Tor Browser), avoid installing unnecessary plugins, and use extensions like Canvas Blocker to make unique identification harder.</p>
        `
      },
      {
        question: "How can I protect my data on mobile devices?",
        answer: `
          <p class="text-gray-300 mb-2">To protect data on mobile devices:</p>
          <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
            <li>Revise app permissions regularly</li>
            <li>Disable location for apps that don't need it</li>
            <li>Use biometric authentication and strong passwords</li>
            <li>Avoid public Wi-Fi networks without protection</li>
            <li>Regularly update the operating system and apps</li>
          </ul>
          <p class="text-gray-300">Additionally, consider using a VPN on public networks and monitor apps with access to camera, microphone, and contacts.</p>
        `
      },
      {
        question: "What are data subject rights and how can I exercise them?",
        answer: `
          <p class="text-gray-300 mb-2">Data subject rights, guaranteed by laws like GDPR, include access, correction, deletion, and portability of data. You can exercise them by contacting the company's data protection officer or using forms available on their sites.</p>
          <p class="text-gray-300">If your rights are denied, you can file complaints with national data protection authorities or seek legal assistance.</p>
        `
      },
      {
        question: "Is cloud storage safe?",
        answer: `
          <p class="text-gray-300 mb-2">Cloud storage can be safe if you take proper precautions:</p>
          <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
            <li>Choose providers with end-to-end encryption</li>
            <li>Encrypt your files before uploading them</li>
            <li>Use two-factor authentication (2FA)</li>
            <li>Regularly review access permissions</li>
          </ul>
          <p class="text-gray-300">Avoid storing sensitive information without encryption and consider self-hosted solutions for greater control.</p>
        `
      },
      {
        question: "How can I monitor my digital identity?",
        answer: `
          <p class="text-gray-300 mb-2">You can monitor your digital identity by searching for your name on anonymous search engines, setting up alerts for mentions of your name, and using personal brand monitoring tools. Regularly review what is publicly available about you.</p>
          <p class="text-gray-300">It's also useful to periodically check what personal information is exposed on social networks and request removal of sensitive info when possible.</p>
        `
      },
      {
        question: "Which browser extensions are recommended for privacy?",
        answer: `
          <p class="text-gray-300 mb-2">Recommended privacy extensions include:</p>
          <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
            <li><strong>uBlock Origin:</strong> Efficient ad and tracker blocker</li>
            <li><strong>Privacy Badger:</strong> Automatically blocks invisible trackers</li>
            <li><strong>HTTPS Everywhere:</strong> Forces secure connections (HTTPS)</li>
            <li><strong>Canvas Blocker:</strong> Prevents canvas fingerprinting</li>
          </ul>
          <p class="text-gray-300">These extensions help reduce tracking and protect your online privacy.</p>
        `
      },
      {
        question: "How can I protect my accounts from tracking and personalized ads?",
        answer: `
          <p class="text-gray-300 mb-2">To protect your accounts from tracking and personalized ads:</p>
          <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
            <li>Disable ad personalization in privacy settings</li>
            <li>Limit data sharing with ad partners</li>
            <li>Disable the use of data for personalized advertising purposes</li>
            <li>Use random ad IDs or reset them periodically</li>
          </ul>
          <p class="text-gray-300">These settings vary by platform but are generally located in the privacy and security sections of accounts.</p>
        `
      }
    ];
    
    const externalReferences = [
      {
        name: "General Data Protection Regulation (GDPR) - EU",
        url: "https://gdpr-info.eu/"
      },
      {
        name: "Electronic Frontier Foundation - Online Privacy",
        url: "https://www.eff.org/issues/privacy"
      },
      {
        name: "PrivacyTools.io - Privacy Resources",
        url: "https://www.privacytools.io/"
      }
    ];
    
    const relatedGuides = [
        {
            href: "/guides/seguranca-senhas-gerenciadores",
            title: "Manage Passwords",
            description: "The foundation of account protection."
        },
        {
            href: "/guides/autenticacao-dois-fatores",
            title: "2FA Guide",
            description: "How to use Google Authenticator."
        },
        {
            href: "/guides/vpn-vale-a-pena-jogos",
            title: "VPN and Privacy",
            description: "Protect your connection from snoopers."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="35 min"
            difficultyLevel="Intermediate"
            author="Voltris Privacy Team"
            lastUpdated="2026-01-20"
            contentSections={contentSections}
            summaryTable={summaryTable}
            faqItems={faqItems}
            externalReferences={externalReferences}
            relatedGuides={relatedGuides}
        />
    );
}

