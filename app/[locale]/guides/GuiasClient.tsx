'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  Monitor,
  Shield,
  Cpu,
  Clock,
  ArrowRight,
  Search,
  BookOpen,
  Zap,
  LayoutGrid,
  Headphones,
  Gamepad,
  AlertTriangle,
  Brain
} from 'lucide-react';
import { GuideMetadata } from '@/lib/guides';

// Category Configuration (Visual only)
const CATEGORY_CONFIG = [
  {
    id: 'inteligencia-artificial',
    title: 'AI & Development (2026)',
    description: 'AI Agents, Local LLMs, RAG and Vibe Coding',
    icon: Brain,
    color: '#8B31FF'
  },
  {
    id: 'otimizacao',
    title: 'Optimization & FPS',
    description: 'Increase performance in competitive games',
    icon: Zap,
    color: '#FFB800'
  },
  {
    id: 'games-fix',
    title: 'Game Fixes',
    description: 'Solve bugs in GTA V, Minecraft, Roblox and more',
    icon: Gamepad,
    color: '#FF4B6B'
  },
  {
    id: 'windows-erros',
    title: 'Windows Errors',
    description: 'Solutions for blue screens, DLLs and crashes',
    icon: AlertTriangle,
    color: '#E11D48'
  },
  {
    id: 'hardware',
    title: 'Hardware & Assembly',
    description: 'Choose parts and build your PC',
    icon: Cpu,
    color: '#8B31FF'
  },
  {
    id: 'perifericos',
    title: 'Peripherals & Setup',
    description: 'Monitors, mice and organization',
    icon: Headphones,
    color: '#31A8FF'
  },
  {
    id: 'software',
    title: 'Software & Utils',
    description: 'Essential tools and Windows',
    icon: LayoutGrid,
    color: '#31FF8B'
  },
  {
    id: 'rede-seguranca',
    title: 'Network & Security',
    description: 'Protection, Wi-Fi and VPN',
    icon: Shield,
    color: '#8B31FF'
  },
  {
    id: 'windows-geral',
    title: 'Windows & System',
    icon: Monitor,
    color: '#31A8FF'
  },
  {
    id: 'emulacao',
    title: 'Emulation & Retro',
    description: 'Yuzu, Cemu, PS2 and Classics',
    icon: Gamepad,
    color: '#FFB800'
  },
  {
    id: 'linux',
    title: 'Linux & Steam Deck',
    description: 'SteamOS, Proton and Bazzite',
    icon: Monitor,
    color: '#FF4B6B'
  }
];

interface GuiasClientProps {
  initialGuides: GuideMetadata[];
}

export default function GuiasClient({ initialGuides }: GuiasClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const isSearching = searchTerm.length >= 2;

  const effectivelySelectedCategory = isSearching ? 'all' : selectedCategory;

  const filteredCategories = CATEGORY_CONFIG.map(config => {
    const categoryGuides = initialGuides.filter(g => g.category === config.id);

    const matchedGuides = categoryGuides.filter(guide =>
      searchTerm === '' ||
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      ...config,
      guides: matchedGuides
    };
  }).filter(category =>
    (effectivelySelectedCategory === 'all' || category.id === effectivelySelectedCategory) &&
    category.guides.length > 0
  );

  const totalResults = filteredCategories.reduce((acc, cat) => acc + cat.guides.length, 0);

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && totalResults > 0) {
      const contentSection = document.getElementById('content-section');
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Beginner': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Intermediate': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'Advanced': return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050510] font-sans selection:bg-[#31A8FF]/30">

        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden border-b border-white/5 pt-20">
          <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-50"></div>
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#31A8FF]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#8B31FF]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

          <div className="relative max-w-5xl mx-auto text-center z-10 flex-grow flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 text-xs font-medium text-slate-400"
            >
              <BookOpen className="w-3 h-3 text-[#31A8FF]" />
              <span>Knowledge Base v2.0</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
            >
              Specialized Technical Guides
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Repository updated daily with solutions for Windows, Games, Hardware and Networks.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-2xl mx-auto"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                <div className="relative bg-[#0A0A0F] rounded-2xl">
                  <input
                    type="text"
                    placeholder="Search for error, game or component..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleSearchKeyPress}
                    className="w-full px-6 py-5 bg-transparent border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-[#31A8FF]/50 text-lg transition-all"
                  />
                  <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-500 group-hover:text-[#31A8FF] transition-colors" />
                </div>
              </div>

              {/* Immediate Search Feedback */}
              {isSearching && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center justify-center gap-4 text-sm"
                >
                  <span className="text-slate-400">
                    Found <span className="text-white font-bold">{totalResults}</span> {totalResults === 1 ? 'guide' : 'guides'} for your search.
                  </span>
                  <button
                    onClick={() => document.getElementById('content-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#31A8FF] font-black hover:underline flex items-center gap-1"
                  >
                    View results <ArrowRight className="w-3 h-3" />
                  </button>
                </motion.div>
              )}

            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-slate-500 hover:text-white transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#31A8FF] to-transparent"></div>
          </motion.div>
        </section>

        {/* --- CONTENT SECTION --- */}
        <section id="content-section" className="py-12 px-4 bg-[#050510] relative z-10">
          <div className="max-w-7xl mx-auto">

            {/* Category Filter Cards */}
            <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-500 ${isSearching ? 'opacity-30 pointer-events-none grayscale blur-[2px]' : 'opacity-100'}`}>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${selectedCategory === 'all'
                  ? 'bg-white text-black border-white hover:bg-slate-200'
                  : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:border-white/10 hover:text-white'
                  }`}
              >
                All
              </button>
              {CATEGORY_CONFIG.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 border ${selectedCategory === category.id
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:border-white/10 hover:text-white'
                    }`}
                >
                  <category.icon className={`w-4 h-4 ${selectedCategory === category.id ? 'text-black' : ''}`} />
                  {category.title}
                </button>
              ))}
            </div>

            {filteredCategories.length === 0 ? (
              <div className="text-center py-24 bg-white/5 rounded-3xl border border-white/5">
                <Search className="w-16 h-16 text-slate-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">No guide found</h3>
                <p className="text-slate-400 mb-8 max-w-sm mx-auto">We didn't find guides compatible with your search. Try different keywords.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-8 py-3 bg-[#31A8FF] text-white font-bold rounded-xl hover:bg-[#2b93df] transition-all hover:shadow-[0_0_30px_rgba(49,168,255,0.3)]"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="space-y-24">
                {filteredCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/5`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{category.title}</h2>
                        <p className="text-slate-500 text-sm mt-1">{category.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.guides.map((guide) => (
                        <motion.div
                          key={guide.id}
                          whileHover={{ y: -5 }}
                          className="group relative h-full"
                        >
                          <Link href={`/guides/${guide.id}`} className="block h-full relative z-20 focus:outline-none">
                            <div className="h-full bg-[#0A0A0F] hover:bg-[#0F0F16] rounded-2xl border border-white/5 hover:border-[#31A8FF]/30 p-8 transition-all duration-300 relative overflow-hidden flex flex-col">

                              {/* Subtle Glow Effect on Hover */}
                              <div className="absolute top-0 right-0 w-32 h-32 bg-[#31A8FF]/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                              <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getDifficultyColor(guide.difficulty)}`}>
                                  {guide.difficulty}
                                </div>
                              </div>

                              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#31A8FF] transition-colors leading-tight relative z-10">
                                {guide.title}
                              </h3>

                              <p className="text-slate-400 text-sm mb-8 leading-relaxed line-clamp-2 flex-grow relative z-10">
                                {guide.description}
                              </p>

                              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto relative z-10">
                                <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                                  <Clock className="w-4 h-4" />
                                  {guide.time}
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#31A8FF] group-hover:text-white transition-all text-slate-500">
                                  <ArrowRight className="w-4 h-4" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050510] to-[#0A0A0F]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#31A8FF]/5 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Need Professional Help?</h2>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Tried to fix it yourself and couldn't? Our specialists can access your PC remotely and fix the problem for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/services"
                className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105"
              >
                View Specialized Services
              </Link>
              <Link
                href="https://wa.me/5511996716235?text=Hello!%20I%20read%20the%20guides%20but%20need%20specialized%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-4xl mx-auto px-4 py-8">
      </div>
      <Footer />
    </>
  );
}
