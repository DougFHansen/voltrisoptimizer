'use client';

import { useTranslation } from '@/contexts/I18nContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Gamepad2, Monitor, Shield, Cpu } from 'lucide-react';

interface ServicesSectionProps {
  title?: string;
  locale: string;
}

const serviceIcons = {
  optimization: Wrench,
  gaming: Gamepad2,
  support: Monitor,
  security: Shield,
  hardware: Cpu
};

const services = [
  {
    key: 'optimization',
    titleKey: 'services.optimization',
    descriptionKey: 'services.paragraphs.optimization',
    href: '/otimizacao-pc'
  },
  {
    key: 'gaming',
    titleKey: 'services.headings.gaming',
    descriptionKey: 'services.paragraphs.gaming',
    href: '/guides'
  },
  {
    key: 'support',
    titleKey: 'services.headings.main',
    descriptionKey: 'services.paragraphs.intro',
    href: '/contact'
  },
  {
    key: 'security',
    titleKey: 'services.headings.maintenance',
    descriptionKey: 'services.paragraphs.intro',
    href: '/it-technician'
  },
  {
    key: 'hardware',
    titleKey: 'services.headings.emergency',
    descriptionKey: 'services.paragraphs.intro',
    href: '/services'
  }
];

export default function ServicesSection({ title, locale }: ServicesSectionProps) {
  const { t } = useTranslation('services');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title || t('headings.main')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('paragraphs.intro')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = serviceIcons[service.key as keyof typeof serviceIcons] || Monitor;
            
            return (
              <Card 
                key={service.key} 
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {t(service.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed mb-6">
                    {t(service.descriptionKey)}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-purple-50 transition-colors duration-300"
                    onClick={() => {
                      window.location.href = service.href;
                    }}
                  >
                    {t('buttons.scheduleService')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-full">
            <Shield className="mr-2 h-5 w-5" />
            <span className="font-medium">
              {t('common.siteName')} {t('navigation.services')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
