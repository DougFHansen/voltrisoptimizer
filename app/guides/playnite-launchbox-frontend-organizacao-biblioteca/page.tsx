import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'playnite-launchbox-frontend-organizacao-biblioteca',
    title: "Playnite & LaunchBox (2026): Organize Your Games and Emulators",
    description: "Combine Steam, Epic, Xbox, and Emulators into a single, beautiful interface. Guide for configuring Playnite, themes, metadata scraping, and automation scripts.",
    category: 'software',
    difficulty: 'Beginner',
    time: '30 min'
};

const title = "Your PC Looking Like a Console: Playnite Guide";
const description = "Tired of opening 10 different launchers? Playnite is open-source, lightweight, and groups ALL your games in one place. With full controller support.";

const keywords = [
    'playnite vs launchbox which is better 2026',
    'how to configure emulators in playnite',
    'playnite full screen theme ps5',
    'launchbox big box download free',
    'import games steam epic gog xbox playnite',
    'metadata scraper igdb screenscraper',
    'voltris optimizer launcher',
    'playnite scripts extensions'
];

export const metadata: Metadata = createGuideMetadata('playnite-launchbox-frontend-organizacao-biblioteca', title, description, keywords);

export default function FrontendGuide() {
    const summaryTable = [
        { label: "Software", value: "Playnite (Free)" },
        { label: "Alternative", value: "LaunchBox (Paid/Free)" },
        { label: "Mode", value: "Fullscreen (Controller)" },
        { label: "Scraper", value: "IGDB (Twitch)" },
        { label: "Themes", value: "PS5ish / Xbox Series" },
        { label: "Plugins", value: "HowLongToBeat / SuccessStory" },
        { label: "Emulators", value: "Auto-Import" }
    ];

    const contentSections = [
        {
            title: "Introduction: Playnite vs LaunchBox",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          - <strong>Playnite:</strong> Completely free and open source. Very functional Desktop interface and customizable Fullscreen mode. Lightweight.
          - <strong>LaunchBox:</strong> Beautiful, but the "Big Box" version (for TV) costs $30. Focused on arcade-style visuals (background videos).
          <br/>We recommend Playnite for 90% of users.
        </p>
      `
        },
        {
            title: "Chapter 1: Importing Libraries",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Integrations</h4>
                <p class="text-gray-400 text-xs text-justify">
                    In the first setup, connect your accounts:
                    <br/>- Steam (Needs to be Public or require API Key).
                    <br/>- Epic Games, GOG, EA App, Ubisoft Connect.
                    <br/>- Amazon Prime Gaming.
                    <br/>Playnite pulls all installed AND non-installed games.
                    <br/>When you click "Play," it opens the original launcher and runs the game. Frictionless.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Configuring Emulators",
            content: `
        <p class="mb-4 text-gray-300">
            Menu > Library > Configure Emulators.
            <br/>Click "Import." Playnite scans your PC for RetroArch, Yuzu, PCSX2, etc.
            <br/>Then click "Scan Automatically" to look for ROMs in your folders.
            <br/>It identifies the games, downloads covers, and creates library entries alongside your PC games.
        </p>
      `
        },
        {
            title: "Chapter 3: Fullscreen Mode (Console Style)",
            content: `
        <p class="mb-4 text-gray-300">
            Press F11.
            <br/>Playnite enters a fullscreen mode navigable by controller (Xbox/PS).
            <br/>Go to Settings > Layout. Install themes like <strong>"PS5ish"</strong> or <strong>"Xbox Series X"</strong>.
            <br/>Your PC turns into a console on your living room TV.
            <br/>Configure Playnite to start with Windows in Fullscreen mode if it's a dedicated gaming PC.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Essential Extensions",
            content: `
        <p class="mb-4 text-gray-300">
            Playnite's power lies in its Add-ons.
            <br/>- <strong>HowLongToBeat:</strong> Shows the time to beat the game on the details screen.
            <br/>- <strong>SuccessStory:</strong> Pulls your achievements (Steam/RetroAchievements) and displays them in Playnite.
            <br/>- <strong>IsThereAnyDeal:</strong> Alerts about wishlist sales.
            <br/>- <strong>Duplicate Hider:</strong> If you have the same game on Steam and Epic, it hides one of them to keep it clean.
        </p>
      `
        },
        {
            title: "Chapter 5: Metadata (Scraping)",
            content: `
        <p class="mb-4 text-gray-300">
            Playnite uses IGDB by default.
            <br/>Ctrl+A (Select All) > Download Metadata.
            <br/>It downloads Cover, Background, Icon, Description, Developer, and Genre.
            <br/>For retro games, install the "ScreenScraper" plugin (requires a free account) to download gameplay videos for the background.
        </p>
      `
        },
        {
            title: "Chapter 6: Automation Scripts",
            content: `
        <p class="mb-4 text-gray-300">
            Settings > Scripts.
            <br/>You can configure actions for "Before starting the game" and "After closing."
            <br/>Ex: <strong>"Change monitor resolution to 4K before opening, back to 1080p after"</strong>.
            <br/>Ex: <strong>"Close Wallpaper Engine to save RAM while playing"</strong>.
        </p>
      `
        },
        {
            title: "Chapter 7: Categories and Filters",
            content: `
        <p class="mb-4 text-gray-300">
            Create smart filters.
            <br/>Ex: "Installed Games" + "Genre: RPG" + "Playtime < 20h".
            <br/>Save it as a quick filter in the sidebar. Helps combat the backlog.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: LaunchBox (Big Box)",
            content: `
            <p class="mb-4 text-gray-300">
                If you pay for LaunchBox Premium ($75 lifetime), you get Big Box.
                <br/>It features animated 3D transitions, arcade wheel videos, and "Attract Mode" (plays demos when idle). It's visually superior but functionally similar.
            </p>
            `
        },
        {
            title: "Chapter 9: Backup",
            content: `
            <p class="mb-4 text-gray-300">
                Playnite is portable.
                <br/>If you copy the Playnite folder to a USB drive, you take your entire configured library (database) with you.
                <br/>Back up the folder periodically.
            </p>
            `
        },
        {
            title: "Chapter 10: Splash Screens",
            content: `
            <p class="mb-4 text-gray-300">
                Extension: Extra Metadata Loader.
                <br/>Adds Console Logo videos or Loading Screens before opening the game, providing a smooth transition.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does Playnite slow down the game?",
            answer: "No. It uses about 50MB of RAM and can be configured to close the GUI when a game starts."
        },
        {
            question: "Does it detect non-original games?",
            answer: "Yes. Just drag the game's .exe shortcut into the Playnite window. It creates the entry and downloads data from IGDB."
        }
    ];

    const externalReferences = [
        { name: "Playnite Download", url: "https://playnite.link/" },
        { name: "Playnite Forums (Themes)", url: "https://playnite.link/forum/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/retroarch-guia-completo-cores-shaders-crt",
            title: "RetroArch",
            description: "Seamless integration."
        },
        {
            href: "/guides/lossless-scaling-frame-generation-fsr-guia",
            title: "Tools",
            description: "Useful add-on."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
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

