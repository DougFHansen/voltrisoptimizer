import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'solucao-problemas-audio',
  title: "Windows Audio Stopped? The Engineer's Manual: Diagnosis and Repair 2026",
  description: "The most comprehensive technical guide on the internet for missing or poor sound. Driver repair, DPC latency, hardware conflicts, grounding, and professional equalization.",
  category: 'windows-general',
  difficulty: 'Advanced',
  time: '50 min'
};

const title = "Windows Audio Stopped? The Engineer's Manual: Diagnosis and Repair 2026";
const description = "The most comprehensive technical guide on the internet for missing or poor sound. Driver repair, DPC latency, hardware conflicts, grounding, and professional equalization.";
const keywords = [
  'windows 11 no sound repair registry',
  'realtek driver won\'t install error 10',
  'stuttering audio games fps dpc latency',
  'best sample rate games 48khz 192khz',
  'bluetooth hands-free disable poor quality',
  'usb headphones disconnecting power issue',
  'how to equalize cheap headphones apo peace tutorial'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('solucao-problemas-audio', title, description, keywords, locale);
}

export default function AudioTroubleshootingGuide() {
  const summaryTable = [
    { label: "Essential Tool", value: "LatencyMon + DDU" },
    { label: "Critical Error", value: "Stuck Audio Service" },
    { label: "Hardware Villain", value: "Case Front Panel" },
    { label: "Software Villain", value: "NVIDIA High Definition Drivers" },
    { label: "Technical Level", value: "Advanced (Engineering)" }
  ];

  const contentSections = [
    {
      title: "Introduction: The Chaos of Windows Audio",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The Windows audio system (WASAPI) is a patchwork of legacy and modern code. It attempts to manage onboard sound cards (Realtek), graphics cards (NVIDIA/AMD), USB headsets, and Bluetooth devices simultaneously. When it fails, the result is total silence, crackling, or robotic sound.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In this manual, we will cover everything from the basics (checking cables) to advanced sound engineering (interrupt latency, exclusive modes, and sample rates). If you've tried everything else and it hasn't worked, the solution is here.
        </p>
      `
    },
    {
      title: "Chapter 1: Sound Has Disappeared (Physical and Logical Diagnosis)",
      content: `
        <div class="space-y-6">
            <h4 class="text-white font-bold text-xl mb-4">The 3 Points of Failure Rule</h4>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-gray-800 p-5 rounded-lg border border-red-500/20">
                    <h5 class="text-red-400 font-bold mb-2">1. Hardware (Physical)</h5>
                    <p class="text-sm text-gray-300">
                        Is the cable broken? Did the front USB port blow? Is the headphone's volume potentiometer at minimum? Test the headphones on your phone first.
                    </p>
                </div>
                <div class="bg-gray-800 p-5 rounded-lg border border-yellow-500/20">
                    <h5 class="text-yellow-400 font-bold mb-2">2. Driver (Middleware)</h5>
                    <p class="text-sm text-gray-300">
                        Did Windows Update install a "generic" driver over your official Realtek one? Has NVIDIA hijacked the sound output to the HDMI monitor?
                    </p>
                </div>
                <div class="bg-gray-800 p-5 rounded-lg border border-blue-500/20">
                    <h5 class="text-blue-400 font-bold mb-2">3. Service (Software)</h5>
                    <p class="text-sm text-gray-300">
                        Is the <code>Audiosrv</code> service stuck? Is an "Audio Enhancement" causing the driver to crash?
                    </p>
                </div>
            </div>
        </div>
      `
    },
    {
      title: "Chapter 2: Latency Engineering (Stuttering/Popping Sound)",
      content: `
        <p class="mb-4 text-gray-300">
            If you hear pops (popping/crackling) or the sound slows down (becomes robotic) during heavy gaming, the problem is likely <strong>DPC Latency</strong>.
        </p>

        <div class="space-y-6 bg-gray-900 border border-gray-700 p-6 rounded-xl">
            <h4 class="text-white font-bold text-xl mb-3">Diagnosis with LatencyMon</h4>
            <ol class="list-decimal list-inside text-gray-300 space-y-3">
                <li>Download <strong>LatencyMon</strong> (Home Edition is Free).</li>
                <li>Click the green Play button. Play a game or listen to music for 5 minutes.</li>
                <li>Go to the "Drivers" tab and sort by "Highest execution time".</li>
            </ol>
            
            <div class="mt-4 grid gap-4">
                <div class="border-l-4 border-red-500 pl-4">
                    <strong class="text-red-400 block">ndis.sys (Network/Wi-Fi)</strong>
                    <span class="text-gray-400 text-sm">Your Wi-Fi or Ethernet driver is monopolizing the CPU. Update the network card driver or, if possible, use an Ethernet cable instead of Wi-Fi. Disable "Energy Efficient Ethernet" in the Device Manager.</span>
                </div>
                <div class="border-l-4 border-green-500 pl-4">
                    <strong class="text-green-400 block">nvlddmkm.sys (NVIDIA)</strong>
                    <span class="text-gray-400 text-sm">The GPU driver is causing lag. Use DDU (Display Driver Uninstaller) to perform a clean uninstall and install the "Studio Driver" version (which is more stable) instead of "Game Ready". Enable "MSI Mode" (Message Signaled Interrupts) using the MSI Utility v3 tool.</span>
                </div>
                <div class="border-l-4 border-blue-500 pl-4">
                    <strong class="text-blue-400 block">storport.sys (HDD/SSD)</strong>
                    <span class="text-gray-400 text-sm">Your hard drive is slow or failing. Replace the SATA cable or check if the SSD has the latest firmware.</span>
                </div>
            </div>
        </div>
      `
    },
    {
      title: "Chapter 3: The Driver War (Realtek vs. Microsoft)",
      content: `
        <p class="mb-4 text-gray-300">
            Realtek has two types of drivers: HDA (legacy, 200MB, often has a dated interface) and UAD (modern, available through the Store, lightweight). They do not mix.
        </p>

        <h4 class="text-white font-bold text-xl mt-6 mb-3">How to Perform a Proper Clean Install:</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 bg-gray-900/40 p-5 rounded-lg">
            <li>Download the audio driver from your MOTHERBOARD manufacturer's website (not the generic Realtek site).</li>
            <li>Disconnect from the internet (to prevent Windows Update from interfering).</li>
            <li>Open Device Manager > Sound, video and game controllers.</li>
            <li>Right-click on "Realtek Audio" > Uninstall Device > Check "Delete the driver software for this device".</li>
            <li>Restart your PC.</li>
            <li>Install the driver you downloaded.</li>
            <li>Restart again.</li>
            <li>Reconnect to the internet.</li>
        </ol>

        <h4 class="text-yellow-400 font-bold text-md mt-6 mb-2">Front Panel Trick (BIOS):</h4>
        <p class="text-gray-300 text-sm border-l-2 border-yellow-500 pl-4">
            If sound isn't coming through the front of the PC: Enter the BIOS > Onboard Devices > <strong>Front Panel Type</strong>. Switch from HD Audio to AC97 (or vice-versa).
            <br/>In the Realtek panel within Windows, enable the option "Disable front panel jack detection". This forces the electrical signal to the front port even if the mechanical sensor is faulty.
        </p>
      `
    },
    {
      title: "Chapter 4: Windows Services (Script Repair)",
      content: `
        <p class="text-gray-300 mb-4">
            Let's restart the entire audio stack without rebooting the PC.
        </p>
        <div class="bg-gray-950 p-6 rounded-lg font-mono text-sm border border-gray-700 shadow-xl overflow-x-auto">
            <p class="text-gray-500 text-xs mb-2"># Open PowerShell or CMD as Administrator and paste each line:</p>
            <p class="text-green-400 mb-1">net stop audiosrv</p>
            <p class="text-green-400 mb-1">net stop AudioEndpointBuilder</p>
            <p class="text-green-400 mb-1">REG ADD "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Audiosrv" /v Start /t REG_DWORD /d 2 /f</p>
            <p class="text-green-400 mb-1">net start AudioEndpointBuilder</p>
            <p class="text-green-400 mb-1">net start audiosrv</p>
        </div>
        <p class="text-gray-400 text-xs mt-2 italic">
            The REG ADD command ensures the service starts "Automatically" on the next boot, fixing registry entries corrupted by malware or "cleaning" software.
        </p>
      `
    },
    {
      title: "Chapter 5: Sound Quality and Myths (Sample Rate)",
      content: `
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <h4 class="text-white font-bold text-lg mb-3">16-bit vs. 24-bit vs. 32-bit</h4>
                <p class="text-gray-300 text-sm">
                    <strong>24-bit</strong> is the industry standard (movies, Spotify). Using 16-bit (CD quality) is fine, but 24-bit provides more dynamic range (less hiss in silent passages). 32-bit is unnecessary for playback (useful only for recording).
                </p>
            </div>
            <div>
                <h4 class="text-white font-bold text-lg mb-3">44.1kHz vs. 48kHz vs. 192kHz</h4>
                <p class="text-gray-300 text-sm">
                    <strong>Myth:</strong> "Higher is always better." 
                    <br/><strong>Fact:</strong> Most PC audio (Games, YouTube) is recorded at 48000Hz (48kHz). If you set Windows to 192kHz, the system must perform real-time resampling. This consumes CPU resources and can introduce artifacts or distortion.
                    <br/><strong class="text-green-400">Recommendation:</strong> Set it to <strong>24-bit / 48000Hz</strong> (DVD/Studio Quality).
                </p>
            </div>
        </div>
      `
    },
    {
      title: "Advanced FAQ: Questions for Power Users",
      content: `
        <div class="space-y-6">
            <div class="bg-gray-800/50 p-4 rounded-lg">
                <h5 class="text-white font-bold mb-2">Do I need an external USB DAC?</h5>
                <p class="text-gray-300 text-sm">
                    If you hear a constant background hiss even when no sound is playing, yes. This is electromagnetic interference (EMI) from the motherboard. A USB DAC (even a budget one like the Apple Dongle or Sharkoon DAC) moves the processing out of the noisy PC case, effectively eliminating hiss.
                </p>
            </div>

            <div class="bg-gray-800/50 p-4 rounded-lg">
                <h5 class="text-white font-bold mb-2">Bluetooth sound quality as bad as AM radio?</h5>
                <p class="text-gray-300 text-sm">
                    This is caused by the "Hands-Free" (HFP) profile. Bluetooth bandwidth cannot handle High-Quality Stereo Audio and a Microphone simultaneously. To fix this, disable the headset microphone in the Recording settings and use a separate USB mic. The audio will instantly switch to High-Quality mode (A2DP).
                </p>
            </div>

            <div class="bg-gray-800/50 p-4 rounded-lg">
                <h5 class="text-white font-bold mb-2">Does Loudness Equalization help in games?</h5>
                <p class="text-gray-300 text-sm">
                    Yes! Think of it as "audio wallhacking." In games like Warzone or CS2, it balances audio by increasing low-volume sounds (like footsteps) and compressing high-volume sounds (like gunshots). Your ears will thank you, and you'll hear enemies from further away. Enable it in the driver's "Enhancements" tab.
                </p>
            </div>
        </div>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/aumentar-volume-microfone-windows",
      title: "Equalizer APO Guide",
      description: "Complete tutorial on how to install and configure Peace GUI for perfect bass."
    },
    {
      href: "/guides/som-espacial-windows-configurar",
      title: "Dolby Atmos vs. Windows Sonic",
      description: "Analysis: Is it worth paying for spatial sound in games?"
    },
    {
      href: "/guides/atualizacao-drivers-video",
      title: "DDU Guide",
      description: "How to use Display Driver Uninstaller to clean out GPU audio drivers."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="50 min"
      difficultyLevel="Advanced"
      contentSections={contentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}

