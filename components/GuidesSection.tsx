'use client';

import { useTranslation } from '@/contexts/I18nContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, TrendingUp, Monitor, Gamepad2, Settings } from 'lucide-react';

interface GuidesSectionProps {
  title?: string;
  description?: string;
  locale: string;
}

const guideCategories = [
  {
    icon: Gamepad2,
    titleKey: 'categories.gaming',
    descriptionKey: 'categories.gaming',
    count: '150+',
    href: '/guides/gaming'
  },
  {
    icon: Monitor,
    titleKey: 'categories.windows',
    descriptionKey: 'categories.windows',
    count: '100+',
    href: '/guides/windows'
  },
  {
    icon: Settings,
    titleKey: 'categories.hardware',
    descriptionKey: 'categories.hardware',
    count: '50+',
    href: '/guides/hardware'
  },
  {
    icon: TrendingUp,
    titleKey: 'categories.optimization',
    descriptionKey: 'categories.optimization',
    count: '75+',
    href: '/guides/optimization'
  }
];

const popularGuides = [
  {
    title: 'SSD vs HDD - Complete Guide 2026',
    category: 'Hardware',
    views: '25K',
    href: '/guides/ssd-vs-hdd-guide'
  },
  {
    title: 'Best DNS for Games 2026',
    category: 'Gaming',
    views: '18K',
    href: '/guides/best-dns-games-2026'
  },
  {
    title: 'Debloat Windows 11 - PowerShell',
    category: 'Windows',
    views: '32K',
    href: '/guides/debloat-windows-11-optimization-powershell'
  }
];

export default function GuidesSection({ title, description, locale }: GuidesSectionProps) {
  const { t } = useTranslation('guides');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title || t('headings.main')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description || t('paragraphs.intro')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guideCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white shadow-md"
              >
                <CardHeader className="text-center pb-3">
                  <div className="mx-auto w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {t(category.titleKey)}
                  </CardTitle>
                  <div className="text-2xl font-bold text-purple-600">
                    {category.count}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-purple-50 transition-colors duration-300"
                    onClick={() => {
                      window.location.href = category.href;
                    }}
                  >
                    {t('buttons.browseAll')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Popular Guides */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-purple-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {t('headings.popular')}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularGuides.map((guide, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                      {guide.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {guide.views} views
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                    {guide.title}
                  </h4>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      window.location.href = guide.href;
                    }}
                  >
                    {t('buttons.readMore')}
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              window.location.href = '/guides';
            }}
          >
            <BookOpen className="mr-2 h-5 w-5" />
            {t('buttons.browseAll')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
