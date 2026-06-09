import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';

export default function LimparRecentes() {
    const title = 'How to Clean Recent Files List in Windows 11 (Privacy 2026)';
    const description = 'Worried about who can see your recently opened files? Learn how to clean and disable the recent files history in Windows 11 from Explorer, Start, and Taskbar.';
    const keywords = ['clean recent files windows 11', 'disable files history windows 11', 'remove explorer recent list windows', 'voltris privacy shield files', 'how to hide opened files windows', 'delete documents history windows'];

    const summaryTable = [
        { label: "What They Are", value: "Records of recently opened files" },
        { label: "Biggest Benefit", value: "Total Privacy on Shared PCs" },
        { label: "Key Technique", value: "Privacy Settings & Shell Bag Cleanup" },
        { label: "Expected Result", value: "Zero Local Activity Trace" }
    ];

    const contentSections = [
        {
            title: "Why does Windows keep a history of everything you open?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Windows 11 keeps records of all files you recently opened in File Explorer, the Start Menu, and Office apps. This feature was intended for convenience, but on shared computers (family, work), it exposes your documents to anyone who uses the machine.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            Besides privacy, the recent files history grows over time and slows down Windows Search indexing, as the system tries to keep all these files quickly accessible.
        </p>
        <div class="bg-indigo-500/10 border border-indigo-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-indigo-400 font-black mb-2">Quick Cleaning via Explorer</h4>
            <p class="text-gray-300 text-sm">
                In File Explorer, click the ellipsis menu (…) > Options > Privacy > Clear. Also uncheck the two history checkboxes for new files. This is the quick option, but Voltris ensures that Registry data is cleared as well.
            </p>
        </div>
      `
        },
        {
            title: "Shell Bags: The Deepest History",
            content: `
        <p class="mb-4 text-gray-300">
            Beyond the visible Recents, Windows keeps record in <b>Shell Bags</b> (in the Registry) of the position of windows and folders you opened. This can reveal private folder structures to forensic software.
            <br/><br/>
            Voltris Privacy Shield removes Shell Bags automatically, ensuring that even Windows Search doesn't remember your previous folders.
        </p>
      `
        },
        {
            title: "Absolute Privacy with Voltris Privacy Shield",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            <b>Voltris Optimizer</b> offers deep local trace cleaning.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> <b>Recent Files Wipe:</b> Deletes all MRU (Most Recently Used) from the Registry.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> <b>Shell Bag Cleaner:</b> Removes the history of window positions and folder structures.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> <b>Auto-Clear on Shutdown:</b> Configures Windows to automatically clear history upon shutdown.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        { question: "Does clearing history affect PC speed?", answer: "Positively! With fewer entries in the MRU database, Windows Search indexes more efficiently and Explorer responds faster when typing in the address bar." },
        { question: "Does Office also keep separate history?", answer: "Yes. Voltris also cleans the MRUs of Word, Excel, and PowerPoint that are stored separately in the Registry." }
    ];

    const relatedGuides = [
        { href: "/guia-definitivo-privacidade-windows-2026", title: "Total Privacy", description: "Combine with full telemetry blocking." },
        { href: "/como-bloquear-anuncios-no-windows-11-total", title: "No Ads", description: "Complete your clean Windows experience." }
    ];

    return (
        <GuideTemplateClient
            title={title} description={description} keywords={keywords}
            estimatedTime="8 min" difficultyLevel="Beginner"
            contentSections={contentSections} summaryTable={summaryTable}
            relatedGuides={relatedGuides} faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Clear full MRU history from the Registry",
                "Remove Shell Bags from window positions",
                "Disable automatic registration of new files",
                "Clear Office history separately",
                "Configure automatic cleaning upon PC shutdown"
            ]}
        />
    );
}
