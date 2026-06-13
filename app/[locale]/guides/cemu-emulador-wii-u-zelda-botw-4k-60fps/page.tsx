import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'cemu-emulador-wii-u-zelda-botw-4k-60fps',
    title: "Cemu (2026): Zelda Breath of the Wild in 4K 60FPS (FPS++)",
    description: "The definitive Cemu 2.0 guide. How to install Graphics Packs, FPS++ mods, Vulkan shaders, and play online with Cemu accounts.",
    category: 'emulation',
    difficulty: 'Intermediate',
    time: '30 min'
};

const title = "Wii U Emulator: Cemu 2.0 Guide";
const description = "Cemu is an optimization miracle. It runs Breath of the Wild better than the Switch, with support for 4K, 60fps (or 144fps), Ultrawide, and Ray Tracing Mods (Reshade).";

const keywords = [
    'cemu 2.0 vulkan vs opengl performance',
    'zelda botw fps++ settings guide',
    'mario kart 8 cemu online multiplayer',
    'install update and dlc cemu mlc01',
    'xenoblade chronicles x 60fps fix cemu',
    'keys.txt cemu wii u title keys',
    'voltris optimizer nintendo',
    'reshade ray tracing zelda'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('cemu-emulador-wii-u-zelda-botw-4k-60fps', title, description, keywords, locale);
}

export default function CemuGuide() {
    const summaryTable = [
        { label: "Version", value: "Cemu 2.0 (Open Source)" },
        { label: "API", value: "Vulkan (Async Required)" },
        { label: "Essential Mod", value: "FPS++" },
        { label: "Resolution", value: "2K / 4K (Graphic Packs)" },
        { label: "Shaders", value: "Async Compile (Zero Stutter)" },
        { label: "Controller", value: "Wii U GamePad" },
        { label: "Online", value: "Yes (Requires console files)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Why Cemu and not Yuzu?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          For Breath of the Wild and Mario Kart 8, Cemu (Wii U) is SUPERIOR to Yuzu (Switch).
          <br/>Cemu is much lighter (runs on old i3 CPUs) and has "FPS++" mods that allow playing above 60fps without breaking the game physics. Yuzu struggles to maintain a stable 60fps.
        </p>
      `
        },
        {
            title: "Chapter 1: Basic Configuration and Keys",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Keys.txt</h4>
                <p class="text-gray-400 text-xs text-justify">
                    For Cemu to open encrypted games (.wud/.wux format), you need the <code>keys.txt</code> file in the emulator folder containing the keys for the games you own.
                    <br/>For uncompressed games (Loadiine / 'content' folder), you don't need keys. We recommend using the Loadiine format or installing updates/DLCs in NAND format.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Graphics Packs (The Magic)",
            content: `
        <p class="mb-4 text-gray-300">
            1. Options > Graphics Packs.
            <br/>2. Click on "Download latest community graphic packs".
            <br/>3. Open the game tab (e.g., Breath of the Wild).
            <br/>4. <strong>Mods > FPS++:</strong> Check everything. Set "FPS Limit" to 60 (or 144 if you have a high-refresh monitor). This fixes the game speed.
            <br/>5. <strong>Graphics:</strong> Resolution > Select 2560x1440 (2K) or 4K.
            <br/>6. <strong>Anti-Aliasing:</strong> Nvidia FXAA (Lighter) or None (if using 4K).
        </p>
      `
        },
        {
            title: "Chapter 3: Vulkan and Async Shaders",
            content: `
        <p class="mb-4 text-gray-300">
            Change the Graphics API to Vulkan in General Settings.
            <br/>Enable <strong>"Async Shader Compilation"</strong>.
            <br/>This eliminates 99% of micro-stuttering from shader loading. The game runs smoothly from the first minute. OpenGL used to compile shaders by freezing the screen. Vulkan compiles in the background, and you won't even notice.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Installing DLCs and Updates",
            content: `
        <p class="mb-4 text-gray-300">
            Cemu doesn't read loose DLCs in the folder. You need to install them to the virtual NAND.
            <br/>File > Install Game Title, Update or DLC.
            <br/>Select the <code>meta</code> folder inside the update you downloaded.
            <br/>Cemu copies the files to <code>mlc01/usr/title</code>.
            <br/>BotW requires Update v208 and DLC v80 for mods to work.
        </p>
      `
        },
        {
            title: "Chapter 5: Gyro (Motion Controls)",
            content: `
        <p class="mb-4 text-gray-300">
            Zelda has dungeons that require tilting the controller.
            <br/>Input Settings > Enable "Use Motion".
            <br/>If using DualSense/DualShock 4: It works natively via DSU Client (install DS4Windows if needed).
            <br/>If using Xbox: Right-click the game > GameProfile > Controller > Emulate Motion with Mouse (Right-click and drag).
        </p>
      `
        },
        {
            title: "Chapter 6: Xenoblade Chronicles X (60FPS)",
            content: `
        <p class="mb-4 text-gray-300">
            Another Wii U powerhouse.
            <br/>The game is locked at 30fps.
            <br/>Use the Graphics Pack > Mods > 60FPS Mod.
            <br/>Increase "Game Speed" if cutscenes become too fast. The community pack usually handles the audio fix already.
        </p>
      `
        },
        {
            title: "Chapter 7: Playing Online (Cemu Network)",
            content: `
        <p class="mb-4 text-gray-300">
            It is possible to play Mario Kart 8 and Splatoon on official Nintendo servers!
            <br/>BUT you need a real hacked Wii U to extract your own account files (OTP, SEEPROM, Account.dat).
            <br/>Do not download these from the internet (it's a guaranteed ban due to shared console IDs).
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Visual Mods (Reshade)",
            content: `
            <p class="mb-4 text-gray-300">
                The community created "Clarity" and Reshade presets that add fake Ray Tracing (RTGI) to Zelda. It looks beautiful but is heavy on the GPU.
                <br/>Enable it in Graphics Packs > Enhancements > Clarity. Choose the "Serfrost" preset.
            </p>
            `
        },
        {
            title: "Chapter 9: Cemu 2.0 (Linux)",
            content: `
            <p class="mb-4 text-gray-300">
                Version 2.0 is native to Linux (AppImage).
                <br/>It runs very well on the Steam Deck (via EmuDeck), consuming little battery (TDP 8-10W) to run Zelda at 40fps.
            </p>
            `
        },
        {
            title: "Chapter 10: Green Screen (Videos)",
            content: `
            <p class="mb-4 text-gray-300">
                If cutscenes appear green or inverted, download "Cemuhook" (only for older versions like 1.26). In Cemu 2.0, this is already fixed natively via software decoding (Debug > Use Cemuhook H264).
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Wii U GamePad Screen?",
            answer: "Hold TAB to see the GamePad screen (useful for inventory and maps in some games). Alternatively, configure View > Separate GamePad View for a second monitor."
        },
        {
            question: "Save missing?",
            answer: "If you changed the user in Cemu, your save files will change. Check in Options > Active Account. Use the '80000001' (Default) account."
        }
    ];

    const externalReferences = [
        { name: "Cemu Graphics Packs", url: "https://github.com/CemuUser8/CemuUser8/releases" },
        { name: "Cemu Hook", url: "https://cemuhook.sshnuke.net/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/yuzu-ryujinx-otimizacao-zelda-mario-60fps-guia",
            title: "Yuzu",
            description: "For TOTK (Sequel)."
        },
        {
            href: "/guides/controle-ps4-ps5-overclock-ds4windows",
            title: "Controller",
            description: "Gyro setup."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
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
