import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'steam-launch-options-comandos-fps-boost',
    title: "Steam Launch Options (2026): FPS Commands (Myths and Truths)",
    description: "Still using '-high -threads 8'? Stop now. Discover which launch options actually work in CS2, Dota 2, Apex, and which ones break your game.",
    category: 'software',
    difficulty: 'Intermediate',
    time: '15 min'
};

const title = "Steam Commands (2026): Cleaning Out the Junk";
const description = "90% of online guides tell you to paste a massive list of commands from 2015. Most of these commands have since been disabled or actually worsen game performance today.";

const keywords = [
    'best steam launch options cs2 fps boost',
    'dota 2 launch options 2026',
    'apex legends autoexec commands',
    'does -high command really work',
    'threads command processor cores',
    '-novid -console -freq 240',
    'dx11 vs vulkan steam command',
    'voltris optimizer steam',
    'pubg stutter fix launch options'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('steam-launch-options-comandos-fps-boost', title, description, keywords, locale);
}

export default function SteamGuide() {
    const summaryTable = [
        { label: "Useful", value: "-novid (Skips intro)" },
        { label: "Useful", value: "-freq 240 (Forces Hz)" },
        { label: "Useful", value: "-allow_third_party_software" },
        { label: "Dangerous", value: "-threads (Crashes PC)" },
        { label: "Dangerous", value: "-high (Causes instability)" },
        { label: "Useless", value: "-d3d9ex (Default now)" },
        { label: "API", value: "-vulkan (Test)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Placebo Effect",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Players often copy and paste <code>-high -useforcedmparms -noforcemaccel -heapsize</code> without knowing what they do. Valve has explicitly stated: CLEAN YOUR LAUNCH OPTIONS. Modern games detect your hardware better than a command from 2012 can.
        </p>
      `
        },
        {
            title: "Chapter 1: Useful Commands (Safe)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Use these:</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>-novid</strong>: Removes the opening video (Valve intro). Gets you to the menu faster.
                    <br/>- <strong>-console</strong>: Enables the developer console (') by default.
                    <br/>- <strong>-freq 144</strong> (or 240/360): Ensures the game starts at your monitor's maximum refresh rate if Windows isn't handling it correctly.
                    <br/>- <strong>-fullscreen</strong>: Forces exclusive full-screen mode.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Harmful Commands (Dangerous)",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>AVOID These:</strong>
            <br/>- <code>-threads X</code>: The game manages CPU cores automatically now. Inputting a manual number often leads to stuttering.
            <br/>- <code>-high</code>: Forces High priority in Windows. This can cause mouse unresponsiveness or Discord crashes if the CPU hits 100%.
            <br/>- <code>+mat_queue_mode 2</code>: Outdated. CS2 uses native multithreading.
            <br/>- <code>-d3d9ex</code>: This has been enabled by default for over 5 years.
        </p>
      `
        },
        {
            title: "Chapter 3: Graphics APIs (DX11 vs. Vulkan)",
            content: `
        <p class="mb-4 text-gray-300">
            In games like Dota 2, Rainbow Six, and Apex:
            <br/>- <code>-vulkan</code>: Runs the game in Vulkan. Good for AMD GPUs or Linux. For Nvidia, DX11 is usually better.
            <br/>- <code>-dx11</code>: The standard default.
            <br/>- <code>-dx12</code>: Can be unstable in some games (like Fortnite) but may provide more FPS on newer GPUs. Test it for yourself.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: CS2 Specifics",
            content: `
        <p class="mb-4 text-gray-300">
            For Counter-Strike 2:
            <br/>It is recommended to use <strong>NO</strong> launch options other than <code>-novid</code>.
            <br/>The Source 2 engine does not like old Source 1 commands. Clear them out and feel how much smoother the game runs.
        </p>
      `
        },
        {
            title: "Chapter 5: PUBG and Stuttering",
            content: `
        <p class="mb-4 text-gray-300">
            For PUBG:
            <br/><code>-USEALLAVAILABLECORES</code>: This was useful back in 2018; today it does nothing.
            <br/><code>-sm4</code>: Forced Shader Model 4 (DX10) to gain FPS at the cost of lighting quality. Most games have blocked this as a "visibility cheat."
        </p>
      `
        },
        {
            title: "Chapter 6: AutoExec.cfg",
            content: `
        <p class="mb-4 text-gray-300">
            Instead of launch options, place your game settings (crosshair, binds, sensitivity) inside an <code>autoexec.cfg</code> file in the game's folder.
            <br/>Add <code>+exec autoexec.cfg</code> to your launch options to ensure it always loads.
        </p>
      `
        },
        {
            title: "Chapter 7: Shader Caching",
            content: `
        <p class="mb-4 text-gray-300">
            Steam downloads pre-compiled shaders (Pre-caching).
            <br/>Keep this enabled in Steam Settings (Downloads).
            <br/>Disabling it can cause stutters the first time you see a new effect (e.g., a grenade exploding).
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: RAM/Heap Limits",
            content: `
            <p class="mb-4 text-gray-300">
                Never use commands like <code>-heapsize</code> to set RAM limits. Windows handles memory management better than these legacy commands. Setting it incorrectly can lead to "Out of Memory" crashes.
            </p>
            `
        },
        {
            title: "Chapter 9: Text Mode",
            content: `
            <p class="mb-4 text-gray-300">
                If your PC is very weak:
                <br/>The <code>-no-browser</code> launch option for Steam used to save about 50MB of RAM. However, Valve removed this with the new UI update. It no longer works.
            </p>
            `
        },
        {
            title: "Chapter 10: Restoring Defaults",
            content: `
            <p class="mb-4 text-gray-300">
                Experiencing bugs? Delete EVERYTHING in the launch options box. Leave it blank, then verify the integrity of your game files.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Where are these settings located?",
            answer: "Steam Library > Right-click on the game > Properties > General > Launch Options."
        },
        {
            question: "Does -tickrate 128 work?",
            answer: "It worked in CS:GO. In CS2 (Sub-tick), the server controls this entirely. It is now useless."
        }
    ];

    const externalReferences = [
        { name: "Valve Developer Wiki (Command Line)", url: "https://developer.valvesoftware.com/wiki/Command_Line_Options" }
    ];

    const relatedGuides = [
        {
            href: "/guides/counter-strike-2-fps-boost-config",
            title: "CS2 config",
            description: "Complete guide."
        },
        {
            href: "/guides/apex-legends-config-autoexec-fps",
            title: "Apex config",
            description: "Autoexec guide."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}


