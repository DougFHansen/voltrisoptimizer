import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';

export default function InputLagPerifericos() {
    const title = 'How to Decrease Mouse and Keyboard Input Lag in Windows 11 (2026)';
    const description = 'Complete guide to reducing peripheral latency. Learn how to adjust Polling Rate, disable mouse acceleration via registry, and optimize keyboard refresh rate for instant response.';
    const keywords = ['decrease mouse input lag', 'remove mouse acceleration windows 11', 'optimize keyboard latency', 'voltris optimizer input lag', 'polling rate 1000hz windows', 'mouse acceleration registry'];

    const summaryTable = [
        { label: "What is Input Lag", value: "Delay between click and action" },
        { label: "Biggest Culprit", value: "LAN/USB Interrupt Moderation" },
        { label: "Key Adjustment", value: "Timer Resolution (0.5ms)" },
        { label: "Consequence", value: "Smoother and direct 1:1 aim" }
    ];

    const contentSections = [
        {
            title: "The Mouse Acceleration Problem (Enhance Pointer Precision)",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Windows 11 comes with a "Pointer Precision" feature enabled by default. Ironically, it does the opposite for gamers: it varies cursor speed based on how fast you move your hand. 
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            This breaks **Muscle Memory.** For headshot precision, 1cm on your mousepad should ALWAYS result in the same distance on the screen. Disabling this via Control Panel is the basic step, but there are hidden registry keys that maintain acceleration residues.
        </p>
        
        <div class="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-amber-400 font-black mb-2 flex items-center gap-2">Interrupt Moderation: The Click "Serial Killer"</h4>
            <p class="text-gray-300 text-sm">
                Windows USB controllers try to save energy by grouping interrupts. This generates a tiny wait interval, but Pro Players feel it as a "floaty mouse". Disabling energy saving on all USB hubs in Device Manager is vital.
            </p>
        </div>
      `
        },
        {
            title: "Optimizing Polling Rate",
            content: `
        <p class="mb-4 text-gray-300">
            Modern mice operate at <code>1000Hz</code>, <code>4000Hz</code>, or even <code>8000Hz</code>. If your Windows isn't optimized to handle this flood of data, you'll feel FPS drops when moving the mouse quickly.
            <br/><br/>
            For keyboards, the <b>Repeat Delay</b> adjustment in the Registry should be reduced to the minimum value (0), allowing successive commands to be read without the native OS delay.
        </p>
      `
        },
        {
            title: "The Voltris Optimizer Automatic Solution: Zero Latency",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            **Voltris Optimizer** acts directly on the communication layer between hardware and software (Kernel). With one click, it applies the famous <code>Mouse Registry Fix</code>.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Timer Precision:** Synchronizes the system timer to a constant 0.500ms (Superior to common Timer Resolution).</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **USB Latency Fix:** Selectively disables energy saving for gaming peripherals.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Interrupt Affinity:** Ensures mouse processing isn't interrupted by audio or network tasks.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "Does 8000Hz Polling Rate cause FPS drops?",
            answer: "Yes, on less powerful CPUs, processing 8,000 interrupts per second can drain resources. Voltris Optimizer helps mitigate this by optimizing Windows task scheduler priority."
        },
        {
            question: "Does Timer Resolution at 0.5ms shorten PC life?",
            answer: "No. This simply makes Windows check tasks more frequently. The only real 'disadvantage' is a tiny increase in energy consumption on laptops in battery mode."
        }
    ];

    const relatedGuides = [
        { href: "/otimizar-windows-11-para-valorant", title: "Gamer Optimization", description: "Combine low latency with maximum FPS." },
        { href: "/desativar-telemetria-windows", title: "Total Cleaning", description: "Remove lag caused by system tracking." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Complete removal of mouse acceleration via Registry",
                "Keyboard repeat rate adjustment",
                "Optimization of USB controllers (Interrupts)",
                "System Timer configuration to 0.5ms",
                "Peripheral energy saving deactivation"
            ]}
        />
    );
}
