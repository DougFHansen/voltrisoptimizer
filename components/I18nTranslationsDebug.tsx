'use client';

import React, { useEffect } from 'react';
import { useI18n } from '@/contexts/I18nContext';

export default function I18nTranslationsDebug() {
  const { locale, t, isRTL, direction } = useI18n();

  useEffect(() => {
    console.log('🔥 TRANSLATIONS DEBUG - Checking if translations are loaded:', {
      locale,
      t,
      tType: typeof t,
      tFunction: t.toString(),
      testKeys: {
        'home.services.optimizer.title': t('home.services.optimizer.title'),
        'common.loading': t('common.loading'),
        'navigation.home': t('navigation.home'),
        'nonexistent.key': t('nonexistent.key')
      },
      timestamp: new Date().toISOString()
    });

    // Test API directly
    fetch(`/api/translations/${locale}`)
      .then(res => res.json())
      .then(data => {
        console.log('🔥 API TRANSLATIONS RESPONSE:', data);
        console.log('🔥 Has home key:', 'home' in data);
        console.log('🔥 Has services key:', data.home && 'services' in data.home);
        console.log('🔥 Full structure:', Object.keys(data));
      })
      .catch(err => console.error('🔥 API ERROR:', err));
  }, [locale, t]);

  return (
    <div style={{
      position: 'fixed',
      top: '150px',
      left: '10px',
      background: 'rgba(0,255,0,0.9)',
      color: 'black',
      padding: '15px',
      borderRadius: '5px',
      fontSize: '10px',
      zIndex: 9999,
      maxWidth: '400px',
      fontFamily: 'monospace'
    }}>
      <div style={{color: 'black', fontWeight: 'bold'}}>🔥 TRANSLATIONS DEBUG</div>
      <div>Locale: {locale}</div>
      <div>t('home.services.optimizer.title'): {t('home.services.optimizer.title')}</div>
      <div>t('common.loading'): {t('common.loading')}</div>
      <div>t('navigation.home'): {t('navigation.home')}</div>
      <div>Check console for API response!</div>
    </div>
  );
}
