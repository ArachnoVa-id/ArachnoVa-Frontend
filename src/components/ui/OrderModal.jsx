import { useEffect, useState } from "react";
import { authFetch, useData } from "@/context/DataContext";
import GoogleSignIn, { getAuthConfig, loadScript } from "@/components/ui/GoogleSignIn";

// "Rp 1.100.000" -> 1100000; "Custom" -> null. Mirrors parsePrice in server/routes/orders.js.
export function parsePrice(price) {
  const digits = String(price || "").replace(/\D/g, "");
  return digits && Number(digits) > 0 ? Number(digits) : null;
}

async function openSnap(snapToken, callbacks) {
  const { midtransClientKey, midtransIsProduction } = await getAuthConfig();
  if (!midtransClientKey) throw new Error("Payments are not configured yet");
  const host = midtransIsProduction ? "https://app.midtrans.com" : "https://app.sandbox.midtrans.com";
  await loadScript(`${host}/snap/snap.js`, { "data-client-key": midtransClientKey });
  window.snap.pay(snapToken, callbacks);
}

export default function OrderModal({ plan, onClose }) {
  const { user } = useData();
  const [form, setForm] = useState({ name: user?.name || "", phone: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null); // success | pending | null

  useEffect(() => {
    if (user?.name) setForm((f) => (f.name ? f : { ...f, name: user.name }));
  }, [user]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && !submitting && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, submitting]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await authFetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: plan.name, ...form }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.snapToken) throw new Error(json.error || `Order failed (${res.status})`);

      await openSnap(json.snapToken, {
        onSuccess: () => setResult("success"),
        onPending: () => setResult("pending"),
        onError: () => setError("Payment failed, please try again"),
        onClose: () => {},
      });
    } catch (err) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  const input = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1AB0C8] focus:border-transparent";

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 p-4" onClick={() => !submitting && onClose()}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-title"
        className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <h2 id="order-title" className="font-SourceSansProBold text-xl text-neutral-g">{plan.name}</h2>
            <p className="font-InterBold text-lg text-[#1AB0C8]">{plan.price}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-gray-700 text-2xl leading-none">×</button>
        </div>

        {result ? (
          <div className="text-center py-4">
            <p className="font-InterBold text-neutral-g">
              {result === "success" ? "Payment received, thank you!" : "Order created. Complete the payment using the instructions from Midtrans."}
            </p>
            <p className="text-sm text-gray-500 mt-2">We&apos;ll contact you on WhatsApp shortly.</p>
            <button type="button" onClick={onClose} className="mt-5 px-5 py-2 rounded-lg bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] text-white text-sm font-InterBold">Close</button>
          </div>
        ) : !user ? (
          <div>
            <p className="text-sm text-gray-600 mb-4 text-center">Sign in with Google to place your order</p>
            <GoogleSignIn />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <p className="text-xs text-gray-500">Ordering as {user.email}</p>
            <input className={input} placeholder="Full name" value={form.name} onChange={set("name")} required maxLength={100} />
            <input className={input} placeholder="WhatsApp number, e.g. 081234567890" value={form.phone} onChange={set("phone")} required inputMode="tel" maxLength={20} />
            <textarea className={input} placeholder="Notes about your project (optional)" rows={3} value={form.notes} onChange={set("notes")} maxLength={1000} />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] text-white text-sm font-InterBold disabled:opacity-60"
            >
              {submitting ? "Preparing payment..." : "Continue to payment"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
