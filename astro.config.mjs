// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// base phải khớp với tên repo khi deploy GitHub Pages (user-page thì bỏ base)
export default defineConfig({
  base: '/quet-quet',
});
