'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/contexts/I18nContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, X, TrendingUp, Clock, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

const popularSearches = [
  'SSD vs HDD',
  'DNS for games',
  'Debloat Windows 11',
  'Increase FPS',
  'PC Optimization',
  'Updated Drivers'
];

const recentSearches = [
  'Overwatch 2 settings',
  'GTA V optimization',
  'Windows 11 performance',
  'Valorant FPS boost'
];

export default function SearchModal({ isOpen, onClose, locale }: SearchModalProps) {
  const { t } = useTranslation('common');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      // Focus search input when modal opens
      setTimeout(() => {
        const input = document.getElementById('search-input');
        input?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call for search
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Mock search results
      const mockResults = [
        {
          title: `Guide: ${query}`,
          description: 'Learn how to optimize your PC for better performance',
          category: 'Guides',
          href: '/guides/search-result',
          views: '15K'
        },
        {
          title: `Serviço: ${query}`,
          description: 'Specialized technical support for your problem',
          category: 'Services',
          href: '/services/search-result',
          views: '8K'
        }
      ];
      
      setSearchResults(mockResults);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResultClick = (href: string) => {
    router.push(href);
    onClose();
  };

  const handlePopularSearch = (query: string) => {
    setSearchQuery(query);
    handleSearch(query);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-gray-200">
        <CardContent className="p-6">
          {/* Search Header */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="search-input"
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    onClose();
                  }
                }}
                className="pl-10 pr-4 py-3 text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="mb-6">
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" />
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Results for "{searchQuery}"
                  </div>
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      onClick={() => handleResultClick(result.href)}
                      className="p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 cursor-pointer transition-all duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {result.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">
                            {result.description}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                              {result.category}
                            </span>
                            <span>{result.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Search className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>No results found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          )}

          {/* Popular Searches */}
          {!searchQuery && (
            <div className="space-y-6">
              {/* Popular */}
              <div>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Popular searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handlePopularSearch(search)}
                      className="text-sm hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700"
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Recent */}
              <div>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Clock className="h-4 w-4 mr-2" />
                  Recent searches
                </div>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <div
                      key={index}
                      onClick={() => handlePopularSearch(search)}
                      className="p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 cursor-pointer transition-all duration-200"
                    >
                      <Clock className="h-4 w-4 text-gray-400 mr-2 inline" />
                      <span className="text-sm text-gray-700">{search}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Search Tips */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="text-xs text-gray-500 space-y-1">
              <p>• Use quotes to search for exact phrases: "pc optimization"</p>
              <p>• Combine terms: +windows +gaming +performance</p>
              <p>• Press ESC to close search</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
