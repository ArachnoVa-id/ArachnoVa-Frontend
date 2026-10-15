import { FiMonitor, FiServer, FiDatabase, FiZap, FiCloud, FiCpu, FiStar, FiArrowDown } from "react-icons/fi";

// project.architecture = { summary, layers: { Frontend: [...], Backend: [...], Database: [...],
//   Integrations: [...], Infrastructure: [...], <any other layer>: [...] }, highlights: [...], tags: [...] }
const ORDER = ["Frontend", "Backend", "Database"];
const SIDE = "Integrations";
const BASE = "Infrastructure";
const ICONS = { Frontend: FiMonitor, Backend: FiServer, Database: FiDatabase, Integrations: FiZap, Infrastructure: FiCloud };

export function hasArchitecture(project) {
  const a = project?.architecture;
  return !!(a && (a.summary || Object.values(a.layers || {}).some((v) => v?.length)));
}

function Chips({ items, tone = "default" }) {
  const cls = tone === "accent"
    ? "bg-amber-50 text-amber-800 border-amber-200"
    : "bg-white text-neutral-f border-gray-200";
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((it) => (
        <li key={it} className={`text-[12px] leading-tight px-2 py-1 rounded-md border ${cls}`}>{it}</li>
      ))}
    </ul>
  );
}

function Layer({ name, items, tone }) {
  const Icon = ICONS[name] || FiCpu;
  return (
    <section className={`rounded-xl border p-3 ${tone === "accent" ? "border-amber-200 bg-amber-50/40" : "border-gray-200 bg-gray-50"}`}>
      <h4 className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] mb-2 ${tone === "accent" ? "text-amber-700" : "text-LightBlue-e"}`}>
        <Icon size={13} aria-hidden="true" /> {name}
      </h4>
      <Chips items={items} tone={tone} />
    </section>
  );
}

export default function ArchitectureView({ architecture }) {
  const layers = architecture?.layers || {};
  const stack = ORDER.filter((k) => layers[k]?.length);
  const extra = Object.keys(layers).filter((k) => ![...ORDER, SIDE, BASE].includes(k) && layers[k]?.length);
  const side = layers[SIDE] || [];
  const base = layers[BASE] || [];
  const highlights = architecture?.highlights || [];

  return (
    <div className="h-full overflow-y-auto px-4 py-4 bg-white">
      {architecture?.summary && (
        <p className="text-[13px] leading-relaxed text-neutral-e mb-3">{architecture.summary}</p>
      )}
      {highlights.length > 0 && (
        <ul className="mb-4 space-y-1.5">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[13px] text-neutral-f">
              <FiStar size={13} className="text-amber-500 mt-[3px] shrink-0" aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="grid md:grid-cols-[1fr_0.9fr] gap-3 items-start">
        <div className="flex flex-col">
          {stack.map((name, i) => (
            <div key={name}>
              {i > 0 && (
                <div className="flex justify-center py-1 text-gray-300" aria-hidden="true"><FiArrowDown size={14} /></div>
              )}
              <Layer name={name} items={layers[name]} />
            </div>
          ))}
          {extra.map((name) => (
            <div key={name} className="mt-3"><Layer name={name} items={layers[name]} /></div>
          ))}
        </div>
        {side.length > 0 && (
          <div className="md:border-l-2 md:border-dashed md:border-amber-200 md:pl-3">
            <Layer name={SIDE} items={side} tone="accent" />
          </div>
        )}
      </div>
      {base.length > 0 && <div className="mt-3"><Layer name={BASE} items={base} /></div>}
    </div>
  );
}
