"use client";

import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortoEzParenting() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <section className="w-full lg:aspect-[1920/748] max-lg:aspect-[430/552] flex flex-col items-center justify-center bg-[#F1F4F4] overflow-hidden">
      {/* Desktop */}
      <div className="flex max-lg:hidden ">
        <div className="w-[3.2rem] text-black pt-[0.32rem] mr-[0.8rem]">
          <h1 className="text-[0.5rem] font-SourceSansProBold">EzParenting</h1>
          <p className="text-[0.5rem]/[29px] font-SourceSansProSemibold text-neutral-e">
            EzParenting adalah sebuah platform yang bertujuan untuk menemani
            perjalanan orang tua dalam mengoptimalkan perkembangan anak-anak
            mereka dari usia 0-5 tahun pertama kehidupan melalui pendidikan dan
            solusi praktis.
          </p>
          <a
            href="https://www.ezparenting.id/"
            className="w-[0.75rem] mt-[0.2rem] bg-gradient-to-r rounded-[0.2rem] text-[0.5rem] aspect-[90/48] from-[#1AB0C8] to-[#179FB5] font-InterBold text-white flex justify-center items-center hover:translate-y-[-4px] transition-all duration-500 ease-in-out "
          >
            Source
          </a>
        </div>

        <div
          className="relative w-[6.4rem] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src="image/Projects/EzParenting.svg"
            className=" w-[5.54rem] aspect-[669/376] rounded-xl shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/EzParentingMobile.svg"
            className="absolute w-[1.28rem] aspect-[245/485] rounded-[0.2rem] -bottom-[0.32rem] right-[0.2rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-y-[0.96rem]">
        <h1 className="text-[1.28rem] font-SourceSansProBold text-neutral-g ">
          EzParenting
        </h1>
        <div
          className="relative w-[14.51rem] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src="image/Projects/EzParenting.svg"
            className=" w-[12.1rem] aspect-[669/376] rounded-xl shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects//EzParentingMobile.svg"
            className="absolute w-[3.2rem] aspect-[245/495] rounded-[0.48rem] -bottom-[0.32rem] right-[0.2rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="justify-center items-center w-[14.4rem]">
          <p className="text-[0.72rem]/[86px] font-SourceSansProSemibold text-neutral-e ">
            EzParenting adalah sebuah platform yang bertujuan untuk menemani
            perjalanan orang tua dalam mengoptimalkan perkembangan anak-anak
            mereka dari usia 0-5 tahun pertama kehidupan melalui pendidikan dan
            solusi praktis.
          </p>
        </div>
        <a
          href="https://www.ezparenting.id/"
          className="w-[14.4rem] h-[1.6rem] mt-[0.2rem] text-[0.5rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md  flex justify-center items-center hover:translate-y-[-4px] transition-all duration-500 ease-in-out "
        >
          Source
        </a>
      </div>
    </section>
  );
}
