import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // devToolbar: { enabled: false },
  site: 'https://astro-adie.netlify.app',
  integrations: [preact()],
});
