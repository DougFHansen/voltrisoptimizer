import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';

export default function LimpezaAutomatica() {
    const title = 'How to Clean Temporary Files Automatically in Windows 11 (2026)';
    const description = 'Step-by-step guide to keeping your PC always clean. Learn how to configure Storage Sense, create cleaning scripts via Task Scheduler, and use Voltris Ultra Cleaner for deep removal.';
    const keywords = ['clean temporary files automatically', 'free up disk space windows 11', 'schedule disk cleaning', 'voltris ultra cleaner', 'delete temp folder automatically', 'how to speed up slow pc cleaning'];

    const summaryTable = [
        { label: "Where the Trash Stays", value: "%TEMP%, Prefetch and Cache Folders" },
        { label: "Biggest Benefit", value: "Space and Speed Recovery" },
        { label: "Key Technique", value: "Task Scheduler and Ultra Cleaner" },
        { label: "Ideal Frequency", value: "Weekly or Daily" }
    ];

    const contentSections = [
        {
            title: "What are Temporary Files and why do they weigh on the PC?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Every time you install an app, browse the internet, or unzip a file, Windows 11 creates temporary copies in these folders. They should disappear on their own, but the system often 'forgets' gigabytes of data there.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            Accumulation of temporary files causes slowness in quick disk access (SSD/HDD), can corrupt installation caches, and in extreme cases, prevent essential updates due to lack of space.
        </p>
        
        <div class="bg-[#31A8FF]/10 border border-[#31A8FF]/30 p-6 rounded-2xl my-6">
            <h4 class="text-[#31A8FF] font-black mb-2 flex items-center gap-2">Storage Sense</h4>
            <p class="text-gray-300 text-sm">
                The native Windows 11 feature is a good start. Go to <b>Settings > System > Storage</b> and turn on the Sensor. It cleans the recycle bin and the downloads folder after a certain period.
            </p>
        </div>
      `
        },
        {
            title: "Automation via Task Scheduler",
            content: `
        <p class="mb-4 text-gray-300">
            For more aggressive cleaning, you can create a task that runs when Windows starts:
            <br/><br/>
            Executable Command: <code>cleanmgr.exe /sagerun:1</code>
            <br/><br/>
            This triggers the classic Disk Cleanup with your pre-defined settings, without you needing to open any window. However, it still ignores browser caches and heavy logs.
        </p>
      `
        },
        {
            title: "The Advantage of Voltris Ultra Cleaner",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            **Voltris Ultra Cleaner** was designed to go where Windows doesn't. It scans more than 50 critical system areas that accumulate trash.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Deep Registry Sanitization:** Removes references to files that no longer exist.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Universal Browser Cleaner:** Cleans caches of all installed browsers at once.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **One-Click Automation:** Configure to clean the system every time the PC reaches a junk limit.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "Can I delete the Prefetch folder without fear?",
            answer: "Yes, prefetch files are just 'maps' of how apps load. Windows recreates them as needed. Deleting them resolves inconsistencies and slowness in loading apps that were corrupted."
        },
        {
            question: "Does automatic cleaning delete my passwords?",
            answer: "No. Voltris temporary cleaning removes only image caches and trackers. Your passwords and autofill data are preserved unless you specifically select to delete them."
        }
    ];

    const relatedGuides = [
        { href: "/melhores-programas-otimizar-windows", title: "Top Cleaners", description: "See why Voltris is the deepest cleaner on the market." },
        { href: "/diagnostico-hardware-temperatura-pc", title: "SSD Health", description: "Understand how cleaning prolongs your SSD life." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="8 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Native Storage Sense configuration",
                "Automatic emptying of recycle bin and TEMP folders",
                "Automation script for Task Scheduler",
                "Using Ultra Cleaner for deep registry cleaning",
                "App loading time optimization (Prefetch/Superfetch)"
            ]}
        />
    );
}
