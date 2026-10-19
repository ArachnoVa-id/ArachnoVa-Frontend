import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useCollection } from "@/context/DataContext";
import { memberAnchor } from "@/components/AboutUs/TeamSection";
import { useT } from "@/lib/i18n";
import { Parallax } from "@/lib/parallax";

// Two slow orbits of mixed-size photos around an empty centre (no one in the middle).
// Faces swap quickly, so the whole team keeps coming through.
const RINGS = [
  { radius: 21, secs: 50, dir: 1, sizes: [58, 46, 52, 42, 54] },
  { radius: 39, secs: 80, dir: -1, sizes: [64, 48, 56, 44, 60, 50, 46, 58] },
];
const SLOTS = RINGS.reduce((n, r) => n + r.sizes.length, 0);
const SWAP_MS = 900;

function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

function Ring({ people, radius, secs, dir, sizes }) {
  const spin = dir > 0 ? "orbit-cw" : "orbit-ccw";
  const counter = dir > 0 ? "orbit-ccw" : "orbit-cw";
  return (
    <div className="absolute inset-0 orbit pointer-events-none" style={{ animation: `${spin} ${secs}s linear infinite` }}>
      <span className="absolute rounded-full border border-white/20" style={{ inset: `${50 - radius}%` }} />
      {people.map((m, i) => {
        const a = (i / people.length) * 2 * Math.PI;
        return (
          <div key={i} className="absolute pointer-events-auto" style={{ left: `${50 + radius * Math.cos(a)}%`, top: `${50 + radius * Math.sin(a)}%`, width: sizes[i], height: sizes[i], transform: "translate(-50%, -50%)" }}>
            <div className="orbit w-full h-full" style={{ animation: `${counter} ${secs}s linear infinite` }}>
              <Link to={`/aboutus#${memberAnchor(m)}`} aria-label={m.name} title={m.name} className="group/p relative block w-full h-full rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-white">
                <img key={m.name} src={m.image} alt={m.name} loading="lazy"
                  className="w-full h-full rounded-full object-cover ring-[3px] ring-white/90 shadow-lg transition-transform duration-200 group-hover/p:scale-110"
                  style={{ animation: "tile-in .5s ease-out" }} />
                <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0B2530]/90 px-2 py-0.5 text-[11px] font-semibold text-white opacity-0 transition-opacity group-hover/p:opacity-100 group-focus-visible/p:opacity-100">{m.name}</span>
              </Link>
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
  const pool = useMemo(() => (team || []).filter((m) => m.image), [team]);
  const [wall, setWall] = useState([]);
  const [paused, setPaused] = useState(false);

  useEffect(() => { setWall(shuffle(pool).slice(0, SLOTS)); }, [pool]);
  useEffect(() => {
    if (paused || pool.length <= SLOTS || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = setInterval(() => {
      setWall((w) => {
        const shown = new Set(w.map((m) => m.name));
        const off = pool.filter((m) => !shown.has(m.name));
        if (!off.length) return w;
        const next = [...w];
        next[Math.floor(Math.random() * next.length)] = off[Math.floor(Math.random() * off.length)];
        return next;
      });
    }, SWAP_MS);
    return () => clearInterval(id);
  }, [paused, pool]);

  if (wall.length < 4) return null;
  let from = 0;
  return (
    <section aria-labelledby="cluster-title" className="w-full bg-white-MainPage lg:px-24 px-4 lg:py-16 py-12">
      <style>{`@keyframes orbit-cw{to{transform:rotate(360deg)}}@keyframes orbit-ccw{to{transform:rotate(-360deg)}}
        @keyframes tile-in{from{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}
        .orbit-wrap:hover .orbit{animation-play-state:paused!important}
        @media (prefers-reduced-motion: reduce){.orbit{animation:none!important}}`}</style>
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
        <Parallax speed={0.06} className="w-full">
          <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
            className="orbit-wrap relative mx-auto w-full max-w-[460px] aspect-square rounded-[40px] bg-gradient-to-br from-[#1AB0C8] to-[#0F3B47] overflow-hidden">
            {RINGS.map((r, k) => {
              const ring = wall.slice(from, from + r.sizes.length);
              from += r.sizes.length;
              return ring.length ? <Ring key={k} people={ring} {...r} /> : null;
            })}
          </div>
        </Parallax>
      </div>
    </section>
  );
}
