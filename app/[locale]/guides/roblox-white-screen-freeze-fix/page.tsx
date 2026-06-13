import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'roblox-tela-branca-travada-fix',
  title: "Roblox White Screen: How to fix the startup error (2026)",
  description: "Does your Roblox open but get stuck on a white or grey screen? Learn how to solve rendering and compatibility issues in Roblox in 2026.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Roblox White Screen: How to fix the startup error (2026)";
const description = "Does your Roblox open but get stuck on a white or grey screen? Learn how to solve rendering and compatibility issues in Roblox in 2026.";
const keywords = [
    'roblox white screen how to fix 2026 tutorial',
    'roblox infinite loading white screen fix windows 11',
    'how to fix roblox stuck at startup tutorial 2026',
    'roblox rendering error white screen guide',
    'clear roblox data white screen step by step 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('roblox-tela-branca-travada-fix', title, description, keywords, locale);
}

export default function RobloxWhiteScreenGuide() {
    const summaryTable = [
        { label: "Symptom", value: "Window opens but does not show the game image" },
        { label: "Cause #1", value: "Outdated or buggy Video Driver" },
        { label: "Cause #2", value: "Conflict with Shaders (Bloxshade, etc.)" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "What causes the White Screen in Roblox?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The **White Screen** in Roblox happens when the game executable manages to start, but the graphics engine cannot draw the textures and interface. In 2026, this is usually linked to corrupted cache files or Windows trying to run Roblox using the integrated graphics card instead of the powerful dedicated one. Let's fix this in three simple steps.
        </p>
      `
        },
        {
            title: "1. Forcing the Correct Graphics Card",
            content: `
        <p class="mb-4 text-gray-300">If you play on a Gaming Laptop, this is the main suspect:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Open Windows Settings > System > <strong>Graphics</strong>.</li>
            <li>Search for 'Roblox' in the list (or click browse and point to <code>RobloxPlayerBeta.exe</code>).</li>
            <li>Click Options and select <strong>'High Performance'</strong> (Your dedicated graphics card).</li>
            <li>Save and try opening the game again.</li>
        </ol>
      `
        },
        {
            title: "2. Resetting Windows Internet Settings",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Control Panel Trick:</h4>
            <p class="text-sm text-gray-300">
                1. Search for 'Internet Options' in the Start menu. <br/>
                2. Go to the <strong>Advanced</strong> tab. <br/>
                3. Click the <strong>'Restore advanced settings'</strong> button. <br/>
                4. Just below, click 'Reset'. <br/>
                Roblox uses system libraries to load the Launcher; if there is any SSL or old connection error, it will get stuck on white.
            </p>
        </div>
      `
        },
        {
            title: "3. Issues with Visual Modifications",
            content: `
        <p class="mb-4 text-gray-300">
            Are you using **ReShade** or **Bloxshade** in 2026? 
            <br/><br/><strong>Warning:</strong> Outdated versions of these image injectors are the biggest cause of white screen after each Wednesday Roblox update. If the game doesn't open, remove the shaders folder from the Roblox directory or update the injector to the latest version compatible with the <strong>Hyperion</strong> anti-cheat system.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/roblox-fix-erro-conexao",
            title: "Connection Errors",
            description: "Solve HTTP and login errors."
        },
        {
            href: "/guides/atualizacao-drivers-video",
            title: "Update Drivers",
            description: "Ensure your GPU supports the Roblox engine."
        },
        {
            href: "/guides/como-limpar-cache-dns-ip-flushdns",
            title: "Clear DNS Cache",
            description: "Resolve hidden network issues."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

