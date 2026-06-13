"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Cpu, ShieldCheck, Zap, Database, Network,
    Terminal, Lock, FileCode2, Search, ArrowLeft
} from 'lucide-react';

export default function DocumentacaoClient() {
    return (
        <>
            <Header />
            <main className="bg-[#050510] min-h-screen relative font-sans selection:bg-[#31A8FF]/30 overflow-hidden text-slate-300">

                {/* Global Ambient Background Effects */}
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-50"></div>

                {/* Deep Space Gradients - Adjusted for readability */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#31A8FF]/5 blur-[120px] rounded-full mix-blend-screen"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-[#8B31FF]/5 blur-[120px] rounded-full mix-blend-screen"></div>
                </div>

                {/* --- HERO SECTION --- */}
                <section className="pt-32 pb-20 relative z-10">
                    <div className="container mx-auto px-4">
                        <Link href="/voltrisoptimizer" className="inline-flex items-center gap-2 text-sm text-[#31A8FF] hover:text-white transition-colors mb-8 group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Voltris Optimizer
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
                                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] to-[#8B31FF]">Documentation</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl border-l-4 border-[#31A8FF] pl-6">
                                An in-depth look at the engineering, architecture, and security protocols that power the Voltris Optimizer.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* --- PIPELINE VISUALIZATION --- */}
                <section className="py-12 border-y border-white/5 bg-[#08080C] relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center md:text-left">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white mb-2">Optimization Workflow</h3>
                                <p className="text-sm text-slate-500">Software execution pipeline on the user's system.</p>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-4 text-xs font-mono font-medium text-slate-400">
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2">
                                    <Search className="w-4 h-4 text-[#31A8FF]" />
                                    Hardware Analysis
                                </div>
                                <div className="h-8 w-[1px] bg-white/10 md:h-[1px] md:w-8"></div>
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-[#FF4B6B]" />
                                    Backup / Restore
                                </div>
                                <div className="h-8 w-[1px] bg-white/10 md:h-[1px] md:w-8"></div>
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2">
                                    <Terminal className="w-4 h-4 text-[#8B31FF]" />
                                    Script Execution
                                </div>
                                <div className="h-8 w-[1px] bg-white/10 md:h-[1px] md:w-8"></div>
                                <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-2 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                    <Zap className="w-4 h-4" />
                                    Validation
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CORE MODULES --- */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl font-bold text-white mb-16 tracking-tight flex items-center gap-3">
                            <FileCode2 className="w-8 h-8 text-[#31A8FF]" />
                            Engineering Modules
                        </h2>

                        <div className="space-y-24">

                            {/* MODULE 1: CPU & PROCESSES */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                <div className="order-2 lg:order-1">
                                    <div className="p-8 rounded-3xl bg-[#0A0A0E] border border-white/5 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-30">
                                            <Cpu className="w-24 h-24 text-[#31A8FF]" />
                                        </div>
                                        <h3 className="text-xl font-mono text-[#31A8FF] mb-4">01. CPU_OPTIMIZER</h3>
                                        <ul className="space-y-4">
                                            <li className="flex gap-4">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#31A8FF] mt-2 shrink-0"></span>
                                                <div>
                                                    <strong className="text-white block mb-1">Affinity Management</strong>
                                                    <p className="text-sm leading-relaxed">The software analyzes the processor's CCX (Core Complex) (especially on Ryzen) and adjusts thread affinity to ensure that games and heavy applications run on the most performant cores, avoiding inter-core latency.</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-4">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#31A8FF] mt-2 shrink-0"></span>
                                                <div>
                                                    <strong className="text-white block mb-1">Process Priority Class</strong>
                                                    <p className="text-sm leading-relaxed">Dynamic adjustment of Windows priority class (High/Realtime) for the focused executable, preventing background processes (like Windows Update) from stealing CPU cycles.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2 lg:pt-8">
                                    <h3 className="text-2xl font-bold text-white mb-4">Processing & Threads</h3>
                                    <p className="text-lg text-slate-400 mb-6">
                                        The default Windows scheduler is generalist. Voltris specializes scheduling to focus on ultra-low latency.
                                    </p>
                                    <div className="bg-[#111116] p-4 rounded-lg border border-white/5 font-mono text-xs text-slate-400 overflow-x-auto">
                                        <p className="text-emerald-400 mb-2"># Example of pseudocode logic:</p>
                                        <p>if (Process.Category == "Game") {'{'}</p>
                                        <p className="pl-4">Process.Priority = "High";</p>
                                        <p className="pl-4">PowerPlan.Set("UltimatePerformance");</p>
                                        <p className="pl-4">DisableSleepStates(C-States);</p>
                                        <p>{'}'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* MODULE 2: NETWORK */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                <div className="lg:pt-8">
                                    <h3 className="text-2xl font-bold text-white mb-4">Network Stack (TCP/IP)</h3>
                                    <p className="text-lg text-slate-400 mb-6">
                                        We reduce bufferbloat and improve the delivery of small packets (common in games and VoIP calls).
                                    </p>
                                    <div className="flex gap-3 flex-wrap">
                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">CTCP (Congestion Provider)</span>
                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">Disable Nagle's Algorithm</span>
                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">MTU Discovery</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-8 rounded-3xl bg-[#0A0A0E] border border-white/5 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-30">
                                            <Network className="w-24 h-24 text-[#8B31FF]" />
                                        </div>
                                        <h3 className="text-xl font-mono text-[#8B31FF] mb-4">02. NET_STACK</h3>
                                        <ul className="space-y-4">
                                            <li className="flex gap-4">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#8B31FF] mt-2 shrink-0"></span>
                                                <div>
                                                    <strong className="text-white block mb-1">Throttling Disabling</strong>
                                                    <p className="text-sm leading-relaxed">We remove power-saving restrictions from the network card, preventing the adapter from entering sleep mode during micro-pauses in traffic.</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-4">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#8B31FF] mt-2 shrink-0"></span>
                                                <div>
                                                    <strong className="text-white block mb-1">DNS Optimization</strong>
                                                    <p className="text-sm leading-relaxed">Cleaning and adjustment of the DNS Resolver cache to avoid resolution failures and speed up connection initiation.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* MODULE 3: DEBLOAT & SERVICES */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                <div className="order-2 lg:order-1">
                                    <div className="p-8 rounded-3xl bg-[#0A0A0E] border border-white/5 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-30">
                                            <Database className="w-24 h-24 text-[#FF4B6B]" />
                                        </div>
                                        <h3 className="text-xl font-mono text-[#FF4B6B] mb-4">03. SYS_DEBLOAT</h3>
                                        <ul className="space-y-4">
                                            <li className="flex gap-4">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B6B] mt-2 shrink-0"></span>
                                                <div>
                                                    <strong className="text-white block mb-1">Telemetry & Tracking</strong>
                                                    <p className="text-sm leading-relaxed">Blocking through Hosts and Firewall of known Microsoft and third-party telemetry domains, reducing bandwidth and CPU usage in the background.</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-4">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B6B] mt-2 shrink-0"></span>
                                                <div>
                                                    <strong className="text-white block mb-1">"Useless" Services</strong>
                                                    <p className="text-sm leading-relaxed">Safe disabling of services such as Fax, Telephony, Retail Demo, Xbox (optional), freeing up RAM memory.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2 lg:pt-8">
                                    <h3 className="text-2xl font-bold text-white mb-4">Deep System Cleanup</h3>
                                    <p className="text-lg text-slate-400 mb-6">
                                        Modern Windows comes with hundreds of unnecessary processes for a professional or gamer user.
                                    </p>
                                    <div className="bg-[#111116] p-4 rounded-lg border border-white/5 font-mono text-xs text-slate-400">
                                        <p className="text-slate-500">// Example of disabled services</p>
                                        <p>DiagTrack (Connected User Experiences and Telemetry)</p>
                                        <p>dmwappushservice (WAP Push Message Routing Service)</p>
                                        <p>WSearch (Windows Search) *Optional</p>
                                        <p>SysMain (Superfetch) *Depending on SSD type</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SAFETY SECTION --- */}
                <section className="py-24 bg-gradient-to-b from-[#08080C] to-[#050510] relative z-10 border-t border-white/5">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <div className="inline-flex items-center justify-center p-4 bg-emerald-500/10 rounded-full mb-8">
                            <ShieldCheck className="w-8 h-8 text-emerald-500" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Safety First</h2>
                        <p className="text-slate-400 text-lg mb-12">
                            We understand that modifying the operating system requires responsibility. That's why Voltris operates with a strict "Non-Destructive Tweaking" policy.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div className="p-6 bg-[#0A0A0E] rounded-xl border border-white/5">
                                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    Restore Point
                                </h4>
                                <p className="text-sm text-slate-500">Before applying any changes, the software forces the creation of a Windows Restore Point. If anything goes wrong, you can travel back in time with 1 click.</p>
                            </div>
                            <div className="p-6 bg-[#0A0A0E] rounded-xl border border-white/5">
                                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                                    Code Transparency
                                </h4>
                                <p className="text-sm text-slate-500">We use auditable scripts based on established open-source community tools, ensuring there are no "black boxes" in the process.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 relative z-10">
                    <div className="container mx-auto px-4 text-center">
                        <Link
                            href="/voltrisoptimizer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Product Page
                        </Link>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
