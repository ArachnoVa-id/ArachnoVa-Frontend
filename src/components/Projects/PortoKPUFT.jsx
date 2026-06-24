"use client";

import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function KPUFT() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section className="w-full lg:aspect-[1920/748] max-lg:aspect-[430/552] flex flex-col items-center justify-center bg-neutral-a overflow-hidden">
      {/* Desktop */}
      <div className="flex max-lg:hidden">
        <div
          className="relative w-[22.5rem] aspect-[824.28/426.9]"
          data-aos="fade-right"
        >
          <Image
            alt="Content Prototype"
            src="/image/OurProducts/KPUFTHero.svg"
            className="absolute w-[19.5rem] aspect-[669/376] rounded-2xl right-[0] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/KPUFTMobile.svg"
            className="absolute w-[4.5rem] aspect-[245/495] rounded-[0.56rem] -bottom-[1.12rem] left-[0.000rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
        </div>

        <div className="w-[11.2rem] text-black pt-[1.12rem] ml-[2.8rem]">
          <h1 className="text-[1.12rem] font-SourceSansProBold text-end">
            KPU FT UGM
          </h1>
          <p className="text-[0.56rem]/[0.84rem] font-SourceSansProSemibold text-neutral-e text-right">
            Komisi Pemilihan Umum Fakultas Teknik UGM adalah website yang
            dirancang untuk melakukan pelaksanaan pemilihan ketua umum Badan
            Eksekutif Mahasiswa (BEM KMFT) untuk periode 2024-2025. Website
            memiliki fitur untuk melakukan voting dan live count saat pemilihan
            berlangsung.
          </p>
          <div className="flex justify-end">
            <a href="https://www.electionftugm.web.id/" className="w-[2.6rem] mt-[0.56rem] bg-gradient-to-r rounded-[0.28rem] text-[0.47rem] aspect-[90/48] from-[#1AB0C8] to-[#179FB5] font-InterBold text-white flex justify-center items-center hover:translate-y-[-2px] transition-all duration-500 ease-in-out ">
              Source
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-y-[3.4rem]">
        <h1 className="text-[4.5rem] font-SourceSansProBold text-neutral-g ">
          KPU FT UGM
        </h1>
        <div
          className="relative w-[51.0rem] justify-end items-start flex aspect-[824.28/426.9]"
          data-aos="fade-right"
        >
          <Image
            alt="Content Prototype"
            src="/image/OurProducts/KPUFTHero.svg"
            className=" w-[42.5rem] aspect-[669/376] rounded-xl border-white border-[0.11rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/KPUFTMobile.svg"
            className="absolute w-[11.2rem] aspect-[245/495] rounded-[1.69rem] -bottom-[1.12rem] left-[0.000rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="justify-center items-center w-[50.6rem]">
          <p className="text-[2.5rem]/[2.5rem] font-SourceSansProSemibold text-neutral-e ">
            Komisi Pemilihan Umum Fakultas Teknik UGM adalah website yang
            dirancang untuk melakukan pelaksanaan pemilihan ketua umum Badan
            Eksekutif Mahasiswa (BEM KMFT) untuk periode 2024-2025. Website
            memiliki fitur untuk melakukan voting dan live count saat pemilihan
            berlangsung.
          </p>
        </div>
        <a href="https://www.electionftugm.web.id/" className="w-[50.6rem] h-[5.6rem] mt-[0.56rem] text-[1.69rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md  flex justify-center items-center hover:translate-y-[-2px] transition-all duration-500 ease-in-out ">
          Source
        </a>
      </div>
    </section>
  );
}
