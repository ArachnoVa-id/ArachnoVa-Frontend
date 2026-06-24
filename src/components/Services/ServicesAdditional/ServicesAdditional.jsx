"use client";

import data from "./data";
import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesAdditionalSwiper from "./ServicesAdditionalSwiper";

const ServicesAdditional = () => {
  const fade = (number) => {
    if (number % 2 === 1) {
      return "fade-right";
    }
    return "fade-left";
  };
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section
      className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage text-black overflow-hidden
                 lg:pt-[7.5rem] lg:pb-[11.25rem]
                 pt-[26.79rem] pb-[33.49rem]"
    >
      <div
        className="relative flex flex-col justify-center items-center
                   lg:gap-[4.5rem]
                   gap-[8.04rem]"
      >
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center items-center
                     lg:gap-[0.6rem]
                     gap-[0.6rem]"
        >
          <div
            className="font-SourceSansProBold text-neutral-g leading-[125%]
                       lg:text-[3.0rem]
                       text-[8rem]"
          >
            Additional Package
          </div>
          <div
            className="font-SourceSansProSemibold text-neutral-e
                       lg:text-[1.5rem]
                       text-[4.69rem]"
          >
            Fitur tambahan yang dapat diimplementasikan dalam web Anda
          </div>
        </div>
        <div
          className="flex flex-col overflow-hidden
                       lg:gap-[7.5rem]
                       gap-[16.07rem]"
        >
          {data?.map((data) => {
            return (
              <div
                key={data.key}
                data-aos={fade(data.key)}
                className="flex justify-center items-center
                             lg:flex-row lg:gap-[5.4rem]
                             flex-col gap-[8.04rem]"
              >
                <ServicesAdditionalSwiper image={data.image} />

                <div
                  className="flex flex-col justify-center
                             lg:items-start lg:gap-[1.27rem]
                             items-center gap-[4.02rem]"
                >
                  <div
                    className="font-SourceSansProBold text-neutral-g leading-[100%]
                                 lg:text-[2.63rem]
                                 text-[8rem]"
                  >
                    {data.title}
                  </div>
                  <div
                    className="font-SourceSansProSemibold text-neutral-e leading-[150%]
                               lg:text-[1.5rem] lg:w-[39.97rem]
                               text-[4.69rem] w-[50rem]"
                  >
                    {data.description}
                  </div>
                  <a
                    href={data.demo}
                    className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:scale-[115%] transition-all duration-500 ease-in-out
                                 lg:h-[3.45rem] lg:w-[8.55rem] lg:rounded-[0.6rem] lg:mt-0
                                 h-[13.39rem] w-[50rem] rounded-[2.68rem] mt-[4.02rem]"
                  >
                    <p
                      className="font-InterBold text-neutral-a
                                   lg:text-[1.2rem]
                                   text-[4.69rem]"
                    >
                      Demo
                    </p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="absolute bottom-0 w-full bg-gradient-to-r from-[#F1F5F9] via-[#CBD5E1] to-[#F1F5F9]
                   lg:h-[0.07rem]
                   h-[0.34rem]"
      ></div>
    </section>
  );
};

export default ServicesAdditional;
