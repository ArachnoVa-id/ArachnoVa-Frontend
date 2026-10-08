import { useState } from "react";
import { createPortal } from "react-dom";
import OrderModal, { parsePrice } from "@/components/ui/OrderModal";
import { useSettings } from "@/context/DataContext";
import { waLink, planMessage } from "@/lib/whatsapp";

// "Pilih Paket" button: plans with a numeric price are ordered online (Midtrans),
// "Custom" plans and plans with ctaMode "link" go to their CTA URL (WhatsApp, external signup...).
export default function PlanCta({ plan, className }) {
  const [open, setOpen] = useState(false);
  const settings = useSettings();
  const label = plan.ctaText || "Pilih Paket";

  if (plan.ctaMode === "link" || !parsePrice(plan.price)) {
    return (
      <a href={!plan.cta || /wa\.me\//.test(plan.cta) ? waLink(planMessage(plan.name), settings?.whatsapp) : plan.cta} className={className}>
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
