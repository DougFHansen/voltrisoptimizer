import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'hard-reset-fones-bluetooth-fix',
  title: "Bluetooth Earbud Only Working on One Side? How to Hard Reset",
  description: "Did your TWS earbuds stop pairing or is sound only coming from one side? Learn how to reset Xiaomi, JBL, Lenovo, and QCY earbuds to factory defaults.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Bluetooth Earbud Only Working on One Side? How to Hard Reset";
const description = "Did your TWS earbuds stop pairing or is sound only coming from one side? Learn how to reset Xiaomi, JBL, Lenovo, and QCY earbuds to factory defaults.";
const keywords = [
    'bluetooth earbud only working on one side fix 2026',
    'how to reset jbl bluetooth headphones 2026',
    'reset airpods xiaomi airdots tutorial',
    'pair bluetooth earbuds mono mode fix',
    'bluetooth headphones won\'t connect to pc fix'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('hard-reset-fones-bluetooth-fix', title, description, keywords, locale);
}

export default function BluetoothResetGuide() {
    const summaryTable = [
        { label: "Common Cause", value: "Desynchronization between earbuds" },
        { label: "Solution", value: "Touch Button (Hold 10-15 sec)" },
        { label: "Check #1", value: "Clean charging pins" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "Why Do Bluetooth Earbuds Stop Syncing?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Most TWS (True Wireless) earbuds operate on a \"Master and Slave\" system. One earbud connects to your phone, and the other connects to the first earbud. If you frequently take only one earbud out of the case, the connection between them can \"break,\" causing them to function only as individual mono earbuds.
        </p>
      `
        },
        {
            title: "1. General Reset (Xiaomi, Lenovo, and Generic Brands)",
            content: `
        <p class="mb-4 text-gray-300">This method resolves 90% of pairing issues:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>On your phone, go to Bluetooth settings and select <strong>'Forget this device'</strong>.</li>
            <li>Place both earbuds into the charging case.</li>
            <li>While they are in the case (or immediately after taking them out), hold the touch area (or button) on both earbuds simultaneously for <strong>15 seconds</strong>.</li>
            <li>The lights will flash in different colors (usually red/white).</li>
            <li>Release and wait 1 minute. Take both out of the case together and attempt to pair again.</li>
        </ol>
      `
        },
        {
            title: "2. Cleaning: The Invisible Villain",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Maintenance Tip:</h4>
            <p class="text-sm text-gray-300">
                Often, one side stops working simply because it isn't charging. Use a cotton swab with a small amount of <strong>isopropyl alcohol</strong> to clean the gold pins inside the case and the contacts on the earbud. Accumulation of oils and skin cells from daily use can prevent the earbud from receiving a charge, mimicking an electronic failure.
            </p>
        </div>
      `
        },
        {
            title: "3. Audio Issues in Windows",
            content: `
        <p class="mb-4 text-gray-300">
            If your headphones work on your phone but sound \"distorted\" or have poor microphone quality on your PC:
            <br/>Go to Sound Settings > Sound Control Panel. Disable the <strong>'Hands-Free AG Audio'</strong> mode and use only 'Stereo' mode. Hands-free mode reduces quality to AM radio levels to allow for Bluetooth microphone use.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/aumentar-volume-microfone-windows",
            title: "Microphone Volume",
            description: "System audio adjustments."
        },
        {
            href: "/guides/atualizacao-drivers-video",
            title: "System Drivers",
            description: "Update your PC's Bluetooth driver."
        },
        {
            href: "/guides/diagnostico-hardware",
            title: "Diagnosis",
            description: "Find out if your earbud is actually broken."
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
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

