import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  splitting: true,
  dts: true,
  treeshake: true,
  sourcemap: true,
  format: ['cjs', 'esm'],
  entry: ['src/index.ts'],
  minify: true,
});
