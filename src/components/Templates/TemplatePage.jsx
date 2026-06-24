"use client";

import Image from "@/components/ui/Img";
import data from "./data";
import TemplateAccordion from "./TemplateAccordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TemplatePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section
      className="relative w-full lg:min-h-[clamp(8.48rem,53.021vw,50rem)] min-h-[clamp(30.47rem,190.465vw,50rem)] flex flex-col items-center bg-white-MainPage text-black
                 lg:pb-[clamp(0.83rem,5.208vw,7.5rem)]
                 pb-[clamp(9.33rem,58.333vw,50rem)]"
    >
      <div
        className="w-full
                   lg:mt-[clamp(1.28rem,8.0vw,11.52rem)] 
                   mt-[clamp(5.62rem,35.116vw,50rem)]"
      >
        <div className="absolute top-[clamp(0.68rem,4.271vw,6.15rem)] w-full aspect-[1920/458] z-0 lg:flex hidden">
          <Image
            src="/image/OurServices/ServicesHero/bg.png"
            alt="bg"
            draggable="false"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-[clamp(2.78rem,17.4vw,25.06rem)] w-full aspect-[430/195] z-0 lg:hidden">
          <Image
            src="/image/OurServices/ServicesHero/bg-mobile.png"
            alt="bg"
            draggable="false"
            fill
            className="object-contain"
          />
        </div>
        <div
          className="relative flex flex-col justify-center items-center
                     lg:gap-[clamp(0.88rem,5.469vw,7.88rem)]
                     gap-[clamp(1.49rem,9.3023vw,13.4rem)]"
        >
          <div
            className="lg:w-[clamp(7.04rem,43.981vw,50rem)] w-[clamp(10.95rem,68.442vw,50rem)] flex flex-col justify-center items-center"
            data-aos="fade-down"
          >
            <p className="font-SourceSansProBold lg:text-[clamp(0.5rem,1.563vw,2.25rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
              Section Template
            </p>
            <h1 className="font-SourceSansProBold lg:text-[clamp(0.5rem,2.396vw,3.45rem)] text-[clamp(1.12rem,6.977vw,8rem)] text-neutral-g lg:leading-[clamp(0.39rem,2.448vw,3.53rem)] leading-[clamp(1.12rem,6.977vw,10.05rem)] text-center">
              Find the Best Section for You
            </h1>
          </div>
          <div
            className="flex flex-col 
                       lg:min-w-[clamp(11.28rem,70.521vw,50rem)] lg:gap-[clamp(0.2rem,1.042vw,1.5rem)]
                       max-w-[clamp(14.53rem,90.8vw,50rem)] gap-[clamp(0.45rem,2.7907vw,4.02rem)]"
          >
            <div
              data-aos="fade-left"
              className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#76BDE4] to-[#79CACA]
                         lg:p-[clamp(0.2rem,0.15625vw,0.22rem)] lg:h-[clamp(0.8rem,5.0vw,7.2rem)] lg:min-h-0 lg:rounded-[clamp(0.2rem,0.833vw,1.2rem)] lg:shadow-[0_0.208vw_1.042vw_-0.052vw_rgba(0,0,0,0.15)]
                         p-[clamp(0.2rem,0.6976744vw,1.0rem)] min-h-[clamp(2.75rem,17.2093023vw,24.78rem)] rounded-[clamp(0.45rem,2.7907vw,4.02rem)] shadow-[0_0.93023vw_4.651163vw_-0.23256vw_rgba(0,0,0,0.15)]"
              // if you ever wanted to change border thickness, change padding value but with as much accuracy as possible. It looked off with only 3 decimal numbers, but fixed after I manually calculated vw value and put it as it is.
            >
              <div
                className="w-full h-full flex flex-col justify-center bg-gradient-to-tr from-[#c4e1f5] to-[#eaf8f9]
                           lg:rounded-[clamp(0.2rem,0.729vw,1.05rem)] lg:px-[clamp(0.33rem,2.083vw,3.0rem)]
                           rounded-[clamp(0.33rem,2.093023vw,3.01rem)] px-[clamp(0.64rem,4.0vw,5.76rem)] py-[clamp(0.37rem,2.32559vw,3.35rem)]"
              >
                <p
                  className="text-neutral-e font-SourceSansProSemibold leading-[150%]
                             lg:text-[clamp(0.5rem,0.938vw,1.35rem)]
                             text-[clamp(0.5rem,2.79067vw,4.02rem)]"
                >
                  Pilihan template section hanya tersedia untuk paket{" "}
                  <span className="text-neutral-g font-SourceSansProBold">
                    Landing Page
                  </span>
                  .
                  <br />
                  Jelajahi beragam desain menarik kami dan pilih yang paling
                  sesuai dengan citra brand Anda.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="flex flex-col w-full 
                         lg:gap-[clamp(0.2rem,1.042vw,1.5rem)]
                         gap-[clamp(0.2rem,1.042vw,1.5rem)]"
            >
              {data?.map((data) => {
                return (
                  <TemplateAccordion
                    key={data.key}
                    number={data.key}
                    title={data.title}
                    image={data.image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TemplatePage;
