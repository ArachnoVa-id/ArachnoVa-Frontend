import { FiTarget, FiCpu, FiLifeBuoy } from "react-icons/fi";
import { useT } from "@/lib/i18n";
import { Parallax } from "@/lib/parallax";

// Three ways clients work with us, so a visitor can find themselves quickly.
const ROLES = [
  {
    icon: FiTarget,
    title: { en: "Problem Solver", id: "Pemecah Masalah" },
    text: { en: "Something in your operation isn't working. We find the real cause and build the fix.", id: "Ada yang tidak berjalan di operasional Anda. Kami temukan akar masalahnya dan bangun solusinya." },
    who: { en: "For organisations & businesses", id: "Untuk organisasi & bisnis" },
  },
  {
    icon: FiCpu,
    title: { en: "AI-Ready Builder", id: "Pembangun Siap AI" },
    text: { en: "You want to use AI without the hype. We add it where it saves real work, on a solid base.", id: "Anda ingin memakai AI tanpa sekadar ikut tren. Kami menerapkannya di tempat yang benar-benar menghemat pekerjaan, di atas fondasi yang kuat." },
    who: { en: "For teams going digital", id: "Untuk tim yang bertransformasi digital" },
  },
  {
    icon: FiLifeBuoy,
    title: { en: "Long-Term Partner", id: "Mitra Jangka Panjang" },
    text: { en: "You need it to keep running after launch. We stay on to maintain and grow it with you.", id: "Anda butuh sistem yang tetap berjalan setelah rilis. Kami tetap mendampingi untuk merawat dan mengembangkannya bersama Anda." },
    who: { en: "For systems you depend on", id: "Untuk sistem yang Anda andalkan" },
  },
];

export default function WeAre() {
  const t = useT();
  return (
    <section aria-labelledby="weare-title" className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,#0F3B47_0%,#06212A_55%,#001118_100%)] lg:px-24 px-4 lg:py-20 py-14">
      <Parallax speed={-0.25} className="pointer-events-none absolute inset-x-0 -inset-y-[30%] opacity-25 bg-[radial-gradient(#84D4E1_1px,transparent_1px)] [background-size:28px_28px]"><span aria-hidden="true" /></Parallax>
      <div className="relative max-w-[72rem] mx-auto">
        <p className="text-[13px] font-semibold text-LightBlue-a">{t({ en: "We are…", id: "Kami adalah…" })}</p>
        <h2 id="weare-title" className="font-SourceSansProBold text-white lg:text-[2rem] text-[26px] leading-tight mt-1 max-w-[36rem]">
          {t({ en: "The team you call when it has to work, and keep working.", id: "Tim yang Anda hubungi saat sistem harus berjalan, dan tetap berjalan." })}
        </h2>
        <ul className="grid md:grid-cols-3 gap-4 mt-10">
          {ROLES.map((r, i) => (
            <li key={r.title.en} className="group relative rounded-3xl bg-white/[0.04] border border-white/10 p-6 transition hover:bg-white/[0.07] hover:border-LightBlue-a/50 hover:-translate-y-1">
              <div className="relative w-[64px] h-[64px]">
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1AB0C8] to-[#0F3B47] rotate-6 transition group-hover:rotate-12" aria-hidden="true" />
                <span className="absolute inset-0 rounded-2xl bg-[#0B2530] border border-white/10 flex items-center justify-center text-LightBlue-a">
                  <r.icon size={26} aria-hidden="true" />
                </span>
                <span className="absolute -top-1.5 -right-1.5 w-[22px] h-[22px] rounded-full bg-LightBlue-c text-white text-[11px] font-bold flex items-center justify-center" aria-hidden="true">{i + 1}</span>
              </div>
              <h3 className="mt-5 font-SourceSansProBold text-[20px] text-white">{t(r.title)}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#C5E3EA]">{t(r.text)}</p>
              <p className="mt-4 text-[12px] font-semibold text-LightBlue-a">{t(r.who)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
