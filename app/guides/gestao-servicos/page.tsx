import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'gestao-servicos',
    title: "Ultimate Guide: Which Windows Services to Safely Disable (2026)",
    description: "Discover which of the 200+ Windows services you can disable without risk to gain performance, free up RAM, and reduce boot time – with a complete and detailed list.",
    category: 'windows-general',
    difficulty: 'Intermediate',
    time: '35 min'
};

const title = "Ultimate Guide: Which Windows Services to Safely Disable (2026)";
const description = "Windows 11 runs more than 200 services in the background. Most you will never need. Learn which ones are safe to disable, which have moderate risk, and which are absolutely forbidden to touch.";
const keywords = [
    'which windows 11 services can i disable 2026',
    'how to open services.msc tutorial windows',
    'disable useless windows services to gain fps',
    'windows 10 services management complete guide',
    'configure telemetry and tracking services',
    'services.msc safe comprehensive list',
    'reduce background processes windows 11',
    'free up ram by disabling windows services'
];

export const metadata: Metadata = createGuideMetadata('gestao-servicos', title, description, keywords);

export default function ServicesManagementGuide() {
    const summaryTable = [
        { label: "Shortcut to open", value: "Win + R -> services.msc" },
        { label: "Maximum risk", value: "Medium (create restore point first)" },
        { label: "NEVER disable", value: "RPC, DCOM, Plug and Play" },
        { label: "Safe to disable", value: "Telemetry, Print Spooler (no printer)" },
        { label: "Expected RAM gain", value: "200-600 MB" },
        { label: "Boot gain", value: "5-15 seconds faster" },
    ];

    const keyPoints = [
        "What are Windows Services and how they work",
        "How to open services.msc and understand statuses",
        "Complete list of SAFE services to disable",
        "List of moderate risk services (for advanced users)",
        "Services you should NEVER touch",
        "How to revert if something breaks",
    ];

    const contentSections = [
        {
            title: "What are Windows Services?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Think of Windows Services as "silent workers" that run while the system is on, even if no user is logged in. They handle everything from internet connection to printer management and telemetry.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Each active service consumes a fraction of CPU and RAM. Together, they can be consuming <strong>500 MB to 1.5 GB of RAM</strong> in idle. For a PC with 8 GB of RAM, this is more than 15% of the total memory wasted before you open a single program.
        </p>
        <div class="bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <h4 class="text-blue-400 font-bold mb-3">Real Performance Data</h4>
            <p class="text-gray-300 text-sm">
                In tests conducted by the Voltris team on a PC with Intel Core i5-10400 + 16 GB RAM, after disabling the services listed in this guide, idle RAM consumption went from <strong>3.8 GB to 2.9 GB</strong> (23% reduction), and W11 boot time from 28s to 19s.
            </p>
        </div>
      `
        },
        {
            title: "How to open services.msc and understand Statuses",
            content: `
        <ol class="list-decimal list-inside text-gray-300 space-y-4 ml-4 mb-6">
            <li><strong>Press Win + R</strong> to open Run.</li>
            <li>Type <code class="bg-gray-800 px-2 py-0.5 rounded text-blue-300">services.msc</code> and press Enter.</li>
            <li>The Services window will open with three columns: Name, Status, and Startup Type.</li>
        </ol>
        <h4 class="text-white font-bold mb-4 text-lg">Understanding Startup Types:</h4>
        <div class="space-y-3 mb-6">
            <div class="flex items-start gap-4 bg-[#0A0A0F] border border-red-500/20 p-4 rounded-xl">
                <span class="text-red-400 font-bold text-sm w-24 shrink-0 pt-0.5">Automatic</span>
                <p class="text-gray-300 text-sm">The service starts WITH Windows, always. It's the heaviest. Critical system services are here, but many useless ones too.</p>
            </div>
            <div class="flex items-start gap-4 bg-[#0A0A0F] border border-yellow-500/20 p-4 rounded-xl">
                <span class="text-yellow-400 font-bold text-sm w-24 shrink-0 pt-0.5">Manual</span>
                <p class="text-gray-300 text-sm">The service only starts when a program explicitly requests it. This is the ideal status for most services you don't use but that some app might need eventually.</p>
            </div>
            <div class="flex items-start gap-4 bg-[#0A0A0F] border border-green-500/20 p-4 rounded-xl">
                <span class="text-green-400 font-bold text-sm w-24 shrink-0 pt-0.5">Disabled</span>
                <p class="text-gray-300 text-sm">The service never starts, even if a program asks. Use with care - frees more memory, but may break functionality.</p>
            </div>
        </div>
        <div class="bg-yellow-900/10 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h4 class="text-yellow-400 font-bold mb-2">Create a Restore Point BEFORE</h4>
            <p class="text-gray-300 text-sm">Before touching any service, press Win, search for "Create a restore point" and save. If something goes wrong, you return to the previous state in minutes.</p>
        </div>
      `
        },
        {
            title: "List of SAFE Services to Disable",
            content: `
        <p class="mb-6 text-gray-300">
            These services can be set to <strong>Disabled</strong> or <strong>Manual</strong> safely on the vast majority of home and gaming PCs. Right-click -> Properties -> Startup Type.
        </p>
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] border border-white/5 p-5 rounded-xl">
                <h5 class="text-white font-bold mb-1">Windows Telemetry (DiagTrack)</h5>
                <p class="text-gray-400 text-sm mb-2">Full name: <em>Connected User Experiences and Telemetry</em></p>
                <p class="text-gray-300 text-sm">Sends usage data, errors, and diagnostics to Microsoft 24/7. <strong>No impact at all</strong> when disabled for the average user. Recommended: <span class="text-red-400 font-bold">Disabled</span>.</p>
            </div>
            <div class="bg-[#0A0A0F] border border-white/5 p-5 rounded-xl">
                <h5 class="text-white font-bold mb-1">Print Spooler</h5>
                <p class="text-gray-400 text-sm mb-2">Print queue management service.</p>
                <p class="text-gray-300 text-sm">If you <strong>don't have a printer</strong>, this service is useless and can be exploited by vulnerabilities (PrintNightmare). Recommended: <span class="text-red-400 font-bold">Disabled</span>.</p>
            </div>
            <div class="bg-[#0A0A0F] border border-white/5 p-5 rounded-xl">
                <h5 class="text-white font-bold mb-1">Fax and Telephony</h5>
                <p class="text-gray-300 text-sm">Services for sending fax by modem and TAPI. In 2026, nobody uses fax. Recommended: <span class="text-red-400 font-bold">Disabled</span>.</p>
            </div>
            <div class="bg-[#0A0A0F] border border-white/5 p-5 rounded-xl">
                <h5 class="text-white font-bold mb-1">Windows News Feed Service</h5>
                <p class="text-gray-300 text-sm">Powers Windows 11 Widgets with news. If you don't use Widgets, disable. Recommended: <span class="text-red-400 font-bold">Disabled</span>.</p>
            </div>
            <div class="bg-[#0A0A0F] border border-white/5 p-5 rounded-xl">
                <h5 class="text-white font-bold mb-1">Location Service</h5>
                <p class="text-gray-300 text-sm">Tracks your location for apps like Maps and Weather. If you don't use these apps on PC, disable. Recommended: <span class="text-yellow-400 font-bold">Manual</span>.</p>
            </div>
            <div class="bg-[#0A0A0F] border border-white/5 p-5 rounded-xl">
                <h5 class="text-white font-bold mb-1">Xbox Live Service (XblAuthManager, XblGameSave)</h5>
                <p class="text-gray-300 text-sm">If you don't use the Xbox App or Xbox Game Pass, these services are useless. Recommended: <span class="text-yellow-400 font-bold">Manual</span>.</p>
            </div>
        </div>
      `
        },
        {
            title: "Moderate Risk Services (Advanced Users)",
            content: `
        <p class="mb-6 text-gray-300">
            These services have a greater impact on performance, but require attention. <strong>Do not disable without reading the full explanation.</strong>
        </p>
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] border border-yellow-500/20 p-5 rounded-xl">
                <h5 class="text-white font-bold mb-1">SysMain (Formerly Superfetch)</h5>
                <p class="text-gray-300 text-sm mb-2">Pre-loads frequently used apps into RAM to open them faster.</p>
                <ul class="text-sm text-gray-400 space-y-1 ml-4 list-disc">
                    <li><strong>On NVMe SSD:</strong> Disable. The SSD is already fast enough, and SysMain just causes unnecessary writes.</li>
                    <li><strong>On mechanical HDD:</strong> Keep it active. Pre-loading makes a real difference on slow HDDs.</li>
                </ul>
            </div>
            <div class="bg-[#0A0A0F] border border-yellow-500/20 p-5 rounded-xl">
                <h5 class="text-white font-bold mb-1">Windows Search</h5>
                <p class="text-gray-300 text-sm mb-2">Indexes all files on the disc so Start Menu searches are instant.</p>
                <ul class="text-sm text-gray-400 space-y-1 ml-4 list-disc">
                    <li>If you <strong>never use search</strong>: Disable. Frees CPU and reduces disc writes.</li>
                    <li>If you search for files frequently: Keep it active.</li>
                </ul>
            </div>
        </div>
      `
        },
        {
            title: "Services you should NEVER Disable",
            content: `
        <div class="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
            <h4 class="text-red-400 font-bold mb-3">Forbidden Zone – Do Not Touch</h4>
            <p class="text-gray-300 text-sm">Disabling the services below can make Windows <strong>unusable</strong>, without recognizing keyboard, mouse, network, or even without being able to start.</p>
        </div>
        <div class="space-y-3">
            <div class="flex items-center gap-4 bg-[#0A0A0F] border border-red-500/20 p-4 rounded-xl">
                <span class="text-2xl">🚫</span>
                <div>
                    <strong class="text-white">RPC (Remote Procedure Call) / DCOM</strong>
                    <p class="text-gray-400 text-xs mt-1">The backbone of Windows. Without it, no process can communicate with another. The system crashes immediately.</p>
                </div>
            </div>
            <div class="flex items-center gap-4 bg-[#0A0A0F] border border-red-500/20 p-4 rounded-xl">
                <span class="text-2xl">🚫</span>
                <div>
                    <strong class="text-white">Plug and Play</strong>
                    <p class="text-gray-400 text-xs mt-1">Detects and configures devices. Without it, keyboard, mouse, and flash drives stop working.</p>
                </div>
            </div>
            <div class="flex items-center gap-4 bg-[#0A0A0F] border border-red-500/20 p-4 rounded-xl">
                <span class="text-2xl">🚫</span>
                <div>
                    <strong class="text-white">Security Accounts Manager (SAM)</strong>
                    <p class="text-gray-400 text-xs mt-1">Manages Windows user accounts. Disabling blocks login.</p>
                </div>
            </div>
            <div class="flex items-center gap-4 bg-[#0A0A0F] border border-red-500/20 p-4 rounded-xl">
                <span class="text-2xl">🚫</span>
                <div>
                    <strong class="text-white">Windows Update / Windows Defender</strong>
                    <p class="text-gray-400 text-xs mt-1">Critical security. Disabling exposes the system to malware and prevents vulnerability fixes.</p>
                </div>
            </div>
            <div class="flex items-center gap-4 bg-[#0A0A0F] border border-red-500/20 p-4 rounded-xl">
                <span class="text-2xl">🚫</span>
                <div>
                    <strong class="text-white">Windows Audio Service (AudioEndpointBuilder)</strong>
                    <p class="text-gray-400 text-xs mt-1">Without it, your sound stops completely.</p>
                </div>
            </div>
        </div>
      `
        },
        {
            title: "How to Revert if Something Breaks",
            content: `
        <p class="mb-4 text-gray-300">Disabled something and it stopped working? No panic. You have two options:</p>
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] border border-green-500/20 p-5 rounded-xl">
                <h5 class="text-green-400 font-bold mb-2">Option 1 – Revert manually (Faster)</h5>
                <ol class="list-decimal list-inside text-sm text-gray-300 space-y-2 ml-4">
                    <li>Open <code class="bg-gray-800 px-1 rounded">services.msc</code> again.</li>
                    <li>Find the service you disabled.</li>
                    <li>Right-click -> Properties -> Automatic -> OK -> Start.</li>
                </ol>
            </div>
            <div class="bg-[#0A0A0F] border border-blue-500/20 p-5 rounded-xl">
                <h5 class="text-blue-400 font-bold mb-2">Option 2 – System Restore (Nuclear)</h5>
                <ol class="list-decimal list-inside text-sm text-gray-300 space-y-2 ml-4">
                    <li>Press Win -> Search 'System Restore'.</li>
                    <li>Click 'Open System Restore'.</li>
                    <li>Choose the point created before making changes.</li>
                    <li>Confirm and wait for restoration (5-15 min).</li>
                </ol>
            </div>
        </div>
      `
        }
    ];

    const faqItems = [
        {
            question: "Can disabling services cause Blue Screen (BSOD)?",
            answer: "Yes, if you disable critical services like RPC or essential drivers. That is why this guide's list is conservative and safe. If you only follow what is listed as 'Safe', the risk of BSOD is practically zero."
        },
        {
            question: "Do I need to repeat the process after a Windows update?",
            answer: "Sometimes yes. Windows Update can reactivate services that you disabled, especially after major updates (like from version 22H2 to 23H2). It's worth checking after large updates."
        },
        {
            question: "How much FPS will I gain in games?",
            answer: "Directly, a little — maybe 1-3% average gain. The real benefit is on PCs with 8GB or less of RAM, where freeing up RAM drastically reduces stuttering and hitches during the game. It also improves switching time between game and Discord."
        },
        {
            question: "Is there an automatic tool that does this?",
            answer: "Yes. The <strong>Voltris Optimizer</strong> has a 'Service Optimization' module that analyzes your specific hardware and disables only the safe services for your configuration with one click and an option to revert easily."
        }
    ];

    const externalReferences = [
        { name: "Microsoft Docs – Service Management", url: "https://learn.microsoft.com/en-us/windows/win32/services/service-control-manager" },
        { name: "Microsoft – DiagTrack (Telemetry)", url: "https://learn.microsoft.com/en-us/windows/privacy/manage-connections-from-windows-operating-system-components-to-microsoft-services" },
    ];

    const relatedGuides = [
        {
            href: "/guides/debloat-windows-11-otimizacao-powershell",
            title: "Debloat Windows 11",
            description: "Remove useless apps with PowerShell for additional RAM gain."
        },
        {
            href: "/guides/criar-ponto-restauracao-windows",
            title: "Restore Point",
            description: "Create a full system backup before making any changes."
        },
        {
            href: "/guides/memoria-virtual-pagefile-ssd-otimizacao",
            title: "Optimize Virtual Memory",
            description: "Configure the pagefile to maximize available RAM performance."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="35 min"
            difficultyLevel="Intermediate"
            lastUpdated="March 2026"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
            keyPoints={keyPoints}
            warningNote="Create a restore point before starting. Press Win, search for 'Create a restore point' and save. This ensures you can go back on any change."
            showVoltrisOptimizerCTA={true}
        />
    );
}
