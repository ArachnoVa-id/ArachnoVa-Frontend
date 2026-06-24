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
      <div className="text-black flex gap-x-[11.52rem] max-lg:hidden z-[2]">
        <div className="flex flex-col justify-center scale-[1.2]">
          <div className="text-[2.3rem] text-neutral-g font-CoolveticaCondReg ">
            ArachnoVa{" "}
          </div>
          <div className="text-neutral-g font-SourceSansProBold text-[2.88rem]/[0.59rem]">
            <div className="text-[2.88rem] ">Your Web Design Partner</div>
            <div className="overflow-clip  flex items-center justify-center h-[4.32rem] gap-[0.72rem] leading-none">
              <div className="text-[4.03rem]">Always</div>
              <div className="flex-col items-center justify-center  gap-[5.76rem] h-full w-full -translate-y-full  ">
                <div className="text-[4.03rem] animate-swap_words pt-[0.29rem]">
                  Delivered
                </div>
                <div className="text-[4.03rem] animate-swap_words pt-[0.14rem]">
                  Distinctive
                </div>
                <div className="text-[4.03rem] animate-swap_words ">
                  Dependable
                </div>
              </div>
            </div>
          </div>
          <div className="text-[1.44rem] text-neutral-e pt-[1.58rem] font-SourceSansProSemibold ">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div className="py-[2vh] flex gap-[1.44rem]">
            <a
              href="https://wa.me/6287882832538"
              className="aspect-[167/46] w-[12.53rem] rounded-[0.58rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white text-[1.15rem] flex justify-center items-center hover:translate-y-[-1px] transition-all duration-500 ease-in-out "
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="aspect-[197/48] w-[14.77rem] rounded-[0.58rem] bg-transparent text-[1.15rem] flex justify-center items-center hover:translate-y-[-1px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] "
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
                Discover Our Services
              </div>
            </a>
          </div>
        </div>

        <div className="aspect-[537/366] w-[40.28rem] border-2 border-[#F1F5F9] rounded-[0.9rem]  relative font-ConsolasRegular ">
          <div className="bg-white opacity-60 w-full h-full absolute rounded-[0.9rem] backdrop-blur-3xl"></div>
          <div
            className="absolute aspect-[419/96] w-[31.43rem] bg-white opacity-90 rounded-[0.9rem] -bottom-[4.32rem] -right-[5.76rem] text-[1.44rem]  flex items-center border-2 border-border font-ConsolasBold"
            data-aos="fade-left"
          >
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[4.32rem] h-[1.44rem] top-[0.58rem] left-[1.01rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex gap-x-[0.14rem] pt-[1.44rem] whitespace-nowrap ml-[1.15rem]">
              <TerminalTyper speed={60} />
            </div>
          </div>
          <div className="px-[1.44rem] py-[2.88rem] text-[1.51rem]/[0.27rem] relative">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[4.32rem] h-[1.44rem] top-[0.72rem] left-[1.01rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={70} className="min-h-[18.72rem]" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        data-aos="fade-up"
        className="flex flex-col lg:hidden w-full items-center mb-[50rem] z-[2] mt-[35.1rem]"
      >
        <div className="text-[8rem] text-neutral-g font-CoolveticaCondReg ">
          ArachnoVa{" "}
        </div>

        <div className="text-neutral-g items-center justify-center font-SourceSansProBold text-[2.88rem]/[1.41rem]">
          <div className="text-[8rem] mx-[7.2rem]   ">Your Web Design Partner</div>
          <div className="overflow-clip  flex items-center justify-center h-[14.11rem] gap-[2.88rem]  leading-none">
            <div className="text-[8rem]">Always</div>
            <div className="flex-col gap-[5.76rem] text-[8rem] gap-y-[2.88rem] ">
              <div className=" animate-swap_words ">Delivered</div>
              <div className=" animate-swap_words">Distinctive</div>
			  <div className=" animate-swap_words ">Dependable</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-[7.2rem]/[1.17rem] pt-[5.76rem] text-neutral-e font-SourceSansProSemibold ">
          <div className="">Crafting Digital Presence in Every</div>
          <div className="">Strand of Code</div>
        </div>

        <a
          href="https://wa.me/6287882832538"
          className="w-[50rem] h-[11.52rem] mt-[5.76rem] my-[3.6rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md text-[4.32rem] flex justify-center items-center hover:translate-y-[-1px] transition-all duration-500 ease-in-out "
        >
          Start Your Project
        </a>
        <a href="/services" className="w-[50rem] h-[11.52rem] bg-transparent mb-[3.6rem] rounded-md text-[4.32rem] flex justify-center items-center hover:translate-y-[-1px] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
            Discover Our Services
          </div>
        </a>

        <div className="bg-white opacity-90 w-[50rem] h-[50rem] rounded-lg border-2 border-[#F1F5F9]  relative font-ConsolasRegular ">
          <div className="absolute w-[50rem] h-[18.72rem]  bg-white opacity-90 rounded-md -bottom-[8.64rem] -right-[5.76rem] text-[4.32rem] border-2 border-border font-ConsolasBold  ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[14.4rem] h-[4.32rem] top-[1.3rem] left-[1.01rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex items-center text-[3.74rem] gap-x-[0.012rem] pt-[7.2rem] whitespace-nowrap ml-[2.88rem]">
              <TerminalTyper speed={80} />
            </div>
          </div>
          <div className="px-[1.44rem] py-[5.76rem] text-[4.32rem]/[0.94rem] relative ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[11.52rem] h-[4.32rem] top-[0.72rem] left-[1.01rem] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={100} className="min-h-[50rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
