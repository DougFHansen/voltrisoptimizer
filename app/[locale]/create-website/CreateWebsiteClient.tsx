"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Globe, Target, Code, CheckCircle, Rocket, Layers, Layout, Zap, Search, Shield, ArrowRight, MousePointer2 } from 'lucide-react';
import TechFloatingElements from '@/components/TechFloatingElements';
import JsonLd from '@/components/JsonLd';

const plans = [
    {
        name: "Landing Page S",
        price: "$197.90",
        description: "Full focus on conversion and speed.",
        features: [
            "High-conversion page",
            "Native 10/10 SEO",
            "Mobile First Site",
            "WhatsApp Integration",
            "Google Analytics 4",
            "Free SSL & Hosting"
        ],
        icon: <Target className="w-8 h-8 text-[#31A8FF]" />
    },
    {
        name: "Business Portal",
        price: "$397.90",
        description: "The complete solution for companies.",
        features: [
            "Up to 10 premium pages",
            "AI-Optimized Blog",
            "Content Management",
            "Priority Google Indexing",
            "VIP Technical Support",
            "Exclusive Voltris Layout"
        ],
        icon: <Layers className="w-8 h-8 text-[#8B31FF]" />
    },
    {
        name: "E-commerce X",
        price: "$597.90",
        description: "Sales without limits and without fees.",
        features: [
            "Turbocharged Virtual Store",
            "Distraction-free Checkout",
            "Inventory/Order Management",
            "Integrated Payment Methods",
            "Bank-Level Security",
            "Core Web Vitals Optimization"
        ],
        icon: <Rocket className="w-8 h-8 text-[#FF4B6B]" />
    }
];

export default function CreateWebsiteClient() {
    return (
        <>
            <Header />
            <JsonLd
                type="FAQPage"
                data={{
                    mainEntity: [
                        {
                            "@type": "Question",
                            "name": "Why are Voltris websites better than Wix or WordPress?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Unlike generic builders, we use Next.js and static rendering. This makes the site 10x faster and friendlier to Google algorithms, resulting in better search positions."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Will my site be found on Google?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. All our sites include native 10/10 SEO, perfect semantic structure, and microdata that helps search engines and AIs understand your business."
                            }
                        }
                    ]
                }}
            />
            <main className="bg-[#020205] min-h-screen relative overflow-x-hidden font-sans selection:bg-[#31A8FF]/30 text-white">

                {/* Background Effects - Premium Voltris Branding */}
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150 mix-blend-overlay pointer-events-none z-0"></div>
                <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[#31A8FF]/5 rounded-full blur-[150px] mix-blend-screen animate-pulse pointer-events-none z-0"></div>
                <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-[#FF4B6B]/5 rounded-full blur-[150px] mix-blend-screen animate-pulse pointer-events-none z-0"></div>

                {/* Hero Section */}
                <section className="min-h-[100dvh] flex flex-col items-center justify-center relative z-10 w-full px-4 text-center pb-20 pt-32">
                    <TechFloatingElements />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-6xl"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#31A8FF]/10 border border-[#31A8FF]/20 backdrop-blur-xl mb-10">
                            <span className="flex h-2 w-2 rounded-full bg-[#31A8FF] shadow-[0_0_15px_#31A8FF] animate-pulse"></span>
                            <span className="text-xs font-black text-white uppercase tracking-[0.3em]">High Performance Website Creation</span>
                        </div>

                        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase italic">
                            FORGET THE <br />
                            <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text px-2">BASIC.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed font-light">
                            Ultra-fast Next.js development designed to overcome the slowness of WordPress and the limitations of Wix. Your site with native 10/10 SEO.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                href="/contact"
                                className="group relative px-12 py-6 rounded-2xl bg-white text-black font-black text-2xl hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.15)] flex items-center gap-4 uppercase italic overflow-hidden"
                            >
                                <Zap className="w-7 h-7 fill-black" /> Create My Site Now
                            </Link>
                            <button
                                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xl hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-xl hover:border-white/20"
                            >
                                <MonitorSmartphone className="w-6 h-6 text-[#31A8FF]" /> View Projects
                            </button>
                        </div>
                    </motion.div>
                </section>

                {/* Strategic Comparative (SEO & Authority) */}
                <section className="py-32 bg-[#05050A]/80 backdrop-blur-md border-y border-white/5 relative z-10 w-full">
                    <div className="container mx-auto px-4 mb-20">
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">Voltris vs Generics</h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-[#31A8FF] to-[#FF4B6B] rounded-full mb-8"></div>
                            <p className="text-slate-400 text-lg">Why do major companies abandon Wix and WordPress for our technology?</p>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 font-sans">
                        {[
                            {
                                title: "Unbeatable Performance",
                                desc: "Sites that load in less than 1 second. Forget long loading times that make you lose customers.",
                                icon: <Zap className="w-6 h-6 text-[#FF4B6B]" />,
                                tag: "VS WIX"
                            },
                            {
                                title: "Native 10/10 SEO",
                                desc: "Clean and semantic structure designed to rank without depending on heavy plugins.",
                                icon: <Search className="w-6 h-6 text-[#31A8FF]" />,
                                tag: "VS WORDPRESS"
                            },
                            {
                                title: "Absolute Security",
                                desc: "No exposed databases or vulnerable plugins. Your online presence shielded against attacks.",
                                icon: <Shield className="w-6 h-6 text-[#00FF94]" />,
                                tag: "VS ALL"
                            }
                        ].map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                key={i}
                                className="group p-8 rounded-[40px] bg-[#0A0A15] border border-white/5 hover:border-[#31A8FF]/30 transition-all duration-500"
                            >
                                <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-6">{item.tag}</div>
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-2xl font-black text-white mb-4 italic uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Plans & Pricing Modernized */}
                <section id="planos" className="py-32 px-4 relative z-10 w-full overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#31A8FF]/5 blur-[150px] rounded-[100%] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">Fair Investment.</h2>
                        <p className="text-slate-400 text-xl font-light">Cutting-edge technology at a price that fits your project.</p>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                        {plans.map((plan, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                key={i}
                                className={`group p-[1px] rounded-[48px] bg-gradient-to-b ${i === 1 ? 'from-[#31A8FF] to-[#8B31FF]' : 'from-white/10 to-transparent'}`}
                            >
                                <div className="bg-[#0D0D15] rounded-[47px] p-10 h-full flex flex-col">
                                    <div className="mb-8">{plan.icon}</div>
                                    <h3 className="text-3xl font-black text-white mb-2 italic uppercase tracking-tighter">{plan.name}</h3>
                                    <p className="text-slate-500 text-sm mb-6 font-medium">{plan.description}</p>

                                    <div className="mb-8">
                                        <span className="text-4xl font-black text-white italic tracking-tighter">{plan.price}</span>
                                    </div>

                                    <div className="w-full h-px bg-white/5 mb-8"></div>

                                    <ul className="space-y-4 mb-12 flex-grow">
                                        {plan.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm text-slate-400">
                                                <CheckCircle className="w-4 h-4 text-[#31A8FF]" /> {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/contact"
                                        className={`w-full py-5 rounded-2xl text-center font-black uppercase italic transition-all ${i === 1 ? 'bg-gradient-to-r from-[#31A8FF] to-[#8B31FF] text-white shadow-lg shadow-[#31A8FF]/20' : 'bg-white/5 text-white hover:bg-white/10'}`}
                                    >
                                        Select
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Conversion Section (Digital Marketing) */}
                <section className="py-32 px-4 bg-[#050510] relative z-10 w-full overflow-hidden">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative group p-4">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] rounded-[48px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                            <div className="relative rounded-[48px] bg-[#0D0D15] border border-white/10 p-12 overflow-hidden shadow-2xl">
                                <div className="flex items-center gap-3 mb-8">
                                    <Rocket className="w-8 h-8 text-[#FF4B6B] animate-bounce" />
                                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Sales-Ready Site</h3>
                                </div>
                                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
                                    <p>We integrate your site with the world's largest marketing tools: Meta Pixel, Google Tags, CRM APIs, and more.</p>
                                    <p>Your site won't just be beautiful; it will be a machine to capture leads 24 hours a day, 7 days a week.</p>
                                </div>
                                <div className="mt-10 flex flex-wrap gap-4">
                                    {["Meta Pixel", "GA4", "Hotjar", "Hubspot"].map((t, idx) => (
                                        <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-black uppercase tracking-widest text-slate-500">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10 text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00FF94]/10 border border-[#00FF94]/30 text-[#00FF94] text-xs font-black uppercase tracking-widest">Voltris Technology</span>
                            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
                                YOUR SITE <br /> <span className="text-[#31A8FF]">TURBOCHARGED.</span>
                            </h2>
                            <p className="text-slate-400 text-xl leading-relaxed font-light">
                                We use the same technological stack as giants like TikTok, Twitch, and Netflix to ensure your site supports any traffic volume.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-3 text-white font-black uppercase italic tracking-widest group border-b border-[#31A8FF] pb-2">
                                Request Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Professional Final CTA */}
                <section className="py-24 px-4 text-center relative z-10">
                    <div className="max-w-5xl mx-auto py-16 px-6 md:px-12 rounded-[48px] bg-[#0A0A1A] border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B6B]/10 via-[#8B31FF]/10 to-[#31A8FF]/10 opacity-50"></div>
                        <div className="relative z-20">
                            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-8 leading-[1.1] px-2">
                                READY TO <br />
                                <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text px-2">
                                    DOMINATE THE MARKET?
                                </span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                                Transform your idea into a professional website in record time.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex px-10 py-5 rounded-xl bg-gradient-to-r from-[#31A8FF] to-[#8B31FF] text-white font-black text-xl hover:scale-105 transition-all duration-300 uppercase italic shadow-[0_15px_40px_rgba(49,168,255,0.25)] items-center"
                            >
                                <MousePointer2 className="w-6 h-6 mr-3" /> Talk to an Expert
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
