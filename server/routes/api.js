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

// LinkedIn profile data fetcher
apiRouter.get("/linkedin-image", async (req, res) => {
  const { url } = req.query;
  if (!url || !url.includes("linkedin.com/in/")) {
    return res.status(400).json({ error: "Invalid LinkedIn URL" });
  }
  const username = url.match(/linkedin\.com\/in\/([^/?#]+)/)?.[1];
  if (!username) return res.status(400).json({ error: "Could not extract username" });

  const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
  const headers = {
    "User-Agent": UA,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://www.google.com/",
  };

  let name = null;
  let image = null;

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      // Warm-up: visit a public LinkedIn page first to establish session
      if (attempt === 1) {
        await fetch("https://www.linkedin.com/jobs/", { headers });
        await new Promise((r) => setTimeout(r, 500));
      }
      if (attempt === 2) {
        await fetch("https://www.linkedin.com/feed/", { headers });
        await new Promise((r) => setTimeout(r, 500));
      }

      const response = await fetch(url, { headers });
      const html = await response.text();
      if (!html || html.length < 1000) continue;

      // Extract name from JSON-LD or title
      if (!name) {
        const ld = html.match(/<script[^>]+type="application\/ld\+json"[^>]*>([^<]+)/);
        if (ld) {
          try { const j = JSON.parse(ld[1]); name = j.name; } catch {}
        }
      }
      if (!name) {
        const t = html.match(/<title>([^<]+?)\s*(?:\|.*)?LinkedIn/i);
        if (t) name = t[1].trim();
      }
      // Extract image from JSON-LD, meta, or embedded data
      if (!image && name) {
        const ld = html.match(/<script[^>]+type="application\/ld\+json"[^>]*>([^<]+)/);
        if (ld) {
          try { const j = JSON.parse(ld[1]); if (j.image) image = j.image; } catch {}
        }
      }
      if (!image) {
        const m = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/)
          || html.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:image"/)
          || html.match(/("profilePictureUrl")\s*:\s*"([^"]+)"/);
        if (m) image = (m[2] || m[1]).replace(/&amp;/g, "&");
      }
      if (name || image) break;
    } catch {}
  }

  if (image) return res.json({ image, name: name || undefined });
  if (name) return res.json({ name });
  return res.status(404).json({ error: "LinkedIn profile is not accessible from server", hint: "Open the profile in your browser, right-click the profile photo → 'Copy image address', then paste it here" });
});
