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
                 lg:pt-[clamp(0.83rem,5.208vw,7.5rem)] lg:pb-[clamp(1.25rem,7.813vw,11.25rem)]
                 pt-[clamp(2.98rem,18.605vw,26.79rem)] pb-[clamp(3.72rem,23.256vw,33.49rem)]"
    >
      <div
        className="relative flex flex-col justify-center items-center
                   lg:gap-[clamp(0.5rem,3.125vw,4.5rem)]
                   gap-[clamp(0.89rem,5.581vw,8.04rem)]"
      >
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center items-center
                     lg:gap-[clamp(0.2rem,0.417vw,0.6rem)]
                     gap-[clamp(0.2rem,0.417vw,0.6rem)]"
        >
          <div
            className="font-SourceSansProBold text-neutral-g leading-[125%]
                       lg:text-[clamp(0.5rem,2.083vw,3.0rem)]
                       text-[clamp(1.12rem,6.977vw,8rem)]"
          >
            Additional Package
          </div>
          <div
            className="font-SourceSansProSemibold text-neutral-e
                       lg:text-[clamp(0.5rem,1.042vw,1.5rem)]
                       text-[clamp(0.52rem,3.256vw,4.69rem)]"
          >
            Fitur tambahan yang dapat diimplementasikan dalam web Anda
          </div>
        </div>
        <div
          className="flex flex-col overflow-hidden
                       lg:gap-[clamp(0.83rem,5.208vw,7.5rem)]
                       gap-[clamp(1.79rem,11.163vw,16.07rem)]"
        >
          {data?.map((data) => {
            return (
              <div
                key={data.key}
                data-aos={fade(data.key)}
                className="flex justify-center items-center
                             lg:flex-row lg:gap-[clamp(0.6rem,3.75vw,5.4rem)]
                             flex-col gap-[clamp(0.89rem,5.581vw,8.04rem)]"
              >
                <ServicesAdditionalSwiper image={data.image} />

                <div
                  className="flex flex-col justify-center
                             lg:items-start lg:gap-[clamp(0.2rem,0.885vw,1.27rem)]
                             items-center gap-[clamp(0.45rem,2.791vw,4.02rem)]"
                >
                  <div
                    className="font-SourceSansProBold text-neutral-g leading-[100%]
                                 lg:text-[clamp(0.5rem,1.823vw,2.63rem)]
                                 text-[clamp(0.89rem,5.581vw,8rem)]"
                  >
                    {data.title}
                  </div>
                  <div
                    className="font-SourceSansProSemibold text-neutral-e leading-[150%]
                               lg:text-[clamp(0.5rem,1.042vw,1.5rem)] lg:w-[clamp(4.44rem,27.76vw,39.97rem)]
                               text-[clamp(0.52rem,3.256vw,4.69rem)] w-[clamp(12.65rem,79.07vw,50rem)]"
                  >
                    {data.description}
                  </div>
                  <a
                    href={data.demo}
                    className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:scale-[115%] transition-all duration-500 ease-in-out
                                 lg:h-[clamp(0.38rem,2.396vw,3.45rem)] lg:w-[clamp(0.95rem,5.938vw,8.55rem)] lg:rounded-[clamp(0.2rem,0.417vw,0.6rem)] lg:mt-0
                                 h-[clamp(1.49rem,9.302vw,13.39rem)] w-[clamp(12.65rem,79.07vw,50rem)] rounded-[clamp(0.3rem,1.86vw,2.68rem)] mt-[clamp(0.45rem,2.791vw,4.02rem)]"
                  >
                    <p
                      className="font-InterBold text-neutral-a
                                   lg:text-[clamp(0.5rem,0.833vw,1.2rem)]
                                   text-[clamp(0.52rem,3.256vw,4.69rem)]"
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
                   lg:h-[clamp(0.2rem,0.052vw,0.07rem)]
                   h-[clamp(0.2rem,0.233vw,0.34rem)]"
      ></div>
    </section>
  );
};

export default ServicesAdditional;
