import { Fragment } from "react";
import { FiUsers, FiMonitor, FiServer, FiDatabase, FiZap, FiStar, FiGlobe, FiCloud, FiBox, FiGitBranch, FiPackage, FiRefreshCw, FiShield, FiCpu } from "react-icons/fi";
import { useT } from "@/lib/i18n";

// project.architecture = { summary, layers: { Frontend, Backend, Database, Integrations, Infrastructure, ...: [] }, highlights, tags }
export function hasArchitecture(project) {
  const a = project?.architecture;
  return !!(a && (a.summary || Object.values(a.layers || {}).some((v) => v?.length)));
}

const LANES = [
  { key: "People", icon: FiUsers, tone: "slate" },
  { key: "Frontend", icon: FiMonitor, tone: "sky" },
  { key: "Backend", icon: FiServer, tone: "teal" },
  { key: "Database", icon: FiDatabase, tone: "indigo" },
];
const TONES = {
  slate: { lane: "bg-slate-50 border-slate-200", head: "text-slate-600", node: "bg-white border-slate-300" },
  sky: { lane: "bg-sky-50/70 border-sky-200", head: "text-sky-700", node: "bg-white border-sky-300" },
  teal: { lane: "bg-teal-50/70 border-teal-200", head: "text-teal-700", node: "bg-white border-teal-300" },
  indigo: { lane: "bg-indigo-50/70 border-indigo-200", head: "text-indigo-700", node: "bg-white border-indigo-300" },
  amber: { lane: "bg-amber-50/70 border-amber-200", head: "text-amber-700", node: "bg-white border-amber-300" },
};
const HANDOFF = [
  { en: "uses", id: "memakai" },
  { en: "calls API", id: "memanggil API" },
  { en: "reads & writes", id: "membaca & menulis" },
];

function Node({ children, tone }) {
  return <li className={`text-[12px] leading-snug px-2.5 py-1.5 rounded-lg border shadow-[0_1px_0_rgba(0,0,0,0.04)] ${TONES[tone].node}`}>{children}</li>;
}

function Arrow({ label, vertical }) {
  return (
    <div className={`flex items-center justify-center text-gray-400 ${vertical ? "flex-col py-1" : "flex-col px-1"}`} aria-hidden="true">
      <svg viewBox="0 0 40 12" className={vertical ? "w-[12px] h-[28px] rotate-90" : "w-[36px] h-[12px]"}>
        <path d="M0 6 H34" stroke="currentColor" strokeWidth="1.6" />
        <path d="M30 1 L38 6 L30 11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      {label && <span className="text-[10px] text-gray-500 whitespace-nowrap mt-0.5">{label}</span>}
    </div>
  );
}

// Who uses the system, read from the layers (admin/dashboard/organizer mentions) so it fits each project.
function people(layers, t) {
  const all = Object.values(layers).flat().join(" ").toLowerCase();
  const p = [t({ en: "Visitors & users", id: "Pengunjung & pengguna" })];
  if (/admin|dashboard|cms|studio|editor|organi[sz]er|committee|panitia/.test(all)) p.push(t({ en: "Admins & staff", id: "Admin & staf" }));
  if (/sensor|esp|iot|device/.test(all)) p.push(t({ en: "IoT devices", id: "Perangkat IoT" }));
  return p;
}

function Swimlane({ layers }) {
  const t = useT();
  const lanes = LANES.map((l) => ({ ...l, items: l.key === "People" ? people(layers, t) : layers[l.key] || [] })).filter((l) => l.items.length);
  const integrations = layers.Integrations || [];
  const extra = Object.keys(layers).filter((k) => !["Frontend", "Backend", "Database", "Integrations", "Infrastructure"].includes(k) && layers[k]?.length);
  const label = (k) => ({ People: t({ en: "People", id: "Pengguna" }), Frontend: "Frontend", Backend: "Backend", Database: t({ en: "Data", id: "Data" }) }[k] || k);
  return (
    <figure aria-label={t({ en: "Architecture swimlane", id: "Diagram swimlane arsitektur" })}>
      {/* lanes side by side on wide screens, stacked on phones */}
      <div className="flex flex-col md:flex-row md:items-stretch">
        {lanes.map((l, i) => (
          <Fragment key={l.key}>
            {i > 0 && (
              <>
                <div className="hidden md:flex"><Arrow label={t(HANDOFF[Math.min(i - 1, HANDOFF.length - 1)])} /></div>
                <div className="md:hidden"><Arrow vertical label={t(HANDOFF[Math.min(i - 1, HANDOFF.length - 1)])} /></div>
              </>
            )}
            <section className={`flex-1 min-w-0 rounded-xl border ${TONES[l.tone].lane}`}>
              <h4 className={`flex items-center gap-1.5 px-3 py-2 border-b border-inherit text-[11px] font-bold uppercase tracking-[0.08em] ${TONES[l.tone].head}`}>
                <l.icon size={13} aria-hidden="true" /> {label(l.key)}
              </h4>
              <ul className="p-2.5 flex flex-col gap-1.5">{l.items.map((it) => <Node key={it} tone={l.tone}>{it}</Node>)}</ul>
            </section>
          </Fragment>
        ))}
      </div>
      {integrations.length > 0 && (
        <>
          <div className="flex justify-center"><Arrow vertical label={t({ en: "connects to", id: "terhubung ke" })} /></div>
          <section className={`rounded-xl border ${TONES.amber.lane}`}>
            <h4 className={`flex items-center gap-1.5 px-3 py-2 border-b border-inherit text-[11px] font-bold uppercase tracking-[0.08em] ${TONES.amber.head}`}>
              <FiZap size={13} aria-hidden="true" /> {t({ en: "Integrations & services", id: "Integrasi & layanan" })}
            </h4>
            <ul className="p-2.5 flex flex-wrap gap-1.5">{integrations.map((it) => <Node key={it} tone="amber">{it}</Node>)}</ul>
          </section>
        </>
      )}
      {extra.map((k) => (
        <section key={k} className={`mt-3 rounded-xl border ${TONES.slate.lane}`}>
          <h4 className={`flex items-center gap-1.5 px-3 py-2 border-b border-inherit text-[11px] font-bold uppercase tracking-[0.08em] ${TONES.slate.head}`}><FiCpu size={13} aria-hidden="true" /> {k}</h4>
          <ul className="p-2.5 flex flex-wrap gap-1.5">{layers[k].map((it) => <Node key={it} tone="slate">{it}</Node>)}</ul>
        </section>
      ))}
    </figure>
  );
}

// Infrastructure as two paths: how a request reaches the app, and how code reaches production.
const DEPLOY = /github|ci\/cd|actions|ghcr|registry|watchtower|rsync|ssh|deploy|let's encrypt/i;
const EDGE = /cloudflare|cdn|tls|ssl/i;
const RUNTIME = /docker|compose|container|pm2|serverless|node:|alpine/i;
function iconFor(s) {
  if (/cloudflare|cdn/i.test(s)) return FiShield;
  if (/github/i.test(s)) return FiGitBranch;
  if (/ghcr|registry/i.test(s)) return FiPackage;
  if (/watchtower|rsync|deploy/i.test(s)) return FiRefreshCw;
  if (/docker|container|compose/i.test(s)) return FiBox;
  return FiCloud;
}

function GraphRow({ title, nodes }) {
  return (
    <div>
      <p className="text-[11px] font-semibold text-gray-500 mb-1.5">{title}</p>
      <ol className="flex flex-wrap items-center gap-y-2">
        {nodes.map((n, i) => {
          const Icon = n.icon || iconFor(n.label);
          return (
            <li key={`${n.label}-${i}`} className="flex items-center">
              {i > 0 && <Arrow />}
              <span className={`inline-flex items-center gap-1.5 text-[12px] px-2.5 py-1.5 rounded-full border ${n.start ? "bg-neutral-g text-white border-neutral-g" : "bg-white border-gray-300 text-neutral-f"}`}>
                <Icon size={12} aria-hidden="true" /> {n.label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function InfraGraph({ items }) {
  const t = useT();
  if (!items?.length) return null;
  const deploy = items.filter((s) => DEPLOY.test(s));
  const rest = items.filter((s) => !DEPLOY.test(s));
  const edge = rest.filter((s) => EDGE.test(s));
  const runtime = rest.filter((s) => !EDGE.test(s) && RUNTIME.test(s));
  const host = rest.filter((s) => !EDGE.test(s) && !RUNTIME.test(s));
  const request = [
    { label: t({ en: "User", id: "Pengguna" }), icon: FiUsers, start: true },
    ...[...edge, ...host, ...runtime].map((label) => ({ label })),
    { label: t({ en: "App", id: "Aplikasi" }), icon: FiGlobe },
  ];
  const ship = deploy.length ? [{ label: t({ en: "Code", id: "Kode" }), icon: FiGitBranch, start: true }, ...deploy.map((label) => ({ label })), { label: t({ en: "Live", id: "Rilis" }), icon: FiGlobe }] : null;
  return (
    <section className="mt-4 rounded-xl border border-gray-200 bg-white p-3.5">
      <h4 className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-gray-600 mb-3">
        <FiCloud size={13} aria-hidden="true" /> {t({ en: "Infrastructure", id: "Infrastruktur" })}
      </h4>
      <div className="space-y-3">
        <GraphRow title={t({ en: "How a request is served", id: "Bagaimana permintaan dilayani" })} nodes={request} />
        {ship && <GraphRow title={t({ en: "How code reaches production", id: "Bagaimana kode sampai ke produksi" })} nodes={ship} />}
      </div>
    </section>
  );
}

export default function ArchitectureView({ architecture }) {
  const t = useT();
  const layers = architecture?.layers || {};
  const highlights = architecture?.highlights || [];
  return (
    <div className="h-full overflow-y-auto px-4 py-4 bg-white">
      {architecture?.summary && <p className="text-[13px] leading-relaxed text-neutral-e mb-3">{architecture.summary}</p>}
      {highlights.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-1.5" aria-label={t({ en: "Highlights", id: "Sorotan" })}>
          {highlights.map((h) => (
            <li key={h} className="inline-flex items-center gap-1.5 text-[12px] px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900">
              <FiStar size={11} className="text-amber-500 shrink-0" aria-hidden="true" /> {h}
            </li>
          ))}
        </ul>
      )}
      <Swimlane layers={layers} />
      <InfraGraph items={layers.Infrastructure} />
    </div>
  );
}
