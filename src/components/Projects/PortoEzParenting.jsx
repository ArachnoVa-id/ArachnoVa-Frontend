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
        <div className="w-[11.2rem] text-black pt-[1.12rem] mr-[2.8rem]">
          <h1 className="text-[1.12rem] font-SourceSansProBold">EzParenting</h1>
          <p className="text-[0.56rem]/[0.84rem] font-SourceSansProSemibold text-neutral-e">
            EzParenting adalah sebuah platform yang bertujuan untuk menemani
            perjalanan orang tua dalam mengoptimalkan perkembangan anak-anak
            mereka dari usia 0-5 tahun pertama kehidupan melalui pendidikan dan
            solusi praktis.
          </p>
          <a
            href="https://www.ezparenting.id/"
            className="w-[2.6rem] mt-[0.56rem] bg-gradient-to-r rounded-[0.28rem] text-[0.47rem] aspect-[90/48] from-[#1AB0C8] to-[#179FB5] font-InterBold text-white flex justify-center items-center hover:translate-y-[-2px] transition-all duration-500 ease-in-out "
          >
            Source
          </a>
        </div>

        <div
          className="relative w-[22.5rem] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src="image/Projects/EzParenting.svg"
            className=" w-[19.5rem] aspect-[669/376] rounded-xl shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/EzParentingMobile.svg"
            className="absolute w-[4.5rem] aspect-[245/485] rounded-[0.56rem] -bottom-[1.12rem] right-[0.000rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-y-[3.4rem]">
        <h1 className="text-[4.5rem] font-SourceSansProBold text-neutral-g ">
          EzParenting
        </h1>
        <div
          className="relative w-[51.0rem] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src="image/Projects/EzParenting.svg"
            className=" w-[42.5rem] aspect-[669/376] rounded-xl shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects//EzParentingMobile.svg"
            className="absolute w-[11.2rem] aspect-[245/495] rounded-[1.69rem] -bottom-[1.12rem] right-[0.000rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="justify-center items-center w-[50.6rem]">
          <p className="text-[2.5rem]/[2.5rem] font-SourceSansProSemibold text-neutral-e ">
            EzParenting adalah sebuah platform yang bertujuan untuk menemani
            perjalanan orang tua dalam mengoptimalkan perkembangan anak-anak
            mereka dari usia 0-5 tahun pertama kehidupan melalui pendidikan dan
            solusi praktis.
          </p>
        </div>
        <a
          href="https://www.ezparenting.id/"
          className="w-[50.6rem] h-[5.6rem] mt-[0.56rem] text-[1.69rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md  flex justify-center items-center hover:translate-y-[-2px] transition-all duration-500 ease-in-out "
        >
          Source
        </a>
      </div>
    </section>
  );
}
