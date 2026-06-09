import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'seguranca-digital',
  title: "Digital Security Guide in 2026: Avoid Scams and Hacks",
  description: "Learn how to protect yourself against phishing, account theft, and common scams on WhatsApp and Social Media in 2026. Full digital hygiene guide.",
  category: 'network-security',
  difficulty: 'Beginner',
  time: '30 min'
};

const title = "Digital Security Guide in 2026: Avoid Scams and Hacks";
const description = "Learn how to protect yourself against phishing, account theft, and common scams on WhatsApp and Social Media in 2026. Full digital hygiene guide.";
const keywords = [
  'digital security how to protect yourself 2026 guide',
  'how to avoid phishing and online scams tutorial 2026',
  'protect whatsapp against cloning guide 2026',
  'digital hygiene for beginners full guide 2026',
  'personal cybersecurity what you need to know 2026'
];

export const metadata: Metadata = createGuideMetadata('seguranca-digital', title, description, keywords);

export default function DigitalSecurityGuide() {
  const summaryTable = [
    { label: "The Weakest Link", value: "The User (Social Engineering)" },
    { label: "Vital Measure", value: "Two-Factor Authentication (2FA)" },
    { label: "Hygiene", value: "Unique passwords for every service" },
    { label: "Difficulty", value: "Beginner" }
  ];

  const contentSections = [
    {
      title: "The Threat Landscape in 2026",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, cyberattacks have become much smarter. With the use of **Deepfakes** and voice-cloning AIs, a scam could come through a call that sounds like your bank manager or a family member. Digital security today goes beyond a simple antivirus; it requires a state of constant alertness and verification processes that prevent human error.
        </p>
        <div class="bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500 my-6">
          <p class="text-red-200 font-semibold">Alarming Data:</p>
          <p class="text-gray-300 mt-2">According to the Symantec annual report, cyberattacks increased by 38% in 2026, with over 4.8 billion attack attempts recorded globally. About 1 in 99 emails is phishing, and the success rate of these attacks has tripled since 2020.</p>
        </div>
        <p class="mb-4 text-gray-300 leading-relaxed">
          Cybersecurity has evolved to face increasingly sophisticated threats. With the mainstreaming of generative artificial intelligence, cybercriminals can now create highly convincing, personalized, and grammatically perfect fraudulent content, making it difficult to detect scams.
        </p>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-white font-bold mb-3 flex items-center">
            <span className="mr-2">⚠️</span> Emerging Threat Types in 2026
          </h4>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span><strong>Deepfake Fraud:</strong> Synthetic voices and faces used in phone scams</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span><strong>AI-Powered Phishing:</strong> Emails perfectly written by AI to deceive users</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span><strong>Social Media Impersonation:</strong> Fake profiles using your identity for fraud</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span><strong>Vishing (Voice Phishing):</strong> Fraudulent calls that sound official</span>
            </li>
          </ul>
        </div>
      `
    },
    {
      title: "1. The Phishing Scam and AIs",
      content: `
        <p class="mb-4 text-gray-300">In the past, phishing emails had obvious grammar errors. In 2026:</p>
        <p class="text-sm text-gray-300">
            Criminals use AIs to write perfect messages, simulating official communications from banks or government agencies. <br/><br/>
            <strong>The Golden Rule:</strong> Never click on links from SMS or Email asking for 'immediate data update' or 'account lock'. If in doubt, open the bank's official app or access the site by typing the address directly in the browser.
        </p>
        <div class="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500 my-6">
          <p class="text-yellow-200 font-semibold">Phishing Techniques in 2026:</p>
          <p class="text-gray-300 mt-2">With the advance of artificial intelligence, phishing attacks now use advanced personalization techniques, known as spear phishing, where criminals use public data from social media to create highly convincing and targeted messages.</p>
        </div>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Identifying a Phishing Email</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2">Signs of Fraud</h4>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• Unjustified urgency ("update your data now!")</li>
              <li>• Suspicious or "looks-like" email address</li>
              <li>• Subtle spelling or formatting errors</li>
              <li>• Links with truncated or masked URLs</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-green-400 mb-2">Safe Verification</h4>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• Hover mouse over links without clicking</li>
              <li>• Verify the sender's full domain</li>
              <li>• Access official site directly in browser</li>
              <li>• Contact company through official channels</li>
            </ul>
          </div>
        </div>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-white font-bold mb-3 flex items-center">
            <span className="mr-2">💡</span> Phishing Prevention Tips
          </h4>
          <table class="min-w-full bg-gray-800/50 rounded-lg overflow-hidden">
            <thead class="bg-gray-700">
              <tr>
                <th class="py-2 px-4 text-left text-sm font-semibold text-gray-300">Method</th>
                <th class="py-2 px-4 text-left text-sm font-semibold text-gray-300">Description</th>
                <th class="py-2 px-4 text-left text-sm font-semibold text-gray-300">Effectiveness</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">URL Verification</td>
                <td class="py-2 px-4 text-sm text-gray-300">Hover mouse over links to reveal real URL</td>
                <td class="py-2 px-4 text-sm text-green-400">High</td>
              </tr>
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">2FA</td>
                <td class="py-2 px-4 text-sm text-gray-300">Two-factor authentication for all accounts</td>
                <td class="py-2 px-4 text-sm text-green-400">Very High</td>
              </tr>
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">Secondary Email</td>
                <td class="py-2 px-4 text-sm text-gray-300">Use different email for sensitive accounts</td>
                <td class="py-2 px-4 text-sm text-yellow-400">Medium</td>
              </tr>
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">Antiphishing</td>
                <td class="py-2 px-4 text-sm text-gray-300">Antiphishing extensions and email filters</td>
                <td class="py-2 px-4 text-sm text-green-400">High</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "2. Shielding WhatsApp and Social Media",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Stop the Cloning:</h4>
            <p class="text-sm text-gray-300">
                1. On WhatsApp, go to Settings > Account > <strong>Two-step verification</strong>. Create a PIN. <br/>
                2. Never give out codes arriving via SMS under any pretext. <br/>
                3. Hide your profile picture from everyone not in your contacts; this prevents scammers from using your image to create a fake profile and ask your relatives for money.
            </p>
        </div>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">WhatsApp Privacy Settings</h3>
        <div class="space-y-6">
          <div class="border-l-4 border-green-500 pl-4 py-1">
            <h4 class="text-lg font-semibold text-white mb-2">Two-step verification</h4>
            <p class="text-gray-300 text-sm mb-2">Add an extra layer of security by requiring a PIN when linking your number to another device.</p>
            <ol class="list-decimal list-inside text-gray-300 space-y-1 text-sm">
              <li>Open WhatsApp and go to Settings > Account > Two-step verification</li>
              <li>Enable the option and create a 6-digit PIN</li>
              <li>Add an optional recovery email</li>
              <li>Keep your PIN in a safe place</li>
            </ol>
          </div>
          <div class="border-l-4 border-purple-500 pl-4 py-1">
            <h4 class="text-lg font-semibold text-white mb-2">Information Visibility</h4>
            <p class="text-gray-300 text-sm mb-2">Control who can see your profile picture, status, and last seen.</p>
            <ol class="list-decimal list-inside text-gray-300 space-y-1 text-sm">
              <li>Go to Settings > Account > Privacy</li>
              <li>Set profile picture, status, and last seen to "My contacts" or "Nobody"</li>
              <li>Restrict who can add you to groups</li>
            </ol>
          </div>
          <div class="border-l-4 border-indigo-500 pl-4 py-1">
            <h4 class="text-lg font-semibold text-white mb-2">Security Verification</h4>
            <p class="text-gray-300 text-sm mb-2">Check if your chats are encrypted with unknown contacts.</p>
            <ol class="list-decimal list-inside text-gray-300 space-y-1 text-sm">
              <li>Tap contact's name > Info > Security verification</li>
              <li>Compare verification codes or scan QR Code</li>
              <li>If codes differ, the conversation may not be secure</li>
            </ol>
          </div>
        </div>
      `
    },
    {
      title: "3. Public Wi-Fi Networks",
      content: `
        <p class="mb-4 text-gray-300">
            <strong>The Danger of Free Wi-Fi:</strong> 
            <br/><br/>When using Wi-Fi at airports or coffee shops, remember that anyone on the same network can (technically) monitor unencrypted traffic. Avoid accessing bank accounts in these locations. If you need to work on public networks, using a **VPN** is mandatory to create a secure data tunnel between your computer and the internet.
        </p>
        <div class="bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500 my-6">
          <p class="text-red-200 font-semibold">Risks of Public Networks:</p>
          <p class="text-gray-300 mt-2">On public Wi-Fi networks, you are vulnerable to attacks like Man-in-the-Middle (MitM), where an attacker intercepts communication between your device and the internet. This allows stealing passwords, bank details, and other sensitive information.</p>
        </div>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Security on Public Networks</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2">VPN Usage</h4>
            <p class="text-gray-300 text-sm">Encrypts all internet traffic, protecting your data</p>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2">HTTPS Only</h4>
            <p class="text-gray-300 text-sm">Ensure sites use secure connections (padlock icon)</p>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2">Disable Sharing</h4>
            <p class="text-gray-300 text-sm">Turn off file and printer sharing on public networks</p>
          </div>
        </div>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-white font-bold mb-3 flex items-center">
            <span className="mr-2">📋</span> Public Wi-Fi Security Checklist
          </h4>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">✓</span>
              <span>Activate your VPN before connecting to the public network</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">✓</span>
              <span>Avoid accessing sensitive accounts (banks, personal emails)</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">✓</span>
              <span>Check if site uses HTTPS (padlock icon)</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">✓</span>
              <span>Turn off network discovery and file sharing</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">✓</span>
              <span>Log out after finishing your session</span>
            </li>
          </ul>
        </div>
      `
    },
    {
      title: "4. Social Engineering and Psychological Manipulation",
      content: `
        <p class="mb-4 text-gray-300">
          Social engineering is the art of manipulating people into giving out confidential information. In 2026, scammers use advanced psychological techniques combined with artificial intelligence to create emotional pressure situations and exploit human emotions such as fear, urgency, and trust.
        </p>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Common Social Engineering Techniques</h3>
        <div class="space-y-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">📞</span> Vishing (Voice Phishing)
            </h4>
            <p class="text-gray-300 text-sm mb-2">Fraudulent calls simulating trusted institutions to obtain personal information.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>Scammers pretend to be from bank, government or known company</li>
              <li>May use deepfakes to simulate known voices</li>
              <li>Exploit feelings of fear and urgency for quick action</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">✉️</span> Spear Phishing
            </h4>
            <p class="text-gray-300 text-sm mb-2">Targeted emails using personal information to look legitimate.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>Personalized with names, roles, and specific info</li>
              <li>Use public data from social media and previous leaks</li>
              <li>Often simulate coworkers or known contacts</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">👤</span> Pretexting
            </h4>
            <p class="text-gray-300 text-sm mb-2">Creating a story (pretext) to gain trust and obtain info.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>May involve identity impersonation (tech support, auditor, etc.)</li>
              <li>Develops a convincing scenario to justify requests</li>
              <li>Exploits people's desire to help or cooperate</li>
            </ul>
          </div>
        </div>
        <div class="bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 my-6">
          <p class="text-green-200 font-semibold">Prevention:</p>
          <p class="text-gray-300 mt-2">The best defense against social engineering is training and awareness. Be suspicious of urgent information requests, verify the identity of anyone contacting you, and never provide sensitive info via phone or email without prior confirmation.</p>
        </div>
      `
    },
    {
      title: "5. Deepfake Identification and Prevention",
      content: `
        <p class="mb-4 text-gray-300">
          Deepfakes are synthetic videos, audio, or images created with AI to simulate real people. In 2026, these technologies have become more accessible and convincing, being used in scams ranging from financial fraud to disinformation campaigns.
        </p>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">How to Detect Deepfakes</h3>
        <div class="overflow-x-auto mb-6">
          <table class="min-w-full bg-gray-800/50 rounded-lg overflow-hidden">
            <thead class="bg-gray-700">
              <tr>
                <th class="py-2 px-4 text-left text-sm font-semibold text-gray-300">Element</th>
                <th class="py-2 px-4 text-left text-sm font-semibold text-gray-300">Suspicious Features</th>
                <th class="py-2 px-4 text-left text-sm font-semibold text-gray-300">Detection Tools</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">Audio</td>
                <td class="py-2 px-4 text-sm text-gray-300">Voice not perfectly matching lip movements</td>
                <td class="py-2 px-4 text-sm text-gray-300">Specialized audio analysis software</td>
              </tr>
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">Video</td>
                <td class="py-2 px-4 text-sm text-gray-300">Irregular blinking, inconsistent shadows, artificial edges</td>
                <td class="py-2 px-4 text-sm text-gray-300">Deepfake detection APIs</td>
              </tr>
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">Behavior</td>
                <td class="py-2 px-4 text-sm text-gray-300">Atypical speech or gestures for the person portrayed</td>
                <td class="py-2 px-4 text-sm text-gray-300">Behavior pattern analysis</td>
              </tr>
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">Context</td>
                <td class="py-2 px-4 text-sm text-gray-300">Unlikely situations or out of habitual context</td>
                <td class="py-2 px-4 text-sm text-gray-300">Cross-verification with official sources</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-white font-bold mb-3 flex items-center">
            <span className="mr-2">💡</span> Preventive Measures Against Deepfakes
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h5 class="font-bold text-white mb-2">Identity Verification</h5>
              <p class="text-gray-300 text-sm">Use official channels to confirm someone's identity in doubtful situations.</p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h5 class="font-bold text-white mb-2">Awareness</h5>
              <p class="text-gray-300 text-sm">Educate yourself and others about the risks and signs of deepfakes.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "6. Social Media and Digital Profile Security",
      content: `
        <p class="mb-4 text-gray-300">
          Your social networks contain a stunning amount of personal info that can be used for targeted attacks. In 2026, protecting your digital profile involves care with what you share, who can see it and interact with your content, and how you present yourself online.
        </p>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Social Media Security Settings</h3>
        <div class="space-y-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">🔒</span> Profile Privacy
            </h4>
            <p class="text-gray-300 text-sm mb-2">Control who can see your personal info and interact with you.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>Limit post audience (public, friends, only you)</li>
              <li>Regularly review who can send messages or comments</li>
              <li>Restrict access to sensitive info (location, phone, etc.)</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">🛡️</span> Identity Verification
            </h4>
            <p class="text-gray-300 text-sm mb-2">Activate two-factor authentication and login verification.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>Use authenticators instead of SMS for 2FA</li>
              <li>Monitor active sessions and connected devices</li>
              <li>Enable login alerts for new devices</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">🔍</span> Public Information
            </h4>
            <p class="text-gray-300 text-sm mb-2">Minimize data visible to strangers and search engines.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>Avoid sharing full birth dates</li>
              <li>Don't publish photos with sensitive geolocation</li>
              <li>Avoid revealing routines or personal habits</li>
            </ul>
          </div>
        </div>
        <div class="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500 my-6">
          <p class="text-yellow-200 font-semibold">Security Tips:</p>
          <p class="text-gray-300 mt-2">Configure notifications for when someone tries to access your account, regularly review your connections and friends, and periodically read the terms of use and privacy policies of the platforms you use.</p>
        </div>
      `
    },
    {
      title: "7. Data Security and Backups",
      content: `
        <p class="mb-4 text-gray-300">
          Digital security is not limited to protection against unauthorized access; it also involves ensuring your data is available and intact in case of incidents such as ransomware, hardware failures, or natural disasters. In 2026, the backup strategy must be robust and tested regularly.
        </p>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Backup Strategies in 2026</h3>
        <div class="space-y-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">🔄</span> 3-2-1 Rule
            </h4>
            <p class="text-gray-300 text-sm mb-2">Keep 3 copies of data, on 2 different media types, with 1 offsite copy.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>3 copies: Original + 2 backups</li>
              <li>2 different types: HDD, SSD, cloud, etc.</li>
              <li>1 offsite: Remote location or encrypted cloud</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">🛡️</span> Immutable Backups
            </h4>
            <p class="text-gray-300 text-sm mb-2">Backups that cannot be altered or deleted by attackers.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>WORM (Write Once, Read Many) objects</li>
              <li>Backups on offline media or with write protection</li>
              <li>Solutions preventing ransomware encryption</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">🔍</span> Regular Testing
            </h4>
            <p class="text-gray-300 text-sm mb-2">Periodically check if your backups can be restored.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>Critical file restoration test</li>
              <li>Verify data integrity</li>
              <li>Document recovery process</li>
            </ul>
          </div>
        </div>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-white font-bold mb-3 flex items-center">
            <span className="mr-2">⚠️</span> Common Backup Pitfalls
          </h4>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span>Storing backups on the same device as the original data</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span>Not regularly testing if backups work</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span>Using only local backup solutions (no offsite copy)</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span>Relying exclusively on cloud providers without a secondary backup</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span>Not encrypting backups containing sensitive data</span>
            </li>
          </ul>
        </div>
      `
    },
    {
      title: "8. Monitoring and Detecting Suspicious Activities",
      content: `
        <p class="mb-4 text-gray-300">
          In 2026, digital security also involves constantly monitoring your accounts and devices for abnormal activities. This includes following logins on new devices, unexpected changes in settings, and usage patterns that deviate from normal.
        </p>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Monitoring Tools and Practices</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2">Security Alerts</h4>
            <ul class="text-sm text-gray-300 space-y-1 list-disc pl-5">
              <li>Login notifications on new devices</li>
              <li>Password or personal info changes</li>
              <li>Unusual account activities (different location)</li>
              <li>App security updates</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2">Device Monitoring</h4>
            <ul class="text-sm text-gray-300 space-y-1 list-disc pl-5">
              <li>Updated firewalls and antivirus</li>
              <li>Suspicious network traffic analysis</li>
              <li>Unauthorized running processes</li>
              <li>Critical file modifications</li>
            </ul>
          </div>
        </div>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Indicators of Compromise (IoCs)</h3>
        <div class="space-y-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">🔓</span> Account Behavior
            </h4>
            <p class="text-gray-300 text-sm mb-2">Signs that your account may have been compromised.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>Login from unlikely geographic location</li>
              <li>Repeated failed access attempts</li>
              <li>Account setting changes</li>
              <li>Activities you don't recognize</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">💻</span> Device Behavior
            </h4>
            <p class="text-gray-300 text-sm mb-2">Signs that your device may have been compromised.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>Unexpectedly slow performance</li>
              <li>Unwanted pop-ups or ads</li>
              <li>Programs auto-starting</li>
              <li>Abnormal network traffic</li>
            </ul>
          </div>
        </div>
        <div class="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500 my-6">
          <p class="text-yellow-200 font-semibold">Immediate Actions:</p>
          <p class="text-gray-300 mt-2">If you notice suspicious activities, change your passwords immediately, verify if 2FA is still active, and run security scans on your device. In severe cases, contact the support of the affected platform.</p>
        </div>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "12. Encryption and Data Security in 2026",
      content: `
        <h4 class="text-white font-bold mb-3">🔐 Advanced Encryption Techniques</h4>
        <p class="mb-4 text-gray-300">
          In 2026, encryption has evolved to face increasingly sophisticated threats, including quantum computing and advanced algorithm-breaking techniques:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-3">Advanced Asymmetric Encryption</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• RSA-4096 and P-384 elliptic curves</li>
              <li>• Post-quantum encryption (CRYSTALS-Kyber)</li>
              <li>• Extended Diffie-Hellman key exchange</li>
              <li>• Secure key negotiation protocols</li>
              <li>• Perfect Forward Secrecy</li>
            </ul>
          </div>
          <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-3">Modern Symmetric Encryption</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• AES-256 with GCM and XTS modes</li>
              <li>• ChaCha20-Poly1305 for mobile environments</li>
              <li>• Homomorphic encryption for secure processing</li>
              <li>• Disk encryption algorithms (BitLocker, FileVault)</li>
              <li>• Runtime Encryption (RTE)</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🛡️ Practical Security Implementations</h4>
        <p class="mb-4 text-gray-300">
          Advanced techniques to protect data in different scenarios:
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Scenario</th>
                <th class="p-3 text-left">Technique</th>
                <th class="p-3 text-left">Implementation</th>
                <th class="p-3 text-left">Security Level</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">Data in transit</td>
                <td class="p-3">TLS 1.3 + Perfect Forward Secrecy</td>
                <td class="p-3">AES-256-GCM + ECDHE</td>
                <td class="p-3 text-green-400">Very High</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Local storage</td>
                <td class="p-3">Full disk encryption</td>
                <td class="p-3">BitLocker/XOR/XTS-AES</td>
                <td class="p-3 text-green-400">High</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Cloud data</td>
                <td class="p-3">Client-side encryption</td>
                <td class="p-3">AES-256 + customer-managed keys</td>
                <td class="p-3 text-green-400">Very High</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Instant messaging</td>
                <td class="p-3">End-to-end encryption</td>
                <td class="p-3">Signal Protocol (Curve25519 + AES-256)</td>
                <td class="p-3 text-green-400">Very High</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 mt-6">
          <h4 class="text-amber-400 font-bold mb-2">💡 Pro Tip: Layered Encryption</h4>
          <p class="text-sm text-gray-300">
            In 2026, the best practice is to implement encryption in multiple layers: application encryption, transport encryption, and storage encryption, each with different algorithms for maximum protection.
          </p>
        </div>
      `
    },
    {
      title: "13. Vulnerability Analysis and Penetration Testing",
      content: `
        <h4 class="text-white font-bold mb-3">🔍 Security Analysis Methodologies</h4>
        <p class="mb-4 text-gray-300">
          In 2026, proactive security involves advanced vulnerability analysis techniques and penetration testing:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
          <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
            <h5 class="text-green-400 font-bold mb-3">Vulnerability Analysis</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Scanning with OWASP ZAP and Nessus</li>
              <li>• Dependency assessment (Snyk, Dependabot)</li>
              <li>• Static Application Security Testing (SAST)</li>
              <li>• Dynamic Application Security Testing (DAST)</li>
              <li>• Container security assessment</li>
            </ul>
          </div>
          <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
            <h5 class="text-cyan-400 font-bold mb-3">Penetration Testing</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• PTES Methodology (Penetration Testing Execution Standard)</li>
              <li>• Metasploit framework for exploitation</li>
              <li>• Network, web, and mobile app testing</li>
              <li>• Social engineering testing</li>
              <li>• Incident response evaluation</li>
            </ul>
          </div>
          <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
            <h5 class="text-indigo-400 font-bold mb-3">Risk Analysis</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Probability and impact matrices</li>
              <li>• Quantitative and qualitative analysis</li>
              <li>• NIST Cybersecurity Framework model</li>
              <li>• Security maturity assessment</li>
              <li>• Financial risk quantification</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🛡️ Threat Identification Techniques</h4>
        <p class="mb-4 text-gray-300">
          Methodologies to identify and classify cyber threats:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-800 p-4 rounded-lg">
            <h5 class="text-cyan-400 font-bold mb-2">STRIDE</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Spoofing: Identity forgery</li>
              <li>• Tampering: Unauthorized data alteration</li>
              <li>• Repudiation: Denial of actions performed</li>
              <li>• Information Disclosure: Information exposure</li>
              <li>• Denial of Service: Service denial</li>
              <li>• Elevation of Privilege: Improper privilege escalation</li>
            </ul>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg">
            <h5 class="text-purple-400 font-bold mb-2">DREAD</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Damage: Potential damage</li>
              <li>• Reproducibility: Ease of reproduction</li>
              <li>• Exploitability: Ease of exploitation</li>
              <li>• Affected Users: Number of affected users</li>
              <li>• Discoverability: Ease of discovery</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "14. Threat Intelligence and Incident Response",
      content: `
        <h4 class="text-white font-bold mb-3">🚨 Threat Intelligence in 2026</h4>
        <p class="mb-4 text-gray-300">
          Threat intelligence has evolved to provide predictive and reactive insights into cyberattacks:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
          <div class="bg-orange-900/10 p-5 rounded-xl border border-orange-500/20">
            <h5 class="text-orange-400 font-bold mb-3">Intelligence Types</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Strategic: High-level view for decision-making</li>
              <li>• Tactical: TTPs info (Tactics, Techniques, and Procedures)</li>
              <li>• Operational: Specific campaign data</li>
              <li>• Technical: Indicators of Compromise (IoCs) and IOAs</li>
              <li>• Threat Actor Profiling: Profile of attack groups</li>
            </ul>
          </div>
          <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/20">
            <h5 class="text-red-400 font-bold mb-3">Incident Response</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Preparation and planning</li>
              <li>• Identification and analysis</li>
              <li>• Containment, eradication, and recovery</li>
              <li>• Lessons learned and continuous improvement</li>
              <li>• Coordination with regulatory bodies</li>
            </ul>
          </div>
          <div class="bg-pink-900/10 p-5 rounded-xl border border-pink-500/20">
            <h5 class="text-pink-400 font-bold mb-3">TIP Tools</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• MISP (Malware Information Sharing Platform)</li>
              <li>• ThreatConnect</li>
              <li>• IBM X-Force Exchange</li>
              <li>• Recorded Future</li>
              <li>• AlienVault OTX</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 Incident Response Frameworks</h4>
        <p class="mb-4 text-gray-300">
          Standardized structures for effective response to security incidents:
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Framework</th>
                <th class="p-3 text-left">Phases</th>
                <th class="p-3 text-left">Main Focus</th>
                <th class="p-3 text-left">Applicability</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">NIST SP 800-61</td>
                <td class="p-3">Prep, Detection, Response, Recovery</td>
                <td class="p-3">Government and commercial orgs</td>
                <td class="p-3 text-green-400">High</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">SANS Incident Handler</td>
                <td class="p-3">Prep, Containment, Eradication, Recovery</td>
                <td class="p-3">Incident response teams</td>
                <td class="p-3 text-green-400">High</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">CERT Responder</td>
                <td class="p-3">Classification, Containment, Learning</td>
                <td class="p-3">Incident response centers</td>
                <td class="p-3 text-green-400">High</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">ISO 27035</td>
                <td class="p-3">Planning, Detection, Assessment, Response</td>
                <td class="p-3">Compliance and governance</td>
                <td class="p-3 text-yellow-400">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔬 Digital Forensics</h4>
        <p class="mb-4 text-gray-300">
          Advanced techniques for cyber incident investigation:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
          <li><strong>Evidence Collection:</strong> Forensic images of disks, RAM, and networks</li>
          <li><strong>Artifacts Analysis:</strong> Temp files, logs, browser history</li>
          <li><strong>Timeline Analysis:</strong> Reconstruction of event sequence</li>
          <li><strong>Network Forensics:</strong> Network packet and traffic analysis</li>
          <li><strong>Mobile Forensics:</strong> Mobile device extraction and analysis</li>
        </ul>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "9. Security in Corporate Environments",
      content: `
        <h4 class="text-white font-bold mb-3">🏢 Corporate Security in 2026</h4>
        <p class="mb-4 text-gray-300">
          In corporate environments, digital security involves coordinated policies, technologies, and procedures:
        </p>
        <div class="space-y-6">
          <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-900/10">
            <h5 class="text-green-400 font-bold mb-2">Zero Trust Architecture</h5>
            <p class="text-gray-300 text-sm">
              Security model assuming distrust in all access:
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• Continuous identity and device verification</li>
              <li>• Least privilege access</li>
              <li>• Micro and macro network segmentation</li>
              <li>• Continuous activity monitoring</li>
              <li>• Encryption at all levels</li>
            </ul>
          </div>
          <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-900/10">
            <h5 class="text-blue-400 font-bold mb-2">Security Governance</h5>
            <p class="text-gray-300 text-sm">
              Structure of policies and processes to manage risk:
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• Information security policy</li>
              <li>• Security and risk committees</li>
              <li>• Continuous risk assessment</li>
              <li>• Training and awareness</li>
              <li>• Regular security audits</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🛡️ Corporate Security Controls</h4>
        <p class="mb-4 text-gray-300">
          Practical security implementations in business environments:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-800 p-4 rounded-lg">
            <h5 class="text-cyan-400 font-bold mb-2">Technical Controls</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Firewalls and NGFW (Next Generation Firewall)</li>
              <li>• SIEM/SOAR for detection and response</li>
              <li>• EDR (Endpoint Detection and Response)</li>
              <li>• DLP (Data Loss Prevention)</li>
              <li>• IAM (Identity and Access Management)</li>
            </ul>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg">
            <h5 class="text-purple-400 font-bold mb-2">Administrative Controls</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Acceptable use policies</li>
              <li>• Incident response procedures</li>
              <li>• Awareness training</li>
              <li>• Security change management</li>
              <li>• Regular compliance audits</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "10. Cloud Security and Infrastructure as Code",
      content: `
        <h4 class="text-white font-bold mb-3">☁️ Security in Cloud Environments</h4>
        <p class="mb-4 text-gray-300">
          The migration to the cloud introduced new challenges and security paradigms:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
          <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
            <h5 class="text-indigo-400 font-bold mb-3">Responsibility Models</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Shared Responsibility Model (AWS, Azure, GCP)</li>
              <li>• CSPM (Cloud Security Posture Management)</li>
              <li>• CWPP (Cloud Workload Protection Platforms)</li>
              <li>• Container and serverless security</li>
              <li>• Compliance in hybrid environments</li>
            </ul>
          </div>
          <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
            <h5 class="text-cyan-400 font-bold mb-3">Infrastructure as Code (IaC)</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Terraform, Ansible, CloudFormation</li>
              <li>• Infra as Code Security (IaC SAST)</li>
              <li>• Policy as Code (PaC) with Open Policy Agent</li>
              <li>• GitOps and security in CI/CD pipelines</li>
              <li>• Secrets security and key management</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔐 Cloud-Native Security Practices</h4>
        <p class="mb-4 text-gray-300">
          Specific implementations for cloud-native environments:
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Area</th>
                <th class="p-3 text-left">Technique</th>
                <th class="p-3 text-left">Implementation</th>
                <th class="p-3 text-left">Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">Containers</td>
                <td class="p-3">Runtime security</td>
                <td class="p-3">Falco, Sysdig Secure</td>
                <td class="p-3">Runtime anomaly detection</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Kubernetes</td>
                <td class="p-3">Policy enforcement</td>
                <td class="p-3">OPA Gatekeeper, Kyverno</td>
                <td class="p-3">Security policy enforcement</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Network</td>
                <td class="p-3">Microsegmentation</td>
                <td class="p-3">NSX-T, Calico, Cilium</td>
                <td class="p-3">Traffic isolation between workloads</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Data</td>
                <td class="p-3">Encryption at rest/transit</td>
                <td class="p-3">KMS, envelope encryption</td>
                <td class="p-3">Sensitive data protection</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "11. Data Privacy and Regulatory Compliance",
      content: `
        <h4 class="text-white font-bold mb-3">📋 Privacy Regulations in 2026</h4>
        <p class="mb-4 text-gray-300">
          In 2026, data protection laws have become stricter and more comprehensive:
        </p>
        <div class="space-y-6">
          <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-900/10">
            <h5 class="text-green-400 font-bold mb-2">LGPD and GDPR</h5>
            <p class="text-gray-300 text-sm">
              General Data Protection Law (Brazil) and General Data Protection Regulation (EU):
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• Explicit and informed consent</li>
              <li>• Right to be forgotten</li>
              <li>• 72h data breach notification</li>
              <li>• Data Protection Officer (DPO)</li>
              <li>• Impact Assessment (DPIA)</li>
            </ul>
          </div>
          <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-900/10">
            <h5 class="text-blue-400 font-bold mb-2">Other Regulations</h5>
            <p class="text-gray-300 text-sm">
              Other important laws for compliance:
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• CCPA/CPRA (California Consumer Privacy Act)</li>
              <li>• HIPAA (Health Insurance Portability and Accountability Act)</li>
              <li>• PCI DSS (Payment Card Industry Data Security Standard)</li>
              <li>• SOX (Sarbanes-Oxley Act)</li>
              <li>• ISO 27001/27002</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🛡️ Privacy Implementations in Applications</h4>
        <p class="mb-4 text-gray-300">
          Techniques for ensuring data privacy in software development:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-800 p-4 rounded-lg">
            <h5 class="text-cyan-400 font-bold mb-2">Protection Techniques</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Data anonymization and pseudonymization</li>
              <li>• Privacy by Design in development</li>
              <li>• Encryption of sensitive data</li>
              <li>• Minimization of collected data</li>
              <li>• Granular and revocable consent</li>
            </ul>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg">
            <h5 class="text-purple-400 font-bold mb-2">Compliance Tools</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Data Loss Prevention (DLP)</li>
              <li>• Privacy Management Platforms (PMP)</li>
              <li>• Data Discovery and Classification Tools</li>
              <li>• Audit Logs and Reporting Systems</li>
              <li>• Automated Compliance Monitoring</li>
            </ul>
          </div>
        </div>
      `
    }
  ];

  const faqItems = [
    {
      question: "What is digital security and why is it important in 2026?",
      answer: `
        <p class="text-gray-300 mb-2">Digital security is the set of practices and tools used to protect data, devices, and online identities. In 2026, it is particularly important due to the increase in sophisticated cyber threats such as deepfakes, AI-powered phishing, and targeted attacks using public information gathered from social networks.</p>
        <p class="text-gray-300">Digital protection now involves not only antivirus but also conscious behaviors, multi-stage authentication, and personal privacy protection.</p>
      `
    },
    {
      question: "How can I identify a phishing email?",
      answer: `
        <p class="text-gray-300 mb-2">Phishing emails often contain:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>Unjustified urgency ("update your data now!")</li>
          <li>Spelling or formatting errors</li>
          <li>Links with truncated or masked URLs</li>
          <li>Suspicious or "looks-like" sender email address</li>
        </ul>
        <p class="text-gray-300">To verify, hover your mouse over links without clicking to see the real URL, and always access important sites by typing the address directly in the browser.</p>
      `
    },
    {
      question: "What is social engineering and how can I protect myself?",
      answer: `
        <p class="text-gray-300 mb-2">Social engineering is the psychological manipulation of people into giving out confidential information. Scammers use techniques such as vishing (fraudulent calls), spear phishing (targeted emails), and pretexting (made-up stories) to exploit emotions like fear and urgency.</p>
        <p class="text-gray-300">To protect yourself, distrust urgent information requests, verify the identity of anyone contacting you, and never provide sensitive data without prior confirmation through official channels.</p>
      `
    },
    {
      question: "How does two-step verification work on WhatsApp?",
      answer: `
        <p class="text-gray-300 mb-2">WhatsApp's two-step verification adds an extra security layer by requiring a PIN code when linking your number to another device. To activate, go to Settings > Account > Two-step verification and create a 6-digit PIN.</p>
        <p class="text-gray-300">You can also add an optional recovery email to help in account recovery should you forget your PIN.</p>
      `
    },
    {
      question: "What are the risks of using public Wi-Fi networks?",
      answer: `
        <p class="text-gray-300 mb-2">Public Wi-Fi networks are vulnerable to attacks like Man-in-the-Middle (MitM), where an attacker intercepts communication between your device and the internet. This allows stealing passwords, bank details, and other sensitive information.</p>
        <p class="text-gray-300">To protect yourself, avoid accessing sensitive accounts, use a VPN to encrypt your traffic, and ensure sites use secure connections (HTTPS).</p>
      `
    },
    {
      question: "What are deepfakes and how to detect them?",
      answer: `
        <p class="text-gray-300 mb-2">Deepfakes are synthetic videos, audio, or images created with AI to simulate real people. In 2026, they are used in scams and disinformation campaigns.</p>
        <p class="text-gray-300">To detect them, look for irregular blinking, inconsistent shadows, artificial edges, voice not matching lip movements, and atypical behaviors for the person portrayed. Always verify information with official sources.</p>
      `
    },
    {
      question: "How to protect my social networks against hackers?",
      answer: `
        <p class="text-gray-300 mb-2">To protect your social networks:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>Enable two-factor authentication</li>
          <li>Limit your post audience</li>
          <li>Regularly review who can send messages or comments</li>
          <li>Restrict access to sensitive information</li>
          <li>Monitor active sessions and connected devices</li>
        </ul>
        <p class="text-gray-300">Additionally, avoid sharing full birth dates and photos with sensitive geolocation.</p>
      `
    },
    {
      question: "How important is having regular backups?",
      answer: `
        <p class="text-gray-300 mb-2">Regular backups are essential to protect your data against ransomware, hardware failures, human error, and natural disasters. Following the 3-2-1 rule (3 copies, 2 different media types, 1 offsite copy), you ensure your data is secure and recoverable.</p>
        <p class="text-gray-300">It is crucial to regularly test your backups to ensure they can be restored when necessary.</p>
      `
    },
    {
      question: "What are Indicators of Compromise (IoCs)?",
      answer: `
        <p class="text-gray-300 mb-2">Indicators of Compromise (IoCs) are observable evidence of malicious activity on systems or networks. Examples include logins from unlikely geographic locations, repeated failed access attempts, unauthorized account setting changes, and activities you do not recognize.</p>
        <p class="text-gray-300">Monitoring these indicators helps detect and respond to security incidents quickly, minimizing damage.</p>
      `
    },
    {
      question: "How can I monitor my accounts for suspicious activity?",
      answer: `
        <p class="text-gray-300 mb-2">You can monitor your accounts by enabling security alerts that notify you of logins on new devices, password or personal info changes, and unusual activities. Regularly review active sessions and connected devices in each platform's security settings.</p>
        <p class="text-gray-300">It's also useful to periodically check bank statements and account activities to detect unauthorized movements.</p>
      `
    },
    {
      question: "What should I do if I suspect my account has been hacked?",
      answer: `
        <p class="text-gray-300 mb-2">If you suspect your account has been hacked, change your password immediately, check if 2FA is still active, and review account settings for unauthorized changes. Run a security scan on your device and review active sessions.</p>
        <p class="text-gray-300">Contact the support of the affected platform and, if necessary, notify financial institutions if sensitive data has been compromised.</p>
      `
    },
    {
      question: "How can I protect myself against vishing (fraudulent calls) scams?",
      answer: `
        <p class="text-gray-300 mb-2">To protect against vishing:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>Never provide personal info over the phone if you didn't initiate the call</li>
          <li>Hang up and call trusted institutions back to confirm any request</li>
          <li>Be suspicious of urgent calls creating panic or haste</li>
          <li>Verify the number is official before returning calls</li>
        </ul>
        <p class="text-gray-300">Remember that legitimate institutions rarely ask for sensitive data over the phone.</p>
      `
    }
  ];

  const externalReferences = [
    {
      name: "CERT.br - Security Bulletins",
      url: "https://www.cert.br/boletins/"
    },
    {
      name: "Cybersecurity and Infrastructure Security Agency (CISA)",
      url: "https://www.cisa.gov/cybersecurity"
    },
    {
      name: "OWASP - Web Application Security Project",
      url: "https://owasp.org/"
    },
    {
      name: "Symantec Internet Security Threat Report",
      url: "https://symantec-enterprise-blogs.security.com/"
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/seguranca-senhas-gerenciadores",
      title: "Manage Passwords",
      description: "The base of account protection in 2026."
    },
    {
      href: "/guides/autenticacao-dois-fatores",
      title: "2FA Guide",
      description: "Learn to use app authenticators."
    },
    {
      href: "/guides/identificacao-phishing",
      title: "Phishing Details",
      description: "How to analyze a suspicious site URL."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="30 min"
      difficultyLevel="Intermediate"
      author="Voltris Security Team"
      lastUpdated="2026-01-20"
      contentSections={contentSections}
      advancedContentSections={advancedContentSections}
      additionalContentSections={additionalContentSections}
      summaryTable={summaryTable}
      faqItems={faqItems}
      externalReferences={externalReferences}
      relatedGuides={[
        ...relatedGuides,
        ...additionalContentSections.map((section, index) => ({
          href: `#additional-section-${index}`,
          title: section.title,
          description: section.content.substring(0, 100) + '...'
        }))
      ]}
    />
  );
}

