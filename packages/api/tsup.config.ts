import { defineConfig } from "tsup";

export default defineConfig({
  treeshake: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
});
