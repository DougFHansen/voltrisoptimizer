import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'testar-fonte-pc-multimetro',
  title: "How to Test a PC Power Supply with a Multimeter (2026 Guide)",
  description: "Does your PC not turn on or shut down randomly? Learn how to safely test your power supply voltages using a multimeter in 2026.",
  category: 'hardware',
  difficulty: 'Intermediate',
  time: '30 min'
};

const title = "How to Test a PC Power Supply with a Multimeter (2026 Guide)";
const description = "Does your PC not turn on or shut down randomly? Learn how to safely test your power supply voltages using a multimeter in 2026.";
const keywords = [
    'how to test a pc power supply with a multimeter 2026 tutorial',
    'pc psu paperclip test step by step',
    'ideal pc power supply voltages 2026 guide',
    'how to tell if pc psu is dead tutorial',
    'test 12v rail pc power supply 2026 guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('testar-fonte-pc-multimetro', title, description, keywords, locale);
}

export default function PowerSupplyTestGuide() {
    const summaryTable = [
        { label: "Critical Rail", value: "12V (Yellow) - Powers GPU/CPU" },
        { label: "Data Rail", value: "5V (Red) - Peripherals/SSD" },
        { label: "Start Test", value: "Green Wire + Black Wire (Pin 16 + 17)" },
        { label: "Difficulty", value: "High (Requires electrical care)" }
    ];

    const contentSections = [
        {
            title: "Electrical Diagnosis: Is the PC Still 'Alive'?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, with graphics cards demanding more and more power, the power supply unit (PSU) has become the component that most often fails silently. The PC might turn on the LEDs but fail to display video due to a lack of stable voltage on the 12V rail. Using a multimeter is the only way to ensure your PSU is not "dying" and putting your other expensive components at risk.
        </p>
      `
        },
        {
            title: "1. The Paperclip Test (Power On)",
            content: `
        <p class="mb-4 text-gray-300">First, we need to make the PSU turn on without being connected to the motherboard:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Unplug the power supply from the wall and remove all cables from the PC.</li>
            <li>On the large 24-pin connector, locate the single <strong>Green Wire</strong> (PS_ON).</li>
            <li>Use a paperclip to connect the green wire pin to any adjacent <strong>Black Wire</strong> (GND).</li>
            <li>Plug the PSU into the outlet. If the PSU fan spins, it's receiving power.</li>
        </ol>
      `
        },
        {
            title: "2. Measuring Voltages with the Multimeter",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Reference Values in 2026:</h4>
            <p class="text-sm text-gray-300">
                Set the multimeter to the <strong>20V DC</strong> scale. With the PSU turned on (using the paperclip test): <br/><br/>
                - <strong>Yellow Wire:</strong> Should read between 11.4V and 12.6V. If it's below 11.4V, your PSU won't handle a heavy graphics card. <br/>
                - <strong>Red Wire:</strong> Should read close to 5.0V. <br/>
                - <strong>Orange Wire:</strong> Should read close to 3.3V. <br/>
                - <strong>Purple Wire:</strong> (5V Standby) Should have 5V even when the PSU is in standby.
            </p>
        </div>
      `
        },
        {
            title: "3. Symptoms of a Faulty Power Supply",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>When to replace the PSU?</strong> 
            <br/><br/>If the voltages fluctuate significantly (e.g., the 12V rail dips to 11V and back), your PSU's capacitors are worn out. In 2026, an unstable PSU causes the infamous <strong>spontaneous reboot</strong>: your PC shuts down suddenly while playing a demanding game because the voltage drops below the safety threshold, and the motherboard cuts power to protect itself.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/pc-liga-sem-video-diagnostico",
            title: "PC No Video",
            description: "The power supply could be the culprit."
        },
        {
            href: "/guides/como-escolher-placa-de-video",
            title: "Choosing a GPU",
            description: "Calculate the required PSU wattage."
        },
        {
            href: "/guides/manutencao-preventiva-computador",
            title: "PC Maintenance",
            description: "Prevent dust from burning out your PSU."
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
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}


