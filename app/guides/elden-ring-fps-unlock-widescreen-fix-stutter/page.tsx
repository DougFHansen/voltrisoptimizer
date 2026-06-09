import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'elden-ring-fps-unlock-widescreen-fix-stutter',
    title: "Elden Ring (2026): FPS Unlock, Ultrawide, and Stutter Fix Guide",
    description: "Experience Elden Ring beyond the 60 FPS limit and in native Ultrawide. Complete guide for Flawless Widescreen, micro-stutter corrections (DXVK), and optimized Ray Tracing.",
    category: 'games-fix',
    difficulty: 'Advanced',
    time: '20 min'
};

const title = "Elden Ring Unlocked: The Ultimate Optimization Guide";
const description = "FromSoftware hard-locks its PC titles at 60 FPS and 16:9 aspect ratio. Learn how to break these barriers and play at 120+ FPS with 21:9 support, while navigating the risks of the Anti-Cheat system.";

const keywords = [
    'elden ring fps unlocker 2026 flawless widescreen guide',
    'how to play elden ring ultrawide online mod',
    'elden ring stutter fix micro lag pc 2026',
    'fmf2 afmf elden ring frame generation tutorial',
    'ray tracing elden ring best performance settings',
    'disable easy anti cheat elden ring offline mode',
    'voltris optimizer souls game priority',
    'import save elden ring seamless coop guide'
];

export const metadata: Metadata = createGuideMetadata('elden-ring-fps-unlock-widescreen-fix-stutter', title, description, keywords);

export default function EldenRingGuide() {
    const summaryTable = [
        { label: "Recommended Tool", value: "Flawless Widescreen" },
        { label: "Online Mode", value: "DISABLED (Official Servers)" },
        { label: "Widescreen Support", value: "Native 21:9 & 32:9 (HUD Fix)" },
        { label: "FPS Capacity", value: "Unlocked (Up to 360 FPS)" },
        { label: "Multiplayer Mod", value: "Seamless Coop (P2P Servers)" },
        { label: "Ray Tracing", value: "Highly Taxing (Optional)" },
        { label: "Primary Stutter Fix", value: "Shader Cache / High Priority" }
    ];

    const contentSections = [
        {
            title: "Critical Warning: Easy Anti-Cheat (EAC)",
            content: `
        <div class="bg-red-900/20 border border-red-500/50 p-6 rounded-xl mb-6">
            <h3 class="text-red-400 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                OFFLINE MODE REQUIRED
            </h3>
            <p class="text-gray-300">
                To unlock your frame rate or utilize Ultrawide resolutions, you MUST disable the Easy Anti-Cheat (EAC) layer.
                <br/>This will force the game into Offline mode. You will not see player messages or be able to invade/co-op via official servers.
                <br/>To play modified multiplayer, utilize the <strong>Seamless Coop</strong> mod, which operates on separate, independent peer-to-peer networks.
            </p>
        </div>
      `
        },
        {
            title: "Chapter 1: Disabling EAC Safely",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Step-by-Step Procedure</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Navigate to the game's executable folder within Steam.
                    2. Create a new text file named <code>steam_appid.txt</code>.
                    3. Open the file and type only <code>1245620</code> then save.
                    4. Launch <code>eldenring.exe</code> directly (bypassing <code>start_protected_game.exe</code>).
                    The game will launch without EAC and display an \"Inappropriate activity detected - Offline Mode\" message. This confirms the bypass is successful.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Flawless Widescreen (FPS + aspect ratio)",
            content: `
        <p class="mb-4 text-gray-300">
            The most streamlined tool for the job.
            <br/>1. Download and install <strong>Flawless Widescreen</strong>.
            <br/>2. Find and install the \"Elden Ring\" plugin within the app.
            <br/>3. Check \"Fix Enabled,\" \"Aspect Ratio Fix\" (for Ultrawide), and \"Frame Time Adjustment\" (to unlock FPS).
            <br/>4. Set the \"Framerate Limit\" to match your monitor's Refresh Rate (Hz).
            <br/>5. Launch the game; the patches are applied in real-time.
            <br/>Additional Tip: Check \"Disable Vignette\" to remove the dark artificial border shadows.
        </p>
      `
        },
        {
            title: "Chapter 3: GitHub FPS Unlocker (Stand-Alone Alternative)",
            content: `
        <p class="mb-4 text-gray-300">
            If you prefer not to use Flawless Widescreen, download the \"Elden Ring FPS Unlocker\" from GitHub (by user 'uberhalit').
            <br/>It allows for specific FOV adjustments and FPS capping without needing a persistent background process.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Seamless Coop (Social Modding)",
            content: `
        <p class="mb-4 text-gray-300">
            The <strong>Seamless Coop</strong> mod completely re-architects the game's netcode.
            <br/>- Permanent Co-op: Players stay together even after defeating bosses.
            <br/>- Mount Support: Players can ride Torrent simultaneously.
            <br/>- Mod Synergy: Since it doesn't utilize FromSoftware's official servers, you can safely use FPS Unlockers and Ultrawide fixes alongside it!
        </p>
      `
        },
        {
            title: "Chapter 5: Eliminating Micro-Stutters (Shader Cache)",
            content: `
        <p class="mb-4 text-gray-300">
            Elden Ring often stutters while compiling shaders in new areas.
            <br/>In NVIDIA Control Panel > Manage 3D Settings > Shader Cache Size: Change to <strong>Unlimited</strong> or <strong>10GB</strong>.
            <br/>Within Windows: Enable \"Game Mode\" and set Elden Ring's process to \"High Performance\" under graphics settings.
        </p>
      `
        },
        {
            title: "Chapter 6: Ray Tracing Performance Reality",
            content: `
        <p class="mb-4 text-gray-300">
            Elden Ring's Ray Tracing implementation only affects Shadows and Ambient Occlusion (not Global Reflections).
            <br/>The visual impact is subtle, but the performance cost is MASSIVE.
            <br/>Recommendation: Keep Ray Tracing <strong>OFF</strong> unless you possess an RTX 4080 or better. At 4K resolution, RT can slash performance by over 30 FPS.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 7: HDR (High Dynamic Range) Masterclass",
            content: `
            <p class="mb-4 text-gray-300">
                FromSoftware's native HDR implementation is excellent.
                <br/>On OLED or high-peak-brightness displays, enable HDR in Windows (Win+Alt+B) and then in the game menu. Caves will gain true ink-black shadows while spells and incantations glow with intense brilliance.
            </p>
            `
        },
        {
            title: "Chapter 8: ReShade and Texture Mods",
            content: `
            <p class="mb-4 text-gray-300">
                You can safely use ReShade in Offline or Seamless Coop modes.
                <br/>We recommend presets that neutralize the game's heavy \"greenish/yellowish\" tint for a more natural, cinematic aesthetic.
            </p>
            `
        },
        {
            title: "Chapter 9: Protecting Your Journey (Save Backups)",
            content: `
            <p class="mb-4 text-gray-300">
                Regularly back up your save files found in <code>%appdata%/EldenRing</code>.
                <br/>Should your game data become corrupted by mods or should you encounter a malicious player in Seamless Coop, a manual backup is your only safety net.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can I get banned for using these fixes?",
            answer: "If you attempt to enter the official servers (EAC Enabled) with modified files or a modded character save, YES. Always remove all mod files before switching back to the Official Online mode."
        },
        {
            question: "Does high FPS break the game physics?",
            answer: "This was an issue at launch, but recent patches and community fixes have stabilized cloth physics and jump distance at high refresh rates. It is generally safe to play at 120 FPS+ now."
        }
    ];

    const externalReferences = [
        { name: "Flawless Widescreen Official Site", url: "https://www.flawlesswidescreen.org/" },
        { name: "Seamless Coop Mod (Nexus Mods)", url: "https://www.nexusmods.com/eldenring/mods/510" }
    ];

    const relatedGuides = [
        {
            href: "/guias/lossless-scaling-frame-generation-fsr-guia",
            title: "Frame Generation",
            description: "Doubling your FPS using advanced interpolation."
        },
        {
            href: "/guias/reshade-guia-instalacao-ray-tracing-rtgi-filtros",
            title: "ReShade Setup",
            description: "Enhancing colors and visual clarity."
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
