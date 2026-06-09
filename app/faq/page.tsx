"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Shield, Zap, CreditCard, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface FAQItemProps {
    question: string;
    answer: string;
    icon?: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
    index: number;
}

const FAQItem = ({ question, answer, icon, isOpen, onClick, index }: FAQItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`group rounded-xl border transition-all duration-500 overflow-hidden relative ${isOpen
                ? 'bg-gradient-to-r from-[#1a1a2e] to-[#0F111A] border-[#31A8FF]/30 shadow-[0_0_40px_rgba(49,168,255,0.05)]'
                : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                }`}
        >
            {/* Active Glow Bar on Left */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#31A8FF] to-[#8B31FF] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

            <button
                onClick={onClick}
                className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none relative z-10"
            >
                <div className="flex items-center gap-6">
                    {icon && (
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg ${isOpen
                            ? 'bg-gradient-to-br from-[#31A8FF] to-[#8B31FF] text-white scale-110 shadow-[0_0_20px_rgba(49,168,255,0.3)]'
                            : 'bg-[#0A0A0F] border border-white/10 text-slate-400 group-hover:border-[#31A8FF]/30 group-hover:text-[#31A8FF]'
                            }`}>
                            <div className="w-5 h-5 sm:w-6 sm:h-6">
                                {icon}
                            </div>
                        </div>
                    )}
                    <span className={`text-lg sm:text-xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}>
                        {question}
                    </span>
                </div>

                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ml-4 shrink-0 ${isOpen
                    ? 'border-[#31A8FF] bg-[#31A8FF]/10 rotate-180'
                    : 'border-white/10 bg-transparent group-hover:border-white/30'
                    }`}>
                    <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-[#31A8FF]' : 'text-slate-500 group-hover:text-slate-300'
                        }`} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-8 pl-[88px] sm:pl-[104px] pr-6 sm:pr-12 text-slate-400 leading-8 text-[1.05rem] font-light relative z-10 border-t border-white/5 pt-6 mt-2 mx-6 sm:mx-8">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            icon: <Zap className="w-5 h-5" />,
            question: "How does the optimization service work?",
            answer: "Our service is performed remotely using secure software like AnyDesk. One of our engineers accesses your machine and performs more than 450 manual and systemic adjustments, focusing on the Windows kernel, background processes, network latency, and hardware prioritization. It's not just 'cleaning files'; it's a system re-engineering for maximum performance."
        },
        {
            icon: <Shield className="w-5 h-5" />,
            question: "Is it safe to allow remote access?",
            answer: "Absolutely. We use enterprise-level tools (AnyDesk/TeamViewer) with end-to-end encryption. You follow the entire process in real-time on your screen. Furthermore, before any changes, we create a System Restore Point (Snapshot), ensuring that everything can be reverted if necessary."
        },
        {
            icon: <Clock className="w-5 h-5" />,
            question: "How long does the service take?",
            answer: "The time varies depending on the chosen plan and the current state of the machine. A complete optimization generally takes between 1 to 2 hours. During this period, we recommend that you do not use the computer to ensure that all stability tests are accurate."
        },
        {
            icon: <Shield className="w-5 h-5" />,
            question: "is there a warranty if I don't like it?",
            answer: "Yes! We offer a 7-day satisfaction guarantee. If you don't feel a noticeable improvement in performance (FPS, latency, or general speed), we redo the service or refund your money. Our commitment is to results, not just promises."
        },
        {
            icon: <CreditCard className="w-5 h-5" />,
            question: "What are the payment methods?",
            answer: "We accept PayPal, Credit Cards (up to 12 installments), and international payment gateways. We use secure and world-leading payment gateways to ensure total encryption and security of your transaction."
        },
        {
            icon: <HelpCircle className="w-5 h-5" />,
            question: "Does the optimization affect my PC's warranty?",
            answer: "No. Our optimization is strictly at the software level (Windows, Drivers, BIOS). We do not perform aggressive physical Overclocking (dangerous voltage changes) or open your hardware. Therefore, your PC/Notebook manufacturer's warranty remains intact."
        }
    ];

    return (
        <>
            <Header />
            <main className="bg-[#050510] min-h-screen relative overflow-x-hidden font-sans selection:bg-[#31A8FF]/30">
                {/* Background Effects */}
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-50"></div>
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#31A8FF]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#8B31FF]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

                {/* Hero Section */}
                <section className="min-h-[100dvh] flex flex-col items-center justify-center relative z-10">
                    <div className="container mx-auto px-4 text-center flex-grow flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-sm font-bold tracking-[0.2em] text-[#31A8FF] mb-6 uppercase">
                                Help Center
                            </h2>
                            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
                                Frequently Asked <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">Questions</span>
                            </h1>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
                                Everything you need to know about our performance engineering methodology and premium support.
                            </p>
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

                {/* FAQ List */}
                <section className="pb-32 relative z-10">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <FAQItem
                                    key={idx}
                                    index={idx}
                                    {...faq}
                                    isOpen={openIndex === idx}
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="pb-32 relative z-10">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto rounded-[3rem] bg-gradient-to-r from-[#1a1a2e] to-[#0F111A] border border-white/5 p-8 md:p-12 text-center relative overflow-hidden group"
                        >
                            {/* Glow Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-[#31A8FF]/10 via-[#8B31FF]/10 to-[#FF4B6B]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-20 h-20 mx-auto bg-gradient-to-br from-[#31A8FF] to-[#8B31FF] rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10"
                            >
                                <MessageCircle className="w-10 h-10 text-white" />
                            </motion.div>

                            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Still have questions?</h2>
                            <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">
                                Our team of specialists is ready to analyze your specific case and recommend the best solution.
                            </p>

                            <Link href="/contact" className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:scale-105 duration-200">
                                Talk to a Specialist
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
