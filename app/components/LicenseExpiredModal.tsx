'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiAlertCircle, FiShoppingCart } from 'react-icons/fi';

interface LicenseExpiredModalProps {
    isOpen: boolean;
    onClose: () => void;
    trialDaysRemaining?: number;
    reason: 'trial_expired' | 'no_license' | 'license_expired';
}

export default function LicenseExpiredModal({ 
    isOpen, 
    onClose, 
    trialDaysRemaining = 0,
    reason 
}: LicenseExpiredModalProps) {
    
    const getMessage = () => {
        switch (reason) {
            case 'trial_expired':
                return {
                    title: 'Trial Period Expired',
                    description: 'Your 7-day trial period has ended. To continue using remote commands and all Voltris Optimizer features, you need to activate a license.',
                    icon: '⏰'
                };
            case 'license_expired':
                return {
                    title: 'License Expired',
                    description: 'Your license has expired. Renew your license to continue using remote commands and all premium features.',
                    icon: '🔒'
                };
            case 'no_license':
            default:
                return {
                    title: 'License Required',
                    description: 'To use remote commands, you need an active Voltris Optimizer license.',
                    icon: '🔑'
                };
        }
    };

    const message = getMessage();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-gradient-to-br from-[#121218] to-[#0A0A0F] border border-white/10 rounded-3xl p-8 max-w-lg w-full shadow-2xl overflow-hidden"
                    >
                        {/* Background Gradient Effect */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all z-10"
                        >
                            <FiX className="w-5 h-5" />
                        </button>

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center text-4xl">
                                    {message.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-white text-center mb-4">
                                {message.title}
                            </h2>

                            {/* Description */}
                            <p className="text-slate-300 text-center mb-6 leading-relaxed">
                                {message.description}
                            </p>

                            {/* Trial Info (if applicable) */}
                            {reason === 'trial_expired' && (
                                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <FiAlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                        <div className="text-sm text-red-300">
                                            <p className="font-bold mb-1">Trial period ended</p>
                                            <p className="text-red-400/80">
                                                You have used all {7} days of the free trial. Activate a license to continue enjoying all features.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Benefits */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                                <p className="text-xs uppercase font-bold text-slate-400 mb-3">With the license you will get:</p>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">✓</span>
                                        Unlimited remote commands
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">✓</span>
                                        Automatic cloud optimization
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">✓</span>
                                        Full remote control of your PC
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">✓</span>
                                        Priority support
                                    </li>
                                </ul>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://www.voltrisoptimizer.com/pricing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-6 py-4 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-center rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] flex items-center justify-center gap-3"
                                >
                                    <FiShoppingCart className="w-5 h-5" />
                                    Buy License
                                </a>
                                
                                <button
                                    onClick={onClose}
                                    className="px-6 py-3 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
                                >
                                    Close
                                </button>
                            </div>

                            {/* Help Text */}
                            <p className="text-xs text-slate-500 text-center mt-4">
                                Already have a license? Activate it in the app under <span className="text-white font-bold">Settings → License</span>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
