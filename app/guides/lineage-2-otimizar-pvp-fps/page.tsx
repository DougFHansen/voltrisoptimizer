import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'lineage-2-otimizar-pvp-fps',
  title: "Lineage 2: How to Increase FPS in PVP and Cities (2026)",
  description: "Suffering from 10 FPS in Lineage 2 cities? Learn how to optimize L2's old engine to run smoothly in Mass PVPs and Castle Sieges.",
  category: 'optimization',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "Lineage 2: How to Increase FPS in PVP and Cities (2026)";
const description = "Suffering from 10 FPS in Lineage 2 cities? Learn how to optimize L2's old engine to run smoothly in Mass PVPs and Castle Sieges.";
const keywords = [
    'lineage 2 increase fps pvp tutorial 2026',
    'how to reduce lag lineage 2 interlude high five',
    'lineage 2 engine optimization modern pc fix',
    'improve l2 performance mass pvp castle siege',
    'clean unnecessary files lineage 2 folder'
];

export const metadata: Metadata = createGuideMetadata('lineage-2-otimizar-pvp-fps', title, description, keywords);

export default function L2OtimizacaoGuide() {
    const summaryTable = [
        { label: "Graphic Engine", value: "Unreal Engine 2.5 (Highly CPU-bound)" },
        { label: "Solution #1", value: "Disable Names and Titles (Alt + L)" },
        { label: "Solution #2", value: "Cache Adjustment in L2.ini" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "The challenge of running a 2003 engine in 2026",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **Lineage 2** was built on a modified version of Unreal Engine 2.5. The biggest problem with this graphic engine is that it doesn't know how to use multiple processor cores or the power of modern graphics cards. In 2026, even with a high-end CPU, you will have FPS drops in crowded cities like Giran or Aden if you don't make the correct adjustments to the game files.
        </p>
      `
        },
        {
            title: "1. Interface Cleanup in Mass PVP",
            content: `
        <p class="mb-4 text-gray-300">What weighs most in L2 isn't the 3D models, but the text on the screen:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Alt + L:</strong> Hides player and NPC names. In a castle siege, this can double your FPS instantly.</li>
            <li><strong>Lower Detail:</strong> In the options menu, load the 'Minimum' for terrain textures. L2's geometry is what causes the "freeze" (stuttering) when rotating the camera.</li>
            <li><strong>PC Limit:</strong> Adjust the <i>PC Limit</i> slider to the minimum in crowded areas. The game will stop rendering distant characters that you don't need to see.</li>
        </ul >
      `
        },
        {
            title: "2. L2.ini File Optimization",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Memory Adjustment:</h4>
            <p class="text-sm text-gray-300">
                L2 comes factory-configured to use only 32MB of cache, which is ridiculous for 2026. <br/><br/>
                Using an <code>.ini</code> file editor (L2 decoder), search for <strong>CacheSizeMegs</strong>. Change it from 32 to 256 or 512. This will drastically reduce those 1-second "stutters" that happen when you run across the map and the game tries to load new assets.
            </p>
        </div>
      `
        },
        {
            title: "3. Process Priority and SSD",
            content: `
        <p class="mb-4 text-gray-300">
            Lineage 2 reads files constantly. 
            <br/><br/><strong>Tip:</strong> It is mandatory for the game to be on an <strong>NVMe SSD</strong>. On mechanical HDs, the seek time for files in the <code>StaticMeshes</code> folder is too slow, resulting in invisible characters for several seconds after teleports. Additionally, set the priority of <code>l2.exe</code> to 'Realtime' or 'High' in the Task Manager.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/mu-online-reduzir-lag-muvoltris",
            title: "Mu Online Fix",
            description: "Tips for other classic MMORPGs."
        },
        {
            href: "/guides/reduzir-ping-jogos-online",
            title: "Reduce Ping",
            description: "Improve skill response time."
        },
        {
            href: "/guides/otimizacao-performance",
            title: "CPU Performance",
            description: "Adjust Windows for single-core games."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

