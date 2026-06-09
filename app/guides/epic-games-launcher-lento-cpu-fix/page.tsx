import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'epic-games-launcher-lento-cpu-fix',
  title: "Epic Games Launcher Slow or High CPU Usage? How to Fix (2026)",
  description: "Is the Epic Games launcher freezing your PC or consuming too much CPU at idle? Learn how to optimize the Epic Launcher on Windows 11 in 2026.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "Epic Games Launcher Slow or High CPU Usage? How to Fix (2026)";
const description = "Is the Epic Games launcher freezing your PC or consuming too much CPU at idle? Learn how to optimize the Epic Launcher on Windows 11 in 2026.";
const keywords = [
    'epic games launcher slow how to fix 2026',
    'reduce cpu usage epic games launcher guide',
    'epic games launcher freezing windows 11 tutorial',
    'optimize epic games launcher startup 2026',
    'epic launcher consuming too much ram how to fix guide'
];

export const metadata: Metadata = createGuideMetadata('epic-games-launcher-lento-cpu-fix', title, description, keywords);

export default function EpicGamesFixGuide() {
    const summaryTable = [
        { label: "Issue #1", value: "High CPU usage in background (Webview)" },
        { label: "Issue #2", value: "Slow download even with fiber" },
        { label: "Key Fix", value: "Download rate limits and Power Saver Mode" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "The \"weight\" of Epic Games in 2026",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Although the **Epic Games Store** offers incredible free games every week, its launcher program is known for being heavy. Built with web technologies, it can consume more processor than the game itself if poorly configured. In 2026, with multitasking computers, keeping the launcher "quiet" while you are not playing is essential for system health.
        </p>
      `
        },
        {
            title: "1. Reducing Idle CPU Usage",
            content: `
        <p class="mb-4 text-gray-300">The launcher tends to "monitor" hardware all the time. Disable this:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Open the Epic Games Launcher and click on your profile icon at the top right.</li>
            <li>Go to <strong>Settings</strong>.</li>
            <li>Uncheck the option <strong>'Enable Voice Navigation'</strong> and <strong>'Minimize to System Tray'</strong> (if you prefer it to truly close).</li>
            <li>Check the option <strong>'Low Power Mode'</strong> (if available). This reduces shop animations, relieving your GPU and CPU usage in 2026.</li>
        </ol>
      `
        },
        {
            title: "2. Fixing Slow Downloads",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Bandwidth Trick:</h4>
            <p class="text-sm text-gray-300">
                Many times, Epic downloads get stuck at 0B/s or are very slow. <br/><br/>
                In the Settings menu, look for <strong>'Throttle Downloads'</strong>. Set a very high value, like 1000000 (one million KB/s). For some technical reason in Epic's code, putting a forced manual limit often "unlocks" your connection's maximum speed in 2026.
            </p>
        </div>
      `
        },
        {
            title: "3. The Clean Startup",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Don't let it start with your PC:</strong> 
            <br/><br/>The biggest cause of slowness when turning on your computer is the Epic Launcher trying to check for updates in the very first second of Windows 11. <br/><br/>
            Go to the launcher settings and uncheck **'Run when my computer starts'**. Only open the store when you REALLY are going to play. This will save around 300MB of RAM and several CPU cycles from boot time.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/limpar-cache-dns-ip-flushdns",
            title: "Increase Speed",
            description: "Improve your network for Epic downloads."
        },
        {
            href: "/guides/limpar-memoria-ram-windows",
            title: "Free RAM",
            description: "Tips to make Windows run lighter."
        },
        {
            href: "/guides/atalhos-produtividade-windows",
            title: "Useful Shortcuts",
            description: "Navigate Windows 11 faster."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
            difficultyLevel="Easy"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}
