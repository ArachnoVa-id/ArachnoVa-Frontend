import { useEffect, useRef, useState } from "react";
import { LuClock, LuCoins, LuBadgeCheck, LuCheck } from "react-icons/lu";
import { useT } from "@/lib/i18n";

// The time / cost / quality triangle (usually "pick two") above a small code window.
// As the code types out, each `solution.<corner>` line wins that corner of the triangle.
const CHAR_MS = 34;
const LINE_PAUSE = 260;
const START = 500;
const HOLD = 2600;
const FADE = 500;

const B = "#0151EC", TEAL = "#1CA7BD", PURPLE = "#8131B2", INK = "#1E293B", AMBER = "#B45309", GREY = "#94A3B8";
const code = (t) => [
  { segs: [[B, "const "], [TEAL, "solution"], [INK, " = "], [B, "build"], [INK, "("], [AMBER, "yourProblem"], [INK, ", {"]] },
  { segs: [[INK, "  on: "], [TEAL, "fundamentals"], [INK, ","]] },
  { segs: [[INK, "  with: "], [TEAL, "ai"], [INK, ","]] },
  { segs: [[INK, "});"]] },
  { segs: [[TEAL, "solution"], [INK, "."], [PURPLE, "time"], [GREY, `     // ${t({ en: "faster", id: "lebih cepat" })}`]], wins: 0 },
  { segs: [[TEAL, "solution"], [INK, "."], [PURPLE, "cost"], [GREY, `     // ${t({ en: "leaner", id: "lebih hemat" })}`]], wins: 1 },
  { segs: [[TEAL, "solution"], [INK, "."], [PURPLE, "quality"], [GREY, `  // ${t({ en: "built to last", id: "tahan lama" })}`]], wins: 2 },
];

const W = 400, H = 220;
const CORNERS = [
  { key: "time", at: [200, 46], Icon: LuClock, name: { en: "Time", id: "Waktu" } },
  { key: "cost", at: [84, 168], Icon: LuCoins, name: { en: "Cost", id: "Biaya" } },
  { key: "quality", at: [316, 168], Icon: LuBadgeCheck, name: { en: "Quality", id: "Kualitas" } },
];
const pct = ([x, y]) => ({ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` });
function side(a, b, gap = 40) {
  const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy);
  return [[a[0] + (dx / len) * gap, a[1] + (dy / len) * gap], [b[0] - (dx / len) * gap, b[1] - (dy / len) * gap]];
}

// when each line starts and ends typing
function schedule(lines) {
  let at = START;
  const out = lines.map((l) => {
    const len = l.segs.reduce((n, [, s]) => n + s.length, 0);
    const s = at, e = at + len * CHAR_MS;
    at = e + LINE_PAUSE;
    return { s, e, len };
  });
  return { out, loop: at + HOLD + FADE };
}

function useClock(loop) {
  const still = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [ms, setMs] = useState(still ? loop - HOLD : 0);
  const raf = useRef(0);
  useEffect(() => {
    if (still) return undefined;
    const t0 = performance.now();
    const tick = (now) => { setMs((now - t0) % loop); raf.current = requestAnimationFrame(tick); };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [still, loop]);
  return ms;
}

export default function ProblemToSolution({ className = "" }) {
  const t = useT();
  const lines = code(t);
  const { out: times, loop } = schedule(lines);
  const ms = useClock(loop);
  const fade = 1 - Math.max(0, Math.min(1, (ms - (loop - FADE)) / FADE));

  const won = [false, false, false];
  lines.forEach((l, i) => { if (l.wins !== undefined && ms >= times[i].e) won[l.wins] = true; });
  const active = times.findIndex((x) => ms >= x.s && ms < x.e + LINE_PAUSE);

  return (
    <div className={className} style={{ opacity: fade }} role="img" aria-label={t({ en: "Code builds the solution on fundamentals with AI, winning time, cost and quality", id: "Kode membangun solusi di atas fondasi dengan AI, memenangkan waktu, biaya, dan kualitas" })}>
      {/* triangle */}
      <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full" aria-hidden="true">
          {CORNERS.map((c, i) => {
            const j = (i + 1) % 3;
            const [p, q] = side(c.at, CORNERS[j].at);
            const on = won[i] && won[j];
            return <line key={c.key} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={on ? "#1AB0C8" : "#CBD5E1"} strokeWidth={on ? 2.5 : 1.5} strokeDasharray={on ? "0" : "4 5"} strokeLinecap="round" style={{ transition: "stroke .4s" }} />;
          })}
        </svg>
        {CORNERS.map((c, i) => (
          <div key={c.key} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" style={pct(c.at)}>
            <span className={`relative w-[3rem] h-[3rem] rounded-full flex items-center justify-center transition-all duration-500 ${won[i] ? "bg-gradient-to-br from-[#1AB0C8] to-[#0F3B47] text-white shadow-md" : "bg-white border-2 border-dashed border-gray-300 text-gray-400"}`}>
              <c.Icon size={21} aria-hidden="true" />
              <span className={`absolute -right-[0.2rem] -bottom-[0.2rem] w-[1.1rem] h-[1.1rem] rounded-full bg-emerald-500 text-white flex items-center justify-center ring-2 ring-white transition-all duration-300 ${won[i] ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                <LuCheck size={11} strokeWidth={3} aria-hidden="true" />
              </span>
            </span>
            <span className={`mt-[0.25rem] text-[0.85rem] font-SourceSansProBold transition-colors duration-300 ${won[i] ? "text-neutral-g" : "text-gray-400"}`}>{t(c.name)}</span>
          </div>
        ))}
      </div>

      {/* code */}
      <div className="mt-[0.6rem] rounded-[0.5rem] bg-white/70 border border-[#E2E8F0] px-[0.8rem] py-[0.6rem] font-ConsolasRegular text-[max(0.8rem,11px)] leading-[1.45] min-h-[10.4rem]">
        {lines.map((l, i) => {
          const { s, len } = times[i];
          const n = Math.max(0, Math.min(len, Math.floor((ms - s) / CHAR_MS)));
          if (ms < s) return null;
          let left = n;
          return (
            <p key={i} className="whitespace-pre">
              {l.segs.map(([c, txt], k) => {
                const part = txt.slice(0, Math.max(0, left));
                left -= txt.length;
                return part ? <span key={k} style={{ color: c }}>{part}</span> : null;
              })}
              {i === active && <span className="w-[0.06em] h-[1.1em] bg-LightBlue-c animate-pulse inline-block align-text-bottom ml-[0.05em]" />}
            </p>
          );
        })}
      </div>
    </div>
  );
}
