import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'mouse-clique-duplo-falhando-fix',
  title: "Mouse with Double Click or Misfiring? How to fix without spending money",
  description: "Is your mouse clicking on its own or failing when dragging? Learn how to fix 'Double Click' problems with software and simple physical cleaning.",
  category: 'games-fix',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "Mouse with Double Click or Misfiring? How to fix without spending money";
const description = "Is your mouse clicking on its own or failing when dragging? Learn how to fix 'Double Click' problems with software and simple physical cleaning.";
const keywords = [
    'how to fix mouse double click software fix',
    'mouse misfiring when dragging how to fix',
    'clean mouse switch with isopropyl alcohol',
    'gaming mouse logitech double click fix 2026',
    'adjust mouse debounce time to stop double click'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('mouse-clique-duplo-falhando-fix', title, description, keywords, locale);
}

export default function MouseFixGuide() {
    const summaryTable = [
        { label: "Main Cause", value: "Switch Oxidation or Wear" },
        { label: "Software Fix", value: "Increase Debounce Time" },
        { label: "Physical Fix", value: "Cleaning with Isopropyl Alcohol" },
        { label: "Difficulty", value: "Easy to Medium" }
    ];

    const contentSections = [
        {
            title: "What is Double Click?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The **Double Click** error is when you press the button once, but the computer registers two clicks. This happens due to "metal fatigue" inside the small switch of the mouse or because of accumulated dust and static electricity. Before throwing your expensive gaming mouse in the trash, try these solutions.
        </p>
      `
        },
        {
            title: "1. The 'Static Click' Solution (The Breathing Trick)",
            content: `
        <p class="mb-4 text-gray-300">Often the error is caused by static electricity accumulated in the plastic. Try this:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Disconnect the mouse from the PC (or remove the battery if wireless).</li>
            <li>Click repeatedly and with moderate force on all buttons for 60 seconds.</li>
            <li>Blow warm breath through the gaps of the button (moisture helps dissipate static).</li>
            <li>Reconnect and test. It sounds like magic, but it solves 30% of cases temporarily.</li>
        </ol>
      `
        },
        {
            title: "2. Debounce Time Adjustment (Software)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Pro Trick for Gamers:</h4>
            <p class="text-sm text-gray-300">
                If you have a Logitech, Razer, Glorious, or Redragon mouse, open the brand's software. Look for the <strong>'Debounce Time'</strong> option. Increase this value (e.g., from 4ms to 12ms). This makes Windows ignore ghost clicks that happen very fast, electronically "filtering" the double click.
            </p>
        </div>
      `
        },
        {
            title: "3. Cleaning with Isopropyl Alcohol",
            content: `
        <p class="mb-4 text-gray-300">
            If you have the courage to open the mouse: 
            <br/>Drop a tiny drop of <strong>99% Isopropyl Alcohol</strong> inside the white/black switch button. Click on it several times so the alcohol gets in and cleans the internal oxidation. Wait 10 minutes to dry before turning on. This usually restores the mouse to a like-new state.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/diagnostico-hardware",
            title: "Hardware Diagnosis",
            description: "Find out if it's a driver bug or faulty component."
        },
        {
            href: "/guides/limpeza-fisica-pc-gamer",
            title: "Physical Cleaning",
            description: "Other peripheral cleaning tips."
        },
        {
            href: "/guides/cs2-melhores-comandos-console-fps",
            title: "CS2 Performance",
            description: "Double click can ruin your spray in CS."
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
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

