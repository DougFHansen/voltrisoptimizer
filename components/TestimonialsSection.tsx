'use client';

import { useTranslation } from '@/contexts/I18nContext';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  title?: string;
  locale: string;
}

const testimonials = [
  {
    name: 'João Silva',
    location: 'São Paulo, Brazil',
    rating: 5,
    text: 'Voltris Optimizer completely transformed my gaming PC. My FPS increased by 40% and input lag decreased drastically. Highly recommended!',
    avatar: '👨‍💻'
  },
  {
    name: 'Maria Garcia',
    location: 'Madrid, Spain',
    rating: 5,
    text: 'Incredible optimization tool. My PC booted 3 times faster after using Voltris. The technical support is excellent.',
    avatar: '👩‍💼'
  },
  {
    name: 'John Smith',
    location: 'New York, USA',
    rating: 5,
    text: 'Best optimization software I\'ve ever used. The one-click optimization feature is amazing. My gaming performance improved significantly.',
    avatar: '🎮'
  },
  {
    name: 'Pierre Dubois',
    location: 'Paris, France',
    rating: 5,
    text: 'Exceptional software! My PC is much more responsive and games run perfectly. I highly recommend it.',
    avatar: '🖥️'
  },
  {
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    rating: 5,
    text: 'It is the best optimization software. PC performance has improved dramatically, and the gaming experience has been greatly improved.',
    avatar: '👨‍🎓'
  },
  {
    name: 'Ahmed Hassan',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Excellent software for computer performance optimization. My device\\'s speed has noticeably increased, and the gaming experience has significantly improved.',
    avatar: '💻'
  }
];

export default function TestimonialsSection({ title, locale }: TestimonialsSectionProps) {
  const { t } = useTranslation('home');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title || t('headings.testimonials')}
          </h2>
          <div className="flex items-center justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-xl font-semibold text-gray-700">4.9/5</span>
          </div>
          <p className="text-gray-600 mt-2">Based on 1,250+ reviews worldwide</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white shadow-lg"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-purple-200 group-hover:text-purple-300 transition-colors duration-300" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="text-3xl mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-purple-100">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">300+</div>
              <div className="text-purple-100">Technical Guides</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-purple-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Technical Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
