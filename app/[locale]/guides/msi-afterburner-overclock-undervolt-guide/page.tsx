import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'msi-afterburner-overclock-undervolt-guia',
    title: "MSI Afterburner (2026): Safe Overclock and Undervolt Guide",
    description: "Boost your graphics card's FPS for free with overclocking or reduce temperatures by 10°C with undervolting. A step-by-step guide for beginners.",
    category: 'hardware',
    difficulty: 'Advanced',
    time: '45 min'
};

const title = "MSI Afterburner: Safe Overclock and Undervolt Guide";
const description = "Extract 10% more performance from your GPU or make it run cool and silent. The definitive guide for NVIDIA and AMD cards.";

const keywords = [
    'how to overclock gpu msi afterburner safely guide',
    'undervolt rtx 3060 temperature reduction tutorial',
    'msi afterburner fan curve setup 2026',
    'safe gpu power limit settings tutorial',
    'core clock vs memory clock for gaming fps',
    'kombustor stress test guide msi afterburner',
    'pc crashing after overclocking fix',
    'voltris optimizer gpu optimization',
    'rtx 4060 undervolt tutorial guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('msi-afterburner-overclock-undervolt-guia', title, description, keywords, locale);
}

export default function AfterburnerGuide() {
    const summaryTable = [
        { label: "Software", value: "MSI Afterburner" },
        { label: "Stress Test", value: "Kombustor / Heaven" },
        { label: "Core Clock", value: "+50 to +150 MHz" },
        { label: "Memory Clock", value: "+200 to +1000 MHz" },
        { label: "Power Limit", value: "Maximum (Slider)" },
        { label: "Temp Limit", value: "83°C (Default)" },
        { label: "Undervolt", value: "Ctrl + F (Curve)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Risk vs Reward",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          GPU overclocking today is very safe. Modern cards have safety locks that will shut down the PC before anything burns out. The worst that usually happens is a video driver restart.
        </p>
      `
        },
        {
            title: "Chapter 1: Preparation",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Step-by-Step</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Download <strong>MSI Afterburner</strong> (from the official MSI site or Guru3D). Beware of fake sites!
                    <br/>2. Download <strong>MSI Kombustor</strong> or <strong>Unigine Heaven</strong> to test stability.
                    <br/>3. Open Afterburner and increase <strong>Power Limit</strong> and <strong>Temp Limit</strong> to the maximum allowed. This tells the card: \"You can use as much power as you need.\"
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Overclocking (Core Clock)",
            content: `
        <p class="mb-4 text-gray-300">
            Increase your <strong>Core Clock (MHz)</strong> in increments of 10.
            <br/>Run Kombustor for 1 minute.
            <br/>If it doesn't crash and no artifacts appear (colored streaks on the screen), increase it by another 10.
            <br/>Generally, +100MHz is safe. +150MHz is lucky. +200MHz often causes crashes.
            <br/>Once you find the limit, back off about 10MHz for a safety margin.
        </p>
      `
        },
        {
            title: "Chapter 3: Overclocking (Memory Clock)",
            content: `
        <p class="mb-4 text-gray-300">
            GDDR6 memory can handle quite a bit of overclocking.
            <br/>Start with +200MHz. Work your way up by 100MHz at a time.
            <br/>Many cards can handle +500MHz or even +1000MHz.
            <br/>Signs of memory errors: Flashing black blocks or corrupted textures. If you see this, lower the clock.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Undervolting (The 'Magic' Technique)",
            content: `
        <p class="mb-4 text-gray-300">
            Undervolting maintains the same clock speed (performance) while using less voltage.
            <br/>The result: A cooler card (-10°C) and quieter fans.
            <br/>1. Press <strong>Ctrl + F</strong> to open the voltage curve.
            <br/>2. Choose a voltage (e.g., 900mV).
            <br/>3. Move the point for that voltage up to your desired frequency (e.g., 1900MHz).
            <br/>4. Flatten the curve after that point (a straight horizontal line).
            <br/>5. Apply. Your card will now run at 1900MHz locked at 900mV, instead of jumping to 1050mV and heating up.
        </p>
      `
        },
        {
            title: "Chapter 5: Fan Curve",
            content: `
        <p class="mb-4 text-gray-300">
            Don't leave it on Auto if your card runs hot.
            <br/>In Settings > Fan: Enable the user-defined software auto-fan control.
            <br/>Set it to 100% fan speed when the temp hits 80°C.
            <br/>Configure 0% (Zero Frozr) below 40°C for total silence on the desktop.
        </p>
      `
        },
        {
            title: "Chapter 6: OSD (Monitoring)",
            content: `
        <p class="mb-4 text-gray-300">
            Want to see FPS and temperature in-game?
            <br/>Settings > Monitoring.
            <br/>Click on \"GPU Temperature\" and check \"Show in On-Screen Display\".
            <br/>Do the same for \"Framerate\" and \"RAM Usage\".
            <br/>This will automatically trigger RivaTuner.
        </p>
      `
        },
        {
            title: "Chapter 7: Startup (Boot with Windows)",
            content: `
        <p class="mb-4 text-gray-300">
            Only enable the \"Startup\" button (Windows Logo) AFTER testing your overclock for days across multiple games.
            <br/>If you enable Startup on an unstable setting, your PC may crash as soon as it boots (Boot Loop).
            <br/>If this happens, enter Safe Mode and uninstall Afterburner.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Laptops",
            content: `
            <p class="mb-4 text-gray-300">
                On laptops, the Power Limit is usually locked by the BIOS.
                <br/>You can generally only adjust the Core and Memory clocks.
                <br/>Undervolting is EVEN MORE IMPORTANT on laptops to avoid Thermal Throttling.
            </p>
            `
        },
        {
            title: "Chapter 9: NVIDIA vs AMD",
            content: `
            <p class="mb-4 text-gray-300">
                Afterburner works on both. However, for AMD cards, the \"Adrenalin\" software already has these features built-in under the Tuning tab and is often better to use.
            </p>
            `
        },
        {
            title: "Chapter 10: 2D/3D Profiles",
            content: `
            <p class="mb-4 text-gray-300">
                You can save profiles (1 through 5).
                <br/>Create Profile 1 (Stock/Silent) for web browsing.
                <br/>Create Profile 2 (Overclock) for gaming.
                <br/>Use hotkeys to switch between them quickly.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does overclocking reduce lifespan?",
            answer: "Theoretically, yes, due to electromigration. In practice, instead of lasting 15 years, your card may last 14. You will likely upgrade it long before then. What kills a card is excessive heat (90°C+), not frequency."
        },
        {
            question: "Screen flickered and settings reset?",
            answer: "The video driver crashed because the overclock was unstable. Windows recovered automatically. Lower the clocks and try again."
        },
        {
            question: "Does warranty cover OC?",
            answer: "Usually, yes, if done via software. Manufacturers like MSI even encourage it. It DOES NOT cover hardware damage if you modify the card's BIOS."
        }
    ];

    const externalReferences = [
        { name: "MSI Afterburner Official", url: "https://www.msi.com/Landing/afterburner/graphics-cards" },
        { name: "Unigine Heaven Benchmark", url: "https://benchmark.unigine.com/heaven" }
    ];

    const relatedGuides = [
        {
            href: "/guides/notebook-gamer-bateria-otimizacao",
            title: "Laptop Guide",
            description: "Thermal tips for mobile gaming."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia Guide",
            description: "The ideal companion settings."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="45 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}

