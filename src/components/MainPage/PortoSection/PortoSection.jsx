import BorderSeparator from "../BorderSeparator/BorderSeparator";
import styles from "./PortoSection.module.css";
import { FaArrowRight } from "react-icons/fa";
import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortoSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <section className="w-full lg:aspect-[1920/1312] max-lg:aspect-[430/1101] relative  flex flex-row justify-center items-center bg-white-MainPage gap-y-[clamp(0.33rem,2.083vw,3.0rem)]">
      {/* Desktop */}
      <div className="flex flex-col justify-center items-center max-lg:hidden">
        <div className="text-neutral-g text-[clamp(0.5rem,2.3vw,3.31rem)] font-SourceSansProBold flex justify-center ">
          Our Work in Action
        </div>
        <div
          data-aos="fade-up"
          className="text-neutral-e w-[clamp(9.28rem,58.0vw,50rem)] text-center text-[clamp(0.5rem,1.0vw,1.44rem)] font-SourceSansProSemibold mt-[clamp(0.2rem,0.75vw,1.08rem)] mb-[clamp(0.33rem,2.083vw,3.0rem)] "
        >
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek
          Frontend, Backend, dan desain UI. Kami dengan bangga mempersembahkan
          beberapa karya kami sebagai gambaran representatif. Berikut merupakan
          website terbaru karya kami, serta jelajahi lebih lanjut portofolio
          yang kami miliki.
        </div>
        <div data-aos="fade-up" className="relative mr-[clamp(1.6rem,10.0vw,14.4rem)]">
          <div className="bg-border p-[clamp(0.2rem,0.2vw,0.29rem)] rounded-[clamp(0.2rem,0.781vw,1.12rem)] group">
            <div className="aspect-[1008/588] w-[clamp(8.4rem,52.500vw,50rem)] p-[clamp(0.2rem,1.0vw,1.44rem)] bg-[#FBFCFD] flex flex-col shadow-2xl rounded-[clamp(0.2rem,0.781vw,1.12rem)]">
              <div className="w-full h-full relative overflow-y-scroll no-scrollbar rounded-[clamp(0.2rem,0.781vw,1.12rem)]">
                <Image
                  alt="Content layer"
                  src="/image/Porto/EnforianFullPage.svg"
                  className="w-full rounded-xl"
                  draggable="false"
                  width={10000}
                  height={10000}
                />
                <div className="p-[clamp(0.2rem,1.2vw,1.73rem)] w-full h-full fixed top-0 left-0 pointer-events-none">
                  <div className="w-full justify-center items-center flex group-hover:opacity-0 opacity-100 group-hover:delay-0 delay-[350ms] group-hover:duration-500 duration-[1200ms]">
                    <Image
                      alt="Content layer"
                      src="/image/Porto/scroll-down.gif"
                      className="w-[clamp(0.8rem,5.0vw,7.2rem)] z-[3] absolute bottom-[clamp(0.32rem,2.0vw,2.88rem)] rounded-xl"
                      draggable="false"
                      width={1000}
                      height={1000}
                      priority
                      unoptimized
                    />
                  </div>
                  <div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[clamp(0.2rem,0.781vw,1.12rem)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-border absolute aspect-[303/514] z-[3] w-[clamp(2.52rem,15.781vw,22.72rem)] p-[.2vw] shadow-2xl rounded-[clamp(0.2rem,0.521vw,0.75rem)] -bottom-[4vh] -right-[clamp(1.92rem,12.0vw,17.28rem)] flex flex-col">
            <div className="relative w-full h-full bg-white rounded-[clamp(0.2rem,0.521vw,0.75rem)] p-[.5vw] group">
              <div className="relative w-full h-full no-scrollbar overflow-y-scroll rounded-[clamp(0.2rem,0.521vw,0.75rem)]">
                <Image
                  alt="Content layer"
                  src="/image/Porto/EnforianFullPageMobile.svg"
                  className="w-full"
                  draggable="false"
                  width={10000}
                  height={10000}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full p-[.5vw] pointer-events-none">
                <div className="w-full justify-center items-center flex group-hover:opacity-0 opacity-100 group-hover:delay-0 delay-[350ms] group-hover:duration-[450ms] duration-[1200ms]">
                  <Image
                    alt="Content layer"
                    src="/image/Porto/scroll-down.gif"
                    className="w-[clamp(0.8rem,5.0vw,7.2rem)] z-[3] absolute bottom-[clamp(0.2rem,1.0vw,1.44rem)] rounded-xl origin-bottom scale-[.8]"
                    draggable="false"
                    width={1000}
                    height={1000}
                    priority
                    unoptimized
                  />
                </div>
                <div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[clamp(0.2rem,0.521vw,0.75rem)]" />
              </div>
            </div>
          </div>
        </div>

        <a
          href="/projects"
          className={
            "flex flex-row justify-center items-center w-[clamp(1.57rem,9.792vw,14.1rem)] gap-x-[clamp(0.2rem,0.26vw,0.37rem)] mt-[clamp(0.72rem,4.531vw,6.52rem)] aspect-[188/48] bg-transparent rounded-[clamp(0.2rem,0.417vw,0.6rem)] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out " +
            styles.ButtonShadow
          }
        >
          <p className="font-InterBold text-[clamp(0.5rem,0.833vw,1.2rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            More Projects
          </p>
          <FaArrowRight className="text-[#24AAA7] w-[clamp(0.2rem,1.25vw,1.8rem)] aspect-[1/1]" />
        </a>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden aspect-[430/1101]">
        <div
          data-aos="fade-up"
          className="text-neutral-g text-[clamp(1.28rem,8.0vw,8rem)] font-SourceSansProBold flex justify-center "
        >
          Our Work in Action
        </div>
        <div className="text-neutral-e w-[clamp(12.48rem,78.0vw,50rem)] text-center text-[clamp(0.5rem,2.5vw,3.6rem)] font-SourceSansProSemibold my-[clamp(0.2rem,1.0vw,1.44rem)] mb-[clamp(0.8rem,5.0vw,7.2rem)] ">
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek
          Frontend, Backend, dan desain UI. Kami dengan bangga mempersembahkan
          beberapa karya kami sebagai gambaran representatif. Berikut merupakan
          website terbaru karya kami, serta jelajahi lebih lanjut portofolio
          yang kami miliki.
        </div>

        <div className="bg-border p-[clamp(0.2rem,0.5vw,0.72rem)] rounded-[clamp(0.28rem,1.781vw,2.56rem)] shadow-2xl">
          <div className="w-[clamp(14.51rem,90.698vw,50rem)] aspect-[390/228]  bg-transparent p-[clamp(0.35rem,2.2vw,3.17rem)] bg-[#FBFCFD] rounded-[clamp(0.28rem,1.781vw,2.56rem)]  flex flex-col overflow-y-scroll no-scrollbar  ">
            <div className="relative w-full h-full group">
              <div className="w-full h-full overflow-y-scroll no-scrollbar rounded-xl overflow-clip">
                <Image
                  alt="Content layer"
                  src="/image/Porto/EnforianFullPage.svg"
                  className="w-full"
                  draggable="false"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full h-full absolute top-0 left-0 pointer-events-none rounded-xl overflow-clip">
                <div className="w-full justify-center items-center flex group-hover:opacity-0 opacity-100 group-hover:delay-0 delay-[350ms] group-hover:duration-500 duration-[1200ms]">
                  <Image
                    alt="Content layer"
                    src="/image/Porto/scroll-down.gif"
                    className="w-[clamp(0.8rem,5.0vw,7.2rem)] z-[3] absolute bottom-[0] rounded-xl origin-bottom scale-[3]"
                    draggable="false"
                    width={1000}
                    height={1000}
                    priority
                    unoptimized
                  />
                </div>
                <div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[clamp(0.2rem,0.781vw,1.12rem)]" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-border p-[clamp(0.2rem,0.4vw,0.58rem)] rounded-[clamp(0.28rem,1.781vw,2.56rem)] shadow-2xl mt-[clamp(0.48rem,3.0vw,4.32rem)]">
          <div className=" w-[clamp(9.67rem,60.465vw,50rem)]  aspect-[260/438] p-[clamp(0.35rem,2.2vw,3.17rem)] bg-[#FBFCFD] rounded-md -bottom-[4vh] -right-[clamp(0.64rem,4.0vw,5.76rem)] flex flex-col overflow-y-scroll no-scrollbar  ">
            <div className="relative w-full h-full group">
              <div className="w-full h-full overflow-y-scroll no-scrollbar rounded-xl">
                <Image
                  alt="Content layer"
                  src="/image/Porto/EnforianFullPageMobile.svg"
                  className="w-full"
                  draggable="false"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full h-full absolute top-0 left-0 pointer-events-none rounded-xl overflow-clip">
                <div className="w-full justify-center items-center flex group-hover:opacity-0 opacity-100 group-hover:delay-0 delay-[350ms] group-hover:duration-500 duration-[1200ms]">
                  <Image
                    alt="Content layer"
                    src="/image/Porto/scroll-down.gif"
                    className="w-[clamp(0.8rem,5.0vw,7.2rem)] z-[3] absolute bottom-[clamp(0.32rem,2.0vw,2.88rem)] rounded-xl origin-bottom scale-[3]"
                    draggable="false"
                    width={1000}
                    height={1000}
                    priority
                    unoptimized
                  />
                </div>
                <div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[clamp(0.2rem,0.781vw,1.12rem)]" />
              </div>
            </div>
          </div>
        </div>
        <a
          href="/projects"
          className={
            "flex flex-row justify-center items-center w-[clamp(4.93rem,30.792vw,44.34rem)] gap-x-[clamp(0.2rem,0.26vw,0.37rem)] mt-[clamp(1.36rem,8.531vw,12.28rem)] aspect-[188/48] bg-transparent rounded-[clamp(0.2rem,1.17vw,1.68rem)] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out " +
            styles.ButtonShadow
          }
        >
          <p className="font-InterBold text-[clamp(0.5rem,2.833vw,4.08rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            More Projects
          </p>
          <FaArrowRight className="text-[#24AAA7] w-[clamp(0.2rem,1.25vw,1.8rem)] aspect-[1/1]" />
        </a>
      </div>

      <BorderSeparator />
    </section>
  );
}
