import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'fans-fluxo-de-ar-pc-gamer',
    title: "Gaming PC Airflow: Positive vs. Negative Pressure",
    description: "Is your PC a furnace? Learn how to position your fans correctly to create a wind tunnel and prevent dust buildup.",
    category: 'hardware',
    difficulty: 'Beginner',
    time: '15 min'
};

const title = "Airflow Engineering: How to Cool Your PC Properly";
const description = "Placing fans everywhere doesn't help. You need to direct the air. Understand the physics of Positive vs. Negative Pressure.";

const keywords = [
    'how to install gaming pc fans correct position',
    'front fans intake or exhaust',
    'positive vs negative pressure dust',
    'best water cooler position top or front',
    'mesh case vs tempered glass temperature',
    'fan cfm vs static pressure difference'
];

export const metadata: Metadata = createGuideMetadata('fans-fluxo-de-ar-pc-gamer', title, description, keywords);

export default function FansGuide() {
    const summaryTable = [
        { label: "Front", value: "Intake" },
        { label: "Back", value: "Exhaust" },
        { label: "Top", value: "Exhaust" },
        { label: "Bottom", value: "Intake (Optional)" },
        { label: "Ideal Pressure", value: "Slightly Positive" },
        { label: "Benefit", value: "Less Dust" },
        { label: "Case Type", value: "Mesh Front" }
    ];

    const contentSections = [
        {
            title: "Basic Physics Rule (Hot Air Rises)",
            content: `
        <p class="mb-4 text-gray-300">
            Fan orientation is vital. The \"pretty\" side of the fan (without the frame/wires) is generally where the air ENTERS. The \"ugly\" side (with the motor frame and wires) is where the air EXITS.
        </p>
        <div class="bg-[#0A0A0F] p-5 rounded-xl border border-white/5">
            <h4 class="text-[#31A8FF] font-bold mb-3">The Standard (Effective) Setup:</h4>
            <ul class="list-disc ml-4 text-gray-300 space-y-2">
                <li><strong>Front:</strong> 2 or 3 fans blowing COLD air IN (Intake).</li>
                <li><strong>Rear:</strong> 1 fan blowing HOT air OUT (Exhaust).</li>
                <li><strong>Top:</strong> 1 or 2 fans blowing HOT air OUT (Exhaust). Hot air naturally rises; help it escape.</li>
            </ul>
        </div>
      `
        },
        {
            title: "Positive vs. Negative Pressure: The Dust War",
            content: `
        <p class="mb-4 text-gray-300">
            This determines how often you'll need to clean your PC.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-emerald-900/10 p-4 rounded-xl border border-emerald-500/20">
                <h4 class="text-emerald-400 font-bold mb-2">Positive Pressure (Recommended)</h4>
                <p class="text-sm text-gray-300">
                    More air entering than exiting.
                    <br/>Example: 3 intake fans, 1 exhaust fan.
                    <br/><strong>Effect:</strong> Extra air tries to escape through all the case's gaps, preventing dust from entering via unfiltered holes. Air only enters through the front filters. Keeps the PC cleaner for longer.
                </p>
            </div>
            <div class="bg-red-900/10 p-4 rounded-xl border border-red-500/20">
                <h4 class="text-red-400 font-bold mb-2">Negative Pressure</h4>
                <p class="text-sm text-gray-300">
                    More air exiting than entering.
                    <br/>Example: 1 intake fan, 3 exhaust fans.
                    <br/><strong>Effect:</strong> Creates a vacuum. Air is sucked in through every gap, PCIe slot, and unfiltered hole to compensate. Your PC becomes a vacuum cleaner.
                </p>
            </div>
        </div>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "CFM (Flow) vs. Static Pressure",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-white font-bold mb-4 text-xl">Not All Fans are Created Equal</h4>
                <ul class="list-disc list-inside text-gray-300 text-sm space-y-3">
                    <li><strong>High Airflow / CFM Fans:</strong> Designed for case exhaust. They move a lot of air when there are no obstructions.</li>
                    <li><strong>Static Pressure Fans:</strong> Designed for Radiators or restricted grills. They have wide blades and \"push\" air with force through obstructions (heatsinks).</li>
                </ul>
                <p class="text-gray-400 text-xs mt-3">
                    If you use a low-pressure airflow fan on a water cooler radiator, the air won't pass through efficiently, and your CPU will boil.
                </p>
            </div>
            `
        },
        {
            title: "Fish Tank vs. Mesh Cases",
            content: `
            <p class="mb-4 text-gray-300">
                \"Fish Tank\" cases (glass on front and side) look stunning but limit air intake. In these, lateral and bottom fans are CRUCIAL for intake.
                <br/>\"Mesh\" cases (perforated front) are the kings of performance. Air flows directly in. If your priority is low temperature, buy Mesh.
            </p>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Hubs and Controllers",
            content: `
            <p class="mb-4 text-gray-300">
                If your motherboard lacks enough connectors (SYS_FAN), use a <strong>PWM Fan Hub</strong>.
                <br/>Connect the Hub to the motherboard (CPU_FAN or SYS_FAN) and plug all fans into the Hub. The motherboard will then control the speed of all fans simultaneously. Avoid connecting fans directly to the power supply (Molex), as they will run at 100% all the time, sounding like a jet engine.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Should I place a fan on top of the power supply (PSU Shroud)?",
            answer: "Generally, it doesn't help much unless your case has perforations there and your GPU is running very hot. They pull air from below the case (ensure there's a filter) and blow it directly at the GPU. It's a valid way to help hot graphics cards."
        },
        {
            question: "Does size matter? 120mm vs. 140mm",
            answer: "Yes. 140mm fans move more air at a lower RPM (less noise). If your case supports 140mm fans in the front, prioritize them. They are more efficient."
        }
    ];

    const externalReferences = [
        { name: "Gamers Nexus Airflow Guide", url: "https://www.youtube.com/watch?v=YDCMMf-_ASE" },
        { name: "Fan Setup Diagram", url: "https://landing.coolermaster.com/pages/airflow-guide/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/water-cooler-vs-air-cooler",
            title: "Choose Your Cooler",
            description: "Coolers need fresh air to work effectively."
        },
        {
            href: "/guides/monitorar-temperatura-pc",
            title: "Monitoring",
            description: "Verify if your airflow setup is working."
        },
        {
            href: "/guides/limpeza-fisica-pc-gamer",
            title: "Cleaning",
            description: "Clean your filters regularly."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}
