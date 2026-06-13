import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'como-usar-ddu-driver-uninstaller',
    title: "How to Use DDU (Display Driver Uninstaller): Safe Guide (2026)",
    description: "Corrupted video drivers cause blue screens and FPS drops. Learn how to use DDU to completely remove Nvidia/AMD/Intel drivers and perform a clean installation.",
    category: 'software',
    difficulty: 'Advanced',
    time: '20 min'
};

const title = "DDU Tutorial: How to Reinstall Video Drivers from Scratch (Nvidia/AMD/Intel)";
const description = "Simply clicking 'Update driver' doesn't remove old files. DDU is the only way to ensure your PC is 100% free of driver conflicts.";

const keywords = [
    'how to use ddu display driver uninstaller',
    'remove video driver completely',
    'clean installation nvidia driver ddu',
    'black screen after installing amd driver',
    'enter safe mode windows 11 ddu',
    'ddu safe mode tutorial',
    'clean intel arc driver',
    'nvlddmkm.sys error fix ddu'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('como-usar-ddu-driver-uninstaller', title, description, keywords, locale);
}

export default function DDUGuide() {
    const summaryTable = [
        { label: "Tool", value: "DDU (Wagnardsoft)" },
        { label: "Mandatory Mode", value: "Safe Mode" },
        { label: "Connection", value: "Turn Off Internet (Crucial)" },
        { label: "Usage", value: "GPU Swap or Serious Bugs" },
        { label: "Time", value: "10-15 Minutes" },
        { label: "Risk", value: "Low (If using Restore Point)" }
    ];

    const contentSections = [
        {
            title: "When to use DDU?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          You don't need to use DDU every time a driver update comes out. Use it only in three situations: 1) You've swapped video cards (e.g., switched from AMD to Nvidia), 2) The current driver is crashing/giving blue screens, or 3) Games are performing well below expectations.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🧹</span> Voltris Driver Clean Mode
            </h4>
            <p class="text-gray-300 mb-4">
                Entering Safe Mode is tedious. <strong>Voltris Optimizer</strong> has a "Driver Clean" mode that restarts the PC in safe mode, performs the cleanup, and temporarily blocks Windows Update to prevent it from installing generic drivers before you can install the official one.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Easy Cleaning with Voltris
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "Step 0: Preparation (Do not skip!)",
            content: `
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
            <li>Download <strong>DDU</strong> from the official site (Wagnardsoft).</li>
            <li>Download the <strong>LATEST</strong> video driver for your card (Nvidia/AMD/Intel site). Leave the installer on the Desktop.</li>
            <li><strong>DISCONNECT THE INTERNET (Wi-Fi or Cable).</strong> This is vital. If you restart with the internet on, Windows Update will download and install a generic driver in seconds, ruining the entire process.</li>
        </ol>
      `
        },
        {
            title: "Step 1: Entering Safe Mode",
            content: `
        <p class="mb-4 text-gray-300">
            DDU works best with no other programs running.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Hold the <strong>SHIFT</strong> key on your keyboard.</li>
            <li>While holding Shift, go to Start Menu > Power > Restart.</li>
            <li>The PC will open a blue options screen.</li>
            <li>Navigate to: <strong>Troubleshoot > Advanced options > Startup Settings > Restart</strong>.</li>
            <li>The PC will restart again. Press the <strong>4</strong> or <strong>F4</strong> key (Enable Safe Mode).</li>
            <li>The screen will have a low resolution and a black background. This is normal.</li>
        </ul>
      `
        },
        {
            title: "Step 2: Using DDU",
            content: `
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>Open DDU.exe.</li>
            <li>On the right side, select "GPU".</li>
            <li>Select the brand (NVIDIA, AMD, or INTEL).</li>
            <li>Click the <strong>"Clean and Restart"</strong> button.</li>
            <li>The program will take about 2 minutes removing registry keys, files, and folders.</li>
            <li>The PC will automatically restart in normal mode.</li>
        </ol>
      `
        },
        {
            title: "Step 3: Clean Installation",
            content: `
        <p class="mb-4 text-gray-300">
            Now that you are in normal Windows (still without internet and with the screen a bit pixelated):
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
            <li>Run the driver installer you downloaded in Step 0.</li>
            <li>During installation (Nvidia), choose "Custom" and check <strong>"Perform a clean installation"</strong> (just to be safe).</li>
            <li>After installing, restart the PC one more time.</li>
            <li>Now you can reconnect the internet.</li>
        </ol>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Resolving HDMI Audio Issues",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-yellow-400 font-bold mb-4 text-xl">Monitor with no sound?</h4>
                <p class="text-gray-300 mb-4">
                    Sometimes GPU audio drivers (Nvidia High Definition Audio) conflict with the motherboard's Realtek audio.
                </p>
                <p class="text-gray-300 text-sm">
                    In DDU, instead of "GPU," select "Audio" and remove Nvidia/AMD audio drivers if you don't use the monitor/TV sound. This forces Windows to use the default sound, resolving conflicts and static.
                </p>
            </div>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "NVCleanInstall (Alternative for Experts)",
            content: `
            <p class="mb-4 text-gray-300">
                If you have an Nvidia GPU, there's a tool called <strong>NVCleanInstall</strong>. It allows you to install the driver <em>without</em> Telemetry, without GeForce Experience (if you don't use it), and without useless 3D Vision drivers. It's a "Debloat" for the video driver, making it lighter and with fewer background processes.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does DDU delete my games?",
            answer: "No! It only deletes driver (system) files. Your games, saves, and personal settings remain intact. However, your Nvidia Panel settings (Colors, Custom Resolution) will be reset."
        },
        {
            question: "Do I need to do this for every update?",
            answer: "No. Doing this every month is a waste of time. Only do it if you have problems or swap cards. For normal updates, the 'Express' installation from GeForce Experience is enough."
        },
        {
            question: "Does it work for Chipset drivers?",
            answer: "DDU focuses on GPU and Audio. For Chipsets (AMD Ryzen/Intel), it's best to uninstall through Control Panel > Programs and Features and install the new one over it."
        }
    ];

    const externalReferences = [
        { name: "Wagnardsoft (Official DDU Site)", url: "https://www.wagnardsoft.com/" },
        { name: "NVCleanInstall", url: "https://www.techpowerup.com/download/techpowerup-nvcleanstall/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/instalacao-limpa-drivers-nvidia-amd",
            title: "Nvidia/AMD Drivers",
            description: "Control Panel configuration tips."
        },
        {
            href: "/guides/como-resolver-tela-azul",
            title: "Blue Screen",
            description: "How to diagnose if the driver was to blame."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Optimize System",
            description: "Improve overall Windows performance."
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
            showVoltrisOptimizerCTA={true}
            externalReferences={externalReferences}
        />
    );
}
