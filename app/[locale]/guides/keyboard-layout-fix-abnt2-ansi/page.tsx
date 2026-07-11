import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'teclado-desconfigurado-abnt2-ansi',
    title: "Keyboard Layout Messed Up: How to Change to ABNT2 or ANSI (2026)",
    description: "Is your keyboard swapping @ for \" or missing the Ç? Learn how to configure keyboard language and layout in Windows 11 in 2026.",
    category: 'perifericos',
    difficulty: 'Beginner',
    time: '5 min'
};

const title = "Keyboard Layout Messed Up: How to Change to ABNT2 or ANSI (2026)";
const description = "Is your keyboard swapping @ for \" or missing the Ç? Learn how to configure keyboard language and layout in Windows 11 in 2026.";
const keywords = [
    'keyboard layout messed up abnt2 how to fix 2026',
    'change keyboard to us international tutorial',
    'windows 11 keyboard layout tutorial step by step',
    'keyboard without ç how to configure windows 11 2026',
    'shortcut to change keyboard language windows 11 guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('teclado-desconfigurado-abnt2-ansi', title, description, keywords, locale);
}

export default function KeyboardConfigGuide() {
    const summaryTable = [
        { label: "ABNT2 Layout", value: "Features Ç key and AltGr" },
        { label: "ANSI Layout (US)", value: "No Ç / @ is on '2' key" },
        { label: "Switch Shortcut", value: "Win + Space" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "The Mystery of Swapped Keys",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, with the popularity of imported mechanical keyboards, it's very common to buy a keyboard with the American layout (ANSI) and try to use it with Brazilian settings (ABNT2). This causes symbols to not match what is printed on the key. Solving this in Windows 11 takes less than a minute, provided you know exactly which layout your hardware has.
        </p>
      `
        },
        {
            title: "1. Identifying Your Layout",
            content: `
        <p class="mb-4 text-gray-300">Before configuring, look at your keyboard:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>ABNT2:</strong> Has the 'Ç' key and the 'Enter' key is L-shaped (large). The '@' symbol is usually on the '2' key.</li>
            <li><strong>US (International):</strong> Does not have the 'Ç' key. The 'Enter' key is a small horizontal bar. The '@' is on the '2' key, but accents work differently (e.g., press ' and then 'c' to create 'ç').</li>
        </ul >
      `
        },
        {
            title: "2. How to Configure in Windows 11",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Step-by-Step:</h4>
            <p class="text-sm text-gray-300">
                1. Go to Settings > Time & Language > <strong>Language & Region</strong>. <br/>
                2. Under 'Portuguese (Brazil)', click the three dots (...) and select <strong>Language options</strong>. <br/>
                3. Scroll to 'Keyboards' and click 'Add a keyboard'. <br/>
                4. Choose 'Portuguese (Brazil ABNT2)' or 'United States (International)'. <br/>
                5. <strong>Tip:</strong> Remove keyboards you don't use to prevent Windows from switching automatically during use.
            </p>
        </div>
      `
        },
        {
            title: "3. The Magic Shortcut",
            content: `
        <p class="mb-4 text-gray-300">
            If your keyboard layout changes \"out of nowhere\" while gaming or typing:
            <br/><br/><strong>Attention:</strong> The shortcut <strong>Windows + Space</strong> toggles between installed layouts. In 2026, many users press this accidentally. If your keyboard acts up, try this shortcut to return to the correct layout immediately.
        </p>
      `
        },
        {
            title: "4. Special Character Mapping",
            content: `
        <h4 class="text-white font-bold mb-3">🔤 Character Combination Sequences</h4>
        <p class="mb-4 text-gray-300">
            On US International layouts, creating accented characters follows specific rules:
        </p>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Character</th>
                        <th class="p-3 text-left">ANSI (US) Combo</th>
                        <th class="p-3 text-left">ABNT2 (BR) Combo</th>
                        <th class="p-3 text-left">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">ç</td>
                        <td class="p-2">' + c</td>
                        <td class="p-2">Single key (Ç)</td>
                        <td class="p-3">Cedilla directly</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">á</td>
                        <td class="p-2">' + a</td>
                        <td class="p-2">' + a</td>
                        <td class="p-3">Acute accent</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">ã</td>
                        <td class="p-2">~ + a</td>
                        <td class="p-2">~ + a</td>
                        <td class="p-3">Tilde</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "12. Technical Architecture & Troubleshooting",
            content: `
        <h4 class="text-white font-bold mb-3">🔧 Scancode Mapping Breakdown</h4>
        <p class="mb-4 text-gray-300">
            Every keypress travels through multiple stages before appearing on screen:
        </p>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Stage</th>
                        <th class="p-3 text-left">Component</th>
                        <th class="p-3 text-left">Output</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">1. Hardware</td>
                        <td class="p-3">Keyboard Matrix</td>
                        <td class="p-3">Physical Scancode</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">2. System</td>
                        <td class="p-3">Input Method Manager</td>
                        <td class="p-3">Virtual Key Code</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">3. Application</td>
                        <td class="p-3">User Interface</td>
                        <td class="p-3">Glyph Rendering</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 mt-6">
            <h4 class="text-amber-400 font-bold mb-2">💡 Pro Troubleshooting: Input Reset</h4>
            <p class="text-sm text-gray-300">
                If settings are correct but input is still wrong, restart the service with PowerShell: <br/>
                <code>powershell.exe -Command \"Restart-Service -Name 'TabletInputService'\"</code> (This also handles modern touch/keyboard inputs).
            </p>
        </div>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/teclado-mecanico-vs-membrana-qual-o-melhor",
            title: "Keyboard Types",
            description: "Learn about switch technologies."
        },
        {
            href: "/guides/teclado-notebook-parou-fix",
            title: "Keyboard Failing",
            description: "Tips if the keyboard has stopped completely."
        },
        {
            href: "/guides/atalhos-produtividade-windows",
            title: "Windows Shortcuts",
            description: "More key combos for daily productivity."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="5 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            advancedContentSections={advancedContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

