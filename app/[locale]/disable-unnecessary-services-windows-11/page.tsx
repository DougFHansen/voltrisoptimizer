import { Metadata } from 'next';
import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `Which Services to Disable on Windows 11 to Improve Performance (2026)`,
        description: `Complete and safe guide on Windows services. Learn which processes to disable to free up RAM and CPU without compromising system stability.`,
        keywords: ['disable unnecessary services windows 11', 'safe services to disable windows 11', 'optimize windows 11 through services', 'voltris optimizer service manager', 'improve pc speed services', 'windows 11 services guide'],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/disable-unnecessary-services-windows-11`,
            languages: {
                'en': `/en/disable-unnecessary-services-windows-11`,
                'es': `/es/disable-unnecessary-services-windows-11`,
                'pt-br': `/pt-br/disable-unnecessary-services-windows-11`,
                'de': `/de/disable-unnecessary-services-windows-11`,
                'fr': `/fr/disable-unnecessary-services-windows-11`,
                'it': `/it/disable-unnecessary-services-windows-11`,
                'ja': `/ja/disable-unnecessary-services-windows-11`,
                'ko': `/ko/disable-unnecessary-services-windows-11`,
                'ar': `/ar/disable-unnecessary-services-windows-11`
            }
        }
    };
}

export default function DesativarServicos() {
    const title = 'Which Services to Disable in Windows 11 to Improve Performance (2026)';
    const description = 'Complete and safe guide on Windows services. Learn which processes to disable to free up RAM and CPU without compromising system stability.';
    const keywords = ['disable unnecessary windows 11 services', 'safe services to disable', 'optimize windows 11 via services', 'voltris optimizer service manager', 'improve pc speed services', 'windows 11 services guide'];

    const summaryTable = [
        { label: "Number of Services", value: "+200 services in Windows 11" },
        { label: "Main Benefit", value: "Less RAM and CPU consumption" },
        { label: "Key Technique", value: "Services.msc & Voltris SVC Manager" },
        { label: "Main Risk", value: "Connectivity loss if done incorrectly" }
    ];

    const contentSections = [
        {
            title: "What are Services and why does Windows 11 have so many?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Services are small programs that run "behind the scenes" from the moment you turn on your computer. The big problem is that Windows 11 activates dozens of services focused on tablets, sensors you don't have, and printers you will never use.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            Each active service consumes a slice of your RAM and periodically requests processing from your CPU to check <code>status</code>. In computers for gaming or editing, the accumulation of these micro-processes generates <b>Latency Spikes</b>.
        </p>
        
        <div class="bg-blue-500/10 border border-blue-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-[#31A8FF] font-black mb-2 flex items-center gap-2">Golden Rule: Manual vs Disabled</h4>
            <p class="text-gray-300 text-sm">
                Whenever possible, set a service to <code>Manual</code> instead of Disabled. In Manual mode, the service only wakes up if a program actually requests it. This preserves system stability.
            </p>
        </div>
      `
        },
        {
            title: "Three 'High Impact' Services to Optimize Now",
            content: `
        <p class="mb-4 text-gray-300">
            Some services are famous for draining resources without the user realizing:
            <br/><br/>
            1. <b>SysMain (Formerly Superfetch):</b> Pre-loads your RAM with 'likely' apps. On modern SSDs, it causes more slowdown due to excessive writing than real speed gain.
            <br/><br/>
            2. <b>Distributed Link Tracking Client:</b> Maintains links between files on the network. If you don't use complex local network file sharing, it can be disabled.
            <br/><br/>
            3. <b>Windows Search Indexer:</b> If you don't usually search for content <i>inside</i> all your files every minute, the indexer can be configured to index only essential areas.
        </p>
      `
        },
        {
            title: "Intelligent Management with Voltris Optimizer",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            **Voltris Optimizer** eliminates the risk of 'breaking' the system. Our service manager has profiles tested at scale for different usage profiles.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Safe Tweak:** Disables only what is 100% useless for the average user.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Gaming Mode:** Cuts printing services and deep telemetry for maximum gaming performance.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Rollback:** One click to go back in time and restore original Microsoft settings.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "Can I disable Windows Defender (Security)?",
            answer: "Voltris discourages completely disabling security unless you have a professional alternative. What Voltris Optimizer does is optimize Defender scanning so it doesn't start in the middle of your game."
        },
        {
            question: "Will the internet stop loading if I mess with services?",
            answer: "Only if you mess with essential network protocols (TCP/IP). Our optimization profiles preserve all DNS and DHCP services necessary for fluid browsing."
        }
    ];

    const relatedGuides = [
        { href: "/melhorar-performance-obs-studio-windows", title: "Live Optimization", description: "Combine with improving your broadcast." },
        { href: "/desativar-telemetria-windows", title: "Total Privacy", description: "The definitive focus on removing trackers." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Medium"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Differentiate essential services from telemetry items",
                "Optimization of printing and network services",
                "Management of SysMain for SSDs and HDDs",
                "Configuration of 'Manual' mode for maximum stability",
                "Removal of unwanted telemetry services"
            ]}
        />
    );
}
