import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'monitor-ultrawide-jogos-competitivos',
    title: "Ultrawide Monitor (21:9): Black Bars in Valorant and HUD Fixes",
    description: "Ultrawide displays are stunning, but they can be a nightmare for competitive gaming. Learn how to configure black bars (4:3 or 16:9) and use Flawless Widescreen in unsupported titles.",
    category: 'hardware',
    difficulty: 'Intermediate',
    time: '20 min'
};

const title = "Ultrawide Gaming (2026): Advantage or Headache?";
const description = "In racing games, 21:9 is unbeatable. In Valorant, it is restricted. Learn how to master your wide monitor to get the best of both worlds.";

const keywords = [
    'valorant ultrawide black bars fix guide',
    'how to play cs2 on ultrawide 4:3 stretched',
    'flawless widescreen elden ring tutorial 2026',
    '21:9 monitor competitive gaming disadvantages',
    'hud fix ultrawide mods for modern games',
    'play 16:9 on 21:9 monitor without distortion',
    'samsung odyssey g9 gaming settings guide',
    'best fov for ultrawide resolution',
    'voltris optimizer desktop resolution fix',
    'gpu scaling nvidia control panel guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('monitor-ultrawide-jogos-competitivos', title, description, keywords, locale);
}

export default function UltrawideGuide() {
    const summaryTable = [
        { label: "Valorant", value: "Black Bars (Mandatory)" },
        { label: "CS2", value: "21:9 Support (Advantage)" },
        { label: "LoL/Dota", value: "Supported (Map Vision)" },
        { label: "Elden Ring", value: "Mod Required (Flawless WS)" },
        { label: "Scaling", value: "No Scaling (GPU Driven)" },
        { label: "Streaming", value: "16:9 (Canvas/Output)" },
        { label: "HUD Position", value: "Centered Layout" }
    ];

    const contentSections = [
        {
            title: "Introduction: The FOV Conflict",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In tactical competitive shooters (e.g., Valorant, Overwatch), developers often block 21:9 support to prevent users from gaining a peripheral vision advantage over 16:9 players. However, in titles like League of Legends and Call of Duty, it is fully permitted.
        </p>
      `
        },
        {
            title: "Chapter 1: Valorant (Fixed Black Bars)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">How to play without stretching?</h4>
                <p class="text-gray-400 text-xs text-justify">
                    If you launch Valorant at 2560x1080 natively, the game engine crops the top and bottom of your view (Zoom), putting you at a significant disadvantage.
                    <br/>Solution: Play at <strong>1920x1080 (16:9)</strong> with side black bars.
                    <br/>In NVIDIA Control Panel > Adjust desktop size and position > Scaling tab:
                    <br/>Select <strong>\"Aspect Ratio\"</strong> and set \"Perform scaling on: <strong>GPU</strong>.\"
                    <br/>This ensures the monitor displays a perfect 1080p image in the center with black borders and zero distortion.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Flawless Widescreen (Offline Gaming)",
            content: `
        <p class="mb-4 text-gray-300">
            Many titles (Elden Ring, Sekiro, Final Fantasy) do not natively support 21:9 and default to black bars.
            <br/>Download <strong>Flawless Widescreen</strong>.
            <br/>It injects a memory fix that removes the bars and adjusts the HUD aspect ratio.
            <br/><em>Warning:</em> In Elden Ring, this requires disabling the Anti-Cheat (offline mode), otherwise you risk a ban.
        </p>
      `
        },
        {
            title: "Chapter 3: The MOBA Advantage (LoL/Dota)",
            content: `
        <p class="mb-4 text-gray-300">
            In League of Legends, 21:9 is essentially Overpowered (OP).
            <br/>You can see the Jungler approaching from the river long before a standard 16:9 player can.
            <br/>Recommendation: Enable \"Minimap on the right side\" in options, but be careful not to strain your neck looking at the far corners. Increase the minimap scale to compensate for the distance.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Streaming on Twitch/YouTube",
            content: `
        <p class="mb-4 text-gray-300">
            Broadcasting in 21:9 is suboptimal for mobile viewers, who will see massive black bars at the top and bottom.
            <br/>In OBS Studio:
            <br/>Set \"Base Canvas\" to 2560x1080.
            <br/>Set \"Output (Scaled) Resolution\" to 1920x1080.
            <br/>Will this squish the image? Yes.
            <br/>Best practice: Switch your game to 1920x1080 (Windowed Borderless) or configure OBS to crop the sides of your 21:9 feed to focus on the action.
        </p>
      `
        },
        {
            title: "Chapter 5: Centered HUD Layout",
            content: `
        <p class="mb-4 text-gray-300">
            In shooters (Battlefield, CoD), having ammo counts and minimaps at the extreme edges of a 21:9 screen forces you to look away from your crosshair.
            <br/>Look in the video options for settings like <strong>\"Safe Area Boundary\"</strong> or \"HUD Limits.\"
            <br/>Squeeze the HUD toward the center of the screen as if you were using a 16:9 monitor.
        </p>
      `
        },
        {
            title: "Chapter 6: 32:9 (Super Ultrawide)",
            content: `
        <p class="mb-4 text-gray-300">
            Displays like the Odyssey G9 (32:9) are equivalent to two 27\" monitors glued together.
            <br/>They require an EXTREMELY POWERFUL GPU. The pixel count is nearly that of 4K. If you have an RTX 3060, do not expect modern titles to run well on Ultra settings in 32:9.
        </p>
      `
        },
        {
            title: "Chapter 7: Windows FancyZones Productivity",
            content: `
        <p class="mb-4 text-gray-300">
            For productivity and multitasking while waiting in queues:
            <br/>Install <strong>Microsoft PowerToys</strong>.
            <br/>Use \"FancyZones\" to split your monitor into 3 virtual areas.
            <br/>Center: Game (Windowed mode). Left: Discord. Right: Spotify/Browser.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Stretched Cutscenes",
            content: `
            <p class="mb-4 text-gray-300">
                Many games render pre-recorded cutscenes in 16:9.
                <br/>On a 21:9 monitor, these may appear stretched (distorted characters) or with pillarboxing. There is typically no fix for pre-rendered video files; you must simply accept it.
            </p>
            `
        },
        {
            title: "Chapter 9: Curved vs. Flat Panels",
            content: `
            <p class="mb-4 text-gray-300">
                In the Ultrawide format, an aggressive curve (1500R or 1000R) is essential to bring the edges into your field of view without color shifting or IPS glow. Avoid flat Ultrawides if you sit close to your desk.
            </p>
            `
        },
        {
            title: "Chapter 10: 4:3 Stretched on Ultrawide",
            content: `
            <p class="mb-4 text-gray-300">
                Is it possible to play CS2 \"stretched\" on an Ultrawide? Yes, and the character models become massive.
                <br/>However, the horizontal distortion is so severe that your X/Y mouse sensitivity will feel completely mismatched. Only recommended for those obsessed with large targets.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Will I lose FPS switching from 1080p to Ultrawide?",
            answer: "Yes, expect a 25% to 30% performance drop. A 2560x1080 monitor has roughly 30% more pixels to render than a standard 1920x1080 display."
        },
        {
            question: "Will Valorant ever natively support 21:9?",
            answer: "Riot has stated no. It is a competitive design choice intended to preserve the integrity of their e-sport environment."
        },
        {
            question: "Where can I find ultrawide mods?",
            answer: "The PCGamingWiki website is the ultimate resource. Search for your specific game there and check the 'Ultrawide' section for community-made fixes and patches."
        }
    ];

    const externalReferences = [
        { name: "Flawless Widescreen Official Site", url: "https://www.flawlesswidescreen.org/" },
        { name: "PCGamingWiki (The Gaming Encyclopedia)", url: "https://www.pcgamingwiki.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "HZ Setup Guide",
            description: "Ensuring 144Hz works correctly on your display."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "NVIDIA Control Panel",
            description: "Correct GPU scaling settings for Ultrawide."
        },
        {
            href: "/guides/obs-studio-melhores-configuracoes-stream",
            title: "OBS Studio",
            description: "How to stream professionally in 21:9."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
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

