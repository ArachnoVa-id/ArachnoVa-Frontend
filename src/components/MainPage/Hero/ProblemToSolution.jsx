import { useEffect, useState } from "react";
import { FiAlertTriangle, FiLayers, FiZap, FiCheckCircle, FiClock, FiDollarSign, FiAward } from "react-icons/fi";
import { useT } from "@/lib/i18n";

// Real kinds of problems we've solved, each walked from problem to solution.
const CASES = [
  {
    problem: { en: "Ticket sales crash on launch day", id: "Penjualan tiket tumbang saat hari rilis" },
    root: { en: "Everyone hits checkout at the same second", id: "Semua orang checkout di detik yang sama" },
    solution: { en: "Fair queue, live seat map, QR at the gate", id: "Antrean adil, denah kursi langsung, QR di gerbang" },
  },
  {
    problem: { en: "Waste data scattered on paper notes", id: "Data sampah tercecer di catatan kertas" },
    root: { en: "No single place to record each pickup", id: "Tidak ada satu tempat untuk mencatat tiap pengangkutan" },
    solution: { en: "One dashboard, updated from the field", id: "Satu dasbor, diperbarui langsung dari lapangan" },
  },
  {
    problem: { en: "Bookings juggled by hand in chat", id: "Pemesanan diurus manual lewat chat" },
    root: { en: "Availability lives in someone's head", id: "Ketersediaan hanya diingat satu orang" },
    solution: { en: "Online booking with automatic confirmation", id: "Pemesanan online dengan konfirmasi otomatis" },
  },
];

const STEPS = [
  { key: "problem", icon: FiAlertTriangle, label: { en: "Problem", id: "Masalah" }, tone: "text-rose-600 bg-rose-50 border-rose-200" },
  { key: "root", icon: FiLayers, label: { en: "Fundamentals: find the root cause", id: "Fondasi: temukan akar masalah" }, tone: "text-indigo-600 bg-indigo-50 border-indigo-200" },
  { key: "ai", icon: FiZap, label: { en: "AI speeds up the build", id: "AI mempercepat pengerjaan" }, tone: "text-amber-600 bg-amber-50 border-amber-200" },
  { key: "solution", icon: FiCheckCircle, label: { en: "Solution that lasts", id: "Solusi yang bertahan" }, tone: "text-emerald-600 bg-emerald-50 border-emerald-200" },
];

const TRIAD = [
  { key: "time", icon: FiClock, label: { en: "Time", id: "Waktu" }, note: { en: "faster", id: "lebih cepat" } },
  { key: "cost", icon: FiDollarSign, label: { en: "Cost", id: "Biaya" }, note: { en: "leaner", id: "lebih hemat" } },
  { key: "quality", icon: FiAward, label: { en: "Quality", id: "Kualitas" }, note: { en: "built to last", id: "tahan lama" } },
];

const STEP_MS = 1300;
const HOLD_MS = 3200;

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

// phase 0..3 walks the steps; phase 4 = solution shown and all three triad corners won
export function useStory() {
  const still = reducedMotion();
  const [c, setC] = useState(0);
  const [phase, setPhase] = useState(still ? 4 : 0);
  useEffect(() => {
    if (still) return undefined;
    const id = setTimeout(() => {
      if (phase < 4) setPhase(phase + 1);
      else { setPhase(0); setC((x) => (x + 1) % CASES.length); }
    }, phase < 4 ? STEP_MS : HOLD_MS);
    return () => clearTimeout(id);
  }, [phase, still]);
  return { c, phase };
}

export function StoryCard({ c, phase, className = "" }) {
  const t = useT();
  const kase = CASES[c];
  const text = { problem: kase.problem, root: kase.root, ai: { en: "Drafts, tests and checks in hours, reviewed by our engineers", id: "Draf, tes, dan pengecekan dalam hitungan jam, ditinjau engineer kami" }, solution: kase.solution };
  return (
    <ol className={`relative flex flex-col gap-[0.55rem] ${className}`} aria-live="polite">
      {/* the rail the problem travels along */}
      <span aria-hidden="true" className="absolute left-[1.05rem] top-[1.2rem] bottom-[1.2rem] w-[2px] bg-gray-200" />
      <span aria-hidden="true" className="absolute left-[1.05rem] top-[1.2rem] w-[2px] bg-gradient-to-b from-rose-400 via-amber-400 to-emerald-500 transition-all duration-700 ease-out"
        style={{ height: `calc(${Math.min(phase, 3) / 3} * (100% - 2.4rem))` }} />
      {STEPS.map((s, i) => {
        const on = phase >= i;
        const now = phase === i || (i === 3 && phase === 4);
        return (
          <li key={s.key} className={`relative flex items-start gap-[0.7rem] transition-all duration-500 ${on ? "opacity-100 translate-x-0" : "opacity-30 translate-x-[0.3rem]"}`}>
            <span className={`relative z-[1] shrink-0 w-[2.15rem] h-[2.15rem] rounded-full border flex items-center justify-center transition-colors duration-500 ${on ? s.tone : "bg-white border-gray-200 text-gray-300"}`}>
              <s.icon size={15} aria-hidden="true" />
              {now && <span aria-hidden="true" className="absolute inset-0 rounded-full animate-ping opacity-30 border-2 border-current" />}
            </span>
            <span className="min-w-0 pt-[0.1rem]">
              <span className="block text-[0.72rem] font-bold uppercase tracking-[0.06em] text-gray-500">{t(s.label)}</span>
              <span key={`${c}-${s.key}`} className={`block font-SourceSansProSemibold text-[0.98rem] leading-snug text-neutral-g ${on ? "animate-fade-in-left" : ""} ${s.key === "solution" && on ? "text-emerald-700" : ""}`}>
                {on ? t(text[s.key]) : "…"}
              </span>
              {s.key === "ai" && (
                <span aria-hidden="true" className="mt-[0.35rem] block h-[0.3rem] w-[11rem] max-w-full rounded-full bg-gray-100 overflow-hidden">
                  <span className="block h-full rounded-full bg-gradient-to-r from-amber-400 to-[#1AB0C8] transition-[width] ease-in"
                    style={{ width: on ? "100%" : "0%", transitionDuration: on ? "900ms" : "0ms" }} />
                </span>
              )}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

// The usual "pick two of cost, time, quality" triangle, with all three corners won.
export function Triad({ phase, className = "" }) {
  const t = useT();
  const won = phase >= 4;
  const pts = { time: [60, 10], cost: [12, 92], quality: [108, 92] };
  return (
    <div className={`flex items-center gap-[0.9rem] ${className}`}>
      <svg viewBox="0 0 120 104" className="w-[5.6rem] h-auto shrink-0" aria-hidden="true">
        <polygon points="60,10 12,92 108,92" className={`transition-all duration-700 ${won ? "fill-[#1AB0C8]/20" : "fill-transparent"}`} />
        {[["time", "cost"], ["cost", "quality"], ["quality", "time"]].map(([a, b], k) => (
          <line key={k} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} strokeWidth="2.5" strokeLinecap="round"
            className={`transition-all duration-500 ${won ? "stroke-[#179FB5]" : "stroke-gray-300"}`} style={{ transitionDelay: won ? `${k * 180}ms` : "0ms" }} />
        ))}
        {TRIAD.map((x, k) => (
          <circle key={x.key} cx={pts[x.key][0]} cy={pts[x.key][1]} r="7.5"
            className={`transition-all duration-500 ${won ? "fill-emerald-500" : "fill-gray-300"}`} style={{ transitionDelay: won ? `${k * 180}ms` : "0ms" }} />
        ))}
        <text x="60" y="68" textAnchor="middle" className={`text-[13px] font-bold transition-opacity duration-500 ${won ? "fill-[#0F3B47] opacity-100" : "opacity-0"}`} style={{ transitionDelay: won ? "600ms" : "0ms" }}>
          3/3
        </text>
      </svg>
      <ul className="flex flex-col gap-[0.25rem] min-w-0">
        {TRIAD.map((x, k) => (
          <li key={x.key} className="flex items-center gap-[0.4rem] text-[0.85rem] whitespace-nowrap">
            <x.icon size={13} aria-hidden="true" className={won ? "text-emerald-600" : "text-gray-400"} />
            <b className="font-SourceSansProBold text-neutral-g">{t(x.label)}</b>
            <span className={`transition-all duration-500 ${won ? "opacity-100 text-emerald-700" : "opacity-0"}`} style={{ transitionDelay: won ? `${k * 180}ms` : "0ms" }}>✓ {t(x.note)}</span>
          </li>
        ))}
        <li className="text-[0.72rem] text-gray-500 mt-[0.15rem]">{t({ en: "No trade-off: all three, not two", id: "Tanpa kompromi: ketiganya, bukan dua" })}</li>
      </ul>
    </div>
  );
}
