import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'teclado-mecanico-rapid-trigger-snap-tap',
    title: "Rapid Trigger & Snap Tap (2026): The Hall Effect Keyboard Revolution",
    description: "Understand Rapid Trigger (Wooting), Snap Tap (Razer), and how to configure magnetic keyboards for instant strafing in CS2 and Valorant.",
    category: 'peripherals',
    difficulty: 'Advanced',
    time: '30 min'
};

const title = "Hall Effect Keyboards (2026): The End of Standard Mechanical Keyboards";
const description = "Rapid Trigger has changed the competitive landscape. It allows a key to reset as soon as you release it by 0.1mm, enabling superhuman counter-strafing.";

const keywords = [
    'rapid trigger wooting settings cs2',
    'razer snap tap what is it ban',
    'null bind vs snap tap difference',
    'best hall effect keyboards 2026',
    'configure actuation point 0.1mm',
    'wootility web profile code',
    'drunkdeer vs wooting vs razer huntsman v3',
    'magnetic keyboard worth it',
    'perfect strafe valorant tutorial',
    'voltris optimizer keyboard polling'
];

export const metadata: Metadata = createGuideMetadata('teclado-mecanico-rapid-trigger-snap-tap', title, description, keywords);

export default function KeyboardGuide() {
    const summaryTable = [
        { label: "Switch", value: "Magnetic (Hall Effect)" },
        { label: "Actuation", value: "0.1mm to 4.0mm" },
        { label: "Rapid Trigger", value: "ON (0.15mm)" },
        { label: "Snap Tap", value: "SOCD (Null Bind)" },
        { label: "Tachyon Mode", value: "ON (Wooting)" },
        { label: "Polling Rate", value: "8000Hz (If CPU is strong)" },
        { label: "RGB", value: "Low Brightness (Power)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Perfect Strafe",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In games like CS2 and Valorant, you need to come to a complete stop to shoot accurately. The time it takes you to release the 'A' key and press 'D' defines whether you win or lose. <strong>Rapid Trigger</strong> keyboards essentially eliminate this physical delay.
        </p>
      `
        },
        {
            title: "Chapter 1: What is Rapid Trigger?",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">How it works</h4>
                <p class="text-gray-400 text-xs text-justify">
                    In a standard keyboard, you press a key to the bottom (4mm) and must release it halfway (2mm) for it to reset.
                    <br/>With Rapid Trigger, the key resets as soon as you release it by <strong>0.1mm</strong> at any height.
                    <br/>This means you can "spam" ADADADAD at lightning speed.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Ideal Configuration (Wooting/DrunkDeer/Razer)</h4>
                <p class="text-gray-400 text-xs">
                    - <strong>Actuation Point:</strong> 0.4mm to 1.0mm (to avoid accidental presses).
                    - <strong>Rapid Trigger Sensitivity:</strong> 0.15mm (the most sensitive possible without false double-clicking).
                    - Apply this only to the WASD keys. For G (Grenade) or R (Reload), use default settings to avoid mistakes.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Snap Tap / SOCD (The Controversy)",
            content: `
        <p class="mb-4 text-gray-300">
            Razer launched "Snap Tap". What does it do?
            <br/>If you hold 'A' and press 'D' (without releasing 'A'), the keyboard prioritizes 'D' instantly.
            <br/>On a standard keyboard, holding A+D causes you to stop. With Snap Tap, you can change direction without needing perfect coordination.
            <br/><strong>Warning 2026:</strong> Valve has banned "Null Bind" scripts (CFG), but does it allow hardware-based Snap Tap (keyboard firmware) in tournaments? Rules change constantly. Check tournament regulations. For Matchmaking (MM/Premier), it is generally allowed for now.
        </p>
      `
        },
        {
            title: "Chapter 3: Tachyon Mode (Latency)",
            content: `
        <p class="mb-4 text-gray-300">
            In the Wootility software, enable <strong>Tachyon Mode</strong>.
            <br/>It sacrifices complex RGB effects to process keyboard input in less than 1ms.
            <br/>Cool lights < Headshot.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Per-Key Actuation Configuration",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>WASD:</strong> Actuation 0.4mm + Rapid Trigger (Agility).
            - <strong>Spacebar (Jump):</strong> Actuation 1.5mm (to avoid accidental jumps).
            - <strong>Shift/Ctrl:</strong> 1.0mm.
            - <strong>G/R/1/2/3:</strong> 2.0mm (mechanical standard).
            <br/>Customizing each key is the real advantage of magnetic switches.
        </p>
      `
        },
        {
            title: "Chapter 5: Mod Tap (Wooting)",
            content: `
        <p class="mb-4 text-gray-300">
            DKS (Dynamic Keystroke) or Mod Tap allows for different actions depending on whether you "tap" or "hold" a key.
            <br/>Example: Tap CapsLock = Ping. Hold CapsLock = Walk (Shift).
            <br/>This optimizes the use of pinky fingers, which is very useful in Fortnite (placing more binds within reach).
        </p>
      `
        },
        {
            title: "Chapter 6: Polling Rate 8000Hz",
            content: `
        <p class="mb-4 text-gray-300">
            Newer keyboards come with 8000Hz (e.g., Razer Huntsman V3 Pro).
            <br/>Is it worth it?
            <br/>Yes, but it consumes CPU. If you have a 10th Gen i5 or lower, use 1000Hz. If you have a Ryzen 7800X3D, use 8000Hz for minimum latency.
        </p>
      `
        },
        {
            title: "Chapter 7: Lubrication and Mods",
            content: `
        <p class="mb-4 text-gray-300">
            Hall Effect keyboards (like the Wooting 60HE) allow for swapping switches and springs.
            <br/>Using lubricated switches (Lube 205g0) makes the key movement smoother, facilitating precise 0.1mm control. It's not just about the sound (Thock); it's about the tactile feel.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: USB Optimization",
            content: `
            <p class="mb-4 text-gray-300">
                Connect the keyboard directly to the motherboard (rear USB port).
                <br/>Never use USB hubs or the front panel port of the case.
                <br/>Use USB 3.0 ports or higher to ensure stable power for the keyboard processor.
            </p>
            `
        },
        {
            title: "Chapter 9: Budget Alternatives",
            content: `
            <p class="mb-4 text-gray-300">
                Wooting is expensive.
                <br/>Best budget options in 2026:
                <br/>- <strong>DrunkDeer A75/G65:</strong> 90% of the performance, half the price.
                <br/>- <strong>Polar 65:</strong> Excellent build quality.
                <br/>- <strong>Razer Huntsman Mini Analog:</strong> Good software, but a heavier switch.
            </p>
            `
        },
        {
            title: "Chapter 10: Cleaning",
            content: `
            <p class="mb-4 text-gray-300">
                Dust and hairs can enter the magnetic sensor and cause "chatter" (keys failing or activating by themselves).
                <br/>Keep the keyboard clean. Hall Effect is more sensitive to dirt than metallic contacts.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is this considered cheating?",
            answer: "Rapid Trigger is not. It's a hardware evolution (like moving from a 60Hz to a 144Hz monitor). Snap Tap/SOCD is a grey area, but currently permitted by most platforms."
        },
        {
            question: "Does it work in MOBAs?",
            answer: "It helps less. In LoL, you 'spam' abilities; Rapid Trigger helps you spam Karthus' Q faster, but it isn't as revolutionary as it is in FPS games."
        },
        {
            question: "Do I need software running?",
            answer: "With Wooting and DrunkDeer, the configuration is saved to the keyboard's internal memory. You can close or even uninstall the software. For Razer, Synapse needs to be running."
        }
    ];

    const externalReferences = [
        { name: "Wootility Web (Configurator)", url: "https://wootility.io/" },
        { name: "Optimum Tech (Latency Review)", url: "https://www.youtube.com/c/OptimumTech" }
    ];

    const relatedGuides = [
        {
            href: "/guides/como-escolher-mouse-gamer",
            title: "Mouse",
            description: "The perfect pair."
        },
        {
            href: "/guides/valorant-reduzir-input-lag",
            title: "Valorant",
            description: "Where to use Rapid Trigger."
        },
        {
            href: "/guides/cs2-otimizacao-fps-competitivo",
            title: "CS2",
            description: "Counter-Strafing guide."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
            difficultyLevel="Advanced"
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

