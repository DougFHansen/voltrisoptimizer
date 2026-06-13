import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'teclados-mecanicos-switches-guia',
  title: "Mechanical Keyboard Switches: Guide to Colors and Types (2026)",
  description: "Blue, Red, Brown, or Silver? Learn the difference between all mechanical keyboard switches and choose the ideal one for your style in 2026.",
  category: 'perifericos',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "Mechanical Keyboard Switches: Guide to Colors and Types (2026)";
const description = "Blue, Red, Brown, or Silver? Learn the difference between all mechanical keyboard switches and choose the ideal one for your style in 2026.";
const keywords = [
    'mechanical keyboard switches guide 2026 colors',
    'difference between blue red brown switches tutorial 2026',
    'best silent switch for typing guide 2026',
    'switch red vs switch blue which is louder tutorial',
    'what is an optical mechanical switch guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('teclados-mecanicos-switches-guia', title, description, keywords, locale);
}

export default function SwitchGuide() {
    const summaryTable = [
        { label: "Blue Switch", value: "Clicky (Loud) / Tactile Feedback" },
        { label: "Red Switch", value: "Linear (Silent) / Fast for Gaming" },
        { label: "Brown Switch", value: "Tactile (Silent) / Versatile (Work + Gaming)" },
        { label: "Silver Switch", value: "Ultra-Fast Linear / Low Actuation" }
    ];

    const contentSections = [
        {
            title: "The Heart of Your Keyboard",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The <strong>Switch</strong> is the spring and mechanism located under each keycap. It defines whether your typing will be loud, soft, fast, or heavy. In 2026, with the advancement of customization, traditional colors (Blue, Red, and Brown) have gained silent variations and extremely durable optical versions. Choosing the right switch is the most important part of your long-term comfort.
        </p>
      `
        },
        {
            title: "1. The Classic Colors (The Hierarchy)",
            content: `
        <p class="mb-4 text-gray-300">Understand your usage profile:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Blue:</strong> Makes an audible \"click\". Great for those who like the typewriter feel, but it can annoy roommates or coworkers.</li>
            <li><strong>Red:</strong> Linear, meaning it goes straight down without resistance. It is a favorite among competitive gamers for its lightness and speed.</li>
            <li><strong>Brown:</strong> The balance. It has the tactile \"bump\" of the blue switch but without the loud noise. Perfect for home office work and gaming.</li>
        </ul >
      `
        },
        {
            title: "2. Optical vs. Mechanical Switches",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Speed of Light:</h4>
            <p class="text-sm text-gray-300">
                2026 optical switches use a beam of light to register a click instead of metal contact. <br/><br/>
                - <strong>Durability:</strong> Since there is no metal-on-metal friction, they don't suffer from 'Double Click' issues and last twice as long as common switches. <br/>
                - <strong>Performance:</strong> Response time is almost instantaneous (below 0.2ms). Brands like Razer and SteelSeries dominate this technology in their elite models.
            </p>
        </div>
      `
        },
        {
            title: "3. The 'Thock' Phenomenon in 2026",
            content: `
        <p class="mb-4 text-gray-300">
            You've likely seen videos of keyboards with a \"thocky\", padded sound that's satisfying to hear. 
            <br/><br/><strong>Tip:</strong> To achieve this sound (known as Thock), look for <strong>Pre-lubed</strong> switches. Brands like Gateron and Akko offer factory-lubricated switches that eliminate that \"pingy spring\" noise, making typing feel much more premium without needing to open the keyboard yourself.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "4. Advanced Switch Types in 2026",
            content: `
        <h4 class="text-white font-bold mb-3">🔬 Cutting-Edge Switch Technology</h4>
        <p class="mb-4 text-gray-300">
            In 2026, beyond traditional switches, advanced technologies have emerged offering unique experiences:
        </p>
        <div class="space-y-6">
            <div class="border-l-4 border-purple-500 pl-4 py-2 bg-purple-900/10">
                <h5 class="text-purple-400 font-bold mb-2">Hall Effect Switches (Magnetic)</h5>
                <p class="text-gray-300 text-sm">
                    They use magnetic sensors to detect keypresses, offering an extended lifespan (up to 150 million clicks) and ultra-fast response. Examples include the Wooting Lekker switches and new magnetic switches from Logitech.
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• Extended lifespan (150M+ clicks)</li>
                    <li>• Ultra-fast response (<1ms)</li>
                    <li>• Adjustable actuation point</li>
                    <li>• Dust and liquid resistance</li>
                    <li>• Custom per-key configuration</li>
                </ul>
            </div>
            <div class="border-l-4 border-cyan-500 pl-4 py-2 bg-cyan-900/10">
                <h5 class="text-cyan-400 font-bold mb-2">Optoelectronic Switches</h5>
                <p class="text-gray-300 text-sm">
                    Utilize optical sensors to detect presses, combining speed and durability. Used mainly in professional competition keyboards.
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• Precise optical activation</li>
                    <li>• Ultra-fast response times</li>
                    <li>• Higher reliability</li>
                    <li>• Less mechanical wear</li>
                    <li>• Lower input latency</li>
                </ul>
            </div>
            <div class="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-900/10">
                <h5 class="text-yellow-400 font-bold mb-2">Lubricated Linear Switches</h5>
                <p class="text-gray-300 text-sm">
                    Traditional switches with pre-applied lubrication to reduce noise and improve typing feel. Popularized by the DIY community and now offered by major manufacturers.
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• Lower activation noise</li>
                    <li>• Smoother feel</li>
                    <li>• Lower internal friction</li>
                    <li>• Reduced \"scratchiness\"</li>
                    <li>• Increased mechanism durability</li>
                </ul>
            </div>
        </div>
      `
        },
        {
            title: "5. Detailed Switch Comparison",
            content: `
        <h4 class="text-white font-bold mb-3">🔧 Switch Comparison Table</h4>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Type</th>
                        <th class="p-3 text-left">Force</th>
                        <th class="p-3 text-left">Feedback</th>
                        <th class="p-3 text-left">Sound</th>
                        <th class="p-3 text-left">Durability</th>
                        <th class="p-3 text-left">Ideal Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Cherry MX Red</td>
                        <td class="p-3">45cN</td>
                        <td class="p-3">Linear</td>
                        <td class="p-3">Silent</td>
                        <td class="p-3">50M clicks</td>
                        <td class="p-3">Gaming and typing</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Cherry MX Brown</td>
                        <td class="p-3">45cN</td>
                        <td class="p-3">Tactile</td>
                        <td class="p-3">Moderate</td>
                        <td class="p-3">50M clicks</td>
                        <td class="p-3">Typing and gaming</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Cherry MX Blue</td>
                        <td class="p-3">50cN</td>
                        <td class="p-3">Tactile & Clicky</td>
                        <td class="p-3">Loud</td>
                        <td class="p-3">50M clicks</td>
                        <td class="p-3">Precise typing</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Cherry MX Silent Red</td>
                        <td class="p-3">45cN</td>
                        <td class="p-3">Linear</td>
                        <td class="p-3">Very silent</td>
                        <td class="p-3">50M clicks</td>
                        <td class="p-3">Shared environments</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Gateron Yellow</td>
                        <td class="p-3">50cN</td>
                        <td class="p-3">Linear</td>
                        <td class="p-3">Silent</td>
                        <td class="p-3">50M clicks</td>
                        <td class="p-3">Fast gaming</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Razer Green</td>
                        <td class="p-3">50cN</td>
                        <td class="p-3">Tactile & Clicky</td>
                        <td class="p-3">Loud</td>
                        <td class="p-3">80M clicks</td>
                        <td class="p-3">Mechanical typing</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Logitech Romer-G Tactile</td>
                        <td class="p-3">45cN</td>
                        <td class="p-3">Tactile</td>
                        <td class="p-3">Moderate</td>
                        <td class="p-3">70M clicks</td>
                        <td class="p-3">Gaming and office</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Topre Capacitive (45g)</td>
                        <td class="p-3">45cN</td>
                        <td class="p-3">Tactile</td>
                        <td class="p-3">Smooth/Soft</td>
                        <td class="p-3">100M clicks</td>
                        <td class="p-3">Premium typing</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        },
        {
            title: "6. Switch Customization and Modification",
            content: `
        <h4 class="text-white font-bold mb-3">🎨 Switch Modding and Personalization</h4>
        <p class="mb-4 text-gray-300">
            The mechanical keyboard community has developed advanced techniques to customize and improve the switch experience:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
                <h5 class="text-indigo-400 font-bold mb-3">Switch Lubing</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• <strong>Goal:</strong> Reduce internal friction and noise</li>
                    <li>• <strong>Common products:</strong> Krytox GPL 205, Tribosys 3105</li>
                    <li>• <strong>Process:</strong> Disassembly, cleaning, and careful application</li>
                    <li>• <strong>Results:</strong> Smoother and \"buttery\" feel</li>
                    <li>• <strong>Complexity:</strong> Moderate to advanced</li>
                </ul>
            </div>
            <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
                <h5 class="text-cyan-400 font-bold mb-3">Springmods (Spring Modification)</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• <strong>Goal:</strong> Adjust actuation force</li>
                    <li>• <strong>Applications:</strong> Reducing force in heavy switches</li>
                    <li>• <strong>Options:</strong> Springs of different weights (g)</li>
                    <li>• <strong>Results:</strong> Lighter or heavier feeling switches</li>
                    <li>• <strong>Care:</strong> Risk of damaging the switch</li>
                </ul>
            </div>
        </div>
        <h4 class="text-white font-bold mb-3 mt-6">🔧 Modification Processes</h4>
        <p class="mb-4 text-gray-300">
            For those wishing to modify their switches:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
            <li><strong>Desoldering:</strong> Remove switches from the PCB (if not hot-swap)</li>
            <li><strong>Disassembly:</strong> Separate the stem, housing, and spring</li>
            <li><strong>Lubricating:</strong> Apply lubricant at specific points</li>
            <li><strong>Polishing:</strong> Sand plastic parts to further reduce noise</li>
            <li><strong>Rebuilding:</strong> Reassemble carefully</li>
            <li><strong>Testing:</strong> Verify operation before reinstalling</li>
        </ul>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/teclados-mecanicos-guia",
            title: "Choosing a Keyboard",
            description: "Form factors and mounting technologies."
        },
        {
            href: "/guides/teclado-mecanico-vs-membrana-qual-o-melhor",
            title: "Mechanical vs Membrane",
            description: "Fundamental differences between technologies."
        },
        {
            href: "/guides/perifericos-gamer-vale-a-pena-marcas",
            title: "Keyboard Brands",
            description: "Where to find the best switches."
        }
    ];

    const allContentSections = [...contentSections, ...additionalContentSections];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Beginner"
            contentSections={allContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

