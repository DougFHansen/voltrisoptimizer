import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'the-witcher-3-next-gen-otimizacao-ray-tracing',
    title: "The Witcher 3 Next-Gen (2026): DX11 vs DX12, Ray Tracing, and Mods",
    description: "The Next-Gen update made the game significantly heavier. Learn how to run it with Ray Tracing enabled or play the classic DX11 version for maximum performance.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '25 min'
};

const title = "The Witcher 3 Next-Gen (2026): Geralt in 4K 60FPS";
const description = "The 4.0 update brought beautiful graphics but poor optimization. The secret lies in choosing between the beauty of RT or the fluidity of classic DX11.";

const keywords = [
    'the witcher 3 next gen crashing dx12 fix',
    'ray tracing the witcher 3 performance settings',
    'hairworks on vs off fps impact',
    'hd reworked project next gen compatible',
    'essential mods the witcher 3 2026',
    'dlss 3 frame generation witcher 3',
    'how to roll back to classic version 1.32 witcher 3',
    'foliage visibility range ultra plus',
    'voltris optimizer cd projekt red',
    'reflex low latency witcher 3'
];

export const metadata: Metadata = createGuideMetadata('the-witcher-3-next-gen-otimizacao-ray-tracing', title, description, keywords);

export default function Witcher3Guide() {
    const summaryTable = [
        { label: "API", value: "DX12 (For RT)" },
        { label: "API", value: "DX11 (Performance)" },
        { label: "Ray Tracing", value: "GI (Global Illum)" },
        { label: "HairWorks", value: "Geralt Only (Low)" },
        { label: "Foliage", value: "High (Ultra+ is heavy)" },
        { label: "Shadows", value: "Low / Medium" },
        { label: "DLSS/FSR", value: "Quality" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Weight of the Next Gen",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          CD Projekt RED added Ray Traced Global Illumination (RTGI), which completely transforms the game's lighting but costs about 40 FPS. If you don't have an RTX 3080/4070, be careful.
        </p>
      `
        },
        {
            title: "Chapter 1: DX11 vs DX12",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Launcher Options</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>DX12:</strong> Required for Ray Tracing, DLSS, and FSR. Has slightly more stuttering during shader compilation.
                    <br/>- <strong>DX11:</strong> "Classic" version. Much lighter, but lacks DLSS/FSR (TAA only). Use this if you have a GTX 1060 or lower.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Optimized Ray Tracing",
            content: `
        <p class="mb-4 text-gray-300">
            If you enable RT, turn on ONLY <strong>Ray Traced Global Illumination</strong> (Performance Mode).
            <br/>Disable RT Shadows, RT Reflections, and RT Ambient Occlusion. The GI already makes 90% of the visual difference in forests and interiors.
            <br/>Always use it with DLSS Quality or Balanced.
        </p>
      `
        },
        {
            title: "Chapter 3: HairWorks (Geralt's Hair)",
            content: `
        <p class="mb-4 text-gray-300">
            HairWorks technology simulates individual strands of hair.
            <br/>- <strong>Geralt Only:</strong> The best compromise. Geralt's hair looks great, and you won't waste GPU power rendering the fur of wolves and bears that you don't even see clearly in combat.
            <br/>- <strong>AA HairWorks:</strong> 2x or 4x. 8x is unnecessary.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Ultra+ Settings (New Feature)",
            content: `
        <p class="mb-4 text-gray-300">
            The Next-Gen version added "Ultra+" presets.
            <br/>- <strong>Foliage Visibility Range:</strong> High is enough. Ultra+ renders trees to the infinite horizon, killing performance.
            - <strong>Grass Density:</strong> High. Ultra+ makes the grass so dense it hides items on the ground.
        </p>
      `
        },
        {
            title: "Chapter 5: Essential Mods (Already Included?)",
            content: `
        <p class="mb-4 text-gray-300">
            The Next-Gen update already integrated the famous <strong>"HD Reworked Project"</strong> (4K textures). Do not install this mod manually as it will cause conflicts.
            <br/>Recommended mods to install:
            <br/>- <strong>"Fast Travel from Anywhere":</strong> Travel without needing to go to a signpost.
            <br/>- <strong>"Auto Apply Oils":</strong> The game automatically applies the correct oil to your sword when entering combat. Saves menu time.
        </p>
      `
        },
        {
            title: "Chapter 6: Frame Generation (DLSS 3)",
            content: `
        <p class="mb-4 text-gray-300">
            Witcher 3 supports DLSS 3 Frame Gen.
            <br/>This is magic for playing with RT enabled. It can turn 40 FPS into 70 FPS.
            <br/>Input lag increases slightly, but since it's a sword-fighting game with long animations, it doesn't hurt the experience much.
        </p>
      `
        },
        {
            title: "Chapter 7: DX12 Stutter Fix",
            content: `
        <p class="mb-4 text-gray-300">
            Go to the game folder: <code>bin\\config\\base</code>.
            <br/>Open <code>rendering.ini</code>.
            <br/>Change <code>TextureStreamingHeads</code> from 1 to 0.
            <br/>Change <code>TextureStreamingDistanceLimit</code> to a high value (e.g., 40000).
            <br/>This reduces texture pop-in and stutters.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Close Camera",
            content: `
            <p class="mb-4 text-gray-300">
                The Next-Gen mode brings an over-the-shoulder camera (God of War style).
                <br/>In Gameplay Options, you can configure it separately:
                <br/>- Exploration: Far Camera (Default).
                <br/>- Combat: Far Camera (To see enemies at your back).
                <br/>- Mounting: Close Camera (Immersive).
            </p>
            `
        },
        {
            title: "Chapter 9: Cross-Progression",
            content: `
            <p class="mb-4 text-gray-300">
                Log into your GOG account in the main menu.
                <br/>This enables Cross-Save. You can play on PC, save, and continue on a Nintendo Switch or PS5 (if you own the game there) exactly where you left off.
            </p>
            `
        },
        {
            title: "Chapter 10: FPS Limit in Menus",
            content: `
            <p class="mb-4 text-gray-300">
                The Witcher 3 inventory doesn't have an FPS limit and can hit 500 FPS, heating up the GPU.
                <br/>Use the Nvidia Control Panel to limit the global FPS for the <code>witcher3.exe</code> executable.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "How do I roll back to version 1.32 (Old)?",
            answer: "On Steam > Properties > Betas > Select 'classic - 1.32'. This downloads the old 2015 version, which runs much lighter on low-end PCs and is compatible with old mods."
        },
        {
            question: "Crash during cutscenes?",
            answer: "Disable Nvidia HairWorks. Some cutscenes glitch when HairWorks tries to render hair at extreme zoom levels."
        },
        {
            question: "What's the best Sign to level up?",
            answer: "Quen (Shield). In Death March mode, it's the only one that saves you from being one-shot."
        }
    ];

    const externalReferences = [
        { name: "The Witcher 3 Nexus Mods", url: "https://www.nexusmods.com/witcher3" },
        { name: "HD Reworked Project (Info)", url: "https://www.nexusmods.com/witcher3/mods/1021" }
    ];

    const relatedGuides = [
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia",
            description: "DSR for 4K."
        },
        {
            href: "/guides/hdr-windows-11-calibracao-jogos",
            title: "HDR",
            description: "Looks beautiful in Toussaint."
        },
        {
            href: "/guides/controle-ps4-ps5-overclock-ds4windows",
            title: "Controller",
            description: "Fluid gameplay."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="25 min"
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

