import { useEffect, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useT } from "@/lib/i18n";

// A scribble (the problem) gets untangled into one clean line (the solution),
// pulled by an AI spark that runs on a fundamentals base. Then cost, time and quality all fill.
const N = 16;
const START = [24, 92];
const END = [376, 92];
// hand-placed scribble: loops back on itself a few times between the two ends
const TANGLE = [START, [70, 40], [130, 130], [90, 150], [60, 90], [150, 30], [210, 140], [140, 110], [190, 50], [260, 40], [230, 150], [180, 90], [270, 100], [320, 30], [300, 140], END];
const CLEAN = Array.from({ length: N }, (_, i) => [START[0] + ((END[0] - START[0]) * i) / (N - 1), 92]);

const LOOP = 7000;
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const clamp = (x) => Math.max(0, Math.min(1, x));

// Catmull-Rom through the points, as cubic beziers
function smooth(pts) {
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`;
  }
  return d;
}
const mix = (a, b, k) => Math.round(a + (b - a) * k);
const color = (k) => `rgb(${mix(244, 26, k)},${mix(63, 176, k)},${mix(94, 200, k)})`; // rose -> brand teal

function useLoop() {
  const still = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [t, setT] = useState(still ? LOOP * 0.8 : 0);
  const raf = useRef(0);
  useEffect(() => {
    if (still) return undefined;
    const t0 = performance.now();
    const tick = (now) => { setT((now - t0) % LOOP); raf.current = requestAnimationFrame(tick); };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [still]);
  return t;
}

const TRIAD = [
  { en: "Cost", id: "Biaya" },
  { en: "Time", id: "Waktu" },
  { en: "Quality", id: "Kualitas" },
];

export default function ProblemToSolution({ className = "" }) {
  const t = useT();
  const ms = useLoop();
  // timeline: 0-1.4s problem wobbles, 1.4-3.2s untangle, 3.2-5.6s solved + triad, 5.6-7s fade out
  const k = ease(clamp((ms - 1400) / 1800));
  const wob = (1 - k) * 4;
  const pts = TANGLE.map((p, i) => [
    p[0] + (CLEAN[i][0] - p[0]) * k + Math.sin(ms / 260 + i) * wob,
    p[1] + (CLEAN[i][1] - p[1]) * k + Math.cos(ms / 300 + i * 1.7) * wob,
  ]);
  const d = smooth(pts);
  const solved = ms > 3200;
  const fade = 1 - clamp((ms - 6200) / 700);
  const spark = clamp((ms - 1400) / 1800); // the AI spark runs left to right as the line straightens
  const sparkX = START[0] + (END[0] - START[0]) * ease(spark);
  const fill = (i) => ease(clamp((ms - 3400 - i * 250) / 900));

  return (
    <div className={className} aria-label={t({ en: "From a tangled problem to a clean solution: lower cost, less time, higher quality", id: "Dari masalah yang kusut menjadi solusi yang rapi: biaya lebih hemat, waktu lebih cepat, kualitas lebih baik" })} role="img">
      <svg viewBox="0 0 400 190" className="w-full h-auto overflow-visible" aria-hidden="true">
        {/* fundamentals: the base the clean line rests on */}
        <rect x="24" y="116" width="352" height="22" rx="6" fill="#E6F6F9" />
        {[...Array(11)].map((_, i) => <rect key={i} x={30 + i * 31.5} y="121" width="26" height="12" rx="3" fill="#CBEFF5" />)}
        <path d={d} opacity={fade} fill="none" stroke={color(k)} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* ends */}
        <circle cx={START[0]} cy={START[1]} r="7" fill="#F43F5E" />
        <circle cx={END[0]} cy={END[1]} r={solved ? 13 : 7} fill={solved ? "#10B981" : "#CBD5E1"} style={{ transition: "r .35s cubic-bezier(.3,1.6,.5,1), fill .3s" }} />
        {solved && <path d={`M${END[0] - 5},${END[1]} l3.5,3.5 l6.5,-7`} fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />}
        {/* AI spark with a short speed trail */}
        {spark > 0 && spark < 1 && (
          <g>
            <line x1={Math.max(START[0], sparkX - 46)} y1="92" x2={sparkX} y2="92" stroke="url(#trail)" strokeWidth="5" strokeLinecap="round" />
            <circle cx={sparkX} cy="92" r="9" fill="#F59E0B" />
            <circle cx={sparkX} cy="92" r="15" fill="#F59E0B" opacity="0.2" />
            <rect x={sparkX - 19} y="52" width="38" height="20" rx="10" fill="#F59E0B" />
            <text x={sparkX} y="66" textAnchor="middle" className="text-[12px] font-bold" fill="#fff">AI</text>
          </g>
        )}
        <defs>
          <linearGradient id="trail" x1="0" x2="1"><stop offset="0" stopColor="#F59E0B" stopOpacity="0" /><stop offset="1" stopColor="#F59E0B" /></linearGradient>
        </defs>
        <text x={START[0]} y="168" className="text-[13px] font-bold" fill="#E11D48">{t({ en: "Problem", id: "Masalah" })}</text>
        <text x="200" y="168" textAnchor="middle" className="text-[12px] font-semibold" fill="#64748B">{t({ en: "Fundamentals", id: "Fondasi" })}</text>
        <text x={END[0]} y="168" textAnchor="end" className="text-[13px] font-bold" fill={solved ? "#059669" : "#94A3B8"}>{t({ en: "Solution", id: "Solusi" })}</text>
      </svg>

      <ul className="mt-[0.6rem] grid grid-cols-3 gap-[0.6rem]">
        {TRIAD.map((x, i) => {
          const f = fill(i);
          return (
            <li key={x.en} className="flex items-center gap-[0.5rem] rounded-xl bg-white/80 border border-gray-200 px-[0.6rem] py-[0.5rem]">
              <svg viewBox="0 0 36 36" className="w-[1.9rem] h-[1.9rem] -rotate-90 shrink-0" aria-hidden="true">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#E2E8F0" strokeWidth="4" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeDasharray={`${88 * f} 88`} />
              </svg>
              <span className="text-[0.85rem] font-SourceSansProBold text-neutral-g flex items-center gap-1">
                {t(x)} {f > 0.98 && <FiCheck className="text-emerald-600" size={13} aria-hidden="true" />}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
