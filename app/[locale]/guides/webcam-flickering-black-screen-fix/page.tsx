import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'webcam-piscando-tela-preta-fix',
  title: "Webcam Flickering or Black Screen: How to Fix (2026)",
  description: "Does your webcam freeze, go black, or flicker during meetings? Learn how to fix driver and privacy issues in Windows 11 in 2026.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "Webcam Flickering or Black Screen: How to Fix (2026)";
const description = "Does your webcam freeze, go black, or flicker during meetings? Learn how to fix driver and privacy issues in Windows 11 in 2026.";
const keywords = [
    'webcam flickering windows 11 how to fix 2026',
    'webcam black screen on meet discord tutorial guide',
    'fix laptop camera stopped working 2026',
    'webcam flickering blue or green light tutorial 2026',
    'reset camera drivers windows 11 step by step tutorial'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('webcam-piscando-tela-preta-fix', title, description, keywords, locale);
}

export default function WebcamFixGuide() {
    const summaryTable = [
        { label: "Cause #1", value: "Windows Privacy Settings" },
        { label: "Cause #2", value: "Saturated USB bandwidth (Too many devices)" },
        { label: "Symptom", value: "Camera light is on but image doesn't appear" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Why does the image disappear?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Webcam issues in Windows 11 in 2026 are mostly permission or bandwidth issues. If you are trying to use the camera in Drive, Discord or Zoom and you get a black screen (even with the LED light on), the system might be blocking access for security, or your video driver is having a conflict with the sensor encoding.
        </p>
      `
        },
        {
            title: "1. Checking Windows Privacy",
            content: `
        <p class="mb-4 text-gray-300">Windows 11 is strict with your image:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Go to Settings > <strong>Privacy & security</strong> > Camera.</li>
            <li>Make sure 'Camera access' is turned on.</li>
            <li>Make sure the specific app (e.g. Browser or Discord) has individual permission right below in the list.</li>
            <li><strong>Tip:</strong> Some 2026 Webcams and Laptops have a <strong>physical button</strong> or a sliding privacy shutter. Make sure the shutter is open!</li>
        </ol>
      `
        },
        {
            title: "2. Resetting the Camera Driver",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Clearing old records:</h4>
            <p class="text-sm text-gray-300">
                1. Right-click Start > <strong>Device Manager</strong>. <br/>
                2. Expand 'Cameras'. <br/>
                3. Right-click your camera and select <strong>Uninstall device</strong>. <br/>
                4. Restart the system. Windows 11 will automatically fetch the most stable and compatible driver for your system version.
            </p>
        </div>
      `
        },
        {
            title: "3. The USB bus \"Limit\"",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Does your webcam flicker continuously?</strong> 
            <br/><br/>2026 4K Webcams require a lot of power and bandwidth. If you use a USB Hub to connect a keyboard, mouse, headset, and webcam at the same time, the port might not be able to transmit image data. Try plugging the webcam directly into a <strong>USB 3.0 port (Blue)</strong> on the back of your PC. This solves 90% of interference and flickering image cases.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/usb-nao-reconhecido-reset-drivers",
            title: "USB Issues",
            description: "Tips if the port stopped working."
        },
        {
            href: "/guides/como-usar-obs-studio-gravar-tela",
            title: "Configure OBS",
            description: "Improve your webcam image."
        },
        {
            href: "/guides/pos-instalacao-windows-11",
            title: "Windows Drivers",
            description: "Keep the system up to date."
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

