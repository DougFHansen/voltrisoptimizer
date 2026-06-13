import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'xbox-game-pass-pc-vale-a-pena',
  title: "Xbox Game Pass for PC: Is it worth it in 2026? (Review)",
  description: "Is Xbox Game Pass still the best value for gamers in 2026? We analyze the catalog, price, and advantages of the service.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "Xbox Game Pass for PC: Is it worth it in 2026? (Review)";
const description = "Is Xbox Game Pass still the best value for gamers in 2026? We analyze the catalog, price, and advantages of the service.";
const keywords = [
    'xbox game pass pc is it worth it 2026 guide',
    'game pass pc games list 2026 tutorial',
    'xbox game pass ultimate price 2026 guide',
    'game pass vs buying individual games 2026',
    'cloud gaming xbox pc is it worth it tutorial 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('xbox-game-pass-pc-vale-a-pena', title, description, keywords, locale);
}

export default function GamePassValueGuide() {
    const summaryTable = [
        { label: "Average Price", value: "R$ 49.99 to R$ 59.99 (Ultimate)" },
        { label: "Catalog", value: "+400 games (Including Day One releases)" },
        { label: "Differential", value: "Full access to EA Play and Cloud Gaming" },
        { label: "Audience", value: "Gamers who play +2 new titles per month" }
    ];

    const contentSections = [
        {
            title: "The \"Netflix\" of Video Games in 2026",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **Xbox Game Pass** revolutionized the way we consume games. In 2026, with AAA games (high-end releases) frequently costing over R$ 350.00, the proposition of paying a fixed monthly fee to have hundreds of titles available seems tempting. However, the service has changed: new subscription tiers and the inclusion of Activision-Blizzard in the catalog have transformed the landscape.
        </p>
      `
        },
        {
            title: "1. 'Day One' Advantages",
            content: `
        <p class="mb-4 text-gray-300">The biggest savings of Game Pass:</p>
        <p class="text-sm text-gray-300">
            Microsoft continues with the policy of launching all its original games (Xbox Game Studios) on day one on the service. In 2026, this includes franchises like <strong>Call of Duty, Halo, Forza and Fable</strong>. If you plan to play at least two of these major releases per year, the service pays for itself just with the savings of not having to buy individual licenses. 
        </p>
      `
        },
        {
            title: "2. Xbox Cloud Gaming: Play without a Gamer PC",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Cloud Power:</h4>
            <p class="text-sm text-gray-300">
                The Ultimate subscription in 2026 lets you play almost the entire catalog via streaming. <br/><br/>
                This means you can run heavy games on an office laptop or even on your phone, without needing a powerful graphics card. With the expansion of servers, lag has dropped drastically, making Cloud Gaming a real option for those who don't want to invest heavily in hardware right now.
            </p>
        </div>
      `
        },
        {
            title: "3. When is it NOT worth it?",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>It's not all rosy:</strong> 
            <br/><br/>If you are a player who dedicates yourself to just one game all year (like CS2, Valorant or LoL), subscribing to Game Pass is a waste of money. Furthermore, the games **are not yours**. If you stop paying, you lose access. For collectors who like to "own" the game and play it again after 5 years, Steam sales might still be a better long-term deal in 2026.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/xbox-app-nao-baixa-jogos-gamepass",
            title: "Fix Xbox App",
            description: "Solve problems if you decide to subscribe."
        },
        {
            href: "/guides/pc-gamer-barato-custo-beneficio-2026",
            title: "PC for Games",
            description: "Ideal parts to run the catalog."
        },
        {
            href: "/guides/como-escolher-placa-de-video",
            title: "Choose GPU",
            description: "Save on games to invest in hardware."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

