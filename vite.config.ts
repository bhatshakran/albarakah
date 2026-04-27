import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
export default defineConfig({
  plugins: [tanstackStart(), react(), tailwindcss(), nitro()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
