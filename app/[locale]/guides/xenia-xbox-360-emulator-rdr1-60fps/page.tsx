import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'xenia-emulador-xbox-360-red-dead-redemption-60fps',
    title: "Xenia Canary (2026): Xbox 360 on PC (RDR1 + Gears)",
    description: "Play Red Dead Redemption 1 and Gears of War at 60FPS on PC. Xenia Canary guide, installing patches, and fixing graphics (FSR).",
    category: 'emulation',
    difficulty: 'Intermediate',
    time: '25 min'
};

const title = "Xbox 360 Emulation: Xenia Canary Guide";
const description = "Xenia Canary is the experimental (and best) version of the Xbox 360 emulator. It runs RDR1 better than the original and revives classics like Forza Horizon 1.";

const keywords = [
    'xenia canary vs master rdr1 60fps',
    'gears of war 2 3 xenia pc black screen',
    'fable 2 xenia ground texture fix',
    'how to install patches xenia canary config.toml',
    'forza horizon 1 save corrupt fix xenia',
    'midnight club los angeles xenia fps unlock',
    'voltris optimizer xbox 360',
    'mount cache clear'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('xenia-emulador-xbox-360-red-dead-redemption-60fps', title, description, keywords, locale);
}

export default function XeniaGuide() {
    const summaryTable = [
        { label: "Version", value: "Canary (GitHub)" },
        { label: "Renderer", value: "Vulkan / D3D12" },
        { label: "License Mask", value: "1 (Full Game)" },
        { label: "V-Sync", value: "Off (For >30fps)" },
        { label: "Patches", value: "patches.toml" },
        { label: "Mount Cache", value: "Enable (Faster Load)" },
        { label: "Resolution", value: "2x (1440p) / 3x (4K)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Master vs Canary",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Always use <strong>Xenia Canary</strong>. The "Master" version is very old and slow. Canary receives daily updates with specific fixes for games like RDR and Fable II.
        </p>
      `
        },
        {
            title: "Chapter 1: Configuration (config.toml)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Editing the File</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Xenia does not have a settings menu (GUI). You need to edit the <code>xenia-canary.config.toml</code> file with Notepad.
                    <br/>- <code>d3d12_allow_variable_refresh_rate_and_tearing = true</code> (For G-Sync/FreeSync).
                    <br/>- <code>license_mask = 1</code> (Unlocks Trial/Demo games to Full version).
                    <br/>- <code>draw_resolution_scale_x/y = 2</code> (To run at 1440p). If your PC is weak, keep it at 1.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Red Dead Redemption 1 (The Ex-Clusive)",
            content: `
        <p class="mb-4 text-gray-300">
            RDR1 runs incredibly well on Xenia (much better than on RPCS3).
            <br/>In 4K, the game looks like an official remaster.
            <br/>Requires a good GPU (RTX 3060 or higher) for stable 4K 30fps.
            <br/>Gears of War 2 and 3 also run from start to finish without crashes (only occasional shadow glitches).
        </p>
      `
        },
        {
            title: "Chapter 3: 60FPS Patches",
            content: `
        <p class="mb-4 text-gray-300">
            Most 360 games are locked to 30fps.
            <br/>1. Download the <code>patches.zip</code> from the Xenia Canary GitHub.
            <br/>2. Extract it into the Xenia folder.
            <br/>3. Open the game's .patch file (e.g. 5454082B - Read Dead.patch) with notepad.
            <br/>4. Change <code>is_enabled = false</code> to <code>true</code> on the "Unlock FPS" or "60 FPS" line.
            <br/>5. Save it and launch the game.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: FSR (FidelityFX)",
            content: `
        <p class="mb-4 text-gray-300">
            Xenia Canary has native support for FSR 1.0 (in the config file).
            <br/>Useful if you want to run in 4K but your GPU can't handle it natively.
            <br/><code>d3d12_resolution_scale = 2</code>
            <br/><code>postprocess_upscaling = "fsr"</code>
        </p>
      `
        },
        {
            title: "Chapter 5: Audio Problems (Lag)",
            content: `
        <p class="mb-4 text-gray-300">
            If the audio is lagging behind:
            <br/>Change <code>apu_max_queued_frames</code> from 64 to 16 in config.toml.
            <br/>This reduces sound latency, but may cause crackling if your CPU is weak (i3/Ryzen 3).
        </p>
      `
        },
        {
            title: "Chapter 6: Clear Cache (Black Textures)",
            content: `
        <p class="mb-4 text-gray-300">
            Sometimes the game loads with a black floor (Fable II).
            <br/>Delete the <code>cache</code> folder inside the Xenia folder.
            <br/>Press F5 during the game to clear the runtime cache. Helps to debug graphics on the fly.
        </p>
      `
        },
        {
            title: "Chapter 7: DLCs and Title Updates",
            content: `
        <p class="mb-4 text-gray-300">
            Xenia loads DLCs and TUs automatically if they are in the correct folder structure (Content/0000000...).
            <br/>But the easiest way is: File > Install Content. Select the DLC file. Xenia copies it to the right place.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Keyboard and Mouse",
            content: `
            <p class="mb-4 text-gray-300">
                It works, but it's bad. Xenia emulates the thumbstick with the mouse in a weird way.
                <br/>Use an Xbox controller (or DualSense with DS4Windows). It's the native experience.
            </p>
            `
        },
        {
            title: "Chapter 9: Saves",
            content: `
            <p class="mb-4 text-gray-300">
                The saves are compatible with the real Xbox 360!
                <br/>You can take your old save from the console (via Horizon/USB) and play it on PC.
            </p>
            `
        },
        {
            title: "Chapter 10: Linux (Steam Deck)",
            content: `
            <p class="mb-4 text-gray-300">
                Xenia runs on Linux via Proton (SteamOS), but it's volatile and has graphical bugs (Vulkan on Linux vs D3D12 on Windows).
                <br/>For 360, Windows is still far superior.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is it better than RPCS3 for RDR?",
            answer: "Yes. It runs 2x lighter and with fewer graphical bugs. The PS3 version of RDR was inferior, and PS3 emulation is heavier."
        },
        {
            question: "Black screen on GoldenEye?",
            answer: "Some XBLA (Arcade) games require `license_mask = 1` or `-1` to work. Try changing it in the config."
        }
    ];

    const externalReferences = [
        { name: "Xenia Canary GitHub", url: "https://github.com/xenia-canary/xenia-canary" },
        { name: "Game Compatibility List", url: "https://github.com/xenia-canary/game-compatibility/issues" }
    ];

    const relatedGuides = [
        {
            href: "/guides/rpcs3-otimizacao-configuracao-60fps-patches-guia",
            title: "RPCS3",
            description: "PS3 alternative."
        },
        {
            href: "/guides/lossless-scaling-frame-generation-fsr-guia",
            title: "Frame Gen",
            description: "For 60fps."
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

