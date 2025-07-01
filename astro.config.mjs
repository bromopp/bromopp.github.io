import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://bromopp.github.io',
  base: '/',
  output: 'static',
  vite: {
    publicDir: 'public',
    assetsInclude: ['**/*.ico', '**/*.svg']
  },
  // Built-in image optimization settings
  image: {
    // Configure remote image domains for external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
    ],
  }
});
