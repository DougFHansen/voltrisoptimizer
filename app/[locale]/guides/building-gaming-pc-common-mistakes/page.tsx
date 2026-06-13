import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'montagem-pc-gamer-erros-comuns',
  title: "PC Building: 7 Common Mistakes That Can Fry Everything (2026)",
  description: "Building your first PC? Avoid fatal mistakes like forgetting the motherboard I/O shield, wrong cable connections, or mounting the PSU upside down.",
  category: 'hardware',
  difficulty: 'Advanced',
  time: '1 hour'
};

const title = "PC Building: 7 Common Mistakes That Can Fry Everything (2026)";
const description = "Building your first PC? Avoid fatal mistakes like forgetting the motherboard I/O shield, wrong cable connections, or mounting the PSU upside down.";
const keywords = [
    'common pc building mistakes 2026',
    'how to build a gaming pc from scratch safely',
    'pc not turning on after building what to do',
    'forgot to remove plastic from cpu cooler sticker',
    'motherboard front panel headers connection guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('montagem-pc-gamer-erros-comuns', title, description, keywords, locale);
}

export default function PCMisteryGuide() {
    const summaryTable = [
        { label: "Mistake #1", value: "Protective plastic on the heatsink" },
        { label: "Mistake #2", value: "RAM in wrong slot (Single Channel)" },
        { label: "Mistake #3", value: "Monitor connected to Motherboard (instead of GPU)" },
        { label: "Difficulty", value: "Advanced" }
    ];

    const contentSections = [
        {
            title: "The Nervousness of Building a PC",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Building a PC is like an expensive puzzle. Most parts only fit one way, but there are silent traps that can make you spend hours trying to figure out why the computer doesn't display an image or why it shuts down after 2 minutes.
        </p>
      `
        },
        {
            title: "1. The Cooler's Invisible Plastic",
            content: `
        <p class="mb-4 text-gray-300">This is the leading mistake in 2026:</p>
        <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/30">
            <p class="text-sm text-gray-300">
                Almost every cooler (Air Cooler or Water Cooler) comes with a transparent sticker on the metal base. If you forget to remove it and apply thermal paste on top, heat won't be transferred. The PC will turn on and shut down in seconds to avoid melting the processor. <strong>Always check the metal base!</strong>
            </p>
        </div>
      `
        },
        {
            title: "2. Dual Channel: Don't Waste Your RAM",
            content: `
        <p class="mb-4 text-gray-300">
            If your motherboard has 4 slots and you have 2 sticks of memory, they should <strong>NEVER</strong> be placed right next to each other.
            <br/><br/>To activate Dual Channel (double the communication speed), you should skip a slot (e.g., Slots 2 and 4). Check your motherboard manual, but 90% of the time it's the second and fourth slots counting from the processor.
        </p>
      `
        },
        {
            title: "3. Where to Connect the HDMI/DisplayPort Cable?",
            content: `
        <p class="mb-4 text-gray-300">
            It seems obvious, but it happens a lot: If you have a dedicated Video Card, the monitor cable <strong>MUST</strong> be connected to it (at the horizontal outputs further down). If you connect to the vertical output on the motherboard, the PC will try to run the game through the processor, resulting in 5 FPS or a black screen.
        </p>
      `
        },
        {
            title: "4. Case Standoffs",
            content: `
        <p class="mb-4 text-gray-300">
            Never screw the motherboard directly into the case's metal plate. You need to use "Standoffs" (golden spacers). Without them, the motherboard's electrical contacts touch the case's metal and cause a <strong>short circuit</strong> that can kill all your parts instantly.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/diagnostico-hardware",
            title: "Hardware Diagnostics",
            description: "Learn how to identify which part failed."
        },
        {
            href: "/guides/gabinete-gamer-airflow-importancia",
            title: "Case Airflow",
            description: "Position your fans the right way."
        },
        {
            href: "/guides/importancia-pasta-termica-pc",
            title: "Thermal Paste",
            description: "How to apply during assembly."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="1 hour"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

