import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  build: {
    assetsDir: 'assets'
  },
  output: "server",
  adapter: vercel()
});