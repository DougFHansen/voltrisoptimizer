import { Metadata } from 'next';
import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `How to Disable VBS on Windows 11 to Gain FPS (Gamer Guide 2026)`,
        description: `Learn how to disable Virtualization Based Security (VBS) and Core Isolation (HVCI). Recover up to 25% performance in demanding and competitive games on Windows 11.`,
        keywords: ['how to disable vbs windows 11 gamer', 'vbs vs performance windows 11', 'disable core isolation fps', 'voltris dna vbs bypass', 'improve fps windows 11 virtualization', 'hvci off windows 11 gamer'],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/how-to-disable-vbs-windows-11-gamer`,
            languages: {
                'en': `/en/how-to-disable-vbs-windows-11-gamer`,
                'es': `/es/how-to-disable-vbs-windows-11-gamer`,
                'pt-br': `/pt-br/how-to-disable-vbs-windows-11-gamer`,
                'de': `/de/how-to-disable-vbs-windows-11-gamer`,
                'fr': `/fr/how-to-disable-vbs-windows-11-gamer`,
                'it': `/it/how-to-disable-vbs-windows-11-gamer`,
                'ja': `/ja/how-to-disable-vbs-windows-11-gamer`,
                'ko': `/ko/how-to-disable-vbs-windows-11-gamer`,
                'ar': `/ar/how-to-disable-vbs-windows-11-gamer`
            }
        }
    };
}

export default function DesativarVBS() {
    const title = 'How to Disable VBS in Windows 11 to Gain FPS (Gamer Guide 2026)';
    const description = 'Learn how to disable Virtualization-Based Security (VBS) and Memory Integrity (HVCI). Recover up to 25% performance in heavy and competitive games on Windows 11.';
    const keywords = ['how to disable vbs windows 11 gamer', 'vbs vs performance windows 11', 'disable core isolation fps', 'voltris dna vbs bypass', 'improve fps windows 11 virtualization', 'hvci off windows 11 gamer'];

    const summaryTable = [
        { label: "What is VBS", value: "Virtualization-Based Security" },
        { label: "Impact on Games", value: "Up to 25% less FPS and more stutter" },
        { label: "Key Technique", value: "Disable HVCI and Guard Edge" },
        { label: "Expected Result", value: "Unlocked PC and more stability" }
    ];

    const contentSections = [
        {
            title: "What is VBS and why does it steal your Performance?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          <b>VBS</b> (Virtualization-Based Security) is a feature that isolates a portion of RAM for corporate security. However, for gamers, it generates a constant load on the CPU to translate application commands to hardware ('VM overhead').
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            If you want maximum frames per second, the system should not waste time translating anything. It should go directly to the hardware. Disabling VBS is the number 1 adjustment recommended by all professional gamer hardware manufacturers.
        </p>
        
        <div class="bg-red-500/10 border border-red-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-red-400 font-black mb-2 flex items-center gap-2">Hardware Alert</h4>
            <p class="text-gray-300 text-sm">
                Disabling VBS and Memory Integrity is recommended for those who use their PC primarily for games. If you work in high-security corporate environments with sensitive data, evaluate the balance between risks and performance.
            </p>
        </div>
      `
        },
        {
            title: "Memory Integrity (HVCI) vs Performance",
            content: `
        <p class="mb-4 text-gray-300">
            <b>Memory Integrity</b> (HVCI) checks if drivers are safe in real-time. This creates a delay at each hardware interruption, generating <b>Unstable Frametime</b>.
            <br/><br/>
            To disable, go to: <b>Windows Security > Device Security > Core Isolation</b>. If the button is 'gray' or unavailable, Voltris can force this deactivation through the Registry or Hypervisor Policy in a professional manner.
        </p>
      `
        },
        {
            title: "Optimizing with Voltris Optimizer: Unlocker",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            **Voltris Optimizer** handles VBS and Hyper-V with advanced commands that ensure your PC doesn't enter a 'Repair Loop'.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **VBS Direct Disable:** Turns off the feature without needing to format or mess with the BIOS.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Hypervisor Off:** Unloads virtualization drivers that games do not use.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Gaming Affinity:** Ensures game processes use all real CPU cores without virtual security 'barriers'.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "Does this increase FPS in Valorant and CS2?",
            answer: "Yes, especially in those games that depend heavily on the processing speed of a single core. Decreasing Hypervisor load makes the clock rise more stably."
        },
        {
            question: "Does VBS affect PCs with AMD or Intel processors?",
            answer: "Both, but users of older processor generations (Intel 9th/10th Gen and Ryzen 2000/3000) feel the performance gain much more aggressively when disabling VBS."
        }
    ];

    const relatedGuides = [
        { href: "/melhores-tweaks-performance-windows-11", title: "Top Tweaks", description: "Combine with the best registry settings." },
        { href: "/otimizar-windows-11-para-valorant", title: "Gamer Optimization", description: "For when competitive play is your total focus." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Professional deactivation of Memory Integrity",
                "Hypervisor management for real FPS gain",
                "Professional virtualization security configuration",
                "Optimization of L3 Cache and Latency",
                "Fine-tuning via Registry (VBS Control)"
            ]}
        />
    );
}
