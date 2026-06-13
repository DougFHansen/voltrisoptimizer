import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'usb-nao-reconhecido-reset-drivers',
  title: "USB Device Not Recognized: How to Fix (2026)",
  description: "Is your flash drive, mouse, or keyboard not working, and Windows says 'Unknown USB Device'? Learn how to reset drivers in 2026.",
  category: 'windows-erros',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "USB Device Not Recognized: How to Fix (2026)";
const description = "Is your flash drive, mouse, or keyboard not working, and Windows says 'Unknown USB Device'? Learn how to reset drivers in 2026.";
const keywords = [
    'usb device not recognized windows 11 2026 tutorial',
    'how to reset usb drivers windows 11 guide',
    'unknown usb device error device descriptor request failed 2026',
    'usb keyboard and mouse not working how to fix tutorial',
    'fix usb port stopped working windows 11 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('usb-nao-reconhecido-reset-drivers', title, description, keywords, locale);
}

export default function USBTroubleshootingGuide() {
    const summaryTable = [
        { label: "Common Error", value: "Device descriptor request failed" },
        { label: "Solution #1", value: "Uninstall USB Hub in Device Manager" },
        { label: "Vital Adjustment", value: "Disable USB Selective Suspend" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "The Mystery of the 'Dead' USB",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          You connect the device, hear the classic Windows sound, but nothing happens (or worse: an 'Unknown Device' error appears). In 2026, with Windows 11 being very aggressive in power saving, the system often \"shuts down\" the USB port to save battery or because of a driver that hung during use. Fortunately, most of the time, the problem isn't physical, but logical.
        </p>
      `
        },
        {
            title: "1. Resetting the USB Bus Hub",
            content: `
        <p class="mb-4 text-gray-300">Force Windows to revive the USB ports:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Open <strong>Device Manager</strong> (Win+X).</li>
            <li>Scroll to the bottom to 'Universal Serial Bus controllers'.</li>
            <li>Right-click on <strong>'Generic USB Hub'</strong> or <strong>'USB Root Hub'</strong>.</li>
            <li>Select 'Uninstall device' for all of them.</li>
            <li>Restart the computer. Windows will reinstall the original drivers and reactivate power to all ports.</li>
        </ol>
      `
        },
        {
            title: "2. Disabling Selective Suspend",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Keeping Windows from Sleeping:</h4>
            <p class="text-sm text-gray-300">
                If your mouse or keyboard shuts down by itself after a few minutes of inactivity: <br/><br/>
                - Go to Control Panel > Hardware and Sound > Power Options. <br/>
                - Click on 'Change plan settings' > 'Change advanced power settings'. <br/>
                - Search for <strong>USB settings</strong> > USB selective suspend setting. <br/>
                - Change to <strong>Disabled</strong>. This ensures constant power to your peripherals 24 hours a day.
            </p>
        </div>
      `
        },
        {
            title: "3. Power and PSU Issues (2026)",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Advanced tip:</strong> In 2026, many RGB peripherals (mechanical keyboards, mice with lights) draw a lot of power. 
            <br/><br/>If you use a <strong>non-powered USB Hub</strong>, the ports might not handle it. Try connecting the device directly to the back ports of the motherboard (straight to the case) instead of the front ones. The back ports have more stable and direct electrical supply, resolving many 'Device not recognized' errors.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/teclado-notebook-parou-fix",
            title: "Laptop Keyboard",
            description: "Tips if the internal keyboard stopped working."
        },
        {
            href: "/guides/pos-instalacao-windows-11",
            title: "Post-Installation",
            description: "Driver adjustments for a new PC."
        },
        {
            href: "/guides/gerenciamento-energia-windows-11",
            title: "Windows Power",
            description: "More settings to avoid hardware suspension."
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


