import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'hogwarts-legacy-stutter-fix-ram',
    title: "Hogwarts Legacy (2026): Stutter and RAM Usage Fix",
    description: "Experience stutters in Hogsmeade or high RAM usage? Learn how to edit Engine.ini to optimize texture streaming and stabilize your FPS in Hogwarts Legacy.",
    category: 'games',
    difficulty: 'Advanced',
    time: '25 min'
};

const title = "Hogwarts Legacy Optimization (2026): Lag-Free Magic";
const description = "The Unreal Engine 4 implementation in this game often suffers from 'Asset Streaming' issues. This causes sharp stutters when opening doors or entering new areas. With specific configuration tweaks, we can mitigate these issues.";

const keywords = [
    'hogwarts legacy stutter fix engine.ini 2026',
    'hogwarts legacy lagging on good pc',
    'ascendio mod hogwarts legacy',
    'high ram usage hogwarts legacy leak',
    'best graphic settings hogwarts legacy',
    'dlss update hogwarts legacy',
    'ray tracing worth it hogwarts legacy',
    'how to increase fps hogwarts video config',
    'pool size streaming settings',
    'voltris optimizer unreal engine'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('hogwarts-legacy-stutter-fix-ram', title, description, keywords, locale);
}

export default function HogwartsGuide() {
    const summaryTable = [
        { label: "Texture Quality", value: "High (If 8GB+ VRAM)" },
        { label: "Fog Quality", value: "Medium" },
        { label: "Sky Quality", value: "Low" },
        { label: "Foliage", value: "Medium" },
        { label: "Upscale", value: "DLSS/FSR Quality" },
        { label: "Ray Tracing", value: "OFF (Broken)" },
        { label: "Primary Fix", value: "Engine.ini Tweak" }
    ];

    const contentSections = [
        {
            title: "Introduction: The RAM and VRAM Bottleneck",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Hogwarts Legacy is extremely resource-hungry. It can easily consume 20GB of RAM and 10GB of VRAM even at 1080p Ultra settings. If your system lacks these resources, Windows begins using your SSD as virtual memory, resulting in horrible stutters and performance drops.
        </p>
      `
        },
        {
            title: "Chapter 1: Engine.ini Tweaks (The Real Fix)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">How to Edit</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Navigate to: <code>%localappdata%\\Hogwarts Legacy\\Saved\\Config\\WindowsNoEditor</code>.
                    <br/>Open <code>Engine.ini</code> with Notepad.
                    <br/>Add the following to the end of the file:
                    <br/><code>[SystemSettings]</code>
                    <br/><code>r.CreateShadersOnLoad=1</code>
                    <br/><code>r.Streaming.PoolSize=2048</code> (for 8GB VRAM) or <code>3072</code> (for 10GB+ VRAM).
                    <br/>This forces the game to better manage its texture cache and reduces on-the-fly streaming lag.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Critical Graphics Settings",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Fog Quality:</strong> Set to Medium or Low. Volumetric fog in Hogwarts is very taxing.
            - <strong>Sky Quality:</strong> Set to Low. This converts the sky to a static \"skybox,\" saving significant CPU power.
            - <strong>Foliage Quality:</strong> Set to Medium. High settings for grass will kill performance in areas like the Forbidden Forest.
        </p>
      `
        },
        {
            title: "Chapter 3: Ray Tracing (Turn It Off)",
            content: `
        <p class="mb-4 text-gray-300">
            The Ray Tracing implementation in Hogwarts Legacy is currently bugged.
            <br/>It causes memory leaks and forces low-resolution textures even on high-end hardware.
            <br/>Even with an RTX 4070, we recommend keeping it <strong>OFF</strong>. The native \"baked\" lighting is already visually stunning.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Ascendio Mod",
            content: `
        <p class="mb-4 text-gray-300">
            If manual tweaks do not suffice, consider installing the <strong>Ascendio</strong> mod from NexusMods.
            <br/>It is an automated package of Unreal Engine fixes designed specifically to improve asset streaming and reduce frame drops.
            <br/>It's easy to install—simply run the provided executable.
        </p>
      `
        },
        {
            title: "Chapter 5: DLSS Update (DLL Swap)",
            content: `
        <p class="mb-4 text-gray-300">
            The game often ships with an outdated DLSS version.
            <br/>Download the latest <code>nvngx_dlss.dll</code> (version 3.7.0 or newer) from TechPowerUp.
            <br/>Replace the file in: <code>Engine\\Plugins\\Runtime\\Nvidia\\DLSS\\Binaries\\ThirdParty\\Win64</code>.
            <br/>This significantly reduces \"ghosting\" artifacts while flying your broomstick.
        </p>
      `
        },
        {
            title: "Chapter 6: V-Sync and Frame Generation",
            content: `
        <p class="mb-4 text-gray-300">
            If you own an RTX 40-series card: Enable \"Frame Generation.\" The game scales excellently with this, effectively turning 50 FPS into 90+ FPS.
            <br/>Otherwise: Disable in-game V-Sync and enable it via the NVIDIA Control Panel for better stability.
        </p>
      `
        },
        {
            title: "Chapter 7: Exploit Protection (CFG Fix)",
            content: `
        <p class="mb-4 text-gray-300">
            Search for \"Exploit Protection\" in Windows.
            <br/>Go to \"Program settings\" > \"Add program to customize\" > Point to <code>HogwartsLegacy.exe</code>.
            <br/>Scroll down to \"Control Flow Guard (CFG).\"
            <br/>Check \"Override system settings\" and set it to <strong>OFF</strong>.
            <br/>This is a known fix for DX12 games that experience micro-stuttering.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Texture Pop-in",
            content: `
            <p class="mb-4 text-gray-300">
                If textures take too long to load or appear blurry:
                <br/>Increase your Windows Page File (Virtual Memory) to 32GB on your fastest SSD. The game requires this if you are running on 16GB of physical RAM.
            </p>
            `
        },
        {
            title: "Chapter 9: Camera Sensitivity and Acceleration",
            content: `
            <p class="mb-4 text-gray-300">
                The default camera can feel slow and features forced acceleration.
                <br/>In the game options: Increase \"Camera Sensitivity\" and turn \"Camera Acceleration\" to maximum (or disable acceleration entirely in the Engine.ini if comfortable) for a 1:1 mouse response.
            </p>
            `
        },
        {
            title: "Chapter 10: Process Priority and RAM Cleaners",
            content: `
            <p class="mb-4 text-gray-300">
                Manual priority adjustments like \"High Priority\" are often blocked by Denuvo protection. However, using tools like CleanMem or ISLC (Intelligent Standby List Cleaner) can help keep background RAM usage low during long sessions.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does it work with 8GB of RAM?",
            answer: "Poorly. You will experience constant stutters. The minimum requirement for a smooth experience is 16GB, with 32GB being the ideal."
        },
        {
            question: "Black screen on startup?",
            answer: "Be patient. The game compiles shaders during its first launch. This can take 5-10 minutes on older CPUs. Do not close the window."
        },
        {
            question: "Can mods get me banned?",
            answer: "No. Hogwarts Legacy is a single-player game. You can use cosmetic, gameplay, and performance mods freely."
        }
    ];

    const externalReferences = [
        { name: "Ascendio Mod (Nexus)", url: "https://www.nexusmods.com/hogwartslegacy/mods/69" },
        { name: "DLSS DLL Download", url: "https://www.techpowerup.com/download/nvidia-dlss-dll/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Optimization",
            description: "Crucial for loading Hogsmeade assets."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "NVIDIA Guide",
            description: "Set Shader Cache Size to Unlimited."
        },
        {
            href: "/guides/cheat-engine-speedhack-jogos-offline",
            title: "Cheat Engine",
            description: "For quality of life changes in offline RPGs."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="25 min"
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

