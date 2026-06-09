"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
    BoltIcon,
    ClockIcon,
    ShieldCheckIcon,
    CloudArrowUpIcon,
    CheckCircleIcon,
    StarIcon,
    ComputerDesktopIcon,
    UsersIcon
} from '@heroicons/react/24/outline';
import { createClient } from '@/utils/supabase/client';
import TechFloatingElements from '@/components/TechFloatingElements';

const formatacaoPlans = [
    {
        id: "formatacao-basica",
        title: "Basic",
        description: "Backup, formatting, driver installation, and updates.",
        icon: <ComputerDesktopIcon className="w-8 h-8" />,
        price: "US$49.90",
        features: [],
        plan_type: "Basic"
    },
    {
        id: "formatacao-media",
        title: "Standard",
        description: "Includes \"Basic\" + antivirus and basic system optimization.",
        icon: <BoltIcon className="w-8 h-8" />,
        price: "US$79.90",
        features: [],
        plan_type: "Standard"
    },
    {
        id: "formatacao-avancada",
        title: "Advanced",
        description: "Includes \"Standard\" + advanced performance optimization.",
        icon: <StarIcon className="w-8 h-8" />,
        price: "US$129.90",
        features: [],
        plan_type: "Advanced"
    },
    {
        id: "formatacao-corporativa",
        title: "Corporate",
        description: "Includes \"Advanced\" + Office Suite (permanent*) and enterprise optimization.",
        icon: <UsersIcon className="w-8 h-8" />,
        price: "US$199.90",
        features: [],
        plan_type: "Corporate"
    },
    {
        id: "formatacao-gamer",
        title: "Gamer",
        description: "Includes \"Advanced\" + Office Suite (optional) and extreme optimization for games (FPS, input lag, etc.).",
        icon: <BoltIcon className="w-8 h-8" />,
        price: "US$249.90",
        features: [],
        plan_type: "Gamer"
    }
];

export default function FormatacaoClient() {
    const router = useRouter();
    const supabase = createClient();
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const benefits = [
        {
            title: '24/7 Remote Support',
            description: 'Specialized technical assistance at any time',
            icon: <ClockIcon className="w-12 h-12 text-[#FF4B6B]" />
        },
        {
            title: 'Guaranteed Security',
            description: 'Full protection for your data and systems',
            icon: <ShieldCheckIcon className="w-12 h-12 text-[#8B31FF]" />
        },
        {
            title: 'Maximum Performance',
            description: 'Complete optimization of your system',
            icon: <BoltIcon className="w-12 h-12 text-[#31A8FF]" />
        },
        {
            title: 'Automatic Backup',
            description: 'Your data always protected',
            icon: <CloudArrowUpIcon className="w-12 h-12 text-[#FF4B6B]" />
        }
    ];

    const faqs = [
        {
            question: 'How does remote formatting work?',
            answer: 'We use secure remote access tools to format your computer without the need for travel, ensuring total security of your data.'
        },
        {
            question: 'Will my data be lost during formatting?',
            answer: 'No! We perform a full backup of all your important data before formatting, ensuring that nothing is lost.'
        },
        {
            question: 'What is the average time for formatting?',
            answer: 'The time varies depending on the chosen plan, but usually between 2 to 4 hours for complete formatting with program installation.'
        },
        {
            question: 'Does formatting solve virus problems?',
            answer: 'Yes! Formatting completely removes all viruses and malware, leaving your computer 100% clean and secure.'
        }
    ];

    const handleContratarAgora = async (plan: any) => {
        const { data: { session } } = await supabase.auth.getSession();
        const orderData = {
            service_name: plan.title,
            service_description: plan.description,
            final_price: plan.price,
            plan_type: plan.plan_type,
        };
        if (!session) {
            sessionStorage.setItem('pendingOrderData', JSON.stringify(orderData));
            window.location.href = `/login?redirect=/dashboard&pendingOrder=true`;
            return;
        }
        // Create order via API
        await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData),
        });
        window.location.href = '/dashboard';
    };

    return (
        <>
            <Header />
            <main className="bg-[#050510] min-h-screen relative overflow-x-hidden font-sans selection:bg-[#31A8FF]/30">

                {/* Background Effects (Global) */}
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-0"></div>
                <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[#31A8FF]/5 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow max-w-full pointer-events-none z-0"></div>
                <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-[#8B31FF]/5 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow max-w-full pointer-events-none z-0"></div>

                {/* Hero Section */}
                <section className="min-h-[100dvh] flex flex-col items-center justify-center relative z-10 w-full">
                    <TechFloatingElements />

                    <div className="container mx-auto px-4 text-center flex-grow flex flex-col items-center justify-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full max-w-5xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:border-[#31A8FF]/30 transition-all cursor-default">
                                <span className="flex h-2 w-2 rounded-full bg-[#00FF94] shadow-[0_0_8px_#00FF94] animate-pulse"></span>
                                <span className="text-xs sm:text-sm font-medium text-white tracking-wide">Premium Service</span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                                Professional <span className="bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text animate-gradient-x">Formatting</span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                                Restore your computer\'s original performance with our secure and <strong>100% remote</strong> formatting. Full backup included.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                                >
                                    <ComputerDesktopIcon className="w-5 h-5" /> View Plans
                                </button>
                                <a
                                    href="/contact"
                                    className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                >
                                    <UsersIcon className="w-5 h-5" /> Speak with Tech
                                </a>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-slate-500 hover:text-white transition-colors"
                        onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-[#31A8FF] to-transparent"></div>
                    </motion.div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 px-4 bg-[#0A0A0F] relative z-10 w-full border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={benefit.title}
                                    className="bg-[#121218] p-8 rounded-3xl border border-white/5 hover:border-[#31A8FF]/30 transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#31A8FF]/10 rounded-full blur-[60px] -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>
                                    <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Plans Section */}
                <section id="planos" className="py-24 px-4 relative z-10 w-full">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose your Plan</h2>
                            <p className="text-slate-400">Flexible solutions for all needs.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {formatacaoPlans.map((plan) => (
                                <motion.div
                                    key={plan.id}
                                    whileHover={{ y: -8 }}
                                    className="group relative bg-[#121218] backdrop-blur-sm p-1 rounded-3xl border border-white/5 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#31A8FF]/10"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br from-[#31A8FF] to-[#8B31FF] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                                    <div className="relative h-full bg-[#121218] rounded-[22px] p-8 flex flex-col">

                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            {plan.icon}
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                                        <div className="text-2xl font-bold text-[#31A8FF] mb-6">{plan.price}</div>

                                        <p className="text-slate-400 text-sm mb-8 flex-grow">
                                            {plan.description}
                                        </p>

                                        <button
                                            onClick={() => {
                                              const message = 'Hello, I would like to hire the Windows formatting service';
                                              window.open(`https://wa.me/5511996716235?text=${encodeURIComponent(message)}`, '_blank');
                                            }}
                                            className="w-full py-3 rounded-xl bg-white/5 hover:bg-white text-white hover:text-black font-semibold transition-all border border-white/10 hover:border-white"
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Detailed Info (Using modern grid) */}
                <section className="py-24 px-4 bg-[#0A0A0F] border-t border-white/5 relative z-10 w-full">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[#121218] p-8 rounded-3xl border border-white/5 hover:border-[#8B31FF]/30 transition-all">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <CloudArrowUpIcon className="w-6 h-6 text-[#8B31FF]" />
                                    Full Backup
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Security first. Before any procedure, we perform a backup of your files to an encrypted cloud or secure local disk.
                                </p>
                            </div>
                            <div className="bg-[#121218] p-8 rounded-3xl border border-white/5 hover:border-[#31A8FF]/30 transition-all">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <BoltIcon className="w-6 h-6 text-[#31A8FF]" />
                                    Drivers & Optimization
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Installation of the latest drivers and fine-tuning of Windows to extract maximum performance from your hardware.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 px-4 max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-[#121218] border border-white/5 hover:border-white/10 transition-all"
                            >
                                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                                <p className="text-slate-400 text-sm">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-4 border-t border-white/5 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Your PC Like New Today</h2>
                        <button
                            onClick={() => {
                              const message = `Hello, I would like to hire the ${encodeURIComponent(formatacaoPlans[0].title)} Windows formatting plan`;
                              window.open(`https://wa.me/5511996716235?text=${message}`, '_blank');
                            }}
                            className="px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                        >
                            Schedule Formatting
                        </button>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
