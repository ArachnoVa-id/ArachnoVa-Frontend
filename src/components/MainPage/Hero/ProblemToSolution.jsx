import { useEffect, useRef, useState } from "react";
import { LuClock, LuCoins, LuBadgeCheck, LuSparkles, LuCheck } from "react-icons/lu";
import { useT } from "@/lib/i18n";

// The project-management triangle (time, cost, quality) where you usually get to pick two.
// The sides are the fundamentals; the AI sparkle runs along them and wins each corner in turn,
// then settles in the middle once all three are won.
const LOOP = 7600;
const T0 = 900;
const LEG = 1100;
const clamp = (x) => Math.max(0, Math.min(1, x));
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const mix = (a, b, k) => a + (b - a) * k;
const W = 400;
const H = 300;

const CORNERS = [
  { key: "time", at: [200, 70], Icon: LuClock, name: { en: "Time", id: "Waktu" }, win: { en: "faster", id: "lebih cepat" } },
  { key: "cost", at: [78, 232], Icon: LuCoins, name: { en: "Cost", id: "Biaya" }, win: { en: "leaner", id: "lebih hemat" } },
  { key: "quality", at: [322, 232], Icon: LuBadgeCheck, name: { en: "Quality", id: "Kualitas" }, win: { en: "built to last", id: "tahan lama" } },
];
const pct = ([x, y]) => ({ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` });
function side(a, b, gap = 48) {
  const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy);
  return [[a[0] + (dx / len) * gap, a[1] + (dy / len) * gap], [b[0] - (dx / len) * gap, b[1] - (dy / len) * gap]];
}

function useClock() {
  const still = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [ms, setMs] = useState(still ? 5600 : 0);
  const raf = useRef(0);
  useEffect(() => {
    if (still) return undefined;
    const t0 = performance.now();
    const tick = (now) => { setMs((now - t0) % LOOP); raf.current = requestAnimationFrame(tick); };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [still]);
  return ms;
}

export default function ProblemToSolution({ className = "" }) {
  const t = useT();
  const ms = useClock();
  const won = [0, 1, 2].map((i) => ms > T0 + i * LEG);
  const legK = [0, 1, 2].map((i) => clamp((ms - T0 - i * LEG) / LEG));
  const travelling = ms > T0 && ms < T0 + 3 * LEG;
  const leg = Math.min(2, Math.max(0, Math.floor((ms - T0) / LEG)));
  const a = CORNERS[leg].at, b = CORNERS[(leg + 1) % 3].at, e = ease(legK[leg]);
  const spark = [mix(a[0], b[0], e), mix(a[1], b[1], e)];
  const bloom = ease(clamp((ms - T0 - 3 * LEG) / 600));
  const fade = 1 - clamp((ms - LOOP + 600) / 600);
  const centre = [200, 180];

  return (
    <div className={className} role="img" aria-label={t({ en: "The time, cost and quality triangle: AI on solid fundamentals wins all three corners", id: "Segitiga waktu, biaya, dan kualitas: AI di atas fondasi yang kuat memenangkan ketiga sudutnya" })}>
      <div className="relative w-full aspect-[4/3]" style={{ opacity: fade }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full" aria-hidden="true">
          {CORNERS.map((c, i) => {
            const [p, q] = side(c.at, CORNERS[(i + 1) % 3].at);
            return (
              <g key={c.key}>
                <line x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 5" />
                {legK[i] > 0 && <line x1={p[0]} y1={p[1]} x2={mix(p[0], q[0], legK[i])} y2={mix(p[1], q[1], legK[i])} stroke="#1AB0C8" strokeWidth="2.5" strokeLinecap="round" />}
              </g>
            );
          })}
        </svg>

        {CORNERS.map((c, i) => (
          <div key={c.key} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" style={pct(c.at)}>
            <span className={`relative w-[3.4rem] h-[3.4rem] rounded-full flex items-center justify-center transition-all duration-500 ${won[i] ? "bg-gradient-to-br from-[#1AB0C8] to-[#0F3B47] text-white shadow-lg scale-105" : "bg-white border-2 border-dashed border-gray-300 text-gray-400"}`}>
              <c.Icon size={24} aria-hidden="true" />
              <span className={`absolute -right-[0.2rem] -bottom-[0.2rem] w-[1.25rem] h-[1.25rem] rounded-full bg-emerald-500 text-white flex items-center justify-center ring-2 ring-white transition-all duration-300 ${won[i] ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                <LuCheck size={12} strokeWidth={3} aria-hidden="true" />
              </span>
            </span>
            <span className={`mt-[0.35rem] text-[0.9rem] font-SourceSansProBold transition-colors duration-300 ${won[i] ? "text-neutral-g" : "text-gray-400"}`}>{t(c.name)}</span>
            <span className={`text-[0.72rem] text-[#178a9c] transition-opacity duration-300 ${won[i] ? "opacity-100" : "opacity-0"}`}>{t(c.win)}</span>
          </div>
        ))}

        {/* AI sparkle: rides the sides, then settles in the middle */}
        {travelling && (
          <LuSparkles aria-hidden="true" className="absolute -translate-x-1/2 -translate-y-1/2 text-violet-500 drop-shadow-[0_0_6px_rgba(139,92,246,0.6)]" size={26} style={pct(spark)} />
        )}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" style={{ ...pct(centre), opacity: bloom, transform: `translate(-50%, -50%) scale(${0.7 + bloom * 0.3})` }}>
          <LuSparkles aria-hidden="true" size={34} className="text-violet-500 drop-shadow-[0_0_10px_rgba(139,92,246,0.55)]" />
          <span className="mt-[0.2rem] text-[0.72rem] font-bold tracking-[0.08em] text-violet-600">{t({ en: "ALL THREE", id: "KETIGANYA" })}</span>
        </div>
      </div>
      <p className="mt-[0.2rem] flex items-center justify-center gap-[0.35rem] text-[0.78rem] text-gray-500">
        <LuSparkles size={14} className="text-violet-500" aria-hidden="true" />
        {t({ en: "AI on solid fundamentals: all three, not two", id: "AI di atas fondasi kuat: ketiganya, bukan dua" })}
      </p>
    </div>
  );
}
