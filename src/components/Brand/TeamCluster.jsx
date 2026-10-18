import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useCollection } from "@/context/DataContext";
import { useT } from "@/lib/i18n";
import { Parallax } from "@/lib/parallax";

// Everyone at the same size, nobody in the middle. Faces swap one at a time so the
// whole team takes turns being on the wall.
const COLS = 4;
const ROWS = 3;
const TILES = COLS * ROWS;
const SWAP_MS = 1800;

function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

export default function TeamCluster() {
  const t = useT();
  const [team] = useCollection("team");
  const pool = useMemo(() => (team || []).filter((m) => m.image), [team]);
  const [wall, setWall] = useState([]);
  const [paused, setPaused] = useState(false);

  useEffect(() => { setWall(shuffle(pool).slice(0, TILES)); }, [pool]);
  useEffect(() => {
    if (paused || pool.length <= TILES || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
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
  return (
    <section aria-labelledby="cluster-title" className="w-full bg-white-MainPage lg:px-24 px-4 lg:py-16 py-12">
      <style>{`@keyframes tile-in{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}`}</style>
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
          <ul onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
            className="mx-auto w-full max-w-[460px] rounded-[32px] bg-gradient-to-br from-[#1AB0C8] to-[#0F3B47] p-5 grid gap-3"
            style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}>
            {wall.map((m, i) => (
              <li key={i} className="relative aspect-square">
                <img key={m.name} src={m.image} alt={m.name} title={m.name} loading="lazy"
                  className="w-full h-full rounded-full object-cover ring-[3px] ring-white/85 shadow-lg"
                  style={{ animation: "tile-in .6s ease-out" }} />
              </li>
            ))}
          </ul>
        </Parallax>
      </div>
    </section>
  );
}
