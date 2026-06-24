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
      <div className="text-black flex gap-x-[7.0rem] max-lg:hidden z-[2]">
        <div className="flex flex-col justify-center scale-[1.2]">
          <div className="text-[1.4rem] text-neutral-g font-CoolveticaCondReg ">
            ArachnoVa{" "}
          </div>
          <div className="text-neutral-g font-SourceSansProBold text-[1.75rem]/[2.2rem]">
            <div className="text-[1.75rem] ">Your Web Design Partner</div>
            <div className="overflow-clip  flex items-center justify-center h-[2.6rem] gap-[0.44rem] leading-none">
              <div className="text-[2.4rem]">Always</div>
              <div className="flex-col items-center justify-center  gap-[3.5rem] h-full w-full -translate-y-full  ">
                <div className="text-[2.4rem] animate-swap_words pt-[0.18rem]">
                  Delivered
                </div>
                <div className="text-[2.4rem] animate-swap_words pt-[0.09rem]">
                  Distinctive
                </div>
                <div className="text-[2.4rem] animate-swap_words ">
                  Dependable
                </div>
              </div>
            </div>
          </div>
          <div className="text-[0.88rem] text-neutral-e pt-[0.96rem] font-SourceSansProSemibold ">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div className="py-[2vh] flex gap-[0.88rem]">
            <a
              href="https://wa.me/6287882832538"
              className="aspect-[167/46] w-[7.6rem] rounded-[0.35rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white text-[0.7rem] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out "
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="aspect-[197/48] w-[9.0rem] rounded-[0.35rem] bg-transparent text-[0.7rem] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] "
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
                Discover Our Services
              </div>
            </a>
          </div>
        </div>

        <div className="aspect-[537/366] w-[24.5rem] border-2 border-[#F1F5F9] rounded-[0.55rem]  relative font-ConsolasRegular ">
          <div className="bg-white opacity-60 w-full h-full absolute rounded-[0.55rem] backdrop-blur-3xl"></div>
          <div
            className="absolute aspect-[419/96] w-[19.1rem] bg-white opacity-90 rounded-[0.55rem] -bottom-[2.6rem] -right-[3.5rem] text-[0.88rem]  flex items-center border-2 border-border font-ConsolasBold"
            data-aos="fade-left"
          >
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[2.6rem] h-[0.88rem] top-[0.35rem] left-[0.61rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex gap-x-[0.09rem] pt-[0.88rem] whitespace-nowrap ml-[0.7rem]">
              <TerminalTyper speed={60} />
            </div>
          </div>
          <div className="px-[0.88rem] py-[1.75rem] text-[0.92rem]/[1.01rem] relative">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[2.6rem] h-[0.88rem] top-[0.44rem] left-[0.61rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={70} className="min-h-[11.4rem]" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        data-aos="fade-up"
        className="flex flex-col lg:hidden w-full items-center mb-[35.0rem] z-[2] mt-[21.3rem]"
      >
        <div className="text-[7.5rem] text-neutral-g font-CoolveticaCondReg ">
          ArachnoVa{" "}
        </div>

        <div className="text-neutral-g items-center justify-center font-SourceSansProBold text-[1.75rem]/[5.2rem]">
          <div className="text-[6.1rem] mx-[4.4rem]   ">Your Web Design Partner</div>
          <div className="overflow-clip  flex items-center justify-center h-[8.6rem] gap-[1.75rem]  leading-none">
            <div className="text-[8.6rem]">Always</div>
            <div className="flex-col gap-[3.5rem] text-[8.6rem] gap-y-[1.75rem] ">
              <div className=" animate-swap_words ">Delivered</div>
              <div className=" animate-swap_words">Distinctive</div>
			  <div className=" animate-swap_words ">Dependable</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-[4.4rem]/[4.4rem] pt-[3.5rem] text-neutral-e font-SourceSansProSemibold ">
          <div className="">Crafting Digital Presence in Every</div>
          <div className="">Strand of Code</div>
        </div>

        <a
          href="https://wa.me/6287882832538"
          className="w-[70.0rem] h-[7.0rem] mt-[3.5rem] my-[2.2rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md text-[2.6rem] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out "
        >
          Start Your Project
        </a>
        <a href="/services" className="w-[70.0rem] h-[7.0rem] bg-transparent mb-[2.2rem] rounded-md text-[2.6rem] flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
            Discover Our Services
          </div>
        </a>

        <div className="bg-white opacity-90 w-[70.0rem] h-[52.5rem] rounded-lg border-2 border-[#F1F5F9]  relative font-ConsolasRegular ">
          <div className="absolute w-[52.5rem] h-[11.4rem]  bg-white opacity-90 rounded-md -bottom-[5.2rem] -right-[3.5rem] text-[2.6rem] border-2 border-border font-ConsolasBold  ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[8.8rem] h-[2.6rem] top-[0.79rem] left-[0.61rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex items-center text-[2.3rem] gap-x-[0.044rem] pt-[4.4rem] whitespace-nowrap ml-[1.75rem]">
              <TerminalTyper speed={80} />
            </div>
          </div>
          <div className="px-[0.88rem] py-[3.5rem] text-[2.6rem]/[3.5rem] relative ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[7.0rem] h-[2.6rem] top-[0.44rem] left-[0.61rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={100} className="min-h-[35.0rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
