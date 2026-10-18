import { useT } from "@/lib/i18n";
import { useEffect, useMemo, useRef, useState } from "react";
import { useCollection } from "@/context/DataContext";
import { parseDay } from "@/lib/period";

// Counts up once when the number scrolls into view.
function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el || !to) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(to); return undefined; }
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (t) => {
        const k = Math.min(1, (t - t0) / 1400);
        setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return <span ref={ref} className="tabular-nums">{n}{suffix}</span>;
}

export default function TrustBar() {
  const t = useT();
  const [projects] = useCollection("projects");
  const [team] = useCollection("team");

  const stats = useMemo(() => {
    const all = projects || [];
    const starts = all.map((p) => parseDay(p.period?.start)).filter(Boolean);
    const since = starts.length ? Math.min(...starts.map((d) => d.getFullYear())) : new Date().getFullYear();
    const people = (team || []).filter((m) => (m.projectIds || []).length).length;
    return [
      { to: all.length, suffix: "", label: t({ en: "projects delivered", id: "proyek selesai" }) },
      { to: people, suffix: "", label: t({ en: "people we've built with", id: "orang yang membangun bersama kami" }) },
      { to: Math.max(1, new Date().getFullYear() - since), suffix: "+", label: t({ en: "years of real-world work", id: "tahun pengalaman" }) },
    ];
  }, [projects, team, t]);

  if (!projects?.length) return null;
  return (
    <section aria-labelledby="about-strip-title" className="w-full bg-white-MainPage lg:px-24 px-4 lg:py-16 py-12">
      <div className="max-w-[72rem] mx-auto">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-center rounded-3xl bg-white border border-gray-200 shadow-sm p-6 lg:p-10">
          <div>
            <p className="text-[13px] font-semibold text-LightBlue-e">ArachnoVa</p>
            <h2 id="about-strip-title" className="font-SourceSansProBold text-neutral-g lg:text-[2rem] text-[26px] leading-tight mt-1">
              {t({ en: "We solve real problems, then make sure they stay solved.", id: "Kami menyelesaikan masalah nyata, lalu memastikan masalah itu tidak kembali." })}
            </h2>
            <p className="text-[15px] leading-relaxed text-neutral-e mt-3 max-w-[34rem]">
              {t({ en: "From ticketing that survives a sell-out to a waste bank that runs on one system, we start with what is broken and build something your team can keep using for years.", id: "Dari sistem tiket yang tetap andal saat tiket habis terjual hingga bank sampah yang kini berjalan dalam satu sistem, kami selalu memulai dari akar masalahnya dan membangun solusi yang bisa dipakai tim Anda selama bertahun-tahun." })}
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-[#EEF9FB] px-3 py-5 text-center">
                <dd className="font-SourceSansProBold text-LightBlue-e lg:text-[2.6rem] text-[2rem] leading-none"><CountUp to={s.to} suffix={s.suffix} /></dd>
                <dt className="mt-2 text-[13px] leading-snug text-neutral-f">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
