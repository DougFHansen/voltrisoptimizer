import { Metadata } from 'next';
import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `How to Disable and Remove Copilot from Windows 11 (2026)`,
        description: `Is Copilot consuming your RAM? Learn how to completely disable Microsoft AI, remove the taskbar icon, and block AI telemetry processes on Windows 11.`,
        keywords: ['how to disable copilot windows 11', 'remove copilot from taskbar', 'disable microsoft ai windows', 'voltris optimizer privacy shield', 'block microsoft copilot telemetry', 'how to remove copilot from windows'],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/how-to-disable-copilot-windows-11`,
            languages: {
                'en': `/en/how-to-disable-copilot-windows-11`,
                'es': `/es/how-to-disable-copilot-windows-11`,
                'pt-br': `/pt-br/how-to-disable-copilot-windows-11`,
                'de': `/de/how-to-disable-copilot-windows-11`,
                'fr': `/fr/how-to-disable-copilot-windows-11`,
                'it': `/it/how-to-disable-copilot-windows-11`,
                'ja': `/ja/how-to-disable-copilot-windows-11`,
                'ko': `/ko/how-to-disable-copilot-windows-11`,
                'ar': `/ar/how-to-disable-copilot-windows-11`
            }
        }
    };
}

export default function DesativarCopilot() {
    const title = 'How to Disable and Remove Copilot from Windows 11 (2026)';
    const description = 'Is Copilot consuming your RAM? Learn how to completely disable Microsoft\'s AI, remove the taskbar icon, and block AI telemetry processes.';
    const keywords = ['how to disable copilot windows 11', 'remove copilot taskbar', 'disable microsoft ai windows', 'voltris optimizer privacy shield', 'block microsoft copilot telemetry', 'how to remove copilot from windows'];

    const summaryTable = [
        { label: "Copilot Status", value: "Enabled by Default" },
        { label: "Major Consumption", value: "RAM and Data Telemetry" },
        { label: "Key Technique", value: "Gpedit.msc & Registry Tweak" },
        { label: "Expected Result", value: "Clean Taskbar and More RAM" }
    ];

    const contentSections = [
        {
            title: "Why remove Copilot from Windows 11?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Copilot is Microsoft's new Artificial Intelligence, but for many users, it's just another piece of 'bloatware' that takes up visual space on the taskbar and continuously consumes system resources in the background.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            In addition to RAM consumption (approximately 300MB to 500MB in standby), Copilot sends your Windows usage data to Microsoft's AI servers. If you're looking for **Total Privacy** and maximum performance, disabling it is a priority.
        </p>
        
        <div class="bg-indigo-500/10 border border-indigo-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-indigo-400 font-black mb-2 flex items-center gap-2">Removing the Icon via Taskbar</h4>
            <p class="text-gray-300 text-sm">
                The basic step is to right-click on the Taskbar > Taskbar Settings and uncheck Copilot. This only **HIDES** the icon, but the service continues to run in Task Manager. To remove the root, we need Registry Tweaks.
            </p>
        </div>
      `
        },
        {
            title: "Disabling via Registry Editor (HKEY)",
            content: `
        <p class="mb-4 text-gray-300">
            You can disable Copilot for the entire user account by creating a specific key in the Registry:
            <br/><br/>
            Path: <code>HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\Windows\\WindowsCopilot</code>.
            <br/><br/>
            Set the value of <b>TurnOffWindowsCopilot</b> to <b>1</b>. This will force Windows 11 to unload all AI modules from memory on the next boot.
        </p>
      `
        },
        {
            title: "The Voltris Privacy Shield Advantage",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            **Voltris Optimizer** handles Copilot surgically, allowing you to enable or disable it with one click without needing to mess with dangerous tools like <code>Regedit</code>.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Full De-AI:** Removes all AI trackers at once.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **RAM Recovery:** Immediately frees up space occupied by <code>msedge_ai.exe</code> processes.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Telemetry Block:** Blocks data traffic from Copilot to Microsoft servers.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "By disabling Copilot, do I lose other search functions?",
            answer: "No. Classic Windows search and local file indexing continue to work perfectly. The only thing removed is the online AI assistant."
        },
        {
            question: "Is it reversible?",
            answer: "Yes. In Voltris Optimizer you can restore Copilot at any time if you decide you need AI assistance in the future."
        }
    ];

    const relatedGuides = [
        { href: "/guia-definitivo-privacidade-windows-2026", title: "Total Privacy", description: "Combine AI removal with total data protection." },
        { href: "/remover-bloatware-windows-11", title: "Debloat", description: "Remove other unnecessary apps from Windows." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="8 min"
            difficultyLevel="Medium"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Differentiate hiding the icon from disabling the service",
                "Management of AI processes in Windows 11",
                "Cleaning Copilot telemetry logs",
                "RAM optimization in systems with active AI",
                "Blocking Microsoft's automatic suggestion services"
            ]}
        />
    );
}
