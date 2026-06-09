import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'mousepad-speed-vs-control',
  title: "Mousepad Speed vs Control: Which One to Choose? (2026 Guide)",
  description: "Did you know your mousepad might be the reason you're missing shots? Understand the difference between Speed, Control, and Hybrid surfaces in 2026.",
  category: 'perifericos',
  difficulty: 'Intermediate',
  time: '10 min'
};

const title = "Mousepad Speed vs Control: Which One to Choose? (2026 Guide)";
const description = "Did you know your mousepad might be the reason you're missing shots? Understand the difference between Speed, Control, and Hybrid cloth in 2026.";
const keywords = [
    'mousepad speed vs control difference 2026',
    'best mousepad for valorant and cs2 guide',
    'is a glass mousepad worth it 2026 tutorial',
    'how to choose gaming mousepad size guide',
    'clean gaming mousepad without damaging surface'
];

export const metadata: Metadata = createGuideMetadata('mousepad-speed-vs-control', title, description, keywords);

export default function MousepadGuide() {
    const summaryTable = [
        { label: "Speed", value: "Less friction / Ultra-fast glide" },
        { label: "Control", value: "More friction / Precise stopping power" },
        { label: "Hybrid", value: "Balance between glide and control" },
        { label: "Game Type", value: "Tactical FPS (Control) vs Fast FPS (Speed)" }
    ];

    const contentSections = [
        {
            title: "More Than Just a Piece of Cloth",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, with mouse sensors reaching 30,000 DPI and weights dropping below 50 grams, the surface your mouse glides on has become crucial. **Micro-adjustments** (small aim corrections) directly depend on how much the mousepad \"holds\" the mouse. Choosing the wrong type for your game can make your aim feel \"soapy\" or \"too heavy.\""
        </p>
      `
        },
        {
            title: "1. Control Mousepads: For Pure Precision",
            content: `
        <p class="mb-4 text-gray-300">These generally have a rougher texture to the touch:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Feeling:</strong> You feel the mouse \"grip\" the surface more. This provides what we call <strong>Stopping Power</strong>.</li>
            <li><strong>Ideal for:</strong> Tactical shooters like Valorant, CS2, and Rainbow Six Siege, where you hold angles and need precise flick accuracy.</li>
            <li><strong>Verdict:</strong> If you find yourself overshooting your target's head, you likely need a Control pad.</li>
        </ul>
      `
        },
        {
            title: "2. Speed Mousepads: For Agility and Tracking",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Infinite Glide:</h4>
            <p class="text-sm text-gray-300">
                Speed models (and the newer **Glass or Cordura** pads of 2026) offer almost zero initial resistance. <br/><br/>
                - <strong>Ideal for:</strong> Fast-paced tracking games like Apex Legends, Overwatch, and Warzone, where enemies move constantly and you need to follow them with fluid motions. <br/>
                - <strong>Warning:</strong> These require significant arm control and practice, as any hand tremors will be reflected in your aim.
            </p>
        </div>
      `
        },
        {
            title: "3. Size Matters (Low DPI)",
            content: `
        <p class="mb-4 text-gray-300">
            If you play with low DPI (400 or 800), you need physical space to maneuver. 
            <br/><br/><strong>Tip:</strong> Avoid small office-sized mousepads. Look for <strong>XL or Extended</strong> sizes (90x40cm) that cover your entire desk. This allows you to use your whole arm for aiming, reducing the risk of wrist injury and drastically improving shot consistency.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/perifericos-gamer-vale-a-pena-marcas",
            title: "Gaming Setup",
            description: "Brands making the best pads."
        },
        {
            href: "/guides/mouse-clique-duplo-falhando-fix",
            title: "Mouse Issues",
            description: "Fix your mouse alongside the pad."
        },
        {
            href: "/guides/limpeza-fisica-pc-gamer",
            title: "Maintenance",
            description: "How to wash your gaming mousepad."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

