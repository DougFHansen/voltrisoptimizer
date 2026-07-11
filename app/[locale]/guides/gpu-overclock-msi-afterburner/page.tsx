import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'overclock-gpu-msi-afterburner',
    title: "Safe GPU Overclocking: Definitive MSI Afterburner Guide (2026)",
    description: "Get 15% free performance. Learn how to overclock your graphics card (Nvidia/AMD) using MSI Afterburner, test stability with Kombustor, and perform Undervolting.",
    category: 'hardware',
    difficulty: 'Advanced',
    time: '60 min'
};

const title = "GPU Overclocking with MSI Afterburner: The Safe and Efficient Guide (2026)";
const description = "Your hardware can do more. Unlock the hidden potential of your graphics card by increasing Core Clock and Memory Clock without burning anything.";

const keywords = [
    'how to overclock graphics card msi afterburner',
    'safe gpu overclock nvidia amd 2026',
    'voltage curve msi afterburner undervolt',
    'increase fps is overclocking worth it',
    'test overclock stability kombustor furmark',
    'safe power limit temp limit',
    'gddr6 memory overclocking',
    'msi afterburner official download'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('overclock-gpu-msi-afterburner', title, description, keywords, locale);
}

export default function OverclockGuide() {
    const summaryTable = [
        { label: "Software", value: "MSI Afterburner (Free)" },
        { label: "Risk", value: "Low (If Voltage is not altered)" },
        { label: "Average Gain", value: "+10% to +15% FPS" },
        { label: "Hardware", value: "Any GPU (GTX/RTX/RX)" },
        { label: "Technique", value: "Manual Frequency Scanning" },
        { label: "Undervolt", value: "Recommended for Laptops" }
    ];

    const contentSections = [
        {
            title: "What is Overclocking and the 'Silicon Lottery'",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Manufacturers (Asus, Gigabyte, MSI) set their graphics cards with conservative clocks to ensure 100% of chips work well under any conditions. This means **every** graphics card has an unused safety margin. Overclocking is the process of using this margin to get free FPS.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          The limit of overclocking depends on the "Silicon Lottery". Two identical RTX 4060 cards can have different limits. One might accept +200MHz, the other only +100MHz. This guide will teach you how to find the limit of **your** card.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🌡️</span> Intelligent Safety Monitoring
            </h4>
            <p class="text-gray-300 mb-4">
                Overclocking without monitoring the temperature is dangerous. <strong>Voltris Optimizer</strong> includes a discreet overlay that warns if the Junction temperature (Hotspot) exceeds 95°C, preventing long-term chip degradation.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Download Voltris Monitor
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "Core Clock vs Memory Clock: Which Matters More?",
            content: `
        <p class="mb-4 text-gray-300">
            Increasing both is good, but they serve different purposes.
        </p>
        
        <!-- SVG Technical Diagram: OC Impact -->
        <div class="my-8 bg-[#0F111A] p-6 rounded-xl border border-white/5 flex flex-col items-center">
            <h4 class="text-white font-bold mb-6 text-center">GPU Anatomy: Where to Gain FPS</h4>
            <svg viewBox="0 0 800 250" class="w-full h-auto text-gray-300" xmlns="http://www.w3.org/2000/svg">
                <!-- Core Cluster -->
                <g transform="translate(100, 50)">
                    <rect x="0" y="0" width="150" height="150" rx="8" fill="#1e293b" stroke="#31A8FF" stroke-width="2"/>
                    <text x="75" y="30" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">GPU Core</text>
                    <text x="75" y="80" text-anchor="middle" fill="#31A8FF" font-size="24" font-weight="bold">+150 MHz</text>
                    <text x="75" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">Geometric Calculations</text>
                    <text x="75" y="130" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="12">Linear FPS Gain</text>
                </g>

                <!-- Memory Modules -->
                <g transform="translate(550, 50)">
                    <rect x="0" y="0" width="150" height="150" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
                    <text x="75" y="30" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">VRAM (GDDR6)</text>
                    <text x="75" y="80" text-anchor="middle" fill="#fbbf24" font-size="24" font-weight="bold">+1000 MHz</text>
                    <text x="75" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">Textures and Buffer</text>
                    <text x="75" y="130" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="12">4K Stability</text>
                </g>

                <!-- Data Path -->
                <path d="M 260 125 L 540 125" stroke="#475569" stroke-width="4" stroke-dasharray="8 4"/>
                <text x="400" y="110" text-anchor="middle" fill="#fff" font-size="12">Bus Width (128/256 bit)</text>
            </svg>
            <p class="text-xs text-gray-500 mt-4 italic text-center">Figure 1: Core Clock gives direct FPS. Memory Clock helps in high resolutions and heavy textures.</p>
        </div>
      `
        },
        {
            title: "Step 1: Preparation and Safety",
            content: `
        <p class="mb-4 text-gray-300">
           Before moving any slider, we need the right tools.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>Download <strong>MSI Afterburner</strong> (Official site: Guru3D or MSI). Beware of fake sites full of viruses.</li>
            <li>Download benchmark software, such as <strong>Unigine Heaven</strong> or <strong>Furmark</strong>.</li>
            <li>Open Afterburner.</li>
            <li>Go to settings (Gear icon) > General tab.</li>
            <li>Check: <strong>"Unlock voltage control"</strong> and <strong>"Unlock voltage monitoring"</strong>.</li>
            <li>Restart Afterburner.</li>
        </ol>
      `
        },
        {
            title: "Step 2: Power Limit and Temp Limit (Safe)",
            content: `
        <p class="mb-4 text-gray-300">
            The first thing to do is release the power.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>On the main panel, find the <strong>Power Limit (%)</strong> and <strong>Temp Limit (°C)</strong> sliders.</li>
            <li>Drag both to the <strong>MAXIMUM</strong> (right).</li>
            <li><em>"Will this burn my card?"</em> <strong>NO.</strong> The card has internal BIOS protections. Increasing the Power Limit simply tells the card: "You can use more power if needed to maintain the high clock". If the temperature rises too much, it will still automatically reduce speed (Throttling). It is 100% safe on modern cards.</li>
        </ul>
      `
        },
        {
            title: "Step 3: Increasing the Core Clock (FPS)",
            content: `
        <p class="mb-4 text-gray-300">
            This is where the trial and error begins.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
            <li>Run Unigine Heaven in Windowed mode so you can see the benchmark running.</li>
            <li>In Afterburner, increase the <strong>Core Clock (MHz)</strong> by +50. Click the "Check" button (Apply).</li>
            <li>Watch the benchmark for 1 minute. Did it crash? Did artifacts (colored lines) appear?</li>
            <li>If it didn't crash, increase another +25 (Total +75). Apply.</li>
            <li>Repeat until the video driver restarts or the game closes.</li>
            <li>When it crashes (e.g., at +180), go back 20 MHz (e.g., to +160). <strong>This is your stable clock.</strong></li>
        </ol>
      `
        },
        {
            title: "Step 4: Increasing the Memory Clock (VRAM)",
            content: `
        <p class="mb-4 text-gray-300">
            GDDR6 memory can handle a lot of overclocking.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Start with <strong>+200 MHz</strong>. Apply.</li>
            <li>Increase by 100 at a time. Many cards can handle +800 or even +1000 MHz.</li>
            <li><strong>Sign of memory failure:</strong> Flashing white/purple dots on the screen or stretched textures. If you see this, reduce immediately.</li>
            <li><strong>Attention:</strong> Memories have ECC (Error Correction). Sometimes you set +1500 MHz and the PC doesn't crash, but performance <em>drops</em> because the memory is spending time correcting errors. Always compare the benchmark score!</li>
        </ul>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Undervolting: The Intelligent Overclock",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-green-400 font-bold mb-4 text-xl">Less Heat = More Performance</h4>
                <p class="text-gray-300 mb-4">
                    Modern cards hit the temperature limit quickly. Undervolting consists of maintaining the same high clock but using less voltage. This makes the card cool down by 5°C to 10°C, allowing it to maintain the Boost Clock for longer without dropping frequency.
                </p>
            </div>

            <p class="text-gray-300 mb-4 text-sm">
                In Afterburner, press <code>Ctrl + F</code> to open the Voltage Curve. The goal is to transform the curve into a straight line at the desired frequency with the lowest possible voltage (e.g., 1950MHz @ 0.900V instead of 1950MHz @ 1.050V).
            </p>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Expected Results (Example RTX 3060)",
            content: `
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-gray-300 border-collapse">
                    <thead>
                        <tr class="bg-white/5 border-b border-white/10">
                            <th class="px-4 py-3 text-left text-white font-bold">State</th>
                            <th class="px-4 py-3 text-left text-white font-bold">Core / Mem</th>
                            <th class="px-4 py-3 text-left text-white font-bold">Temperature</th>
                            <th class="px-4 py-3 text-left text-white font-bold">FPS (Cyberpunk)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-white/5 hover:bg-white/5">
                            <td class="px-4 py-3">Stock (Default)</td>
                            <td class="px-4 py-3">1837 / 7500</td>
                            <td class="px-4 py-3">72°C</td>
                            <td class="px-4 py-3">58 FPS</td>
                        </tr>
                        <tr class="border-b border-white/5 hover:bg-white/5">
                            <td class="px-4 py-3">Overclock (+150/+1000)</td>
                            <td class="px-4 py-3">1987 / 8500</td>
                            <td class="px-4 py-3">76°C</td>
                            <td class="px-4 py-3 text-green-400 font-bold">66 FPS (+13%)</td>
                        </tr>
                         <tr class="hover:bg-white/5">
                            <td class="px-4 py-3">Undervolt (0.9V)</td>
                            <td class="px-4 py-3">1950 / 8500</td>
                            <td class="px-4 py-3 text-blue-400 font-bold">64°C (-8°C)</td>
                            <td class="px-4 py-3">65 FPS</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does overclocking void the warranty?",
            answer: "Technically, yes. In practice, it's almost impossible for the manufacturer to prove you used overclocking software unless you modify the card's BIOS (flash). Software-based overclocking (Afterburner) is considered safe by most enthusiasts."
        },
        {
            question: "Can I overclock a Laptop?",
            answer: "You can, but <strong>the gain is limited by heat</strong>. On laptops, we recommend Undervolting. If you increase the clock, the laptop will hit 90°C faster and reduce speed (Thermal Throttling), resulting in worse performance."
        },
        {
            question: "The PC restarted during the test, did I burn something?",
            answer: "No. This is just the video driver protecting the hardware. If the PC freezes, just restart. Afterburner (if configured correctly) won't apply the unstable overclock on startup if you haven't checked the 'Startup' button (Windows icon)."
        }
    ];

    const externalReferences = [
        { name: "Guru3D - MSI Afterburner Download", url: "https://www.guru3d.com/files-details/msi-afterburner-beta-download.html" },
        { name: "Unigine Heaven Benchmark", url: "https://benchmark.unigine.com/heaven" }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitorar-temperatura-pc",
            title: "Monitor Temperature",
            description: "How to use RivaTuner to see stats on screen."
        },
        {
            href: "/guides/upgrade-pc-antigo-vale-a-pena",
            title: "CPU Bottleneck",
            description: "Is GPU OC worth it if your CPU is weak?"
        },
        {
            href: "/guides/undervolt-cpu-notebook",
            title: "CPU Undervolt",
            description: "The perfect pair for GPU overclocking."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="60 min"
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


