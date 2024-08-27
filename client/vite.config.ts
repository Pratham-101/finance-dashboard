import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 1338, 
    proxy: {
      '/api': 'http://localhost:1337', 
    },
  },
  define: {
    _VITE_BASE_URL_: JSON.stringify(process.env.VITE_BASE_URL),
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});