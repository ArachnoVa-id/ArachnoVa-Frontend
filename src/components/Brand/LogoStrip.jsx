import { useNavigate } from "react-router-dom";
import { useCollection } from "@/context/DataContext";
import { useT } from "@/lib/i18n";

// Endless strip of the clients' own logos; hover pauses it, click opens the project.
function Strip({ projects }) {
  const t = useT();
  const navigate = useNavigate();
  const logos = projects.filter((p) => p.logo && !p.hidden);
  if (!logos.length) return null;
  const row = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul className="flex gap-4 w-max animate-[logo-scroll_60s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none" aria-label={t({ en: "Clients we have worked with", id: "Klien yang pernah bekerja sama dengan kami" })}>
        {row.map((p, i) => (
          <li key={`${p.id}-${i}`} aria-hidden={i >= logos.length}>
            <button type="button" onClick={() => navigate(`/projects?projectId=${p.id}`)} title={p.title}
              tabIndex={i >= logos.length ? -1 : 0}
              className="group flex items-center gap-2.5 h-[56px] pl-2 pr-4 rounded-full bg-white border border-gray-200 shadow-sm transition hover:border-LightBlue-c hover:shadow-md">
              <img src={p.logo} alt="" loading="lazy" className="w-[40px] h-[40px] rounded-full object-contain bg-white grayscale opacity-70 transition group-hover:grayscale-0 group-hover:opacity-100" />
              <span className="text-[13px] font-semibold text-neutral-e whitespace-nowrap group-hover:text-neutral-g">{p.title}</span>
            </button>
          </li>
        ))}
      </ul>
      <style>{"@keyframes logo-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }"}</style>
    </div>
  );
}


// Right under the hero: who has trusted us, before anything else.
export default function LogoStrip() {
  const [projects] = useCollection("projects");
  const t = useT();
  if (!projects?.length) return null;
  return (
    <section aria-label={t({ en: "Clients", id: "Klien" })} className="w-full bg-white border-y border-gray-100 py-6 lg:py-8">
      <p className="text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-500">{t({ en: "Trusted by organisations across Indonesia", id: "Dipercaya organisasi di seluruh Indonesia" })}</p>
      <div className="max-w-[90rem] mx-auto -mt-4"><Strip projects={projects} /></div>
    </section>
  );
}
