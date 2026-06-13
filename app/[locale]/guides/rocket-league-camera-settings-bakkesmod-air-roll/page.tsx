import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'rocket-league-camera-settings-bakkesmod-air-roll',
    title: "Rocket League (2026): Camera Settings, BakkesMod and Air Roll",
    description: "Play like a Grand Champ. Guide for Camera Settings, BakkesMod installation, Right/Left Air Roll and Square Deadzone.",
    category: 'optimization',
    difficulty: 'Beginner',
    time: '15 min'
};

const title = "Rocket League Pro: Camera and Controls";
const description = "Rocket League with default settings is unplayable. Camera Shake makes you dizzy and the limited FOV makes you blind. Learn how to configure like an RLCS pro.";

const keywords = [
    'best camera settings rocket league 2026',
    'bakkesmod download epic games steam',
    'air roll left vs right which to use',
    'square deadzone controller settings',
    'rocket league input lag fix pc',
    'alpha console textures',
    'voltris optimizer rl'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('rocket-league-camera-settings-bakkesmod-air-roll', title, description, keywords, locale);
}

export default function RLGuide() {
    const summaryTable = [
        { label: "FOV", value: "110 (Max)" },
        { label: "Distance", value: "260 - 280" },
        { label: "Height/Angle", value: "100 / -4.00" },
        { label: "Camera Shake", value: "OFF (Must)" },
        { label: "BakkesMod", value: "Essential (Training)" },
        { label: "FPS", value: "Uncapped / 360" },
        { label: "Air Roll", value: "Directional (L/R)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Mandatory Basics",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Open the game now. Go to Settings > Camera.
          <br/>Turn off <strong>Camera Shake</strong>.
          <br/>If you play with this on, you're playing in Hard mode. The screen shakes with every touch on the ball, preventing precision.
        </p>
      `
        },
        {
            title: "Chapter 1: Camera Settings (The Pro Standard)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">RLCS Configuration</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>Field of View:</strong> 110.
                    - <strong>Distance:</strong> 270.
                    - <strong>Height:</strong> 100.
                    - <strong>Angle:</strong> -4.00 or -3.00.
                    - <strong>Stiffness:</strong> 0.40 to 0.50 (Higher = camera stays tighter to the car. Lower = lags more at supersonic).
                    - <strong>Swivel Speed:</strong> 4.00 to 6.00.
                    - <strong>Transition Speed:</strong> 1.20 to 1.50 (Car/Ball cam switch speed).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Controls and Deadzone",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Steering Sensitivity:</strong> 1.30 to 1.70. (Start with 1.40).
            - <strong>Aerial Sensitivity:</strong> 1.30 to 1.70.
            - <strong>Controller Deadzone:</strong> 0.05 to 0.10. (Use the lowest possible without stick drift). Lower = faster car response.
            - <strong>Dodge Deadzone:</strong> 0.50 to 0.80. (Prevents accidental backflips when trying to fast aerial).
        </p>
      `
        },
        {
            title: "Chapter 3: BakkesMod (Power in your hands)",
            content: `
        <p class="mb-4 text-gray-300">
            Works on Steam and Epic Games.
            <br/>1. Download at bakkesmod.com.
            <br/>2. Install. (Press F2 in-game to open).
            <br/>Features:
            <br/>- <strong>Freeplay:</strong> Press D-Pad arrows to make the ball come to you, go to the ceiling, or toward the goal.
            <br/>- <strong>Items:</strong> Use any decal (Alpha Boost, White Zombas) for free (only you see it, client-side).
            <br/>- <strong>Plugins:</strong> Displays MMR in casual/ranked matches.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Directional Air Roll",
            content: `
        <p class="mb-4 text-gray-300">
            Don't just use general "Air Roll" (the one where you hold a button and move the stick).
            <br/>Map "Air Roll Right" or "Air Roll Left" to specific buttons (Square/Circle or Bumpers L1/R1).
            <br/>This allows you to spin on the axis AND turn the car at the same time (Tornado Spin), which is impossible with normal Air Roll. Essential for advanced aerial mechanics.
        </p>
      `
        },
        {
            title: "Chapter 5: Square Deadzone (Steam Input)",
            content: `
        <p class="mb-4 text-gray-300">
            The analog stick is round. But the corners (perfect diagonals) are essential for speedflips.
            <br/>Some pros change the deadzone shape to "Square" or "Cross" via Steam Controller Settings or DS4Windows.
            <br/>This makes the car reach 100% diagonal input faster. Try it out and see if you like it.
        </p>
      `
        },
        {
            title: "Chapter 6: Video Settings for FPS",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Anti-Aliasing:</strong> OFF.
            - <strong>Render Quality:</strong> High Quality. (Don't lower this, the ball gets pixelated at a distance).
            - <strong>Render Detail:</strong> Performance or High Quality (floor textures).
            - <strong>World Detail:</strong> Performance (Removes grass and crowd, helps focus and gains FPS).
            - <strong>Transparent Goalposts:</strong> ON (Mandatory, otherwise you can't see through the posts).
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 7: Workshop Maps (Epic Games)",
            content: `
            <p class="mb-4 text-gray-300">
                It's easy on Steam. On Epic, install the BakkesMod plugin "Rocket Plugin" or "Workshop Map Loader."
                <br/>Download training maps like Rings to practice flight.
            </p>
            `
        },
        {
            title: "Chapter 8: Audio",
            content: `
            <p class="mb-4 text-gray-300">
                Gameplay Audio: High.
                <br/>Ambient/Crowd: Mute or low. Crowd noise interferes with hearing enemy boosts.
            </p>
            `
        },
        {
            title: "Chapter 9: Cross-Network Play",
            content: `
            <p class="mb-4 text-gray-300">
                Keep it ON. Console players generally have higher input lag and lower FPS (advantage for you on PC).
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does BakkesMod cause bans?",
            answer: "No. Psyonix has approved BakkesMod as long as it doesn't provide an unfair advantage (like predicting ball path in online matches)."
        },
        {
            question: "Which is the best car?",
            answer: "Octane (All-round) and Fennec (Same hitbox as Octane, but square visual helps understand touches). Dominus (Flat, great for flicks)."
        }
    ];

    const externalReferences = [
        { name: "BakkesMod", url: "https://bakkesmod.com/" },
        { name: "Liquipedia Camera Settings", url: "https://liquipedia.net/rocketleague/List_of_player_camera_settings" }
    ];

    const relatedGuides = [
        {
            href: "/guides/controle-ps4-ps5-overclock-ds4windows",
            title: "Controller Overclock",
            description: "Reducing input lag."
        },
        {
            href: "/guides/dns-mais-rapido-para-jogos-benchmark",
            title: "Ping Fix",
            description: "Fixing Packet Loss."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}

