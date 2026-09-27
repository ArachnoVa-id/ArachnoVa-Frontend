import { Router } from "express";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { requireAuth, requireUser } from "../auth.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "data");
const ordersPath = path.join(dataDir, "orders.json");

// MIDTRANS_SERVER_KEY: secret, server only. MIDTRANS_CLIENT_KEY is public (sent to the Snap popup).
const SERVER_KEY = process.env.MIDTRANS_SERVER_KEY;
const IS_PRODUCTION = process.env.MIDTRANS_IS_PRODUCTION === "true";
const SNAP_URL = IS_PRODUCTION
  ? "https://app.midtrans.com/snap/v1/transactions"
  : "https://app.sandbox.midtrans.com/snap/v1/transactions";

function readOrders() {
  if (!fs.existsSync(ordersPath)) return [];
  return JSON.parse(fs.readFileSync(ordersPath, "utf-8"));
}

function saveOrder(order) {
  const orders = readOrders();
  orders.push(order);
  fs.writeFileSync(ordersPath, JSON.stringify(orders, null, 2), "utf-8");
}

// "Rp 1.100.000" -> 1100000; "Custom" -> null
function parsePrice(price) {
  const digits = String(price || "").replace(/\D/g, "");
  const amount = Number(digits);
  return digits && amount > 0 ? amount : null;
}

function findPlan(name) {
  const pricing = JSON.parse(fs.readFileSync(path.join(dataDir, "pricing.json"), "utf-8"));
  return (pricing.plans || []).find((p) => p.name === name) || null;
}

const clean = (v, max) => String(v ?? "").trim().slice(0, max);

export const ordersRouter = Router();

ordersRouter.post("/", requireUser, async (req, res) => {
  if (!SERVER_KEY) return res.status(503).json({ error: "Payments are not configured yet" });

  const plan = findPlan(req.body?.plan);
  // ctaMode "link" plans are sold elsewhere (their CTA URL), never through this checkout.
  const amount = plan && plan.ctaMode !== "link" && parsePrice(plan.price);
  // The amount always comes from pricing.json, never from the client.
  if (!amount) return res.status(400).json({ error: "This package can't be ordered online" });

  const name = clean(req.body?.name, 100) || req.user.name;
  const phone = clean(req.body?.phone, 20);
  const notes = clean(req.body?.notes, 1000);
  if (!/^\+?[0-9\s-]{8,20}$/.test(phone)) {
    return res.status(400).json({ error: "Please enter a valid WhatsApp number" });
  }

  const orderId = `AV-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`;
  const snapRes = await fetch(SNAP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Basic ${Buffer.from(`${SERVER_KEY}:`).toString("base64")}`,
    },
    body: JSON.stringify({
      transaction_details: { order_id: orderId, gross_amount: amount },
      item_details: [{ id: clean(plan.name, 50), name: clean(plan.name, 50), price: amount, quantity: 1 }],
      customer_details: { first_name: name, email: req.user.email, phone },
      custom_field1: clean(notes, 255),
    }),
  }).catch((e) => ({ ok: false, status: 502, json: async () => ({ error_messages: [e.message] }) }));

  const snap = await snapRes.json().catch(() => ({}));
  if (!snapRes.ok || !snap.token) {
    console.error("Midtrans Snap error:", snapRes.status, snap.error_messages);
    return res.status(502).json({ error: "Could not start payment, please try again" });
  }

  saveOrder({
    orderId,
    plan: plan.name,
    amount,
    email: req.user.email,
    name,
    phone,
    notes,
    status: "created",
    snapRedirectUrl: snap.redirect_url,
    createdAt: new Date().toISOString(),
  });

  res.json({ orderId, snapToken: snap.token });
});

ordersRouter.get("/", requireAuth, (req, res) => {
  res.json(readOrders().reverse());
});
