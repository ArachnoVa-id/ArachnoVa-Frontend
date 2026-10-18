import { useMemo } from "react";
import { parseDay, formatPeriod, isOngoing } from "@/lib/period";

// Which project was handled when: one bar per project from first to last commit.
export default function ProjectTimeline({ projects, onOpen }) {
  const rows = useMemo(() => (projects || [])
    .filter((p) => !p.hidden && p.period?.start)
    .map((p) => ({ p, s: parseDay(p.period.start), e: isOngoing(p.period) ? new Date() : parseDay(p.period.end) || parseDay(p.period.start) }))
    .sort((a, b) => a.s - b.s), [projects]);
  if (!rows.length) return null;

  const minY = rows[0].s.getFullYear();
  const maxY = Math.max(...rows.map((r) => r.e.getFullYear()));
  const t0 = new Date(minY, 0, 1).getTime();
  const t1 = new Date(maxY + 1, 0, 1).getTime();
  const pct = (d) => ((d.getTime() - t0) / (t1 - t0)) * 100;
  const years = Array.from({ length: maxY - minY + 1 }, (_, i) => minY + i);

  return (
    <section aria-labelledby="timeline-title" className="w-full bg-white-MainPage lg:px-24 px-4 lg:py-14 py-10">
      <div className="max-w-[72rem] mx-auto">
        <div className="text-center mb-8">
          <p className="font-SourceSansProBold lg:text-xl text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">Timeline</p>
          <h2 id="timeline-title" className="font-SourceSansProBold lg:text-3xl text-[26px] text-neutral-g mt-1">What We Built, When</h2>
          <p className="text-[13px] text-gray-500 mt-2">From each project&apos;s first to last commit.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <div className="min-w-[760px] p-4">
            <div className="relative grid grid-cols-[200px_1fr] text-[11px] font-semibold text-gray-400 mb-2">
              <span />
              <div className="relative h-5">
                {years.map((y) => (
                  <span key={y} className="absolute -translate-x-1/2" style={{ left: `${pct(new Date(y, 6, 1))}%` }}>{y}</span>
                ))}
              </div>
            </div>
            <ul className="space-y-1">
              {rows.map(({ p, s, e }) => (
                <li key={p.id} className="grid grid-cols-[200px_1fr] items-center gap-0">
                  <button type="button" onClick={() => onOpen?.(p)} className="flex items-center gap-2 min-w-0 pr-3 text-left hover:text-LightBlue-d">
                    {p.logo
                      ? <img src={p.logo} alt="" loading="lazy" className="w-[20px] h-[20px] rounded object-contain bg-white border border-gray-200" />
                      : <span className="w-[20px] h-[20px] rounded bg-gray-200" />}
                    <span className="truncate text-[12px] text-neutral-f">{p.title}</span>
                  </button>
                  <div className="relative h-[22px] rounded bg-gray-50">
                    {years.slice(1).map((y) => (
                      <span key={y} className="absolute top-0 bottom-0 w-px bg-gray-200" style={{ left: `${pct(new Date(y, 0, 1))}%` }} aria-hidden="true" />
                    ))}
                    <button type="button" onClick={() => onOpen?.(p)} title={`${p.title}: ${formatPeriod(p.period)}`}
                      className={`absolute top-[4px] h-[14px] rounded-full transition hover:brightness-110 ${p.mega ? "bg-gradient-to-r from-amber-400 to-amber-500" : "bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]"} ${isOngoing(p.period) ? "animate-pulse" : ""}`}
                      style={{ left: `${pct(s)}%`, width: `max(10px, ${pct(e) - pct(s)}%)` }}>
                      <span className="sr-only">{p.title}: {formatPeriod(p.period)}</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-3 text-[11px] text-gray-500">
              <span className="flex items-center gap-1.5"><span className="w-3 h-2 rounded-full bg-amber-400" />Mega project</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-2 rounded-full bg-LightBlue-c" />Project</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-2 rounded-full bg-LightBlue-c animate-pulse" />Still running</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
