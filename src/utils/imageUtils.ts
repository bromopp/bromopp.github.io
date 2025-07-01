// Utility functions for image handling with astro:assets

import type { ImageMetadata } from 'astro';

export interface ImageConfig {
  width: number;
  height: number;
  format: 'webp' | 'avif' | 'png' | 'jpg';
  quality: number;
  densities?: number[];
}

// Standard image configurations for different use cases
export const imageConfigs = {
  projectThumbnail: {
    width: 600,
    height: 338, // 16:9 aspect ratio
    format: 'webp' as const,
    quality: 85,
    densities: [1, 2]
  },
  projectHero: {
    width: 1200,
    height: 675,
    format: 'webp' as const,
    quality: 90,
    densities: [1, 2]
  },
  avatar: {
    width: 200,
    height: 200,
    format: 'webp' as const,
    quality: 90,
    densities: [1, 2]
  },
  icon: {
    width: 64,
    height: 64,
    format: 'webp' as const,
    quality: 95,
    densities: [1, 2]
  }
};

// Responsive breakpoints for different screen sizes
export const responsiveWidths = {
  mobile: 400,
  tablet: 600,
  desktop: 800,
  large: 1200
};

// Helper function to generate alt text
export function generateAltText(title: string, type: 'screenshot' | 'logo' | 'icon' | 'hero' = 'screenshot'): string {
  const typeMap = {
    screenshot: 'screenshot showing the application interface',
    logo: 'logo',
    icon: 'icon',
    hero: 'hero image'
  };
  
  return `${title} ${typeMap[type]}`;
}

// Helper function to create responsive sizes string
export function getResponsiveSizes(breakpoints?: { 
  mobile?: number; 
  tablet?: number; 
  desktop?: number; 
  large?: number 
}): string {
  const bp = {
    mobile: 400,
    tablet: 600,
    desktop: 800,
    large: 1200,
    ...breakpoints
  };
  
  return `(max-width: 640px) ${bp.mobile}px, (max-width: 768px) ${bp.tablet}px, (max-width: 1024px) ${bp.desktop}px, ${bp.large}px`;
}

// Helper to determine if image is external URL or imported asset
export function isExternalImage(src: string | ImageMetadata): src is string {
  return typeof src === 'string' && (src.startsWith('http://') || src.startsWith('https://'));
}

// Generate placeholder for missing images (works with astro:assets remotePatterns)
export function createPlaceholder(
  width: number, 
  height: number, 
  text: string, 
  bgColor = '1a1a1a', 
  textColor = 'FFC832'
): string {
  const encodedText = encodeURIComponent(text);
  return `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`;
}

// Get optimal image dimensions maintaining aspect ratio
export function getOptimalDimensions(
  originalWidth: number, 
  originalHeight: number, 
  maxWidth: number, 
  maxHeight?: number
): { width: number; height: number } {
  const aspectRatio = originalWidth / originalHeight;
  
  if (!maxHeight) {
    return {
      width: maxWidth,
      height: Math.round(maxWidth / aspectRatio)
    };
  }
  
  const widthFromHeight = maxHeight * aspectRatio;
  const heightFromWidth = maxWidth / aspectRatio;
  
  if (widthFromHeight <= maxWidth) {
    return {
      width: Math.round(widthFromHeight),
      height: maxHeight
    };
  } else {
    return {
      width: maxWidth,
      height: Math.round(heightFromWidth)
    };
  }
}
