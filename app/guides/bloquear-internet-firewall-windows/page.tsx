import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'bloquear-internet-firewall-windows',
  title: "How to Block a Program's Internet on Windows (2026)",
  description: "Want to play offline or stop annoying updates? Learn how to use Windows Firewall to block any app's internet access in 3 minutes.",
  category: 'software',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "How to Block a Program's Internet: The Ultimate Firewall Guide (2026)";
const description = "You don't need to unplug your network cable. Windows 11 Firewall allows you to create surgical rules to prevent a game, update, or tracking software from accessing the internet.";

const keywords = [
  'how to block internet of a program windows 11 2026',
  'block app network access firewall tutorial',
  'prevent program from auto updating windows 11',
  'create outbound firewall rule windows 11 step by step',
  'simplewall vs tinywall best lightweight firewall'
];

export const metadata: Metadata = createGuideMetadata('bloquear-internet-firewall-windows', title, description, keywords);

export default function FirewallBlockGuide() {
  const summaryTable = [
    { label: "Tool", value: "Windows Firewall (Native)" },
    { label: "Action", value: "Outbound Rule" },
    { label: "Effect", value: "Total Internet Block for the .exe" },
    { label: "Reversible", value: "Yes (Just delete the rule)" },
    { label: "Easy Alternative", value: "SimpleWall (Open Source)" }
  ];

  const contentSections = [
    {
      title: "Why do this?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Many programs (like Adobe, Autodesk, Single Player Games) try to connect to the internet every 5 minutes to:
          <br/>1. Download updates you didn't ask for.
          <br/>2. Send usage data (telemetry) about your PC.
          <br/>3. Verify licenses online.
          <br/>Blocking the executable (.exe) in the firewall ensures the program works in isolation, without using your bandwidth or tracking your data.
        </p>
      `
    },
    {
      title: "Method 1: Windows Firewall (Built-in)",
      content: `
        <p class="mb-4 text-gray-300">
          The native firewall is powerful, but the interface is old. Follow carefully:
        </p>
        
        <div class="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
            <h4 class="text-white font-bold mb-3">Step-by-Step Visual Guide</h4>
            <ol class="list-decimal list-inside text-gray-300 space-y-3">
                <li>Open the Start Menu and type: <strong>"Windows Firewall with Advanced Security"</strong> (or <code>wf.msc</code> in Run).</li>
                <li>In the left panel, click on <strong>Outbound Rules</strong>.
                    <br/><span class="text-xs text-yellow-500 ml-6">Note: Outbound Rules block programs from EXITING to the internet. Inbound Rules block hackers from entering.</span>
                </li>
                <li>In the right panel, click <strong>New Rule...</strong></li>
                <li>Choose <strong>Program</strong> and click Next.</li>
                <li>Click "This program path" and <strong>Browse...</strong>.
                    <br/>Go to the folder where the game/program is installed and select the main executable (e.g., <code>game.exe</code>).
                </li>
                <li>On the next screen, SELECT: <strong>Block the connection</strong>.</li>
                <li>Check all boxes (Domain, Private, Public).</li>
                <li>Give it an easy name (e.g., "Block Game X") and click Finish.</li>
            </ol>
            <p class="mt-4 text-green-400 font-bold">
                Done! A red "prohibited" icon will appear in the list. The program is offline forever.
            </p>
        </div>
      `
    },
    {
      title: "Method 2: SimpleWall (For Easy Use)",
      content: `
        <p class="mb-4 text-gray-300">
          If you found the method above complicated, <strong>SimpleWall</strong> is a tiny open-source program that makes this visual.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>When opened, it shows all processes currently trying to use the internet.</li>
            <li>You just need to uncheck the box next to the program name.</li>
            <li>If the box isn't checked, the internet is blocked. It's that simple.</li>
        </ul>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "What if the program has multiple executables?",
      content: `
        <h4 class="text-white font-bold mb-3">The Launcher Trick</h4>
        <p class="mb-4 text-gray-300">
            Many modern games have a <code>Launcher.exe</code> and a <code>Game-Win64-Shipping.exe</code> hidden in a subfolder.
            <br/>If you only block the Launcher, the game might still connect online.
            <br/><strong>Pro Tip:</strong> Open Task Manager while the game is running. Right-click the game process > "Open file location". This is the real executable you should block.
        </p>
      `
    },
    {
      title: "How to Unblock later?",
      content: `
        <p class="mb-4 text-gray-300">
            Changed your mind? Want to download the update?
            <br/>1. Open Advanced Firewall again.
            <br/>2. Go to Outbound Rules.
            <br/>3. The rule you created will be at the top or in alphabetical order.
            <br/>4. Select it and click <strong>Delete</strong> (on the right) or <strong>Disable Rule</strong> (to pause temporarily).
        </p>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "Inbound vs Outbound Rules",
      content: `
        <h4 class="text-white font-bold mb-3">Understanding the Difference</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-800/50 p-4 rounded-lg border border-red-500/30">
                <h5 class="font-bold text-white mb-2">Outbound Rule</h5>
                <p class="text-sm text-gray-300">
                    Your PC trying to talk to a Google server. (What we want to block).
                </p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg border border-green-500/30">
                <h5 class="font-bold text-white mb-2">Inbound Rule</h5>
                <p class="text-sm text-gray-300">
                    An external server trying to start a conversation with your PC. (The router already blocks this via NAT, but the Firewall is the second barrier).
                </p>
            </div>
        </div>
      `
    }
  ];

  const faqItems = [
    {
      question: "Does the Firewall block local network (LAN)?",
      answer: "Yes, if you select 'Block the connection', it blocks everything. To allow LAN but block the Internet, advanced IP scope configuration is required (allow 192.168.x.x)."
    },
    {
      question: "Does Windows Defender interfere?",
      answer: "Windows Defender Firewall IS the firewall we are configuring. They are the same thing. Third-party antiviruses (Kaspersky, Bitdefender) usually disable the Windows firewall and use their own, where this tutorial will not work."
    }
  ];

  const externalReferences = [
    { name: "SimpleWall (GitHub)", url: "https://github.com/henrypp/simplewall" },
    { name: "TinyWall (Alternative)", url: "https://tinywall.pados.hu/" }
  ];

  const relatedGuides = [
    {
      href: "/guias/antivirus-para-jogos-windows-defender-exclusao",
      title: "Windows Defender",
      description: "How to configure exclusions."
    },
    {
      href: "/guias/privacidade-windows-telemetria",
      title: "Windows Privacy",
      description: "Stop Microsoft's tracking."
    },
    {
      href: "/guias/abrir-portas-roteador-nat-aberto",
      title: "Open Ports",
      description: "The opposite of blocking."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="15 min"
      difficultyLevel="Beginner"
      author="Voltris Security"
      lastUpdated="2026-02-06"
      contentSections={contentSections}
      advancedContentSections={advancedContentSections}
      additionalContentSections={additionalContentSections}
      summaryTable={summaryTable}
      faqItems={faqItems}
      externalReferences={externalReferences}
      relatedGuides={relatedGuides}
    />
  );
}
