import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'roblox-fix-erro-conexao',
  title: "Roblox: How to Fix Connection Error (ID 277 / 279)",
  description: "Did your Roblox match drop? Learn how to fix connection errors 277, 279, and other ping issues in Roblox in 2026.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "Roblox: How to Fix Connection Error (ID 277 / 279)";
const description = "Did your Roblox match drop? Learn how to fix connection errors 277, 279, and other ping issues in Roblox in 2026.";
const keywords = [
    'roblox connection error 277 how to fix 2026',
    'roblox error 279 tutorial definitive guide 2026',
    'how to reduce ping in roblox tutorial 2026',
    'roblox disconnecting by itself windows 11 fix',
    'best dns to play roblox without lag 2026'
];

export const metadata: Metadata = createGuideMetadata('roblox-fix-erro-conexao', title, description, keywords);

export default function RobloxConnectionFixGuide() {
    const summaryTable = [
        { label: "Error 277", value: "Unexpected drop (Server or Internet)" },
        { label: "Error 279", value: "Failed to enter map (Firewall/DNS)" },
        { label: "Fix #1", value: "Log and Cache Cleanup" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Why does Roblox disconnect?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, with increasingly complex and heavy Roblox experiences, the stability of your internet has become vital. Error **ID 277** usually indicates that your computer stopped sending data to the server, while **ID 279** is usually a network block preventing you from loading the map initially. Almost always, the problem can be solved with simple adjustments in your Windows 11.
        </p>
      `
        },
        {
            title: "1. Cleaning the Roblox \"Junk\"",
            content: `
        <p class="mb-4 text-gray-300">Corrupted files from old sessions cause connection errors:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Press <code>Windows + R</code>, type <code>%localappdata%</code> and press Enter.</li>
            <li>Find the <strong>Roblox</strong> folder and open it.</li>
            <li>Delete the <strong>logs</strong> and <strong>Downloads</strong> folders.</li>
            <li>Inside <code>%temp%</code> (use the same Windows+R command), delete the 'Roblox' folder if it exists.</li>
            <li>This forces the game to create a new clean connection with the servers.</li>
        </ol>
      `
        },
        {
            title: "2. The Firewall Block",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Security Release:</h4>
            <p class="text-sm text-gray-300">
                Error ID 279 frequently occurs because Windows Firewall or your antivirus blocks Roblox's access to specific ports. <br/><br/>
                Go to Control Panel > System and Security > Windows Defender Firewall > 'Allow an app through Firewall'. Make sure <strong>Roblox</strong> is checked under both 'Private' and 'Public'.
            </p>
        </div>
      `
        },
        {
            title: "3. DNS and IP in 2026",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Refreshing the signal:</strong> 
            <br/><br/>If the error persists, open CMD (Command Prompt) as administrator and type these three commands, one at a time: <br/>
            <code>ipconfig /flushdns</code> <br/>
            <code>netsh winsock reset</code> <br/>
            <code>netsh int ip reset</code> <br/><br/>
            This will clear any "stuck" internet route that is preventing Roblox from finding the nearest server. Restart the computer after the commands for changes to take effect.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/roblox-fps-unlocker-tutorial",
            title: "Unlock FPS",
            description: "Play Roblox above 60 FPS."
        },
        {
            href: "/guides/reduzir-ping-jogos-online",
            title: "Reduce Ping",
            description: "Improve general connection in games."
        },
        {
            href: "/guides/wifi-desconectando-sozinho-windows",
            title: "Wi-Fi Dropping",
            description: "Fix problems if Wi-Fi disconnects."
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
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

