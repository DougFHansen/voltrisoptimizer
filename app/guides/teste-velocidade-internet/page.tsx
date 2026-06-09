import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'teste-velocidade-internet',
  title: "Internet Speed Test: Jitter, Ping, and Bufferbloat (2026)",
  description: "Does your Speedtest show 500 Mega but the game stutters? You're suffering from Bufferbloat. Learn to test the real quality of your connection and diagnose packet loss.",
  category: 'rede-seguranca',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "Beyond Speedtest: How to Measure Internet Stability for Gaming";
const description = "Having 1 Gigabit doesn't help if Jitter is high. Understand the numbers that really matter for Gamers: Loaded Latency and Packet Loss.";

const keywords = [
  'internet speed test real ping 2026',
  'what is jitter in internet quality',
  'bufferbloat test waveform guide',
  'fake speedtest numbers explained',
  'internet lagging what to do 2026',
  'packet loss test tutorial',
  'required upload speed for streaming 2026',
  'high ping with good internet fix'
];

export const metadata: Metadata = createGuideMetadata('teste-velocidade-internet', title, description, keywords);

export default function SpeedtestGuide() {
  const summaryTable = [
    { label: "Standard Site", value: "Speedtest.net" },
    { label: "Advanced Site", value: "Waveform Bufferbloat" },
    { label: "Ideal Jitter", value: "Below 5ms" },
    { label: "Packet Loss", value: "0% (Zero Tolerance)" },
    { label: "Loaded Latency", value: "Crucial for crowded homes" },
    { label: "Download", value: "Matters little for gaming" }
  ];

  const contentSections = [
    {
      title: "Stop looking only at Download speeds",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Online games consume very little bandwidth (less than 1 Mega of download). What matters is the speed at which data travels (Latency/Ping) and the consistency of that trip (Jitter).
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">📈</span> Voltris Route Monitor
            </h4>
            <p class="text-gray-300 mb-4">
                Ping tested in the browser doesn't always reflect the game. <strong>Voltris Optimizer</strong> traces the route (Traceroute) from your PC to game servers (AWS, Riot, Valve) and shows where the bottleneck is: in your home, at the provider, or at the game server.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Test Game Route
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
    },
    {
      title: "The Real Test: Waveform",
      content: `
        <p class="mb-4 text-gray-300">
            Forget Fast.com or other generic tests. Access <strong>waveform.com/tools/bufferbloat</strong>.
        </p>
        <p class="text-gray-300 mb-2 font-bold">What does it measure?</p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Unloaded Ping:</strong> Your ping when nobody else is using the Internet.</li>
            <li><strong>Download Active Ping:</strong> Your ping while someone is downloading a heavy file. If this number jumps from 20ms to 200ms, you suffer from <strong>Bufferbloat</strong>.</li>
            <li><strong>Grade:</strong> If you get a C, D, or F, your router is poor at managing traffic.</li>
        </ul>
      `
    },
    {
      title: "What is Jitter?",
      content: `
        <p class="mb-4 text-gray-300">
            Jitter is the variation of the ping.
            <br/>Scenario A: Stable ping at 50ms. (Great).
            <br/>Scenario B: Ping varies between 20ms, 80ms, 30ms, 100ms. (Terrible).
        </p>
        <p class="text-gray-300">
            High Jitter causes \"teleporting\" and characters sliding in-game. It is usually caused by unstable Wi-Fi or poor routing by the provider.
        </p>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "How to solve Bufferbloat (SQM)",
      content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-white font-bold mb-4 text-xl">Smart Queue Management</h4>
                <p class="text-gray-300 mb-4">
                    If you got a low grade on Waveform:
                </p>
                <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                    <li>Enable QoS (Quality of Service) on your router.</li>
                    <li>Limit the maximum speed to 95% of the total contracted speed. (E.g.: If you have 100 Mega, limit to 95 Mega).</li>
                    <li>This prevents the router's buffer from filling up, keeping the queue free for game packets to pass ahead of downloads.</li>
                </ol>
            </div>
            `
    }
  ];

  const additionalContentSections = [
    {
      title: "Packet Loss",
      content: `
            <p class="mb-4 text-gray-300">
                Open CMD (Command Prompt) and type: <code>ping google.com -n 50</code>.
            </p>
            <p class="text-gray-300 text-sm">
                It will perform 50 tests. At the end, check \"Lost\". It should be 0 (0% loss). If you have 1% or more, call your provider's technician. There's likely a physical defect in the wiring, bent fiber, or a dying router. No software can fix physical packet loss.
            </p>
            `
    }
  ];

  const faqItems = [
    {
      question: "Is Speedtest via Wi-Fi valid?",
      answer: "To measure fiber speed, no. Wi-Fi is the bottleneck. To measure your Wi-Fi quality, yes. If it reaches 500 Mega on cable and 50 on Wi-Fi, your router is the weak link."
    },
    {
      question: "Is 5G Mobile good for gaming?",
      answer: "5G has improved a lot, with pings around 20ms. It's better than poor Wi-Fi, but still suffers from Jitter depending on weather and time of day. Use it as a backup."
    }
  ];

  const externalReferences = [
    { name: "Waveform Bufferbloat Test", url: "https://www.waveform.com/tools/bufferbloat" },
    { name: "Speedtest by Ookla", url: "https://www.speedtest.net/" }
  ];

  const relatedGuides = [
    {
      href: "/guides/configuracao-roteador-wifi",
      title: "Configure QoS",
      description: "Solve bufferbloat by configuring your router."
    },
    {
      href: "/guides/perda-de-pacote-packet-loss-fix",
      title: "Packet Loss",
      description: "In-depth packet loss diagnosis."
    },
    {
      href: "/guides/como-limpar-cache-dns-ip-flushdns",
      title: "Reset Connection",
      description: "If tests fail, try resetting your connection."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="10 min"
      difficultyLevel="Beginner"
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

