"use client";

import { Suspense } from 'react';
import IndexNowAutoSubmit from './IndexNowAutoSubmit';

/**
 * Wrapper component para IndexNow com Suspense boundary
 * Evita erro de useSearchParams em prerender
 */
export default function IndexNowWrapper() {
  return (
    <Suspense fallback={null}>
      <IndexNowAutoSubmit />
    </Suspense>
  );
}
