import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'starfield-otimizacao-dlss-mods',
    title: "Starfield (2026): Optimization, DLSS Mod, and Custom INI",
    description: "Starfield is demanding and CPU-intensive. Learn how to install the DLSS 3.5 Mod (if needed) and use custom INI files to run it on mid-range PCs.",
    category: 'games',
    difficulty: 'Advanced',
    time: '35 min'
};

const title = "Starfield Performance (2026): Exploring Space at 60 FPS";
const description = "Creation Engine 2 is hungry for memory bandwidth and CPU power. Without an SSD, the game won't even run properly (audio desyncs). Let's optimize for smooth exploration.";

const keywords = [
    'starfield dlss frame generation mod free',
    'starfield performance boost ini file',
    'starfield audio desync ssd fix',
    'best graphics settings starfield',
    'crowd density starfield fps',
    'shadow quality medium vs high',
    'fsr 3 starfield settings',
    'inventory lag starfield fix',
    'voltris optimizer bethesda',
    'starfield with native dlss'
];

export const metadata: Metadata = createGuideMetadata('starfield-otimizacao-dlss-mods', title, description, keywords);

export default function StarfieldGuide() {
    const summaryTable = [
        { label: "Upscaling", value: "DLSS / FSR 3" },
        { label: "Shadows", value: "Medium" },
        { label: "Volumetric", value: "Low" },
        { label: "Crowd", value: "Low (Cities)" },
        { label: "Motion Blur", value: "Off" },
        { label: "VRS", value: "On" },
        { label: "Install", value: "SSD (Required)" }
    ];

    const contentSections = [
        {
            title: "Introduction: CPU Bound",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Unlike Cyberpunk, Starfield is limited by CPU and RAM speed in most cases (cities like New Atlantis and Akila). Having a strong GPU doesn't guarantee 60 FPS if your RAM is slow.
        </p>
      `
        },
        {
            title: "Chapter 1: Custom INI (StarfieldCustom.ini)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">How to Create</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Go to <code>Documents\\My Games\\Starfield</code>.
                    <br/>Create a text file named <code>StarfieldCustom.ini</code>.
                    <br/>Add essential commands to disable blurry TAA or adjust FOV:
                    <br/><code>[Display]</code>
                    <br/><code>fDefaultFOV=100</code> (The default is too narrow, causing motion sickness).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Demanding Graphics Settings",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Shadow Quality:</strong> Medium. (High processes shadows for every pebble on the ground, killing the CPU).
            - <strong>Volumetric Lighting:</strong> Low. The light entering the ship is beautiful but very heavy.
            - <strong>Crowd Density:</strong> Low. Reduces the number of "unnamed" citizens walking in New Atlantis. Essential for maintaining FPS in the city.
            - <strong>GTAO (Ambient Occlusion):</strong> Medium.
        </p>
      `
        },
        {
            title: "Chapter 3: DLSS and FSR 3 (Frame Generation)",
            content: `
        <p class="mb-4 text-gray-300">
            Bethesda added native support for DLSS and FSR 3 after launch.
            <br/>- <strong>Render Resolution:</strong> Set to 67% (Quality) or 58% (Balanced). 100% is not worth it.
            - <strong>Frame Generation:</strong> Enable if you have a compatible GPU. Starfield is a slow-paced game (RPG), so the extra input lag from Frame Gen isn't as bothersome as in competitive shooters.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Performance Mods (1K Textures)",
            content: `
        <p class="mb-4 text-gray-300">
            If you have less than 8GB of VRAM:
            <br/>Download the <strong>"Starfield Optimized Textures"</strong> mod (1K or 2K).
            <br/>The original game textures are unoptimized 4K files. Using re-compressed 2K versions saves VRAM and reduces stutters without noticeable visual loss.
        </p>
      `
        },
        {
            title: "Chapter 5: SSD (Minimum Requirement)",
            content: `
        <p class="mb-4 text-gray-300">
            If the game freezes for 2 seconds every time you shoot or the audio desyncs with lip movements:
            <br/>You installed it on an HDD.
            <br/><strong>Only Solution:</strong> Move it to an SSD. There is no software fix for mechanical HDDs in this game. The engine requires instant streaming.
        </p>
      `
        },
        {
            title: "Chapter 6: VRS (Variable Rate Shading)",
            content: `
        <p class="mb-4 text-gray-300">
            Keep <strong>VRS</strong> turned ON.
            <br/>It reduces shading quality on the dark edges of the screen where you aren't looking. It's a "free" performance boost.
        </p>
      `
        },
        {
            title: "Chapter 7: Driver Updates (Starfield Ready)",
            content: `
            <p class="mb-4 text-gray-300">
                Nvidia and Intel (Arc) released specific drivers that give a +20% performance boost in Starfield.
                <br/>If you haven't updated your drivers in 6 months, do it NOW. The difference for this specific game is massive.
            </p>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Slow Inventory (Menu Lag)",
            content: `
            <p class="mb-4 text-gray-300">
                If the weapon menu lags when opening:
                <br/>It's because you have thousands of items (Resources).
                <br/>Sell the excess or store it in the Lodge chest (the infinite chest). Carrying 5000kg of iron in your personal inventory forces the CPU to recalculate weight for every menu frame.
            </p>
            `
        },
        {
            title: "Chapter 9: Space Navigation",
            content: `
            <p class="mb-4 text-gray-300">
                In space (ship combat), performance is always better than on planets.
                <br/>You could increase graphics to High while in space, but you'll have to lower them when landing. Keep them at Medium for consistency.
            </p>
            `
        },
        {
            title: "Chapter 10: FPS Limit (Cap)",
            content: `
            <p class="mb-4 text-gray-300">
                The engine becomes unstable above 120 FPS (object physics calculations).
                <br/>Limit your FPS to 60, 90, or 120 in the Nvidia/AMD panel. Don't leave it Uncapped.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does it work on a GTX 1650?",
            answer: "With FSR in Performance mode and Low settings, you can get a stable 30 FPS. In New Atlantis, it might drop to 20. 'Potato Graphics' mods can help."
        },
        {
            question: "Are the loading screens long?",
            answer: "They are frequent. Starfield is not seamless. Having an NVMe SSD reduces loading from 10s to 2s, making the experience tolerable."
        },
        {
            question: "Achievements with Mods?",
            answer: "Using console commands or mods disables achievements. Install the 'Achievement Enabler' mod (requires SFSE) to re-enable them if you care about that."
        }
    ];

    const externalReferences = [
        { name: "Nexus Mods Starfield", url: "https://www.nexusmods.com/starfield" },
        { name: "Starfield Script Extender (SFSE)", url: "https://www.nexusmods.com/starfield/mods/106" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD",
            description: "Mandatory."
        },
        {
            href: "/guides/bios-otimizacao-xmp-tpm",
            title: "BIOS",
            description: "Fast RAM helps the CPU."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia",
            description: "Cap FPS."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="35 min"
            difficultyLevel="Advanced"
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

