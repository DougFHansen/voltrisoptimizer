import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'instalar-impressora-wifi',
  title: "How to Install a Wi-Fi Printer on PC (Definitive Guide)",
  description: "Bought a Wi-Fi printer and can't connect it? Learn how to set up HP, Epson, Canon and Brother printers on your wireless network step by step.",
  category: 'network-security',
  difficulty: 'Beginner',
  time: '20 min'
};

const title = "How to Install a Wi-Fi Printer on PC (Definitive Guide)";
const description = "Bought a Wi-Fi printer and can't connect it? Learn how to set up HP, Epson, Canon and Brother printers on your wireless network step by step.";
const keywords = [
  'how to install wifi printer on windows 11 tutorial',
  'connect epson printer wifi via computer',
  'install hp smart wifi printer guide 2026',
  'printer offline on wifi how to fix 2026',
  'find printer by ip address network windows'
];

export const metadata: Metadata = createGuideMetadata('instalar-impressora-wifi', title, description, keywords);

export default function WifiPrinterGuide() {
  const summaryTable = [
    { label: "Connection Modes", value: "WPS, LCD Panel or USB Cable (Setup)" },
    { label: "Recommended App (HP)", value: "HP Smart" },
    { label: "Recommended App (Epson)", value: "Epson Connect" },
    { label: "Difficulty", value: "Easy" }
  ];

  const contentSections = [
    {
      title: "The secret of wireless installation",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Installing a printer today is much easier, but bottlenecks still exist: the PC and the Printer **must be on the same 2.4GHz network**. Many printers don't recognize 5GHz networks. If your router mixes both frequencies (Smart Connect), you may have trouble finding the printer on Wi-Fi.
        </p>
      `
    },
    {
      title: "1. The 'First Cable' Method",
      content: `
        <p class="mb-4 text-gray-300">Although it's Wi-Fi, the most reliable way to set up is to use a temporary USB cable:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Download the official installer from the manufacturer's website (e.g., HP or Epson Driver).</li>
            <li>Connect the USB cable between the printer and the PC.</li>
            <li>The installer will ask: "How would you like to connect?". Choose <strong>Wireless (Wi-Fi)</strong>.</li>
            <li>The installer will pass your Windows Wi-Fi password to the printer via cable.</li>
            <li>At the end, it will ask you to remove the cable. The printer is now saved on your network permanently.</li>
        </ol>
      `
    },
    {
      title: "2. Adding by IP (If Windows can't find it)",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Manual Method:</h4>
            <p class="text-sm text-gray-300">
                If the printer is already on Wi-Fi but Windows says 'Printer not found': <br/>
                1. Print the printer's configuration page (see from its menu) to find the <strong>IP Address</strong> (e.g., 192.168.0.15). <br/>
                2. In Windows, go to Add Printer > 'The printer that I want isn't listed'. <br/>
                3. Choose 'Add a printer using a TCP/IP address' and type in the discovered IP.
            </p>
        </div>
      `
    },
    {
      title: "3. Fixing the 'Offline' error",
      content: `
        <p class="mb-4 text-gray-300">
            If the printer randomly goes offline:
            <br/>Go to Control Panel > Devices and Printers. Right-click on your printer > See what's printing. Click the 'Printer' menu and uncheck <strong>'Use Printer Offline'</strong>. This usually gets stuck when there is a brief signal drop.
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/compartilhamento-impressoras",
      title: "Share Network",
      description: "Use the printer on multiple PCs at the same time."
    },
    {
      href: "/guides/configuracao-roteador-wifi",
      title: "Configure Router",
      description: "Differences between 2.4GHz and 5GHz channels."
    },
    {
      href: "/guides/wifi-desconectando-sozinho-windows",
      title: "Stabilize Wi-Fi",
      description: "Tips if the connection drops during printing."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="20 min"
      difficultyLevel="Beginner"
      contentSections={contentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}

