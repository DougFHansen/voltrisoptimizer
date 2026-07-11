interface ContentTemplate {
  title: string;
  slug: string;
  category: string;
  keywords: string[];
  sections: ContentSection[];
  faq?: FAQItem[];
  relatedGuides: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedReadTime: number;
}

interface ContentSection {
  title: string;
  content: string;
  type: 'text' | 'code' | 'list' | 'warning' | 'tip';
  subsections?: ContentSection[];
}

interface FAQItem {
  question: string;
  answer: string;
}

// Templates de conteúdo para guias especializados
const contentTemplates: ContentTemplate[] = [
  {
    title: "Complete Guide to Gaming PC Optimization 2026",
    slug: "gaming-pc-optimization-complete-guide-2026",
    category: "gaming",
    keywords: ["gaming optimization", "fps boost", "pc performance", "gaming setup"],
    sections: [
      {
        title: "Introduction",
        content: "Optimizing your gaming PC for maximum performance requires understanding multiple system components and settings. This comprehensive guide covers everything from basic tweaks to advanced optimizations.",
        type: "text"
      },
      {
        title: "Hardware Optimization",
        content: "Complete hardware optimization guide covering GPU, CPU, and other components for maximum gaming performance.",
        subsections: [
          {
            title: "GPU Settings",
            content: "Configure your graphics card for optimal gaming performance with these professional settings.",
            type: "text"
          },
          {
            title: "CPU Tuning",
            content: "Safe CPU overclocking and power management settings for better gaming performance.",
            type: "text"
          }
        ],
        type: "text"
      },
      {
        title: "Windows Configuration",
        content: "Windows system configuration for optimal gaming performance and resource management.",
        subsections: [
          {
            title: "Power Settings",
            content: "Configure Windows power plans for maximum performance while gaming.",
            type: "text"
          },
          {
            title: "Game Mode",
            content: "Enable and configure Windows Game Mode for optimal resource allocation.",
            type: "text"
          }
        ],
        type: "text"
      }
    ],
    faq: [
      {
        question: "How much FPS improvement can I expect?",
        answer: "Depending on your hardware and current settings, you can expect 15-40% FPS improvement with proper optimization."
      },
      {
        question: "Is overclocking safe for beginners?",
        answer: "With proper guidance and conservative settings, beginners can safely achieve modest overclocks for better performance."
      }
    ],
    relatedGuides: ["gpu-optimization-guide", "cpu-overclocking-tutorial", "windows-gaming-tweaks"],
    difficulty: "intermediate",
    estimatedReadTime: 12
  },
  {
    title: "Windows 11 Performance Optimization Guide",
    slug: "windows-11-performance-optimization-2026",
    category: "windows",
    keywords: ["windows 11", "performance", "optimization", "system tuning"],
    sections: [
      {
        title: "System Cleanup",
        content: "Remove unnecessary bloatware and optimize system resources for better performance.",
        type: "text"
      },
      {
        title: "Registry Optimization",
        content: "Safe registry tweaks to improve system responsiveness and boot times.",
        type: "text"
      },
      {
        title: "Service Configuration",
        content: "Configure Windows services for optimal resource usage without compromising stability.",
        type: "text"
      }
    ],
    faq: [
      {
        question: "Will these optimizations affect system stability?",
        answer: "All optimizations in this guide are tested and safe. However, always create a system restore point before making changes."
      }
    ],
    relatedGuides: ["windows-registry-guide", "system-cleanup-tutorial", "boot-optimization"],
    difficulty: "beginner",
    estimatedReadTime: 8
  },
  {
    title: "Hardware Upgrade Guide 2026",
    slug: "hardware-upgrade-guide-2026",
    category: "hardware",
    keywords: ["hardware upgrade", "pc building", "components", "performance"],
    sections: [
      {
        title: "Component Selection",
        content: "Choose the right components for your budget and performance needs.",
        type: "text"
      },
      {
        title: "Compatibility Guide",
        content: "Ensure all components work together seamlessly with our compatibility checklist.",
        type: "text"
      },
      {
        title: "Installation Process",
        content: "Step-by-step installation guide for safe and successful hardware upgrades.",
        type: "text"
      }
    ],
    faq: [
      {
        question: "Should I upgrade or build a new PC?",
        answer: "If your current PC is less than 4 years old, targeted upgrades often provide better value than a complete rebuild."
      }
    ],
    relatedGuides: ["gpu-selection-guide", "cpu-comparison-2026", "ram-upgrade-tutorial"],
    difficulty: "intermediate",
    estimatedReadTime: 15
  }
];

// Gerador de conteúdo SEO-otimizado
export class ContentGenerator {
  static generateGuide(template: ContentTemplate): string {
    let content = `# ${template.title}\n\n`;
    
    // Meta informações
    content += `> **Category:** ${template.category}\n`;
    content += `> **Difficulty:** ${template.difficulty}\n`;
    content += `> **Read Time:** ${template.estimatedReadTime} minutes\n`;
    content += `> **Keywords:** ${template.keywords.join(', ')}\n\n`;
    
    // Introdução
    content += `## Overview\n\n`;
    content += template.sections[0].content + '\n\n';
    
    // Seções
    template.sections.slice(1).forEach(section => {
      content += this.generateSection(section, 2);
    });
    
    // FAQ
    if (template.faq && template.faq.length > 0) {
      content += `## Frequently Asked Questions\n\n`;
      template.faq.forEach(item => {
        content += `### ${item.question}\n\n`;
        content += `${item.answer}\n\n`;
      });
    }
    
    // Related guides
    if (template.relatedGuides.length > 0) {
      content += `## Related Guides\n\n`;
      template.relatedGuides.forEach(guide => {
        content += `- [${guide.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}](/guides/${guide})\n`;
      });
      content += '\n';
    }
    
    return content;
  }
  
  private static generateSection(section: ContentSection, level: number): string {
    const heading = '#'.repeat(level);
    let content = `${heading} ${section.title}\n\n`;
    
    if (section.subsections) {
      section.subsections.forEach(subsection => {
        content += this.generateSection(subsection, level + 1);
      });
    } else {
      content += `${section.content}\n\n`;
    }
    
    return content;
  }
  
  // Gerar meta tags para o guia
  static generateMetadata(template: ContentTemplate) {
    return {
      title: template.title,
      description: template.sections[0].content.substring(0, 160) + '...',
      keywords: template.keywords.join(', '),
      category: template.category,
      difficulty: template.difficulty,
      readTime: template.estimatedReadTime,
      slug: template.slug
    };
  }
  
  // Gerar structured data para o guia
  static generateStructuredData(template: ContentTemplate, url: string) {
    return {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: template.title,
      description: template.sections[0].content,
      url: url,
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      author: {
        '@type': 'Organization',
        name: 'Voltris',
        url: 'https://www.voltrisoptimizer.com'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Voltris',
        url: 'https://www.voltrisoptimizer.com'
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      },
      articleSection: template.category,
      keywords: template.keywords.join(', '),
      about: {
        '@type': 'Thing',
        name: template.category
      },
      teaches: template.keywords.map(keyword => ({
        '@type': 'DefinedTerm',
        name: keyword,
        description: `Learn about ${keyword} in this comprehensive guide`
      })),
      hasPart: template.sections.map((section, index) => ({
        '@type': 'WebPageElement',
        name: section.title,
        text: section.content,
        position: index + 1
      })),
      faqPage: template.faq ? {
        '@type': 'FAQPage',
        mainEntity: template.faq.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      } : undefined
    };
  }
  
  // Gerar índice de conteúdo
  static generateTableOfContents(sections: ContentSection[]): string {
    let toc = '## Table of Contents\n\n';
    
    sections.forEach((section, index) => {
      const indent = '  '.repeat(section.title.split(' ').length - 2);
      const link = section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      toc += `${index + 1}. [${section.title}](#${link})\n`;
      
      if (section.subsections) {
        section.subsections.forEach((subsection, subIndex) => {
          const subLink = subsection.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          toc += `   ${index + 1}.${subIndex + 1}. [${subsection.title}](#${subLink})\n`;
        });
      }
    });
    
    return toc + '\n';
  }
  
  // Validar qualidade do conteúdo
  static validateContent(content: string): {
    score: number;
    issues: string[];
    suggestions: string[];
  } {
    const issues: string[] = [];
    const suggestions: string[] = [];
    let score = 100;
    
    // Verificar tamanho do conteúdo
    const wordCount = content.split(/\s+/).length;
    if (wordCount < 500) {
      issues.push('Content is too short (minimum 500 words recommended)');
      score -= 20;
    } else if (wordCount < 1000) {
      suggestions.push('Consider expanding content to at least 1000 words for better SEO');
      score -= 10;
    }
    
    // Verificar estrutura
    const headings = content.match(/^#{1,6}\s/gm) || [];
    if (headings.length < 3) {
      issues.push('Content needs more headings for better structure');
      score -= 15;
    }
    
    // Verificar keywords
    const hasKeywords = content.includes('keywords:') || content.includes('Keywords:');
    if (!hasKeywords) {
      suggestions.push('Add keywords section for better SEO');
      score -= 5;
    }
    
    // Verificar links internos
    const internalLinks = content.match(/\[.*?\]\(\/.*?\)/g) || [];
    if (internalLinks.length < 2) {
      suggestions.push('Add more internal links to improve SEO');
      score -= 10;
    }
    
    // Verificar FAQ
    const hasFAQ = content.includes('## Frequently Asked Questions');
    if (!hasFAQ) {
      suggestions.push('Add FAQ section for user engagement');
      score -= 5;
    }
    
    return {
      score: Math.max(0, score),
      issues,
      suggestions
    };
  }
}

// Exportar templates para uso
export { contentTemplates };

// Função para criar novos guias automaticamente
export function createNewGuide(
  title: string,
  category: string,
  keywords: string[],
  difficulty: 'beginner' | 'intermediate' | 'advanced' = 'intermediate'
): ContentTemplate {
  return {
    title,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    category,
    keywords,
    sections: [
      {
        title: "Introduction",
        content: `This comprehensive guide covers ${title.toLowerCase()} with detailed explanations and practical examples.`,
        type: "text"
      },
      {
        title: "Getting Started",
        content: "Learn the fundamentals and prepare your system for optimization.",
        type: "text"
      },
      {
        title: "Advanced Techniques",
        content: "Master advanced techniques for maximum performance gains.",
        type: "text"
      }
    ],
    faq: [
      {
        question: "What are the prerequisites?",
        answer: "Basic computer knowledge and administrator access to your system."
      }
    ],
    relatedGuides: [],
    difficulty,
    estimatedReadTime: 10
  };
}
