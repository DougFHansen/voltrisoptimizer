import { Metadata } from 'next';
﻿import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: ``,
        description: ``,
        keywords: [],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/disable-windows-telemetry`,
            languages: {
                'en': `/en/disable-windows-telemetry`,
                'es': `/es/disable-windows-telemetry`,
                'pt-br': `/pt-br/disable-windows-telemetry`,
                'de': `/de/disable-windows-telemetry`,
                'fr': `/fr/disable-windows-telemetry`,
                'it': `/it/disable-windows-telemetry`,
                'ja': `/ja/disable-windows-telemetry`,
                'ko': `/ko/disable-windows-telemetry`,
                'ar': `/ar/disable-windows-telemetry`
            }
        }
    };
}

export default function DesativarTelemetriaWindows() {
    const title = 'Voltris Optimizer Guide';
    const description = 'In-depth guide by Voltris Optimizer';
    const keywords = ['voltris optimizer', 'windows optimization'];

    const summaryTable = [
        { label: "What is Telemetry", value: "Usage Data Collection" },
        { label: "Impact on PC", value: "CPU and Network Usage" },
        { label: "Privacy", value: "Very Low (Original)" },
        { label: "Solution", value: "Voltris Zero-Telemetry" }
    ];

    const contentSections = [
        {
            title: "Does Windows monitor your every keystroke?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Windows 10 and 11 come with integrated monitoring systems: Functional Telemetry, Cortana, Error Reporting, Typing History, and even personalized ads in the Start menu. **Every click you make generates data that is sent to Microsoft.**
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            Beyond the ethical privacy issue, the major problem is the performance impact: the <code>DiagTrack</code> and <code>Compatibility Appraiser</code> processes can consume up to 15% of CPU randomly at crucial moments.
        </p>
      `
        },
        {
            title: "Disabling Telemetry via GPO",
            content: `
        <p class="mb-4 text-gray-300">
            Pro version users can disable telemetry via the Local Group Policy Editor (<code>gpedit.msc</code>).
            <br/>Navigate to: <code>Computer Configuration > Administrative Templates > Windows Components > Data Collection and Preview Builds</code>. 
            <br/>Set **Allow Telemetry** to **Disabled**.
        </p>
      `
        },
        {
            title: "How Voltris Maximizes Your Privacy",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            At **Voltris Optimizer**, we went further. We developed the **Zero-Telemetry** system that acts on the kernel and hidden registry keys that Microsoft doesn't show in the standard menu.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Disable Keyloggers:** Blocks the collection of writing and voice patterns.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Block Hosts:** Prevents the PC from connecting to Microsoft analysis and ad servers via an edited Hosts file.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **App Integrity:** Improves security without needing to monitor your behavior.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "Does disabling telemetry break Windows Update?",
            answer: "If done the wrong way, yes. If you simply delete critical services, Update stops working. Voltris Optimizer only disables the spying components, keeping the security update system intact."
        },
        {
            question: "Does Voltris collect my data?",
            answer: "Not at all. Unlike Windows, Voltris Optimizer is a local tool. We don't have servers where your usage data is sent; our profit comes from specialized support and the Enterprise version of the software."
        }
    ];

    const relatedGuides = [
        { href: "/guides/privacidade-windows-telemetria", title: "Classic Guide", description: "The old manual privacy guide." },
        { href: "/remover-bloatware-windows-11", title: "Remove Bloatware", description: "Complement your system cleanup." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Technical"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "The hidden reality of Windows usage reports",
                "What GPO is and how to use it in Windows 10/11",
                "Privacy risks in home versions of Windows",
                "The real impact of telemetry on FPS (CPU spikes)",
                "Hosts optimization for total ad blocking"
            ]}
        />
    );
}
