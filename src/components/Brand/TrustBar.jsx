import { useMemo } from "react";
import { useCollection } from "@/context/DataContext";
import { parseDay } from "@/lib/period";

// Numbers counted from the CMS, never typed in by hand: they move as the portfolio grows.
export default function TrustBar() {
  const [projects] = useCollection("projects");
  const [team] = useCollection("team");

  const stats = useMemo(() => {
    const all = projects || [];
    const starts = all.map((p) => parseDay(p.period?.start)).filter(Boolean);
    const since = starts.length ? Math.min(...starts.map((d) => d.getFullYear())) : null;
    const people = (team || []).filter((m) => (m.projectIds || []).length).length;
    const links = (team || []).reduce((n, m) => n + (m.projectIds || []).length, 0);
    return [
      { value: all.length, label: "Problems solved", sub: "projects shipped" },
      { value: people, label: "Builders", sub: "who shipped them" },
      { value: links, label: "Collaborations", sub: "person × project" },
      { value: since ? `${since}` : "—", label: "Building since", sub: "first commit" },
    ];
  }, [projects, team]);

  if (!projects?.length) return null;
  return (
    <section aria-label="ArachnoVa in numbers" className="w-full bg-white-MainPage lg:px-24 px-4 lg:py-10 py-8">
      <dl className="max-w-[72rem] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-white border border-gray-200/80 shadow-sm px-5 py-4 text-center transition hover:shadow-md hover:-translate-y-0.5 hover:border-LightBlue-a">
            <dd className="font-SourceSansProBold text-neutral-g lg:text-[2.4rem] text-[2rem] leading-none tabular-nums">{s.value}</dd>
            <dt className="mt-2 text-[14px] font-semibold text-neutral-f">{s.label}</dt>
            <p className="text-[12px] text-gray-500">{s.sub}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
