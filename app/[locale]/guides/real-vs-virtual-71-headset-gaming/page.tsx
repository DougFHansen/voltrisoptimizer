import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'headset-7.1-real-vs-virtual-vale-a-pena',
    title: "Competitive Audio 2026: Headset vs IEM vs Virtual 7.1",
    description: "Say goodbye to muffled sound. Discover why Pro Players are swapping Gaming Headsets for IEMs, how to use Equalizer to hear footsteps, and the truth about Virtual 7.1.",
    category: 'peripherals',
    difficulty: 'Intermediate',
    time: '30 min'
};

const title = "Competitive Audio 2026: Headset vs IEM vs Virtual 7.1";
const description = "Say goodbye to muffled sound. Discover why Pro Players are swapping Gaming Headsets for IEMs, how to use Equalizer to hear footsteps, and the truth about Virtual 7.1.";

const keywords = [
    'headset 7.1 virtual vs real difference 2026',
    'iem for competitive gaming kz moondrop',
    'best eq for cs2 valorant footsteps',
    'open back vs closed back gaming',
    'dac amp worth it for gaming',
    'wireless delay audio bluetooth vs 2.4ghz'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('headset-7.1-real-vs-virtual-vale-a-pena', title, description, keywords, locale);
}

export default function AudioSurroundGuide() {
    const summaryTable = [
        { label: "Best Soundstage", value: "Open-Back Headphones (Sennheiser/Audio-Technica)" },
        { label: "Best Isolation/Focus", value: "IEMs (In-Ear Monitors)" },
        { label: "Virtual 7.1", value: "Generally BAD (Distorts audio)" },
        { label: "Wireless", value: "Mandatory 2.4GHz Dongle (Never Bluetooth)" },
        { label: "DAC/Amp", value: "Necessary for headphones above 80 Ohms" },
        { label: "Footsteps", value: "Requires EQ (Boost 2k-4kHz)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The End of the 'Gaming Headset'?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, the era of plastic headsets with RGB lighting and "7.1 Sound" is ending in the professional scene. Serious players have realized that <strong>audiophile</strong> equipment (focused on pure fidelity) delivers a much greater competitive advantage (sound wallhack) than blown-out bass that shakes your head but hides the sound of footsteps.
        </p>
      `
        },
        {
            title: "1. Open-Back vs Closed-Back",
            content: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border-t-4 border-blue-500">
                <h4 class="text-blue-400 font-bold mb-2 text-lg">Closed-Back</h4>
                <p class="text-gray-400 text-sm mb-2">Standard for most 'Gamers'.</p>
                <ul class="list-disc list-inside text-gray-300 text-sm space-y-2">
                    <li><strong>Pros:</strong> Isolates fan/keyboard noise. More bass (impactful explosions).</li>
                    <li><strong>Cons:</strong> Small 'Soundstage' (Soundstage). The sound seems to come from inside your head, making it hard to know the exact distance of the enemy.</li>
                    <li><strong>Usage:</strong> LAN Houses, noisy environments.</li>
                </ul>
            </div>
            <div class="bg-[#0A0A0F] p-4 rounded-xl border-t-4 border-purple-500">
                <h4 class="text-purple-400 font-bold mb-2 text-lg">Open-Back</h4>
                <p class="text-gray-400 text-sm mb-2">The experts' choice.</p>
                <ul class="list-disc list-inside text-gray-300 text-sm space-y-2">
                    <li><strong>Pros:</strong> Sound 'leaks' out. This creates a natural and wide Soundstage. You hear EXACTLY where the enemy is, as if you were there.</li>
                    <li><strong>Cons:</strong> You hear the noise in your room. No one around you wants to hear your game. Less bass.</li>
                    <li><strong>Usage:</strong> Quiet room, Hardcore Competitive.</li>
                </ul>
            </div>
        </div>
      `
        },
        {
            title: "2. The IEM Revolution (In-Ear Monitors)",
            content: `
        <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-6">
            <h4 class="text-white font-bold mb-3">Why do pros use 'phone earbuds'?</h4>
            <p class="text-gray-300 mb-4">
                You've probably seen it in CS2/Valorant championships: players wear a large headset (only to muffle crowd noise/white noise) and, underneath it, small in-ear monitors (IEMs).
            </p>
            <p class="text-gray-300 text-sm">
                <strong>Advantages of IEMs (Ex: Moondrop, KZ, Truthear):</strong>
                <br/>1. <strong>Passive Isolation:</strong> They enter the ear canal, blocking everything.
                <br/>2. <strong>Detail:</strong> Drivers focused on extreme clarity.
                <br/>3. <strong>Comfort:</strong> No headband pressing on the head or heating the ears.
                <br/>4. <strong>Price:</strong> A $30 IEM often beats a $120 Gaming Headset in audio quality.
            </p>
        </div>
      `
        },
        {
            title: "3. The Myth of Virtual 7.1",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Headset with "7.1" on the box:</strong> Usually a common stereo headphone with a cheap USB sound card that applies an echo (Reverb) effect.
            <br/><br/>
            <strong>Why avoid it:</strong> This echo distorts the original audio. In competitive games, you want CLEAN and DRY sound to identify the direction. Virtual 7.1 jumbles sounds: a grenade exploding on the left echoes on the right, confusing your brain.
            <br/><br/>
            <strong>The Exception:</strong> Real HRTF (Dolby Atmos / Windows Sonic). If the game supports it natively (like Overwatch 2), the processing is done in the game engine, which is MUCH better than the headset software.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "4. Equalization (EQ): The Legal Wallhack",
            content: `
            <div class="bg-emerald-900/10 p-5 rounded-xl border border-emerald-500/20 mb-6">
                <h4 class="text-emerald-400 font-bold mb-2">How to configure your equalizer (APO / Software):</h4>
                <p class="text-sm text-gray-300">
                    Games aren't movies. High bass (explosions) get in the way. Footsteps are mid-high frequencies.
                    <br/><br/>
                    <strong>Standard Recipe for FPS (Valorant/CS):</strong>
                    <br/>- <strong>Bass (20Hz - 150Hz):</strong> <span class="text-red-400 font-bold">REDUCE (-3dB to -5dB)</span>. Clears background sound (wind, hum, explosions).
                    <br/>- <strong>Mids (250Hz - 1kHz):</strong> Neutral or slight cut to remove "boxy" sound.
                    <br/>- <strong>High-Mids (2kHz - 4kHz):</strong> <span class="text-green-400 font-bold">INCREASE (+3dB to +5dB)</span>. THIS is where footsteps (footsteps) and weapon reloads live. Crunch!
                    <br/>- <strong>Treble (6kHz+):</strong> Careful. Too high hurts the ear (sibilance). Adjust to taste.
                </p>
            </div>
          `
        },
        {
            title: "5. Impedance and DAC/Amp",
            content: `
            <p class="mb-4 text-gray-300">
                If you buy an audiophile headphone (Ex: Beyerdynamic DT 990 Pro), it might have <strong>250 Ohms</strong>.
                <br/>If you plug this into the motherboard output, the sound will come out LOW and lifeless.
                <br/><br/>
                <strong>Rule:</strong>
                <br/>- Up to 32-50 Ohms: Works on anything (PC, Phone, Console Controller).
                <br/>- 80 Ohms+: Requires a dedicated sound card or external DAC/Amp to have volume and bass.
                <br/>- Sensitivity (dB/mW) also matters, but impedance is the quick guide.
            </p>
          `
        },
        {
            title: "6. Wireless: 2.4GHz vs Bluetooth",
            content: `
            <ul class="space-y-4">
                <li class="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                    <span class="text-green-400 font-bold block mb-1">USB Dongle (2.4GHz / Lightspeed / Hyperspeed)</span>
                    <span class="text-sm text-gray-300">1ms latency. Same as cable. Perfect for gaming. Always use with the USB extender near the mouse/headset to avoid interference.</span>
                </li>
                <li class="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
                    <span class="text-red-400 font-bold block mb-1">Bluetooth</span>
                    <span class="text-sm text-gray-300">40ms to 200ms latency. The shot sound comes out after you clicked. Audio worsens if you turn on the microphone (HFP profile limits bandwidth). <strong>UNUSABLE for competitive games.</strong></span>
                </li>
            </ul>
          `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/aumentar-volume-microfone-windows",
            title: "Configure Microphone",
            description: "Don't be the guy who blows out the team's ears."
        },
        {
            href: "/guides/solucao-problemas-audio",
            title: "Audio Troubleshooting",
            description: "Fix crackling and driver issues."
        },
        {
            href: "/guides/equalizer-apo-peace-aumentar-passos-fps",
            title: "Equalizer APO Guide",
            description: "Step-by-step tutorial to install EQ on Windows."
        }
    ];

    const faqItems = [
        {
            question: "Is a gaming headset with vibration worth it?",
            answer: "No. It's a gimmick that distorts bass and tires your head. Avoid."
        },
        {
            question: "Do I need a dedicated sound card?",
            answer: "For 99% of users, no. Modern motherboards (with Realtek ALC1200/1220 or ALC4080 chips) are already excellent. Only invest in an external DAC if your headphone has high impedance or if you hear static (electrical noise) on the case's front output."
        },
        {
            question: "Is a headset microphone good for streaming?",
            answer: "Generally no. They compress the voice a lot (pilot effect). If you want to stream, buy a dedicated USB or dynamic microphone."
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
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
        />
    );
}

