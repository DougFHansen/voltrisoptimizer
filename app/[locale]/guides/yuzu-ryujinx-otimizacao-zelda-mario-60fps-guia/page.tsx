import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'yuzu-ryujinx-otimizacao-zelda-mario-60fps-guia',
    title: "Switch Emulators (2026): Optimized Yuzu/Ryujinx (60FPS)",
    description: "How to configure Switch emulators to run Zelda TOTK and Mario Wonder at 60FPS in 4K. Firmware, Keys, Mods and Graphics Settings guide.",
    category: 'emulation',
    difficulty: 'Advanced',
    time: '40 min'
};

const title = "Switch on PC: Yuzu vs Ryujinx (Definitive Guide)";
const description = "Want to play your Switch backups with improved graphics? Learn which emulator to use for each game and how to install performance mods.";

const keywords = [
    'best yuzu configuration zelda tears of the kingdom 60fps',
    'ryujinx vs yuzu mario wonder',
    'how to install firmware and prod keys yuzu updated',
    'yuzu early access vs mainline',
    'totk dynamic fps mod install',
    'configure motion control yuzu',
    'voltris optimizer emulation',
    'shader cache stutter fix yuzu'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('yuzu-ryujinx-otimizacao-zelda-mario-60fps-guia', title, description, keywords, locale);
}

export default function YuzuGuide() {
    const summaryTable = [
        { label: "API", value: "Vulkan (Always)" },
        { label: "CPU", value: "Accuracy: Auto" },
        { label: "GPU", value: "High / Normal" },
        { label: "Resolution", value: "2x (1440p/4K)" },
        { label: "VSync", value: "Immediate (Off) / Mailbox" },
        { label: "Mods", value: "Ctrl + U (Unlock)" },
        { label: "Docked", value: "Yes (Better graphics)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The End of Yuzu and Ryujinx",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Note: The Yuzu project has been legally discontinued. Today we use forks like **Suyu** or **Sudachi**, or **Ryujinx** which remains active. The settings are similar.
        </p>
      `
        },
        {
            title: "Chapter 1: Initial Setup (Legally)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Firmware and Keys</h4>
                <p class="text-gray-400 text-xs text-justify">
                    For the emulator to work, you need to dump the <code>prod.keys</code> and the Firmware from your own unlocked Nintendo Switch.
                    <br/>Place the keys in the folder: <code>AppData/Roaming/Ryujinx/system</code>.
                    <br/>Install Firmware via menu: Tools > Install Firmware.
                    <br/>Without this, the emulator won't decrypt any game.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Best Graphics Settings",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Graphics API:</strong> Vulkan. (OpenGL is legacy and slow, use only if Vulkan bugs).
            - <strong>Resolution Scale:</strong> 2x (1440p/4K). Native Switch is 720p/1080p and looks ugly on a monitor. 2x makes it crisp without heavily taxing the CPU.
            - <strong>Anti-Aliasing:</strong> SMAA (better visuals) or FXAA (lighter).
            - <strong>ASTC Textures:</strong> Recompress BC3 (Saves VRAM on 4GB/6GB GPUs).
        </p>
      `
        },
        {
            title: "Chapter 3: CPU Settings",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Accuracy:</strong> Auto. Setting it to "Paranoid" or "High" kills performance with no visible gain in most games.
            - <strong>VSync:</strong> Mailbox (Ideal for G-Sync/FreeSync) or Immediate (Minimum latency, but with Tearing).
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Zelda TOTK (The Giant)",
            content: `
        <p class="mb-4 text-gray-300">
            To run TOTK smoothly:
            <br/>1. Use the <strong>"TotK Optimizer"</strong> mod. It configures everything by itself.
            <br/>2. Or install manually: <code>UltraCam</code>, <code>DynamicFPS</code> and <code>60fps Static</code>.
            <br/>Without mods, the game locks at 30fps (with drops to 20fps just like on console). With mods and a good PC, it runs at a solid 60fps.
        </p>
      `
        },
        {
            title: "Chapter 5: Mods (60FPS / Widescreen)",
            content: `
        <p class="mb-4 text-gray-300">
            Most Switch games are locked at 30fps.
            <br/>Right-click the game > Open Mods Directory.
            <br/>Download mods from the "HolographicWings" site or GitHub.
            <br/>"Disable Dynamic Resolution" mods are essential to keep the image sharp (the console lowers dynamic resolution when the action gets heavy).
        </p>
      `
        },
        {
            title: "Chapter 6: Shader Cache (Pipeline)",
            content: `
        <p class="mb-4 text-gray-300">
            The first time you play, the emulator compiles shaders. This causes microstuttering.
            <br/>The second time, it's smooth.
            <br/>Enable "Vulkan Pipeline Cache" and "Asynchronous Shader Building" (This reduces stutters but may cause momentary visual glitches).
        </p>
      `
        },
        {
            title: "Chapter 7: Motion Controls (Gyroscope)",
            content: `
        <p class="mb-4 text-gray-300">
            Essential for Zelda puzzles.
            <br/>Official PS4/PS5 controllers and Switch Pro have native gyroscope.
            <br/>In Ryujinx/Yuzu, configure Input and enable "Motion". Shake the controller to test.
            <br/>If using an Xbox controller (no gyro), map a button to simulate the movement or use "No Motion Puzzles" mods.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Ryujinx vs Yuzu/Suyu",
            content: `
            <p class="mb-4 text-gray-300">
                - <strong>Ryujinx:</strong> More accurate, runs games on release (no hacks), but is slightly heavier. Supports Mac M1/M2 incredibly well.
                - <strong>Yuzu (Suyu/Sudachi):</strong> Faster on weak PCs (Speed Hacks), but less accurate.
                <br/>Keep both installed. If a game bugs out on one, test it on the other.
            </p>
            `
        },
        {
            title: "Chapter 9: Online (LDN / Multiplayer)",
            content: `
            <p class="mb-4 text-gray-300">
                Ryujinx has LDN mode (Local Wireless via Internet).
                <br/>You can play Monster Hunter or Mario Kart with friends who also use the emulator, as if you were in the same room (LAN). It does not connect to official Nintendo servers (which would yield an instant Ban).
            </p>
            `
        },
        {
            title: "Chapter 10: Amiibo",
            content: `
            <p class="mb-4 text-gray-300">
                Emulators support virtual Amiibo.
                <br/>Just download the Amiibo .bin files from the internet and load them when the game asks (Menu Actions > Scan Amiibo). Gain exclusive loot in Zelda.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Do I need a NASA PC?",
            answer: "No. CPU is more important than GPU. A 12th gen i5 or Ryzen 5 5600 runs almost everything. A GTX 1060 graphics card is enough for 1080p."
        },
        {
            question: "Game quits on its own (Crash)?",
            answer: "Usually lack of RAM (Paging File) or Mods incompatible with the game's Update version (e.g. Mod 1.1.0 on Game 1.2.0)."
        }
    ];

    const externalReferences = [
        { name: "Ryujinx Official", url: "https://ryujinx.org/" },
        { name: "TotK Optimizer", url: "https://github.com/MaxLastBreath/TOTK-mods" }
    ];

    const relatedGuides = [
        {
            href: "/guides/memoria-virtual-pagefile-ssd-otimizacao",
            title: "Pagefile",
            description: "Avoid crash in Zelda."
        },
        {
            href: "/guides/controle-ps4-ps5-overclock-ds4windows",
            title: "Controller",
            description: "Configure Motion."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="40 min"
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

