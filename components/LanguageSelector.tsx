'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from '@/contexts/I18nContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { supportedLocales, localeConfig, Locale, isValidLocale } from '@/lib/i18n';

const flagEmojis: Record<Locale, string> = {
  'en':    '🇺🇸',
  'es':    '🇪🇸',
  'fr':    '🇫🇷',
  'de':    '🇩🇪',
  'it':    '🇮🇹',
  'ja':    '🇯🇵',
  'ko':    '🇰🇷',
  'ar':    '🇸🇦',
  'pt-br': '🇧🇷',
};

export default function LanguageSelector() {
  const { locale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentConfig = localeConfig[locale];

  const handleLanguageChange = (newLocale: Locale) => {
    setIsOpen(false);
    
    if (newLocale === locale) return;

    // Constrói a nova URL trocando o segmento de locale
    // Ex: /en/guides → /fr/guides | /pt-br → /en
    const segments = pathname.split('/').filter(Boolean);
    
    if (segments.length > 0 && isValidLocale(segments[0])) {
      // Troca o locale na URL
      segments[0] = newLocale;
    } else {
      // Sem locale na URL, adiciona o novo locale
      segments.unshift(newLocale);
    }

    const newPath = '/' + segments.join('/');
    router.push(newPath);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors duration-200"
        >
          <Globe className="h-4 w-4" />
          <span className="font-medium">{flagEmojis[locale]} {currentConfig.name}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl"
      >
        {supportedLocales.map((loc) => {
          const config = localeConfig[loc];
          const isActive = loc === locale;
          
          return (
            <DropdownMenuItem
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={`flex items-center space-x-3 px-3 py-2 cursor-pointer transition-colors duration-200 ${
                isActive 
                  ? 'bg-purple-100 text-purple-900 font-medium' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <span className="text-lg">{flagEmojis[loc]}</span>
              
              <div className="flex-1">
                <div className={`font-medium ${isActive ? 'text-purple-900' : 'text-gray-900'}`}>
                  {config.name}
                </div>
                <div className="text-xs text-gray-500">
                  {config.region}
                </div>
              </div>
              
              {isActive && (
                <Check className="w-4 h-4 text-purple-600" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
