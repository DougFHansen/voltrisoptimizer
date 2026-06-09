import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'firewall-configuracao',
  title: "Complete Guide to Windows Firewall Configuration (2026)",
  description: "Want to protect your PC from intrusions? Learn how to properly configure Windows 11 Firewall for gaming and security in 2026.",
  category: 'network-security',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "Complete Guide to Windows Firewall Configuration (2026)";
const description = "Want to protect your PC from intrusions? Learn how to properly configure Windows 11 Firewall for gaming and security in 2026.";
const keywords = [
  'how to configure windows 11 firewall 2026',
  'block program in windows firewall full tutorial',
  'windows 11 firewall inbound and outbound rule guide',
  'is disabling windows 11 firewall safe tutorial',
  'open ports for games in windows 11 firewall 2026'
];

export const metadata: Metadata = createGuideMetadata('firewall-configuracao', title, description, keywords);

export default function FirewallConfigGuide() {
  const summaryTable = [
    { label: "Recommended Status", value: "Always Enabled" },
    { label: "Main Function", value: "Block unauthorized traffic" },
    { label: "Vital Check", value: "Inbound vs Outbound Rules" },
    { label: "Difficulty", value: "Intermediate" }
  ];

  const contentSections = [
    {
      title: "What is the Firewall and why does it exist?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The **Firewall** is like the doorman of your computer in 2026. It decides what can enter (Inbound) and what can leave (Outbound) your network. Without it, any computer on the internet could try to connect directly to your Windows to steal files or install viruses. In Windows 11, the native firewall is extremely powerful and often eliminates the need for heavy third-party antivirus software.
        </p>
      `
    },
    {
      title: "1. Allowing an App (The Easy Way)",
      content: `
        <p class="mb-4 text-gray-300">If a game or program can't connect to the internet:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Go to Settings > Privacy & Security > Windows Security.</li>
            <li>Click on 'Firewall & network protection' > <strong>Allow an app through firewall</strong>.</li>
            <li>Click on 'Change settings' and find your game in the list.</li>
            <li>Check the 'Private' and 'Public' boxes to ensure it works on any network.</li>
        </ol>
      `
    },
    {
      title: "2. Firewall with Advanced Security",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">For Advanced Users:</h4>
            <p class="text-sm text-gray-300">
                The advanced panel allows you to create specific rules for **TCP/UDP Ports**. <br/><br/>
                If you are hosting a Minecraft server or a local website in 2026, you'll need to create a 'New Inbound Rule', select 'Port', and type the port number the server uses. Remember: opening many ports can weaken system security; open only what is strictly necessary.
            </p>
        </div>
      `
    },
    {
      title: "3. Never Disable the Firewall!",
      content: `
        <p class="mb-4 text-gray-300">
            <strong>Performance Myth:</strong> 
            <br/><br/>Many old tutorials suggest disabling the firewall to "gain FPS" or "solve lag". In 2026, this is a myth. The resource consumption of the Windows 11 firewall is almost zero. Disabling it leaves your PC exposed to brute-force attacks and network worms that can infect your machine in less than 10 minutes of direct connection. If a game is blocked, change the rule, but keep the protection on.
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guias/bloquear-internet-firewall-windows",
      title: "Block Software",
      description: "Prevent an app from connecting to the network."
    },
    {
      href: "/guias/abrir-portas-roteador-nat-aberto",
      title: "Open Ports",
      description: "Advanced network configurations."
    },
    {
      href: "/guias/seguranca-digital",
      title: "Digital Security 2026",
      description: "Learn how to protect yourself from modern threats."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="15 min"
      difficultyLevel="Intermediate"
      contentSections={contentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}
