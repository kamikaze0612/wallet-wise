import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  clean: true,
  splitting: true,
  sourcemap: true,
  treeshake: true,
  entry: ["./index.ts"],
  format: ["esm", "cjs"],
});
