import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'diagnostico-hardware',
    title: "Hardware Diagnostic: How to Find Out Which PC Part Is Failing (2026)",
    description: "Complete guide with free tools to test RAM, SSD, CPU, GPU, and PSU. Find out which component is causing freezes, blue screens, and instability.",
    category: 'hardware',
    difficulty: 'Intermediate',
    time: '45 min'
};

const title = "Hardware Diagnostic: How to Find Out Which PC Part Is Failing (2026)";
const description = "PC freezing, blue-screening, or not turning on? With the right tools, you can diagnose RAM, SSD, CPU, GPU, and PSU in 30 minutes — without needing a technician. Complete guide with free tools.";
const keywords = [
    'how to perform pc hardware diagnostic 2026',
    'test ram and ssd health tutorial',
    'pc freezing diagnostic tools full guide',
    'how to tell which pc part is failing 2026',
    'cpu and gpu stress test complete tutorial 2026',
    'OCCT furmark cinebench stability test',
    'testmem5 ram error diagnostic',
    'crystaldiskinfo nvme ssd health'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('diagnostico-hardware', title, description, keywords, locale);
}

export default function HardwareDiagnosticGuide() {
    const summaryTable = [
        { label: "RAM Test", value: "TestMem5 (Windows) / MemTest86+ (boot)" },
        { label: "SSD/HDD Test", value: "CrystalDiskInfo (S.M.A.R.T. health)" },
        { label: "CPU Test", value: "Cinebench R23 / OCCT" },
        { label: "GPU Test", value: "FurMark / OCCT GPU" },
        { label: "PSU Test", value: "OCCT Power Supply Test" },
        { label: "Diagnostic Time", value: "30 min to 2 hours (depends on component)" },
    ];

    const keyPoints = [
        "How to identify which specific part is causing the problem",
        "Free and reliable tools for each component",
        "How to interpret stress test results",
        "Warning signs in CrystalDiskInfo for dying SSDs",
        "How to test the power supply without a multimeter",
        "When a blue screen is the RAM's fault vs. the driver's"
    ];

    const contentSections = [
        {
            title: "How to Approach Diagnosis — Methodology",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Efficient hardware diagnostics follow a basic rule: <strong>isolate one component at a time</strong>. Trying to test everything at once only creates confusion. The correct methodology is:
        </p>
        <div class="space-y-3 mb-6">
            <div class="flex items-start gap-4 bg-[#0A0A0F] border border-white/5 p-4 rounded-xl">
                <span class="text-2xl font-bold text-[#31A8FF] w-8 shrink-0">1.</span>
                <div>
                    <strong class="text-white">Observe the Symptoms</strong>
                    <p class="text-gray-400 text-sm mt-1">Random blue screen = likely RAM or driver. PC shuts down under load = likely overheating or weak power supply. PC doesn't turn on = power supply, motherboard, or RAM.</p>
                </div>
            </div>
            <div class="flex items-start gap-4 bg-[#0A0A0F] border border-white/5 p-4 rounded-xl">
                <span class="text-2xl font-bold text-[#31A8FF] w-8 shrink-0">2.</span>
                <div>
                    <strong class="text-white">Start With the Easiest</strong>
                    <p class="text-gray-400 text-sm mt-1">Always test software before hardware. A corrupted driver causes the same symptoms as bad RAM. Clean drivers → test RAM → test SSD → test CPU/GPU → test PSU.</p>
                </div>
            </div>
            <div class="flex items-start gap-4 bg-[#0A0A0F] border border-white/5 p-4 rounded-xl">
                <span class="text-2xl font-bold text-[#31A8FF] w-8 shrink-0">3.</span>
                <div>
                    <strong class="text-white">Document Everything</strong>
                    <p class="text-gray-400 text-sm mt-1">Take screenshots of test results. If you go to a repair shop later, this saves them hours of work (and you money).</p>
                </div>
            </div>
        </div>
        <div class="bg-yellow-900/10 border-l-4 border-yellow-500 p-5 rounded-r-lg">
            <h4 class="text-yellow-400 font-bold mb-2">⚠️ Before Anything: Check Temperatures</h4>
            <p class="text-gray-300 text-sm">Download <strong>HWiNFO64</strong> and monitor temperatures while reproducing the problem. A PC that shuts down at 95°C+ on the CPU or GPU doesn't need complex diagnostics — it needs thermal paste replacement or better cooling. Check our <a href="/guides/monitorar-temperatura-pc" class="text-[#31A8FF] hover:underline">temperature monitoring guide</a>.</p>
        </div>
      `
        },
        {
            title: "RAM Test — Suspect Number 1",
            content: `
        <p class="mb-4 text-gray-300 leading-relaxed">
          RAM is responsible for more than <strong>40% of random blue screen cases</strong> in apparently healthy computers. The problem is that RAM errors are hard to reproduce — they appear at random times.
        </p>
        <h4 class="text-white font-bold mb-4 mt-6">🛠️ Tool #1: TestMem5 (Windows, 30 minutes)</h4>
        <p class="mb-3 text-gray-300 text-sm">The best RAM test that runs within Windows itself.</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 mb-6">
            <li>Download <strong>TestMem5</strong> (search Google for "TestMem5 anta777 download").</li>
            <li>Also download the <strong>extreme4.cfg</strong> profile by author anta777.</li>
            <li>Place the .cfg file in the same folder as tm5.exe.</li>
            <li>Run tm5.exe as Administrator.</li>
            <li>Let it run for at least <strong>2 complete cycles</strong> (1-2 hours).</li>
            <li>Any red error = bad RAM.</li>
        </ol>
        <h4 class="text-white font-bold mb-4">🛠️ Tool #2: MemTest86+ (Before Boot)</h4>
        <p class="mb-3 text-gray-300 text-sm">More comprehensive as it runs outside Windows and tests pure RAM.</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4 mb-6">
            <li>Download MemTest86+ at memtest.org.</li>
            <li>Use Rufus to create a bootable USB drive.</li>
            <li>Restart the PC and boot from the USB drive.</li>
            <li>Let it run for at least 8 passes (2-4 hours).</li>
            <li>Zero errors = healthy RAM.</li>
        </ol>
        <div class="bg-green-900/10 border-l-4 border-green-500 p-5 rounded-r-lg">
            <h4 class="text-green-400 font-bold mb-2">💡 Tip: XMP/EXPO Profile</h4>
            <p class="text-gray-300 text-sm">If you have XMP/EXPO enabled in the BIOS and the RAM fails testing, try <strong>disabling XMP</strong> and testing at base frequency (2133/3200 MHz). Unstable RAM at XMP doesn't necessarily mean defective RAM — it could be that the processor's IMC doesn't support that specific frequency.</p>
        </div>
      `
        },
        {
            title: "SSD and HDD Test — CrystalDiskInfo",
            content: `
        <p class="mb-4 text-gray-300 leading-relaxed">
          Failing disks cause file corruption, Windows crashes, extreme slowdowns, and in critical cases, the PC might not even boot. S.M.A.R.T. technology (Self-Monitoring, Analysis, and Reporting Technology) allows detecting imminent failures before the disk dies.
        </p>
        <h4 class="text-white font-bold mb-3">How to use CrystalDiskInfo:</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 mb-6">
            <li>Download and install <strong>CrystalDiskInfo</strong> (crystalmark.info — free version).</li>
            <li>Open the program. It will list all system disks.</li>
            <li>Check the <strong>Health Status</strong> at the top of each disk:</li>
        </ol>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <div class="bg-[#0A0A0F] border border-green-500/30 p-4 rounded-xl">
                <span class="text-green-400 font-bold block mb-2">🟢 Good</span>
                <p class="text-gray-400 text-xs">The disk is healthy. Continue using normally but maintain regular backups.</p>
            </div>
            <div class="bg-[#0A0A0F] border border-yellow-500/30 p-4 rounded-xl">
                <span class="text-yellow-400 font-bold block mb-2">🟡 Caution</span>
                <p class="text-gray-400 text-xs">Backup NOW. The disk is deteriorating. Buy a replacement and migrate your data.</p>
            </div>
            <div class="bg-[#0A0A0F] border border-red-500/30 p-4 rounded-xl">
                <span class="text-red-400 font-bold block mb-2">🔴 Bad</span>
                <p class="text-gray-400 text-xs">STOP using the computer. The disk could die at any moment. Immediate emergency backup required.</p>
            </div>
        </div>
        <h4 class="text-white font-bold mb-3">Critical S.M.A.R.T. Attributes to monitor:</h4>
        <div class="bg-[#0A0A0F] border border-white/5 rounded-xl overflow-hidden">
            <table class="w-full text-sm">
                <thead class="bg-white/5">
                    <tr>
                        <th class="text-left p-3 text-slate-400 font-normal">Attribute</th>
                        <th class="text-left p-3 text-slate-400 font-normal">Interpretation</th>
                        <th class="text-left p-3 text-slate-400 font-normal">Alarm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-white/5">
                        <td class="p-3 text-white font-mono">05</td>
                        <td class="p-3 text-gray-300">Reallocated Sectors (replaced bad sectors)</td>
                        <td class="p-3 text-red-400">Any value > 0</td>
                    </tr>
                    <tr class="border-t border-white/5">
                        <td class="p-3 text-white font-mono">C5</td>
                        <td class="p-3 text-gray-300">Current Pending Sectors (sectors waiting for reallocation)</td>
                        <td class="p-3 text-red-400">Any value > 0</td>
                    </tr>
                    <tr class="border-t border-white/5">
                        <td class="p-3 text-white font-mono">C6</td>
                        <td class="p-3 text-gray-300">Uncorrectable Sectors (irrecoverable sectors)</td>
                        <td class="p-3 text-red-400">Any value > 0</td>
                    </tr>
                    <tr class="border-t border-white/5">
                        <td class="p-3 text-white font-mono">E9</td>
                        <td class="p-3 text-gray-300">NAND Endurance (SSD lifespan)</td>
                        <td class="p-3 text-yellow-400">Below 10%</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        },
        {
            title: "CPU and GPU Testing — Stress Test with OCCT",
            content: `
        <p class="mb-4 text-gray-300 leading-relaxed">
          An unstable processor or graphics card might not show errors in normal use, but will crash or shut down during gaming or rendering. <strong>OCCT</strong> is the community's most respected tool for these tests.
        </p>
        <h4 class="text-white font-bold mb-3">Downloading and configuring OCCT:</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4 mb-5">
            <li>Download OCCT at <strong>ocbase.com</strong> (free version is sufficient).</li>
            <li>Install and open the program.</li>
            <li>Before starting any test, ensure the temperature monitor is visible (graph icon on the sidebar).</li>
        </ol>
        <div class="space-y-4 mb-6">
            <div class="bg-[#0A0A0F] border border-[#31A8FF]/20 p-5 rounded-xl">
                <h5 class="text-[#31A8FF] font-bold mb-2">🖥️ CPU Test (Linpack)</h5>
                <p class="text-gray-300 text-sm mb-2">Select "CPU: Linpack" in OCCT. Duration: 15-30 minutes.</p>
                <p class="text-gray-400 text-xs"><strong>Trouble sign:</strong> Temperature above 95°C, PC shuts down or restarts during testing, or OCCT reports a calculation error.</p>
            </div>
            <div class="bg-[#0A0A0F] border border-[#8B31FF]/20 p-5 rounded-xl">
                <h5 class="text-[#8B31FF] font-bold mb-2">🎮 GPU Test (3D)</h5>
                <p class="text-gray-300 text-sm mb-2">Select "GPU: 3D" or use FurMark separately. Duration: 15-20 minutes.</p>
                <p class="text-gray-400 text-xs"><strong>Trouble sign:</strong> Visual artifacts (random colored pixels), driver crashing ("Display driver stopped responding"), or PC shutting down.</p>
            </div>
            <div class="bg-[#0A0A0F] border border-[#FF4B6B]/20 p-5 rounded-xl">
                <h5 class="text-[#FF4B6B] font-bold mb-2">⚡ Power Supply Test</h5>
                <p class="text-gray-300 text-sm mb-2">Select "Power Supply" in OCCT. This will stress CPU and GPU simultaneously. Duration: 15-30 min.</p>
                <p class="text-gray-400 text-xs"><strong>Trouble sign:</strong> PC shuts down (PSU can't handle peak load), restarts, or OCCT detects a voltage drop on 12V/5V rails.</p>
            </div>
        </div>
        <div class="bg-yellow-900/10 border-l-4 border-yellow-500 p-5 rounded-r-lg">
            <p class="text-gray-300 text-sm"><strong class="text-yellow-400">Important Tip:</strong> If the PC shuts down under the Power Supply test but handles CPU and GPU separately, the problem is almost certainly the power supply being insufficient for the configuration. Check if the PSU has adequate wattage with the <a href="https://www.bequiet.com/en/psucalculator" target="_blank" rel="noopener noreferrer" class="text-[#31A8FF] hover:underline">be quiet! PSU calculator</a>.</p>
        </div>
      `
        },
        {
            title: "Interpreting Blue Screens (BSOD) — Reading the Code",
            content: `
        <p class="mb-4 text-gray-300 leading-relaxed">
          Every blue screen has an error code. Knowing what the code is saves hours of unnecessary diagnostics. Note or photograph the code before the PC restarts.
        </p>
        <div class="space-y-3 mb-6">
            <div class="bg-[#0A0A0F] border border-white/5 p-4 rounded-xl">
                <code class="text-red-400 font-mono block mb-2">MEMORY_MANAGEMENT (0x0000001A)</code>
                <p class="text-gray-400 text-sm">Almost always faulty RAM. Test with TestMem5 and MemTest86+.</p>
            </div>
            <div class="bg-[#0A0A0F] border border-white/5 p-4 rounded-xl">
                <code class="text-red-400 font-mono block mb-2">PAGE_FAULT_IN_NONPAGED_AREA (0x00000050)</code>
                <p class="text-gray-400 text-sm">Bad RAM or corrupted driver. Test RAM and reinstall video drivers with DDU.</p>
            </div>
            <div class="bg-[#0A0A0F] border border-white/5 p-4 rounded-xl">
                <code class="text-red-400 font-mono block mb-2">DPC_WATCHDOG_VIOLATION (0x00000133)</code>
                <p class="text-gray-400 text-sm">Outdated driver or firmware. Update SSD drivers and firmware.</p>
            </div>
            <div class="bg-[#0A0A0F] border border-white/5 p-4 rounded-xl">
                <code class="text-red-400 font-mono block mb-2">DRIVER_IRQL_NOT_LESS_OR_EQUAL</code>
                <p class="text-gray-400 text-sm">Problematic driver. Use DDU to remove and reinstall the video driver or any other recently installed driver.</p>
            </div>
        </div>
        <p class="text-gray-300 text-sm">For in-depth BSOD diagnostics, visit our <a href="/guides/como-analisar-tela-azul-bsod-dmp-guia" class="text-[#31A8FF] hover:underline">BSOD Dump Analysis Guide</a> where we teach how to open .dmp files and identify exactly which driver file caused the blue screen.</p>
      `
        }
    ];

    const faqItems = [
        {
            question: "Can I perform hardware diagnostic without opening the case?",
            answer: "For most tests (RAM, SSD, CPU, GPU), yes. The tools work directly in Windows or via bootable USB. Opening the case is only necessary to clean dust, check physical connections, or remove and reinstall parts manually."
        },
        {
            question: "Can OCCT damage my hardware?",
            answer: "No, not in any way. OCCT only performs operations that any heavy game would execute, but in a controlled and monitored manner. If your hardware can't handle OCCT, it wouldn't handle demanding games anyway. The test simply exposes existing issues."
        },
        {
            question: "Can bad RAM be fixed?",
            answer: "Generally, no. If RAM fails testing, the defect is physical (damaged NAND cells). The solution is to replace the module. If you have two sticks, test one at a time to identify which one is faulty. Faulty sticks might still work at base frequency (without XMP)."
        },
        {
            question: "How long should I let MemTest86+ run?",
            answer: "The minimum recommended is 8 complete passes. Depending on the amount of RAM, this can take 2 to 6 hours. Intermittent RAM errors might not appear in the first passes, so more passes = more reliability in the result."
        }
    ];

    const externalReferences = [
        { name: "MemTest86+ (Official)", url: "https://www.memtest.org/" },
        { name: "CrystalDiskInfo (Download)", url: "https://crystalmark.info/en/software/crystaldiskinfo/" },
        { name: "OCCT — Stress Test Tool", url: "https://www.ocbase.com/" },
        { name: "HWiNFO64 — Hardware Monitor", url: "https://www.hwinfo.com/" },
    ];

    const relatedGuides = [
        {
            href: "/guides/como-analisar-tela-azul-bsod-dmp-guia",
            title: "Analyze BSOD Dumps",
            description: "Read .dmp files to find out exactly which driver caused the blue screen."
        },
        {
            href: "/guides/monitorar-temperatura-pc",
            title: "Monitor PC Temperature",
            description: "How to use HWiNFO and MSI Afterburner to track heat in real-time."
        },
        {
            href: "/guides/verificar-saude-hd-ssd-crystaldiskinfo",
            title: "SSD and HDD Health",
            description: "Complete guide on interpreting CrystalDiskInfo and S.M.A.R.T."
        },
        {
            href: "/guides/como-trocar-pasta-termica-cpu-gpu-guia",
            title: "Change Thermal Paste",
            description: "If the problem is high temperature, thermal paste might be the solution."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="45 min"
            difficultyLevel="Intermediate"
            lastUpdated="March 2026"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
            keyPoints={keyPoints}
            warningNote="If CrystalDiskInfo shows 'Bad' health status on your drive, STOP using the computer and backup immediately. NVMe SSDs can fail without prior warning."
        />
    );
}
