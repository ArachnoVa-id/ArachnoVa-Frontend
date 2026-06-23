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
        className="w-[65vw] h-[17.5vw] relative bg-transparent rounded-xl flex flex-col justify-center items-center max-lg:hidden"
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
        <h1 className="text-surface font-SourceSansProBold text-[2.5vw] z-[2]">
          Get Inspired? Create Yours Now!
        </h1>
        <a
          href="https://wa.me/6287882832538"
          className="bg-black w-[13.646vw] flex text-surface justify-center items-center aspect-[262/54] z-[2] rounded-[0.260vw] font-SourceSansProSemibold mt-[1vw] text-[1.042vw] hover:bg-neutral-e duration-500"
        >
          Start Your Project
        </a>
      </div>

      <div
        className="w-[90vw] h-[70.5vw] relative bg-transparent rounded-xl flex flex-col justify-center items-center lg:hidden"
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
        <div className="text-[7vw]/[7vw] z-[2] flex flex-col justify-center items-center mb-[10vw]">
          <h1 className="text-surface font-SourceSansProBold">
            Get Inspired?
          </h1>
          <h1 className="text-surface font-SourceSansProBold">
            Create Yours Now!
          </h1>
        </div>

        <a
          href="https://wa.me/6287882832538"
          className="bg-black w-[60vw] h-[12vw] flex justify-center items-center z-[2] text-surface rounded-lg font-SourceSansProSemibold mt-[1vw] text-[5vw] hover:bg-neutral-e duration-500"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
}
