import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";

// You (with our web: fundamentals, charged by AI) against the three beasts that usually
// force a trade-off. Each beast is beaten in turn; none is traded for another.
const LOOP = 10500;
const STRIKE0 = 1300;
const GAP = 2000;
const clamp = (x) => Math.max(0, Math.min(1, x));
const ease = (x) => 1 - Math.pow(1 - x, 3);
const span = (ms, a, b) => clamp((ms - a) / (b - a));

// stage coordinates: the SVG overlay uses a 160 x 110 box (same 16:11 ratio as the stage)
const HAND = [56, 38];
const BEASTS = [
  { key: "time", img: "/image/Hero/battle/time.webp", box: { left: 46, top: 3, w: 27 }, at: [95, 29],
    name: { en: "Time", id: "Waktu" }, threat: { en: "the endless loop", id: "lingkaran tanpa akhir" }, win: { en: "a shorter path", id: "jalan lebih pendek" } },
  { key: "cost", img: "/image/Hero/battle/cost.webp", box: { left: 55, top: 44, w: 29 }, at: [111, 75],
    name: { en: "Cost", id: "Biaya" }, threat: { en: "the dead weight", id: "beban mati" }, win: { en: "a lighter load", id: "beban lebih ringan" } },
  { key: "quality", img: "/image/Hero/battle/quality.webp", box: { left: 73, top: 8, w: 27 }, at: [138, 40],
    name: { en: "Quality", id: "Kualitas" }, threat: { en: "the broken form", id: "bentuk yang retak" }, win: { en: "a truer form", id: "bentuk lebih utuh" } },
];

function useClock() {
  const still = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [ms, setMs] = useState(still ? 8500 : 0);
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

// a small spider web, drawn around a beast when the bolt lands
function Net({ cx, cy, k }) {
  if (k <= 0) return null;
  const r = 15 * ease(k);
  const spokes = [...Array(8)].map((_, i) => (i / 8) * Math.PI * 2);
  const ring = (f) => spokes.map((a) => `${cx + Math.cos(a) * r * f},${cy + Math.sin(a) * r * f}`).join(" ");
  return (
    <g opacity={Math.min(1, k * 2)} style={{ filter: "drop-shadow(0 0 1.5px #5EEAD4)" }}>
      {spokes.map((a, i) => <line key={i} x1={cx} y1={cy} x2={cx + Math.cos(a) * r} y2={cy + Math.sin(a) * r} stroke="#A5F3FC" strokeWidth="0.45" />)}
      {[0.35, 0.65, 1].map((f) => <polygon key={f} points={ring(f)} fill="none" stroke="#A5F3FC" strokeWidth="0.45" />)}
    </g>
  );
}

export default function ProblemToSolution({ className = "" }) {
  const t = useT();
  const ms = useClock();
  const intro = ease(span(ms, 0, 800));
  const outro = 1 - span(ms, LOOP - 700, LOOP);
  const victory = span(ms, STRIKE0 + GAP * 3, STRIKE0 + GAP * 3 + 600);

  const fights = BEASTS.map((b, i) => {
    const s = STRIKE0 + i * GAP;
    return {
      ...b,
      bolt: span(ms, s, s + 380),
      net: span(ms, s + 300, s + 900),
      down: ease(span(ms, s + 750, s + 1450)),
      boltOn: ms > s && ms < s + 1000,
      cast: ms > s - 150 && ms < s + 400,
    };
  });
  const casting = fights.some((f) => f.cast);
  const allDown = victory > 0;

  return (
    <div className={className} role="img" aria-label={t({ en: "You, with our web of fundamentals charged by AI, defeat three beasts: Time, Cost and Quality. None is traded for another.", id: "Anda, dengan jaring fondasi yang diperkuat AI, mengalahkan tiga monster: Waktu, Biaya, dan Kualitas. Tak ada yang dikorbankan." })}>
      <div className="relative w-full aspect-[16/11] rounded-[0.6rem] overflow-hidden bg-[radial-gradient(ellipse_at_30%_20%,#14505E_0%,#0B2530_50%,#04141A_100%)]">
        {/* web floor: the fundamentals everything stands on */}
        <svg viewBox="0 0 160 110" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <radialGradient id="pts-floor" cx="0.5" cy="1" r="0.8"><stop offset="0" stopColor="#1AB0C8" stopOpacity="0.35" /><stop offset="1" stopColor="#1AB0C8" stopOpacity="0" /></radialGradient>
          </defs>
          <rect x="0" y="78" width="160" height="32" fill="url(#pts-floor)" />
          {[...Array(13)].map((_, i) => <line key={i} x1={80} y1={84} x2={-40 + i * 20} y2={110} stroke="#1AB0C8" strokeOpacity="0.25" strokeWidth="0.3" />)}
          {[88, 94, 102].map((y) => <line key={y} x1="0" y1={y} x2="160" y2={y} stroke="#1AB0C8" strokeOpacity="0.2" strokeWidth="0.3" />)}
        </svg>
        <span className="absolute left-[66%] bottom-[3%] -translate-x-1/2 text-[0.6rem] tracking-[0.3em] font-bold text-[#5EEAD4]/70">{t({ en: "FUNDAMENTALS", id: "FONDASI" })}</span>

        {/* beasts */}
        {fights.map((f) => (
          <div key={f.key} className="absolute" style={{ left: `${f.box.left}%`, top: `${f.box.top}%`, width: `${f.box.w}%`, opacity: intro * outro }}>
            <img src={f.img} alt="" draggable="false" className="w-full h-auto select-none"
              style={{
                transform: `translateY(${(1 - intro) * 12 + Math.sin(ms / 420 + f.at[0]) * (1 - f.down) * 1.5}px) scale(${1 - f.down * 0.18}) rotate(${f.net > 0 && f.down < 1 ? Math.sin(ms / 30) * 3 * (1 - f.down) : 0}deg)`,
                filter: `grayscale(${f.down * 0.85}) brightness(${1 - f.down * 0.3}) drop-shadow(0 6px 10px rgba(0,0,0,0.5))`,
                opacity: 1 - f.down * 0.35,
                transformOrigin: "50% 90%",
              }} />
          </div>
        ))}

        {/* hero */}
        <img src="/image/Hero/battle/hero.webp" alt="" draggable="false" className="absolute left-[3%] bottom-[5%] h-[78%] w-auto select-none"
          style={{
            transform: `translateX(${casting ? 6 : 0}px) translateY(${Math.sin(ms / 500) * 2}px)`,
            transition: "transform .18s ease-out",
            filter: `drop-shadow(0 0 ${allDown ? 10 + victory * 8 : casting ? 10 : 4}px rgba(26,176,200,${allDown ? 0.9 : 0.6}))`,
          }} />

        {/* bolts and nets */}
        <svg viewBox="0 0 160 110" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          {fights.map((f) => {
            const [x2, y2] = f.at;
            const mx = (HAND[0] + x2) / 2, my = Math.min(HAND[1], y2) - 10;
            const d = `M${HAND[0]},${HAND[1]} Q${mx},${my} ${x2},${y2}`;
            return (
              <g key={f.key}>
                {f.boltOn && (
                  <>
                    <path d={d} pathLength="1" fill="none" stroke="#1AB0C8" strokeWidth="2.2" strokeOpacity="0.35" strokeLinecap="round" strokeDasharray={`${f.bolt} 1`} />
                    <path d={d} pathLength="1" fill="none" stroke="#E0FBFF" strokeWidth="0.7" strokeLinecap="round" strokeDasharray={`${f.bolt} 1`} />
                    {/* the AI charge riding the thread */}
                    {f.bolt < 1 && (() => {
                      const u = f.bolt, x = (1 - u) * (1 - u) * HAND[0] + 2 * (1 - u) * u * mx + u * u * x2, y = (1 - u) * (1 - u) * HAND[1] + 2 * (1 - u) * u * my + u * u * y2;
                      return <circle cx={x} cy={y} r="1.8" fill="#FBBF24" style={{ filter: "drop-shadow(0 0 2px #F59E0B)" }} />;
                    })()}
                  </>
                )}
                <Net cx={x2} cy={y2} k={f.net * (1 - span(ms, LOOP - 900, LOOP - 300))} />
              </g>
            );
          })}
        </svg>

        {/* state */}
        <span className={`absolute left-[3%] top-[4%] rounded-full px-[0.5rem] py-[0.15rem] text-[0.62rem] font-bold tracking-[0.12em] transition-colors duration-500 ${allDown ? "bg-emerald-500 text-white" : "bg-rose-500/90 text-white"}`}>
          {allDown ? t({ en: "SOLUTION", id: "SOLUSI" }) : t({ en: "PROBLEM", id: "MASALAH" })}
        </span>
        <span className="absolute right-[3%] bottom-[3%] inline-flex items-center gap-1 rounded-full bg-amber-400/90 px-[0.45rem] py-[0.1rem] text-[0.6rem] font-bold text-[#3B2300]">⚡ AI</span>
      </div>
      <ul className="mt-[0.6rem] grid grid-cols-3 gap-[0.4rem]">
        {fights.map((f) => {
          const won = f.down > 0.5;
          return (
            <li key={f.key} className={`rounded-[0.5rem] border px-[0.5rem] py-[0.35rem] transition-colors duration-300 ${won ? "border-[#1AB0C8]/40 bg-[#E6F6F9]" : "border-amber-200 bg-amber-50"}`}>
              <span className={`block text-[0.8rem] font-SourceSansProBold ${won ? "text-[#0F3B47]" : "text-amber-900"}`}>{won ? "✓ " : ""}{t(f.name)}</span>
              <span className={`block text-[0.7rem] leading-tight ${won ? "text-[#178a9c]" : "text-amber-800/80"}`}>{won ? t(f.win) : t(f.threat)}</span>
            </li>
          );
        })}
      </ul>
      <p className={`mt-[0.45rem] text-center text-[0.78rem] font-SourceSansProSemibold transition-opacity duration-500 ${allDown ? "opacity-100 text-neutral-g" : "opacity-0"}`}>
        {t({ en: "All three won, none traded away.", id: "Ketiganya menang, tak ada yang dikorbankan." })}
      </p>
    </div>
  );
}
