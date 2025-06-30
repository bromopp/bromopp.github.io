import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://bromopp.github.io',
  base: '/', // or '/your-repo-name/' if not using username.github.io
  output: 'static',
});
