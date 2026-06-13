import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'guia-compra-monitores',
  title: "Definitive Monitor Buying Guide 2026: OLED, Hz, HDR, and Motion Blur",
  description: "Don't buy the wrong monitor. Understand the difference between GtG and MPRT, why HDR 400 is just marketing, and when to choose OLED, IPS, or TN for competitive gaming.",
  category: 'peripherals',
  difficulty: 'Advanced',
  time: '35 min'
};

const title = "Definitive Monitor Buying Guide 2026: OLED, Hz, HDR, and Motion Blur";
const description = "Don't buy the wrong monitor. Understand the difference between GtG and MPRT, why HDR 400 is just marketing, and when to choose OLED, IPS, or TN for competitive gaming.";

const keywords = [
  'best gaming monitor 2026 guide',
  'ips vs va vs oled vs tn difference',
  'gtg vs mprt response time explained',
  'is hdr400 vs hdr1000 worth it',
  'motion blur reduction dyac elmb worth it',
  'hdmi 2.1 vs displayport 1.4 bandwidth',
  'monitor 240hz vs 360hz vs 540hz'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('guia-compra-monitores', title, description, keywords, locale);
}

export default function MonitorBuyingGuide() {
  const summaryTable = [
    { label: "Competitive (CS2)", value: "TN/OLED 360Hz+ with DyAc/BFI" },
    { label: "AAA / Immersion", value: "OLED / Mini-LED 4K HDR" },
    { label: "Price-Performance", value: "IPS 165Hz/180Hz" },
    { label: "Avoid", value: "Cheap VA panels (Ghosting)" },
    { label: "Misleading Marketing", value: "1ms (always check GtG)" },
    { label: "Real HDR", value: "Requires Dimming Zones (Mini-LED/OLED)" }
  ];

  const contentSections = [
    {
      title: "Introduction: The Invisible Bottleneck",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          You could have a NASA-grade PC with an RTX 5090, but if your monitor is bad, your experience will be bad. In 2026, the monitor market is infested with misleading marketing. "1ms", "HDR", and "Dynamic Contrast" are often technical lies. This guide will teach you how to read between the lines of specifications so you don't spend money on ghosting and washed-out colors.
        </p>
      `
    },
    {
      title: "1. The Panel War: IPS vs VA vs TN vs OLED",
      content: `
        <div class="space-y-6">
            <div class="bg-[#0A0A0F] p-5 rounded-xl border-l-4 border-blue-500">
                <h4 class="text-blue-400 font-bold text-xl mb-2">IPS (In-Plane Switching)</h4>
                <p class="text-gray-300 mb-2"><strong>The Gold Standard for Value.</strong></p>
                <ul class="list-disc list-inside text-gray-400 text-sm space-y-1">
                    <li><strong>Pros:</strong> Accurate colors, best viewing angles (the image doesn't darken if you look from the side).</li>
                    <li><strong>Cons:</strong> "IPS Glow" (silvery glow in the corners in dark scenes) and weak contrast (blacks look like dark gray).</li>
                    <li><strong>Who it's for:</strong> 90% of gamers. It's the best balance.</li>
                </ul>
            </div>

            <div class="bg-[#0A0A0F] p-5 rounded-xl border-l-4 border-purple-500">
                <h4 class="text-purple-400 font-bold text-xl mb-2">VA (Vertical Alignment)</h4>
                <p class="text-gray-300 mb-2"><strong>Loved by some, Hated by others.</strong></p>
                <ul class="list-disc list-inside text-gray-400 text-sm space-y-1">
                    <li><strong>Pros:</strong> 3x better contrast than IPS. Deep blacks, great for movies and horror games in a dark room.</li>
                    <li><strong>Cons:</strong> <strong>Black Smearing (Dark Ghosting)</strong>. In transitions from black to gray, the image blurs horribly. Only elite VA panels (Samsung Odyssey G7/G9) have fixed this. Avoid cheap VAs for fast games.</li>
                    <li><strong>Who it's for:</strong> Simulators and slow Single Player games.</li>
                </ul>
            </div>

            <div class="bg-[#0A0A0F] p-5 rounded-xl border-l-4 border-yellow-500">
                <h4 class="text-yellow-400 font-bold text-xl mb-2">TN (Twisted Nematic)</h4>
                <p class="text-gray-300 mb-2"><strong>The Pro-Player's Relic.</strong></p>
                <ul class="list-disc list-inside text-gray-400 text-sm space-y-1">
                    <li><strong>Pros:</strong> The fastest and cheapest. Exceptional motion clarity in Zowie models.</li>
                    <li><strong>Cons:</strong> Horrible colors, terrible viewing angles. The image changes color if you move your head.</li>
                    <li><strong>Who it's for:</strong> Only tryhard CS2/Valorant players who don't care about graphics, only about the win.</li>
                </ul>
            </div>

            <div class="bg-[#0A0A0F] p-5 rounded-xl border-l-4 border-red-500 animate-pulse-slow">
                <h4 class="text-red-400 font-bold text-xl mb-2">OLED / QD-OLED</h4>
                <p class="text-gray-300 mb-2"><strong>The Holy Grail (Endgame).</strong></p>
                <ul class="list-disc list-inside text-gray-400 text-sm space-y-1">
                    <li><strong>Pros:</strong> INSTANT response time (real 0.03ms). Infinite contrast (pixels turn off to make black). Perfect colors.</li>
                    <li><strong>Cons:</strong> Risk of <strong>Burn-in</strong> (permanent ghost image of static elements like HUD or taskbar) over time, although 2025/2026 models have lots of protection. Lower full-screen peak brightness (ABL). Very high cost.</li>
                    <li><strong>Who it's for:</strong> Those with an unlimited budget who want the best visual experience possible.</li>
                </ul>
            </div>
        </div>
      `
    },
    {
      title: "2. The Big '1ms' Lie (GtG vs MPRT)",
      content: `
        <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-6">
            <p class="text-gray-300 mb-4">
                When you see "1ms" on the box, it's marketing. There are two ways to measure it:
            </p>
            <ul class="space-y-4">
                <li>
                    <strong class="text-[#31A8FF] text-lg">GtG (Gray-to-Gray):</strong>
                    <br/><span class="text-gray-400 text-sm">The time it takes for a pixel to change from one gray color to another. Most fast IPS panels today do real 3ms to 4ms. To reach "1ms GtG", manufacturers apply excessive voltage (Overdrive) to the pixels.</span>
                    <br/><span class="text-red-400 text-xs font-bold">Consequence:</span> Overshoot/Inverse Ghosting. Bright trails/coronas around moving objects. Generally, the "Fastest" or "Extreme" mode of the monitor is unusable. Use "Normal" or "Fast" mode.
                </li>
                <li>
                    <strong class="text-[#31A8FF] text-lg">MPRT (Moving Picture Response Time):</strong>
                    <br/><span class="text-gray-400 text-sm">Measures image persistence on your retina. It's only possible to reach 1ms MPRT by turning on <strong>Strobing (BFI)</strong> mode.</span>
                </li>
            </ul>
        </div>
        <div class="bg-indigo-900/20 p-4 rounded border-l-4 border-indigo-500">
            <h5 class="text-indigo-400 font-bold mb-1">What is DyAc / ELMB / BFI?</h5>
            <p class="text-gray-300 text-sm">
                These are technologies that flash the monitor's backlight (black frame insertion) between each frame. This "cleans" the image on your retina, eliminating motion blur.
                <br/><strong>Pros:</strong> Insane motion clarity (CRT-like).
                <br/><strong>Cons:</strong> Reduces screen brightness and can cause headaches in sensitive people. Zowie's DyAc+ and NVIDIA's ULMB 2 are the best implementations of this.
            </p>
        </div>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "3. HDR: Don't fall for the HDR400 trick",
      content: `
        <p class="mb-4 text-gray-300">
            HDR (High Dynamic Range) needs two things: very high brightness in specific spots and absolute black in others.
        </p>
        <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm text-left text-gray-300 border border-gray-700">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3">Label</th>
                        <th class="p-3">Reality</th>
                        <th class="p-3">Verdict</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3 font-bold text-gray-500">HDR 400 / HDR10</td>
                        <td class="p-3">The monitor simply accepts the HDR signal and increases the brightness of EVERYTHING. Black turns into light gray. Colors are washed out.</td>
                        <td class="p-3 text-red-500 font-bold">Keep it OFF. Worse than SDR.</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/20">
                        <td class="p-3 font-bold text-yellow-500">HDR 600</td>
                        <td class="p-3">Starts to have "Local Dimming" (zones that turn off), but very few (8-16 zones).</td>
                        <td class="p-3 text-yellow-500">Acceptable ("Entry-level HDR").</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3 font-bold text-emerald-400">HDR 1000 / True Black</td>
                        <td class="p-3">Requires Full Array Local Dimming (FALD) or OLED. Thousands of zones or individual pixels.</td>
                        <td class="p-3 text-emerald-400 font-bold">Real HDR. A transformative experience.</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
    },
    {
      title: "4. Hz and Resolution: The 2026 Sweet Spot",
      content: `
        <ul class="space-y-4 mb-6">
            <li class="bg-gray-800 p-4 rounded-lg">
                <span class="text-[#31A8FF] font-bold block mb-1">1080p (FHD) @ 360Hz / 540Hz</span>
                <span class="text-sm text-gray-400">Exclusive for Professional Esports. The low resolution ensures maximum FPS, and the extreme Hz reduce latency to the absolute minimum. Requires a beast of a CPU.</span>
            </li>
            <li class="bg-gray-800 p-4 rounded-lg border border-[#31A8FF]/30 shadow-[0_0_15px_rgba(49,168,255,0.1)]">
                <span class="text-[#31A8FF] font-bold block mb-1">1440p (QHD) @ 240Hz OLED</span>
                <span class="text-sm text-gray-300"><strong>The Voltris 2026 Recommendation.</strong> 1440p sharpness is perfect for 27", and 240Hz on OLED has the motion clarity of a 360Hz LCD. It's the perfect "do-it-all" monitor.</span>
            </li>
            <li class="bg-gray-800 p-4 rounded-lg">
                <span class="text-[#31A8FF] font-bold block mb-1">4K (UHD) @ 144Hz+</span>
                <span class="text-sm text-gray-400">Luxury for Single Player and work. Requires an RTX 4080/4090 or RX 7900 XTX to run well. In 2026, "Dual-Mode" monitors (4K 120Hz or 1080p 240Hz with a button) are popular.</span>
            </li>
        </ul>
      `
    },
    {
      title: "5. Connectivity: HDMI 2.1 vs DP 1.4",
      content: `
          <p class="mb-4 text-gray-300">
              The monitor can limit your GPU if you use the wrong cable.
              <br/><br/>
              <strong>DisplayPort 1.4 (DSC):</strong> The standard for PC. Supports up to 4K 144Hz with DSC (visually lossless compression). Always use DP on PC to ensure G-Sync compatibility.
              <br/><br/>
              <strong>HDMI 2.1:</strong> Essential for <strong>Consoles (PS5/Xbox)</strong> to do 4K 120Hz + VRR. On PC, it's only necessary if you want to use an OLED TV as a monitor (LG C3/C4/C5).
              <br/><br/>
              <span class="text-yellow-500 font-bold">Warning:</span> Many cheap monitors have an HDMI 2.0 port. They do NOT run 4K 120Hz or 1440p 144Hz 10-bit. Check the port version!
          </p>
        `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/calibrar-cores-monitor",
      title: "Calibrate Monitor",
      description: "Adjust colors after purchase for fidelity."
    },
    {
      href: "/guides/hdr-windows-vale-a-pena-jogos",
      title: "HDR Guide",
      description: "How to correctly configure HDR in Windows 11."
    },
    {
      href: "/guides/g-sync-freesync-configuracao-correta",
      title: "G-Sync and FreeSync",
      description: "How to enable VRR without input lag."
    }
  ];

  const faqItems = [
    {
      question: "What is a Dead Pixel and a Stuck Pixel?",
      answer: "A Dead Pixel is a black spot (dead pixel). A Stuck Pixel is stuck on a color (red, green, blue). Stuck pixels can sometimes be 'unlocked' with software that flashes fast colors (like JScreenFix), but dead pixels are permanent. Check the brand's warranty policy."
    },
    {
      question: "Is a Curved Monitor worth it?",
      answer: "For VA panels (like the Odyssey), yes, as the curve improves viewing angles at the corners. For 16:9 IPS, it's unnecessary and can distort straight lines (bad for design). For Ultrawide, it's mandatory."
    },
    {
      question: "What is VRR Flicker?",
      answer: "Some monitors (mostly VA and OLED) flash brightness on loading screens or menus when FPS varies significantly with G-Sync on. It's a limitation of the panel technology, not a defect."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="35 min"
      difficultyLevel="Advanced"
      contentSections={contentSections}
      advancedContentSections={advancedContentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
      faqItems={faqItems}
    />
  );
}


