import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'project-zomboid-fps-boost',
  title: "Project Zomboid: How to boost FPS and allocate more RAM (2026)",
  description: "Suffering from lag in Project Zomboid? Learn how to allocate more RAM and configure graphics to run giant hordes without stuttering in 2026.",
  category: 'optimization',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "Project Zomboid: How to boost FPS and allocate more RAM (2026)";
const description = "Suffering from lag in Project Zomboid? Learn how to allocate more RAM and configure graphics to run giant hordes without stuttering in 2026.";
const keywords = [
    'project zomboid increase fps 2026 tutorial',
    'how to allocate more ram project zomboid guide 2026',
    'project zomboid lag fix giant hordes tutorial',
    'project zomboid best graphics settings 2026',
    'project zomboid server lag fix tutorial guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('project-zomboid-fps-boost', title, description, keywords, locale);
}

export default function ProjectZomboidGuide() {
    const summaryTable = [
        { label: "Key Setting", value: "Allocated RAM (JSON Edit)" },
        { label: "FPS Villain", value: "Blood decals on ground / Distant Zoom" },
        { label: "Guide Duration", value: "15 min" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "The challenge of surviving Lag",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Project Zomboid is an incredible game, but its engine (based on Java) has extreme difficulties managing hundreds of simultaneous zombies on Windows 11 in 2026. By default, the game is configured to use little RAM, which causes constant stuttering as soon as you enter large cities like Louisville. Optimizing the game requires going "under the hood" of the system files.
        </p>
      `
        },
        {
            title: "1. Allocating more RAM",
            content: `
        <p class="mb-4 text-gray-300">This is the most important adjustment to prevent crashes:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Go to the game installation folder (Steam > Right-click > Browse local files).</li>
            <li>Find the file <strong>ProjectZomboid64.json</strong>.</li>
            <li>Open it with Notepad. Find the line starting with <code>-Xmx</code>.</li>
            <li>Change it to <code>-Xmx8g</code> (if you have 16GB of RAM) or <code>-Xmx4g</code> (if you have 8GB).</li>
            <li>Save the file. Now the game is allowed to use more RAM to load the map.</li>
        </ol>
      `
        },
        {
            title: "2. Graphics: The Weight of Hordes",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Critical Settings in 2026:</h4>
            <p class="text-sm text-gray-300">
                - <strong>Blood Decals:</strong> Set to 'None'. Each blood stain on the ground is an object the game needs to process forever. In hordes, this kills your FPS. <br/>
                - <strong>Zoom Levels:</strong> Disable maximum zoom. The further the camera, the more the game needs to render, causing processing lag. <br/>
                - <strong>Lighting Quality:</strong> Change to 'Low'. Dynamic tree shadows weigh heavily on the Zomboid Java engine.
            </p>
        </div>
      `
        },
        {
            title: "3. Multiplayer Tips (Servers)",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Desync:</strong> 
            <br/><br/>If you see zombies "teleporting", the problem is the **Update Rate**. In the game's network settings, make sure 'Display FPS' is active. If your FPS is high but other players stutter, try disabling 'Steam Overlay', which often conflicts with Project Zomboid's Java interface in 2026.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/limpar-memoria-ram-windows",
            title: "Clear RAM",
            description: "Free memory before opening Zomboid."
        },
        {
            href: "/guides/reduzir-ping-jogos-online",
            title: "Reduce Ping",
            description: "Improve your connection on MP servers."
        },
        {
            href: "/guides/como-escolher-processador-2026",
            title: "CPU Upgrade",
            description: "Why high clock speed helps in Project Zomboid."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Medium"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

