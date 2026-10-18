import { useT } from "@/lib/i18n";
const WORDS = { en: ["Sustainable", "Problem-First", "AI-Ready"], id: ["Berkelanjutan", "Tepat Sasaran", "Siap AI"] };
const TAGLINE = { en: "Helping you ride the AI wave, on fundamentals that last", id: "Membantu Anda memanfaatkan gelombang AI, dengan fondasi yang kokoh" };
const START = { en: "Start Your Project", id: "Mulai Proyek Anda" };
const DISCOVER = { en: "Discover Our Services", id: "Lihat Layanan Kami" };
import { useWhatsApp, WA_MESSAGES } from "@/lib/whatsapp";
import Image from "@/components/ui/Img";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProblemToSolution from "./ProblemToSolution";
import { Parallax } from "@/lib/parallax";
import WebPattern from "@/components/ui/WebPattern";

// Each word gets a slot taller than the glyphs, so descenders/ascenders of the
// neighbouring words never peek into view while the list slides.
const SLOT = 1.3;

function Words({ words, className }) {
  const [idx, setIdx] = useState(0);
  const [cw, setCw] = useState(null);
  const measureRef = useRef(null);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2500);
    return () => clearInterval(t);
  }, [words.length]);
  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    // Re-measure whenever the word's rendered width changes: new word, web font finishing
    // loading (the first measure uses the narrower fallback font), or viewport resize.
    const measure = () => setCw(Math.ceil(el.getBoundingClientRect().width) + 2 + "px");
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [idx]);
  return (
    <span className={`inline-flex overflow-hidden leading-none align-middle text-left ${className || ""}`}
      style={{ height: `${SLOT}em`, width: cw || 'auto' }}>
      <span className="block transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${idx * SLOT}em)` }}>
        {words.map((w, i) => (
          <span key={i} className="block whitespace-nowrap" style={{ height: `${SLOT}em`, lineHeight: SLOT }}>{w}</span>
        ))}
      </span>
      <span ref={measureRef} className="invisible absolute whitespace-nowrap" aria-hidden="true"
        style={{ height: `${SLOT}em`, lineHeight: SLOT, top: 0, left: 0 }}>{words[idx]}</span>
    </span>
  );
}

export default function Hero() {
  const t = useT();


  const heroWa = useWhatsApp(WA_MESSAGES.hero);
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section className="w-full lg:min-h-[90vh] min-h-[70vh] relative bg-white-MainPage overflow-hidden flex flex-row justify-center items-center">
      <style>{`@keyframes fade-in-left { from { opacity: 0; transform: translateX(-1.5rem); } to { opacity: 1; transform: translateX(0); } } .animate-fade-in-left { animation: fade-in-left 0.5s ease-out; }`}</style>
      <WebPattern opacity={0.04} />
      <Parallax speed={-0.15} className="absolute inset-x-0 -top-[20%] -bottom-[20%] z-[1]">
      <Image
        alt="Background"
        src="/image/Hero/HeroBG.webp"
        className="absolute w-full h-full z-[1] max-lg:hidden"
        fill
        draggable="false"
      />
      <Image
        alt="Background"
        src="/image/Hero/HeroBGMobile.webp"
        className="absolute w-full h-full z-[1] lg:hidden"
        fill
        draggable="false"
      />
      </Parallax>

      {/* Dekstop */}
      <div className="text-black flex gap-x-[4.5rem] xl:gap-x-[8.0rem] max-lg:hidden z-[2]">
        <div className="flex flex-col justify-center xl:scale-[1.2]">
          <h1 className="text-neutral-g font-SourceSansProBold">
            <span className="block text-[1.6rem] font-CoolveticaCondReg font-normal">ArachnoVa</span>
            <span className="block text-[1.8rem]">{t({ en: "Real Problems, Lasting Solutions", id: "Masalah Nyata, Solusi Berkelanjutan" })}</span>
            <span className="flex items-baseline gap-[0.4rem] mt-[0.1rem]">
              <span className="text-[2.6rem]">{t({ en: "Built", id: "Selalu" })}</span>
              <Words key={t({ en: "en", id: "id" })} words={t(WORDS)} className="text-[2.6rem]" />
            </span>
          </h1>
          <div className="text-[1.0rem] text-neutral-e pt-[1.1rem] font-SourceSansProSemibold ">
            {t(TAGLINE)}
          </div>
          <div className="py-[2vh] flex gap-[1.0rem]">
            <a
              href={heroWa}
              className="aspect-[167/46] w-[8.7rem] rounded-[0.4rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white text-[0.8rem] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out "
            >
              {t(START)}
            </a>
            <a
              href="/services"
              className="aspect-[197/48] w-[10.3rem] rounded-[0.4rem] bg-transparent text-[0.8rem] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] "
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
                {t(DISCOVER)}
              </div>
            </a>
          </div>
        </div>

        <Parallax speed={0.08} className="relative">
          <div className="w-[28.0rem] border-2 border-[#E2E8F0] rounded-[0.62rem] overflow-hidden relative">
            <div className="bg-white/60 backdrop-blur-xl w-full h-full absolute rounded-[0.62rem]"></div>
            <div className="px-[1.2rem] pt-[2.2rem] pb-[1.0rem] relative">
              <Image alt="" src="/image/Hero/3ColorButton.png" className="w-[3.0rem] h-[1.0rem] top-[0.5rem] left-[0.7rem] absolute" draggable="false" width={100} height={100} />
              <ProblemToSolution />
            </div>
          </div>
        </Parallax>
      </div>

      {/* Mobile */}
      <div
        data-aos="fade-up"
        className="hero-mobile flex flex-col lg:hidden w-full items-center mb-[clamp(4rem,35vw,30rem)] z-[2] mt-[clamp(3rem,20vw,18rem)]"
      >
        <h1 className="text-neutral-g font-SourceSansProBold text-center px-4 max-w-full">
          <span className="block text-[clamp(2rem,10vw,6rem)] font-CoolveticaCondReg font-normal">ArachnoVa</span>
          <span className="block text-[clamp(1.2rem,6.5vw,5rem)]">{t({ en: "Real Problems, Lasting Solutions", id: "Masalah Nyata, Solusi Berkelanjutan" })}</span>
          <span className="flex flex-wrap items-baseline justify-center gap-x-[0.5rem] mt-[0.2rem]">
            <span className="text-[clamp(1.4rem,8vw,6rem)]">{t({ en: "Built", id: "Selalu" })}</span>
            <Words key={t({ en: "en", id: "id" })} words={t(WORDS)} className="text-[clamp(1.4rem,8vw,6rem)]" />
          </span>
        </h1>

        <div className="flex flex-col justify-center items-center text-center px-4 text-[clamp(1.25rem,5vw,2.4rem)]/[1.2] pt-[clamp(1rem,4vw,3rem)] text-neutral-e font-SourceSansProSemibold ">
          <div className="max-w-[22em]">{t(TAGLINE)}</div>
        </div>

        <a
          href={heroWa}
          className="w-[clamp(18rem,80vw,80rem)] h-[clamp(3.5rem,10vw,8rem)] mt-[clamp(1.5rem,5vw,4rem)] my-[clamp(1rem,3vw,2.5rem)] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md text-[clamp(1.2rem,4vw,3rem)] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out "
        >
          {t(START)}
        </a>
        <a href="/services" className="w-[clamp(18rem,80vw,80rem)] h-[clamp(3.5rem,10vw,8rem)] bg-transparent mb-[clamp(1rem,3vw,2.5rem)] rounded-md text-[clamp(1.2rem,4vw,3rem)] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
            {t(DISCOVER)}
          </div>
        </a>

        <div className="w-[clamp(18rem,90vw,40rem)] flex flex-col gap-3">
          <div className="bg-white rounded-lg border-2 border-[#E2E8F0] px-4 pt-[2.4rem] pb-4 relative text-[13px]">
            <Image alt="" src="/image/Hero/3ColorButton.png" className="w-[3.2rem] h-auto top-[0.7rem] left-[0.9rem] absolute object-contain" draggable="false" width={100} height={100} />
            <ProblemToSolution />
          </div>
        </div>
      </div>
    </section>
  );
}
