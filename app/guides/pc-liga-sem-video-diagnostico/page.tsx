import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'pc-liga-sem-video-diagnostico',
  title: "PC Turns On But No Video: 2026 Diagnostic Guide",
  description: "Computer turns on, fans spin, but the screen stays black? Learn how to diagnose and solve hardware problems without spending money in 2026.",
  category: 'windows-geral',
  difficulty: 'Intermediate',
  time: '30 min'
};

const title = "PC Turns On But No Video: 2026 Diagnostic Guide";
const description = "Computer turns on, fans spin, but the screen stays black? Learn how to diagnose and solve hardware problems without spending money in 2026.";
const keywords = [
    'pc turns on but no video how to fix 2026',
    'computer black screen fans spinning tutorial',
    'how to clean ram pc wont boot guide',
    'diagnose faulty graphics card tutorial 2026',
    'reset bios motherboard pc no video guide'
];

export const metadata: Metadata = createGuideMetadata('pc-liga-sem-video-diagnostico', title, description, keywords);

export default function NoVideoDiagnosticGuide() {
    const summaryTable = [
        { label: "Common Culprit #1", value: "Dirty or Improperly Seated RAM" },
        { label: "Common Culprit #2", value: "CPU Socket / Outdated BIOS" },
        { label: "Simple Fix", value: "Reset CMOS (Motherboard Battery)" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "The Black Screen Despair",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          This is one of the most frustrating problems in the hardware world. The PC appears alive: the LEDs turn on, the fans spin, but the monitor insists on staying in standby. In 2026, with smarter motherboards, most errors can be diagnosed through small signals the board itself gives you. Let's follow a logical path to avoid wasting time.
        </p>
      `
        },
        {
            title: "1. The RAM Memory Test (90% of cases)",
            content: `
        <p class="mb-4 text-gray-300">Dust on the RAM contacts is the biggest villain:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Unplug the PC from the wall completely.</li>
            <li>Remove the RAM modules.</li>
            <li>If you have a <strong>soft white school eraser</strong>, gently rub it on the gold contacts.</li>
            <li>Use a dry brush on the motherboard slot.</li>
            <li>Try to boot with only <strong>ONE RAM module</strong> at a time in different slots. If the PC boots, you've found the faulty module or slot.</li>
        </ol>
      `
        },
        {
            title: "2. BIOS Reset (Clear CMOS)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Zeroing Settings:</h4>
            <p class="text-sm text-gray-300">
                Often, a wrong memory or processor setting in the BIOS prevents booting. <br/><br/>
                Look for the round battery (coin) on your motherboard. Carefully remove it and wait 1 minute (with the PC unplugged). Put it back. This will force the motherboard to load factory defaults. If the problem was a failed overclock, the PC will show video instantly.
            </p>
        </div>
      `
        },
        {
            title: "3. Diagnostic LEDs and Beeps",
            content: `
        <p class="mb-4 text-gray-300">
            Look closely at the upper right corner of your motherboard. 
            <br/><br/><strong>2026 Tip:</strong> Almost all modern boards have 4 small LEDs labeled: <strong>CPU, DRAM, VGA, BOOT</strong>. If the 'VGA' LED stays on (usually red or white), the problem is with your graphics card or the HDMI/DisplayPort cable. If the 'CPU' LED lights up, the processor or BIOS needs attention. Check your motherboard manual to understand the exact code.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/pc-gamer-barato-custo-beneficio-2026",
            title: "PC Build",
            description: "Tips to avoid common assembly errors."
        },
        {
            href: "/guides/testar-fonte-pc-multimetro",
            title: "Test PSU",
            description: "Find out if the PSU has enough power for video."
        },
        {
            href: "/guides/atualizar-bios-seguro",
            title: "Update BIOS",
            description: "Necessary for new CPUs on old boards."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

