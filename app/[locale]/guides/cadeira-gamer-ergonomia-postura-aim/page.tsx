import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'cadeira-gamer-ergonomia-postura-aim',
    title: "Setup Ergonomics (2026): Posture, Chair, and Aiming",
    description: "Back and wrist pain destroys your aim. Learn how to adjust chair height, monitor, and desk to play for hours without injury (RSI).",
    category: 'hardware',
    difficulty: 'Beginner',
    time: '15 min'
};

const title = "Gamer Ergonomics Guide (2026): Play Without Pain";
const description = "Aim consistency comes from body stability. If you're slouched, your brain spends energy compensating for balance instead of focusing on the headshot.";

const keywords = [
    'correct gamer desk height ergonomics',
    'gamer chair vs office chair herman miller',
    'wrist pain mousepad height',
    'correct monitor eyes position',
    'footrest gamer ergonomics',
    'how to sit correctly to play fps',
    'repetitive strain injury rsi gamer',
    'voltris optimizer health',
    'hand stretching exercises gamer'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('cadeira-gamer-ergonomia-postura-aim', title, description, keywords, locale);
}

export default function ErgoGuide() {
    const summaryTable = [
        { label: "Elbows", value: "90 Degrees (Supported)" },
        { label: "Monitor", value: "Top at eye level" },
        { label: "Screen Distance", value: "One arm length" },
        { label: "Feet", value: "Planted on the floor" },
        { label: "Lower Back", value: "Supported (Cushion)" },
        { label: "Breaks", value: "Every 1 hour" },
        { label: "Mouse", value: "Arm relaxed, not tense" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Physics of Aiming",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Many pros play with their "face in the screen" or a tilted keyboard. This works for 5 years, then comes the tendinitis. The goal here is longevity and mechanical consistency.
        </p>
      `
        },
        {
            title: "Chapter 1: Desk and Chair Height",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">The 90-Degree Rule</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Sit down and relax your shoulders.
                    <br/>Your elbows should be at the same height as the desk surface, forming a 90-degree angle.
                    <br/>- If the desk is high: Raise the chair and use a footrest (books/box).
                    <br/>- If the desk is low: You will slouch (Hunchback). Raise the desk with risers.
                    <br/>The forearm should rest flat on the mousepad.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Monitor (Neck Pain)",
            content: `
        <p class="mb-4 text-gray-300">
            The TOP edge of the monitor should be at your eye level.
            <br/>We naturally look slightly downwards (15 degrees).
            <br/>If the monitor is too high, you strain your neck backwards.
            <br/>If it's too low (laptop), you bend your neck (Text Neck).
            <br/>Tilt the monitor slightly upwards if it's placed low.
        </p>
      `
        },
        {
            title: "Chapter 3: Chair (Gamer vs Office)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Gamer Chair (Racing):</strong> Looks cool, but usually has shoulder "wings" that push you forward and bucket seats that squeeze your thighs. Loose lumbar cushions are often poor.
            - <strong>Office Chair (Mesh):</strong> Built for real ergonomics. The mesh back breathes and molds to your spine.
            <br/>If using a Gamer chair, remove the head cushion if it pushes your neck forward.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Mouse Arm (Arm vs Wrist Aiming)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Wrist Aim:</strong> Resting the wrist on the desk edge. Causes pressure on the Carpal Tunnel. Requires high sensitivity. Risky.
            - <strong>Arm Aim:</strong> Resting the entire forearm on the desk. The pivot is the elbow. Lower sensitivity. Distributes pressure and is healthier and more precise long-term.
            <br/>Push the monitor back and clear desk space to support your whole arm.
        </p>
      `
        },
        {
            title: "Chapter 5: Mouse Grip Style",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Palm Grip:</strong> Whole hand on the mouse. Relaxed.
            - <strong>Claw/Fingertip:</strong> Arched fingers. More tension.
            <br/>Don't force a grip that hurts. Use the right-sized mouse for your hand (Rocket Jump Ninja Size Guide). A mouse that's too small causes cramps.
        </p>
      `
        },
        {
            title: "Chapter 6: Room Lighting (Bias Lighting)",
            content: `
        <p class="mb-4 text-gray-300">
            Playing in total darkness with a bright monitor strains the eyes (excessive contrast).
            <br/>Place an LED strip (warm white) behind the monitor reflecting off the wall.
            <br/>This soft ambient light balances the pupil and reduces headaches.
        </p>
      `
        },
        {
            title: "Chapter 7: Stretching (Hand Yoga)",
            content: `
        <p class="mb-4 text-gray-300">
            Between matches (in lobby/queue):
            <br/>1. Stretch your arm and pull your fingers back (palm forward).
            <br/>2. Close your fist and rotate slowly.
            <br/>3. Blink your eyes hard. (Gamers blink 60% less when focused, drying out the cornea).
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Hydration",
            content: `
            <p class="mb-4 text-gray-300">
                Dehydration reduces reaction time and cognitive function.
                <br/>Keep a water bottle on your desk.
            </p>
            `
        },
        {
            title: "Chapter 9: Feet",
            content: `
            <p class="mb-4 text-gray-300">
                If your feet dangle, your spine becomes unstable.
                <br/>Feet firm on the floor provide a base for your "Core" (abs) to hold posture.
            </p>
            `
        },
        {
            title: "Chapter 10: Cold Hands",
            content: `
            <p class="mb-4 text-gray-300">
                Cold hands = Slow reflexes.
                <br/>If your room is cold, use a USB hand warmer or put your hands under your legs between rounds. Pro players use hand warmers on stage.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is an expensive chair worth it?",
            answer: "A used Herman Miller ($600) lasts 15 years and saves your back. A cheap gamer chair ($150) lasts 2 years and ruins your posture. Invest in your health."
        },
        {
            question: "My desk wobbles when I play.",
            answer: "This messes up your aim. Tighten the screws or push the desk against the wall to stabilize it."
        }
    ];

    const externalReferences = [
        { name: "Dr. Levi (Gamer Exercises)", url: "https://www.youtube.com/user/drlevifitness" },
        { name: "Rocket Jump Ninja (Mouse Guide)", url: "https://www.rocketjumpninja.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/mouse-otimizacao-windows-precisao",
            title: "Mouse",
            description: "Sensitivity adjustment."
        }
    ];

    const allContentSections = [...contentSections, ...advancedContentSections, ...additionalContentSections];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Beginner"
            author="Voltris Technical Team"
            lastUpdated="February 2026"
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

