import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { requireAuth, authConfig, googleLogin } from "../auth.js";

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

export const apiRouter = Router();

apiRouter.get("/health", (req, res) => {
  res.json({ status: "ok", collections });
});

apiRouter.get("/auth/config", authConfig);

apiRouter.post("/auth/google", googleLogin);

apiRouter.get("/auth/check", requireAuth, (req, res) => {
  res.json({ ok: true, email: req.adminEmail || null });
});

collections.forEach((name) => {
  apiRouter.get(`/${name}`, (req, res) => {
    const data = readData(name);
    if (!data) return res.status(404).json({ error: "Not found" });
    res.json(data);
  });

  apiRouter.put(`/${name}`, requireAuth, (req, res) => {
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

apiRouter.put("/all", requireAuth, (req, res) => {
  Object.keys(req.body).forEach((name) => {
    if (collections.includes(name)) {
      writeData(name, req.body[name]);
    }
  });
  res.json({ ok: true });
});

// LinkedIn profile data fetcher - extracts name from URL, returns guidance for manual image fetch
apiRouter.get("/linkedin-image", requireAuth, async (req, res) => {
  const { url } = req.query;
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return res.status(400).json({ error: "Invalid LinkedIn URL" });
  }
  // Only fetch real LinkedIn profile pages; anything else would let callers make
  // the server request arbitrary (including internal) URLs.
  const isLinkedIn = parsed.hostname === "linkedin.com" || parsed.hostname.endsWith(".linkedin.com");
  if (parsed.protocol !== "https:" || !isLinkedIn || !parsed.pathname.startsWith("/in/")) {
    return res.status(400).json({ error: "Invalid LinkedIn URL" });
  }
  const username = parsed.pathname.match(/^\/in\/([^/]+)/)?.[1];
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
    const response = await fetch(parsed.href, {
      redirect: "manual",
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
