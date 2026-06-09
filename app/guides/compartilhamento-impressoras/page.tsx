import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'compartilhamento-impressoras',
  title: "How to Share Printers on a Windows Network (2026)",
  description: "Want to print from any PC in the house? Learn how to set up printer sharing on Windows 11 simply and securely in 2026.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "How to Share Printers on a Windows Network (2026)";
const description = "Want to print from any PC in the house? Learn how to set up printer sharing on Windows 11 simply and securely in 2026.";
const keywords = [
  'how to share printer on windows 11 network 2026',
  'printer sharing error 0x0000011b tutorial',
  'install shared printer on another pc guide',
  'file and printer sharing windows 11 tutorial',
  'configure wifi printer home network guide 2026'
];

export const metadata: Metadata = createGuideMetadata('compartilhamento-impressoras', title, description, keywords);

export default function PrinterSharingGuide() {
  const summaryTable = [
    { label: "Main Method", value: "Windows Network Sharing (SMB)" },
    { label: "Security Tip", value: "Disable password-protected sharing (if trusted)" },
    { label: "Common Error", value: "Blocked by Firewall / Credentials" },
    { label: "Difficulty", value: "Medium" }
  ];

  const contentSections = [
    {
      title: "Why share your printer?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Having a printer for every computer is expensive and unnecessary. In 2026, even if your printer doesn't have native Wi-Fi, you can turn it into a "network printer" by connecting it via USB to a PC and unlocking access for all other laptops and desktops in the house or office through Windows 11.
        </p>
      `
    },
    {
      title: "1. Activating Network Discovery",
      content: `
        <p class="mb-4 text-gray-300">First of all, the computers need to "see" each other on the network:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Go to Control Panel > Network and Internet > Network and Sharing Center.</li>
            <li>Click on 'Change advanced sharing settings'.</li>
            <li>Enable <strong>'Network discovery'</strong> and <strong>'File and printer sharing'</strong>.</li>
            <li><strong>Tip:</strong> On private home networks, disable 'Password protected sharing' to make connecting between PCs easier.</li>
        </ol>
      `
    },
    {
      title: "2. Preparing the Host Printer",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">On the PC where the printer is plugged in:</h4>
            <p class="text-sm text-gray-300">
                1. Go to Settings > Devices > Printers & Scanners. <br/>
                2. Select your printer and click **Printer Properties**. <br/>
                3. Go to the **Sharing** tab and check 'Share this printer'. <br/>
                4. Give it a simple name (e.g., Office_Printer) to avoid space-related errors.
            </p>
        </div>
      `
    },
    {
      title: "3. Connecting on other computers",
      content: `
        <p class="mb-4 text-gray-300">
            <strong>The final step:</strong> 
            <br/><br/>On the other computer, open Explorer and type the IP address of the host PC (e.g., <code>\\\\192.168.1.10</code>). You will see the icon for the shared printer. Right-click and select **'Connect'**. Windows will automatically download the drivers from the host PC, and the printer will appear ready for use in Word, Excel, or any other program in 2026.
        </p>
      `
    }
  ];

  // Additional advanced content sections
  const advancedContentSections = [
    {
      title: "4. Technical Fundamentals of Printer Sharing",
      content: `
        <h4 class="text-white font-bold mb-3">🔬 Printer Sharing Architecture</h4>
        <p class="mb-4 text-gray-300">
          Windows printer sharing operates through a client-server architecture based on network protocols:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-3">Technical Components</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Print Spooler Service</li>
              <li>• SMB (Server Message Block) Protocol</li>
              <li>• Print Queue Management</li>
              <li>• Remote Printer Drivers</li>
              <li>• Authentication and Access Control</li>
            </ul>
          </div>
          <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-3">Protocols and Ports</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Port 9100 (Raw Printing)</li>
              <li>• Port 515 (LPD - Line Printer Daemon)</li>
              <li>• Port 631 (IPP - Internet Printing Protocol)</li>
              <li>• Ports 139 and 445 (SMB)</li>
              <li>• Port 1900 (UPnP)</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">⚙️ Communication Process</h4>
        <p class="mb-4 text-gray-300">
          The remote printing process involves multiple technical stages:
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Stage</th>
                <th class="p-3 text-left">Description</th>
                <th class="p-3 text-left">Component</th>
                <th class="p-3 text-left">Importance</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">1. Discovery</td>
                <td class="p-3">Locating the printer on the network</td>
                <td class="p-3">NetBIOS/SMB</td>
                <td class="p-3">Essential</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">2. Authentication</td>
                <td class="p-3">Verifying credentials</td>
                <td class="p-3">Active Directory/SMB</td>
                <td class="p-3">Critical</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">3. Transfer</td>
                <td class="p-3">Sending the print job</td>
                <td class="p-3">SPOOLER/DRIVER</td>
                <td class="p-3">Essential</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">4. Processing</td>
                <td class="p-3">Rendering the document</td>
                <td class="p-3">Printer Driver</td>
                <td class="p-3">Critical</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">5. Printing</td>
                <td class="p-3">Physical execution of printing</td>
                <td class="p-3">Physical Printer</td>
                <td class="p-3">Final</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "5. Advanced Network Settings",
      content: `
        <h4 class="text-white font-bold mb-3">🛡️ Firewall and Security Settings</h4>
        <p class="mb-4 text-gray-300">
          Proper firewall configuration is essential for secure sharing operation:
        </p>
        <div class="space-y-6">
          <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-900/10">
            <h5 class="text-green-400 font-bold mb-2">Specific Firewall Rules</h5>
            <p class="text-gray-300 text-sm">
              To allow printer sharing, specific rules must be configured in the Windows firewall:
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• Allow port 9100 for raw printing</li>
              <li>• Enable print service in firewall</li>
              <li>• Allow NetBIOS (ports 137-139)</li>
              <li>• Open port 445 for SMB</li>
            </ul>
          </div>
          <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-900/10">
            <h5 class="text-blue-400 font-bold mb-2">Group Policies</h5>
            <p class="text-gray-300 text-sm">
              In corporate environments, group policies allow control over access to shared printers:
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• Network security settings</li>
              <li>• User-based access control</li>
              <li>• Printing restrictions</li>
              <li>• Printing audit</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 Advanced Network Settings</h4>
        <p class="mb-4 text-gray-300">
          Several network parameters influence sharing performance:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-800 p-4 rounded-lg">
            <h5 class="text-cyan-400 font-bold mb-2">TCP/IP Settings</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Receive buffer</li>
              <li>• Connection timeout</li>
              <li>• Packet size</li>
              <li>• Network priority</li>
            </ul>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg">
            <h5 class="text-purple-400 font-bold mb-2">Printing Options</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Priority queues</li>
              <li>• Background processing</li>
              <li>• Document cache</li>
              <li>• Error recovery</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "6. Advanced Troubleshooting",
      content: `
        <h4 class="text-white font-bold mb-3">🔍 Diagnosis of Complex Issues</h4>
        <p class="mb-4 text-gray-300">
          Advanced printer sharing issues require deep diagnosis:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
          <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
            <h5 class="text-indigo-400 font-bold mb-3">Common Errors</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Error 0x0000011b (authentication failure)</li>
              <li>• Driver installation failure</li>
              <li>• Slow or intermittent connection</li>
              <li>• Printing corrupted documents</li>
              <li>• Print queue failure</li>
            </ul>
          </div>
          <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
            <h5 class="text-cyan-400 font-bold mb-3">Diagnostic Tools</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• PrintUI /s for remote management</li>
              <li>• net view command for mapping</li>
              <li>• PowerShell for printers</li>
              <li>• Event Viewer for logs</li>
              <li>• Network Monitor</li>
            </ul>
          </div>
          <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
            <h5 class="text-green-400 font-bold mb-3">Advanced Solutions</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Registry modification</li>
              <li>• Firmware update</li>
              <li>• Gateway configuration</li>
              <li>• Protocol change</li>
              <li>• Spooler reset</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 Preventing Future Issues</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Practice</th>
                <th class="p-3 text-left">Description</th>
                <th class="p-3 text-left">Benefit</th>
                <th class="p-3 text-left">Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">Driver Update</td>
                <td class="p-3">Keep drivers updated</td>
                <td class="p-3">Avoid incompatibilities</td>
                <td class="p-3">Monthly</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Network Monitoring</td>
                <td class="p-3">Check latency and availability</td>
                <td class="p-3">Identify bottlenecks</td>
                <td class="p-3">Continuous</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Settings Backup</td>
                <td class="p-3">Save printer settings</td>
                <td class="p-3">Quick recovery</td>
                <td class="p-3">Before changes</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Connectivity Tests</td>
                <td class="p-3">Check connections periodically</td>
                <td class="p-3">Detect issues early</td>
                <td class="p-3">Weekly</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Security Audit</td>
                <td class="p-3">Review permissions and access</td>
                <td class="p-3">Prevent unauthorized access</td>
                <td class="p-3">Quarterly</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "7. Alternative Printing Protocols",
      content: `
        <h4 class="text-white font-bold mb-3">🌐 Other Sharing Methods</h4>
        <p class="mb-4 text-gray-300">
          In addition to the traditional Windows method, there are other approaches to sharing printers:
        </p>
        <div class="space-y-6">
          <div class="border-l-4 border-purple-500 pl-4 py-2 bg-purple-900/10">
            <h5 class="text-purple-400 font-bold mb-2">Internet Printing Protocol (IPP)</h5>
            <p class="text-gray-300 text-sm">
              An HTTP-based protocol that allows printing over the internet or intranet. More secure and flexible than traditional SMB, especially for corporate environments with restrictive firewalls.
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• Works over HTTPS for security</li>
              <li>• Native support in Linux and macOS</li>
              <li>• Less susceptible to firewall blocks</li>
              <li>• Integration with web systems</li>
            </ul>
          </div>
          <div class="border-l-4 border-cyan-500 pl-4 py-2 bg-cyan-900/10">
            <h5 class="text-cyan-400 font-bold mb-2">Line Printer Daemon (LPD)</h5>
            <p class="text-gray-300 text-sm">
              Traditional UNIX protocol for remote printing, still widely supported. Good for heterogeneous environments with multiple operating systems.
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• Compatibility with legacy systems</li>
              <li>• Simple to configure</li>
              <li>• Low network overhead</li>
              <li>• Works well in small networks</li>
            </ul>
          </div>
          <div class="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-900/10">
            <h5 class="text-yellow-400 font-bold mb-2">Cloud Printing</h5>
            <p class="text-gray-300 text-sm">
              Despite the shutdown of Google Cloud Print, alternatives like Google Workspace Printing still allow cloud-based printing for organizations.
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• Print from anywhere</li>
              <li>• Centralized authentication</li>
              <li>• Web-based management</li>
              <li>• Print auditing</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "8. Advanced Security in Network Printing",
      content: `
        <h4 class="text-white font-bold mb-3">🔐 Security Considerations</h4>
        <p class="mb-4 text-gray-300">
          Sharing printers introduces security risks that must be mitigated:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-3">Access Controls</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Granular printing permissions</li>
              <li>• Mandatory authentication</li>
              <li>• AD groups based control</li>
              <li>• Print quota limitation</li>
              <li>• Audit of printed documents</li>
            </ul>
          </div>
          <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
            <h5 class="text-green-400 font-bold mb-3">Encryption and Protection</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• SSL/TLS for data transmission</li>
              <li>• VLAN isolation</li>
              <li>• Printed content filtering</li>
              <li>• Data leak protection</li>
              <li>• Digital signature of jobs</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🛡️ Security Best Practices</h4>
        <p class="mb-4 text-gray-300">
          Implement proper security in printer sharing:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
          <li><strong>Network segregation:</strong> Place printers in a separate VLAN to limit access</li>
          <li><strong>Badge authentication:</strong> Use swipe systems to release printing</li>
          <li><strong>Activity logging:</strong> Keep detailed logs of all print jobs</li>
          <li><strong>Print policies:</strong> Configure restrictions based on user or department</li>
          <li><strong>Regular updates:</strong> Keep printer firmware updated to avoid vulnerabilities</li>
        </ul>
      `
    },
    {
      title: "9. Trends and Future of Network Printing",
      content: `
        <h4 class="text-white font-bold mb-3">🚀 Emerging Technologies</h4>
        <p class="mb-4 text-gray-300">
          Network printing is evolving with new technologies and paradigms:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
          <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
            <h5 class="text-indigo-400 font-bold mb-3">AI-Based Printing</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Automatic quality optimization</li>
              <li>• Toner need prediction</li>
              <li>• Smart load balancing</li>
              <li>• Predictive failure diagnosis</li>
              <li>• Automatic document classification</li>
            </ul>
          </div>
          <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
            <h5 class="text-cyan-400 font-bold mb-3">IoT and Printing</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Integration with smart office systems</li>
              <li>• Voice assistant control</li>
              <li>• Real-time monitoring sensors</li>
              <li>• Workflow automation</li>
              <li>• Universal connectivity</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 Predictions for 2026-2027</h4>
        <p class="mb-4 text-gray-300">
          The future of network printing promises significant innovations:
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Technology</th>
                <th class="p-3 text-left">Description</th>
                <th class="p-3 text-left">Deployment</th>
                <th class="p-3 text-left">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">Blockchain for Printing</td>
                <td class="p-3">Document authentication and tracking</td>
                <td class="p-3">2026-2027</td>
                <td class="p-3">High</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">5G in Printers</td>
                <td class="p-3">High-speed mobile connectivity</td>
                <td class="p-3">2026</td>
                <td class="p-3">Medium</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Edge Computing</td>
                <td class="p-3">Local processing of print jobs</td>
                <td class="p-3">2027</td>
                <td class="p-3">Medium</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Zero Trust Print</td>
                <td class="p-3">Zero trust-based security model</td>
                <td class="p-3">2026-2028</td>
                <td class="p-3">High</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Green Printing</td>
                <td class="p-3">Resource optimization and sustainability</td>
                <td class="p-3">2026</td>
                <td class="p-3">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/instalar-impressora-wifi",
      title: "Wi-Fi Printer",
      description: "How to set up without needing wires."
    },
    {
      href: "/guides/atalhos-produtividade-windows",
      title: "Productivity",
      description: "Shortcuts to print faster."
    },
    {
      href: "/guides/seguranca-digital",
      title: "Network Security",
      description: "Protect your sharing against intruders."
    }
  ];

  const allContentSections = [...contentSections, ...additionalContentSections];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="15 min"
      difficultyLevel="Medium"
      contentSections={allContentSections}
      advancedContentSections={advancedContentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}