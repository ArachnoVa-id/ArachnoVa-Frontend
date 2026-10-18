import { useMemo } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useCollection } from "@/context/DataContext";
import { useT } from "@/lib/i18n";

// Photos scattered in a loose orbit; the people with the most projects sit closest to the centre.
const SPOTS = [
  [50, 50, 92], [24, 30, 72], [77, 26, 70], [80, 72, 68], [22, 74, 66],
  [50, 14, 56], [50, 88, 54], [8, 52, 50], [92, 50, 50], [36, 58, 46], [65, 40, 46],
];

export default function TeamCluster() {
  const t = useT();
  const [team] = useCollection("team");
  const people = useMemo(() => (team || [])
    .filter((m) => m.image)
    .sort((a, b) => (b.projectIds || []).length - (a.projectIds || []).length)
    .slice(0, SPOTS.length), [team]);
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
        <div className="relative mx-auto w-full max-w-[460px] aspect-square rounded-[40px] bg-gradient-to-br from-[#1AB0C8] to-[#0F3B47] overflow-hidden" aria-hidden="true">
          <span className="absolute inset-[18%] rounded-full border border-white/25" />
          <span className="absolute inset-[34%] rounded-full border border-white/20" />
          {people.map((m, k) => {
            const [x, y, size] = SPOTS[k];
            return (
              <img key={m.name} src={m.image} alt="" loading="lazy" title={m.name}
                className="absolute rounded-full object-cover ring-4 ring-white/90 shadow-xl transition hover:scale-110"
                style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, transform: "translate(-50%, -50%)" }} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
