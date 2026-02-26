// Image path helper for GitHub Pages deployment
export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // If path already starts with basePath, don't add it again
  if (basePath && path.startsWith(basePath)) {
    return path;
  }
  return `${basePath}${path}`;
}
