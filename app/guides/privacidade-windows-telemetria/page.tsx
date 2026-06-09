import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'privacidade-windows-telemetria',
  title: "Privacy in Windows 11: How to Disable Telemetry (2026)",
  description: "Does Windows 11 collect too much data? Learn how to disable Microsoft telemetry, ads and tracking for more privacy and performance in 2026.",
  category: 'software',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "Privacy in Windows 11: How to Disable Telemetry (2026)";
const description = "Does Windows 11 collect too much data? Learn how to disable Microsoft telemetry, ads and tracking for more privacy and performance in 2026.";
const keywords = [
  'privacy windows 11 how to disable telemetry 2026',
  'disable microsoft windows 11 tracking tutorial',
  'improve performance by disabling telemetry guide 2026',
  'how to disable start menu ads windows 11 tutorial',
  'digital privacy windows 11 full guide 2026'
];

export const metadata: Metadata = createGuideMetadata('privacidade-windows-telemetria', title, description, keywords);

export default function PrivacyGuide() {
  const summaryTable = [
    { label: "Default Status", value: "Active Monitoring (Telemetry)" },
    { label: "Impact", value: "CPU and Network usage in background" },
    { label: "Privacy", value: "Increases by disabling Ad ID" },
    { label: "Difficulty", value: "Medium" }
  ];

  const contentSections = [
    {
      title: "What does Windows know about you?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In Windows 11, Microsoft uses **Telemetry** to collect data on how you use the system, which applications you open, and even what you type (for "dictionary improvement"). Although the company states that the data is anonymous, this process consumes your PC's resources. In 2026, with the increase of integrated AI tools, the volume of sent data has tripled, making the deactivation of these features essential for those seeking privacy.
        </p>
      `
    },
    {
      title: "1. Disabling Basic Telemetry",
      content: `
        <p class="mb-4 text-gray-300">Simple manual adjustments to start:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Go to Settings > Privacy & Security > <strong>Diagnostics & feedback</strong>.</li>
            <li>Turn off 'Send optional diagnostic data'.</li>
            <li>Turn off 'Improve inking and typing'.</li>
            <li>Turn off 'Tailored experiences'.</li>
        </ol>
      `
    },
    {
      title: "2. Removing Ad IDs and Tracking",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Ads in Start Menu:</h4>
            <p class="text-sm text-gray-300">
                Have you noticed suggestions for apps you've never installed? Windows uses your <strong>Advertising ID</strong> for this. <br/><br/>
                Go to Settings > Privacy & Security > General and <strong>disable all four switches</strong> on this screen. This will prevent Windows from trying to create a consumer profile based on your application usage.
            </p>
        </div>
      `
    },
    {
      title: "3. The \"Power\" of PowerShell",
      content: `
        <p class="mb-4 text-gray-300">
            <strong>Deep Cleaning in 2026:</strong> 
            <br/><br/>There are telemetry services that cannot be turned off through regular menus. For advanced users, we recommend using debloat scripts via PowerShell to disable services like <i>DiagTrack</i> (Connected User Experiences and Telemetry). This not only protects your data but also considerably reduces CPU usage spikes that cause "stutters" in competitive games.
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/debloating-windows-11",
      title: "Full Debloat",
      description: "Scripts to remove what Windows won't let you."
    },
    {
      href: "/guides/otimizacao-performance",
      title: "Optimize Performance",
      description: "Other adjustments for an agile system."
    },
    {
      href: "/guides/seguranca-senhas-gerenciadores",
      title: "Digital Security",
      description: "Protect your data beyond Windows."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="20 min"
      difficultyLevel="Intermediate"
      contentSections={contentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}

