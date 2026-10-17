"use client";

import React, { useState, useEffect, Suspense, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Zap, MessageSquare, CheckCircle2, Lock, ChevronDown,
    Rocket, Crown, Star, HelpCircle, Sparkles, SlidersHorizontal, Radio,
    Wrench, ArrowRight,
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';
import { toast } from 'react-hot-toast';
import { notifyPageView, notifyPurchaseAttempt } from '@/utils/notifications';
import { useTranslation } from '@/contexts/I18nContext';
import { localeConfig, type Locale } from '@/lib/i18n';
import {
    currencyForLocale,
    resolveLicenseProduct,
    type PlanType,
    type BillingPeriod,
} from '@/lib/license-catalog';

/** Converte o locale do site em uma tag BCP47 valida para Intl (pt-br -> pt-BR, en -> en-US). */
function intlTagFor(locale: string): string {
    const cfg = (localeConfig as Record<string, { region: string }>)[locale];
    if (!cfg) return locale;
    if (locale === 'pt-br') return 'pt-BR';
    if (locale === 'zh-cn') return 'zh-CN';
    return `${locale}-${cfg.region}`;
}

function BuyLicenseContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user, loading: authLoading } = useAuth();
    const { t, locale } = useTranslation('buy_license');
    const [isProcessing, setIsProcessing] = useState<string | null>(null);
    const [billingCycle, setBillingCycle] = useState<BillingPeriod>('month');

    const installationId = searchParams.get('installation_id');
    const planFromUrl = searchParams.get('plan');
    const [hasAttemptedAutoPurchase, setHasAttemptedAutoPurchase] = useState(false);

    useEffect(() => {
        if (!authLoading && user && planFromUrl && !hasAttemptedAutoPurchase && !isProcessing) {
            setHasAttemptedAutoPurchase(true);
            handlePurchase(planFromUrl, (searchParams.get('period') as BillingPeriod) || 'month');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authLoading, user, planFromUrl, hasAttemptedAutoPurchase, isProcessing]);

    // Notificar acesso à página de licenças
    useEffect(() => {
        notifyPageView("License Page (International)");
    }, []);

    const scrollToPurchase = () => {
        const purchaseSection = document.getElementById('purchase-section');
        if (purchaseSection) {
            purchaseSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlePurchase = async (planType: string, period: BillingPeriod = billingCycle) => {
        if (authLoading) return;

        if (!user) {
            toast.error(t('msg_login_required'));
            const redirectPath = `/buy-license?plan=${planType}&period=${period}${installationId ? `&installation_id=${installationId}` : ''}`;
            router.push(`/login?redirect=${encodeURIComponent(redirectPath)}`);
            return;
        }

        setIsProcessing(planType);

        // Notify purchase attempt on Telegram
        notifyPurchaseAttempt(planType, period);

        try {
            toast.loading(t('msg_starting'));

            const response = await fetch('/api/stripe/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    license_type: planType,
                    billing_period: period,
                    locale,
                    user_id: user.id || null,
                    customer_email: user.email,
                    customer_name: user?.user_metadata?.full_name || 'Voltris User',
                }),
            });

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error(data.error || t('msg_session_error'));
            }
        } catch (error: any) {
            console.error('Stripe checkout error:', error);
            toast.error(`${t('msg_checkout_failed')}: ${error.message}`);
        } finally {
            setIsProcessing(null);
            toast.dismiss();
        }
    };

    // ─────────────────────────────────────────────────────────────
    // Preço resolvido no SERVIDOR pelo catálogo multi-moeda. A UI apenas
    // EXIBE o mesmo valor (moeda deriva do idioma atual via locale->currency),
    // formatado com Intl.NumberFormat. O navegador nunca decide o valor final:
    // o checkout re-resolve tudo no backend.
    // ─────────────────────────────────────────────────────────────
    const currency = currencyForLocale(locale);
    const tag = intlTagFor(locale);
    const priceFmt = useMemo(() => new Intl.NumberFormat(tag, {
        style: 'currency',
        currency: currency.toUpperCase(),
    }), [tag, currency]);

    const priceFor = (plan: PlanType, period: BillingPeriod): string => {
        const product = resolveLicenseProduct(plan, period, currency);
        return product ? priceFmt.format(product.amount) : '';
    };

    const periodLabel = billingCycle === 'month' ? t('per_month') : t('per_year');

    // ─────────────────────────────────────────────────────────────
    // O QUE A LICENÇA DESBLOQUEIA (6 módulos idênticos ao BR)
    // ─────────────────────────────────────────────────────────────
    const UNLOCKED_MODULES = [
        {
            icon: ShieldCheck, accent: '#FF4B6B',
            title: t('mod1_title'), tagline: t('mod1_tag'),
            features: [t('mod1_f1'), t('mod1_f2'), t('mod1_f3'), t('mod1_f4')],
        },
        {
            icon: Wrench, accent: '#31A8FF',
            title: t('mod2_title'), tagline: t('mod2_tag'),
            features: [t('mod2_f1'), t('mod2_f2'), t('mod2_f3'), t('mod2_f4')],
        },
        {
            icon: Zap, accent: '#8B31FF',
            title: t('mod3_title'), tagline: t('mod3_tag'),
            features: [t('mod3_f1'), t('mod3_f2'), t('mod3_f3'), t('mod3_f4')],
        },
        {
            icon: SlidersHorizontal, accent: '#31A8FF',
            title: t('mod4_title'), tagline: t('mod4_tag'),
            features: [t('mod4_f1'), t('mod4_f2'), t('mod4_f3'), t('mod4_f4')],
        },
        {
            icon: Rocket, accent: '#8B31FF',
            title: t('mod5_title'), tagline: t('mod5_tag'),
            features: [t('mod5_f1'), t('mod5_f2'), t('mod5_f3'), t('mod5_f4')],
        },
        {
            icon: Radio, accent: '#FF4B6B',
            title: t('mod6_title'), tagline: t('mod6_tag'),
            features: [t('mod6_f1'), t('mod6_f2'), t('mod6_f3'), t('mod6_f4')],
        },
    ];

    const FREE_INCLUDED = [
        t('free_list1'), t('free_list2'), t('free_list3'),
        t('free_list4'), t('free_list5'), t('free_list6'),
    ];

    const FAQ = [
        { q: t('faq_q1'), a: t('faq_a1') },
        { q: t('faq_q2'), a: t('faq_a2') },
        { q: t('faq_q3'), a: t('faq_a3') },
        { q: t('faq_q4'), a: t('faq_a4') },
    ];

    const TRUST = [
        { icon: ShieldCheck, label: t('trust_guarantee'), color: '#10b981' },
        { icon: Lock, label: t('trust_secure'), color: '#3b82f6' },
        { icon: MessageSquare, label: t('trust_support'), color: '#8b5cf6' },
        { icon: Zap, label: t('trust_instant'), color: '#f59e0b' },
    ];

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
                        <span className="text-[10px] sm:text-xs font-bold text-white/70 tracking-widest uppercase">{t('hero_badge')}</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-white drop-shadow-2xl">
                        {t('hero_title_1')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">
                            {t('hero_title_2')}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        {t('hero_subtitle')}
                    </p>

                    <motion.button
                        onClick={scrollToPurchase}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-lg rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        {t('hero_cta')}
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
                                {t('billing_monthly')}
                            </button>
                            <button
                                onClick={() => setBillingCycle('year')}
                                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative z-10 ${billingCycle === 'year' ? 'text-black' : 'text-slate-400 hover:text-white'}`}
                            >
                                {t('billing_yearly')}
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
                                {t('billing_save')}
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
                                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">{t('std_name')}</h3>
                                <p className="text-slate-500 text-sm mb-6">{t('std_tagline')}</p>

                                <div className="mb-8 overflow-hidden h-14">
                                    <motion.div
                                        key={billingCycle + locale}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="flex items-baseline gap-1"
                                    >
                                        <span className="text-4xl font-black text-white">{priceFor('standard', billingCycle)}</span>
                                        <span className="text-slate-500 text-lg font-medium">/{periodLabel}</span>
                                    </motion.div>
                                </div>

                                <div className="space-y-4 mb-10">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span>{t('std_f1')}</span>
                                        </li>
                                    </ul>

                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-white/10"></div>
                                        </div>
                                        <div className="relative flex justify-start">
                                            <span className="bg-[#0A0A0E] pr-2 text-[9px] font-black tracking-[0.15em] text-slate-500 uppercase">{t('incl_label')}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2.5">
                                        {[t('std_inc1'), t('std_inc2'), t('std_inc3'), t('std_inc4')].map((f, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-slate-300 transition-all duration-200 hover:translate-x-0.5">
                                                <CheckCircle2 className="w-4 h-4 text-[#31A8FF] shrink-0" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button
                                onClick={() => handlePurchase('standard')}
                                disabled={isProcessing !== null}
                                className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
                            >
                                {isProcessing === 'standard' ? t('processing') : t('btn_subscribe')}
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
                                {t('best_seller')}
                            </div>

                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-[#8B31FF]/10 flex items-center justify-center mb-6 border border-[#8B31FF]/20 text-[#8B31FF]">
                                    <Rocket className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">{t('pro_name')}</h3>
                                <p className="text-slate-400 text-sm mb-6 font-medium">{t('pro_tagline')}</p>

                                <div className="mb-8 overflow-hidden h-14">
                                    <motion.div
                                        key={billingCycle + locale}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="flex items-baseline gap-1"
                                    >
                                        <span className="text-5xl font-black text-white">{priceFor('pro', billingCycle)}</span>
                                        <span className="text-[#8B31FF] text-xl font-black">/{periodLabel}</span>
                                    </motion.div>
                                </div>

                                <div className="space-y-4 mb-10">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm text-white font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                            <span>{t('pro_f1')}</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-white font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                            <span>{t('pro_f2')}</span>
                                        </li>
                                    </ul>

                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-white/10"></div>
                                        </div>
                                        <div className="relative flex justify-start">
                                            <span className="bg-[#0A0A0E] pr-2 text-[9px] font-black tracking-[0.15em] text-slate-400 uppercase">{t('incl_label')}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2.5">
                                        {[t('pro_inc1'), t('pro_inc2'), t('pro_inc3'), t('pro_inc4'), t('pro_inc5')].map((f, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-white font-medium transition-all duration-200 hover:translate-x-0.5">
                                                <CheckCircle2 className="w-4 h-4 text-[#8B31FF] shrink-0" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button
                                onClick={() => handlePurchase('pro')}
                                disabled={isProcessing !== null}
                                className="w-full py-5 bg-gradient-to-r from-[#8B31FF] to-[#31A8FF] text-white font-black text-xl rounded-2xl hover:brightness-125 hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_30px_rgba(139,49,255,0.4)] disabled:opacity-50"
                            >
                                {isProcessing === 'pro' ? t('processing') : t('btn_subscribe')}
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
                                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">{t('ent_name')}</h3>
                                <p className="text-slate-500 text-sm mb-6">{t('ent_tagline')}</p>

                                <div className="mb-8 overflow-hidden h-14">
                                    <motion.div
                                        key={billingCycle + locale}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="flex items-baseline gap-1"
                                    >
                                        <span className="text-4xl font-black text-white">{priceFor('enterprise', billingCycle)}</span>
                                        <span className="text-[#FF4B6B] text-lg font-bold">/{periodLabel}</span>
                                    </motion.div>
                                </div>

                                <div className="space-y-4 mb-10">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4B6B] to-[#FFD700]">
                                            <CheckCircle2 className="w-5 h-5 text-[#FF4B6B] shrink-0" />
                                            <span>{t('ent_f1')}</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span>{t('ent_f2')}</span>
                                        </li>
                                    </ul>

                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-white/10"></div>
                                        </div>
                                        <div className="relative flex justify-start">
                                            <span className="bg-[#0A0A0E] pr-2 text-[9px] font-black tracking-[0.15em] text-slate-500 uppercase">{t('incl_label')}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2.5">
                                        {[t('ent_inc1'), t('ent_inc2'), t('ent_inc3'), t('ent_inc4'), t('ent_inc5')].map((f, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-slate-300 transition-all duration-200 hover:translate-x-0.5">
                                                <CheckCircle2 className="w-4 h-4 text-[#FF4B6B] shrink-0" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button
                                onClick={() => handlePurchase('enterprise')}
                                disabled={isProcessing !== null}
                                className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:border-[#FF4B6B] hover:text-[#FF4B6B] transition-all duration-300 disabled:opacity-50"
                            >
                                {isProcessing === 'enterprise' ? t('processing') : t('btn_subscribe')}
                            </button>
                        </motion.div>

                    </div>

                    {/* ────────────────────────────────────────────────────────── */}
                    {/* O QUE A LICENÇA DESBLOQUEIA                                */}
                    {/* ────────────────────────────────────────────────────────── */}
                    <section className="mt-32" aria-labelledby="unlock-heading">

                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
                            >
                                <Sparkles className="w-3.5 h-3.5 text-[#8B31FF]" />
                                <span className="text-[10px] sm:text-xs font-bold text-white/70 tracking-widest uppercase">
                                    {t('unlock_chip')}
                                </span>
                            </motion.div>

                            <motion.h2
                                id="unlock-heading"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-[1.1] mb-6 drop-shadow-2xl"
                            >
                                {t('unlock_title_1')}<br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">
                                    {t('unlock_title_2')}
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-light"
                            >
                                {t('unlock_subtitle')}
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                            {UNLOCKED_MODULES.map((mod, i) => (
                                <motion.div
                                    key={mod.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                                    className="group relative bg-[#0A0A0E]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                                >
                                    <div className="relative">
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 border"
                                            style={{ backgroundColor: `${mod.accent}14`, borderColor: `${mod.accent}33` }}
                                        >
                                            <mod.icon className="w-7 h-7 shrink-0" style={{ color: mod.accent }} />
                                        </div>

                                        <h3 className="text-xl font-black text-white tracking-tight mb-1.5">
                                            {mod.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
                                            {mod.tagline}
                                        </p>

                                        <ul className="space-y-3 pt-5 border-t border-white/10">
                                            {mod.features.map((f) => (
                                                <li key={f} className="flex items-start gap-3 text-[13px] text-slate-400 leading-snug">
                                                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: mod.accent }} />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* ────────────────────────────────────────────────────── */}
                        {/* GRÁTIS vs PROFESSIONAL — QUEBRA DE OBJEÇÃO             */}
                        {/* ────────────────────────────────────────────────────── */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="mt-20 rounded-[3rem] border border-white/10 bg-[#0A0A0E]/50 backdrop-blur-xl overflow-hidden"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">

                                {/* Coluna gratuita */}
                                <div className="p-8 md:p-12 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5">
                                        <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                                            {t('cmp_free_chip')}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                                        {t('cmp_free_title')}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-8">
                                        {t('cmp_free_desc')}
                                    </p>
                                    <ul className="space-y-4">
                                        {FREE_INCLUDED.map((f) => (
                                            <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-px" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Coluna Professional */}
                                <div
                                    className="relative p-8 md:p-12"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, rgba(139,49,255,0.10) 0%, rgba(49,168,255,0.10) 50%, rgba(255,75,107,0.10) 100%)',
                                    }}
                                >
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#8B31FF] to-[#31A8FF] mb-5 shadow-md">
                                        <Sparkles className="w-3 h-3 text-white" />
                                        <span className="text-[10px] font-black tracking-widest text-white uppercase">
                                            {t('cmp_pro_chip')}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                                        {t('cmp_pro_title')}
                                    </h3>
                                    <p className="text-sm text-slate-300 leading-relaxed mb-8">
                                        {t('cmp_pro_desc')}
                                    </p>
                                    <ul className="space-y-4">
                                        {UNLOCKED_MODULES.map((mod) => (
                                            <li key={mod.title} className="flex items-center gap-3">
                                                <span
                                                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border"
                                                    style={{
                                                        backgroundColor: `${mod.accent}14`,
                                                        borderColor: `${mod.accent}33`,
                                                    }}
                                                >
                                                    <mod.icon className="w-4 h-4 shrink-0" style={{ color: mod.accent }} />
                                                </span>
                                                <span className="text-sm font-bold text-white">{mod.title}</span>
                                                <ArrowRight className="w-4 h-4 text-white/20 shrink-0 ml-auto" />
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={scrollToPurchase}
                                        className="mt-10 w-full py-4 bg-gradient-to-r from-[#8B31FF] to-[#31A8FF] text-white font-black rounded-2xl hover:brightness-110 transition-all duration-300 shadow-[0_10px_30px_rgba(139,49,255,0.3)]"
                                    >
                                        {t('cmp_pro_cta')}
                                    </button>
                                </div>

                            </div>
                        </motion.div>
                    </section>

                    {/* --- RISK REVERSAL: GARANTIA BLINDADA --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#0A0A0E]/80 to-[#0A0A0E]/40 border border-emerald-500/20 backdrop-blur-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full -mr-20 -mt-20"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-left">
                            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-white rounded-full shadow-inner border border-emerald-100 flex items-center justify-center">
                                <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-emerald-500" />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic">
                                    {t('guarantee_title_1')} <span className="text-emerald-400">{t('guarantee_title_2')}</span>
                                </h2>
                                <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                                    {t('guarantee_pre')} <strong className="text-white">Voltris Optimizer</strong> {t('guarantee_mid')} <strong className="text-white">{t('guarantee_bold')}</strong>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- CONVERSION FAQ: QUEBRA DE OBJEÇÕES --- */}
                    <div className="mt-32 text-left max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">{t('faq_title')}</h2>
                            <p className="text-slate-500">{t('faq_subtitle')}</p>
                        </div>
                        <div className="space-y-6">
                            {FAQ.map((faq, i) => (
                                <div key={i} className="p-8 bg-[#0A0A0E]/60 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all">
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                                        <HelpCircle className="w-5 h-5 text-[#31A8FF]" /> {faq.q}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- LIVE PROOF TICKET --- */}
                    <div className="mt-24 inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <strong className="text-white">{t('live_proof_num')}</strong> {t('live_proof_label')}
                        </span>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {TRUST.map((badge, i) => (
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
            <h1 className="sr-only">Voltris Optimizer License</h1>
            <Suspense fallback={<div className="min-h-screen bg-[#050510]" />}>
                <BuyLicenseContent />
            </Suspense>
            <Footer />
        </>
    );
}
