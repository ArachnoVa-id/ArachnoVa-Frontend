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
    <section className="w-full lg:aspect-[1920/1312] max-lg:aspect-[430/1101] relative  flex flex-row justify-center items-center bg-white-MainPage gap-y-[1.82rem]">
      {/* Desktop */}
      <div className="flex flex-col justify-center items-center max-lg:hidden">
        <div className="text-neutral-g text-[2.0rem] font-SourceSansProBold flex justify-center ">
          Our Work in Action
        </div>
        <div
          data-aos="fade-up"
          className="text-neutral-e w-[50.8rem] text-center text-[0.88rem] font-SourceSansProSemibold mt-[0.66rem] mb-[1.82rem] "
        >
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek
          Frontend, Backend, dan desain UI. Kami dengan bangga mempersembahkan
          beberapa karya kami sebagai gambaran representatif. Berikut merupakan
          website terbaru karya kami, serta jelajahi lebih lanjut portofolio
          yang kami miliki.
        </div>
        <div data-aos="fade-up" className="relative mr-[8.8rem]">
          <div className="bg-border p-[0.18rem] rounded-[0.68rem] group">
            <div className="aspect-[1008/588] w-[45.9rem] p-[0.88rem] bg-[#FBFCFD] flex flex-col shadow-2xl rounded-[0.68rem]">
              <div className="w-full h-full relative overflow-y-scroll no-scrollbar rounded-[0.68rem]">
                <Image
                  alt="Content layer"
                  src="/image/Porto/EnforianFullPage.svg"
                  className="w-full rounded-xl"
                  draggable="false"
                  width={10000}
                  height={10000}
                />
                <div className="p-[1.05rem] w-full h-full fixed top-0 left-0 pointer-events-none">
                  <div className="w-full justify-center items-center flex group-hover:opacity-0 opacity-100 group-hover:delay-0 delay-[350ms] group-hover:duration-500 duration-[1200ms]">
                    <Image
                      alt="Content layer"
                      src="/image/Porto/scroll-down.gif"
                      className="w-[4.4rem] z-[3] absolute bottom-[1.75rem] rounded-xl"
                      draggable="false"
                      width={1000}
                      height={1000}
                      priority
                      unoptimized
                    />
                  </div>
                  <div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[0.68rem]" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-border absolute aspect-[303/514] z-[3] w-[13.8rem] p-[0.18rem] shadow-2xl rounded-[0.46rem] -bottom-[4vh] -right-[10.5rem] flex flex-col">
            <div className="relative w-full h-full bg-white rounded-[0.46rem] p-[0.44rem] group">
              <div className="relative w-full h-full no-scrollbar overflow-y-scroll rounded-[0.46rem]">
                <Image
                  alt="Content layer"
                  src="/image/Porto/EnforianFullPageMobile.svg"
                  className="w-full"
                  draggable="false"
                  width={10000}
                  height={10000}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full p-[0.44rem] pointer-events-none">
                <div className="w-full justify-center items-center flex group-hover:opacity-0 opacity-100 group-hover:delay-0 delay-[350ms] group-hover:duration-[450ms] duration-[1200ms]">
                  <Image
                    alt="Content layer"
                    src="/image/Porto/scroll-down.gif"
                    className="w-[4.4rem] z-[3] absolute bottom-[0.88rem] rounded-xl origin-bottom scale-[.8]"
                    draggable="false"
                    width={1000}
                    height={1000}
                    priority
                    unoptimized
                  />
                </div>
                <div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[0.46rem]" />
              </div>
            </div>
          </div>
        </div>

        <a
          href="/projects"
          className={
            "flex flex-row justify-center items-center w-[8.6rem] gap-x-[0.23rem] mt-[4.0rem] aspect-[188/48] bg-transparent rounded-[0.36rem] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out " +
            styles.ButtonShadow
          }
        >
          <p className="font-InterBold text-[0.73rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            More Projects
          </p>
          <FaArrowRight className="text-[#24AAA7] w-[1.09rem] aspect-[1/1]" />
        </a>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden aspect-[430/1101]">
        <div
          data-aos="fade-up"
          className="text-neutral-g text-[7.0rem] font-SourceSansProBold flex justify-center "
        >
          Our Work in Action
        </div>
        <div className="text-neutral-e w-[68.2rem] text-center text-[2.2rem] font-SourceSansProSemibold my-[0.88rem] mb-[4.4rem] ">
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek
          Frontend, Backend, dan desain UI. Kami dengan bangga mempersembahkan
          beberapa karya kami sebagai gambaran representatif. Berikut merupakan
          website terbaru karya kami, serta jelajahi lebih lanjut portofolio
          yang kami miliki.
        </div>

        <div className="bg-border p-[0.44rem] rounded-[1.56rem] shadow-2xl">
          <div className="w-[79.4rem] aspect-[390/228]  bg-transparent p-[1.93rem] bg-[#FBFCFD] rounded-[1.56rem]  flex flex-col overflow-y-scroll no-scrollbar  ">
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
                    className="w-[4.4rem] z-[3] absolute bottom-[0] rounded-xl origin-bottom scale-[3]"
                    draggable="false"
                    width={1000}
                    height={1000}
                    priority
                    unoptimized
                  />
                </div>
                <div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[0.68rem]" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-border p-[0.35rem] rounded-[1.56rem] shadow-2xl mt-[2.6rem]">
          <div className=" w-[52.9rem]  aspect-[260/438] p-[1.93rem] bg-[#FBFCFD] rounded-md -bottom-[4vh] -right-[3.5rem] flex flex-col overflow-y-scroll no-scrollbar  ">
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
                    className="w-[4.4rem] z-[3] absolute bottom-[1.75rem] rounded-xl origin-bottom scale-[3]"
                    draggable="false"
                    width={1000}
                    height={1000}
                    priority
                    unoptimized
                  />
                </div>
                <div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[0.68rem]" />
              </div>
            </div>
          </div>
        </div>
        <a
          href="/projects"
          className={
            "flex flex-row justify-center items-center w-[26.9rem] gap-x-[0.23rem] mt-[7.5rem] aspect-[188/48] bg-transparent rounded-[1.02rem] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out " +
            styles.ButtonShadow
          }
        >
          <p className="font-InterBold text-[2.5rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            More Projects
          </p>
          <FaArrowRight className="text-[#24AAA7] w-[1.09rem] aspect-[1/1]" />
        </a>
      </div>

      <BorderSeparator />
    </section>
  );
}
