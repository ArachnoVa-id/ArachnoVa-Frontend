import { useState } from "react";
import { createPortal } from "react-dom";
import OrderModal, { parsePrice } from "@/components/ui/OrderModal";

// "Pilih Paket" button: plans with a numeric price are ordered online (Midtrans),
// "Custom" plans keep linking to their CTA (WhatsApp).
export default function PlanCta({ plan, className }) {
  const [open, setOpen] = useState(false);
  const label = plan.ctaText || "Pilih Paket";

  if (!parsePrice(plan.price)) {
    return (
      <a href={plan.cta || "https://wa.me/6287882832538"} className={className}>
        {label}
      </a>
    );
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>
      {/* Portal: pricing cards animate with transforms, which would trap a fixed-position modal. */}
      {open && createPortal(<OrderModal plan={plan} onClose={() => setOpen(false)} />, document.body)}
    </>
  );
}
