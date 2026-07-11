import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'dual-monitor-lag-fix-hz-diferentes',
    title: "Dual Monitor (2026): Fixing 144Hz + 60Hz Lag",
    description: "Does your 144Hz game lag when you watch a video on your second 60Hz monitor? Understand the Windows DWM bug and learn 3 definitive solutions.",
    category: 'windows',
    difficulty: 'Intermediate',
    time: '15 min'
};

const title = "Dual Monitor Fix (2026): 144Hz + 60Hz Without Stutter";
const description = "Mixing monitors with different refresh rates has always been Windows' Achilles' heel. Multiple updates promised to fix it, but the stutter remains. Here is how to correct it.";

const keywords = [
    'dual monitor 144hz 60hz lag fix',
    'second monitor lagging the main one',
    'dwm.exe high cpu usage dual monitor',
    'gpu hardware scheduling on or off dual monitor',
    'disable chrome preview second monitor',
    'obs preview causing game lag',
    'nvidia multi display power saver',
    'windows 11 game mode priority',
    'voltris optimizer multi monitor',
    'lock fps second monitor 60'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('dual-monitor-lag-fix-hz-diferentes', title, description, keywords, locale);
}

export default function DualMonitorGuide() {
    const summaryTable = [
        { label: "GPU Sched", value: "ON (Windows 11)" },
        { label: "IGPU", value: "Use for 2nd screen" },
        { label: "Chrome", value: "Hardware Accel OFF" },
        { label: "Game", value: "Fullscreen Exclusive" },
        { label: "Hz", value: "Multiples (120/60)" },
        { label: "Nvidia", value: "Perform Scaling: GPU" },
        { label: "Cable", value: "DP (Main) / HDMI (2nd)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The DWM Bug",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The Desktop Window Manager (DWM.exe) attempts to synchronize all screens. If you have a fast screen (144Hz) and a slow screen (60Hz) with a video running (YouTube/Twitch/OBS), Windows sometimes \"levels down,\" causing stutters on the main monitor.
        </p>
      `
        },
        {
            title: "Chapter 1: The iGPU Solution (Integrated Graphics)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">The Silver Bullet</h4>
                <p class="text-gray-400 text-xs text-justify">
                    If your CPU has integrated graphics (Intel non-F or Ryzen G/7000+), plug your <strong>second monitor</strong> into the motherboard instead of the graphics card.
                    <br/>Enable the iGPU in the BIOS (iGPU Multi-Monitor).
                    <br/>This causes Windows to render YouTube/Discord using the Intel/AMD chip, leaving your RTX/RX card 100% free and exclusive for the game on the main monitor. Zero stutter guaranteed.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Hardware Accelerated GPU Scheduling",
            content: `
        <p class="mb-4 text-gray-300">
            In Windows 10/11: Settings > System > Display > Graphics > Change default graphics settings.
            <br/>Enable <strong>Hardware-accelerated GPU scheduling</strong>.
            <br/>This allows the GPU to manage its own memory, helping it handle multiple refresh rates more efficiently. Restart your PC after enabling.
        </p>
      `
        },
        {
            title: "Chapter 3: Browsers and Acceleration",
            content: `
        <p class="mb-4 text-gray-300">
            If you cannot use the iGPU:
            <br/>In Chrome/Discord that sits on the second screen, go to Settings and <strong>Disable Hardware Acceleration</strong>.
            <br/>This forces video decoding to the CPU. Your CPU usage will increase slightly, but it frees the GPU to prevent game stuttering. This is a fair trade nowadays, as modern CPUs have cores to spare.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: The Rule of Multiples",
            content: `
        <p class="mb-4 text-gray-300">
            Math helps. Windows handles refresh rates better when they are multiples of each other.
            <br/>120Hz is a multiple of 60Hz (2x). It runs smoothly.
            <br/>144Hz is NOT a multiple of 60Hz (2.4x). \"Frame skipping\" often occurs.
            <br/>If you're having serious issues, try lowering your main monitor to <strong>120Hz</strong>. This often resolves stuttering instantly.
        </p>
      `
        },
        {
            title: "Chapter 5: NVIDIA Multi-Display Power Saver",
            content: `
        <p class="mb-4 text-gray-300">
            Screens with different resolutions/Hz can prevent the graphics card from entering power-saving mode (\"Idle Clocks\") or cause clocks to fluctuate wildly.
            <br/>Use <strong>NVIDIA Inspector</strong> (Multi Display Power Saver) to force high memory clocks when 2 monitors are connected, avoiding lag. (Advanced).
        </p>
      `
        },
        {
            title: "Chapter 6: Fullscreen Exclusive Mode",
            content: `
        <p class="mb-4 text-gray-300">
            Play in <strong>Exclusive Fullscreen</strong>.
            <br/>The \"Borderless Windowed\" mode forces the game to pass through the Windows DWM (the desktop compositor).
            <br/>Exclusive mode bypasses the DWM, giving total priority to the game and ignoring what happens on the secondary screen.
        </p>
      `
        },
        {
            title: "Chapter 7: Game Mode",
            content: `
        <p class="mb-4 text-gray-300">
            Keep Windows Game Mode turned <strong>ON</strong>.
            <br/>It detects the game on the main screen and reduces the priority of background processes (like an update on the second screen) to prevent them from stealing resources.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: OBS Studio Preview",
            content: `
            <p class="mb-4 text-gray-300">
                If you stream: The OBS \"Preview\" consumes significant GPU power because it renders the scene in real-time.
                <br/>Right-click the preview > <strong>Disable Preview</strong> after starting the stream.
                <br/>This frees up about 10-15% of GPU usage.
            </p>
            `
        },
        {
            title: "Chapter 9: Wallpaper Engine",
            content: `
            <p class="mb-4 text-gray-300">
                Animated wallpapers are beautiful but eat FPS.
                <br/>Configure Wallpaper Engine to \"Pause\" or \"Stop (free memory)\" when another application is in fullscreen or maximized.
                <br/>Don't leave it running behind the game.
            </p>
            `
        },
        {
            title: "Chapter 10: Taskbar Settings",
            content: `
            <p class="mb-4 text-gray-300">
                In Windows 11, you can disable the taskbar on the second monitor if you prefer.
                <br/>Fewer UI elements for Windows to draw means less chance of conflict.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does G-Sync work on the second monitor?",
            answer: "Mixing G-Sync on the main monitor and a fixed rate on the secondary often fails in windowed mode. Use G-Sync only in Exclusive Fullscreen on the main screen to avoid bugs."
        },
        {
            question: "Do USB to HDMI adapters cause lag?",
            answer: "Yes! USB DisplayLink adapters use the CPU to compress video, causing significant system lag. Avoid them for gaming; use them only for spreadsheets."
        },
        {
            question: "Which cable should I use for the second screen?",
            answer: "HDMI is sufficient for 60Hz. Reserve DisplayPort for your primary gaming monitor."
        }
    ];

    const externalReferences = [
        { name: "NVIDIA Profile Inspector", url: "https://github.com/Orbmu2k/nvidiaProfileInspector" },
        { name: "Blur Busters (Display Tech)", url: "https://blurbusters.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "Configure Monitor",
            description: "For the primary screen."
        },
        {
            href: "/guides/google-chrome-consumo-ram-fix",
            title: "Chrome",
            description: "Disable acceleration for the 2nd screen."
        },
        {
            href: "/guides/obs-studio-melhores-configuracoes-stream",
            title: "OBS",
            description: "Preview adjustments."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
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
