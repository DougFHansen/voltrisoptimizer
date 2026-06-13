import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'zonas-mortas-analogico-controle-fix',
  title: "Controller Drift? How to configure Deadzones on PC",
  description: "Does your character walk on their own or the camera moves without you touching the controller? Learn how to configure deadzones in Windows and Steam to fix Drift...",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Controller Drift? How to configure Deadzones on PC";
const description = "Does your character walk on their own or the camera moves without you touching the controller? Learn how to configure deadzones in Windows and Steam to fix Drift.";
const keywords = [
    'how to fix controller analog drift on pc 2026',
    'configure controller deadzone steam tutorial 2026',
    'analog moving on its own pc how to solve fix',
    'deadzone settings valorant fortnite cod controller',
    'test controller drift online tool free'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('zonas-mortas-analogico-controle-fix', title, description, keywords, locale);
}

export default function DeadzoneFixGuide() {
    const summaryTable = [
        { label: "What is Drift", value: "Signal reading when the analog stick is resting" },
        { label: "Software Solution", value: "Increase Deadzone" },
        { label: "Test Tool", value: "Gamepad Tester (Site)" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "The Drift nightmare in 2026",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Whether on a PS5, Xbox, or Nintendo Switch controller, **Drift** is caused by the physical wear of the analog potentiometers. They start sending small electrical signals even when you're not touching them. On PC, we have the advantage of being able to "filter" these signals using deadzone software.
        </p>
      `
        },
        {
            title: "1. How to Test your Controller",
            content: `
        <p class="mb-4 text-gray-300">Before adjusting, you need to see the "dirt" in the signal:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Go to the website <strong>gamepad-tester.com</strong>.</li>
            <li>Connect your controller and move the analog sticks.</li>
            <li>Release them. Look at the values from 'Axis 0' to 'Axis 3'. If they don't return to 0.0000 and keep oscillating (e.g., 0.057), you have Drift.</li>
            <li>Note the maximum oscillation value.</li>
        </ol>
      `
        },
        {
            title: "2. Configuring in Steam (Global)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Valid for all games:</h4>
            <p class="text-sm text-gray-300">
                1. Open <strong>Steam</strong> and go to Settings > Controller. <br/>
                2. Click on 'Calibration & Advanced Settings'. <br/>
                3. Increase the 'Deadzone' value until the blue dot on the screen stops flickering when the controller is still. <br/>
                This will create a "black hole" in the center of the analog where Windows will ignore any small movement.
            </p>
        </div>
      `
        },
        {
            title: "3. Deadzones inside Games",
            content: `
        <p class="mb-4 text-gray-300">
            Competitive games like <strong>Call of Duty, Fortnite and Valorant</strong> have their own deadzone settings. 
            <br/><br/><strong>Tip:</strong> Always try to keep the deadzone as small as possible so as not to lose precision. If your drift is 0.05, set the deadzone to 0.07. Do not set it to 0.20 right away, or your character will feel "heavy" to start walking.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/mouse-clique-duplo-falhando-fix",
            title: "Fix Mouse",
            description: "Tips for other types of signal drift."
        },
        {
            href: "/guides/pos-instalacao-windows-11",
            title: "Controller Drivers",
            description: "Keep your controller firmware updated."
        },
        {
            href: "/guides/diagnostico-hardware",
            title: "Diagnostics",
            description: "Identify failures in other peripherals."
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

