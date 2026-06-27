import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { apiRouter } from "./routes/api.js";
import { uploadRouter } from "./routes/upload.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3006;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Link subdomain redirect handler (link.arachnova.id)
app.use((req, res, next) => {
  const host = req.headers.host || "";
  if (!host.startsWith("link.")) return next();

  const redirectsPath = path.join(__dirname, "data", "redirects.json");
  try {
    const data = JSON.parse(fs.readFileSync(redirectsPath, "utf-8"));
    const match = data.find((r) => r.path === req.path);
    if (match && match.redirect) {
      return res.redirect(302, match.redirect);
    }
  } catch {}
  return res.status(404).send("Redirect not found");
});

app.use("/api", apiRouter);
app.use("/api/upload", uploadRouter);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));
app.get("*", (req, res) => {
  if (!req.path.startsWith("/api") && !req.path.startsWith("/uploads")) {
    res.sendFile(path.join(distPath, "index.html"));
  }
});

app.listen(PORT, () => {
  console.log(`CMS API server running on port ${PORT}`);
});
