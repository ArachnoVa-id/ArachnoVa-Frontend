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
      <div className="text-black flex gap-x-[1.28rem] max-lg:hidden z-[2]">
        <div className="flex flex-col justify-center scale-[1.2]">
          <div className="text-[0.5rem] text-neutral-g font-CoolveticaCondReg ">
            ArachnoVa{" "}
          </div>
          <div className="text-neutral-g font-SourceSansProBold text-[0.5rem]/[0.66rem]">
            <div className="text-[0.5rem] ">Your Web Design Partner</div>
            <div className="overflow-clip  flex items-center justify-center h-[0.48rem] gap-[0.2rem] leading-none">
              <div className="text-[0.5rem]">Always</div>
              <div className="flex-col items-center justify-center  gap-[0.64rem] h-full w-full -translate-y-full  ">
                <div className="text-[0.5rem] animate-swap_words pt-[0.2rem]">
                  Delivered
                </div>
                <div className="text-[0.5rem] animate-swap_words pt-[0.2rem]">
                  Distinctive
                </div>
                <div className="text-[0.5rem] animate-swap_words ">
                  Dependable
                </div>
              </div>
            </div>
          </div>
          <div className="text-[0.5rem] text-neutral-e pt-[0.2rem] font-SourceSansProSemibold ">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div className="py-[2vh] flex gap-[0.2rem]">
            <a
              href="https://wa.me/6287882832538"
              className="aspect-[167/46] w-[1.39rem] rounded-[0.2rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white text-[0.5rem] flex justify-center items-center hover:translate-y-[-1px] transition-all duration-500 ease-in-out "
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="aspect-[197/48] w-[1.64rem] rounded-[0.2rem] bg-transparent text-[0.5rem] flex justify-center items-center hover:translate-y-[-1px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] "
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
                Discover Our Services
              </div>
            </a>
          </div>
        </div>

        <div className="aspect-[537/366] w-[4.48rem] border-2 border-[#F1F5F9] rounded-[0.2rem]  relative font-ConsolasRegular ">
          <div className="bg-white opacity-60 w-full h-full absolute rounded-[0.2rem] backdrop-blur-3xl"></div>
          <div
            className="absolute aspect-[419/96] w-[3.49rem] bg-white opacity-90 rounded-[0.2rem] -bottom-[0.48rem] -right-[0.64rem] text-[0.5rem]  flex items-center border-2 border-border font-ConsolasBold"
            data-aos="fade-left"
          >
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[0.48rem] h-[0.2rem] top-[0.2rem] left-[0.2rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex gap-x-[0.2rem] pt-[0.2rem] whitespace-nowrap ml-[0.2rem]">
              <TerminalTyper speed={60} />
            </div>
          </div>
          <div className="px-[0.2rem] py-[0.32rem] text-[0.5rem]/[0.3rem] relative">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[0.48rem] h-[0.2rem] top-[0.2rem] left-[0.2rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={70} className="min-h-[2.08rem]" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        data-aos="fade-up"
        className="flex flex-col lg:hidden w-full items-center mb-[6.4rem] z-[2] mt-[3.9rem]"
      >
        <div className="text-[1.38rem] text-neutral-g font-CoolveticaCondReg ">
          ArachnoVa{" "}
        </div>

        <div className="text-neutral-g items-center justify-center font-SourceSansProBold text-[0.5rem]/[1.58rem]">
          <div className="text-[1.12rem] mx-[0.8rem]   ">Your Web Design Partner</div>
          <div className="overflow-clip  flex items-center justify-center h-[1.57rem] gap-[0.32rem]  leading-none">
            <div className="text-[1.57rem]">Always</div>
            <div className="flex-col gap-[0.64rem] text-[1.57rem] gap-y-[0.32rem] ">
              <div className=" animate-swap_words ">Delivered</div>
              <div className=" animate-swap_words">Distinctive</div>
			  <div className=" animate-swap_words ">Dependable</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-[0.8rem]/[1.31rem] pt-[0.64rem] text-neutral-e font-SourceSansProSemibold ">
          <div className="">Crafting Digital Presence in Every</div>
          <div className="">Strand of Code</div>
        </div>

        <a
          href="https://wa.me/6287882832538"
          className="w-[12.8rem] h-[1.28rem] mt-[0.64rem] my-[0.4rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md text-[0.5rem] flex justify-center items-center hover:translate-y-[-1px] transition-all duration-500 ease-in-out "
        >
          Start Your Project
        </a>
        <a href="/services" className="w-[12.8rem] h-[1.28rem] bg-transparent mb-[0.4rem] rounded-md text-[0.5rem] flex justify-center items-center hover:translate-y-[-1px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
            Discover Our Services
          </div>
        </a>

        <div className="bg-white opacity-90 w-[12.8rem] h-[9.6rem] rounded-lg border-2 border-[#F1F5F9]  relative font-ConsolasRegular ">
          <div className="absolute w-[9.6rem] h-[2.08rem]  bg-white opacity-90 rounded-md -bottom-[0.96rem] -right-[0.64rem] text-[0.5rem] border-2 border-border font-ConsolasBold  ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[1.6rem] h-[0.48rem] top-[0.2rem] left-[0.2rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex items-center text-[0.5rem] gap-x-[0.013rem] pt-[0.8rem] whitespace-nowrap ml-[0.32rem]">
              <TerminalTyper speed={80} />
            </div>
          </div>
          <div className="px-[0.2rem] py-[0.64rem] text-[0.5rem]/[1.05rem] relative ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[1.28rem] h-[0.48rem] top-[0.2rem] left-[0.2rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={100} className="min-h-[6.4rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
