import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'gabinete-gamer-airflow-importancia',
  title: "Case Airflow: How to Cool Your PC and Avoid Thermal Throttling",
  description: "Is your PC overheating and losing FPS? Learn how to set up the correct air flow (Airflow) with fans, positive pressure and exhaust.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '20 min'
};

const title = "Case Airflow: How to Cool Your PC and Avoid Thermal Throttling";
const description = "Is your PC overheating and losing FPS? Learn how to set up the correct air flow (Airflow) with fans, positive pressure and exhaust.";
const keywords = [
    'pc game case airflow tutorial 2026',
    'correct position of pc case fans',
    'positive vs negative pressure pc case',
    'how to reduce cpu and gpu temperature case',
    'improve pc airflow closed case'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('gabinete-gamer-airflow-importancia', title, description, keywords, locale);
}

export default function AirflowGuide() {
    const summaryTable = [
        { label: "Check #1", value: "Cold air enters from front/bottom" },
        { label: "Check #2", value: "Hot air leaves from back/top" },
        { label: "Ideal Pressure", value: "Positive (More intake than exhaust)" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "What is Airflow and why does it matter?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **Airflow** is the science of moving air inside your PC. If hot air gets "trapped" inside the case, your processor and graphics card fans will only circulate hot air, causing temperatures to rise to safety limits. When this happens, the PC reduces speed (Thermal Throttling) to avoid burning out, and you feel the stutters in your game.
        </p>
      `
        },
        {
            title: "1. Fan Positioning",
            content: `
        <p class="mb-4 text-gray-300">Almost all fans blow air to the side where the 'grill' or manufacturer's sticker is. Follow the rule:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Front and Bottom (Intake):</strong> Pull cold air from outside to inside.</li>
            <li><strong>Back and Top (Exhaust):</strong> Push hot air from inside to outside.</li>
            <li><strong>Remember:</strong> Hot air naturally rises. Therefore, the top fans should always be exhaust fans.</li>
        </ul>
      `
        },
        {
            title: "2. Positive vs Negative Pressure",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">The Secret Against Dust:</h4>
            <p class="text-sm text-gray-300">
                The ideal for gamers is <strong>Positive Pressure</strong>. This happens when you have more fans blowing air in than out. This forces air (and dust) to leave through all the case's cracks, preventing dirt from entering through unfiltered holes.
            </p>
        </div>
      `
        },
        {
            title: "3. Glass Cases (Closed Front)",
            content: `
        <p class="mb-4 text-gray-300">
            Many modern cases have tempered glass fronts. While beautiful, they kill Airflow if there aren't large side vents. 
            <br/><br/><strong>Tip:</strong> If you have a case like this and your PC is boiling, try removing the front panel during heavy gaming sessions. You'll see an immediate drop of 5ºC to 10ºC.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/importancia-pasta-termica-pc",
            title: "Thermal Paste",
            description: "The perfect pair for good airflow."
        },
        {
            href: "/guides/limpeza-fisica-pc-gamer",
            title: "Physical Cleaning",
            description: "Remove dust that blocks the air."
        },
        {
            href: "/guides/cable-management-organizacao-cabos-pc",
            title: "Cable Management",
            description: "Get cables out of the way of the airflow."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

