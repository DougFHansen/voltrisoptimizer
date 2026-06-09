import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'z-index-css-explicacao',
  title: "z-index in CSS: Definitive Guide and Stacking Context (2026)",
  description: "Understand once and for all how z-index works in CSS, why it 'ignores' some elements, and how to master Stacking Context in 2026.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "z-index in CSS: Definitive Guide and Stacking (2026)";
const description = "Understand once and for all how z-index works in CSS, why it 'ignores' some elements, and how to master Stacking Context in 2026.";
const keywords = [
    'how z-index css works tutorial 2026',
    'z-index not working reason and solution guide',
    'what is stacking context css tutorial 2026',
    'stacking order css comprehensive guide 2026',
    'z-index vs position absolute tutorial css guide'
];

export const metadata: Metadata = createGuideMetadata('z-index-css-explicacao', title, description, keywords);

export default function ZIndexGuide() {
    const summaryTable = [
        { label: "Main Requirement", value: "Element must have 'position' (relative, absolute, etc)" },
        { label: "The Villain", value: "Stacking Context" },
        { label: "Max Value", value: "2147483647 (But never use this!)" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "What is z-index?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026 web development, creating modern interfaces with overlapping layers (glassmorphism, modals, fixed headers) is the rule. The **z-index** is the CSS property that defines who stays "in front" of whom on the Z-axis (depth). However, it is famous for being one of the properties that generates the most frustration in beginner developers for seemingly "not working" for no apparent reason.
        </p>
      `
        },
        {
            title: "1. The Golden Rule of Position",
            content: `
        <p class="mb-4 text-gray-300">z-index only works on elements that have a defined position:</p>
        <div class="bg-gray-800 p-4 rounded-lg mb-4">
            <code class="text-blue-400">
                .box {"{"} <br/>
                &nbsp;&nbsp;position: relative; /* or absolute, fixed, sticky */ <br/>
                &nbsp;&nbsp;z-index: 10; <br/>
                {"}"}
            </code>
        </div>
        <p class="text-sm text-gray-300">
            If your element has <code>position: static</code> (the browser default), the z-index will be **completely ignored**. Always remember to change it to <code>relative</code> if you just want to move the element on the Z-axis.
        </p>
      `
        },
        {
            title: "2. The Stacking Context (Owner of the party)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Why doesn't '9999' work?</h4>
            <p class="text-sm text-gray-300">
                Often you put <code>z-index: 9999</code> on a tooltip and it stays behind a background that has <code>z-index: 1</code>. This happens because of the <strong>Stacking Context</strong>. <br/><br/>
                Imagine that each parent-container is a folder. If 'Parent A' has z-index 1 and 'Parent B' has z-index 2, nothing inside 'Parent A' (even if it has a z-index of one billion) will be able to get in front of 'Parent B'. The child is trapped at its parent's hierarchy level.
            </p>
        </div>
      `
        },
        {
            title: "3. Best Practices in 2026",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Don't use random values:</strong> Avoid using <code>z-index: 9999999</code>. This creates a "number war" that is impossible to maintain in large projects. 
            <br/><br/><strong>Tip:</strong> In 2026, the best practice is to create CSS variables for your layer levels: <br/>
            - <code>--z-modal: 100;</code> <br/>
            - <code>--z-dropdown: 50;</code> <br/>
            - <code>--z-header: 10;</code> <br/>
            This way, you maintain organization and ensure that elements follow the correct visual logic of your design.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/css-grid-vs-flexbox-qual-usar",
            title: "Grid vs Flexbox",
            description: "Master modern layout."
        },
        {
            href: "/guides/otimizacao-seo-frontend",
            title: "SEO for Devs",
            description: "Increase your site's visibility."
        },
        {
            href: "/guides/melhores-praticas-clean-code-javascript",
            title: "JS Clean Code",
            description: "Write better code in 2026."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Medium"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

