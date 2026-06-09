import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'otimizacao-registro-windows',
  title: "Windows Registry Optimization: Real Tweaks vs Myths (2026)",
  description: "Learn which Regedit keys actually improve latency and responsiveness (MenuShowDelay, Win32Priority) and which are pure placebo effects.",
  category: 'optimization',
  difficulty: 'Advanced',
  time: '25 min'
};

const title = "Regedit Guide: Real Windows 11 Optimizations (No Placebo)";
const description = "Stop copying .reg files from the internet that break your PC. Learn exactly what MenuShowDelay, WaitToKillServiceTimeout and SystemResponsiveness do.";

const keywords = [
  'best regedit tweaks windows 11',
  'decrease start menu delay regedit',
  'win32priorityseparation games ideal value',
  'networkthrottlingindex ffffffff works',
  'disable game dvr regedit',
  'systemresponsiveness games',
  'how to backup windows registry',
  'regedit mouse fix acceleration'
];

export const metadata: Metadata = createGuideMetadata('otimizacao-registro-windows', title, description, keywords);

export default function RegistryGuide() {
  const summaryTable = [
    { label: "Tool", value: "Registry Editor (Regedit)" },
    { label: "Risk", value: "High (Make a Backup!)" },
    { label: "MenuShowDelay", value: "Makes menus instant" },
    { label: "CPU Priority", value: "Prioritizes focused program" },
    { label: "Myth", value: "Regedit doesn't increase raw FPS" },
    { label: "Focus", value: "Responsiveness and Latency" }
  ];

  const contentSections = [
    {
      title: "What is the Windows Registry?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The Registry is the brain of Windows. It is a giant database where all settings are stored. Changing values here can alter deep behaviors that don't exist in the Settings menu.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">⚠️</span> Voltris Automatic Backup
            </h4>
            <p class="text-gray-300 mb-4">
                A typo in Regedit can prevent Windows from starting. <strong>Voltris Optimizer</strong> automatically backups critical keys before applying any optimization, allowing you to undo everything with one click if something goes wrong.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Optimize Safely
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
    },
    {
      title: "Tweak 1: Instant Menus (MenuShowDelay)",
      content: `
        <p class="mb-4 text-gray-300">
            Windows intentionally waits 400ms (almost half a second) before opening a submenu when you hover your mouse. Let's zero that out.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5 font-mono text-sm">
            <li>Win + R > regedit.</li>
            <li>Navigate to: <code>HKEY_CURRENT_USER\\Control Panel\\Desktop</code>.</li>
            <li>On the right side, find <strong>MenuShowDelay</strong>.</li>
            <li>Change the value from 400 to <strong>0</strong> (or 50 if you find it too fast).</li>
            <li>Restart your PC. The feeling of fluidity is immediate.</li>
        </ol>
      `
    },
    {
      title: "Tweak 2: Game Priority (Win32PrioritySeparation)",
      content: `
        <p class="mb-4 text-gray-300">
            Defines how much CPU Windows gives to the foreground program (Game) vs background services.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Path: <code>HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl</code>.</li>
            <li>Key: <strong>Win32PrioritySeparation</strong>.</li>
            <li>Value (Hexadecimal):
                <ul class="ml-6 mt-1 text-[#31A8FF]">
                    <li><strong>26</strong> (Hex) or 38 (Decimal): Optimized default for foreground processes. Ideal balance for most.</li>
                    <li><strong>16</strong> (Hex) or 22 (Decimal): Aggressive foreground focus. Can cause stuttering in background Discord/OBS.</li>
                </ul>
            </li>
        </ul>
      `
    },
    {
      title: "Tweak 3: Network Throttling (NetworkThrottlingIndex)",
      content: `
        <p class="mb-4 text-gray-300">
            Windows limits the network traffic of non-multimedia processes to save battery/resources. On modern Gigabit networks, this is unnecessary.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Path: <code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile</code>.</li>
            <li>Key: <strong>NetworkThrottlingIndex</strong>.</li>
            <li>Default value: 10 (Decimal).</li>
            <li>Change to: <strong>FFFFFFFF</strong> (Hexadecimal). This disables the limiter completely.</li>
        </ul>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "CAUTION: The 'LargeSystemCache' Myth",
      content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-yellow-400 font-bold mb-4 text-xl">Don't enable this!</h4>
                <p class="text-gray-300 mb-4">
                    Many guides tell you to enable <code>LargeSystemCache</code> claiming it improves games. This is FALSE. This setting is for file SERVERS.
                </p>
                <p class="text-gray-300 text-sm">
                    Enabling this on a Gaming PC makes Windows steal all physical RAM for disk cache, taking RAM away from the game and causing stuttering (Swap). Keep it at 0.
                </p>
            </div>
            `
    }
  ];

  const additionalContentSections = [
    {
      title: "GameDVR (Background Recording)",
      content: `
            <p class="mb-4 text-gray-300">
                If you don't use Xbox Game Bar to clip, disable it via Regedit to ensure it's not recording in the background.
            </p>
            <p class="text-gray-300 text-sm font-mono">
                HKEY_CURRENT_USER\\System\\GameConfigStore -> GameDVR_Enabled = 0.<br/>
                HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\GameDVR -> AllowGameDVR = 0.
            </p>
            `
    }
  ];

  const faqItems = [
    {
      question: "How do I backup the registry?",
      answer: "In Regedit, click 'File' (top left) > 'Export'. Save as 'Backup_Before_Tweaking.reg'. If anything goes wrong, just double-click this file to restore everything."
    },
    {
      question: "Are registry cleaners (like CCleaner) good?",
      answer: "They remove orphan keys (from uninstalled programs), which frees a few KB of space, but DOES NOT improve performance. The risk of deleting an important key is greater than the benefit. Modern Windows handles orphan keys well."
    },
    {
      question: "Do I need to restart?",
      answer: "Yes. No changes in the Registry (HKEY_LOCAL_MACHINE) take effect until Windows restarts and rereads the database."
    }
  ];

  const externalReferences = [
    { name: "Microsoft Docs - Registry Optimization", url: "https://learn.microsoft.com/en-us/windows-server/administration/performance-tuning/role/file-server/" },
    { name: "Backup Registry Guide", url: "https://support.microsoft.com/en-us/topic/how-to-back-up-and-restore-the-registry-in-windows-855140ad-e318-2a13-2829-d428a2ab0692" }
  ];

  const relatedGuides = [
    {
      href: "/guides/reduzir-ping-regedit-cmd-jogos",
      title: "Regedit Network",
      description: "Keys focused on TcpAckFrequency and Nagle."
    },
    {
      href: "/guides/otimizacao-ssd-windows-11",
      title: "SSD Tweaks",
      description: "Registry adjustments for storport."
    },
    {
      href: "/guides/debloating-windows-11",
      title: "General Cleanup",
      description: "Fewer processes = Registry accessed less."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="25 min"
      difficultyLevel="Advanced"
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
