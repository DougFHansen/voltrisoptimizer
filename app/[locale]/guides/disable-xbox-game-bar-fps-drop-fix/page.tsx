import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'xbox-game-bar-desativar-fps-drop',
    title: "Xbox Game Bar (2026): Disable or Optimize?",
    description: "The Game Bar causes input lag and FPS drops on many PCs. Learn how to disable background DVR while keeping just the voice chat.",
    category: 'windows',
    difficulty: 'Beginner',
    time: '10 min'
};

const title = "Xbox Game Bar: Villain or Hero? (2026 Guide)";
const description = "The Microsoft overlay (Win+G) records your games without asking. This consumes VRAM and disk. Let's see how to configure it for zero impact.";

const keywords = [
    'how to disable xbox game bar windows 11 powershell',
    'game dvr causing game stutter',
    'uninstall xbox app weak pc',
    'shortcut win g not working',
    'windows game mode on or off',
    'background recording fps drop',
    'voltris optimizer game mode',
    'error 0x80070005 xbox game pass'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('xbox-game-bar-desativar-fps-drop', title, description, keywords, locale);
}

export default function XboxGuide() {
    const summaryTable = [
        { label: "Game Bar", value: "Disable (General)" },
        { label: "Game Mode", value: "ON (Always)" },
        { label: "Background DVR", value: "OFF (Urgent)" },
        { label: "Audio", value: "Chat Mix (Useful)" },
        { label: "Shortcut", value: "Win + G" },
        { label: "Notifications", value: "Mute All" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Hidden DVR",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          By default, Windows records the last 30 seconds of your game (Background Recording). On weaker PCs, this causes a "stutter" every minute when the HDD buffer fills up.
        </p>
      `
        },
        {
            title: "Chapter 1: Windows Settings",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Step by Step (Settings)</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Settings > Gaming > Captures.
                    <br/>2. <strong>TURN OFF</strong> "Record what happened" (Background recording).
                    <br/>- If you need to clip, use OBS (lighter) or ShadowPlay. The Windows DVR is poorly optimized.
                    <br/>3. Turn off "Capture audio when recording a game" (if not using DVR).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Game Mode",
            content: `
        <p class="mb-4 text-gray-300">
            Myth: "Turn off Game Mode".
            <br/>In 2026 (Windows 11 24H2), <strong>Game Mode should be turned ON</strong>.
            <br/>It prevents Windows Update from installing drivers or restarting the PC while you play, and prioritizes the CPU for the game.
        </p>
      `
        },
        {
            title: "Chapter 3: Disabling the Bar (Win+G)",
            content: `
        <p class="mb-4 text-gray-300">
            If you never use the Win+G shortcut:
            <br/>Go to Settings > Gaming > Xbox Game Bar.
            <br/>Uncheck "Open Xbox Game Bar using this button on a controller".
            <br/>This frees up a bit of RAM (the <code>GamingServices.exe</code> process still runs, but consumes less).
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Removing via PowerShell (Debloat)",
            content: `
        <p class="mb-4 text-gray-300">
            If you want to EXTERMINATE the Game Bar from the system:
            <br/>Open PowerShell as Admin and type:
            <br/><code>Get-AppxPackage Microsoft.XboxGamingOverlay | Remove-AppxPackage</code>
            <br/>Warning: This breaks friend invites in some Microsoft Store games (Forza, Sea of Thieves).
        </p>
      `
        },
        {
            title: "Chapter 5: Xbox Networking (Teredo)",
            content: `
        <p class="mb-4 text-gray-300">
            If you play Forza Horizon online and keep disconnecting:
            <br/>Go to Settings > Gaming > Xbox Networking.
            <br/>Check if the "NAT Type" is Open. If it's "Moderate" or "Strict", click "Fix it".
            <br/>This restarts the Teredo tunneling adapter.
        </p>
      `
        },
        {
            title: "Chapter 6: Presence Writer (FPS Lag)",
            content: `
        <p class="mb-4 text-gray-300">
            There is a file called <code>GameBarPresenceWriter.exe</code> that alerts your friends "Playing Valorant...".
            <br/>On some PCs, this causes micro-freezes. If disabling the Game Bar doesn't solve it, rename this file in the System32 folder (risky, do a backup).
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 7: Game Pass on PC",
            content: `
            <p class="mb-4 text-gray-300">
                If you subscribe to Game Pass, DO NOT uninstall the Xbox app.
                <br/>But disable the "Achievement Unlocked" notifications, as they cover the in-game minimap.
            </p>
            `
        },
        {
            title: "Chapter 8: Performance Widget",
            content: `
            <p class="mb-4 text-gray-300">
                The Game Bar has an FPS/CPU widget. It's useful, but consumes more resources than RivaTuner (MSI Afterburner). Prefer RivaTuner.
            </p>
            `
        },
        {
            title: "Chapter 9: GPU Scheduler",
            content: `
            <p class="mb-4 text-gray-300">
                Remember to enable "Hardware-accelerated GPU scheduling" in Windows graphics settings. It reduces latency.
            </p>
            `
        },
        {
            title: "Chapter 10: Reinstalling",
            content: `
            <p class="mb-4 text-gray-300">
                If you regret it, download it back from the Microsoft Store for free.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does the Game Bar cause blue screens?",
            answer: "Rarely. It usually conflicts with third-party overlays (Discord + Steam + Nvidia + Game Bar = Crash). Use only 1 overlay."
        },
        {
            question: "How to clip without Game Bar?",
            answer: "Use Nvidia ShadowPlay (GeForce Experience) or OBS Replay Buffer. They are 10x better."
        }
    ];

    const externalReferences = [
        { name: "Disable Game DVR (Microsoft)", url: "https://support.microsoft.com/en-us/windows/enable-xbox-game-bar-26e6d734-228b-c918-09d2-570a24016146" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Windows",
            description: "Complete debloat."
        },
        {
            href: "/guides/obs-studio-gravacao-replay-buffer-av1",
            title: "OBS",
            description: "Clipping alternative."
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

