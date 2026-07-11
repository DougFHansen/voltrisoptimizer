import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'god-of-war-pc-memory-leak-fix',
  title: "God of War PC: Out of Memory Error and Memory Leak Fix",
  description: "Does your God of War on PC crash after a few hours of gameplay? Learn how to fix the 'Out of Memory' error and the memory leak in 2026.",
  category: 'games-fix',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "God of War PC: Out of Memory Error and Memory Leak Fix";
const description = "Does your God of War on PC crash after a few hours of gameplay? Learn how to fix the 'Out of Memory' error and the memory leak in 2026.";
const keywords = [
    'god of war pc memory leak fix 2026',
    'out of memory error god of war pc how to solve',
    'god of war pc crashing fix 2026',
    'increase virtual memory for god of war pc',
    'optimize god of war on pc 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('god-of-war-pc-memory-leak-fix', title, description, keywords, locale);
}

export default function GoWMemoryFixGuide() {
    const summaryTable = [
        { label: "Main Cause", value: "Memory Leak" },
        { label: "Key Solution", value: "Adjust Virtual Memory (Paging File)" },
        { label: "VRAM Check", value: "Original/Low Textures" },
        { label: "Difficulty", value: "Intermediate" }
    ];

    const contentSections = [
        {
            title: "What is the Memory Leak in God of War?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Many players report that God of War starts running well, but after 1 or 2 hours, the FPS drops drastically or the game crashes with an "Out of Memory" message. This happens because the game "forgets" to free the RAM it's no longer using, accumulating digital clutter until Windows can't handle it anymore.
        </p>
      `
        },
        {
            title: "1. Adjusting the Virtual Memory (Paging File)",
            content: `
        <p class="mb-4 text-gray-300">If you have 8GB or 16GB of RAM, Windows needs extra "breathing room" on the SSD to avoid the crash:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Press <code>Win + R</code> and type <strong>sysdm.cpl</strong>.</li>
            <li>Go to Advanced > Performance (Settings) > Advanced > Change.</li>
            <li>Uncheck 'Automatically manage'.</li>
            <li>Select your SSD and choose <strong>Custom size</strong>.</li>
            <li>Set <strong>16384 MB</strong> (16GB) for both Initial and Maximum size.</li>
            <li>Click Set and restart your PC. This gives a massive safety margin for the game to accumulate clutter without crashing.</li>
        </ol>
      `
        },
        {
            title: "2. The Memory Fix Mod",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Nexus Mods:</h4>
            <p class="text-sm text-gray-300">
                There is a popular mod called <strong>"God of War Memory Leak Fix"</strong> on Nexus Mods. It replaces some library files that improve how the game dumps map assets. It's highly recommended if you play on laptops or PCs with low VRAM.
            </p>
        </div>
      `
        },
        {
            title: "3. VRAM Settings",
            content: `
        <p class="mb-4 text-gray-300">
            In God of War, 'Ultra' textures require a lot of video card memory. 
            <br/>If your card has less than 8GB of VRAM, keep textures on <strong>Original</strong> or <strong>Low</strong>. In 2026, with HDR active, VRAM fills even faster, accelerating the memory leak process.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/atualizacao-drivers-video",
            title: "Video Drivers",
            description: "NVIDIA released specific drivers for GoW."
        },
        {
            href: "/guides/aceleracao-hardware-gpu-agendamento",
            title: "GPU Scheduling",
            description: "Can help with initial stability."
        },
        {
            href: "/guides/otimizacao-performance",
            title: "Windows Performance",
            description: "Prepare the system for heavy AAA games."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

