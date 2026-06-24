"use client";

import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "./data";
import OptionButton from "./OptionButton";
import { useState } from "react";
import ServiceDetails from "./ServiceDetails";

const ServicesHero = () => {
  const [state, setState] = useState(1);
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section
      className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage overflow-hidden
                 lg:pb-[5.2rem]
                 pb-[51.0rem]"
    >
      <div
        className="w-full
                   lg:mt-[7.0rem]
                   mt-[30.7rem] "
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
          className="flex flex-col justify-center items-center
	  			           lg:gap-[2.7rem]
                     gap-[9.9rem]"
        >
          <div
            className="flex flex-col justify-center items-center
                       lg:gap-[2.7rem]
                       gap-[8.1rem]"
            data-aos="fade-down"
          >
            <div
              className="w-full flex flex-col justify-center items-center
                         lg:gap-0
                         gap-[1.02rem]"
            >
              <p
                className="font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] from-[17.73%] to-[#84D4E1] to-[65.68%]
                           lg:text-[1.37rem]
                           text-[3.7rem]"
              >
                What We Provide
              </p>
              <h1
                className="font-SourceSansProBold text-neutral-g text-center
                           lg:text-[2.1rem] lg:leading-[2.1rem] lg:w-auto
                           text-[6.1rem] leading-[100%] w-[59.5rem]"
              >
                Elevate Your Presence Online
              </h1>
            </div>
            <div
              className="flex
				                 lg:gap-[2.7rem]
                         gap-[8.1rem]"
            >
              {data?.map((data) => {
                return (
                  <div
                    key={data.key}
                    onClick={() => setState(data.key)}
                    className="cursor-pointer"
                  >
                    <OptionButton
                      _key={data.key}
                      icon={data.icon}
                      text={data.title}
                      selected={state}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {data?.map((data) => {
            return (
              <ServiceDetails
                key={data.key}
                _key={data.key}
                selected={state}
                title={data.title}
                description={data.description}
                image={data.image}
              />
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

export default ServicesHero;
