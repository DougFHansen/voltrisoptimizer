import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'minecraft-alocar-mais-ram',
  title: "How to Allocate more RAM to Minecraft (Official Launcher and TLauncher)",
  description: "Is your Minecraft stuttering or showing an 'Out of Memory' error? Learn how to allocate more RAM to the game and improve chunk loading in 2026.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "How to Allocate more RAM to Minecraft (Official Launcher and TLauncher)";
const description = "Is your Minecraft stuttering or showing an 'Out of Memory' error? Learn how to allocate more RAM to the game and improve chunk loading in 2026.";
const keywords = [
    'how to allocate more ram to minecraft 2026 tutorial',
    'increase ram minecraft official launcher step by step',
    'tlauncher how to allocate more ram tutorial 2026',
    'minecraft out of memory error how to fix windows 11',
    'java startup arguments minecraft fps boost'
];

export const metadata: Metadata = createGuideMetadata('minecraft-alocar-mais-ram', title, description, keywords);

export default function MinecraftRAMGuide() {
    const summaryTable = [
        { label: "Where to change", value: "JVM Arguments (Launcher)" },
        { label: "Recommended Value", value: "4GB to 8GB (Depends on Mods)" },
        { label: "Warning", value: "Never allocate more than 50% of your total RAM" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Why does Minecraft need RAM?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Unlike other games, **Minecraft** runs on Java. It creates a "virtual memory box" where it stores all information about blocks (chunks), entities, and mods. By default, Minecraft is set to use only 2GB of RAM. In 2026, with high-definition textures and heavy mods, 2GB is not enough even for the base game to load the map without stuttering.
        </p>
      `
        },
        {
            title: "1. In the Official Launcher (Minecraft Java Edition)",
            content: `
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Open the Launcher and go to the <strong>Installations</strong> tab.</li>
            <li>Hover over the version you play and click on the <strong>three dots (...) > Edit</strong>.</li>
            <li>Click on 'More Options' at the bottom.</li>
            <li>In the 'JVM Arguments' field, you will see something like <code>-Xmx2G</code>.</li>
            <li>Change the '2G' to the desired value. E.g.: <strong>-Xmx4G</strong> for 4GB or <strong>-Xmx8G</strong> for 8GB.</li>
            <li>Save and start the game.</li>
        </ol>
      `
        },
        {
            title: "2. In TLauncher (Alternative)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Simplicity:</h4>
            <p class="text-sm text-gray-300">
                1. Open TLauncher and click on the <strong>Gear (Settings)</strong> in the bottom right corner. <br/>
                2. In the sidebar, select 'Settings'. <br/>
                3. You will see a slider called <strong>'Memory Allocation'</strong>. <br/>
                4. Drag it to the desired value (e.g., 4096MB for 4GB). <br/>
                5. Click Save.
            </p>
        </div>
      `
        },
        {
            title: "3. The Overflow Error: Don't go overboard!",
            content: `
        <p class="mb-4 text-gray-300">
            Many players think: "If I have 16GB, I'll give 14GB to Minecraft". 
            <br/><br/><strong>Don't do that!</strong> If you allocate too much RAM, Windows and Java itself (through the <i>Garbage Collector</i>) will have trouble managing data cleanup, which causes massive stutters (1-second lags) every 2 minutes. The ideal for 2026 is to keep between 4GB and 6GB for the base game, going up to 8GB only for giant modpacks with hundreds of mods.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/minecraft-lento-como-ganhar-fps",
            title: "Minecraft Slow",
            description: "FPS tips beyond RAM memory."
        },
        {
            href: "/guides/minecraft-aumentar-fps-fabric-sodium",
            title: "Fabric + Sodium",
            description: "The definitive performance combo in 2026."
        },
        {
            href: "/guides/limpar-memoria-ram-windows",
            title: "Clear RAM",
            description: "Free up space before opening Minecraft."
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

