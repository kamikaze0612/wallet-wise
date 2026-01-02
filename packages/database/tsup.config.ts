import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  splitting: true,
  dts: true,
  treeshake: true,
  sourcemap: true,
  format: ["esm", "cjs"],
  entry: ["src/index.ts"],
});
