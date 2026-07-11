import { Metadata } from 'next';
import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `Ultimate Windows 11 Privacy Guide (2026) | How to Protect Yourself`,
        description: `Stop being tracked by Microsoft. Learn how to disable telemetry, activity history, and ad IDs to have a 100% private and faster system.`,
        keywords: ['ultimate privacy guide windows 11', 'how to disable telemetry windows 2026', 'block microsoft tracking windows', 'voltris privacy shield', 'total privacy on pc', 'disable activity history windows'],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/definitive-privacy-guide-windows-2026`,
            languages: {
                'en': `/en/definitive-privacy-guide-windows-2026`,
                'es': `/es/definitive-privacy-guide-windows-2026`,
                'pt-br': `/pt-br/definitive-privacy-guide-windows-2026`,
                'de': `/de/definitive-privacy-guide-windows-2026`,
                'fr': `/fr/definitive-privacy-guide-windows-2026`,
                'it': `/it/definitive-privacy-guide-windows-2026`,
                'ja': `/ja/definitive-privacy-guide-windows-2026`,
                'ko': `/ko/definitive-privacy-guide-windows-2026`,
                'ar': `/ar/definitive-privacy-guide-windows-2026`
            }
        }
    };
}

export default function GuiaPrivacidade() {
    const title = 'Ultimate Windows 11 Privacy Guide (2026) | How to Protect Yourself';
    const description = 'Stop being tracked by Microsoft. Learn how to disable telemetry, activity history, and ad IDs to have a 100% private and faster system.';
    const keywords = ['ultimate privacy guide windows 11', 'how to disable telemetry windows 2026', 'block microsoft tracking windows', 'voltris privacy shield', 'total privacy on pc', 'disable activity history windows'];

    const summaryTable = [
        { label: "Privacy Level", value: "Critical by Default" },
        { label: "What is Tracked", value: "Keyboard Usage, Clicks, and Location" },
        { label: "Key Technique", value: "Host Blocking & Telemetry Disable" },
        { label: "Impact on PC", value: "Privacy and Less Network Load" }
    ];

    const contentSections = [
        {
            title: "Is Windows 11 'spying' on you?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Many don't realize it, but Windows 11 sends gigabytes of data to Microsoft's servers every month. This includes what you type (for 'writing learning'), the time you spend on each app, and even your approximate location.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            This constant monitoring not only hurts your privacy, but consumes processing and bandwidth, which can cause lag spikes in games and slowdowns when switching between windows.
        </p>
        
        <div class="bg-red-500/10 border border-red-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-red-400 font-black mb-2 flex items-center gap-2">Advertiser ID: The Digital Billboard</h4>
            <p class="text-gray-300 text-sm">
                Windows creates a unique ID for your device, allowing advertisers to track your behavior across different system apps. Disabling this is the first step to having a clean system.
            </p>
        </div>
      `
        },
        {
            title: "Disabling Deep Telemetry (OOBE and Registry)",
            content: `
        <p class="mb-4 text-gray-300">
            The most effective way to block Microsoft's espionage is through the <code>hosts</code> file or by disabling the <code>DiagTrack</code> services (Connected User Experiences and Telemetry).
            <br/><br/>
            By blocking these domains, your computer stops 'reporting' your behavior to the servers in Redmond, making your browsing natively private.
        </p>
      `
        },
        {
            title: "Voltris Optimizer Shield: Privacy Shield",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            **Voltris Optimizer** groups over 300 privacy settings in a single place, allowing you to safely shield your PC.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **App Permissions:** Disables cameras and microphones for apps that don't need access.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Activity Eraser:** Clears the activity history that is synchronized with the Microsoft cloud.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Hosts Blocker:** Prevents sending telemetry by blocking the <code>vortex.data.microsoft.com</code> domain.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "When disabling telemetry, do updates stop working?",
            answer: "No. Voltris separates Telemetry services from Windows Update services. You will continue to receive critical security patches, but without the excessive tracking."
        },
        {
            question: "Does Windows become unstable without telemetry?",
            answer: "No. In fact, it becomes more stable. Telemetry is an additional process; removing it means fewer variables running in the background that can cause conflicts or crashes."
        }
    ];

    const relatedGuides = [
        { href: "/desativar-servicos-desnecessarios-windows-11", title: "Services", description: "Optimize the processes that run alongside telemetry." },
        { href: "/remover-bloatware-windows-11", title: "Debloat", description: "Remove apps that spy on your behavior." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Professional Advertiser ID Configuration",
                "Deep DiagTrack telemetry deactivation",
                "Blocking tracking domains via Hosts",
                "Activity history and cloud synchronization management",
                "Optimization of background application permissions"
            ]}
        />
    );
}
