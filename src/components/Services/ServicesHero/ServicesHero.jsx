"use client";

import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCollection } from "@/context/DataContext";
import OptionButton from "./OptionButton";
import { useState } from "react";
import ServiceDetails from "./ServiceDetails";

const ServicesHero = () => {
  const [data] = useCollection("services");
  const [projects] = useCollection("projects");
  const [state, setState] = useState(1);
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section
      className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage overflow-hidden
                 lg:pb-[5.938vw]
                 pb-[clamp(6rem,58.333vw,18rem)]"
    >
      <div
        className="w-full
                   lg:mt-[8vw]
                   mt-[clamp(3rem,35.116vw,12rem)] "
      >
        <div className="absolute top-[4.271vw] w-full aspect-[1920/458] z-0 lg:flex hidden">
          <Image
            src="/image/OurServices/ServicesHero/bg.png"
            alt="bg"
            draggable="false"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-[17.4vw] w-full aspect-[430/195] z-0 lg:hidden">
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
	  			           lg:gap-[3.125vw]
                     gap-[clamp(1.5rem,11.279vw,5rem)]"
        >
          <div
            className="flex flex-col justify-center items-center
                        lg:gap-[3.125vw]
                       gap-[clamp(1rem,9.302vw,4rem)]"
            data-aos="fade-down"
          >
            <div
              className="w-full flex flex-col justify-center items-center
                          lg:gap-0
                         gap-[clamp(0.3rem,1.163vw,0.8rem)]"
            >
              <p
                className="font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] from-[17.73%] to-[#44C4D9] to-[65.68%]
                            lg:text-[1.563vw]
                           text-[clamp(0.7rem,4.186vw,1.2rem)]"
              >
                What We Provide
              </p>
              <h1
                className="font-SourceSansProBold text-neutral-g text-center
                            lg:text-[2.396vw] lg:leading-[2.448vw] lg:w-auto
                           text-[clamp(1.4rem,6.977vw,2.6rem)] leading-[100%] w-[clamp(28rem,68vw,45rem)]"
              >
                Elevate Your Presence Online
              </h1>
            </div>
            <div
              className="flex
				                 lg:gap-[3.125vw]
                         gap-[clamp(1rem,9.302vw,4rem)]"
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

          {data?.map((svc) => {
            const imgs = projects
              .filter((p) => p.product === svc.productTag)
              .flatMap((p) => p.desktopImages || [])
              .filter(Boolean);
            return (
              <ServiceDetails
                key={svc.key}
                _key={svc.key}
                selected={state}
                title={svc.title}
                description={svc.description}
                image={imgs}
              />
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

export default ServicesHero;
