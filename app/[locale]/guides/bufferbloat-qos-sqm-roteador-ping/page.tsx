import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'bufferbloat-qos-sqm-roteador-ping',
    title: "Bufferbloat and QoS (2026): The Real Cause of Lag",
    description: "Does your ping spike when someone watches Netflix? That's Bufferbloat. Learn how to configure QoS (SQM) on your router to keep ping low even while downloading torrents.",
    category: 'network',
    difficulty: 'Very Advanced',
    time: '35 min'
};

const title = "Bufferbloat Fix (2026): Stable Ping in a Full House";
const description = "Having 500 Mega internet doesn't guarantee low ping if your router is poor. The secret is limiting speed to guarantee latency. Take the A+ test.";

const keywords = [
    'waveform bufferbloat test result f',
    'how to configure tp-link archer router qos',
    'sqm qos openwrt gamer settings',
    'limit download upload bandwidth to improve ping',
    'high ping when someone uses wifi',
    'cheap router with sqm 2026',
    'cake vs fq_codel qos',
    'voltris optimizer network',
    'reduce loaded latency'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('bufferbloat-qos-sqm-roteador-ping', title, description, keywords, locale);
}

export default function BufferbloatGuide() {
    const summaryTable = [
        { label: "Test", value: "Waveform Bufferbloat" },
        { label: "Solution", value: "QoS (Quality of Service)" },
        { label: "Algorithm", value: "SQM (CAKE / FQ_CoDel)" },
        { label: "Download Limit", value: "90% of contracted speed" },
        { label: "Upload Limit", value: "85% of contracted speed" },
        { label: "Router", value: "Dual Core CPU Minimum" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Data Traffic Jam",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Imagine a highway (your internet). When it fills with cars (4K Netflix), everything stops. Bufferbloat is your router trying to put too many cars in the waiting line, causing delay (lag) for your game command (which is a fast motorcycle trying to squeeze through).
        </p>
      `
        },
        {
            title: "Chapter 1: The Waveform Test",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Diagnosis</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Go to <strong>waveform.com/tools/bufferbloat</strong>.
                    <br/>2. Stop all downloads.
                    <br/>3. Run the test.
                    <br/>If you get a <strong>C, D, or F</strong> grade, you have severe Bufferbloat. Your ping spikes from 20ms to 200ms when the internet is in use.
                    <br/>If you get an <strong>A or A+</strong>, congratulations, your router is great.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Traditional QoS (Common Routers)",
            content: `
        <p class="mb-4 text-gray-300">
            Most routers (TP-Link, D-Link) have a simple "QoS".
            <br/>1. Enter your router's page (usually 192.168.0.1).
            <br/>2. Enable QoS.
            <br/>3. Set your REAL internet speed (run a speedtest first).
            <br/>4. Add your PC as "High Priority" using its MAC Address.
            <br/>This helps, but doesn't fully solve it if the algorithm is poor.
        </p>
      `
        },
        {
            title: "Chapter 3: SQM (Smart Queue Management) - The Cure",
            content: `
        <p class="mb-4 text-gray-300">
            SQM is the real technology that solves Bufferbloat.
            <br/>Available in routers with <strong>OpenWRT</strong>, <strong>Ubiquiti</strong>, or expensive gaming models (Asus Merlin).
            <br/>It uses mathematical algorithms (CAKE or FQ_CoDel) to ensure small packets (games/VoIP) jump the line ahead of large packets (Netflix).
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Configuring the Bandwidth Limit",
            content: `
        <p class="mb-4 text-gray-300">
            For SQM to work, the router must control the queue, not the ISP's modem.
            <br/>Set the Download limit to <strong>90-95%</strong> of your maximum speed.
            <br/>Set the Upload limit to <strong>85-90%</strong>.
            <br/>You "lose" a little bit of maximum speed to gain ABSOLUTE ping stability. It's worth it for gamers.
        </p>
      `
        },
        {
            title: "Chapter 5: OpenWRT (For the Brave)",
            content: `
        <p class="mb-4 text-gray-300">
            If your router supports it:
            <br/>Installing OpenWRT transforms a $40 router into $200 enterprise equipment.
            <br/>Install the <code>luci-app-sqm</code> package and enable "Piece of Cake".
            <br/>Stable ping forever.
        </p>
      `
        },
        {
            title: "Chapter 6: Ethernet Cable (CAT6)",
            content: `
        <p class="mb-4 text-gray-300">
            No QoS can perform miracles on Wi-Fi with neighbor interference.
            <br/>Use a CAT5e or CAT6 network cable.
            <br/>Wi-Fi 6 (AX) has anti-queue technologies (OFDMA) that help, but the cable is still king.
        </p>
      `
        },
        {
            title: "Chapter 7: ISP Throttling",
            content: `
        <p class="mb-4 text-gray-300">
            Sometimes the problem is in the street.
            <br/>If Bufferbloat persists even when limiting bandwidth to 50%, your ISP's infrastructure (Node) is saturated. Call and complain or switch to fiber.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Gaming while Streaming",
            content: `
            <p class="mb-4 text-gray-300">
                Streamers need Upload QoS.
                <br/>If the upload saturates while sending the live stream to Twitch, the game loses packets (Packet Loss). Limit OBS bitrate to 80% of your real upload.
            </p>
            `
        },
        {
            title: "Chapter 9: Recommended Routers 2026",
            content: `
            <p class="mb-4 text-gray-300">
                Look for Quad-Core CPUs (1.5GHz+). Weak routers can't handle SQM on Gigabit (1000 Mega) connections.
                <br/>Ex: Asus RT-AX86U, GL.iNet Flint 2.
            </p>
            `
        },
        {
            title: "Chapter 10: Does ExitLag help?",
            content: `
            <p class="mb-4 text-gray-300">
                ExitLag optimizes the ROUTE, but doesn't solve Bufferbloat in your home.
                <br/>If your brother turns on a torrent, ExitLag won't stop the lag. Only router-side QoS prevents it.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Do I lose download speed with QoS?",
            answer: "Yes, intentionally. You sacrifice about 5-10% of maximum speed for perfect latency. On 500 Mega, downloading at 450 Mega makes no difference, but playing with a steady 20ms does."
        },
        {
            question: "Does my ISP router have QoS?",
            answer: "Usually not, or it's locked/useless. Put the ISP modem in Bridge mode and buy a decent router of your own."
        },
        {
            question: "Does SQM work on IPv6?",
            answer: "Yes, CAKE and FQ_CoDel are protocol-agnostic."
        }
    ];

    const externalReferences = [
        { name: "Waveform Bufferbloat Test", url: "https://www.waveform.com/tools/bufferbloat" },
        { name: "OpenWRT SQM HowTo", url: "https://openwrt.org/docs/guide-user/network/traffic-shaping/sqm" }
    ];

    const relatedGuides = [
        {
            href: "/guides/reduzir-ping-exitlag-noping-dns",
            title: "General Ping",
            description: "Software tips."
        },
        {
            href: "/guides/dns-mais-rapido-para-jogos",
            title: "DNS",
            description: "Complementary guide."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="35 min"
            difficultyLevel="Very Advanced"
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
