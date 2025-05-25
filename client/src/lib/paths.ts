// Утилита для правильного определения путей к ресурсам
export function getAssetPath(path: string): string {
  // В продакшене на GitHub Pages используем базовый путь
  if (import.meta.env.PROD) {
    return `/portfolio-website${path}`;
  }
  // В разработке используем обычные пути
  return path;
}