'use client';

import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'unpark-cpu-cores-performance-jogos',
  title: "CPU Core Parking: How to disable for more FPS (2026)",
  description: "Is your processor 'sleeping' while you play? Learn how to disable Core Parking in Windows 11 and stabilize your frames in 2026.",
  category: 'optimization',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "CPU Core Parking: How to disable for more FPS (2026)";
const description = "Is your processor 'sleeping' while you play? Learn how to disable Core Parking in Windows 11 and stabilize your frames in 2026.";
const keywords = [
    'how to disable cpu core parking 2026 tutorial',
    'unpark cpu cores performance games guide',
    'stabilize fps windows 11 tutorial 2026',
    'improve processor response time games guide',
    'cpu cores parking manager tutorial how to use'
];

export default function CoreParkingGuide() {
    const summaryTable = [
        { label: "What it is", value: "Energy-saving feature that turns off CPU cores" },
        { label: "Effect on Games", value: "Causes micro-stuttering (stuttering)" },
        { label: "Solution", value: "Change power scheme to High Performance" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Why does Windows 'turn off' your Processor?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **Core Parking** is an energy-saving technique where Windows 11 places inactive processor cores in a state of deep "sleep". In 2026, with processors having 16, 24, or more cores, this happens all the time. The problem is that when the game demands firepower, Windows takes a few milliseconds to "wake up" the cores, which generates those annoying stutters during the match.
        </p>
      `
        },
        {
            title: "1. Disabling via Power Plan",
            content: `
        <p class="mb-4 text-gray-300">The safest way without using external programs:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Search for 'Choose a power plan' in the Start menu.</li>
            <li>Select the <strong>Ultimate Performance</strong> (or High Performance) plan.</li>
            <li>If Ultimate Performance doesn't appear, open PowerShell as Admin and paste: <code>powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61</code>.</li>
            <li>By activating this mode, Windows 11 aggressively reduces core parking, keeping cores ready for action.</li>
        </ol>
      `
        },
        {
            title: "2. Using QuickCPU or Unpark-CPU",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Total Control:</h4>
            <p class="text-sm text-gray-300">
                If you want to ensure that 100% of cores remain active: <br/><br/>
                - Download <strong>QuickCPU</strong> (standard tool in 2026). <br/>
                - At the bottom, you will see the 'Core Parking' bar. Drag it to <strong>100%</strong> (Indicates Index). <br/>
                - Do the same with 'Frequency Scaling' and 'Turbo Boost'. <br/>
                - Click Apply. Now all your cores will be awake and running at the maximum frequency allowed by the base clock.
            </p>
        </div>
      `
        },
        {
            title: "3. Warning: Notebooks and Temperature",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Is it worth it for everyone?</strong> 
            <br/><br/>If you use a laptop and it's not plugged in, disabling Core Parking will drain your battery in record time. Also, in 2026, keeping all cores active generates more heat. Use this technique only if your processor has stable temperatures and if you seek **perfection in Frametime stability** in competitive games.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/modo-de-jogo-windows-atikvar-ou-nao",
            title: "Game Mode",
            description: "Combine with Unpark for more FPS."
        },
        {
            href: "/guides/micro-stuttering-em-jogos-causas",
            title: "Micro-stuttering",
            description: "Understand other causes of stuttering."
        },
        {
            href: "/guides/otimizacoes-para-notebook-gamer",
            title: "Gaming Laptop",
            description: "Power tips for laptops."
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

