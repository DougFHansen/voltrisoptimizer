import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'notebook-gamer-bateria-otimizacao',
    title: "Gaming Laptop (2026): How to Make the Battery Last 5 Hours in Class",
    description: "Does your gaming laptop die in 1 hour? Learn how to disable the dedicated GPU (dGPU), limit CPU clock, and optimize Windows to last through entire classes.",
    category: 'hardware',
    difficulty: 'Intermediate',
    time: '30 min'
};

const title = "Gaming Laptop Battery: From 1h to 5h (2026)";
const description = "Gaming laptops are built for performance, not efficiency. But with the right adjustments, you can transform them into silent Ultrabooks for studies and work.";

const keywords = [
    'gaming laptop battery dying fast fix 2026',
    'how to disable dedicated gpu laptop battery guide',
    'throttlestop undervolt battery setup tutorial',
    'limit processor 50% battery windows 11',
    'acer nitro 5 battery last longer tips',
    'dell g15 battery optimization guide',
    'lenovo legion battery saver mode tutorial',
    '60hz on battery automatically windows 11',
    'hibernate vs sleep gaming laptop 2026',
    'voltris optimizer laptop guide'
];

export const metadata: Metadata = createGuideMetadata('notebook-gamer-bateria-otimizacao', title, description, keywords);

export default function BatteryGuide() {
    const summaryTable = [
        { label: "Refresh Rate", value: "60Hz (On Battery)" },
        { label: "GPU Mode", value: "Eco / iGPU Only" },
        { label: "CPU Turbo", value: "Disabled" },
        { label: "Brightness", value: "40-50%" },
        { label: "Apps", value: "Background Off" },
        { label: "Bluetooth", value: "Off" },
        { label: "Power Plan", value: "Efficiency" }
    ];

    const contentSections = [
        {
            title: "Introduction: The dGPU Villain",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The biggest energy consumer in your laptop is the dedicated graphics card (RTX 3050/4060). Even when idle, it draws power. The secret is to force the use of integrated graphics (Intel/AMD) when you're off the charger.
        </p>
      `
        },
        {
            title: "Chapter 1: Refresh Rate (60Hz)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Switch to 60Hz</h4>
                <p class="text-gray-400 text-xs text-justify">
                    144Hz/165Hz screens consume 3x more energy to refresh pixels.
                    <br/>Go to Settings > Display > Advanced display.
                    <br/>Change to <strong>60Hz</strong> when at school or work. Some laptops (Asus/Razer) can do this automatically when you unplug.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: MUX Switch and Optimus",
            content: `
        <p class="mb-4 text-gray-300">
            Open your laptop's management software (Armoury Crate, Dell Command, Lenovo Vantage).
            <br/>Look for <strong>GPU Mode</strong>.
            <br/>- <strong>Ultimate/Discrete:</strong> Uses only the RTX. Heavy battery drain.
            <br/>- <strong>Eco/Optimized/Hybrid:</strong> Disables the RTX and uses Intel HD/Radeon Graphics. <span class="text-emerald-400">USE THIS MODE</span> on battery.
            <br/>If you close apps using the GPU (e.g., Epic Games Launcher), the RTX turns off completely (0W draw).
        </p>
      `
        },
        {
            title: "Chapter 3: Power Plan and Processor",
            content: `
        <p class="mb-4 text-gray-300">
            Control Panel > Power Options > Create a power plan.
            <br/>Name it \"Max Battery\".
            <br/>Go to \"Change plan settings\" > \"Change advanced power settings\".
            <br/>- <strong>Processor power management > Maximum processor state:</strong> Set to <strong>99%</strong> or <strong>80%</strong>.
            <br/>This DISABLES Turbo Boost. Your 4.5GHz CPU will run at around 2.5GHz. For Word/Excel, this is plenty, and the CPU stays cool (35°C), often keeping the fans completely silent.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: ThrottleStop (Advanced)",
            content: `
        <p class="mb-4 text-gray-300">
            Download <a href="https://www.techpowerup.com/download/techpowerup-throttlestop/" class="text-blue-400 hover:underline">ThrottleStop</a> (Advanced software, use caution).
            <br/>Create a \"Battery\" profile.
            <br/>Check <strong>\"Disable Turbo\"</strong>.
            <br/>Increase <strong>Speed Shift EPP</strong> to 128 or 200 (The higher the value, the more the PC prioritizes energy saving).
        </p>
      `
        },
        {
            title: "Chapter 5: Undervolt (If Locked)",
            content: `
        <p class="mb-4 text-gray-300">
            Most modern laptops (Intel 12th gen+) lock undervolting.
            <br/>However, you can still limit <strong>TDP (PL1/PL2)</strong>.
            <br/>In ThrottleStop, click the TPL button. Lower \"Long Power PL1\" to 15W. Your i7 will behave like an efficient i3 ultrabook.
        </p>
      `
        },
        {
            title: "Chapter 6: Hibernate vs Sleep",
            content: `
        <p class="mb-4 text-gray-300">
            Windows 11's \"Modern Standby\" is often buggy. The laptop can wake up in your bag, heat up, and drain battery.
            <br/>Recommendation: Use <strong>HIBERNATE</strong> instead of Sleep when closing the lid for long periods. SSD boot times are fast (10s), and hibernation consumes 0% battery.
        </p>
      `
        },
        {
            title: "Chapter 7: Efficient Browsers",
            content: `
        <p class="mb-4 text-gray-300">
            Use <strong>Edge</strong> with \"Efficiency mode\" turned on.
            <br/>Avoid Chrome with excessive extensions.
            <br/>Avoid watching 4K YouTube videos on battery (video decoding uses a lot of power). Stick to 720p or 1080p.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: RGB Lighting",
            content: `
            <p class="mb-4 text-gray-300">
                Turn off the RGB keyboard and lid/logo lighting.
                <br/>LEDs consume about 1 to 3 Watts. On a 50Wh battery, that's roughly 20 minutes less life. Use Fn keys to turn them off.
            </p>
            `
        },
        {
            title: "Chapter 9: Battery Calibration",
            content: `
            <p class="mb-4 text-gray-300">
                Every 3 months, let the battery discharge to 0% (shut down) and charge to 100% without interruption.
                <br/>This recalibrates the Windows meter to show the true percentage and use all battery cells effectively.
            </p>
            `
        },
        {
            title: "Chapter 10: Charge Limiter (80%)",
            content: `
            <p class="mb-4 text-gray-300">
                If you use your laptop plugged in 90% of the time, enable the \"Charge Limiter\" in the manufacturer software (Asus Battery Health / Dell Power Manager).
                <br/>Limit charge to 60% or 80%. Keeping a battery at 100% all the time degrades lithium cells due to heat and high voltage.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is it bad to game on battery?",
            answer: "It won't damage the hardware, but the battery will only last about 45 minutes and performance will be cut in half (low FPS) because the battery cannot deliver enough power."
        },
        {
            question: "Should I remove the battery when playing while plugged in?",
            answer: "No! Modern laptops use the battery as a buffer during power spikes. Plus, if the power goes out, you lose your work. Keep the battery connected."
        },
        {
            question: "Does Cooler Boost drain the battery?",
            answer: "Yes, fans at 100% RPM (6000+ RPM) consume significant energy. In battery/eco mode, fans should stay idle or at low speeds."
        }
    ];

    const externalReferences = [
        { name: "ThrottleStop Download", url: "https://www.techpowerup.com/download/techpowerup-throttlestop/" },
        { name: "BatteryBar (Monitoring)", url: "https://batterybarpro.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/google-chrome-consumo-ram-fix",
            title: "Chrome Optimization",
            description: "Less RAM = Less energy draw."
        },
        {
            href: "/guides/instalacao-windows-11",
            title: "Clean Windows",
            description: "Fewer background processes."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Guide",
            description: "Faster hibernation and resume."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
            difficultyLevel="Intermediate"
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

