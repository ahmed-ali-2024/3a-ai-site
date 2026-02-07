// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://3aai.in',
  integrations: [
    react(),
    markdoc(),
    sitemap(),
    ...(process.env.NODE_ENV !== 'production' ? [keystatic()] : []),
  ]
});
