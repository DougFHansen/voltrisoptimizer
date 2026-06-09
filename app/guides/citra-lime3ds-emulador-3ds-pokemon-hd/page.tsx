import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'citra-lime3ds-emulador-3ds-pokemon-hd',
    title: "Citra / Lime3DS (2026): Pokémon and Zelda 3DS in 4K",
    description: "Citra is gone, long live Lime3DS. Complete guide to running Pokémon X/Y, Omega Ruby, and Zelda Link Between Worlds with HD graphics and no lag.",
    category: 'emulation',
    difficulty: 'Intermediate',
    time: '20 min'
};

const title = "3DS Remaster: Lime3DS (Citra Fork)";
const description = "After the closure of Yuzu/Citra, Lime3DS took over. It runs 3DS games with upscale textures, save state support, and local multiplayer.";

const keywords = [
    'lime3ds vs pablo mk7 citra fork',
    'pokemon x y black screen fix android',
    'zelda ocarina of time 3d 4k texture pack',
    'decrypt cia 3ds decryptor',
    'configure two screens citra layout',
    'multiplayer local 3ds emulator',
    'voltris optimizer nintendo',
    'cheat codes pokemon randomizer'
];

export const metadata: Metadata = createGuideMetadata('citra-lime3ds-emulador-3ds-pokemon-hd', title, description, keywords);

export default function CitraGuide() {
    const summaryTable = [
        { label: "Emulator", value: "Lime3DS / PabloMK7" },
        { label: "Graphics API", value: "Vulkan" },
        { label: "Resolution", value: "4x Native (1600p)" },
        { label: "Stereoscopic 3D", value: "Off" },
        { label: "Texture Filter", value: "Anime4K (Upscale)" },
        { label: "Layout", value: "Side by Side / Big Screen" },
        { label: "Shader Cache", value: "Separate Shader" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Chaos of Forks",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          With the official end of Citra, several clones have emerged.
          <br/>We recommend <strong>Lime3DS</strong> or the version by <strong>PabloMK7</strong> (which has better multiplayer). Avoid older versions.
        </p>
      `
        },
        {
            title: "Chapter 1: Graphics (HD)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Ideal Configuration</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Graphics >
                    <br/>- <strong>Internal Resolution:</strong> 4x Native (1600x960). The original 3DS is 240p (pixelated). At 4x, it looks beautiful.
                    <br/>- <strong>Texture Filter:</strong> Bicubic or Anime4K (for 2D sprites).
                    <br/>- <strong>Renderer:</strong> Vulkan (best performance on Android and AMD PCs).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Screen Layout",
            content: `
        <p class="mb-4 text-gray-300">
            The 3DS has two screens. On a monitor, this is unusual.
            <br/>View > Screen Layout.
            <br/>- <strong>Large Screen:</strong> Top screen is large, bottom screen is small in the corner. Ideal for gameplay.
            <br/>- <strong>Side by Side:</strong> Both screens side-by-side at equal size.
            <br/>- <strong>Hybrid:</strong> If you have a vertical second monitor, you can place the bottom screen on it!
        </p>
      `
        },
        {
            title: "Chapter 3: Pokémon and Lags",
            content: `
        <p class="mb-4 text-gray-300">
            Pokémon X/Y and Sun/Moon require shader cache.
            <br/>The first time you see a new attack, it may stutter.
            <br/>Enable "Use Disk Shader Cache".
            <br/>Use "No Outline" cheats to remove the black lines around characters (improves the visual in HD).
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Mods and Textures",
            content: `
        <p class="mb-4 text-gray-300">
            Zelda Ocarina of Time 3D has the "Henriko Magnifico" 4K texture project.
            <br/>Right-click the game > Open Custom Texture Location.
            <br/>Paste the textures.
            <br/>Enable "Use Custom Textures" in the options. The game turns into a Switch Remake.
        </p>
      `
        },
        {
            title: "Chapter 5: .CIA vs .3DS Format",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>.3DS:</strong> Decrypted cartridge file. Runs directly (File > Load).
            - <strong>.CIA:</strong> File installed in the console memory. Requires File > Install CIA. It remains in the installed apps list.
            <br/>To play, you must decrypt your ROMs using a real 3DS with GodMode9.
        </p>
      `
        },
        {
            title: "Chapter 6: Multiplayer",
            content: `
        <p class="mb-4 text-gray-300">
            Lime3DS supports public rooms.
            <br/>Menu Multiplayer > Browse Public Rooms.
            <br/>Enter a Mario Kart 7 room and play with people from all over the world (simulates Local Wireless via Internet).
        </p>
      `
        },
        {
            title: "Chapter 7: Mouse as Touch",
            content: `
        <p class="mb-4 text-gray-300">
            The mouse simulates the Stylus pen.
            <br/>No configuration needed. Just click on the virtual bottom screen.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: New 3DS Mode",
            content: `
            <p class="mb-4 text-gray-300">
                Some games (Xenoblade, Hyrule Warriors) require the power of the "New 3DS".
                <br/>Configure > System > Emulate Region: Auto, Model: New 3DS.
                <br/>This increases the clocked frequency of the emulated CPU (L2 Cache) and improves FPS in heavy games.
            </p>
            `
        },
        {
            title: "Chapter 9: Android",
            content: `
            <p class="mb-4 text-gray-300">
                The Android version of Lime3DS is amazing.
                <br/>On phones with Snapdragon 8 Gen 2 or higher, it runs at 4x Resolution.
                <br/>Supports savestates and controller skins.
            </p>
            `
        },
        {
            title: "Chapter 10: Amiibo",
            content: `
            <p class="mb-4 text-gray-300">
                Supported. Load the Amiibo .bin file via the shortcut menu (F2).
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Circle Pad Pro?",
            answer: "Enable it in Controls. It allows using the second analog (C-Stick) in games like Resident Evil Revelations and Monster Hunter."
        },
        {
            question: "Stuttering Audio?",
            answer: "Enable 'Audio Stretching'. This synchronizes the audio if the FPS drops, avoiding noise and crackling."
        }
    ];

    const externalReferences = [
        { name: "Lime3DS GitHub", url: "https://github.com/Lime3DS/Lime3DS" },
        { name: "Henriko Magnifico Texture Packs", url: "https://www.henrikomagnifico.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guias/yuzu-ryujinx-otimizacao-zelda-mario-60fps-guia",
            title: "Switch",
            description: "The evolution of the 3DS."
        },
        {
            href: "/guias/dolphin-emulador-wii-gamecube-ubershaders-guia",
            title: "Dolphin",
            description: "Console Zeldas."
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
