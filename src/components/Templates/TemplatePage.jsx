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
      className="relative w-full lg:min-h-[8.48rem] min-h-[30.47rem] flex flex-col items-center bg-white-MainPage text-black
                 lg:pb-[0.83rem]
                 pb-[9.33rem]"
    >
      <div
        className="w-full
                   lg:mt-[1.28rem] 
                   mt-[5.62rem]"
      >
        <div className="absolute top-[0.68rem] w-full aspect-[1920/458] z-0 lg:flex hidden">
          <Image
            src="/image/OurServices/ServicesHero/bg.png"
            alt="bg"
            draggable="false"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-[2.78rem] w-full aspect-[430/195] z-0 lg:hidden">
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
                     lg:gap-[0.88rem]
                     gap-[1.49rem]"
        >
          <div
            className="lg:w-[7.04rem] w-[10.95rem] flex flex-col justify-center items-center"
            data-aos="fade-down"
          >
            <p className="font-SourceSansProBold lg:text-[0.5rem] text-[0.67rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
              Section Template
            </p>
            <h1 className="font-SourceSansProBold lg:text-[0.5rem] text-[1.12rem] text-neutral-g lg:leading-[0.39rem] leading-[1.12rem] text-center">
              Find the Best Section for You
            </h1>
          </div>
          <div
            className="flex flex-col 
                       lg:min-w-[11.28rem] lg:gap-[0.2rem]
                       max-w-[14.53rem] gap-[0.45rem]"
          >
            <div
              data-aos="fade-left"
              className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#76BDE4] to-[#79CACA]
                         lg:p-[0.2rem] lg:h-[0.8rem] lg:min-h-0 lg:rounded-[0.2rem] lg:shadow-[0_4px_20px_-1px_rgba(0,0,0,0.15)]
                         p-[0.2rem] min-h-[2.75rem] rounded-[0.45rem] shadow-[0_18px_89px_-4px_rgba(0,0,0,0.15)]"
              // if you ever wanted to change border thickness, change padding value but with as much accuracy as possible. It looked off with only 3 decimal numbers, but fixed after I manually calculated vw value and put it as it is.
            >
              <div
                className="w-full h-full flex flex-col justify-center bg-gradient-to-tr from-[#c4e1f5] to-[#eaf8f9]
                           lg:rounded-[0.2rem] lg:px-[0.33rem]
                           rounded-[0.33rem] px-[0.64rem] py-[0.37rem]"
              >
                <p
                  className="text-neutral-e font-SourceSansProSemibold leading-[150%]
                             lg:text-[0.5rem]
                             text-[0.5rem]"
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
                         lg:gap-[0.2rem]
                         gap-[0.2rem]"
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
