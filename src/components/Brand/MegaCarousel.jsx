import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { useCollection } from "@/context/DataContext";
import { useT, useField, useLang } from "@/lib/i18n";
import { formatPeriod, isOngoing, byRecent } from "@/lib/period";

function Builders({ projectId }) {
  const [team] = useCollection("team");
  const t = useT();
  const people = (team || []).filter((m) => (m.projectIds || []).includes(projectId));
  if (!people.length) return null;
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {people.slice(0, 7).map((m) => (m.image
          ? <img key={m.name} src={m.image} alt="" title={m.name} loading="lazy" className="w-[30px] h-[30px] rounded-full object-cover ring-2 ring-white" />
          : <span key={m.name} title={m.name} className="w-[30px] h-[30px] rounded-full ring-2 ring-white bg-LightBlue-c text-white text-[11px] font-bold flex items-center justify-center">{m.name[0]}</span>))}
      </div>
      <span className="text-[12px] text-gray-500">{people.length} {t({ en: people.length > 1 ? "builders" : "builder", id: "kontributor" })}</span>
    </div>
  );
}

// One large card at a time with the next peeking in; arrows, swipe and dots.
export default function MegaCarousel({ projects, onOpen, cardRefs }) {
  const t = useT();
  const field = useField();
  const { lang } = useLang();
  const mega = (projects || []).filter((p) => p.mega && !p.hidden).sort(byRecent);
  const [i, setI] = useState(0);
  const track = useRef(null);

  const go = (n) => {
    const k = (n + mega.length) % mega.length;
    setI(k);
    const el = track.current?.children[k];
    if (el) track.current.scrollTo({ left: el.offsetLeft - track.current.offsetLeft, behavior: "smooth" });
  };
  // keep the dot in sync when the visitor swipes
  useEffect(() => {
    const tr = track.current;
    if (!tr) return undefined;
    const onScroll = () => {
      const w = tr.children[0]?.getBoundingClientRect().width || 1;
      setI(Math.min(mega.length - 1, Math.round(tr.scrollLeft / (w + 20))));
    };
    tr.addEventListener("scroll", onScroll, { passive: true });
    return () => tr.removeEventListener("scroll", onScroll);
  }, [mega.length]);

  if (!mega.length) return null;
  return (
    <section aria-labelledby="mega-title" className="w-full bg-white-MainPage lg:py-16 py-12 overflow-hidden">
      <div className="max-w-[72rem] mx-auto lg:px-0 px-4 flex items-end justify-between gap-4 mb-7">
        <div>
          <p className="text-[13px] font-semibold text-LightBlue-e">{t({ en: "Mega Projects", id: "Proyek Besar" })}</p>
          <h2 id="mega-title" className="font-SourceSansProBold lg:text-[2rem] text-[26px] text-neutral-g leading-tight mt-1">{t({ en: "Systems we run, not just ship", id: "Sistem yang terus kami kelola, bukan sekadar diserahkan" })}</h2>
        </div>
        {mega.length > 1 && (
          <div className="hidden sm:flex gap-2 shrink-0">
            <button type="button" onClick={() => go(i - 1)} aria-label={t({ en: "Previous", id: "Sebelumnya" })} className="w-[44px] h-[44px] rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-LightBlue-c hover:text-LightBlue-d"><FiArrowLeft /></button>
            <button type="button" onClick={() => go(i + 1)} aria-label={t({ en: "Next", id: "Berikutnya" })} className="w-[44px] h-[44px] rounded-full bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] text-white flex items-center justify-center hover:brightness-110"><FiArrowRight /></button>
          </div>
        )}
      </div>

      <div ref={track} className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 lg:px-[max(1rem,calc((100vw-72rem)/2))] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {mega.map((p) => {
          const shot = p.imageDesktop || p.desktopImages?.[0];
          const phone = p.imageMobile || p.mobileImages?.[0];
          return (
            <article key={p.id} ref={(el) => { if (cardRefs) cardRefs.current[p.id] = el; }}
              className="snap-start shrink-0 w-[88%] lg:w-[64rem] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#E6F6F9] via-white to-[#EEF2FF] border border-[#CBEFF5] grid lg:grid-cols-[1fr_1.15fr]">
              <div className="p-6 lg:p-10 flex flex-col">
                <div className="flex items-center gap-3">
                  {p.logo && <img src={p.logo} alt="" className="w-[52px] h-[52px] rounded-2xl object-contain bg-white border border-gray-200 p-1.5" />}
                  <div className="min-w-0">
                    <h3 className="font-SourceSansProBold text-[24px] lg:text-[28px] text-neutral-g leading-tight">{p.title}</h3>
                    {p.period && (
                      <p className="flex items-center gap-1.5 text-[12px] text-gray-500 mt-0.5">
                        <FiCalendar size={12} aria-hidden="true" /> {formatPeriod(p.period, lang)}
                        {isOngoing(p.period) && <span className="ml-1 px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">LIVE</span>}
                      </p>
                    )}
                  </div>
                </div>
                {p.partner?.name && (
                  <a href={p.partner.link} target="_blank" rel="noopener noreferrer" className="mt-4 self-start inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[12px] text-amber-900 hover:bg-amber-100">
                    {p.partner.logo && <img src={p.partner.logo} alt="" className="w-[24px] h-[24px] rounded-full object-contain bg-white" />}
                    {t({ en: "In collaboration with", id: "Berkolaborasi dengan" })} <b className="font-semibold">{p.partner.name}</b> <FiArrowUpRight size={12} aria-hidden="true" />
                  </a>
                )}
                <p className="mt-4 text-[16px] leading-relaxed text-neutral-f">{field(p, "goal")}</p>
                <div className="mt-auto pt-6">
                  {p.architecture?.tags?.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5 mb-5">{p.architecture.tags.map((tg) => <li key={tg} className="text-[11px] px-2 py-1 rounded-full bg-white text-LightBlue-e border border-[#CBEFF5]">{tg}</li>)}</ul>
                  )}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <Builders projectId={p.id} />
                    <div className="flex gap-2">
                      <button type="button" onClick={() => onOpen?.(p)} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] text-white text-[13px] font-semibold hover:brightness-110">{t({ en: "See the work", id: "Lihat Proyek" })}</button>
                      {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-[13px] font-semibold text-neutral-f hover:bg-gray-50">{t({ en: "Visit", id: "Kunjungi" })}</a>}
                    </div>
                  </div>
                </div>
              </div>
              {/* screenshot on a soft panel, with the phone view floating over it */}
              <button type="button" onClick={() => onOpen?.(p)} aria-label={p.title} className="relative min-h-[240px] lg:min-h-[420px] bg-gradient-to-br from-[#1AB0C8]/15 to-[#179FB5]/5 overflow-hidden">
                <span aria-hidden="true" className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full bg-[#1AB0C8]/20" />
                {shot && <img src={shot} alt="" loading="lazy" className="absolute left-[8%] top-[12%] w-[86%] rounded-xl shadow-2xl border border-white/60 object-cover object-top aspect-[16/10]" />}
                {phone && <img src={phone} alt="" loading="lazy" className="absolute right-[6%] bottom-[6%] w-[24%] aspect-[9/19] object-cover object-top rounded-[18px] shadow-2xl border-4 border-white" />}
              </button>
            </article>
          );
        })}
      </div>

      {mega.length > 1 && (
        <div className="flex justify-center gap-2 mt-5">
          {mega.map((p, k) => (
            <button key={p.id} type="button" onClick={() => go(k)} aria-label={p.title} aria-current={k === i}
              className="p-1.5"><span className={`block h-[6px] rounded-full transition-all ${k === i ? "w-[24px] bg-LightBlue-c" : "w-[6px] bg-gray-300"}`} /></button>
          ))}
        </div>
      )}
    </section>
  );
}
