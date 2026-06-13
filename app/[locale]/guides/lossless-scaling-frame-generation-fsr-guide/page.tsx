import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'lossless-scaling-frame-generation-fsr-guia',
    title: "Lossless Scaling (2026): Frame Generation on Any GPU (Guide)",
    description: "Double the FPS of any game using the Lossless Scaling app (LSFG). Guide on how to configure Frame Gen in emulators and games locked at 30fps.",
    category: 'software',
    difficulty: 'Beginner',
    time: '10 min'
};

const title = "Infinite FPS: The Lossless Scaling Guide";
const description = "You don't need an RTX 4000 to have Frame Generation. The Lossless Scaling app on Steam ($5) does it via software on any card (GTX 1060, Intel HD, AMD).";

const keywords = [
    'lossless scaling best configuration lsfg 2.0',
    'how to use frame generation in yuzu emulator',
    'triple fps elden ring low end pc',
    'lsfg ghosting fix latency',
    'nvidia image scaling vs fsr vs ls1',
    'play at 30fps with 60fps fluidity',
    'voltris optimizer tools',
    'windowed mode exclusive fullscreen fix'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('lossless-scaling-frame-generation-fsr-guia', title, description, keywords, locale);
}

export default function LSGuide() {
    const summaryTable = [
        { label: "Tool", value: "Lossless Scaling (Steam)" },
        { label: "Window Mode", value: "Windowed / Borderless" },
        { label: "Frame Gen", value: "LSFG 2.1" },
        { label: "Scaling Type", value: "LS1 / AMD FSR" },
        { label: "Multiplier", value: "X2 or X3" },
        { label: "Latency", value: "Medium (Mouse)" },
        { label: "Visuals", value: "Minor Artifacts (Ghosting)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Black Magic?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Lossless Scaling captures the game window and inserts fake (interpolated) frames between real frames using lightweight AI.
          <br/>If your game runs at 30fps, it generates 1 fake frame for every real one -> 60 visual fps.
          <br/>If you use X3 mode -> 90 visual fps.
        </p>
      `
        },
        {
            title: "Chapter 1: Mandatory Configuration",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">The Game</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. The game MUST be in <strong>Windowed Mode</strong> or <strong>Borderless Windowed</strong>. The app cannot capture Exclusive Fullscreen.
                    <br/>2. Lock the game's FPS (using RivaTuner or VSync) at a stable value your GPU can handle (e.g., 30fps or 60fps). If the FPS varies too much, LSFG creates horrible artifacts.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Configuring the App",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Scaling Mode:</strong> Auto (Aspect Ratio).
            - <strong>Scaling Type:</strong>
            <br/> LS1 (Performance): Lightweight and sharp.
            <br/> AMD FSR: Good for upscaling low resolutions.
            <br/> Off: If you are already at native resolution and just want frame gen, leave it Off.
            - <strong>Frame Generation:</strong> LSFG 2.1 (The current best).
            <br/> Mode: X2 (Doubles) or X3 (Triples). X3 adds significant latency; use it only in slower-paced RPGs.
        </p>
      `
        },
        {
            title: "Chapter 3: Applying (Scale)",
            content: `
        <p class="mb-4 text-gray-300">
            1. Configure the app.
            2. Click the blue \"Scale\" button.
            3. You have 5 seconds to click on the game window.
            4. The screen will flicker and return to full screen with fluid frames.
            <br/>Shortcut: Ctrl+Alt+S.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Reducing Latency",
            content: `
        <p class="mb-4 text-gray-300">
            Generating frames takes time (ms). The game appears to run at 60fps, but the input lag is that of 30fps (or worse).
            <br/>- Use <strong>Nvidia Reflex</strong> in-game if available.
            <br/>- Enable \"Allow Tearing\" in Lossless Scaling if you don't mind screen tearing (reduces lag).
            <br/>- Mouse: Increase your DPI.
            <br/>- Do not use LSFG in competitive games (CS2/Valorant). It's intended for Single Player games.
        </p>
      `
        },
        {
            title: "Chapter 5: Emulators (Yuzu/Cemu)",
            content: `
        <p class="mb-4 text-gray-300">
            Perfect for emulation.
            <br/>Zelda TOTK locked at 30fps on Yuzu?
            <br/>Enable LSFG X2.
            <br/>Visually it becomes 60fps. The camera fluidity is incredible.
            <br/>Since emulators already have natural input lag, the extra latency is less noticeable.
        </p>
      `
        },
        {
            title: "Chapter 6: Watching Videos (60fps Anime)",
            content: `
        <p class="mb-4 text-gray-300">
            You can use it in Chrome/VLC!
            <br/>Open an anime or movie on YouTube. Apply Lossless Scaling.
            <br/>The video will play with interpolation (Soap Opera Effect). Some users love it.
        </p>
      `
        },
        {
            title: "Chapter 7: Capture API (DXGI vs WGC)",
            content: `
        <p class="mb-4 text-gray-300">
            In Settings > Capture API.
            <br/>- <strong>DXGI:</strong> Default, faster.
            <br/>- <strong>WGC (Windows Graphics Capture):</strong> Use if DXGI results in a black screen or fails to capture game overlays (menus).
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Ghosting",
            content: `
            <p class="mb-4 text-gray-300">
                LSFG can leave trails on the interface (HUD) if it's static and the background moves quickly.
                <br/>LSFG 2.1 has significantly improved this, but it still happens. It's the price to pay for \"magical\" performance.
            </p>
            `
        },
        {
            title: "Chapter 9: GPU Load",
            content: `
            <p class="mb-4 text-gray-300">
                The app uses the GPU to generate frames. If your GPU is already at 100% running the game, Lossless Scaling will lag.
                <br/>You need to leave some GPU headroom (limit game FPS to use about 80-90% of the GPU) for the app to function properly.
            </p>
            `
        },
        {
            title: "Chapter 10: Free Alternatives? (Magpie)",
            content: `
            <p class="mb-4 text-gray-300">
                There is <strong>Magpie</strong> (Open Source), but it focuses on FSR (Upscaling) and doesn't have Frame Generation nearly as good as the paid LSFG.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does it work on a 60Hz Monitor?",
            answer: "Yes. If the game runs at 30fps, it doubles to 60fps and fills your monitor. If you have a 144Hz monitor, you can do 48fps -> 96fps (X2) or 72fps -> 144fps."
        },
        {
            question: "Can I get banned?",
            answer: "Theoretically no, as it doesn't inject code into the game (it only captures the screen like OBS). However, aggressive anti-cheats might flag it. Use at your own risk in online games."
        }
    ];

    const externalReferences = [
        { name: "Lossless Scaling Steam", url: "https://store.steampowered.com/app/993090/Lossless_Scaling/" },
        { name: "LSFG Showcase", url: "https://www.youtube.com/results?search_query=lossless+scaling+lsfg+2.1" }
    ];

    const relatedGuides = [
        {
            href: "/guides/nvidia-dlss-vs-fsr-vs-xess-qual-usar",
            title: "DLSS/FSR",
            description: "Understand Upscaling."
        },
        {
            href: "/guides/yuzu-ryujinx-otimizacao-zelda-mario-60fps-guia",
            title: "Emulators",
            description: "Where to use it."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
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

