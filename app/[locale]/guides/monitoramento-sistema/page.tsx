import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'monitoramento-sistema',
  title: "System Monitoring: Best Tools for 2026",
  description: "Find out exactly what's happening with your PC! Check out the best tools to monitor FPS, CPU, GPU usage, and temperature in real-time.",
  category: 'peripherals',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "System Monitoring: Best Tools for 2026";
const description = "Find out exactly what's happening with your PC! Check out the best tools to monitor FPS, CPU, GPU usage, and temperature in real-time.";
const keywords = [
  'best gaming pc monitoring tools 2026',
  'how to monitor cpu and gpu temperature windows 11',
  'hwinfo64 vs msi afterburner which is better tutorial',
  'view ram and processor usage in games 2026 guide',
  'comprehensive pc performance monitoring free software'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('monitoramento-sistema', title, description, keywords, locale);
}

export default function SystemMonitoringGuide() {
  const summaryTable = [
    { label: "MSI Afterburner", value: "Best for FPS and GPU usage in games" },
    { label: "HWiNFO64", value: "Best for detailed sensors (Voltage, Hotspot)" },
    { label: "FPS Monitor", value: "Beautiful visual interface (Paid)" },
    { label: "Difficulty", value: "Beginner" }
  ];

  const contentSections = [
    {
      title: "Why Monitor Your PC?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, with processors using automatic boosts based on temperature, not knowing how your hardware is performing is a mistake. Monitoring allows you to identify bottlenecks (CPU at 100% and GPU at 40%), overheating before the PC shuts down, and even voltage issues in the PSU that could fry your components. Knowledge is power for any PC enthusiast.
        </p>
      `
    },
    {
      title: "1. MSI Afterburner: The King of Frames",
      content: `
        <p class="mb-4 text-gray-300">Indispensable for any gamer who wants to see data while playing:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>On-Screen Display (OSD):</strong> Places an FPS and frametime graph in the corner of your screen without needing to exit the game.</li>
            <li><strong>Versatility:</strong> Works with graphics cards of all brands (NVIDIA, AMD, Intel).</li>
            <li><strong>Thermal Throttling Check:</strong> Lets you see if the GPU clock drops when it hits 83ºC.</li>
        </ul >
      `
    },
    {
      title: "2. HWiNFO64: The Sensor Bible",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Professional Information:</h4>
            <p class="text-sm text-gray-300">
                If Afterburner shows you the basics, <strong>HWiNFO64</strong> shows you everything. <br/><br/>
                It reads sensors that other programs ignore, such as memory module (VRAM) temperatures, exact fan rotation speeds, and even if your motherboard is delivering the correct power. In 2026, it is the #1 tool for diagnosing blue screens and unstable hardware issues.
            </p>
        </div>
      `
    },
    {
      title: "3. Tip: Xbox Game Bar (Win + G)",
      content: `
        <p class="mb-4 text-gray-300">
            Don't want to install anything? 
            <br/><br/>Windows 11 has a lightweight native monitor. Just press <strong>Win + G</strong> and open the 'Performance' widget. It shows CPU, GPU, VRAM, RAM, and FPS usage in a simple and discrete way. It's ideal for those who don't want screens full of numbers and graphs but want to have an idea of what's straining the PC.
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/monitorar-temperatura-pc",
      title: "Monitor Temperature",
      description: "Dive deeper into thermal control."
    },
    {
      href: "/guides/overclock-gpu-msi-afterburner",
      title: "Use Afterburner",
      description: "Step-by-step setup tutorial."
    },
    {
      href: "/guides/diagnostico-hardware",
      title: "Diagnostics",
      description: "What to do with the collected data."
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
