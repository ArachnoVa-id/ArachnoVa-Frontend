import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";

// Three dimensions, three simple forms. A small AI spark runs along the fundamentals line
// and settles each one in turn: time's tangle straightens, cost's pile shrinks to a base,
// quality's rough outline becomes a circle.
const LOOP = 7000;
const START = 900;
const STEP = 1100;
const clamp = (x) => Math.max(0, Math.min(1, x));
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const mix = (a, b, k) => a + (b - a) * k;
const INK = "#0F3B47";
const MUTED = "#CBD5E1";
const color = (k) => `rgb(${Math.round(mix(203, 15, k))},${Math.round(mix(213, 59, k))},${Math.round(mix(225, 71, k))})`;

function smooth(pts) {
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`;
  }
  return d;
}

const TANGLE = [[20, 92], [44, 40], [86, 96], [56, 104], [34, 70], [90, 44], [104, 86], [70, 80], [62, 38], [112, 60]];
const LINE = TANGLE.map((_, i) => [34 + (72 * i) / (TANGLE.length - 1), 76]);
const BLOCKS = [[178, 92, 2], [205, 92, -3], [190, 74, 4], [175, 56, -6], [203, 56, 5], [188, 38, -8], [196, 20, 9]];
const KEEP = [[176, 92], [204, 92], [190, 72]];
const N = 40;
const NOISE = Array.from({ length: N }, (_, i) => Math.sin(i * 2.7) * 0.6 + Math.sin(i * 6.1) * 0.4);

function useClock() {
  const still = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [ms, setMs] = useState(still ? 5500 : 0);
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
  const k = [0, 1, 2].map((i) => ease(clamp((ms - START - i * STEP) / 700)));
  const fade = 1 - clamp((ms - LOOP + 600) / 600);
  const spark = clamp((ms - START + 300) / (STEP * 3));
  const sparkOn = ms > START - 300 && ms < START + STEP * 3;

  const tPts = TANGLE.map((p, i) => [mix(p[0], LINE[i][0], k[0]), mix(p[1], LINE[i][1], k[0])]);
  const qPts = NOISE.map((nz, i) => {
    const a = (i / N) * Math.PI * 2, r = 34 * (1 + nz * 0.28 * (1 - k[2]));
    return `${(330 + r * Math.cos(a)).toFixed(1)},${(66 + r * Math.sin(a)).toFixed(1)}`;
  });

  const names = [{ en: "Time", id: "Waktu" }, { en: "Cost", id: "Biaya" }, { en: "Quality", id: "Kualitas" }];
  return (
    <div className={className} role="img" aria-label={t({ en: "Time straightens, cost lightens, quality becomes whole, all on fundamentals", id: "Waktu menjadi lurus, biaya menjadi ringan, kualitas menjadi utuh, semuanya di atas fondasi" })}>
      <svg viewBox="0 0 400 150" className="w-full h-auto" aria-hidden="true" style={{ opacity: fade }}>
        {/* time */}
        <path d={smooth(tPts)} fill="none" stroke={color(k[0])} strokeWidth="3" strokeLinecap="round" />
        {/* cost */}
        {BLOCKS.map(([x, y, r], i) => {
          const keep = KEEP[i];
          if (keep) {
            const bx = mix(x, keep[0], k[1]), by = mix(y, keep[1], k[1]);
            return <rect key={i} x={bx} y={by} width="24" height="18" rx="2" fill={color(k[1])} transform={`rotate(${mix(r, 0, k[1])} ${bx + 12} ${by + 9})`} />;
          }
          return <rect key={i} x={x} y={y + 30 * k[1]} width="24" height="16" rx="2" fill={MUTED} opacity={1 - k[1]} transform={`rotate(${r} ${x + 12} ${y + 8})`} />;
        })}
        {/* quality */}
        <polygon points={qPts.join(" ")} fill="none" stroke={color(k[2])} strokeWidth="3" strokeLinejoin="round" />
        {/* fundamentals */}
        <line x1="10" y1="112" x2="390" y2="112" stroke={INK} strokeWidth="1.5" />
        {sparkOn && <circle cx={mix(20, 380, spark)} cy="112" r="4" fill="#F59E0B" />}
        {names.map((n, i) => (
          <text key={n.en} x={[70, 202, 330][i]} y="136" textAnchor="middle" className="text-[14px] font-bold" fill={k[i] > 0.5 ? INK : "#94A3B8"}>{t(n)}</text>
        ))}
      </svg>
      <p className="mt-[0.4rem] flex items-center justify-center gap-[0.5rem] text-[0.75rem] text-gray-500">
        <span>{t({ en: "on fundamentals", id: "di atas fondasi" })}</span>
        <span className="inline-flex items-center gap-1"><span className="w-[0.45rem] h-[0.45rem] rounded-full bg-amber-500" /> {t({ en: "sped up by AI", id: "dipercepat AI" })}</span>
      </p>
    </div>
  );
}
