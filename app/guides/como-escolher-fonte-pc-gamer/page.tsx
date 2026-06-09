import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'como-escolher-fonte-pc-gamer',
    title: "PSU Guide 2026: Tier List, 80 Plus, and Real Wattage",
    description: "Don't let your PC explode. Learn how to read the PSU Tier List, why 80 Plus White doesn't guarantee quality, and how to calculate the wattage needed for RTX 4000/5000.",
    category: 'hardware',
    difficulty: 'Intermediate',
    time: '20 min'
};

const title = "Power Supply Unit (PSU): The Heart of Your Gaming PC (2026 Guide)";
const description = "Saving on the PSU is the most expensive mistake you can make. Understand Japanese capacitors, 12V rails, and the infamous 'PSU Tier List'.";

const keywords = [
    'gaming pc psu calculator 2026',
    '80 plus bronze vs gold worth it',
    'psu tier list cultists network 2026',
    'bomb psu brands to avoid',
    'what psu for rtx 4060 4070',
    'modular vs semi modular vs non modular'
];

export const metadata: Metadata = createGuideMetadata('como-escolher-fonte-pc-gamer', title, description, keywords);

export default function PSUGuide() {
    const summaryTable = [
        { label: "Minimum Badge", value: "80 Plus Bronze" },
        { label: "Trust", value: "PSU Tier List (Tier C+)" },
        { label: "PFC", value: "Active (Mandatory)" },
        { label: "Good Brands", value: "Corsair, XPG, MSI" },
        { label: "Voltage Stabilizer", value: "NEVER USE" },
        { label: "Power Strip", value: "Clamp (Recommended)" },
        { label: "Power Margin", value: "+100W/150W" }
    ];

    const contentSections = [
        {
            title: "The 'Real Wattage' Lie",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In many regions, the myth of 'Real Wattage' persists. Generic PSUs claim to have 500W but deliver only 200W with electrical noise that slowly kills your SSD.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          <strong>Golden Rule:</strong> Never trust the Wattage label alone. Look at the side sticker: the power MUST be almost entirely on the <strong>+12V</strong> rail. If the PSU says 500W but has 300W on the 12V rail and 200W on the 5V/3.3V rails, it's an old and dangerous design.
        </p>

        <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/20 my-8">
            <h4 class="text-rose-400 font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">💣</span> Stop Using Voltage Stabilizers!
            </h4>
            <p class="text-gray-300 mb-4">
                Stabilizers were made for tube TVs from the 80s. Modern PSUs have Active PFC that corrects voltage in microseconds (Full Range 90V-240V). The stabilizer is slow ('click-clack'), and by the time it 'corrects', the PSU already has, creating a double surge that burns the PSU.
            </p>
            <p class="text-white font-bold">Use a high-quality Power Strip (with surge protection) or plug directly into the outlet.</p>
        </div>
      `
        },
        {
            title: "What is the PSU Tier List?",
            content: `
        <p class="mb-4 text-gray-300">
            It's a global community of engineers who open PSUs and test components. They classify them into Tiers:
        </p>
        <ul class="list-none text-gray-300 space-y-3 ml-4">
            <li class="p-2 border-l-4 border-emerald-500 bg-emerald-900/10"><strong>Tier A (High-End):</strong> For RTX 4080/4090 and heavy Overclocking. (e.g., Corsair RMx, XPG Core Reactor).</li>
            <li class="p-2 border-l-4 border-yellow-500 bg-yellow-900/10"><strong>Tier B (Mid-Range):</strong> Great for most gamers. (e.g., MSI MAG A650BN, Cooler Master MWE Bronze V2).</li>
            <li class="p-2 border-l-4 border-orange-500 bg-orange-900/10"><strong>Tier C (Low-End):</strong> Acceptable for entry-level PCs (iGPU, RX 6600).</li>
            <li class="p-2 border-l-4 border-red-500 bg-red-900/10"><strong>Tier E (Avoid):</strong> Avoid. Risk of failure.</li>
            <li class="p-2 border-l-4 border-red-700 bg-red-950/30"><strong>Tier F (Replace Immediately):</strong> Replace immediately. Fire risk. Common in cheap 'Gamer' generic PSUs.</li>
        </ul>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "80 Plus: Bronze, Gold, or Platinum?",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-white font-bold mb-4 text-xl">80 Plus Measures Efficiency, Not Quality</h4>
                <p class="text-gray-300 mb-4">
                    Having an 80 Plus badge only means the PSU wastes less energy as heat.
                </p>
                <p class="text-gray-300 text-sm">
                    A PSU can be 80 Plus Gold and still have poor capacitors that fail in a year. A PSU can be 80 Plus White and last 10 years.
                    <br/><br/>
                    <strong>Generally:</strong>
                    <br/>- 80 Plus White/Bronze: Entry-level designs.
                    <br/>- 80 Plus Gold: Modern designs (DC-DC LLC), usually better.
                </p>
            </div>
            `
        },
        {
            title: "Calculating Watts: How much do I need?",
            content: `
            <p class="mb-4 text-gray-300">
                Add CPU TDP + GPU TDP + 100W (rest of system).
                <br/>Example: i5 12400F (65W) + RTX 4060 (115W) + 100W = 280W.
                <br/>A <strong>450W or 500W</strong> PSU will have plenty of headroom.
                <br/>Buying an 850W PSU for this setup is a waste of money (efficiency is worse at low loads). Try to keep consumption between 40% and 60% of capacity for maximum efficiency.
            </p>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Modular vs Semi vs Non-Modular",
            content: `
            <p class="mb-4 text-gray-300">
                <strong>Non-Modular:</strong> All cables attached. Cable management nightmare. Cheap.
                <br/><strong>Semi-Modular:</strong> Main cable (Motherboard) attached, GPU/SATA cables detachable. Best value.
                <br/><strong>Full Modular:</strong> All cables detachable. Perfect aesthetics. Expensive.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Automatic vs manual voltage switch?",
            answer: "AVOID PSUs with a manual voltage switch (110v/220v). This is a sign of an archaic design without Active PFC. Good PSUs are Automatic (Full Range)."
        },
        {
            question: "Can I use a Molex adapter for my GPU?",
            answer: "NEVER. If the PSU doesn't have the necessary PCIe cable (6+2 pins), it wasn't designed to handle the load. Using Molex-to-PCIe adapters melts wires and causes fires."
        }
    ];

    const externalReferences = [
        { name: "PSU Tier List (Cultists Network)", url: "https://cultists.network/140/psu-tier-list/" },
        { name: "OuterVision Power Supply Calculator", url: "https://outervision.com/power-supply-calculator" }
    ];

    const relatedGuides = [
        {
            href: "/guides/como-resolver-tela-azul",
            title: "Blue Screen",
            description: "Bad PSUs cause instability and resets."
        },
        {
            href: "/guides/water-cooler-vs-air-cooler",
            title: "Cooling",
            description: "Cooler components consume less power."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "GPU Optimization",
            description: "Reduce consumption via Undervolt."
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

