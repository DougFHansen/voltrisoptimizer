import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'controle-ps4-ps5-overclock-ds4windows',
    title: "DualSense on PC (2026): DS4Windows and 1000Hz Overclocking",
    description: "Use your PS4/PS5 controller on PC with full functionality. Comprehensive guide for DS4Windows, input lag reduction (Overclocking), and high-precision gyro configuration.",
    category: 'hardware',
    difficulty: 'Intermediate',
    time: '15 min'
};

const title = "DualSense Overclocking: Achieving Minimal Input Lag";
const description = "The PS5 DualSense controller has an inherent ~4ms delay over Bluetooth on PC. With overclocking, we can slash this to a consistent 1ms. Learn how to emulate an Xbox controller for universal compatibility.";

const keywords = [
    'ds4windows hidhide setup guide 2026',
    'overclock dualsense 1000hz 8000hz tutorial',
    'input lag ps5 controller pc bluetooth fix',
    'adaptive triggers pc compatible games list',
    'touchpad mouse ds4windows configuration',
    'dualsensex vs ds4windows ryochan7 comparison',
    'voltris optimizer controller latency tweaks',
    'gyro aiming pc tutorial'
];

export const metadata: Metadata = createGuideMetadata('controle-ps4-ps5-overclock-ds4windows', title, description, keywords);

export default function ControllerGuide() {
    const summaryTable = [
        { label: "Software", value: "DS4Windows (Ryochan7 Build)" },
        { label: "Driver", value: "ViGEmBus (Required)" },
        { label: "Isolation", value: "HidHide (Mandatory)" },
        { label: "Polling Rate", value: "1000Hz (1ms Response)" },
        { label: "Emulation", value: "Xbox 360 / DualShock 4" },
        { label: "Connection", value: "USB-C / Bluetooth 5.0+" },
        { label: "Triggers", value: "Adaptive Support (via Mods/DSX)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Solving the 'Double Input' Bug",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          When you connect a DualSense to a Windows PC, the OS recognizes it as a generic \"Wireless Controller.\" When DS4Windows is active, it creates a virtual \"Xbox 360 Controller.\" Many games will detect BOTH simultaneously, causing \"double inputs\" or conflicting button prompts. <strong>HidHide</strong> is the essential tool to solve this.
        </p>
      `
        },
        {
            title: "Chapter 1: Clean Installation Procedure",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Prerequisites</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Download <strong>DS4Windows (the Ryochan7 build)</strong>.
                    <br/>2. Install the .NET Runtime 6 or higher.
                    <br/>3. Install the <strong>ViGEmBus</strong> driver (Virtual Gamepad Emulation Bus).
                    <br/>4. Install <strong>HidHide</strong> (to mask the physical controller from games).
                    <br/>Restart your PC after installing these drivers.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Overclocking to 1ms Latency",
            content: `
        <p class="mb-4 text-gray-300">
            Within your DS4Windows profile:
            <br/>Go to the \"Other\" tab > BT Poll Rate.
            <br/>Change this to <strong>1000 Hz (1ms)</strong>.
            <br/>For wired play, utilize the utility <strong>\"hidusbf\"</strong> to force the polling rate on the specific USB port.
            <br/>The impact: Moves from 4ms of jittery delay to a locked 1ms response. Critical for high-level Rocket League and FPS titles.
        </p>
      `
        },
        {
            title: "Chapter 3: HidHide (Eliminating Ghost Inputs)",
            content: `
        <p class="mb-4 text-gray-300">
            Launch the HidHide Configuration Client.
            <br/>Under the \"Devices\" tab:
            <br/>1. Check the box for your \"Sony Interactive Entertainment Wireless Controller.\"
            <br/>2. Check \"Enable Device Hiding\" at the bottom of the window.
            <br/>3. Switch to the \"Applications\" tab and add <code>DS4Windows.exe</code> to the whitelist.
            <br/>Now, only DS4Windows can interact with the physical hardware. Games will only see the clean, emulated Xbox controller.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Using the Touchpad as a Mouse",
            content: `
        <p class="mb-4 text-gray-300">
            Extremely useful for navigating your PC from the couch.
            <br/>Edit your Profile > Touchpad settings.
            <br/>Output Mode: <strong>Mouse</strong>.
            <br/>Swiping on the touch area will now move your system cursor, while clicking acts as a standard left-click.
        </p>
      `
        },
        {
            title: "Chapter 5: Gyroscope and Gyro Aiming",
            content: `
        <p class="mb-4 text-gray-300">
            For Nintendo emulators (Cemu, Yuzu):
            <br/>Enable the UDP Server in DS4Windows settings (default port 26760).
            <br/>Point your emulator's input settings to this IP/Port.
            <br/>For native PC games (e.g., CoD): Map the Gyro to \"Mouse\" in DS4Windows. Pivoting the controller will now move your aim. It requires practice but can rival the precision of a physical mouse.
        </p>
      `
        },
        {
            title: "Chapter 6: Adaptive Triggers (DualSenseX)",
            content: `
        <p class="mb-4 text-gray-300">
            While DS4Windows has basic support, for advanced haptics, we recommend the <strong>DualSenseX (DSX)</strong> app on Steam.
            <br/>It allows for deep customization of trigger resistance, battery-based LED colors, and \"Audio Haptics\" mode, which forces trigger feedback in games that lack native support.
        </p>
      `
        },
        {
            title: "Chapter 7: Steam Input Conflicts",
            content: `
        <p class="mb-4 text-gray-300">
            Steam has its own robust controller driver layer. 
            <br/>If you are using DS4Windows, <strong>DISABLE</strong> \"PlayStation Configuration Support\" in Steam settings (Controller section). Let Steam interact with the emulated Xbox controller generated by DS4Windows.
            <br/>Failing to do this results in three competing drivers fighting for control of the hardware.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Macro Mapping",
            content: `
            <p class="mb-4 text-gray-300">
                You can create custom macros (e.g., rapid-fire button presses) and assign them to any button or paddle. 
                <br/>This is particularly helpful for fatiguing Quick Time Events (QTEs) in single-player adventures.
            </p>
            `
        },
        {
            title: "Chapter 9: Deadzone and Stick Drift",
            content: `
            <p class="mb-4 text-gray-300">
                Is your crosshair slowly drifting to one side?
                <br/>Increase the \"Deadzone\" value in your profile settings until the unintended movement stops. Typical values range from 0.05 to 0.10.
            </p>
            `
        },
        {
            title: "Chapter 10: Xbox Controllers on PC",
            content: `
            <p class="mb-4 text-gray-300">
                Official Xbox controllers work natively and do not require DS4Windows. 
                <br/>However, we recommend the \"Xbox Accessories\" app from the MS Store to update your firmware and remap the back paddles on Elite series controllers.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "My Bluetooth keeps disconnecting?",
            answer: "Integrated motherboard Bluetooth is often weak and prone to interference from 2.4GHz Wi-Fi. We recommend a dedicated Bluetooth 5.0+ adapter (such as the TP-Link UB500) for stable 1ms connectivity."
        },
        {
            question: "Why does the battery drain so quickly?",
            answer: "The DualSense RGB Lightbar accounts for significant power draw. Set the brightness to minimum or turn it off entirely within DS4Windows to maximize playtime between charges."
        }
    ];

    const externalReferences = [
        { name: "DS4Windows (Ryochan7) Official GitHub", url: "https://github.com/Ryochan7/DS4Windows/releases" },
        { name: "HidHide Driver (Isolation Tool)", url: "https://github.com/ViGEm/HidHide" }
    ];

    const relatedGuides = [
        {
            href: "/guias/cemu-emulador-wii-u-zelda-botw-4k-60fps",
            title: "Cemu Hub",
            description: "Implementing Gyro controls for Breath of the Wild."
        },
        {
            href: "/guias/yuzu-ryujinx-otimizacao-zelda-mario-60fps-guia",
            title: "Switch Tuning",
            description: "Setting up motion sensors for modern Nintendo titles."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Intermediate"
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
