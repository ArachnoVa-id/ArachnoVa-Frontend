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
      <div className="text-black flex gap-x-[clamp(1.28rem,8.0vw,11.52rem)] max-lg:hidden z-[2]">
        <div className="flex flex-col justify-center scale-[1.2]">
          <div className="text-[clamp(0.5rem,1.6vw,2.3rem)] text-neutral-g font-CoolveticaCondReg ">
            ArachnoVa{" "}
          </div>
          <div className="text-neutral-g font-SourceSansProBold text-[clamp(0.5rem,2.0vw,2.88rem)]/[2.5vw]">
            <div className="text-[clamp(0.5rem,2.0vw,2.88rem)] ">Your Web Design Partner</div>
            <div className="overflow-clip  flex items-center justify-center h-[clamp(0.48rem,3.0vw,4.32rem)] gap-[clamp(0.2rem,0.5vw,0.72rem)] leading-none">
              <div className="text-[clamp(0.5rem,2.8vw,4.03rem)]">Always</div>
              <div className="flex-col items-center justify-center  gap-[clamp(0.64rem,4.0vw,5.76rem)] h-full w-full -translate-y-full  ">
                <div className="text-[clamp(0.5rem,2.8vw,4.03rem)] animate-swap_words pt-[clamp(0.2rem,0.2vw,0.29rem)]">
                  Delivered
                </div>
                <div className="text-[clamp(0.5rem,2.8vw,4.03rem)] animate-swap_words pt-[clamp(0.2rem,0.1vw,0.14rem)]">
                  Distinctive
                </div>
                <div className="text-[clamp(0.5rem,2.8vw,4.03rem)] animate-swap_words ">
                  Dependable
                </div>
              </div>
            </div>
          </div>
          <div className="text-[clamp(0.5rem,1.0vw,1.44rem)] text-neutral-e pt-[clamp(0.2rem,1.1vw,1.58rem)] font-SourceSansProSemibold ">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div className="py-[2vh] flex gap-[clamp(0.2rem,1.0vw,1.44rem)]">
            <a
              href="https://wa.me/6287882832538"
              className="aspect-[167/46] w-[clamp(1.39rem,8.698vw,12.53rem)] rounded-[clamp(0.2rem,0.4vw,0.58rem)] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white text-[clamp(0.5rem,0.8vw,1.15rem)] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out "
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="aspect-[197/48] w-[clamp(1.64rem,10.26vw,14.77rem)] rounded-[clamp(0.2rem,0.4vw,0.58rem)] bg-transparent text-[clamp(0.5rem,0.8vw,1.15rem)] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] "
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
                Discover Our Services
              </div>
            </a>
          </div>
        </div>

        <div className="aspect-[537/366] w-[clamp(4.48rem,27.969vw,40.28rem)] border-2 border-[#F1F5F9] rounded-[clamp(0.2rem,0.625vw,0.9rem)]  relative font-ConsolasRegular ">
          <div className="bg-white opacity-60 w-full h-full absolute rounded-[clamp(0.2rem,0.625vw,0.9rem)] backdrop-blur-3xl"></div>
          <div
            className="absolute aspect-[419/96] w-[clamp(3.49rem,21.823vw,31.43rem)] bg-white opacity-90 rounded-[clamp(0.2rem,0.625vw,0.9rem)] -bottom-[clamp(0.48rem,3.0vw,4.32rem)] -right-[clamp(0.64rem,4.0vw,5.76rem)] text-[clamp(0.5rem,1.0vw,1.44rem)]  flex items-center border-2 border-border font-ConsolasBold"
            data-aos="fade-left"
          >
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[clamp(0.48rem,3.0vw,4.32rem)] h-[clamp(0.2rem,1.0vw,1.44rem)] top-[clamp(0.2rem,0.4vw,0.58rem)] left-[clamp(0.2rem,0.7vw,1.01rem)] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex gap-x-[clamp(0.2rem,0.1vw,0.14rem)] pt-[clamp(0.2rem,1.0vw,1.44rem)] whitespace-nowrap ml-[clamp(0.2rem,0.8vw,1.15rem)]">
              <TerminalTyper speed={60} />
            </div>
          </div>
          <div className="px-[clamp(0.2rem,1.0vw,1.44rem)] py-[clamp(0.32rem,2.0vw,2.88rem)] text-[clamp(0.5rem,1.05vw,1.51rem)]/[1.15vw] relative">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[clamp(0.48rem,3.0vw,4.32rem)] h-[clamp(0.2rem,1.0vw,1.44rem)] top-[clamp(0.2rem,0.5vw,0.72rem)] left-[clamp(0.2rem,0.7vw,1.01rem)] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={70} className="min-h-[clamp(2.08rem,13.0vw,18.72rem)]" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        data-aos="fade-up"
        className="flex flex-col lg:hidden w-full items-center mb-[clamp(6.4rem,40.0vw,50rem)] z-[2] mt-[clamp(3.9rem,24.372vw,35.1rem)]"
      >
        <div className="text-[clamp(1.38rem,8.6vw,8rem)] text-neutral-g font-CoolveticaCondReg ">
          ArachnoVa{" "}
        </div>

        <div className="text-neutral-g items-center justify-center font-SourceSansProBold text-[clamp(0.5rem,2.0vw,2.88rem)]/[6vw]">
          <div className="text-[clamp(1.12rem,7.0vw,8rem)] mx-[clamp(0.8rem,5.0vw,7.2rem)]   ">Your Web Design Partner</div>
          <div className="overflow-clip  flex items-center justify-center h-[clamp(1.57rem,9.8vw,14.11rem)] gap-[clamp(0.32rem,2.0vw,2.88rem)]  leading-none">
            <div className="text-[clamp(1.57rem,9.8vw,8rem)]">Always</div>
            <div className="flex-col gap-[clamp(0.64rem,4.0vw,5.76rem)] text-[clamp(1.57rem,9.8vw,8rem)] gap-y-[clamp(0.32rem,2.0vw,2.88rem)] ">
              <div className=" animate-swap_words ">Delivered</div>
              <div className=" animate-swap_words">Distinctive</div>
			  <div className=" animate-swap_words ">Dependable</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-[clamp(0.8rem,5.0vw,7.2rem)]/[5vw] pt-[clamp(0.64rem,4.0vw,5.76rem)] text-neutral-e font-SourceSansProSemibold ">
          <div className="">Crafting Digital Presence in Every</div>
          <div className="">Strand of Code</div>
        </div>

        <a
          href="https://wa.me/6287882832538"
          className="w-[clamp(12.8rem,80.0vw,50rem)] h-[clamp(1.28rem,8.0vw,11.52rem)] mt-[clamp(0.64rem,4.0vw,5.76rem)] my-[clamp(0.4rem,2.5vw,3.6rem)] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md text-[clamp(0.5rem,3.0vw,4.32rem)] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out "
        >
          Start Your Project
        </a>
        <a href="/services" className="w-[clamp(12.8rem,80.0vw,50rem)] h-[clamp(1.28rem,8.0vw,11.52rem)] bg-transparent mb-[clamp(0.4rem,2.5vw,3.6rem)] rounded-md text-[clamp(0.5rem,3.0vw,4.32rem)] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold">
            Discover Our Services
          </div>
        </a>

        <div className="bg-white opacity-90 w-[clamp(12.8rem,80.0vw,50rem)] h-[clamp(9.6rem,60.0vw,50rem)] rounded-lg border-2 border-[#F1F5F9]  relative font-ConsolasRegular ">
          <div className="absolute w-[clamp(9.6rem,60.0vw,50rem)] h-[clamp(2.08rem,13.0vw,18.72rem)]  bg-white opacity-90 rounded-md -bottom-[clamp(0.96rem,6.0vw,8.64rem)] -right-[clamp(0.64rem,4.0vw,5.76rem)] text-[clamp(0.5rem,3.0vw,4.32rem)] border-2 border-border font-ConsolasBold  ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[clamp(1.6rem,10.0vw,14.4rem)] h-[clamp(0.48rem,3.0vw,4.32rem)] top-[clamp(0.2rem,0.9vw,1.3rem)] left-[clamp(0.2rem,0.7vw,1.01rem)] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex items-center text-[clamp(0.5rem,2.6vw,3.74rem)] gap-x-[.05vw] pt-[clamp(0.8rem,5.0vw,7.2rem)] whitespace-nowrap ml-[clamp(0.32rem,2.0vw,2.88rem)]">
              <TerminalTyper speed={80} />
            </div>
          </div>
          <div className="px-[clamp(0.2rem,1.0vw,1.44rem)] py-[clamp(0.64rem,4.0vw,5.76rem)] text-[clamp(0.5rem,3.0vw,4.32rem)]/[4vw] relative ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[clamp(1.28rem,8.0vw,11.52rem)] h-[clamp(0.48rem,3.0vw,4.32rem)] top-[clamp(0.2rem,0.5vw,0.72rem)] left-[clamp(0.2rem,0.7vw,1.01rem)] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <CodeTyper speed={100} className="min-h-[clamp(6.4rem,40.0vw,50rem)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
