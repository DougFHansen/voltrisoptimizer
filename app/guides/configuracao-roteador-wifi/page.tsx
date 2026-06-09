import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'configuracao-roteador-wifi',
  title: "Router Configuration for Gaming: Optimizing Wi-Fi and Ports (2026)",
  description: "Wi-Fi Lag? Learn how to choose the best channel (1, 6, 11), separate 2.4GHz/5GHz networks, and configure QoS to prioritize your PC or Console on the home network.",
  category: 'network-security',
  difficulty: 'Intermediate',
  time: '30 min'
};

const title = "Gamer Wi-Fi: Advanced Router and QoS Configuration Guide";
const description = "Does your ping fluctuate when someone turns on Netflix? Discover how to configure QoS, open ports (Port Forwarding), and position antennas for total stability.";

const keywords = [
  'best wifi channel 2.4ghz for gaming',
  'configure qos router tp-link d-link',
  'separate 2.4 and 5ghz network improves ping',
  'how to open router ports for games',
  'dmz or upnp which to use',
  'ideal mtu for games ps5 xbox pc',
  'gaming router worth it',
  'wifi analyzer android tutorial'
];

export const metadata: Metadata = createGuideMetadata('configuracao-roteador-wifi', title, description, keywords);

export default function RouterGuide() {
  const summaryTable = [
    { label: "Frequency", value: "5GHz (Mandatory for gaming)" },
    { label: "2.4GHz Channel", value: "Use only 1, 6 or 11" },
    { label: "Bandwidth", value: "20MHz (2.4G) / 80MHz (5G)" },
    { label: "QoS", value: "Enable and Prioritize PC" },
    { label: "Cable", value: "Ethernet always beats Wi-Fi" },
    { label: "UPnP", value: "Enable (Easier than Port Forwarding)" }
  ];

  const contentSections = [
    {
      title: "The Golden Rule: 5GHz vs 2.4GHz",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          2.4GHz Wi-Fi is slow and suffers interference from microwaves, baby monitors, and neighbors. Never play on 2.4GHz if you can avoid it. The <strong>5GHz</strong> has lower range (passes through fewer walls), but offers latency almost equal to cable and the full speed of your fiber.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">⚡</span> Voltris Wi-Fi Optimizer
            </h4>
            <p class="text-gray-300 mb-4">
                Windows, by default, scans for Wi-Fi networks every 60 seconds, causing a lag spike in the middle of the match. The <strong>Voltris Optimizer</strong> has a "WLAN Optimizer" feature that disables Wi-Fi Auto-Config while you play, ensuring a straight line of ping without fluctuations.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Stabilize Wi-Fi
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
    },
    {
      title: "Step 1: Choosing the Best Channel",
      content: `
        <p class="mb-4 text-gray-300">
            If your neighbor is using Channel 6 and you are too, the signals collide and your ping goes up.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>Download the <strong>Wi-Fi Analyzer</strong> (Open Source) app on an Android phone.</li>
            <li>See the graph. Identify which channel is EMPTY.</li>
            <li><strong>For 2.4GHz:</strong> Use ONLY channels 1, 6 or 11. (Never use intermediate channels like 3 or 8, as they generate double overlap).</li>
            <li><strong>For 5GHz:</strong> Generally high channels (above 149) have less interference.</li>
            <li>Enter the router page (usually 192.168.0.1 or 1.1), log in and change "Control Channel" from Auto to the chosen channel.</li>
        </ol>
      `
    },
    {
      title: "Step 2: Configuring QoS (Quality of Service)",
      content: `
        <p class="mb-4 text-gray-300">
            QoS tells the router: "If the bandwidth fills up, delay YouTube, but DO NOT delay the Game".
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Look for the QoS or "Bandwidth Control" tab.</li>
            <li>Enable QoS.</li>
            <li>Define your real Upload and Download speed (do a Speedtest before). If you put it wrong, the internet gets slow.</li>
            <li>Add your PC (by IP or MAC Address) to the "Maximum Priority" or "High Priority" list.</li>
        </ul>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Port Forwarding vs UPnP",
      content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-white font-bold mb-4 text-xl">Strict NAT No More</h4>
                <p class="text-gray-300 mb-4">
                    To be the match "Host" or have Open NAT in CoD/Xbox:
                </p>
                <p class="text-gray-300 text-sm">
                    <strong>UPnP (Universal Plug and Play):</strong> LEAVE ENABLED. It's the automatic way for the game to ask the router to open port 3074. It is safe for home use.
                </p>
                <p class="text-gray-300 text-sm mt-3">
                    <strong>DMZ (Demilitarized Zone):</strong> Opens ALL ports for one IP. Use only on Consoles (PS5/Xbox). NEVER use DMZ on your PC, as it removes the router's Firewall and exposes your Windows to direct internet attacks.
                </p>
            </div>
            `
    }
  ];

  const additionalContentSections = [
    {
      title: "MTU (Maximum Transmission Unit)",
      content: `
            <p class="mb-4 text-gray-300">
                The standard is 1500. Some guides say to change to 1450 or 1472.
            </p>
            <p class="text-gray-300 text-sm">
                <strong>Truth:</strong> In 99% of Fiber (PPPoE) connections, the ideal MTU is 1480 or 1492. Leave it at 1500 (Default) unless you know exactly what you are doing. Wrong MTU causes packet fragmentation and data loss (Packet Loss).
            </p>
            `
    }
  ];

  const faqItems = [
    {
      question: "Is a $400 'Gaming' Router worth it?",
      answer: "Only if you have 20 devices connected at the same time. The latency (Ping) of a $60 router and a $400 one is the same if it's just you playing. The difference is in the processor that handles more simultaneous connections."
    },
    {
      question: "Is a Wi-Fi repeater good for gaming?",
      answer: "NO. Repeaters drastically increase ping (double latency) because they need to receive the signal, process and retransmit (Half Duplex). If the signal is bad, run a cable or use a Mesh network (which is better than a repeater but still loses to the cable)."
    },
    {
      question: "40MHz width on 2.4GHz?",
      answer: "Avoid. 40MHz doubles speed but doubles the chance of interference. In crowded urban areas, use 20MHz on 2.4GHz for more stability. On 5GHz, use 80MHz or 160MHz without fear."
    }
  ];

  const externalReferences = [
    { name: "PortForward.com (Port Guide)", url: "https://portforward.com/" },
    { name: "Wi-Fi Analyzer (Open Source)", url: "https://vremsoftwaredevelopment.github.io/WiFiAnalyzer/" }
  ];

  const relatedGuides = [
    {
      href: "/guias/melhor-dns-jogos-2026",
      title: "Optimized DNS",
      description: "Complete your network setup."
    },
    {
      href: "/guias/reduzir-ping-regedit-cmd-jogos",
      title: "Network Regedit",
      description: "Adjust Windows to receive packets from the router."
    },
    {
      href: "/guias/como-limpar-cache-dns-ip-flushdns",
      title: "Reset Network",
      description: "If the configuration goes wrong, reset everything."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="30 min"
      difficultyLevel="Intermediate"
      contentSections={contentSections}
      advancedContentSections={advancedContentSections}
      additionalContentSections={additionalContentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
      faqItems={faqItems}
      externalReferences={externalReferences}
    />
  );
}
