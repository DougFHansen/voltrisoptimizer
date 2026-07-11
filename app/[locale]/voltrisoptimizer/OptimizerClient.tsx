"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SoftwareApplicationSchema from '@/components/SEOStructuredData';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
    Cpu, Gauge, Wifi, Settings,
    MousePointer2, Layers, CheckCircle2, XCircle,
    ChevronDown, Download, BarChart3, Radio, Briefcase, Minus, Laptop, Video, Zap, Activity, ShieldCheck, Database, Brain, Lock, Check, Wrench,
    Sparkles, Rocket, Target, TrendingUp, Shield, Zap as Bolt, Monitor, Play, Pause, ChevronRight, ArrowRight, Star, Users, Package, Globe, Code, Terminal, Cloud, Server
} from 'lucide-react';
import { notifyDownload } from '@/utils/notifications';

// --- PREMIUM ENTERPRISE COMPONENTS ---

const MetricCard = ({ icon, title, value, subtitle, trend, color }: { 
    icon: React.ReactNode, 
    title: string, 
    value: string, 
    subtitle: string, 
    trend?: 'up' | 'down',
    color: string 
}) => {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative group"
        >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-[0.03] rounded-2xl blur-xl group-hover:opacity-[0.08] transition-all duration-500`} />
            
            {/* Card Content */}
            <div className="relative bg-[#0A0A0F] border border-white/[0.05] rounded-2xl p-8 group-hover:border-white/[0.10] transition-all duration-300">
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
                    <div className="relative z-10 text-white">{icon}</div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</p>
                    <div className="flex items-baseline gap-3">
                        <h3 className={`text-4xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                            {value}
                        </h3>
                        {trend && (
                            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                trend === 'up' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                            }`}>
                                {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3 rotate-180" />}
                                12%
                            </div>
                        )}
                    </div>
                    <p className="text-sm text-slate-400">{subtitle}</p>
                </div>
            </div>
        </motion.div>
    );
};

const FeatureCard = ({ 
    icon, 
    title, 
    description, 
    features, 
    gradient, 
    delay,
    isExpanded = false 
}: {
    icon: React.ReactNode,
    title: string,
    description: string,
    features: string[],
    gradient: string,
    delay: number,
    isExpanded?: boolean
}) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group"
        >
            {/* Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.02] rounded-3xl blur-2xl transition-all duration-700 ${isHovered ? 'opacity-[0.08] scale-110' : ''}`} />
            
            {/* Card */}
            <div className={`relative bg-[#0A0A0F] border border-white/[0.05] rounded-3xl p-8 transition-all duration-500 ${
                isHovered ? 'border-white/[0.15] shadow-[0_20px_60px_rgba(0,0,0,0.3)]' : ''
            } ${isExpanded ? 'md:col-span-2' : ''}`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50 animate-pulse`} />
                        <div className="relative z-10 text-white text-xl">{icon}</div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.10]">
                        <Sparkles className="w-4 h-4 text-[#31A8FF]" />
                        <span className="text-xs font-medium text-[#31A8FF]">Premium</span>
                    </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="text-slate-400 leading-relaxed">{description}</p>
                    
                    {/* Features */}
                    <div className={`grid gap-3 ${isExpanded ? 'md:grid-cols-2' : ''}`}>
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: delay + idx * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm text-slate-300">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 rounded-3xl pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-[0.03]' : ''}`} />
            </div>
        </motion.div>
    );
};

const CategoryHeader = ({ 
    icon, 
    title, 
    description, 
    color, 
    count 
}: { 
    icon: React.ReactNode, 
    title: string, 
    description: string, 
    color: string, 
    count: number 
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <div className="flex items-center justify-center mb-6">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-50 animate-pulse`} />
                    <div className="relative z-10 text-white text-3xl">{icon}</div>
                </div>
            </div>
            
            <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${color} flex items-center gap-2`}>
                        <Package className="w-4 h-4 text-white" />
                        <span className="text-sm font-bold text-white">{count} tools</span>
                    </div>
                </div>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">{description}</p>
            </div>
        </motion.div>
    );
};

const ToolGrid = ({ tools, columns = 4 }: { tools: any[], columns?: number }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
            {tools.map((tool, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                >
                    {/* Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-[0.02] rounded-2xl blur-xl group-hover:opacity-[0.08] transition-all duration-500`} />
                    
                    {/* Card */}
                    <div className={`relative bg-[#0A0A0F] border border-white/[0.05] rounded-2xl p-6 group-hover:border-opacity-30 transition-all duration-300`}
                         style={{ borderColor: `${tool.color}30` }}>
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                             style={{ backgroundColor: `${tool.color}10` }}>
                            <div className="w-7 h-7 transition-colors duration-300" style={{ color: tool.color }}>
                                {tool.icon}
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-3">
                            <h4 className="text-xl font-bold text-white group-hover:text-opacity-100 transition-colors">
                                {tool.name}
                            </h4>
                            <p className="text-sm text-slate-400 leading-relaxed">{tool.desc}</p>
                            
                            {/* Features */}
                            <div className="space-y-2">
                                {tool.features.map((feature: string, fIdx: number) => (
                                    <div key={fIdx} className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                                             style={{ backgroundColor: `${tool.color}20` }}>
                                            <CheckCircle2 className="w-2.5 h-2.5" style={{ color: tool.color }} />
                                        </div>
                                        <span className="text-xs text-slate-500">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 rounded-2xl pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.02]`} />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <motion.div
            className={`group rounded-xl border transition-all duration-500 overflow-hidden relative ${isOpen
                ? 'bg-gradient-to-r from-[#1a1a2e] to-[#0F111A] border-[#31A8FF]/30 shadow-[0_0_40px_rgba(49,168,255,0.05)]'
                : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                }`}
        >
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8B31FF] to-[#FF4B6B] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
            <button
                onClick={onClick}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none relative z-10"
            >
                <span className={`text-lg font-medium tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ml-4 shrink-0 ${isOpen ? 'border-[#8B31FF] bg-[#8B31FF]/10 rotate-180' : 'border-white/10 bg-transparent group-hover:border-white/30'
                    }`}>
                    <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-[#8B31FF]' : 'text-slate-500'}`} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4 mx-6">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// --- MAIN PAGE COMPONENT ---

export default function OptimizerClient() {
    const { scrollY } = useScroll();
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [cpuLoad, setCpuLoad] = useState(12);
    const [latencyLoad, setLatencyLoad] = useState(15);
    const [graphData, setGraphData] = useState([30, 45, 40, 60, 55, 75, 70, 90, 85]);

    // Live Data Simulation
    useEffect(() => {
        const interval = setInterval(() => {
            // Random CPU Load between 5% and 15% (Optimized)
            setCpuLoad(Math.floor(Math.random() * (15 - 5 + 1) + 5));
            // Random Latency Bar Width between 10% and 20%
            setLatencyLoad(Math.floor(Math.random() * (20 - 10 + 1) + 10));
            // Dynamic Graph Data
            setGraphData(prev => {
                const newData = [...prev.slice(1)];
                const lastValue = prev[prev.length - 1];
                const nextValue = Math.min(100, Math.max(40, lastValue + Math.floor(Math.random() * 40 - 20)));
                newData.push(nextValue);
                return newData;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Parallax transforms
    const yLeft = useTransform(scrollY, [0, 500], [0, -100]);
    const yRight = useTransform(scrollY, [0, 500], [0, -150]);

    // --- DATA: SEGMENTS ---
    const segments = [
        {
            id: 'gamers',
            title: 'Gamers & Competitive',
            icon: <MousePointer2 className="w-6 h-6 text-[#00FF94]" />,
            desc: 'For those seeking extreme performance. Eliminate input lag, optimize frame-time, and ensure maximum hardware priority for your games.',
            features: ['Input Lag Reduction', 'Stable Frames (1% Lows)', 'Focus on Competitive Gaming'],
            color: 'border-[#00FF94]/30'
        },
        {
            id: 'enterprise',
            title: 'Companies & Startups',
            icon: <Briefcase className="w-6 h-6 text-[#31A8FF]" />,
            desc: 'Increase operational efficiency. Optimize PC fleets to reduce IT tickets, speed up boot times, and accelerate workflows.',
            features: ['Increased Productivity', 'Fast Boot', 'Stability in Enterprise Software'],
            color: 'border-[#31A8FF]/30'
        },
        {
            id: 'common',
            title: 'Daily Use & Home Office',
            icon: <Laptop className="w-6 h-6 text-[#FF4B6B]" />,
            desc: 'Recover your PC speed. Ideal for web browsing, watching streams, and multitasking without the freezes of an overloaded system.',
            features: ['Responsive System', 'Fluid Browsing', 'Old PC Revitalization'],
            color: 'border-[#FF4B6B]/30'
        }
    ];

    // --- DATA: TECHNICAL FEATURES ---
    const features = [
        {
            icon: <Cpu className="w-8 h-8" />,
            title: 'Threads Management',
            desc: 'Proprietary algorithm that adjusts CPU affinity to ensure critical processes have absolute priority.',
            gradient: 'from-[#FF4B6B] to-[#FF8F4B]'
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: 'Deep Debloat',
            desc: 'Surgical removal of Windows bloatware and telemetry that silently consume resources.',
            gradient: 'from-[#8B31FF] to-[#B070FF]'
        },
        {
            icon: <Wifi className="w-8 h-8" />,
            title: 'TCP/IP Optimization',
            desc: 'Fine-tuning of the Windows network stack to reduce latency, jitter, and bufferbloat in connections.',
            gradient: 'from-[#31A8FF] to-[#5FC2FF]'
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: 'I/O Optimization',
            desc: 'Prioritization of data input and output on disk and memory for instant loading.',
            gradient: 'from-[#00E5FF] to-[#00FFCA]'
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'SafeTimer™ Engine',
            desc: 'Real 5-15ms reduction in input lag through Timer Resolution adjustment (Multimedia API), similar to NVIDIA Reflex.',
            gradient: 'from-[#FFEE00] to-[#FFB300]'
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: '1-Click Repair',
            desc: 'Instant fix for DirectX, Runtime, and corrupted DLL errors via automated SFC/DISM.',
            gradient: 'from-[#00FF94] to-[#00CC76]'
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: 'LYRA Intelligence',
            desc: 'Proprietary heuristics that learn your peak hours and most used apps to anticipate optimizations.',
            gradient: 'from-[#FF0055] to-[#FF5588]'
        }
    ];

    const stats = [
        { value: '+40%', label: 'Performance', sub: 'Average Gain' },
        { value: '-35%', label: 'Latency', sub: 'Delay Reduction' },
        { value: '100%', label: 'Security', sub: 'Zero Data Collection' },
        { value: '24/7', label: 'Stability', sub: 'Continuous Use' },
    ];

    return (
        <>
            <Header />
            <main className="bg-[#050510] min-h-screen relative font-sans selection:bg-[#31A8FF]/30 overflow-hidden">

                {/* Global Ambient Background Effects */}
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-50"></div>

                {/* Deep Space Gradients */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#31A8FF]/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-[#8B31FF]/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* --- HERO SECTION --- */}
                <section className="min-h-[100dvh] flex flex-col items-center justify-center relative z-10 perspective-1000 pt-32 md:pt-20">

                    {/* Floating Tech Elements (Monitor Simulation) */}
                    <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">

                        {/* Left Card - System Health (Enterprise Style) */}
                        <motion.div
                            style={{ y: yLeft }}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            className="absolute top-1/2 -translate-y-1/2 left-[2%] xl:left-[2%] w-[280px] bg-[#0A0A0E] border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden"
                        >
                            {/* Card Header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] bg-white/[0.01]">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                                    <span className="text-xs font-semibold text-white tracking-wide">System Health</span>
                                </div>
                                <span className="text-[10px] font-medium text-emerald-500 px-2 py-0.5 bg-emerald-500/10 rounded-full">Optimized</span>
                            </div>

                            {/* Card Content */}
                            <div className="p-5 space-y-5">
                                {/* CPU Load Row */}
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center text-[11px]">
                                        <span className="text-slate-400 font-medium">CPU Usage</span>
                                        <span className="text-white font-mono">{cpuLoad}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-white/80 rounded-full"
                                            animate={{ width: `${cpuLoad}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>

                                {/* Latency Row */}
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center text-[11px]">
                                        <span className="text-slate-400 font-medium">System Latency</span>
                                        <span className="text-emerald-400 font-mono">{(latencyLoad / 10).toFixed(2)}ms</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-emerald-500 rounded-full"
                                            animate={{ width: `${latencyLoad}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-white/[0.06]"></div>

                                {/* Meta Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">BG Processes</div>
                                        <div className="text-xs text-white font-mono">Optimizing...</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Profile</div>
                                        <div className="text-xs text-[#31A8FF] font-medium">High Perf.</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Card - Performance Engine (Enterprise Style) */}
                        <motion.div
                            style={{ y: yRight }}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                            className="absolute top-1/2 -translate-y-1/2 right-[2%] xl:right-[2%] w-[280px] bg-[#0A0A0E] border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden"
                        >
                            {/* Card Header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] bg-white/[0.01]">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                                    <span className="text-xs font-semibold text-white tracking-wide">Performance Engine</span>
                                </div>
                                <Activity className="w-3 h-3 text-slate-500" />
                            </div>

                            <div className="p-5 space-y-5">
                                {/* Subtitle */}
                                <div className="flex items-center justify-between pb-2">
                                    <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Real-Time Optimization</span>
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3].map(i => <div key={i} className="w-[2px] h-2 bg-emerald-500/50 rounded-full" style={{ animationDelay: i * 0.1 + 's' }}></div>)}
                                    </div>
                                </div>

                                {/* Metrics Stack - Clean List */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-2 rounded-lg bg-white/[0.03] border border-white/[0.02]">
                                        <span className="text-[11px] text-slate-400">Active Load</span>
                                        <span className="text-xs font-mono text-white">Games / Render</span>
                                    </div>

                                    <div className="flex justify-between items-center p-2 rounded-lg bg-white/[0.03] border border-white/[0.02]">
                                        <span className="text-[11px] text-slate-400">Res. Allocation</span>
                                        <span className="text-xs font-mono text-[#31A8FF]">CPU High Priority</span>
                                    </div>

                                    <div className="flex justify-between items-center p-2 rounded-lg bg-white/[0.03] border border-white/[0.02]">
                                        <span className="text-[11px] text-slate-400">Stability Index</span>
                                        <span className="text-xs font-mono text-emerald-400">99.9%</span>
                                    </div>
                                </div>

                                {/* Footer Mode */}
                                <div className="pt-2 border-t border-white/[0.06] flex justify-between items-center">
                                    <span className="text-[10px] text-slate-500">Optimization Mode</span>
                                    <span className="text-[10px] font-bold text-white px-2 py-0.5 border border-white/10 rounded">MINIMUM LATENCY</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Central Copy */}
                    <div className="container mx-auto px-4 flex-grow flex flex-col items-center justify-center text-center relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl mx-auto"
                        >
                            <div className="flex flex-col items-center gap-4 mb-8">
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                                >
                                    <Brain className="w-3 h-3 text-[#31A8FF] mr-1" />
                                    <span className="text-[10px] sm:text-xs font-bold text-white/70 tracking-widest uppercase">Smart Performance with A.I.</span>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                                    className="group relative inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all cursor-default"
                                >
                                    <div className="relative flex h-2 w-2">
                                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></div>
                                        <div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></div>
                                    </div>
                                    <span className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.2em] italic">Free 7 Days Trial</span>
                                    <Sparkles className="w-3 h-3 text-emerald-400 ml-1 group-hover:rotate-12 transition-transform" />
                                </motion.div>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight mb-8 leading-[0.9] select-none text-center drop-shadow-lg">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]" style={{ letterSpacing: '0.04em' }}>
                                    STOP LOSING <br />
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">
                                    FRAMES NOW.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light mb-12 leading-relaxed tracking-wide">
                                Unlock the real power of your hardware. 
                                <span className="text-white font-medium"> Kernel Engineering </span> for those who won't accept Windows lag.
                            </p>

                            <div className="flex flex-col items-center gap-3 w-full max-w-lg mx-auto">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-slate-500 font-medium">Current Version:</span>
                                    <span className="px-2.5 py-1 bg-gradient-to-r from-[#31A8FF]/10 to-[#8B31FF]/10 border border-[#31A8FF]/20 rounded-md text-xs font-bold text-[#31A8FF]">
                                        v1.0.1.5
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start gap-5 justify-center w-full">
                                    <div className="flex flex-col w-full gap-2">
                                        <a
                                            href="https://github.com/DougFHansen/Download-Voltris-Optimizer/releases/download/v1.0.1.5/VoltrisOptimizerInstaller.exe"
                                            onClick={() => notifyDownload('Voltris Optimizer Installer (x64)')}
                                            className="group relative w-full px-6 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] flex items-center justify-center gap-2"
                                        >
                                            <Download className="w-4 h-4 group-hover:translate-y-[2px] transition-transform duration-300" />
                                            DOWNLOAD!
                                        </a>
                                        <div className="mt-2 text-center">
                                            <span className="text-[10px] sm:text-xs text-slate-500 font-medium flex items-center justify-center gap-1.5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                                <ShieldCheck className="w-3 h-3 text-emerald-500" /> 
                                                7 days trial license included in download
                                            </span>
                                        </div>
                                        <a
                                            href="https://github.com/DougFHansen/Download-Voltris-Optimizer/releases/download/v1.0.1.5/VoltrisOptimizerInstaller.exe"
                                            onClick={() => notifyDownload('Voltris Optimizer Installer (x86)')}
                                            className="mt-1 text-[10px] text-slate-600 hover:text-[#31A8FF] transition-colors text-center font-medium block"
                                        >
                                            For Windows x86 systems
                                        </a>
                                    </div>

                                    <Link
                                        href="/voltrisoptimizer/como-funciona"
                                        className="w-full px-6 py-3 bg-white/[0.03] text-white font-medium text-base rounded-lg border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all flex items-center justify-center backdrop-blur-md"
                                    >
                                        How it Works
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- TRUST BAR --- */}
                <section className="py-12 border-y border-white/5 bg-white/[0.02] relative z-10">
                    <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Scanned by VirusTotal</span>
                        </div>
                        <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
                            <CheckCircle2 className="w-5 h-5 text-[#31A8FF]" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Zero Spyware / Junkware</span>
                        </div>
                        <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
                            <Cpu className="w-5 h-5 text-[#8B31FF]" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">100% C# Native Code</span>
                        </div>
                        <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
                            <Lock className="w-5 h-5 text-[#FF4B6B]" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Microsoft Certified Safety</span>
                        </div>
                    </div>
                </section>

                {/* --- PREMIUM ENTERPRISE FUNCTIONALITY SHOWCASE --- */}
                <section className="py-32 relative z-10 bg-gradient-to-b from-[#050510] via-[#08080C] to-[#0A0A0F]">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-center mb-20"
                        >
                            <div className="flex items-center justify-center mb-8">
                                <div className="w-32 h-32 rounded-4xl bg-gradient-to-br from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] opacity-60 animate-pulse" />
                                    <div className="relative z-10 text-white text-5xl">
                                        <Rocket />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-8">
                                <div className="flex items-center justify-center gap-6">
                                    <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-[#31A8FF] to-[#8B31FF] bg-clip-text text-transparent">
                                        Voltris Enterprise Suite
                                    </h1>
                                    <div className="px-6 py-3 rounded-full bg-gradient-to-r from-[#31A8FF] to-[#8B31FF] flex items-center gap-3 shadow-2xl">
                                        <Sparkles className="w-5 h-5 text-white" />
                                        <span className="text-lg font-bold text-white">25 Tools</span>
                                    </div>
                                </div>
                                <p className="text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
                                    Transform your PC into an enterprise-grade machine with our complete suite of 25 professional optimization tools.
                                    Built with cutting-edge technology and designed for maximum performance.
                                </p>
                                
                                {/* Premium Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-16">
                                    <MetricCard
                                        icon={<Target />}
                                        title="Performance"
                                        value="+400%"
                                        subtitle="Average performance gain"
                                        trend="up"
                                        color="from-[#00FF94] to-[#00CC76]"
                                    />
                                    <MetricCard
                                        icon={<Shield />}
                                        title="Security"
                                        value="100%"
                                        subtitle="Zero data collection"
                                        color="from-[#FF0055] to-[#FF5588]"
                                    />
                                    <MetricCard
                                        icon={<Users />}
                                        title="Users"
                                        value="1M+"
                                        subtitle="Active professionals"
                                        trend="up"
                                        color="from-[#31A8FF] to-[#5FC2FF]"
                                    />
                                    <MetricCard
                                        icon={<Star />}
                                        title="Rating"
                                        value="4.9"
                                        subtitle="Industry leader"
                                        trend="up"
                                        color="from-[#FFEE00] to-[#FFB300]"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* MAIN SECTION - Premium */}
                        <div className="mb-32">
                            <CategoryHeader
                                icon={<Monitor />}
                                title="CORE"
                                description="Essential tools for daily optimization and maximum system efficiency"
                                color="from-[#31A8FF] to-[#5FC2FF]"
                                count={4}
                            />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Dashboard */}
                                <FeatureCard
                                    icon={<Gauge />}
                                    title="Dashboard"
                                    description="Real-time control panel with advanced metrics and instant optimization controls"
                                    features={[
                                        "Real-time CPU, RAM, Disk monitoring",
                                        "Health Score algorithm (0-100)",
                                        "One-click optimization actions",
                                        "Advanced system status",
                                        "Performance metrics visualization"
                                    ]}
                                    gradient="from-[#31A8FF] to-[#5FC2FF]"
                                    delay={0.1}
                                />

                                {/* Performance */}
                                <FeatureCard
                                    icon={<Rocket />}
                                    title="Performance"
                                    description="Intelligent hardware detection and automatic optimization based on your system profile"
                                    features={[
                                        "Intel/AMD automatic detection",
                                        "DDR3/4/5 RAM optimization",
                                        "SSD/HDD/NVMe acceleration",
                                        "Safe overclocking algorithms",
                                        "Adaptive performance profiles"
                                    ]}
                                    gradient="from-[#00FF94] to-[#00CC76]"
                                    delay={0.2}
                                />

                                {/* Cleanup */}
                                <FeatureCard
                                    icon={<Database />}
                                    title="Cleanup"
                                    description="Advanced cleaning system with double verification and maximum security protocols"
                                    features={[
                                        "Pre-analysis verification system",
                                        "Temporary file cleanup",
                                        "Multi-browser cache optimization",
                                        "Intelligent download management",
                                        "Advanced logging console"
                                    ]}
                                    gradient="from-[#8B31FF] to-[#B070FF]"
                                    delay={0.3}
                                />

                                {/* Network */}
                                <FeatureCard
                                    icon={<Wifi />}
                                    title="Network"
                                    description="Complete connectivity optimization with advanced DNS management and repair tools"
                                    features={[
                                        "Optimized DNS servers",
                                        "Google/Cloudflare integration",
                                        "DNS cache management",
                                        "Winsock reset tools",
                                        "TCP/IP stack optimization"
                                    ]}
                                    gradient="from-[#00E5FF] to-[#00FFCA]"
                                    delay={0.4}
                                />
                            </div>
                        </div>

                        {/* MODULES SECTION - Premium */}
                        <div className="mb-32">
                            <CategoryHeader
                                icon={<Bolt />}
                                title="MODULES"
                                description="Specialized tools for maximum performance in gaming and security"
                                color="from-[#8B31FF] to-[#FF4B6B]"
                                count={2}
                            />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Gamer */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    whileHover={{ y: -8 }}
                                    className="relative group"
                                >
                                    {/* Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B6B]/5 to-[#FF8F4B]/5 rounded-4xl blur-3xl group-hover:from-[#FF4B6B]/10 group-hover:to-[#FF8F4B]/10 transition-all duration-700" />
                                    
                                    {/* Card */}
                                    <div className="relative bg-[#0A0A0F] border border-white/[0.05] rounded-4xl p-12 group-hover:border-[#FF4B6B]/30 transition-all duration-500">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-8">
                                            <div className="w-24 h-24 rounded-4xl bg-gradient-to-br from-[#FF4B6B] to-[#FF8F4B] flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B6B] to-[#FF8F4B] opacity-60 animate-pulse" />
                                                <div className="relative z-10 text-white text-4xl">
                                                    <MousePointer2 />
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF4B6B] to-[#FF8F4B]">
                                                <Play className="w-5 h-5 text-white" />
                                                <span className="text-base font-bold text-white">GAMER MODE</span>
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="space-y-8">
                                            <h3 className="text-4xl font-bold text-white">Gamer</h3>
                                            <p className="text-xl text-slate-300 leading-relaxed">
                                                Extreme performance optimization with intelligent game detection and specialized enhancement algorithms
                                            </p>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h4 className="text-2xl font-semibold text-[#FF4B6B] mb-6 flex items-center gap-3">
                                                        <Target className="w-6 h-6" />
                                                        Automatic Detection
                                                    </h4>
                                                    <ul className="space-y-4">
                                                        {[
                                                            "Steam (200+ games)",
                                                            "Epic Games Store",
                                                            "Battle.net Platform",
                                                            "Ubisoft Connect",
                                                            "Support for independent games"
                                                        ].map((item, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.3 + idx * 0.1 }}
                                                                className="flex items-center gap-4"
                                                            >
                                                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF4B6B] to-[#FF8F4B] flex items-center justify-center">
                                                                    <Check className="w-5 h-5 text-white" />
                                                                </div>
                                                                <span className="text-slate-300 text-lg">{item}</span>
                                                            </motion.div>
                                                        ))}
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="text-2xl font-semibold text-[#FF4B6B] mb-6 flex items-center gap-3">
                                                        <TrendingUp className="w-6 h-6" />
                                                        Performance Gains
                                                    </h4>
                                                    <ul className="space-y-4">
                                                        {[
                                                            "+40% average FPS",
                                                            "-60% latency reduction",
                                                            "0ms input lag",
                                                            "Maximum CPU priority",
                                                            "Dedicated RAM allocation"
                                                        ].map((item, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.4 + idx * 0.1 }}
                                                                className="flex items-center gap-4"
                                                            >
                                                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF4B6B] to-[#FF8F4B] flex items-center justify-center">
                                                                    <Check className="w-5 h-5 text-white" />
                                                                </div>
                                                                <span className="text-slate-300 text-lg">{item}</span>
                                                            </motion.div>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Voltris Shield */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    whileHover={{ y: -8 }}
                                    className="relative group"
                                >
                                    {/* Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF0055]/5 to-[#FF5588]/5 rounded-4xl blur-3xl group-hover:from-[#FF0055]/10 group-hover:to-[#FF5588]/10 transition-all duration-700" />
                                    
                                    {/* Card */}
                                    <div className="relative bg-[#0A0A0F] border border-white/[0.05] rounded-4xl p-12 group-hover:border-[#FF0055]/30 transition-all duration-500">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-8">
                                            <div className="w-24 h-24 rounded-4xl bg-gradient-to-br from-[#FF0055] to-[#FF5588] flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0055] to-[#FF5588] opacity-60 animate-pulse" />
                                                <div className="relative z-10 text-white text-4xl">
                                                    <ShieldCheck />
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF0055] to-[#FF5588]">
                                                <Shield className="w-5 h-5 text-white" />
                                                <span className="text-base font-bold text-white">MAX SECURITY</span>
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="space-y-8">
                                            <h3 className="text-4xl font-bold text-white">Voltris Shield</h3>
                                            <p className="text-xl text-slate-300 leading-relaxed">
                                                Advanced multi-layered protection system with real-time monitoring and intelligent threat detection
                                            </p>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h4 className="text-2xl font-semibold text-[#FF0055] mb-6 flex items-center gap-3">
                                                        <Monitor className="w-6 h-6" />
                                                        Scan Options
                                                    </h4>
                                                    <ul className="space-y-4">
                                                        {[
                                                            "Quick Scan (5 min)",
                                                            "Deep System Scan",
                                                            "Adware Specialist",
                                                            "Custom Folder Scan",
                                                            "24/7 Real-Time Protection"
                                                        ].map((item, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.4 + idx * 0.1 }}
                                                                className="flex items-center gap-4"
                                                            >
                                                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF0055] to-[#FF5588] flex items-center justify-center">
                                                                    <Check className="w-5 h-5 text-white" />
                                                                </div>
                                                                <span className="text-slate-300 text-lg">{item}</span>
                                                            </motion.div>
                                                        ))}
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="text-2xl font-semibold text-[#FF0055] mb-6 flex items-center gap-3">
                                                        <Lock className="w-6 h-6" />
                                                        Protection Matrix
                                                    </h4>
                                                    <ul className="space-y-4">
                                                        {[
                                                            "Malware & Ransomware",
                                                            "Spyware & Adware",
                                                            "Browser Hijackers",
                                                            "PUPs Detection",
                                                            "100% Detection Rate"
                                                        ].map((item, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.5 + idx * 0.1 }}
                                                                className="flex items-center gap-4"
                                                            >
                                                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF0055] to-[#FF5588] flex items-center justify-center">
                                                                    <Check className="w-5 h-5 text-white" />
                                                                </div>
                                                                <span className="text-slate-300 text-lg">{item}</span>
                                                            </motion.div>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* STREAMING SECTION - Premium */}
                        <div className="mb-32">
                            <CategoryHeader
                                icon={<Video />}
                                title="STREAMING"
                                description="Professional streaming tools for content creators and live performers"
                                color="from-[#FF4B6B] to-[#FF8F4B]"
                                count={1}
                            />
                            
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -8 }}
                                className="relative group max-w-6xl mx-auto"
                            >
                                {/* Background Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B6B]/5 to-[#FF8F4B]/5 rounded-4xl blur-3xl group-hover:from-[#FF4B6B]/10 group-hover:to-[#FF8F4B]/10 transition-all duration-700" />
                                
                                {/* Card */}
                                <div className="relative bg-[#0A0A0F] border border-white/[0.05] rounded-4xl p-16 group-hover:border-[#FF4B6B]/30 transition-all duration-500">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-12">
                                        <div className="flex items-center gap-8">
                                            <div className="w-24 h-24 rounded-4xl bg-gradient-to-br from-[#FF4B6B] to-[#FF8F4B] flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B6B] to-[#FF8F4B] opacity-60 animate-pulse" />
                                                <div className="relative z-10 text-white text-4xl">
                                                    <Video />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-4xl font-bold text-white mb-3">Stream Hub</h3>
                                                <p className="text-slate-300 text-lg">Professional streaming optimization center</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF4B6B] to-[#FF8F4B]">
                                            <Radio className="w-5 h-5 text-white" />
                                            <span className="text-base font-bold text-white">READY TO GO</span>
                                        </div>
                                    </div>
                                    
                                    {/* Features Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                        <div>
                                            <h4 className="text-2xl font-semibold text-[#FF4B6B] mb-6 flex items-center gap-3">
                                                <Settings className="w-6 h-6" />
                                                Optimization
                                            </h4>
                                            <ul className="space-y-4">
                                                {["OBS/Streamlabs Pro", "Streaming Priority", "Lag Reduction Engine"].map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                                        className="flex items-center gap-4"
                                                    >
                                                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF4B6B] to-[#FF8F4B] flex items-center justify-center">
                                                            <Check className="w-5 h-5 text-white" />
                                                        </div>
                                                        <span className="text-slate-300 text-lg">{item}</span>
                                                    </motion.div>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-2xl font-semibold text-[#FF4B6B] mb-6 flex items-center gap-3">
                                                <Cpu className="w-6 h-6" />
                                                Performance
                                            </h4>
                                            <ul className="space-y-4">
                                                {["Dedicated CPU Core", "RAM Optimization", "Network Stability"].map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                                        className="flex items-center gap-4"
                                                    >
                                                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF4B6B] to-[#FF8F4B] flex items-center justify-center">
                                                            <Check className="w-5 h-5 text-white" />
                                                        </div>
                                                        <span className="text-slate-300 text-lg">{item}</span>
                                                    </motion.div>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-2xl font-semibold text-[#FF4B6B] mb-6 flex items-center gap-3">
                                                <Star className="w-6 h-6" />
                                                Quality
                                            </h4>
                                            <ul className="space-y-4">
                                                {["1080p/60fps Pro", "4K/30fps Ultra", "Zero Frame Drops"].map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.4 + idx * 0.1 }}
                                                        className="flex items-center gap-4"
                                                    >
                                                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF4B6B] to-[#FF8F4B] flex items-center justify-center">
                                                            <Check className="w-5 h-5 text-white" />
                                                        </div>
                                                        <span className="text-slate-300 text-lg">{item}</span>
                                                    </motion.div>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* TOOLS SECTION - Premium */}
                        <div className="mb-32">
                            <CategoryHeader
                                icon={<Settings />}
                                title="TOOLS"
                                description="6 essential tools for complete system personalization and configuration"
                                color="from-[#FFEE00] to-[#FFB300]"
                                count={6}
                            />
                            
                            <ToolGrid 
                                tools={[
                                    { 
                                        name: 'Personalize', 
                                        icon: <Settings />, 
                                        color: 'from-[#FFEE00] to-[#FFB300]', 
                                        desc: 'Advanced visual customization engine', 
                                        features: ['Dark/Light Themes', 'Intelligent transparency', 'Taskbar centering', 'Custom color schemes'] 
                                    },
                                    { 
                                        name: 'Display', 
                                        icon: <Monitor />, 
                                        color: 'from-[#31A8FF] to-[#5FC2FF]', 
                                        desc: 'Professional display management', 
                                        features: ['Ideal resolution', 'Refresh rate optimization', 'Multi-monitor support', 'HDR calibration'] 
                                    },
                                    { 
                                        name: 'Power', 
                                        icon: <Bolt />, 
                                        color: 'from-[#00FF94] to-[#00CC76]', 
                                        desc: 'Intelligent power optimization', 
                                        features: ['Performance vs savings', 'Battery optimization', 'Adaptive profiles', 'Turbo mode'] 
                                    },
                                    { 
                                        name: 'Security', 
                                        icon: <Lock />, 
                                        color: 'from-[#FF0055] to-[#FF5588]', 
                                        desc: 'Advanced security configuration', 
                                        features: ['Next-gen firewall', 'UAC control', 'App permissions', 'Multi-layer protection'] 
                                    },
                                    { 
                                        name: 'Privacy', 
                                        icon: <ShieldCheck />, 
                                        color: 'from-[#8B31FF] to-[#B070FF]', 
                                        desc: 'Complete privacy control system', 
                                        features: ['Windows telemetry', 'Data collection control', 'App privacy', 'Anti-tracking'] 
                                    },
                                    { 
                                        name: 'Debloat', 
                                        icon: <Minus />, 
                                        color: 'from-[#FF4B6B] to-[#FF8F4B]', 
                                        desc: 'Professional bloatware removal', 
                                        features: ['Pre-installed apps', 'Unnecessary components', 'System optimization', 'Windows Lite'] 
                                    }
                                ]}
                                columns={3}
                            />
                        </div>

                        {/* MONITORING SECTION - Premium */}
                        <div className="mb-32">
                            <CategoryHeader
                                icon={<BarChart3 />}
                                title="MONITORING"
                                description="4 professional tools for complete system analysis and diagnostics"
                                color="from-[#00E5FF] to-[#00FFCA]"
                                count={4}
                            />
                            
                            <ToolGrid 
                                tools={[
                                    { 
                                        name: 'Device', 
                                        icon: <Laptop />, 
                                        color: 'from-[#00E5FF] to-[#00FFCA]', 
                                        desc: 'Complete hardware information system', 
                                        features: ['Full hardware analysis', 'Driver status', 'System versions', 'Technical specs'] 
                                    },
                                    { 
                                        name: 'Benchmark', 
                                        icon: <BarChart3 />, 
                                        color: 'from-[#FFB300] to-[#FF8F4B]', 
                                        desc: 'Professional performance tests', 
                                        features: ['CPU/GPU/RAM tests', 'Performance comparisons', 'Historical tracking', 'Global scores'] 
                                    },
                                    { 
                                        name: 'Diagnostics', 
                                        icon: <Activity />, 
                                        color: 'from-[#31A8FF] to-[#5FC2FF]', 
                                        desc: 'Complete system health check', 
                                        features: ['System health analysis', 'Critical error detection', 'Component diagnostics', 'Detailed reports'] 
                                    },
                                    { 
                                        name: 'History', 
                                        icon: <Brain />, 
                                        color: 'from-[#8B31FF] to-[#B070FF]', 
                                        desc: 'Advanced activity timeline', 
                                        features: ['Optimization history', 'Change tracking', 'Activity monitoring', 'Detailed logging'] 
                                    }
                                ]}
                                columns={4}
                            />
                        </div>

                        {/* SERVICES SECTION - Premium */}
                        <div className="mb-32">
                            <CategoryHeader
                                icon={<Server />}
                                title="SERVICES"
                                description="3 professional tools for advanced automation and system control"
                                color="from-[#FF8F4B] to-[#FFB300]"
                                count={3}
                            />
                            
                            <ToolGrid 
                                tools={[
                                    { 
                                        name: 'Scheduler', 
                                        icon: <Activity />, 
                                        color: 'from-[#FF8F4B] to-[#FFB300]', 
                                        desc: 'Professional automation engine', 
                                        features: ['Advanced scheduling', 'Recurring tasks', 'Maintenance automation', 'Complete workflow'] 
                                    },
                                    { 
                                        name: 'Logs', 
                                        icon: <Database />, 
                                        color: 'from-[#6B7280] to-[#9CA3AF]', 
                                        desc: 'Professional event analysis', 
                                        features: ['System events', 'Error analysis', 'Real-time logging', 'Advanced export'] 
                                    },
                                    { 
                                        name: 'Pro Services', 
                                        icon: <Settings />, 
                                        color: 'from-[#FFEE00] to-[#FFB300]', 
                                        desc: 'Professional advanced features', 
                                        features: ['Advanced functions', 'Professional settings', 'Expert optimizations', 'Priority support'] 
                                    }
                                ]}
                                columns={3}
                            />
                        </div>

                        {/* SYSTEM SECTION - Premium */}
                        <div>
                            <CategoryHeader
                                icon={<Terminal />}
                                title="SYSTEM"
                                description="3 essential tools for Windows maintenance and advanced system control"
                                color="from-[#6B7280] to-[#9CA3AF]"
                                count={3}
                            />
                            
                            <ToolGrid 
                                tools={[
                                    { 
                                        name: 'Repair', 
                                        icon: <Wrench />, 
                                        color: 'from-[#31A8FF] to-[#5FC2FF]', 
                                        desc: 'Automatic system repair', 
                                        features: ['Windows error correction', 'Automatic fix', 'Deep repair algorithms', 'System stability'] 
                                    },
                                    { 
                                        name: 'System', 
                                        icon: <Settings />, 
                                        color: 'from-[#6B7280] to-[#9CA3AF]', 
                                        desc: 'Advanced system configuration', 
                                        features: ['Windows components', 'Hidden settings', 'System optimizations', 'Full control'] 
                                    },
                                    { 
                                        name: 'Drivers', 
                                        icon: <Cpu />, 
                                        color: 'from-[#00FF94] to-[#00CC76]', 
                                        desc: 'Professional driver management', 
                                        features: ['Automatic updates', 'Compatibility check', 'Driver backup', 'Optimized versions'] 
                                    }
                                ]}
                                columns={3}
                            />
                        </div>
                    </div>
                </section>

                {/* --- SEGMENTS SECTION --- */}
                <section className="py-32 relative z-10 bg-[#050510]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">One Platform. Multiple Profiles.</h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                Voltris Optimizer identifies your profile and adapts Kernel optimizations to deliver exactly what you need.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {segments.map((seg, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className={`p-10 rounded-[2rem] bg-[#0A0A0F] border ${seg.color} border-opacity-20 hover:border-opacity-100 transition-all duration-300 relative group overflow-hidden flex flex-col`}
                                >
                                    {/* Abstract BG Icon */}
                                    <div className="absolute top-[-20px] right-[-20px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity scale-[3]">
                                        {seg.icon}
                                    </div>

                                    <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit border border-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform">{seg.icon}</div>
                                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{seg.title}</h3>
                                    <p className="text-slate-400 mb-8 text-sm leading-relaxed flex-grow">{seg.desc}</p>

                                    <div className="pt-8 border-t border-white/5">
                                        <ul className="space-y-3">
                                            {seg.features.map((feat, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                                                    <CheckCircle2 className="w-4 h-4 text-[#31A8FF] shrink-0" />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- STATS BAR --- */}
                <section className="py-16 relative z-10 border-y border-white/5 bg-[#08080C]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto text-center">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="group">
                                    <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight group-hover:text-[#31A8FF] transition-colors">{stat.value}</h3>
                                    <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                                    <p className="text-[10px] md:text-xs text-slate-600 font-medium">{stat.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- DEEP TECH FEATURES --- */}
                <section className="py-32 relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-20 max-w-7xl mx-auto gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Engineering Under the Hood</h2>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Security and Performance are not opposites. Voltris acts on deep Windows layers (Registry, Services, Kernel) to safely unlock dormant hardware.
                                </p>
                            </div>
                            <Link href="/voltrisoptimizer/documentacao" className="text-[#31A8FF] font-bold hover:text-white transition-colors flex items-center gap-2">
                                Technical Documentation <ChevronDown className="-rotate-90 w-4 h-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group p-8 rounded-[2rem] bg-[#0A0A0F] border border-white/5 hover:border-[#31A8FF]/30 transition-all relative overflow-hidden"
                                >
                                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${feature.gradient} opacity-[0.03] blur-[50px] rounded-full group-hover:opacity-[0.1] transition-opacity`}></div>
                                    <div className={`w-14 h-14 rounded-2xl bg-[#141419] border border-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform relative z-10 shadow-lg`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity`}></div>
                                        <div className="relative z-10">{feature.icon}</div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 relative z-10">{feature.title}</h3>
                                    <p className="text-slate-400 relative z-10 text-sm leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- COMPARISON TABLE (E-E-A-T) --- */}
                <section className="py-24 relative z-10 bg-[#08080C]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto bg-[#0A0A0E] rounded-[3rem] border border-white/5 p-8 md:p-12 overflow-hidden relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#31A8FF] to-transparent opacity-50"></div>

                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold text-white mb-4">Why the Elite Chooses Voltris?</h2>
                                <h3 className="text-xl font-medium text-slate-400 mb-2">Technical comparison with common market "optimizers"</h3>
                            </div>

                            <div className="space-y-1">
                                {[
                                    { feat: 'Real Performance Engineering (Not just "Cleaning")', us: true, others: false },
                                    { feat: 'Optimization for Enterprise Software & ERPs', us: true, others: false },
                                    { feat: 'Zero Data Collection/Spyware (Privacy)', us: true, others: false },
                                    { feat: 'Automatic Backup (Restore Point)', us: true, others: true },
                                    { feat: 'Dedicated Human Support', us: true, others: false },
                                    { feat: 'Safe Kernel Adjustments (Registry)', us: true, others: false },
                                ].map((row, i) => (
                                    <div key={i} className="flex items-center justify-between p-5 border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-colors rounded-xl">
                                        <span className="font-medium text-slate-300 text-sm md:text-base">{row.feat}</span>
                                        <div className="flex items-center gap-12 md:gap-24 pr-4">
                                            <div className="flex flex-col items-center opacity-40 grayscale group-hover:grayscale-0 transition-all">
                                                <span className="text-[10px] uppercase tracking-wider mb-2 md:hidden font-semibold">Others</span>
                                                {row.others ? <CheckCircle2 className="w-5 h-5 text-slate-400" /> : <Minus className="w-5 h-5 text-slate-600" />}
                                            </div>
                                            <div className="flex flex-col items-center relative">
                                                <span className="text-[10px] text-[#31A8FF] uppercase tracking-wider mb-2 md:hidden font-bold">Voltris</span>
                                                {row.us ? (
                                                    <div className="relative">
                                                        <div className="absolute inset-0 bg-[#31A8FF] blur-md opacity-40"></div>
                                                        <CheckCircle2 className="w-6 h-6 text-[#31A8FF] relative z-10" />
                                                    </div>
                                                ) : <XCircle className="w-6 h-6 text-red-500" />}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SEO SECTION: PARA GAMERS E STREAMERS --- */}
                <section className="py-32 relative z-10 bg-[#050510]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                    PC Optimization for <span className="bg-gradient-to-r from-[#00FF94] to-[#31A8FF] text-transparent bg-clip-text">Gamers and Streamers</span>
                                </h2>
                                <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                    The first cloud-based software with remote optimization control. Increase FPS, reduce lag, and eliminate stuttering in competitive games like Valorant, CS2, League of Legends, and Fortnite.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-8 hover:border-[#00FF94]/30 transition-all">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <Video className="w-6 h-6 text-[#00FF94]" />
                                        For Professional Streamers
                                    </h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        Broadcast in high quality without compromising game performance. Our technology optimizes OBS, Streamlabs, and XSplit for drop-free live streams.
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            'Lag reduction during live streams',
                                            'Specific optimization for OBS Studio',
                                            'Better performance in simultaneous streaming',
                                            'Capture process prioritization'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                                <CheckCircle2 className="w-5 h-5 text-[#00FF94] shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-8 hover:border-[#FF4B6B]/30 transition-all">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <MousePointer2 className="w-6 h-6 text-[#FF4B6B]" />
                                        For Competitive Gamers
                                    </h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        Maximize your competitive potential with optimizations that reduce input lag and guarantee stable frames in critical moments.
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            'Increased FPS in competitive games',
                                            'Reduction of input lag and network latency',
                                            'Frame time stability (1% lows)',
                                            'Optimization for online games and eSports'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                                <CheckCircle2 className="w-5 h-5 text-[#FF4B6B] shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-[#0A0A0F] to-[#0E0E14] border border-white/5 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Eliminating Stuttering (Gaps)</h3>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    VOLTRIS OPTIMIZER is the only one with <strong className="text-white">Shader Cache Cleanup (NVIDIA/AMD)</strong>. This eliminates those annoying stutters that happen when the game needs to compile shaders in real-time.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    By adjusting <strong className="text-white">Timer Resolution (timeBeginPeriod)</strong>, we achieve a latency reduction comparable to professional tools like ISLC, ensuring every click is registered at the exact millisecond.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SHIELD SECTION --- */}
                <section className="py-32 relative z-10 bg-[#08080C] border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                            <div className="w-full lg:w-1/2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                                    <span className="text-xs font-bold text-emerald-500 tracking-widest uppercase">Active Protection</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Voltris Shield™</h2>
                                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                    It's not just performance, it's security. Voltris Shield monitors your system against intrusive software trying to steal resources.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { title: 'Startup Monitor', desc: 'Detects and blocks bloatware attempting to auto-start silently.' },
                                        { title: 'Anti-Adware Engine', desc: 'Identifies and removes toolbars and advertising software.' },
                                        { title: 'Critical Process Protection', desc: 'Ensures vital Windows processes are not suspended or corrupted.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                                                <p className="text-xs text-slate-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative">
                                <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full"></div>
                                <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem]">
                                    <div className="bg-[#050510] rounded-[2.4rem] p-8 border border-white/5">
                                        <div className="flex items-center justify-between mb-8">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Shield Activity</span>
                                            <div className="flex gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} className="h-full bg-emerald-500" />
                                            </div>
                                            <div className="flex justify-between items-center bg-white/[0.02] p-4 rounded-xl border border-white/5">
                                                <span className="text-xs text-slate-400">Scan Status</span>
                                                <span className="text-xs font-bold text-emerald-500">PROTECTED</span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5 text-center">
                                                    <div className="text-xl font-bold text-white mb-1">0</div>
                                                    <div className="text-[10px] text-slate-500 uppercase">Active Threats</div>
                                                </div>
                                                <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5 text-center">
                                                    <div className="text-xl font-bold text-emerald-500 mb-1">342</div>
                                                    <div className="text-[10px] text-slate-500 uppercase">Cleaned Processes</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SEO SECTION: PARA EMPRESAS --- */}
                <section className="py-32 relative z-10 bg-[#08080C]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31A8FF]/10 border border-[#31A8FF]/20 mb-6">
                                        <Briefcase className="w-3 h-3 text-[#31A8FF]" />
                                        <span className="text-xs font-bold text-[#31A8FF] tracking-widest uppercase">Exclusive Remote Management Tech</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                        Total Control of 1 or 1000 <span className="bg-gradient-to-r from-[#31A8FF] to-[#8B31FF] text-transparent bg-clip-text">PCs via Cloud</span>
                                    </h2>
                                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                        Voltris Optimizer is the only software that allows you to optimize, manage, and monitor your entire PC fleet without needing physical access.
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-[#31A8FF]/20 transition-all">
                                            <div className="w-10 h-10 rounded-lg bg-[#31A8FF]/10 flex items-center justify-center shrink-0">
                                                <BarChart3 className="w-5 h-5 text-[#31A8FF]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1">Cloud-Powered Performance Management</h4>
                                                <p className="text-sm text-slate-400">Monitor and optimize enterprise machines remotely via our web dashboard.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-[#8B31FF]/20 transition-all">
                                            <div className="w-10 h-10 rounded-lg bg-[#8B31FF]/10 flex items-center justify-center shrink-0">
                                                <Lock className="w-5 h-5 text-[#8B31FF]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1">Enterprise Optimization Software</h4>
                                                <p className="text-sm text-slate-400">Innovative technology: complete web-based control without physical access requirements.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-[#FF4B6B]/20 transition-all">
                                            <div className="w-10 h-10 rounded-lg bg-[#FF4B6B]/10 flex items-center justify-center shrink-0">
                                                <Activity className="w-5 h-5 text-[#FF4B6B]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1">Corporate Machine Performance Control</h4>
                                                <p className="text-sm text-slate-400">Reduce IT tickets and boost productivity with proactive optimization.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#31A8FF]/20 to-[#8B31FF]/20 blur-[80px] rounded-full"></div>
                                    <div className="relative bg-[#0A0A0F] border border-white/5 rounded-3xl p-8">
                                        <h3 className="text-2xl font-bold text-white mb-6">Corporate Benefits</h3>
                                        <div className="space-y-6">
                                            {[
                                                { title: 'IT Cost Reduction', desc: 'Fewer technical calls and longer hardware lifespan' },
                                                { title: 'Increased Productivity', desc: 'Employees with fast and responsive machines' },
                                                { title: 'Centralized Management', desc: 'Control your entire PC fleet via a single panel' },
                                                { title: 'Cutting-Edge Technology', desc: 'Leading cloud-based software with remote optimization control' }
                                            ].map((benefit, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-[#31A8FF]/20 flex items-center justify-center shrink-0 mt-1">
                                                        <CheckCircle2 className="w-4 h-4 text-[#31A8FF]" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-bold text-sm mb-1">{benefit.title}</h4>
                                                        <p className="text-xs text-slate-400">{benefit.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SEO SECTION: FOR COMMON USERS --- */}
                <section className="py-32 relative z-10 bg-[#050510]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4B6B]/10 border border-[#FF4B6B]/20 mb-6">
                                    <Radio className="w-3 h-3 text-[#FF4B6B]" />
                                    <span className="text-xs font-bold text-[#FF4B6B] tracking-widest uppercase">Remote Web Control</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                    Slow PC? <span className="bg-gradient-to-r from-[#FF4B6B] to-[#FF8F6B] text-transparent bg-clip-text">The Ultimate Solution</span>
                                </h2>
                                <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-4">
                                    The software to make your PC faster and optimize your computer automatically. Ideal for home use, home office, and daily browsing.
                                </p>
                                <p className="text-base text-slate-500 max-w-2xl mx-auto">
                                    Execute all optimizations remotely from anywhere in the world through the web dashboard.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                {[
                                    {
                                        IconComponent: Zap,
                                        title: 'Automatic Optimization',
                                        desc: 'Complete one-click system auto-optimization. Speeds up startup, browsing, and app launching.',
                                        iconClass: 'text-[#FF4B6B]',
                                        bgGlow: 'bg-[#FF4B6B]/20'
                                    },
                                    {
                                        IconComponent: Database,
                                        title: 'RAM Optimization',
                                        desc: 'Intelligent RAM release that keeps your computer responsive even with multiple programs open.',
                                        iconClass: 'text-[#8B31FF]',
                                        bgGlow: 'bg-[#8B31FF]/20'
                                    },
                                    {
                                        IconComponent: Activity,
                                        title: 'System Cleanup',
                                        desc: 'Removes temporary files, cache, and system junk to free up space and improve performance.',
                                        iconClass: 'text-[#31A8FF]',
                                        bgGlow: 'bg-[#31A8FF]/20'
                                    },
                                    {
                                        IconComponent: Wifi,
                                        title: 'Network Optimization',
                                        desc: 'TCP/IP adjustments to reduce latency, ping, and improve connection speed in online games.',
                                        iconClass: 'text-[#00E5FF]',
                                        bgGlow: 'bg-[#00E5FF]/20'
                                    },
                                    {
                                        IconComponent: Brain,
                                        title: 'Intelligent Gamer Mode',
                                        desc: 'Adaptive AI that prioritizes resources for games, disables unnecessary processes, and maximizes FPS automatically.',
                                        iconClass: 'text-[#FFD700]',
                                        bgGlow: 'bg-[#FFD700]/20'
                                    },
                                    {
                                        IconComponent: ShieldCheck,
                                        title: 'Restore Point',
                                        desc: 'Creates automatic system backup before optimizations to ensure total security.',
                                        iconClass: 'text-[#00FF94]',
                                        bgGlow: 'bg-[#00FF94]/20'
                                    },
                                    {
                                        IconComponent: Gauge,
                                        title: 'Power Plan',
                                        desc: 'Configures a high-performance profile to extract maximum power from your hardware.',
                                        iconClass: 'text-[#FF6B9D]',
                                        bgGlow: 'bg-[#FF6B9D]/20'
                                    },
                                    {
                                        IconComponent: Cpu,
                                        title: 'System Analysis',
                                        desc: 'Complete PC diagnostic identifying bottlenecks and performance issues.',
                                        iconClass: 'text-[#9B59B6]',
                                        bgGlow: 'bg-[#9B59B6]/20'
                                    },
                                    {
                                        IconComponent: Layers,
                                        title: 'System Repair',
                                        desc: 'Fixes Windows errors, corrupted files, and stability issues.',
                                        iconClass: 'text-[#3498DB]',
                                        bgGlow: 'bg-[#3498DB]/20'
                                    }
                                ].map((item, i) => {
                                    const Icon = item.IconComponent;
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ y: -8, scale: 1.02 }}
                                            className="relative bg-[#0A0A0F] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group overflow-hidden"
                                        >
                                            {/* Glow Effect on Hover */}
                                            <div className={`absolute -inset-1 ${item.bgGlow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                                            {/* Content */}
                                            <div className="relative z-10">
                                                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                                                    <Icon className={`w-7 h-7 ${item.iconClass} group-hover:scale-110 transition-transform duration-300`} />
                                                </div>
                                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">{item.title}</h3>
                                                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{item.desc}</p>
                                            </div>

                                            {/* Remote Badge */}
                                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md border border-white/20">
                                                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Remote</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="bg-gradient-to-r from-[#0A0A0F] to-[#0E0E14] border border-white/5 rounded-2xl p-8 lg:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-4">Windows Performance Improvement Software</h3>
                                        <p className="text-slate-400 leading-relaxed mb-6">
                                            VOLTRIS OPTIMIZER is the complete solution for those looking to <strong className="text-white">optimize their computer automatically</strong> without complications. Our technology identifies and resolves slowdowns, freezes, and high resource consumption issues.
                                        </p>
                                        <p className="text-slate-400 leading-relaxed">
                                            Unlike other programs, we don't just clean temporary files - we reconfigure Windows engineering to extract maximum performance from your hardware, whether it's new or old.
                                        </p>
                                    </div>
                                    <div className="bg-[#0A0A0F] border border-white/5 rounded-xl p-6">
                                        <h4 className="text-lg font-bold text-white mb-4">Issues We Resolve:</h4>
                                        <ul className="space-y-3">
                                            {[
                                                'Slow PC startup',
                                                'Constant crashes and freezes',
                                                'High RAM usage',
                                                'Programs taking too long to open',
                                                'Slow and lagging browser',
                                                'Heavy and bloated operating system'
                                            ].map((problem, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                                        <Check className="w-3 h-3 text-green-500" />
                                                    </div>
                                                    {problem}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SEO SECTION: TECHNOLOGY AND INNOVATION --- */}
                <section className="py-32 relative z-10 bg-[#08080C]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                World-Class <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">Performance Innovation</span>
                            </h2>
                            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                                We were the first to integrate <strong className="text-white">Kernel Management</strong> with the convenience of <strong className="text-white">Modern Cloud</strong> technology.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { icon: <Radio className="w-6 h-6" />, title: 'Remote Web Control', desc: 'Execute optimizations from anywhere in the world through the online dashboard' },
                                    { icon: <Brain className="w-6 h-6" />, title: 'Cloud Technology', desc: 'Cloud-based platform with automatic updates and artificial intelligence' },
                                    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Professional Solution', desc: 'Developed with enterprise standards for home and corporate use' },
                                    { icon: <Zap className="w-6 h-6" />, title: 'Global Innovation', desc: 'Leading-edge technology for remote optimization and system control' }
                                ].map((feature, i) => (
                                    <div key={i} className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-6 hover:border-[#31A8FF]/30 transition-all group">
                                        <div className="w-12 h-12 rounded-xl bg-[#31A8FF]/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                                            <div className="text-[#31A8FF]">{feature.icon}</div>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- TESTIMONIALS (SOCIAL PROOF) --- */}
                <section className="py-24 relative z-10 border-t border-white/5 bg-[#050510]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white mb-4">Elite Users. Real Results.</h2>
                            <p className="text-slate-400">Join thousands of gamers and companies that have already unlocked their hardware performance.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Charles Miller", role: "Competitive Gamer", text: "My FPS in Valorant doubled. The frame-time stability is what impresses me the most.", color: "bg-[#FF4B6B]" },
                                { name: "Ann Coast", role: "UX Designer", text: "My Adobe workflow became much more fluid. The PC no longer stutters during heavy renders.", color: "bg-[#8B31FF]" },
                                { name: "Peter Santos", role: "DevOps Engineer", text: "Remote web control is brilliant for managing my team's machines.", color: "bg-[#31A8FF]" }
                            ].map((t, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group">
                                    <div className="flex items-center gap-1 mb-4 text-yellow-500">
                                        {[1, 2, 3, 4, 5].map(s => <Check key={s} className="w-3 h-3 fill-current" />)}
                                    </div>
                                    <p className="text-slate-300 italic mb-6">"{t.text}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold text-white`}>{t.name[0]}</div>
                                        <div>
                                            <div className="text-sm font-bold text-white">{t.name}</div>
                                            <div className="text-[10px] text-slate-500 uppercase tracking-widest">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- FAQ SECTION --- */}
                <section className="py-24 relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white text-center mb-12 tracking-tight">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <FAQItem
                            onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                            isOpen={openFaqIndex === 0}
                            question="Does Voltris Optimizer work for office PCs?"
                            answer="Yes. Companies use Voltris to revitalize machine fleets, avoiding premature purchases of new hardware. It speeds up boot times, spreadsheet opening, and overall navigation."
                        />
                        <FAQItem
                            onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                            isOpen={openFaqIndex === 1}
                            question="Is it safe? Is there a risk of needing to reformat?"
                            answer="Totally safe. Our optimizations are reversible, and we create automatic restore points. We don't reformat the machine; we just adjust the system for maximum efficiency."
                        />
                        <FAQItem
                            onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                            isOpen={openFaqIndex === 2}
                            question="Does it work on low-end PCs?"
                            answer="Yes! PCs with limited hardware benefit the most. By disabling useless Windows services, we free up RAM and CPU for what actually matters."
                        />
                        <FAQItem
                            onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                            isOpen={openFaqIndex === 3}
                            question="What's the difference between this and CCleaner?"
                            answer="CCleaner cleans temporary files. Voltris reconfigures Windows engineering (Services, Threads, Network, Power) for performance. They are different categories of software."
                        />
                        <FAQItem
                            onClick={() => setOpenFaqIndex(openFaqIndex === 4 ? null : 4)}
                            isOpen={openFaqIndex === 4}
                            question="How does remote web control work?"
                            answer="After installing the software, you can access our web panel from anywhere and execute optimizations remotely. It's the first cloud-based technology with this feature, ideal for companies and users managing multiple computers."
                        />
                        <FAQItem
                            onClick={() => setOpenFaqIndex(openFaqIndex === 5 ? null : 5)}
                            isOpen={openFaqIndex === 5}
                            question="Does it work for increasing FPS in games?"
                            answer="Yes! Voltris Optimizer is widely used by gamers and streamers to increase FPS, reduce input lag, and eliminate stuttering in competitive games like Valorant, CS2, League of Legends, and Fortnite. Our technology optimizes the system specifically for gaming."
                        />
                    </div>
                </section>

                {/* --- FINAL CTA --- */}
                <section className="py-40 px-4 text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#FF4B6B]/5 via-[#8B31FF]/10 to-[#31A8FF]/5 blur-[120px] rounded-[100%] -z-10 pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                            YOUR POTENTIAL. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B31FF] to-[#31A8FF] drop-shadow-lg">UNLOCKED.</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
                            Professional performance at the reach of one click.<br />
                            The standard choice for those who value time and efficiency.
                        </p>

                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs text-slate-500 font-medium">Current Version:</span>
                                <span className="px-2.5 py-1 bg-gradient-to-r from-[#31A8FF]/10 to-[#8B31FF]/10 border border-[#31A8FF]/20 rounded-md text-xs font-bold text-[#31A8FF]">
                                    v1.8
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-2 w-full max-w-sm">
                                <a
                                    href="https://github.com/DougFHansen/Download-Voltris-Optimizer/releases/download/v1.0.1.5/VoltrisOptimizerInstaller.exe"
                                    onClick={() => notifyDownload('Voltris Optimizer Installer (x64) - Bottom CTA')}
                                    className="inline-flex items-center gap-4 w-full justify-center px-12 py-6 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-black text-xl rounded-2xl hover:scale-105 hover:shadow-[0_0_80px_rgba(139,49,255,0.4)] transition-all duration-300"
                                >
                                    <Download className="w-6 h-6" />
                                    DOWNLOAD!
                                </a>
                                <a
                                    href="https://github.com/DougFHansen/Download-Voltris-Optimizer/releases/download/v1.0.1.5/VoltrisOptimizerInstaller.exe"
                                    onClick={() => notifyDownload('Voltris Optimizer Installer (x86) - Bottom CTA')}
                                    className="text-sm text-slate-500 hover:text-[#31A8FF] transition-colors font-medium border-b border-transparent hover:border-[#31A8FF]"
                                >
                                    For Windows x86 systems
                                </a>
                            </div>
                        </div>
                        <div className="mt-6">
                            <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Compatible with Windows 10 & 11</span>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>

            <SoftwareApplicationSchema
                name="VOLTRIS OPTIMIZER"
                description="VOLTRIS OPTIMIZER: Professional PC optimization software. Increase FPS by up to 25%, eliminate stutter and lag, automatic optimization for 100+ games, input lag reduction by up to 40%. Cloud-based solution with remote control for gamers, businesses, and home use. Instant setup, cutting-edge technology."
                url="https://www.voltrisoptimizer.com/voltrisoptimizer"
                applicationCategory="GameApplication"
                operatingSystem="Windows"
                offers={{
                    price: "0",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock"
                }}
                features={[
                    "In-game FPS Boost",
                    "Stutter and Lag Elimination",
                    "Automatic Optimization for 100+ Games",
                    "Input Lag Reduction",
                    "Remote Web Control",
                    "Streamer Optimization",
                    "Enterprise Optimization"
                ]}
                softwareVersion="1.8"
                datePublished="2024-01-01"
            />
        </>
    );
}
