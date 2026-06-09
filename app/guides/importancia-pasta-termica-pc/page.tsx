import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'importancia-pasta-termica-pc',
  title: "Thermal Paste: Everything You Need to Know (2026 Guide)",
  description: "Is your PC shutting down on its own? Find out when to change thermal paste, which is the best brand, and how to apply it correctly to reduce temperatures.",
  category: 'hardware',
  difficulty: 'Intermediate',
  time: '30 min'
};

const title = "Thermal Paste: Everything You Need to Know (2026 Guide)";
const description = "Is your PC shutting down on its own? Find out when to change thermal paste, which is the best brand, and how to apply it correctly to reduce temperatures.";
const keywords = [
    'when to change thermal paste gaming pc 2026',
    'best thermal paste conductivity 2026',
    'how to apply thermal paste processor tutorial',
    'pc shutting down high temperature fix',
    'silver vs white thermal paste difference'
];

export const metadata: Metadata = createGuideMetadata('importancia-pasta-termica-pc', title, description, keywords);

export default function ThermalPasteGuide() {
    const summaryTable = [
        { label: "Change Frequency", value: "1 to 2 years (Gaming use)" },
        { label: "Best Brands", value: "Arctic, Noctua, Thermal Grizzly" },
        { label: "Application Method", value: "Center dot or 'X'" },
        { label: "Difficulty", value: "Intermediate" }
    ];

    const contentSections = [
        {
            title: "What is Thermal Paste and why does it dry out?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Although the top of your processor and the base of your cooler look smooth, they have micro-holes invisible to the human eye. **Thermal Paste** serves to fill these holes, ensuring that heat passes from the chip to the cooler's metal. Over time, the oils in the paste evaporate, it becomes "dry" and brittle, losing its ability to conduct heat.
        </p>
      `
        },
        {
            title: "1. Silver vs White: What's the difference?",
            content: `
        <p class="mb-4 text-gray-300">When buying, you'll find two basic types:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>White Paste (Silicone):</strong> Cheap and simple. Suitable for office PCs or very basic processors. Dries out faster.</li>
            <li><strong>Gray/Silver Paste (Ceramic or Silver):</strong> Contains metallic or ceramic particles that transfer heat much better. Essential for Gaming PCs and laptops that run hot.</li>
        </ul >
      `
        },
        {
            title: "2. How to apply without making a mess",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">The Dot Rule:</h4>
            <p class="text-sm text-gray-300">
                The most common mistake is applying too much paste. Put only a <strong>pea-sized</strong> dot in the center of the processor. The pressure from the cooler will spread the paste perfectly. If it overflows to the sides, it can cause a mess and difficulty in future cleaning (although most do not conduct electricity, some silver pastes can be dangerous in excess).
            </p>
        </div>
      `
        },
        {
            title: "3. When to change it?",
            content: `
        <p class="mb-4 text-gray-300">
            Don't change it as a routine if the PC is running cool. Monitor temperatures with <strong>HWMonitor</strong> software. If your processor (CPU) is exceeding 90ºC while gaming or 60ºC at idle, and you've already cleaned the dust from the fans, then it's time to change the thermal paste.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/limpeza-fisica-pc-gamer",
            title: "Physical Cleaning",
            description: "How to clean the rest of the PC."
        },
        {
            href: "/guides/gabinete-gamer-airflow-importancia",
            title: "Case Airflow",
            description: "Help your thermal paste with fresh air."
        },
        {
            href: "/guides/diagnostico-hardware",
            title: "Diagnostics",
            description: "Find out if the problem is heat or a bad part."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}



