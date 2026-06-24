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
                 lg:pt-[2.9rem] lg:pb-[4.4rem]
                 pt-[10.5rem] pb-[13.1rem]"
    >
      <div
        className="relative flex flex-col justify-center items-center
                   lg:gap-[1.76rem]
                   gap-[3.1rem]"
      >
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center items-center
                     lg:gap-[0.23rem]
                     gap-[0.23rem]"
        >
          <div
            className="font-SourceSansProBold text-neutral-g leading-[125%]
                       lg:text-[1.17rem]
                       text-[3.9rem]"
          >
            Additional Package
          </div>
          <div
            className="font-SourceSansProSemibold text-neutral-e
                       lg:text-[0.59rem]
                       text-[1.83rem]"
          >
            Fitur tambahan yang dapat diimplementasikan dalam web Anda
          </div>
        </div>
        <div
          className="flex flex-col overflow-hidden
                       lg:gap-[2.9rem]
                       gap-[6.3rem]"
        >
          {data?.map((data) => {
            return (
              <div
                key={data.key}
                data-aos={fade(data.key)}
                className="flex justify-center items-center
                             lg:flex-row lg:gap-[2.1rem]
                             flex-col gap-[3.1rem]"
              >
                <ServicesAdditionalSwiper image={data.image} />

                <div
                  className="flex flex-col justify-center
                             lg:items-start lg:gap-[0.5rem]
                             items-center gap-[1.57rem]"
                >
                  <div
                    className="font-SourceSansProBold text-neutral-g leading-[100%]
                                 lg:text-[1.03rem]
                                 text-[3.1rem]"
                  >
                    {data.title}
                  </div>
                  <div
                    className="font-SourceSansProSemibold text-neutral-e leading-[150%]
                               lg:text-[0.59rem] lg:w-[15.6rem]
                               text-[1.83rem] w-[44.5rem]"
                  >
                    {data.description}
                  </div>
                  <a
                    href={data.demo}
                    className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:scale-[115%] transition-all duration-500 ease-in-out
                                 lg:h-[1.35rem] lg:w-[3.3rem] lg:rounded-[0.23rem] lg:mt-0
                                 h-[5.2rem] w-[44.5rem] rounded-[1.05rem] mt-[1.57rem]"
                  >
                    <p
                      className="font-InterBold text-neutral-a
                                   lg:text-[0.47rem]
                                   text-[1.83rem]"
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
                   lg:h-[0.029rem]
                   h-[0.13rem]"
      ></div>
    </section>
  );
};

export default ServicesAdditional;
