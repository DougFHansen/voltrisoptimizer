import { Metadata } from 'next';
import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `Como Otimizar o Windows 11 para Photoshop e Lightroom (2026)`,
        description: `Seu Photoshop está lento? Aprenda a configurar o disco de scratch, a GPU e a RAM para acelerar a edição de fotos no Windows 11 com o Adobe Photoshop e Lightroom Classic.`,
        keywords: ['otimizar windows 11 photoshop', 'acelerar lightroom classic windows', 'configurar scratch disk photoshop', 'voltris optimizer adobe photoshop', 'ram gpu photoshop windows 11', 'photoshop lento travando fix'],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/optimize-windows-for-photo-editing-photoshop`,
            languages: {
                'en': `/en/optimize-windows-for-photo-editing-photoshop`,
                'es': `/es/optimize-windows-for-photo-editing-photoshop`,
                'pt-br': `/pt-br/optimize-windows-for-photo-editing-photoshop`,
                'de': `/de/optimize-windows-for-photo-editing-photoshop`,
                'fr': `/fr/optimize-windows-for-photo-editing-photoshop`,
                'it': `/it/optimize-windows-for-photo-editing-photoshop`,
                'ja': `/ja/optimize-windows-for-photo-editing-photoshop`,
                'ko': `/ko/optimize-windows-for-photo-editing-photoshop`,
                'ar': `/ar/optimize-windows-for-photo-editing-photoshop`
            }
        }
    };
}

export default function PhotoshopPerformance() {
    const title = 'How to Optimize Windows 11 for Photoshop and Lightroom (2026)';
    const description = 'Is your Photoshop slow? Learn how to configure the scratch disk, GPU, and RAM to speed up photo editing in Windows 11 with Adobe Photoshop and Lightroom Classic.';
    const keywords = ['optimize windows 11 photoshop', 'speed up lightroom classic windows', 'configure scratch disk photoshop', 'voltris optimizer adobe photoshop', 'ram gpu photoshop windows 11', 'photoshop slow crashing fix'];

    const summaryTable = [
        { label: "Biggest Bottleneck", value: "Full Scratch Disk and Insufficient RAM" },
        { label: "Biggest Benefit", value: "Instant Filters and Smart Objects" },
        { label: "Key Technique", value: "Scratch Disk SSD & RAM Allocation" },
        { label: "Expected Result", value: "3x Faster RAW Export" }
    ];

    const contentSections = [
        {
            title: "Why does Photoshop crash in Windows 11?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Adobe Photoshop uses a <b>Scratch Disk</b> — a temporary disk to store history operations that do not fit in RAM. If this disk is the same as the operating system (C:) and is almost full, Photoshop will constantly freeze.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            Windows 11 can also limit the amount of RAM Photoshop uses, especially if there are background processes competing for resources. For photographers and designers, the right memory adjustment is the difference between waiting 10 seconds or 1 second for a filter.
        </p>
        <div class="bg-blue-500/10 border border-blue-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-[#31A8FF] font-black mb-2">Golden Setting: Scratch Disk on a Separate SSD</h4>
            <p class="text-gray-300 text-sm">
                In <b>Edit &gt; Preferences &gt; Scratch Disks</b>, set the Scratch to a different SSD from the operating system. This prevents Windows and Photoshop from fighting over the same I/O channel, immensely accelerating history operations and heavy transformations.
            </p>
        </div>
      `
        },
        {
            title: "Configuring the GPU in Photoshop",
            content: `
        <p class="mb-4 text-gray-300">
            Photoshop can use the GPU for Canvas rendering. In <b>Preferences &gt; Performance &gt; GPU Settings</b>, enable Advanced mode so that filters like Camera Raw and Liquify use the graphics card to the maximum.
            <br/><br/>
            For this to work, Voltris must have ensured that Windows is not limiting the delivery of VRAM to creative processes.
        </p>
      `
        },
        {
            title: "Optimization with Voltris: Creative DNA",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            <b>Voltris Optimizer</b> prepares Windows 11 for the professional creative workflow.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> <b>RAM Priority:</b> Ensures Photoshop accesses enough RAM without competing with Chrome.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> <b>Temp Cleanup:</b> Cleans up Photoshop temporary files that remain on C: after crashes.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> <b>Defender Exclusion:</b> Adds project directories to exclusions to stop the scanning of RAW files.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        { question: "Does installing more RAM improve Lightroom?", answer: "Yes, but only if Windows is free to deliver it. With Voltris eliminating background processes, you utilize 100% of the installed physical RAM." },
        { question: "Does Voltris improve export in Lightroom?", answer: "Certainly. By prioritizing disk I/O and disabling telemetry, batch RAW export speed can increase by up to 40%." }
    ];

    const relatedGuides = [
        { href: "/otimizar-windows-para-edicao-de-video", title: "Video Editing", description: "Optimize for Premiere and DaVinci as well." },
        { href: "/como-limpar-cache-nvidia-windows-11", title: "GPU Cache", description: "Clear shaders for more stable filters." }
    ];

    return (
        <GuideTemplateClient
            title={title} description={description} keywords={keywords}
            estimatedTime="15 min" difficultyLevel="Intermediate"
            contentSections={contentSections} summaryTable={summaryTable}
            relatedGuides={relatedGuides} faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Configure Scratch Disk on a dedicated SSD",
                "Allocate maximum RAM to Adobe processes",
                "Enable advanced GPU rendering in Photoshop",
                "Add project folders to Defender exclusions",
                "Cleanup of temporary files after Adobe crashes"
            ]}
        />
    );
}
