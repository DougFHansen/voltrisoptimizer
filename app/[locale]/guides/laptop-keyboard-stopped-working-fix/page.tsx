import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'teclado-notebook-parou-fix',
  title: "Laptop Keyboard Stopped Working: How to Fix (2026 Guide)",
  description: "Is half your keyboard not working or has it stopped entirely? Learn how to diagnose driver issues, dirt, and hardware problems in your laptop in 2026.",
  category: 'games-fix',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "Laptop Keyboard Stopped Working: How to Fix (2026 Guide)";
const description = "Is half your keyboard not working or has it stopped entirely? Learn how to diagnose driver issues, dirt, and hardware problems in your laptop in 2026.";
const keywords = [
    'laptop keyboard stopped working how to fix 2026',
    'half of laptop keyboard not working tutorial',
    'laptop keyboard frozen windows 11 fix 2026',
    'how to clean laptop keyboard step by step guide',
    'laptop keyboard stopped after update tutorial 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('teclado-notebook-parou-fix', title, description, keywords, locale);
}

export default function LaptopKeyboardFixGuide() {
    const summaryTable = [
        { label: "Software Cause", value: "Corrupted 'HID Keyboard' driver" },
        { label: "Hardware Cause", value: "Loose Flat Cable or oxidation" },
        { label: "Workaround", value: "On-Screen Keyboard or USB Keyboard" },
        { label: "Difficulty", value: "Intermediate" }
    ];

    const contentSections = [
        {
            title: "The Panic of the Mute Keyboard",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Unlike a desktop PC where you can simply swap the cable, a laptop keyboard is integrated. In 2026, as notebooks get thinner, internal cables have become extremely delicate. If your keyboard stopped working after a bump, liquid spill, or even out of nowhere after a Windows 11 update, we need to find out if it's just a system \"bug\" or if the physical part has died.
        </p>
      `
        },
        {
            title: "1. The BIOS Test: Software or Hardware?",
            content: `
        <p class="mb-4 text-gray-300">Find out in 10 seconds if the keyboard is alive:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Restart your laptop.</li>
            <li>Repeatedly press <strong>F2, F10, or DEL</strong> (depending on your brand) while it powers on.</li>
            <li>If you can enter the BIOS menu and navigate with the arrow keys, your keyboard is <strong>working perfectly</strong>. The problem is with Windows.</li>
            <li>If the keyboard doesn't respond even in the BIOS, unfortunately, the issue is physical (loose flat cable or a hardware defect).</li>
        </ol>
      `
        },
        {
            title: "2. Resetting the Driver (Windows Solution)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Clearing Registry Errors:</h4>
            <p class="text-sm text-gray-300">
                1. Right-click the Start button > <strong>Device Manager</strong>. <br/>
                2. Expand 'Keyboards'. <br/>
                3. Right-click all items (e.g., PS/2 Keyboard) and select <strong>Uninstall device</strong>. <br/>
                4. Restart the laptop. Windows 11 will automatically reinstall the original drivers. Many errors where \"some keys don't work\" are solved with this reset.
            </p>
        </div>
      `
        },
        {
            title: "3. Filter Keys: The Silent Villain",
            content: `
        <p class="mb-4 text-gray-300">
            If you need to hold a key for 1 second for it to register:
            <br/><br/><strong>2026 Tip:</strong> You might have accidentally activated 'Filter Keys'. Go to Settings > Accessibility > Keyboard and check if <strong>Filter Keys</strong> and <strong>Sticky Keys</strong> are turned off. These accessibility options can prevent rapid clicks from being registered.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "11. Advanced Hardware Diagnosis",
            content: `
        <h4 class="text-white font-bold mb-3">🔧 Internal Laptop Keyboard Component Analysis</h4>
        <p class="mb-4 text-gray-300">
            In 2026, laptop keyboards are composed of much more complex components. Advanced diagnosis involves understanding the internal architecture:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h5 class="text-blue-400 font-bold mb-3">Electronic Components</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Flexible circuit matrix (Flat Cable)</li>
                    <li>• Motherboard interface connector</li>
                    <li>• Dedicated microcontroller (in some models)</li>
                    <li>• Pressure sensors and tactile feedback</li>
                    <li>• Keypress detection circuits</li>
                </ul>
            </div>
            <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
                <h5 class="text-purple-400 font-bold mb-3">Common Hardware Failures</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Connector oxidation</li>
                    <li>• Physical damage to the flexible cable</li>
                    <li>• Microcontroller failure</li>
                    <li>• Short circuits due to liquids</li>
                    <li>• Trace peeling on the board</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 Multimeter Diagnosis</h4>
        <p class="mb-4 text-gray-300">
            For advanced technicians, diagnosis can be done with measuring equipment:
        </p>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Component</th>
                        <th class="p-3 text-left">Normal Value</th>
                        <th class="p-3 text-left">Abnormal Value</th>
                        <th class="p-3 text-left">Procedure</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Interface Connector</td>
                        <td class="p-3">Continuity: 0Ω</td>
                        <td class="p-3">Infinity or >10MΩ</td>
                        <td class="p-3">Check welds and connections</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Key Matrix</td>
                        <td class="p-3">10kΩ to 100kΩ</td>
                        <td class="p-3">Short circuit</td>
                        <td class="p-3">Test insulation</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Microcontroller</td>
                        <td class="p-3">5V or 3.3V</td>
                        <td class="p-3">0V or fluctuating</td>
                        <td class="p-3">Check power supply</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        },
        {
            title: "12. Technical Specifications",
            content: `
        <h4 class="text-white font-bold mb-3">🔧 Technical Specifications of Notebook Keyboards</h4>
        <p class="mb-4 text-gray-300">
            Detailed understanding of technical specifications affecting functionality and repairability:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
            <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
                <h5 class="text-indigo-400 font-bold mb-3">Electrical Parameters</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Operating voltage: 3.3V or 5V</li>
                    <li>• Operating current: 10-50mA</li>
                    <li>• Lifecycle: 5-10 million clicks</li>
                </ul>
            </div>
            <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
                <h5 class="text-cyan-400 font-bold mb-3">Mechanical Parameters</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Key travel: 1.2-2.0mm</li>
                    <li>• Actuation force: 45-70cN</li>
                    <li>• Material: Polycarbonate/PVC</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 Interface Connection Comparison</h4>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Type</th>
                        <th class="p-3 text-left">Speed</th>
                        <th class="p-3 text-left">Reliability</th>
                        <th class="p-3 text-left">Repair Ease</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">ZIF Connector</td>
                        <td class="p-3">Low</td>
                        <td class="p-3">High</td>
                        <td class="p-3">Medium</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">FPC Connector</td>
                        <td class="p-3">Medium</td>
                        <td class="p-3">High</td>
                        <td class="p-3">High</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Ribbon Cable</td>
                        <td class="p-3">Low</td>
                        <td class="p-3">Medium</td>
                        <td class="p-3">Low</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "4. Deep Cleaning and Prevention",
            content: `
        <h4 class="text-white font-bold mb-3">🧽 Deep Cleaning Procedures</h4>
        <p class="mb-4 text-gray-300">
            Many keyboard issues are caused by dirt and particle buildup interfering with key detection:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h5 class="text-blue-400 font-bold mb-3">Cleaning Methods</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Low-power vacuum with a fine nozzle</li>
                    <li>• Compressed air (always at a 45° angle)</li>
                    <li>• Soft-bristle brush for overall debris removal</li>
                    <li>• 99% isopropyl alcohol for contact cleaning</li>
                </ul>
            </div>
            <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
                <h5 class="text-purple-400 font-bold mb-3">Safe Cleaning Steps</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Completely shut down the laptop</li>
                    <li>• Remove the battery if possible</li>
                    <li>• Flip the laptop keys-downward</li>
                    <li>• Apply compressed air across the surface</li>
                </ul>
            </div>
        </div>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/teclado-desconfigurado-abnt2-ansi",
            title: "Setup Layout",
            description: "Fix swapped keys or incorrect characters."
        },
        {
            href: "/guides/pos-instalacao-windows-11",
            title: "Optimize System",
            description: "Ensure your drivers are up to date."
        },
        {
            href: "/guides/limpeza-fisica-pc-gamer",
            title: "Clean Keyboard",
            description: "Tips for removing debris between keys."
        }
    ];

    const allContentSections = [...contentSections, ...additionalContentSections, ...advancedContentSections];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}


