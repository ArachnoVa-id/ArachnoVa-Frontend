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
          className="relative w-[50rem] aspect-[824.28/426.9]"
          data-aos="fade-right"
        >
          <Image
            alt="Content Prototype"
            src="/image/OurProducts/KPUFTHero.svg"
            className="absolute w-[49.82rem] aspect-[669/376] rounded-2xl right-[0] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/KPUFTMobile.svg"
            className="absolute w-[11.52rem] aspect-[245/495] rounded-[1.44rem] -bottom-[2.88rem] left-[0.7rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
        </div>

        <div className="w-[28.8rem] text-black pt-[2.88rem] ml-[7.2rem]">
          <h1 className="text-[2.88rem] font-SourceSansProBold text-end">
            KPU FT UGM
          </h1>
          <p className="text-[1.44rem]/[0.35rem] font-SourceSansProSemibold text-neutral-e text-right">
            Komisi Pemilihan Umum Fakultas Teknik UGM adalah website yang
            dirancang untuk melakukan pelaksanaan pemilihan ketua umum Badan
            Eksekutif Mahasiswa (BEM KMFT) untuk periode 2024-2025. Website
            memiliki fitur untuk melakukan voting dan live count saat pemilihan
            berlangsung.
          </p>
          <div className="flex justify-end">
            <a href="https://www.electionftugm.web.id/" className="w-[6.75rem] mt-[1.44rem] bg-gradient-to-r rounded-[0.72rem] text-[1.2rem] aspect-[90/48] from-[#1AB0C8] to-[#179FB5] font-InterBold text-white flex justify-center items-center hover:translate-y-[-1px] transition-all duration-500 ease-in-out ">
              Source
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-y-[8.64rem]">
        <h1 className="text-[8rem] font-SourceSansProBold text-neutral-g ">
          KPU FT UGM
        </h1>
        <div
          className="relative w-[50rem] justify-end items-start flex aspect-[824.28/426.9]"
          data-aos="fade-right"
        >
          <Image
            alt="Content Prototype"
            src="/image/OurProducts/KPUFTHero.svg"
            className=" w-[50rem] aspect-[669/376] rounded-xl border-white border-[0.047rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/KPUFTMobile.svg"
            className="absolute w-[28.8rem] aspect-[245/495] rounded-[4.32rem] -bottom-[2.88rem] left-[0.7rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="justify-center items-center w-[50rem]">
          <p className="text-[6.48rem]/[1.05rem] font-SourceSansProSemibold text-neutral-e ">
            Komisi Pemilihan Umum Fakultas Teknik UGM adalah website yang
            dirancang untuk melakukan pelaksanaan pemilihan ketua umum Badan
            Eksekutif Mahasiswa (BEM KMFT) untuk periode 2024-2025. Website
            memiliki fitur untuk melakukan voting dan live count saat pemilihan
            berlangsung.
          </p>
        </div>
        <a href="https://www.electionftugm.web.id/" className="w-[50rem] h-[14.4rem] mt-[1.44rem] text-[4.32rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md  flex justify-center items-center hover:translate-y-[-1px] transition-all duration-500 ease-in-out ">
          Source
        </a>
      </div>
    </section>
  );
}
