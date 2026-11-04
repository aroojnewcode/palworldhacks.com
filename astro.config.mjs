import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://palworldhacks.com',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/palworld-cheats/',
    '/cheats/lite/': '/products/palworld-cheats/',
    '/cheats/pro/': '/products/palworld-cheats/',
    '/cheats/elite/': '/products/palworld-cheats/elite/',
    '/cheats/compare/': '/blog/lite-vs-pro/',
    '/contact/': '/support/',
    '/products/dota-2-cheats/': '/products/palworld-cheats/',
    '/products/dota-2-cheats/elite/': '/products/palworld-cheats/elite/',
    '/products/dota-2-cheats/utilities/': '/products/palworld-cheats/utilities/',
    '/products/rust-cheats/': '/products/palworld-cheats/',
    '/products/rust-cheats/elite/': '/products/palworld-cheats/elite/',
    '/products/rust-cheats/utilities/': '/products/palworld-cheats/utilities/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      cssCodeSplit: true,
      modulePreload: { polyfill: false },
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
});
