'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  FaFileContract, FaCheckCircle, FaTools, FaUserShield, FaCreditCard, FaCopyright,
  FaExclamationTriangle, FaPowerOff, FaBalanceScale, FaSyncAlt, FaEnvelope, FaLaptopCode,
  FaCode, FaLightbulb, FaDatabase, FaDownload, FaCogs, FaCheck, FaKey, FaBan, FaUserLock,
  FaMoneyBillWave, FaTag, FaShieldAlt, FaFileInvoice, FaUndo, FaSearch, FaClock,
  FaPercentage, FaCalculator, FaCopy, FaEdit, FaShareAlt, FaTimesCircle, FaPauseCircle,
  FaUsers, FaLaptop, FaGavel, FaUserTimes, FaUserCog, FaMapMarkerAlt, FaHandshake, FaPhone
} from 'react-icons/fa';

export default function TermsOfUse() {
  return (
    <>
      <Header />
      <div className="pt-32 pb-20 bg-[#050510] min-h-screen relative overflow-hidden font-sans">
        {/* Background Ambience */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#31A8FF]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#8B31FF]/5 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 hidden md:block"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] flex items-center justify-center shadow-[0_0_40px_rgba(139,49,255,0.3)]">
              <FaFileContract className="text-4xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Terms of Use
            </h1>
            <p className="text-slate-400 font-medium bg-white/5 border border-white/10 rounded-full px-6 py-2 inline-block">
              Last updated: {new Date().toLocaleDateString('en-US')}
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#31A8FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#31A8FF]/10 flex items-center justify-center flex-shrink-0 text-[#31A8FF] group-hover:scale-110 transition-transform">
                   <FaCheckCircle className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">1. Acceptance of Terms</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                By accessing and using Voltris services, you agree to these Terms of Use. If you do not agree with any part of these terms, you should not use our services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#8B31FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#8B31FF]/10 flex items-center justify-center flex-shrink-0 text-[#8B31FF] group-hover:scale-110 transition-transform">
                  <FaTools className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">2. Description of Services</h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  { icon: FaLaptopCode, text: "Remote technical support" },
                  { icon: FaCode, text: "Website creation and maintenance" },
                  { icon: FaLightbulb, text: "Technology consulting" },
                  { icon: FaDatabase, text: "Backup and recovery services" },
                  { icon: FaDownload, text: "Software installation and configuration" },
                  { icon: FaCogs, text: "Other technological services" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                    <item.icon className="text-[#31A8FF] w-5 h-5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#FF4B6B]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF4B6B]/10 flex items-center justify-center flex-shrink-0 text-[#FF4B6B] group-hover:scale-110 transition-transform">
                  <FaUserShield className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">3. Responsibilities</h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  { icon: FaCheck, text: "True and accurate information" },
                  { icon: FaKey, text: "Credential security" },
                  { icon: FaBan, text: "Legal use of services" },
                  { icon: FaExclamationTriangle, text: "Non-interference in the system" },
                  { icon: FaCopyright, text: "Respect for intellectual property" },
                  { icon: FaUserLock, text: "No sharing of access" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                    <item.icon className="text-[#FF4B6B] w-5 h-5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 4 (Payments) */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#31A8FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#31A8FF]/10 flex items-center justify-center flex-shrink-0 text-[#31A8FF] group-hover:scale-110 transition-transform">
                  <FaCreditCard className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">4. Payments and Refunds</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <h3 className="text-white font-bold mb-4 flex gap-2 items-center"><FaMoneyBillWave className="text-[#00FF94]" /> 4.1 Payments</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex gap-2"><FaTag /> Prices defined on the site</li>
                    <li className="flex gap-2"><FaShieldAlt /> Secure processing</li>
                    <li className="flex gap-2"><FaFileInvoice /> Electronic invoices</li>
                    <li className="flex gap-2"><FaCreditCard /> Credit card, PIX, Boleto, etc.</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <h3 className="text-white font-bold mb-4 flex gap-2 items-center"><FaUndo className="text-[#FF4B6B]" /> 4.2 Refunds</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex gap-2"><FaSearch /> Case-by-case assessment</li>
                    <li className="flex gap-2"><FaClock /> 7-day period</li>
                    <li className="flex gap-2"><FaPercentage /> Partial refunds possible</li>
                    <li className="flex gap-2"><FaCalculator /> Fees may be deducted</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Summarized Sections in Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* 5. Intellectual Property */}
              <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#8B31FF]/30 transition-all duration-500">
                <h2 className="text-xl font-bold text-white mb-4 flex gap-3 items-center"><FaCopyright className="text-[#8B31FF]" /> 5. Intellectual Property</h2>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex gap-2 items-center"><FaBan /> Copying or reproduction prohibited</li>
                  <li className="flex gap-2 items-center"><FaEdit /> Derivative works prohibited</li>
                  <li className="flex gap-2 items-center"><FaShareAlt /> Commercial distribution prohibited</li>
                </ul>
              </section>

              {/* 6. Limitation of Liability */}
              <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#FF4B6B]/30 transition-all duration-500">
                <h2 className="text-xl font-bold text-white mb-4 flex gap-3 items-center"><FaExclamationTriangle className="text-[#FF4B6B]" /> 6. Limitation of Liability</h2>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex gap-2 items-center"><FaTimesCircle /> Indirect damages</li>
                  <li className="flex gap-2 items-center"><FaDatabase /> Data loss</li>
                  <li className="flex gap-2 items-center"><FaPauseCircle /> Service interruption</li>
                </ul>
              </section>

              {/* 7. Termination */}
              <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#31A8FF]/30 transition-all duration-500">
                <h2 className="text-xl font-bold text-white mb-4 flex gap-3 items-center"><FaPowerOff className="text-[#31A8FF]" /> 7. Termination</h2>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex gap-2 items-center"><FaGavel /> Due to violation of terms</li>
                  <li className="flex gap-2 items-center"><FaUserTimes /> By user request</li>
                </ul>
              </section>

              {/* 8. General Provisions */}
              <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#8B31FF]/30 transition-all duration-500">
                <h2 className="text-xl font-bold text-white mb-4 flex gap-3 items-center"><FaBalanceScale className="text-[#8B31FF]" /> 8. General Provisions</h2>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex gap-2 items-center"><FaGavel /> Laws of Brazil</li>
                  <li className="flex gap-2 items-center"><FaMapMarkerAlt /> Global Remote Service</li>
                  <li className="flex gap-2 items-center"><FaHandshake /> Tolerance is not a waiver</li>
                </ul>
              </section>
            </div>

            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 text-center mt-8">
              <h2 className="text-xl font-bold text-white mb-2 flex justify-center gap-3 items-center"><FaEnvelope /> Contact</h2>
              <p className="text-slate-300 text-sm">contact@voltrisoptimizer.com • +55 (11) 99671-6235</p>
              <div className="mt-4 pt-4 border-t border-white/5 mx-auto max-w-xs">
                <p className="text-xs text-slate-500"><FaSyncAlt className="inline mr-1" /> Terms subject to change.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}