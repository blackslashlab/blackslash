import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://blackslashlab.github.io',
  base: '/blackslash',
  integrations: [
    react(),
    tailwind(),
  ],
});
