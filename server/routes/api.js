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

// LinkedIn profile image fetcher (uses ui-avatars as reliable fallback)
apiRouter.get("/linkedin-image", async (req, res) => {
  const { url } = req.query;
  if (!url || !url.includes("linkedin.com/in/")) {
    return res.status(400).json({ error: "Invalid LinkedIn URL" });
  }
  const username = url.match(/linkedin\.com\/in\/([^/?#]+)/)?.[1];
  if (!username) return res.status(400).json({ error: "Could not extract username" });

  // Try to derive name from URL username: "yitzhakmanalu" -> "Yitzhak Manalu"
  const derivedName = username
    .replace(/[-_]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

  // Try scraping with retry
  const agents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  ];

  let name = null;
  let image = null;

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": agents[attempt],
          "Accept": "text/html,application/xhtml+xml",
          "Accept-Language": "en-US,en;q=0.9",
        },
      });
      const html = await response.text();
      if (!html || html.length < 500) continue;

      // Name
      if (!name) {
        const t = html.match(/<title>([^<]+?)\s*(?:\|.*)?LinkedIn/i);
        if (t) name = t[1].trim();
        if (!name) {
          const og = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/);
          if (og) name = og[1].trim();
        }
      }
      // Image
      if (!image) {
        const imgMatch = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/)
          || html.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:image"/)
          || html.match(/"profilePictureUrl"\s*:\s*"([^"]+)"/);
        if (imgMatch) image = imgMatch[1].replace(/&amp;/g, "&");
      }
      if (name && image) break;
    } catch {
      // ignore and fall back
    }
  }

  const resultName = name || derivedName;

  if (image) {
    return res.json({ image, name: resultName });
  }

  // Fallback: generate avatar from name via ui-avatars
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(resultName)}&background=0891B2&color=fff&size=400&bold=true`;
  return res.json({ image: avatarUrl, name: resultName, avatar: true });
});
