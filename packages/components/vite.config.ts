import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  build: {
    lib: {
      entry: { index: 'src/index.tsx'},
      formats: ['es'],
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['react'],
    }
  },
  plugins: [typescript({ tsconfig: './tsconfig.build.json' })]
});
