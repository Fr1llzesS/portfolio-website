// Утилита для правильного определения путей к ресурсам
export function getAssetPath(path: string): string {
  // Проверяем, находимся ли мы на GitHub Pages
  const isGitHubPages = typeof window !== 'undefined' && 
    (window.location.hostname === 'fr1llzess.github.io' || 
     window.location.href.includes('github.io'));
  
  // На GitHub Pages базовый путь уже установлен в vite.config.ts как '/portfolio-website/'
  if (isGitHubPages) {
    // Важно! Удаляем './public' из пути, если он есть
    return path.replace('/public', '');
  }
  
  // В разработке используем обычные пути
  return path;
}