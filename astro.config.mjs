import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// User site (username.github.io) — served at the root, so no `base` is needed.
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://yukone.github.io',
  output: 'static',
  outDir: './dist'
});
