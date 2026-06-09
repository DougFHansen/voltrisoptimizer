'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  FaShieldAlt, FaInfoCircle, FaUserShield, FaEye, FaEdit, FaTrashAlt, FaUserSecret,
  FaExchangeAlt, FaUndo, FaGavel, FaCheckCircle, FaFileContract, FaBuilding, FaSearch,
  FaHandshake, FaLock, FaKey, FaUserLock, FaSave, FaGraduationCap, FaExclamationTriangle,
  FaMoneyBillWave, FaBan, FaExclamationCircle, FaEnvelope, FaPhone, FaMapMarkerAlt
} from 'react-icons/fa';

export default function LGPD() {
  return (
    <>
      <Header />
      <div className="pt-32 pb-20 bg-[#050510] min-h-screen relative overflow-hidden font-sans">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF4B6B]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B31FF]/5 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 hidden md:block"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] flex items-center justify-center shadow-[0_0_40px_rgba(255,75,107,0.3)]">
              <FaShieldAlt className="text-4xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              LGPD
            </h1>
            <p className="text-slate-400 font-medium bg-white/5 border border-white/10 rounded-full px-6 py-2 inline-block">
              Law No. 13.709/2018 • Updated: {new Date().toLocaleDateString('en-US')}
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#FF4B6B]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF4B6B]/10 flex items-center justify-center flex-shrink-0 text-[#FF4B6B] group-hover:scale-110 transition-transform">
                  <FaInfoCircle className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">1. What is LGPD?</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                The General Data Protection Law (LGPD) is the Brazilian legislation that regulates personal data processing activities. It was created to protect the fundamental rights of freedom and privacy of citizens, establishing clear rules.
              </p>
            </section>

            {/* Section 2 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#8B31FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#8B31FF]/10 flex items-center justify-center flex-shrink-0 text-[#8B31FF] group-hover:scale-110 transition-transform">
                  <FaUserShield className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">2. Rights of the Holder</h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  { icon: FaEye, text: "Confirmation of processing" },
                  { icon: FaEdit, text: "Access to data" },
                  { icon: FaTrashAlt, text: "Correction of data" },
                  { icon: FaUserSecret, text: "Anonymization or blocking" },
                  { icon: FaExchangeAlt, text: "Data portability" },
                  { icon: FaInfoCircle, text: "Information about sharing" },
                  { icon: FaUndo, text: "Consent revocation" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                    <item.icon className="text-[#FF4B6B] w-5 h-5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#31A8FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#31A8FF]/10 flex items-center justify-center flex-shrink-0 text-[#31A8FF] group-hover:scale-110 transition-transform">
                  <FaGavel className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">3. Legal Bases</h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  { icon: FaCheckCircle, text: "Consent of the holder" },
                  { icon: FaFileContract, text: "Fulfillment of legal obligation" },
                  { icon: FaBuilding, text: "Public policies" },
                  { icon: FaSearch, text: "Research studies" },
                  { icon: FaShieldAlt, text: "Regular exercise of rights" },
                  { icon: FaHandshake, text: "Credit protection" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                    <item.icon className="text-[#8B31FF] w-5 h-5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 4 and 5 Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* 4. Security */}
              <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#FF4B6B]/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FF4B6B]/10 flex items-center justify-center text-[#FF4B6B]">
                    <FaLock className="text-xl" />
                  </div>
                  <h2 className="text-xl font-bold text-white">4. Security</h2>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex gap-2 items-center"><FaKey className="text-[#FF4B6B]" /> Encryption</li>
                  <li className="flex gap-2 items-center"><FaUserLock className="text-[#FF4B6B]" /> Access control</li>
                  <li className="flex gap-2 items-center"><FaEye className="text-[#FF4B6B]" /> Monitoring</li>
                  <li className="flex gap-2 items-center"><FaSave className="text-[#FF4B6B]" /> Regular backup</li>
                </ul>
              </section>

              {/* 5. Sanctions */}
              <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#31A8FF]/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#31A8FF]/10 flex items-center justify-center text-[#31A8FF]">
                    <FaExclamationTriangle className="text-xl" />
                  </div>
                  <h2 className="text-xl font-bold text-white">5. Sanctions</h2>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex gap-2 items-center"><FaMoneyBillWave className="text-[#31A8FF]" /> Fines</li>
                  <li className="flex gap-2 items-center"><FaBan className="text-[#31A8FF]" /> Suspension</li>
                  <li className="flex gap-2 items-center"><FaGavel className="text-[#31A8FF]" /> Partial prohibition</li>
                </ul>
              </section>
            </div>

            {/* 6. Contact */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 text-center mt-8">
              <h2 className="text-xl font-bold text-white mb-6 flex justify-center gap-3 items-center">
                <FaEnvelope className="text-[#8B31FF]" /> Data Protection Officer (DPO)
              </h2>
              <div className="flex flex-col md:flex-row justify-center gap-6 text-slate-300">
                <div className="flex items-center justify-center gap-2">
                  <FaEnvelope className="text-[#8B31FF]" />
                  <span>contato@voltrisoptimizer.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaPhone className="text-[#8B31FF]" />
                  <span>+55 (11) 99671-6235</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}