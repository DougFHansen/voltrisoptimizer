import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'calibrar-bateria-notebook',
  title: "How to Calibrate Notebook Battery in 2026 (Fix Percentage)",
  description: "Does your laptop turn off suddenly even while showing 20%? Learn how to calibrate the battery for an accurate reading of how much charge you have left.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '6 hours'
};

const title = "How to Calibrate Notebook Battery in 2026 (Fix Percentage)";
const description = "Does your laptop turn off suddenly even while showing 20%? Learn how to calibrate the battery for an accurate reading of how much charge you have left.";
const keywords = [
    'how to calibrate notebook battery windows 11 2026',
    'laptop turns off suddenly with charge fix',
    'battery calibration step by step tutorial',
    'worn out or uncalibrated notebook battery guide 2026',
    'reset battery counter windows 11 tutorial'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('calibrar-bateria-notebook', title, description, keywords, locale);
}

export default function BatteryCalibrationGuide() {
    const summaryTable = [
        { label: "Symptom", value: "Sudden shutdown at 10% or 20%" },
        { label: "What it does", value: "Syncs the fuel gauge with real chemistry" },
        { label: "Frequency", value: "Once every 3 months" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "Why Does the Battery \"Lie\"?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Over time in 2026, the digital sensor that measures battery charge (Fuel Gauge) can lose sync with the real chemical capacity of the cells. This makes Windows think you still have 15% battery when it's actually near the end, causing a sudden shutdown. **Calibration** doesn't fix a dead battery, but it ensures the shown percentage is real.
        </p>
      `
        },
        {
            title: "1. Full Cycle Step-by-Step",
            content: `
        <p class="mb-4 text-gray-300">Follow this procedure to reset the sensor:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Charge the laptop to <strong>100%</strong> and leave it plugged in for an extra 2 hours to ensure a full charge.</li>
            <li>Unplug the charger and use the device until it drains completely and turns off by itself.</li>
            <li><strong>Important:</strong> Leave the laptop off and without power for about 3 to 5 hours.</li>
            <li>Plug the charger back in and let it charge uninterrupted back to 100%.</li>
            <li>Now Windows will have new reference points (0% and 100%) synchronized.</li>
        </ol>
      `
        },
        {
            title: "2. Preparing Windows for Calibration",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Power Adjustment:</h4>
            <p class="text-sm text-gray-300">
                To prevent the laptop from hibernating prematurely in step 2, go to Power Options > Change plan settings. <br/><br/>
                Make sure the 'Hibernate' on battery option is set to **'Never'**. This allows the lithium-ion cells to discharge to the hardware-configured safe limit rather than being cut off by Windows software.
            </p>
        </div>
      `
        },
        {
            title: "3. When Does Calibration Not Work?",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>2026 Tip:</strong> 
            <br/><br/>If after calibrating your laptop still only lasts 30 minutes, the problem is physical cell wear (degradation). Use our 'Check Battery Health' guide to view the wear level. If the full charge capacity is less than 50% of the original, calibration won't help: you'll need to physically replace the battery.
        </p>
      `
        }
    ];

    const advancedContentSections = [
    {
      title: "Lithium-Ion Battery Science: Chemistry and Degradation",
      content: `
        <h4 class="text-white font-bold mb-3">🔋 Lithium-Ion Battery Chemistry</h4>
        <p class="mb-4 text-gray-300">
          Notebook lithium-ion batteries are composed of electrochemical cells that store energy through the movement of lithium ions between cathode and anode. Understanding the underlying chemical principles is essential for grasping the calibration and degradation process:
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="bg-blue-900/10 p-4 rounded-lg border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-2">Chemical Components</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Cathode: Cobalt, nickel, or manganese oxide</li>
              <li>• Anode: Graphite or silicone</li>
              <li>• Electrolyte: Lithium salt solution in organic solvent</li>
              <li>• Separator: Microporous polyethylene or polypropylene</li>
              <li>• Current Collector: Copper (anode) and aluminum (cathode)</li>
              <li>• Protection Circuit: Controls safe charge/discharge</li>
            </ul>
          </div>
          <div class="bg-purple-900/10 p-4 rounded-lg border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-2">Electrochemical Reactions</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• During Charge: Li⁺ moves from cathode to anode</li>
              <li>• During Discharge: Li⁺ moves from anode to cathode</li>
              <li>• Nominal Capacity: Measured in mAh (milliampere-hour)</li>
              <li>• Nominal Voltage: 3.7V per cell</li>
              <li>• Cut-off Voltage: 4.2V (full charge) and 2.5V (full discharge)</li>
              <li>• Energy Density: 150-250 Wh/kg</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 Degradation Processes</h4>
        <p class="mb-4 text-gray-300">
          Lithium-ion battery degradation occurs through multiple chemical and physical mechanisms:
        </p>
        
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Mechanism</th>
                <th class="p-3 text-left">Description</th>
                <th class="p-3 text-left">Loss Rate</th>
                <th class="p-3 text-left">Acceleration Factor</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">SEI Formation</td>
                <td class="p-3">Passive film build-up on the anode</td>
                <td class="p-3">2-5% per year</td>
                <td class="p-3">High temperature</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Lithium Plating</td>
                <td class="p-3">Metallic lithium deposits</td>
                <td class="p-3">5-15% per year</td>
                <td class="p-3">Fast charging</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Electrolyte Decomposition</td>
                <td class="p-3">Electrolyte breakdown</td>
                <td class="p-3">1-3% per year</td>
                <td class="p-3">High voltage</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Active Material Loss</td>
                <td class="p-3">Loss of active electrode material</td>
                <td class="p-3">2-8% per year</td>
                <td class="p-3">Deep cycles</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Separator Degradation</td>
                <td class="p-3">Separator breakdown</td>
                <td class="p-3">1-4% per year</td>
                <td class="p-3">Thermal cycling</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 mt-6">
          <h4 class="text-amber-400 font-bold mb-2">🔍 Important Technical Fact</h4>
          <p class="text-sm text-gray-300">
            Degradation is non-linear and accelerates significantly after reaching about 80% of original capacity. Calibration doesn't reverse chemical decay; it only recalibrates the reporting system to accurately reflect remaining capacity.
          </p>
        </div>
      `
    },
    {
      title: "Battery Management Systems and Firmware",
      content: `
        <h4 class="text-white font-bold mb-3">⚡ Battery Management Units (BMU)</h4>
        <p class="mb-4 text-gray-300">
          The Battery Management System (BMS) is responsible for precisely monitoring and controlling battery state-of-charge and health. This system involves specialized sensors and firmware:
        </p>
        
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Component</th>
                <th class="p-3 text-left">Function</th>
                <th class="p-3 text-left">Accuracy</th>
                <th class="p-3 text-left">Update Method</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">Coulomb Counter</td>
                <td class="p-3">Charge/Discharge measuring</td>
                <td class="p-3">±1-2%</td>
                <td class="p-3">Firmware</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Voltage Monitor</td>
                <td class="p-3">Voltage tracking</td>
                <td class="p-3">±0.5%</td>
                <td class="p-3">Hardware</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Temperature Sensor</td>
                <td class="p-3">Thermal monitoring</td>
                <td class="p-3">±1°C</td>
                <td class="p-3">Hardware</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Current Sensor</td>
                <td class="p-3">Current flow measurement</td>
                <td class="p-3">±0.5%</td>
                <td class="p-3">Hardware</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Fuel Gauge IC</td>
                <td class="p-3">Charge estimation algorithm</td>
                <td class="p-3">±3-5%</td>
                <td class="p-3">Firmware</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 Technical Calibration Process</h4>
        <p class="mb-4 text-gray-300">
          Calibration involves specific measurements to redefine system reference points:
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-green-900/10 p-4 rounded-lg border border-green-500/20">
            <h5 class="text-green-400 font-bold mb-2">Coulomb Counter Reset</h5>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>Controlled deep discharge</li>
              <li>Total charge measurement</li>
              <li>Zero-point establishment</li>
              <li>Integrity verification</li>
            </ul>
          </div>
          
          <div class="bg-cyan-900/10 p-4 rounded-lg border border-cyan-500/20">
            <h5 class="text-cyan-400 font-bold mb-2">Discharge Curve Update</h5>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>Voltage vs. load mapping</li>
              <li>Temperature compensation</li>
              <li>Degradation adaptation</li>
              <li>Refining estimates</li>
            </ul>
          </div>
          
          <div class="bg-indigo-900/10 p-4 rounded-lg border border-indigo-500/20">
            <h5 class="text-indigo-400 font-bold mb-2">Limit Reconfiguration</h5>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>Safe cut-off voltage</li>
              <li>Thermal thresholds</li>
              <li>Overcharge protection</li>
              <li>Equalization algorithms</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "Emerging Technologies in Energy Storage and Charge Management",
      content: `
        <h4 class="text-white font-bold mb-3">🚀 Next-Generation Battery Technologies</h4>
        <p class="mb-4 text-gray-300">
          Future laptop power systems are exploring advanced technologies for higher density and faster charging:
        </p>
        
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Technology</th>
                <th class="p-3 text-left">Energy Density</th>
                <th class="p-3 text-left">Cycle Life</th>
                <th class="p-3 text-left">Charge Time</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">Standard Li-Ion</td>
                <td class="p-3">150-250 Wh/L</td>
                <td class="p-3">500-1000 cycles</td>
                <td class="p-3">1-3 hours</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Silicon-Anode</td>
                <td class="p-3">300-400 Wh/L</td>
                <td class="p-3">1000-2000 cycles</td>
                <td class="p-3">30-60 min</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Solid-State</td>
                <td class="p-3">400-500 Wh/L</td>
                <td class="p-3">2000-5000 cycles</td>
                <td class="p-3">10-20 min</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🤖 AI in Power Management</h4>
        <p class="mb-4 text-gray-300">
          AI is starting to play a crucial role in optimizing battery systems through predictive health monitoring and adaptive charging patterns. These systems learn from user habits to maximize battery longevity automatically.
        </p>
        
        <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/20 mt-6">
          <h4 class="text-red-400 font-bold mb-2">⚠️ Looking Ahead</h4>
          <p class="text-sm text-gray-300">
            As battery technology and AI management advance, manual calibration will become obsolete. Smarter systems will maintain accuracy autonomously throughout the battery's entire lifecycle.
          </p>
        </div>
      `
    }
  ];

    const relatedGuides = [
        {
            href: "/guides/saude-bateria-notebook",
            title: "Check Health",
            description: "Generate the Windows battery report."
        },
        {
            href: "/guides/otimizacoes-para-notebook-gamer",
            title: "Optimize Notebook",
            description: "Tips to make battery last longer daily."
        },
        {
            href: "/guides/hibernacao-vs-suspensao-qual-o-melhor",
            title: "Hibernate vs Sleep",
            description: "Understand how to save charge."
        }
    ];

    const allContentSections = [...contentSections, ...advancedContentSections];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="6 hours"
            difficultyLevel="Intermediate"
            contentSections={allContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

