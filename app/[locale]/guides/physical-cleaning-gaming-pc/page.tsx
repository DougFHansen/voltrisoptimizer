import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'limpeza-fisica-pc-gamer',
    title: "Physical Gaming PC Cleaning: Complete and Safe Guide (2026)",
    description: "Dust causes overheating and short circuits. Learn how to safely clean your PC using brushes, compressed air, and isopropyl alcohol. Do not use a hair dryer!",
    category: 'hardware',
    difficulty: 'Beginner',
    time: '45 min'
};

const title = "How to Clean a Gaming PC Correctly: Ending Overheating";
const description = "Is your PC 'huffing' and overheating? It's likely dust in the filters and heatsinks. Check out our step-by-step guide to dismantling, cleaning, and replacing thermal paste.";

const keywords = [
    'how to clean gaming pc dust guide 2026',
    'can i use a hair dryer to clean my pc',
    'clean graphics card with brush tutorial',
    'isopropyl alcohol motherboard cleaning guide',
    'thermal paste replacement frequency 2026',
    'clean case dust filters tutorial',
    'gaming pc cable management tips',
    'clean noisy computer fans guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('limpeza-fisica-pc-gamer', title, description, keywords, locale);
}

export default function CleaningGuide() {
    const summaryTable = [
        { label: "Tools", value: "Soft Brush, Compressed Air" },
        { label: "Thermal Paste", value: "Replace every 1-2 years" },
        { label: "Liquid", value: "99% Isopropyl Alcohol only" },
        { label: "Prohibited", value: "Hot Air Dryer, Water, Household sprays" },
        { label: "Risk", value: "Static (Discharge before starting)" },
        { label: "Frequency", value: "Light cleaning every 3 months" }
    ];

    const contentSections = [
        {
            title: "Why Clean Your PC?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Dust acts like a thermal blanket, preventing heat from escaping your components. Additionally, on humid days, dust can conduct electricity and cause short circuits on the motherboard. A clean PC runs cooler, quieter, and lasts significantly longer.
        </p>
      `
        },
        {
            title: "What You Will Need",
            content: `
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Soft-bristled brush</strong> (like a new, clean paintbrush).</li>
            <li><strong>Air blower / Compressed Air can</strong> (Ideal for clearing heatsinks).</li>
            <li><strong>Microfiber cloth</strong>.</li>
            <li><strong>99% Isopropyl Alcohol</strong> (For cleaning contacts and old paste).</li>
            <li><strong>Thermal Paste</strong> (If you plan on removing the CPU cooler).</li>
            <li>Phillips head screwdriver.</li>
        </ul >
      `
        },
        {
            title: "Safe Step-by-Step Guide",
            content: `
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li><strong>Unplug Everything:</strong> Take the PC off the power outlet. Press the Power button a few times to discharge residual electricity from the capacitors.</li>
            <li><strong>Open the Side Panel:</strong> Remove the glass or metal cover.</li>
            <li><strong>Cleaning Fans:</strong> Use the brush to loosen dust from the blades. Hold the blades with your finger so they don't spin uncontrollably when using compressed air (spinning too fast can generate reverse voltage and damage the motor).</li>
            <li><strong>Dust Filters:</strong> Remove the filters (usually at the front or bottom) and wash them with water. Ensure they are 100% dry before putting them back.</li>
            <li><strong>Graphics Card:</strong> Clean only the shroud and backplate with a brush. Ideally, blow air through the heatsink fin stack.</li>
        </ol>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Replacing Thermal Paste (Advanced)",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-orange-400 font-bold mb-4 text-xl">Only Do This if Necessary</h4>
                <p class="text-gray-300 mb-4">
                    Don't replace the thermal paste on a new graphics card (it voids the warranty). For processors, replace it if your temperatures are consistently high.
                </p>
                <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4 text-sm">
                    <li>Loosen the cooler screws in an X (cross) pattern.</li>
                    <li>Gently twist the cooler to release the suction seal.</li>
                    <li>Clean the old grey paste with a paper towel and Isopropyl Alcohol until the surface shines.</li>
                    <li>Apply a pea-sized drop in the center of the CPU heat spreader.</li>
                    <li>Reconnect the cooler.</li>
                </ol>
            </div>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Common Error: Hair Dryers",
            content: `
            <p class="mb-4 text-gray-300">
                Never use a hair dryer on its hot setting. Excessive heat can melt solder or plastic components. While the cold setting is acceptable, vacuum cleaners are dangerous as plastic nozzles can generate significant static electricity. A dedicated electronics air blower is always the best tool.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can a white eraser clean RAM sticks?",
            answer: "Yes. A plain white school eraser is excellent for cleaning the gold contacts on RAM and GPUs if your PC isn't displaying video. Swipe gently over the contacts and blow away any residue afterward."
        },
        {
            question: "How often should I clean my PC?",
            answer: "It depends on your environment. In homes with carpets or pets, clean every 2-3 months. In clean, air-conditioned environments, every 6 months is usually sufficient."
        }
    ];

    const externalReferences = [
        { name: "Linus Tech Tips - PC Cleaning Guide", url: "https://www.youtube.com/watch?v=W9T6WGFmam0" }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitorar-temperatura-pc",
            title: "Monitor Temperatures",
            description: "Check the 'before and after' of your cleanup."
        },
        {
            href: "/guides/verificar-saude-hd-ssd-crystaldiskinfo",
            title: "Part Health",
            description: "Check if heat has damaged any components."
        },
        {
            href: "/guides/importancia-pasta-termica-pc",
            title: "Thermal Paste Guide",
            description: "Silver or Ceramic? Find out what to buy."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="45 min"
            difficultyLevel="Beginner"
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

