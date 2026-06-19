'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { 
  FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, 
  FiEdit3, FiSave, FiX, FiShield, FiLock, 
  FiCpu, FiCheckCircle, FiActivity
} from 'react-icons/fi';
import { Globe, ArrowRight, Loader2 as LucideLoader2 } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import { useAuth } from '@/app/hooks/useAuth';
import AuthGuard from '@/components/AuthGuard';
import { useDashboard } from '@/app/context/DashboardContext';
import { COUNTRIES, DIAL_CODES } from '@/utils/countries';

interface Profile {
  id: string;
  email: string;
  full_name?: string;
  login?: string;
  country?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  cep?: string;
  created_at: string;
  updated_at: string;
}

export default function ProfileClient() {
  const { transparencyMode } = useDashboard();
  const { user } = useAuth();
  const searchParams = useSearchParams();
  
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const isCompletar = searchParams?.get('completar') === '1';
  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState({
    full_name: '',
    login: '',
    country: 'Brazil',
    phone: '',
    address: '',
    city: '',
    state: '',
    cep: ''
  });

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isCepLoading, setIsCepLoading] = useState(false);
  const [isCepValid, setIsCepValid] = useState(false);

  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) throw error;
        setProfile(data);
        setFormData({
          full_name: data.full_name || '',
          login: data.login || '',
          country: data.country || 'Brazil',
          phone: data.phone || '',
          address: data.address || '',
          city: data.city || '',
          state: data.state || '',
          cep: data.cep || ''
        });

        if (data.country === 'Brazil' && data.cep && data.city && data.state) {
            setIsCepValid(true);
        } else if (data.country && data.country !== 'Brazil') {
            setIsCepValid(true);
        }

      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user, supabase]);

  useEffect(() => {
    if (isCompletar && !loading) {
        setIsEditing(true);
    }
  }, [isCompletar, loading]);

  const formatPhone = (v: string, c: string) => { 
    if (c !== 'Brazil') return v;
    const n = v.replace(/\D/g, ''); return n.length <= 11 ? n.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3') : v; 
  };

  const formatCEP = (v: string, c: string) => { 
    if (c !== 'Brazil') return v;
    const n = v.replace(/\D/g, ''); return n.length <= 8 ? n.replace(/(\d{5})(\d{3})/, '$1-$2') : v; 
  };

  const handleCepChange = async (v: string) => {
    const formattedCep = formatCEP(v, formData.country);
    setFormData(prev => ({ ...prev, cep: formattedCep }));

    if (formData.country !== 'Brazil') {
      setIsCepValid(true);
      return;
    }

    const cleanCep = formattedCep.replace(/\D/g, '');
    if (cleanCep.length === 8) {
      setIsCepLoading(true);
      setIsCepValid(false);
      
      try {
        const response = await fetch('/api/v1/auth/validate-cep', {
          method: 'POST',
          body: JSON.stringify({ cep: cleanCep }),
          headers: { 'Content-Type': 'application/json' }
        });
        const resData = await response.json();
        
        if (!resData.valid) {
          toast.error("This ZIP Code does not exist.");
          setFormData(prev => ({ ...prev, city: '', state: '', address: '' }));
          setIsCepValid(false);
        } else {
          const { street, neighborhood, city, state } = resData.data;
          setFormData(prev => ({ 
             ...prev, 
             city: city || '', 
             state: state || '', 
             address: `${street || ''}${neighborhood ? `, ${neighborhood}` : ''}` 
          }));
          setIsCepValid(true);
        }
      } catch (err) {
        toast.error("Network error when validating ZIP code.");
        setIsCepValid(false);
      } finally {
        setIsCepLoading(false);
      }
    } else {
      setIsCepValid(false);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    
    if (!formData.login || !formData.phone || !formData.city || !formData.address) {
        return toast.error("Please fill in all the required fields.", { icon: '⚠️' });
    }
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          ...formData,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;

      toast.success('Profile updated!', {
        icon: '✅',
        style: { background: 'rgba(10, 10, 15, 0.9)', color: '#fff', border: '1px solid rgba(49, 168, 255, 0.2)' }
      });
      setIsEditing(false);
      
      if (isCompletar) {
        window.history.replaceState({}, '', '/dashboard/profile');
      }
      
      const { data: updatedData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      setProfile(updatedData);
    } catch (error: any) {
      toast.error(error.message || 'Error saving profile');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-6">
        <div className="w-16 h-16 border-t-4 border-r-4 border-[#8B31FF] rounded-full animate-spin"></div>
        <p className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px] animate-pulse">Synchronizing User Identity...</p>
      </div>
    );
  }

  return (
    <AuthGuard>
      <div className="flex flex-col gap-10">
        
        {/* Profile Identity Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`relative p-10 rounded-[3.5rem] border overflow-hidden ${transparencyMode ? 'voltris-glass' : 'bg-[#0A0A10] border-white/5 shadow-3xl'}`}
        >
          <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-[#8B31FF]/5 blur-[150px] rounded-full"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
             <div className="relative group">
                <div className="w-40 h-40 rounded-[3rem] bg-gradient-to-br from-[#8B31FF] via-[#31A8FF] to-[#FF4B6B] p-[2px] shadow-2xl transition-transform duration-500 group-hover:scale-105">
                   <div className="w-full h-full rounded-[2.85rem] bg-[#0A0A10] flex items-center justify-center overflow-hidden">
                      <FiUser className="w-16 h-16 text-white/20 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                   </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl bg-[#00FF88] flex items-center justify-center shadow-lg border-4 border-[#0A0A10]">
                   <FiCheckCircle className="w-6 h-6 text-black" />
                </div>
             </div>

             <div className="flex-1 space-y-4">
                <div className="space-y-1">
                   <div className="flex items-center gap-3 justify-center md:justify-start">
                      <h1 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-tight break-words">{profile?.full_name || 'Optimization Agent'}</h1>
                   </div>
                   <p className="text-[#31A8FF] font-bold text-sm uppercase tracking-widest">@{profile?.login || 'username'}</p>
                   <p className="text-white/40 font-bold text-xs uppercase tracking-widest">{user?.email}</p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                   <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                      <Globe className="w-4 h-4 text-[#FF4B6B]" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">{profile?.country || 'Global'}</span>
                   </div>
                   <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                      <FiCpu className="w-4 h-4 text-[#31A8FF]" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">ID: {user?.id.slice(0, 8).toUpperCase()}</span>
                   </div>
                   <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                      <FiActivity className="w-4 h-4 text-[#00FF88]" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">Status: Active</span>
                   </div>
                </div>
             </div>

             {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-8 py-4 bg-white text-black font-black uppercase italic tracking-widest rounded-2xl hover:scale-105 transition-all shadow-3xl text-sm"
                >
                  Edit Profile
                </button>
             )}
          </div>
        </motion.div>

        {/* Form Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Detailed Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-10 rounded-[3.5rem] border ${transparencyMode ? 'voltris-glass' : 'bg-[#12121A] border-white/5'}`}
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="p-3 bg-[#31A8FF]/10 text-[#31A8FF] rounded-2xl">
                 <FiUser className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-black text-white italic uppercase tracking-tighter leading-none">Personal <span className="text-[#31A8FF]">Data</span></h3>
            </div>

            <div className="space-y-8">
               <div className="space-y-3">
                 <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] font-mono">Authentication Email</label>
                 <div className="p-5 rounded-2xl bg-black/40 border border-white/5 text-white/40 italic font-bold">
                    {user?.email}
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-6">
                 <div className="space-y-3">
                   <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] font-mono">Operational Name</label>
                   {isEditing ? (
                      <input
                        type="text"
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        className="w-full p-5 rounded-2xl bg-black/60 border border-[#31A8FF]/20 text-white focus:border-[#31A8FF] outline-none transition-all placeholder:text-white/10"
                        placeholder="Full Name"
                      />
                   ) : (
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-white font-bold">
                        {profile?.full_name || 'Pending'}
                      </div>
                   )}
                 </div>
                 <div className="space-y-3">
                   <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] font-mono">Username</label>
                   {isEditing ? (
                      <input
                        type="text"
                        value={formData.login}
                        onChange={(e) => setFormData({ ...formData, login: e.target.value })}
                        className="w-full p-5 rounded-2xl bg-black/60 border border-[#31A8FF]/20 text-white focus:border-[#31A8FF] outline-none transition-all placeholder:text-white/10"
                        placeholder="Username"
                      />
                   ) : (
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-white font-bold truncate">
                        {profile?.login || 'Pending'}
                      </div>
                   )}
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-6">
                 <div className="space-y-3">
                   <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] font-mono">Country</label>
                   {isEditing ? (
                      <div className="relative">
                        <div 
                          onClick={() => setIsCountryOpen(!isCountryOpen)}
                          className="w-full p-5 rounded-2xl bg-black/60 border border-[#31A8FF]/20 text-white focus-within:border-[#31A8FF] outline-none transition-all flex items-center justify-between cursor-pointer"
                        >
                          <span className="text-white text-sm">{formData.country}</span>
                          <ArrowRight className={`w-4 h-4 text-slate-500 transition-transform ${isCountryOpen ? 'rotate-90' : ''}`} />
                        </div>
                        <AnimatePresence>
                          {isCountryOpen && (
                            <motion.div 
                              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                              className="absolute top-full left-0 right-0 mt-2 bg-[#121218] border border-[#31A8FF]/20 rounded-xl shadow-2xl overflow-hidden z-50 max-h-[250px] overflow-y-auto custom-scrollbar"
                            >
                              {COUNTRIES.map(c => (
                                <div 
                                  key={c}
                                  onClick={() => { setFormData({...formData, country: c}); setIsCountryOpen(false); }}
                                  className={`px-4 py-3 text-sm cursor-pointer hover:bg-[#31A8FF]/20 transition-colors ${formData.country === c ? 'bg-[#31A8FF]/10 text-[#31A8FF] font-bold' : 'text-slate-300'}`}
                                >
                                  {c}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                   ) : (
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-white font-bold truncate">
                        {profile?.country || 'Global'}
                      </div>
                   )}
                 </div>

                 <div className="space-y-3">
                   <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] font-mono">Secure Line</label>
                   {isEditing ? (
                      <div className="flex items-center w-full p-5 rounded-2xl bg-black/60 border border-[#31A8FF]/20 text-white focus-within:border-[#31A8FF] transition-all">
                        <span className="text-white/60 font-medium text-sm mr-2 border-r border-white/10 pr-2 whitespace-nowrap">
                          {DIAL_CODES[formData.country] || '+'}
                        </span>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value, formData.country) })}
                          className="bg-transparent w-full text-white outline-none placeholder:text-white/10"
                          placeholder={formData.country === 'Brazil' ? "(11) 99999-9999" : "Phone"}
                        />
                      </div>
                   ) : (
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-white font-bold truncate">
                        {profile?.phone || 'Pending'}
                      </div>
                   )}
                 </div>
               </div>

            </div>
          </motion.div>

          {/* Secure Location Link */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-10 rounded-[3.5rem] border ${transparencyMode ? 'voltris-glass' : 'bg-[#12121A] border-white/5'}`}
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="p-3 bg-[#8B31FF]/10 text-[#8B31FF] rounded-2xl">
                 <FiMapPin className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-black text-white italic uppercase tracking-tighter leading-none">Geographic <span className="text-[#8B31FF]">Link</span></h3>
            </div>

            <div className="space-y-8">
               <div className="space-y-3">
                 <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] font-mono">System Zip Code</label>
                 {isEditing ? (
                    <div className="flex items-center w-full p-5 rounded-2xl bg-black/60 border border-[#8B31FF]/20 text-white focus-within:border-[#8B31FF] transition-all relative">
                      <input
                        type="text"
                        value={formData.cep}
                        onChange={(e) => handleCepChange(e.target.value)}
                        className="bg-transparent w-full text-white outline-none placeholder:text-white/10"
                        placeholder="ZIP Code"
                      />
                      {isCepLoading && <LucideLoader2 className="absolute right-5 w-4 h-4 text-[#8B31FF] animate-spin" />}
                    </div>
                 ) : (
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-white font-bold">
                      {profile?.cep || 'Pending'}
                    </div>
                 )}
                 {(isEditing && formData.country === 'Brazil' && isCepValid) && (
                   <button 
                     type="button"
                     onClick={() => { setFormData(p => ({...p, cep: '', city: '', state: '', address: ''})); setIsCepValid(false); }}
                     className="text-[10px] text-[#FF4B6B] font-bold uppercase tracking-widest hover:underline mt-1 block"
                   >
                     Fix ZIP Code / Enter Manually
                   </button>
                 )}
               </div>

               <div className="grid grid-cols-2 gap-6">
                 <div className="space-y-3">
                   <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] font-mono">City / District</label>
                   {isEditing ? (
                      <input
                        type="text"
                        value={formData.city}
                        readOnly={formData.country === 'Brazil' && isCepValid}
                        onChange={(e) => (!(formData.country === 'Brazil' && isCepValid)) && setFormData({ ...formData, city: e.target.value })}
                        className={`w-full p-5 rounded-2xl bg-black/60 border border-[#8B31FF]/20 text-white focus:border-[#8B31FF] outline-none transition-all placeholder:text-white/10 ${(formData.country === 'Brazil' && isCepValid) ? 'opacity-30 cursor-not-allowed select-none' : ''}`}
                      />
                   ) : (
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-white font-bold truncate">
                        {profile?.city || 'PD'}
                      </div>
                   )}
                 </div>
                 <div className="space-y-3">
                   <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] font-mono">State Code</label>
                   {isEditing ? (
                      <input
                        type="text"
                        value={formData.state}
                        readOnly={formData.country === 'Brazil' && isCepValid}
                        onChange={(e) => (!(formData.country === 'Brazil' && isCepValid)) && setFormData({ ...formData, state: formData.country === 'Brazil' ? e.target.value.toUpperCase() : e.target.value })}
                        className={`w-full p-5 rounded-2xl bg-black/60 border border-[#8B31FF]/20 text-white focus:border-[#8B31FF] outline-none transition-all placeholder:text-white/10 ${(formData.country === 'Brazil' && isCepValid) ? 'opacity-30 cursor-not-allowed select-none' : ''}`}
                      />
                   ) : (
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-white font-bold truncate">
                        {profile?.state || 'PD'}
                      </div>
                   )}
                 </div>
               </div>

               <div className="space-y-3">
                 <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] font-mono">Base Address</label>
                 {isEditing ? (
                    <input
                      type="text"
                      value={formData.address}
                      readOnly={formData.country === 'Brazil' && isCepValid}
                      onChange={(e) => (!(formData.country === 'Brazil' && isCepValid)) && setFormData({ ...formData, address: e.target.value })}
                      className={`w-full p-5 rounded-2xl bg-black/60 border border-[#8B31FF]/20 text-white focus:border-[#8B31FF] outline-none transition-all placeholder:text-white/10 ${(formData.country === 'Brazil' && isCepValid) ? 'opacity-30 cursor-not-allowed select-none' : ''}`}
                      placeholder="Street, Number, Neighborhood"
                    />
                 ) : (
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-white font-bold truncate">
                      {profile?.address || 'Pending'}
                    </div>
                 )}
               </div>

            </div>
          </motion.div>
        </div>

        {/* Footer Actions */}
        <AnimatePresence>
          {isEditing && (
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 50 }}
               className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[150] w-[90%] max-w-2xl"
             >
                <div className="bg-[#0A0A10]/90 backdrop-blur-2xl border border-white/10 p-6 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex items-center justify-between gap-6">
                   <div className="flex flex-col">
                      <span className="text-xs font-black text-white italic uppercase tracking-tighter">Edit Mode</span>
                      <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">You have unsaved changes</span>
                   </div>
                   <div className="flex gap-4">
                      <button 
                        onClick={() => { setIsEditing(false); }} 
                        className="px-6 py-3 rounded-xl bg-white/5 text-white/60 font-black uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all"
                      >
                        Discard Changes
                      </button>
                      <button 
                        onClick={handleSave} 
                        disabled={saving}
                        className="px-8 py-3 rounded-xl bg-[#00FF88] text-black font-black uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#00FF88]/20 disabled:grayscale"
                      >
                        {saving ? 'Saving System...' : 'Sync Identity'}
                      </button>
                   </div>
                </div>
             </motion.div>
          )}
        </AnimatePresence>

      </div>
    </AuthGuard>
  );
}