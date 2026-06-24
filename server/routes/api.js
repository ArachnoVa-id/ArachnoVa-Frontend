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
  const username = url.match(/linkedin\.com\/in\/([^/?#]+)/)?.[1];
  if (!username) return res.status(400).json({ error: "Could not extract username" });

  const agents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
  ];
  const agent = agents[Math.floor(Math.random() * agents.length)];

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": agent,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Referer": "https://www.google.com/",
        "DNT": "1",
      },
    });
    const html = await response.text();

    const patterns = [
      /<meta[^>]+property="og:image"[^>]+content="([^"]+)"/,
      /<meta[^>]+content="([^"]+)"[^>]+property="og:image"/,
      /class="profile-photo[^"]*"[^>]*src="([^"]+)"/,
      /"profilePictureUrl":"([^"]+)"/,
    ];
    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match) return res.json({ image: match[1].replace(/&amp;/g, "&") });
    }
    return res.status(404).json({ error: "LinkedIn profile image not found (profile may be private or require login)", hint: "Use the Upload button to set the image manually" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});
