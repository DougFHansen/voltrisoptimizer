import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'como-limpar-cache-dns-ip-flushdns',
  title: "CMD Network Commands: FlushDNS, Release, Renew, and Winsock (2026)",
  description: "Slow internet or sites not loading? Learn the 5 sacred CMD commands (ipconfig, netsh winsock reset) to reset your connection and fix DNS errors.",
  category: 'rede-seguranca',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "Network CMD Guide: How to Reset IP and Clear DNS Cache Completely";
const description = "Resolve 'Could not find DNS address' issues, high ping, and disconnections in games with simple commands in the Command Prompt.";

const keywords = [
    'what does ipconfig flushdns do',
    'how to renew ip cmd release renew',
    'netsh winsock reset catalog',
    'clear dns cache windows 11',
    'internet connected but not browsing cmd',
    'reset tcp ip stack netsh int ip reset',
    'resolve dns probe finished nxdomain error',
    'bat script to clean internet'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('como-limpar-cache-dns-ip-flushdns', title, description, keywords, locale);
}

export default function FlushDNSGuide() {
    const summaryTable = [
        { label: "Tool", value: "CMD (Administrator)" },
        { label: "Command 1", value: "ipconfig /flushdns" },
        { label: "Command 2", value: "netsh winsock reset" },
        { label: "Result", value: "Fresh Name Resolution" },
        { label: "Risk", value: "Zero" },
        { label: "Restart", value: "Required after Winsock" }
    ];

    const contentSections = [
        {
            title: "What is DNS Cache and why clean it?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Windows keeps a list of sites you've visited (e.g., www.google.com -> 142.250.78.100) to load faster next time. If a site's IP changes or the cache file becomes corrupted, you'll see errors like 'DNS_PROBE_FINISHED_NXDOMAIN' or games that won't connect. 'FlushDNS' throws this list away and forces Windows to ask for the new path.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">⚡</span> Voltris Network Reset
            </h4>
            <p class="text-gray-300 mb-4">
                Executing 5 commands in CMD every time the internet drops is tedious. <strong>Voltris Optimizer</strong> has a 'Network Reset' button that executes the entire cleaning sequence (IP, DNS, Winsock, Proxy) and restarts the network adapter automatically.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Reset Network Now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "Step 1: The Sacred Sequence (IP and DNS)",
            content: `
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5 font-mono text-sm">
            <li>Open CMD as <strong>Administrator</strong>.</li>
            <li>Release your current IP (disconnects internet momentarily):<br/>
                <code class="text-[#31A8FF]">ipconfig /release</code>
            </li>
            <li>Clear the DNS cache:<br/>
                <code class="text-[#31A8FF]">ipconfig /flushdns</code>
            </li>
            <li>Request a new IP from the router:<br/>
                <code class="text-[#31A8FF]">ipconfig /renew</code>
            </li>
        </ol>
      `
        },
        {
            title: "Step 2: Resetting Winsock (Severe Errors)",
            content: `
        <p class="mb-4 text-gray-300">
            If step 1 didn't solve it, there might be corruption in the Windows Socket (the API that software uses to access the network). This is common after removing viruses or uninstalling VPNs.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4 font-mono text-sm">
            <li>In the same CMD, type:<br/>
                <code class="text-[#31A8FF]">netsh winsock reset</code>
            </li>
            <li>Reset the TCP/IP stack:<br/>
                <code class="text-[#31A8FF]">netsh int ip reset</code>
            </li>
            <li><strong>RESTART YOUR COMPUTER.</strong> (Mandatory).</li>
        </ul>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Automatic .BAT Script",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-green-400 font-bold mb-4 text-xl">Create your own repairer</h4>
                <p class="text-gray-300 mb-4">
                    Open Notepad, paste the commands below and save as <code>NetRepair.bat</code>. Run it whenever the internet drops.
                </p>
                <div class="bg-black p-4 rounded text-xs font-mono text-gray-300">
                    @echo off<br/>
                    ipconfig /release<br/>
                    ipconfig /flushdns<br/>
                    ipconfig /renew<br/>
                    netsh winsock reset<br/>
                    echo Cleaning Completed!<br/>
                    pause
                </div>
            </div>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Error: 'The requested operation requires elevation'",
            content: `
            <p class="mb-4 text-gray-300">
                If this message appears, you forgot to open CMD as <strong>Administrator</strong>. Right-click the Command Prompt icon and choose 'Run as administrator'.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does FlushDNS improve ping?",
            answer: "Not directly. It solves connection problems (not being able to log in, site not opening). Ping depends on the physical route, but a clean DNS cache avoids initial 'hiccups' when resolving the server's IP."
        },
        {
            question: "How often should I do this?",
            answer: "Only when you're having problems. There's no benefit in doing it every day, as Windows will have to rebuild the cache (which takes a few extra milliseconds the first time you visit a site)."
        },
        {
            question: "Did 'netsh int ip reset' command fail?",
            answer: "Sometimes it says 'Access Denied' on one of the lines. This is a known Windows bug related to the Registry. Usually, it can be ignored if 'netsh winsock reset' worked."
        }
    ];

    const externalReferences = [
        { name: "Microsoft - Reset TCP/IP", url: "https://support.microsoft.com/en-us/topic/how-to-reset-tcp-ip-by-using-the-netshell-utility-d954430c-9b11-43f0-6081-0fc9235a8b4a" }
    ];

    const relatedGuides = [
        {
            href: "/guides/melhor-dns-jogos-2026",
            title: "Best DNS",
            description: "After cleaning, configure 1.1.1.1."
        },
        {
            href: "/guides/reduzir-ping-regedit-cmd-jogos",
            title: "Optimize Ping",
            description: "Advanced TCPNoDelay adjustments."
        },
        {
            href: "/guides/problemas-conexao-wifi-causa-solucao",
            title: "Wi-Fi Dropping",
            description: "Hardware and signal diagnosis."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}


