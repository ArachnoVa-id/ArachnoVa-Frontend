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
      className="relative w-full lg:min-h-[29.8rem] min-h-[107.1rem] flex flex-col items-center bg-white-MainPage text-black
                 lg:pb-[2.9rem]
                 pb-[32.8rem]"
    >
      <div
        className="w-full
                   lg:mt-[4.5rem] 
                   mt-[19.8rem]"
      >
        <div className="absolute top-[2.4rem] w-full aspect-[1920/458] z-0 lg:flex hidden">
          <Image
            src="/image/OurServices/ServicesHero/bg.png"
            alt="bg"
            draggable="false"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-[9.8rem] w-full aspect-[430/195] z-0 lg:hidden">
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
                     lg:gap-[3.1rem]
                     gap-[5.2rem]"
        >
          <div
            className="lg:w-[24.7rem] w-[38.5rem] flex flex-col justify-center items-center"
            data-aos="fade-down"
          >
            <p className="font-SourceSansProBold lg:text-[0.88rem] text-[2.4rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
              Section Template
            </p>
            <h1 className="font-SourceSansProBold lg:text-[1.35rem] text-[3.9rem] text-neutral-g lg:leading-[1.38rem] leading-[3.9rem] text-center">
              Find the Best Section for You
            </h1>
          </div>
          <div
            className="flex flex-col 
                       lg:min-w-[39.7rem] lg:gap-[0.59rem]
                       max-w-[51.1rem] gap-[1.57rem]"
          >
            <div
              data-aos="fade-left"
              className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#76BDE4] to-[#79CACA]
                         lg:p-[0.09rem] lg:h-[2.8rem] lg:min-h-0 lg:rounded-[0.47rem] lg:shadow-[0_2px_9px_-0px_rgba(0,0,0,0.15)]
                         p-[0.39rem] min-h-[9.7rem] rounded-[1.57rem] shadow-[0_8px_42px_-2px_rgba(0,0,0,0.15)]"
              // if you ever wanted to change border thickness, change padding value but with as much accuracy as possible. It looked off with only 3 decimal numbers, but fixed after I manually calculated vw value and put it as it is.
            >
              <div
                className="w-full h-full flex flex-col justify-center bg-gradient-to-tr from-[#c4e1f5] to-[#eaf8f9]
                           lg:rounded-[0.41rem] lg:px-[1.17rem]
                           rounded-[1.18rem] px-[2.2rem] py-[1.31rem]"
              >
                <p
                  className="text-neutral-e font-SourceSansProSemibold leading-[150%]
                             lg:text-[0.53rem]
                             text-[1.57rem]"
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
                         lg:gap-[0.59rem]
                         gap-[0.59rem]"
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
