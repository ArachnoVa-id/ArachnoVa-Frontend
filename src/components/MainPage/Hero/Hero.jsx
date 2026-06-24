import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CodeTyper from "@/components/ui/CodeTyper";
import TerminalTyper from "@/components/ui/TerminalTyper";
import WebPattern from "@/components/ui/WebPattern";

export default function Hero() {
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
      <div className="text-black flex gap-x-[4.5rem] max-lg:hidden z-[2]">
        <div className="flex flex-col justify-center scale-[1.2]">
          <div className="text-[0.9rem] text-neutral-g font-CoolveticaCondReg ">
            ArachnoVa{" "}
          </div>
          <div className="text-neutral-g font-SourceSansProBold text-[1.12rem]/[1.41rem]">
            <div className="text-[1.12rem] ">Your Web Design Partner</div>
            <div className="overflow-clip  flex items-center justify-center h-[1.69rem] gap-[0.28rem] leading-none">
              <div className="text-[1.58rem]">Always</div>
              <div className="flex-col items-center justify-center  gap-[2.2rem] h-full w-full -translate-y-full  ">
                <div className="text-[1.58rem] animate-swap_words pt-[0.11rem]">
                  Delivered
                </div>
                <div className="text-[1.58rem] animate-swap_words pt-[0.06rem]">
                  Distinctive
                </div>
                <div className="text-[1.58rem] animate-swap_words ">
                  Dependable
                </div>
              </div>
            </div>
          </div>
          <div className="text-[0.56rem] text-neutral-e pt-[0.62rem] font-SourceSansProSemibold ">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div className="py-[2vh] flex gap-[0.56rem]">
            <a
              href="https://wa.me/6287882832538"
              className="aspect-[167/46] w-[4.9rem] rounded-[0.22rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white text-[0.45rem] flex justify-center items-center hover:translate-y-[-2px] transition-all duration-500 ease-in-out "
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="aspect-[197/48] w-[5.8rem] rounded-[0.22rem] bg-transparent text-[0.45rem] flex justify-center items-center hover:translate-y-[-2px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] "
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
                Discover Our Services
              </div>
            </a>
          </div>
        </div>

        <div className="aspect-[537/366] w-[15.7rem] border-2 border-[#F1F5F9] rounded-[0.35rem]  relative font-ConsolasRegular ">
          <div className="bg-white opacity-60 w-full h-full absolute rounded-[0.35rem] backdrop-blur-3xl"></div>
          <div
            className="absolute aspect-[419/96] w-[12.3rem] bg-white opacity-90 rounded-[0.35rem] -bottom-[1.69rem] -right-[2.2rem] text-[0.56rem]  flex items-center border-2 border-border font-ConsolasBold"
            data-aos="fade-left"
          >
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[1.69rem] h-[0.56rem] top-[0.22rem] left-[0.39rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex gap-x-[0.06rem] pt-[0.56rem] whitespace-nowrap ml-[0.45rem]">
              <TerminalTyper speed={60} />
            </div>
          </div>
          <div className="px-[0.56rem] py-[1.12rem] text-[0.59rem]/[0.65rem] relative">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[1.69rem] h-[0.56rem] top-[0.28rem] left-[0.39rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={70} className="min-h-[7.3rem]" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        data-aos="fade-up"
        className="flex flex-col lg:hidden w-full items-center mb-[22.5rem] z-[2] mt-[13.7rem]"
      >
        <div className="text-[4.8rem] text-neutral-g font-CoolveticaCondReg ">
          ArachnoVa{" "}
        </div>

        <div className="text-neutral-g items-center justify-center font-SourceSansProBold text-[1.12rem]/[3.4rem]">
          <div className="text-[3.9rem] mx-[2.8rem]   ">Your Web Design Partner</div>
          <div className="overflow-clip  flex items-center justify-center h-[5.5rem] gap-[1.12rem]  leading-none">
            <div className="text-[5.5rem]">Always</div>
            <div className="flex-col gap-[2.2rem] text-[5.5rem] gap-y-[1.12rem] ">
              <div className=" animate-swap_words ">Delivered</div>
              <div className=" animate-swap_words">Distinctive</div>
			  <div className=" animate-swap_words ">Dependable</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-[2.8rem]/[2.8rem] pt-[2.2rem] text-neutral-e font-SourceSansProSemibold ">
          <div className="">Crafting Digital Presence in Every</div>
          <div className="">Strand of Code</div>
        </div>

        <a
          href="https://wa.me/6287882832538"
          className="w-[45.0rem] h-[4.5rem] mt-[2.2rem] my-[1.41rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md text-[1.69rem] flex justify-center items-center hover:translate-y-[-2px] transition-all duration-500 ease-in-out "
        >
          Start Your Project
        </a>
        <a href="/services" className="w-[45.0rem] h-[4.5rem] bg-transparent mb-[1.41rem] rounded-md text-[1.69rem] flex justify-center items-center hover:translate-y-[-2px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
            Discover Our Services
          </div>
        </a>

        <div className="bg-white opacity-90 w-[45.0rem] h-[33.8rem] rounded-lg border-2 border-[#F1F5F9]  relative font-ConsolasRegular ">
          <div className="absolute w-[33.8rem] h-[7.3rem]  bg-white opacity-90 rounded-md -bottom-[3.4rem] -right-[2.2rem] text-[1.69rem] border-2 border-border font-ConsolasBold  ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[5.6rem] h-[1.69rem] top-[0.51rem] left-[0.39rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex items-center text-[1.46rem] gap-x-[0.028rem] pt-[2.8rem] whitespace-nowrap ml-[1.12rem]">
              <TerminalTyper speed={80} />
            </div>
          </div>
          <div className="px-[0.56rem] py-[2.2rem] text-[1.69rem]/[2.2rem] relative ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[4.5rem] h-[1.69rem] top-[0.28rem] left-[0.39rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={100} className="min-h-[22.5rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
