import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'monitorar-temperatura-pc',
    title: "How to Monitor PC Temperature in Games (MSI Afterburner) (2026)",
    description: "Learn how to display FPS, CPU/GPU temperature, RAM and VRAM usage on screen while playing using MSI Afterburner and RivaTuner Statistics Server.",
    category: 'hardware',
    difficulty: 'Intermediate',
    time: '20 min'
};

const title = "Monitoring Setup: FPS and Temperature on Screen (Full OSD)";
const description = "Want to know if your PC is bottlenecking? Configure the RivaTuner Overlay to show real-time statistics in CS2, Valorant, GTA V, and more.";

const keywords = [
    'how to show fps on screen msi afterburner',
    'monitor cpu temperature ingame',
    'rivatuner statistics server tutorial',
    'fps gpu temperature overlay',
    'configure msi afterburner 2026',
    'what is frametime graph for',
    'hwmonitor vs hwinfo64',
    'pc shutting down by itself temperature'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('monitorar-temperatura-pc', title, description, keywords, locale);
}

export default function TempGuide() {
    const summaryTable = [
        { label: "Software", value: "MSI Afterburner + RTSS" },
        { label: "Ideal CPU Temp", value: "Below 80°C" },
        { label: "Ideal GPU Temp", value: "Below 75°C" },
        { label: "FPS Impact", value: "Minimal (1-2 FPS)" },
        { label: "Vital Feature", value: "Frametime Graph" },
        { label: "Compatibility", value: "DX11, DX12, Vulkan" }
    ];

    const contentSections = [
        {
            title: "Why Monitor?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Just knowing the FPS doesn't tell the whole story. If your FPS is high but the game "stutters," you need to see the <strong>Frametime</strong>. If the PC shuts down, you need to see the <strong>Temperature</strong>. If the game crashes and closes, you need to see <strong>RAM/VRAM</strong> usage.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">📊</span> Voltris Native Overlay
            </h4>
            <p class="text-gray-300 mb-4">
                MSI Afterburner is excellent, but it has a 2005 interface and many confusing options. <strong>Voltris Optimizer</strong> includes a pre-configured Modern Overlay that shows only the essentials (FPS, Latency, Temp), with a clean design that doesn't clutter your immersion.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Enable Voltris Overlay
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "Step 1: Installation and Configuration",
            content: `
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>Download MSI Afterburner (Official site from Guru3D or MSI).</li>
            <li>During installation, make sure to check <strong>RivaTuner Statistics Server (RTSS)</strong>. Afterburner reads the data, and RivaTuner draws it on the screen. One cannot live without the other.</li>
            <li>Open Afterburner. Click on the Gear icon (Settings).</li>
            <li>Go to the <strong>Monitoring</strong> tab.</li>
        </ol>
      `
        },
        {
            title: "Step 2: Choosing What to Show",
            content: `
        <p class="mb-4 text-gray-300">
            In the graphs list, you should click on the item (e.g., GPU Temperature) and then check the box at the bottom <strong>"Show in On-Screen Display (OSD)"</strong>. The item will have "In OSD" written next to it.
        </p>
        <p class="text-gray-300 font-bold mb-2">Essential Checklist:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-1 ml-4 text-sm">
            <li>[x] GPU Temperature</li>
            <li>[x] GPU Usage (%) - If it's at 99%, the GPU is the bottleneck.</li>
            <li>[x] VRAM Usage (Video memory)</li>
            <li>[x] CPU Temperature</li>
            <li>[x] CPU Usage (%)</li>
            <li>[x] RAM Usage</li>
            <li>[x] Frame rate (FPS)</li>
            <li>[x] Frame time (Frametime) - IMPORTANT: Change from "Text" to "Graph".</li>
        </ul>
      `
        },
        {
            title: "Step 3: Understanding Frametime (The Smooth Line)",
            content: `
        <p class="mb-4 text-gray-300">
            FPS shows the average within a second. Frametime shows the time for each individual frame.
        </p>
        <p class="text-gray-300 mb-4">
            A straight and smooth Frametime line means fluid gameplay.
            <br/>Spikes in the line mean stuttering, even if the FPS counter says "60".
        </p>
        <p class="text-gray-300">
            If you have many spikes on the graph, the problem could be RAM (lack of dual channel), slow HD loading textures, or overheating (Thermal Throttling).
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "HWInfo64: For Deep Diagnosis",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-white font-bold mb-4 text-xl">Advanced Sensors</h4>
                <p class="text-gray-300 mb-4">
                    Afterburner shows the basics. <strong>HWInfo64</strong> shows individual core voltages, motherboard VRM temperature, fan speed in RPM, and GPU memory errors.
                </p>
                <p class="text-gray-300 text-sm">
                    You can connect HWInfo64 to RivaTuner to show this advanced data on the game screen, but it requires complex manual configuration.
                </p>
            </div>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Not showing in CS2?",
            content: `
            <p class="mb-4 text-gray-300">
                Counter-Strike 2 and some other anti-cheat games block third-party overlays.
            </p>
            <p class="text-gray-300 text-sm">
                For CS2, add <code>-allow_third_party_software</code> to Steam launch options (CAUTION: This reduces your Trust Factor). The best option is to use the native console command <code>cl_showfps 1</code> or the game's own telemetry.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does this decrease my FPS?",
            answer: "Very little. On very weak PCs (Dual Core), the monitoring process might steal 1-2 FPS. On modern PCs, it's imperceptible."
        },
        {
            question: "Which key turns it on/off?",
            answer: "You configure it in the 'On-Screen Display (OSD)' tab. We suggest F10 or F11."
        },
        {
            question: "Is GPU at 85°C dangerous?",
            answer: "For a laptop, no. For a desktop, it's high. If it hits 85°C, the card will start reducing clock speed (Thermal Throttling). Ideally, keep it below 75°C by adjusting the Fan Curve in Afterburner."
        }
    ];

    const externalReferences = [
        { name: "MSI Afterburner Download", url: "https://www.msi.com/Landing/afterburner/graphics-cards" },
        { name: "Guru3D RTSS Download", url: "https://www.guru3d.com/files-details/rtss-rivatuner-statistics-server-download.html" }
    ];

    const relatedGuides = [
        {
            href: "/guides/overclock-gpu-msi-afterburner",
            title: "Overclock GPU",
            description: "Since you installed Afterburner, gain some FPS."
        },
        {
            href: "/guides/otimizacoes-para-notebook-gamer",
            title: "Notebooks",
            description: "Thermal control in laptops."
        },
        {
            href: "/guides/verificar-saude-hd-ssd-crystaldiskinfo",
            title: "Hardware Health",
            description: "Monitor your disks too."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}


