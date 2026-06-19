import { Metadata } from 'next';
'use client';

import { useState, useEffect, Suspense, useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
// Header/Footer not imported to ensure clean full screen
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/app/hooks/useAuth';
import GoogleLoginButton from '@/components/GoogleLoginButton';
import { notifyPageView } from '@/utils/notifications';

// Icons
import { FaWhatsapp } from 'react-icons/fa';
import { Mail, Lock, User, Phone as PhoneIcon, MapPin, ArrowLeft, Loader2, CheckCircle, ArrowRight, Smartphone as FiSmartphone, Key as FiKey, Globe } from 'lucide-react';
import { toast } from 'react-hot-toast';




export const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
  "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export const DIAL_CODES: Record<string, string> = {
  "Afghanistan": "+93", "Albania": "+355", "Algeria": "+213", "Andorra": "+376", "Angola": "+244", "Antigua and Barbuda": "+1", "Argentina": "+54", "Armenia": "+374", "Australia": "+61", "Austria": "+43", "Azerbaijan": "+994",
  "Bahamas": "+1", "Bahrain": "+973", "Bangladesh": "+880", "Barbados": "+1", "Belarus": "+375", "Belgium": "+32", "Belize": "+501", "Benin": "+229", "Bhutan": "+975", "Bolivia": "+591", "Bosnia and Herzegovina": "+387", "Botswana": "+267", "Brazil": "+55", "Brunei": "+673", "Bulgaria": "+359", "Burkina Faso": "+226", "Burundi": "+257",
  "Cabo Verde": "+238", "Cambodia": "+855", "Cameroon": "+237", "Canada": "+1", "Central African Republic": "+236", "Chad": "+235", "Chile": "+56", "China": "+86", "Colombia": "+57", "Comoros": "+269", "Congo": "+242", "Costa Rica": "+506", "Croatia": "+385", "Cuba": "+53", "Cyprus": "+357", "Czechia": "+420",
  "Denmark": "+45", "Djibouti": "+253", "Dominica": "+1", "Dominican Republic": "+1", "Ecuador": "+593", "Egypt": "+20", "El Salvador": "+503", "Equatorial Guinea": "+240", "Eritrea": "+291", "Estonia": "+372", "Eswatini": "+268", "Ethiopia": "+251",
  "Fiji": "+679", "Finland": "+358", "France": "+33", "Gabon": "+241", "Gambia": "+220", "Georgia": "+995", "Germany": "+49", "Ghana": "+233", "Greece": "+30", "Grenada": "+1", "Guatemala": "+502", "Guinea": "+224", "Guinea-Bissau": "+245", "Guyana": "+592",
  "Haiti": "+509", "Honduras": "+504", "Hungary": "+36", "Iceland": "+354", "India": "+91", "Indonesia": "+62", "Iran": "+98", "Iraq": "+964", "Ireland": "+353", "Israel": "+972", "Italy": "+39", "Jamaica": "+1", "Japan": "+81", "Jordan": "+962",
  "Kazakhstan": "+7", "Kenya": "+254", "Kiribati": "+686", "Korea, North": "+850", "Korea, South": "+82", "Kosovo": "+383", "Kuwait": "+965", "Kyrgyzstan": "+996",
  "Laos": "+856", "Latvia": "+371", "Lebanon": "+961", "Lesotho": "+266", "Liberia": "+231", "Libya": "+218", "Liechtenstein": "+423", "Lithuania": "+370", "Luxembourg": "+352",
  "Madagascar": "+261", "Malawi": "+265", "Malaysia": "+60", "Maldives": "+960", "Mali": "+223", "Malta": "+356", "Marshall Islands": "+692", "Mauritania": "+222", "Mauritius": "+230", "Mexico": "+52", "Micronesia": "+691", "Moldova": "+373", "Monaco": "+377", "Mongolia": "+976", "Montenegro": "+382", "Morocco": "+212", "Mozambique": "+258", "Myanmar": "+95",
  "Namibia": "+264", "Nauru": "+674", "Nepal": "+977", "Netherlands": "+31", "New Zealand": "+64", "Nicaragua": "+505", "Niger": "+227", "Nigeria": "+234", "North Macedonia": "+389", "Norway": "+47",
  "Oman": "+968", "Pakistan": "+92", "Palau": "+680", "Palestine": "+970", "Panama": "+507", "Papua New Guinea": "+675", "Paraguay": "+595", "Peru": "+51", "Philippines": "+63", "Poland": "+48", "Portugal": "+351",
  "Qatar": "+974", "Romania": "+40", "Russia": "+7", "Rwanda": "+250", "Saint Kitts and Nevis": "+1", "Saint Lucia": "+1", "Saint Vincent and the Grenadines": "+1", "Samoa": "+685", "San Marino": "+378", "Sao Tome and Principe": "+239", "Saudi Arabia": "+966", "Senegal": "+221", "Serbia": "+381", "Seychelles": "+248", "Sierra Leone": "+232", "Singapore": "+65", "Slovakia": "+421", "Slovenia": "+386", "Solomon Islands": "+677", "Somalia": "+252", "South Africa": "+27", "South Sudan": "+211", "Spain": "+34", "Sri Lanka": "+94", "Sudan": "+249", "Suriname": "+597", "Sweden": "+46", "Switzerland": "+41", "Syria": "+963",
  "Taiwan": "+886", "Tajikistan": "+992", "Tanzania": "+255", "Thailand": "+66", "Timor-Leste": "+670", "Togo": "+228", "Tonga": "+676", "Trinidad and Tobago": "+1", "Tunisia": "+216", "Turkey": "+90", "Turkmenistan": "+993", "Tuvalu": "+688",
  "Uganda": "+256", "Ukraine": "+380", "United Arab Emirates": "+971", "United Kingdom": "+44", "United States": "+1", "Uruguay": "+598", "Uzbekistan": "+998", "Vanuatu": "+678", "Vatican City": "+379", "Venezuela": "+58", "Vietnam": "+84", "Yemen": "+967", "Zambia": "+260", "Zimbabwe": "+263"
};

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050510]" />}>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // --- STATES ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [country, setCountry] = useState('Brazil');
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isCepLoading, setIsCepLoading] = useState(false);
  const [isCepValid, setIsCepValid] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const [isRecoveryView, setIsRecoveryView] = useState(false);
  const [signupStep, setSignupStep] = useState(1); // 1, 2, 3

  const [isMfaChallenge, setIsMfaChallenge] = useState(false);
  const [mfaCode, setMfaCode] = useState('');
  const [isVerifyingMfa, setIsVerifyingMfa] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // --- PASSWORD STRENGTH LOGIC ---
  const getPasswordStrength = (pass: string) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++; // Special char
    if (pass.length >= 12) score++; // Bonus for length
    return score;
  };

  useEffect(() => {
    setPasswordStrength(getPasswordStrength(password));
  }, [password]);

  const strengthColor = () => {
    if (passwordStrength === 0) return 'bg-white/10';
    if (passwordStrength <= 1) return 'bg-red-500';
    if (passwordStrength === 2) return 'bg-orange-500';
    if (passwordStrength === 3) return 'bg-yellow-500';
    return 'bg-emerald-500';
  };

  const strengthText = () => {
    if (!password) return '';
    if (passwordStrength <= 1) return 'Very Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Strong';
    return 'Very Strong';
  };
  const [showWhatsAppBtn, setShowWhatsAppBtn] = useState(false);
  const [redirectText, setRedirectText] = useState('Redirecting...');
  
  const redirectUrl = searchParams.get('redirect') || '';
  const pendingOrder = searchParams.get('pendingOrder') === 'true';
  const installationId = searchParams.get('installation_id');

  const { user, profile, loading: authLoading, isAdmin: authIsAdmin } = useAuth();
  const supabase = useMemo(() => createClient(), []);
  // --- EFFECTS ---
  useEffect(() => {
    if (searchParams.get('signup') === '1' || searchParams.get('signup') === 'true') {
      setIsLoginView(false);
      setIsRecoveryView(false);
    }

    const urlError = searchParams.get('error');
    if (urlError) {
      setError(decodeURIComponent(urlError));
    }
  }, [searchParams]);

  // Notify signup intention
  useEffect(() => {
    if (!isLoginView) {
      notifyPageView("Signup Page - Start (Intention)");
    }
  }, [isLoginView]);

  const linkInstallation = async (userId: string) => {
    if (!installationId) return;
    try {
      await fetch('/api/v1/install/link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ installation_id: installationId, user_id: userId })
      });
      console.log('Device linked successfully!');
    } catch (err) {
      console.error('Error linking device:', err);
    }
  };

  const getFinalRedirect = useCallback(() => {
    // If there is a valid redirectUrl (e.g., /buy-license?plan=pro), it has maximum priority
    if (redirectUrl && redirectUrl !== '/' && !redirectUrl.includes('/login')) {
      if (redirectUrl.includes('restricted') && !authIsAdmin) return '/dashboard';
      return redirectUrl;
    }
    if (pendingOrder) return '/dashboard?pendingOrder=true';
    return authIsAdmin ? '/restricted-area-admin' : '/dashboard';
  }, [redirectUrl, pendingOrder, authIsAdmin]);

  // If user is already logged in when arriving at login page, redirect immediately
  useEffect(() => {
    if (authLoading || success) return;

    if (user) {
      const checkMfaAndRedirect = async () => {
        const { data: mfaData } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
        if (mfaData?.nextLevel === 'aal2' && mfaData?.currentLevel !== 'aal2') {
          setIsMfaChallenge(true);
          return;
        }

        const dest = getFinalRedirect();
        if (installationId) {
          linkInstallation(user.id).then(() => {
            window.location.href = dest;
          });
        } else {
          window.location.href = dest;
        }
      };
      checkMfaAndRedirect();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, authLoading]);

  // --- HELPERS ---
  const translateError = (err: string) => {
    const msg = err.toLowerCase();
    if (msg.includes('email_address_invalid') || msg.includes('unable to validate email address') || msg.includes('invalid format')) return 'This email address is invalid or not accepted by our security system. Please use a valid email.';
    if (msg.includes('user not found')) return 'This Username does not exist.';
    if (msg.includes('email not found')) return 'This Email is not registered. Please create an account.';
    if (msg.includes('incorrect password')) return 'Incorrect password. Please try again.';
    if (msg.includes('invalid login credentials')) return 'Invalid Email/Username or password.';
    if (msg.includes('password should be at least')) return 'Password must be at least 6 characters.';
    if (msg.includes('user already registered')) return 'This user/email is already registered.';
    if (msg.includes('network error')) return 'Connection error. Check your internet.';
    return 'A technical error occurred. Try again.';
  };

  const validateEmail = (emailStr: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  // --- HANDLERS ---
  const handleMfaVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mfaCode.length < 6) return;
    setIsVerifyingMfa(true);
    setError(null);
    try {
      const { data: factorsData } = await supabase.auth.mfa.listFactors();
      const factor = factorsData?.all?.find(f => f.status === 'verified');
      if (!factor) throw new Error('No active verifier found.');

      const { error } = await supabase.auth.mfa.challengeAndVerify({
        factorId: factor.id,
        code: mfaCode
      });
      if (error) throw error;

      toast.success('Authentication confirmed!');
      setSuccess(true);
      
      const dest = getFinalRedirect();
      window.location.href = dest;
    } catch (err: any) {
      setError('Incorrect authentication code.');
    } finally {
      setIsVerifyingMfa(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      let loginEmail = email.trim();
      const isEmail = validateEmail(loginEmail);

      // Se não for e-mail, tenta buscar por username
      if (!isEmail) {
        try {
          const res = await fetch('/api/v1/auth/get-email-by-username', {
            method: 'POST',
            body: JSON.stringify({ username: loginEmail }),
          });
          const data = await res.json();
          if (data.email) {
            loginEmail = data.email;
          } else {
            throw new Error('User not found');
          }
        } catch (err) {
          throw new Error('User not found');
        }
      } else {
        // Se for e-mail, vamos verificar se ele existe antes de tentar a senha
        try {
          const checkRes = await fetch('/api/v1/auth/check-availability', {
            method: 'POST',
            body: JSON.stringify({ email: loginEmail }),
            headers: { 'Content-Type': 'application/json' }
          });
          const checkData = await checkRes.json();
          // Se available for true, quer dizer que o e-mail não foi usado, ou seja, NÃO EXISTE!
          if (checkData.available === true) {
            throw new Error('Email not found');
          }
        } catch (err: any) {
          if (err.message === 'Email not found') throw err;
        }
      }

      console.log('🔄 Starting login for:', loginEmail);
      const { data: signInData, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password
      });

      if (error || !signInData.user) {
        throw new Error('Incorrect password');
      }
      console.log('✅ Login successful:', signInData.user.id);

      // --- MFA CHECK ---
      const { data: mfaData } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
      if (mfaData?.nextLevel === 'aal2' && mfaData?.currentLevel !== 'aal2') {
        setIsMfaChallenge(true);
        setLoading(false);
        return;
      }

      // Fetch admin in fail-safe manner
      let admin = signInData.user.user_metadata?.is_admin === true;
      try {
        const profilePromise = supabase.from('profiles').select('is_admin').eq('id', signInData.user.id).single();
        const timeoutPromise = new Promise((_, r) => setTimeout(() => r(new Error('TIMEOUT')), 2500));
        const { data: profileData } = await Promise.race([profilePromise, timeoutPromise]) as any;
        if (profileData) admin = profileData.is_admin || admin;
      } catch (err) {
        console.warn('⚠️ [AUTH] Error or timeout fetching admin on login, proceeding with metadata.');
      }

      // Installation link in background to not block login
      if (installationId) {
        linkInstallation(signInData.user.id).catch(err => console.error('Error linkInstallation:', err));
      }

      setSuccess(true);
      if (typeof window !== 'undefined') window.dispatchEvent(new Event('auth-changed'));

      // Redirect directly after successful login
      const dest = (redirectUrl && redirectUrl !== '/' && !redirectUrl.includes('/login'))
        ? (redirectUrl.includes('restricted') && !admin ? '/dashboard' : redirectUrl)
        : (pendingOrder ? '/dashboard?pendingOrder=true' : (admin ? '/restricted-area-admin' : '/dashboard'));

      console.log('🚀 Redirecting to:', dest);

      // Reduce timeout delay for faster feedback
      setTimeout(() => {
        window.location.href = dest;
      }, 400);
    } catch (err: any) {
      console.error('❌ Error in handleLogin:', err);
      setError(translateError(err.message));
      setLoading(false); // Ensure loading is deactivated in case of error
    } finally {
      // Loading should only stay true if success is false and there's no error
      // But if redirect takes time, button may still show spinner.
    }
  };

  const handleNextStep = async () => {
    if (signupStep === 1) {
      if (!login) return setError("Please enter a Username.");
      if (!email) return setError("Please enter your Email.");
      if (!validateEmail(email)) return setError("Invalid email format.");
      
      // Strong Password Validation (Stripe/Enterprise Level)
      if (password.length < 8) return setError("Password must be at least 8 characters.");
      if (passwordStrength < 3) return setError("Your password is weak. Use uppercase letters, numbers, and symbols.");
      
      setLoading(true);
      setError(null);
      try {
        // Existence Validation (Email and Username) in System
        const availabilityRes = await fetch('/api/v1/auth/check-availability', {
          method: 'POST',
          body: JSON.stringify({ email: email.trim(), login: login.trim() }),
          headers: { 'Content-Type': 'application/json' }
        });
        const availability = await availabilityRes.json();
        if (!availability.available) {
          setError(availability.error || "This email or username is already in use.");
          setLoading(false);
          return;
        }

        // Professional DNS and Disposable Validation
        const response = await fetch('/api/v1/auth/validate-email', {
          method: 'POST',
          body: JSON.stringify({ email: email.trim() }),
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        if (!data.valid) {
          setError(data.error || "This email is invalid.");
          setLoading(false);
          return;
        }
      } catch (err) {
        setError("Critical validation error. Please try again.");
        setLoading(false);
        return;
      } finally {
        setLoading(false);
      }
    }
    
    if (signupStep === 2) {
      if (!fullName) return setError("Please enter your Full Name.");
      if (!phone) return setError("Please enter your WhatsApp/Phone.");
      if (!validateGlobalPhone(phone)) {
        return setError(country === 'Brazil' ? "Invalid WhatsApp/Phone number or non-existent area code." : "Please enter a valid international phone number.");
      }

      setLoading(true);
      setError(null);
      try {
        // Duplicate Phone Validation in System (Step 2)
        const dialCode = DIAL_CODES[country] || '';
        const cleanPhone = phone.replace(/[\s+-]/g, '');
        const fullPhone = `${dialCode}${cleanPhone}`;
        
        const availabilityRes = await fetch('/api/v1/auth/check-availability', {
          method: 'POST',
          body: JSON.stringify({ phone: fullPhone }),
          headers: { 'Content-Type': 'application/json' }
        });
        const availability = await availabilityRes.json();
        if (!availability.available) {
          setError(availability.error || "This WhatsApp/Phone is already in use.");
          setLoading(false);
          return;
        }
      } catch (err) {
        setError("Network error. Please try again.");
        setLoading(false);
        return;
      } finally {
        setLoading(false);
      }
    }
    setError(null);
    setSignupStep(prev => prev + 1);
  };

  const handleSignUp = async () => {
    if (!cep || !state || !city || !street || !number) {
      return setError("Please fill out the complete address.");
    }
    if (!isCepValid) {
      return setError("The ZIP Code provided is invalid. Please use a real ZIP Code.");
    }
    setError(null);
    setLoading(true);

    try {
      // 1. Professional Duplicate WhatsApp Block
      const dialCode = DIAL_CODES[country] || '';
      const cleanPhone = phone.replace(/\D/g, '');
      const fullPhone = `${dialCode}${cleanPhone}`;

      const { data: directCheck } = await supabase
        .from('profiles')
        .select('id')
        .or(`phone.eq.${fullPhone},phone.ilike.%${cleanPhone}%`)
        .maybeSingle();

      if (directCheck) {
        setLoading(false);
        return setError("This WhatsApp/Phone is already linked to an account. Use another number.");
      }

      const { data: signUpData, error } = await supabase.auth.signUp({
        email, password,
        options: { 
          data: { 
            full_name: fullName, 
            phone: fullPhone, 
            city, 
            neighborhood, 
            state, 
            cep, 
            address: `${street}, ${number}`,
            login,
            country
          } 
        },
      });
      if (error) throw error;

      if (signUpData.user) {
        // Check if session was created (auto-login)
        let session = signUpData.session;

        // If no session, try forced login (if email config is disabled but not logo)
        if (!session) {
          const { data: signInData } = await supabase.auth.signInWithPassword({ email, password });
          session = signInData.session;
        }

        if (session) {
          setSuccess(true);
          if (typeof window !== 'undefined') window.dispatchEvent(new Event('auth-changed'));

          // Redirect directly after registration
          const dest = (redirectUrl && redirectUrl !== '/' && !redirectUrl.includes('/login'))
            ? redirectUrl
            : '/dashboard';

          // Notify success on Telegram (Normal Form)
          notifyPageView(`New Registration: ${email} (Via Form)`);

          setTimeout(() => {
            window.location.href = dest;
          }, 800);
        } else {
          // Requires email confirmation
          setRedirectText("Account created! Check your email to confirm.");
          setSuccess(true);
          // Redirect to login screen after delay
          setTimeout(() => {
            setSuccess(false);
            setIsLoginView(true);
            setSignupStep(1);
            setRedirectText("Redirecting...");
          }, 5000);
        }
      }
    } catch (err: any) {
      setError(translateError(err.message));
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordRecovery = async () => {
    setError(null); setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
      if (error) throw error;
      alert("Email sent!"); setIsRecoveryView(false); setIsLoginView(true);
    } catch (err: any) { setError(err.message); } finally { setLoading(false); }
  };

  // Formatters
  const formatPhone = (v: string) => { 
    if (country !== 'Brazil') return v;
    const n = v.replace(/\D/g, ''); return n.length <= 11 ? n.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3') : v; 
  };
  const formatCEP = (v: string) => { 
    if (country !== 'Brazil') return v;
    const n = v.replace(/\D/g, ''); return n.length <= 8 ? n.replace(/(\d{5})(\d{3})/, '$1-$2') : v; 
  };

  const validateGlobalPhone = (v: string) => {
    if (country !== 'Brazil') {
      const clean = v.replace(/[\s+-]/g, '');
      return clean.length >= 7 && clean.length <= 20;
    }
    const n = v.replace(/\D/g, '');
    if (n.length !== 11) return false;
    if (n[2] !== '9') return false;
    const validDDDs = [
      '11','12','13','14','15','16','17','18','19',
      '21','22','24','27','28','31','32','33','34','35','37','38',
      '41','42','43','44','45','46','47','48','49',
      '51','53','54','55','61','62','63','64','65','66','67','68','69',
      '71','73','74','75','77','79','81','82','83','84','85','86','87','88','89',
      '91','92','93','94','95','96','97','98','99'
    ];
    if (!validDDDs.includes(n.substring(0, 2))) return false;
    return true;
  };

  const handleCepChange = async (v: string) => {
    const formattedCep = formatCEP(v);
    setCep(formattedCep);

    if (country !== 'Brazil') {
      setIsCepValid(true);
      setError(null);
      return;
    }

    const cleanCep = formattedCep.replace(/\D/g, '');
    if (cleanCep.length === 8) {
      setIsCepLoading(true);
      setIsCepValid(false);
      setError(null);
      
      try {
        console.log('🔍 Validating ZIP code via Server:', cleanCep);
        const response = await fetch('/api/v1/auth/validate-cep', {
          method: 'POST',
          body: JSON.stringify({ cep: cleanCep }),
          headers: { 'Content-Type': 'application/json' }
        });
        
        const resData = await response.json();
        console.log('✅ Server Response:', resData);
        
        if (!resData.valid) {
          setError(resData.error || "This ZIP Code does not exist. Enter a valid ZIP Code.");
          setCity(''); setNeighborhood(''); setState(''); setStreet('');
          setIsCepValid(false);
        } else {
          // Extract data from server response
          const { street, neighborhood, city, state } = resData.data;
          
          setCity(city || '');
          setNeighborhood(neighborhood || '');
          setState(state || '');
          setStreet(street || '');
          setError(null);
          setIsCepValid(true);
          console.log('🎯 Address filled successfully!');
        }
      } catch (err) {
        console.error('❌ Error validating ZIP code:', err);
        setError("Network error when validating ZIP code. Please try again.");
        setIsCepValid(false);
      } finally {
        setIsCepLoading(false);
      }
    } else {
      setIsCepValid(false);
    }
  };

  return (
    <div className="h-[100dvh] w-full bg-[#050510] relative overflow-hidden flex items-center justify-center font-sans selection:bg-[#31A8FF]/30">

      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#31A8FF]/10 blur-[120px] rounded-full"></div>

      {/* Back Button */}
      <Link href="/" className="absolute top-8 left-8 z-50 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group px-4 py-2 rounded-full hover:bg-white/5">
        {/* Arrow Colored by Brand - Primary Pink */}
        <ArrowLeft className="w-4 h-4 text-[#FF4B6B] group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      {/* Card */}
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-[400px] mx-4 relative z-10">
        <div className="bg-[#0A0A0F]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Gradient Border Top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF]"></div>

          <div className="p-8">
            {/* Header Centered Flex */}
            <div className="flex flex-col items-center justify-center mb-6 w-full text-center">
              <h1 className="text-2xl font-bold text-white tracking-tight mb-1">
                {isRecoveryView ? 'Recovery' : (isLoginView ? 'Welcome' : 'Create Account')}
              </h1>
              {/* Micro Subtitle - text-[10px] */}
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                {isRecoveryView ? 'Reset Password' : (isLoginView ? 'Access Dashboard' : `Step ${signupStep} of 3`)}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {success ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10 flex flex-col items-center relative">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none"></div>
                  <div className="relative z-10 w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Success!</h2>
                  <p className="text-emerald-400/80 text-sm max-w-[250px] font-medium animate-pulse">{redirectText}</p>
                </motion.div>
              ) : isMfaChallenge ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-6 py-6 text-center">
                  <div className="w-16 h-16 bg-[#31A8FF]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-3xl">
                    <FiSmartphone className="w-8 h-8 text-[#31A8FF]" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">2FA Authentication</h2>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed px-4">Voltris Protection: Enter your 6-digit Google Authenticator code.</p>
                  </div>

                  <form onSubmit={handleMfaVerify} className="space-y-6">
                     <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-4 flex items-center gap-3 focus-within:border-[#31A8FF] transition-all">
                        <FiKey className="w-5 h-5 text-slate-500" />
                        <input 
                          type="text" 
                          placeholder="000 000" 
                          maxLength={6}
                          value={mfaCode}
                          onChange={e => setMfaCode(e.target.value.replace(/\D/g, ''))}
                          className="bg-transparent w-full text-white text-xl font-black tracking-[0.4em] outline-none placeholder:tracking-normal placeholder:text-slate-600 text-center"
                          autoFocus
                        />
                     </div>

                     {error && (
                        <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                          <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest text-center">{error}</p>
                        </div>
                     )}

                     <button 
                      type="submit" 
                      disabled={isVerifyingMfa || mfaCode.length < 6}
                      className="w-full py-4 bg-white text-black font-black uppercase italic text-xs rounded-xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                     >
                       {isVerifyingMfa ? 'Verifying...' : 'Confirm and Access'}
                     </button>

                     <button 
                      type="button"
                      onClick={() => { 
                        setIsMfaChallenge(false); 
                        setMfaCode(''); 
                        setError(null); 
                        supabase.auth.signOut();
                        window.location.reload(); 
                      }}
                      className="w-full text-white/20 hover:text-white/40 text-[9px] font-black uppercase tracking-widest transition-all"
                     >
                       Sign Out
                     </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div key={isLoginView ? 'login' : 'signup'} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">

                  {/* --- LOGIN FORM --- */}
                  {isLoginView && !isRecoveryView && (
                    <form 
                      onSubmit={handleLogin} 
                      className="space-y-4 p-0 m-0 w-full"
                    >
                      <div className="space-y-4">
                        <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 focus-within:border-[#31A8FF] transition-all group/input">
                          <Mail className="w-4 h-4 text-slate-500 group-focus-within/input:text-[#31A8FF] transition-colors" />
                          <input
                            type="text"
                            placeholder="Email or Username"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="bg-transparent w-full text-white text-sm outline-none placeholder:text-slate-600 appearance-none"
                            autoComplete="username"
                            required
                          />
                        </div>
                        <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 focus-within:border-[#31A8FF] transition-all group/input">
                          <Lock className="w-4 h-4 text-slate-500 group-focus-within/input:text-[#31A8FF] transition-colors" />
                          <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Your Password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                            className="bg-transparent w-full text-white text-sm outline-none placeholder:text-slate-600 appearance-none" 
                            autoComplete="current-password"
                            required
                          />
                          <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-slate-500 hover:text-white transition-colors"
                          >
                            <User className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button type="button" onClick={() => setIsRecoveryView(true)} className="text-xs text-slate-500 hover:text-[#31A8FF] transition-colors font-medium">Forgot password?</button>
                      </div>

                      {error && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                          <p className="text-red-400 text-xs text-center font-bold tracking-tight">{error}</p>
                        </motion.div>
                      )}

                      <button 
                        type="submit" 
                        disabled={loading} 
                        className="w-full py-3 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] hover:brightness-110 active:scale-[0.98] text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-[#8B31FF]/20 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Logging in...</span>
                          </>
                        ) : (
                          <>
                            <span>Access Dashboard</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <div className="py-2 flex items-center gap-4">
                        <div className="h-px flex-1 bg-white/5"></div>
                        <span className="text-[10px] font-bold text-white/10 uppercase tracking-widest">OR</span>
                        <div className="h-px flex-1 bg-white/5"></div>
                      </div>

                      <div className="w-full flex justify-center">
                        <GoogleLoginButton 
                          onSuccess={() => {}} 
                          onError={(err) => setError(translateError(err))} 
                          disabled={loading} 
                          redirect={redirectUrl} 
                          label={isLoginView ? "Continue with Google" : "Sign up with Google"}
                          isSignup={!isLoginView}
                        />
                      </div>
                    </form>
                  )}

                  {/* --- SIGNUP WIZARD --- */}
                  {!isLoginView && !isRecoveryView && (
                    <div className="space-y-4">
                      {signupStep === 1 && (
                        <div className="space-y-3">
                          <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3"><User className="w-4 h-4 text-slate-500" /><input type="text" placeholder="Username" value={login} onChange={e => setLogin(e.target.value)} className="bg-transparent w-full text-white text-sm outline-none" /></div>
                          <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3"><Mail className="w-4 h-4 text-slate-500" /><input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="bg-transparent w-full text-white text-sm outline-none" /></div>
                          <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                            <Lock className="w-4 h-4 text-slate-500" />
                            <input 
                              type={showPassword ? "text" : "password"} 
                              placeholder="Password" 
                              value={password} 
                              onChange={e => setPassword(e.target.value)} 
                              className="bg-transparent w-full text-white text-sm outline-none" 
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-500">
                                <Lock className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Password Strength Meter */}
                          <div className="space-y-2 mt-1 px-1">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Security</span>
                              <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${passwordStrength === 0 ? 'text-slate-600' : (passwordStrength <= 1 ? 'text-red-500' : (passwordStrength === 2 ? 'text-orange-500' : 'text-emerald-500'))}`}>
                                {strengthText()}
                              </span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                className={`h-full ${strengthColor()} transition-all duration-500`}
                                initial={{ width: 0 }}
                                animate={{ width: `${(passwordStrength / 5) * 100}%` }}
                              />
                            </div>
                          </div>

                          <div className="py-2 flex items-center gap-4">
                            <div className="h-px flex-1 bg-white/5"></div>
                            <span className="text-[10px] font-bold text-white/10 uppercase tracking-widest">OR</span>
                            <div className="h-px flex-1 bg-white/5"></div>
                          </div>

                          <div className="w-full flex justify-center">
                            <GoogleLoginButton 
                              onSuccess={() => {}} 
                              onError={(err) => setError(translateError(err))} 
                              disabled={loading} 
                              redirect={redirectUrl} 
                              label="Sign up with Google"
                              isSignup={true}
                            />
                          </div>
                        </div>
                      )}
                      {signupStep === 2 && (
                        <div className="space-y-3">
                          <div className="relative">
                            <div 
                              onClick={() => setIsCountryOpen(!isCountryOpen)}
                              className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer focus-within:border-[#31A8FF] transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <Globe className="w-4 h-4 text-slate-500" />
                                <span className="text-white text-sm">{country}</span>
                              </div>
                              <ArrowRight className={`w-4 h-4 text-slate-500 transition-transform ${isCountryOpen ? 'rotate-90' : ''}`} />
                            </div>
                            
                            <AnimatePresence>
                              {isCountryOpen && (
                                <motion.div 
                                  initial={{ opacity: 0, y: -10 }} 
                                  animate={{ opacity: 1, y: 0 }} 
                                  exit={{ opacity: 0, y: -10 }}
                                  className="absolute top-full left-0 right-0 mt-2 bg-[#121218] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 max-h-[250px] overflow-y-auto custom-scrollbar"
                                >
                                  {COUNTRIES.map(c => (
                                    <div 
                                      key={c}
                                      onClick={() => { setCountry(c); setIsCountryOpen(false); }}
                                      className={`px-4 py-3 text-sm cursor-pointer hover:bg-[#31A8FF]/20 transition-colors ${country === c ? 'bg-[#31A8FF]/10 text-[#31A8FF] font-bold' : 'text-slate-300'}`}
                                    >
                                      {c}
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3"><User className="w-4 h-4 text-slate-500" /><input type="text" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} className="bg-transparent w-full text-white text-sm outline-none" /></div>
                          <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                            <PhoneIcon className="w-4 h-4 text-slate-500" />
                            <div className="flex items-center gap-2 border-r border-white/10 pr-3">
                              <span className="text-white/60 font-medium text-sm whitespace-nowrap">{DIAL_CODES[country] || '+'}</span>
                            </div>
                            <input 
                              type="tel" 
                              placeholder={country === 'Brazil' ? "(11) 99999-9999" : "Phone number"} 
                              value={phone} 
                              onChange={e => setPhone(formatPhone(e.target.value))} 
                              className="bg-transparent w-full text-white text-sm outline-none" 
                            />
                          </div>
                        </div>
                      )}
                      {signupStep === 3 && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2 focus-within:border-[#31A8FF] transition-all">
                              <input 
                                type="text" 
                                placeholder="ZIP Code" 
                                value={cep} 
                                onChange={e => handleCepChange(e.target.value)} 
                                className="bg-transparent w-full text-white text-sm outline-none" 
                              />
                              {isCepLoading && <Loader2 className="w-4 h-4 text-[#31A8FF] animate-spin" />}
                            </div>
                            <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3">
                              <input 
                                type="text" 
                                placeholder="State" 
                                maxLength={country === 'Brazil' ? 2 : 50} 
                                readOnly={country === 'Brazil' && isCepValid}
                                value={state} 
                                onChange={e => (!(country === 'Brazil' && isCepValid)) && setState(country === 'Brazil' ? e.target.value.toUpperCase() : e.target.value)} 
                                className={`bg-transparent w-full text-white text-sm outline-none transition-all ${(country === 'Brazil' && isCepValid) ? 'opacity-30 cursor-not-allowed select-none' : ''}`} 
                              />
                            </div>
                          </div>
                          <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3">
                            <input 
                              type="text" 
                              placeholder="Street / Address" 
                              readOnly={country === 'Brazil' && isCepValid}
                              value={street} 
                              onChange={e => (!(country === 'Brazil' && isCepValid)) && setStreet(e.target.value)} 
                              className={`bg-transparent w-full text-white text-sm outline-none transition-all ${(country === 'Brazil' && isCepValid) ? 'opacity-30 cursor-not-allowed select-none' : ''}`} 
                            />
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="col-span-2 bg-[#121218] border border-white/10 rounded-xl px-4 py-3">
                              <input 
                                type="text" 
                                placeholder={country === 'Brazil' ? "Neighborhood" : "City / Region"} 
                                readOnly={country === 'Brazil' && isCepValid}
                                value={neighborhood} 
                                onChange={e => (!(country === 'Brazil' && isCepValid)) && setNeighborhood(e.target.value)} 
                                className={`bg-transparent w-full text-white text-sm outline-none transition-all ${(country === 'Brazil' && isCepValid) ? 'opacity-30 cursor-not-allowed select-none' : ''}`} 
                              />
                            </div>
                            <div className="bg-[#121218] border border-[#31A8FF]/30 rounded-xl px-4 py-3 focus-within:border-[#31A8FF] transition-all bg-gradient-to-br from-[#31A8FF]/5 to-transparent">
                              <input 
                                type="text" 
                                placeholder="Num" 
                                value={number} 
                                onChange={e => setNumber(e.target.value)} 
                                className="bg-transparent w-full text-white text-sm outline-none placeholder:text-[#31A8FF]/40 font-bold" 
                              />
                            </div>
                          </div>
                          <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3">
                            <input 
                              type="text" 
                              placeholder="City" 
                              readOnly={isCepValid}
                              value={city} 
                              onChange={e => !isCepValid && setCity(e.target.value)} 
                              className={`bg-transparent w-full text-white text-sm outline-none transition-all ${isCepValid ? 'opacity-30 cursor-not-allowed select-none' : ''}`} 
                            />
                          </div>
                          {isCepValid && (
                            <button 
                              type="button"
                              onClick={() => { setCep(''); setIsCepValid(false); setStreet(''); setNeighborhood(''); setCity(''); setState(''); }}
                              className="text-[10px] text-[#FF4B6B] font-bold uppercase tracking-widest hover:underline text-center w-full mt-1"
                            >
                              Fix ZIP Code / Enter Manually
                            </button>
                          )}
                        </div>
                      )}

                      {error && <p className="text-red-400 text-xs text-center">{error}</p>}

                      <div className="flex gap-3 pt-2">
                        {signupStep > 1 && <button onClick={() => setSignupStep(prev => prev - 1)} className="px-4 py-3 rounded-xl border border-white/10 text-slate-400 hover:text-white text-sm">Back</button>}
                        <button onClick={signupStep < 3 ? handleNextStep : handleSignUp} disabled={loading} className="flex-1 py-3 bg-gradient-to-r from-[#FF4B6B] to-[#8B31FF] text-white font-bold rounded-xl text-sm shadow-lg hover:brightness-110">
                          {loading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : (signupStep < 3 ? 'Next' : 'Complete')}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* --- RECOVERY --- */}
                  {isRecoveryView && (
                    <div className="space-y-4">
                      <p className="text-slate-400 text-sm text-center">Enter your email to receive the reset link.</p>
                      <div className="bg-[#121218] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3"><Mail className="w-4 h-4 text-slate-500" /><input type="email" placeholder="Registered email" value={email} onChange={e => setEmail(e.target.value)} className="bg-transparent w-full text-white text-sm outline-none" /></div>
                      <button onClick={handlePasswordRecovery} disabled={loading} className="w-full py-3 bg-[#31A8FF] text-white font-bold rounded-xl text-sm">Send Link</button>
                      <button onClick={() => setIsRecoveryView(false)} className="w-full text-center text-xs text-slate-500">Back</button>
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/5 text-center">
                    {!isRecoveryView && (
                      <div className="space-y-3">
                        <button onClick={() => { setIsLoginView(!isLoginView); setSignupStep(1); setError(null); }} className="text-sm text-slate-400">
                          {isLoginView ? "Don't have an account? " : 'Already have an account? '}

                          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] hover:opacity-80 transition-opacity">
                            {isLoginView ? 'Sign up' : 'Log in'}
                          </span>

                        </button>
                      </div>
                    )}
                    {isLoginView && !isRecoveryView && (
                      <div className="mt-4 flex justify-center w-full relative">
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
