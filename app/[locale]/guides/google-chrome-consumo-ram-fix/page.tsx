import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'google-chrome-consumo-ram-fix',
    title: "Google Chrome (2026): Reducing RAM and CPU Usage for Gaming",
    description: "Is Chrome eating up 4GB of your RAM? Learn how to use Memory Saver, disable background apps, and adjust hardware acceleration to free up resources for your games.",
    category: 'software',
    difficulty: 'Easy',
    time: '15 min'
};

const title = "Google Chrome Optimization (2026): RAM Cleaner & FPS";
const description = "Chrome is notorious for devouring RAM. If you play games with a browser open in the background (YouTube/Twitch), it's stealing your FPS. Let's put Chrome on a diet.";

const keywords = [
    'google chrome high ram usage fix 2026',
    'enable chrome memory saver',
    'chrome causing gaming lag fps drop',
    'chrome hardware acceleration gpu',
    'suspend inactive chrome tabs',
    'chrome flags for performance',
    'chrome extensions high cpu usage',
    'disable chrome background apps',
    'best gaming browser opera gx vs chrome',
    'clean chrome cache slow pc'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('google-chrome-consumo-ram-fix', title, description, keywords, locale);
}

export default function ChromeGuide() {
    const summaryTable = [
        { label: "Memory Saver", value: "ON (Aggressive)" },
        { label: "Background Apps", value: "OFF (Crucial)" },
        { label: "Hardware Accel", value: "OFF (If GPU is at 100%)" },
        { label: "Energy Saver", value: "ON" },
        { label: "Extensions", value: "uBlock Origin" },
        { label: "Preload Pages", value: "Off" },
        { label: "Theme", value: "Default (Lightweight)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The RAM Monster",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Each Chrome tab runs as a separate process in Windows. If you have 16GB of RAM and Chrome is using 4GB, there's less available for your game and system cache, which results in stutters. Fortunately, 2025/2026 updates brought built-in efficiency tools.
        </p>
      `
        },
        {
            title: "Chapter 1: Memory Saver",
            content: `
        <div class="space-y-4">
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Enable Memory Saver</h4>
                <p class="text-white font-mono text-sm mb-2">Settings > Performance > Memory Saver</p>
                <p class="text-gray-400 text-xs">
                    Enable this setting. Chrome will "freeze" tabs you aren't currently using (like that guide you read an hour ago). These tabs stop consuming RAM and only reload when you click them again, potentially freeing up several GBs of RAM instantly.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Background Apps (The Performance Killer)</h4>
                <p class="text-white font-mono text-sm mb-2">Settings > System</p>
                <p class="text-gray-400 text-xs">
                   Turn OFF: <span class="text-red-400 font-bold">"Continue running background apps when Google Chrome is closed"</span>.
                   <br/>If this is on, Chrome continues to consume resources even after you've closed the window, stealing cycles from your game.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Hardware Acceleration",
            content: `
        <p class="mb-4 text-gray-300">
            Found in Settings > System > "Use graphics acceleration when available."
            <br/><strong>The Trade-off:</strong>
            <br/>If you watch videos (YouTube/Twitch) while gaming:
            <br/>1. <strong>ENABLED:</strong> The video uses your GPU. This can lower game performance on older cards like the GTX 1060.
            <br/>2. <strong>DISABLED:</strong> The video uses your CPU. This may cause lag on older 4-core processors.
            <br/><em>Recommendation:</em> Test both. Generally, DISABLING helps if you prioritize absolute in-game FPS over video smoothness.
        </p>
      `
        },
        {
            title: "Chapter 3: Ghost Extensions",
            content: `
        <p class="mb-4 text-gray-300">
            Extensions like "Honey," "Grammarly," or certain VPNs run scripts on EVERY page you visit. This adds up.
            <br/>Go to <code>chrome://extensions</code> and remove anything you don't strictly need.
            <br/>Keep only one lightweight adblocker (we recommend <strong>uBlock Origin Lite</strong>).
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Chrome Flags (Advanced)",
            content: `
        <p class="mb-4 text-gray-300">
            Type <code>chrome://flags</code> in the address bar.
            <br/>Search for and adjust:
            <br/>- <strong>Smooth Scrolling:</strong> Disabled (Reduces scrolling input lag).
            <br/>- <strong>GPU Rasterization:</strong> Enabled (Forces GPU to draw web pages, relieving the CPU).
            <br/>- <strong>Choose ANGLE graphics backend:</strong> Try changing from Default to D3D11 or OpenGL if you experience black screen issues on Twitch or YouTube.
        </p>
      `
        },
        {
            title: "Chapter 5: Preloading Pages",
            content: `
        <p class="mb-4 text-gray-300">
            Settings > Performance > Speed.
            <br/>"Preload pages."
            <br/>Set to <strong>No preloading</strong>.
            <br/>Preloading tries to predict where you'll click and loads that site in the background, consuming internet bandwidth and CPU cycles while you're in a match.
        </p>
      `
        },
        {
            title: "Chapter 6: AV1 Codec and YouTube",
            content: `
        <p class="mb-4 text-gray-300">
            If your PC stutters while watching 4K/1080p60 videos:
            <br/>Install an extension like "h264ify" to force YouTube to use the H.264 codec. It's much less processing-intensive for older GPUs to decode than VP9/AV1.
        </p>
      `
        },
        {
            title: "Chapter 7: Cache Reset",
            content: `
        <p class="mb-4 text-gray-300">
            If Chrome feels sluggish, you don't necessarily need to reinstall it.
            <br/>Press Ctrl+Shift+Del > Select "All time" > "Cached images and files."
            <br/>Clearing several GBs of junk can stop disk-based hitching.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Opera GX vs. Chrome",
            content: `
            <p class="mb-4 text-gray-300">
                Opera GX features a "RAM Limiter." Is it worth it?
                <br/>Yes, but it simply throttles the browser once the limit is hit. Modern Chrome with "Memory Saver" (Chapter 1) handles this more intelligently by actually freeing up the memory. Chrome remains the more stable platform.
            </p>
            `
        },
        {
            title: "Chapter 9: Incognito Mode for Gaming?",
            content: `
            <p class="mb-4 text-gray-300">
                Avoid playing games with incognito tabs open. Since they don't save cache, every refresh forces the site to re-download all assets, wasting bandwidth and potentially increasing your in-game ping.
            </p>
            `
        },
        {
            title: "Chapter 10: Chrome Task Manager",
            content: `
            <p class="mb-4 text-gray-300">
                Chrome has its own internal Task Manager.
                <br/>Press <strong>Shift+Esc</strong> while inside Chrome.
                <br/>Identify which specific tab or extension is hogging your CPU. Sometimes a single frozen tab consumes 30% of your processor; you can kill it directly from here.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Should I switch to Microsoft Edge for better performance?",
            answer: "Edge uses the same Chromium base as Chrome and features an excellent 'Sleeping Tabs' mode. It is slightly more lightweight due to its deeper Windows integration. It's a valid alternative if Chrome is underperforming."
        },
        {
            question: "What is considered 'normal' RAM usage for Chrome?",
            answer: "With 5 tabs open, usage between 800MB and 1.5GB is standard. If you're exceeding 3GB with that many tabs, there may be a memory leak or a buggy extension."
        },
        {
            question: "Does Hardware Acceleration cause Discord streams to go black?",
            answer: "Yes, this is a common driver conflict. Disable hardware acceleration in your browser if your screen sharing appears black to others on Discord."
        }
    ];

    const externalReferences = [
        { name: "Chrome Enterprise Release Notes", url: "https://support.google.com/chrome/a/answer/7679408" },
        { name: "Chromium Project", url: "https://www.chromium.org/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Guide",
            description: "Maintain a fast browser cache."
        },
        {
            href: "/guides/discord-otimizacao-overlay-lag",
            title: "Discord Fixes",
            description: "Another common RAM hog."
        },
        {
            href: "/guides/windows-defender-otimizacao-jogos",
            title: "Defender Settings",
            description: "Reduce browser-related file scans."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Easy"
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

