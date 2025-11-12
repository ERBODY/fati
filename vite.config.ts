// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load env variables based on the current mode
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    base: mode === 'production' 
      ? (env.BASE_URL || '/fati/')
      : '/',
    plugins: [react()],
    resolve: { 
      alias: { 
        "@": path.resolve(__dirname, "./src") 
      } 
    },
    // Add build configuration
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: mode !== 'production',
      minify: mode === 'production' ? 'esbuild' : false,
    },
    // Development server configuration
    server: {
      port: 3000,
      open: true,
    },
  };
});