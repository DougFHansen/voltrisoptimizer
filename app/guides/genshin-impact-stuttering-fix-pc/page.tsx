import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'genshin-impact-stuttering-fix-pc',
  title: "Genshin Impact Lagging or Stuttering? How to Fix it on PC",
  description: "Does your Genshin Impact suffer from FPS drops when switching characters or exploring the map? Learn how to optimize shader cache and graphic settings.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Genshin Impact Lagging or Stuttering? How to Fix it on PC";
const description = "Does your Genshin Impact suffer from FPS drops when switching characters or exploring the map? Learn how to optimize shader cache and graphic settings.";
const keywords = [
    'genshin impact stuttering fix pc 2026',
    'how to increase fps genshin impact low end pc',
    'genshin impact lag when switching character fix',
    'optimize genshin impact windows 11 2026',
    'best graphic settings genshin impact fps'
];

export const metadata: Metadata = createGuideMetadata('genshin-impact-stuttering-fix-pc', title, description, keywords);

export default function GenshinFixGuide() {
    const summaryTable = [
        { label: "Check #1", value: "Shader Cache (Unlimited in GPU)" },
        { label: "Check #2", value: "V-Sync (Disabled in Game)" },
        { label: "Check #3", value: "Crowd Density (Low)" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "Why Does Genshin Impact Stutter?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Even on powerful PCs, Genshin Impact can suffer from tiny stutters when loading textures for new environments or particle effects from new attacks (Bursts). This happens because the game uses the Unity engine, which sometimes struggles with real-time asset streaming from slower HDDs or SSDs.
        </p>
      `
        },
        {
            title: "1. Shader Cache Optimization (NVIDIA/AMD)",
            content: `
        <p class="mb-4 text-gray-300">The most effective solution is to provide more space for the driver to store graphical calculations:</p>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <p class="text-sm text-gray-300">
                Go to your <strong>NVIDIA Control Panel</strong> > Manage 3D Settings > Look for 'Shader Cache Size' and set it to <strong>10GB or Unlimited</strong>. This drastically reduces the stuttering that occurs the first time you use a skill in each gaming session.
            </p>
        </div>
      `
        },
        {
            title: "2. Settings That Eat FPS",
            content: `
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Render Resolution:</strong> Keep it at 1.0 or 0.8 (if your PC is very weak). Above 1.0, the performance hit increases exponentially.</li>
            <li><strong>Shadows:</strong> Low. Shadows in Genshin are processed by both the CPU and GPU simultaneously.</li>
            <li><strong>Visual Effects:</strong> Medium. At High, FPS drops whenever multiple characters use Bursts together.</li>
            <li><strong>Bloom:</strong> Disable (This helps with visual clarity and provides a small frame boost).</li>
        </ul >
      `
        },
        {
            title: "3. Process Priority",
            content: `
        <p class="mb-4 text-gray-300">
            Open Genshin Impact, minimize the game, and open the Task Manager. 
            <br/>Go to the 'Details' tab, find <strong>GenshinImpact.exe</strong>, right-click > Set Priority > <strong>Above Normal</strong>. This ensures Windows gives special attention to the game over useless background processes.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guias/atualizacao-drivers-video",
            title: "Video Drivers",
            description: "Essential for Unity engine performance."
        },
        {
            href: "/guias/aceleracao-hardware-gpu-agendamento",
            title: "GPU Scheduling",
            description: "Enable for better stability in Windows 11."
        },
        {
            href: "/guias/stardew-valley-mods-lag-fix",
            title: "Fix Lag Mods",
            description: "Performance tips for Unity games."
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
