// Performance optimization settings
export const performanceConfig = {
  // Cache settings
  cache: {
    maxAge: 31536000, // 1 year
    staleWhileRevalidate: 86400, // 1 day
  },
  
  // Compression settings
  compression: {
    enabled: true,
    level: 6,
  },
  
  // Lazy loading settings
  lazyLoading: {
    enabled: true,
    threshold: 0.1,
    rootMargin: '50px',
  },
  
  // Preload settings
  preload: {
    critical: [
      '/fonts/roboto.woff2',
      '/logo.png',
    ],
    fonts: [
      'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
    ],
  },
  
  // Service worker settings
  serviceWorker: {
    enabled: true,
    cacheName: 'voltris-cache-v1',
    strategies: {
      images: 'cache-first',
      fonts: 'cache-first',
      api: 'network-first',
      pages: 'network-first',
    },
  },
};

// Function to add preload for critical resources
export const addPreloadLinks = () => {
  const links = [
    {
      rel: 'preload',
      href: '/fonts/roboto.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      href: '/logo.png',
      as: 'image',
    },
  ];
  
  return links;
};

// Function to optimize font loading
export const optimizeFonts = () => {
  return {
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'arial'],
  };
};

// Function to configure API cache
export const configureApiCache = () => {
  return {
    maxAge: 300, // 5 minutes
    staleWhileRevalidate: 60, // 1 minute
  };
}; 