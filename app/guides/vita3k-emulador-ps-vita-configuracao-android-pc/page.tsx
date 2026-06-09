import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'vita3k-emulador-ps-vita-configuracao-android-pc',
    title: "Vita3K (2026): PS Vita Emulator Guide (PC and Android)",
    description: "The first functional PS Vita emulator. Learn how to install Firmware, decrypt games (Vpk/Zip), and configure Persona 4 Golden and Uncharted.",
    category: 'emulation',
    difficulty: 'Advanced',
    time: '20 min'
};

const title = "Vita3K: PS Vita on PC and Mobile";
const description = "Vita emulation has exploded recently. Vita3K already runs many commercial games perfectly, including on Android. See how to configure it.";

const keywords = [
    'vita3k android best settings snapdragon',
    'how to install pkg and workbin vita3k',
    'persona 4 golden vita3k crash fix',
    'uncharted golden abyss touch controls emulated',
    'vita3k firmware font package download',
    'increase ps vita emulator resolution',
    'voltris optimizer vita',
    'maiar dump zrif'
];

export const metadata: Metadata = createGuideMetadata('vita3k-emulador-ps-vita-configuracao-android-pc', title, description, keywords);

export default function VitaGuide() {
    const summaryTable = [
        { label: "Renderer", value: "Vulkan" },
        { label: "Backend", value: "OpenGL (Test if Vulkan fails)" },
        { label: "Upscaling", value: "2x (PC) / 1x (Android)" },
        { label: "Memory Mapping", value: "Native (If possible)" },
        { label: "Installation", value: ".PKG or .ZIP (NoNpDrm)" },
        { label: "Touch", value: "Overlay On" }
    ];

    const contentSections = [
        {
            title: "Introduction: A Young Emulator",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Vita3K is still "Experimental." Many games may have graphical or audio glitches. But the compatibility list grows every day.
        </p>
      `
        },
        {
            title: "Chapter 1: Firmware and Font Installation",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Mandatory</h4>
                <p class="text-gray-400 text-xs text-justify">
                    When opening for the first time, it asks for:
                    <br/>1. <strong>Firmware (PS Vita Update):</strong> Download the official <code>PSVUPDAT.PUP</code> file from Sony.
                    <br/>2. <strong>Font Package:</strong> Download the official <code>PSP2UPDAT.PUP</code> (Fonts) file as well.
                    <br/>Install both via File > Install Firmware menu. Without fonts, game texts become invisible (boxes).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Installing Games (.pkg, .zip, .vpk)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>.vpk:</strong> Homebrews. Installs easily.
            - <strong>.pkg:</strong> PSN games. You NEED the corresponding <code>work.bin</code> file or <code>zRIF</code> key to decrypt the license.
            - <strong>NoNpDrm (Folder/Zip):</strong> The most common dump format. Just select "Install > Zip" or point to the folder.
        </p>
      `
        },
        {
            title: "Chapter 3: Graphics and Resolution",
            content: `
        <p class="mb-4 text-gray-300">
            Configuration > Settings > GPU.
            <br/>Backend: <strong>Vulkan</strong> is mandatory for Android and AMD GPUs. Nvidia can use OpenGL if desired.
            <br/>Internal Resolution: 2x (1080p). Vita games look beautiful in HD.
            <br/>Anisotropic Filtering: 16x.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Rear Touchpad",
            content: `
        <p class="mb-4 text-gray-300">
            The Vita had a touchpad on its back. Games like Uncharted use this for climbing ropes.
            <br/>In the emulator, you can map controller buttons (e.g., L3/R3) to simulate touches on the rear panel.
            <br/>Or use the Mouse (on PC) and touch Overlay (on Android).
        </p>
      `
        },
        {
            title: "Chapter 5: Persona 4 Golden",
            content: `
        <p class="mb-4 text-gray-300">
            The most popular game. Runs 100%.
            <br/>If you have crashes in cutscenes (videos), install additional media codecs (sometimes the emulator asks to download ffmpeg on Linux/Android).
        </p>
      `
        },
        {
            title: "Chapter 6: Memory Mapping (Android)",
            content: `
        <p class="mb-4 text-gray-300">
            On Android, the "Memory Mapping" option can triple performance if your phone supports it.
            <br/>If the game closes when opening (Crash), switch to the "Double Buffer" method or similar. It varies for each driver (Turnip/Adreno).
        </p>
      `
        },
        {
            title: "Chapter 7: Custom Drivers (Turnip)",
            content: `
        <p class="mb-4 text-gray-300">
            For Android users with Snapdragon:
            <br/>Install <strong>Turnip</strong> (Mesa) drivers in the Vita3K settings. They fix many graphical bugs that the standard Samsung/Xiaomi drivers have.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Save Data",
            content: `
            <p class="mb-4 text-gray-300">
                Saves are located in <code>ux0:/user/00/savedata/</code>.
                <br/>The Vita3K file structure mimics the real Vita memory card (ux0).
            </p>
            `
        },
        {
            title: "Chapter 9: Multiplayer",
            content: `
            <p class="mb-4 text-gray-300">
                Still very experimental. Don't count on playing Freedom Wars online for now.
            </p>
            `
        },
        {
            title: "Chapter 10: Homebrews",
            content: `
            <p class="mb-4 text-gray-300">
                Vita3K runs excellent homebrew ports, such as the GTA San Andreas and Max Payne ports for Vita.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does it run God of War Collection?",
            answer: "Yes, but it requires a strong CPU as it's an emulator running an emulator (the game is a PS2 to Vita port)."
        },
        {
            question: "Where do I download games?",
            answer: "You must dump your own Vita using NoNpDrm. We do not provide links."
        }
    ];

    const externalReferences = [
        { name: "Vita3K Compatibility List", url: "https://vita3k.org/compatibility.html" },
        { name: "Sony Firmware Download", url: "https://www.playstation.com/en-us/support/hardware/psvita/system-software/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/rpcs3-otimizacao-configuracao-60fps-patches-guia",
            title: "RPCS3",
            description: "PS3 and Vita are siblings."
        },
        {
            href: "/guides/retroarch-guia-completo-cores-shaders-crt",
            title: "RetroArch",
            description: "For PSP (PPSSPP)."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
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

