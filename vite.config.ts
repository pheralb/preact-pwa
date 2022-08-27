import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// Plugins =>
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

// Manifest.json =>
import manifest from "./manifest.json";

export default defineConfig({
  plugins: [
    preact(),
    tsconfigPaths(),
    VitePWA({
      manifest,
      includeAssets: ["/icons/preact.svg", "/icons/vite.svg"],
      devOptions: {
        // Switch to true to enable service worker caching in development =>
        // Remember to clear the port 127.0.0.1:5173 cache.
        enabled: false,
      },
      workbox: {
        globPatterns: ["**/*.{js,ts,css,html}", "**/*.{svg,png,jpg,gif}"],
      },
    }),
  ],
});
