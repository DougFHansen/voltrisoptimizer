import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'water-cooler-vs-air-cooler-qual-escolher',
  title: "Water Cooler vs Air Cooler: Which to choose in 2026?",
  description: "Is your processor getting too hot? We compare the efficiency, noise and durability of Water Coolers and Air Coolers in 2026.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "Water Cooler vs Air Cooler: Which to choose in 2026?";
const description = "Is your processor getting too hot? We compare the efficiency, noise and durability of Water Coolers and Air Coolers in 2026.";
const keywords = [
    'water cooler vs air cooler which is better 2026',
    'best air cooler cost benefit 2026 guide',
    'water cooler makes noise installation tutorial 2026',
    'air cooler handles processor i9 or ryzen 9 guide 2026',
    'water cooler maintenance how to do tutorial 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('water-cooler-vs-air-cooler-qual-escolher', title, description, keywords, locale);
}

export default function CoolingComparisonGuide() {
    const summaryTable = [
        { label: "Air Cooler", value: "Cheap, Durable (almost eternal), Safe" },
        { label: "Water Cooler", value: "More Expensive, Aesthetic, Better for Noise Reduction" },
        { label: "Risk", value: "Leaking in cheap Water Coolers" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "The cooling dilemma",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          With 2026 processors reaching sky-high frequencies and consuming more than 250W under maximum load, keeping the temperature under control is no longer an option, it's a necessity. If your CPU goes over 90°C, it will lose performance. But do you really need a complex water system or is a good block of metal with fans (Air Cooler) enough?
        </p>
      `
        },
        {
            title: "1. Air Cooler: The brute force of metal",
            content: `
        <p class="mb-4 text-gray-300">In 2026, top-tier Air Coolers defy physics:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Reliability:</strong> The only thing that can break is the fan, which costs R$ 50 to replace. The heatsink lasts 20 years.</li>
            <li><strong>Performance:</strong> Models like Noctua or DeepCool Assassin IV go head-to-head with many 240mm Water Coolers.</li>
            <li><strong>Ideal for:</strong> Gamers who want a "build and forget" PC, without worrying about leaks or bubbles in the pump.</li>
        </ul >
      `
        },
        {
            title: "2. Water Cooler: Aesthetics and Silence",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">The Power of Liquid:</h4>
            <p class="text-sm text-gray-300">
                Modern 2026 Water Coolers are excellent for removing heat from inside the processor and throwing it directly out of the case. <br/><br/>
                - <strong>Silence:</strong> As the heat is dissipated over a larger area (360mm or 420mm radiators), the fans can spin slower, making less noise. <br/>
                - <strong>Space:</strong> They leave the motherboard "clean", making it easier to handle RAM memories. <br/>
                - <strong>Lifespan:</strong> The water pump has a lifespan of 4 to 6 years. After that, the fluid evaporates or the pump stops, requiring the replacement of the entire system.
            </p>
        </div>
      `
        },
        {
            title: "3. The verdict by Processor",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Which one to buy in 2026?</strong>
            <br/><br/>
            - <strong>Core i3 / i5 or Ryzen 5:</strong> Use a simple Air Cooler (e.g. DeepCool AK400). Paying more than that is a waste. <br/>
            - <strong>Ryzen 7 or Core i7:</strong> A robust Air Cooler (Dual Tower) or a 240mm Water Cooler. <br/>
            - <strong>Core i9 or Ryzen 9:</strong> Mandatory use of a 360mm Water Cooler or better if used professionally (editing/rendering). On an Air Cooler, they will hit 100°C quickly.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/montagem-pc-gamer-erros-comuns",
            title: "PC Assembly",
            description: "How to install your cooler correctly."
        },
        {
            href: "/guides/monitorar-temperatura-pc",
            title: "Monitor Heat",
            description: "Track temps after upgrade."
        },
        {
            href: "/guides/importancia-pasta-termica-pc",
            title: "Thermal Paste",
            description: "The secret to heat transfer."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Medium"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

