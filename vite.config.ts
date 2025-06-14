import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["vite.svg", "react.svg"], // Assuming these are in public directory
      manifest: {
        name: "Healthcare PWA",
        short_name: "HealthPWA",
        description: "A basic healthcare progressive web application.",
        theme_color: "#007bff",
        background_color: "#ffffff", // Added to match manifest file
        start_url: ".", // Added to match manifest file
        display: "standalone", // Added to match manifest file
        icons: [
          {
            src: "vite.svg", // Plugin usually handles the public path prefix
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
