import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub info
// Example: if your repo is github.com/john/blackslash-website
// then: site = 'https://john.github.io', base = '/blackslash-website'

export default defineConfig({
  site: 'https://blackslashlab.github.io',
  base: '/blackslash',
  integrations: [
    react(),
    tailwind(),
  ],
});
