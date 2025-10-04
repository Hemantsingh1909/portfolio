import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@babel/plugin-transform-private-property-in-object"],
      },
    }),
  ],
  server: {
    port: 5173,
    proxy: {
      // proxy API to vercel dev (http://localhost:3000)
      "/api": "http://localhost:3000",
      fs: {
        strict: false, // Allow access to public files
      },
    },
  },
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  build: {
    outDir: "dist",
  },
});
