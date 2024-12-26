import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [vue({ appEntrypoint: "/src/app/plugins/vuetify.js" })],
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  // resolve: {
  //   alias: {
  //     scss: '/src/app/style',
  //     widgets: '../widgets'
  //   }
  // }
});