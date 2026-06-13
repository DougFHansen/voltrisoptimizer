import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'excluir-conta-instagram-definitivamente',
  title: "How to Permanently Delete Your Instagram Account (2026)",
  description: "Tired of Reels? Learn how to delete or temporarily deactivate your Instagram account via mobile or PC in this updated 2026 guide.",
  category: 'windows',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "How to Permanently Delete Your Instagram Account (2026)";
const description = "Tired of Reels? Learn how to delete or temporarily deactivate your Instagram account via mobile or PC in this updated 2026 guide.";
const keywords = [
    'how to delete instagram account permanently 2026',
    'deactivate instagram temporarily step by step tutorial',
    'delete instagram account from phone guide 2026',
    'erase instagram permanently full tutorial',
    'how to recover deactivated instagram tutorial 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('excluir-conta-instagram-definitivamente', title, description, keywords, locale);
}

export default function InstagramDeleteGuide() {
    const summaryTable = [
        { label: "Waiting Period", value: "30 days for full deletion" },
        { label: "Reversible Option", value: "Temporary Deactivation" },
        { label: "Data Download", value: "Recommended before erasing" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "The Farewell Process in 2026",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, with new privacy laws and Meta's full integration, the process to delete Instagram has become a bit more hidden within the "Account Center". Whether for a digital detox or security reasons, you have a guaranteed right to erase all your data. But beware: once deleted, you will lose all your photos, followers, and messages forever.
        </p>
      `
        },
        {
            title: "1. Saving Your Memories First",
            content: `
        <p class="mb-4 text-gray-300">Before deleting, download a copy of everything you've posted:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Go to your Profile > Menu (three lines) > Your Activity.</li>
            <li>Scroll to the bottom and click on <strong>'Download your information'</strong>.</li>
            <li>Instagram will send a link to your email with all your high-quality photos and videos.</li>
        </ol>
      `
        },
        {
            title: "2. Deletion Step by Step (Account Center)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Via Mobile or PC:</h4>
            <p class="text-sm text-gray-300">
                1. Access Settings and go to **Account Center**. <br/>
                2. Click on **Personal Details** > **Account ownership and control**. <br/>
                3. Select 'Deactivation or deletion'. <br/>
                4. Choose 'Delete account' to remove permanently or 'Deactivate' to just make it disappear until you log in again. <br/>
                5. Type your password to confirm.
            </p>
        </div>
      `
        },
        {
            title: "3. The Grace Period",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Don't just vanish:</strong> 
            <br/><br/>After requesting deletion, your account will become invisible, but Instagram takes **30 days** to delete the files from its servers. If you regret it during this period, just log into the app with your password and click 'Keep account'. Once 30 days have passed, not even Meta support will be able to recover your username or photos in 2026.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/autenticacao-dois-fatores",
            title: "Protect Accounts",
            description: "Keep your access secure while you decide."
        },
        {
            href: "/guides/protecao-dados-privacidade",
            title: "Digital Privacy",
            description: "How social networks use your data in 2026."
        },
        {
            href: "/guides/seguranca-digital",
            title: "Online Security",
            description: "Extra tips to avoid hackers."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}
