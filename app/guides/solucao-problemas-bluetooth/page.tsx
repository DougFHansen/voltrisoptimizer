import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'solucao-problemas-bluetooth',
  title: "Bluetooth Problems on Windows 11: Fix Guide (2026)",
  description: "Your bluetooth controller or headset won't connect or keeps disconnecting? Learn how to solve bluetooth errors on Windows 11 in 2026.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "Bluetooth Problems on Windows 11: Fix Guide (2026)";
const description = "Your bluetooth controller or headset won't connect or keeps disconnecting? Learn how to solve bluetooth errors on Windows 11 in 2026.";
const keywords = [
  'bluetooth windows 11 not working how to fix 2026',
  'bluetooth headphone disconnecting automatically pc tutorial',
  'update bluetooth driver windows 11 guide 2026',
  'xbox controller won\'t connect bluetooth pc fix',
  'enable bluetooth windows 11 step by step tutorial'
];

export const metadata: Metadata = createGuideMetadata('solucao-problemas-bluetooth', title, description, keywords);

export default function BluetoothTroubleshootingGuide() {
  const summaryTable = [
    { label: "Symptom", value: "Audio delay (Lag) or Drops" },
    { label: "Common Cause", value: "Power saving or poorly positioned Antenna" },
    { label: "Software", value: "Bluetooth Support Service" },
    { label: "Difficulty", value: "Medium" }
  ];

  const contentSections = [
    {
      title: "Bluetooth on PC in 2026",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Although Bluetooth technology has evolved to version 5.4+ in 2026, integration with Windows 11 still presents challenges. Wi-Fi interference problems, generic drivers, and aggressive power-saving settings are the biggest culprits for Xbox controllers disconnecting mid-match or headphones presenting "choppy" audio.
        </p>
      `
    },
    {
      title: "1. Disabling Power Saving",
      content: `
        <p class="mb-4 text-gray-300">This is the main reason why headphones disconnect after a few minutes of silence:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Right-click on the Start menu and go to <strong>Device Manager</strong>.</li>
            <li>Expand 'Bluetooth' and locate your adapter (e.g., Intel(R) Wireless Bluetooth).</li>
            <li>Go to Properties > **Power Management**.</li>
            <li>Uncheck the box <strong>"Allow the computer to turn off this device to save power"</strong>.</li>
            <li>This ensures the signal remains strong and stable all the time.</li>
        </ol>
      `
    },
    {
      title: "2. The Wi-Fi Antenna Trick",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Hardware Tip:</h4>
            <p class="text-sm text-gray-300">
                If you use a desktop PC with Wi-Fi antennas on the back of the motherboard, make sure the antennas are **connected**, even if you use wired internet. The Bluetooth chip uses these same antennas to transmit the signal. Without them, the Bluetooth range drops to less than 1 meter, causing severe lag in controllers and audio.
            </p>
        </div>
      `
    },
    {
      title: "3. Resetting Bluetooth Services",
      content: `
        <p class="mb-4 text-gray-300">
            <strong>Did the icon disappear?</strong> 
            <br/><br/>If the Bluetooth button has disappeared from the taskbar, press <code>Win + R</code>, type <code>services.msc</code> and look for **Bluetooth Support Service**. Ensure the 'Startup type' is set to <strong>Automatic</strong> and that the service is running. Often, aggressive system optimizers disable this service to "gain performance," breaking connectivity.
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/zonas-mortas-analogico-controle-fix",
      title: "Fix Controller",
      description: "Solve analog stick drift via bluetooth."
    },
    {
      href: "/guides/hard-reset-fones-bluetooth-fix",
      title: "Reset Headphones",
      description: "How to force pairing of stuck headphones."
    },
    {
      href: "/guides/atualizacao-drivers-video",
      title: "Update Drivers",
      description: "Tips on chipset and I/O drivers."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="15 min"
      difficultyLevel="Medium"
      contentSections={contentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}

