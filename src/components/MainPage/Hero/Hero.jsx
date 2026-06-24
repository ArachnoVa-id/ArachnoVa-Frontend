import { useSettings } from "/context/DataContext";
import Image from "@/components/ui/Img";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CodeTyper from "@/components/ui/CodeTyper";
import TerminalTyper from "@/components/ui/TerminalTyper";
import WebPattern from "@/components/ui/WebPattern";

export default function Hero() {
  const [codeDone, setCodeDone] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section className="w-full min-h-screen relative bg-white-MainPage overflow-hidden flex flex-row justify-center items-center">
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
          <div className="text-neutral-g font-SourceSansProBold text-[2.0rem]/[2.5rem]">
            <div className="text-[2.0rem] ">Your Web Design Partner</div>
            <div className="overflow-clip  flex items-center justify-center h-[3.0rem] gap-[0.5rem] leading-none">
              <div className="text-[2.8rem]">Always</div>
              <div className="flex-col items-center justify-center  gap-[4.0rem] h-full w-full -translate-y-full  ">
                <div className="text-[2.8rem] animate-swap_words pt-[0.2rem]">
                  Delivered
                </div>
                <div className="text-[2.8rem] animate-swap_words pt-[0.1rem]">
                  Distinctive
                </div>
                <div className="text-[2.8rem] animate-swap_words ">
                  Dependable
                </div>
              </div>
            </div>
          </div>
          <div className="text-[1.0rem] text-neutral-e pt-[1.1rem] font-SourceSansProSemibold ">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div className="py-[2vh] flex gap-[1.0rem]">
            <a
              href="https://wa.me/6287882832538"
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

        <div className="aspect-[537/366] w-[28.0rem] border-2 border-[#F1F5F9] rounded-[0.62rem]  relative font-ConsolasRegular ">
          <div className="bg-white opacity-60 w-full h-full absolute rounded-[0.62rem] backdrop-blur-3xl"></div>
          <div
            className="absolute aspect-[419/96] w-[21.8rem] bg-white opacity-90 rounded-[0.62rem] -bottom-[3.0rem] -right-[4.0rem] text-[1.0rem]  flex items-center border-2 border-border font-ConsolasBold"
            data-aos="fade-left"
          >
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[3.0rem] h-[1.0rem] top-[0.4rem] left-[0.7rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex gap-x-[0.1rem] pt-[1.0rem] whitespace-nowrap ml-[0.8rem]">
              <TerminalTyper speed={60} startDelay={300} />
            </div>
          </div>
          <div className="px-[1.0rem] py-[2.0rem] text-[1.05rem]/[1.15rem] relative">
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
      </div>

      {/* Mobile */}
      <div
        data-aos="fade-up"
        className="flex flex-col lg:hidden w-full items-center mb-[40.0rem] z-[2] mt-[24.4rem]"
      >
        <div className="text-[8.6rem] text-neutral-g font-CoolveticaCondReg ">
          ArachnoVa{" "}
        </div>

        <div className="text-neutral-g items-center justify-center font-SourceSansProBold text-[2.0rem]/[6.0rem]">
          <div className="text-[7.0rem] mx-[5.0rem]   ">Your Web Design Partner</div>
          <div className="overflow-clip  flex items-center justify-center h-[9.8rem] gap-[2.0rem]  leading-none">
            <div className="text-[9.8rem]">Always</div>
            <div className="flex-col gap-[4.0rem] text-[9.8rem] gap-y-[2.0rem] ">
              <div className=" animate-swap_words ">Delivered</div>
              <div className=" animate-swap_words">Distinctive</div>
			  <div className=" animate-swap_words ">Dependable</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-[5.0rem]/[5.0rem] pt-[4.0rem] text-neutral-e font-SourceSansProSemibold ">
          <div className="">Crafting Digital Presence in Every</div>
          <div className="">Strand of Code</div>
        </div>

        <a
          href="https://wa.me/6287882832538"
          className="w-[80.0rem] h-[8.0rem] mt-[4.0rem] my-[2.5rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md text-[3.0rem] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out "
        >
          Start Your Project
        </a>
        <a href="/services" className="w-[80.0rem] h-[8.0rem] bg-transparent mb-[2.5rem] rounded-md text-[3.0rem] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
            Discover Our Services
          </div>
        </a>

        <div className="bg-white opacity-90 w-[80.0rem] h-[60.0rem] rounded-lg border-2 border-[#F1F5F9]  relative font-ConsolasRegular ">
          <div className="absolute w-[60.0rem] h-[13.0rem]  bg-white opacity-90 rounded-md -bottom-[6.0rem] -right-[4.0rem] text-[3.0rem] border-2 border-border font-ConsolasBold  ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[10.0rem] h-[3.0rem] top-[0.9rem] left-[0.7rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex items-center text-[2.6rem] gap-x-[0.06rem] pt-[5.0rem] whitespace-nowrap ml-[2.0rem]">
              <TerminalTyper speed={80} startDelay={300} />
            </div>
          </div>
          <div className="px-[1.0rem] py-[4.0rem] text-[3.0rem]/[4.0rem] relative ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[8.0rem] h-[3.0rem] top-[0.5rem] left-[0.7rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={100} className="min-h-[40.0rem]" onDone={() => setCodeDone(true)} />
          </div>
        </div>
      </div>
    </section>
  );
}
