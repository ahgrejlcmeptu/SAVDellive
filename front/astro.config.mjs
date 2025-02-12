import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

export default defineConfig({
  // integrations: [vue({ appEntrypoint: '/src/app/plugins/_app' })],
  integrations: [vue()],
  // security: {
  //   checkOrigin: true
  // },
  output: 'server',
});