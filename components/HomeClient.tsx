"use client";
import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { useState, useEffect } from 'react';
import {
    FiMonitor,
    FiSettings,
    FiClock,
    FiBarChart2,
    FiShield,
    FiHelpCircle,
    FiAlertTriangle,
    FiCpu,
    FiDatabase,
    FiDownload,
} from 'react-icons/fi';
import { MonitorSmartphone, Laptop2, ShieldCheck, HardDrive, GaugeCircle, Database, Package, Printer, Cpu, Zap, Activity, ChevronRight, BarChart3, Lock, Wrench, Rocket, Check } from "lucide-react";
import AnimatedSection from '@/components/AnimatedSection';
import dynamic from 'next/dynamic';

const OptimizerMockup = dynamic(() => import('@/components/OptimizerMockup'), {
    loading: () => <div className="w-full h-[400px] bg-white/5 animate-pulse rounded-2xl" />,
    ssr: false
});

const FaWhatsapp = dynamic(() => import('react-icons/fa').then(mod => mod.FaWhatsapp), {
    ssr: false
});

const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

import { motion } from 'framer-motion';
import JsonLd from "@/components/JsonLd";

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

export default function HomeClient() {
    const [showMoreText, setShowMoreText] = useState(false);
    const [minimized, setMinimized] = useState(false);

    const services = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Voltris Optimizer",
            desc: "Increase FPS, reduce input lag, and optimize Windows with just 1 click using our high-performance software.",
            price: "License from $9.90",
            link: "/voltrisoptimizer",
            highlight: true
        },
        {
            icon: <Activity className="w-8 h-8" />,
            title: "Advanced Gamer Optimization",
            desc: "Remote access by a specialist for RAM overclocking, CPU tuning, and deep kernel optimization for eSports.",
            price: "From $97.00",
            link: "/pc-optimization",
            highlight: true
        },
        {
            icon: <FiAlertTriangle className="w-8 h-8" />,
            title: "Windows Error Correction",
            desc: "We resolve system errors, blue screens, startup failures, and Windows performance issues remotely.",
            price: "From $47.00",
            link: "/windows-support",
            highlight: false
        },
        {
            icon: <FiShield className="w-8 h-8" />,
            title: "Express Technical Support",
            desc: "Virus and malware removal, complete remote formatting with secure backup for PCs and laptops.",
            price: "From $97.00",
            link: "/format-windows",
            highlight: false
        }
    ];

    useEffect(() => {
        const handleAnchorScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    const headerHeight = 80;
                    const elementPosition = (element as HTMLElement).offsetTop - headerHeight;
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }
            }
        };

        handleAnchorScroll();

        window.addEventListener('hashchange', handleAnchorScroll);
        return () => {
            window.removeEventListener('hashchange', handleAnchorScroll);
        };
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');
            const error = params.get('error');
            const errorDescription = params.get('error_description');

            if (code) {
                const savedRedirect = sessionStorage.getItem('oauth_redirect_after_login');
                sessionStorage.removeItem('oauth_redirect_after_login');
                const nextParam = savedRedirect ? `&next=${encodeURIComponent(savedRedirect)}` : '';
                window.location.replace(`/auth/callback?code=${encodeURIComponent(code)}${nextParam}`);
                return;
            }

            if (error) {
                alert(`Authentication error: ${error}\n${errorDescription || ''}`);
            }
        }
    }, []);

    if (minimized) {
        return (
            <div className="whatsapp-float-container" style={{ bottom: 24, right: 24 }}>
                <button
                    className="whatsapp-float-btn"
                    style={{
                        background: '#25D366',
                        borderRadius: '50%',
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 16px #25d36655',
                        transition: 'transform 0.2s',
                        cursor: 'pointer',
                        border: 'none',
                        zIndex: 9999,
                    }}
                    aria-label="Open WhatsApp chat"
                    onClick={() => setMinimized(false)}
                >
                    <FaWhatsapp size={24} color="#fff" />
                </button>
            </div>
        );
    }

    return (
        <>
            <Header />
            {/* JSON-LD Schema Markup (SEO Dupla Intenção) */}
            <JsonLd
                type="SoftwareApplication"
                data={{
                    name: "Voltris Optimizer",
                    operatingSystem: "Windows 10, Windows 11",
                    applicationCategory: "UtilitiesApplication",
                    description: "Advanced PC optimization software for gamers and professionals. Increase FPS, reduce kernel latency, and improve Windows system performance.",
                    offers: {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    aggregateRating: {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1250"
                    }
                }}
            />
            <JsonLd
                type="Service"
                data={{
                    name: "Remote Technical Support and Formatting",
                    description: "Specialized IT services, Windows formatting, computer optimization, and virus removal with immediate remote support.",
                    provider: {
                        "@type": "Organization",
                        "name": "VOLTRIS",
                        "url": "https://www.voltrisoptimizer.com"
                    },
                    serviceType: "IT Technical Support",
                    areaServed: { "@type": "Country", "name": "Global" },
                    offers: {
                        "@type": "Offer",
                        "price": "50.00",
                        "priceCurrency": "USD"
                    }
                }}
            />
            <JsonLd
                type="FAQPage"
                data={{
                    mainEntity: [
                        {
                            "@type": "Question",
                            "name": "How to increase FPS in games?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "To increase FPS, you can use Voltris Optimizer to disable unnecessary Windows services, optimize the power plan, clean temporary files, and adjust system latency for your specific hardware."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Does VOLTRIS do remote PC formatting?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we perform computer and laptop formatting remotely and securely, including data backup and optimized driver installation for maximum performance."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How does Voltris Optimizer improve work performance?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "The software removes background processes consuming CPU and RAM, ensuring your work tools (Office, Adobe, Browsers) have maximum hardware priority."
                            }
                        }
                    ]
                }}
            />
            <main className="relative">
                {/* Global Ambient Background Effects (Noise Overlay on Top) */}
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-50"></div>

                {/* Background Gradients (Fixed Behind) */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#8B31FF]/30 blur-[120px] mix-blend-screen" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#31A8FF]/30 blur-[100px] mix-blend-screen" />
                </div>

                <section
                    className="
                    relative
                    w-full
                    min-h-[100dvh]
                    flex
                    flex-col
                    items-center
                    justify-center
                    px-4
                    sm:px-6
                    lg:px-12
                    xl:px-24
                    overflow-x-hidden
                    pt-20
                    pb-6
                    lg:pt-24
                    lg:pb-12
                "
                    aria-label="PC optimization software for Windows - Voltris Optimizer"
                >
                    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 lg:gap-8 h-full relative z-10">
                        {/* Left Content - Typography & CTA */}
                        <div className="contents lg:flex lg:flex-1 lg:flex-col lg:items-start lg:gap-10 z-20">
                            {/* Text Content Block */}
                            <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-6 w-full order-1">
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-2 mt-4 lg:mt-0">
                                    <span className="flex h-2 w-2 rounded-full bg-[#00FF88] shadow-[0_0_12px_rgba(0,255,136,0.8)] animate-pulse"></span>
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-white/70">Smart Software & Real Experts</span>
                                </div>

                                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight font-sans lg:mt-4 text-center lg:text-left">
                                    <span className="bg-gradient-to-r from-white to-white/70 text-transparent bg-clip-text">Faster PC.</span> <br className="hidden lg:block" />
                                    <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(139,49,255,0.3)]">Zero Complications.</span>
                                </h1>

                                <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-xl leading-relaxed font-medium px-2 sm:px-0 text-center lg:text-left">
                                    Increase FPS in games and eliminate lag. Optimize it yourself using our <strong className="text-white">Voltris Optimizer</strong> software, or let our <strong className="text-white">Experts</strong> do everything for you remotely.
                                </p>
                            </div>

                            {/* Buttons Block */}
                            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 w-full sm:w-auto z-30 order-3">
                                <a
                                    href="/voltrisoptimizer"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 font-black text-white transition-all duration-300 bg-gradient-to-r from-[#31A8FF] to-[#8B31FF] rounded-2xl hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(49,168,255,0.4)] overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-xs">
                                        Download Optimizer
                                        <FiDownload className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                                    </span>
                                </a>
                                <a
                                    href="https://wa.me/5511996716235?text=Hi!%20I'd%20like%20to%20know%20more%20about%20VOLTRIS%20premium%20remote%20services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 backdrop-blur-sm hover:border-[#FF4B6B]/50"
                                >
                                    <FaWhatsapp className="mr-2 text-lg text-[#00FF94]" />
                                    Talk to a Specialist
                                </a>
                            </div>
                        </div>

                        {/* Right Content - Visual Component (Dashboard Simulation) */}
                        <div className="order-2 lg:order-none flex-1 w-full max-w-[600px] lg:max-w-full relative flex items-center justify-center perspective">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#31A8FF]/20 to-[#8B31FF]/20 blur-[60px] rounded-full transform scale-75"></div>
                            <OptimizerMockup />
                        </div>
                    </div>
                </section>

                <AnimatedSection direction="up" delay={0.2}>
                    <section id="about" className="relative py-20 lg:py-32 bg-[#050510] overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#31A8FF]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B31FF]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="flex flex-col gap-8 text-center lg:text-left">
                                    <div>
                                        <h2 className="text-sm font-bold tracking-[0.2em] text-[#31A8FF] mb-4 uppercase">
                                            Who We Are
                                        </h2>
                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                                            Redefining the Standard for <br className="hidden lg:block" />
                                            <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">
                                                Engineering & Performance
                                            </span>
                                        </h3>
                                        <p className="text-lg text-slate-400 leading-relaxed font-light">
                                            <strong>Voltris</strong> is not just conventional technical support. We are a technology laboratory specializing in extracting the <strong>maximum potential from your hardware</strong> through kernel-level optimizations, deep cleaning, and enterprise security.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex flex-col sm:flex-row gap-5 items-center lg:items-start text-center sm:text-left p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#31A8FF]/30 transition-colors duration-300">
                                            <div className="w-12 h-12 rounded-xl bg-[#31A8FF]/10 flex items-center justify-center shrink-0 border border-[#31A8FF]/20 shadow-[0_0_15px_rgba(49,168,255,0.1)]">
                                                <Cpu className="w-6 h-6 text-[#31A8FF]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-1">Hardware Optimization (Overclock & Tweak)</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    Fine-tuning voltage and frequencies to ensure stable FPS and lower latency in competitive games.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-5 items-center lg:items-start text-center sm:text-left p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FF4B6B]/30 transition-colors duration-300">
                                            <div className="w-12 h-12 rounded-xl bg-[#FF4B6B]/10 flex items-center justify-center shrink-0 border border-[#FF4B6B]/20 shadow-[0_0_15px_rgba(255,75,107,0.1)]">
                                                <Wrench className="w-6 h-6 text-[#FF4B6B]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-1">Remote Technical Support</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    Resolving complex software, driver, and operating system issues from the comfort of your home.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                                        <a href="/about" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-all duration-300">
                                            Learn Our History
                                            <ChevronRight className="w-4 h-4 ml-2" />
                                        </a>
                                    </div>
                                </div>

                                <div className="relative w-full max-w-[500px] mx-auto perspective-1000">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#31A8FF] to-[#8B31FF] blur-[80px] opacity-20 rounded-full animate-pulse-slow"></div>
                                    <motion.div
                                        className="relative w-full aspect-[4/5] sm:aspect-square bg-[#0A0A0F]/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
                                        initial={{ rotateY: -5, opacity: 0 }}
                                        whileInView={{ rotateY: 0, opacity: 1 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                                                <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                                            </div>
                                            <div className="text-xs text-white/30 font-mono">root@voltris-core:~</div>
                                        </div>

                                        <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 space-y-4 flex-1 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 }}
                                            >
                                                <span className="text-[#8B31FF]">➜</span> <span className="text-[#31A8FF]">initialize</span> --mode=performance_boost
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 1 }}
                                                className="space-y-1 pl-4 border-l-2 border-[#31A8FF]/20"
                                            >
                                                <div className="text-[#31A8FF]">[INFO] Loading core modules...</div>
                                                <div>Analyzed Processes: <span className="text-green-400">12,405</span></div>
                                                <div>Optimized Services: <span className="text-green-400">58</span></div>
                                                <div>Network Latency: <span className="text-red-400 line-through mr-2">45ms</span> <span className="text-green-400">12ms</span></div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 2 }}
                                            >
                                                <span className="text-[#8B31FF]">➜</span> <span className="text-[#FF4B6B]">security_check</span> --deep-scan
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 2.5 }}
                                                className="bg-white/5 p-3 rounded-lg border border-white/5"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <span>Threat Detection</span>
                                                    <span className="text-green-400">Active</span>
                                                </div>
                                                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[#00FF94] w-full animate-progress-indeterminate"></div>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 3.5 }}
                                                className="pt-4 text-green-400 font-bold"
                                            >
                                                SUCCESS: System is now running at 100% efficiency.
                                                <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse align-middle"></span>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.2}>
                    <section className="py-6 xs:py-8 sm:py-12 px-2 xs:px-4 sm:px-6 md:px-8 overflow-x-hidden bg-[#050510] relative">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
                        <div className="max-w-6xl mx-auto relative z-10">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
                                <div className="text-center">
                                    <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text mb-1 xs:mb-2">
                                        100,000+
                                    </div>
                                    <div className="text-xs xs:text-sm sm:text-base text-[#e2e8f0]">
                                        Clients Served
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8B31FF] via-[#31A8FF] to-[#FF4B6B] text-transparent bg-clip-text mb-1 xs:mb-2">
                                        4.9
                                    </div>
                                    <div className="text-xs xs:text-sm sm:text-base text-[#e2e8f0]">
                                        Average Rating
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#31A8FF] via-[#FF4B6B] to-[#8B31FF] text-transparent bg-clip-text mb-1 xs:mb-2">
                                        Immediate
                                    </div>
                                    <div className="text-xs xs:text-sm sm:text-base text-[#e2e8f0]">
                                        Response Time
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF4B6B] via-[#31A8FF] to-[#8B31FF] text-transparent bg-clip-text mb-1 xs:mb-2">
                                        100%
                                    </div>
                                    <div className="text-xs xs:text-sm sm:text-base text-[#e2e8f0]">
                                        Online Service
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.3}>
                    <section id="services" className="relative py-24 lg:py-32 bg-[#050510] overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#31A8FF]/5 to-transparent blur-[100px] pointer-events-none"></div>

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center mb-20 max-w-3xl mx-auto">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31A8FF]/10 border border-[#31A8FF]/20 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-[#31A8FF] animate-pulse"></span>
                                    <span className="text-xs font-bold text-[#31A8FF] tracking-widest uppercase">Professional Solutions</span>
                                </div>
                                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                                    Remote IT Support, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">PC Optimization and Windows Services</span>
                                </h2>

                                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Fast online service for formatting, error correction, virus removal, performance optimization, and professional website development.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                                {services.map((service, idx) => (
                                    <div key={idx} className={`group relative bg-[#0A0A0F] border ${service.highlight ? 'border-[#31A8FF]/50 shadow-[0_0_30px_rgba(49,168,255,0.1)]' : 'border-white/5'} hover:border-[#31A8FF]/80 rounded-3xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                        <div className="relative h-full bg-[#0E0E12] rounded-[20px] p-8 flex flex-col items-start overflow-hidden">
                                            {service.highlight && (
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#31A8FF]/10 blur-[50px] rounded-full pointer-events-none"></div>
                                            )}

                                            <div className="w-16 h-16 rounded-2xl bg-[#1A1A22]/50 backdrop-blur-sm border border-white/5 flex items-center justify-center mb-6 group-hover:bg-[#31A8FF]/10 group-hover:border-[#31A8FF]/20 transition-all duration-300 shadow-lg relative z-10">
                                                <div className="transform transition-transform duration-300 group-hover:scale-110 text-[#31A8FF]">
                                                    {service.icon}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#31A8FF] transition-colors relative z-10">{service.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                                                {service.desc}
                                            </p>

                                            <div className="w-full pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Starting at</span>
                                                    <span className="text-white font-bold text-lg tracking-tight">{service.price.replace('From ', '').replace('A partir de ', '')}</span>
                                                </div>

                                                <Link href={service.link} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${service.highlight ? 'bg-[#31A8FF] text-white hover:bg-[#2b93df]' : 'bg-white/5 border border-white/10 text-white group-hover:bg-white/10'}`} aria-label={`View more about ${service.title}`}>
                                                    <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                <section id="optimizer" className="relative py-20 lg:py-32 bg-[#050510] overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
                    <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#31A8FF]/10 blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-[#8B31FF]/10 blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16 max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                                <span className="flex h-2 w-2 rounded-full bg-[#00FF94] shadow-[0_0_8px_#00FF94]"></span>
                                <span className="text-xs font-bold text-white tracking-widest uppercase">First Cloud-Based PC Optimization Software with Remote Control</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">VOLTRIS</span> <span className="bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">OPTIMIZER</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-4">
                                PC optimization software with cloud technology and remote control via web.
                                Increase FPS in games, optimize for streaming, and accelerate enterprise computers.
                            </p>
                            <p className="text-base text-slate-500 leading-relaxed">
                                Innovative technology for gamers, streamers, companies, and home users.
                                Execute optimizations remotely from anywhere in the world through the web dashboard.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="group relative bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-[#FF4B6B]/30 transition-all duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-[#FF4B6B]/10 flex items-center justify-center mb-6 text-[#FF4B6B] group-hover:scale-110 transition-transform duration-300">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">For Gamers and Streamers</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        Increase FPS, reduce input lag, and eliminate stuttering in competitive games. Specific optimization for Valorant, CS2, League of Legends, and streaming with OBS.
                                    </p>
                                    <ul className="space-y-2 text-xs text-slate-500">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-[#FF4B6B]" />
                                            Windows lag reduction
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-[#FF4B6B]" />
                                            Better performance for OBS
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-[#FF4B6B]" />
                                            Stable frames (1% Lows)
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="group relative bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-[#8B31FF]/30 transition-all duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#8B31FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-[#8B31FF]/10 flex items-center justify-center mb-6 text-[#8B31FF] group-hover:scale-110 transition-transform duration-300">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">For Business</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        Remote performance management via the cloud. Optimize your entire fleet of corporate computers from anywhere through the web dashboard.
                                    </p>
                                    <ul className="space-y-2 text-xs text-slate-500">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-[#8B31FF]" />
                                            Remote web control
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-[#8B31FF]" />
                                            Reduced IT costs
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-[#8B31FF]" />
                                            Increased productivity
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="group relative bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-[#31A8FF]/30 transition-all duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#31A8FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-[#31A8FF]/10 flex items-center justify-center mb-6 text-[#31A8FF] group-hover:scale-110 transition-transform duration-300">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">For Home Users</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        Slow PC? The ultimate solution. Software to make your PC faster, clean RAM automatically, and improve Windows 10 and 11 performance.
                                    </p>
                                    <ul className="space-y-2 text-xs text-slate-500">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-[#31A8FF]" />
                                            Automatic optimization
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-[#31A8FF]" />
                                            Responsive system
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-[#31A8FF]" />
                                            Revitalization of old PCs
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-[#0A0A0F]/50 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Zap className="w-6 h-6 text-[#EAB308]" />
                                    Remote Features via Web Dashboard
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Complete Automatic Optimization",
                                        "Real-time RAM Optimization",
                                        "Deep System Cleaning",
                                        "Network Optimization (TCP/IP)",
                                        "Intelligent Gaming Mode with AI",
                                        "Restore Point Creation",
                                        "Power Plan Configuration",
                                        "Complete System Analysis",
                                        "Automatic Windows Repair",
                                        "Remote Control (Restart/Shutdown)",
                                        "Competitive Gaming Profiles",
                                        "Real-time Monitoring"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-300 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                                <Check className="w-3 h-3 text-green-500" />
                                            </div>
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative bg-gradient-to-br from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] rounded-3xl p-[1px] group overflow-hidden">
                                <div className="absolute inset-0 bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="bg-[#0A0A0F] h-full rounded-[23px] p-8 flex flex-col items-center justify-center text-center relative z-10">
                                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Average Gain</div>
                                    <div className="text-7xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                                        +40%
                                    </div>
                                    <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4B6B] to-[#31A8FF]">
                                        PERFORMANCE
                                    </div>

                                    <div className="w-full mt-8">
                                        <Link href="/voltrisoptimizer" className="block w-full py-4 rounded-xl bg-white font-bold text-lg hover:scale-[1.02] transition-transform active:scale-[0.98]">
                                            <span className="text-black">DISCOVER</span>{' '}
                                            <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">VOLTRIS OPTIMIZER</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-[#0A0A0F]/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 max-w-5xl mx-auto">
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">
                                The First Cloud-Based Optimization Software with Remote Control
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-center mb-6">
                                <strong className="text-white">VOLTRIS OPTIMIZER</strong> is an innovative technology, being the first cloud-based platform with <strong className="text-white">remote optimization control via web</strong>. Our platform allows you to execute optimization functions, RAM cleaning, and advanced processing from anywhere in the world through the online dashboard.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5">
                                    <div className="text-3xl font-bold text-[#31A8FF] mb-2">Cloud</div>
                                    <div className="text-sm text-slate-400">Cloud Technology</div>
                                </div>
                                <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5">
                                    <div className="text-3xl font-bold text-[#8B31FF] mb-2">Remote</div>
                                    <div className="text-sm text-slate-400">Web Control</div>
                                </div>
                                <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5">
                                    <div className="text-3xl font-bold text-[#FF4B6B] mb-2">Exclusive</div>
                                    <div className="text-sm text-slate-400">Pioneering Tech</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <AnimatedSection direction="up" delay={0.2}>
                    <section className="relative py-20 lg:py-32 bg-[#050510] overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#31A8FF]/5 blur-[120px] rounded-full pointer-events-none"></div>

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-sm font-bold tracking-[0.2em] text-[#31A8FF] mb-4 uppercase">Testimonials</h2>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                    What they say about the <br />
                                    <span className="bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">Voltris Experience</span>
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
                                {[
                                    {
                                        name: "Carlos Silva",
                                        role: "Competitive Gamer",
                                        location: "São Paulo, SP",
                                        text: "My FPS in Valorant literally doubled. I didn't believe software optimization would make such a difference, but Voltris proved me wrong. Impeccable service!",
                                        initial: "C",
                                        color: "from-[#FF4B6B] to-[#FF8F6B]"
                                    },
                                    {
                                        name: "Ana Costa",
                                        role: "Graphic Designer",
                                        location: "Rio de Janeiro, RJ",
                                        text: "I needed my PC flying to render 3D projects. The cleaning and optimization left the machine like new. Remote support was super safe and transparent.",
                                        initial: "A",
                                        color: "from-[#8B31FF] to-[#B96BFF]"
                                    },
                                    {
                                        name: "Pedro Santos",
                                        role: "Streamer",
                                        location: "Curitiba, PR",
                                        text: "No more blue screens or freezes during live streams. The stability I gained with premium optimization is insane. Highly recommend for every content creator.",
                                        initial: "P",
                                        color: "from-[#31A8FF] to-[#6BA8FF]"
                                    }
                                ].map((review, i) => (
                                    <div key={i} className="group relative bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-7 lg:p-8 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
                                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all"></div>
                                        <div className="absolute top-5 right-6 text-white/5 text-5xl font-serif leading-none select-none">"</div>
                                        <div className="flex items-center gap-1 mb-5 text-yellow-400">
                                            {[...Array(5)].map((_, s) => (
                                                <svg key={s} className="w-4 h-4 fill-current shrink-0" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                        <p className="text-slate-300 leading-relaxed mb-6 relative z-10 flex-1 text-sm sm:text-base">
                                            &ldquo;{review.text}&rdquo;
                                        </p>
                                        <div className="flex items-center gap-3 mt-auto">
                                            <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-base shadow-lg relative shrink-0`}>
                                                {review.initial}
                                                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-[#0A0A0F]">
                                                    <Check className="w-2.5 h-2.5 text-white" />
                                                </div>
                                            </div>
                                            <div className="min-w-0">
                                                <div className="flex flex-wrap items-center gap-1.5">
                                                    <span className="font-bold text-white text-sm leading-tight">{review.name}</span>
                                                    <span className="text-[10px] text-green-400 font-semibold border border-green-400/30 bg-green-400/10 rounded-full px-2 py-0.5 whitespace-nowrap">Verified Purchase</span>
                                                </div>
                                                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-0.5">{review.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </AnimatedSection>
            </main>
            <Footer />
        </>
    );
}
