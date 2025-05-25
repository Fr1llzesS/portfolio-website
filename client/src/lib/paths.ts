// Утилита для правильного определения путей к ресурсам
export function getAssetPath(path: string): string {
  // Проверяем, находимся ли мы на GitHub Pages
  const isGitHubPages = typeof window !== 'undefined' && 
    window.location.hostname === 'fr1llzess.github.io';
  
  // На GitHub Pages используем базовый путь
  if (isGitHubPages) {
    return `/portfolio-website${path}`;
  }
  // В разработке и других окружениях используем обычные пути
  return path;
}