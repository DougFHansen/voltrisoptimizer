import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'saude-bateria-notebook',
  title: "How to Check and Improve Laptop Battery Health (2026)",
  description: "Does your battery not last long? Learn how to generate the official Windows 11 battery report and tips to make it last much longer in 2026.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "How to Check and Improve Laptop Battery Health (2026)";
const description = "Does your battery not last long? Learn how to generate the official Windows 11 battery report and tips to make it last much longer in 2026.";
const keywords = [
  'check laptop battery health windows 11 2026',
  'how to generate battery report windows 11 tutorial',
  'wern out laptop battery fix guide 2026',
  'increase gaming laptop battery lifespan tutorial',
  'limit laptop battery charge to 80 percent'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('saude-bateria-notebook', title, description, keywords, locale);
}

export default function BatteryHealthGuide() {
  const summaryTable = [
    { label: "Key Command", value: "powercfg /batteryreport" },
    { label: "Ideal Charge", value: "Between 20% and 80%" },
    { label: "Villian", value: "Excessive Heat" },
    { label: "Difficulty", value: "Easy" }
  ];

  const contentSections = [
    {
      title: "The Natural Wear of Batteries",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, lithium-ion batteries are still the standard technology, and unfortunately, they have a lifespan limited by charge cycles. Every time you charge from 0 to 100%, you "use up" a cycle. If your laptop drains too quickly, it might be that your battery has already lost its original capacity (Design Capacity). The first step is to discover its real state.
        </p>
      `
    },
    {
      title: "1. Generating the Official Battery Report",
      content: `
        <p class="mb-4 text-gray-300">Windows has a hidden, very accurate diagnostic tool:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Search for <strong>CMD</strong> in the Start Menu and run it as administrator.</li>
            <li>Type the command: <code>powercfg /batteryreport</code> and press Enter.</li>
            <li>Windows will save an HTML file in a system folder. Go to the indicated location and open the file in your browser.</li>
            <li>Compare the values: **Design Capacity** (Factory capacity) vs **Full Charge Capacity** (Current capacity). If the current capacity is less than 70% of the original, the battery is degraded.</li>
        </ol>
      `
    },
    {
      title: "2. The 80% Secret (Battery Limiter)",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Preserving Lifespan:</h4>
            <p class="text-sm text-gray-300">
                The state that stresses battery cells the most is being at 100% or 0%. In 2026, almost all manufacturers (Asus, Dell, Acer, Lenovo) offer software that allows you to **limit charging to 80%**. <br/><br/>
                If you use your laptop plugged in for long periods, enable this option! It prevents the battery from "frying" at maximum voltage constantly, effectively doubling its lifespan over the years.
            </p>
        </div>
      `
    },
    {
      title: "3. Quick Daily Tips",
      content: `
        <p class="mb-4 text-gray-300">
            <strong>Avoid Heat:</strong> 
            <br/><br/>Heat is the biggest enemy of battery chemistry. If you play games and feel the laptop boiling, the internal heat is degrading the cells. Use a cooler stand. <br/><br/>
            <strong>Screen Brightness:</strong> Reducing brightness from 100% to 70% can give you up to 40 extra minutes of battery life. Also, set 'Battery Saver' to turn on automatically when it reaches 30%.
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/calibrar-bateria-notebook",
      title: "Calibrate Battery",
      description: "Learn how to recalibrate if the percentage is wrong."
    },
    {
      href: "/guides/otimizacoes-para-notebook-gamer",
      title: "Optimize Laptop",
      description: "Improve performance while saving power."
    },
    {
      href: "/guides/monitorar-temperatura-pc",
      title: "Monitor Heat",
      description: "Keep the system cool to preserve parts."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="15 min"
      difficultyLevel="Beginner"
      contentSections={contentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}


