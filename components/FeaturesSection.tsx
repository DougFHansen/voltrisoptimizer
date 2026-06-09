'use client';

import { useTranslation } from '@/contexts/I18nContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Shield, Globe, Users, TrendingUp } from 'lucide-react';

interface FeaturesSectionProps {
  title?: string;
  description?: string;
  features?: string[];
  locale: string;
}

const featureIcons = [
  Zap,
  Shield, 
  Globe,
  Users,
  TrendingUp,
  CheckCircle
];

export default function FeaturesSection({ 
  title, 
  description, 
  features, 
  locale 
}: FeaturesSectionProps) {
  const { t } = useTranslation('home');

  const featuresList = Array.isArray(features) 
    ? features 
    : (features ? [features] : (Array.isArray(t('lists.features')) ? t('lists.features') : []));

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title || t('headings.features')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description || t('paragraphs.features')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature: string, index: number) => {
            if (!feature || typeof feature !== 'string') return null;
            
            const IconComponent = featureIcons[index % featureIcons.length];
            
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-800 rounded-full">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span className="font-medium">
              {t('common.siteName')} {t('common.downloadButton')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
