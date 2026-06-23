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
    <section className="w-full min-h-screen relative bg-page overflow-hidden flex flex-row justify-center items-center">
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
      <div className="text-black flex gap-x-[8vw] max-lg:hidden z-[2]">
        <div className="flex flex-col justify-center scale-[1.2]">
          <div className="text-[1.6vw] text-ink font-CoolveticaCondReg ">
            ArachnoVa{" "}
          </div>
          <div className="text-ink font-SourceSansProBold text-[2vw]/[2.5vw]">
            <div className="text-[2vw] ">Your Web Design Partner</div>
            <div className="overflow-clip  flex items-center justify-center h-[3.0vw] gap-[0.5vw] leading-none">
              <div className="text-[2.8vw]">Always</div>
              <div className="flex-col items-center justify-center  gap-[4vw] h-full w-full -translate-y-full  ">
                <div className="text-[2.8vw] animate-swap_words pt-[0.2vw]">
                  Delivered
                </div>
                <div className="text-[2.8vw] animate-swap_words pt-[0.1vw]">
                  Distinctive
                </div>
                <div className="text-[2.8vw] animate-swap_words ">
                  Dependable
                </div>
              </div>
            </div>
          </div>
          <div className="text-[1vw] text-inkLight pt-[1.1vw] font-SourceSansProSemibold ">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div className="py-[2vh] flex gap-[1vw]">
            <a
              href="https://wa.me/6287882832538"
              className="aspect-[167/46] w-[8.698vw] rounded-[0.4vw] bg-gradient-to-r from-teal to-tealDark font-InterBold text-white text-[0.8vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out "
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="aspect-[197/48] w-[10.26vw] rounded-[0.4vw] bg-transparent text-[0.8vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] "
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#0891B2] to-tealDark font-InterBold">
                Discover Our Services
              </div>
            </a>
          </div>
        </div>

        <div className="aspect-[537/366] w-[27.969vw] border-2 border-[#F1F5F9] rounded-[0.625vw]  relative font-ConsolasRegular ">
          <div className="bg-white opacity-60 w-full h-full absolute rounded-[0.625vw] backdrop-blur-3xl"></div>
          <div
            className="absolute aspect-[419/96] w-[21.823vw] bg-white opacity-90 rounded-[0.625vw] -bottom-[3vw] -right-[4vw] text-[1vw]  flex items-center border-2 border-border font-ConsolasBold"
            data-aos="fade-left"
          >
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[3vw] h-[1vw] top-[0.4vw] left-[0.7vw] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex gap-x-[0.1vw] pt-[1vw] whitespace-nowrap ml-[0.8vw]">
              <TerminalTyper speed={60} />
            </div>
          </div>
          <div className="px-[1vw] py-[2vw] text-[1.05vw]/[1.15vw] relative">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[3vw] h-[1vw] top-[0.5vw] left-[0.7vw] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={70} className="min-h-[13vw]" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        data-aos="fade-up"
        className="flex flex-col lg:hidden w-full items-center mb-[40vw] z-[2] mt-[24.372vw]"
      >
        <div className="text-[8.6vw] text-ink font-CoolveticaCondReg ">
          ArachnoVa{" "}
        </div>

        <div className="text-ink items-center justify-center font-SourceSansProBold text-[2vw]/[6vw]">
          <div className="text-[7vw] mx-[5vw]   ">Your Web Design Partner</div>
          <div className="overflow-clip  flex items-center justify-center h-[9.8vw] gap-[2vw]  leading-none">
            <div className="text-[9.8vw]">Always</div>
            <div className="flex-col gap-[4vw] text-[9.8vw] gap-y-[2vw] ">
              <div className=" animate-swap_words ">Delivered</div>
              <div className=" animate-swap_words">Distinctive</div>
			  <div className=" animate-swap_words ">Dependable</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-[5vw]/[5vw] pt-[4vw] text-inkLight font-SourceSansProSemibold ">
          <div className="">Crafting Digital Presence in Every</div>
          <div className="">Strand of Code</div>
        </div>

        <a
          href="https://wa.me/6287882832538"
          className="w-[80vw] h-[8vw] mt-[4vw] my-[2.5vw] bg-gradient-to-r from-teal to-tealDark font-InterBold text-white rounded-md text-[3vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out "
        >
          Start Your Project
        </a>
        <a href="/services" className="w-[80vw] h-[8vw] bg-transparent mb-[2.5vw] rounded-md text-[3vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#0891B2] to-tealDark font-InterBold">
            Discover Our Services
          </div>
        </a>

        <div className="bg-white opacity-90 w-[80vw] h-[60vw] rounded-lg border-2 border-[#F1F5F9]  relative font-ConsolasRegular ">
          <div className="absolute w-[60vw] h-[13vw]  bg-white opacity-90 rounded-md -bottom-[6vw] -right-[4vw] text-[3vw] border-2 border-border font-ConsolasBold  ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[10vw] h-[3vw] top-[0.9vw] left-[0.7vw] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex items-center text-[2.6vw] gap-x-[.05vw] pt-[5vw] whitespace-nowrap ml-[2vw]">
              <TerminalTyper speed={80} />
            </div>
          </div>
          <div className="px-[1vw] py-[4vw] text-[3vw]/[4vw] relative ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[8vw] h-[3vw] top-[0.5vw] left-[0.7vw] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={100} className="min-h-[40vw]" />
          </div>
        </div>
      </div>
    </section>
  );
}
