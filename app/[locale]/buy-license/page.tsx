"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, MessageSquare, CheckCircle2, Lock, Cpu, Server, ChevronDown, Rocket, Crown, Star } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';
import { toast } from 'react-hot-toast';
import { notifyPageView, notifyPurchaseAttempt } from '@/utils/notifications';

function BuyLicenseContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user, loading: authLoading } = useAuth();
    const [isProcessing, setIsProcessing] = useState<string | null>(null);
    const [billingCycle, setBillingCycle] = useState<'month' | 'year'>('month');

    const installationId = searchParams.get('installation_id');
    const planFromUrl = searchParams.get('plan');
    const [hasAttemptedAutoPurchase, setHasAttemptedAutoPurchase] = useState(false);

    useEffect(() => {
        if (!authLoading && user && planFromUrl && !hasAttemptedAutoPurchase && !isProcessing) {
            setHasAttemptedAutoPurchase(true);
            handlePurchase(planFromUrl, (searchParams.get('period') as 'month' | 'year') || 'month');
        }
    }, [authLoading, user, planFromUrl, hasAttemptedAutoPurchase, isProcessing]);

    // Notify access to license page
    useEffect(() => {
        notifyPageView("License Page (International)");
    }, []);

    const scrollToPurchase = () => {
        const purchaseSection = document.getElementById('purchase-section');
        if (purchaseSection) {
            purchaseSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlePurchase = async (planType: string, period: 'month' | 'year' = billingCycle) => {
        if (authLoading) return;

        if (!user) {
            toast.error("You must be logged in to continue.");
            const redirectPath = `/buy-license?plan=${planType}&period=${period}${installationId ? `&installation_id=${installationId}` : ''}`;
            router.push(`/login?redirect=${encodeURIComponent(redirectPath)}`);
            return;
        }

        setIsProcessing(planType);

        // Notify purchase attempt on Telegram
        notifyPurchaseAttempt(planType, period);

        try {
            toast.loading("Starting secure checkout with Stripe...");

            const response = await fetch('/api/stripe/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    license_type: planType,
                    billing_period: period,
                    user_id: user.id || null,
                    customer_email: user.email,
                    customer_name: user?.user_metadata?.full_name || 'Voltris User',
                }),
            });

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error(data.error || 'Error creating Stripe session');
            }
        } catch (error: any) {
            console.error('Stripe checkout error:', error);
            toast.error(`Checkout failed: ${error.message}`);
        } finally {
            setIsProcessing(null);
            toast.dismiss();
        }
    };

    const prices = {
        month: { standard: '9.90', pro: '69.90', enterprise: '299.90' },
        year: { standard: '79.90', pro: '149.90', enterprise: '1,099.90' }
    };

    return (
        <main className="min-h-screen bg-[#050510] text-slate-200 font-sans selection:bg-[#31A8FF]/30 relative pb-20">

            {/* Global Ambient Background Effects */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-50"></div>

            {/* Background Gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#31A8FF]/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-[#8B31FF]/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* HERO Section */}
            <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                    >
                        <Lock className="w-3 h-3 text-[#31A8FF]" />
                        <span className="text-[10px] sm:text-xs font-bold text-white/70 tracking-widest uppercase">Secure Payment & Immediate Activation</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-white drop-shadow-2xl">
                        DOMINATE YOUR PC WITH <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">
                            TOTAL POWER
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        Choose the ideal plan for your gameplay or productivity. Automatic activation and specialized support within 24h.
                    </p>

                    <motion.button
                        onClick={scrollToPurchase}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-lg rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        VIEW PLANS
                        <ChevronDown className="w-5 h-5 animate-bounce" />
                    </motion.button>
                </motion.div>
            </section>

            {/* PLANS SECTION */}
            <section id="purchase-section" className="relative z-10 py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    
                    {/* Billing Cycle Toggle */}
                    <div className="flex flex-col items-center mb-16">
                        <div className="bg-white/5 border border-white/10 p-1.5 rounded-2xl flex items-center gap-1 backdrop-blur-xl relative">
                            <button
                                onClick={() => setBillingCycle('month')}
                                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative z-10 ${billingCycle === 'month' ? 'text-black' : 'text-slate-400 hover:text-white'}`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle('year')}
                                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative z-10 ${billingCycle === 'year' ? 'text-black' : 'text-slate-400 hover:text-white'}`}
                            >
                                Yearly
                            </button>
                            
                            <motion.div
                                animate={{ x: billingCycle === 'month' ? 0 : '100.5%' }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="absolute top-1.5 left-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl z-0 shadow-lg"
                            />
                        </div>
                        {billingCycle === 'year' && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-black tracking-widest text-emerald-400 uppercase"
                            >
                                Save up to 40% on yearly plans
                            </motion.div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

                        {/* Standard Plan */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0A0A0E]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:border-[#31A8FF]/30 transition-all duration-500 group"
                        >
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-[#31A8FF]/10 flex items-center justify-center mb-6 border border-[#31A8FF]/20 text-[#31A8FF]">
                                    <Star className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Standard</h3>
                                <p className="text-slate-500 text-sm mb-6">Essential for a single PC.</p>

                                <div className="mb-8 overflow-hidden h-14">
                                    <motion.div
                                        key={billingCycle}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="flex items-baseline gap-1"
                                    >
                                        <span className="text-4xl font-black text-white">$ {prices[billingCycle].standard}</span>
                                        <span className="text-slate-500 text-lg font-medium">/{billingCycle === 'month' ? 'mo' : 'yr'}</span>
                                    </motion.div>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>1 Device</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>Included</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>All Features Unlocked</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>Maximum Optimizations</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>Premium Support</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>Constant Updates</span>
                                    </li>
                                </ul>
                            </div>

                            <button
                                onClick={() => handlePurchase('standard')}
                                disabled={isProcessing !== null}
                                className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
                            >
                                {isProcessing === 'standard' ? 'Processing...' : 'Subscribe Now'}
                            </button>
                        </motion.div>

                        {/* PRO Plan (Best Value) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0A0A0E]/80 backdrop-blur-2xl border-2 border-[#8B31FF] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between relative shadow-[0_0_50px_rgba(139,49,255,0.2)] transform scale-105 z-20 group"
                        >
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-1 bg-gradient-to-r from-[#8B31FF] to-[#31A8FF] rounded-full text-[10px] font-black tracking-widest text-white uppercase shadow-lg">
                                BEST SELLER
                            </div>

                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-[#8B31FF]/10 flex items-center justify-center mb-6 border border-[#8B31FF]/20 text-[#8B31FF]">
                                    <Rocket className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Pro Gamer</h3>
                                <p className="text-slate-400 text-sm mb-6 font-medium">The choice for enthusiasts.</p>

                                <div className="mb-8 overflow-hidden h-14">
                                    <motion.div
                                        key={billingCycle}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="flex items-baseline gap-1"
                                    >
                                        <span className="text-5xl font-black text-white">$ {prices[billingCycle].pro}</span>
                                        <span className="text-[#8B31FF] text-xl font-black">/{billingCycle === 'month' ? 'mo' : 'yr'}</span>
                                    </motion.div>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3 text-sm text-white font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>3 Devices</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-white font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>Deep Cleaning</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-white font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>Included</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-white font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>All Features Unlocked</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-white font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>Maximum Optimizations</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-white font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>Premium Support</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-white font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>Constant Updates</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-white font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>Smart AI</span>
                                    </li>
                                </ul>
                            </div>

                            <button
                                onClick={() => handlePurchase('pro')}
                                disabled={isProcessing !== null}
                                className="w-full py-5 bg-gradient-to-r from-[#8B31FF] to-[#31A8FF] text-white font-black text-xl rounded-2xl hover:brightness-125 hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_30px_rgba(139,49,255,0.4)] disabled:opacity-50"
                            >
                                {isProcessing === 'pro' ? 'Processing...' : 'Get Pro Gamer'}
                            </button>
                        </motion.div>

                        {/* Enterprise Plan */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0A0A0E]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:border-[#FF4B6B]/30 transition-all duration-500 group"
                        >
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-[#FF4B6B]/10 flex items-center justify-center mb-6 border border-[#FF4B6B]/20 text-[#FF4B6B]">
                                    <Crown className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Enterprise</h3>
                                <p className="text-slate-500 text-sm mb-6">For companies.</p>

                                <div className="mb-8 overflow-hidden h-14">
                                    <motion.div
                                        key={billingCycle}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="flex items-baseline gap-1"
                                    >
                                        <span className="text-4xl font-black text-white">$ {prices[billingCycle].enterprise}</span>
                                        <span className="text-[#FF4B6B] text-lg font-bold">/{billingCycle === 'month' ? 'mo' : 'yr'}</span>
                                    </motion.div>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3 text-sm text-slate-300 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4B6B] to-[#FFD700]">
                                        <CheckCircle2 className="w-5 h-5 text-[#FF4B6B] shrink-0" />
                                        <span>Unlimited Devices</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>Integration API</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>Included</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>All Features Unlocked</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>Maximum Optimizations</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>Premium Support</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>Constant Updates</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>Smart AI</span>
                                    </li>
                                </ul>
                            </div>

                            <button
                                onClick={() => handlePurchase('enterprise')}
                                disabled={isProcessing !== null}
                                className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:border-[#FF4B6B] hover:text-[#FF4B6B] transition-all duration-300 disabled:opacity-50"
                            >
                                {isProcessing === 'enterprise' ? 'Processing...' : `Get Enterprise ${billingCycle === 'month' ? 'Monthly' : 'Yearly'}`}
                            </button>
                        </motion.div>

                    </div>

                    {/* 7-Day Money-Back Guarantee */}
                    <div className="mt-20 mb-16">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-left bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 border border-emerald-500/20 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl">
                            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-white rounded-full shadow-inner border border-emerald-100 flex items-center justify-center">
                                <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-emerald-500" />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic">
                                    Zero Risk. <span className="text-emerald-400">Satisfaction or Your Money Back.</span>
                                </h2>
                                <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                                    We are so confident in the power of <strong className="text-white">Voltris Optimizer</strong> that we offer an unconditional 7-day guarantee. If you don't notice an FPS increase or your PC continues to be slow, just request a refund. <strong className="text-white">No questions, no bureaucracy.</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, label: '7-day guarantee', color: '#10b981' },
                            { icon: Lock, label: 'Secure Checkout', color: '#3b82f6' },
                            { icon: MessageSquare, label: 'Humanized Support', color: '#8b5cf6' },
                            { icon: Zap, label: 'Instant Activation', color: '#f59e0b' }
                        ].map((badge, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-3">
                                <badge.icon style={{ color: badge.color }} className="w-6 h-6 opacity-60" />
                                <span className="text-[10px] uppercase tracking-widest font-black text-slate-500">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default function BuyLicensePage() {
    return (
        <>
            <Header />
            <Suspense fallback={<div className="min-h-screen bg-[#050510]" />}>
                <BuyLicenseContent />
            </Suspense>
            <Footer />
        </>
    );
}
