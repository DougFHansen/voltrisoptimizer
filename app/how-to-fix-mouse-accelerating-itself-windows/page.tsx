import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';

export default function MouseAcceleration() {
    const title = 'How to Fix Mouse Auto-Acceleration in Windows 11 (2026)';
    const description = 'Is your cursor moving strangely or accelerating uncontrollably? Learn how to disable mouse acceleration in Windows 11 to have a 1:1 pointer and greater precision in games.';
    const keywords = ['how to disable mouse acceleration windows 11', 'mouse auto-acceleration fix', 'imprecise mouse pointer windows 11', 'voltris latency optimizer mouse', 'enhance pointer precision off windows', 'configure gamer mouse sensitivity'];

    const summaryTable = [
        { label: "The Problem", value: "Pointer Moves at Variable Speed" },
        { label: "Major Benefit", value: "1:1 Response and Consistent Aim" },
        { label: "Key Technique", value: "Enhance Pointer Precision OFF & Raw Input" },
        { label: "Expected Result", value: "Maximum Precision in Every Click" }
    ];

    const contentSections = [
        {
            title: "What is Mouse Acceleration and why is it harmful?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          By default, Windows 11 enables the <b>Enhance Pointer Precision</b> feature. This feature adjusts the cursor speed based on <i>how fast</i> you move the mouse — the faster you move it, the more distance the cursor covers.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            For everyday use this seems convenient, but for competitive players, it destroys aim consistency. Every mouse movement needs to be 1:1, pure, and predictable.
        </p>
        <div class="bg-red-500/10 border border-red-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-red-400 font-black mb-2">Disabling via Settings</h4>
            <p class="text-gray-300 text-sm">
                Path: <b>Control Panel > Mouse > Pointer Options > uncheck "Enhance pointer precision"</b>. This is step number 1 of any serious competitive setup.
            </p>
        </div>
      `
        },
        {
            title: "Raw Input: The Pros' Standard",
            content: `
        <p class="mb-4 text-gray-300">
            In modern games like Valorant and CS2, there is a <b>Raw Input</b> option that completely bypasses Windows settings and reads the mouse sensor directly. Enabling this in-game ensures that not even Windows can interfere with your aim's movement.
            <br/><br/>
            With Voltris, we ensure the mouse driver has maximum interrupt priority so even Raw Input doesn't encounter system latency.
        </p>
      `
        },
        {
            title: "Professional Calibration with Voltris",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            The <b>Voltris Optimizer</b> offers total control over the peripheral input chain.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> <b>Pointer Precision OFF:</b> Disables via Registry to make it permanent.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> <b>USB Polling Priority:</b> Ensures the mouse is read at a maximum of 1000Hz without interruptions.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> <b>SPI Speed Fix:</b> Corrects pointer speed values in the Registry to the correct 6/11 scale.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        { question: "Does mouse DPI affect acceleration?", answer: "Not directly. DPI is the sensitivity of the physical sensor and is not related to Windows software acceleration. The ideal is to use high DPI on the mouse and low sensitivity in the game, without acceleration." },
        { question: "Does Voltris work with wireless mice?", answer: "Yes. We optimize the wireless USB receiver for low-latency polling, ensuring the same precision as a wired mouse." }
    ];

    const relatedGuides = [
        { href: "/como-diminuir-input-lag-teclado-mouse", title: "Zero Input Lag", description: "Combine with very low keyboard and mouse latency." },
        { href: "/melhores-configuracoes-de-som-para-jogos-windows", title: "Elite Audio", description: "Complete your competitive setup with precise sound." }
    ];

    return (
        <GuideTemplateClient
            title={title} description={description} keywords={keywords}
            estimatedTime="8 min" difficultyLevel="Beginner"
            contentSections={contentSections} summaryTable={summaryTable}
            relatedGuides={relatedGuides} faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Permanently disable Enhance Pointer Precision",
                "Configure Raw Input in competitive games",
                "Correct pointer speed scale (6/11)",
                "Optimize USB receiver polling rate",
                "Eliminate Windows sensor interference"
            ]}
        />
    );
}
