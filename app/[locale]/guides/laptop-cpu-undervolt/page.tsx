import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'undervolt-cpu-notebook',
  title: "CPU Undervolting on Laptop: How to Reduce Heat (2026)",
  description: "Is your laptop overheating while you play? Learn how to undervolt your CPU to reduce temperature by up to 10°C without losing performance in 2026.",
  category: 'hardware',
  difficulty: 'Intermediate',
  time: '45 min'
};

const title = "CPU Undervolting on Laptop: How to Reduce Heat (2026)";
const description = "Is your laptop overheating while you play? Learn how to undervolt your CPU to reduce temperature by up to 10°C without losing performance in 2026.";
const keywords = [
    'cpu undervolting laptop how to 2026 tutorial',
    'reduce gaming laptop temperature tutorial guide',
    'throttlestop tutorial how to use on laptop 2026',
    'intel core ultra laptop undervolting full guide',
    'how to fix thermal throttling laptop 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('undervolt-cpu-notebook', title, description, keywords, locale);
}

export default function UndervoltGuide() {
    const summaryTable = [
        { label: "What is it", value: "Reducing voltage without reducing speed" },
        { label: "Benefit #1", value: "Temperature Reduction (up to 15°C)" },
        { label: "Benefit #2", value: "No more Thermal Throttling (FPS Drops)" },
        { label: "Difficulty", value: "High (Requires stability testing)" }
    ];

    const contentSections = [
        {
            title: "Heat: The Gaming Laptop's Enemy",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          2026 gaming laptops are powerful, but the laws of physics don't change. Having a 14 or 24-core processor in a 2cm space generates absurd heat. When the processor reaches 95°C, it enters **Thermal Throttling**, cutting its speed in half to avoid melting. **Undervolting** consists of finding the lowest stable voltage for your processor, making it consume less power and generate less heat, while maintaining the same FPS.
        </p>
      `
        },
        {
            title: "1. Unlocking Undervolting in 2026",
            content: `
        <p class="mb-4 text-gray-300">Attention: Intel and AMD have blocked undervolting on many recent models for security reasons (Plundervolt):</p>
        <p class="text-sm text-gray-300">
            Before starting, check if your processor allows voltage changes. In 2026, many manufacturers require you to enable an option like 'Overclocking Feature' in the BIOS for software like <strong>ThrottleStop</strong> to work. If the voltage sliders are grayed out (locked), you will need to research if your specific laptop model allows unlocking via BIOS.
        </p>
      `
        },
        {
            title: "2. Using ThrottleStop (Step-by-Step)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Safe Procedure:</h4>
            <p class="text-sm text-gray-300">
                1. Open ThrottleStop and click on <strong>FIVR</strong>. <br/>
                2. Check 'Unlock Adjustable Voltage'. <br/>
                3. In 'Offset Voltage', start with <strong>-50mV</strong>. <br/>
                4. Apply the same voltage in 'CPU Core' and 'CPU Cache'. <br/>
                5. Increase by 10 (e.g., -60mV, -70mV) and run a stress test. If the PC freezes or blue-screens, you've hit the limit. Go back 10mV, and that will be your ideal performance point.
            </p>
        </div>
      `
        },
        {
            title: "3. Why Isn't This Dangerous?",
            content: `
        <p class="mb-4 text-gray-300">
            Unlike Overclocking (which increases voltage and risk), Undervolting **decreases** stress on the processor. 
            <br/><br/><strong>Tip:</strong> In 2026, a processor that runs at 80°C will last many more years than one that constantly works at 100°C. The only "danger" is the PC freezing and restarting, but this doesn't cause hardware damage and serves only as a warning that you reduced the voltage too much.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacoes-para-notebook-gamer",
            title: "Optimize Laptop",
            description: "MUX Switch and RAM tips."
        },
        {
            href: "/guides/monitorar-temperatura-pc",
            title: "Monitor Heat",
            description: "Track temps while you test."
        },
        {
            href: "/guides/pasta-windows-winsxs-gigante-como-limpar",
            title: "System Cleanup",
            description: "Keep the system light for the processor."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="45 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

