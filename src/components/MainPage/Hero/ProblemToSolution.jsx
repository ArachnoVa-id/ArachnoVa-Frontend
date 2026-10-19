import { useEffect, useId, useRef, useState } from "react";
import { useT } from "@/lib/i18n";

// The old "pick two" triangle of time, cost and quality, where all three corners get won.
// The sides are the fundamentals; an AI sparkle runs along them and settles each corner:
// time's tangle straightens, cost's pile shrinks to a base, quality's rough outline turns whole.
const LOOP = 7600;
const T0 = 900;
const LEG = 1100;
const clamp = (x) => Math.max(0, Math.min(1, x));
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const mix = (a, b, k) => a + (b - a) * k;
const lerp = (a, b, k) => [mix(a[0], b[0], k), mix(a[1], b[1], k)];
const INK = "#0F3B47";
const color = (k) => `rgb(${Math.round(mix(203, 15, k))},${Math.round(mix(213, 59, k))},${Math.round(mix(225, 71, k))})`;

const T = [200, 64];
const C = [86, 236];
const Q = [314, 236];
const CORNERS = [T, C, Q];

function smooth(pts) {
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`;
  }
  return d;
}
// a side of the triangle, pulled back from the corners so the forms have room
function side(a, b, gap = 44) {
  const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy);
  const ux = dx / len, uy = dy / len;
  return [[a[0] + ux * gap, a[1] + uy * gap], [b[0] - ux * gap, b[1] - uy * gap]];
}

// time (around T)
const TANGLE = [[-36, 18], [-20, -24], [14, 22], [-10, 28], [-28, 2], [16, -20], [28, 12], [0, 8], [-6, -26], [34, -8]].map(([x, y]) => [T[0] + x, T[1] + y]);
const LINE = TANGLE.map((_, i) => [T[0] - 30 + (60 * i) / (TANGLE.length - 1), T[1]]);
// cost (around C)
const PILE = [[-22, 4, 2], [0, 4, -3], [-12, -12, 4], [-24, -28, -6], [0, -28, 5], [-14, -44, -8], [-6, -60, 9]].map(([x, y, r]) => [C[0] + x, C[1] + y, r]);
const KEEP = [[-22, 4], [0, 4], [-11, -12]].map(([x, y]) => [C[0] + x, C[1] + y]);
// quality (around Q)
const N = 40;
const NOISE = Array.from({ length: N }, (_, i) => Math.sin(i * 2.7) * 0.6 + Math.sin(i * 6.1) * 0.4);

// the familiar AI sparkle: a four-point star with a small companion
function Sparkle({ x, y, s = 1, opacity = 1, id }) {
  const star = (r) => `M0,${-r} C${r * 0.12},${-r * 0.2} ${r * 0.2},${-r * 0.12} ${r},0 C${r * 0.2},${r * 0.12} ${r * 0.12},${r * 0.2} 0,${r} C${-r * 0.12},${r * 0.2} ${-r * 0.2},${r * 0.12} ${-r},0 C${-r * 0.2},${-r * 0.12} ${-r * 0.12},${-r * 0.2} 0,${-r} Z`;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} opacity={opacity}>
      <path d={star(11)} fill={`url(#${id})`} />
      <path d={star(4.5)} transform="translate(11 -11)" fill={`url(#${id})`} />
    </g>
  );
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
  // the page renders a desktop and a mobile copy; gradient ids must not collide
  const uid = useId().replace(/:/g, "");
  const spk = `spk${uid}`, mini = `spkm${uid}`;
  // corner i settles when the sparkle reaches it: T at T0, C at T0+LEG, Q at T0+2*LEG
  const k = [0, 1, 2].map((i) => ease(clamp((ms - T0 - i * LEG) / 700)));
  const legs = [side(T, C), side(C, Q), side(Q, T)];
  const legK = [0, 1, 2].map((i) => clamp((ms - T0 - i * LEG) / LEG));
  const travelling = ms > T0 && ms < T0 + 3 * LEG;
  const leg = Math.min(2, Math.floor((ms - T0) / LEG));
  const spark = travelling ? lerp(CORNERS[leg], CORNERS[(leg + 1) % 3], ease(legK[leg])) : T;
  const bloom = ease(clamp((ms - T0 - 3 * LEG) / 600));
  const fade = 1 - clamp((ms - LOOP + 600) / 600);

  const tPts = TANGLE.map((p, i) => lerp(p, LINE[i], k[0]));
  const qPts = NOISE.map((nz, i) => {
    const a = (i / N) * Math.PI * 2, r = 26 * (1 + nz * 0.3 * (1 - k[2]));
    return `${(Q[0] + r * Math.cos(a)).toFixed(1)},${(Q[1] - 4 + r * Math.sin(a)).toFixed(1)}`;
  });
  const centre = [(T[0] + C[0] + Q[0]) / 3, (T[1] + C[1] + Q[1]) / 3 + 8];
  const names = [{ en: "Time", id: "Waktu" }, { en: "Cost", id: "Biaya" }, { en: "Quality", id: "Kualitas" }];
  const labelAt = [[T[0], T[1] - 40], [C[0] - 10, C[1] + 42], [Q[0], Q[1] + 42]];

  return (
    <div className={className} role="img" aria-label={t({ en: "The time, cost and quality triangle: AI on solid fundamentals wins all three corners", id: "Segitiga waktu, biaya, dan kualitas: AI di atas fondasi yang kuat memenangkan ketiga sudutnya" })}>
      <svg viewBox="0 0 400 300" className="w-full h-auto overflow-visible" aria-hidden="true" style={{ opacity: fade }}>
        <defs>
          <linearGradient id={spk} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1AB0C8" /><stop offset="1" stopColor="#8B5CF6" /></linearGradient>
        </defs>

        {/* sides: muted until the sparkle has run them */}
        {legs.map(([a, b], i) => (
          <g key={i}>
            <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 5" />
            {legK[i] > 0 && <line x1={a[0]} y1={a[1]} x2={mix(a[0], b[0], legK[i])} y2={mix(a[1], b[1], legK[i])} stroke={INK} strokeWidth="2" strokeLinecap="round" />}
          </g>
        ))}

        {/* time */}
        <path d={smooth(tPts)} fill="none" stroke={color(k[0])} strokeWidth="3" strokeLinecap="round" />
        {/* cost */}
        {PILE.map(([x, y, r], i) => {
          const keep = KEEP[i];
          if (keep) {
            const bx = mix(x, keep[0], k[1]), by = mix(y, keep[1], k[1]);
            return <rect key={i} x={bx} y={by} width="21" height="15" rx="2" fill={color(k[1])} transform={`rotate(${mix(r, 0, k[1])} ${bx + 10} ${by + 7})`} />;
          }
          return <rect key={i} x={x} y={y + 24 * k[1]} width="21" height="14" rx="2" fill="#CBD5E1" opacity={1 - k[1]} transform={`rotate(${r} ${x + 10} ${y + 7})`} />;
        })}
        {/* quality */}
        <polygon points={qPts.join(" ")} fill="none" stroke={color(k[2])} strokeWidth="3" strokeLinejoin="round" />

        {names.map((n, i) => (
          <text key={n.en} x={labelAt[i][0]} y={labelAt[i][1]} textAnchor="middle" className="text-[15px] font-bold" fill={k[i] > 0.5 ? INK : "#94A3B8"}>{t(n)}</text>
        ))}

        {/* the AI sparkle travelling the sides, then settling in the middle once all three are won */}
        {travelling && <Sparkle id={spk} x={spark[0]} y={spark[1]} s={0.95} />}
        <Sparkle id={spk} x={centre[0]} y={centre[1]} s={0.6 + bloom * 0.9} opacity={bloom} />
      </svg>
      <p className="mt-[0.3rem] flex items-center justify-center gap-[0.4rem] text-[0.78rem] text-gray-500">
        <svg viewBox="-12 -16 28 28" className="w-[0.95rem] h-[0.95rem]" aria-hidden="true">
          <defs><linearGradient id={mini} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1AB0C8" /><stop offset="1" stopColor="#8B5CF6" /></linearGradient></defs>
          <path d="M0,-11 C1.3,-2.2 2.2,-1.3 11,0 C2.2,1.3 1.3,2.2 0,11 C-1.3,2.2 -2.2,1.3 -11,0 C-2.2,-1.3 -1.3,-2.2 0,-11 Z" fill={`url(#${mini})`} />
          <path d="M0,-4.5 C0.5,-0.9 0.9,-0.5 4.5,0 C0.9,0.5 0.5,0.9 0,4.5 C-0.5,0.9 -0.9,0.5 -4.5,0 C-0.9,-0.5 -0.5,-0.9 0,-4.5 Z" transform="translate(11 -11)" fill={`url(#${mini})`} />
        </svg>
        {t({ en: "AI on solid fundamentals: all three, not two", id: "AI di atas fondasi kuat: ketiganya, bukan dua" })}
      </p>
    </div>
  );
}
