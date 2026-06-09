import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'identificacao-phishing',
  title: "Phishing: How to Identify Fake Websites and Emails (2026)",
  description: "Received a strange message from your bank or Discord? Learn how to identify the most common Phishing techniques of 2026 and protect your data from hackers.",
  category: 'network-security',
  difficulty: 'Beginner',
  time: '30 min'
};

const title = "Phishing: How to Identify Fake Websites and Emails (2026)";
const description = "Received a strange message from your bank or Discord? Learn how to identify the most common Phishing techniques of 2026 and protect your data from hackers.";
const keywords = [
  'how to identify phishing fake email 2026',
  'how to know if a website is safe to enter password',
  'free discord nitro scam how to identify',
  'prevent steam account hijack phishing tutorial',
  'check suspicious link before clicking guide 2026'
];

export const metadata: Metadata = createGuideMetadata('identificacao-phishing', title, description, keywords);

export default function PhishingGuide() {
  const summaryTable = [
    { label: "What it is", value: "Social engineering to steal passwords" },
    { label: "Alert Signal #1", value: "Urgency or threat of blocking account" },
    { label: "Alert Signal #2", value: "Links with typos (e.g., g00gle.com)" },
    { label: "Difficulty", value: "Easy" }
  ];

  const contentSections = [
    {
      title: "The Most Profitable Scam of 2026",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Unlike viruses that try to break your computer's code, **Phishing** tries to break your trust. It's much more expensive to create ultra-modern malware than to simply create an Instagram login page identical to the original and convince you to type in your password. In 2026, with the use of AI to create perfect copy, identifying these scams requires attention to technical details.
        </p>
        <div class="bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500 my-6">
          <p class="text-red-200 font-semibold">Alarming Data:</p>
          <p class="text-gray-300 mt-2">According to the Anti-Phishing Working Group (APWG) annual report, more than 1.2 million phishing attacks were reported in 2026, representing a 35% increase from the previous year. Only 3% of employees successfully identify sophisticated phishing emails in simulated tests.</p>
        </div>
        <p class="mb-4 text-gray-300 leading-relaxed">
          Phishing has evolved from obvious misspelled messages to highly sophisticated campaigns using artificial intelligence to personalize content and target specific victims. Criminals now employ techniques such as deepfakes, fake social profiles, and forged official documents to increase the credibility of their scams.
        </p>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-white font-bold mb-3 flex items-center">
            <span className="mr-2">⚠️</span> Social Engineering Techniques in 2026
          </h4>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span><strong>AI-Powered Content:</strong> Personalized messages based on public data</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span><strong>CEO Fraud:</strong> Impersonating executives to request transfers</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span><strong>Whaling:</strong> Targeted attacks on executives and high-profile figures</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span><strong>Smishing/Vishing:</strong> Phishing via SMS and fraudulent calls</span>
            </li>
          </ul>
        </div>
      `
    },
    {
      title: "1. The Hover Test",
      content: `
        <p class="mb-4 text-gray-300">Never trust the blue text of a link. Trust where it points to:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Before clicking, hover your mouse over the link (without clicking!).</li>
            <li>Look at the bottom left corner of your browser. The actual address will appear there.</li>
            <li>If the email claims to be from "PayPal", but the address that appears is <code>bit.ly/get-cash-now</code> or <code>pay-pal-security-update.xyz</code>, it's a scam.</li>
        </ol>
        <div class="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500 my-6">
          <p class="text-yellow-200 font-semibold">Hover Test Limitations:</p>
          <p class="text-gray-300 mt-2">On mobile devices, the hover test is not applicable. Also, some links may redirect to different URLs after multiple jumps. In 2026, criminals use shortened URLs and complex redirects to hide the link's final destination.</p>
        </div>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Advanced URL Analysis</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2">Legitimate URL</h4>
            <p class="text-sm text-gray-300 mb-2"><code>https://www.paypal.com/login</code></p>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• HTTPS protocol (encryption)</li>
              <li>• Correct main domain (paypal.com)</li>
              <li>• Expected path (/login)</li>
              <li>• Valid certificate</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-red-400 mb-2">Fraudulent URL</h4>
            <p class="text-sm text-gray-300 mb-2"><code>https://www.pay-pal-security-update.xyz/login</code></p>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• Fake domain (pay-pal-security-update.xyz)</li>
              <li>• Misleading path</li>
              <li>• Possible invalid certificate</li>
              <li>• Attempting to look legitimate</li>
            </ul>
          </div>
        </div>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-white font-bold mb-3 flex items-center">
            <span className="mr-2">💡</span> Tips for URL Verification
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
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">Hover Test</td>
                <td class="py-2 px-4 text-sm text-gray-300">Hover mouse over the link to see real URL</td>
                <td class="py-2 px-4 text-sm text-green-400">High (Desktop)</td>
              </tr>
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">URL Decoder</td>
                <td class="py-2 px-4 text-sm text-gray-300">Tools to decode shortened URLs</td>
                <td class="py-2 px-4 text-sm text-green-400">High</td>
              </tr>
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">SSL Certificate</td>
                <td class="py-2 px-4 text-sm text-gray-300">Check if the site has a valid certificate</td>
                <td class="py-2 px-4 text-sm text-yellow-400">Medium (Can be fake)</td>
              </tr>
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">WHOIS Lookup</td>
                <td class="py-2 px-4 text-sm text-gray-300">Verify domain registration information</td>
                <td class="py-2 px-4 text-sm text-green-400">High</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "2. Phishing via QR Code (Quishing)",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">The New Threat of 2026:</h4>
            <p class="text-sm text-gray-300">
                Criminals are now sending QR Codes via email or Discord. The goal is to take the link away from your PC (where you have antivirus and browser protections) and lead it to your phone, where it's much harder to check the actual URL. <strong>Never scan QR Codes from unsolicited sources</strong>, even if they look like a game gift or security warning.
            </p>
        </div>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Quishing Techniques in 2026</h3>
        <div class="space-y-6">
          <div class="border-l-4 border-green-500 pl-4 py-1">
            <h4 class="text-lg font-semibold text-white mb-2">QR Codes in Emails and Messages</h4>
            <p class="text-gray-300 text-sm mb-2">Criminals send QR Codes in fraudulent emails or text messages that point to phishing sites.</p>
            <ol class="list-decimal list-inside text-gray-300 space-y-1 text-sm">
              <li>Emails that look like they're from legitimate institutions with QR Codes for "account verification"</li>
              <li>"Pending delivery" messages with QR Codes for tracking</li>
              <li>Promotion advertisements with QR Codes to "redeem prizes"</li>
              <li>Documents requiring validation via QR Code</li>
            </ol>
          </div>
          <div class="border-l-4 border-purple-500 pl-4 py-1">
            <h4 class="text-lg font-semibold text-white mb-2">QR Codes in Public Places</h4>
            <p class="text-gray-300 text-sm mb-2">QR Codes illegally pasted in public places, such as bus stops or fake billboards.</p>
            <ol class="list-decimal list-inside text-gray-300 space-y-1 text-sm">
              <li>QR Codes on suspicious flyers or posters</li>
              <li>Replacement of legitimate QR Codes in establishments</li>
              <li>Promotional QR Codes at fraudulent public events</li>
              <li>Codes on fake packaging or dubious products</li>
            </ol>
          </div>
          <div class="border-l-4 border-indigo-500 pl-4 py-1">
            <h4 class="text-lg font-semibold text-white mb-2">QR Codes on Social Media</h4>
            <p class="text-gray-300 text-sm mb-2">Posts or stories with QR Codes pointing to fraudulent pages.</p>
            <ol class="list-decimal list-inside text-gray-300 space-y-1 text-sm">
              <li>Fake profiles sharing "promotional" QR Codes</li>
              <li>Stories with QR Codes to "unlock" premium content</li>
              <li>Comments with QR Codes on popular posts</li>
              <li>QR Codes in suspicious lives or videos</li>
            </ol>
          </div>
        </div>
      `
    },
    {
      title: "3. URLs with Special Characters (Punycode)",
      content: `
        <p class="mb-4 text-gray-300">
            Hackers use characters from other alphabets that look identical to ours. 
            <br/><br/>For example, the "а" (Cyrillic) looks just like our "a". A site could be <code>аpple.com</code> and you wouldn't notice the difference visually. 
            <br/><strong>Tip:</strong> Whenever logging into important sites (Bank, Steam, Google), never click on links. Type the address manually in the browser's address bar.
        </p>
        <div class="bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500 my-6">
          <p class="text-red-200 font-semibold">Homograph Attack Techniques:</p>
          <p class="text-gray-300 mt-2">These techniques use Unicode characters that look identical to normal ASCII characters but are different. This is known as a homograph attack or IDN (Internationalized Domain Names) spoofing.</p>
        </div>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Examples of Fraudulent Domains</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-green-400 mb-2">Legitimate</h4>
            <ul class="text-sm text-gray-300 space-y-2">
              <li><code>https://www.apple.com</code></li>
              <li><code>https://www.facebook.com</code></li>
              <li><code>https://www.paypal.com</code></li>
              <li><code>https://www.netflix.com</code></li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-red-400 mb-2">Fraudulent (Homograph)</h4>
            <ul class="text-sm text-gray-300 space-y-2">
              <li><code>https://www.аррӏе.com</code> (Cyrillic)</li>
              <li><code>https://www.faceЬоок.com</code> (mixed alphabets)</li>
              <li><code>https://www.pаypаl.com</code> (Cyrillic letters)</li>
              <li><code>https://www.nеtflix.com</code> (Cyrillic "е")</li>
            </ul>
          </div>
        </div>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-white font-bold mb-3 flex items-center">
            <span className="mr-2">📋</span> How to Prevent Homograph Attacks
          </h4>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">✓</span>
              <span>Disable IDN support in your browser (optional)</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">✓</span>
              <span>Manually type URLs for important sites</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">✓</span>
              <span>Check the SSL certificate to see valid domains</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">✓</span>
              <span>Use bookmarks for important sites instead of links</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">✓</span>
              <span>Install extensions that highlight suspicious domains</span>
            </li>
          </ul>
        </div>
      `
    },
    {
      title: "4. Email Header Analysis and Source Tracking",
      content: `
        <p class="mb-4 text-gray-300">
          For emails that reach your inbox, it's possible to examine headers to determine the message's real origin. In 2026, even emails that seem to come from legitimate accounts may have been forged through spoofing techniques.
        </p>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Important Fields in Email Headers</h3>
        <div class="space-y-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">📧</span> Return-Path and From
            </h4>
            <p class="text-gray-300 text-sm mb-2">Check if the declared sender matches the real address.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>The From field can be easily spoofed</li>
              <li>The Return-Path shows where replies will be sent</li>
              <li>Check if the domain is exactly as expected</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">🌐</span> Received Headers
            </h4>
            <p class="text-gray-300 text-sm mb-2">Shows the path the email took to get to you.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>Analyze IPs of the servers the email passed through</li>
              <li>Check if the servers make sense for the alleged sender</li>
              <li>Identify suspicious or unauthorized servers</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">🔒</span> SPF, DKIM, and DMARC
            </h4>
            <p class="text-gray-300 text-sm mb-2">Email authentication protocols that help validate the source.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>SPF checks if the sending server is authorized</li>
              <li>DKIM adds a digital signature to the email</li>
              <li>DMARC defines policies for handling unauthenticated emails</li>
            </ul>
          </div>
        </div>
        <div class="bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 my-6">
          <p class="text-green-200 font-semibold">Email Analysis Tools:</p>
          <p class="text-gray-300 mt-2">There are online tools that analyze email headers and verify authenticity, such as MXToolbox, Mail-Tester, and E-Mail Header Analyzer. These tools can help identify fraudulent emails.</p>
        </div>
      `
    },
    {
      title: "5. Website Visual Analysis Techniques",
      content: `
        <p class="mb-4 text-gray-300">
          Phishing sites often try to copy legitimate sites faithfully, but they always present subtle differences that can be identified with attention. In 2026, these copies are increasingly convincing thanks to the use of artificial intelligence.
        </p>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Elements to Check on Websites</h3>
        <div class="overflow-x-auto mb-6">
          <table class="min-w-full bg-gray-800/50 rounded-lg overflow-hidden">
            <thead class="bg-gray-700">
              <tr>
                <th class="py-2 px-4 text-left text-sm font-semibold text-gray-300">Element</th>
                <th class="py-2 px-4 text-left text-sm font-semibold text-gray-300">Legitimate Characteristic</th>
                <th class="py-2 px-4 text-left text-sm font-semibold text-gray-300">Fraudulent Characteristic</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">Layout and Design</td>
                <td class="py-2 px-4 text-sm text-gray-300">Consistent across all pages</td>
                <td class="py-2 px-4 text-sm text-gray-300">Small inconsistencies or inferior quality</td>
              </tr>
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">Icons and Logos</td>
                <td class="py-2 px-4 text-sm text-gray-300">High-resolution images and perfect alignment</td>
                <td class="py-2 px-4 text-sm text-gray-300">Pixelated or slightly distorted images</td>
              </tr>
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">Login Fields</td>
                <td class="py-2 px-4 text-sm text-gray-300">Well-positioned and functional fields</td>
                <td class="py-2 px-4 text-sm text-gray-300">Badly positioned or extra fields</td>
              </tr>
              <tr>
                <td class="py-2 px-4 text-sm text-gray-300 font-medium">Footer and Links</td>
                <td class="py-2 px-4 text-sm text-gray-300">Links to policies, terms, and contacts</td>
                <td class="py-2 px-4 text-sm text-gray-300">Missing links or directing to different domains</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-white font-bold mb-3 flex items-center">
            <span className="mr-2">🔍</span> Tips for Visual Analysis
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h5 class="font-bold text-white mb-2">Security Verification</h5>
              <p class="text-gray-300 text-sm">Always check the padlock in the address bar and the organization name on the SSL certificate.</p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h5 class="font-bold text-white mb-2">Page Behavior</h5>
              <p class="text-gray-300 text-sm">Legitimate sites do not automatically redirect after entering credentials.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "6. Platform-Specific Phishing Techniques",
      content: `
        <p class="mb-4 text-gray-300">
          In 2026, criminals transitioned their phishing techniques to specifically exploit the features and user trust in popular platforms such as social media, email services, and gaming platforms.
        </p>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Phishing in Popular Platforms</h3>
        <div class="space-y-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">💬</span> Discord and Gaming Platforms
            </h4>
            <p class="text-gray-300 text-sm mb-2">Specific techniques used in these platforms.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>"Free Nitro" scams with links to "redeem" benefits</li>
              <li>Invitations to fake servers or simulations of contests or promotions</li>
              <li>DMs from "moderators" requesting account verification</li>
              <li>Links to "free skins" that redirect to fake login pages</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">📧</span> Email Services (Gmail, Outlook, etc.)
            </h4>
            <p class="text-gray-300 text-sm mb-2">Tactics used to bypass spam filters.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>Use of HTML templates that mimic legitimate email layouts</li>
              <li>Subject lines that simulate notifications from known systems</li>
              <li>Embedded images to avoid text filter detection</li>
              <li>Free domains used as intermediates to bypass security</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">🏦</span> Banks and Financial Institutions
            </h4>
            <p class="text-gray-300 text-sm mb-2">Strategies to exploit the urgency and fear of customers.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li>"Account locked" emails with a limited timeframe for action</li>
              <li>"Suspicious transaction" notifications with links for "unlocking"</li>
              <li>"Security update" calls with requests for data</li>
              <li>"Fraud detected" alerts with immediate confirmation requests</li>
            </ul>
          </div>
        </div>
        <div class="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500 my-6">
          <p class="text-yellow-200 font-semibold">Prevention by Platform:</p>
          <p class="text-gray-300 mt-2">Each platform has specific security features. For example, on Discord, check if the server has proper verification and real members. On email services, enable two-factor authentication and regularly check connected devices.</p>
        </div>
      `
    },
    {
      title: "7. Verification Resources and Tools",
      content: `
        <p class="mb-4 text-gray-300">
          In 2026, there are several tools and resources that can assist in identifying fraudulent emails and websites. Using these tools is a recommended practice to increase your digital security.
        </p>
        <h3 class="text-xl font-bold text-white mt-6 mb-4">Available Verification Tools</h3>
        <div class="space-y-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">🔍</span> URL Verifiers
            </h4>
            <p class="text-gray-300 text-sm mb-2">Tools to analyze the security of URLs.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li><strong>VirusTotal:</strong> Analyzes URLs and files for threats</li>
              <li><strong>URLVoid:</strong> Checks domains across multiple security engines</li>
              <li><strong>IsItPhishing:</strong> Specialized tool for phishing detection</li>
              <li><strong>Google Safe Browsing:</strong> Consults Google's base of malicious sites</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">🛡️</span> Browser Extensions
            </h4>
            <p class="text-gray-300 text-sm mb-2">Extensions that help identify and block phishing attempts.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li><strong>Netcraft Extension:</strong> Identifies fraudulent sites</li>
              <li><strong>McAfee WebAdvisor:</strong> Website security assessment</li>
              <li><strong>WOT (Web of Trust):</strong> Community-based website evaluation</li>
              <li><strong>uBlock Origin:</strong> Blocks trackers and malicious domains</li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center">
              <span class="mr-2">📱</span> Mobile Applications
            </h4>
            <p class="text-gray-300 text-sm mb-2">Apps that help check the security of links and sites.</p>
            <ul class="text-sm text-gray-300 ml-5 space-y-1 list-disc">
              <li><strong>Avast SecureLine VPN:</strong> Protection against malicious sites</li>
              <li><strong>Lookout Security:</strong> Identifies dangerous apps and sites</li>
              <li><strong>PhishAlarm:</strong> Report and verify phishing emails</li>
              <li><strong>QR & Barcode Scanner:</strong> Scanners with security verification</li>
            </ul>
          </div>
        </div>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-white font-bold mb-3 flex items-center">
            <span className="mr-2">✅</span> Verification Best Practices
          </h4>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span>Verify URLs before clicking, especially in emails</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span>Use multiple tools for security verification</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span>Keep your browser and extensions updated</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span>Distrust links in messages from unverified contacts</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span>Set up security alerts for your important accounts</span>
            </li>
          </ul>
        </div>
      `
    }
  ];

  const faqItems = [
    {
      question: "What is phishing and how does it work?",
      answer: `
        <p class="text-gray-300 mb-2">Phishing is a cyber fraud technique that aims to obtain personal and financial information from users via fraudulent messages that simulate legitimate institutions. Criminals create emails, websites, or messages that look trustworthy to induce victims to provide sensitive data such as passwords, credit card numbers, and personal information.</p>
        <p class="text-gray-300">In 2026, phishing attacks use artificial intelligence to create highly personalized and convincing messages, making them harder to identify.</p>
      `
    },
    {
      question: "How can I identify a phishing email?",
      answer: `
        <p class="text-gray-300 mb-2">Common signals of phishing emails include:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>Urgent requests for personal or financial information</li>
          <li>Spelling or grammar errors (less common in 2026)</li>
          <li>Links that do not match the displayed text</li>
          <li>Unknown sender or one that looks fake</li>
          <li>Alarming subject lines like "account locked" or "suspicious activity"</li>
        </ul>
        <p class="text-gray-300">In 2026, phishing emails are more sophisticated, so it's important to carefully check headers and link domains.</p>
      `
    },
    {
      question: "What is quishing and how can I protect myself?",
      answer: `
        <p class="text-gray-300 mb-2">Quishing is phishing performed through QR Codes (Quick Response). In 2026, criminals send QR Codes via email or messages that point to phishing sites. The goal is to take you from your PC (with protections) to your phone (where it's harder to check security).</p>
        <p class="text-gray-300">To protect yourself, never scan QR Codes from unsolicited sources, even if they look like promises of free gifts or security warnings. Use QR Code scanners that show the URL before opening.</p>
      `
    },
    {
      question: "How can I check if a website is safe before entering my credentials?",
      answer: `
        <p class="text-gray-300 mb-2">To check website safety:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>Check if the URL starts with HTTPS and there is a padlock in the address bar</li>
          <li>Confirm the domain name is correct (no similar characters)</li>
          <li>Analyze the layout and design - website copies often have small inconsistencies</li>
          <li>Use security verification tools like VirusTotal or URLVoid</li>
        </ul>
        <p class="text-gray-300">The best method is to manually type the URL instead of clicking on links of dubious origin.</p>
      `
    },
    {
      question: "What is a homograph attack and how to avoid it?",
      answer: `
        <p class="text-gray-300 mb-2">A homograph attack (or IDN spoofing) uses Unicode characters that look identical to normal ASCII characters but are different. For example, the Cyrillic letter "а" looks identical to our "a", but they are different characters.</p>
        <p class="text-gray-300">To avoid it, manually type URLs for important sites, use trusted bookmarks, and install extensions that highlight suspicious domains. Check the SSL certificate to see valid domains.</p>
      `
    },
    {
      question: "How do I analyze email headers to identify phishing?",
      answer: `
        <p class="text-gray-300 mb-2">To analyze email headers:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>Check Return-Path and From fields to see if they match</li>
          <li>Analyze Received Headers to see the email's path</li>
          <li>Check SPF, DKIM, and DMARC protocols</li>
          <li>Use online tools like MXToolbox or E-Mail Header Analyzer</li>
        </ul>
        <p class="text-gray-300">These fields can reveal if the email was sent from an unauthorized server or if it was forged.</p>
      `
    },
    {
      question: "What are phishing techniques on specific platforms like Discord or social media?",
      answer: `
        <p class="text-gray-300 mb-2">On platforms like Discord, criminals use:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>"Free Nitro" scams with links to "redeem" benefits</li>
          <li>Invitations to fake servers that simulate contests or promotions</li>
          <li>DMs from "moderators" requesting account verification</li>
          <li>Links to "free skins" that redirect to fake login pages</li>
        </ul>
        <p class="text-gray-300">On social media, there are fake profiles sharing fraudulent links and misleading ads. Always check account and link authenticity before interacting.</p>
      `
    },
    {
      question: "What tools can I use to check the safety of a link or site?",
      answer: `
        <p class="text-gray-300 mb-2">Useful tools for security verification include:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>VirusTotal - analyzes URLs and files for threats</li>
          <li>URLVoid - checks domains across multiple security engines</li>
          <li>IsItPhishing - specialized tool for phishing detection</li>
          <li>Browser extensions like Netcraft and McAfee WebAdvisor</li>
        </ul>
        <p class="text-gray-300">These tools help identify malicious sites before you visit them.</p>
      `
    },
    {
      question: "What should I do if I accidentally click a phishing link?",
      answer: `
        <p class="text-gray-300 mb-2">If you accidentally click a phishing link:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>DO NOT enter any personal information or credentials on the site</li>
          <li>Close the window or tab immediately</li>
          <li>Run a full system scan with updated antivirus</li>
          <li>Check for suspicious activity on your accounts</li>
          <li>Change passwords for important accounts, especially if you entered any credentials</li>
        </ul>
        <p class="text-gray-300">Even if you didn't enter information, it's prudent to monitor your accounts for a few days after the incident.</p>
      `
    },
    {
      question: "How can I protect my family and friends against phishing?",
      answer: `
        <p class="text-gray-300 mb-2">To protect your family and friends:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>Educate them about phishing signals and how to identify suspicious emails</li>
          <li>Teach them never to click on links from unknown sources</li>
          <li>Show how to check URLs and security certificates</li>
          <li>Help them set up two-factor authentication on all accounts</li>
          <li>Install security extensions on their browsers</li>
        </ul>
        <p class="text-gray-300">Education and awareness are the best defenses against phishing.</p>
      `
    },
    {
      question: "What are the consequences of falling for a phishing scam?",
      answer: `
        <p class="text-gray-300 mb-2">Consequences of falling for a phishing scam can include:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>Identity theft and access to personal accounts</li>
          <li>Financial loss from fraud in bank accounts</li>
          <li>Exposure of personal and professional information</li>
          <li>Malware installation on the device</li>
          <li>Compromised social media and email accounts</li>
        </ul>
        <p class="text-gray-300">In corporate cases, it can result in client data leaks and significant financial losses.</p>
      `
    },
    {
      question: "How can companies prevent internal phishing attacks?",
      answer: `
        <p class="text-gray-300 mb-2">Companies can prevent internal phishing attacks:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mb-2">
          <li>Performing regular security awareness training</li>
          <li>Implementing multi-factor authentication in all systems</li>
          <li>Using advanced email filtering solutions</li>
          <li>Performing phishing simulations to test employee preparedness</li>
          <li>Establishing clear policies on information sharing</li>
        </ul>
        <p class="text-gray-300">The combination of technology and education is essential for an effective defense against corporate phishing.</p>
      `
    }
  ];

  const externalReferences = [
    {
      name: "Anti-Phishing Working Group (APWG)",
      url: "https://apwg.org/"
    },
    {
      name: "Federal Trade Commission - Phishing Protection",
      url: "https://www.ftc.gov/news-events/topics/scams/phishing"
    },
    {
      name: "CISA - How to Identify and Protect Yourself from Phishing",
      url: "https://www.cisa.gov/phishing"
    },
    {
      name: "Mozilla - Security Tips - Avoiding Phishing Scams",
      url: "https://www.mozilla.org/en-US/firefox/security-tips/"
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/autenticacao-dois-fatores",
      title: "Enable 2FA",
      description: "Your final barrier against phishing."
    },
    {
      href: "/guides/seguranca-senhas-gerenciadores",
      title: "Manage Passwords",
      description: "Use tools that fill only real sites."
    },
    {
      href: "/guides/remocao-virus-malware",
      title: "Virus Cleanup",
      description: "What to do if you clicked the fake link."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="30 min"
      difficultyLevel="Beginner"
      author="Voltris Security Team"
      lastUpdated="2026-01-20"
      contentSections={contentSections}
      summaryTable={summaryTable}
      faqItems={faqItems}
      externalReferences={externalReferences}
      relatedGuides={relatedGuides}
    />
  );
}



