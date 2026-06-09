import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'otimizacoes-para-notebook-gamer',
    title: "Gaming Laptop Optimization: Maximum Performance and Battery Life (2026)",
    description: "Laptop overheating and losing FPS? Learn how to configure the Power Control Panel, avoid Thermal Throttling, and use your Dedicated GPU (MUX Switch) correctly.",
    category: 'optimization',
    difficulty: 'Intermediate',
    time: '40 min'
};

const title = "Slow Gaming Laptop? Complete Guide to Thermal and Power Optimization (2026)";
const description = "Laptops suffer from heat. Discover how to undervolt, use cooling pads, and configure Windows to stop limiting your processor.";

const keywords = [
    'optimize gaming laptop windows 11',
    'gaming laptop overheating too much what to do',
    'thermal throttling laptop fix',
    'how to enable mux switch nitro 5 dell g15',
    'undervolt throttlestop tutorial 2026',
    'high performance power plan missing fix',
    'gaming laptop low fps on battery',
    'limit laptop fps rivatuner'
];

export const metadata: Metadata = createGuideMetadata('otimizacoes-para-notebook-gamer', title, description, keywords);

export default function LaptopGuide() {
    const summaryTable = [
        { label: "Biggest Enemy", value: "Heat (Thermal Throttling)" },
        { label: "Power", value: "Always Plugged in while Gaming" },
        { label: "Tool", value: "ThrottleStop / Ryzen Controller" },
        { label: "GPU", value: "Force Dedicated (Nvidia)" },
        { label: "Cooling Pad", value: "Cooling Pad Recommended" },
        { label: "Battery", value: "Conservation Mode (60-80%)" }
    ];

    const contentSections = [
        {
            title: "The Golden Rule: Power and Heat",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Unlike a Desktop, a gaming laptop is limited by two factors: how much heat it can dissipate and how much power the power brick delivers. If you try to play on battery, performance will automatically drop by 70% to protect the lithium cell. <strong>Always play connected to the power outlet.</strong>
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🔋</span> Voltris Gamer Power Plan
            </h4>
            <p class="text-gray-300 mb-4">
                Windows "High Performance" isn't always ideal for laptops, as it makes the CPU run at maximum clock speed even when idle, generating useless heat. <strong>Voltris Optimizer</strong> installs a custom Power Plan that triggers Turbo Boost instantly only during games, keeping the laptop cool on the desktop.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Download Power Plan
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "Step 1: Force Dedicated GPU (MUX Switch)",
            content: `
        <p class="mb-4 text-gray-300">
            Many laptops use the integrated GPU (Intel/AMD) to display the image on the screen, even while processing the game on the dedicated GPU (Nvidia), creating a bottleneck (Optimus).
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>If your laptop has a <strong>MUX Switch</strong> (modern Acer Nitro 5, Dell G15, Legion), open the manufacturer's software (Armoury Crate, NitroSense).</li>
            <li>Look for "GPU Mode", "Discrete Graphics", or "MUX Switch".</li>
            <li>Enable the "Dedicated GPU Only" option (might require a restart).</li>
            <li><strong>Gain:</strong> +15% to +30% FPS in competitive games (Valorant, CS2).</li>
            <li>If you don't have a MUX Switch, connect an external monitor to the HDMI/DisplayPort port. Usually, the external port is wired directly to the dedicated card.</li>
        </ol>
      `
        },
        {
            title: "Step 2: Avoiding Thermal Throttling (Repaste)",
            content: `
        <p class="mb-4 text-gray-300">
            If the processor hits 95°C or 100°C, it reduces speed (from 4.0GHz to 2.5GHz) to avoid burning out. This causes sharp stutters in the game.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Raise the rear:</strong> Place a book (not covering the air vents) or use a stand to elevate the back of the laptop by 5cm. This drastically improves air intake.</li>
            <li><strong>Cleaning:</strong> If the laptop is over 1 year old, open it and clean the dust from the fans. Dust blocks the heatsink.</li>
            <li><strong>Thermal Paste:</strong> Factory paste is usually poor. Swap it for a decent one (Honeywell PTM7950 or MasterGel Maker). Laptops require viscous pastes (to avoid the pump-out effect).</li>
        </ul>
      `
        },
        {
            title: "Step 3: Windows Graphic Settings",
            content: `
        <p class="mb-4 text-gray-300">
            Ensure the game uses the right card.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
            <li>Settings > System > Display > Graphics.</li>
            <li>Under "Desktop apps", click Browse.</li>
            <li>Select the game's executable (e.g., valorant-win64-shipping.exe).</li>
            <li>Click the game in the list > Options > <strong>High performance (Nvidia/AMD GPU)</strong>.</li>
        </ol>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Undervolt: Less Voltage, Same Performance",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-green-400 font-bold mb-4 text-xl">ThrottleStop (Intel) / Ryzen Controller (AMD)</h4>
                <p class="text-gray-300 mb-4">
                    Undervolting is reducing the voltage the CPU receives. This reduces temperature by 10°C without losing performance. Unfortunately, manufacturers like Dell and HP have blocked this in the BIOS for 12th/13th Gen Intel.
                </p>
                <p class="text-gray-300 text-sm">
                    If your CPU is 10th or 11th generation, or AMD Ryzen 5000: Download ThrottleStop. Reduce the "CPU Core" and "CPU Cache" offset by -50mV. Test it. If stable, try -80mV.
                </p>
            </div>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Swollen Battery? Conservation Mode",
            content: `
            <div class="space-y-4">
                <div class="bg-gray-800 p-4 rounded-lg">
                    <h5 class="text-orange-400 font-bold mb-2">Charge Limit</h5>
                    <p class="text-gray-300 text-sm">
                        Leaving your laptop at 100% charge while plugged in all the time degrades the battery and can cause swelling. Enable "Conservation Mode" in the manufacturer's software (MyAsus, Lenovo Vantage, Dell Power Manager) to limit charging to 60% or 80%. This triples the battery's lifespan.
                    </p>
                </div>
            </div>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does playing with an external monitor increase FPS?",
            answer: "On most laptops, yes, as it bypasses the Optimus Bottleneck (the image goes straight from the dedicated card to the monitor, without passing through the integrated one). The gain is 10-15%."
        },
        {
            question: "Can I close the lid while playing on an external monitor?",
            answer: "Be careful. Many laptops (like Macbooks and some Dell models) use the keyboard area to intake air or dissipate heat passively. Closing the lid can choke the system. Monitor temperatures. If they rise, leave it open."
        },
        {
            question: "Does Cooler Booster (Max Fan) damage the fan?",
            answer: "Fans are cheap mechanical parts that are easy to replace. It's much better to wear out a fan ($10) than to fry your GPU ($500). Use max fans during heavy gaming sessions without hesitation."
        }
    ];

    const externalReferences = [
        { name: "ThrottleStop Download", url: "https://www.techpowerup.com/download/techpowerup-throttlestop/" },
        { name: "Ryzen Controller", url: "https://ryzencontroller.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/undervolt-cpu-notebook",
            title: "Undervolt Tutorial",
            description: "Detailed step-by-step for ThrottleStop."
        },
        {
            href: "/guides/monitorar-temperatura-pc",
            title: "Monitor Temperature",
            description: "How to use MSI Afterburner to see degrees in-game."
        },
        {
            href: "/guides/saude-bateria-notebook",
            title: "Check Battery",
            description: "Use the Windows battery-report command."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="40 min"
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

