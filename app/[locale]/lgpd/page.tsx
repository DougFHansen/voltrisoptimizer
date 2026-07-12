'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import {
  FaShieldAlt, FaInfoCircle, FaUserShield, FaEye, FaEdit, FaTrashAlt, FaUserSecret,
  FaExchangeAlt, FaUndo, FaGavel, FaCheckCircle, FaFileContract, FaBuilding, FaSearch,
  FaHandshake, FaLock, FaKey, FaUserLock, FaSave, FaGraduationCap, FaExclamationTriangle,
  FaMoneyBillWave, FaBan, FaExclamationCircle, FaEnvelope, FaPhone, FaMapMarkerAlt
} from 'react-icons/fa';

export default function LGPD() {
  const params = useParams();
  const locale = params?.locale || 'en';
  const isPt = locale === 'pt-br';

  return (
    <>
      <Header />
      <div className="pt-32 pb-20 bg-[#050510] min-h-screen relative overflow-hidden font-sans">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#31A8FF]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B31FF]/5 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 hidden md:block"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] flex items-center justify-center shadow-[0_0_40px_rgba(139,49,255,0.3)]">
              <FaShieldAlt className="text-4xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              {isPt ? 'LGPD' : 'LGPD & GDPR Compliance'}
            </h1>
            <p className="text-slate-400 font-medium bg-white/5 border border-white/10 rounded-full px-6 py-2 inline-block">
              {isPt 
                ? `Lei nº 13.709/2018 • Atualizado: ${new Date().toLocaleDateString('pt-BR')}`
                : `General Data Protection Law • Updated: ${new Date().toLocaleDateString('en-US')}`
              }
            </p>
          </div>

          <div className="space-y-8">
            {/* Seção 1 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#31A8FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#31A8FF]/10 flex items-center justify-center flex-shrink-0 text-[#31A8FF] group-hover:scale-110 transition-transform">
                  <FaInfoCircle className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">
                  {isPt ? '1. O que é a LGPD?' : '1. What is the LGPD?'}
                </h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                {isPt 
                  ? 'A Lei Geral de Proteção de Dados (LGPD) é a legislação brasileira que regula as atividades de tratamento de dados pessoais. Ela foi criada para proteger os direitos fundamentais de liberdade e de privacidade dos cidadãos, estabelecendo regras claras.'
                  : 'The General Data Protection Law (LGPD) is the Brazilian legislation that regulates personal data processing activities. It was created to protect the fundamental rights of freedom and privacy of citizens, establishing clear rules for businesses worldwide operating in Brazil.'
                }
              </p>
            </section>

            {/* Seção 2 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#8B31FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#8B31FF]/10 flex items-center justify-center flex-shrink-0 text-[#8B31FF] group-hover:scale-110 transition-transform">
                  <FaUserShield className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">
                  {isPt ? '2. Direitos do Titular' : '2. Data Subject Rights'}
                </h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  { icon: FaEye, textPt: "Confirmação de tratamento", textEn: "Confirmation of processing" },
                  { icon: FaEdit, textPt: "Acesso aos dados", textEn: "Access to data" },
                  { icon: FaTrashAlt, textPt: "Correção de dados", textEn: "Rectification of data" },
                  { icon: FaUserSecret, textPt: "Anonimização ou bloqueio", textEn: "Anonymization or blocking" },
                  { icon: FaExchangeAlt, textPt: "Portabilidade dos dados", textEn: "Data portability" },
                  { icon: FaInfoCircle, textPt: "Informação sobre compartilhamento", textEn: "Information about sharing" },
                  { icon: FaUndo, textPt: "Revogação do consentimento", textEn: "Revocation of consent" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                    <item.icon className="text-[#31A8FF] w-5 h-5 flex-shrink-0" />
                    <span>{isPt ? item.textPt : item.textEn}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Seção 3 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#FF4B6B]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF4B6B]/10 flex items-center justify-center flex-shrink-0 text-[#FF4B6B] group-hover:scale-110 transition-transform">
                  <FaGavel className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">
                  {isPt ? '3. Bases Legais' : '3. Legal Bases'}
                </h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  { icon: FaCheckCircle, textPt: "Consentimento do titular", textEn: "Data subject consent" },
                  { icon: FaFileContract, textPt: "Cumprimento de obrigação legal", textEn: "Compliance with legal obligation" },
                  { icon: FaBuilding, textPt: "Políticas públicas", textEn: "Public policies execution" },
                  { icon: FaSearch, textPt: "Estudos de pesquisa", textEn: "Research study execution" },
                  { icon: FaShieldAlt, textPt: "Exercício regular de direitos", textEn: "Regular exercise of rights" },
                  { icon: FaHandshake, textPt: "Proteção ao crédito", textEn: "Credit protection rights" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                    <item.icon className="text-[#8B31FF] w-5 h-5 flex-shrink-0" />
                    <span>{isPt ? item.textPt : item.textEn}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Seção 4 e 5 Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* 4. Segurança */}
              <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#31A8FF]/30 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#31A8FF]/10 flex items-center justify-center text-[#31A8FF]">
                    <FaLock className="text-xl" />
                  </div>
                  <h2 className="text-xl font-bold text-white m-0">
                    {isPt ? '4. Segurança' : '4. Security Measures'}
                  </h2>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex gap-2 items-center"><FaKey className="text-[#31A8FF]" /> {isPt ? 'Criptografia' : 'Encryption'}</li>
                  <li className="flex gap-2 items-center"><FaUserLock className="text-[#31A8FF]" /> {isPt ? 'Controle de acesso' : 'Access control'}</li>
                  <li className="flex gap-2 items-center"><FaEye className="text-[#31A8FF]" /> {isPt ? 'Monitoramento' : 'Monitoring'}</li>
                  <li className="flex gap-2 items-center"><FaSave className="text-[#31A8FF]" /> {isPt ? 'Backup regular' : 'Regular backup'}</li>
                </ul>
              </section>

              {/* 5. Sanções */}
              <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#FF4B6B]/30 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FF4B6B]/10 flex items-center justify-center text-[#FF4B6B]">
                    <FaExclamationTriangle className="text-xl" />
                  </div>
                  <h2 className="text-xl font-bold text-white m-0">
                    {isPt ? '5. Sanções' : '5. Sanctions'}
                  </h2>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex gap-2 items-center"><FaMoneyBillWave className="text-[#FF4B6B]" /> {isPt ? 'Multas' : 'Administrative fines'}</li>
                  <li className="flex gap-2 items-center"><FaBan className="text-[#FF4B6B]" /> {isPt ? 'Suspensão' : 'Activities suspension'}</li>
                  <li className="flex gap-2 items-center"><FaGavel className="text-[#FF4B6B]" /> {isPt ? 'Proibição parcial' : 'Partial prohibition'}</li>
                </ul>
              </section>
            </div>

            {/* 6. Contato */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 text-center mt-8">
              <h2 className="text-xl font-bold text-white mb-6 flex justify-center gap-3 items-center">
                <FaEnvelope className="text-[#8B31FF]" /> {isPt ? 'Encarregado de Dados (DPO)' : 'Data Protection Officer (DPO)'}
              </h2>
              <div className="flex flex-col md:flex-row justify-center gap-6 text-slate-300">
                <div className="flex items-center justify-center gap-2">
                  <FaEnvelope className="text-[#8B31FF]" />
                  <span>contact@voltrisoptimizer.com</span>
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
