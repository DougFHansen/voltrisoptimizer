import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'elden-ring-fps-unlock-stutter-fix',
    title: "Elden Ring (2026): 60 FPS Unlock, Stutter Fix, and Widescreen",
    description: "Elden Ring is locked at 60 FPS and doesn't natively support Ultrawide. Learn how to unlock the framerate, fix DX12 stutters, and play in 21:9.",
    category: 'games',
    difficulty: 'Advanced',
    time: '30 min'
};

const title = "Elden Ring Turbo (2026): Goodbye 60 FPS Lock";
const description = "FromSoftware makes amazing games, but questionable PC ports. The 60 FPS limit and black bars on ultrawide monitors are frustrating. Let's fix that.";

const keywords = [
    'elden ring fps unlocker 2026 mod',
    'elden ring stutter fix dx12 cache',
    'how to play elden ring ultrawide flawless widescreen',
    'easy anti cheat disable elden ring offline',
    'best graphic settings elden ring low end pc',
    'elden ring white screen crash fix',
    'eac toggle elden ring nexus',
    'shadow quality elden ring performance',
    'voltris optimizer souls game',
    'rtx hdr elden ring'
];

export const metadata: Metadata = createGuideMetadata('elden-ring-fps-unlock-stutter-fix', title, description, keywords);

export default function EldenRingGuide() {
    const summaryTable = [
        { label: "FPS Lock", value: "Mod (Unlock it)" },
        { label: "Anti-Cheat", value: "Offline (For Mods)" },
        { label: "Shadows", value: "Medium" },
        { label: "Grass Quality", value: "Medium" },
        { label: "Motion Blur", value: "Off (Always)" },
        { label: "Shader Cache", value: "Unlimited (Driver)" },
        { label: "Global Illumination", value: "High (Not Max)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Engine's Shackles",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Do you experience micro-stuttering when entering a new area? That's shader compilation. Furthermore, the game is locked at 60Hz. For those with a 144Hz monitor, it feels slow.
        </p>
      `
        },
        {
            title: "Chapter 1: Disabling Easy Anti-Cheat (EAC)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Mandatory for Mods</h4>
                <p class="text-gray-400 text-xs text-justify">
                    To unlock FPS or use Ultrawide, you need to modify the game's memory. EAC blocks this.
                    <br/>1. Download "ToggleAntiCheat" from NexusMods.
                    <br/>2. Or create a <code>steam_appid.txt</code> file with the number <code>1245620</code> in the game folder and run <code>eldenring.exe</code> directly (not through Steam).
                    <br/><strong>Warning:</strong> You will be playing in OFFLINE mode. No messages on the ground, no invasions, no co-op.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Elden Ring FPS Unlocker",
            content: `
        <p class="mb-4 text-gray-300">
            Download the <a href="https://github.com/uberhalit/EldenRingFpsUnlocker" target="_blank" class="text-blue-400">Elden Ring FPS Unlocker</a> from GitHub.
            <br/>- Open the program.
            <br/>- Point it to the game.
            <br/>- Check "Unlock FPS". Define the limit (e.g., 144).
            <br/>- Click "Patch" and "Start Game".
            <br/>The combat fluidity at 120 FPS+ is transformative. Dodges become more responsive.
        </p>
      `
        },
        {
            title: "Chapter 3: Flawless Widescreen (21:9)",
            content: `
        <p class="mb-4 text-gray-300">
            The game renders black bars on purpose.
            <br/>Download <strong>Flawless Widescreen</strong>. Install the Elden Ring plugin.
            <br/>Enable "Fix Enabled".
            <br/>There you go. The game fills the whole screen. The HUD may need manual adjustment in the plugin options.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Optimized Graphic Settings",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Grass Quality:</strong> Medium (High renders grass too far away, which is heavy).
            - <strong>Shadow Quality:</strong> Medium.
            - <strong>SSAO:</strong> Medium.
            - <strong>Motion Blur:</strong> OFF (makes it harder to see fast attacks).
            - <strong>Ray Tracing:</strong> OFF (RT implementation in Elden Ring is visually subtle but very FPS-heavy).
        </p>
      `
        },
        {
            title: "Chapter 5: Stutter Fix (Shader Cache)",
            content: `
        <p class="mb-4 text-gray-300">
            In the Nvidia Control Panel:
            <br/>- Shader Cache Size: <strong>Unlimited</strong> or <strong>10GB</strong>.
            <br/>This allows the game to save all compiled shaders on the disk, preventing it from re-compiling every time you see a new dragon.
        </p>
      `
        },
        {
            title: "Chapter 6: Process Priority",
            content: `
        <p class="mb-4 text-gray-300">
            Use Voltris Optimizer or Process Lasso to set <code>eldenring.exe</code> to <strong>High</strong> priority and disable "Hyper-Threading" for this specific game if you have an older Intel CPU (helps with frame time stability).
        </p>
      `
        },
        {
            title: "Chapter 7: Controller (Input Lag)",
            content: `
        <p class="mb-4 text-gray-300">
            Souls games demand precision.
            <br/>Use a wired controller. Bluetooth delay can cause you to miss a "Parry".
            <br/>In the game menu, disable vibration if you prefer (it drains controller battery and can be distracting).
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Seamless Co-op Mod",
            content: `
            <p class="mb-4 text-gray-300">
                If you want to play with friends without annoying limitations (summons disappearing after a boss), use the <strong>Seamless Co-op</strong> mod.
                <br/>It uses its own network system (Steam P2P) and doesn't go through FromSoft servers, so you won't get banned, but you can only play with others who also have the mod.
            </p>
            `
        },
        {
            title: "Chapter 8: Save Backup",
            content: `
            <p class="mb-4 text-gray-300">
                The game can corrupt saves when using mods.
                <br/>Go to <code>%appdata%\\EldenRing</code>.
                <br/>Copy the folder with numbers (your Steam ID) to a safe location regularly.
            </p>
            `
        },
        {
            title: "Chapter 10: HDR in Elden Ring",
            content: `
            <p class="mb-4 text-gray-300">
                The native HDR is decent, but caves can look grey.
                <br/>We recommend adjusting the in-game brightness to a lower value than the game suggests for true blacks on OLED screens.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can I go back to Online later?",
            answer: "Yes. Disable the Unlocker/Mods, delete the files from the game folder (dinput8.dll), verify integrity on Steam, and open the game. EAC will load, and you'll be online again."
        },
        {
            question: "Does using an Unlocker cause a ban?",
            answer: "If you TRY to go online with it, EAC will detect memory alteration and kick or ban you. Therefore, it's crucial to disable EAC beforehand (play offline)."
        },
        {
            question: "Does the game freeze for seconds?",
            answer: "It's usually a USB device disconnecting/reconnecting (faulty controller cable). The game scans devices constantly."
        }
    ];

    const externalReferences = [
        { name: "Elden Ring FPS Unlocker", url: "https://github.com/uberhalit/EldenRingFpsUnlocker" },
        { name: "Nexus Mods Elden Ring", url: "https://www.nexusmods.com/eldenring" }
    ];

    const relatedGuides = [
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia",
            description: "Cache settings."
        },
        {
            href: "/guides/monitor-ultrawide-jogos-competitivos",
            title: "Ultrawide",
            description: "Understand the format."
        },
        {
            href: "/guides/controle-ps4-ps5-overclock-ds4windows",
            title: "Controller",
            description: "Improve Parry."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
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
