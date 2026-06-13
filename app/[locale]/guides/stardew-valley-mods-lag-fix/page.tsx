import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'stardew-valley-mods-lag-fix',
  title: "Stardew Valley with Lag? How to Optimize Mods and SMAPI (2026)",
  description: "Does your Stardew Valley take forever to open or stutter with many mods? Learn how to optimize SMAPI and video settings for a lag-free farm.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '20 min'
};

const title = "Stardew Valley with Lag? How to Optimize Mods and SMAPI (2026)";
const description = "Does your Stardew Valley take forever to open or stutter with many mods? Learn how to optimize SMAPI and video settings for a lag-free farm.";
const keywords = [
    'stardew valley lag fix mods 2026',
    'how to speed up smapi loading stardew valley',
    'stardew valley stuttering on pc with many mods fix',
    'optimize performance stardew valley 1.6 modded',
    'smapi consuming too much memory how to fix'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('stardew-valley-mods-lag-fix', title, description, keywords, locale);
}

export default function StardewLagGuide() {
    const summaryTable = [
        { label: "Check #1", value: "Adjust Mod: SpriteMaster (Reduces draw lag)" },
        { label: "Check #2", value: "Disable automatic 'Zoom Level'" },
        { label: "Highlight", value: "Update to 64-bit Java version" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Why does Stardew Valley stutter?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Stardew Valley is a lightweight game, but the **SMAPI** engine (required to run mods) can get extremely heavy if you have more than 50 mods installed. The game tries to load all modified textures into memory all at once. In 2026, with version 1.6 and beyond, memory management has become the main culprit for stutters when saving the day.
        </p>
      `
        },
        {
            title: "1. SpriteMaster: The Mod that saves your FPS",
            content: `
        <p class="mb-4 text-gray-300">If you play with mods, **SpriteMaster** is mandatory for two reasons:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Resampling:</strong> It improves the look of pixels without adding weight.</li>
            <li><strong>Memory Optimization:</strong> It rewrites the way the game loads images, reducing initial loading time by up to 70%.</li>
            <li><strong>Tip:</strong> If you don't like the "smoothing" effect on graphics, you can disable the visuals and keep only the code optimizations in the mod settings.</li>
        </ul >
      `
        },
        {
            title: "2. Fixing Lag in Windowed Mode",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Video Tip:</h4>
            <p class="text-sm text-gray-300">
                Stardew Valley has a known bug on Windows 10/11 where FPS drops by half if you use 'Borderless Window' mode. Switch to real <strong>'Fullscreen'</strong> mode in the game's video options to ensure your graphics card focuses 100% on the pixel art.
            </p>
        </div>
      `
        },
        {
            title: "3. SMAPI Console Optimization",
            content: `
        <p class="mb-4 text-gray-300">
            Every time you open the game, the SMAPI console (black window) shows lots of text. If there are many errors in red, the game will stutter trying to load broken mods. 
            <br/>Go to the site <strong>smapi.io/log</strong>, paste your log, and see which mods need updating. Keeping SMAPI clean of errors is the most effective way to prevent the game from closing on its own in the middle of a festival.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/genshin-impact-stuttering-fix-pc",
            title: "Genshin Stuttering",
            description: "Performance tips for Unity games."
        },
        {
            href: "/guides/otimizacao-performance",
            title: "Optimize PC",
            description: "Prepare Windows to run modded games."
        },
        {
            href: "/guides/atualizacao-drivers-video",
            title: "Video Drivers",
            description: "Tune your GPU for better colors in pixel art."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

