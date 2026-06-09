import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  // SEO e Performance avançados
  loadingStrategy?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'auto' | 'low';
  decoding?: 'async' | 'sync' | 'auto';
  importance?: 'high' | 'auto' | 'low';
  // Accessibility
  role?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  // Structured Data
  schemaType?: string;
  caption?: string;
  author?: string;
  license?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  placeholder = 'blur',
  blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  fill = false,
  style,
  onClick,
  loadingStrategy = 'lazy',
  fetchPriority = 'auto',
  decoding = 'async',
  importance = 'auto',
  role,
  ariaLabel,
  ariaDescribedBy,
  schemaType,
  caption,
  author,
  license,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsLoading(false);
      return;
    }

    // Intersection Observer para lazy loading avançado
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  // Gerar structured data para imagem
  const generateImageSchema = () => {
    if (!schemaType) return null;
    
    return {
      '@context': 'https://schema.org',
      '@type': schemaType,
      url: src,
      caption: caption || alt,
      author: author ? {
        '@type': 'Person',
        name: author
      } : undefined,
      license: license,
      contentUrl: src,
      width: width,
      height: height,
    };
  };

  // If there's an error, show placeholder
  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{
          width: width || '100%',
          height: height || '200px',
          ...style,
        }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  const imageProps = {
    src,
    alt,
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    style,
    onClick,
    onLoad: handleLoad,
    onError: handleError,
    priority,
    sizes,
    quality,
    placeholder,
    blurDataURL,
  };

  if (fill) {
    return (
      <div className="relative w-full h-full">
        <Image
          {...imageProps}
          fill
          style={{
            objectFit: 'cover',
            ...style,
          }}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <Image
        {...imageProps}
        width={width}
        height={height}
      />
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            width: width || '100%',
            height: height || '200px',
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage; 