import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import node from '@astrojs/node';

export default defineConfig({
  integrations: [vue()],
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),
});