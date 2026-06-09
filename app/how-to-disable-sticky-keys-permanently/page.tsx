import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';

export default function StickyKeys() {
    const title = 'How to Disable Sticky Keys in Windows 11 (Permanently)';
    const description = 'Does the Sticky Keys popup appear every time you use Shift? Learn how to permanently disable this accessibility feature and never be interrupted during your games again.';
    const keywords = ['how to disable sticky keys windows 11', 'sticky keys appearing in game', 'disable sticky keys windows definitive', 'voltris optimizer gaming tweaks', 'suppress sticky keys windows 11', 'how to remove shift warning windows games'];

    const summaryTable = [
        { label: "The Problem", value: "Popup in the middle of matches when pressing Shift" },
        { label: "Major Benefit", value: "Zero Interruptions in Competitive Games" },
        { label: "Key Technique", value: "Registry Accessibility Flags" },
        { label: "Expected Result", value: "Fluid Gameplay Without Distractions" }
    ];

    const contentSections = [
        {
            title: "Why are Sticky Keys so annoying for gamers?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          <b>Sticky Keys</b> were created as an accessibility feature for users who have difficulty pressing multiple keys at the same time. However, for any gamer using <b>Shift + ability</b>, the unwanted popup can appear at the worst possible moment — like during a decisive 1v5.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            The most common method is just unchecking the option in the settings, but Windows 11 may re-enable them after updates. The ultimate solution is via the Registry.
        </p>
        <div class="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-amber-400 font-black mb-2 flex items-center gap-2">Quick Route: Accessibility Settings</h4>
            <p class="text-gray-300 text-sm">
                Path: <b>Settings > Accessibility > Keyboard > Sticky Keys</b>. Disable the main toggle and also the option "Keyboard shortcut for Sticky Keys" — this last one is what triggers the popup in-game.
            </p>
        </div>
      `
        },
        {
            title: "Permanent Disabling via Registry",
            content: `
        <p class="mb-4 text-gray-300">
            To ensure Windows Update doesn't revert your configuration, access the Registry:
            <br/><br/>
            Path: <code>HKEY_CURRENT_USER\\Control Panel\\Accessibility\\StickyKeys</code>
            <br/><br/>
            Set the <b>Flags</b> value to <b>506</b>. This permanently disables both the shortcut key and the warning sound.
        </p>
      `
        },
        {
            title: "Voltris Anti-Interruption Kit: Gaming Shield",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            The <b>Voltris Optimizer</b> includes a complete package for disabling accessibility features that harm the gaming experience.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#fcd34d] mt-1.5 shrink-0"></div> <b>Sticky Keys Off:</b> Disables via Registry to resist updates.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#fcd34d] mt-1.5 shrink-0"></div> <b>Filter Keys Off:</b> Eliminates typing lag caused by keyboard accessibility.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#fcd34d] mt-1.5 shrink-0"></div> <b>Toggle Keys Off:</b> Removes the annoying beep from Caps Lock and Num Lock.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        { question: "By disabling, do users with disabilities lose access?", answer: "This guide is for users who don't need this feature. If there is another user who depends on accessibility on the same machine, Voltris allows you to restore everything in one click." },
        { question: "Does this work on Windows 10 as well?", answer: "Yes, the Registry path is identical. Voltris automatically detects the Windows version and applies the correct tweak." }
    ];

    const relatedGuides = [
        { href: "/corrigir-lag-pontual-no-teclado-windows", title: "Keyboard Lag", description: "Other keyboard precision adjustments." },
        { href: "/como-diminuir-input-lag-teclado-mouse", title: "Zero Input Lag", description: "Instant response on all peripherals." }
    ];

    return (
        <GuideTemplateClient
            title={title} description={description} keywords={keywords}
            estimatedTime="5 min" difficultyLevel="Beginner"
            contentSections={contentSections} summaryTable={summaryTable}
            relatedGuides={relatedGuides} faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Permanently disable Sticky Keys via Registry",
                "Eliminate Shift popup in competitive games",
                "Remove warning sounds from special keys",
                "Block automatic re-activation after Windows Update",
                "Complete one-click Gaming UX kit"
            ]}
        />
    );
}
