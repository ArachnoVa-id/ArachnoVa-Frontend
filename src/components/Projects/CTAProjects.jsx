"use client";

import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CTAProjects() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section className="w-full h-[60vh] relative flex flex-row justify-center items-center bg-neutral-a">
      <div
        className="w-[clamp(10.4rem,65.0vw,50rem)] h-[clamp(2.8rem,17.5vw,25.2rem)] relative bg-transparent rounded-xl flex flex-col justify-center items-center max-lg:hidden"
        data-aos="fade-up"
      >
        <Image
          alt="Content layer "
          src="/image/CTA/BGCTAProjects.png"
          className=" w-full h-full z-[1] absolute  "
          draggable="false"
          width={1000}
          height={1000}
        />
        <h1 className="text-neutral-a font-SourceSansProBold text-[clamp(0.5rem,2.5vw,3.6rem)] z-[2]">
          Get Inspired? Create Yours Now!
        </h1>
        <a
          href="https://wa.me/6287882832538"
          className="bg-black w-[clamp(2.18rem,13.646vw,19.65rem)] flex text-neutral-a justify-center items-center aspect-[262/54] z-[2] rounded-[clamp(0.2rem,0.260vw,0.37rem)] font-SourceSansProSemibold mt-[clamp(0.2rem,1.0vw,1.44rem)] text-[clamp(0.5rem,1.042vw,1.5rem)] hover:bg-neutral-e duration-500"
        >
          Start Your Project
        </a>
      </div>

      <div
        className="w-[clamp(14.4rem,90.0vw,50rem)] h-[clamp(11.28rem,70.5vw,50rem)] relative bg-transparent rounded-xl flex flex-col justify-center items-center lg:hidden"
        data-aos="fade-up"
      >
        <Image
          alt="Content layer Mobile"
          src="/image/CTA/BGCTAProjectsMobile.png"
          className=" w-full h-full z-[1] absolute  "
          draggable="false"
          width={1000}
          height={1000}
        />
        <div className="text-[clamp(1.12rem,7.0vw,8rem)]/[7vw] z-[2] flex flex-col justify-center items-center mb-[clamp(1.6rem,10.0vw,14.4rem)]">
          <h1 className="text-neutral-a font-SourceSansProBold">
            Get Inspired?
          </h1>
          <h1 className="text-neutral-a font-SourceSansProBold">
            Create Yours Now!
          </h1>
        </div>

        <a
          href="https://wa.me/6287882832538"
          className="bg-black w-[clamp(9.6rem,60.0vw,50rem)] h-[clamp(1.92rem,12.0vw,17.28rem)] flex justify-center items-center z-[2] text-neutral-a rounded-lg font-SourceSansProSemibold mt-[clamp(0.2rem,1.0vw,1.44rem)] text-[clamp(0.8rem,5.0vw,7.2rem)] hover:bg-neutral-e duration-500"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
}
