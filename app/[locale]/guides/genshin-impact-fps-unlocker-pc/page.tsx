import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'genshin-impact-fps-unlocker-pc',
    title: "Genshin Impact (2026): 120 FPS Unlock, Filters, and Optimization",
    description: "Genshin Impact is locked to 60 FPS on PC by default. Learn how to safely unlock it to 120 FPS, reduce Unity Engine stuttering, and enhance visual colors.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '40 min'
};

const title = "Genshin Impact Ultra (2026): 120 FPS and Vibrant Visuals";
const description = "The game is visually stunning, but the 60 FPS cap on PC feels restrictive (especially when iOS features 120 FPS). Here is how to break the limit and optimize texture streaming.";

const keywords = [
    'genshin impact fps unlocker safe download 2026',
    'how to play genshin impact at 120 fps on pc',
    'fix genshin impact stuttering and lag guide',
    'genshin impact render resolution 0.8 optimization',
    'best nvidia filters for genshin impact colors',
    'disable volumetric fog genshin impact performance',
    'best graphics settings for genshin impact pc',
    'honkai star rail 120 fps unlocker guide',
    'high process priority genshin impact voltris',
    'genshin impact shadow quality performance impact'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('genshin-impact-fps-unlocker-pc', title, description, keywords, locale);
}

export default function GenshinGuide() {
    const summaryTable = [
        { label: "FPS Unlock", value: "Verified Tool (120/144)" },
        { label: "Render Res", value: "1.0 or 0.8" },
        { label: "Shadows", value: "Medium" },
        { label: "Volumetric", value: "Off/Low" },
        { label: "Reflections", value: "Off" },
        { label: "Motion Blur", value: "Off" },
        { label: "Bloom", value: "On (Aesthetic)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Controversial 60 FPS Cap",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          HoYoverse enabled 120 FPS support for Apple devices, yet years later, the PC version remains officially capped at 60 FPS. Fortunately, the community developed an Unlocker that modifies the game's memory state to allow for full refresh rate fluidity.
        </p>
         <div class="bg-[#0A0A0F] border border-yellow-500/30 p-5 rounded-xl my-6">
            <h4 class="text-yellow-400 font-bold mb-2">A Note on Anti-Cheat and Bans</h4>
            <p class="text-gray-300 text-sm">
                The use of an FPS Unlocker (such as 3dmigoto or the popular GitHub launcher) has been tolerated for years. There are no confirmed reports of mass bans solely for unlocking the frame rate. However, use it at your own risk. Never combine these tools with skin mods or active cheats.
            </p>
        </div>
      `
        },
        {
            title: "Chapter 1: Native Graphics Settings (Vanilla)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Render Resolution</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">1.0 (Native)</span></p>
                <p class="text-gray-400 text-xs">If your PC is struggling, lower this to 0.8. It is far superior to lowering your overall monitor resolution. Avoid 0.6 as it makes the game excessively blurry.</p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Volumetric Fog</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-red-400">Off/Low</span></p>
                <p class="text-gray-400 text-xs">
                   Fog effects in regions like Inazuma or Dragonspine are heavily taxing. Disabling them makes the world appear sharper and significantly improves stability.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">SFX Quality</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-yellow-400">Low/Medium</span></p>
                <p class="text-gray-400 text-xs">
                    During intense combat (Spiral Abyss), multiple simultaneous Ultimates (e.g., Kazuha + Neuvillette) can cause frame drops. Low keeps the action smooth.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: FPS Unlocker (Safe Implementation)",
            content: `
        <ol class="list-decimal list-inside text-gray-300 text-sm space-y-2">
            <li>Search GitHub for <strong>\"Genshin Impact FPS Unlocker\"</strong> (look for the repository by user '34736384').</li>
            <li>Download the latest executable release.</li>
            <li>Run the Unlocker as Administrator.</li>
            <li>Point the tool to your <code>GenshinImpact.exe</code> (located in the game installation folder).</li>
            <li>Set your Target FPS to <strong>120</strong> or <strong>144</strong>.</li>
            <li>Click \"Start Game.\" The title will now boot with the 60 FPS cap removed.</li>
        </ol>
        <p class="mt-2 text-xs text-gray-400">
            Note: You must launch the game through the Unlocker tool each time to maintain the effect.
        </p>
      `
        },
        {
            title: "Chapter 3: NVIDIA Freestyle Filters",
            content: `
        <p class="mb-4 text-gray-300">
            By default, Genshin has a slightly gray/washed-out visual filter.
            <br/>If you have an NVIDIA GPU, press <strong>Alt+F3</strong> in-game.
            <br/>Apply the following filters:
            <br/>1. <strong>Details:</strong> Clarity +20%, Sharpen +10%.
            <br/>2. <strong>Color:</strong> Vibrance +20%, Tint 0%.
            <br/>This makes the world significantly more vibrant, mimicking a modern high-budget anime. It typically costs around 5 FPS.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Shadows and Reflections Tuning",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Shadow Quality:</strong> Medium (High is extremely taxing, while Low removes vital character shadow details).
            - <strong>Visual Effects:</strong> Medium.
            - <strong>Reflections:</strong> Off (Water reflections are not worth the massive performance hit on most hardware).
        </p>
      `
        },
        {
            title: "Chapter 5: Anti-Aliasing (SMAA vs. TAA)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>SMAA:</strong> Sharper image, but may result in some visible aliasing (jagged edges) during movement.
            - <strong>TAA:</strong> Removes almost all aliasing but can introduce a slight blur to the overall scene.
            <br/>Recommendation: Use <strong>SMAA</strong> for clarity or <strong>TAA</strong> if you highly dislike jagged edges.
        </p>
      `
        },
        {
            title: "Chapter 6: Crowd Density (NPC Management)",
            content: `
        <p class="mb-4 text-gray-300">
            In major cities like Fontaine and Sumeru, the number of active NPCs is high.
            <br/>Set Crowd Density to <strong>Low</strong>.
            <br/>This removes irrelevant background NPCs, relieving CPU stress in urban areas without affecting quest progress.
        </p>
      `
        },
        {
            title: "Chapter 7: Co-Op Effect Optimization",
            content: `
        <p class="mb-4 text-gray-300">
            \"Co-Op Teammate Effects\": If you play multiplayer frequently, set this to <strong>\"Partially Off.\"</strong>
            <br/>This reduces the opacity and complexity of your allies' skill effects, allowing you to actually see enemies amidst the visual clutter.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Honkai: Star Rail and ZZZ Support",
            content: `
            <p class="mb-4 text-gray-300">
                Similar Unlocker tools are available for Honkai: Star Rail and Zenless Zone Zero, as they share the same Unity Engine base and protection structure. The implementation process is virtually identical.
            </p>
            `
        },
        {
            title: "Chapter 9: The SSD Advantage for Teleportation",
            content: `
            <p class="mb-4 text-gray-300">
                Long loading screens between teleports?
                <br/>Genshin Impact strongly benefits from an SSD. On a traditional HDD, teleporting can take 30+ seconds. On a modern NVMe, it takes less than 3 seconds.
            </p>
            `
        },
        {
            title: "Chapter 10: Repairing Game Files",
            content: `
            <p class="mb-4 text-gray-300">
                If the game experiences frequent crashes:
                <br/>In the Launcher, click the \"Hamburger\" menu (three bars) next to the Play button > Repair Now.
                <br/>Genshin files are prone to corruption during large version updates.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can I be banned for using NVIDIA Filters?",
            answer: "No. NVIDIA Freestyle filters are officially supported by the driver and recognized as safe by HoYoverse. It is locally processed and 100% secure."
        },
        {
            question: "Will unlocking FPS cause my GPU to overheat?",
            answer: "It can if your cooling is inadequate. We recommend setting a target of 120 FPS. Setting it to \"Unlimited\" may push your GPU to 100% usage unnecessarily."
        },
        {
            question: "Does the PC version have the PS5's Global Illumination?",
            answer: "No. The PS5 features a unique volumetric cloud lighting system that is not currently available in the PC version's Ultra settings."
        }
    ];

    const externalReferences = [
        { name: "Genshin FPS Unlocker (GitHub)", url: "https://github.com/34736384/genshin-fps-unlock" },
        { name: "KeqingMains (Pro Theorycrafting)", url: "https://keqingmains.com/" },
        { name: "Genshin Impact Interactive Map", url: "https://genshin-impact-map.appsample.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Speed Guide",
            description: "Reducing loading times to the minimum."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "NVIDIA Control Panel",
            description: "Filters and DSR setup for high-end PCs."
        },
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "Hz Calibration",
            description: "Making the most of your 120+ Hz monitor."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="40 min"
            difficultyLevel="Intermediate"
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

