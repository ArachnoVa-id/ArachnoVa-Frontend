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
      className="relative w-full lg:min-h-[46.4rem] min-h-[166.7rem] flex flex-col items-center bg-white-MainPage text-black
                 lg:pb-[4.6rem]
                 pb-[51.0rem]"
    >
      <div
        className="w-full
                   lg:mt-[7.0rem] 
                   mt-[30.7rem]"
      >
        <div className="absolute top-[3.7rem] w-full aspect-[1920/458] z-0 lg:flex hidden">
          <Image
            src="/image/OurServices/ServicesHero/bg.png"
            alt="bg"
            draggable="false"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-[15.2rem] w-full aspect-[430/195] z-0 lg:hidden">
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
                     lg:gap-[4.8rem]
                     gap-[8.1rem]"
        >
          <div
            className="lg:w-[38.5rem] w-[59.9rem] flex flex-col justify-center items-center"
            data-aos="fade-down"
          >
            <p className="font-SourceSansProBold lg:text-[1.37rem] text-[3.7rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
              Section Template
            </p>
            <h1 className="font-SourceSansProBold lg:text-[2.1rem] text-[6.1rem] text-neutral-g lg:leading-[2.1rem] leading-[6.1rem] text-center">
              Find the Best Section for You
            </h1>
          </div>
          <div
            className="flex flex-col 
                       lg:min-w-[61.7rem] lg:gap-[0.91rem]
                       max-w-[79.4rem] gap-[2.4rem]"
          >
            <div
              data-aos="fade-left"
              className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#76BDE4] to-[#79CACA]
                         lg:p-[0.14rem] lg:h-[4.4rem] lg:min-h-0 lg:rounded-[0.73rem] lg:shadow-[0_3px_15px_-1px_rgba(0,0,0,0.15)]
                         p-[0.61rem] min-h-[15.1rem] rounded-[2.4rem] shadow-[0_13px_65px_-3px_rgba(0,0,0,0.15)]"
              // if you ever wanted to change border thickness, change padding value but with as much accuracy as possible. It looked off with only 3 decimal numbers, but fixed after I manually calculated vw value and put it as it is.
            >
              <div
                className="w-full h-full flex flex-col justify-center bg-gradient-to-tr from-[#c4e1f5] to-[#eaf8f9]
                           lg:rounded-[0.64rem] lg:px-[1.82rem]
                           rounded-[1.83rem] px-[3.5rem] py-[2.0rem]"
              >
                <p
                  className="text-neutral-e font-SourceSansProSemibold leading-[150%]
                             lg:text-[0.82rem]
                             text-[2.4rem]"
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
                         lg:gap-[0.91rem]
                         gap-[0.91rem]"
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
