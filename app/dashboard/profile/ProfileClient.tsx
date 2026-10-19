'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';
import VoltrisIcon from '@/components/dashboard/VoltrisIcon';
import VoltrisIconTile, { DASHBOARD_ACCENT } from '@/components/dashboard/VoltrisIconTile';
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

      toast.success('Profile updated successfully!');
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
      <div className="flex flex-col items-center justify-center py-32 gap-3 text-slate-400">
        <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-indigo-500 animate-spin"></div>
        <p className="text-xs font-medium text-slate-400">Loading user data...</p>
      </div>
    );
  }

  const cepLocked = formData.country === 'Brazil' && isCepValid;

  return (
    <AuthGuard>
      <div className="flex flex-col gap-6 w-full max-w-full">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800/80">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">My Profile</h2>
            <p className="text-xs text-slate-400 mt-0.5">Manage credentials, contact information and address</p>
          </div>

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2 active:scale-95"
            >
              <VoltrisIcon name="edit" size={14} />
              <span>Edit Information</span>
            </button>
          ) : (
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsEditing(false)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs hover:bg-slate-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2 disabled:opacity-50"
              >
                <VoltrisIcon name="save" size={14} />
                <span>{saving ? 'Saving...' : 'Save Changes'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Profile Card */}
        <div className={`p-6 sm:p-7 rounded-2xl border ${transparencyMode ? 'voltris-glass' : 'bg-slate-900/60 border-slate-800 shadow-xl'}`}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
             <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-slate-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-500/10">
                  {user?.email?.[0]?.toUpperCase() || 'U'}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-slate-950">
                  <VoltrisIcon name="check" size={14} />
                </div>
             </div>

             <div className="flex-1 space-y-2 min-w-0">
                <div className="space-y-0.5">
                   <h3 className="text-lg font-bold text-white tracking-tight truncate">{profile?.full_name || 'Name not set'}</h3>
                   <p className="text-xs text-slate-400 font-mono truncate">{user?.email}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                   <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-950/60 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-300">
                      <VoltrisIcon name="system" size={12} className="text-indigo-400" />
                      <span>ID: {user?.id.slice(0, 8).toUpperCase()}</span>
                   </div>
                   {profile?.login && (
                     <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-950/60 rounded-lg border border-slate-800 text-[11px] font-mono text-indigo-400">
                        <VoltrisIcon name="person" size={12} />
                        <span className="truncate">@{profile.login}</span>
                     </div>
                   )}
                   <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Active Account</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Form Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Personal Info */}
          <div className={`p-6 rounded-2xl border ${transparencyMode ? 'voltris-glass' : 'bg-slate-900/60 border-slate-800 shadow-xl'} space-y-4`}>
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80">
               <VoltrisIconTile icon="person" accent={DASHBOARD_ACCENT.brand} size={8} />
               <div>
                 <h3 className="text-sm font-bold text-white tracking-tight">Personal Data</h3>
                 <p className="text-[11px] text-slate-500">Registration details and main contact</p>
               </div>
            </div>

            <div className="space-y-4">
               <div className="space-y-1.5">
                 <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Registered Email</label>
                 <div className="px-3.5 py-2.5 rounded-xl bg-slate-950/50 border border-slate-800 text-xs text-slate-400 font-mono">
                    {user?.email}
                 </div>
               </div>

               <div className="space-y-1.5">
                 <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Full Name</label>
                 {isEditing ? (
                    <input
                      type="text"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-indigo-500 outline-none transition-colors"
                      placeholder="Your full name"
                    />
                 ) : (
                    <div className="px-3.5 py-2.5 rounded-xl bg-slate-950/30 border border-slate-800/80 text-xs text-slate-200 font-medium">
                      {profile?.full_name || 'Not provided'}
                    </div>
                 )}
               </div>

               <div className="space-y-1.5">
                 <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Username</label>
                 {isEditing ? (
                    <input
                      type="text"
                      value={formData.login}
                      onChange={(e) => setFormData({ ...formData, login: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-indigo-500 outline-none transition-colors"
                      placeholder="username"
                    />
                 ) : (
                    <div className="px-3.5 py-2.5 rounded-xl bg-slate-950/30 border border-slate-800/80 text-xs text-slate-200 font-medium">
                      {profile?.login || 'Not provided'}
                    </div>
                 )}
               </div>

               <div className="space-y-1.5">
                 <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Country</label>
                 {isEditing ? (
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-indigo-500 outline-none transition-colors cursor-pointer"
                    >
                      {COUNTRIES.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                 ) : (
                    <div className="px-3.5 py-2.5 rounded-xl bg-slate-950/30 border border-slate-800/80 text-xs text-slate-200 font-medium">
                      {profile?.country || 'Global'}
                    </div>
                 )}
               </div>

               <div className="space-y-1.5">
                 <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Phone / WhatsApp</label>
                 {isEditing ? (
                    <div className="flex items-center w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 focus-within:border-indigo-500 transition-colors">
                      <span className="text-slate-400 text-xs mr-2 border-r border-slate-700 pr-2 whitespace-nowrap">
                        {DIAL_CODES[formData.country] || '+'}
                      </span>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value, formData.country) })}
                        className="bg-transparent w-full text-white text-xs outline-none placeholder:text-slate-500"
                        placeholder={formData.country === 'Brazil' ? "(11) 99999-9999" : "Phone number"}
                      />
                    </div>
                 ) : (
                    <div className="px-3.5 py-2.5 rounded-xl bg-slate-950/30 border border-slate-800/80 text-xs text-slate-200 font-medium">
                      {profile?.phone || 'Not provided'}
                    </div>
                 )}
               </div>
            </div>
          </div>

          {/* Location Info */}
          <div className={`p-6 rounded-2xl border ${transparencyMode ? 'voltris-glass' : 'bg-slate-900/60 border-slate-800 shadow-xl'} space-y-4`}>
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80">
                 <VoltrisIconTile icon="mapPin" accent={DASHBOARD_ACCENT.success} size={8} />
               <div>
                 <h3 className="text-sm font-bold text-white tracking-tight">Address &amp; Location</h3>
                 <p className="text-[11px] text-slate-500">Data used for invoicing and support</p>
               </div>
            </div>

            <div className="space-y-4">
               <div className="space-y-1.5">
                 <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">ZIP / Postal Code</label>
                 {isEditing ? (
                    <>
                      <div className="flex items-center w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 focus-within:border-indigo-500 transition-colors relative">
                        <input
                          type="text"
                          value={formData.cep}
                          onChange={(e) => handleCepChange(e.target.value)}
                          className="bg-transparent w-full text-white text-xs outline-none placeholder:text-slate-500 pr-6"
                          placeholder={formData.country === 'Brazil' ? "00000-000" : "ZIP Code"}
                        />
                        {isCepLoading && <VoltrisIcon name="processing" size={14} className="absolute right-3.5 text-indigo-400 animate-spin" />}
                      </div>
                      {cepLocked && (
                        <button 
                          type="button"
                          onClick={() => { setFormData(p => ({...p, cep: '', city: '', state: '', address: ''})); setIsCepValid(false); }}
                          className="text-[11px] text-rose-400 font-semibold hover:underline mt-1 block"
                        >
                          Fix ZIP Code / Enter Manually
                        </button>
                      )}
                    </>
                 ) : (
                    <div className="px-3.5 py-2.5 rounded-xl bg-slate-950/30 border border-slate-800/80 text-xs text-slate-200 font-medium">
                      {profile?.cep || 'Not provided'}
                    </div>
                 )}
               </div>

               <div className="grid grid-cols-2 gap-3">
                 <div className="space-y-1.5">
                   <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">City</label>
                   {isEditing ? (
                      <input
                        type="text"
                        value={formData.city}
                        readOnly={cepLocked}
                        onChange={(e) => (!cepLocked) && setFormData({ ...formData, city: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-indigo-500 outline-none transition-colors ${cepLocked ? 'opacity-50 cursor-not-allowed select-none' : ''}`}
                        placeholder="Your city"
                      />
                   ) : (
                      <div className="px-3.5 py-2.5 rounded-xl bg-slate-950/30 border border-slate-800/80 text-xs text-slate-200 font-medium">
                        {profile?.city || 'Not provided'}
                      </div>
                   )}
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">State</label>
                   {isEditing ? (
                      <input
                        type="text"
                        value={formData.state}
                        readOnly={cepLocked}
                        onChange={(e) => (!cepLocked) && setFormData({ ...formData, state: formData.country === 'Brazil' ? e.target.value.toUpperCase() : e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-indigo-500 outline-none transition-colors ${cepLocked ? 'opacity-50 cursor-not-allowed select-none' : ''}`}
                        placeholder={formData.country === 'Brazil' ? "UF" : "State"}
                      />
                   ) : (
                      <div className="px-3.5 py-2.5 rounded-xl bg-slate-950/30 border border-slate-800/80 text-xs text-slate-200 font-medium">
                        {profile?.state || 'Not provided'}
                      </div>
                   )}
                 </div>
               </div>

               <div className="space-y-1.5">
                 <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Address</label>
                 {isEditing ? (
                    <input
                      type="text"
                      value={formData.address}
                      readOnly={cepLocked}
                      onChange={(e) => (!cepLocked) && setFormData({ ...formData, address: e.target.value })}
                      className={`w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-indigo-500 outline-none transition-colors ${cepLocked ? 'opacity-50 cursor-not-allowed select-none' : ''}`}
                      placeholder="Street, number, complement, district"
                    />
                 ) : (
                    <div className="px-3.5 py-2.5 rounded-xl bg-slate-950/30 border border-slate-800/80 text-xs text-slate-200 font-medium truncate">
                      {profile?.address || 'Not provided'}
                    </div>
                 )}
               </div>
            </div>
          </div>
        </div>

      </div>
    </AuthGuard>
  );
}
