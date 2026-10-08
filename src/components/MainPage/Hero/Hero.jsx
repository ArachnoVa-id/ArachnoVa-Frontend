import { useWhatsApp, WA_MESSAGES } from "@/lib/whatsapp";
import Image from "@/components/ui/Img";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CodeTyper from "@/components/ui/CodeTyper";
import TerminalTyper from "@/components/ui/TerminalTyper";
import WebPattern from "@/components/ui/WebPattern";

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
      style={{ height: '1em', width: cw || 'auto' }}>
      <span className="block transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${idx}em)` }}>
        {words.map((w, i) => (
          <span key={i} className="block whitespace-nowrap" style={{ height: '1em', lineHeight: 1 }}>{w}</span>
        ))}
      </span>
      <span ref={measureRef} className="invisible absolute whitespace-nowrap" aria-hidden="true"
        style={{ height: '1em', lineHeight: 1, top: 0, left: 0 }}>{words[idx]}</span>
    </span>
  );
}

export default function Hero() {
  const [codeDone, setCodeDone] = useState(false);


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

      {/* Dekstop */}
      <div className="text-black flex gap-x-[4.5rem] xl:gap-x-[8.0rem] max-lg:hidden z-[2]">
        <div className="flex flex-col justify-center xl:scale-[1.2]">
          <h1 className="text-neutral-g font-SourceSansProBold">
            <span className="block text-[1.6rem] font-CoolveticaCondReg font-normal">ArachnoVa</span>
            <span className="block text-[1.8rem]">Your Digital Product Partner</span>
            <span className="flex items-baseline gap-[0.4rem] mt-[0.1rem]">
              <span className="text-[2.6rem]">Always</span>
              <Words words={["Delivered", "Distinctive", "Dependable"]} className="text-[2.6rem]" />
            </span>
          </h1>
          <div className="text-[1.0rem] text-neutral-e pt-[1.1rem] font-SourceSansProSemibold ">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div className="py-[2vh] flex gap-[1.0rem]">
            <a
              href={heroWa}
              className="aspect-[167/46] w-[8.7rem] rounded-[0.4rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white text-[0.8rem] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out "
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="aspect-[197/48] w-[10.3rem] rounded-[0.4rem] bg-transparent text-[0.8rem] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] "
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
                Discover Our Services
              </div>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[537/366] w-[28.0rem] border-2 border-[#E2E8F0] rounded-[0.62rem] font-ConsolasRegular overflow-hidden">
            <div className="bg-white/50 backdrop-blur-xl w-full h-full absolute rounded-[0.62rem]"></div>
            <div className="px-[1.2rem] py-[2.0rem] text-[1.05rem]/[1.15rem] relative">
              <Image
                alt=""
                src="/image/Hero/3ColorButton.png"
                className="w-[3.0rem] h-[1.0rem] top-[0.5rem] left-[0.7rem] absolute"
                draggable="false"
                width={100}
                height={100}
              />
              <CodeTyper speed={70} className="min-h-[13.0rem]" onDone={() => setCodeDone(true)} />
            </div>
          </div>
          {codeDone && (
            <div className="absolute aspect-[419/96] w-[24rem] bg-white/70 backdrop-blur-md rounded-[0.62rem] -bottom-[1.5rem] -right-[1.0rem] text-[1.0rem] flex items-center border-2 border-[#E2E8F0] font-ConsolasBold shadow-md animate-fade-in-left">
              <Image
                alt=""
                src="/image/Hero/3ColorButton.png"
                className="w-[3.0rem] h-[1.0rem] top-[0.4rem] left-[0.7rem] absolute"
                draggable="false"
                width={100}
                height={100}
              />
               <div className="flex gap-x-[0.1rem] pt-[1.0rem] whitespace-nowrap ml-[0.8rem] pr-[1.5rem]">
                <TerminalTyper speed={60} startDelay={300} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div
        data-aos="fade-up"
        className="hero-mobile flex flex-col lg:hidden w-full items-center mb-[clamp(4rem,35vw,30rem)] z-[2] mt-[clamp(3rem,20vw,18rem)]"
      >
        <h1 className="text-neutral-g font-SourceSansProBold text-center px-4 max-w-full">
          <span className="block text-[clamp(2rem,10vw,6rem)] font-CoolveticaCondReg font-normal">ArachnoVa</span>
          <span className="block text-[clamp(1.2rem,6.5vw,5rem)]">Your Digital Product Partner</span>
          <span className="flex flex-wrap items-baseline justify-center gap-x-[0.5rem] mt-[0.2rem]">
            <span className="text-[clamp(1.4rem,8vw,6rem)]">Always</span>
            <Words words={["Delivered", "Distinctive", "Dependable"]} className="text-[clamp(1.4rem,8vw,6rem)]" />
          </span>
        </h1>

        <div className="flex flex-col justify-center items-center text-center px-4 text-[clamp(1.25rem,5vw,2.4rem)]/[1.2] pt-[clamp(1rem,4vw,3rem)] text-neutral-e font-SourceSansProSemibold ">
          <div className="">Crafting Digital Presence in Every</div>
          <div className="">Strand of Code</div>
        </div>

        <a
          href={heroWa}
          className="w-[clamp(18rem,80vw,80rem)] h-[clamp(3.5rem,10vw,8rem)] mt-[clamp(1.5rem,5vw,4rem)] my-[clamp(1rem,3vw,2.5rem)] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md text-[clamp(1.2rem,4vw,3rem)] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out "
        >
          Start Your Project
        </a>
        <a href="/services" className="w-[clamp(18rem,80vw,80rem)] h-[clamp(3.5rem,10vw,8rem)] bg-transparent mb-[clamp(1rem,3vw,2.5rem)] rounded-md text-[clamp(1.2rem,4vw,3rem)] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
            Discover Our Services
          </div>
        </a>

        <div className="relative">
          <div className="bg-white w-[clamp(18rem,85vw,80rem)] min-h-[clamp(25rem,60vw,60rem)] rounded-lg font-ConsolasRegular overflow-hidden">
            <div className="px-[clamp(0.8rem,2.5vw,1.5rem)] pt-[clamp(2.25rem,7vw,4rem)] pb-[clamp(4.5rem,15vw,7rem)] text-[clamp(1.1rem,3.6vw,2.4rem)]/[1.35] relative ">
              <Image
                alt=""
                src="/image/Hero/3ColorButton.png"
                className="w-[clamp(3.5rem,11vw,6rem)] h-auto top-[clamp(0.6rem,2vw,1.2rem)] left-[clamp(0.8rem,2.5vw,1.5rem)] absolute object-contain"
                draggable="false"
                width={100}
                height={100}
              />
              <CodeTyper speed={100} className="min-h-[clamp(15rem,40vw,40rem)]" onDone={() => setCodeDone(true)} />
            </div>
          </div>
          {codeDone && (
            <div className="absolute w-[80vw] max-w-[40rem] bg-white/70 backdrop-blur-md rounded-md -bottom-[clamp(1rem,4vw,3rem)] -right-[2vw] border-2 border-[#E2E8F0] font-ConsolasBold shadow-md animate-fade-in-left">
              <Image
                alt=""
                src="/image/Hero/3ColorButton.png"
                className="w-[clamp(3rem,9vw,5rem)] h-auto top-[clamp(0.4rem,1.5vw,0.9rem)] left-[clamp(0.6rem,2.5vw,1.5rem)] absolute object-contain"
                draggable="false"
                width={100}
                height={100}
              />
               <div className="flex items-center text-[clamp(10px,3.1vw,1.6rem)] gap-x-[0.06rem] pt-[clamp(1.6rem,6vw,3.5rem)] pb-[clamp(0.6rem,2vw,1.2rem)] whitespace-nowrap overflow-hidden px-[clamp(0.6rem,2.5vw,1.5rem)]">
                <TerminalTyper speed={80} startDelay={300} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
