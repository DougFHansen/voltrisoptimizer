import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'rocket-league-melhores-configuracoes-camera',
    title: "Rocket League (2026): Pro Camera, FPS Unlock, and Controller Settings",
    description: "Stop using Camera Shake. Discover camera settings used by pros (Zen, Vatira), learn how to unlock FPS above 240, and optimize Input Lag.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '30 min'
};

const title = "Rocket League Pro Config (2026): Physics, Camera, and FPS";
const description = "Rocket League is 100% physics and input. Any millisecond delay can cause you to miss an aerial. Learn how to configure the game for instant response.";

const keywords = [
    'rocket league camera settings pro 2026',
    'how to increase fps rocket league low end pc',
    'unlock fps rocket league tasystemsettings',
    'input lag rocket league controller',
    'disable camera shake rocket league',
    'best deadzone rocket league',
    'steam controller configuration rocket league square deadzone',
    'bakkesmod performance plugins',
    'render quality high quality vs high performance',
    'voltris optimizer rocket league'
];

export const metadata: Metadata = createGuideMetadata('rocket-league-melhores-configuracoes-camera', title, description, keywords);

export default function RocketLeagueGuide() {
    const summaryTable = [
        { label: "Camera Shake", value: "OFF (A Must)" },
        { label: "FOV", value: "110 (Max)" },
        { label: "FPS", value: "Uncapped (Config)" },
        { label: "Anti-Aliasing", value: "Off" },
        { label: "Render Detail", value: "Performance" },
        { label: "Transparent Goal", value: "On" },
        { label: "Controller", value: "Square Deadzone" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Camera Shake Crime",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          If you play with \"Camera Shake\" enabled, you are at a disadvantage. It is the first thing any serious player should turn off. The game becomes much cleaner, and your aerial precision improves instantly.
        </p>
      `
        },
        {
            title: "Chapter 1: Camera Settings (The Gold Standard)",
            content: `
        <p class="mb-4 text-gray-300">
            Copy these settings. This is the base used by 99% of Pros (RLCS):
        </p>
        <div class="bg-[#0A0A0F] p-5 rounded-xl border border-white/5 space-y-2">
            <p class="text-white text-sm"><strong class="text-[#31A8FF]">Camera Shake:</strong> <span class="text-red-400">Uncheck (OFF)</span></p>
            <p class="text-white text-sm"><strong class="text-[#31A8FF]">Field of View (FOV):</strong> 110 (Maximum. Visibility is everything).</p>
            <p class="text-white text-sm"><strong class="text-[#31A8FF]">Distance:</strong> 260.00 to 280.00</p>
            <p class="text-white text-sm"><strong class="text-[#31A8FF]">Height:</strong> 90.00 to 110.00</p>
            <p class="text-white text-sm"><strong class="text-[#31A8FF]">Angle:</strong> -3.00 to -5.00</p>
            <p class="text-white text-sm"><strong class="text-[#31A8FF]">Stiffness:</strong> 0.40 to 0.50 (Higher values keep the camera locked closer to the car).</p>
            <p class="text-white text-sm"><strong class="text-[#31A8FF]">Swivel Speed:</strong> 4.00 to 6.00</p>
             <p class="text-white text-sm"><strong class="text-[#31A8FF]">Transition Speed:</strong> 1.00 to 1.20</p>
        </div>
      `
        },
        {
            title: "Chapter 2: Video Settings (Performance)",
            content: `
        <table class="w-full text-sm text-left text-gray-400">
            <tbody>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Anti-Alias</td>
                    <td class="py-2 text-red-400">Off</td>
                    <td class="py-2">Rocket League's AA (MLAA/FXAA) blurs the ball at a distance. Turn it off.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Render Quality</td>
                    <td class="py-2 text-emerald-400">High Quality</td>
                    <td class="py-2">Keep this at maximum. Lowering it makes the game pixelated and harder to judge depth.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Render Detail</td>
                    <td class="py-2 text-yellow-400">Performance</td>
                    <td class="py-2">Removes 3D grass and useless arena details for better clarity.</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Transparent Goalposts</td>
                    <td class="py-2 text-emerald-400">On</td>
                    <td class="py-2">Mandatory. Allows you to see through the posts when defending from inside the goal.</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">World Detail / Particles</td>
                    <td class="py-2 text-yellow-400">Performance</td>
                    <td class="py-2">Reduces boost glare and increases FPS.</td>
                </tr>
            </tbody>
        </table>
      `
        },
        {
            title: "Chapter 3: TASystemSettings.ini (FPS Unlock)",
            content: `
        <p class="mb-4 text-gray-300">
            The in-game menu limits FPS to 240 (or 360 in recent updates). To go beyond this (useful for reducing input lag):
            <br/>Navigate to <code>Documents\\My Games\\Rocket League\\TAGame\\Config\\TASystemSettings.ini</code>.
            <br/>Set: <code>AllowPerFrameSleep=False</code>.
            <br/>This allows the engine to run as fast as possible (Uncapped). Monitor your temperatures.
            <br/>Also change <code>OneFrameThreadLag=False</code> to further reduce input latency.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: BakkesMod (Essential)",
            content: `
        <p class="mb-4 text-gray-300">
            On PC, using <strong>BakkesMod</strong> is permitted and highly encouraged.
            <br/>It provides no unfair advantage but offers:
            <br/>- Anonymizer Mode (removes complex car skins from opponents).
            <br/>- Advanced Training (custom passes and rebounds).
            <br/>- Exact MMR display.
            <br/>Only download it/plugins from the official site (bakkesplugins.com).
        </p>
      `
        },
        {
            title: "Chapter 5: Deadzone and Sensitivity",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Steering Sensitivity:</strong> 1.00 to 1.40 (Higher values may cause a loss of precision).
            <br/><strong>Aerial Sensitivity:</strong> 1.00 to 1.40.
            <br/><strong>Controller Deadzone:</strong> 0.05 to 0.10. The lowest value possible before your car starts drifting on its own (stick drift). Stick drift ruins your flips.
            <br/><strong>Dodge Deadzone:</strong> 0.50 to 0.80. Controls how far you must push the stick for a jump to turn into a flip. If you find yourself backflipping unintentionally, increase this value.
        </p>
      `
        },
        {
            title: "Chapter 6: Square Deadzone (Steam Config)",
            content: `
        <p class="mb-4 text-gray-300">
            Standard joysticks are circular. The game expects square inputs (where the corners reach 100% input).
            <br/>In Steam Controller Settings, you can force \"Square\" input. This allows your car to rotate slightly faster during diagonal aerials (Air Roll). This is an advanced technique used by many freestylers.
        </p>
      `
        },
        {
            title: "Chapter 7: Voice Chat (Turn Off)",
            content: `
        <p class="mb-4 text-gray-300">
            Rocket League's in-game Voice Chat is rarely used for tactics and is mostly a distraction.
            <br/>Recommendation: Disable Voice Chat in the Gameplay options and use only Quick Chat (\"Defending!\", \"I got it!\") for rapid communication.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Input Buffer (Gameplay Options)",
            content: `
            <p class="mb-4 text-gray-300">
                Found at the bottom of the Gameplay tab:
                <br/><strong>Input Buffer:</strong>
                <br/>- <strong>Default (Legacy):</strong> Good for low ping.
                <br/>- <strong>STS (Sim Time Scaling):</strong> Attempts to correct packet loss by slightly speeding up or slowing down the game.
                <br/>- <strong>CSTS (Continuous):</strong> A more aggressive version of STS.
                <br/>Try STS if you experience \"ghost lag\" (Heavy Car Bug).
            </p>
            `
        },
        {
            title: "Chapter 9: Cross-Platform Play",
            content: `
            <p class="mb-4 text-gray-300">
                Should you disable Cross-Platform play on PC to rank up?
                <br/><strong>No.</strong> Console players (PsyNet) generally have higher input lag due to TVs. They are often easier to beat. Keep it enabled for faster matchmaking and hardware-limited opponents.
            </p>
            `
        },
        {
            title: "Chapter 10: Nameplates",
            content: `
            <p class="mb-4 text-gray-300">
                Increase your <strong>Nameplate Scale</strong> to 130% or 140%.
                <br/>This allows you to see exactly where an opponent is positioned behind the ball from a distance, helping you predict 50/50s more accurately.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does the Heavy Car Bug exist?",
            answer: "It is largely a placebo effect caused by varying input lag or mental fatigue. The car always turns at the same speed. Restarting your PC or switching the Input Buffer to STS usually \"resolves\" the feeling."
        },
        {
            question: "Is Mouse and Keyboard viable?",
            answer: "Yes. Players like 'Drufinho' have proven that KBM can reach the Top 1. However, a controller provides analog control over speed and direction (360 degrees), which is mechanically superior on paper. 95% of pros use a controller."
        },
        {
            question: "Which controller should I use? PS4, PS5, or Xbox?",
            answer: "DualShock 4 (PS4) is the pro favorite for its lower native input lag and ease of use with the 'Claw Grip'. The Xbox Series controller is also excellent for PC play."
        }
    ];

    const externalReferences = [
        { name: "Liquipedia Rocket League (Pro Settings)", url: "https://liquipedia.net/rocketleague/List_of_player_camera_settings" },
        { name: "BakkesMod Download", url: "https://bakkesmod.com/" },
        { name: "Rocket Science (Physics Channel)", url: "https://www.youtube.com/channel/UCfK7hOirILjhNkQhFn2in4Q" }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "144Hz Monitor",
            description: "Essential for tracking the ball."
        },
        {
            href: "/guides/como-escolher-controle-pc",
            title: "Controller",
            description: "Avoid USB input lag."
        },
        {
            href: "/guides/reduzir-ping-regedit-cmd-jogos",
            title: "Lag",
            description: "Fix packet loss issues."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}

