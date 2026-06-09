import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'overclock-processador',
  title: "CPU Overclocking: Is It Worth It in 2026?",
  description: "Learn how to safely increase your Intel or AMD processor's frequency. Guide on multipliers, voltage, and cooling in 2026.",
  category: 'hardware',
  difficulty: 'Advanced',
  time: '60 min'
};

const title = "CPU Overclocking: Is It Worth It in 2026?";
const description = "Learn how to safely increase your Intel or AMD processor's frequency. Guide on multipliers, voltage, and cooling in 2026.";
const keywords = [
  'how to overclock processor bios 2026',
  'overclock ryzen master tutorial 2026',
  'overclock intel xtu step by step guide',
  'is cpu overclocking worth it for gaming',
  'risks of processor overclocking 2026'
];

export const metadata: Metadata = createGuideMetadata('overclock-processador', title, description, keywords);

export default function CPUOverclockGuide() {
  const summaryTable = [
    { label: "AMD", value: "Ryzen Master / PBO (Precision Boost Overdrive)" },
    { label: "Intel", value: "Extreme Tuning Utility (XTU) / Manual in BIOS" },
    { label: "Requirement", value: "Z-series (Intel) or B/X-series (AMD) motherboard" },
    { label: "Difficulty", value: "Advanced" }
  ];

  const contentSections = [
    {
      title: "The End of Aggressive Overclocking?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, both Intel and AMD already deliver their processors "at the limit" from the factory. Manual overclocking from 5GHz to 5.5GHz rarely results in an FPS gain that justifies the drastic increase in heat and power consumption. Nowadays, the most efficient technique is <strong>Undervolt + Overclock</strong> (increasing efficiency so the processor can maintain high frequencies for longer).
        </p>
      `
    },
    {
      title: "1. AMD: The Power of PBO",
      content: `
        <p class="mb-4 text-gray-300">For Ryzen users in 2026:</p>
        <p class="text-sm text-gray-300">
            <strong>PBO (Precision Boost Overdrive)</strong> is AMD's official way of overclocking. It analyzes the thermal capacity of your fans and motherboard to decide how far to boost the clock. <br/><br/>
            <strong>Tip:</strong> In the BIOS, enable PBO and use the <strong>Curve Optimizer</strong> with a 'Negative' value (-15 or -20). This reduces voltage, making the CPU run cooler and allowing it to hit higher clocks automatically.
        </p>
      `
    },
    {
      title: "2. Intel: Multipliers and Chipset",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Unlocked K-Series Only:</h4>
            <p class="text-sm text-gray-300">
                If your Intel processor doesn't have a "K" at the end (e.g., i5-13400), the multiplier is locked and you won't be able to overclock. <br/><br/>
                For unlocked processors, adjustments are made in the BIOS by changing the <strong>CPU Core Ratio</strong>. Start by increasing +1 across all cores and use the <strong>Cinebench</strong> program to test if Windows doesn't blue screen under stress.
            </p>
        </div>
      `
    },
    {
      title: "3. Enemy #1: Voltage",
      content: `
        <p class="mb-4 text-gray-300">
            <strong>Never use Motherboard "Auto-OC":</strong> 
            <br/><br/>Many motherboards promise one-click overclocking (OC Genie, AI Overclock), but they usually apply a dangerously high voltage (VCORE) to ensure stability. Prolonged use above 1.4V can degrade your processor's silicon, shortening its lifespan. In 2026, manual and patient overclocking is the only safe way to extract extra performance.
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/water-cooler-vs-air-cooler-qual-escolher",
      title: "Cooling",
      description: "You will need a powerful cooler."
    },
    {
      href: "/guides/monitorar-temperatura-pc",
      title: "Monitor Heat",
      description: "Don't let the CPU exceed 90°C."
    },
    {
      href: "/guides/undervolt-cpu-notebook",
      title: "Undervolt Guide",
      description: "Learn how to reduce voltage accurately."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="60 min"
      difficultyLevel="Advanced"
      contentSections={contentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}

