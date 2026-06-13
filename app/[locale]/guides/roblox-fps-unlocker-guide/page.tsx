import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'roblox-fps-unlocker-guia',
    title: "Roblox FPS Unlocker 2026: Bloxstrap and FastFlags Guide",
    description: "Don't settle for 60 FPS. Learn how to use Bloxstrap to unlock your framerate, edit FastFlags for potato graphics, and optimize your ping.",
    category: 'games',
    difficulty: 'Easy',
    time: '25 min'
};

const title = "Roblox High Performance (2026): Bloxstrap & FastFlags";
const description = "The default Roblox client is limited. Bloxstrap is the essential tool that allows you to use JSON FastFlags to disable textures, shadows, and the FPS cap.";

const keywords = [
    'roblox fps unlocker download 2026',
    'bloxstrap download configure',
    'roblox fastflags json fps boost',
    'how to remove shadows from roblox fastflag',
    'fflagdebuggraphicspreferopengl',
    'roblox clientappsettings.json tutorial',
    'how to decrease roblox ping',
    'roblox running slow on good pc',
    'voltris optimizer roblox',
    'disable future lighting roblox'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('roblox-fps-unlocker-guia', title, description, keywords, locale);
}

export default function RobloxGuide() {
    const summaryTable = [
        { label: "Tool", value: "Bloxstrap (Required)" },
        { label: "FPS Limit", value: "9999 (Uncapped)" },
        { label: "Rendering", value: "D3D11 or Vulkan" },
        { label: "Lighting", value: "Voxel (Lightweight)" },
        { label: "Textures", value: "1 (Low Quality)" },
        { label: "Fullscreen", value: "Exclusive" },
        { label: "Material", value: "Plastic" }
    ];

    const contentSections = [
        {
            title: "Introduction: The 60 FPS Limit",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          By default, Roblox locks the game at 60 FPS. this is terrible for obbies and shooters (Arsenal/Phantom Forces). While we used \"rbxfpsunlocker.exe\" in the past, today <strong>Bloxstrap</strong> does that and much more.
        </p>
         <div class="bg-[#0A0A0F] border border-blue-500/30 p-5 rounded-xl my-6">
            <h4 class="text-blue-400 font-bold mb-2">What is Bloxstrap?</h4>
            <p class="text-gray-300 text-sm">
                It is a secure, open-source alternative launcher for Roblox. It allows you to inject configurations (FastFlags) before the game starts. It replaces the official launcher and improves Discord integration.
            </p>
        </div>
      `
        },
        {
            title: "Chapter 1: Installing and Configuring Bloxstrap",
            content: `
        <ol class="list-decimal list-inside text-gray-300 text-sm space-y-2">
            <li>Download Bloxstrap from the official GitHub (pizzaboxer/bloxstrap).</li>
            <li>During installation, navigate to <strong>\"FastFlags\"</strong>.</li>
            <li>In \"Framerate Limit\", enter <strong>9999</strong> or your monitor's refresh rate (e.g., 165).</li>
            <li>For \"Rendering Mode\", leave it on <strong>Automatic</strong> or force <strong>Direct3D 11</strong> (usually the most stable).</li>
            <li>Complete the installation. Open your games via the Roblox website as usual; Bloxstrap will take over.</li>
        </ol>
      `
        },
        {
            title: "Chapter 2: Magic FastFlags (JSON)",
            content: `
        <p class="mb-4 text-gray-300">
            You can manually edit the <code>ClientAppSettings.json</code> file or use the Bloxstrap editor. Add these flags for extreme performance:
        </p>
        <div class="bg-black/50 p-4 rounded text-xs font-mono text-green-400 overflow-x-auto">
            {<br/>
            &nbsp;&nbsp;"DFIntTaskSchedulerTargetFps": 9999,<br/>
            &nbsp;&nbsp;"FFlagDebugGraphicsDisableShadows": true,<br/>
            &nbsp;&nbsp;"FFlagDebugGraphicsPreferD3D11": true,<br/>
            &nbsp;&nbsp;"FFlagDebugGraphicsQualityLevel": 1,<br/>
            &nbsp;&nbsp;"FIntDebugForceMSAASamples": 0,<br/>
            &nbsp;&nbsp;"FFlagGlobalWindRendering": false<br/>
            }
        </div>
        <p class="mt-2 text-xs text-gray-400">
            <strong>Explanation:</strong> This removes shadows and wind, forces quality level 1 (below the minimum allowed by the in-game menu), and disables Anti-Aliasing.
        </p>
      `
        },
        {
            title: "Chapter 3: Lighting Technology",
            content: `
        <p class="mb-4 text-gray-300">
            Modern games use \"Future Lighting\" (resource-intensive).
            <br/>You can attempt to force older lighting methods (Voxel or ShadowMap) via FastFlag, though some games may appear too dark.
            <br/>Flag: <code>"FFlagDebugForceFutureIsBrightPhase3": false</code>
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Reducing Ping (Routing)",
            content: `
        <p class="mb-4 text-gray-300">
            Roblox lacks local servers in many regions, often resulting in 150ms+ latency to the US.
            <br/>Bloxstrap can display your current server region (Ctrl+Shift+F5).
            <br/>Always use an Ethernet cable; Wi-Fi is prone to fluctuations with Roblox's UDP protocol.
        </p>
      `
        },
        {
            title: "Chapter 5: Plastic Textures (Potato Mode)",
            content: `
        <p class="mb-4 text-gray-300">
            There are unofficial texture packs that make everything smooth (Plastic style).
            <br/>In Bloxstrap, navigate to \"Mods,\" enable \"Old Death Sound\" (optional), and look for the option to apply custom textures.
            <br/>Replacing texture files with 1x1 transparent pixels forces the game to load solid colors instead of wood or concrete textures, saving significant VRAM.
        </p>
      `
        },
        {
            title: "Chapter 6: Rendering API (Vulkan vs D3D11)",
            content: `
        <p class="mb-4 text-gray-300">
            If you have a very old PC (Intel HD 2000/3000): Try using <strong>Vulkan</strong> or <strong>OpenGL</strong> via FastFlags.
            <br/>Sometimes Vulkan manages limited video memory better than DX11.
            <br/>Flag: <code>"FFlagDebugGraphicsPreferVulkan": true</code>
        </p>
      `
        },
        {
            title: "Chapter 7: Windows Priority and Background FPS",
            content: `
        <p class="mb-4 text-gray-300">
            When Roblox is in the background (Alt+Tab), it reduces FPS to 15 to save power.
            <br/>If you want to AFK farm with high FPS so your macros stay accurate:
            <br/>Flag: <code>"DFIntTaskSchedulerTargetFpsWhenBackground": 60</code>
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Antivirus Issues",
            content: `
            <p class="mb-4 text-gray-300">
                While the Bloxstrap injection is safe, some free antivirus programs (like Avast) may block it. Add the Bloxstrap installation folder to your antivirus exclusions.
            </p>
            `
        },
        {
            title: "Chapter 9: Voltris Optimizer for Roblox",
            content: `
            <p class="mb-4 text-gray-300">
                <strong>Voltris Optimizer</strong> detects the <code>RobloxPlayerBeta.exe</code> process and automatically applies the High Performance power plan and clears standby RAM, which significantly helps in open-world games like Jailbreak.
            </p>
            `
        },
        {
            title: "Chapter 10: Exclusive Fullscreen",
            content: `
            <p class="mb-4 text-gray-300">
                Roblox uses \"Borderless Windowed\" by default, which introduces input lag.
                <br/>Press <strong>Alt+Enter</strong> to attempt to force true fullscreen (driver-dependent) or use the flag: <code>"FFlagHandleAltEnterFullscreenManually": true</code>.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can Bloxstrap get me banned?",
            answer: "No. Bloxstrap simply organizes settings that Roblox itself allows (FastFlags). It is used by millions of players and content creators. It is not a cheat and does not provide aimbot or wallhack capabilities."
        },
        {
            question: "Why is my FPS still locked at 60 with the unlocker?",
            answer: "Check if V-Sync is enforced in your NVIDIA or AMD Control Panel. V-Sync locks FPS to your monitor's refresh rate. Disable V-Sync globally or specifically for Roblox."
        },
        {
            question: "How do I revert the changes?",
            answer: "In the Bloxstrap menu, simply click 'Reset FastFlags' or uninstall Bloxstrap entirely. The original Roblox launcher will then behave as normal."
        }
    ];

    const externalReferences = [
        { name: "Bloxstrap GitHub", url: "https://github.com/pizzaboxer/bloxstrap" },
        { name: "Roblox FastFlags List", url: "https://roblox.fandom.com/wiki/Fast_Flag" },
        { name: "Bloxstrap Discord", url: "https://discord.gg/bloxstrap" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Optimization",
            description: "Load maps instantly."
        },
        {
            href: "/guides/como-escolher-mouse-gamer",
            title: "Gaming Mouse",
            description: "High DPI for competitive play."
        },
        {
            href: "/guides/internet-lenta-jogos-lag",
            title: "Network Fix",
            description: "Resolve high ping in Roblox."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="25 min"
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

