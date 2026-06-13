import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'problemas-mouse-gamer-sensor',
  title: "Mouse Sensor Problems: How to Fix 'Jumping' Aim (2026)",
  description: "Is your gaming mouse pixel skipping or is the aim freezing out of nowhere? Learn how to clean the sensor and configure LOD and Polling Rate in 2026.",
  category: 'peripherals',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Mouse Sensor Problems: How to Fix 'Jumping' Aim (2026)";
const description = "Is your gaming mouse pixel skipping or is the aim freezing out of nowhere? Learn how to clean the sensor and configure LOD and Polling Rate in 2026.";
const keywords = [
    'gaming mouse jumping aim fix 2026',
    'clean gaming mouse sensor tutorial 2026',
    'polling rate 4000hz game stutters tutorial',
    'what is mouse lod how to configure 2026',
    'mouse skipping pixels fix windows 11 guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('problemas-mouse-gamer-sensor', title, description, keywords, locale);
}

export default function MouseSensorGuide() {
    const summaryTable = [
        { label: "Cause #1", value: "Dirt or Hair in the Sensor Prism" },
        { label: "Cause #2", value: "Polling Rate too high for the CPU" },
        { label: "Polling Rate", value: "1000Hz (Standard) / 4000Hz+ (Enthusiast)" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "Why does the mouse fail at the decisive moment?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, gaming mice have reached absurd resolutions of 30,000 DPI and refresh rates of 8,000Hz. However, the more sensitive the sensor, the easier it is for a **single dust particle** or a **strand of hair** to disrupt the laser reading. If your aim is "jumping" or if the mouse stops responding for a millisecond, the problem can be either physical or an incompatible software configuration.
        </p>
      `
        },
        {
            title: "1. Precision Cleaning",
            content: `
        <p class="mb-4 text-gray-300">Don't blow on the sensor! That can make things worse:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Use a <strong>cotton swab slightly dampened</strong> with isopropyl alcohol (or just dry, if the dust is visible).</li>
            <li>Gently swipe across the sensor lens on the bottom of the mouse.</li>
            <li>Check your mousepad. Modern 2026 sensors are very demanding; oil stains or loose fibers on the pad can make the mouse "get lost" while reading.</li>
        </ol>
      `
        },
        {
            title: "2. The Danger of 4,000Hz / 8,000Hz",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">CPU Bottleneck:</h4>
            <p class="text-sm text-gray-300">
                Ultra-modern 2026 mice allow **Polling Rates** above 1,000Hz. The problem is that this requires your processor to read the mouse position 4,000 or 8,000 times per second. <br/><br/>
                If your processor isn't latest-gen, using 4,000Hz will cause <strong>sharp FPS drops</strong> in games every time you move the mouse fast. If your game is stuttering, lower the Polling Rate to 1,000Hz in the mouse software; the difference in aim is imperceptible, but the game stability will be much higher.
            </p>
        </div>
      `
        },
        {
            title: "3. LOD: Lift-Off Distance",
            content: `
        <p class="mb-4 text-gray-300">
            If the mouse stops working every time you lift it slightly off the table:
            <br/><br/><strong>Tip:</strong> In your mouse software (G-Hub, Synapse, etc.), look for <strong>LOD</strong>. If it's set to 'Low', the sensor turns off almost against the pad. Increase it to 'Medium' or 'High' if you have the habit of frequently repositioning the mouse by lifting it. This prevents tracking failures during aggressive aim movements.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/mousepad-speed-vs-control",
            title: "Choosing a Mousepad",
            description: "Improve your sensor's reading accuracy."
        },
        {
            href: "/guides/mouse-clique-duplo-falhando-fix",
            title: "Double Click",
            description: "Resolve button issues."
        },
        {
            href: "/guides/perifericos-gamer-vale-a-pena-marcas",
            title: "Mouse Brands",
            description: "Which brands have the best sensors."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

