import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'water-cooler-vs-air-cooler',
    title: "Air Cooler vs Water Cooler 2026: Which to choose for your CPU?",
    description: "240mm Water Cooler or a beefy Air Cooler? Understand thermal efficiency, leak risk, pump noise, and maintenance.",
    category: 'hardware',
    difficulty: 'Intermediate',
    time: '15 min'
};

const title = "Air Cooler vs Water Cooler (AIO): The Definitive Temperature Guide";
const description = "Many buy a Water Cooler for aesthetics and regret it with a noisy pump. Discover when the Air Cooler is actually superior.";

const keywords = [
    'water cooler vs air cooler durability',
    'air cooler noctua deepcool ag400 ak400 review',
    'water cooler leaks risks',
    'rise mode water cooler pump noise',
    'ryzen 5700x3d gets too hot which cooler',
    'thermal paste which is best'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('water-cooler-vs-air-cooler', title, description, keywords, locale);
}

export default function CoolerGuide() {
    const summaryTable = [
        { label: "Cost-Benefit", value: "Air Cooler" },
        { label: "Aesthetics", value: "Water Cooler" },
        { label: "Durability", value: "Air Cooler (Eternal)" },
        { label: "Extreme Performance", value: "Water Cooler 360mm" },
        { label: "Noise", value: "Air Cooler (Lower)" },
        { label: "Maintenance", value: "Air Cooler (Easy)" },
        { label: "Risk", value: "WC (Leak/Pump)" }
    ];

    const contentSections = [
        {
            title: "The Myth: Is Water Cooler always better?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          No. A good R$ 200.00 Air Cooler (air tower) often beats cheap 120mm or 240mm entry-level Water Coolers.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
           Cheap Water Coolers have weak, noisy pumps. In addition, the water evaporates (permeation) over 3-5 years, losing efficiency. The Air Cooler is just metal and a fan: it never breaks. If the fan stops, you replace it for R$ 30.00 and the heatsink stays there forever.
        </p>

        <div class="bg-[#0A0A0F] p-5 rounded-xl border border-white/5">
            <h4 class="text-[#31A8FF] font-bold mb-3">When to use what?</h4>
            <ul class="list-disc leading-relaxed ml-4 text-gray-300">
                <li><strong>Ryzen 5 / i5 (65W):</strong> Use Air Cooler (Ex: DeepCool AK400/AG400). It's cheap, quiet and has plenty of performance overhead. Spending on WC here is aesthetics.</li>
                <li><strong>Ryzen 7 / i7 (105W+):</strong> Dual Tower Air Cooler (AK620) or a good brand 240mm/360mm Water Cooler.</li>
                <li><strong>i9 / Ryzen 9 (High End):</strong> Here a 360mm or 420mm Water Cooler is mandatory, as Air Coolers cannot dissipate 250W+ of heat quickly.</li>
            </ul>
        </div>
      `
        },
        {
            title: "Radiator Installation and Position",
            content: `
        <p class="mb-4 text-gray-300">
            If you chose Water Cooler, the position matters A LOT for the pump's lifespan.
        </p>
        <div class="bg-gray-800/50 p-4 rounded-lg font-mono text-sm border border-gray-700">
            <p class="text-emerald-400 font-bold">Correct Positions:</p>
            <ul class="list-disc ml-6 text-gray-300">
                <li><strong>Top (Exhaust):</strong> The best. Hot air rises, and air bubbles get trapped in the radiator, away from the pump.</li>
                <li><strong>Front (Intake):</strong> Hoses DOWN (Ideal), or UP (as long as the top of the radiator is above the pump).</li>
            </ul>
            <p class="text-rose-400 font-bold mt-4">FORBIDDEN Position:</p>
            <ul class="list-disc ml-6 text-gray-300">
                <li><strong>Bottom (Floor):</strong> The pump becomes the highest point in the loop. The air rises to the pump, it runs dry, makes an aquarium noise and burns out in 6 months.</li>
            </ul>
        </div>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Thermal Paste: The Big Difference",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-white font-bold mb-4 text-xl">Don't use toothpaste!</h4>
                <p class="text-gray-300 mb-4">
                    The thermal paste that comes pre-applied on brand Coolers (Corsair, DeepCool) is great. No need to change it.
                </p>
                <p class="text-gray-300 text-sm">
                    Now, if you bought a Chinese "White Label" cooler or are doing maintenance after 2 years, buy a decent silver or ceramic paste (Ex: SnowDog, Artic MX-4).
                    <br/>The difference between a bad paste and a good one can be 5°C to 10°C.
                    <br/><strong>Application Method:</strong> A dot in the middle (Pea size) or an X. Don't spread it with your finger (skin oils ruin conductivity). Let the cooler's pressure spread it.
                </p>
            </div>
            `
        },
        {
            title: "Fan Curve",
            content: `
            <p class="mb-4 text-gray-300">
                Does your PC sound like a jet engine? Adjust the curve in the BIOS.
                <br/>It makes no sense for the fan to go to 100% when the CPU is at 50°C (opening a browser).
                <br/>Set it to stay quiet (30-40%) until 65°C, and only really spin up when it passes 75°C (gaming). This saves your ears.
            </p>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Maintenance",
            content: `
            <p class="mb-4 text-gray-300">
                <strong>Air Cooler:</strong> Clean the dust with a brush every 6 months.
                <br/><strong>Water Cooler:</strong> Clean the radiator dust (use compressed air or a cold hair dryer). Check for noises in the pump. If the pump makes a "sand" noise, it's dying.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does an Air Cooler bend the motherboard?",
            answer: "Giant models (1kg Dual Tower) can apply force, yes. Check if your motherboard has reinforcement or use an adapted support (GPU Holder) if you feel it's sagging."
        },
        {
            question: "Is Custom Water Cooler worth it?",
            answer: "Only for rich enthusiasts. The cost is 10x higher, the risk of leaking is high if you build it wrong, and maintenance is annoying (draining fluid annually). For 99.9% of people, sealed AIO (All-In-One) or Air Cooler is the way to go."
        }
    ];

    const externalReferences = [
        { name: "Gamers Nexus Cooler Reviews", url: "https://www.youtube.com/user/GamersNexus" },
        { name: "Noctua Cooling Guide", url: "https://noctua.at/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitorar-temperatura-pc",
            title: "Monitor Temperature",
            description: "Know if your cooler is working."
        },
        {
            href: "/guides/fans-fluxo-de-ar-pc-gamer",
            title: "Airflow",
            description: "A good cooler is useless in an oven case."
        },
        {
            href: "/guides/como-escolher-fonte-pc-gamer",
            title: "Power Supply",
            description: "Fans and pumps consume power."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Intermediate"
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



