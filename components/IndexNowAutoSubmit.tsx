"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Componente para auto-envio de URLs para IndexNow quando páginas são acessadas
 * Implementa IndexNow API com a chave: dc9bd7eedab94ddca8eb96ea792838d4
 */

const IndexNowAutoSubmit: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Função para enviar URL atual para IndexNow
    const submitToIndexNow = async (url: string) => {
      try {
        const response = await fetch('/api/indexnow', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            urlList: [url]
          }),
        });

        if (response.ok) {
          console.log('IndexNow submission successful for:', url);
        } else {
          console.error('IndexNow submission failed for:', url);
        }
      } catch (error) {
        console.error('IndexNow error:', error);
      }
    };

    // Enviar URL atual quando a página carregar
    if (typeof window !== 'undefined' && pathname) {
      const queryString = searchParams.toString();
      const fullPath = queryString ? `${pathname}?${queryString}` : pathname;
      const currentUrl = `https://www.voltrisoptimizer.com${fullPath}`;
      
      // Enviar para todas as páginas públicas (não admin/dashboard)
      const excludedPaths = [
        '/dashboard',
        '/restricted-area-admin',
        '/auth',
        '/admin',
        '/api',
        '/login',
        '/reset-password',
        '/perfil',
        '/services', // Excluir páginas principais para evitar spam
        '/about',
        '/contact',
        '/guides'
      ];

      const isExcluded = excludedPaths.some(path => 
        pathname === path || pathname.startsWith(path + '/')
      );

      if (!isExcluded) {
        // Pequeno delay para garantir que a página carregou completamente
        setTimeout(() => {
          submitToIndexNow(currentUrl);
        }, 2000);
      }
    }
  }, [pathname, searchParams]);

  return null; // Componente invisível
};

export default IndexNowAutoSubmit;
