import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'como-analisar-tela-azul-bsod-dmp-guia',
  title: "Blue Screen (BSOD): How to Read .DMP Files and Discover the Error",
  description: "Learn how to diagnose the 'Blue Screen of Death' using BlueScreenView and WhoCrashed. Understand errors like 'nvlddmkm.sys', 'ntoskrnl.exe', and 'MEMORY_MANAGEMENT'.",
  category: 'windows-errors',
  difficulty: 'Advanced',
  time: '25 min'
};

const title = "Digital Forensics Guide: Diagnosing BSOD";
const description = "The Blue Screen is not the end of the world; it's a message. It creates a 'minidump' file that tells you exactly which driver or hardware caused the problem.";

const keywords = [
    'bluescreenview download portable',
    'whocrashed free edition download',
    'how to open dmp file windows 11',
    'analyze memory.dmp windbg',
    'nvlddmkm.sys blue screen nvidia fix',
    'ntoskrnl.exe bsod ram test',
    'voltris optimizer diagnostics',
    'system_service_exception win32kfull.sys'
];

export const metadata: Metadata = createGuideMetadata('como-analisar-tela-azul-bsod-dmp-guia', title, description, keywords);

export default function BSODGuide() {
    const summaryTable = [
        { label: "Tool 1", value: "BlueScreenView (Fast)" },
        { label: "Tool 2", value: "WhoCrashed (Explanatory)" },
        { label: "Tool 3", value: "WinDbg (Professional)" },
        { label: "File location", value: "C:\\Windows\\Minidump" },
        { label: "Common Cause", value: "Video Drivers / RAM" },
        { label: "Generic Error", value: "NtOsKrnl.exe" }
    ];

    const contentSections = [
        {
            title: "Introduction: What is the Minidump?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          When Windows crashes, it dumps the contents of the RAM onto the disk for analysis.
          <br/>These files are located in <code>C:\\Windows\\Minidump\\</code>.
          <br/>You cannot open them with Notepad. You need specific tools.
        </p>
      `
        },
        {
            title: "Chapter 1: BlueScreenView (NirSoft)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Fast Analysis</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Download <strong>BlueScreenView</strong> (from the NirSoft website). It is portable.
                    2. Open the program. It lists all recent crashes.
                    3. Click on the most recent crash (by date).
                    4. Look at the <strong>"Caused By Driver"</strong> column.
                    <br/>- If it's <code>nvlddmkm.sys</code> -> Nvidia graphics card.
                    <br/>- If it's <code>atikmdag.sys</code> -> AMD graphics card.
                    <br/>- If it's <code>rtwlanu.sys</code> -> Realtek Wi-Fi driver.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: WhoCrashed (For Beginners)",
            content: `
        <p class="mb-4 text-gray-300">
            BlueScreenView is technical. <strong>WhoCrashed</strong> (Resplendence) translates it into simple English.
            <br/>1. Install it and click "Analyze."
            <br/>2. It will generate a report: "This was probably caused by the following module: ntoskrnl.exe... Bugcheck code: 0x3B."
            <br/>3. It suggests generic solutions (Update drivers, check temperature).
        </p>
      `
        },
        {
            title: "Chapter 3: The Villain 'ntoskrnl.exe'",
            content: `
        <p class="mb-4 text-gray-300">
            Often, the culprit appears as <code>ntoskrnl.exe</code> (Windows Kernel).
            <br/>This does NOT mean Windows itself is bad. It means "something" caused the Kernel to fail, but the logger didn't catch the specific name.
            <br/>Usually, ntoskrnl is related to:
            <br/>- Unstable CPU/RAM overclocking.
            <br/>- Faulty RAM memory.
            <br/>- Power supply fluctuations (Low Vcore).
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: WinDbg (Professional Analysis)",
            content: `
        <p class="mb-4 text-gray-300">
            If the previous steps failed, download <strong>WinDbg Preview</strong> from the Microsoft Store.
            <br/>1. File > Open Dump File.
            <br/>2. Type <code>!analyze -v</code> in the console.
            <br/>It shows the STACK TEXT (execution stack). You can see exactly what was running just before the crash.
            <br/>Example: You see "Discord.exe" calling "AudioDevProps.dll" and then CRASH. Thus, the audio driver conflicted with Discord.
        </p>
      `
        },
        {
            title: "Chapter 5: Common Bug Check Codes",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>0x0000001A (MEMORY_MANAGEMENT):</strong> Problems with RAM. Run MemTest86 or remove a memory stick.
            - <strong>0x00000116 (VIDEO_TDR_ERROR):</strong> The GPU stopped responding. Usually caused by an aggressive overclock or a corrupted driver. Use DDU.
            - <strong>0x000000EF (CRITICAL_PROCESS_DIED):</strong> Windows lost access to the disk (SSD disconnected/died).
        </p>
      `
        },
        {
            title: "Chapter 6: Configuring Windows to Create Dumps",
            content: `
        <p class="mb-4 text-gray-300">
            Sometimes the Minidump folder is empty.
            <br/>Go to Advanced System Settings > Startup and Recovery.
            <br/>Under "Write debugging information," select <strong>"Small memory dump (256 KB)."</strong>
            <br/>If it's set to "None," Windows won't save the file and you'll never know the cause.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 7: Driver Verifier (Dangerous)",
            content: `
            <p class="mb-4 text-gray-300">
                A Windows tool that stresses all drivers to force a blue screen and reveal the culprit.
                <br/><strong>Caution:</strong> It can put your PC in a boot loop. Only do this if you know how to enter Safe Mode to disable it.
                <br/>Command: <code>verifier</code>.
            </p>
            `
        },
        {
             title: "Chapter 8: WHEA_UNCORRECTABLE_ERROR",
            content: `
            <p class="mb-4 text-gray-300">
                This is a physical HARDWARE error. Not software.
                <br/>It means the CPU detected an internal voltage or cache error. Remove any Overclock/Undervolt immediately.
            </p>
            `
        },
        {
             title: "Chapter 9: NVMe SSD",
            content: `
            <p class="mb-4 text-gray-300">
                Cheap SSDs from certain brands (Kingspec, Goldenfir) often cause random blue screens when they overheat or fail to read. If the code is 0x7A (KERNEL_DATA_INPAGE_ERROR), try changing the SATA cable or the SSD.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does formatting solve it?",
            answer: "If it's a driver error (software), YES. If it's a hardware error (fried RAM, weak power supply), NO. The error will keep happening even on a fresh Windows install."
        },
        {
            question: "Blue screen while gaming?",
            answer: "Usually overheating or the power supply not handling the GPU load. Monitor your temperatures."
        }
    ];

    const externalReferences = [
        { name: "BlueScreenView Download", url: "https://www.nirsoft.net/utils/blue_screen_view.html" },
        { name: "Microsoft Bug Check Code Reference", url: "https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/bug-check-code-reference2" }
    ];

    const relatedGuides = [
        {
            href: "/guias/ddu-limpeza-drivers-video-guia",
            title: "GPU Drivers",
            description: "Fix nvlddmkm.sys."
        },
        {
            href: "/guias/como-resolver-tela-azul",
            title: "General Repair",
            description: "SFC/Scannow."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="25 min"
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
