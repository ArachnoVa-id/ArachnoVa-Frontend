// Post-build: give every public route its own HTML shell with the right <title>, description,
// canonical and Open Graph tags, so link previews (WhatsApp, LinkedIn) and crawlers that don't run
// JavaScript see real metadata. Also writes 404.html (noindex), which nginx serves with HTTP 404.
// The React app still renders the page; it replaces #root on load.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { SEO_ROUTES, SITE_URL, SITE_NAME, OG_IMAGE, NOT_FOUND } from "../src/lib/seoRoutes.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const shell = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const navLinks = Object.entries(SEO_ROUTES)
  .map(([p, m]) => `<li><a href="${p}">${esc(m.h1)}</a></li>`)
  .join("");

function render(meta, { url, noindex }) {
  const tags = [
    `<meta name="description" content="${esc(meta.description)}" />`,
    noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    noindex ? "" : `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ].filter(Boolean).join("\n    ");

  let html = shell
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, tags);
  // Static fallback content for clients without JavaScript.
  const body = `<noscript><main><h1>${esc(meta.h1 || meta.title)}</h1><p>${esc(meta.description)}</p><ul>${navLinks}</ul></main></noscript>`;
  html = html.replace('<div id="root"></div>', `<div id="root"></div>\n    ${body}`);
  if (!html.includes(esc(meta.title))) throw new Error(`title not injected for ${url}`);
  return html;
}

for (const [route, meta] of Object.entries(SEO_ROUTES)) {
  const url = `${SITE_URL}${route}`;
  const file = route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, render(meta, { url }));
  console.log(`meta: ${route} -> ${path.relative(root, file)}`);
}
fs.writeFileSync(path.join(dist, "404.html"), render({ ...NOT_FOUND, h1: "Page not found" }, { noindex: true }));
console.log("meta: 404 -> dist/404.html");
