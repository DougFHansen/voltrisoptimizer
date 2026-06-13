import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'aumentar-volume-microfone-windows',
  title: "Low Microphone? The Ultimate Windows Audio Guide (2026)",
  description: "Is your microphone too quiet or has static? Learn to configure gain, use Equalizer APO, NVIDIA Broadcast, and transform your amateur audio into studio quality.",
  category: 'software',
  difficulty: 'Intermediate',
  time: '40 min'
};

const title = "Low Microphone? The Ultimate Windows Audio Guide (2026)";
const description = "Is your microphone too quiet or has static? Learn to configure gain, use Equalizer APO, NVIDIA Broadcast, and transform your amateur audio into studio quality with free tools.";

const keywords = [
  'increase microphone volume windows 11 tutorial 2026',
  'microphone too low discord how to fix guide',
  'equalizer apo peace microphone configuration',
  'nvidia broadcast background noise removal',
  'voicemeeter banana basic tutorial 2026',
  'microphone gain boost windows 11',
  'realtek audio control driver panel',
  'studio quality cheap usb microphone'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('aumentar-volume-microfone-windows', title, description, keywords, locale);
}

export default function MicrophoneBoostGuide() {
  const summaryTable = [
    { label: "Ideal Volume", value: "90-100% in Windows" },
    { label: "Microphone Boost", value: "+10dB to +20dB (Max)" },
    { label: "Pro Software", value: "Equalizer APO + Peace" },
    { label: "AI Noise Removal", value: "NVIDIA Broadcast / SteelSeries Sonar" },
    { label: "Routing", value: "Voicemeeter Banana" },
    { label: "Format", value: "48000Hz (DVD Quality)" }
  ];

  const contentSections = [
    {
      title: "Initial Diagnosis: Why Can't Anyone Hear You?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The "low microphone" problem in Windows is generally not a hardware defect, but rather a "feature" of hearing safety or generic drivers. Windows, by default, sets conservative levels to avoid feedback. For streamers, home office workers, or competitive gamers, standard audio is unacceptable.
        </p>
        
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-blue-400 font-bold mb-2">🔊 The Golden Rule of Gain</h4>
          <p class="text-sm text-gray-300">
            <strong>Volume ≠ Gain.</strong> Volume is output. Gain is input sensitivity. Increasing volume digitally only amplifies the ALREADY captured signal (including noise). The secret is to adjust <strong>Analog Gain</strong> (in hardware or driver) before applying digital amplification.
          </p>
        </div>
      `
    },
    {
      title: "Step 1: Native Windows Configuration (The Required Basics)",
      content: `
        <p class="mb-4 text-gray-300">Before installing software, let's ensure Windows isn't sabotaging your audio:</p>
        
        <h4 class="text-white font-bold mb-3 mt-4">Classic Sound Panel (Where the magic happens)</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>Press <code>Win + R</code>, type <code>mmsys.cpl</code> and hit Enter. (This opens the old panel, which is much better than the new one).</li>
            <li>Go to the <strong>Recording</strong> tab.</li>
            <li>Right-click on your main microphone > <strong>Properties</strong>.</li>
            <li>In the <strong>Levels</strong> tab:
                <ul class="list-disc ml-8 mt-2 text-sm text-gray-400">
                    <li>Microphone: Set to <strong>90-100%</strong>.</li>
                    <li>Microphone Boost (if available): Test <strong>+10.0 dB</strong>. If it's still low, try +20.0 dB. <strong>NEVER use +30.0 dB</strong> unless it's an emergency, as the noise (hiss) will be unbearable.</li>
                </ul>
            </li>
            <li>In the <strong>Advanced</strong> tab:
                <ul class="list-disc ml-8 mt-2 text-sm text-gray-400">
                    <li>Uncheck "Allow applications to take exclusive control" if you have issues with Discord muting your mic.</li>
                    <li>Default Format: Choose <strong>2 channels, 16 bits, 48000 Hz (DVD Quality)</strong>. 44100Hz is acceptable, but 48kHz is the modern video/streaming standard.</li>
                </ul>
            </li>
        </ol>
      `
    },
    {
      title: "Step 2: Equalizer APO + Peace (Pro Level for Free)",
      content: `
        <p class="mb-4 text-gray-300">
          If the Windows boost wasn't enough or brought too much noise, you need signal processing. <strong>Equalizer APO</strong> is the most powerful tool for Windows, allowing you to apply real pre-amplification and VST filters.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h5 class="font-bold text-green-400 mb-2">How to Install</h5>
            <ol class="list-decimal list-inside text-sm text-gray-300 space-y-2">
                <li>Download <strong>Equalizer APO</strong> and install it.</li>
                <li>In the "Configurator", check ONLY your microphone in the "Capture Devices" tab. Restart your PC.</li>
                <li>Download <strong>Peace Equalizer</strong> (GUI extension for APO).</li>
            </ol>
          </div>
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h5 class="font-bold text-green-400 mb-2">The Pre-Amp Trick</h5>
            <p class="text-sm text-gray-300">
                At the top of Peace, there is a <strong>Pre Amplifying</strong> slider. Move it to the right to gain up to <strong>+30dB</strong> of volume with much higher clarity than native driver boost.
            </p>
          </div>
        </div>
      `
    },
    {
      title: "Step 3: Eliminating Noise with AI (NVIDIA Broadcast / SteelSeries Sonar)",
      content: `
        <p class="mb-4 text-gray-300">
          Increasing volume increases noise from fans, keyboards, and neighbors. In 2026, we use AI to clean that up.
        </p>
        
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Tool</th>
                <th class="p-3 text-left">Requirement</th>
                <th class="p-3 text-left">Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3 text-green-400 font-bold">NVIDIA Broadcast</td>
                <td class="p-3">RTX GPU (2060 or superior)</td>
                <td class="p-3">THE BEST. Removes construction noise without distorting voice. Use the "Noise Removal" effect.</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3 text-orange-400 font-bold">SteelSeries Sonar</td>
                <td class="p-3">Any PC (Free)</td>
                <td class="p-3">Excellent. Includes compressor, noise gate, and easy-to-use parametric equalizer.</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3 text-blue-400 font-bold">Krisp</td>
                <td class="p-3">Any PC (Freemium)</td>
                <td class="p-3">Good for calls (Zoom/Teams), limited in the free version.</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3 text-purple-400 font-bold">AMD Noise Suppression</td>
                <td class="p-3">Radeon RX 6000+ GPU</td>
                <td class="p-3">Effective, integrates directly into Adrenalin driver. Low impact on performance.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Audio Engineering: Sample Rates, Bit Depth, and Cables",
      content: `
        <h4 class="text-white font-bold mb-3">Hz and Bits: What Matters?</h4>
        <p class="mb-4 text-gray-300">
          Many guides tell you to set it to maximum. <strong>This is wrong.</strong>
        </p>
        
        <div class="space-y-4">
            <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
                <h5 class="text-purple-400 font-bold mb-2">44.1kHz vs 48kHz</h5>
                <p class="text-sm text-gray-300">
                    CD audio (44.1kHz) was standard for music. For <strong>video and streaming</strong> (OBS, Youtube, Twitch), the absolute standard is <strong>48kHz</strong>. If your mic is at 44.1 and OBS at 48, real-time <em>resampling</em> will occur, causing CPU usage and quality loss (aliasing). <strong>Configure EVERYTHING to 48000Hz (48kHz).</strong>
                </p>
            </div>
            
            <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20">
                <h5 class="text-amber-400 font-bold mb-2">16-bit vs 24-bit</h5>
                <p class="text-sm text-gray-300">
                    <strong>16-bit</strong> offers 96dB of dynamic range. <strong>24-bit</strong> offers 144dB. For human voice, 16-bit is enough, but <strong>24-bit</strong> allows for a lower digital "noise floor", allowing more signal amplification without digital quantization noise. Always prefer 24-bit if available.
                </p>
            </div>
        </div>

        <h4 class="text-white font-bold mb-3 mt-6">USB 2.0 vs 3.0: Power is Everything</h4>
        <p class="mb-4 text-gray-300">
          USB microphones (HyperX Quadcast, Blue Yeti) need power. Front panel USB ports (case) often have unstable voltage, causing:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Intermittent low volume (mic "loses power")</li>
            <li>Random disconnections</li>
            <li>Electrical hum (Ground Loop)</li>
        </ul>
        <p class="text-emerald-400 font-bold mt-2">Solution: Always plug your USB microphone into the REAR ports of the motherboard, preferably a USB 3.0 (blue) or 3.1 (red) port to ensure stable amperage.</p>
      `
    },
    {
      title: "Definitive Solution: Voicemeeter Banana",
      content: `
        <p class="mb-4 text-gray-300">
          If nothing worked, you need a virtual mixing board. <strong>Voicemeeter Banana</strong> is the industry standard for streamers.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>It creates a virtual device "Voicemeeter Output".</li>
            <li>You route your real mic to it.</li>
            <li>You apply Comp (levels screams and whispers) and Gate (cuts keyboard noise).</li>
            <li>You use "Voicemeeter Output" in Discord/Games.</li>
        </ul>
        <p class="text-gray-300 mt-2 text-sm italic">
          Voicemeeter adds about 10-15ms of latency, which is imperceptible for voice, but offers total volume control independent of Windows.
        </p>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "Physical Positioning Tips",
      content: `
        <h4 class="text-white font-bold mb-3">Physics Beats Software</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-800/50 p-4 rounded-lg">
                <h5 class="text-white font-bold mb-2">Proximity (Proximity Effect)</h5>
                <p class="text-sm text-gray-300">
                    Cardioid microphones gain bass and volume exponentially the closer you are. Stay <strong>3-5 fingers away</strong> from the microphone. If you're too far (30cm+), you'll sound like you're in a bathroom, and the required gain will bring too much noise.
                </p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg">
                <h5 class="text-white font-bold mb-2">Articulating Boom Arm</h5>
                <p class="text-sm text-gray-300">
                    A desk-mounted mic picks up keyboard vibrations. A boom arm (R$ 80-150) isolates vibration and lets you position the mic close to your mouth without blocking your view, allowing for less digital gain (less noise).
                </p>
            </div>
        </div>
      `
    }
  ];

  const faqItems = [
    {
      question: "My microphone captures my game/PC sound (Loopback). How to fix?",
      answer: "This is usually electrical 'Crosstalk' in the front panel or Stereomix being active. 1. Disable 'Stereo Mix' in sound panel. 2. Use rear ports. 3. If using a headset with dual P2 (mic/headphone), the Y adapter might be leaking signal. Test without the adapter or replace the cable."
    },
    {
      question: "Volume lowers itself when I enter a call.",
      answer: "Go to Control Panel > Sound > Communications tab. Select 'Do nothing'. Windows, by default, reduces other sounds by 80% when it detects a call, and sometimes bugs the mic itself."
    },
    {
      question: "What is AGC (Automatic Gain Control)?",
      answer: "It's a feature in some drivers and apps (Discord/Teams) that raises/lowers volume automatically. For consistent quality, DISABLE AGC and set gain manually. AGC tends to increase background noise when you're silent."
    },
    {
      question: "What's the difference between Condenser and Dynamic microphones?",
      answer: "Condenser (e.g., HyperX Quadcast, Blue Yeti) is very sensitive, picks up details and lots of background noise (keyboard clicks, dogs). Dynamic (e.g., Shure MV7, Fifine K658) is less sensitive, focusing only on close-range voice and rejecting background noise. For noisy rooms, Dynamic is better."
    },
    {
      question: "Should I use the 'Realtek Audio Console'?",
      answer: "Yes, if your motherboard has it. It replaces the old panel in modern DCH drivers. Look for options like 'Noise Suppression' and 'Acoustic Echo Cancellation' (AEC) in it, which are processed directly on the audio chip, saving CPU."
    }
  ];

  const externalReferences = [
    { name: "Equalizer APO Download (SourceForge)", url: "https://sourceforge.net/projects/equalizerapo/" },
    { name: "Peace Equalizer Interface", url: "https://sourceforge.net/projects/peace-equalizer-apo-extension/" },
    { name: "VB-Audio Voicemeeter Banana", url: "https://vb-audio.com/Voicemeeter/banana.htm" },
    { name: "NVIDIA Broadcast Setup", url: "https://www.nvidia.com/pt-br/geforce/broadcasting/broadcast-app/" },
    { name: "SteelSeries Sonar", url: "https://pt.steelseries.com/gg/sonar" }
  ];

  const relatedGuides = [
    {
      href: "/guides/discord-nitro-qualidade-voz-krisp",
      title: "Configure Discord",
      description: "Optimize your mic specifically for Discord."
    },
    {
      href: "/guides/obs-studio-melhores-configuracoes-stream",
      title: "OBS Studio Audio",
      description: "Compression and noise filters for lives."
    },
    {
      href: "/guides/solucao-problemas-driver-audio",
      title: "Audio Drivers",
      description: "Fix issues with Realtek and drivers."
    },
    {
      href: "/guides/headset-7.1-real-vs-virtual-vale-a-pena",
      title: "Gamer Headsets",
      description: "Choose the best hardware for your setup."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="40 min"
      difficultyLevel="Intermediate"
      contentSections={contentSections}
      advancedContentSections={advancedContentSections}
      additionalContentSections={additionalContentSections}
      summaryTable={summaryTable}
      faqItems={faqItems}
      externalReferences={externalReferences}
      relatedGuides={relatedGuides}
    />
  );
}

