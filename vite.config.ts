import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// NOTE: Adjust the base path if you deploy under a custom domain or different repo name.
// For GitHub Pages project site: https://<user>.github.io/<repo>/ -> base should be '/<repo>/'
// If you later move to a custom domain, you can set base: '/' again.
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // GitHub Pages repository name
  base: "/calendar-journal-web/",
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
}));
