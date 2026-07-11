'use client';

import { useTranslation } from '@/contexts/I18nContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Star } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  ctaText?: string;
  locale: string;
}

export default function CTASection({ title, ctaText, locale }: CTASectionProps) {
  const { t } = useTranslation('home');

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <Star className="mr-2 h-5 w-5 text-yellow-400" />
          <span className="text-sm font-medium">
            {t('common.freeDownload')} • 4.9/5 Rating
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          {title || t('headings.cta')}
        </h2>

        {/* Description */}
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of users who have transformed their PC performance with Voltris Optimizer. Start your optimization journey today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            onClick={() => {
              window.location.href = '/download';
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            {ctaText || t('buttons.getStarted')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            onClick={() => {
              window.location.href = '/demo';
            }}
          >
            {t('buttons.learnMore')}
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-300 mb-1">No Ads</div>
            <div className="text-white/70 text-sm">Clean Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-300 mb-1">100% Free</div>
            <div className="text-white/70 text-sm">No Hidden Costs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-300 mb-1">Safe</div>
            <div className="text-white/70 text-sm">Virus Scanned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300 mb-1">Updated</div>
            <div className="text-white/70 text-sm">Regular Updates</div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex items-center justify-center space-x-8 text-white/70">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm font-bold">50K+</span>
              </div>
              <span className="text-sm">Downloads</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm font-bold">4.9</span>
              </div>
              <span className="text-sm">Rating</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm font-bold">24/7</span>
              </div>
              <span className="text-sm">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
