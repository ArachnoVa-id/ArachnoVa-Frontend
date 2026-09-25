import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";

// CMS_API_KEY: server-to-server key (MCP, scripts) and the secret that signs admin session tokens.
//   Never ship it to the browser.
// GOOGLE_CLIENT_ID: OAuth client ID of the "Sign in with Google" button (public, not a secret).
// CMS_ADMIN_EMAILS: comma-separated Google accounts allowed into /admin.
//   Any other verified Google account can sign in as a customer (to place orders).
const API_KEY = process.env.CMS_API_KEY;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const ADMIN_EMAILS = new Set(
  (process.env.CMS_ADMIN_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean),
);
const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;

const googleClient = new OAuth2Client();

function safeEqual(a, b) {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

function sign(payload) {
  return crypto.createHmac("sha256", API_KEY).update(`cms-token:${payload}`).digest("base64url");
}

function isAdminEmail(email) {
  return ADMIN_EMAILS.has(email);
}

function issueToken(email, name) {
  const exp = Date.now() + TOKEN_TTL_MS;
  const payload = Buffer.from(JSON.stringify({ email, name, exp })).toString("base64url");
  return { token: `${payload}.${sign(payload)}`, expiresAt: exp, email, name, isAdmin: isAdminEmail(email) };
}

function readToken(token) {
  const [payload, sig] = String(token).split(".");
  if (!payload || !sig || !safeEqual(sig, sign(payload))) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (!(data.exp > Date.now()) || !data.email) return null;
    return data;
  } catch {
    return null;
  }
}

function sessionFrom(req) {
  const bearer = (req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  return bearer ? readToken(bearer) : null;
}

// Admin only: the API key, or a session whose email is (still) on the admin allowlist.
// Re-checking the allowlist here means removing an email revokes its admin sessions.
export function requireAuth(req, res, next) {
  if (!API_KEY) {
    return res.status(503).json({ error: "CMS_API_KEY is not configured on the server" });
  }
  const key = req.headers["x-api-key"];
  if (key && safeEqual(key, API_KEY)) return next();

  const session = sessionFrom(req);
  if (session && isAdminEmail(session.email)) {
    req.adminEmail = session.email;
    return next();
  }
  return res.status(session ? 403 : 401).json({ error: session ? "Admin access required" : "Unauthorized" });
}

// Any signed-in Google account (customers and admins).
export function requireUser(req, res, next) {
  if (!API_KEY) {
    return res.status(503).json({ error: "CMS_API_KEY is not configured on the server" });
  }
  const session = sessionFrom(req);
  if (!session) return res.status(401).json({ error: "Please sign in" });
  req.user = { email: session.email, name: session.name, isAdmin: isAdminEmail(session.email) };
  next();
}

export function authConfig(req, res) {
  res.json({
    googleClientId: GOOGLE_CLIENT_ID || null,
    midtransClientKey: process.env.MIDTRANS_CLIENT_KEY || null,
    midtransIsProduction: process.env.MIDTRANS_IS_PRODUCTION === "true",
  });
}

export async function googleLogin(req, res) {
  if (!API_KEY || !GOOGLE_CLIENT_ID) {
    return res.status(503).json({ error: "Google login is not configured (CMS_API_KEY, GOOGLE_CLIENT_ID)" });
  }
  const credential = req.body?.credential;
  if (!credential) return res.status(400).json({ error: "Missing Google credential" });

  let payload;
  try {
    // Checks Google's signature, issuer, expiry, and that the token was minted for our client ID.
    const ticket = await googleClient.verifyIdToken({ idToken: credential, audience: GOOGLE_CLIENT_ID });
    payload = ticket.getPayload();
  } catch {
    return res.status(401).json({ error: "Invalid Google sign-in" });
  }

  const email = payload?.email?.toLowerCase();
  if (!email || !payload.email_verified) {
    return res.status(403).json({ error: "Your Google account email is not verified" });
  }
  res.json(issueToken(email, payload.name || email));
}
