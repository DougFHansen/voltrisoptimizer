import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'assetto-corsa-content-manager-csp-sol',
    title: "Assetto Corsa (2026): Content Manager, CSP, and Sol/Pure",
    description: "Assetto Corsa is timeless, but it requires mods. Complete installation guide for Content Manager, Custom Shaders Patch (CSP), and Sol/Pure dynamic weather.",
    category: 'games',
    difficulty: 'Advanced',
    time: '50 min'
};

const title = "Assetto Corsa (2026): The Ultimate Mod Guide";
const description = "Transform a 2014 game into something superior to 2026 releases. The CM + CSP + Pure combination is mandatory for any SimRacer.";

const keywords = [
    'assetto corsa content manager download full',
    'custom shaders patch install guide 2026',
    'sol vs pure weather assetto corsa',
    'assetto corsa vr settings quest 3',
    'configure steering wheel g29 assetto corsa content manager',
    'no hesi server requirements mod',
    'realistic ppfilter assetto corsa',
    'extra fx csp performance loss',
    'voltris optimizer sim racing',
    'shutoko revival project install'
];

export const metadata: Metadata = createGuideMetadata('assetto-corsa-content-manager-csp-sol', title, description, keywords);

export default function ACGuide() {
    const summaryTable = [
        { label: "Launcher", value: "Content Manager (CM)" },
        { label: "Engine", value: "CSP (Custom Shaders)" },
        { label: "Weather", value: "Pure / Sol" },
        { label: "Graphics", value: "Extra FX (Heavy)" },
        { label: "Online", value: "No Hesi / Shutoko" },
        { label: "Filter", value: "C13AEGIS / Natural" },
        { label: "VR", value: "Foveated Rendering" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Base Game is Just a Shell",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          No one plays "pure" Assetto Corsa these days. The community created a new graphical engine on top of the game called CSP. Without it, you don't have rain, night, lights, or advanced physics.
        </p>
      `
        },
        {
            title: "Chapter 1: Content Manager (The New Menu)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Installation</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Download <strong>Content Manager (Lite or Full)</strong>.
                    <br/>2. Drag it to any folder (it doesn't need to be in the game folder).
                    <br/>3. Point it to where <code>AssettoCorsa.exe</code> is located (Steam folder).
                    <br/>Now you ONLY open the game through here. Forget about Steam.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Custom Shaders Patch (CSP)",
            content: `
        <p class="mb-4 text-gray-300">
            In Content Manager > Settings > Custom Shaders Patch.
            <br/>Click on <strong>"Install CSP"</strong>.
            <br/>Recommendation: Choose the <strong>Preview</strong> version (Paid/Patreon by Ilja) if you want rain (RainFX). The free public version doesn't have rain.
            <br/>If you're playing on "No Hesi" servers, public version 0.2.x works fine.
        </p>
      `
        },
        {
            title: "Chapter 3: Sol and Pure (Weather)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Sol:</strong> Older, free, focused on day/night cycles.
            - <strong>Pure:</strong> Newer, paid (Patreon by Peter Boese), focused on volumetric 3D clouds and "photorealistic" graphics.
            <br/>Installation: Drag the .zip file to Content Manager and click Install. Then go to Settings > Weather FX and select the script.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Extra FX (Beauty vs Performance)",
            content: `
        <p class="mb-4 text-gray-300">
            The <strong>Extra FX</strong> tab in CSP enables local Ambient Occlusion, real reflections, and high-quality Motion Blur.
            <br/>Cost: Consumes about 30-40% of FPS.
            <br/>If you have a weak GPU, disable Extra FX and use only standard CSP improvements.
        </p>
      `
        },
        {
            title: "Chapter 5: PPFilters (Post-Processing Filters)",
            content: `
        <p class="mb-4 text-gray-300">
            The game looks yellow/ugly without a filter.
            <br/>Download filters like <strong>"C13AEGIS"</strong>, <strong>"Natural Mod"</strong>, or <strong>"Exquisite"</strong>.
            <br/>Select them in the "Video > Post-Processing" menu of CM and then in-game in the "Pure Config" app.
            <br/>This changes color grading to look like Gran Turismo or GoPro footage.
        </p>
      `
        },
        {
            title: "Chapter 6: Wheel Configuration (FFB)",
            content: `
        <p class="mb-4 text-gray-300">
            In CM > Settings > Assetto Corsa > Controls.
            <br/>Enable <strong>"Final Force Feedback Tweaks"</strong> (FFB Tweaks) in CSP.
            <br/>This enables the Gyro effect, which helps you feel when the car is oversteering (drifting).
            <br/>Use LUT Generator if you have a Logitech G29 to correct the dead zone.
        </p>
      `
        },
        {
            title: "Chapter 7: VR Settings",
            content: `
        <p class="mb-4 text-gray-300">
            For VR:
            <br/>- Force the rendering mode to <strong>OpenVR</strong> or <strong>Oculus Rift</strong>.
            <br/>- In CSP > Graphics Adjustments: Enable <strong>AMD FidelityFX Super Resolution</strong> (works in VR for upscaling).
            <br/>- Disable high-quality shadows and reflections. VR requires a locked 90 FPS.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Shutoko Revival Project (SRP)",
            content: `
            <p class="mb-4 text-gray-300">
                To play on the Japanese highway map with traffic:
                <br/>You need to download the map (from their Discord) and the Car Pack.
                <br/>Requires CSP version 1.79 or higher. It's demanding due to being a massive map.
            </p>
            `
        },
        {
            title: "Chapter 9: CPU Optimization (Traffic)",
            content: `
            <p class="mb-4 text-gray-300">
                In servers with traffic (AI Traffic), the CPU is the bottleneck.
                <br/>In CSP > New AI Behavior: Make sure "Flood optimization" is active.
            </p>
            `
        },
        {
            title: "Chapter 10: In-Game Apps (HUD)",
            content: `
            <p class="mb-4 text-gray-300">
                Use the right sidebar in-game to activate apps.
                <br/>Recommended:
                <br/>- <strong>Sidekick:</strong> Compact gear and lap time display.
                <br/>- <strong>Helicorsa:</strong> Radar (Mandatory for clean online racing).
                <br/>- <strong>Tyres:</strong> Tire temperature monitoring.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Game says 'CPU Occupancy > 99%'",
            answer: "Your CPU can't handle the physics or AI script. Reduce the number of opponents or close background programs."
        },
        {
            question: "Do I need the Ultimate Edition?",
            answer: "YES. 99% of mods require DLCs (Japanese/Porsche car sound and physics files). Without Ultimate, mods will crash."
        },
        {
            question: "How to play online?",
            answer: "In Content Manager > Drive > Online. Use filters to search for 'Trackday' or 'Drift'. The original game browser is broken."
        }
    ];

    const externalReferences = [
        { name: "Content Manager Download", url: "https://acstuff.ru/app/" },
        { name: "RaceDepartment (Mods)", url: "https://www.racedepartment.com/downloads/categories/assetto-corsa.1/" }
    ];

    const relatedGuides = [
        {
            href: "/guias/monitor-ultrawide-jogos-competitivos",
            title: "Ultrawide",
            description: "Full cockpit immersion."
        },
        {
            href: "/guias/controle-ps4-ps5-overclock-ds4windows",
            title: "Controller",
            description: "Scripts for mouse steering."
        },
        {
            href: "/guias/cheat-engine-speedhack-jogos-offline",
            title: "Cheat Engine",
            description: "Do not use online!"
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="50 min"
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
