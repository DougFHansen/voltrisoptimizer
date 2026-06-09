import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'hdmi-2.1-vs-displayport-1.4-diferencas',
  title: "HDMI 2.1 vs DisplayPort 2.1: Which One to Use for Your Monitor in 2026?",
  description: "Confused about which cable to use? Learn the real differences between HDMI and DisplayPort to reach 144Hz, 240Hz, or 4K on your gaming PC in 2026.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "HDMI 2.1 vs DisplayPort 2.1: Which One to Use for Your Monitor in 2026?";
const description = "Confused about which cable to use? Learn the real differences between HDMI and DisplayPort to reach 144Hz, 240Hz, or 4K on your gaming PC in 2026.";
const keywords = [
    'hdmi 2.1 vs displayport 1.4 difference 2026',
    'which cable for 144hz hdmi or displayport',
    'hdmi 2.1 4k 120hz support tutorial',
    'displayport 2.1 worth it for gamers 2026',
    'best cable for g-sync and freesync guide'
];

export const metadata: Metadata = createGuideMetadata('hdmi-2.1-vs-displayport-1.4-diferencas', title, description, keywords);

export default function CableComparisonGuide() {
    const summaryTable = [
        { label: "HDMI 2.1", value: "Best for Consoles (PS5/Xbox) and 4K TVs" },
        { label: "DisplayPort 1.4/2.1", value: "Best for PCs / Full G-Sync Support" },
        { label: "HDMI 2.1 Bandwidth", value: "48 Gbps" },
        { label: "DP 2.1 Bandwidth", value: "Up to 80 Gbps" }
    ];

    const contentSections = [
        {
            title: "The Cable: The Invisible Bottleneck",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Did you buy a 240Hz monitor, but it only shows up as 60Hz in Windows settings? The culprit is almost always the cable. In 2026, with the advancement of 4K resolutions and ultra-high refresh rates, the \"wire\" connecting your graphics card to your monitor needs enough bandwidth to carry all that data. Using an old HDMI cable on a modern monitor is like trying to fit an ocean through a straw.
        </p>
      `
        },
        {
            title: "1. HDMI 2.1: The Living Room Standard",
            content: `
        <p class="mb-4 text-gray-300">HDMI 2.1 has become the gold standard for high-resolution gaming:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Resolution:</strong> Supports up to 4K at 120Hz or 8K at 60Hz.</li>
            <li><strong>Features:</strong> Includes <strong>eARC</strong> (for high-fidelity sound) and <strong>ALLM</strong> (Auto Low Latency Mode).</li>
            <li><strong>Ideal for:</strong> Connecting your PC or Console to an OLED TV or a high-end 2026 monitor that supports version 2.1.</li>
        </ul>
      `
        },
        {
            title: "2. DisplayPort: The King of the Desktop",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Why Is It Still the Favorite?</h4>
            <p class="text-sm text-gray-300">
                DisplayPort was designed specifically for computers. In 2026, the <strong>DP 2.1</strong> version allows for running multiple high-resolution monitors in a series (Daisy Chain) using a single cable. Additionally, if you use an NVIDIA card and want to ensure <strong>G-Sync</strong> works perfectly without image tearing, DisplayPort remains the most stable connection.
            </p>
        </div>
      `
        },
        {
            title: "3. Beware of '8K Cable' Marketing",
            content: `
        <p class="mb-4 text-gray-300">
            Many companies sell cheap cables with \"8K\" labels that are actually just HDMI 2.0 cables in fancy packaging. 
            <br/>Always look for the <strong>'Ultra High Speed HDMI'</strong> certification for HDMI 2.1 or <strong>'DP80'</strong> for DisplayPort 2.1. A poor-quality cable can cause image flickering, intermittent signal loss, or prevent you from enabling HDR.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/guia-compra-monitores",
            title: "Monitor Guide",
            description: "Choose a monitor compatible with your cables."
        },
        {
            href: "/guides/calibrar-cores-monitor",
            title: "Color Calibration",
            description: "Improve the image after connecting."
        },
        {
            href: "/guides/hdr-windows-vale-a-pena-jogos",
            title: "Windows HDR",
            description: "Enable HDR via a certified cable."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

