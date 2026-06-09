import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'guia-montagem-pc',
  title: "Definitive PC Building Guide (2026): From Zero to Windows",
  description: "The most complete tutorial on the internet. Learn how to install CPU, apply thermal paste, connect the front panel and do professional Cable Management.",
  category: 'hardware',
  difficulty: 'Advanced',
  time: '2 hours'
};

const title = "Definitive PC Building Guide (2026): From Zero to Windows";
const description = "The most complete tutorial on the internet. Learn how to install CPU, apply thermal paste, connect the front panel and do professional Cable Management.";

const keywords = [
  "how to build gaming pc step by step 2026",
  "install intel cpu vs amd am5",
  "how to connect front panel f_panel",
  "where to connect fans on motherboard sys_fan",
  "first boot new pc what to do",
  "cable management professional tips"
];

export const metadata: Metadata = createGuideMetadata('guia-montagem-pc', title, description, keywords);

export default function AssembleGuide() {
  const summaryTable = [
    { label: "Tool #1", value: "Philips #2 Screwdriver (Long and Magnetic)" },
    { label: "Critical Item", value: "Windows USB Drive (Create BEFORE)" },
    { label: "Common Error", value: "Forgetting the IO Shield" },
    { label: "Risk", value: "Bent Socket Pins (Extreme Caution)" },
    { label: "RAM", value: "Slots 2 and 4 (Dual Channel)" },
    { label: "Thermal Paste", value: "Pea-sized drop (in the center)" }
  ];

  const contentSections = [
    {
      title: "Phase 0: The Test Bench (Optional but Recommended)",
      content: `
        <p class="mb-4 text-gray-300">
            Before putting everything inside the cramped case, assemble the motherboard on top of its box (cardboard doesn't conduct electricity). Install CPU, RAM, and Cooler. Connect the power supply and short the 'Power SW' pins with a screwdriver to turn it on.
            <br/><br/>
            <strong>Why do this?</strong> If a part arrived defective, it's much easier to exchange now than after you've screwed everything in and organized the cables.
        </p>
      `
    },
    {
      title: "Phase 1: Preparing the Motherboard",
      content: `
        <div class="space-y-6">
            <div class="bg-[#1E1E22] p-5 rounded-lg border-l-4 border-yellow-500">
              <h4 class="text-white font-bold mb-2">1. CPU Installation (The Heart)</h4>
              <p class="text-gray-400 text-sm mb-2">
                <strong>Intel (LGA 1700/1851):</strong> Lift the lever. Align the notches (cuts) on the side of the CPU with the pins in the socket. Gently release. Lower the lever (it will feel like it's going to break, it's normal to apply pressure).
                <br/><br/>
                <strong>AMD (AM5):</strong> Same as Intel. Align the golden triangle.
                <br/><br/>
                <span class="text-red-500 font-bold">DANGER:</span> NEVER touch the socket pins on the motherboard. If you bend one, it's game over.
              </p>
            </div>

            <div class="bg-[#1E1E22] p-5 rounded-lg border-l-4 border-green-500">
              <h4 class="text-white font-bold mb-2">2. RAM Memory (Dual Channel)</h4>
              <p class="text-gray-400 text-sm">
                Your board probably has 4 slots. You should use the <strong>SECOND</strong> and <strong>FOURTH</strong> slot (counting from the processor) to activate Dual Channel.
                <br/>If you use slots 1 and 2, you lose 50% performance.
                <br/>Push until you hear a satisfying *CLICK*.
              </p>
            </div>

            <div class="bg-[#1E1E22] p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="text-white font-bold mb-2">3. M.2 SSD (Storage)</h4>
              <p class="text-gray-400 text-sm">
                Remove the heatsink from the motherboard. Remove the blue plastic from the thermal pad. Insert the SSD at a 45-degree angle. Screw it in with the tiny screw (careful not to drop it inside the PSU). Replace the heatsink.
              </p>
            </div>
          </div>
      `
    },
    {
      title: "Phase 2: The Case and the Power Supply",
      content: `
        <div class="space-y-4">
            <p class="text-gray-300">
                <strong>1. IO Shield:</strong> If your motherboard doesn't have a pre-installed shield, put it in NOW in the rectangular rear opening of the case. It has to click on all 4 corners. If you forget, you'll have to disassemble everything.
            </p>
            <p class="text-gray-300">
                <strong>2. Standoffs:</strong> These are the golden/black risers where the motherboard sits. Check if they are in the correct position for your motherboard size (ATX, Micro-ATX).
                <br/><span class="text-red-400 font-bold">WARNING:</span> If there's an extra standoff under the motherboard touching the circuit, it will short-circuit.
            </p>
            <p class="text-gray-300">
                <strong>3. PSU (Power Supply):</strong> Install the PSU. If the case has a dust filter at the bottom, the PSU fan should face DOWN (to draw in cool air from outside).
            </p>
        </div>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Phase 3: The Cable Nightmare (Connections)",
      content: `
        <ul class="space-y-4 text-gray-300">
            <li class="bg-gray-900 p-4 rounded border border-gray-700">
                <strong class="text-[#31A8FF] block mb-1">EPS 8-pin (CPU)</strong>
                Usually in the top left corner. Connect it BEFORE screwing in the motherboard if the case is small (your hand won't fit later). Sometimes it's split into 4+4.
            </li>
            <li class="bg-gray-900 p-4 rounded border border-gray-700">
                <strong class="text-[#31A8FF] block mb-1">24-pin (Motherboard)</strong>
                The thickest cable, on the right. Requires brute force to fully plug in.
            </li>
            <li class="bg-gray-900 p-4 rounded border border-gray-700">
                <strong class="text-[#31A8FF] block mb-1">PCIe 6+2-pin (Video Card)</strong>
                Don't confuse it with the CPU cable! The GPU cable splits into 6+2. The CPU cable splits into 4+4.
            </li>
            <li class="bg-gray-900 p-4 rounded border-l-4 border-red-500">
                <strong class="text-red-400 block mb-1">Front Panel (F_PANEL)</strong>
                These tiny pins connect the case's Power button.
                <br/>Check the manual, but the JFP1 standard is:
                <br/>- Top Left: Power LED +
                <br/>- Top Right: Power SW (Power Button)
                <br/>- Bottom Left: HDD LED
                <br/>- Bottom Right: Reset SW
                <br/><span class="text-xs italic">Tip: The writing on the connector should usually face outward (down on the bottom row, up on the top row).</span>
            </li>
        </ul>
      `
    },
    {
      title: "Phase 4: Finalization and Boot",
      content: `
          <div class="space-y-4">
            <p class="text-gray-300">
                1. Install the Video Card in the first PCIe slot (the one reinforced with metal). Screw it into the case.
                <br/>2. Connect the monitor to the <strong>VIDEO CARD</strong>, not the motherboard (classic error).
                <br/>3. Turn on the power supply switch (on the back).
                <br/>4. Press the Power button.
            </p>
            <div class="bg-emerald-900/20 p-4 rounded border border-emerald-500/30">
                <h4 class="text-emerald-400 font-bold mb-2">Did it post? Success!</h4>
                <p class="text-gray-300 text-sm">
                    Now enter the BIOS (keep pressing DEL):
                    <br/>1. Enable <strong>XMP / DOCP / EXPO</strong> so your memory runs at the right speed (e.g., 6000MHz). Without this, it runs slow (4800MHz).
                    <br/>2. Enable <strong>Re-Size BAR</strong>.
                    <br/>3. Set the Boot order to your Windows USB Drive.
                </p>
            </div>
          </div>
        `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/criar-pendrive-bootavel",
      title: "Install Windows",
      description: "How to create the USB drive to format the PC."
    },
    {
      href: "/guides/cable-management-organizacao-cabos-pc",
      title: "Cable Management",
      description: "Make your PC look good and improve airflow."
    },
    {
      href: "/guides/como-escolher-fonte-pc-gamer",
      title: "Power Supply",
      description: "Ensure you connected the right modular cables."
    }
  ];

  const faqItems = [
    {
      question: "PC turns on, fans spin, but no image.",
      answer: "The classic 'No Post'. 1. Wait (DDR5 takes up to 3 minutes on the first boot to 'train' the memory). 2. Check if the HDMI cable is in the GPU. 3. Reseat the RAM memories. 4. Check the power cables."
    },
    {
      question: "Do I need anti-static gloves?",
      answer: "No. Just don't build the PC on a shag carpet and touch a metal part of the case occasionally to discharge."
    },
    {
      question: "How much thermal paste should I apply?",
      answer: "A pea-sized drop in the center of the processor is enough. The cooler's pressure will spread it out. Do not use a card to spread it (it creates air bubbles)."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="2 hours"
      difficultyLevel="Advanced"
      contentSections={contentSections}
      advancedContentSections={advancedContentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
      faqItems={faqItems}
    />
  );
}

