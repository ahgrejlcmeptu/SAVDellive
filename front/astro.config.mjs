import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [vue()],
  // resolve: {
  //   alias: {
  //     scss: '/src/app/style',
  //     widgets: '../widgets'
  //   }
  // }
});