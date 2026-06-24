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
      className="relative w-full lg:min-h-[50rem] min-h-[50rem] flex flex-col items-center bg-white-MainPage text-black
                 lg:pb-[7.5rem]
                 pb-[50rem]"
    >
      <div
        className="w-full
                   lg:mt-[11.52rem] 
                   mt-[50rem]"
      >
        <div className="absolute top-[6.15rem] w-full aspect-[1920/458] z-0 lg:flex hidden">
          <Image
            src="/image/OurServices/ServicesHero/bg.png"
            alt="bg"
            draggable="false"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-[25.06rem] w-full aspect-[430/195] z-0 lg:hidden">
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
                     lg:gap-[7.88rem]
                     gap-[13.4rem]"
        >
          <div
            className="lg:w-[50rem] w-[50rem] flex flex-col justify-center items-center"
            data-aos="fade-down"
          >
            <p className="font-SourceSansProBold lg:text-[2.25rem] text-[6.03rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
              Section Template
            </p>
            <h1 className="font-SourceSansProBold lg:text-[3.45rem] text-[8rem] text-neutral-g lg:leading-[3.53rem] leading-[10.05rem] text-center">
              Find the Best Section for You
            </h1>
          </div>
          <div
            className="flex flex-col 
                       lg:min-w-[50rem] lg:gap-[1.5rem]
                       max-w-[50rem] gap-[4.02rem]"
          >
            <div
              data-aos="fade-left"
              className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#76BDE4] to-[#79CACA]
                         lg:p-[0.22rem] lg:h-[7.2rem] lg:min-h-0 lg:rounded-[1.2rem] lg:shadow-[0_1px_4px_-0px_rgba(0,0,0,0.15)]
                         p-[1.0rem] min-h-[24.78rem] rounded-[4.02rem] shadow-[0_3px_17px_-1px_rgba(0,0,0,0.15)]"
              // if you ever wanted to change border thickness, change padding value but with as much accuracy as possible. It looked off with only 3 decimal numbers, but fixed after I manually calculated vw value and put it as it is.
            >
              <div
                className="w-full h-full flex flex-col justify-center bg-gradient-to-tr from-[#c4e1f5] to-[#eaf8f9]
                           lg:rounded-[1.05rem] lg:px-[3.0rem]
                           rounded-[3.01rem] px-[5.76rem] py-[3.35rem]"
              >
                <p
                  className="text-neutral-e font-SourceSansProSemibold leading-[150%]
                             lg:text-[1.35rem]
                             text-[4.02rem]"
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
                         lg:gap-[1.5rem]
                         gap-[1.5rem]"
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
