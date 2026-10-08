import { useSettings } from "@/context/DataContext";

// The one sales number. Site settings (admin) can override it; everything else derives from it.
export const DEFAULT_WA_NUMBER = "6287882832538";

// Pre-filled first messages, one per entry point, so a chat shows which button the lead came from.
export const WA_MESSAGES = {
  general: "Halo ArachnoVa, saya ingin konsultasi tentang project digital.",
  contact: "Halo ArachnoVa, saya ingin bertanya tentang layanan ArachnoVa.",
  hero: "Halo ArachnoVa, saya ingin memulai project baru.",
  cta: "Halo ArachnoVa, saya siap memulai project digital saya.",
  projects: "Halo ArachnoVa, saya melihat portofolio Anda dan ingin membuat project serupa.",
  services: "Halo ArachnoVa, saya ingin konsultasi tentang layanan Anda.",
};

export function waNumber(settingsWhatsapp) {
  const digits = String(settingsWhatsapp || "").replace(/\D/g, "");
  return digits.length >= 9 ? digits : DEFAULT_WA_NUMBER;
}

export function waLink(text, settingsWhatsapp) {
  const base = `https://wa.me/${waNumber(settingsWhatsapp)}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

// Message for a pricing plan's "Hubungi Kami"/"Pilih Paket" button.
export function planMessage(planName) {
  return `Halo ArachnoVa, saya tertarik dengan paket ${planName}.`;
}

// Hook: WhatsApp link with the given pre-filled text, using the number from site settings.
export function useWhatsApp(text = WA_MESSAGES.general) {
  const settings = useSettings();
  return waLink(text, settings?.whatsapp);
}

// Human-readable form of the sales number, e.g. "+62 878-8283-2538".
export function formatWaNumber(settingsWhatsapp) {
  const n = waNumber(settingsWhatsapp);
  const local = n.replace(/^62/, "");
  return `+62 ${local.slice(0, 3)}-${local.slice(3, 7)}-${local.slice(7)}`;
}
