import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/utkarsh212.github.io/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
