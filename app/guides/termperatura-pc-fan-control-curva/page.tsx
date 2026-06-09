import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'termperatura-pc-fan-control-curva',
    title: "Temperature and Fan Control: How to Avoid Thermal Throttling",
    description: "Is your PC slow after 30 min of gaming? It might be heat issues. Learn to monitor temperatures with HWMonitor and create custom fan curves with FanControl.",
    category: 'hardware',
    difficulty: 'Intermediate',
    time: '25 min'
};

const title = "Temperature Control (2026): Silence vs Performance";
const description = "Thermal Throttling is the silent killer of FPS. If your CPU hits 95°C, it cuts speed in half to avoid burning. Solve this now.";

const keywords = [
    'how to use fan control github tutorial',
    'cpu 90 degrees normal while gaming',
    'what is thermal throttling explained',
    'ideal processor fan curve settings',
    'fan case setup pressure positive negative',
    'how to see temperature with hwmonitor',
    'laptop overheating what to do 2026',
    'voltris optimizer cooling',
    'pump speed aio water cooler'
];

export const metadata: Metadata = createGuideMetadata('termperatura-pc-fan-control-curva', title, description, keywords);

export default function TempGuide() {
    const summaryTable = [
        { label: "Software", value: "FanControl (GitHub)" },
        { label: "Monitor", value: "HWMonitor / HWiNFO" },
        { label: "Safe CPU", value: "Below 85°C" },
        { label: "Safe GPU", value: "Below 80°C" },
        { label: "Hotspot Limit", value: "100°C" },
        { label: "Idle Temp", value: "35-45°C" },
        { label: "Thermal Paste", value: "Replace every 2 years" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Invisible Enemy",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Your PC doesn't warn you "I'm hot." It simply starts to lag. When the CPU reaches 95°C (Intel) or 90°C (Ryzen), the clock drops from 5.0GHz to 3.5GHz. This is called <strong>Throttling</strong>.
        </p>
      `
        },
        {
            title: "Chapter 1: Monitoring (Diagnosis)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">HWMonitor</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Download and run <strong>CPUID HWMonitor</strong>.
                    <br/>2. Play for 20 minutes.
                    <br/>3. Alt-Tab and check the \"Max\" column.
                    <br/>- <strong>CPU Package:</strong> If it's > 90°C, you have a problem.
                    <br/>- <strong>GPU Hotspot:</strong> If it's > 105°C, there's likely a problem with the thermal paste on your graphics card.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: FanControl (The Best Tool)",
            content: `
        <p class="mb-4 text-gray-300">
            Forget BIOS-based control. Use <strong>FanControl</strong> (open-source).
            <br/>It detects all the fans in your PC and allows you to create mixed curves.
            <br/>Example: You can make the case fans speed up based on the MAX temperature between the CPU and GPU. This way, if EITHER one gets hot, the air circulates more efficiently.
        </p>
      `
        },
        {
            title: "Chapter 3: Creating the Ideal Curve",
            content: `
        <p class="mb-4 text-gray-300">
            - Up to 50°C: 30% or 0% (Silence mode).
            - At 70°C: 60% (Audible but acceptable for gaming).
            - At 85°C: 100% (Emergency turbine mode).
            <br/>Enable \"Hysteresis\" (Delay). This prevents the fan from oscillating (Vroom... Vroom...) if the temperature jumps quickly between 69°C and 71°C.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Airflow Strategy",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Positive Pressure:</strong> More air entering than exiting. Good for avoiding dust (excess air exits through cracks).
            - <strong>Standard Setup:</strong> Front/Bottom fans should blow air IN. Rear/Top fans should blow air OUT (hot air rises).
            - CPU Air Cooler: The fan should blow TOWARDS the heatsink and towards the back of the case.
        </p>
      `
        },
        {
            title: "Chapter 5: AIO Water Cooler (Pump Speed)",
            content: `
        <p class="mb-4 text-gray-300">
            The Water Cooler pump should always run at 100% or close to it. Pumps are usually silent and need to circulate water constantly.
            <br/>Only adjust the speed of the radiator fans.
            <br/>If the pump stops, the CPU hit 100°C in 5 seconds.
        </p>
      `
        },
        {
            title: "Chapter 6: Thermal Paste and VRAM",
            content: `
        <p class="mb-4 text-gray-300">
            Thermal paste dries out. If your PC is 3 years old and running hot, replace it.
            <br/>In GPUs, use Thermal Pads on VRAM chips. GDDR6X memories (RTX 3070 Ti+) reach 110°C easily if the pads are poor.
        </p>
      `
        },
        {
            title: "Chapter 7: Undervolt (Better than Fans)",
            content: `
        <p class="mb-4 text-gray-300">
            The most efficient way to lower temperature isn't setting fans to 100% (noisy), but performing an <strong>Undervolt</strong> on the CPU/GPU.
            <br/>Fewer Volts = Fewer Watts = Less Heat.
            <br/>Check our Afterburner and BIOS guides for step-by-step instructions.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Dust Maintenance",
            content: `
            <p class="mb-4 text-gray-300">
                Dust in the filters blocks air. Your PC suffocates.
                <br/>Clean dust filters every 3 months.
                <br/>Use compressed air to clean the heatsink fins.
            </p>
            `
        },
        {
            title: "Chapter 9: Ambient Temperature",
            content: `
            <p class="mb-4 text-gray-300">
                If your room hits 40°C in summer, your PC will suffer.
                <br/>PC temperature is always Ambient + Delta.
                <br/>The best cooler won't help if the air coming in is already hot. Open a window or use air conditioning.
            </p>
            `
        },
        {
            title: "Chapter 10: Notebooks and Cooling Pads",
            content: `
            <p class="mb-4 text-gray-300">
                Gaming Notebooks REQUIRE a cooling base or at least lifting the rear with a support (don't block the air intake).
                <br/>A 5cm gap underneath can reduce temperatures by 5°C.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "What is a dangerous temperature?",
            answer: "CPU above 100°C will shut down the PC. GPU above 95°C. Aim to keep CPU < 80°C and GPU < 75°C for long-term health."
        },
        {
            question: "FanControl doesn't detect my fans?",
            answer: "Some proprietary controllers (Corsair iCUE, NZXT CAM) block third-party software. You might have to use their official software or connect the fans directly to the motherboard."
        },
        {
            question: "Can Water Cooler liquid leak?",
            answer: "Modern AIOs are sealed and very safe. Pump failure is 100x more common than a leak."
        }
    ];

    const externalReferences = [
        { name: "FanControl Download", url: "https://getfancontrol.com/" },
        { name: "HWMonitor Download", url: "https://www.cpuid.com/softwares/hwmonitor.html" }
    ];

    const relatedGuides = [
        {
            href: "/guides/msi-afterburner-overclock-undervolt-guia",
            title: "Afterburner",
            description: "GPU fan curve settings."
        },
        {
            href: "/guides/notebook-gamer-bateria-otimizacao",
            title: "Notebook",
            description: "Specific mobile cooling tips."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="25 min"
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

