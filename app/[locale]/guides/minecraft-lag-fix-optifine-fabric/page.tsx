import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'minecraft-lag-fix-optifine-fabric',
  title: "Minecraft Lag Fix: OptiFine vs Fabric (Sodium) in 2026",
  description: "Is your Minecraft stuttering? Learn how to install OptiFine or Fabric with Sodium to gain a lot of FPS and run shaders even on a low-end PC.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Minecraft Lag Fix: OptiFine vs Fabric (Sodium) in 2026";
const description = "Is your Minecraft stuttering? Learn how to install OptiFine or Fabric with Sodium to gain a lot of FPS and run shaders even on a low-end PC.";
const keywords = [
    'how to remove lag minecraft java edition 2026',
    'install sodium fabric minecraft tutorial 2026',
    'optifine vs fabric which is better for fps',
    'minecraft low end pc 60 fps tutorial 2026',
    'configure minecraft shaders without lag'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('minecraft-lag-fix-optifine-fabric', title, description, keywords, locale);
}

export default function MinecraftLagGuide() {
    const summaryTable = [
        { label: "Best Performance", value: "Fabric + Sodium" },
        { label: "Most Practical", value: "OptiFine" },
        { label: "RAM Allocation", value: "2GB to 4GB (Don't use it all!)" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "The Problem with Minecraft's Code",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Minecraft Java Edition runs on a language called Java, which wasn't specifically designed for high-performance gaming. By default, the game is inefficient at loading world chunks. In 2026, with worlds getting taller and deeper, you need optimization mods to maintain playable FPS.
        </p>
      `
        },
        {
            title: "1. OptiFine: The Immortal Classic",
            content: `
        <p class="mb-4 text-gray-300">OptiFine is an all-in-one mod that adds support for Shaders and basic optimizations.</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Advantage:</strong> Very easy to install. Just download the .jar and click 'Install'.</li>
            <li><strong>Feature:</strong> The 'Zoom' feature (C key) and native support for connected textures (seamless glass).</li>
            <li><strong>Tip:</strong> In video settings, go to 'Performance' and turn on <strong>'Fast Render'</strong> and <strong>'Smart Animations'</strong>.</li>
        </ul>
      `
        },
        {
            title: "2. Fabric + Sodium: The New Performance Standard",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Why is Sodium better?</h4>
            <p class="text-sm text-gray-300">
                While OptiFine tries to patch the game, <strong>Sodium</strong> rewrites how Minecraft renders blocks. FPS gains with Sodium can be double those of OptiFine. <br/><br/>
                For the full experience, install the Fabric Loader and the mods: <strong>Sodium</strong> (Performance), <strong>Lithium</strong> (AI and physics), and <strong>Iris</strong> (if you want to run Shaders).
            </p>
        </div>
      `
        },
        {
            title: "3. RAM Memory Allocation",
            content: `
        <p class="mb-4 text-gray-300">
            Many think that \"more RAM = more FPS,\" but giving too much RAM (e.g., 12GB) can cause Minecraft to stutter every 5 seconds due to a process called 'Garbage Collection'. 
            <br/>Go to your Launcher > Installations > Edit > More Options. Under 'JVM Arguments', change <code>-Xmx2G</code> to <code>-Xmx4G</code>. This is the sweet spot for running the game with mods and shaders.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/atualizacao-drivers-video",
            title: "Video Drivers",
            description: "Minecraft uses OpenGL, updated drivers are vital."
        },
        {
            href: "/guides/reduzir-ping-jogos-online",
            title: "Reduce Ping",
            description: "Improve connection on multiplayer servers."
        },
        {
            href: "/guides/automacao-tarefas",
            title: "World Backups",
            description: "Don't lose your survival world to disk errors."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

