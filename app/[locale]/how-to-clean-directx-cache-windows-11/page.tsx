import { Metadata } from 'next';
import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `How to Clear DirectX Cache on Windows 11 (2026)`,
        description: `Are your games stuttering for no reason? Learn how to clear the DirectX shader cache (DX11/DX12) on Windows 11 to eliminate stuttering and improve graphics stability.`,
        keywords: ['how to clear directx cache windows 11', 'clear directx 12 shaders windows', 'fix game stuttering windows 11', 'voltris ultra cleaner directx', 'delete graphics cache windows', 'reset directx shader cache'],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/how-to-clean-directx-cache-windows-11`,
            languages: {
                'en': `/en/how-to-clean-directx-cache-windows-11`,
                'es': `/es/how-to-clean-directx-cache-windows-11`,
                'pt-br': `/pt-br/how-to-clean-directx-cache-windows-11`,
                'de': `/de/how-to-clean-directx-cache-windows-11`,
                'fr': `/fr/how-to-clean-directx-cache-windows-11`,
                'it': `/it/how-to-clean-directx-cache-windows-11`,
                'ja': `/ja/how-to-clean-directx-cache-windows-11`,
                'ko': `/ko/how-to-clean-directx-cache-windows-11`,
                'ar': `/ar/how-to-clean-directx-cache-windows-11`
            }
        }
    };
}

export default function LimparDirectX() {
    const title = 'How to Clean DirectX Cache in Windows 11 (2026)';
    const description = 'Are your games stuttering for no reason? Learn how to clean DirectX shader cache (DX11/DX12) in Windows 11 to eliminate stuttering and improve graphical stability.';
    const keywords = ['how to clean directx cache windows 11', 'clean directx 12 shaders windows', 'fix windows 11 game stuttering', 'voltris ultra cleaner directx', 'delete graphic cache windows', 'reset directx shader cache'];

    const summaryTable = [
        { label: "The Enemy", value: "Corrupted Shader Cache" },
        { label: "Biggest Benefit", value: "End of Stutters in New Games" },
        { label: "Key Technique", value: "Disk Cleanup Legacy Shaders" },
        { label: "Expected Result", value: "Pure Graphics and Stutter-Free" }
    ];

    const contentSections = [
        {
            title: "Why clean the DirectX cache?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          DirectX (DX11, DX12) is the communication channel between your game and your graphics card. To speed up loading, Windows creates a 'database' of pre-processed shaders. When you update the driver or the game, this old database becomes useless and starts causing conflicts, generating the famous <b>Stuttering</b>.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            Many players attribute stuttering to weak hardware, but in fact, the culprit is Windows 11 'reading' zombie shaders that no longer match the current version of the game's API.
        </p>
        
        <div class="bg-blue-500/10 border border-blue-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-[#31A8FF] font-black mb-2 flex items-center gap-2">Cleaning via Native Disk Cleanup</h4>
            <p class="text-gray-300 text-sm">
                Windows 11 has a hidden option in the 'Disk Cleanup' tool called <b>DirectX Shader Cache</b>. Enabling it periodically ensures that the graphics driver rebuilds only what is strictly necessary for your current hardware.
            </p>
        </div>
      `
        },
        {
            title: "The Difference between DX11 and DX12 in Cache",
            content: `
        <p class="mb-4 text-gray-300">
            The DirectX 12 API is much more aggressive in shader usage. By cleaning the cache, you will force a small re-compilation the next time you open the game. This will ensure that your processor doesn't try to load corrupted files that lead to <b>Driver crashes (TDR Errors)</b> mid-match.
        </p>
      `
        },
        {
            title: "Advanced Optimization with Voltris Ultra Cleaner",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            **Voltris Optimizer** handles shaders through the <code>Ultra Hardware Diagnostics & Cleanup</code> tool.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Deep Graphics Reset:** One click to reset video pipelines without needing to reinstall drivers.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **VRAM Management:** Cleans residual video records that occupy unnecessary space on your graphics chip.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Shader Affinity:** Calibrates CPU delivery for initial shader compilation, making the game's first boot much faster.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "By cleaning the cache, do I lose image quality?",
            answer: "Absolutely not! Image quality is defined by the game settings. Cache cleaning only ensures that the graphics engine uses the purest files to render textures."
        },
        {
            question: "Does Voltris clean Steam games' cache as well?",
            answer: "Yes, our cleaning tool is universal and detects shader cache folders for all major game distribution systems and graphics drivers on the market."
        }
    ];

    const relatedGuides = [
        { href: "/como-limpar-cache-nvidia-windows-11", title: "NVIDIA Cache", description: "Exclusive optimizations for NVIDIA users." },
        { href: "/melhores-tweaks-performance-windows-11", title: "General Tweaks", description: "Other technical adjustments to boost your system." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Differentiate shader compilation and texture loading",
                "Professional management of DirectX cache (DX11/DX12)",
                "Absolute cleaning of graphics records and driver logs",
                "GPU scheduling optimization for fast compilation",
                "End of micro-stuttering generated by old shaders"
            ]}
        />
    );
}
