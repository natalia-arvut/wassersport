import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/wassersport/",
  plugins: [
    tsconfigPaths(),
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: "dist-gh-pages",
    emptyOutDir: true,
  },
});
