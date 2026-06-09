import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'ddu-limpeza-drivers-video-guia',
    title: "DDU (Display Driver Uninstaller): How to Use and Clean Drivers",
    description: "Corrupted drivers cause blue screens and lag. Learn how to use DDU in Safe Mode for a clean Nvidia/AMD installation.",
    category: 'hardware',
    difficulty: 'Advanced',
    time: '30 min'
};

const title = "DDU Guide (2026): Clean GPU Installation";
const description = "Did you switch graphics cards? Is your game crashing for no reason? Old driver remnants might be to blame. DDU resolves 90% of GPU issues.";

const keywords = [
    'how to use ddu display driver uninstaller safe mode',
    'problematic video driver flickering screen',
    'switching from nvidia to amd what to do',
    'gpu driver full cleanup',
    'black screen driver install fix',
    'ddu safe mode tutorial windows 11',
    'disable windows update drivers ddu',
    'voltris optimizer clean install',
    'nvcleanstall vs ddu'
];

export const metadata: Metadata = createGuideMetadata('ddu-limpeza-drivers-video-guia', title, description, keywords);

export default function DDUGuide() {
    const summaryTable = [
        { label: "Tool", value: "DDU (Wagnardsoft)" },
        { label: "Mode", value: "Safe Mode (Required)" },
        { label: "Internet", value: "Disconnected" },
        { label: "Option", value: "Clean and Restart" },
        { label: "Prevent", value: "Windows Update Off" },
        { label: "Backup", value: "Restore Point" }
    ];

    const contentSections = [
        {
            title: "Introduction: Why uninstalling isn't enough?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          When you uninstall through the Control Panel, registry entries and old DLLs are left behind. If you switch from Nvidia to AMD (or vice versa) without cleaning, conflicts are almost certain.
        </p>
      `
        },
        {
            title: "Chapter 1: Preparation (Before starting)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Checklist</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Download <strong>DDU</strong> (Official Wagnardsoft site).
                    2. Download the new driver for your card (Nvidia/AMD) and save it to your Desktop.
                    3. <strong>Disconnect your network cable/Wi-Fi.</strong> This is crucial. If Windows has internet access, it will attempt to automatically download a generic driver as soon as you restart, ruining the clean install.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Entering Safe Mode",
            content: `
        <p class="mb-4 text-gray-300">
            DDU works best without interference.
            <br/>Hold the <strong>SHIFT</strong> key and click Restart in the Start Menu.
            <br/>Go to Troubleshoot > Advanced Options > Startup Settings > Restart.
            <br/>Press <strong>4</strong> to enable Safe Mode.
        </p>
      `
        },
        {
            title: "Chapter 3: Running the Cleanup",
            content: `
        <p class="mb-4 text-gray-300">
            Once in Safe Mode:
            <br/>1. Open DDU.
            <br/>2. Select device type: <strong>GPU</strong>.
            <br/>3. Select the brand (Nvidia/AMD/Intel).
            <br/>4. Click <strong>"Clean and restart"</strong> (Highly recommended).
            <br/>The screen will flicker, the tool will work for about 2 minutes, and then the PC will restart normally.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: DDU Options",
            content: `
        <p class="mb-4 text-gray-300">
            In the DDU options, check:
            <br/>- <strong>"Prevent downloads of drivers from 'Windows Update'"</strong>. This stops Windows from ruining everything by installing old drivers from 2023.
            <br/>- Remove C:Nvidia/AMD folders (Deletes old installers that take up GBs).
        </p>
      `
        },
        {
            title: "Chapter 5: Installing the New Driver",
            content: `
        <p class="mb-4 text-gray-300">
            Back in normal Windows (still without internet):
            <br/>The resolution will be low (640x480 or 800x600). This is normal since you have no driver installed.
            <br/>Run the driver installer you downloaded in step 1.
            <br/>Choose "Express Installation" or "Custom" (if you want to use NVCleanstall).
            <br/>Only reconnect to the internet AFTER the installation is complete.
        </p>
      `
        },
        {
            title: "Chapter 6: Common Errors",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Infinite Black Screen:</strong> This happens rarely. If it doesn't return after 10 minutes, force a restart. DDU usually creates a Restore Point before starting for safety.
            - <strong>Mouse stuttering/stuck:</strong> In Safe Mode, USB drivers for gaming mice might not load. Keep a simple USB mouse nearby if needed.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 7: NVCleanstall (Expert)",
            content: `
            <p class="mb-4 text-gray-300">
                If you have an Nvidia card, after using DDU, consider using <strong>NVCleanstall</strong> instead of the official installer.
                <br/>It allows you to install the driver WITHOUT Telemetry, WITHOUT GeForce Experience, and WITHOUT useless 3D glasses drivers. The driver remains lighter and more responsive.
            </p>
            `
        },
        {
            title: "Chapter 8: Audio Cleanup (Realtek)",
            content: `
            <p class="mb-4 text-gray-300">
                DDU also cleans up Audio drivers (Realtek/SoundBlaster).
                <br/>Useful if your microphone stopped working or if the sound is crackling after a Windows update. Select "Audio" from the drop-down menu.
            </p>
            `
        },
        {
            title: "Chapter 9: Cleanup Frequency",
            content: `
            <p class="mb-4 text-gray-300">
                Do not use DDU for every driver update (e.g., every week). It's unnecessary and stresses the registry.
                <br/>Use DDU only when:
                <br/>1. Switching graphics cards.
                <br/>2. Experiencing serious problems (crashes, blue screens).
                <br/>3. Once a year for a general cleanup.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can I use DDU without Safe Mode?",
            answer: "You can, but it is not recommended. Files in use by Windows will not be deleted correctly, and the cleanup will be partial."
        },
        {
            question: "I solved the problem but lost my game profiles.",
            answer: "Yes, DDU deletes all Nvidia/AMD Panel settings. You will have to reconfigure V-Sync, Latency Mode, etc., from scratch."
        },
        {
            question: "PIN / Password doesn't work in Safe Mode?",
            answer: "If you use a Microsoft account, Safe Mode sometimes asks for your email PASSWORD, not the numeric PIN. Know your password before entering."
        }
    ];

    const externalReferences = [
        { name: "Wagnardsoft (DDU Official)", url: "https://www.wagnardsoft.com/" },
        { name: "NVCleanstall Guide", url: "https://www.techpowerup.com/download/techpowerup-nvcleanstall/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia Config",
            description: "What to do post-DDU."
        },
        {
            href: "/guides/amd-adrenalin-configuracao-competitiva",
            title: "AMD Config",
            description: "What to do post-DDU."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
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
