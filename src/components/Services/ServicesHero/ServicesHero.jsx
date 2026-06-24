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
                 lg:pb-[clamp(0.95rem,5.938vw,8.55rem)]
                 pb-[clamp(9.33rem,58.333vw,50rem)]"
    >
      <div
        className="w-full
                   lg:mt-[clamp(1.28rem,8.0vw,11.52rem)]
                   mt-[clamp(5.62rem,35.116vw,50rem)] "
      >
        <div className="absolute top-[clamp(0.68rem,4.271vw,6.15rem)] w-full aspect-[1920/458] z-0 lg:flex hidden">
          <Image
            src="/image/OurServices/ServicesHero/bg.png"
            alt="bg"
            draggable="false"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-[clamp(2.78rem,17.4vw,25.06rem)] w-full aspect-[430/195] z-0 lg:hidden">
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
	  			           lg:gap-[clamp(0.5rem,3.125vw,4.5rem)]
                     gap-[clamp(1.8rem,11.279vw,16.24rem)]"
        >
          <div
            className="flex flex-col justify-center items-center
                       lg:gap-[clamp(0.5rem,3.125vw,4.5rem)]
                       gap-[clamp(1.49rem,9.302vw,13.39rem)]"
            data-aos="fade-down"
          >
            <div
              className="w-full flex flex-col justify-center items-center
                         lg:gap-0
                         gap-[clamp(0.2rem,1.163vw,1.67rem)]"
            >
              <p
                className="font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] from-[17.73%] to-[#84D4E1] to-[65.68%]
                           lg:text-[clamp(0.5rem,1.563vw,2.25rem)]
                           text-[clamp(0.67rem,4.186vw,6.03rem)]"
              >
                What We Provide
              </p>
              <h1
                className="font-SourceSansProBold text-neutral-g text-center
                           lg:text-[clamp(0.5rem,2.396vw,3.45rem)] lg:leading-[clamp(0.39rem,2.448vw,3.53rem)] lg:w-auto
                           text-[clamp(1.12rem,6.977vw,8rem)] leading-[100%] w-[clamp(10.88rem,68.0vw,50rem)]"
              >
                Elevate Your Presence Online
              </h1>
            </div>
            <div
              className="flex
				                 lg:gap-[clamp(0.5rem,3.125vw,4.5rem)]
                         gap-[clamp(1.49rem,9.302vw,13.39rem)]"
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
                   lg:h-[clamp(0.2rem,0.052vw,0.07rem)]
                   h-[clamp(0.2rem,0.233vw,0.34rem)]"
      ></div>
    </section>
  );
};

export default ServicesHero;
