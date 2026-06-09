import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'monitor-ips-vs-va-vs-tn-jogos',
  title: "Monitor Panels: IPS vs VA vs TN (Which is Best in 2026?)",
  description: "Understand once and for all the differences between IPS, VA, and TN monitors. Learn which panel to choose for gaming, work, or watching movies in 2026.",
  category: 'optimization',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Monitor Panels: IPS vs VA vs TN (Which is Best in 2026?)";
const description = "Understand once and for all the differences between IPS, VA, and TN monitors. Learn which panel to choose for gaming, work, or watching movies in 2026.";
const keywords = [
    'monitor ips vs va vs tn difference 2026',
    'best monitor panel for competitive gaming',
    'monitor ips or va for design work',
    'advantages and disadvantages of tn panel in 2026',
    'which monitor has better color accuracy guide'
];

export const metadata: Metadata = createGuideMetadata('monitor-ips-vs-va-vs-tn-jogos', title, description, keywords);

export default function MonitorPanelGuide() {
    const summaryTable = [
        { label: "TN Panel", value: "Maximum speed / Poor colors" },
        { label: "VA Panel", value: "Excellent contrast / Black smearing (Ghosting)" },
        { label: "IPS Panel", value: "Color accuracy / Universal use" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "The Heart of Your Monitor",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          When buying a monitor in 2026, you'll see these three acronyms everywhere. They refer to the physical technology of how liquid crystals are organized inside the screen. There is no "absolute best," but rather the best for your type of use. With technological advancements, the flaws of each type have been minimized, but the basic characteristics still define your visual experience.
        </p>
      `
        },
        {
            title: "1. IPS: The Perfect Balance",
            content: `
        <p class="mb-4 text-gray-300">IPS (In-Plane Switching) is the standard choice for 2026:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Pros:</strong> More vibrant and accurate colors. If you look at the monitor from the side or above, the color doesn't shift (178º viewing angle).</li>
            <li><strong>Cons:</strong> Suffers from <i>IPS Glow</i> (whitish glow in very dark scenes).</li>
            <li><strong>Ideal for:</strong> Adventure games, graphic design, and general use.</li>
        </ul >
      `
        },
        {
            title: "2. VA: Deep Blacks and Immersion",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">For Cinema and Night Use:</h4>
            <p class="text-sm text-gray-300">
                A <strong>VA (Vertical Alignment)</strong> monitor has the best contrast. While an IPS makes blacks look dark gray, VA can keep the screen truly black. <br/><br/>
                - <strong>Downside:</strong> In ultra-fast movements (like flicking your camera in Valorant), it can leave a dark trail behind objects, known as <strong>Ghosting</strong> or <i>Black Smearing</i>.
            </p>
        </div>
      `
        },
        {
            title: "3. TN: The King of the Competitive World (but not for long)",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>TN (Twisted Nematic)</strong> was, for a long time, the only one to reach real 1ms response times. 
            <br/><br/>In 2026, it is still found in ultra-fast 360Hz or 540Hz monitors used by CS2 pro players. The colors are "washed out" and the viewing angle is poor (if you lower your head, the image inverts), but if your only goal is competitive victory in milliseconds, TN still has its place.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/guia-compra-monitores",
            title: "Buying Guide",
            description: "Tips on brands and models for 2026."
        },
        {
            href: "/guides/calibrar-cores-monitor",
            title: "Calibrate Monitor",
            description: "Adjust the colors of your new panel."
        },
        {
            href: "/guides/hdmi-2.1-vs-displayport-1.4-diferencas",
            title: "Video Cables",
            description: "Ensure your cable supports your panel's Hertz."
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

