'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ShieldCheckIcon,
    LockClosedIcon,
    CpuChipIcon,
    ArrowRightIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function PcFormattingClient() {
    const processSteps = [
        {
            step: '01',
            title: 'Secure Backup',
            desc: 'Security copy of all your important files to secure temporary storage.',
            color: '#31A8FF'
        },
        {
            step: '02',
            title: 'Complete Formatting',
            desc: 'Total hard drive cleanup with exclusion of all content to ensure a clean base.',
            color: '#8B31FF'
        },
        {
            step: '03',
            title: 'Clean Windows Installation',
            desc: 'Clean and original installation of the operating system with the latest security updates.',
            color: '#FF4B6B'
        },
        {
            step: '04',
            title: 'Driver Installation',
            desc: 'Configuration of the latest and most compatible drivers for your specific hardware.',
            color: '#31A8FF'
        },
        {
            step: '05',
            title: 'Essential Software',
            desc: 'Installation of basic and essential software for daily use, work, and entertainment.',
            color: '#8B31FF'
        },
        {
            step: '06',
            title: 'Data Restoration',
            desc: 'Secure return of all your personal files to the reformulated computer.',
            color: '#FF4B6B'
        },
    ];

    const benefits = [
        'Elimination of viruses and malware',
        'Maximum system speed',
        'Total Windows stability',
        'Clean and optimized system',
        'No unnecessary files',
        'Eliminated crashes',
    ];

    const securityCards = [
        {
            title: 'Secure Backup',
            desc: 'Security copy of all your important files in a safe location before formatting.',
            icon: <ShieldCheckIcon className="w-6 h-6" />,
            color: '#31A8FF'
        },
        {
            title: 'Encryption',
            desc: 'Protection of temporarily stored data with end-to-end advanced encryption.',
            icon: <LockClosedIcon className="w-6 h-6" />,
            color: '#8B31FF'
        },
        {
            title: 'Verification',
            desc: 'Complete verification of data before and after restoration to ensure total integrity.',
            icon: <CpuChipIcon className="w-6 h-6" />,
            color: '#FF4B6B'
        },
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#050510] font-sans selection:bg-[#31A8FF]/30 relative">

                {/* Background Effects */}
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-0" />
                <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#31A8FF]/10 blur-[150px] rounded-full pointer-events-none z-0" />
                <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-[#8B31FF]/10 blur-[150px] rounded-full pointer-events-none z-0" />

                {/* Hero Section */}
                <section className="min-h-[100dvh] flex flex-col items-center justify-center relative z-10 px-4 text-center">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31A8FF]/10 border border-[#31A8FF]/20 backdrop-blur-md mb-8"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-[#31A8FF] shadow-[0_0_8px_#31A8FF] animate-pulse" />
                            <span className="text-xs font-bold text-[#31A8FF] tracking-widest uppercase">Professional Remote Formatting</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tight leading-tight"
                        >
                            PC Formatting{' '}
                            <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">
                                Remote with Secure Backup
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-light"
                        >
                            Professional remote formatting service with secure backup, clean Windows installation,
                            and essential software. Revitalize your computer without leaving home.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="/services"
                                className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-slate-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
                            >
                                Request Formatting
                                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <a
                                href="https://wa.me/5511996716235?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20PC%20formatting"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                Talk to Specialist
                            </a>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
                        >
                            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                            <div className="w-[1px] h-12 bg-gradient-to-b from-[#31A8FF] to-transparent" />
                        </motion.div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-24 px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-[#31A8FF] mb-4 uppercase">Methodology</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Formatting Process</h3>
                            <p className="text-slate-400 max-w-2xl mx-auto">Complete and secure procedure to revitalize your computer</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-8 rounded-3xl bg-[#0A0A0F]/50 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div
                                        className="text-4xl font-black mb-4 font-mono"
                                        style={{ color: step.color, opacity: 0.4 }}
                                    >
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits + Security */}
                <section className="py-24 px-4 relative z-10 bg-[#0A0A0F]/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                            {/* Benefits */}
                            <div>
                                <h2 className="text-sm font-bold tracking-[0.2em] text-[#8B31FF] mb-4 uppercase">Results</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Benefits of Formatting</h3>
                                <div className="space-y-4">
                                    {benefits.map((benefit, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08 }}
                                            className="flex items-center gap-4 p-4 bg-[#0A0A0F]/50 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
                                        >
                                            <CheckCircleIcon className="w-5 h-5 text-[#00FF94] shrink-0" />
                                            <span className="text-slate-300 font-medium">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Security */}
                            <div>
                                <h2 className="text-sm font-bold tracking-[0.2em] text-[#FF4B6B] mb-4 uppercase">Security</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Security First</h3>
                                <div className="space-y-6">
                                    {securityCards.map((card, i) => (
                                        <motion.div
                                            key={card.title}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex gap-5 p-6 bg-[#0A0A0F]/50 rounded-2xl border border-white/5 hover:border-white/10 transition-all"
                                        >
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: `${card.color}15`, color: card.color }}
                                            >
                                                {card.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-2">{card.title}</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[3rem] overflow-hidden p-12 text-center bg-gradient-to-b from-[#1a1a2e] to-[#0A0A0F] border border-white/10"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Revitalize Your{' '}
                                    <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">
                                        Computer
                                    </span>
                                </h2>
                                <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                                    Professional formatting with secure backup and guaranteed data restoration. Remote assistance worldwide.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/services"
                                        className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all hover:scale-105"
                                    >
                                        Order Professional Formatting
                                    </Link>
                                    <a
                                        href="https://wa.me/5511996716235?text=Hello!%20I%20would%20like%20to%20request%20PC%20formatting"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-10 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-all hover:scale-105"
                                    >
                                        Talk on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
} 
