// Утилита для правильного определения путей к ресурсам
export function getAssetPath(path: string): string {
  // Убираем любые упоминания public из пути
  const cleanPath = path.replace('/public', '').replace('./public', '');
  return cleanPath;
}