import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'fortnite-texturas-nao-carregam-streaming',
  title: "Fortnite: Textures Not Loading? Here's How to Fix It (2026)",
  description: "Is your Fortnite showing invisible buildings or blurry textures? Learn how to force texture loading in our 2026 guide.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Fortnite: Textures Not Loading? Here's How to Fix It (2026)";
const description = "Is your Fortnite showing invisible buildings or blurry textures? Learn how to force texture loading in our 2026 guide.";
const keywords = [
    'fortnite textures not loading fix 2026',
    'invisible buildings fortnite pc fix tutorial',
    'fortnite blurry textures low end pc complete guide',
    'resolve fortnite map loading bug 2026',
    'how to force texture loading fortnite tutorial'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('fortnite-texturas-nao-carregam-streaming', title, description, keywords, locale);
}

export default function FortniteTexturesFixGuide() {
    const summaryTable = [
        { label: "Main Cause", value: "Real-time texture streaming via internet" },
        { label: "Key Solution", value: "Pre-download assets in Epic Launcher" },
        { label: "Hardware Culprit", value: "Slow HDD or lack of VRAM" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "The 'Clay Graphics' Nightmare in 2026",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, with Fortnite's increased visual fidelity, Epic implemented a system where the game downloads textures while you play. If your internet connection fluctuates or your storage drive (SSD/HDD) cannot read files fast enough, you end up landing in a map that looks like it's made of \"clay,\" or with structures that have no collision, causing you to fall through the floor.
        </p>
      `
        },
        {
            title: "1. The Epic Games Launcher Solution",
            content: `
        <p class="mb-4 text-gray-300">This is the most effective step to resolve the issue permanently:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Close the game and open the Epic Games Launcher.</li>
            <li>Go to 'Library' and click the three dots (...) under the Fortnite icon.</li>
            <li>Click <strong>Options</strong>.</li>
            <li>Ensure the box for <strong>'Pre-download Stream Assets'</strong> is CHECKED.</li>
            <li>Uncheck the 'High Resolution Textures' box if you have less than 12GB of RAM or limited disk space.</li>
        </ol>
      `
        },
        {
            title: "2. FPS Limit and Disk Usage",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Save Your Hardware:</h4>
            <p class="text-sm text-gray-300">
                If your processor is at 100% usage, it cannot handle map loading efficiently. <br/><br/>
                In the game's video settings, set a <strong>Frame Rate Limit</strong>. If your monitor is 60Hz, limit it to 60 FPS or 120 FPS. This allocates \"breathing room\" so your PC can focus on loading textures and collision meshes before you hit the ground after jumping from the bus.
            </p>
        </div>
      `
        },
        {
            title: "3. 'HDD Mode' and Mesh Quality",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Final 2026 Check:</strong> 
            <br/><br/>If you are still playing on a mechanical HDD, buildings will always take time to load. A temporary solution is to change 'Meshes' to <strong>Low</strong> (Mobile Geometry). This causes the game to require much lower disk read speeds, making structures appear instantly, though with a less detailed look. <br/><br/>
            <strong>Tip:</strong> In 2026, ensure that Windows 11 has 'Game Mode' enabled in Settings > Gaming.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/fortnite-modo-performance-pc-fraco",
            title: "Performance Mode",
            description: "Improve your FPS after textures load."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Optimize SSD",
            description: "Increase the game's read speed."
        },
        {
            href: "/guides/erro-disco-100-porcento-gerenciador-tarefas",
            title: "100% Disk Usage",
            description: "Find out if your HDD is the real culprit."
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

