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
                 lg:pt-[4.6rem] lg:pb-[6.8rem]
                 pt-[16.3rem] pb-[20.3rem]"
    >
      <div
        className="relative flex flex-col justify-center items-center
                   lg:gap-[2.7rem]
                   gap-[4.9rem]"
      >
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center items-center
                     lg:gap-[0.36rem]
                     gap-[0.36rem]"
        >
          <div
            className="font-SourceSansProBold text-neutral-g leading-[125%]
                       lg:text-[1.82rem]
                       text-[6.1rem]"
          >
            Additional Package
          </div>
          <div
            className="font-SourceSansProSemibold text-neutral-e
                       lg:text-[0.91rem]
                       text-[2.8rem]"
          >
            Fitur tambahan yang dapat diimplementasikan dalam web Anda
          </div>
        </div>
        <div
          className="flex flex-col overflow-hidden
                       lg:gap-[4.6rem]
                       gap-[9.8rem]"
        >
          {data?.map((data) => {
            return (
              <div
                key={data.key}
                data-aos={fade(data.key)}
                className="flex justify-center items-center
                             lg:flex-row lg:gap-[3.3rem]
                             flex-col gap-[4.9rem]"
              >
                <ServicesAdditionalSwiper image={data.image} />

                <div
                  className="flex flex-col justify-center
                             lg:items-start lg:gap-[0.77rem]
                             items-center gap-[2.4rem]"
                >
                  <div
                    className="font-SourceSansProBold text-neutral-g leading-[100%]
                                 lg:text-[1.6rem]
                                 text-[4.9rem]"
                  >
                    {data.title}
                  </div>
                  <div
                    className="font-SourceSansProSemibold text-neutral-e leading-[150%]
                               lg:text-[0.91rem] lg:w-[24.3rem]
                               text-[2.8rem] w-[69.2rem]"
                  >
                    {data.description}
                  </div>
                  <a
                    href={data.demo}
                    className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:scale-[115%] transition-all duration-500 ease-in-out
                                 lg:h-[2.1rem] lg:w-[5.2rem] lg:rounded-[0.36rem] lg:mt-0
                                 h-[8.1rem] w-[69.2rem] rounded-[1.63rem] mt-[2.4rem]"
                  >
                    <p
                      className="font-InterBold text-neutral-a
                                   lg:text-[0.73rem]
                                   text-[2.8rem]"
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
                   lg:h-[0.045rem]
                   h-[0.2rem]"
      ></div>
    </section>
  );
};

export default ServicesAdditional;
