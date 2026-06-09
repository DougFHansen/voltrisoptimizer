import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'sync-vertical-g-sync-free-sync-explicacao',
  title: "G-Sync vs FreeSync vs V-Sync: Which to Use in 2026?",
  description: "Understand the differences between V-Sync, G-Sync, and FreeSync. Learn how to eliminate Screen Tearing and reduce input lag in 2026.",
  category: 'hardware',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "G-Sync vs FreeSync vs V-Sync: Which to Use in 2026?";
const description = "Understand the differences between V-Sync, G-Sync, and FreeSync. Learn how to eliminate Screen Tearing and reduce input lag in 2026.";
const keywords = [
    'g-sync vs freesync which is better 2026 guide',
    'v-sync increases input lag tutorial 2026',
    'how to enable g-sync on freesync monitor tutorial',
    'screen tearing how to solve windows 11 guide 2026',
    'nvidia g-sync compatible vs native differences'
];

export const metadata: Metadata = createGuideMetadata('sync-vertical-g-sync-free-sync-explicacao', title, description, keywords);

export default function SyncTechnologyGuide() {
    const summaryTable = [
        { label: "V-Sync", value: "Old / Causes High Input Lag" },
        { label: "G-Sync (NVIDIA)", value: "Excellent / Requires NVIDIA GPU" },
        { label: "FreeSync (AMD)", value: "Open Standard / Works on Almost Everything" },
        { label: "Gamer's Choice", value: "G-Sync/FreeSync + FPS Cap" }
    ];

    const contentSections = [
        {
            title: "What is Screen Tearing?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Imagine your graphics card is sending 100 frames per second, but your monitor can only show 60. The result is **Screen Tearing**: a horizontal line that splits the image, as if it were "torn". To solve this, synchronization technologies were invented, ensuring the monitor and GPU speak the same language in 2026.
        </p>
      `
        },
        {
            title: "1. V-Sync: The Solution of the Past",
            content: `
        <p class="mb-4 text-gray-300">V-Sync forces the GPU to wait for the monitor:</p>
        <p class="text-sm text-gray-300">
            While it solves image tearing, <strong>classic V-Sync</strong> introduces terrible response delay (Input Lag). In competitive games like Valorant or CS2, this can make you lose your reaction time. In 2026, we recommend leaving V-Sync always **disabled** in-game if you have access to more modern technologies.
        </p>
      `
        },
        {
            title: "2. G-Sync and FreeSync: VRR (Variable Refresh Rate)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">The Fluid Revolution:</h4>
            <p class="text-sm text-gray-300">
                Unlike V-Sync, **G-Sync (NVIDIA)** and **FreeSync (AMD)** make the monitor wait for the GPU. If your game drops to 47 FPS, the monitor changes its frequency to 47Hz instantly. This eliminates tearing and stuttering without noticeably increasing input lag. In 2026, most monitors are 'G-Sync Compatible', meaning they work with NVIDIA GPUs even if they are officially FreeSync.
            </p>
        </div>
      `
        },
        {
            title: "3. Perfect Configuration 2026",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>How to configure for minimum latency:</strong> 
            <br/><br/>If you have a 144Hz monitor with G-Sync/FreeSync, experts recommend: <br/>
            1. Enable G-Sync/FreeSync in the GPU Control Panel. <br/>
            2. Enable V-Sync **only** in the NVIDIA/AMD Control Panel (and disable it in-game). <br/>
            3. Limit your FPS to **3 frames below** the monitor's frequency (e.g., 141 FPS for 144Hz). This ensures you never go out of variable sync range, keeping the image perfect and input lag at its lowest level.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitor-ips-vs-va-vs-tn-jogos",
            title: "Choose Monitor",
            description: "Panel differences and response time."
        },
        {
            href: "/guides/valorant-reduzir-input-lag",
            title: "Reduce Input Lag",
            description: "Extreme optimizations for pro-players."
        },
        {
            href: "/guides/limitar-fps-rivatuner-nvidia",
            title: "Limit FPS",
            description: "Use RTSS to stabilize your fluidity."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

