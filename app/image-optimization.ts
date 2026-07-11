export const imageOptimization = {
  // Image optimization settings
  formats: ['image/webp', 'image/avif'],
  quality: 85,
  sizes: {
    thumbnail: 150,
    small: 300,
    medium: 600,
    large: 1200,
    xlarge: 1920,
  },
  // Lazy loading settings
  lazyLoading: true,
  // Placeholder settings
  placeholder: 'blur',
  blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
};

// Function to generate optimized image URLs
export const getOptimizedImageUrl = (
  src: string,
  width: number,
  quality: number = 85,
  format: 'webp' | 'avif' | 'jpeg' = 'webp'
) => {
  // If it is an external image, returns the original URL
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, returns the optimized URL
  return `${src}?w=${width}&q=${quality}&f=${format}`;
};

// Function to generate srcset for responsive images
export const getImageSrcSet = (src: string, sizes: number[] = [300, 600, 900, 1200]) => {
  return sizes
    .map(size => `${getOptimizedImageUrl(src, size)} ${size}w`)
    .join(', ');
}; 