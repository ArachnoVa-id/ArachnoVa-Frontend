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
                 lg:pt-[5.208vw] lg:pb-[7.813vw]
                 pt-[18.605vw] pb-[23.256vw]"
    >
      <div
        className="relative flex flex-col justify-center items-center
                   lg:gap-[3.125vw]
                   gap-[5.581vw]"
      >
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center items-center
                     lg:gap-[0.417vw]
                     gap-[0.417vw]"
        >
          <div
            className="font-SourceSansProBold text-neutral-g leading-[125%]
                       lg:text-[2.083vw]
                       text-[6.977vw]"
          >
            Additional Package
          </div>
          <div
            className="font-SourceSansProSemibold text-neutral-e
                       lg:text-[1.042vw]
                       text-[3.256vw]"
          >
            Fitur tambahan yang dapat diimplementasikan dalam web Anda
          </div>
        </div>
        <div
          className="flex flex-col overflow-hidden
                       lg:gap-[5.208vw]
                       gap-[11.163vw]"
        >
          {data?.map((data) => {
            return (
              <div
                key={data.key}
                data-aos={fade(data.key)}
                className="flex justify-center items-center
                             lg:flex-row lg:gap-[3.75vw]
                             flex-col gap-[5.581vw]"
              >
                <ServicesAdditionalSwiper image={data.image} />

                <div
                  className="flex flex-col justify-center
                             lg:items-start lg:gap-[0.885vw]
                             items-center gap-[2.791vw]"
                >
                  <div
                    className="font-SourceSansProBold text-neutral-g leading-[100%]
                                 lg:text-[1.823vw]
                                 text-[5.581vw]"
                  >
                    {data.title}
                  </div>
                  <div
                    className="font-SourceSansProSemibold text-neutral-e leading-[150%]
                               lg:text-[1.042vw] lg:w-[27.76vw]
                               text-[3.256vw] w-[79.07vw]"
                  >
                    {data.description}
                  </div>
                  <a
                    href={data.demo}
                    className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:scale-[115%] transition-all duration-500 ease-in-out
                                 lg:h-[2.396vw] lg:w-[5.938vw] lg:rounded-[0.417vw] lg:mt-0
                                 h-[9.302vw] w-[79.07vw] rounded-[1.86vw] mt-[2.791vw]"
                  >
                    <p
                      className="font-InterBold text-surface
                                   lg:text-[0.833vw]
                                   text-[3.256vw]"
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
                   lg:h-[0.052vw]
                   h-[0.233vw]"
      ></div>
    </section>
  );
};

export default ServicesAdditional;
