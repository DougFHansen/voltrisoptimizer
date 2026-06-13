import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'nvidia-painel-controle-melhores-configuracoes',
    title: "Nvidia Control Panel 2026: The Ultimate Encyclopedia (10 Chapters)",
    description: "The most complete guide on the internet. Latency, DLDSR, Profile Inspector, MPO Fix, Driver Debloating, 4:3 Scaling, HDMI 2.1, and much more.",
    category: 'otimizacao',
    difficulty: 'Expert',
    time: '60 min'
};

const title = "Nvidia Control Panel (2026): The Performance Bible (10 Chapters)";
const description = "If your goal is to extract every last drop of performance from your Green Team GPU, you've come to the right place. This is not a quick guide; it's a complete driver engineering course.";

const keywords = [
    'nvidia control panel best settings 2026 10 chapters',
    'disable mpo nvidia windows 11 fix flicker',
    'nvcleanstall tutorial remove nvidia telemetry',
    'gpu vs monitor screen scaling input lag 4:3 cs2',
    'hdmi 2.1 vs displayport 1.4 g-sync nvidia',
    'nvidia color correction 10 bit vs 8 bit',
    'how to force pci express 4.0 nvidia',
    'rtx video super resolution turn off performance',
    'ansel disable lag',
    'hags windows 11 nvidia on or off'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('nvidia-painel-controle-melhores-configuracoes', title, description, keywords, locale);
}

export default function NvidiaGuide() {
    const summaryTable = [
        { label: "Chapters", value: "10 (Complete)" },
        { label: "Technical Level", value: "Extreme" },
        { label: "Risks", value: "Low (Software)" },
        { label: "Tools", value: "NCP, Profile Inspector, NVCleanstall" },
        { label: "Focus", value: "FPS, Latency and Stability" },
        { label: "Latency", value: "Reduced (Reflex/ULLM)" },
        { label: "Visual", value: "DLDSR (4K Downscale)" }
    ];

    const contentSections = [
        {
            title: "Introduction and Goal",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In this 10-chapter manifesto, we will dissect the GeForce driver. The goal is simple: eliminate software bottlenecks that prevent your hardware from shining. We'll go beyond basic "On/Off." We'll understand the rendering pipeline, the CPU frame queue, and how Windows interferes with your GPU.
        </p>
      `
        },
        {
            title: "Chapter 1: Global 3D Settings (The Core)",
            content: `
        <p class="mb-4 text-gray-300">
            The foundation of everything. Get this wrong, and nothing else matters.
        </p>
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-5 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-2">Low Latency Mode</h4>
                <p class="text-sm text-gray-400">
                    <strong>Recommendation: ON.</strong>
                    <br/>Sets "Maximum Pre-Rendered Frames" to 1. This prevents the CPU from preparing frames too far ahead of the GPU. "Ultra" mode is risky as it tries to sync "Just-in-Time," which can cause stutters if the GPU chokes.
                </p>
            </div>
            <div class="bg-[#0A0A0F] p-5 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-2">Power Management Mode</h4>
                <p class="text-sm text-gray-400">
                    <strong>Recommendation: PREFER MAXIMUM PERFORMANCE.</strong>
                    <br/>Keeps the GPU memory and core clocks at maximum (P0 State) during the game, avoiding the "clock ramp-up" latency when the action heats up.
                </p>
            </div>
            <div class="bg-[#0A0A0F] p-5 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-2">Shader Cache Size</h4>
                <p class="text-sm text-gray-400">
                    <strong>Recommendation: UNLIMITED.</strong>
                    <br/>The biggest cause of stutters in modern games (Warzone, Fortnite) is a lack of shader cache. Leave it unlimited so Windows never deletes compiled shaders, ensuring the game runs smoothly even after months.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Colors and Dynamic Range (End of Grayness)",
            content: `
        <p class="mb-4 text-gray-300">
            Many monitors are configured as "TVs" by the driver, limiting the color spectrum.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Go to <strong>Change resolution</strong> > Scroll down.</li>
            <li>Check "Use NVIDIA color settings."</li>
            <li>Output color depth: <strong>10 bpc</strong> (if available) or 8 bpc.</li>
            <li>Output dynamic range: <strong class="text-emerald-400">Full (0-255)</strong>. Never use Limited (16-235) for a monitor.</li>
        </ul>
        <p class="mt-4 text-gray-300 text-sm">
            In "Adjust desktop color settings," increase <strong>Digital Vibrance</strong> to 65-75% for competitive games. This helps in distinguishing enemies in dark areas.
        </p>
      `
        },
        {
            title: "Chapter 3: DSR and DLDSR (AI Supersampling)",
            content: `
        <p class="mb-4 text-gray-300">
            DLDSR (Deep Learning Dynamic Super Resolution) is the secret weapon for RTX cards.
        </p>
        <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
            <h4 class="text-purple-400 font-bold mb-2">How to configure:</h4>
            <ol class="list-decimal list-inside text-gray-300 text-sm">
                <li>Enable <strong>DLDSR 1.78x</strong> or <strong>2.25x</strong> in the global DSR factors.</li>
                <li>Set "DSR - Smoothness" to <strong>33%</strong> (Sweet spot).</li>
                <li>In-game, select the new resolution (e.g., 2560x1440 on a 1080p monitor).</li>
            </ol>
            <p class="mt-2 text-gray-400 text-xs">
                Result: An absurdly sharp image, with aliasing eliminated by AI, and a much lower performance cost than old DSR. Essential for story-driven games and even competitive ones if your GPU has headroom.
            </p>
        </div>
      `
        },
        {
            title: "Chapter 4: G-Sync and V-Sync (The Trinity)",
            content: `
        <p class="mb-4 text-gray-300">
            The definitive configuration to remove tearing WITHOUT noticeable input lag.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div class="bg-gray-800 p-4">1. G-Sync ON (Panel)</div>
            <div class="bg-gray-800 p-4">2. V-Sync ON (Panel)</div>
            <div class="bg-gray-800 p-4">3. V-Sync OFF (Game)</div>
        </div>
        <p class="text-center mt-2 text-gray-400 text-sm">+ FPS Cap at (Hz - 3). E.g., 141 FPS for 144Hz.</p>
        <p class="mt-4 text-gray-300 text-sm">
            This keeps G-Sync active at all times. V-Sync in the panel only acts as a frame limiter for when the framerate exceeds the Hz, but since we limit the FPS below the Hz, V-Sync never triggers its latency, serving only to correct frame-pacing.
        </p>
      `
        },
        {
            title: "Chapter 5: Scaling and Aspect Ratio (4:3 CS2)",
            content: `
        <p class="mb-4 text-gray-300">
            For CS2 and Valorant players using stretched resolutions.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Go to <strong>Adjust desktop size and position</strong>.</li>
            <li>Scaling mode: <strong>Full-screen</strong> (To stretch 4:3 without black bars).</li>
            <li>Perform scaling on: <strong>GPU</strong> (Generally has lower input lag and better downscaling quality than Monitor/Video).</li>
            <li>Check "Override the scaling mode set by games and programs."</li>
        </ul>
      `
        },
        {
            title: "Chapter 6: PhysX and Surround",
            content: `
        <p class="mb-4 text-gray-300">
             In the "Configure Surround, PhysX" tab, change the PhysX processor from "Auto-select" to your <strong>Video Card (RTX/GTX)</strong>.
             <br/>This forces the driver to keep physics calls on the GPU, avoiding unnecessary CPU interruptions (Context Switching), which can microscopically help with frametimes.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 7: Nvidia Profile Inspector (Hacks)",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-orange-400 font-bold mb-4 text-xl">Unlocking the Driver</h4>
                <p class="text-gray-300 mb-4">
                    Download Nvidia Profile Inspector on GitHub. It edits the driver registry.
                </p>
                <ol class="list-decimal list-inside text-gray-300 space-y-2">
                    <li><strong>Force Resizable BAR:</strong> Under "Common," enable rBAR Feature, Options, and Size Limit for DX12 games that Nvidia hasn't validated. Up to 10% FPS gain.</li>
                    <li><strong>Disable Ansel:</strong> Under "Ansel Usage Restrictions," set to "Disallowed." This removes the Nvidia photo overlay that runs in the background consuming memory.</li>
                    <li><strong>Memory P2 State Off:</strong> Under "CUDA - Force P2 State," set to "Off." This prevents VRAM from lowering its frequency when using CUDA/Compute loads, keeping memory clock at maximum.</li>
                </ol>
            </div>
            `
        },
        {
            title: "Chapter 8: NVCleanstall (Debloating)",
            content: `
            <p class="mb-4 text-gray-300">
                The standard Nvidia installer installs: Telemetry, Shield Streaming, GeForce Experience, HD Audio, USBC Driver... stuff you probably don't use.
                <br/><strong>NVCleanstall</strong> is a tool that downloads the driver and lets you choose what to install.
                <br/><strong>Radical Recommendation:</strong> Install ONLY: "Display Driver," "PhysX," and "HD Audio" (if using sound via HDMI). Remove "Telemetry," "Shield Wireless," "Optimizations," etc. The driver gets 300MB lighter and runs fewer background processes.
            </p>
            `
        },
        {
            title: "Chapter 9: MPO Fix (Multi-Plane Overlay)",
            content: `
            <p class="mb-4 text-gray-300">
                The biggest villain in Windows 10/11 with Nvidia. MPO causes flickering, black screens on Alt+Tab, and stutters in Chromium-based browsers.
                <br/>Nvidia recommends disabling MPO if you experience these issues.
                <br/><strong>How to do it:</strong> Use the official "mpo_disable.reg" registry file provided on the Nvidia forum or create the <code>OverlayTestMode</code> key in the DWM registry and set it to 5. Voltris Optimizer does this automatically in "Bug Fix" mode.
            </p>
            `
        },
        {
            title: "Chapter 10: MSI Mode Utility & TDR",
            content: `
            <p class="mb-4 text-gray-300">
                Two kernel-level settings to finish off:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>MSI Mode (Message Signaled Interrupts):</strong> Use the "MSI Mode Utility v3." Check if your GPU has the "MSI" box checked and priority set to "High." This changes GPU-CPU communication from line-based (slow) to message-based (fast), reducing DPC latency.</li>
                <li><strong>TDR Delay:</strong> In Regedit, increase <code>TdrDelay</code> to 10 seconds. This prevents the driver from crashing and restarting ("Display driver stopped responding") when the GPU stays at 100% load for a long time in complex scenes.</li>
            </ul>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Appendix: Cables (HDMI 2.1 vs DP 1.4)",
            content: `
            <p class="mb-4 text-gray-300">
                No setting saves a bad cable.
                <br/>- <strong>DisplayPort 1.4:</strong> The Gold standard. Supports native G-Sync and high refresh rates.
                <br/>- <strong>HDMI 2.0:</strong> Limited. Often limits the monitor to 120Hz or 60Hz at 4K, and G-Sync might not work.
                <br/>- <strong>HDMI 2.1:</strong> Excellent (4K 120Hz), but only available on RTX 3000+ cards and very new monitors.
                <br/>Always use the DisplayPort cable that came with the monitor. Generic HDMI cables are the #1 cause of "Flickering screen" and "144Hz option doesn't appear."
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does this void the warranty?",
            answer: "No. All settings here are software and driver-level. We are not voltage-overclocking or modifying the card's BIOS."
        },
        {
            question: "Should I use 'Gamma' or 'Sharpening' in the Panel?",
            answer: "Avoid changing Gamma and Brightness in the Nvidia panel as this compresses the dynamic color range via software. Adjust brightness and contrast ON THE MONITOR (physical buttons) whenever possible."
        },
        {
            question: "Is RTX Video Super Resolution worth it?",
            answer: "For watching videos, yes (upscales 1080p to 4K via IA). But TURN OFF when playing heavy games. The GPU uses the same cores to process the game and the YouTube video on the second screen, causing performance loss."
        }
    ];

    const externalReferences = [
        { name: "BlurBusters G-Sync 101", url: "https://blurbusters.com/gsync/gsync101-input-lag-tests-and-settings/" },
        { name: "Nvidia Profile Inspector (GitHub)", url: "https://github.com/Orbmu2k/nvidiaProfileInspector" },
        { name: "MPO Disable Fix", url: "https://nvidia.custhelp.com/app/answers/detail/a_id/5157" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Guide",
            description: "The ideal partner for a fast GPU."
        },
        {
            href: "/guides/como-usar-ddu-driver-uninstaller",
            title: "Clean DDU",
            description: "Step 0 before configuring the panel."
        },
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "Monitor Hz",
            description: "It doesn't help to configure the GPU if the monitor is at 60Hz."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="60 min"
            difficultyLevel="Expert"
            contentSections={contentSections}
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            externalReferences={externalReferences}
        />
    );
}

