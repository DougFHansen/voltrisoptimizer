'use client';

import Link from 'next/link';
import { 
  Wrench, 
  Zap, 
  Download, 
  Monitor, 
  BookOpen, 
  FileText, 
  Settings, 
  Gamepad2 
} from 'lucide-react';

export default function ContentClusterPage() {
  const contentClusters = [
    {
      title: "Windows Formatting",
      description: "Everything about how to format your computer correctly",
      icon: <Download className="w-8 h-8 text-blue-500" />,
      articles: [
        { title: "How to format Windows 10 step by step", slug: "como-formatar-windows-10" },
        { title: "Differences between quick and full format", slug: "formatacao-rapida-vs-completa" },
        { title: "How to backup before formatting", slug: "backup-antes-formatacao" },
        { title: "How to install drivers after formatting", slug: "instalar-drivers-pos-formatar" }
      ]
    },
    {
      title: "PC Optimization",
      description: "Techniques and tips to make your PC faster",
      icon: <Zap className="w-8 h-8 text-green-500" />,
      articles: [
        { title: "How to boost FPS in games", slug: "aumentar-fps-em-jogos" },
        { title: "Windows optimizations for gaming", slug: "otimizacoes-windows-gaming" },
        { title: "How to properly clean Windows", slug: "limpar-windows-corretamente" },
        { title: "Reduce RAM and CPU usage", slug: "reduzir-uso-ram-cpu" }
      ]
    },
    {
      title: "Technical Assistance",
      description: "Troubleshooting and preventive maintenance",
      icon: <Wrench className="w-8 h-8 text-purple-500" />,
      articles: [
        { title: "How to identify hardware problems", slug: "identificar-problemas-hardware" },
        { title: "Signs your PC needs maintenance", slug: "sinais-manutencao-pc" },
        { title: "How to clean computer coolers", slug: "limpar-cooler-computador" },
        { title: "Thermal paste replacement", slug: "substituicao-pasta-termica" }
      ]
    },
    {
      title: "Software & Applications",
      description: "Tips on useful software and program optimization",
      icon: <Monitor className="w-8 h-8 text-cyan-500" />,
      articles: [
        { title: "Essential programs after formatting", slug: "programas-essenciais-pos-formatar" },
        { title: "How to remove Windows bloatware", slug: "remover-bloatware-windows" },
        { title: "PC optimization software", slug: "softwares-otimizacao-pc" },
        { title: "How to disable startup programs", slug: "desativar-programas-inicializacao" }
      ]
    }
  ];

  const popularArticles = [
    {
      title: "How to boost FPS in any game",
      excerpt: "Discover how to increase FPS in your favorite games with a few simple settings...",
      category: "PC Optimization",
      date: "2024-01-15"
    },
    {
      title: "Windows Formatting: Complete Guide",
      excerpt: "A complete guide on how to properly format your Windows, from backup to installation...",
      category: "Formatting",
      date: "2024-01-10"
    },
    {
      title: "Signs your PC needs maintenance",
      excerpt: "Recognize the signs that indicate your computer requires technical assistance...",
      category: "Assistance",
      date: "2024-01-05"
    },
    {
      title: "How to clean Windows without losing files",
      excerpt: "Learn to clean your Windows safely without losing your important files...",
      category: "Optimization",
      date: "2024-01-01"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4">
        <div className="absolute inset-0 bg-[url('/background-grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blue-500">Tech Blogs</span><br />
              & Guides
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Articles, tutorials, and technical guides about formatting, optimization, assistance, and computer maintenance. 
              Learn to make your PC faster, safer, and more efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Content Clusters */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Content Clusters</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our content clusters organized by topic
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contentClusters.map((cluster, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    {cluster.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{cluster.title}</h3>
                    <p className="text-gray-400">{cluster.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {cluster.articles.map((article, idx) => (
                    <Link 
                      key={idx}
                      href={`/guias/${article.slug}`}
                      className="flex items-center justify-between p-3 hover:bg-gray-700 rounded-lg transition-all group"
                    >
                      <span className="group-hover:text-blue-400 transition-colors">{article.title}</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>

                <Link 
                  href={`/guias?categoria=${cluster.title.toLowerCase().replace(/ /g, '-')}`}
                  className="inline-block mt-6 text-blue-400 hover:text-blue-300 font-medium"
                >
                  View all articles →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Articles</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The most read and requested articles by our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-1 bg-blue-600 rounded-full">{article.category}</span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                <Link 
                  href={`/guias/${article.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')}`}
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Read full article →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want more tech tips?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive exclusive tips on PC optimization and maintenance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your best email" 
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white flex-grow min-w-[250px]"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}