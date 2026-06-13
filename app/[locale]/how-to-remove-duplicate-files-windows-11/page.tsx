import { Metadata } from 'next';
import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `How to Remove Duplicate Files on Windows 11 (Guide 2026)`,
        description: `Is your hard drive full of duplicate files? Learn how to safely locate and delete duplicate photos, videos, and documents automatically on Windows 11.`,
        keywords: ['how to remove duplicate files windows 11', 'tool to find duplicate photos pc', 'free disk space removing duplicates', 'voltris ultra cleaner duplicates', 'auto delete duplicate files', 'how to free up hard drive space duplicates'],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/how-to-remove-duplicate-files-windows-11`,
            languages: {
                'en': `/en/how-to-remove-duplicate-files-windows-11`,
                'es': `/es/how-to-remove-duplicate-files-windows-11`,
                'pt-br': `/pt-br/how-to-remove-duplicate-files-windows-11`,
                'de': `/de/how-to-remove-duplicate-files-windows-11`,
                'fr': `/fr/how-to-remove-duplicate-files-windows-11`,
                'it': `/it/how-to-remove-duplicate-files-windows-11`,
                'ja': `/ja/how-to-remove-duplicate-files-windows-11`,
                'ko': `/ko/how-to-remove-duplicate-files-windows-11`,
                'ar': `/ar/how-to-remove-duplicate-files-windows-11`
            }
        }
    };
}

export default function RemoverDuplicados() {
    const title = 'How to Remove Duplicate Files in Windows 11 (2026 Guide)';
    const description = 'Is your HD full of repeated files? Learn how to locate and delete duplicate photos, videos, and documents safely and automatically in Windows 11.';
    const keywords = ['how to remove duplicate files windows 11', 'tool to find repeated photos on pc', 'clean disk removing duplicates', 'voltris ultra cleaner duplicates', 'delete repeated files automatic', 'how to free up hd space duplicates'];

    const summaryTable = [
        { label: "Where Duplicates Are", value: "Downloads, Photos and Cloud Sync Folders" },
        { label: "Biggest Benefit", value: "Massive Recovery of Gigabytes" },
        { label: "Key Technique", value: "MD5/SHA Hash Comparison" },
        { label: "Expected Result", value: "Cleaner and Organized Disk" }
    ];

    const contentSections = [
        {
            title: "Why do you have so many duplicate files in Windows 11?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Windows 11 makes copying files very easy, but organization very difficult. Workloads with **Google Drive**, **OneDrive**, or **Dropbox** often create unauthorized local copies. In addition, repeated downloads and manual backups generate digital junk that 'suffocates' storage.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            Duplicate files don't just take up space; they confuse Windows Search, slow down antivirus indexing, and make your backup take twice as long as necessary.
        </p>
        
        <div class="bg-blue-500/10 border border-blue-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-[#31A8FF] font-black mb-2 flex items-center gap-2">The Danger of File Names</h4>
            <p class="text-gray-300 text-sm">
                Relying only on the file name is a mistake. Two files named <code>photo1.jpg</code> can be different, while <code>IMG_2024.jpg</code> and <code>Copy_of_PHOTO.jpg</code> can be identical. The secret lies in the **Digital Signature (Hash)** of the content.
            </p>
        </div>
      `
        },
        {
            title: "The Difference between MD5 and SHA for Cleaning",
            content: `
        <p class="mb-4 text-gray-300">
            Professional cleaning tools like Voltris generate a <b>'digital fingerprint'</b> for each file. This ensures 100% accuracy: if the signature is the same, the file is exactly the same bit by bit, even if the name and creation date are different.
            <br/><br/>
            Removing duplicates bit-by-bit is the only way to ensure you don't accidentally delete an important file.
        </p>
      `
        },
        {
            title: "Optimizing Space with Voltris Ultra Cleaner",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            **Voltris Ultra Cleaner** has an intelligent <code>Duplicate Finder & Merger</code> tool.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Smart Selection:** Automatically marks only smaller or more recent copies, preserving the original.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Deep Content Scan:** Identifies duplicates based on the actual content of the image or video.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Preview Mode:** See what will be deleted before confirming permanent deletion.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "Does Voltris delete duplicates from system folders?",
            answer: "No. For security, Voltris protects Windows files. The duplicate tool focuses on user folders such as Documents, Images, Videos, and Downloads, where you really have control."
        },
        {
            question: "Can I remove duplicate videos that are very heavy?",
            answer: "Yes! This is one of the most requested features. Voltris scans files up to 100GB with SSD bus speed to find copies of old movies or video projects."
        }
    ];

    const relatedGuides = [
        { href: "/como-limpar-arquivos-temporarios-automaticamente", title: "Periodic Cleaning", description: "Combine with the removal of useless temporary files." },
        { href: "/otimizar-windows-para-edicao-de-video", title: "For Editors", description: "Keep your timeline organized without duplicates." }
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
                "Use digital signatures (Hash) for 100% accuracy",
                "Professional management of copies in Cloud services",
                "Automatic cleaning of Downloads and repeated Photo folders",
                "Visual preview before deleting videos and images",
                "Optimization of global Windows indexing time"
            ]}
        />
    );
}
