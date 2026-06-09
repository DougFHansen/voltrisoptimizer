import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'rpcs3-otimizacao-configuracao-60fps-patches-guia',
    title: "RPCS3 (2026): PS3 Emulator Optimization (GOW 3, TLoU)",
    description: "Emulating the PlayStation 3 requires a massive CPU. Learn how to configure SPU Threads, Write Color Buffers, and install Patches to play The Last of Us and God of War 3.",
    category: 'emulation',
    difficulty: 'Very Advanced',
    time: '60 min'
};

const title = "RPCS3: The CPU Monster (Configuration Guide)";
const description = "The PS3's Cell processor is extremely complex. Emulating its architecture requires fine-tuning. Do not expect to run everything on 'Ultra' without configuring each game individualy.";

const keywords = [
    'best rpcs3 settings god of war 3 60fps',
    'the last of us rpcs3 black screen fix',
    'write color buffers on or off rpcs3',
    'spu block size safe vs mega',
    'unlock fps demons souls rpcs3 60fps patch',
    'firmware ps3 install rpcs3',
    'voltris optimizer ps3',
    'avx-512 cpu rpcs3 performance'
];

export const metadata: Metadata = createGuideMetadata('rpcs3-otimizacao-configuracao-60fps-patches-guia', title, description, keywords);

export default function RPCS3Guide() {
    const summaryTable = [
        { label: "Required CPU", value: "8 Cores (AVX-512 recommended)" },
        { label: "Renderer", value: "Vulkan" },
        { label: "SPU Block Size", value: "Safe (Default) / Mega" },
        { label: "Write Color Buffers", value: "ON (Fixes Graphics)" },
        { label: "Resolution Scale", value: "150% (1080p)" },
        { label: "FSR", value: "ON (Upscaling)" },
        { label: "Patches", value: "Patch Manager (Essential)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Complexity of the Cell",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Emulating the PS3 is not a plug-and-play experience. While games like Demon's Souls run relatively well, titles like The Last of Us and MGS4 demand top-of-the-line CPUs (i7/i9 13th gen+ or Ryzen 7000/9000 with AVX-512) just to maintain a stable 30fps.
        </p>
      `
        },
        {
            title: "Chapter 1: Installation and Firmware",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">The Basics</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Download RPCS3 from the official website (always update; releases are daily).
                    <br/>2. Download the <strong>PS3 Firmware (4.91+)</strong> from the official Sony website.
                    <br/>3. Navigate to File > Install Firmware.
                    <br/>4. The emulator will begin compiling PPU modules—this can take several minutes.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Global Configuration (CPU/GPU)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>CPU:</strong>
            <br/> PPU Decoder: Recompiler (LLVM).
            <br/> SPU Decoder: Recompiler (LLVM).
            <br/>- <strong>GPU:</strong>
            <br/> Renderer: Vulkan.
            <br/> Framelimit: Auto or Off (Use VSync if experiencing screen tearing).
            <br/> Resolution Scale: Keep at Default (720p) and use Scale for 150% (1080p) or 300% (4K).
        </p>
      `
        },
        {
            title: "Chapter 3: SPU Block Size (Performance)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Safe:</strong> Works for all games and is the most stable setting.
            - <strong>Mega:</strong> Can significantly increase FPS on Intel CPUs but may break audio or cause crashes in various titles. Test on a per-game basis.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Write Color Buffers (Fixing Broken Graphics)",
            content: `
        <p class="mb-4 text-gray-300">
            Many titles (Skate 3, Dante's Inferno, God of War) suffer from over-exposed lighting or black screens without this enabled.
            <br/>In the GPU tab, enable <strong>\"Write Color Buffers.\"</strong>
            <br/>While this incurs a performance cost, it is often mandatory for rendering PS3 lighting effects correctly.
        </p>
      `
        },
        {
            title: "Chapter 5: Patch Manager (60FPS Unlocks)",
            content: `
        <p class="mb-4 text-gray-300">
            RPCS3 includes a powerful integrated patch system.
            <br/>Manage > Game Patches.
            <br/>Download the latest patches.
            <br/>Search for your game (e.g., Demon's Souls).
            <br/>Enable options like: \"Unlock FPS,\" \"Disable Motion Blur,\" or \"Skip Intro.\"
            <br/>This allows games originally locked at 30fps to run at 60fps or higher.
        </p>
      `
        },
        {
            title: "Chapter 6: Multithreaded RSX (GPU Boost)",
            content: `
        <p class="mb-4 text-gray-300">
            In the GPU tab, \"Multithreaded RSX\" offloads RSX tasks to another thread.
            <br/>This helps significantly if your GPU is a bottleneck (like a GTX 1050), but it can cause instability on high-end hardware. Keep it OFF if you have an RTX card.
        </p>
      `
        },
        {
            title: "Chapter 7: Shader Compilation (Stutter Fix)",
            content: `
        <p class="mb-4 text-gray-300">
            Like most modern emulators, RPCS3 compiles shaders on the fly.
            <br/>Enable <strong>\"Asynchronous Texture Streaming.\"</strong>
            <br/>Expect some initial micro-stutters during the first few minutes of gameplay as the cache builds. RPCS3 saves this cache for future launches.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: RPCS3 Wiki (The Bible)",
            content: `
            <p class="mb-4 text-gray-300">
                <strong>Pro Tip:</strong> Before launching any new game, search for \"RPCS3 [Game Name]\" on Google and check the official Wiki.
                <br/>It details the exact settings required (e.g., \"Enable Read Color Buffers,\" \"Set Driver Wake-Up Delay 200us\"). Follow these to the letter.
            </p>
            `
        },
        {
            title: "Chapter 9: DLCs and Updates (.pkg)",
            content: `
            <p class="mb-4 text-gray-300">
                Install .pkg files (game updates, DLCs) via File > Install Packages/Raps.
                <br/>You will typically need the corresponding .RAP (license) file alongside the .PKG for PSN content to authenticate.
            </p>
            `
        },
        {
            title: "Chapter 10: Performance on Handhelds",
            content: `
            <p class="mb-4 text-gray-300">
                The Steam Deck can run lightweight PS3 titles (Lollipop Chainsaw, HD Collections).
                <br/>However, demanding games like God of War 3 or RDR1 will likely run at 15-20fps in \"slow motion\" because the Deck's CPU lacks the brute force required for Cell emulation.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Why am I getting a black screen on startup?",
            answer: "Most likely you missed installing the official Firmware, or the game files/folder structure are incorrect/corrupted."
        },
        {
            question: "Can I run God of War 3 at a constant 60fps?",
            answer: "Only with extreme high-end CPUs (i9-13900K, Ryzen 7950X+). On standard gaming CPUs, expect inconsistent 30-45fps."
        }
    ];

    const externalReferences = [
        { name: "RPCS3 Compatibility List", url: "https://rpcs3.net/compatibility" },
        { name: "RPCS3 Wiki", url: "https://wiki.rpcs3.net/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/pcsx2-otimizacao-4k-widescreen-texturas-guia",
            title: "PCSX2",
            description: "Guide for PS2 Emulation."
        },
        {
            href: "/guides/termperatura-pc-fan-control-curva",
            title: "Temperature",
            description: "Expect high CPU heat during emulation."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="60 min"
            difficultyLevel="Very Advanced"
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

