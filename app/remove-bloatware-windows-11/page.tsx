import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';
import { title, description, keywords } from './metadata';

export default function RemoverBloatwareWindows() {
    const summaryTable = [
        { label: "What is Bloatware", value: "Useless Pre-installed Apps" },
        { label: "PC Impact", value: "RAM and Disk Usage" },
        { label: "Manual Solution", value: "PowerShell (Complex)" },
        { label: "Automatic Solution", value: "Voltris Optimizer (Safe)" }
    ];

    const contentSections = [
        {
            title: "What is Bloatware and why remove it?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          When installing Windows 11, the system "presents" you with dozens of apps you never asked for: OneDrive, Clipchamp, Xbox Game Bar, Widgets, and even games like Candy Crush. This is the famous **Bloatware.**
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            They not only occupy disk space but also run background processes, monitor your usage (telemetry), and slow down PC startup. Doing a "Debloat" is essential for anyone looking for a clean, performance-focused system.
        </p>
        
        <div class="bg-red-500/10 border border-red-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-red-400 font-black mb-2 flex items-center gap-2">Beware of Random Scripts!</h4>
            <p class="text-gray-300 text-sm">
                There are scripts on GitHub that promise to debloat, but many break essential dependencies (like the Microsoft Store or Windows Update). Use only verified methods.
            </p>
        </div>
      `
        },
        {
            title: "Manual Method: PowerShell (Deep Removal)",
            content: `
        <p class="mb-4 text-gray-300">
            You can remove apps via PowerShell with Administrator privileges. To remove a specific app:
            <br/><code>Get-AppxPackage *app-name* | Remove-AppxPackage</code>.
            <br/><br/>
            However, removing components like **Cortana** or **Teams** manually is a process that involves complex registry keys and system permissions (<code>TrustedInstaller</code>).
        </p>
      `
        },
        {
            title: "How Voltris Solves It: Safe and Selective Debloat",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            In **Voltris Optimizer**, we implemented an intelligent removal system. It doesn't just uninstall the app, it cleans up leftovers in the Registry and Windows Services.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **App Cleaner:** Select exactly what you want to remove (OneDrive, Maps, News).</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Service Optimization:** Disables "zombie" services that apps leave behind.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Restoration:** One Click to create a restoration point before any deep change.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "Can I remove Microsoft Edge?",
            answer: "In Windows 11, Microsoft made Edge an integral component of the system. Removing it manually can break webview functions in other apps. Voltris recommends disabling Edge's background processes instead of deleting the executable."
        },
        {
            question: "Does Windows Update reinstall bloatware?",
            answer: "Yes, major feature updates usually bring back some sponsored apps. Therefore, the Voltris Debloat tool was made to be run occasionally after each major Windows update."
        }
    ];

    const relatedGuides = [
        { href: "/guides/debloating-windows-11", title: "Original Guide", description: "The classic manual removal guide." },
        { href: "/melhores-programas-otimizar-windows", title: "Top Optimizers", description: "Compare market tools." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="12 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Identify what is and is not system junk",
                "Risks of automated optimization scripts",
                "How to safely use Administrator PowerShell",
                "The Voltris difference: Selective removal without breaking",
                "Post-Windows update maintenance"
            ]}
        />
    );
}
