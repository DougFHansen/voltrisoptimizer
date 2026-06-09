import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'segundo-monitor-vertical-configurar',
  title: "How to Set Up a Second Monitor Vertically (2026)",
  description: "Want more productivity or to make reading stream chat easier? Learn how to set up your second monitor vertically in Windows 11 in 2026.",
  category: 'peripherals',
  difficulty: 'Beginner',
  time: '5 min'
};

const title = "How to Set Up a Second Monitor Vertically (2026)";
const description = "Want more productivity or to make reading stream chat easier? Learn how to set up your second monitor vertically in Windows 11 in 2026.";
const keywords = [
    'how to set up second monitor vertically 2026',
    'vertical monitor productivity guide 2026',
    'how to rotate windows 11 screen quick tutorial',
    'vertical second monitor setup for developers and streamers',
    'windows 11 vertical second monitor positioning'
];

export const metadata: Metadata = createGuideMetadata('segundo-monitor-vertical-configurar', title, description, keywords);

export default function VerticalMonitorGuide() {
    const summaryTable = [
        { label: "Ideal Use", value: "Stream Chat, Code, Discord, News" },
        { label: "Advantage", value: "Less scrolling / Desk space optimization" },
        { label: "Software", value: "Windows Display Settings" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Why Use a Vertical Monitor?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, with screens getting wider (Ultrawide), having a secondary monitor horizontally can take up too much desk space and cause neck strain. Using a second monitor in **vertical (portrait) mode** is the secret of developers, streamers, and professionals who need to read long streams of text without constantly using the mouse scroll wheel.
        </p>
      `
        },
        {
            title: "1. Step-by-Step: Rotating the Screen",
            content: `
        <p class="mb-4 text-gray-300">After physically rotating the monitor on its stand, follow these software steps:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Right-click on the desktop and go to <strong>Display Settings</strong>.</li>
            <li>Identify your secondary monitor (usually number 2).</li>
            <li>Scroll down to the 'Scale and layout' section.</li>
            <li>Under <strong>Display orientation</strong>, change from 'Landscape' to <strong>'Portrait'</strong>.</li>
            <li>Confirm the change. Windows will flip the image to match the physical position.</li>
        </ol>
      `
        },
        {
            title: "2. Perfect Mouse Alignment",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Avoid the "Step":</h4>
            <p class="text-sm text-gray-300">
                If your vertical monitor is smaller or positioned higher than the main one, the mouse might "get stuck" when trying to move from one screen to another. <br/><br/>
                On the Display Settings screen, you can **click and drag** the numbered boxes up or down. Align them so that the mouse passes smoothly through the center or top of both screens.
            </p>
        </div>
      `
        },
        {
            title: "3. Ergonomics Tips in 2026",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Angle Matters:</strong> 
            <br/><br/>When using a vertical monitor, avoid leaving it fully to the side. Tilt it slightly toward your eyes (at about a 30-degree angle). This reduces color distortion (especially on monitors with TN or VA panels) and prevents you from having to turn your entire torso to read what's in the chat or code.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/guia-compra-monitores",
            title: "Buying Monitors",
            description: "Learn how to choose monitors with good stands."
        },
        {
            href: "/guides/monitor-ips-vs-va-vs-tn-jogos",
            title: "IPS vs VA Panels",
            description: "Why IPS is better for vertical monitors."
        },
        {
            href: "/guides/atalhos-produtividade-windows",
            title: "Windows Productivity",
            description: "Shortcuts for moving windows between monitors."
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
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}


