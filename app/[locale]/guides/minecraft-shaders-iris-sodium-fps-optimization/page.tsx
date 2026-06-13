import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'minecraft-shaders-iris-sodium-otimizacao-fps',
    title: "Minecraft (2026): Lightweight Shaders + Sodium (100+ FPS)",
    description: "Optifine is obsolete. Learn how to install Fabric, Sodium, Iris, and Lithium to run Minecraft with realistic Shaders and high FPS.",
    category: 'games',
    difficulty: 'Beginner',
    time: '20 min'
};

const title = "Minecraft Next-Gen: Sodium + Iris Guide";
const description = "Optifine was great in 2015. Today, the Sodium (Performance) + Iris (Shaders) combo delivers 3x more FPS and loads worlds instantly. Here's how to migrate.";

const keywords = [
    'minecraft fabric loader install guide',
    'sodium vs optifine benchmark 2026',
    'iris shaders complementary reimagined settings',
    'distant horizons mod lod render distance',
    'best minecraft performance mods list',
    'bsl shaders config low end pc',
    'voltris optimizer minecraft',
    'tlauncher fabric support'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('minecraft-shaders-iris-sodium-otimizacao-fps', title, description, keywords, locale);
}

export default function MinecraftGuide() {
    const summaryTable = [
        { label: "Modloader", value: "Fabric (Lightweight)" },
        { label: "Engine", value: "Sodium (FPS Boost)" },
        { label: "Shaders", value: "Iris (Optifine Support)" },
        { label: "Shader Pack", value: "Complementary Reimagined" },
        { label: "Java", value: "Java 21 (MC 1.20+)" },
        { label: "Launcher", value: "Prism / Modrinth" },
        { label: "FPS", value: "144+ (With Shaders)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Optifine vs Sodium",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Optifine is closed-source and breaks many mods.
          <br/><strong>Sodium</strong> has rewritten the game's rendering engine. The result: a PC that used to run at 40fps now runs at 150fps.
          <br/><strong>Iris</strong> adds Shaders support on top of Sodium.
        </p>
      `
        },
        {
            title: "Chapter 1: Installation (Easy)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Iris Installer</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Download the <strong>Iris Installer</strong> from the official site (irisshaders.net).
                    2. Run the .jar file.
                    3. Choose \"Iris + Sodium\".
                    4. Select the game version (e.g., 1.21).
                    5. Click Install.
                    6. Open your Launcher (Original or TLauncher) and select the \"Iris\" profile. Done.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Choosing Your Shader",
            content: `
        <p class="mb-4 text-gray-300">
            Download shaders from Modrinth or CurseForge.
            <br/>- <strong>Complementary Reimagined:</strong> The most beautiful and versatile. Features a \"Potato\" profile for weak PCs and \"Ultra\" for RTX builds. Stunning volumetric clouds.
            <br/>- <strong>BSL Shaders:</strong> Smooth look, less contrast.
            <br/>- <strong>MakeUp - Ultra Fast:</strong> Great for those with integrated GPUs (Intel HD).
            <br/>Place the .zip in the <code>.minecraft/shaderpacks</code> folder.
            <br/>Activate it in the Video Settings menu (Iris interface).
        </p>
      `
        },
        {
            title: "Chapter 3: Distant Horizons (Infinite View)",
            content: `
        <p class="mb-4 text-gray-300">
            This mod (famous for LODs) allows you to see 100 or 500 chunks away without crashing your PC.
            <br/>It renders distant terrain with lower quality.
            <br/>Compatible with Iris (beta versions) and Complementary.
            <br/>Transforms Minecraft into a AAA open-world game.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Extra Optimization Mods",
            content: `
        <p class="mb-4 text-gray-300">
            The \"Holy Trinity\" of Fabric:
            <br/>1. <strong>Sodium:</strong> Graphical rendering.
            <br/>2. <strong>Lithium:</strong> Server logic optimization (physics, mob AI). Essential to keep Single Player from lagging.
            <br/>3. <strong>Indium:</strong> Compatibility for mods that use advanced rendering.
            <br/>Others: <strong>FerriteCore</strong> (Reduces RAM usage), <strong>ModernFix</strong> (Faster loading).
        </p>
      `
        },
        {
            title: "Chapter 5: Zoom (Replacing the 'C' key in Optifine)",
            content: `
        <p class="mb-4 text-gray-300">
            Sodium doesn't have native zoom.
            <br/>Install <strong>Zoomify</strong> or <strong>Ok Zoomer</strong>.
            <br/>They offer smooth mouse scroll zoom, which is much better than Optifine's static zoom.
        </p>
      `
        },
        {
            title: "Chapter 6: Dynamic Lights (Torch in Hand)",
            content: `
        <p class="mb-4 text-gray-300">
            To make torches illuminate while you hold them:
            <br/>Install the <strong>LambDynamicLights</strong> mod.
        </p>
      `
        },
        {
            title: "Chapter 7: RAM Configuration",
            content: `
        <p class="mb-4 text-gray-300">
            Don't allocate all your RAM!
            <br/>For Vanilla + Shaders: 4GB is ideal.
            <br/>For heavy Modpacks (300+ mods): 6GB to 8GB.
            <br/>Allocating more than 8GB can actually worsen performance due to \"Java Garbage Collection\" (lag spikes every 10s while clearing memory).
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: TLauncher and Third-Party Launchers",
            content: `
            <p class="mb-4 text-gray-300">
                It works exactly the same. Select the \"Fabric\" version from the list and install mods into the <code>mods</code> folder manually.
                <br/>However, be careful with suspicious launchers. Prism Launcher (cracked version) is generally safer and manages mods better.
            </p>
            `
        },
        {
            title: "Chapter 9: Driver Updates",
            content: `
            <p class="mb-4 text-gray-300">
                Minecraft OpenGL is sensitive to drivers.
                <br/>On AMD GPUs in Windows, older drivers were subpar. 2023+ drivers improved OpenGL performance by 100%. Update them!
            </p>
            `
        },
        {
            title: "Chapter 10: VSync vs Unlimited",
            content: `
            <p class="mb-4 text-gray-300">
                In Sodium, keep VSync: OFF and Max Framerate: Unlimited to generate chunks fast. If you experience screen tearing, use VSync.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can I use Forge mods?",
            answer: "No. Iris/Sodium are for Fabric. There is a Forge port (Embeddium/Oculus), but it's less stable. Fabric is the future for performance."
        },
        {
            question: "Realistic water?",
            answer: "In the Shaders menu > Shader Options > Water. Enable 'Water Parallax' or 'Real Time Water Reflections'."
        }
    ];

    const externalReferences = [
        { name: "Iris Shaders", url: "https://irisshaders.net/" },
        { name: "Modrinth (Mods)", url: "https://modrinth.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/roblox-fps-unlocker-bloat-fix",
            title: "Roblox",
            description: "Another sandbox favorite."
        },
        {
            href: "/guides/memoria-virtual-pagefile-ssd-otimizacao",
            title: "RAM",
            description: "Avoid crashes."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
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

