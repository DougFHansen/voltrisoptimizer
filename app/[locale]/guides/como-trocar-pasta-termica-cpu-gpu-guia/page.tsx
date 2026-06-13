import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'como-trocar-pasta-termica-cpu-gpu-guia',
    title: "Thermal Paste Replacement (CPU/GPU): Safe Maintenance Guide",
    description: "Is your PC overheating? Learn how to open your processor and graphics card to change thermal paste correctly. Pea, X, or Spread method?",
    category: 'hardware',
    difficulty: 'Advanced',
    time: '40 min'
};

const title = "Maintenance Guide: Thermal Paste Replacement";
const description = "Dry thermal paste identifies 30% performance loss (Thermal Throttling). Annual maintenance is mandatory for Gamers. Learn how to do it without risks.";

const keywords = [
    'best thermal paste for processor 2026',
    'arctic mx-4 vs mx-6 vs thermal grizzly kryonaut',
    'how to apply thermal paste pea or spread',
    'how to open graphics card for cleaning rtx 3060',
    'thermal pads correct thickness replacement',
    'isopropyl alcohol pc cleaning',
    'voltris optimizer temps',
    'liquid metal worth it'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('como-trocar-pasta-termica-cpu-gpu-guia', title, description, keywords, locale);
}

export default function PasteGuide() {
    const summaryTable = [
        { label: "Material 1", value: "Silver/Ceramic Thermal Paste" },
        { label: "Material 2", value: "99% Isopropyl Alcohol" },
        { label: "Material 3", value: "Paper Towel / Coffee Filter" },
        { label: "Frequency", value: "Every 12-18 months" },
        { label: "CPU Risk", value: "Low" },
        { label: "GPU Risk", value: "Medium (Warranty Loss)" },
        { label: "Best Method", value: "X or Spread" }
    ];

    const contentSections = [
        {
            title: "Introduction: When to replace?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          If temperatures have risen 5-10°C compared to when the PC was new, or if the fan stays at 100% making noise, it's time to replace it.
          <br/>Factory pastes dry out quickly. High-quality paste (Kryonaut, MX-6, MasterGel Maker) lasts for years and can lower temps by up to 8°C.
        </p>
      `
        },
        {
            title: "Chapter 1: Necessary Materials",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">The Basic Kit</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>Thermal Paste:</strong> Don't buy cheap white paste (cheap tech store variety) for a Gaming PC! It dries out in a month. Invest in Arctic, Cooler Master, or Thermal Grizzly.
                    - <strong>Cleaner:</strong> Isopropyl Alcohol (found in pharmacies or electronics stores). Don't use rubbing alcohol (contains water and causes oxidation), perfume, or acetone.
                    - <strong>Cloth:</strong> Coffee filters are great (no lint). Toilet paper leaves dust.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: CPU (Processor)",
            content: `
        <p class="mb-4 text-gray-300">
            1. Turn off the PC and unplug it.
            <br/>2. Remove the Cooler. (Tip: If it's AMD, run a game first to warm up the paste, and twist the cooler slightly while removing it so you don't pull the processor out of the socket).
            <br/>3. Clean old paste from the CPU and Cooler with alcohol until it shines.
            <br/>4. Apply new paste.
            <br/>Which method?
            <br/>- <strong>Pea (Dot):</strong> Works, but sometimes doesn't cover the corners (modern Ryzen and Intel are rectangular).
            <br/>- <strong>X (Cross):</strong> The best value. Ensures total coverage.
            <br/>- <strong>Spreading with a spatula:</strong> The most guaranteed, but messy.
            <br/>We recommend 'X'.
            <br/>5. Reinstall the cooler, tightening screws in a cross pattern (top-left, then bottom-right, etc.) for equal pressure.
        </p>
      `
        },
        {
            title: "Chapter 3: GPU (Graphics Card) - Attention",
            content: `
        <p class="mb-4 text-gray-300">
            Opening the GPU usually breaks the warranty seal (check your brand; MSI/Galax often allow opening).
            <br/>1. Loosen the backplate screws.
            <br/>2. Carefully disconnect the fan and LED cables (they are fragile!).
            <br/>3. The GPU chip is 'Direct Die' (exposed crystal). You MUST cover 100% of it. Here, the pea method does NOT work.
            <br/>USE THE SPREAD METHOD OR A VERY GENEROUS 'X'. If even a small part is left without paste, the hotspot will hit 105°C and the card will crash.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Thermal Pads",
            content: `
        <p class="mb-4 text-gray-300">
            When opening the GPU, you'll see 'rubbery pads' on the memories (VRAM).
            <br/>If they tear, you need to replace them.
            <br/>CAUTION: The thickness must be exact (0.5mm, 1.0mm, 2.0mm). If you use the wrong ones, the heatsink won't touch the GPU and it will burn.
            <br/>If the original pads are intact, don't touch them. Just clean the dust.
        </p>
      `
        },
        {
            title: "Chapter 5: Liquid Metal (Conductonaut)",
            content: `
        <p class="mb-4 text-gray-300">
            Liquid Metal lowers temps by 15°C but is conductive. If it drips on the board, it shorts and kills the PC.
            <br/>Also, it corrodes aluminum. It can only be used on Nickel-plated Copper heatsinks.
            <br/>WE DO NOT RECOMMEND it for average users. The risk isn't worth being 3°C cooler than a normal Kryonaut.
        </p>
      `
        },
        {
            title: "Chapter 6: Common Mistakes",
            content: `
        <p class="mb-4 text-gray-300">
            - Too much paste: Doesn't break anything (if not conductive), but it's messy and can insulate heat if the layer is too thick. The layer should be thin.
            - Too little paste: The worst mistake. Causes overheating.
            - Forgetting to plug the cooler fan back in.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 7: Fan Cleaning",
            content: `
            <p class="mb-4 text-gray-300">
                Use a soft brush to remove dust from the blades.
                <br/>If using Compressed Air or a Vacuum: HOLD THE FAN so it doesn't spin. If it spins too fast with the air, it generates electricity (dynamo) and can burn the motherboard.
            </p>
            `
        },
        {
            title: "Chapter 8: Cure Time",
            content: `
            <p class="mb-4 text-gray-300">
                Some old pastes (Arctic Silver 5) took 200 hours to cure.
                <br/>Modern pastes (MX-4/6, Kryonaut) have zero cure time. Apply it, and it's ready.
            </p>
            `
        },
        {
            title: "Chapter 9: Thermal Putties",
            content: `
            <p class="mb-4 text-gray-300">
                A novelty that replaces Thermal Pads. It's a thick putty that molds to any thickness. Great for GDDR6X VRAM (RTX 3070ti/3080).
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does paste expire in the tube?",
            answer: "Yes, usually in 3 to 5 years. If a transparent 'oil' comes out before the grey paste, it has gone bad (component separation). Throw it away."
        },
        {
            question: "Does toothpaste work?",
            answer: "Only for 10-minute tests. It dries out and becomes a thermal insulator. Never use it."
        }
    ];

    const externalReferences = [
        { name: "Gamers Nexus - Paste Methods Tested", url: "https://www.youtube.com/watch?v=r2MEAnZ3swQ" },
        { name: "Thermal Grizzly", url: "https://www.thermal-grizzly.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/termperatura-pc-fan-control-curva",
            title: "Fan Control",
            description: "Adjust curves."
        },
        {
            href: "/guides/msi-afterburner-overclock-undervolt-guia",
            title: "Undervolt",
            description: "Cool down GPU."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="40 min"
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

