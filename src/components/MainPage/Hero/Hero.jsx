import { useSettings } from "@/context/DataContext";
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
    if (measureRef.current) setCw(measureRef.current.offsetWidth + 1 + 'px');
  }, [idx]);
  return (
    <span className={`inline-flex overflow-hidden leading-none align-middle ${className || ""}`}
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

  const settings = useSettings();
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
        src="/image/Hero/HeroBG.png"
        className="absolute w-full h-full z-[1] max-lg:hidden"
        fill
        draggable="false"
      />
      <Image
        alt="Background"
        src="/image/Hero/HeroBGMobile.png"
        className="absolute w-full h-full z-[1] lg:hidden"
        fill
        draggable="false"
      />

      {/* Dekstop */}
      <div className="text-black flex gap-x-[8.0rem] max-lg:hidden z-[2]">
        <div className="flex flex-col justify-center scale-[1.2]">
          <div className="text-[1.6rem] text-neutral-g font-CoolveticaCondReg ">
            ArachnoVa{" "}
          </div>
          <div className="text-neutral-g font-SourceSansProBold">
            <div className="text-[1.8rem]">Your Web Design Partner</div>
            <div className="flex items-baseline gap-[0.4rem] mt-[0.1rem]">
              <span className="text-[2.6rem]">Always</span>
              <Words words={["Delivered", "Distinctive", "Dependable"]} className="text-[2.6rem]" />
            </div>
          </div>
          <div className="text-[1.0rem] text-neutral-e pt-[1.1rem] font-SourceSansProSemibold ">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div className="py-[2vh] flex gap-[1.0rem]">
            <a
              href={settings?.whatsapp || "https://wa.me/6287882832538"}
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
          <div className="text-[clamp(2rem,10vw,6rem)] text-neutral-g font-CoolveticaCondReg ">
          ArachnoVa{" "}
        </div>

        <div className="text-neutral-g font-SourceSansProBold text-center">
          <div className="text-[clamp(1.2rem,7vw,5rem)]">Your Web Design Partner</div>
          <div className="flex items-baseline justify-center gap-[0.5rem] mt-[0.2rem]">
            <span className="text-[clamp(1.5rem,9vw,6rem)]">Always</span>
            <Words words={["Delivered", "Distinctive", "Dependable"]} className="text-[clamp(1.5rem,9vw,6rem)]" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-[clamp(1.8rem,7vw,5rem)]/[clamp(1.8rem,7vw,5rem)] pt-[clamp(1.5rem,5vw,4rem)] text-neutral-e font-SourceSansProSemibold ">
          <div className="">Crafting Digital Presence in Every</div>
          <div className="">Strand of Code</div>
        </div>

        <a
          href={settings?.whatsapp || "https://wa.me/6287882832538"}
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
          <div className="bg-white w-[clamp(18rem,85vw,80rem)] h-[clamp(25rem,60vw,60rem)] rounded-lg font-ConsolasRegular overflow-hidden">
            <div className="px-[clamp(0.8rem,2.5vw,1.5rem)] py-[clamp(1rem,5vw,4rem)] text-[clamp(1.2rem,4vw,3rem)]/[clamp(1.5rem,5vw,4rem)] relative ">
              <Image
                alt=""
                src="/image/Hero/3ColorButton.png"
                className="w-[8.0rem] h-[3.0rem] top-[0.5rem] left-[0.7rem] absolute"
                draggable="false"
                width={100}
                height={100}
              />
              <CodeTyper speed={100} className="min-h-[clamp(15rem,40vw,40rem)]" onDone={() => setCodeDone(true)} />
            </div>
          </div>
          {codeDone && (
            <div className="absolute w-[clamp(15rem,65vw,60rem)] h-[clamp(5rem,15vw,13rem)] bg-white/70 backdrop-blur-md rounded-md -bottom-[clamp(1rem,4vw,3rem)] -right-[clamp(0.5rem,3vw,2rem)] text-[clamp(1.2rem,4vw,3rem)] border-2 border-[#E2E8F0] font-ConsolasBold shadow-md animate-fade-in-left">
              <Image
                alt=""
                src="/image/Hero/3ColorButton.png"
                className="w-[10.0rem] h-[3.0rem] top-[0.9rem] left-[0.7rem] absolute"
                draggable="false"
                width={100}
                height={100}
              />
               <div className="flex items-center text-[clamp(1rem,3.5vw,2.6rem)] gap-x-[0.06rem] pt-[clamp(1.5rem,6vw,5rem)] whitespace-nowrap ml-[clamp(0.5rem,2.5vw,2rem)] pr-[clamp(0.5rem,2.5vw,2rem)]">
                <TerminalTyper speed={80} startDelay={300} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
