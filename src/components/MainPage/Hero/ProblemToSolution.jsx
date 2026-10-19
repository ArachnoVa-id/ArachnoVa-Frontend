import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";

// Cost, time and quality are different kinds of thing, so each gets its own geometry:
//   time    is a path   -> the tangled route becomes a short straight one
//   cost    is weight   -> a wobbly pile sheds what it doesn't need, leaving a small stable base
//   quality is form     -> a rough, jittery outline settles into a true circle
// One AI sweep passes over all three, standing on a shared fundamentals baseline.
const W = 420;
const BASE = 162;
const LOOP = 7600;
const SWEEP_FROM = 1300;
const SWEEP_MS = 2300;

const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const clamp = (x) => Math.max(0, Math.min(1, x));
const mix = (a, b, k) => a + (b - a) * k;
const rgb = (a, b, k) => `rgb(${a.map((v, i) => Math.round(mix(v, b[i], k))).join(",")})`;
const CHAOS = [148, 163, 184];
const HUE = { time: [26, 176, 200], cost: [99, 102, 241], quality: [16, 185, 129] };

function smooth(pts) {
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`;
  }
  return d;
}

// TIME: a looping route from A to B that straightens and shortens
const T_TANGLE = [[18, 140], [40, 70], [95, 150], [60, 160], [30, 105], [100, 60], [120, 130], [70, 120], [55, 55], [118, 92]];
const T_CLEAN = T_TANGLE.map((_, i) => [40 + (60 * i) / (T_TANGLE.length - 1), 120]);

// COST: nine blocks in a tall unsteady pile; three essential ones remain as a base
const PILE = [
  { x: 186, y: 142, w: 44, h: 18, r: -4, keep: [181, 138] },
  { x: 196, y: 126, w: 30, h: 16, r: 7 },
  { x: 182, y: 110, w: 40, h: 15, r: -9, keep: [211, 138] },
  { x: 200, y: 95, w: 24, h: 15, r: 12 },
  { x: 188, y: 80, w: 36, h: 14, r: -6 },
  { x: 204, y: 66, w: 20, h: 14, r: 15, keep: [196, 116] },
  { x: 190, y: 52, w: 30, h: 13, r: -12 },
  { x: 199, y: 39, w: 22, h: 13, r: 8 },
  { x: 193, y: 27, w: 18, h: 12, r: -14 },
];

// QUALITY: an outline whose radius is noisy until it becomes a circle
const Q = { cx: 352, cy: 104, r: 40, n: 36 };
const NOISE = Array.from({ length: Q.n }, (_, i) => Math.sin(i * 2.3) * 0.6 + Math.sin(i * 5.1 + 1) * 0.4);

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
  const sweep = clamp((ms - SWEEP_FROM) / SWEEP_MS);
  const sx = mix(-30, W + 30, sweep);
  // each column turns over as the sweep passes it
  const at = (x0, x1) => ease(clamp((sx - x0) / (x1 - x0)));
  const kT = at(10, 130), kC = at(150, 270), kQ = at(295, 410);
  const fade = 1 - clamp((ms - 6900) / 600);
  const solved = kQ > 0.99;
  const wob = (k) => (1 - k);

  const tPts = T_TANGLE.map((p, i) => [
    mix(p[0], T_CLEAN[i][0], kT) + Math.sin(ms / 240 + i) * 2.5 * wob(kT),
    mix(p[1], T_CLEAN[i][1], kT) + Math.cos(ms / 280 + i * 1.6) * 2.5 * wob(kT),
  ]);
  const tA = tPts[0], tB = tPts[tPts.length - 1];

  const qPts = NOISE.map((nz, i) => {
    const a = (i / Q.n) * Math.PI * 2;
    const jitter = Math.sin(ms / 180 + i * 0.9) * 0.35;
    const rr = Q.r * (1 + (nz + jitter) * 0.32 * (1 - kQ));
    return [Q.cx + rr * Math.cos(a), Q.cy + rr * Math.sin(a)];
  });
  const qPath = `M${qPts.map((p) => p.map((v) => v.toFixed(1)).join(",")).join(" L")} Z`;

  const cols = [
    { key: "time", x: 70, k: kT, name: { en: "Time", id: "Waktu" }, line: { en: "a shorter path", id: "jalan lebih pendek" } },
    { key: "cost", x: 210, k: kC, name: { en: "Cost", id: "Biaya" }, line: { en: "a lighter load", id: "beban lebih ringan" } },
    { key: "quality", x: 352, k: kQ, name: { en: "Quality", id: "Kualitas" }, line: { en: "a truer form", id: "bentuk lebih utuh" } },
  ];

  return (
    <div className={className} role="img" aria-label={t({ en: "Problem to solution: time becomes a shorter path, cost a lighter load, quality a truer form, all on fundamentals and sped up by AI", id: "Dari masalah ke solusi: waktu menjadi jalan lebih pendek, biaya beban lebih ringan, kualitas bentuk lebih utuh, di atas fondasi dan dipercepat AI" })}>
      <div className="flex items-center justify-between mb-[0.4rem]">
        <span className={`text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors duration-500 ${solved ? "text-emerald-600" : "text-rose-500"}`}>
          {solved ? t({ en: "Solution", id: "Solusi" }) : t({ en: "Problem", id: "Masalah" })}
        </span>
        <span className="text-[0.72rem] text-gray-400 italic">{t({ en: "three dimensions, none traded away", id: "tiga dimensi, tak ada yang dikorbankan" })}</span>
      </div>
      <svg viewBox={`0 0 ${W} 200`} className="w-full h-auto" aria-hidden="true" style={{ opacity: fade }}>
        <defs>
          <linearGradient id="pts-sweep" x1="0" x2="1">
            <stop offset="0" stopColor="#F59E0B" stopOpacity="0" />
            <stop offset="0.75" stopColor="#F59E0B" stopOpacity="0.18" />
            <stop offset="1" stopColor="#F59E0B" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* column dividers: separate dimensions, not one scale */}
        <line x1="140" y1="18" x2="140" y2={BASE - 6} stroke="#E2E8F0" strokeDasharray="2 4" />
        <line x1="280" y1="18" x2="280" y2={BASE - 6} stroke="#E2E8F0" strokeDasharray="2 4" />

        {/* TIME */}
        <path d={smooth(tPts)} fill="none" stroke={rgb(CHAOS, HUE.time, kT)} strokeWidth="3" strokeLinecap="round" />
        <circle cx={tA[0]} cy={tA[1]} r="4.5" fill={rgb(CHAOS, HUE.time, kT)} />
        <path d={`M${tB[0] - 2},${tB[1] - 5} l7,5 l-7,5`} fill="none" stroke={rgb(CHAOS, HUE.time, kT)} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />

        {/* COST */}
        {PILE.map((b, i) => {
          if (b.keep) {
            const x = mix(b.x, b.keep[0], kC), y = mix(b.y, b.keep[1], kC);
            const w = mix(b.w, 28, kC), h = mix(b.h, 22, kC), r = mix(b.r, 0, kC);
            return <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill={rgb(CHAOS, HUE.cost, kC)} transform={`rotate(${r} ${x + w / 2} ${y + h / 2})`} />;
          }
          const fall = kC;
          const x = b.x + (i % 2 ? 1 : -1) * 26 * fall, y = b.y + 70 * fall * fall, r = b.r + (i % 2 ? 50 : -50) * fall;
          return <rect key={i} x={x} y={y} width={b.w} height={b.h} rx="2" fill="#CBD5E1" opacity={1 - fall} transform={`rotate(${r} ${x + b.w / 2} ${y + b.h / 2})`} />;
        })}

        {/* QUALITY */}
        <path d={qPath} fill={kQ > 0.5 ? `rgba(16,185,129,${0.1 * kQ})` : "none"} stroke={rgb(CHAOS, HUE.quality, kQ)} strokeWidth="3" strokeLinejoin="round" />
        <circle cx={Q.cx} cy={Q.cy} r={Q.r * 0.55} fill="none" stroke="#10B981" strokeWidth="1.2" opacity={kQ * 0.6} />
        <circle cx={Q.cx} cy={Q.cy} r="3" fill="#10B981" opacity={kQ} />

        {/* fundamentals: the one ground all three stand on */}
        <line x1="10" y1={BASE} x2={W - 10} y2={BASE} stroke="#0F3B47" strokeWidth="2" />
        {[...Array(21)].map((_, i) => <line key={i} x1={14 + i * 19.6} y1={BASE + 1} x2={6 + i * 19.6} y2={BASE + 8} stroke="#94A3B8" strokeWidth="1" />)}
        <text x={W / 2} y={BASE + 22} textAnchor="middle" className="text-[10px] font-semibold tracking-[0.18em]" fill="#64748B">{t({ en: "FUNDAMENTALS", id: "FONDASI" })}</text>

        {/* AI sweep */}
        {sweep > 0 && sweep < 1 && (
          <g>
            <rect x={sx - 70} y="12" width="70" height={BASE - 12} fill="url(#pts-sweep)" />
            <line x1={sx} y1="12" x2={sx} y2={BASE} stroke="#F59E0B" strokeWidth="2" />
            <rect x={sx - 15} y="2" width="30" height="16" rx="8" fill="#F59E0B" />
            <text x={sx} y="13.5" textAnchor="middle" className="text-[10px] font-bold" fill="#fff">AI</text>
          </g>
        )}
      </svg>
      <ul className="grid grid-cols-3 mt-[0.2rem] text-center">
        {cols.map((c) => (
          <li key={c.key}>
            <span className="block font-SourceSansProBold text-[0.95rem]" style={{ color: rgb([100, 116, 139], HUE[c.key], c.k) }}>{t(c.name)}</span>
            <span className={`block text-[0.75rem] italic text-gray-500 transition-opacity duration-500 ${c.k > 0.95 ? "opacity-100" : "opacity-0"}`}>{t(c.line)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
