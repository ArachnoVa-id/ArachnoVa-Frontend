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
        className="w-[10.4rem] h-[2.8rem] relative bg-transparent rounded-xl flex flex-col justify-center items-center max-lg:hidden"
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
        <h1 className="text-neutral-a font-SourceSansProBold text-[0.5rem] z-[2]">
          Get Inspired? Create Yours Now!
        </h1>
        <a
          href="https://wa.me/6287882832538"
          className="bg-black w-[2.18rem] flex text-neutral-a justify-center items-center aspect-[262/54] z-[2] rounded-[0.2rem] font-SourceSansProSemibold mt-[0.2rem] text-[0.5rem] hover:bg-neutral-e duration-500"
        >
          Start Your Project
        </a>
      </div>

      <div
        className="w-[14.4rem] h-[11.28rem] relative bg-transparent rounded-xl flex flex-col justify-center items-center lg:hidden"
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
        <div className="text-[1.12rem]/[134px] z-[2] flex flex-col justify-center items-center mb-[1.6rem]">
          <h1 className="text-neutral-a font-SourceSansProBold">
            Get Inspired?
          </h1>
          <h1 className="text-neutral-a font-SourceSansProBold">
            Create Yours Now!
          </h1>
        </div>

        <a
          href="https://wa.me/6287882832538"
          className="bg-black w-[9.6rem] h-[1.92rem] flex justify-center items-center z-[2] text-neutral-a rounded-lg font-SourceSansProSemibold mt-[0.2rem] text-[0.8rem] hover:bg-neutral-e duration-500"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
}
