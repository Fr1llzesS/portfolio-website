export function getAssetPath(path: string): string {
  // Проверяем, находимся ли мы на GitHub Pages
  const isGitHubPages = typeof window !== 'undefined' && 
    (window.location.hostname === 'fr1llzess.github.io' || 
     window.location.href.includes('github.io'));
  
  // На GitHub Pages мы уже используем базовый путь '/portfolio-website/'
  // в vite.config.ts, поэтому здесь просто возвращаем путь без дополнительных префиксов
  return path;
}