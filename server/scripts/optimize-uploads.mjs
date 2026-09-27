// One-off: create WebP versions of existing PNG/JPEG uploads and point the CMS data at them.
// Originals are kept so old links keep working. Safe to re-run.
//   node server/scripts/optimize-uploads.mjs [--dry-run]
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { isOptimizable, toWebp, fileSize } from "../imageOptimize.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const uploadsDir = path.join(root, "uploads");
const dataDir = path.join(root, "server", "data");
const dryRun = process.argv.includes("--dry-run");

const renames = new Map(); // "/uploads/a.png" -> "/uploads/a.webp"
let before = 0, after = 0;
for (const name of fs.readdirSync(uploadsDir)) {
  const file = path.join(uploadsDir, name);
  if (!fs.statSync(file).isFile() || !isOptimizable(file)) continue;
  const webp = file.replace(/\.[^.]+$/, ".webp");
  if (!fs.existsSync(webp) && !dryRun) await toWebp(file);
  if (!dryRun && fileSize(webp) >= fileSize(file)) { fs.unlinkSync(webp); continue; }
  before += fileSize(file);
  after += fileSize(webp);
  renames.set(`/uploads/${name}`, `/uploads/${path.basename(webp)}`);
}

let refs = 0;
for (const name of fs.readdirSync(dataDir).filter((f) => f.endsWith(".json"))) {
  const p = path.join(dataDir, name);
  const text = fs.readFileSync(p, "utf-8");
  const next = text.replace(/\/uploads\/[^"\\]+/g, (u) => {
    if (!renames.has(u)) return u;
    refs++;
    return renames.get(u);
  });
  if (next !== text && !dryRun) {
    fs.copyFileSync(p, `${p}.bak-${Date.now()}`);
    fs.writeFileSync(p, next);
  }
}
console.log(`${dryRun ? "[dry run] " : ""}${renames.size} images: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB; ${refs} data references updated`);
