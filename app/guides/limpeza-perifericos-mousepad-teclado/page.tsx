import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'limpeza-perifericos-mousepad-teclado',
    title: "Setup Cleaning (2026): Mousepad, Keyboard, and PC",
    description: "Slow mousepad or sticking keyboard keys? Learn how to wash cloth mousepads without damage, lubricate switches, and clean PC dust correctly.",
    category: 'hardware',
    difficulty: 'Beginner',
    time: '20 min'
};

const title = "Gamer Cleaning Guide (2026): Performance Restored";
const description = "Dust causes overheating. A dirty mousepad leads to inconsistent aim. A dirty keyboard results in key failures. Keeping your setup clean maintains high performance.";

const keywords = [
    'how to wash gaming mousepad speed control dry',
    'clean mechanical keyboard remove keycaps switch',
    'clean gaming monitor screen correct cloth',
    'remove pc dust compressed air vs vacuum',
    'lubricate keyboard switch spray',
    'isopropyl alcohol pc cleaning',
    'voltris optimizer clean',
    'mouse double click contact cleaner'
];

export const metadata: Metadata = createGuideMetadata('limpeza-perifericos-mousepad-teclado', title, description, keywords);

export default function CleaningGuide() {
    const summaryTable = [
        { label: "Mousepad", value: "Warm water + Neutral Soap" },
        { label: "Keyboard", value: "Brush + Compressed Air" },
        { label: "Monitor", value: "Microfiber + Distilled Water" },
        { label: "PC (Dust)", value: "Blower (Never Vacuum)" },
        { label: "Contacts", value: "Isopropyl Alcohol" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Invisible Grime",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Your mousepad accumulates hand oils, dead skin, and sweat. This creates irregular friction zones (\"mud\") that catch the mouse. Washing the pad every 3 months makes it feel brand new.
        </p>
      `
        },
        {
            title: "Chapter 1: Washing a Cloth Mousepad",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">In the Bathroom</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Wet the pad with lukewarm (not hot) water in the tub or sink.
                    <br/>2. Apply dish soap or a mild shampoo.
                    <br/>3. Gently scrub with the soft (YELLOW) side of a sponge or your hand. Do not use stiff brushes to avoid fraying the fabric.
                    <br/>4. Rinse thoroughly until all soap is gone.
                    <br/>5. Let it air dry flat in the shade (24h). Do not place it in the sun or use a hair dryer (this melts the rubber).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Mechanical Keyboard",
            content: `
        <p class="mb-4 text-gray-300">
            1. Take a photo of the layout (to remember where the keys go).
            <br/>2. Remove the keycaps with a keycap puller.
            <br/>3. Wash the keycaps in a bowl with soap and water. Let them dry 100%.
            <br/>4. On the keyboard tray (switches), use a soft brush to loosen dust and hair. Turn it upside down.
            <br/>5. Use an air blower to remove the remaining debris.
            <br/>6. If you spilled soda (sticky key), use 99% Isopropyl Alcohol with a cotton swab on the switch (with the cable disconnected).
        </p>
      `
        },
        {
            title: "Chapter 3: Monitor (Extreme Caution)",
            content: `
        <p class="mb-4 text-gray-300">
            Modern screens have sensitive anti-reflective coatings.
            <br/>- NEVER use alcohol, Windex, or paper towels (they cause scratches).
            <br/>- Use two clean microfiber cloths.
            <br/>1. Dampen Cloth 1 slightly with distilled or filtered water. Wipe gently.
            <br/>2. Wipe with dry Cloth 2 immediately to prevent water spots.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Inside the PC (Fans)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Vacuum Cleaners:</strong> DANGER. They generate static electricity that can fry the motherboard. Only use specific ESD-safe electronics vacuums.
            - <strong>Compressed Air / Blowers:</strong> The ideal choice.
            <br/>Hold the fan blade with your finger to prevent it from spinning freely with the air blast (spinning too fast can generate reverse voltage and fry the motor/LEDs).
        </p>
      `
        },
        {
            title: "Chapter 5: Contact Cleaning (RAM/GPU)",
            content: `
        <p class="mb-4 text-gray-300">
            If the PC won't turn on or gives a Blue Screen (BSOD):
            <br/>Remove the RAM modules.
            <br/>Gently rub a soft white school eraser over the gold contacts.
            <br/>Clean off the eraser bits with a dry brush.
            <br/>This removes oxidation that causes poor contact.
        </p>
      `
        },
        {
            title: "Chapter 6: Headphones (Pads)",
            content: `
        <p class="mb-4 text-gray-300">
            Ear pads accumulate sweat and can smell.
            <br/>- Synthetic Leather: Wipe with a damp cloth. Apply a small amount of skin moisturizer afterward to prevent peeling.
            <br/>- Fabric (Velours): Remove and wash with soap and water like laundry.
            <br/>Clean earwax from the driver mesh with a soft, dry toothbrush.
        </p>
      `
        },
        {
            title: "Chapter 7: Mouse (Scroll and Sensor)",
            content: `
        <p class="mb-4 text-gray-300">
            - Scroll wheel failing? Blow hard into the gaps or use contact cleaner spray without disassembly. It's usually dust in the encoder.
            - Sensor: Use a dry cotton swab.
            - Feet (Skates): Clean the edges with a toothpick to remove the "crust" of dirt that forms around them.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: The Chair",
            content: `
            <p class="mb-4 text-gray-300">
                Vacuum the seat (remove crumbs).
                <br/>Check the screws underneath. They loosen over time making the chair wobbly. Tighten them every 6 months.
                <br/>Clean the casters (hair tangles can lock the wheels).
            </p>
            `
        },
        {
            title: "Chapter 9: Dust Filters",
            content: `
            <p class="mb-4 text-gray-300">
                Wash magnetic case filters under the tap. Dry them completely before putting them back.
            </p>
            `
        },
        {
            title: "Chapter 10: Cable Organization",
            content: `
            <p class="mb-4 text-gray-300">
                Take advantage of the cleaning to tidy up cables behind the desk.
                <br/>Tangled cables accumulate giant dust bunnies. Use Velcro ties.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can I dry my mousepad with a hair dryer?",
            answer: "NO. The heat deforms the rubber base and peels off the fabric. Let it dry naturally."
        },
        {
            question: "Does washing the motherboard work?",
            answer: "This is an advanced technique (ultrasonic or isopropyl wash). We do not recommend it for beginners due to the risk of corrosion if not 100% dry."
        }
    ];

    const externalReferences = [
        { name: "How to Clean Mech Keyboard", url: "https://www.reddit.com/r/MechanicalKeyboards/wiki/keyboardmaintenanceguides/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/termperatura-pc-fan-control-curva",
            title: "Temperature",
            description: "Less dust = Less heat."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}

