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
          className="relative w-[clamp(6.4rem,40.0vw,50rem)] aspect-[824.28/426.9]"
          data-aos="fade-right"
        >
          <Image
            alt="Content Prototype"
            src="/image/OurProducts/KPUFTHero.svg"
            className="absolute w-[clamp(5.54rem,34.6vw,49.82rem)] aspect-[669/376] rounded-2xl right-[0] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/KPUFTMobile.svg"
            className="absolute w-[clamp(1.28rem,8.0vw,11.52rem)] aspect-[245/495] rounded-[clamp(0.2rem,1.0vw,1.44rem)] -bottom-[clamp(0.32rem,2.0vw,2.88rem)] left-[clamp(0.2rem,0.0vw,0.7rem)] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
        </div>

        <div className="w-[clamp(3.2rem,20.0vw,28.8rem)] text-black pt-[clamp(0.32rem,2.0vw,2.88rem)] ml-[clamp(0.8rem,5.0vw,7.2rem)]">
          <h1 className="text-[clamp(0.5rem,2.0vw,2.88rem)] font-SourceSansProBold text-end">
            KPU FT UGM
          </h1>
          <p className="text-[clamp(0.5rem,1.0vw,1.44rem)]/[1.5vw] font-SourceSansProSemibold text-neutral-e text-right">
            Komisi Pemilihan Umum Fakultas Teknik UGM adalah website yang
            dirancang untuk melakukan pelaksanaan pemilihan ketua umum Badan
            Eksekutif Mahasiswa (BEM KMFT) untuk periode 2024-2025. Website
            memiliki fitur untuk melakukan voting dan live count saat pemilihan
            berlangsung.
          </p>
          <div className="flex justify-end">
            <a href="https://www.electionftugm.web.id/" className="w-[clamp(0.75rem,4.688vw,6.75rem)] mt-[clamp(0.2rem,1.0vw,1.44rem)] bg-gradient-to-r rounded-[clamp(0.2rem,0.5vw,0.72rem)] text-[clamp(0.5rem,0.833vw,1.2rem)] aspect-[90/48] from-[#1AB0C8] to-[#179FB5] font-InterBold text-white flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out ">
              Source
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-y-[clamp(0.96rem,6.0vw,8.64rem)]">
        <h1 className="text-[clamp(1.28rem,8.0vw,8rem)] font-SourceSansProBold text-neutral-g ">
          KPU FT UGM
        </h1>
        <div
          className="relative w-[clamp(14.51rem,90.698vw,50rem)] justify-end items-start flex aspect-[824.28/426.9]"
          data-aos="fade-right"
        >
          <Image
            alt="Content Prototype"
            src="/image/OurProducts/KPUFTHero.svg"
            className=" w-[clamp(12.1rem,75.6vw,50rem)] aspect-[669/376] rounded-xl border-white border-[0.2vw] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/KPUFTMobile.svg"
            className="absolute w-[clamp(3.2rem,20.0vw,28.8rem)] aspect-[245/495] rounded-[clamp(0.48rem,3.0vw,4.32rem)] -bottom-[clamp(0.32rem,2.0vw,2.88rem)] left-[clamp(0.2rem,0.0vw,0.7rem)] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="justify-center items-center w-[clamp(14.4rem,90.0vw,50rem)]">
          <p className="text-[clamp(0.72rem,4.5vw,6.48rem)]/[4.5vw] font-SourceSansProSemibold text-neutral-e ">
            Komisi Pemilihan Umum Fakultas Teknik UGM adalah website yang
            dirancang untuk melakukan pelaksanaan pemilihan ketua umum Badan
            Eksekutif Mahasiswa (BEM KMFT) untuk periode 2024-2025. Website
            memiliki fitur untuk melakukan voting dan live count saat pemilihan
            berlangsung.
          </p>
        </div>
        <a href="https://www.electionftugm.web.id/" className="w-[clamp(14.4rem,90.0vw,50rem)] h-[clamp(1.6rem,10.0vw,14.4rem)] mt-[clamp(0.2rem,1.0vw,1.44rem)] text-[clamp(0.5rem,3.0vw,4.32rem)] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md  flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out ">
          Source
        </a>
      </div>
    </section>
  );
}
