import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// NOTE: Adjust the base path if you deploy under a custom domain or different repo name.
// For GitHub Pages project site: https://<user>.github.io/<repo>/ -> base should be '/<repo>/'
// If you later move to a custom domain, you can set base: '/' again.
export default defineConfig(({ mode }) => {
  // Allow overriding base via env var VITE_GH_PAGES_BASE (e.g. '/' for user site repo <user>.github.io)
  const baseFromEnv = process.env.VITE_GH_PAGES_BASE;
  const base = baseFromEnv && baseFromEnv.endsWith('/') ? baseFromEnv : (baseFromEnv ? baseFromEnv + '/' : '/calendar-journal-web/');
  return ({
  server: {
    host: "::",
    port: 8080,
  },
  // GitHub Pages base path
  base,
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  });
});
