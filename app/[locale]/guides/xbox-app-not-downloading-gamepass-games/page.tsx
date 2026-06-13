import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'xbox-app-nao-baixa-jogos-gamepass',
  title: "Xbox App won't download games? How to fix (2026 Guide)",
  description: "Is your Xbox Game Pass download stuck at 0% or failing? Learn how to reset Gaming Services and download everything normally in 2026.",
  category: 'optimization',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "Xbox App won't download games? How to fix (2026 Guide)";
const description = "Is your Xbox Game Pass download stuck at 0% or failing? Learn how to reset Gaming Services and download everything normally in 2026.";
const keywords = [
    'xbox app wont download games game pass 2026 tutorial',
    'download error xbox app windows 11 guide 2026',
    'how to reset gaming services xbox tutorial guide',
    'xbox game pass stuck on preparing tutorial 2026',
    'fix microsoft store error xbox app tutorial guide 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('xbox-app-nao-baixa-jogos-gamepass', title, description, keywords, locale);
}

export default function XboxAppFixGuide() {
    const summaryTable = [
        { label: "Common Error", value: "Download at 0% / Preparing..." },
        { label: "Culprit", value: "Gaming Services" },
        { label: "Solution #1", value: "Reset System Apps" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "The Game Pass Nightmare",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **Xbox Game Pass** in 2026 is an excellent service, but the Windows app still suffers from deep integration issues with the Microsoft Store. Often, a game won't download or the 'Install' button simply won't react. This happens due to failures in the **Gaming Services**, an invisible component that manages licenses and the installation of Microsoft games on your PC.
        </p>
      `
        },
        {
            title: "1. Resetting the Xbox App and Microsoft Store",
            content: `
        <p class="mb-4 text-gray-300">The first step is to reset the local settings:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Go to Settings > Apps > Installed apps.</li>
            <li>Search for 'Xbox' and click the three dots > Advanced options > <strong>Repair/Reset</strong>.</li>
            <li>Do the same with the 'Microsoft Store' app.</li>
            <li>Open CMD as Administrator and type <code>wsreset.exe</code>. A black window will open and close by itself; this clears the store cache.</li>
        </ol>
      `
        },
        {
            title: "2. Reinstalling Gaming Services via PowerShell",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Definitive Solution:</h4>
            <p class="text-sm text-gray-300">
                If the simple resets didn't work, we need to force the reinstallation of the download engine. <br/><br/>
                In PowerShell (Admin), paste this command to uninstall: <br/>
                <code>get-appxpackage Microsoft.GamingServices | remove-AppxPackage -allusers</code> <br/><br/>
                After that, paste this to open the official installation page: <br/>
                <code>start ms-windows-store://pdp/?productid=9MWPM2CQNLHN</code> <br/>
                Install Gaming Services again and restart your PC. This solves 99% of 'Download stuck at 0%' cases.
            </p>
        </div>
      `
        },
        {
            title: "3. Region and Time Check",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>2026 Tip:</strong> The Microsoft Store is picky about location. 
            <br/><br/>Check if your Windows has <strong>Set time automatically</strong> turned on and if the <strong>Region</strong> is set correctly to your country. If there is a mismatch between your PC's time and the server's real time, your Game Pass subscription authentication will fail, preventing any download from starting due to a "security error".
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/xbox-game-pass-pc-vale-a-pena",
            title: "Is it Worth It?",
            description: "Service review in 2026."
        },
        {
            href: "/guides/pos-instalacao-windows-11",
            title: "Windows Setup",
            description: "System tweaks for gamers."
        },
        {
            href: "/guides/windows-update-corrigir-erros",
            title: "Update Errors",
            description: "How to unlock downloads in Windows."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Medium"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

