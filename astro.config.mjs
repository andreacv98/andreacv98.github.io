import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://andreacv98.github.io',
  output: 'static',
  build: {
    format: 'directory',
  },
});
