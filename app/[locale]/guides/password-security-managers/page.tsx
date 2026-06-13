import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'seguranca-senhas-gerenciadores',
  title: "Password Managers: Why You Need One in 2026",
  description: "Stop using the same password for everything! Learn how to use password managers (Bitwarden, Proton Pass) to shield your accounts in 2026.",
  category: 'network-security',
  difficulty: 'Beginner',
  time: '35 min'
};

const title = "Password Managers: Why You Need One in 2026";
const description = "Stop using the same password for everything! Learn how to use password managers (Bitwarden, Proton Pass) to shield your accounts in 2026.";
const keywords = [
    'best free password manager 2026 guide',
    'bitwarden vs 1password which is better 2026',
    'how to create secure and unbreakable passwords guide',
    'digital security guide strong passwords 2026',
    'is using a password manager safe tutorial 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('seguranca-senhas-gerenciadores', title, description, keywords, locale);
}

export default function PasswordManagerGuide() {
    const summaryTable = [
        { label: "Security Gold", value: "Bitwarden (Open Source / Free)" },
        { label: "What to Avoid", value: "Passwords on Post-its or Notepad" },
        { label: "Key Advantage", value: "Encrypted Autofill" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "The end of the \"easy\" passwords era",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, using passwords like "123456" or your pet's name is asking to be hacked. With the use of AI for brute-force password cracking, a simple password is discovered in milliseconds. The problem is that humans cannot memorize 50 complex passwords of 20 characters each. This is where **Password Managers** come in: you only need to memorize ONE master password, and it takes care of everything else.
        </p>
      `
        },
        {
            title: "1. The 2026 Favorite: Bitwarden",
            content: `
        <p class="mb-4 text-gray-300">We recommend Bitwarden for being completely free and open-source:</p>
        <p class="text-sm text-gray-300">
            Unlike browser managers (like Chrome's), Bitwarden works on all devices simultaneously (PC, iPhone, Android). If you change your phone tomorrow, all your passwords will be there as soon as you log in. <br/><br/>
            <strong>Tip:</strong> It has a built-in **Password Generator**. Use it to create 24-character passwords with random symbols, numbers, and letters.
        </p>
      `
        },
        {
            title: "2. Browser Manager vs. Dedicated",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">The Danger of Chrome/Edge:</h4>
            <p class="text-sm text-gray-300">
                Saving passwords in the browser is practical but risky. If a malware infects your PC, it can export all your saved logins in seconds. Dedicated managers like **Bitwarden** or **Proton Pass** require biometric authentication or a master password to release the data, creating a crucial extra layer of protection in 2026.
            </p>
        </div>
      `
        },
        {
            title: "3. The Golden Rule: Never Repeat Passwords",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Chain Leakage:</strong> 
            <br/><br/>If you use the same password on Instagram and a small shopping site, and that shopping site is hacked, criminals will try the same password on your Instagram, Facebook, and Email. By using a manager, you ensure that every account has a **unique password**. If one site goes down, the rest of your digital life stays safe.
        </p>
      `
        },
        {
            title: "4. Proton Pass: The New Private Alternative",
            content: `
        <p class="mb-4 text-gray-300">
          <strong>Proton Pass</strong> is the new entry in the password manager market, developed by the ProtonMail team. Unlike other managers, it offers zero-knowledge encryption hosted in Switzerland, with a strong focus on privacy and transparency.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">🛡️ Proton Pass Features</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div class="bg-gray-800/50 p-5 rounded-xl border border-gray-600">
            <h5 class="text-white font-bold mb-3">End-to-End Encryption</h5>
            <p class="text-gray-300 text-sm mb-3">
              All passwords are encrypted locally before being sent to Proton's servers.
            </p>
            <ul class="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Master key is not known by the servers</li>
              <li>Transparent and auditable implementation</li>
              <li>Based on open-source technologies</li>
            </ul>
          </div>
          
          <div class="bg-gray-800/50 p-5 rounded-xl border border-gray-600">
            <h5 class="text-white font-bold mb-3">Integration with Proton Services</h5>
            <p class="text-gray-300 text-sm mb-3">
              Integrated with ProtonMail, ProtonCalendar, and other Proton services for a unified experience.
            </p>
            <ul class="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Management of passwords and email aliases</li>
              <li>Protection against data leaks</li>
              <li>Privacy by design</li>
            </ul>
          </div>
        </div>
      `
        },
        {
            title: "5. 1Password vs LastPass vs Bitwarden: Detailed Comparison",
            content: `
        <p class="mb-4 text-gray-300">
          Choosing the right manager depends on your specific needs. Each has distinct advantages and disadvantages in terms of security, features, and cost.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 Password Managers Comparison</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Feature</th>
                <th class="p-3 text-left">Bitwarden</th>
                <th class="p-3 text-left">1Password</th>
                <th class="p-3 text-left">LastPass</th>
                <th class="p-3 text-left">Proton Pass</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3"><strong>Open Source</strong></td>
                <td class="p-3 text-emerald-400">Yes (Total)</td>
                <td class="p-3 text-amber-400">Partial</td>
                <td class="p-3 text-rose-400">No</td>
                <td class="p-3 text-emerald-400">Yes</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3"><strong>Free Plan</strong></td>
                <td class="p-3 text-emerald-400">Yes</td>
                <td class="p-3 text-rose-400">No</td>
                <td class="p-3 text-amber-400">Limited</td>
                <td class="p-3 text-emerald-400">Yes</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3"><strong>Biometric Auth</strong></td>
                <td class="p-3 text-emerald-400">Yes</td>
                <td class="p-3 text-emerald-400">Yes</td>
                <td class="p-3 text-emerald-400">Yes</td>
                <td class="p-3 text-emerald-400">Yes</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3"><strong>Two-Factor Auth</strong></td>
                <td class="p-3 text-emerald-400">Yes</td>
                <td class="p-3 text-emerald-400">Yes</td>
                <td class="p-3 text-emerald-400">Yes</td>
                <td class="p-3 text-emerald-400">Yes</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3"><strong>Price (Individual)</strong></td>
                <td class="p-3 text-emerald-400">Free</td>
                <td class="p-3 text-amber-400">US$3.99/mo</td>
                <td class="p-3 text-amber-400">US$4.00/mo</td>
                <td class="p-3 text-emerald-400">Free</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3"><strong>Security</strong></td>
                <td class="p-3 text-emerald-400">Excellent</td>
                <td class="p-3 text-emerald-400">Excellent</td>
                <td class="p-3 text-amber-400">Good</td>
                <td class="p-3 text-emerald-400">Excellent</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
        },
        {
            title: "6. Two-Factor Authentication (2FA) and Master Password",
            content: `
        <p class="mb-4 text-gray-300">
          The security of a password manager heavily depends on protecting the master password and properly implementing additional authentication. Combining a strong master password with 2FA offers robust protection against unauthorized access.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔐 Security Strategies for Master Password</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li><strong>Passphrase:</strong> Use a long, memorable phrase instead of a short password (e.g., "My_dog_was_born_in_2023_in_summer!")</li>
          <li><strong>Exclusivity:</strong> The master password should ONLY be used for the password manager</li>
          <li><strong>Memorization:</strong> Do not write down the master password on paper or anywhere else digital</li>
          <li><strong>Update:</strong> Change the master password periodically (every 6-12 months)</li>
        </ul>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔢 2FA Options for Managers</h4>
        <div class="space-y-4 mt-4">
          <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-2">TOTP (Time-based One-Time Password)</h5>
            <p class="text-gray-300 text-sm">
              One-time codes generated by apps like Google Authenticator, Authy, or Duo Mobile. Updated every 30 seconds.
            </p>
          </div>
          
          <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-2">YubiKey and Hardware Tokens</h5>
            <p class="text-gray-300 text-sm">
              Physical security keys that offer hardware-based two-factor authentication. More secure against phishing and remote interception.
            </p>
          </div>
          
          <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20">
            <h5 class="text-amber-400 font-bold mb-2">Email/SMS Backup</h5>
            <p class="text-gray-300 text-sm">
              Less secure due to SIM swapping and compromised email accounts, but useful as a fallback.
            </p>
          </div>
        </div>
      `
        }
    ];

    const advancedContentSections = [
      {
        title: "Cryptography and Security Behind Password Managers",
        content: `
          <p class="mb-4 text-gray-300">
            In 2026, password managers use advanced encryption techniques to protect your credentials. The security model is based on the "zero-knowledge" concept, where not even the service providers can access your passwords.
          </p>
          
          <h4 class="text-white font-bold mb-3 mt-6">🔐 Password Manager Encryption Architecture</h4>
          <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm text-gray-300 border-collapse">
              <thead>
                <tr class="bg-white/5 border-b border-white/10">
                  <th class="px-4 py-3 text-left text-white font-bold">Component</th>
                  <th class="px-4 py-3 text-left text-white font-bold">Technique</th>
                  <th class="px-4 py-3 text-left text-white font-bold">Implementation</th>
                  <th class="px-4 py-3 text-left text-white font-bold">Security</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-white/5 hover:bg-white/5">
                  <td class="px-4 py-3"><strong class="text-[#31A8FF]">Master Password</strong></td>
                  <td class="px-4 py-3">PBKDF2/Argon2 Derivation</td>
                  <td class="px-4 py-3">100k+ iterations, random salt</td>
                  <td class="px-4 py-3 text-emerald-400">Very High</td>
                </tr>
                <tr class="border-b border-white/5 hover:bg-white/5">
                  <td class="px-4 py-3"><strong class="text-[#31A8FF]">Data Encryption</strong></td>
                  <td class="px-4 py-3">AES-256-GCM</td>
                  <td class="px-4 py-3">Key derived from master password</td>
                  <td class="px-4 py-3 text-emerald-400">Very High</td>
                </tr>
                <tr class="border-b border-white/5 hover:bg-white/5">
                  <td class="px-4 py-3"><strong class="text-[#31A8FF]">Data Transport</strong></td>
                  <td class="px-4 py-3">TLS 1.3</td>
                  <td class="px-4 py-3">AES-256 + Perfect Forward Secrecy</td>
                  <td class="px-4 py-3 text-emerald-400">Very High</td>
                </tr>
                <tr class="border-b border-white/5 hover:bg-white/5">
                  <td class="px-4 py-3"><strong class="text-[#31A8FF]">Password Hashing</strong></td>
                  <td class="px-4 py-3">SHA-256/SHA-512</td>
                  <td class="px-4 py-3">For breach check verification</td>
                  <td class="px-4 py-3 text-amber-400">High</td>
                </tr>
                <tr class="hover:bg-white/5">
                  <td class="px-4 py-3"><strong class="text-[#31A8FF]">Asymmetric Keys</strong></td>
                  <td class="px-4 py-3">ECDH (P-384)</td>
                  <td class="px-4 py-3">For secure sharing</td>
                  <td class="px-4 py-3 text-emerald-400">Very High</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h4 class="text-white font-bold mb-3 mt-6">🛡️ Advanced Security Implementations</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
              <h5 class="text-blue-400 font-bold mb-3">Zero-Knowledge Architecture</h5>
              <p class="text-gray-300 text-sm mb-3">
                The model where data is encrypted before being sent to the server:
              </p>
              <ul class="list-disc list-inside text-sm text-gray-300 space-y-1">
                <li>Servers never see passwords in clear text</li>
                <li>Encryption keys are generated locally</li>
                <li>Zero-knowledge based authentication</li>
                <li>Cryptographic proof of possession without revelation</li>
              </ul>
            </div>
            
            <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
              <h5 class="text-purple-400 font-bold mb-3">Client-Side Encryption</h5>
              <p class="text-gray-300 text-sm mb-3">
                Encryption performed on the user's device before sending:
              </p>
              <ul class="list-disc list-inside text-sm text-gray-300 space-y-1">
                <li>Cryptographic processing in browser/app</li>
                <li>Keys never travel over the network</li>
                <li>Implementation with Web Crypto API</li>
                <li>Protection against server compromise</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "Authentication Protocols and Security in Password Managers",
        content: `
          <p class="mb-4 text-gray-300">
            Modern password manager security hinges on robust authentication protocols that ensure only the legitimate owner can access stored credentials.
          </p>
          
          <h4 class="text-white font-bold mb-3 mt-6">OAuth 2.0 and OpenID Connect</h4>
          <p class="text-gray-300 mb-4">
            Industry standard protocols for secure authentication:
          </p>
          <div class="space-y-4">
            <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
              <h5 class="text-green-400 font-bold mb-2">OAuth 2.0 Authorization Code Flow</h5>
              <ul class="list-disc list-inside text-sm text-gray-300 space-y-1">
                <li>Most secure flow for public applications</li>
                <li>Uses PKCE (Proof Key for Code Exchange) for protection against CSRF</li>
                <li>Short-lived authorization codes</li>
                <li>Access tokens with limited scope</li>
              </ul>
            </div>
            
            <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
              <h5 class="text-cyan-400 font-bold mb-2">OpenID Connect (OIDC)</h5>
              <ul class="list-disc list-inside text-sm text-gray-300 space-y-1">
                <li>Authentication layer on top of OAuth 2.0</li>
                <li>JWT signed ID tokens</li>
                <li>Automatic configuration discovery</li>
                <li>Centralized session revocation</li>
              </ul>
            </div>
          </div>
          
          <h4 class="text-white font-bold mb-3 mt-6">Advanced Authentication Techniques</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-600">
              <h5 class="text-white font-bold mb-2">WebAuthn/FIDO2</h5>
              <p class="text-gray-300 text-sm">Passwordless authentication based on public keys</p>
            </div>
            
            <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-600">
              <h5 class="text-white font-bold mb-2">Device Attestation</h5>
              <p class="text-gray-300 text-sm">Device integrity verification</p>
            </div>
            
            <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-600">
              <h5 class="text-white font-bold mb-2">Risk-Based Authentication</h5>
              <p class="text-gray-300 text-sm">Behavioral analysis for adaptive authentication</p>
            </div>
          </div>
        `
      },
      {
        title: "Future Trends in Authentication and Password Management",
        content: `
          <p class="mb-4 text-gray-300">
            In 2026 and beyond, digital authentication is rapidly evolving with new technologies that aim to eliminate traditional passwords completely.
          </p>
          
          <h4 class="text-white font-bold mb-3 mt-6">🎯 Transition to Passwordless Authentication</h4>
          <div class="space-y-6">
            <div class="bg-orange-900/10 p-5 rounded-xl border border-orange-500/20">
              <h5 class="text-orange-400 font-bold mb-3">WebAuthn and Passkeys</h5>
              <p class="text-gray-300 text-sm mb-3">
                The future of authentication based on cryptographic keys:
              </p>
              <ul class="list-disc list-inside text-sm text-gray-300 space-y-1 ml-4">
                <li>Public/private keys stored on the device</li>
                <li>Biometrics or PIN for local unlock</li>
                <li>Portability across devices with iCloud/OneDrive</li>
                <li>Protection against phishing and interception</li>
              </ul>
            </div>
            
            <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/20">
              <h5 class="text-red-400 font-bold mb-3">Continuous Authentication</h5>
              <p class="text-gray-300 text-sm mb-3">
                Authentication based on continuous behavior:
              </p>
              <ul class="list-disc list-inside text-sm text-gray-300 space-y-1 ml-4">
                <li>Keystroke dynamics analysis</li>
                <li>Geolocation and usage patterns</li>
                <li>Behavioral biometrics (gestures, acceleration)</li>
                <li>Real-time risk reassessment</li>
              </ul>
            </div>
          </div>
          
          <h4 class="text-white font-bold mb-3 mt-6">🔮 Market Trends in 2026</h4>
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
              <thead class="bg-gray-800">
                <tr>
                  <th class="p-3 text-left">Technology</th>
                  <th class="p-3 text-left">Maturity</th>
                  <th class="p-3 text-left">Expected Adoption</th>
                  <th class="p-3 text-left">Impact on Passwords</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-gray-700">
                  <td class="p-3"><strong>Passkeys (WebAuthn)</strong></td>
                  <td class="p-3">High</td>
                  <td class="p-3">Growing</td>
                  <td class="p-3 text-emerald-400">Replaces passwords</td>
                </tr>
                <tr class="border-t border-gray-700 bg-gray-800/30">
                  <td class="p-3"><strong>Multimodal Biometrics</strong></td>
                  <td class="p-3">Medium</td>
                  <td class="p-3">Emerging</td>
                  <td class="p-3 text-amber-400">Increases security</td>
                </tr>
                <tr class="border-t border-gray-700">
                  <td class="p-3"><strong>Blockchain for Identity</strong></td>
                  <td class="p-3">Low</td>
                  <td class="p-3">Experimental</td>
                  <td class="p-3 text-amber-400">Decentralized authentication</td>
                </tr>
                <tr class="border-t border-gray-700 bg-gray-800/30">
                  <td class="p-3"><strong>Continuous Authentication</strong></td>
                  <td class="p-3">Medium</td>
                  <td class="p-3">Growing</td>
                  <td class="p-3 text-green-400">Reduces re-authentication need</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="bg-[#0A0A0F] border border-[#FF4B6B]/20 rounded-xl p-6 mt-6">
            <h4 class="text-[#FF4B6B] font-bold mb-2">💡 Implementation Considerations</h4>
            <p class="text-sm text-gray-300">
              The transition to passwordless authentication is a gradual process. In 2026, password managers are still necessary for services that haven't adopted modern technologies. The ideal strategy combines robust password managers with progressive adoption of passwordless technologies.
            </p>
          </div>
        `
      }
    ];

    const faqItems = [
      {
        question: "What is a password manager and why do I need one?",
        answer: "A <strong>password manager</strong> is a tool that stores, organizes, and protects all your credentials in an encrypted digital vault. You need one because: 1) <strong>Prevents password reuse</strong> (the #1 cause of account compromises); 2) <strong>Generates strong and unique passwords</strong> for each service; 3) <strong>Makes autofilling forms easier</strong>; 4) <strong>Protects against mass data breaches</strong>. With a single secure login, you keep all your accounts protected."
      },
      {
        question: "Is Bitwarden really secure and free?",
        answer: "Yes, <strong>Bitwarden</strong> is secure and offers a robust free plan. Its architecture is based on <strong>zero-knowledge</strong> (servers cannot read your passwords), the source code is open and auditable, and it uses AES-256 encryption. The free plan allows you to store unlimited passwords, credit cards, and secure notes, and offers cross-device synchronization. Paid plans add features like password sharing and breach protection."
      },
      {
        question: "What is the difference between password managers and saving passwords in the browser?",
        answer: "The main difference is the <strong>level of security and portability</strong>. Passwords saved in the browser: 1) Are synced with the browser account (less secure); 2) Do not offer zero-knowledge encryption; 3) Are vulnerable to malware that can extract passwords; 4) Limited to the browser ecosystem. Dedicated managers: 1) Offer end-to-end encryption; 2) Work across all browsers and devices; 3) Have additional authentication (biometrics, 2FA); 4) Have password generators and breach detection."
      },
      {
        question: "How to create a strong and secure master password?",
        answer: "To create a secure master password: 1) <strong>Use a long phrase</strong> instead of a short word (e.g., 'My_vaccinated_dog_in_2026!'); 2) <strong>Include variations</strong> of uppercase, lowercase, numbers, and symbols; 3) <strong>Avoid personal information</strong> (names, birth dates); 4) <strong>Do not reuse it</strong> for other services; 5) <strong>Memorize it</strong> - do not write it down on paper or digitally. Consider using a mnemonic to facilitate memorization."
      },
      {
        question: "What happens if I forget my master password?",
        answer: "Unfortunately, <strong>there is no way to recover your master password</strong> in zero-knowledge based password managers like Bitwarden. The company does not have access to your encrypted passwords. That is why it is crucial to: 1) <strong>Memorize your master password</strong> using mnemonic techniques; 2) <strong>Enable 2FA</strong> as an additional layer of security; 3) <strong>Keep recovery methods</strong> (emergency backup, security questions) only if offered by the service. Security is prioritized over convenience."
      },
      {
        question: "Can I share passwords with my family or work team?",
        answer: "Yes, most modern password managers offer <strong>secure sharing</strong> features. In Bitwarden, for example, you can create organizational vaults to share credentials with family members or colleagues. Shared passwords remain encrypted and owners can revoke access at any time. This is especially useful for shared accounts (Netflix, Spotify, etc.)."
      },
      {
        question: "What are the risks of using a password manager?",
        answer: "While secure, password managers have some risks: 1) <strong>Single point of failure</strong> - if your master password is compromised, all accounts are at risk; 2) <strong>Service dependency</strong> - if the service is discontinued, you need to have backups; 3) <strong>Targeted attacks</strong> - servers can be a target for hackers; 4) <strong>Phishing</strong> - browser extensions can be manipulated on fake sites. To mitigate: use 2FA, choose reliable providers, and maintain offline backups."
      },
      {
        question: "What is WebAuthn and how does it replace passwords?",
        answer: "<strong>WebAuthn</strong> is a web standard for passwordless authentication that uses cryptographic public/private keys. Instead of a password, you use an authentication device (like a YubiKey, fingerprint, or Face ID) to prove your identity. This makes phishing attacks and password theft virtually impossible. Major companies like Google, Microsoft, and Apple are implementing WebAuthn as an alternative to traditional passwords."
      },
      {
        question: "How to detect password leaks and what to do when it happens?",
        answer: "Modern managers like Bitwarden and 1Password offer <strong>leak monitoring</strong> that periodically checks if your credentials appear in known breaches. You can also use services like <em>Have I Been Pwned</em> to check if your emails or passwords were compromised. When a password is leaked: 1) <strong>Change it immediately</strong> on the affected service; 2) <strong>Monitor suspicious activity</strong>; 3) <strong>Check if other accounts use the same password</strong> and change them too."
      },
      {
        question: "What is 2FA and why should I use it with my password manager?",
        answer: "<strong>2FA (Two-Factor Authentication)</strong> adds an extra layer of security by requiring a second factor beyond the password (like a code from your phone or fingerprint). You should use 2FA with your password manager because if your master password is compromised, the attacker still won't be able to access your vault without the second factor. Use more secure options like TOTP or security keys instead of SMS."
      },
      {
        question: "Can I use password managers on mobile devices?",
        answer: "Yes, all major password managers offer mobile apps for iOS and Android. They offer the same functionality as the desktop: secure storage, autofill, and password generation. Mobile apps sync with your account, allowing access to your credentials on any device. Some also offer biometric authentication (fingerprint or Face ID) for additional unlocking secureness."
      },
      {
        question: "What are the best practices for password security in 2026?",
        answer: "Best practices include: 1) <strong>Using a password manager</strong> to create and store unique passwords; 2) <strong>Enabling 2FA</strong> on all possible accounts; 3) <strong>Not reusing passwords</strong> across accounts; 4) <strong>Updating passwords regularly</strong> on important services; 5) <strong>Monitoring for data breaches</strong>; 6) <strong>Using passwordless authentication</strong> (WebAuthn) when available; 7) <strong>Keeping software updated</strong> to protect against keyloggers; 8) <strong>Phishing education</strong> to avoid accidental credential submission."
      }
    ];

    const externalReferences = [
      { name: "Bitwarden - Official Site", url: "https://bitwarden.com/" },
      { name: "Proton Pass - Password Manager", url: "https://proton.me/pass" },
      { name: "1Password - Feature Comparison", url: "https://www.1password.com/" },
      { name: "WebAuthn Standard - W3C", url: "https://www.w3.org/TR/webauthn-2/" },
      { name: "FIDO Alliance - Passwordless Authentication", url: "https://fidoalliance.org/" },
      { name: "Have I Been Pwned - Leak Verification", url: "https://haveibeenpwned.com/" },
      { name: "NIST Password Guidelines", url: "https://pages.nist.gov/800-63-3/sp800-63b.html" },
      { name: "OWASP Authentication Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
      { name: "Yubico - Security Keys", url: "https://www.yubico.com/" },
      { name: "Google Password Checkup Tool", url: "https://chrome.google.com/webstore/detail/password-checkup/pnfnjhjdjdjcckjpajmnpjhcjohhkkja" }
    ];

    const relatedGuides = [
      {
        href: "/guides/autenticacao-dois-fatores",
        title: "Enable 2FA",
        description: "The mandatory second layer of defense."
      },
      {
        href: "/guides/identificacao-phishing",
        title: "Avoid Scams",
        description: "Never give your master password to anyone."
      },
      {
        href: "/guides/protecao-dados-privacidade",
        title: "Digital Privacy",
        description: "Protect your data beyond passwords."
      },
      {
        href: "/guides/backup-dados",
        title: "Data Backup",
        description: "Backup your credentials securely."
      },
      {
        href: "/guides/criptografia-dados",
        title: "Data Encryption",
        description: "Understand how encryption protects your passwords."
      },
      {
        href: "/guides/protecao-ransomware",
        title: "Ransomware Protection",
        description: "Protect your data and passwords from cryptoviruses."
      },
      {
        href: "/guides/firewall-configuracao",
        title: "Firewall Configuration",
        description: "Block unauthorized access to your manager."
      }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="35 min"
            difficultyLevel="Intermediate"
            author="Voltris Security Team"
            lastUpdated="2026-01-20"
            contentSections={contentSections}
            advancedContentSections={advancedContentSections}
            additionalContentSections={[]}
            summaryTable={summaryTable}
            faqItems={faqItems}
            externalReferences={externalReferences}
            relatedGuides={relatedGuides}
        />
    );
}

