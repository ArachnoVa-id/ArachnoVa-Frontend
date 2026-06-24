import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "data");

const collections = [
  "projects",
  "services",
  "pricing",
  "products",
  "redirects",
  "team",
  "settings",
];

function readData(name) {
  const filePath = path.join(dataDir, `${name}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeData(name, data) {
  const filePath = path.join(dataDir, `${name}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

const API_KEY = process.env.CMS_API_KEY;

function requireKey(req, res, next) {
  if (!API_KEY) return next();
  const provided = req.headers["x-api-key"];
  if (!provided || provided !== API_KEY) {
    return res.status(401).json({ error: "Unauthorized: invalid or missing API key" });
  }
  next();
}

export const apiRouter = Router();

apiRouter.get("/health", (req, res) => {
  res.json({ status: "ok", collections });
});

collections.forEach((name) => {
  apiRouter.get(`/${name}`, (req, res) => {
    const data = readData(name);
    if (!data) return res.status(404).json({ error: "Not found" });
    res.json(data);
  });

  apiRouter.put(`/${name}`, requireKey, (req, res) => {
    writeData(name, req.body);
    res.json({ ok: true, collection: name });
  });
});

apiRouter.get("/all", (req, res) => {
  const all = {};
  collections.forEach((name) => {
    all[name] = readData(name);
  });
  res.json(all);
});

apiRouter.put("/all", requireKey, (req, res) => {
  Object.keys(req.body).forEach((name) => {
    if (collections.includes(name)) {
      writeData(name, req.body[name]);
    }
  });
  res.json({ ok: true });
});

// LinkedIn profile data fetcher - extracts name from URL, returns guidance for manual image fetch
apiRouter.get("/linkedin-image", async (req, res) => {
  const { url } = req.query;
  if (!url || !url.includes("linkedin.com/in/")) {
    return res.status(400).json({ error: "Invalid LinkedIn URL" });
  }
  const username = url.match(/linkedin\.com\/in\/([^/?#]+)/)?.[1];
  if (!username) return res.status(400).json({ error: "Could not extract username" });

  // Derive name from URL: "yitzhak-manalu" or "yitzhakmanalu" -> "Yitzhak Manalu"
  let name = username
    .replace(/[-_]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/(\d+)/g, " $1 ")
    .replace(/\s+/g, " ")
    .trim();
  if (!name) name = username;

  // Try to fetch the real page (usually blocked)
  let image = null;
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml",
      },
    });
    const html = await response.text();
    if (html && html.length > 1000) {
      const m = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/)
        || html.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:image"/);
      if (m) image = m[1].replace(/&amp;/g, "&");
      const t = html.match(/<title>([^<]+?)\s*(?:\|.*)?LinkedIn/i);
      if (t) name = t[1].trim();
    }
  } catch {}

  if (image) return res.json({ image, name });
  return res.json({ name, note: "LinkedIn blocks automated image fetching. Click the avatar to upload manually, or paste the image URL from your browser." });
});
