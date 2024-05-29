import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://sshybb.github.io/',
  base: 'https://github.com/SShyBB/SShyBB.github.io',
  integrations: [tailwind()]
});
