import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  build: {
    outDir: 'dist',
    // 出力ディレクトリを指定
    assetsDir: 'assets' // アセットディレクトリを指定
  },
  output: "server",
  adapter: vercel()
});