import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'terraria-tmodloader-64bit-fix',
  title: "tModLoader 64-bit: How to Run Terraria with Many Mods (2026)",
  description: "Does your Terraria crash due to lack of memory when using mods? Learn how to install and configure tModLoader 64-bit to use all your RAM in 2026.",
  category: 'games-fix',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "tModLoader 64-bit: How to Run Terraria with Many Mods (2026)";
const description = "Does your Terraria crash due to lack of memory when using mods? Learn how to install and configure tModLoader 64-bit to use all your RAM in 2026.";
const keywords = [
    'tmodloader 64 bit tutorial how to install 2026',
    'terraria tmodloader out of memory fix guide 2026',
    'how to allocate more ram to terraria tmodloader tutorial',
    'terraria mods memory error how to solve 2026',
    'download tmodloader 64 bit for terraria 1.3 and 1.4'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('terraria-tmodloader-64bit-fix', title, description, keywords, locale);
}

export default function TModLoaderGuide() {
    const summaryTable = [
        { label: "Current Version (1.4+)", value: "Native 64-bit (Steam)" },
        { label: "Legacy Version (1.3)", value: "Requires Third-Party Patch" },
        { label: "Benefit", value: "Use +4GB of RAM (Fixes Out of Memory)" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "The Memory Limit in Terraria",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **tModLoader** is the tool that transforms Terraria into an infinite experience. However, for years, version 1.3.5 was limited to 32-bit, which means the game could only use 4GB of RAM. If you installed giant mods like **Calamity** or **Thorium**, the game would crash with the 'Out of Memory' error. In 2026, we have two different situations depending on the version you play.
        </p>
      `
        },
        {
            title: "1. tModLoader on Steam (Version 1.4+)",
            content: `
        <p class="mb-4 text-gray-300">Good news for modern players:</p>
        <p class="text-sm text-gray-300">
            Unlike older versions, the tModLoader downloaded directly from Steam for Terraria 1.4 (Journey's End) is already **natively 64-bit**. You do not need to install external patches. If your game is still crashing, the problem is not the bit limit, but rather a lack of physical RAM in your PC. Make sure you have at least 8GB of total system RAM for a smooth experience with many heavy mods in 2026.
        </p>
      `
        },
        {
            title: "2. tModLoader 64-bit for Legacy (Version 1.3)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">For those using older mods:</h4>
            <p class="text-sm text-gray-300">
                If you still play version 1.3 to use mods that haven't been updated: <br/><br/>
                1. Look for 'tModLoader 64-bit' on GitHub (the tModLoader-64bit repository). <br/>
                2. Download the .zip file for the version corresponding to yours. <br/>
                3. Extract and replace the files in the Terraria installation folder. <br/>
                4. Run the <code>tModLoader64bit.exe</code> file. This will allow Terraria to use 100% of the available RAM on your PC, ending frame drops and crashes.
            </p>
        </div>
      `
        },
        {
            title: "3. Gameplay Optimization",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>2026 Tip:</strong> Even with the 64-bit version, many mods can cause conflicts. 
            <br/><br/>If your FPS is low, try disabling the <strong>'Overhaul'</strong> mod or reduce the lighting quality to 'Trippy' in the video settings. This takes the load off the processor, allowing the game to run smoothly even during boss invasions in Survival mode.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-performance",
            title: "Windows Optimization",
            description: "Increase FPS in 2D games."
        },
        {
            href: "/guides/limpar-memoria-ram-windows",
            title: "Clear RAM",
            description: "Free up memory for your mods."
        },
        {
            href: "/guides/minecraft-alocar-mais-ram",
            title: "Allocate RAM",
            description: "JVM tips applicable to other games."
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

