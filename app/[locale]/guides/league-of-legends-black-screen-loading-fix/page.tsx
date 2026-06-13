import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'league-of-legends-tela-preta-carregamento',
  title: "LoL: How to Fix the Black Screen During Loading in 2026",
  description: "Does your League of Legends get a black screen after champion selection? Learn how to fix this connection and firewall error to stop losing LP.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "LoL: How to Fix the Black Screen During Loading in 2026";
const description = "Does your League of Legends get a black screen after champion selection? Learn how to fix this connection and firewall error to stop losing LP.";
const keywords = [
    'league of legends black screen loading 2026 fix',
    'lol not entering match black screen how to fix',
    'firewall error league of legends tutorial 2026',
    'reconfigure dns lol black screen loading',
    'lol connection error match server stuck'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('league-of-legends-tela-preta-carregamento', title, description, keywords, locale);
}

export default function LoLBlackScreenGuide() {
    const summaryTable = [
        { label: "Symptom", value: "Black screen after Champion Select" },
        { label: "Cause #1", value: "Resolution conflict (Alt + Enter)" },
        { label: "Cause #2", value: "Firewall or DNS Block" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "The nightmare of ranked players",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, with the new anti-cheat and frequent Windows 11 updates, the **Black Screen** error in LoL continues to be one of the biggest causes of involuntary abandons. The problem happens at the exact moment the LoL client tries to "hand over" control to the game executable. If there is any failure in network communication or screen resolution, the game simply won't open.
        </p>
      `
        },
        {
            title: "1. The Alt + Enter Trick (Fixing Resolution)",
            content: `
        <p class="mb-4 text-gray-300">Often the game tries to open at a resolution your monitor doesn't support in Fullscreen mode:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>When the screen goes black, press <strong>Alt + Enter</strong> simultaneously.</li>
            <li>This will force the game out of Fullscreen mode and into <strong>Windowed Mode</strong>.</li>
            <li>If the game loads in windowed mode, go into the in-game settings and adjust the resolution to your monitor's native before switching back to Fullscreen.</li>
        </ol>
      `
        },
        {
            title: "2. Settings Reset via File",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">If nothing works:</h4>
            <p class="text-sm text-gray-300">
                1. Go to the LoL installation folder (usually <code>C:/Riot Games/League of Legends/Config</code>). <br/>
                2. Delete the <strong>game.cfg</strong> file. <br/>
                3. When trying to enter a match (use Practice Mode!), the game will create a new file with zeroed video settings, which usually eliminates 2026 video driver conflicts.
            </p>
        </div>
      `
        },
        {
            title: "3. DNS and Connection Issues",
            content: `
        <p class="mb-4 text-gray-300">
            If the black screen comes with an "Error connecting to server" message, your DNS is the culprit. 
            <br/><br/><strong>Tip:</strong> Change your DNS to Google's (8.8.8.8 and 8.8.4.4) or Cloudflare's (1.1.1.1). ISP DNS servers often have unstable routes to Riot's servers in 2026, causing match authentication failures.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/league-of-legends-fps-drop-fix",
            title: "FPS Drops",
            description: "Improve performance after entering the game."
        },
        {
            href: "/guides/como-limpar-cache-dns-ip-flushdns",
            title: "Clear DNS",
            description: "Commands to reset your network."
        },
        {
            href: "/guides/melhor-dns-jogos-2026",
            title: "Best DNS",
            description: "Choose the most stable server for LoL."
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

