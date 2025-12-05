// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [
    react(),
    markdoc(),
    ...(process.env.NODE_ENV !== 'production' ? [keystatic()] : []),
  ]
});
