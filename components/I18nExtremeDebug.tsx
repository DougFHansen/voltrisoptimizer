'use client';

import React, { useEffect } from 'react';
import { useI18n } from '@/contexts/I18nContext';

export default function I18nExtremeDebug() {
  const { locale, t, isRTL, direction } = useI18n();

  useEffect(() => {
    console.log('🔥 EXTREME DEBUG - I18n Info:', {
      locale,
      isRTL,
      direction,
      translationsKeys: Object.keys(t),
      sampleTranslation1: t('home.services.optimizer.title'),
      sampleTranslation2: t('common.loading'),
      sampleTranslation3: t('navigation.home'),
      windowLocation: typeof window !== 'undefined' ? window.location.pathname : 'server',
      timestamp: new Date().toISOString()
    });

    // Testa se tradução existe
    const testKey = 'home.services.optimizer.title';
    const translation = t(testKey);
    const isTranslated = translation !== testKey;
    
    console.log('🔥 TRANSLATION TEST:', {
      key: testKey,
      result: translation,
      isTranslated,
      isEnglish: translation.includes('Voltris Optimizer'),
      isPortuguese: translation.includes('Voltris Optimizer') || translation.includes('Licença')
    });
  }, [locale, t]);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      background: 'rgba(255,0,0,0.9)',
      color: 'white',
      padding: '15px',
      borderRadius: '5px',
      fontSize: '11px',
      zIndex: 9999,
      maxWidth: '400px',
      fontFamily: 'monospace'
    }}>
      <div style={{color: '#ff6b6b', fontWeight: 'bold'}}>🔥 EXTREME DEBUG</div>
      <div>Locale: {locale}</div>
      <div>Dir: {direction}</div>
      <div>Sample: {t('home.services.optimizer.title')}</div>
      <div>Translated: {t('home.services.optimizer.title') !== 'home.services.optimizer.title' ? '✅' : '❌'}</div>
      <div>English Test: {t('home.services.optimizer.title').includes('Voltris Optimizer') ? '❌' : '✅'}</div>
      <div>Portuguese Test: {t('home.services.optimizer.title').includes('Licença') ? '❌' : '✅'}</div>
    </div>
  );
}
