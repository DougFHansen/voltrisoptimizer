'use client';

import React, { useEffect } from 'react';
import { useI18n } from '@/contexts/I18nContext';

export default function I18nDebug() {
  const { locale, t, isRTL, direction } = useI18n();

  useEffect(() => {
    console.log('🔍 I18n Debug Info:', {
      locale,
      isRTL,
      direction,
      sampleTranslation: t('home.services.optimizer.title'),
      windowLocation: typeof window !== 'undefined' ? window.location.pathname : 'server'
    });
  }, [locale, t]);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999
    }}>
      <div>Locale: {locale}</div>
      <div>Dir: {direction}</div>
      <div>Sample: {t('home.services.optimizer.title')}</div>
    </div>
  );
}
