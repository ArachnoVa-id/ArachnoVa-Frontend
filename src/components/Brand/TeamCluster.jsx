import { useMemo } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useCollection } from "@/context/DataContext";
import { useT } from "@/lib/i18n";
import { Parallax } from "@/lib/parallax";

// Two rings orbiting the most involved person, in opposite directions; faces stay upright.
const RINGS = [
  { count: 4, radius: 22, size: 52, secs: 40, dir: 1 },
  { count: 7, radius: 38, size: 62, secs: 70, dir: -1 },
];
const MAX = 1 + RINGS.reduce((n, r) => n + r.count, 0);

function Ring({ people, radius, size, secs, dir }) {
  const spin = dir > 0 ? "orbit-cw" : "orbit-ccw";
  const counter = dir > 0 ? "orbit-ccw" : "orbit-cw";
  return (
    <div className="absolute inset-0 orbit" style={{ animation: `${spin} ${secs}s linear infinite` }}>
      <span className="absolute rounded-full border border-white/20" style={{ inset: `${50 - radius}%` }} />
      {people.map((m, i) => {
        const a = (i / people.length) * 2 * Math.PI;
        return (
          <div key={m.name} className="absolute" style={{ left: `${50 + radius * Math.cos(a)}%`, top: `${50 + radius * Math.sin(a)}%`, width: size, height: size, transform: "translate(-50%, -50%)" }}>
            <div className="orbit w-full h-full" style={{ animation: `${counter} ${secs}s linear infinite` }}>
              <img src={m.image} alt="" loading="lazy" title={m.name}
                className="w-full h-full rounded-full object-cover ring-4 ring-white/90 shadow-xl transition hover:scale-110" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TeamCluster() {
  const t = useT();
  const [team] = useCollection("team");
  const people = useMemo(() => (team || [])
    .filter((m) => m.image)
    .sort((a, b) => (b.projectIds || []).length - (a.projectIds || []).length)
    .slice(0, MAX), [team]);
  if (people.length < 4) return null;
  return (
    <section aria-labelledby="cluster-title" className="w-full bg-white-MainPage lg:px-24 px-4 lg:py-16 py-12">
      <div className="max-w-[72rem] mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[13px] font-semibold text-LightBlue-e">{t({ en: "Our team", id: "Tim kami" })}</p>
          <h2 id="cluster-title" className="font-SourceSansProBold lg:text-[2rem] text-[26px] text-neutral-g leading-tight mt-1">
            {t({ en: "A focused team, close to every project", id: "Tim yang fokus, dekat dengan setiap proyek" })}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-e max-w-[30rem]">
            {t({ en: "You work directly with the people who build your solution, not through layers of account managers.", id: "Anda bekerja langsung dengan orang-orang yang membangun solusi Anda, bukan lewat berlapis-lapis perantara." })}
          </p>
          <Link to="/aboutus#team" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-g text-white text-[14px] font-semibold hover:bg-neutral-f">
            {t({ en: "Meet the team", id: "Kenali tim kami" })} <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
        <Parallax speed={0.07} className="w-full">
        <div className="group relative mx-auto w-full max-w-[460px] aspect-square rounded-[40px] bg-gradient-to-br from-[#1AB0C8] to-[#0F3B47] overflow-hidden" aria-hidden="true">
          <style>{`@keyframes orbit-cw{to{transform:rotate(360deg)}}@keyframes orbit-ccw{to{transform:rotate(-360deg)}}
            .group:hover .orbit{animation-play-state:paused!important}
            @media (prefers-reduced-motion: reduce){.orbit{animation:none!important}}`}</style>
          {RINGS.map((r, k) => {
            const from = 1 + RINGS.slice(0, k).reduce((n, x) => n + x.count, 0);
            const ring = people.slice(from, from + r.count);
            return ring.length ? <Ring key={k} people={ring} {...r} /> : null;
          })}
          <img src={people[0].image} alt="" title={people[0].name}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[96px] h-[96px] rounded-full object-cover ring-4 ring-white shadow-2xl" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[96px] h-[96px] rounded-full ring-2 ring-white/60 animate-ping opacity-40" />
        </div>
        </Parallax>
      </div>
    </section>
  );
}
