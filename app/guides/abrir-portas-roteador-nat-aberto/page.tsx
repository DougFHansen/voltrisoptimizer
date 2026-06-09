import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'abrir-portas-roteador-nat-aberto',
  title: "How to Open Router Ports and Get Open NAT: 2026 Guide",
  description: "Suffering from Restricted NAT in Warzone, GTA, FIFA, or online games? Learn the complete step-by-step to configure Port Forwarding, UPnP, and DMZ on your router...",
  category: 'network-security',
  difficulty: 'Advanced',
  time: '60 min'
};

const title = "How to Open Router Ports and Get Open NAT: 2026 Guide";
const description = "Suffering from Restricted NAT in Warzone, GTA, FIFA, or online games? Learn the complete step-by-step to configure Port Forwarding, UPnP, and DMZ on the router, achieve Open NAT, and play without lag or disconnections in 2026.";
const keywords = [
    'how to open router ports for games 2026',
    'open nat warzone and gta v how to get',
    'configure router port forwarding step by step',
    'what is dmz on router and how to use safely',
    'how to solve restricted nat xbox pc playstation',
    'enable upnp router for games tutorial',
    'open steam call of duty warzone fifa ports',
    'configure static ip for ps5 xbox console'
];

export const metadata: Metadata = createGuideMetadata('abrir-portas-roteador-nat-aberto', title, description, keywords);

export default function RouterPortGuide() {
    const summaryTable = [
        { label: "What is NAT", value: "Network Address Translation (IP translation system)" },
        { label: "NAT Type 1 (Open)", value: "Ideal - no restrictions, lower lag" },
        { label: "NAT Type 2 (Moderate)", value: "Acceptable - some limitations" },
        { label: "NAT Type 3 (Restricted)", value: "Bad - lag, disconnections, slow matchmaking" },
        { label: "Main Solution", value: "Port Forwarding (open specific ports)" },
        { label: "Automatic Solution", value: "Enable UPnP on the router" },
        { label: "Extreme Solution", value: "DMZ (consoles only)" },
        { label: "Difficulty", value: "Advanced" }
    ];

    const contentSections = [
        {
            title: "What is NAT and Why You Need It Open",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          <strong>NAT (Network Address Translation)</strong> is the system that allows multiple devices (your PC, phone, TV) to share the same public IP from your internet. Think of NAT as a building doorman: he controls who enters and leaves. In online games, you NEED this doorman to be "liberal" (Open NAT) so other players can connect directly to your device.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">🎮 NAT Types (Naming by Platform)</h4>
        <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
          <thead class="bg-gray-800">
            <tr>
              <th class="p-3 text-left">Type</th>
              <th class="p-3 text-left">PlayStation</th>
              <th class="p-3 text-left">Xbox</th>
              <th class="p-3 text-left">PC/Steam</th>
              <th class="p-3 text-left">Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-700">
              <td class="p-3"><strong class="text-emerald-400">Type 1</strong></td>
              <td class="p-3">NAT 1</td>
              <td class="p-3">Open</td>
              <td class="p-3">Open</td>
              <td class="p-3">Ideal - no restrictions, fast matchmaking</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><strong class="text-amber-400">Type 2</strong></td>
              <td class="p-3">NAT 2</td>
              <td class="p-3">Moderate</td>
              <td class="p-3">Moderate</td>
              <td class="p-3">Acceptable - some connection limitations</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><strong class="text-rose-400">Type 3</strong></td>
              <td class="p-3">NAT 3</td>
              <td class="p-3">Restricted</td>
              <td class="p-3">Strict</td>
              <td class="p-3">Bad - lag, disconnections, slow matchmaking</td>
            </tr>
          </tbody>
        </table>
        
        <p class="text-gray-300 mt-6">
          <strong>Problems caused by NAT Type 3 (Restricted):</strong>
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-3">
          <li>Excessive delay in finding online matches</li>
          <li>Inability to connect with certain players ("Host not found")</li>
          <li>Frequent disconnections during match</li>
          <li>Voice chat doesn't work with some friends</li>
          <li>"You cannot host lobbies" message (e.g., Warzone, GTA Online)</li>
        </ul>
      `
        },
        {
            title: "Prerequisite: Configure Static IP (ESSENTIAL)",
            content: `
        <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 mb-6">
            <h4 class="text-amber-400 font-bold mb-2">⚠️ ATTENTION: Do This BEFORE Opening Ports!</h4>
            <p class="text-sm text-gray-300">
                If you open ports without setting a static IP, when the router redistributes IPs (at every restart), port forwarding will go to the WRONG device. Result: ports stop working and you return to Restricted NAT. <strong>Static IP ensures ports always point to your PC/console.</strong>
            </p>
        </div>
        
        <h4 class="text-white font-bold mb-3">💻 For PC (Windows 11):</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
            <li>Open <strong>Settings</strong> → <strong>Network & Internet</strong> → <strong>Ethernet</strong> (or Wi-Fi).</li>
            <li>Click <strong>Properties</strong> for your active connection.</li>
            <li>In <strong>"IP assignment"</strong>, click <strong>"Edit"</strong>.</li>
            <li>Change from "Automatic (DHCP)" to <strong>"Manual"</strong>.</li>
            <li>Enable <strong>IPv4</strong> and fill in:
                <ul class="list-disc ml-8 mt-2 space-y-1 text-sm">
                    <li><strong>IP Address:</strong> 192.168.1.150 (or another high IP, like .200, to avoid conflicts)</li>
                    <li><strong>Subnet Mask:</strong> 255.255.255.0</li>
                    <li><strong>Gateway:</strong> 192.168.1.1 (your router's IP - check the sticker on the device)</li>
                    <li><strong>Preferred DNS:</strong> 8.8.8.8 (Google DNS)</li>
                    <li><strong>Alternative DNS:</strong> 8.8.4.4</li>
                </ul>
            </li>
            <li>Save and restart the PC.</li>
        </ol>
        
        <h4 class="text-white font-bold mb-3 mt-6">🎮 For PlayStation 5 / Xbox Series:</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
            <li>Go to <strong>Settings</strong> → <strong>Network</strong> → <strong>Settings</strong> → <strong>Set Up Internet Connection</strong>.</li>
            <li>Choose your connection (Wi-Fi or Cable) and select <strong>"Advanced Settings"</strong>.</li>
            <li>Change <strong>"IP Address Settings"</strong> to <strong>Manual</strong>.</li>
            <li>Fill in the same data as above (IP: 192.168.1.150, Gateway: 192.168.1.1, etc.).</li>
            <li>Test the connection to ensure it worked.</li>
        </ol>
      `
        },
        {
            title: "Method #1: Enable UPnP (Automatic Solution)",
            content: `
        <p class="mb-4 text-gray-300">
          <strong>UPnP (Universal Plug and Play)</strong> is a feature that allows games and programs to AUTOMATICALLY open ports on the router without you having to do it manually. In 2026, most AAA games (Warzone, GTA V, FIFA 26) support UPnP.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">🛠️ How to Enable UPnP on the Router</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
          <li>Access the router panel:
            <ul class="list-disc ml-8 mt-2 space-y-1 text-sm">
              <li>Open your browser and type the router's IP (usually <code>192.168.1.1</code> or <code>192.168.0.1</code>)</li>
              <li>Log in with username/password (usually <code>admin</code>/<code>admin</code> - check the sticker on the router)</li>
            </ul>
          </li>
          <li>Look for <strong>"UPnP"</strong>, <strong>"NAT"</strong>, or <strong>"Security"</strong> in the menu.</li>
          <li>Enable the <strong>"Enable UPnP"</strong> or <strong>"UPnP Enable"</strong> option.</li>
          <li>Save and restart the router.</li>
          <li>In your game, go to Network Settings and check if NAT has changed to Open/Moderate.</li>
        </ol>
        
        <div class="bg-emerald-900/10 p-5 rounded-xl border border-emerald-500/20 mt-6">
          <h4 class="text-emerald-400 font-bold mb-2">✅ UPnP Advantages</h4>
          <ul class="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Easy to configure (1 click)</li>
            <li>Works for ALL games and programs automatically</li>
            <li>No need to memorize specific ports</li>
          </ul>
        </div>
        
        <div class="bg-rose-900/10 p-5 rounded-xl border border-rose-500/20 mt-6">
          <h4 class="text-rose-400 font-bold mb-2">⚠️ UPnP Disadvantages</h4>
          <ul class="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Less secure (any program can open ports without your permission)</li>
            <li>Might not work on older routers (pre-2018)</li>
            <li>If UPnP doesn't solve it, proceed to Method #2 (manual Port Forwarding)</li>
          </ul>
        </div>
      `
        },
        {
            title: "Method #2: Manual Port Forwarding (Definitive Solution)",
            content: `
        <p class="mb-4 text-gray-300">
          <strong>Port Forwarding</strong> is when you tell the router: "When someone from the internet tries to connect on ports X, Y, and Z, direct that connection to my PC/console". It's like creating a direct "shortcut" from the outside world to your device.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">📝 Essential Ports by Game/Platform (2026)</h4>
        <table class="w-full text-xs text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
          <thead class="bg-gray-800">
            <tr>
              <th class="p-2 text-left">Game/Platform</th>
              <th class="p-2 text-left">TCP Ports</th>
              <th class="p-2 text-left">UDP Ports</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-700">
              <td class="p-2"><strong>Steam</strong></td>
              <td class="p-2">27015-27030, 27036-27037</td>
              <td class="p-2">4380, 27000-27031, 27036</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-2"><strong>Call of Duty Warzone</strong></td>
              <td class="p-2">3074, 27014-27050</td>
              <td class="p-2">3074-3079, 3478-3480</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-2"><strong>GTA V / GTA Online</strong></td>
              <td class="p-2">6672, 30211-30217</td>
              <td class="p-2">6672, 61455-61458</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-2"><strong>FIFA 26 / EA FC 26</strong></td>
              <td class="p-2">9960-9969, 1024-1124</td>
              <td class="p-2">9960-9969</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-2"><strong>PlayStation Network</strong></td>
              <td class="p-2">80, 443, 3478-3480</td>
              <td class="p-2">3478-3479, 49152-65535</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-2"><strong>Xbox Live</strong></td>
              <td class="p-2">3074</td>
              <td class="p-2">88, 500, 3074, 3544, 4500</td>
            </tr>
          </tbody>
        </table>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 How to Configure Port Forwarding (Step by Step)</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-4 ml-4">
          <li><strong>Access the router panel:</strong>
            <ul class="list-disc ml-8 mt-2 space-y-1 text-sm">
              <li>Type <code>192.168.1.1</code> in your browser (or <code>192.168.0.1</code>/<code>10.0.0.1</code>)</li>
              <li>Login: usually <code>admin</code>/<code>admin</code> (check the router sticker)</li>
            </ul>
          </li>
          
          <li><strong>Find the Port Forwarding section:</strong>
            <ul class="list-disc ml-8 mt-2 space-y-1 text-sm">
              <li>Might be located under: <strong>"NAT/Port Forwarding"</strong>, <strong>"Virtual Server"</strong></li>
            </ul>
          </li>
          
          <li><strong>Add a new rule:</strong> For each row in the table above, create 2 entries (one TCP, one UDP)
            <ul class="list-disc ml-8 mt-2 space-y-1 text-sm">
              <li><strong>Rule Name:</strong> E.g.: "Steam TCP"</li>
              <li><strong>Port Type:</strong> TCP</li>
              <li><strong>External Port:</strong> 27015-27030</li>
              <li><strong>Internal Port:</strong> 27015-27030</li>
              <li><strong>Internal IP:</strong> 192.168.1.150 (your static IP)</li>
              <li><strong>Protocol:</strong> TCP</li>
              <li>Save and repeat for UDP</li>
            </ul>
          </li>
          
          <li><strong>Restart the router</strong> and test NAT in the game.</li>
        </ol>
      `
        },
        {
            title: "Method #3: DMZ (Demilitarized Zone) - Last Resort",
            content: `
        <div class="bg-rose-900/10 p-5 rounded-xl border border-rose-500/20 mb-6">
          <h4 class="text-rose-400 font-bold mb-2">🚫 ATTENTION: Use DMZ for Consoles Only!</h4>
          <p class="text-sm text-gray-300">
            <strong>DMZ (Demilitarized Zone)</strong> places your device COMPLETELY exposed to the internet, without any router firewall protecting it. It's like leaving your front door WIDE OPEN. <strong>NEVER use DMZ on Windows</strong> (you will be hacked in minutes). It is only safe for PS5/Xbox because consoles have closed systems.
          </p>
        </div>
        
        <h4 class="text-white font-bold mb-3">🎮 How to Configure DMZ (PS5/Xbox Consoles Only)</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
          <li>Access the router panel (<code>192.168.1.1</code>).</li>
          <li>Look for <strong>"DMZ"</strong> or <strong>"Demilitarized Zone"</strong>.</li>
          <li>Enable DMZ and enter your console's static IP (e.g., <code>192.168.1.150</code>).</li>
          <li>Save and restart the router.</li>
          <li>On the console, test NAT - it should appear as <strong>Type 1 (Open)</strong>.</li>
        </ol>
        
        <p class="text-gray-300 text-sm mt-6">
          <strong>Why it works:</strong> DMZ removes ALL port restrictions, allowing direct communication with the internet. It is guaranteed to achieve Open NAT, but at the cost of ZERO protection.
        </p>
      `
        },
        {
            title: "Testing if NAT Stayed Open",
            content: `
        <h4 class="text-white font-bold mb-3">🧪 How to Verify NAT Type</h4>
        
        <p class="text-gray-300 mb-3"><strong>On PlayStation 5:</strong></p>
        <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
          <li>Go to Settings → Network → Test Internet Connection.</li>
          <li>Wait for the test to complete.</li>
          <li>In the report, look for <strong>"NAT Type"</strong> - it should appear as <strong>NAT Type 1</strong> or <strong>NAT Type 2</strong>.</li>
        </ol>
        
        <p class="text-gray-300 mb-3 mt-6"><strong>On Xbox Series X|S:</strong></p>
        <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
          <li>Go to Settings → Network → Advanced Settings.</li>
          <li>Look for <strong>"NAT Type"</strong> - it should appear as <strong>Open</strong>.</li>
        </ol>
        
        <p class="text-gray-300 mb-3 mt-6"><strong>On PC (Steam):</strong></p>
        <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
          <li>Open Steam → Go to Help → System Information.</li>
          <li>Look for "Network" - it should appear as <strong>"NAT: Open"</strong>.</li>
        </ol>
        
        <p class="text-gray-300 mb-3 mt-6"><strong>In specific games (Warzone, GTA):</strong></p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li><strong>Warzone:</strong> Settings → Account → Network - NAT Type should be <strong>Open</strong></li>
          <li><strong>GTA Online:</strong> Pause Menu → Online → Settings → NAT Type should be <strong>Open</strong></li>
        </ul>
      `
        },
        {
            title: "Troubleshooting",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
          <h4 class="text-blue-400 font-bold mb-4">🔧 Common Problems and Solutions</h4>
          
          <div class="space-y-4">
            <div>
              <p class="text-white font-bold">Problem: "I configured Port Forwarding but NAT is still Restricted"</p>
              <p class="text-sm text-gray-300 mt-2">
                <strong>Causes:</strong> (1) IP is not static and changed, (2) Windows Firewall blocking the ports, (3) Router not restarted after changes.<br/>
                <strong>Solution:</strong> Verify if the IP is still the same (cmd → <code>ipconfig</code>), add the game as an exception in Windows Firewall, restart the router.
              </p>
            </div>
            
            <div>
              <p class="text-white font-bold">Problem: "UPnP is enabled but NAT doesn't change"</p>
              <p class="text-sm text-gray-300 mt-2">
                <strong>Causes:</strong> The game doesn't support UPnP or the router has old firmware.<br/>
                <strong>Solution:</strong> Update the router firmware (manufacturer's website) or switch to manual Port Forwarding.
              </p>
            </div>
            
            <div>
              <p class="text-white font-bold">Problem: "I configured everything but some matches still disconnect"</p>
              <p class="text-sm text-gray-300 mt-2">
                <strong>Causes:</strong> Internet instability (packet loss) or the OTHER player has Restricted NAT.<br/>
                <strong>Solution:</strong> Test your connection on sites like <code>fast.com</code> and <code>packetlosstest.com</code>. If you have Open NAT and your friend has Restricted NAT, YOU will be able to connect, but they won't be able to host.
              </p>
            </div>
            
            <div>
              <p class="text-white font-bold">Problem: "After some time, NAT returns to Restricted"</p>
              <p class="text-sm text-gray-300 mt-2">
                <strong>Causes:</strong> IP is not static and the router redistributed the IP to another device.<br/>
                <strong>Solution:</strong> ALWAYS configure a static IP BEFORE opening ports (see the Prerequisite section of this guide).
              </p>
            </div>
          </div>
        </div>
      `
        },
        {
            title: "Understanding TCP and UDP Protocols in Online Games",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          To fully understand how to open ports effectively, it's essential to understand the difference between <strong>TCP (Transmission Control Protocol)</strong> and <strong>UDP (User Datagram Protocol)</strong> protocols, both fundamental for online games.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">📡 Technical Differences between TCP and UDP</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-3">TCP - Reliable but Slower</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Ensures packet delivery in the correct order</li>
              <li>Automatically resends lost packets</li>
              <li>Has higher overhead (larger header)</li>
              <li>Used for: Patch downloads, text messages, game lobbies</li>
              <li>Examples: Ports 80 (HTTP), 443 (HTTPS), 27015-27030 (Steam)</li>
            </ul>
          </div>
          <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-3">UDP - Fast but Less Reliable</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>No guarantee of delivery or packet order</li>
              <li>Lower latency and overhead</li>
              <li>Perfect for real-time data streaming</li>
              <li>Used for: Real-time gameplay, voice, video</li>
              <li>Examples: Ports 3074 (Xbox Live), 6672 (GTA V), 3478-3480 (NAT traversal)</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🎮 Why Games Use Both Protocols?</h4>
        <p class="mb-4 text-gray-300">
          Modern games like Warzone, GTA V, and FIFA use a combination of TCP and UDP to optimize the experience:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li><strong>TCP for:</strong> Update downloads, matchmaking lobby, text chat, account authentication</li>
          <li><strong>UDP for:</strong> Real-time gameplay, player position, shots, movements, real-time voice</li>
        </ul>
        
        <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 mt-6">
          <h4 class="text-amber-400 font-bold mb-2">⚠️ Importance of Opening Both Protocols</h4>
          <p class="text-sm text-gray-300">
            When configuring Port Forwarding, it's crucial to open BOTH protocols (TCP and UDP) for each port mentioned in game manuals. Opening only TCP might allow you to enter the lobby but fail to play. Opening only UDP might allow gameplay but fail authentication. <strong>For full Open NAT, both ports and protocols must be cleared.</strong>
          </p>
        </div>
      `
        },
        {
            title: "Windows Firewall and Network Security",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In addition to router settings, the <strong>Windows Firewall</strong> acts as a second layer of protection that can block incoming connections, even with Port Forwarding correctly configured. Understanding how to configure both is essential for full Open NAT.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">🛡️ How Windows Firewall Affects NAT</h4>
        <p class="mb-4 text-gray-300">
          Windows Firewall filters connections ENTERING your PC. When you open ports on the router (Port Forwarding), you are telling the router: "Send connections for these ports to the PC". But if the Windows Firewall is blocking those ports, the PC will receive the packets but NOT accept them.
        </p>
        
        <h4 class="text-white font-bold mb-3">🔧 Firewall Configuration for Online Games</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
          <li><strong>Access Windows Firewall:</strong> Control Panel → System and Security → Windows Defender Firewall</li>
          <li>Click on <strong>"Allow an app or feature through Windows Defender Firewall"</strong></li>
          <li>Click on <strong>"Change settings"</strong> (administrator privileges required)</li>
          <li>Click on <strong>"Allow another app..."</strong></li>
          <li>Browse to the game executable (e.g., <code>BlackOpsColdWar.exe</code>, <code>FIFA26.exe</code>)</li>
          <li>Check the boxes for <strong>"Private"</strong> and <strong>"Public"</strong></li>
          <li>If the game is not listed, click "Add a port"</li>
          <li>Add the game's specific ports with TCP and UDP protocol</li>
        </ol>
        
        <h4 class="text-white font-bold mb-3 mt-6">🛡️ Advanced Security Settings</h4>
        <p class="mb-4 text-gray-300">
          For games that use dynamic port ranges (like Steam), you might need to add exceptions for the full range:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li><strong>Steam:</strong> TCP Ports 27015-27030 and UDP 27000-27031</li>
          <li><strong>Voice Apps:</strong> Discord, Teamspeak, Mumble (variable ports)</li>
          <li><strong>Dedicated Server Games:</strong> Specific ranges per game</li>
        </ul>
        
        <div class="bg-emerald-900/10 p-5 rounded-xl border border-emerald-500/20 mt-6">
          <h4 class="text-emerald-400 font-bold mb-2">✅ Security Best Practices</h4>
          <ul class="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Open only the necessary ports for the specific game</li>
            <li>Use descriptive names for firewall rules (e.g., "Warzone TCP Ports")</li>
            <li>Periodically review firewall rules to remove old games</li>
            <li>Keep Windows and antivirus updated</li>
          </ul>
        </div>
      `
        },
        {
            title: "Specific Routers and Advanced Settings",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Different brands and models of routers have distinct interfaces for NAT and port configuration. Understanding the particularities of each manufacturer helps resolve specific problems and optimize the configuration.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 Settings by Router Brand</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div class="bg-gray-800/50 p-5 rounded-xl border border-gray-600">
            <h5 class="text-white font-bold mb-3">TP-Link</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 text-sm">
              <li>Menu: Advanced → NAT Forwarding → Virtual Server</li>
              <li>Ports can be entered as a range (e.g., 27015-27030)</li>
              <li>Recommended to disable SPI Firewall for online gaming</li>
              <li>Recent firmware improves UPnP and NAT traversal support</li>
            </ul>
          </div>
          
          <div class="bg-gray-800/50 p-5 rounded-xl border border-gray-600">
            <h5 class="text-white font-bold mb-3">ASUS</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 text-sm">
              <li>Menu: WAN → Virtual Server / Port Forwarding</li>
              <li>Intuitive interface with pre-configurations for games</li>
              <li>ASUSWRT has advanced support for DMZ and QoS</li>
              <li>Recommended to use official firmware for best stability</li>
            </ul>
          </div>
          
          <div class="bg-gray-800/50 p-5 rounded-xl border border-gray-600">
            <h5 class="text-white font-bold mb-3">Linksys</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 text-sm">
              <li>Menu: Applications & Gaming → Port Range Forwarding</li>
              <li>Advanced DMZ support with specific IP</li>
              <li>Mobile app facilitates basic settings</li>
              <li>Some models have a dedicated "Game Mode"</li>
            </ul>
          </div>
          
          <div class="bg-gray-800/50 p-5 rounded-xl border border-gray-600">
            <h5 class="text-white font-bold mb-3">Netgear</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 text-sm">
              <li>Menu: Advanced → Advanced Setup → Port Forwarding / Port Triggering</li>
              <li>QoS settings support to prioritize games</li>
              <li>Some models support integrated Game Optimizer</li>
              <li>Important to check exact model for proper firmware</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">⚡ Advanced Performance Settings</h4>
        <p class="mb-4 text-gray-300">
          For serious gamers, additional settings can further improve performance:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li><strong>QoS (Quality of Service):</strong> Prioritize gaming traffic over downloads</li>
          <li><strong>IGMP Snooping:</strong> Improves multicast efficiency in networks with multiple devices</li>
          <li><strong>CoS (Class of Service):</strong> Packet tagging for priority in switches</li>
          <li><strong>WMM (Wireless Multimedia):</strong> Traffic prioritization for Wi-Fi devices</li>
        </ul>
        
        <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 mt-6">
          <h4 class="text-amber-400 font-bold mb-2">⚠️ Caution with Custom Firmware</h4>
          <p class="text-sm text-gray-300">
            Firmwares like DD-WRT, Tomato, or OpenWRT offer more control but may void warranty and require advanced technical knowledge. Use only if you know exactly what you are doing. For NAT and gaming, official firmware is usually more stable.
          </p>
        </div>
      `
        },
        {
            title: "Packet Analysis and Network Monitoring",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          For advanced users, network monitoring tools help diagnose NAT problems, verify if ports are truly open, and confirm that traffic is flowing correctly between the router and devices.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔍 Professional Network Analysis Tools</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Tool</th>
                <th class="p-3 text-left">Main Function</th>
                <th class="p-3 text-left">Gaming Use</th>
                <th class="p-3 text-left">Difficulty Level</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3"><strong>Wireshark</strong></td>
                <td class="p-3">Packet capture and analysis</td>
                <td class="p-3">Verify TCP/UDP connections, NAT traversal</td>
                <td class="p-3">Advanced</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3"><strong>Nmap</strong></td>
                <td class="p-3">Port and service scanning</td>
                <td class="p-3">Verify open ports remotely</td>
                <td class="p-3">Intermediate</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3"><strong>PortQry</strong></td>
                <td class="p-3">Port state query</td>
                <td class="p-3">Verify NAT and connectivity</td>
                <td class="p-3">Basic</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3"><strong>Netstat</strong></td>
                <td class="p-3">Active local connections</td>
                <td class="p-3">Monitor ports in use by the PC</td>
                <td class="p-3">Basic</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 How to Use Wireshark to Diagnose NAT</h4>
        <p class="mb-4 text-gray-300">
          Wireshark is the most powerful tool for network analysis, allowing you to see exactly how packets are being transmitted:
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
          <li>Download and install Wireshark (packet capture requires administrator privileges)</li>
          <li>Select the correct network interface (Ethernet or Wi-Fi)</li>
          <li>Configure filters like <code>tcp.port == 3074 || udp.port == 3074</code> for Warzone</li>
          <li>Analyze traffic: successful connections will show bidirectional packet exchange</li>
          <li>NAT problems will appear as packets received but without response</li>
        </ol>
        
        <h4 class="text-white font-bold mb-3 mt-6">📈 Latency and Packet Loss Monitoring</h4>
        <p class="mb-4 text-gray-300">
          Besides NAT type, other factors affect the online gaming experience:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li><strong>Latency (ping):</strong> Round trip time of the packet (ideal: below 50ms)</li>
          <li><strong>Packet Loss:</strong> Percentage of undelivered packets (ideal: 0%)</li>
          <li><strong>Jitter:</strong> Latency variation (ideal: below 10ms)</li>
          <li><strong>Bufferbloat:</strong> Latency spikes during high network load</li>
        </ul>
      `
        },
        {
            title: "Alternative Solutions and Proxy Servers",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In situations where Restricted NAT persists despite all configurations, there are alternative solutions that can bypass connection problems, although with security and performance implications.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔄 Alternatives to Traditional NAT</h4>
        <div class="space-y-6 mt-4">
          <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-3">Gaming VPN (Exit Lag)</h5>
            <p class="text-gray-300 mb-3">VPNs specialized in gaming redirect traffic through optimized servers, potentially bypassing restricted NAT problems:</p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Advantages:</strong> Can improve NAT in certain scenarios, reduce ping to distant servers</li>
              <li><strong>Disadvantages:</strong> May increase latency, risk of ban by anti-cheat, privacy concerns</li>
              <li><strong>Examples:</strong> ExitLag, TorGuard, NordVPN Gaming</li>
            </ul>
          </div>
          
          <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-3">UDP Proxy (UDPLag)</h5>
            <p class="text-gray-300 mb-3">Solutions that encapsulate UDP traffic in TCP to bypass restrictive firewalls:</p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Advantages:</strong> Works on corporate networks or with CGNAT</li>
              <li><strong>Disadvantages:</strong> Increases latency, may be detected by anti-cheat</li>
              <li><strong>Applications:</strong> Tunneling games on restricted networks</li>
            </ul>
          </div>
          
          <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20">
            <h5 class="text-amber-400 font-bold mb-3">Public Static IP or IPv6</h5>
            <p class="text-gray-300 mb-3">Definitive solutions for NAT problems in complex networks:</p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>IPv6:</strong> Eliminates traditional NAT (each device has a unique global IP)</li>
              <li><strong>Static IP:</strong> Ensures constant public IP address (additional cost with ISP)</li>
              <li><strong>CGNAT:</strong> In networks with Carrier-Grade NAT, only a public IP resolves it definitively</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🛡️ Security Considerations</h4>
        <p class="mb-4 text-gray-300">
          Alternative solutions may introduce security risks:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>VPNs might log and sell browsing data</li>
          <li>Third-party proxies can intercept sensitive data</li>
          <li>Some solutions are considered "cheating" by anti-cheat systems</li>
          <li>Public networks can be targets for attacks during VPN use</li>
        </ul>
        
        <div class="bg-emerald-900/10 p-5 rounded-xl border border-emerald-500/20 mt-6">
          <h4 class="text-emerald-400 font-bold mb-2">✅ Final Recommendations</h4>
          <ul class="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Use alternative solutions only as a last resort</li>
            <li>Prioritize native router and firewall configurations</li>
            <li>Test solutions in trial mode before buying</li>
            <li>Check privacy policies and logs of the solutions</li>
          </ul>
        </div>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Advanced NAT Settings and Corporate Firewalls",
            content: `
            <p class="mb-6 text-gray-300 leading-relaxed">
              In corporate environments or more complex networks, NAT and firewall settings may involve additional layers of security that require advanced technical knowledge. We will explore the most complex settings you might encounter:
            </p>
            
            <h4 class="text-white font-bold mb-3 mt-6">Enterprise NAT Solutions</h4>
            <p class="mb-4 text-gray-300">
              In corporate networks, NAT is often implemented with enterprise solutions that can include:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>SNAT (Source NAT):</strong> Changes the source IP of packets to a shared public IP</li>
              <li><strong>DNAT (Destination NAT):</strong> Redirects packets based on destination IP to different internal servers</li>
              <li><strong>Twice NAT:</strong> Applies NAT twice for additional security</li>
              <li><strong>DS-Lite (Dual-Stack Lite):</strong> Solution for IPv4 scarcity in IPv6 networks</li>
            </ul>
            
            <h4 class="text-white font-bold mb-3 mt-6">Layer 7 (Application Layer) Firewall</h4>
            <p class="mb-4 text-gray-300">
              Modern firewalls inspect not only ports and protocols, but also packet content:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h5 class="text-blue-400 font-bold mb-3">Deep Packet Inspection (DPI)</h5>
                <p class="text-gray-300 text-sm">Capable of identifying and filtering traffic based on packet content, not just headers</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1 mt-2 text-sm">
                  <li>Identifies specific games and applications</li>
                  <li>Can block or limit applications even on open ports</li>
                  <li>Uses traffic signatures for recognition</li>
                </ul>
              </div>
              <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
                <h5 class="text-purple-400 font-bold mb-3">Application Control</h5>
                <p class="text-gray-300 text-sm">Granular control over applications even if they use common ports</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1 mt-2 text-sm">
                  <li>Allows/blocks specific games</li>
                  <li>Controls features like voice chat or downloads</li>
                  <li>Implements policies based on user/group</li>
                </ul>
              </div>
            </div>
            
            <h4 class="text-white font-bold mb-3 mt-6">Solutions for Restricted Environments</h4>
            <p class="mb-4 text-gray-300">
              In corporate networks, you may face:</p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Transparent Proxy:</strong> Intercepts and redirects traffic without client configuration</li>
              <li><strong>Web Application Firewall (WAF):</strong> Filters HTTP/HTTPS traffic for web applications</li>
              <li><strong>SSL Inspection:</strong> Decodes and inspects HTTPS traffic for security</li>
              <li><strong>Network Access Control (NAC):</strong> Controls which devices can access the network</li>
            </ul>
            `
        },
        {
            title: "Deep Protocol Analysis and Packet Handling",
            content: `
            <p class="mb-6 text-gray-300 leading-relaxed">
              To fully understand how ports work and how NAT manipulates packets, it's essential to understand deep protocol and packet header handling:
            </p>
            
            <h4 class="text-white font-bold mb-3 mt-6">TCP and UDP Packet Structure</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
                <thead class="bg-gray-800">
                  <tr>
                    <th class="p-2 text-left">Field</th>
                    <th class="p-2 text-left">Size (bits)</th>
                    <th class="p-2 text-left">TCP</th>
                    <th class="p-2 text-left">UDP</th>
                    <th class="p-2 text-left">Function in Games</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-t border-gray-700">
                    <td class="p-2"><strong>Source Port</strong></td>
                    <td class="p-2">16</td>
                    <td class="p-2">✓</td>
                    <td class="p-2">✓</td>
                    <td class="p-2">Identifies traffic source</td>
                  </tr>
                  <tr class="border-t border-gray-700 bg-gray-800/30">
                    <td class="p-2"><strong>Destination Port</strong></td>
                    <td class="p-2">16</td>
                    <td class="p-2">✓</td>
                    <td class="p-2">✓</td>
                    <td class="p-2">Identifies traffic destination</td>
                  </tr>
                  <tr class="border-t border-gray-700">
                    <td class="p-2"><strong>Sequence Number</strong></td>
                    <td class="p-2">32</td>
                    <td class="p-2">✓</td>
                    <td class="p-2">✗</td>
                    <td class="p-2">Packet ordering (TCP)</td>
                  </tr>
                  <tr class="border-t border-gray-700 bg-gray-800/30">
                    <td class="p-2"><strong>Checksum</strong></td>
                    <td class="p-2">16</td>
                    <td class="p-2">✓</td>
                    <td class="p-2">✓</td>
                    <td class="p-2">Integrity verification</td>
                  </tr>
                  <tr class="border-t border-gray-700">
                    <td class="p-2"><strong>Window Size</strong></td>
                    <td class="p-2">16</td>
                    <td class="p-2">✓</td>
                    <td class="p-2">✗</td>
                    <td class="p-2">Flow control (TCP)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 class="text-white font-bold mb-3 mt-6">Packet Handling in NAT</h4>
            <p class="mb-4 text-gray-300">
              NAT modifies specific packet fields to allow routing:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <h5 class="text-white font-bold mb-2">Ingress (Entry)</h5>
                <p class="text-sm text-gray-300">NAT changes source IP to public IP</p>
                <p class="text-xs text-gray-400">Source port → Unique public port</p>
              </div>
              <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <h5 class="text-white font-bold mb-2">Translation</h5>
                <p class="text-sm text-gray-300">Mapping table is updated</p>
                <p class="text-xs text-gray-400">pub IP:port ↔ priv IP:port</p>
              </div>
              <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <h5 class="text-white font-bold mb-2">Egress (Exit)</h5>
                <p class="text-sm text-gray-300">NAT reverts original translation</p>
                <p class="text-xs text-gray-400">Destination IP is reverted to private IP</p>
              </div>
            </div>
            
            <h4 class="text-white font-bold mb-3 mt-6">Considerations for Real-Time Gaming</h4>
            <p class="mb-4 text-gray-300">
              Games require special handling due to their real-time nature:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Low Latency:</strong> NAT must process packets quickly without buffering</li>
              <li><strong>Consistent Timing:</strong> UDP packets should not be reordered or delayed</li>
              <li><strong>Connection Tracking:</strong> NAT tables should maintain connection states</li>
              <li><strong>MTU Handling:</strong> Packet fragmentation must be carefully managed</li>
            </ul>
            `
        },
        {
            title: "Game Server Implementation and Load Balancing",
            content: `
            <p class="mb-6 text-gray-300 leading-relaxed">
              For multiplayer games, especially those with dedicated servers, load balancing and geographic distribution are critical for performance and availability:
            </p>
            
            <h4 class="text-white font-bold mb-3 mt-6">Game Server Architecture</h4>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
              <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h5 class="text-blue-400 font-bold mb-3">Matchmaking Servers</h5>
                <p class="text-gray-300 text-sm mb-3">Responsible for finding and grouping players:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  <li>Calculates latency between players</li>
                  <li>Consider geographic region</li>
                  <li>Check client NAT status</li>
                  <li>Manage matchmaking queues</li>
                </ul>
              </div>
              <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
                <h5 class="text-purple-400 font-bold mb-3">Game Servers</h5>
                <p class="text-gray-300 text-sm mb-3">Execute game logic and synchronization:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  <li>Process player inputs</li>
                  <li>Maintain game state in real-time</li>
                  <li>Transmit updates to all players</li>
                  <li>Validate anti-cheat checks</li>
                </ul>
              </div>
            </div>
            
            <h4 class="text-white font-bold mb-3 mt-6">Load Balancing Techniques</h4>
            <p class="mb-4 text-gray-300">
              Intelligent distribution of players across servers:
            </p>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
                <thead class="bg-gray-800">
                  <tr>
                    <th class="p-3 text-left">Technique</th>
                    <th class="p-3 text-left">Description</th>
                    <th class="p-3 text-left">Benefits</th>
                    <th class="p-3 text-left">Disadvantages</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-t border-gray-700">
                    <td class="p-3"><strong>Round Robin</strong></td>
                    <td class="p-3">Distributes players sequentially</td>
                    <td class="p-3">Simple, balanced</td>
                    <td class="p-3">Ignores geographic latency</td>
                  </tr>
                  <tr class="border-t border-gray-700 bg-gray-800/30">
                    <td class="p-3"><strong>Geographic Routing</strong></td>
                    <td class="p-3">Based on player location</td>
                    <td class="p-3">Minimizes latency</td>
                    <td class="p-3">Can overload popular regions</td>
                  </tr>
                  <tr class="border-t border-gray-700">
                    <td class="p-3"><strong>Load-Based Routing</strong></td>
                    <td class="p-3">Based on current server load</td>
                    <td class="p-3">Avoids overload</td>
                    <td class="p-3">Can increase latency</td>
                  </tr>
                  <tr class="border-t border-gray-700 bg-gray-800/30">
                    <td class="p-2"><strong>NAT-Aware Routing</strong></td>
                    <td class="p-2">Considers player NAT type</td>
                    <td class="p-2">Improves compatibility</td>
                    <td class="p-2">More complex to implement</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 class="text-white font-bold mb-3 mt-6">Game CDN Infrastructure</h4>
            <p class="mb-4 text-gray-300">
              Specialized Content Delivery Networks for games:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Edge Computing:</strong> Processing close to players</li>
              <li><strong>Multi-CDN Strategy:</strong> Using multiple CDNs for redundancy</li>
              <li><strong>Real-time Streaming:</strong> Real-time data transmission</li>
              <li><strong>Dynamic Content Caching:</strong> Caching content that changes over time</li>
            </ul>
            `
        },
        {
            title: "Security and Privacy Considerations in Gaming Networks",
            content: `
            <p class="mb-6 text-gray-300 leading-relaxed">
              With the increase in online gaming, security and privacy have become critical aspects for both developers and players:
            </p>
            
            <h4 class="text-white font-bold mb-3 mt-6">Common Attack Vectors in Online Games</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div class="bg-rose-900/10 p-5 rounded-xl border border-rose-500/20">
                <h5 class="text-rose-400 font-bold mb-3">DDoS Attacks</h5>
                <p class="text-gray-300 text-sm mb-3">Distributed Denial of Service against servers or individual players:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  <li>Specific booter/stresser services for games</li>
                  <li>Targeted attacks to cause lag or disconnection</li>
                  <li>Traffic amplification using UDP protocols</li>
                  <li>Exploiting network vulnerabilities in games</li>
                </ul>
              </div>
              <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20">
                <h5 class="text-amber-400 font-bold mb-3">Privacy Leaks</h5>
                <p class="text-gray-300 text-sm mb-3">Accidental leakage of personal information:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  <li>Real IP exposure during P2P connections</li>
                  <li>Geographic location information</li>
                  <li>Device and configuration data</li>
                  <li>Network identity and NAT Type</li>
                </ul>
              </div>
            </div>
            
            <h4 class="text-white font-bold mb-3 mt-6">Protection and Mitigation Measures</h4>
            <p class="mb-4 text-gray-300">
              Strategies to protect players and infrastructure:
            </p>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
                <thead class="bg-gray-800">
                  <tr>
                    <th class="p-3 text-left">Layer</th>
                    <th class="p-3 text-left">Protection</th>
                    <th class="p-3 text-left">Implementation</th>
                    <th class="p-3 text-left">Effectiveness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-t border-gray-700">
                    <td class="p-3"><strong>Router</strong></td>
                    <td class="p-3">SPI Firewall, DoS Protection</td>
                    <td class="p-3">Firmware configuration</td>
                    <td class="p-3">High against basic attacks</td>
                  </tr>
                  <tr class="border-t border-gray-700 bg-gray-800/30">
                    <td class="p-3"><strong>System</strong></td>
                    <td class="p-3">Windows Firewall, Antivirus</td>
                    <td class="p-3">Application/port rules</td>
                    <td class="p-3">High against malware</td>
                  </tr>
                  <tr class="border-t border-gray-700">
                    <td class="p-3"><strong>Game</strong></td>
                    <td class="p-3">Anti-cheat, Rate Limiting</td>
                    <td class="p-3">Integrated into client/server</td>
                    <td class="p-3">High against exploits</td>
                  </tr>
                  <tr class="border-t border-gray-700 bg-gray-800/30">
                    <td class="p-3"><strong>Server</strong></td>
                    <td class="p-3">DDoS Mitigation, WAF</td>
                    <td class="p-3">Cloud service/reverse proxy</td>
                    <td class="p-3">High against volumetric attacks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 class="text-white font-bold mb-3 mt-6">Security Best Practices</h4>
            <p class="mb-4 text-gray-300">
              Recommended measures for players and developers:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Granular Firewall:</strong> Allow only necessary ports for each game</li>
              <li><strong>Regular Updates:</strong> Keep firmware, drivers, and OS updated</li>
              <li><strong>Traffic Monitoring:</strong> Tools to detect suspicious activity</li>
              <li><strong>Gaming VPN:</strong> Use for anonymity when necessary, but evaluate trade-offs</li>
              <li><strong>Privacy Settings:</strong> Limit exposure of information in the game</li>
            </ul>
            `
        }
    ];

    const faqItems = [
        {
            question: "Do I need to open ports if I already have UPnP enabled?",
            answer: "No! If UPnP is working correctly, it opens ports automatically. However, if NAT remains Restricted even with UPnP on, proceed to manual Port Forwarding—this ensures ports stay open regardless of UPnP performance."
        },
        {
            question: "Does opening ports make my PC vulnerable to hackers?",
            answer: "Opening SPECIFIC game ports (e.g., Steam's 27000-27030) is relatively safe as you only permit traffic for that specific game. The real danger lies in using DMZ, which opens ALL ports. Keep Windows updated and antivirus active, and game port forwarding will be safe."
        },
        {
            question: "Why is a static IP so important?",
            answer: "When you open ports, you're telling the router: 'Forward traffic from port 27015 to IP 192.168.1.150'. If this IP changes (because you didn't set a static IP), the router keeps sending traffic to .150, but your PC now has .102. Result: ports fail, and you return to Restricted NAT."
        },
        {
            question: "My router doesn't have a Port Forwarding option. What should I do?",
            answer: "VERY old routers (pre-2010) might lack this. Solutions: (1) Update router firmware from the manufacturer's site, (2) Enable UPnP if available, or (3) Buy a modern router (even budget models support Port Forwarding now)."
        },
        {
            question: "Can I open ports for multiple devices at the same time?",
            answer: "Technically NO for the same port. For example, you cannot forward port 3074 (Warzone) to both a PC and a PS5 simultaneously; the router would get confused. Solution: Use UPnP (each device opens its own ports) or use different devices at different times."
        },
        {
            question: "Does opening ports improve ping?",
            answer: "Not directly. Opening ports improves NAT TYPE (from Restricted to Open), which allows for more stable P2P connections. However, ping depends on your raw internet quality. Open NAT reduces disconnections and lag from 'connection renegotiation' but won't magically lower a 100ms ping to 20ms."
        },
        {
            question: "Can I use DMZ on my PC if I have a good antivirus?",
            answer: "TECHNICALLY yes, but it is EXTREMELY discouraged. Even with antivirus, your PC remains exposed to port scanning, DDoS, and zero-day exploits. Use DMZ ONLY for consoles (PS5/Xbox). For PC, always use manual Port Forwarding."
        },
        {
            question: "After opening ports, do I need to do anything in Windows Firewall?",
            answer: "Yes! Windows has its own firewall that can block ports even if the router forwards them. Solution: Go to Control Panel → Windows Firewall → Allow an app → Add the game's executable (.exe) as an exception. Steam usually handled this, but Epic/EA games might need manual steps."
        },
        {
            question: "What's better: Wi-Fi or Ethernet for Open NAT?",
            answer: "Both work IDENTICALLY for achieving Open NAT (what matters is the router configuration). However, Ethernet is FAR superior for online gaming due to lower latency and zero packet loss. Wi-Fi can cause micro-stutters even with Open NAT."
        },
        {
            question: "Can I copy Port Forwarding settings to another router?",
            answer: "Yes! Ports are UNIVERSAL (Warzone's 3074 is the same on any router). If you switch routers: (1) Set a static IP again (it might change if the new router uses 192.168.0.X instead of 192.168.1.X), and (2) Add the same rules in the new panel."
        },
        {
            question: "My game isn't on the port list. How do I find which to open?",
            answer: "Search Google for: '[game name] port forwarding 2026'. Sites like portforward.com have updated lists. Alternatively, enable UPnP and the game should open ports automatically. For indie games, check official forums or Reddit."
        },
        {
            question: "Does opening ports work with all types of internet (Fiber, Satellite, etc.)?",
            answer: "Yes, as long as you have a PHYSICAL router. Note: If your ISP uses CGNAT (Carrier-Grade NAT), opening ports on YOUR router may not work. In that case, contact your ISP to request a 'public static IP' (which may carry an extra monthly fee)."
        },
        {
            question: "How do I verify if ports are truly open after Port Forwarding?",
            answer: "Use online tools like CanYouSeeMe.org to test if specific ports are accessible externally. You can also use the 'netstat -an' command in Windows to check if ports are LISTENING. Advanced tools like Nmap allow for more detailed scans."
        },
        {
            question: "What is the difference between NAT Type 1, 2, and 3 technically?",
            answer: "NAT Type 1 (Open) allows connections initiated externally. NAT Type 2 (Moderate) allows return connections from hosts you've communicated with. NAT Type 3 (Restricted) severely limits inbound connections. Technically, Type 1 uses Full Cone NAT, Type 2 uses Restricted/Port Restricted Cone, and Type 3 uses Symmetric NAT."
        },
        {
            question: "Why do some games require different ports for TCP and UDP?",
            answer: "Games use TCP for critical data requiring reliability (downloads, chat, authentication) and UDP for real-time data prioritizing low latency (gameplay, movement, audio). For example, Warzone might use TCP for the lobby and UDP for gameplay on the same port."
        },
        {
            question: "What is 'Hairpinning' and how does it affect NAT?",
            answer: "Hairpinning (NAT Loopback) is when an internal device tries to access another internal device using the external public IP. Many old routers don't support this, causing logic issues in some local multiplayer scenarios. Correct static IP and port forwarding help resolve this."
        },
        {
            question: "How does IPv6 affect NAT and port settings?",
            answer: "IPv6 eliminates the need for traditional NAT as every device gets a globally routable IP. With IPv6, Port Forwarding isn't necessary; devices are directly accessible, though firewall rules are still needed on both router and device. IPv6 typically provides an 'Open' NAT state."
        },
        {
            question: "Can I use Port Forwarding with Dynamic DNS?",
            answer: "Yes, absolutely! Dynamic DNS (DDNS) is ideal for users with dynamic public IPs. Services like No-IP or DuckDNS provide a fixed domain name pointing to your current IP. Combine this with Port Forwarding, and your NAT stays Open even when your public IP changes."
        },
        {
            question: "How does router QoS interfere with NAT and game quality?",
            answer: "Quality of Service (QoS) doesn't change NAT Type but improves gaming by prioritizing game traffic over other activities. It reduces jitter, packet loss, and latency spikes. Configure QoS to prioritize your game's ports and UDP protocols for the best experience."
        },
        {
            question: "What is 'NAT Traversal' and how does it work technically?",
            answer: "NAT Traversal includes techniques (STUN, TURN, ICE) that allow devices behind NAT to communicate directly. Games use these for peer-to-peer connections. UPnP and Port Forwarding facilitate this by making the NAT more 'permeable' for external requests."
        },
        {
            question: "How can I monitor port usage and connections in real-time?",
            answer: "Use Windows Resource Monitor, 'netstat -an' in CMD, or specialized software like GlassWire or Wireshark. Modern routers also offer dashboards for monitoring bandwidth and active connections to verify port usage and detect suspicious activity."
        },
        {
            question: "What are the security risks of opening ports for games?",
            answer: "Opening specific game ports is relatively safe if you only open documented ports. Risks increase with wide ranges or DMZ, including bot scanning and potential exploits. Minimize risk by keeping systems updated, using firewalls, and monitoring connections."
        },
        {
            question: "How do I resolve Restricted NAT on CGNAT networks?",
            answer: "Carrier-Grade NAT (CGNAT) makes Port Forwarding on your router ineffective. Solutions include requesting a public static IP from your ISP, using a gaming VPN (ExitLag, etc.), or using IPv6 if supported. There is no simple client-side 'fix' for CGNAT other than bypassing it."
        },
        {
            question: "How do I configure Open NAT on enterprise or university networks?",
            answer: "Strict security policies usually prevent standard configurations. Options include requesting special IT permissions (unlikely), using a VPN to tunnel out of the restricted network, or using personal hotspots. Performance may be lower due to the extra overhead."
        }
    ];

    const externalReferences = [
        { name: "PortForward.com - Game Port List", url: "https://portforward.com/ports.htm" },
        { name: "PlayStation Network - Port Requirements", url: "https://www.playstation.com/support/" },
        { name: "Xbox Support - NAT Configuration", url: "https://support.xbox.com/help/Hardware-Network/connect-network/network-ports-used-xbox-live" },
        { name: "RFC 3489 - STUN Protocol", url: "https://datatracker.ietf.org/doc/html/rfc3489" },
        { name: "IPv6 Transition Technologies", url: "https://www.ipv6.pt/transition-mechanisms/" },
        { name: "NAT Traversal Techniques", url: "https://webrtc.org/getting-started/nat-firewall-traversal" },
        { name: "CGNAT Impact on Gaming", url: "https://www.cisco.com/c/en/us/support/docs/ip/network-address-translation-nat/200410-Commonly-used-NAT-Terms-and-Definitions.html" },
        { name: "Quality of Service (QoS) Best Practices", url: "https://www.juniper.net/documentation/en_US/day-one/books/qos-made-simple/day-one-qos-made-simple.pdf" }
    ];

    const relatedGuides = [
        {
            href: "/guides/configuracao-roteador-wifi",
            title: "Router Configuration",
            description: "Access your device's control panel."
        },
        {
            href: "/guides/reduzir-ping-jogos-online",
            title: "Reduce Ping",
            description: "Improve your raw connection quality."
        },
        {
            href: "/guides/firewall-configuracao",
            title: "Windows Firewall",
            description: "Unblock the game in Windows as well."
        },
        {
            href: "/guides/teste-velocidade-internet",
            title: "Speed Test",
            description: "Verify your internet connection."
        },
        {
            href: "/guides/troubleshooting-internet",
            title: "Troubleshoot Connection",
            description: "Solutions for unstable connections."
        },
        {
            href: "/guides/melhor-dns-jogos-2026",
            title: "Optimized DNS",
            description: "Improve latency with fast DNS."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="60 min"
            difficultyLevel="Advanced"
            author="Voltris Technical Team"
            lastUpdated="February 2026"
            contentSections={contentSections}
            advancedContentSections={advancedContentSections}
            summaryTable={summaryTable}
            faqItems={faqItems}
            externalReferences={externalReferences}
            relatedGuides={relatedGuides}
        />
    );
}

