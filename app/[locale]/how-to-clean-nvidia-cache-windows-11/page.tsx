import { Metadata } from 'next';
import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `How to Clear NVIDIA Cache on Windows 11 (Shader Cache 2026)`,
        description: `Are your games experiencing micro-stutters? Learn how to clear the NVIDIA Shader Cache to fix performance issues and ensure smooth gameplay after new driver updates.`,
        keywords: ['how to clear nvidia cache windows 11', 'shader cache nvidia reset', 'clear dxcache nvidia', 'voltris ultra cleaner nvidia', 'fix stuttering nvidia windows 11', 'delete video driver cache'],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/how-to-clean-nvidia-cache-windows-11`,
            languages: {
                'en': `/en/how-to-clean-nvidia-cache-windows-11`,
                'es': `/es/how-to-clean-nvidia-cache-windows-11`,
                'pt-br': `/pt-br/how-to-clean-nvidia-cache-windows-11`,
                'de': `/de/how-to-clean-nvidia-cache-windows-11`,
                'fr': `/fr/how-to-clean-nvidia-cache-windows-11`,
                'it': `/it/how-to-clean-nvidia-cache-windows-11`,
                'ja': `/ja/how-to-clean-nvidia-cache-windows-11`,
                'ko': `/ko/how-to-clean-nvidia-cache-windows-11`,
                'ar': `/ar/how-to-clean-nvidia-cache-windows-11`
            }
        }
    };
}

export default function LimparCacheNvidia() {
    const title = 'How to Clean NVIDIA Cache in Windows 11 (Shader Cache 2026)';
    const description = 'Are your games experiencing micro-stutters? Learn how to clean NVIDIA Shader Cache to resolve performance issues and ensure smoothness in new driver updates.';
    const keywords = ['how to clean nvidia cache windows 11', 'shader cache nvidia reset', 'clean nvidia dxcache', 'voltris ultra cleaner nvidia', 'fix nvidia stuttering windows 11', 'delete video driver cache'];

    const summaryTable = [
        { label: "The Hidden Enemy", value: "Corrupted Shader Cache" },
        { label: "Biggest Benefit", value: "End of Stuttering" },
        { label: "Key Technique", value: "DXCache & GLCache Purge" },
        { label: "Recommended Frequency", value: "At every new Driver" }
    ];

    const contentSections = [
        {
            title: "What is Shader Cache and why does it freeze your game?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The **Shader Cache** is a database that your NVIDIA driver creates to store pre-compiled codes from your games' graphics engine. This should speed up loading, but when the cache gets too large or corrupted (especially after a driver update), it causes constant micro-stutters.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            If you feel that your Windows 11 is lagging even in simple menus or that your FPS is fluctuating, cleaning the <code>DXCache</code> and <code>GLCache</code> folders is the mandatory technical cleaning step.
        </p>
        
        <div class="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-emerald-400 font-black mb-2 flex items-center gap-2">Pro Config: Shader Cache Size</h4>
            <p class="text-gray-300 text-sm">
                In the NVIDIA Control Panel, we recommend setting the <code>Shader Cache Size</code> to **Unlimited**. This prevents Windows from overwriting important files but requires you to do manual cleaning (or automatic with Voltris) if the driver changes.
            </p>
        </div>
      `
        },
        {
            title: "How to Clean Manually (Without breaking the Driver)",
            content: `
        <p class="mb-4 text-gray-300">
            You should close all your games and navigate to:
            <br/><br/>
            <code>%LOCALAPPDATA%\\NVIDIA\\DXCache</code>
            <br/><br/>
            Delete everything possible inside this folder. Some files may be in use by Windows; ignore them. Repeat the process in the <code>GLCache</code> folder. This will force the system to rebuild the performance 'map' in a pure and stable way.
        </p>
      `
        },
        {
            title: "The Advantage of Voltris Ultra Cleaner GPU-Fix",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            The **Voltris Ultra Cleaner** has an exclusive module for cleaning video kernels that Windows ignores.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Deep Driver Flush:** Cleans records from old driver versions that conflict with the current one.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Auto DXCache Reset:** Schedules periodic shader cleanings to ensure PC stability.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **VRAM Management:** Frees up video memory reserved by zombie Windows processes.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "By cleaning the cache, will the game's first load be slow?",
            answer: "Yes, in the first 30 seconds of gameplay, the game will need to re-compile shaders. However, after this short stage, performance will be much more stable and fluid than before."
        },
        {
            question: "Does this work for AMD as well?",
            answer: "Although the guide focuses on NVIDIA, the shader structure in Windows is similar for AMD and Intel. Voltris Optimizer has dedicated modules to clean caches for all GPU brands."
        }
    ];

    const relatedGuides = [
        { href: "/melhores-programas-otimizar-windows", title: "Top Optimizers", description: "See why Voltris is the best for GPU maintenance." },
        { href: "/diagnostico-hardware-temperatura-pc", title: "Thermal Health", description: "Check if your graphics card is running hot." }
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
                "Differentiate DX11, DX12, and OpenGL caches",
                "Professional management of Shader Cache in NVIDIA Panel",
                "Deep cleaning of graphics driver records",
                "Optimization of video memory delivery by Windows",
                "End of micro-stuttering in new games"
            ]}
        />
    );
}
