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
                 lg:pt-[5.2rem] lg:pb-[7.8rem]
                 pt-[18.6rem] pb-[23.3rem]"
    >
      <div
        className="relative flex flex-col justify-center items-center
                   lg:gap-[3.1rem]
                   gap-[5.6rem]"
      >
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center items-center
                     lg:gap-[0.42rem]
                     gap-[0.42rem]"
        >
          <div
            className="font-SourceSansProBold text-neutral-g leading-[125%]
                       lg:text-[2.1rem]
                       text-[7.0rem]"
          >
            Additional Package
          </div>
          <div
            className="font-SourceSansProSemibold text-neutral-e
                       lg:text-[1.04rem]
                       text-[3.3rem]"
          >
            Fitur tambahan yang dapat diimplementasikan dalam web Anda
          </div>
        </div>
        <div
          className="flex flex-col overflow-hidden
                       lg:gap-[5.2rem]
                       gap-[11.2rem]"
        >
          {data?.map((data) => {
            return (
              <div
                key={data.key}
                data-aos={fade(data.key)}
                className="flex justify-center items-center
                             lg:flex-row lg:gap-[3.8rem]
                             flex-col gap-[5.6rem]"
              >
                <ServicesAdditionalSwiper image={data.image} />

                <div
                  className="flex flex-col justify-center
                             lg:items-start lg:gap-[0.88rem]
                             items-center gap-[2.8rem]"
                >
                  <div
                    className="font-SourceSansProBold text-neutral-g leading-[100%]
                                 lg:text-[1.82rem]
                                 text-[5.6rem]"
                  >
                    {data.title}
                  </div>
                  <div
                    className="font-SourceSansProSemibold text-neutral-e leading-[150%]
                               lg:text-[1.04rem] lg:w-[27.8rem]
                               text-[3.3rem] w-[79.1rem]"
                  >
                    {data.description}
                  </div>
                  <a
                    href={data.demo}
                    className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:scale-[115%] transition-all duration-500 ease-in-out
                                 lg:h-[2.4rem] lg:w-[5.9rem] lg:rounded-[0.42rem] lg:mt-0
                                 h-[9.3rem] w-[79.1rem] rounded-[1.86rem] mt-[2.8rem]"
                  >
                    <p
                      className="font-InterBold text-neutral-a
                                   lg:text-[0.83rem]
                                   text-[3.3rem]"
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
                   lg:h-[0.06rem]
                   h-[0.23rem]"
      ></div>
    </section>
  );
};

export default ServicesAdditional;
