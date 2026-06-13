import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'team-fortress-2-mastercomfig-fps-competitivo',
    title: "Team Fortress 2 (2026): Mastercomfig, DX8 and Competitive Optimization",
    description: "TF2 has 20 years of spaghetti code. Learn how to use Mastercomfig to clean up the game, force DX8 for maximum FPS, and improve netcode.",
    category: 'games',
    difficulty: 'Advanced',
    time: '20 min'
};

const title = "Competitive TF2 (2026): 300 FPS and Perfect Netcode";
const description = "The old Source Engine runs poorly on new hardware. Mastercomfig is the sacred bible to fix this and make fluid Rocket Jumps.";

const keywords = [
    'tf2 mastercomfig download install',
    'team fortress 2 dx8 vs dx9 fps',
    'how to install tf2 configs autoexec',
    'interp settings tf2 projectile',
    'custom hud tf2 rayshud',
    'remove explosion particles tf2',
    'null cancel movement script tf2',
    'voltris optimizer valve',
    'fix stutter tf2 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('team-fortress-2-mastercomfig-fps-competitivo', title, description, keywords, locale);
}

export default function TF2Guide() {
    const summaryTable = [
        { label: "Config", value: "Mastercomfig Low/Medium" },
        { label: "DirectX", value: "DX 8.1 (Max FPS)" },
        { label: "DirectX", value: "DX 9.5 (Skins/Sheens)" },
        { label: "Netcode", value: "Interp 0.0152 (Hitscan)" },
        { label: "Netcode", value: "Interp 0.0303 (Projectile)" },
        { label: "HUD", value: "Custom (RaysHUD/ToonHUD)" },
        { label: "Ragdolls", value: "Off (Cleanup)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Source Engine Spaghetti",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          TF2 is CPU bound. An RTX 4090 stays at 40% usage. The secret is optimizing Single Core CPU usage and cleaning up particles (Unusual effects eat FPS).
        </p>
      `
        },
        {
            title: "Chapter 1: Mastercomfig (The Base)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Installation</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Go to <strong>mastercomfig.com</strong>.
                    <br/>2. Choose a preset:
                    <br/>- <strong>Low:</strong> For potato PCs or FPS maniacs. The game looks ugly (Minecraft-like), but runs at 500 FPS. Makes the game very visually clean.
                    <br/>- <strong>Medium High:</strong> Visual/performance balance.
                    <br/>3. Download the <code>.vpk</code> and place it in the <code>tf/custom</code> folder.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: DX8 vs DX9 (Launch Options)",
            content: `
        <p class="mb-4 text-gray-300">
            In Steam launch options:
            <br/>- <code>-dxlevel 81</code>: DirectX 8 mode. Removes glows (Killstreak Sheens), some skins look matte, and Ubercharge doesn't glow as much. MASSIVE FPS GAIN.
            <br/>- <code>-dxlevel 95</code>: DirectX 9 mode. If you paid a lot for Australium skins and want to see them shining, use this.
            <br/><em>Note:</em> Competitive usually accepts DX8, but DX9 is better for streams.
        </p>
      `
        },
        {
            title: "Chapter 3: Netcode and Interp",
            content: `
        <p class="mb-4 text-gray-300">
            TF2 has network settings from 2007 (designed for dial-up internet).
            <br/>In <code>autoexec.cfg</code> (or Mastercomfig modules):
            <br/>- <strong>Snapshot Buffer:</strong> Low (0.0152s) for Hitscan (Sniper/Scout). Instant response.
            <br/>- <strong>Snapshot Buffer:</strong> Safe (0.0303s) for Projectiles (Soldier/Demo). Prevents rocket failures if ping fluctuates.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Custom HUD",
            content: `
        <p class="mb-4 text-gray-300">
            The default HUD is bad (damage far from crosshair).
            <br/>Download a HUD at <strong>huds.tf</strong> (e.g., RaysHUD, ToonHUD, BudHUD).
            <br/>They center health and ammo, allowing you to focus on aiming. Install it in the <code>tf/custom</code> folder.
        </p>
      `
        },
        {
            title: "Chapter 5: Ragdolls and Gibs",
            content: `
        <p class="mb-4 text-gray-300">
            When someone dies, the body flies (Ragdoll) and explodes into pieces (Gibs).
            <br/>Calculating the physics of these bodies on a 12v12 server consumes CPU.
            <br/>Use the command (or Mastercomfig module) to disable Ragdolls. Enemies disappear upon death. Less visual distraction and more FPS.
        </p>
      `
        },
        {
            title: "Chapter 6: Null-Cancelling Movement",
            content: `
        <p class="mb-4 text-gray-300">
            Essential script for Scout.
            <br/>It prevents you from stopping if you press A and D at the same time. Instead of stopping, it prioritizes the last key pressed, ensuring constant movement.
            <br/>Add the script to your <code>autoexec.cfg</code>.
        </p>
      `
        },
        {
            title: "Chapter 7: No-Hats Mod (Casual)",
            content: `
        <p class="mb-4 text-gray-300">
            There is a mod that removes all hats (Hats) from the game.
            <br/>It only works on community servers with <code>sv_pure 0</code>.
            <br/>On official Valve Casual (<code>sv_pure 1</code>), it doesn't work. Mastercomfig is the only way for Casual.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Player Shadows",
            content: `
            <p class="mb-4 text-gray-300">
                Disable dynamic shadows (<code>r_shadows 0</code>).
                <br/>In enclosed maps, does the shadow give away your position around the corner? Yes. But gaining 20 FPS helps more in winning a duel than shadow information (which is bugged in TF2).
            </p>
            `
        },
        {
            title: "Chapter 9: Hitsound and Killsound",
            content: `
            <p class="mb-4 text-gray-300">
                Turn on the hit sound in advanced options.
                <br/>Pitch: Low for high damage (Boom), High for low damage (Tink).
                <br/>Helps you instantly know how much damage your rocket did without looking at the numbers.
            </p>
            `
        },
        {
            title: "Chapter 10: Server FPS",
            content: `
            <p class="mb-4 text-gray-300">
                TF2 runs at 66 ticks per second.
                <br/>Your FPS should always be higher than 66.
                <br/>Ideally, FPS = Monitor Refresh Rate x 2 + 1. (e.g., 144Hz -> cap at 289 FPS) to minimize input lag.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "How do I open the console?",
            answer: "Options > Keyboard > Advanced > Enable Developer Console. Press the tilde (~) or backtick (`) key."
        },
        {
            question: "FOV (Field of View)?",
            answer: "Always use FOV 90 (<code>fov_desired 90</code>). Anything less is tunnel vision. Viewmodel FOV (weapon) can also be increased so it doesn't cover the screen (<code>viewmodel_fov 70</code>)."
        },
        {
            question: "Does it work on Mac/Linux?",
            answer: "Yes, TF2 runs natively on Linux (Vulkan) even better than on Windows sometimes."
        }
    ];

    const externalReferences = [
        { name: "Mastercomfig", url: "https://mastercomfig.com/" },
        { name: "HUDS.TF", url: "https://huds.tf/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/cs2-otimizacao-fps-competitivo",
            title: "CS2",
            description: "Same Source engine (evolved)."
        },
        {
            href: "/guides/reduzir-ping-exitlag-noping-dns",
            title: "Ping",
            description: "Helps with Hitreg."
        },
        {
            href: "/guides/mouse-acceleration-raw-accel-guia",
            title: "Mouse",
            description: "Sniper aiming."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Advanced"
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

