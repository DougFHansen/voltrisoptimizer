import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'som-espacial-windows-configurar',
  title: "Spatial Sound in Windows 11: How to Enable and Setup (2026)",
  description: "Want to hear footsteps accurately in games? Learn how to enable Windows Sonic, Dolby Atmos, and DTS:X to have spatial sound in 2026.",
  category: 'software',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "Spatial Sound in Windows 11: How to Enable and Setup (2026)";
const description = "Want to hear footsteps accurately in games? Learn how to enable Windows Sonic, Dolby Atmos, and DTS:X to have spatial sound in 2026.";
const keywords = [
    'how to enable spatial sound windows 11 2026',
    'windows sonic for headphones is it worth it',
    'dolby atmos vs dts sound unbound which is better 2026',
    'improve sound for games fps valorant cs2 2026',
    'setup spatial audio windows 11 headphones'
];

export const metadata: Metadata = createGuideMetadata('som-espacial-windows-configurar', title, description, keywords);

export default function SpatialAudioGuide() {
    const summaryTable = [
        { label: "Native (Free)", value: "Windows Sonic for Headphones" },
        { label: "Premium (Paid)", value: "Dolby Atmos / DTS Sound Unbound" },
        { label: "Main Use", value: "Enemy location (Vertical and 360°)" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "What is Spatial Sound?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Unlike ordinary stereo sound (left and right), **Spatial Sound** creates a virtual sphere of audio around your head. In 2026, this is essential for competitive games, allowing you to identify if an enemy is above you, behind, or on a lower floor. Windows 11 processes this information and simulates the distance and direction using advanced algorithms.
        </p>
      `
        },
        {
            title: "1. Enabling Windows Sonic (Free)",
            content: `
        <p class="mb-4 text-gray-300">Microsoft offers an excellent option at no additional cost:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Right-click the sound icon on the taskbar.</li>
            <li>Go to <strong>Sound Settings</strong>.</li>
            <li>Click on your output device (Headphones).</li>
            <li>Scroll down to 'Spatial Sound' and select <strong>Windows Sonic for Headphones</strong>.</li>
            <li>Ensure that any "Surround" effect of your headset driver (e.g., Logitech G Hub or Razer Synapse) is DISABLED to avoid conflict.</li>
        </ol>
      `
        },
        {
            title: "2. Dolby Atmos vs DTS:X",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Which one to choose in 2026?</h4>
            <p class="text-sm text-gray-300">
                If you seek the best cinematic experience, **Dolby Atmos** is superior for having greater support in AAA movies and games. **DTS Headphone:X**, on the other hand, is often preferred by FPS players for having an equalization that better highlights footsteps and reload frequencies. Both are paid (one-time license), but offer free trial periods. Try both before buying.
            </p>
        </div>
      `
        },
        {
            title: "3. Importance of Sample Rate",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>The fine-tuning:</strong> 
            <br/><br/>For spatial sound to work perfectly without crackling or delays, go to Device Properties > Advanced Settings and change the default format to <strong>24 bit, 48000 Hz (Studio Quality)</strong>. Avoid very high values (like 192kHz) in games, as they can disable spatial sound processing or cause distortion in virtual positioning.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/corrigir-audio-chiado-windows",
            title: "Fix Audio",
            description: "Solve static and popping problems."
        },
        {
            href: "/guides/aumentar-volume-microfone-windows",
            title: "Microphone Volume",
            description: "Be heard clearly by your team."
        },
        {
            href: "/guides/headset-7.1-real-vs-virtual-vale-a-pena",
            title: "7.1 Headset vs Stereo",
            description: "Understand why stereo with spatial sound is better."
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

