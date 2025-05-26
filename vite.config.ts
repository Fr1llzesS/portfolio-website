import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  base: '/portfolio-website/', // Добавлен базовый путь для GitHub Pages
  
  // Добавляем поддержку PDF файлов
  assetsInclude: ['**/*.pdf'],
  
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Если это PDF файл
          if (assetInfo.name && assetInfo.name.endsWith('.pdf')) {
            return 'documents/[name][extname]';
          }
          // Если это изображение из public/assets, сохраняем структуру папок
          if (assetInfo.name && (assetInfo.name.endsWith('.jpg') || assetInfo.name.endsWith('.JPG') || assetInfo.name.endsWith('.png'))) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
});