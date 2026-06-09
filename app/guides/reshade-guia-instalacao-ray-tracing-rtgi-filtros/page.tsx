import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'reshade-guia-instalacao-ray-tracing-rtgi-filtros',
    title: "ReShade (2026): Ray Tracing in Any Game (RTGI Guide)",
    description: "Transform old games with modern graphics. Complete guide to ReShade installation, Ray Tracing presets (RTGI), color correction, and sharpness filters.",
    category: 'software',
    difficulty: 'Intermediate',
    time: '20 min'
};

const title = "ReShade Masterclass: Remaster Your Games";
const description = "ReShade is a post-processing injection tool. You can add Ambient Occlusion, Anti-Aliasing, and even Ray Tracing to games from 2010 like GTA V or Skyrim.";

const keywords = [
    'reshade ray tracing rtgi shader marty mcfly download',
    'how to install reshade roblox sims 4',
    'best reshade presets cyberpunk 2077',
    'reshade fps drop fix performance',
    'cas sharpening vs luma sharpen',
    'voltris optimizer graphics',
    'depth buffer access fix'
];

export const metadata: Metadata = createGuideMetadata('reshade-guia-instalacao-ray-tracing-rtgi-filtros', title, description, keywords);

export default function ReShadeGuide() {
    const summaryTable = [
        { label: "Tool", value: "ReShade 6.0+" },
        { label: "Add-on", value: "Full Add-on Support (Opt)" },
        { label: "RT Shader", value: "RTGI (Pascal Gilcher)" },
        { label: "Sharpening", value: "AMD FidelityFX CAS" },
        { label: "Color Shader", value: "LUT / Vibrance" },
        { label: "FPS Cost", value: "Low (Color) / High (RT)" },
        { label: "Online Play", value: "Ban Risk (Use Caution)" }
    ];

    const contentSections = [
        {
            title: "Introduction: What is Post-Processing?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Imagine applying Instagram-like filters to your games in real-time. ReShade does exactly that, but with access to the game's Depth Buffer, enabling true 3D visual effects.
        </p>
      `
        },
        {
            title: "Chapter 1: Correct Installation",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Step-by-Step</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Download from the official site (use the version with Add-on support for offline games; the standard version for online).
                    2. Select the game's main executable.
                    3. Select the API (DX9, DX11, Vulkan). The installer usually detects this accurately.
                    4. Effect Packages: Check \"Standard Effects,\" \"SweetFX,\" and \"qUINT.\"
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Ray Tracing (RTGI)",
            content: `
        <p class="mb-4 text-gray-300">
            The <strong>RTGI</strong> (Ray Traced Global Illumination) shader by Pascal Gilcher (\"Marty McFly\") simulates light bouncing off objects in the scene.
            <br/>It is a paid shader (hosted on Patreon), but older beta versions are available for free.
            <br/>To function correctly, you must configure the \"Add-ons\" > \"Depth3D\" tab to align the Depth Buffer. If the screen appears white or is detected incorrectly, the Ray Tracing effect will not work.
        </p>
      `
        },
        {
            title: "Chapter 3: Essential (Lightweight) Filters",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>CAS (Contrast Adaptive Sharpening):</strong> Effectively removes the blur introduced by TAA, making the image crystal clear for a minimal 1 FPS cost.
            - <strong>Vibrance:</strong> Increases color saturation intelligently without over-saturating skin tones.
            - <strong>Curves / Levels:</strong> Fixes the \"washed-out black\" look common in older titles by correcting contrast.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: SSR (Screen Space Reflections)",
            content: `
        <p class="mb-4 text-gray-300">
            The <strong>SSR</strong> shader from the qUINT package adds floor reflections (e.g., wet pavement) to games that lack them natively, such as GTA San Andreas.
            <br/>Note: It requires fine-tuning to ensure the sky doesn't reflect on dry asphalt textures.
        </p>
      `
        },
        {
            title: "Chapter 5: MXAO (Ambient Occlusion)",
            content: `
        <p class="mb-4 text-gray-300">
            Adds realistic shadows to corners and object junctions, providing weight and depth to the scene. Essential for older games like The Sims 3 or Fallout: New Vegas.
            <br/>Cost: Medium (approx. 5-10 FPS).
        </p>
      `
        },
        {
            title: "Chapter 6: Cinematic Depth of Field",
            content: `
        <p class="mb-4 text-gray-300">
            Cinematic DOF focuses on the player character and blurs the background, mimicking a movie camera.
            <br/>While it is excellent for taking screenshots (Virtual Photography), it is detrimental for gameplay as it hides enemies. We recommend setting a Hotkey to toggle it.
        </p>
      `
        },
        {
            title: "Chapter 7: Performance Mode",
            content: `
        <p class="mb-4 text-gray-300">
            After completing your configuration, check the <strong>\"Performance Mode\"</strong> box on the Home tab.
            <br/>This \"cooks\" the shaders, preventing further editing of variables but yielding a significant FPS gain. Never play with Performance Mode disabled.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Online Games and Anti-Cheat",
            content: `
            <p class="mb-4 text-gray-300">
                Games like CS2, Valorant, and Rainbow Six Siege BLOCK ReShade. 
                <br/>FFXIV and The Sims 4 generally allow it.
                <br/>For competitive games, use \"NVIDIA Game Filters\" (Alt+F3), which is essentially an official ReShade authorized via your drivers.
            </p>
            `
        },
        {
            title: "Chapter 9: Using Presets",
            content: `
            <p class="mb-4 text-gray-300">
                You don't have to start from scratch.
                <br/>Visit \"Nexus Mods\" or the \"SweetFX Database\" and download a preset (.ini file) for your specific game.
                <br/>Place it in the game folder and select it from the ReShade menu.
            </p>
            `
        },
        {
            title: "Chapter 10: Uninstallation",
            content: `
            <p class="mb-4 text-gray-300">
                To remove ReShade, simply delete the <code>dxgi.dll</code> (or d3d11.dll) file and the <code>reshade-shaders</code> folder from your game's directory.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does it work in emulators?",
            answer: "Yes! Using ReShade in Cemu (Breath of the Wild) or PCSX2 works wonders. Install it in the emulator's executable folder."
        },
        {
            question: "How much FPS will I lose?",
            answer: "It varies. Color filters (LUT, Sharpen) cost only 1-2 FPS. Advanced lighting effects (RTGI, MXAO) can consume 20-40% of your GPU's overhead."
        }
    ];

    const externalReferences = [
        { name: "Official ReShade Website", url: "https://reshade.me/" },
        { name: "Marty McFly Patreon (RTGI)", url: "https://www.patreon.com/mcflypg" }
    ];

    const relatedGuides = [
        {
            href: "/guides/lossless-scaling-frame-generation-fsr-guia",
            title: "Lossless Scaling",
            description: "Recover FPS lost to heavy shaders."
        },
        {
            href: "/guides/sims-4-mods-cc-lags-fix",
            title: "Sims 4 Mods",
            description: "Commonly used with ReShade."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}

