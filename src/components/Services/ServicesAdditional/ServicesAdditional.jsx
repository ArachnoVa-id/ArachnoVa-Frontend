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
                 lg:pt-[0.83rem] lg:pb-[1.25rem]
                 pt-[2.98rem] pb-[3.72rem]"
    >
      <div
        className="relative flex flex-col justify-center items-center
                   lg:gap-[0.5rem]
                   gap-[0.89rem]"
      >
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center items-center
                     lg:gap-[0.2rem]
                     gap-[0.2rem]"
        >
          <div
            className="font-SourceSansProBold text-neutral-g leading-[125%]
                       lg:text-[0.5rem]
                       text-[1.12rem]"
          >
            Additional Package
          </div>
          <div
            className="font-SourceSansProSemibold text-neutral-e
                       lg:text-[0.5rem]
                       text-[0.52rem]"
          >
            Fitur tambahan yang dapat diimplementasikan dalam web Anda
          </div>
        </div>
        <div
          className="flex flex-col overflow-hidden
                       lg:gap-[0.83rem]
                       gap-[1.79rem]"
        >
          {data?.map((data) => {
            return (
              <div
                key={data.key}
                data-aos={fade(data.key)}
                className="flex justify-center items-center
                             lg:flex-row lg:gap-[0.6rem]
                             flex-col gap-[0.89rem]"
              >
                <ServicesAdditionalSwiper image={data.image} />

                <div
                  className="flex flex-col justify-center
                             lg:items-start lg:gap-[0.2rem]
                             items-center gap-[0.45rem]"
                >
                  <div
                    className="font-SourceSansProBold text-neutral-g leading-[100%]
                                 lg:text-[0.5rem]
                                 text-[0.89rem]"
                  >
                    {data.title}
                  </div>
                  <div
                    className="font-SourceSansProSemibold text-neutral-e leading-[150%]
                               lg:text-[0.5rem] lg:w-[4.44rem]
                               text-[0.52rem] w-[12.65rem]"
                  >
                    {data.description}
                  </div>
                  <a
                    href={data.demo}
                    className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:scale-[115%] transition-all duration-500 ease-in-out
                                 lg:h-[0.38rem] lg:w-[0.95rem] lg:rounded-[0.2rem] lg:mt-0
                                 h-[1.49rem] w-[12.65rem] rounded-[0.3rem] mt-[0.45rem]"
                  >
                    <p
                      className="font-InterBold text-neutral-a
                                   lg:text-[0.5rem]
                                   text-[0.52rem]"
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
                   lg:h-[0.2rem]
                   h-[0.2rem]"
      ></div>
    </section>
  );
};

export default ServicesAdditional;
