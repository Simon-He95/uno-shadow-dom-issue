import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno({
      preflight: false,
    }),
    presetAttributify(),
  ],
});
