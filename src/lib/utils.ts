export function getImagePath(path: string): string {
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = isProduction ? "/portfolio" : "";

  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  return `${basePath}/${cleanPath}`;
} 