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

// LinkedIn profile image fetcher
apiRouter.get("/linkedin-image", async (req, res) => {
  const { url } = req.query;
  if (!url || !url.includes("linkedin.com/in/")) {
    return res.status(400).json({ error: "Invalid LinkedIn URL" });
  }
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml",
      },
    });
    const html = await response.text();
    // Extract og:image from meta tags
    const match = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/);
    if (match) {
      return res.json({ image: match[1] });
    }
    // Try alternate pattern
    const match2 = html.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:image"/);
    if (match2) {
      return res.json({ image: match2[1] });
    }
    return res.status(404).json({ error: "No profile image found" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});
