import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'phasmophobia-reconhecimento-voz-vr',
    title: "Phasmophobia (2026): Voice Recognition, VR, and FPS Optimization",
    description: "Ghost not hearing you? Learn how to configure voice recognition (Vosk/Windows), reduce lag on large maps (Sunny Meadows), and optimize for VR gameplay.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '20 min'
};

const title = "Phasmophobia Tuning (2026): Voice and Fear Without the Lag";
const description = "Phasmophobia relies 100% on your microphone—if it fails, you die. Additionally, dynamic lighting is heavy in VR. Let's fix these performance and connectivity issues.";

const keywords = [
    'phasmophobia voice recognition not working fix',
    'phasmophobia vosk vs windows mode',
    'phasmophobia vr lag fix quest 3',
    'how to make the ghost hear you phasmophobia',
    'sunny meadows fps drop fix',
    'best graphics settings phasmophobia',
    'microphone input sensitivity phasmophobia',
    'voltris optimizer kinetic games',
    'spirit box not working'
];

export const metadata: Metadata = createGuideMetadata('phasmophobia-reconhecimento-voz-vr', title, description, keywords);

export default function PhasmophobiaGuide() {
    const summaryTable = [
        { label: "Voice Engine", value: "Vosk (English) / Windows (Regional)" },
        { label: "Shadows", value: "Hard (Better Performance)" },
        { label: "Lighting", value: "Low (Volumetric)" },
        { label: "Texture Quality", value: "Full" },
        { label: "VR Mode", value: "Foveated Rendering" },
        { label: "Microphone", value: "Default System Device" },
        { label: "Spirit Box", value: "Toggle Mode" }
    ];

    const contentSections = [
        {
            title: "Introduction: 'Give Us A Sign'",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The voice recognition system is the heart of Phasmophobia. There are two primary modes: Vosk (internal game processing) and Windows (Cortana/Speech API). Selecting the incorrect engine for your language setup will cause the ghost to ignore your questions.
        </p>
      `
        },
        {
            title: "Chapter 1: Configuring Voice (Vosk vs. Windows)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Which engine should you use?</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>Vosk:</strong> Faster, processes offline, and works perfectly for English speakers. It may struggle with heavy non-native accents.
                    - <strong>Windows:</strong> Utilizes your OS language pack. This is generally better for non-English languages (like Portuguese or Spanish) but requires you to have the speech pack downloaded in Windows Settings > Time & Language > Speech.
                    - <strong>Testing:</strong> Go to the Audio Settings and click \"Test.\" If the bar does not fill up when you say \"Give us a sign,\" the game is not receiving your audio.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Alt-Tab Breaking Recognition",
            content: `
        <p class="mb-4 text-gray-300">
            A persistent Unity engine bug: if you Alt-Tab out of the game, Windows speech recognition may lose focus.
            <br/>Solution: Click on the Windows taskbar and then click back into the game to \"resume\" audio focus, or switch to Vosk mode which is less prone to this issue.
        </p>
      `
        },
        {
            title: "Chapter 3: Graphics (Lighting)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Shadows:</strong> Set to Hard. Soft shadows are much more demanding on the GPU.
            - <strong>Volumetric Lighting:</strong> Set to Low or Off. Fog on campsite maps and large outdoor areas is a major performance hog.
            - <strong>Bloom:</strong> Off. This helps prevent you from being blinded by the flashlight reflection in dark corridors.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: VR Optimization (Quest/Index)",
            content: `
        <p class="mb-4 text-gray-300">
            In VR, the game must render two simultaneous viewpoints.
            <br/>- Disable \"Eye Adaptation.\" In VR, rapid lighting shifts can induce motion sickness.
            <br/>- Use the <strong>OpenXR Toolkit</strong> to apply FSR (Upscaling) if your hardware cannot maintain a native 90 FPS.
        </p>
      `
        },
        {
            title: "Chapter 5: Sunny Meadows Asylum (FPS Drops)",
            content: `
        <p class="mb-4 text-gray-300">
            The Sunny Meadows asylum contains hundreds of physical props and dynamic lights.
            <br/>If you experience frame drops here, lower your Texture Resolution to <strong>Half</strong>.
            <br/>Common mistake: avoid turning on every light in the building simultaneously. The game has a dynamic light limit; exceeding it will cause lights to flicker or fail to render.
        </p>
      `
        },
        {
            title: "Chapter 6: Microphone Input Sensitivity",
            content: `
        <p class="mb-4 text-gray-300">
            The game lacks a dedicated microphone gain (volume) slider; it only features activation sensitivity.
            <br/>Adjust the sensitivity slider until the blue bar only rises when you are specifically speaking. If it remains full, the ghost will track you into closets due to ambient noise like room fans or keyboard clicks.
            <br/>Optionally, use \"Push to Talk\" if you have a noisy environment.
        </p>
      `
        },
        {
            title: "Chapter 7: Spirit Box",
            content: `
        <p class="mb-4 text-gray-300">
            For the Spirit Box to trigger a response:
            <br/>1. The room's lights must be turned off.
            <br/>2. You must be alone (if the ghost is shy/timid).
            <br/>3. You must use specific trigger phrases (\"Where are you?\", \"Are you friendly?\"). Random talking won't trigger the script.
            <br/>Check the microphone icon on the Spirit Box—if it doesn't blink after you speak, the game didn't detect your voice.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Weather Effects (Rain and Snow)",
            content: `
            <p class="mb-4 text-gray-300">
                Rain and snow particles are quite taxing outdoors.
                <br/>If you have a low-end PC, avoid contracts with \"Heavy Rain\" when possible, or look at the ground while walking to the entrance to save FPS.
            </p>
            `
        },
        {
            title: "Chapter 9: Crossplay Support",
            content: `
            <p class="mb-4 text-gray-300">
                Crossplay works seamlessly between PC and Consoles.
                <br/>Note that loading is synchronized—if you have an SSD but your teammate is on a mechanical HDD, you will be stuck in the van until their system finishes loading.
            </p>
            `
        },
        {
            title: "Chapter 10: Brightness Policy",
            content: `
            <p class="mb-4 text-gray-300">
                Increase the in-game <strong>Brightness</strong> to 2.0 or 3.0.
                <br/>Many monitors are too dark for the game's default gamma. Higher brightness allows you to see the environment and navigation routes clearly during hunts without relying on a flashlight.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does the ghost find me in the closet even if I'm not speaking?",
            answer: "Yes, if your microphone is set to 'Open' and it picks up heavy breathing or loud mechanical keyboard clicks. Use Push-To-Talk or physically mute your mic."
        },
        {
            question: "Why does the game crash during loading?",
            answer: "Usually, this is due to a corrupted map file. Verify the integrity of game files via Steam."
        },
        {
            question: "Why do my VR hands appear crooked or misaligned?",
            answer: "Perform the initial calibration carefully in a 'T-Pose'. You can also adjust the controller angle offsets in the VR options menu."
        }
    ];

    const externalReferences = [
        { name: "Phasmophobia Voice Recognition Fix Guide", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2238908341" },
        { name: "Official Kinetic Games Discord", url: "https://discord.gg/phasmophobia" }
    ];

    const relatedGuides = [
        {
            href: "/guides/discord-otimizacao-overlay-lag",
            title: "Discord Guide",
            description: "Overlays can sometimes conflict with microphones."
        },
        {
            href: "/guides/windows-defender-otimizacao-jogos",
            title: "Security Settings",
            description: "Ensuring proper microphone permissions."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}

