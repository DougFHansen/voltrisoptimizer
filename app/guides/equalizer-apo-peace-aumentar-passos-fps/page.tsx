import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'equalizer-apo-peace-aumentar-passos-fps',
    title: "Equalizer APO + Peace (2026): Boost Footstep Volume (FPS)",
    description: "Don't waste money on Dolby Atmos. Use Equalizer APO (Free) to equalize your headset and hear distant footsteps in Valorant, CS2, and Warzone.",
    category: 'audio',
    difficulty: 'Advanced',
    time: '30 min'
};

const title = "Audio Wallhack (2026): Equalizer APO + Peace";
const description = "A $50 headset can sound like a $500 one if equalized correctly. Learn how to cut bass (explosions) and boost treble (footsteps) for a competitive edge.";

const keywords = [
    'equalizer apo peace download config fps',
    'best equalization for hearing footsteps warzone 3',
    'how to install equalizer apo windows 11',
    'configure audio compressor for gaming',
    'heesuvi free virtual 7.1 surround',
    'boost low microphone volume apo',
    'autoeq headphones preset',
    'voltris optimizer audio',
    'muffled gamer headset fix'
];

export const metadata: Metadata = createGuideMetadata('equalizer-apo-peace-aumentar-passos-fps', title, description, keywords);

export default function AudioGuide() {
    const summaryTable = [
        { label: "Software", value: "Equalizer APO (Driver)" },
        { label: "Interface", value: "Peace GUI (Skin)" },
        { label: "Footstep Freq", value: "2kHz - 4kHz (Boost)" },
        { label: "Explosion Freq", value: "100Hz - 200Hz (Cut)" },
        { label: "Compressor", value: "ON (Levels volume)" },
        { label: "Pre-Amp", value: "-5 dB (Prevents Clipping)" },
        { label: "Surround", value: "Stereo (Always)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Pro Player Secret",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Games like CS and Tarkov place footstep sounds in specific frequencies (mid-treble), while explosions and gunfire occupy the bass range. If you simply turn up the volume to hear footsteps, the gunfire will be deafening. The solution is an Audio Compressor.
        </p>
      `
        },
        {
            title: "Chapter 1: Installation (Be Careful)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Step-by-Step</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Download <strong>Equalizer APO</strong> (from SourceForge).
                    <br/>2. During installation, select ONLY your headset (Playback Devices) and microphone (Capture Devices).
                    <br/>3. Restart your PC (Mandatory).
                    <br/>4. Download <strong>Peace Equalizer</strong> (the graphical interface).
                    <br/>5. Open Peace.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Equalizing for Footsteps",
            content: `
        <p class="mb-4 text-gray-300">
            In Peace, you'll see frequency sliders.
            <br/>- <strong>60Hz to 250Hz (Bass):</strong> Reduce this (-3dB to -6dB). This dampens the "boom" of grenades and engine rumbles, clarifying the soundstage.
            <br/>- <strong>2000Hz to 4000Hz (Mid-Treble):</strong> Boost this (+3dB to +6dB). This is where the sounds of footsteps on wood, metal, and dirt reside.
            <br/>- <strong>8000Hz+ (Treble):</strong> Keep this neutral or apply a slight "air" boost.
        </p>
      `
        },
        {
            title: "Chapter 3: Compression (Leveling)",
            content: `
        <p class="mb-4 text-gray-300">
            This is your most powerful tool.
            <br/>In the Peace "Effects" panel, enable Compression.
            <br/>It automatically boosts quiet sounds (distant footsteps) and lowers loud sounds (an AWP shot next to you) in real-time.
            <br/>Recommended settings: Fast attack (5ms) and medium release (50ms).
            <br/><em>Note:</em> This can flatten your sense of distance—a far-off footstep might sound as loud as a nearby one. It takes practice to adjust.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: AutoEQ (Headset Correction)",
            content: `
        <p class="mb-4 text-gray-300">
            If your headset has poor frequency response (too much bass or a "boxy" sound), use the "AutoEQ" button in Peace.
            <br/>Search for your specific headset model (e.g., HyperX Cloud II).
            <br/>The software will apply a Harman Target curve to flatten the response, making it sound more like a professional $1,000 studio monitor. From there, you can apply your footstep boost.
        </p>
      `
        },
        {
            title: "Chapter 5: Pre-Amplification (Gain Control)",
            content: `
        <p class="mb-4 text-gray-300">
            If you boost any frequency by +6dB, you MUST lower the overall "Pre-Amplifying" slider to at least -6dB.
            <br/>Failing to do so will cause the signal to "clip" (distort) when it hits the 0dB ceiling, resulting in audio artifacts.
            <br/>Always prefer cutting frequencies (Subtractive EQ) whenever possible before applying boosts.
        </p>
      `
        },
        {
            title: "Chapter 6: Microphone (Pro Voice Quality)",
            content: `
        <p class="mb-4 text-gray-300">
            You installed it on your Mic too, right?
            <br/>- Apply a High Pass Filter (Bass Cut) up to 100Hz. This removes AC hum and desk thumps.
            <br/>- Apply dynamic Gain if your mic output is naturally low.
            <br/>- Use a Noise Gate to keep the mic silent when you aren't speaking.
        </p>
      `
        },
        {
            title: "Chapter 7: Profiles (Gaming vs. Music)",
            content: `
        <p class="mb-4 text-gray-300">
            Save an "FPS Mode" profile with cut bass for competitive play.
            <br/>Save a "Music Mode" profile with standard or boosted bass (Bass Boost) for enjoyment.
            <br/>Assign hotkeys (like Ctrl+F1, Ctrl+F2) to switch between them instantly.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: HeSuVi (Free 7.1 Virtual Surround)",
            content: `
            <p class="mb-4 text-gray-300">
                "HeSuVi" is an Equalizer APO addon that simulates binaural surround sound like Dolby Atmos or Sennheiser GSX for free.
                <br/>It often performs better than the native 7.1 surround found in cheap USB headsets. It's great for immersion, but pure Stereo is still recommended for maximum competitive precision.
            </p>
            `
        },
        {
            title: "Chapter 9: Troubleshooting",
            content: `
            <p class="mb-4 text-gray-300">
                Did your sound stop working?
                <br/>Go to your device properties in Windows and toggle "Audio enhancements" (on or off depending on your Realtek driver).
                <br/>Try reinstalling APO using the SFX/EFX (Experimental) mode in the Configurator if the default LFX/GFX mode fails.
            </p>
            `
        },
        {
            title: "Chapter 10: Delay (Latency)",
            content: `
            <p class="mb-4 text-gray-300">
                Equalizer APO typically adds only about 0.5ms of latency—completely imperceptible to humans.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can this cause a ban (VAC/Vanguard)?",
            answer: "No. It is a standard Windows audio driver level filter. It does not inject code into the game process. It is completely safe and undetectable."
        },
        {
            question: "Does it work with USB and 3.5mm headsets?",
            answer: "It works with any audio device recognized by Windows, including USB, Bluetooth, HDMI, and the standard 3.5mm (P2) jack."
        },
        {
            question: "Did your audio volume become too low?",
            answer: "Check your Pre-Amp setting. Ensure your primary Windows volume is set to 100% and adjust via the Pre-Amp slider as needed."
        }
    ];

    const externalReferences = [
        { name: "Equalizer APO Download", url: "https://sourceforge.net/projects/equalizerapo/" },
        { name: "Peace Equalizer Download", url: "https://sourceforge.net/projects/peace-equalizer-apo-extension/" }
    ];

    const relatedGuides = [
        {
            href: "/guias/discord-nitro-qualidade-voz-krisp",
            title: "Discord Settings",
            description: "Improve your mic quality there too."
        },
        {
            href: "/guias/escape-from-tarkov-otimizacao-fps-ram",
            title: "Tarkov Guide",
            description: "Where sound is everything."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
            difficultyLevel="Advanced"
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
