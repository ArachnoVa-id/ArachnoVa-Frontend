import { useT, useLang } from "@/lib/i18n";
import { useField } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { useCollection } from "@/context/DataContext";
import { formatPeriod, isOngoing } from "@/lib/period";

function Avatars({ projectId }) {
  const t = useT();
  const [team] = useCollection("team");
  const people = (team || []).filter((m) => (m.projectIds || []).includes(projectId));
  if (!people.length) return null;
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {people.slice(0, 6).map((m) => (
          m.image
            ? <img key={m.name} src={m.image} alt="" title={m.name} loading="lazy" className="w-[30px] h-[30px] rounded-full object-cover ring-2 ring-white" />
            : <span key={m.name} title={m.name} className="w-[30px] h-[30px] rounded-full ring-2 ring-white bg-LightBlue-c text-white text-[11px] font-bold flex items-center justify-center">{m.name[0]}</span>
        ))}
      </div>
      <span className="text-[12px] text-gray-500">{people.length} {t({ en: people.length > 1 ? "builders" : "builder", id: "pembangun" })}</span>
    </div>
  );
}

// The flagship systems: bigger, longer-running engagements shown apart from the regular portfolio.
export default function MegaProjects({ projects, onOpen, cardRefs }) {
  const { lang } = useLang();
  const t = useT();
  const field = useField();
  const mega = (projects || []).filter((p) => p.mega && !p.hidden);
  if (!mega.length) return null;
  return (
    <section aria-labelledby="mega-title" className="w-full bg-white-MainPage lg:px-24 px-4 lg:py-14 py-10">
      <div className="max-w-[72rem] mx-auto">
        <div className="text-center mb-8">
          <p className="font-SourceSansProBold lg:text-xl text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">{t({ en: "Mega Projects", id: "Proyek Besar" })}</p>
          <h2 id="mega-title" className="font-SourceSansProBold lg:text-3xl text-[26px] text-neutral-g mt-1">{t({ en: "Systems We Run, Not Just Ship", id: "Sistem yang Kami Jalankan, Bukan Sekadar Kirim" })}</h2>
          <p className="text-[15px] text-neutral-e mt-2 max-w-[40rem] mx-auto">{t({ en: "Long-running platforms that real operations depend on every day.", id: "Platform jangka panjang yang diandalkan operasional nyata setiap hari." })}</p>
        </div>
        <div className={`grid gap-5 ${mega.length >= 3 ? "md:grid-cols-2 xl:grid-cols-3" : "lg:grid-cols-2"}`}>
          {mega.map((p) => {
            const shot = p.imageDesktop || p.desktopImages?.[0];
            const open = () => (onOpen ? onOpen(p) : null);
            return (
              <article key={p.id} ref={(el) => { if (cardRefs) cardRefs.current[p.id] = el; }} className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm transition hover:shadow-xl hover:-translate-y-1 hover:border-LightBlue-a">
                <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(600px_circle_at_50%_0%,rgba(26,176,200,0.12),transparent_60%)]" aria-hidden="true" />
                {shot && (
                  <button type="button" onClick={open} className="block w-full aspect-[16/8] bg-gray-50 overflow-hidden" aria-label={p.title}>
                    <img src={shot} alt="" loading="lazy" className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
                  </button>
                )}
                <div className="p-5 lg:p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3">
                    {p.logo && <img src={p.logo} alt="" className="w-[44px] h-[44px] rounded-xl object-contain bg-white border border-gray-200 p-1" />}
                    <div className="min-w-0">
                      <h3 className="font-SourceSansProBold text-[20px] text-neutral-g leading-tight">{p.title}</h3>
                      {p.period && (
                        <p className="flex items-center gap-1.5 text-[12px] text-gray-500 mt-0.5">
                          <FiCalendar size={12} aria-hidden="true" /> {formatPeriod(p.period, lang)}
                          {isOngoing(p.period) && <span className="ml-1 px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold">LIVE</span>}
                        </p>
                      )}
                    </div>
                  </div>
                  {p.partner?.name && (
                    <a href={p.partner.link} target="_blank" rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full max-w-full bg-amber-50 border border-amber-200 text-[12px] text-amber-900 hover:bg-amber-100 transition">
                      {p.partner.logo && <img src={p.partner.logo} alt="" className="w-[26px] h-[26px] rounded-full object-contain bg-white" />}
                      <span className="leading-tight">{t({ en: "In collaboration with", id: "Berkolaborasi dengan" })} <b className="font-semibold whitespace-nowrap">{p.partner.name}</b></span>
                      <FiArrowUpRight size={12} aria-hidden="true" />
                    </a>
                  )}
                  {field(p, "goal") && <p className="mt-4 text-[15px] leading-relaxed text-neutral-f">{field(p, "goal")}</p>}
                  {/* pinned to the card bottom so tags, people and buttons line up across cards */}
                  <div className="mt-auto pt-5">
                    <ul className="flex flex-wrap content-end gap-1.5 min-h-[60px]">
                      {(p.architecture?.tags || []).map((t) => <li key={t} className="text-[11px] h-fit px-2 py-1 rounded-full bg-[#EEF9FB] text-LightBlue-e border border-[#CBEFF5]">{t}</li>)}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                      <Avatars projectId={p.id} />
                    </div>
                    <div className="mt-4 flex gap-2">
                      {onOpen
                        ? <button type="button" onClick={open} className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] text-white text-[13px] font-semibold hover:brightness-110">{t({ en: "See the work", id: "Lihat karyanya" })}</button>
                        : <Link to={`/projects?projectId=${p.id}`} className="flex-1 text-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] text-white text-[13px] font-semibold hover:brightness-110">{t({ en: "See the work", id: "Lihat karyanya" })}</Link>}
                      {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-gray-300 text-[13px] font-semibold text-neutral-f hover:bg-gray-50">{t({ en: "Visit", id: "Kunjungi" })}</a>}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
