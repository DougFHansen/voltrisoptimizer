import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'cyberpunk-2077-otimizacao-fps-raytracing',
    title: "Cyberpunk 2077 (2026): Definitive Optimization, Ray Tracing, and HDD Mode",
    description: "Night City is heavy. Learn to double your FPS using DLSS/FSR, configure Crowd Density, and use HDD Mode to prevent textures from disappearing.",
    category: 'games',
    difficulty: 'Advanced',
    time: '35 min'
};

const title = "Cyberpunk 2077 Tuning (2026): FPS in Night City";
const description = "The heaviest game of the generation requires fine tuning. Don't trust the 'Ultra Preset'. Let's adjust shadow by shadow to gain performance without losing the neon beauty.";

const keywords = [
    'cyberpunk 2077 best graphics settings 2026',
    'cyberpunk 2077 hdd mode slow texture fix',
    'crowd density fps impact cyberpunk',
    'dlss quality vs balanced vs performance',
    'ray tracing overdrive is it worth it',
    'fsr 3.0 frame generation cyberpunk mod',
    'cascaded shadows resolution optimization',
    'screen space reflections quality',
    'voltris optimizer cyberpunk',
    'how to run cyberpunk on a low end pc'
];

export const metadata: Metadata = createGuideMetadata('cyberpunk-2077-otimizacao-fps-raytracing', title, description, keywords);

export default function CyberpunkGuide() {
    const summaryTable = [
        { label: "Crowd Density", value: "Low / Medium" },
        { label: "DLSS / FSR", value: "Quality (Mandatory)" },
        { label: "Cascaded Shadows", value: "Medium" },
        { label: "Volumetric Fog", value: "Low (Big FPS Gain)" },
        { label: "Screen Space Ref", value: "High (Visual) or Low" },
        { label: "Ray Tracing", value: "OFF (If GPU < RTX 3070)" },
        { label: "HDD Mode", value: "Auto / On (If no NVMe)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Benchmark of 2026",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Cyberpunk 2077 with the REDengine 4 is the ultimate test for any PC. Even in 2026, running it on Ultra with Path Tracing requires top-tier hardware. But with tweaks, an average PC runs it beautifully at 60 FPS.
        </p>
      `
        },
        {
            title: "Chapter 1: Crowd Density (The CPU Devourer)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Gameplay Tab (Not Graphics!)</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Many people can't find this option. It's under "Gameplay".
                    <br/>- <strong>Crowd Density:</strong> Set it to <strong>Low</strong> or <strong>Medium</strong>.
                    <br/>On High, the game renders hundreds of NPCs with unique AI. This kills any CPU (even an i9) in areas like the Kabuki Market. Dropping it to Low stabilizes FPS drastically in cities.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: DLSS, FSR and XeSS",
            content: `
        <p class="mb-4 text-gray-300">
            It is impossible to play Cyberpunk native at high resolution without an RTX 5090.
            <br/>- <strong>Nvidia:</strong> Use DLSS Quality. If needed, DLSS Balanced. Avoid Performance in 1080p (it gets blurry).
            <br/>- <strong>AMD/Intel/GTX:</strong> Use FSR 2.1/3.0 or XeSS. XeSS often has better image quality than FSR in motion.
            <br/>- <strong>DLSS Frame Gen:</strong> Enable if you have an RTX 4000+. It doubles the "fake" FPS, but increases input lag. Use with Nvidia Reflex.
        </p>
      `
        },
        {
            title: "Chapter 3: Shadows and Lighting",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Cascaded Shadows Resolution:</strong> Medium. (High doubles VRAM usage).
            - <strong>Distant Shadows Resolution:</strong> Low.
            - <strong>Volumetric Fog Resolution:</strong> <span class="text-emerald-400">Low</span>. The game's fog is incredibly heavy. On Low it still looks beautiful but runs 20% faster.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Screen Space Reflections (SSR)",
            content: `
        <p class="mb-4 text-gray-300">
            If you don't use Ray Tracing, SSR is what makes the wet ground shine.
            <br/>- <strong>Psycho:</strong> Insanely heavy.
            <br/>- <strong>High:</strong> Good balance.
            <br/>- <strong>Low:</strong> Reflections become grainy.
            <br/>Recommendation: High if you can, Low if you need FPS.
        </p>
      `
        },
        {
            title: "Chapter 5: HDD Mode (Textures)",
            content: `
        <p class="mb-4 text-gray-300">
            "HDD Mode" option in the Gameplay tab.
            <br/>- If you installed it on a mechanical HDD (Don't do that!): TURN IT ON. This reduces the variety of cars and pedestrians so textures load in time.
            <br/>- If you have an older SATA SSD: AUTO.
            <br/>- If you have an NVMe: OFF.
        </p>
      `
        },
        {
            title: "Chapter 6: Ray Tracing (Is it worth it?)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Reflections:</strong> The most visually impactful.
            - <strong>Lighting/Shadows:</strong> Subtle impact, high cost.
            - <strong>Path Tracing (Overdrive):</strong> Only for screenshots or RTX 4080/4090.
            <br/>If you have performance to spare, turn on only RT Reflections. The rest isn't worth the FPS cost in frantic gunfights.
        </p>
      `
        },
        {
            title: "Chapter 7: Color Precision",
            content: `
        <p class="mb-4 text-gray-300">
            Color Precision: Medium.
            <br/>Hard to notice the difference from High with the naked eye, but saves a bit of post-effects processing.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Performance Mods",
            content: `
            <p class="mb-4 text-gray-300">
                NexusMods: "General Optimization Mod".
                <br/>It reduces the rendering distance of street trash and flying papers, which consume CPU physics unnecessarily.
            </p>
            `
        },
        {
            title: "Chapter 9: SMT (AMD Ryzen)",
            content: `
            <p class="mb-4 text-gray-300">
                Cyberpunk had a bug with Ryzen CPUs (it didn't use all threads).
                <br/>Today (Patch 2.1+), there is an option in the menu: <strong>AMD SMT (Simultaneous Multithreading)</strong>.
                <br/>Set it to <strong>ON</strong> (not Auto) to ensure all logical cores are used to the max.
            </p>
            `
        },
        {
            title: "Chapter 10: Mouse Input Lag",
            content: `
            <p class="mb-4 text-gray-300">
                The game has a "heavy mouse" feel.
                <br/>In Controls:
                <br/>- Zoom Sensitivity Reduction: 1.
                <br/>- Response Curve: Recommended (Raw doesn't exist, but Recommended is the most linear possible).
                <br/>Turn off V-Sync to reduce latency.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "The game crashes (Flatlined)?",
            answer: "It's usually unstable GPU or RAM overclocking. Cyberpunk stresses hardware more than Furmark. Remove any overclocks and test."
        },
        {
            question: "Is Phantom Liberty heavier?",
            answer: "Yes, Dogtown is much more graphically dense than the rest of Night City. Expect to lose around 10-15 FPS in there."
        },
        {
            question: "Does Frame Generation cause lag?",
            answer: "Frame Gen increases input latency because it creates fake frames. Always enable Nvidia Reflex + Boost alongside it to compensate."
        }
    ];

    const externalReferences = [
        { name: "Digital Foundry (Cyberpunk Optimization)", url: "https://www.eurogamer.net/digitalfoundry-2020-cyberpunk-2077-pc-best-settings" },
        { name: "Nexus Mods Cyberpunk", url: "https://www.nexusmods.com/cyberpunk2077" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD",
            description: "Mandatory for textures."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia",
            description: "Always update drivers."
        },
        {
            href: "/guides/windows-defender-otimizacao-jogos",
            title: "Defender",
            description: "Avoid scans during gameplay."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="35 min"
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
