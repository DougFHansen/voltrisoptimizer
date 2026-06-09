import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'duckstation-emulador-ps1-graficos-melhorados-pgxp',
    title: "DuckStation (2026): The Ultimate PS1 Emulator Guide (4K + PGXP)",
    description: "Forget ePSXe. DuckStation fixes PS1's characteristic 'shimmering' graphics (PGXP), supports native 4K, and features near-instant loading. Complete setup guide.",
    category: 'emulation',
    difficulty: 'Beginner',
    time: '15 min'
};

const title = "DuckStation: The PS1 Emulation Revolution";
const description = "DuckStation has modernized PS1 emulation with a clean interface, accurate geometry correction (ending the 'wobbly' look forever), and exceptional performance on both PC and mobile.";

const keywords = [
    'duckstation vs epsxe which is better 2026',
    'pgxp geometry correction settings duckstation guide',
    'resident evil 3 duckstation hd texture pack setup',
    'how to configure controller duckstation tutorial',
    'duckstation save state hotkeys and rewind',
    'play driver 2 without lag ps1 emulator',
    'voltris optimizer retro gaming tweaks',
    'chd vs bin cue ps1 game compression'
];

export const metadata: Metadata = createGuideMetadata('duckstation-emulador-ps1-graficos-melhorados-pgxp', title, description, keywords);

export default function DuckStationGuide() {
    const summaryTable = [
        { label: "Renderer", value: "Vulkan / D3D11" },
        { label: "Internal Res", value: "4x (1080p) to 9x (4K)" },
        { label: "PGXP Geometry", value: "ON (Fixes Shimmering)" },
        { label: "Texture Filtering", value: "xBRZ (Optional HD Look)" },
        { label: "Widescreen Hack", value: "ON (Enable with Culling Fix)" },
        { label: "ROM Format", value: ".CHD (Lossless Compression)" },
        { label: "Rewind Function", value: "Enabled" }
    ];

    const contentSections = [
        {
            title: "Introduction: Farewell ePSXe",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          ePSXe relies on outdated plugins from the early 2010s. DuckStation is a modern, \"All-in-One\" emulator that eliminates the need for external video or audio plugins. Its killer feature, PGXP, completely transforms the visual fidelity of 32-bit classics.
        </p>
      `
        },
        {
            title: "Chapter 1: PGXP (Geometry Correction)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Ending the \"Wobbly\" Effect</h4>
                <p class="text-gray-400 text-xs text-justify">
                    The original PS1 lacked a high-precision Z-Buffer, causing floor textures to \"dance\" and character models to shimmer/jitter.
                    <br/>Navigate to <strong>Console Settings > Advanced > PGXP</strong>.
                    <br/>Enable \"PGXP Geometry Correction.\"
                    <br/>This stabilizes geometry, making walls and floors appear solid and straight, similar to a high-end N64 or PC title of that era.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Upscaling (4K Visuals)",
            content: `
        <p class="mb-4 text-gray-300">
            Go to Graphics Settings > Enhancement settings.
            <br/>Set Internal Resolution Scale to 4x (1080p) or 9x (4K).
            <br/>DuckStation is highly optimized; even integrated laptop graphics can typically handle 1080p upscaling without dropping frames. Avoid heavy MSAA at high resolutions as it provides diminishing returns.
        </p>
      `
        },
        {
            title: "Chapter 3: .CHD Compression (Storage Efficiency)",
            content: `
        <p class="mb-4 text-gray-300">
            PS1 titles in .BIN/.CUE format typically occupy ~700MB.
            <br/>DuckStation supports <strong>.CHD (Compressed Hunks of Data)</strong>.
            <br/>This format compresses games down to ~300-400MB with zero loss in quality or loading speed. Use the tool <code>chdman</code> to convert your entire library for massive storage savings.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Widescreen Hack and Culling",
            content: `
        <p class="mb-4 text-gray-300">
            Render 4:3 classics in 16:9 natively.
            <br/>DuckStation accomplishes this by extending the camera's viewport.
            <br/>Note: In certain titles (e.g., Crash Bandicoot), objects at the screen edges may \"pop-in\" because the game engine was never programmed to render assets outside the 4:3 area. If this immersion break bothers you, stick to the original aspect ratio with CRT filters.
        </p>
      `
        },
        {
            title: "Chapter 5: Emulated CPU Overclocking",
            content: `
        <p class="mb-4 text-gray-300">
            Titles like Driver 2 famously struggled to reach 20 FPS on original hardware.
            <br/>Navigate to Console Settings > CPU Emulation.
            <br/>Increase the \"Emulated CPU Clock Speed\" to 500% or higher.
            <br/>This allows games to maintain a locked 30 FPS (or 60 FPS with specific patches) without increasing the actual game speed (turbo).
        </p>
      `
        },
        {
            title: "Chapter 6: Texture Filtering (xBRZ)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Nearest:</strong> Keeps the sharp, pixelated \"Retro\" look.
            - <strong>Bilinear:</strong> Smooths out the textures for a softer feel.
            - <strong>xBRZ Upscaling:</strong> An advanced algorithm that rounds off pixel edges to mimic an \"HD Remaster.\" This is controversial among purists—test it to see if it suits your taste.
        </p>
      `
        },
        {
            title: "Chapter 7: BIOS Management",
            content: `
        <p class="mb-4 text-gray-300">
            An official BIOS file is required (e.g., <code>scph1001.bin</code>).
            <br/>DuckStation performs an MD5 checksum on your BIOS to ensure it is not corrupted and matches known reliable region dumps.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: The Rewind Feature",
            content: `
            <p class="mb-4 text-gray-300">
                Enable Rewind in the hotkey settings. 
                <br/>Mapped to a single key, this allows you to undo a mistake (like a missed jump in Tomb Raider) by literally winding back time 5-10 seconds. It's the ultimate modern quality-of-life tool for retro gaming.
            </p>
            `
        },
        {
            title: "Chapter 9: Big Picture UI Mode",
            content: `
            <p class="mb-4 text-gray-300">
                DuckStation features a stunning \"Big Picture\" interface designed for use on TVs with a controller, similar to the Steam Deck or modern consoles.
                <br/>Access it via Settings > Big Picture Mode.
            </p>
            `
        },
        {
            title: "Chapter 10: Android Compatibility",
            content: `
            <p class="mb-4 text-gray-300">
                The Android port of DuckStation is as robust as the PC version.
                <br/>It supports Bluetooth controllers and features a fully customizable touch overlay. You can synchronize your save files between PC and mobile using tools like Syncthing or Google Drive.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is it better than RetroArch's SwanStation core?",
            answer: "SwanStation IS a port of DuckStation for RetroArch. Performance is identical, but the standalone DuckStation version typically receives updates faster and features a more specialized user interface."
        },
        {
            question: "How do I handle multi-disc games like MGS1?",
            answer: "Create an .m3u playlist file listing your .chd game discs. Launch the .m3u file instead of the individual discs; the emulator will then handle disc swapping automatically when prompted."
        }
    ];

    const externalReferences = [
        { name: "DuckStation GitHub Downloads", url: "https://github.com/stenzek/duckstation" },
        { name: "PGXP Visual Comparison", url: "https://www.youtube.com/watch?v=1F_70D_zO6o" }
    ];

    const relatedGuides = [
        {
            href: "/guides/retroarch-guia-completo-cores-shaders-crt",
            title: "RetroArch Hub",
            description: "The all-in-one alternative for retro enthusiasts."
        },
        {
            href: "/guides/pcsx2-otimizacao-4k-widescreen-texturas-guia",
            title: "PCSX2 Optimization",
            description: "Mastering PS2 emulation in 4K."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Beginner"
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
