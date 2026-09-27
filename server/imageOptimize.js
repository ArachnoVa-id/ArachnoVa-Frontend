import sharp from "sharp";
import fs from "fs";
import path from "path";

// Raster formats we re-encode. SVG, GIF (may be animated) and files already in modern
// formats are served as uploaded.
export const OPTIMIZABLE = new Set([".png", ".jpg", ".jpeg"]);
const MAX_WIDTH = 1920;

// Writes a resized WebP next to `filePath` and returns its path. Keeps the original.
export async function toWebp(filePath) {
  const out = filePath.replace(/\.[^.]+$/, ".webp");
  await sharp(filePath)
    .rotate() // respect EXIF orientation
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(out);
  return out;
}

export function isOptimizable(filePath) {
  return OPTIMIZABLE.has(path.extname(filePath).toLowerCase());
}

export function fileSize(p) {
  try {
    return fs.statSync(p).size;
  } catch {
    return 0;
  }
}
