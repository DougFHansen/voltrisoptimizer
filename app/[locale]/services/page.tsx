import { Metadata } from 'next';
"use client";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import Link from "next/link";
import NewsletterForm from '@/components/NewsletterForm';
import Ticket from '@/components/tickets/TicketList';
import type { Ticket as TicketType } from '@/types/ticket';
import { motion } from 'framer-motion';
import {
  FiMonitor, FiSettings, FiClock, FiBarChart2, FiDatabase,
  FiPrinter, FiShield, FiGlobe, FiTrendingUp, FiUsers,
  FiPhone, FiMail, FiMapPin, FiCreditCard, FiCloud,
  FiCheckCircle, FiCpu, FiTool, FiLock, FiShoppingCart
} from 'react-icons/fi';
import AnimatedSection from '@/components/AnimatedSection';
import { useAuth } from '@/app/hooks/useAuth';
import { toast } from 'react-hot-toast';


type ServiceOption = {
  id: string;
  title: string;
  price: number;
  description: string;
  categoryName: string;
  serviceName: string;
  redirectTo?: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  options: ServiceOption[];
};

type SchedulingType = 'now' | 'schedule' | 'later' | null;

type FormattingQuestions = {
  bootNormally: boolean | null;
  showsLogo: boolean | null;
  hasRequirements: boolean | null;
  hasWindows: boolean | null;
  hasInternet: boolean | null;
  hasPendrive: boolean | null;
  hasOtherComputer: boolean | null;
};

// Add this at the top of the file after the imports
const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full transform transition-all duration-300 scale-100 opacity-100 animate-modal-appear">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] p-[2px]">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#8B31FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">
            Progress Saved!
          </h3>
          <p className="text-gray-300 mb-6">
            When you return, you will continue exactly where you left off.
          </p>
          <button
            onClick={onClose}
            className="w-full py-3 px-4 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] rounded-lg text-white font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Ok, I will get it and come back
          </button>
        </div>
      </div>
    </div>
  );
};

// Add this component after the SuccessModal component
const ReturnModal = ({ isOpen, onClose, onContinue }: { isOpen: boolean; onClose: () => void; onContinue: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full transform transition-all duration-300 scale-100 opacity-100 animate-modal-appear">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] p-[2px]">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#8B31FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">
            Welcome back!
          </h3>
          <p className="text-gray-300 mb-6">
            Were you able to get the USB drive and access another computer with internet?
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={onContinue}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] rounded-lg text-white font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Yes, I have everything ready
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 px-4 bg-gray-700 rounded-lg text-gray-300 font-medium hover:bg-gray-600 transition-all duration-300"
            >
              Not yet, I need more time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};




export default function ServicesPage() {
  const router = useRouter();
  const supabase = createClient();
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<ServiceOption[]>([]);
  const [schedulingType, setSchedulingType] = useState<SchedulingType>(null);
  const [appointmentDateTime, setAppointmentDateTime] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [formattingAnswers, setFormattingAnswers] = useState<FormattingQuestions>({
    bootNormally: null,
    showsLogo: null,
    hasRequirements: null,
    hasWindows: null,
    hasInternet: null,
    hasPendrive: null,
    hasOtherComputer: null
  });
  const [isSavingProgress, setIsSavingProgress] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasScrolled = useRef(false);
  const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);
  const { user, loading: authLoading } = useAuth();
  const [isProcessingCheckout, setIsProcessingCheckout] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [initialServiceParam, setInitialServiceParam] = useState<string | null>(null);
  const [shouldScroll, setShouldScroll] = useState(true);
  const initialRender = useRef(true);
  const [tickets, setTickets] = useState<Required<TicketType>[]>([]);
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const formRef = useRef<HTMLDivElement>(null); // Reference for the form

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'formatacao',
      title: 'Full Formatting',
      options: [
        {
          id: 'formatacao_basica',
          title: 'Basic',
          price: 19.90,
          description: 'Backup, formatting, driver installation, and updates.',
          categoryName: 'Full Formatting',
          serviceName: 'Basic Formatting'
        },
        {
          id: 'formatacao_media',
          title: 'Standard',
          price: 29.90,
          description: 'Includes "Basic" + antivirus and basic optimization.',
          categoryName: 'Full Formatting',
          serviceName: 'Standard Formatting'
        },
        {
          id: 'formatacao_avancada',
          title: 'Advanced',
          price: 39.90,
          description: 'Includes "Standard" + medium performance optimization.',
          categoryName: 'Full Formatting',
          serviceName: 'Advanced Formatting'
        },
        {
          id: 'formatacao_corporativa',
          title: 'Business',
          price: 69.90,
          description: 'Includes "Advanced" + Office Suite (permanent*) and advanced optimization.',
          categoryName: 'Full Formatting',
          serviceName: 'Business Formatting'
        },
        {
          id: 'formatacao_gamer',
          title: 'Gaming',
          price: 89.90,
          description: 'Includes "Advanced" + Office Suite (optional) and extreme gaming optimization (FPS, input lag, etc.).',
          categoryName: 'Full Formatting',
          serviceName: 'Gaming Formatting'
        }
      ]
    },
    {
      id: 'otimizacao',
      title: 'Performance Optimization (No Formatting)',
      options: [
        {
          id: 'otimizacao_basica',
          title: 'Basic',
          price: 15.90,
          description: 'Drivers, updates, error correction, and basic optimization.',
          categoryName: 'Performance Optimization',
          serviceName: 'Basic Optimization'
        },
        {
          id: 'otimizacao_media',
          title: 'Standard',
          price: 19.90,
          description: 'Includes "Basic" + medium performance optimization.',
          categoryName: 'Performance Optimization',
          serviceName: 'Standard Optimization'
        },
        {
          id: 'otimizacao_avancada',
          title: 'Advanced',
          price: 29.90,
          description: 'Includes "Standard" + advanced performance optimization.',
          categoryName: 'Performance Optimization',
          serviceName: 'Advanced Optimization'
        }
      ]
    },
    {
      id: 'correcao_windows',
      title: 'Windows Error Correction',
      options: [
        {
          id: 'correcao_windows',
          title: 'Windows Error Correction',
          price: 9.90,
          description: 'Remote troubleshooting and error correction for Windows systems. System error correction, corrupted file repair, boot troubleshooting, system recovery, complete diagnosis, and detailed report.',
          categoryName: 'Windows Error Corrections',
          serviceName: 'Windows Error Correction'
        }
      ]
    },
    {
      id: 'instalacao_impressora',
      title: 'Printer Installation',
      options: [
        {
          id: 'impressora_basica',
          title: 'Printer Installation',
          price: 9.90,
          description: 'Simple installation, driver, and local print test.',
          categoryName: 'Printer Installation',
          serviceName: 'Printer Installation'
        }
      ]
    },
    {
      id: 'remocao_virus',
      title: 'Virus Removal',
      options: [
        {
          id: 'virus_basica',
          title: 'Virus Removal',
          price: 7.90,
          description: 'Scanning and removal of common viruses, malware, and spyware.',
          categoryName: 'Virus Removal',
          serviceName: 'Virus Removal'
        }
      ]
    },
    {
      id: 'recuperacao',
      title: 'Data Recovery',
      options: [
        {
          id: 'recuperacao_basica',
          title: 'Basic',
          price: 20.00,
          description: 'Recovery of deleted/corrupted files (standard software).',
          categoryName: 'Data Recovery',
          serviceName: 'Basic Recovery'
        },
        {
          id: 'recuperacao_media',
          title: 'Standard',
          price: 30.00,
          description: 'Complex cases, specialized tools, sector analysis.',
          categoryName: 'Data Recovery',
          serviceName: 'Standard Recovery'
        },
        {
          id: 'recuperacao_avancada',
          title: 'Advanced',
          price: 40.00,
          description: 'Drives with severe failures, cloning, bad block treatment.',
          categoryName: 'Data Recovery',
          serviceName: 'Advanced Recovery'
        }
      ]
    },
  ];

  useEffect(() => {
    const checkAuthAndRestoreForm = async () => {
      if (authLoading) return;
      setIsAuthenticated(!!user);

      const savedFormData = sessionStorage.getItem('serviceFormData');
      if (savedFormData && user) {
          try {
            const formData = JSON.parse(savedFormData);
            
            // If user logged out and has a service selected ready for checkout
            if (formData.readyForCheckout && formData.selectedServices?.[0]) {
               sessionStorage.removeItem('serviceFormData'); // Clear to avoid loop
               processCheckout(formData.selectedServices[0]);
            } else {
              // Only restore data if not for immediate checkout
              setSelectedServices(formData.selectedServices || []);
              setSchedulingType(formData.schedulingType || null);
              setAppointmentDateTime(formData.appointmentDateTime || '');
              setAdditionalInfo(formData.additionalInfo || '');
              setFormattingAnswers(formData.formattingAnswers || {});
            }
          } catch (error) {
            console.error('Error restoring form data:', error);
          }
      }
    };
    checkAuthAndRestoreForm();
  }, [user, authLoading]);

  // Unique effect to handle service initialization
  useEffect(() => {
    if (!initialRender.current) return;

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const abrirParam = params.get('abrir');
      if (abrirParam) {
        const category = serviceCategories.find(category => category.id === abrirParam);
        if (category) {
          // Schedule scroll for after the accordion opens
          const timer = setTimeout(() => {
            const element = document.getElementById(abrirParam);
            if (element) {
              const header = document.querySelector('header');
              const offset = header ? header.offsetHeight + 20 : 20;
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
              });
            }
          }, 400);
          return () => clearTimeout(timer);
        }
      } else {
        setOpenCategory(null);
        setSelectedCategory(null);
      }
    }

    initialRender.current = false;
  }, []);

  // Reset scroll state when changing pages
  useEffect(() => {
    const resetScroll = () => {
      hasScrolled.current = false;
    };
    return resetScroll;
  }, []);

  const toggleCategory = (categoryId: string) => {
    if (openCategory === categoryId) {
      setOpenCategory(null);
      setSelectedCategory(null);
    } else {
      setOpenCategory(categoryId);
      const category = serviceCategories.find(cat => cat.id === categoryId);
      if (category) {
        setSelectedCategory(category);
      }
    }
  };

  const handleServiceSelect = (option: ServiceOption) => {
    if (option.redirectTo) {
      router.push(option.redirectTo);
      return;
    }

    setSelectedServices(prev => {
      const isSelected = prev.some(service => service.id === option.id);
      if (isSelected) {
        return prev.filter(service => service.id !== option.id);
      } else {
        const otherServices = prev.filter(service => service.categoryName !== option.categoryName);
        return [...otherServices, option];
      }
    });
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, service) => total + service.price, 0);
  };

  const FormattingQuestionnaire = () => {
    if (selectedServices.length === 0) return null;

    const allAnswersPositive =
      formattingAnswers.bootNormally === true &&
      formattingAnswers.showsLogo === true &&
      formattingAnswers.hasRequirements === true;

    return (
      <div className="mt-4 p-4 bg-gray-700 rounded-lg space-y-4">
        <h4 className="text-lg font-bold text-white mb-4">
          Initial System Diagnosis
        </h4>

        {/* First Question - Does the PC Turn On? */}
        <div className="space-y-2 transition-all duration-300 ease-in-out">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF4B6B] to-[#8B31FF] flex items-center justify-center text-white font-semibold text-sm">
              1
            </div>
            <p className="text-gray-300 text-lg">Is the computer turning on?</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleFormattingAnswer('bootNormally', true)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 relative ${formattingAnswers.bootNormally === true
                ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/30'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                } before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-[#FF4B6B] before:via-[#8B31FF] before:to-[#31A8FF] before:rounded-lg before:-z-10 before:transition-all before:duration-300 hover:before:opacity-100 before:opacity-0`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Yes, it turns on normally
            </button>
            <button
              onClick={() => handleFormattingAnswer('bootNormally', false)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 relative ${formattingAnswers.bootNormally === false
                ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                } before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-[#FF4B6B] before:via-[#8B31FF] before:to-[#31A8FF] before:rounded-lg before:-z-10 before:transition-all before:duration-300 hover:before:opacity-100 before:opacity-0`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              It doesn't turn on
            </button>
          </div>
        </div>

        {/* Error Message - PC Doesn't Turn On */}
        {formattingAnswers.bootNormally === false && (
          <div className="mt-6 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500 rounded-xl transition-all duration-300 ease-in-out animate-fadeIn backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2 bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text">
                  Attention: In-Person Diagnosis Needed
                </h5>
                <p className="text-red-400/90 text-base leading-relaxed">
                  When the computer does not turn on, it may indicate various hardware problems such as the power supply, motherboard, or other components.
                  We recommend that you bring your equipment to our technical lab for a detailed in-person diagnosis.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Second Question - Shows Logo? */}
        {formattingAnswers.bootNormally === true && (
          <div className="space-y-2 transition-all duration-300 ease-in-out animate-fadeIn">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8B31FF] to-[#31A8FF] flex items-center justify-center text-white font-semibold text-sm">
                2
              </div>
              <p className="text-gray-300 text-lg">Does the startup screen show the manufacturer logo?</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleFormattingAnswer('showsLogo', true)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 relative ${formattingAnswers.showsLogo === true
                  ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  } before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-[#FF4B6B] before:via-[#8B31FF] before:to-[#31A8FF] before:rounded-lg before:-z-10 before:transition-all before:duration-300 hover:before:opacity-100 before:opacity-0`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Yes, it shows the logo
              </button>
              <button
                onClick={() => handleFormattingAnswer('showsLogo', false)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 relative ${formattingAnswers.showsLogo === false
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  } before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-[#FF4B6B] before:via-[#8B31FF] before:to-[#31A8FF] before:rounded-lg before:-z-10 before:transition-all before:duration-300 hover:before:opacity-100 before:opacity-0`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Black screen
              </button>
            </div>
          </div>
        )}

        {/* Error Message - Black Screen */}
        {formattingAnswers.showsLogo === false && (
          <div className="mt-6 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500 rounded-xl transition-all duration-300 ease-in-out animate-fadeIn backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2 bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text">
                  Attention: In-Person Diagnosis Needed
                </h5>
                <p className="text-red-400/90 text-base leading-relaxed">
                  When the computer turns on but the screen remains completely black (without showing any logo), this generally indicates a hardware 
                  problem such as the graphics card, RAM, or monitor. We recommend that you bring your equipment to our technical lab 
                  for a detailed in-person diagnosis.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Third Question - Windows and Internet */}
        {formattingAnswers.showsLogo === true && (
          <div className="space-y-2 transition-all duration-300 ease-in-out animate-fadeIn">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#31A8FF] to-[#FF4B6B] flex items-center justify-center text-white font-semibold text-sm">
                3
              </div>
              <p className="text-gray-300 text-lg">Can you access Windows and the internet?</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  handleFormattingAnswer('hasWindows', true);
                  handleFormattingAnswer('hasInternet', true);
                  handleFormattingAnswer('hasRequirements', true);
                }}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 relative ${formattingAnswers.hasWindows === true && formattingAnswers.hasInternet === true
                  ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  } before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-[#FF4B6B] before:via-[#8B31FF] before:to-[#31A8FF] before:rounded-lg before:-z-10 before:transition-all before:duration-300 hover:before:opacity-100 before:opacity-0`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Yes, both work
              </button>
              <button
                onClick={() => {
                  handleFormattingAnswer('hasWindows', false);
                  handleFormattingAnswer('hasInternet', false);
                }}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 relative ${formattingAnswers.hasWindows === false || formattingAnswers.hasInternet === false
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  } before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-[#FF4B6B] before:via-[#8B31FF] before:to-[#31A8FF] before:rounded-lg before:-z-10 before:transition-all before:duration-300 hover:before:opacity-100 before:opacity-0`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                They don't work
              </button>
            </div>
          </div>
        )}

        {/* Success Message - Has Windows and Internet */}
        {formattingAnswers.hasWindows === true && formattingAnswers.hasInternet === true && (
          <div className="mt-6 p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500 rounded-xl transition-all duration-300 ease-in-out animate-fadeIn backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-600 to-green-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2 bg-gradient-to-r from-green-500 to-green-400 text-transparent bg-clip-text">
                  System Ready for Formatting
                </h5>
                <div className="text-green-400/90 text-base leading-relaxed">
                  <p>Great! You have the basic requirements needed to proceed with the formatting service.</p>
                  <p className="mt-2">To continue, fill in your details in the form on the side and our technical team
                    will contact you to schedule the best time and provide detailed instructions.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fourth Question - USB Drive and Other Computer */}
        {formattingAnswers.hasWindows === false && formattingAnswers.hasInternet === false && (
          <div className="space-y-2 transition-all duration-300 ease-in-out animate-fadeIn mt-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF4B6B] to-[#8B31FF] flex items-center justify-center text-white font-semibold text-sm">
                4
              </div>
              <p className="text-gray-300 text-lg">Do you have access to a USB drive and another computer?</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
              <h6 className="text-white font-medium mb-2">Requirements:</h6>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>USB drive with 8GB or more</li>
                <li>Computer with internet access</li>
              </ul>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  handleFormattingAnswer('hasPendrive', true);
                  handleFormattingAnswer('hasOtherComputer', true);
                  handleFormattingAnswer('hasRequirements', true);
                }}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 relative ${formattingAnswers.hasPendrive === true && formattingAnswers.hasOtherComputer === true
                  ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  } before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-[#FF4B6B] before:via-[#8B31FF] before:to-[#31A8FF] before:rounded-lg before:-z-10 before:transition-all before:duration-300 hover:before:opacity-100 before:opacity-0`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Yes, I have both
              </button>
              <button
                onClick={() => {
                  handleFormattingAnswer('hasPendrive', false);
                  handleFormattingAnswer('hasOtherComputer', false);
                  handleFormattingAnswer('hasRequirements', false);
                }}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 relative ${formattingAnswers.hasPendrive === false || formattingAnswers.hasOtherComputer === false
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  } before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-[#FF4B6B] before:via-[#8B31FF] before:to-[#31A8FF] before:rounded-lg before:-z-10 before:transition-all before:duration-300 hover:before:opacity-100 before:opacity-0`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                I don't have either
              </button>
              <button
                onClick={() => {
                  handleFormattingAnswer('hasPendrive', true);
                  handleFormattingAnswer('hasOtherComputer', false);
                  handleFormattingAnswer('hasRequirements', false);
                }}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 relative ${formattingAnswers.hasPendrive === true && formattingAnswers.hasOtherComputer === false
                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white shadow-lg shadow-yellow-500/30'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  } before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-[#FF4B6B] before:via-[#8B31FF] before:to-[#31A8FF] before:rounded-lg before:-z-10 before:transition-all before:duration-300 hover:before:opacity-100 before:opacity-0`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                I have only one of them
              </button>
            </div>
          </div>
        )}

        {/* Success Message - Has USB Drive and Other Computer */}
        {formattingAnswers.hasPendrive === true && formattingAnswers.hasOtherComputer === true && (
          <div className="mt-6 p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500 rounded-xl transition-all duration-300 ease-in-out animate-fadeIn backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-600 to-green-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2 bg-gradient-to-r from-green-500 to-green-400 text-transparent bg-clip-text">
                  System Ready for Formatting
                </h5>
                <div className="text-green-400/90 text-base leading-relaxed">
                  <p>Great! You have the necessary requirements to proceed with the formatting service.</p>
                  <p className="mt-2">To continue, fill in your details in the form on the side and our technical team
                    will contact you to schedule the best time and provide detailed instructions.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Message - Requirements Missing */}
        {(formattingAnswers.hasRequirements === false ||
          (formattingAnswers.hasPendrive === true && formattingAnswers.hasOtherComputer === false) ||
          (formattingAnswers.hasPendrive === false && formattingAnswers.hasOtherComputer === true)) && (
            <div className="mt-6 p-6 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500 rounded-xl transition-all duration-300 ease-in-out animate-fadeIn backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-transparent bg-clip-text">
                    Necessary Requirements
                  </h5>
                  <div className="text-yellow-400/90 text-base leading-relaxed space-y-2">
                    <p>To safely perform the formatting process, you need to have:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>A USB drive with a minimum capacity of 8GB to create the OS installation media</li>
                      <li>Another working computer with internet access to download the necessary files</li>
                    </ul>
                    <div className="mt-4 flex flex-col gap-4">
                      <p>Please provide ALL items before proceeding with the service.</p>
                      <button
                        onClick={() => handleSaveProgress()}
                        className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
                      >
                        {isSavingProgress ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Saving...
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                            </svg>
                            I'll get it and come back later
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  };

  const handleFormattingAnswer = (question: keyof FormattingQuestions, value: boolean) => {
    setFormattingAnswers(prev => {
      const newAnswers = {
        ...prev,
        [question]: value
      };

      // Check if all necessary questions have been answered
      const isFormattingSelected = selectedServices.some(service => service.categoryName === 'Full Formatting');

      if (isFormattingSelected) {
        // For formatting, check if all questions have been answered
        const allQuestionsAnswered =
          newAnswers.bootNormally !== null &&
          newAnswers.showsLogo !== null &&
          newAnswers.hasRequirements !== null;

        // If all questions are answered and system is ready, scroll
        if (allQuestionsAnswered &&
          ((newAnswers.bootNormally === true && newAnswers.showsLogo === true && newAnswers.hasRequirements === true) ||
            (newAnswers.hasPendrive === true && newAnswers.hasOtherComputer === true))) {
          setTimeout(() => {
            if (window.innerWidth <= 768 && formRef.current) {
              const header = document.querySelector('header');
              const offset = header ? header.offsetHeight + 16 : 16;
              const top = formRef.current.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }, 500);
        }
      } else {
        // For other services, scroll immediately
        setTimeout(() => {
          if (window.innerWidth <= 768 && formRef.current) {
            const header = document.querySelector('header');
            const offset = header ? header.offsetHeight + 16 : 16;
            const top = formRef.current.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 300);
      }

      return newAnswers;
    });
  };

  const resetFormattingAnswers = () => {
    setFormattingAnswers({
      bootNormally: null,
      showsLogo: null,
      hasRequirements: null,
      hasWindows: null,
      hasInternet: null,
      hasPendrive: null,
      hasOtherComputer: null
    });
  };

  const generateWhatsAppMessage = (): string => {
    const selectedServicesList = selectedServices;

    if (selectedServicesList.length === 0) {
      alert('Please select at least one service.');
      return '#';
    }

    if (schedulingType === 'schedule' && !appointmentDateTime) {
      alert('Please select the date and time for the appointment.');
      return '#';
    }

    let message = `*NEW SERVICE REQUEST*\n\n`;
    message += `\n*Selected Services:*\n`;

    selectedServicesList.forEach(service => {
      message += `- ${service.categoryName} - ${service.serviceName}: $${service.price.toFixed(2)}\n`;
    });

    // Add questionnaire answers if formatting is selected
    if (selectedServices.some(service => service.categoryName === 'Full Formatting')) {
      message += `\n*Computer Status:*\n`;
      if (formattingAnswers.bootNormally !== null) {
        message += `- Turns on normally: ${formattingAnswers.bootNormally ? 'Yes' : 'No'}\n`;
      }
      if (formattingAnswers.showsLogo !== null) {
        message += `- Shows logo: ${formattingAnswers.showsLogo ? 'Yes' : 'No'}\n`;
      }
    }

    message += `\n`;

    if (additionalInfo) {
      message += `*Additional Information:*\n${additionalInfo}\n\n`;
    }

    const totalPrice = calculateTotal();
    message += `*Total:* $${totalPrice.toFixed(2)}`;

    const phoneNumber = '5511996716235';
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  // Input sanitization functions
  const sanitizeText = (text: string): string => {
    return text.replace(/[<>]/g, '').trim();
  };

  const sanitizePhone = (phone: string): string => {
    return phone.replace(/[^0-9+\-()\s]/g, '').trim();
  };

  const validateEmail = (email: string): boolean => {
    if (!email) return true; // Email is optional
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    let isValid = true;

    // Validate services
    const hasSelectedService = selectedServices.length > 0;
    if (!hasSelectedService) {
      errors.services = 'Please select at least one service.';
      isValid = false;
    }

    // Validate scheduling type
    if (!schedulingType) {
      errors.scheduling = 'Please select when you want to be served.';
      isValid = false;
    } else if (schedulingType === 'schedule' && !appointmentDateTime) {
      errors.appointment = 'Please select the date and time for the appointment.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const processCheckout = async (service: ServiceOption) => {
    if (!user) {
        // Save state to process after login
        const formData = {
            selectedServices: [service],
            schedulingType,
            appointmentDateTime,
            additionalInfo,
            formattingAnswers,
            readyForCheckout: true
        };
        sessionStorage.setItem('serviceFormData', JSON.stringify(formData));
        toast.error("To proceed with the acquisition, please log in or sign up.");
        router.push(`/login?redirect=/services`);
        return;
    }

    setIsProcessingCheckout(true);
    toast.loading(`Starting secure checkout for ${service.title}...`);

    try {
        const response = await fetch('/api/stripe/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                license_type: service.id,
                user_id: user.id,
                customer_email: user.email,
                customer_name: user.user_metadata?.full_name || 'Voltris Client',
            }),
        });

        const data = await response.json();
        if (data.url) {
            window.location.href = data.url;
        } else {
            throw new Error(data.error || 'Error generating payment session');
        }
    } catch (error: any) {
        toast.error(`Checkout failed: ${error.message}`);
        console.error('Checkout error:', error);
    } finally {
        setIsProcessingCheckout(false);
        toast.dismiss();
    }
  };

  const handleSubmitService = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    const mainService = selectedServices[0];
    if (!mainService) {
        toast.error("Select a service to continue.");
        return;
    }

    processCheckout(mainService);
  };

  const totalPrice = 0;

  const handleSaveProgress = async () => {
    setIsSavingProgress(true);
    try {
      const formData = {
        selectedServices,
        schedulingType,
        appointmentDateTime,
        additionalInfo,
        formattingAnswers,
        needsToConfirmRequirements: true // Add flag to indicate requirements confirmation is needed
      };
      sessionStorage.setItem('serviceFormData', JSON.stringify(formData));
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error saving progress:', error);
      alert('Error saving progress. Please try again.');
    } finally {
      setIsSavingProgress(false);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    router.push('/');
  };

  // Modify function to check needsToConfirmRequirements flag
  useEffect(() => {
    const savedFormData = sessionStorage.getItem('serviceFormData');
    const userIsReady = localStorage.getItem('userIsReady');

    if (savedFormData) {
      try {
        const formData = JSON.parse(savedFormData);
        // Show modal if user isn't ready AND
        // (has false requirements OR needs to confirm requirements)
        if (!userIsReady && (formData.formattingAnswers?.hasRequirements === false || formData.needsToConfirmRequirements)) {
          setIsReturnModalOpen(true);
        }
      } catch (error) {
        console.error('Error checking saved progress:', error);
      }
    }
  }, []);

  // Modify function to remove needsToConfirmRequirements flag when user is ready
  const handleContinueProgress = () => {
    const savedFormData = sessionStorage.getItem('serviceFormData');
    if (savedFormData) {
      try {
        const formData = JSON.parse(savedFormData);
        const updatedFormData = {
          ...formData,
          formattingAnswers: {
            ...formData.formattingAnswers,
            hasRequirements: true,
            hasPendrive: true,
            hasOtherComputer: true
          },
          needsToConfirmRequirements: false // Remove flag when user confirms they are ready
        };
        sessionStorage.setItem('serviceFormData', JSON.stringify(updatedFormData));
        setSelectedServices(formData.selectedServices);
        setSchedulingType(formData.schedulingType);
        setAppointmentDateTime(formData.appointmentDateTime);
        setAdditionalInfo(formData.additionalInfo);
        setFormattingAnswers({
          ...formData.formattingAnswers,
          hasRequirements: true,
          hasPendrive: true,
          hasOtherComputer: true
        });
      } catch (error) {
        console.error('Error restoring form data:', error);
      }
    }
    // Save to localStorage that user is ready
    localStorage.setItem('userIsReady', 'true');
    setIsReturnModalOpen(false);
  };

  // Modify function to keep needsToConfirmRequirements flag when user isn't ready
  const handleReturnModalClose = () => {
    setIsReturnModalOpen(false);
    const savedFormData = sessionStorage.getItem('serviceFormData');
    if (savedFormData) {
      try {
        const formData = JSON.parse(savedFormData);
        const updatedFormData = {
          ...formData,
          needsToConfirmRequirements: true // Keep flag when user is not yet ready
        };
        sessionStorage.setItem('serviceFormData', JSON.stringify(updatedFormData));
      } catch (error) {
        console.error('Error updating form data:', error);
      }
    }
  };

  const ServiceProcess = () => {
    return (
      <AnimatedSection>
        <div className="py-20 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden md:block"></div>

          <div className="text-center mb-16 relative z-10">
            <span className="text-[#31A8FF] font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 block">Workflow</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] to-[#8B31FF]">It Works?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { icon: FiClock, title: "Scheduling", step: "01", desc: "Choose the best time in the schedule." },
              { icon: FiShield, title: "Security", step: "02", desc: "Service contract and warranties." },
              { icon: FiMonitor, title: "Execution", step: "03", desc: "Secure and monitored remote access." },
              { icon: FiCheckCircle, title: "Completion", step: "04", desc: "Final tests and approval." }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-[#0A0A0F] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#31A8FF]/50 transition-all duration-300 shadow-lg relative z-10">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#31A8FF] text-black font-bold flex items-center justify-center text-xs shadow-lg">
                      {item.step}
                    </div>
                    <item.icon className="w-8 h-8 text-white group-hover:text-[#31A8FF] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm max-w-[200px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    );
  };

  const CompanyInfo = () => {
    return (
      <AnimatedSection>
        <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B31FF]/10 border border-[#8B31FF]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8B31FF] animate-pulse"></span>
              <span className="text-xs font-bold text-[#8B31FF] tracking-widest uppercase">Why VOLTRIS?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              <span className="text-[#e2e8f0]">Technology that</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] to-[#8B31FF]">Drives Results.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Unlike common support, we apply software engineering to extract the maximum from your equipment. Every bit optimized for peak performance.
            </p>
            <Link href="/sobre" className="inline-flex items-center gap-2 text-white border-b border-[#31A8FF] hover:text-[#31A8FF] transition-colors pb-1 font-medium group">
              Learn about our history
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: FiShield, title: "Total Warranty", desc: "Post-service support included.", color: "text-[#8B31FF]", bg: "bg-[#8B31FF]/10", border: "border-[#8B31FF]/20" },
              { icon: FiUsers, title: "Real Specialists", desc: "Certified senior team.", color: "text-[#31A8FF]", bg: "bg-[#31A8FF]/10", border: "border-[#31A8FF]/20" },
              { icon: FiTrendingUp, title: "Performance", desc: "Focus on FPS and speed.", color: "text-[#00FF94]", bg: "bg-[#00FF94]/10", border: "border-[#00FF94]/20" },
              { icon: FiLock, title: "Security", desc: "Encrypted and secure access.", color: "text-[#FF4B6B]", bg: "bg-[#FF4B6B]/10", border: "border-[#FF4B6B]/20" }
            ].map((item, i) => (
              <div key={i} className={`bg-[#0A0A0F] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-all duration-300 group`}>
                <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    );
  };

  const WHATSAPP_NUMBER = '5511996716235'; // Replace with real number

  type WhatsAppOrder = { serviceName: string };
  const buildWhatsAppMessage = (order: WhatsAppOrder) => {
    return `Hello! I just requested the service: ${order.serviceName}. I would like to complete the payment via PayPal or Credit Card.`;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "VOLTRIS IT Services",
            "description": "Specialized IT services: computer formatting, Windows optimization, virus removal, program installation, and remote technical support.",
            "url": "https://www.voltrisoptimizer.com/services",
            "provider": {
              "@type": "Organization",
              "name": "VOLTRIS",
              "url": "https://www.voltrisoptimizer.com"
            },
            "serviceType": "IT Technical Support",
            "areaServed": {
              "@type": "Country",
              "name": "Brazil"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "IT Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Computer Formatting",
                    "description": "Complete formatting with data backup and program installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Windows Optimization",
                    "description": "Performance and system speed optimization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Virus Removal",
                    "description": "Virus removal and computer protection"
                  }
                }
              ]
            }
          })
        }}
      />
      <div className="bg-[#050510] min-h-screen relative overflow-x-hidden font-sans selection:bg-[#31A8FF]/30 text-white">
        {/* Background Effects (from FAQ) */}
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-50"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#31A8FF]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#8B31FF]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <Header />

        <AnimatedSection>
          <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-transparent">

            <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 hover:bg-white/10 transition-colors cursor-default">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF94] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FF94]"></span>
                  </span>
                  <span className="text-sm font-bold text-white tracking-widest uppercase">Immediate Service</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1] text-center">
                  Service and Optimization <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">
                    Remote Anywhere in the World
                  </span>
                </h1>

                <p className="text-lg md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-12 font-light tracking-wide">
                  The evolution of technical support. Formatting, security and high-performance optimization, 100% remote and secure.
                </p>


              </motion.div>
            </div>


            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
            </motion.div>
          </section>
        </AnimatedSection>

        <main className="px-4 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto">

            <ServiceProcess />

            <div id="catalogo" className="grid lg:grid-cols-3 gap-8 mb-20 relative scroll-mt-32">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-[#0A0A0F]/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
                      <span className="p-2 bg-gradient-to-r from-[#8B31FF]/20 to-[#31A8FF]/20 rounded-xl border border-white/5 text-[#8B31FF]"><FiSettings className="w-6 h-6" /></span>
                      Service Catalog
                    </h2>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-widest hidden sm:block">Select a category</span>
                  </div>

                  <div className="space-y-4">
                    {serviceCategories.map((category) => (
                      <div key={category.id} className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 transition-all duration-300 hover:border-white/10 group">
                        <button
                          id={category.id}
                          onClick={() => toggleCategory(category.id)}
                          className="w-full flex justify-between items-center px-4 sm:px-6 py-5 focus:outline-none transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl transition-all duration-500 relative ${selectedCategory?.id === category.id
                              ? 'bg-gradient-to-r from-[#FF4B6B] to-[#8B31FF] shadow-[0_0_20px_rgba(139,49,255,0.3)] text-white'
                              : 'bg-white/5 text-slate-400 group-hover:text-white group-hover:bg-white/10'
                              }`}>
                              {category.id === 'formatacao' && <FiMonitor className="w-6 h-6" />}
                              {category.id === 'otimizacao' && <FiTrendingUp className="w-6 h-6" />}
                              {category.id === 'correcao_windows' && <FiTool className="w-6 h-6" />}
                              {category.id === 'instalacao_impressora' && <FiPrinter className="w-6 h-6" />}
                              {category.id === 'remocao_virus' && <FiShield className="w-6 h-6" />}
                              {category.id === 'recuperacao' && <FiDatabase className="w-6 h-6" />}
                              {category.id === 'instalacao_programas' && <FiSettings className="w-6 h-6" />}
                              {category.id === 'suporte_windows' && <FiCloud className="w-6 h-6" />}
                              {category.id === 'criacao_sites' && <FiGlobe className="w-6 h-6" />}
                            </div>
                            <div className="text-left">
                              <h3 className={`text-lg font-bold transition-colors duration-300 ${selectedCategory?.id === category.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                {category.title}
                              </h3>
                              {/* Subtitle logic could go here if needed */}
                            </div>
                          </div>

                          <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${selectedCategory?.id === category.id ? 'bg-white text-black rotate-180' : 'bg-transparent text-slate-500 group-hover:border-white/30 group-hover:text-white'}`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>

                        <div
                          className={`transition-all duration-500 ease-in-out overflow-hidden ${openCategory === category.id
                            ? 'max-h-[2000px] opacity-100'
                            : 'max-h-0 opacity-0'
                            }`}
                        >
                          <div className="bg-[#05050A]/50 border-t border-white/5 p-4 sm:p-6 space-y-3">
                            {category.options.map((option) => (
                              <div key={option.id}>
                                <div
                                  onClick={() => handleServiceSelect(option)}
                                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${option.redirectTo
                                    ? 'bg-[#31A8FF]/10 border-[#31A8FF]/30 hover:border-[#31A8FF]'
                                    : selectedServices.some(service => service.id === option.id)
                                      ? 'bg-[#8B31FF]/20 border-[#8B31FF]/50 shadow-[0_0_15px_rgba(139,49,255,0.1)]'
                                      : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                                    }`}
                                >
                                  <div className="flex justify-between items-start gap-4">
                                    <div className="flex-1">
                                      <h4 className={`text-base font-bold flex items-center gap-2 ${selectedServices.some(service => service.id === option.id) ? 'text-white' : 'text-slate-200'}`}>
                                        {option.title}
                                        {selectedServices.some(service => service.id === option.id) && !option.redirectTo && (
                                          <FiCheckCircle className="w-4 h-4 text-[#00FF94]" />
                                        )}
                                        {option.redirectTo && <FiGlobe className="w-4 h-4 text-[#31A8FF]" />}
                                      </h4>
                                      <p className="text-xs sm:text-sm mt-1.5 text-slate-400 font-light leading-relaxed">
                                        {option.description}
                                      </p>
                                    </div>
                                    {!option.redirectTo && (
                                      <span className={`text-sm sm:text-base font-bold whitespace-nowrap ${selectedServices.some(service => service.id === option.id)
                                        ? 'text-[#00FF94]'
                                        : 'text-slate-400'
                                        }`}>
                                        $ {option.price.toFixed(2)}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {/* Inline Diagnosis */}
                                {category.id === 'formatacao' &&
                                  selectedServices.some(service => service.id === option.id) &&
                                  <FormattingQuestionnaire />}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Column Sticky */}
              <div className="lg:col-span-1">
                <div ref={formRef} className="sticky top-32">
                  <div className="bg-[#0A0A0F]/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Decorative Gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-[#31A8FF]/20 to-transparent blur-3xl rounded-full pointer-events-none"></div>

                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-white relative z-10">
                      <span className="p-2 bg-gradient-to-r from-[#31A8FF]/20 to-[#8B31FF]/20 rounded-xl border border-white/5 text-[#31A8FF]"><FiShoppingCart className="w-5 h-5" /></span>
                      Finalize Order
                    </h2>

                    <div className="space-y-6 relative z-10">

                        {/* Scheduling Selector */}
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                            Service Type
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              type="button"
                              onClick={() => setSchedulingType('now')}
                              className={`px-3 py-4 rounded-xl text-sm font-bold transition-all duration-300 flex flex-col items-center justify-center gap-2 border ${schedulingType === 'now'
                                ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                                : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                              <FiClock className="w-5 h-5" />
                              <span>Immediate</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setSchedulingType('schedule')}
                              className={`px-3 py-4 rounded-xl text-sm font-bold transition-all duration-300 flex flex-col items-center justify-center gap-2 border ${schedulingType === 'schedule'
                                ? 'bg-gradient-to-r from-[#8B31FF] to-[#31A8FF] text-white border-transparent shadow-[0_0_15px_rgba(139,49,255,0.3)]'
                                : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                              <FiBarChart2 className="w-5 h-5" />
                              <span>Schedule</span>
                            </button>
                          </div>
                          {formErrors.scheduling && <p className="text-xs text-red-400 pl-1">{formErrors.scheduling}</p>}
                        </div>

                        {/* Date Input */}
                        {schedulingType === 'schedule' && (
                          <div className="space-y-2 animate-fadeIn">
                            <label htmlFor="datetime" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                              Date and Time
                            </label>
                            <input
                              type="datetime-local"
                              id="datetime"
                              value={appointmentDateTime}
                              onChange={(e) => setAppointmentDateTime(e.target.value)}
                              className={`w-full px-4 py-3 bg-[#121218] border ${formErrors.appointment ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:border-[#8B31FF] focus:bg-[#1A1A23] text-white text-sm transition-colors`}
                            />
                            {formErrors.appointment && <p className="text-xs text-red-400 pl-1">{formErrors.appointment}</p>}
                          </div>
                        )}

                        {/* Observations Area */}
                        <div className="space-y-2">
                          <label htmlFor="additionalInfo" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                            Observations
                          </label>
                          <textarea
                            id="additionalInfo"
                            value={additionalInfo}
                            onChange={(e) => setAdditionalInfo(e.target.value)}
                            rows={3}
                            className="w-full px-4 py-3 bg-[#121218] border border-white/10 rounded-xl focus:outline-none focus:border-[#31A8FF] focus:bg-[#1A1A23] text-white text-sm resize-none transition-colors"
                            placeholder="Additional details..."
                          />
                        </div>

                      {/* Total Box Removed, replaced with simple CTA */}
                      <div className="pt-4 border-t border-white/10 space-y-4">
                        <button
                          onClick={handleSubmitService}
                          disabled={isProcessingCheckout}
                          className="group w-full py-4 text-center font-bold text-white bg-white rounded-xl hover:bg-[#F3F4F6] transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] relative overflow-hidden disabled:opacity-50"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2 text-[#050510]">
                            {isProcessingCheckout ? 'PROCESSING...' : 'COMPLETE PURCHASE'} <FiShoppingCart className="w-5 h-5" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CompanyInfo />
          </div>
        </main>

        <Footer />
        <SuccessModal isOpen={isModalOpen} onClose={handleModalClose} />
        <ReturnModal
          isOpen={isReturnModalOpen}
          onClose={handleReturnModalClose}
          onContinue={handleContinueProgress}
        />
      </div>
    </>
  );
}