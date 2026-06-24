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
          className="relative w-[6.4rem] aspect-[824.28/426.9]"
          data-aos="fade-right"
        >
          <Image
            alt="Content Prototype"
            src="/image/OurProducts/KPUFTHero.svg"
            className="absolute w-[5.54rem] aspect-[669/376] rounded-2xl right-[0] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/KPUFTMobile.svg"
            className="absolute w-[1.28rem] aspect-[245/495] rounded-[0.2rem] -bottom-[0.32rem] left-[0.2rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
        </div>

        <div className="w-[3.2rem] text-black pt-[0.32rem] ml-[0.8rem]">
          <h1 className="text-[0.5rem] font-SourceSansProBold text-end">
            KPU FT UGM
          </h1>
          <p className="text-[0.5rem]/[29px] font-SourceSansProSemibold text-neutral-e text-right">
            Komisi Pemilihan Umum Fakultas Teknik UGM adalah website yang
            dirancang untuk melakukan pelaksanaan pemilihan ketua umum Badan
            Eksekutif Mahasiswa (BEM KMFT) untuk periode 2024-2025. Website
            memiliki fitur untuk melakukan voting dan live count saat pemilihan
            berlangsung.
          </p>
          <div className="flex justify-end">
            <a href="https://www.electionftugm.web.id/" className="w-[0.75rem] mt-[0.2rem] bg-gradient-to-r rounded-[0.2rem] text-[0.5rem] aspect-[90/48] from-[#1AB0C8] to-[#179FB5] font-InterBold text-white flex justify-center items-center hover:translate-y-[-4px] transition-all duration-500 ease-in-out ">
              Source
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-y-[0.96rem]">
        <h1 className="text-[1.28rem] font-SourceSansProBold text-neutral-g ">
          KPU FT UGM
        </h1>
        <div
          className="relative w-[14.51rem] justify-end items-start flex aspect-[824.28/426.9]"
          data-aos="fade-right"
        >
          <Image
            alt="Content Prototype"
            src="/image/OurProducts/KPUFTHero.svg"
            className=" w-[12.1rem] aspect-[669/376] rounded-xl border-white border-[4px] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/KPUFTMobile.svg"
            className="absolute w-[3.2rem] aspect-[245/495] rounded-[0.48rem] -bottom-[0.32rem] left-[0.2rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="justify-center items-center w-[14.4rem]">
          <p className="text-[0.72rem]/[86px] font-SourceSansProSemibold text-neutral-e ">
            Komisi Pemilihan Umum Fakultas Teknik UGM adalah website yang
            dirancang untuk melakukan pelaksanaan pemilihan ketua umum Badan
            Eksekutif Mahasiswa (BEM KMFT) untuk periode 2024-2025. Website
            memiliki fitur untuk melakukan voting dan live count saat pemilihan
            berlangsung.
          </p>
        </div>
        <a href="https://www.electionftugm.web.id/" className="w-[14.4rem] h-[1.6rem] mt-[0.2rem] text-[0.5rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md  flex justify-center items-center hover:translate-y-[-4px] transition-all duration-500 ease-in-out ">
          Source
        </a>
      </div>
    </section>
  );
}
