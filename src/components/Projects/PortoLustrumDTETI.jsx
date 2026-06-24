"use client";

import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortoLustrumDTETI() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section className="w-full lg:aspect-[1920/748] max-lg:aspect-[430/552] flex flex-col items-center justify-center bg-[#F1F4F4] overflow-hidden ">
      {/* Desktop */}
      <div className="flex max-lg:hidden ">
        <div className="w-[28.8rem] text-black pt-[2.88rem] mr-[7.2rem]">
          <h1 className="text-[2.88rem] font-SourceSansProBold">Lustrum DTETI</h1>
          <p className="text-[1.44rem]/[0.35rem] font-SourceSansProSemibold text-neutral-e">
            Rangkaian acara besar perayaan ulang tahun Departemen Teknik Elektro
            dan Teknologi Informasi UGM yang ke-60 lebih tepatnya perayaan
            lustrum yang ke-12. Acara ini dimeriahkan menjadi 3 sub acara besar
            yaitu Tetipendence, Enforian dan Troposfer dengan semua kegiatan
            dinaungi oleh bagian dari DTETI FT UGM.
          </p>
          <a
            href="https://lustrumdteti.id/"
            className="w-[6.75rem] mt-[1.44rem] bg-gradient-to-r rounded-[0.72rem] text-[1.2rem] aspect-[90/48] from-[#1AB0C8] to-[#179FB5] font-InterBold text-white flex justify-center items-center hover:translate-y-[-1px] transition-all duration-500 ease-in-out "
          >
            Source
          </a>
        </div>

        <div
          className="relative w-[50rem] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src="image/Projects/LustrumDTETIDesktop.svg"
            className=" w-[49.82rem] aspect-[669/376] rounded-xl shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/LustrumDTETIMobile.svg"
            className="absolute w-[11.52rem] aspect-[245/495] rounded-[1.44rem] -bottom-[2.88rem] right-[0.7rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-y-[8.64rem]">
        <h1 className="text-[8rem] font-SourceSansProBold text-neutral-g ">
          Lustrum DTETI XII
        </h1>
        <div
          className="relative w-[50rem] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src="image/Projects/LustrumDTETIDesktop.svg"
            className=" w-[50rem] aspect-[669/376] rounded-xl shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/LustrumDTETIMobile.svg"
            className="absolute w-[28.8rem] aspect-[245/495] rounded-[4.32rem] -bottom-[2.88rem] right-[0.7rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="justify-center items-center w-[50rem]">
          <p className="text-[6.48rem]/[1.05rem] font-SourceSansProSemibold text-neutral-e ">
            Rangkaian acara besar perayaan ulang tahun Departemen Teknik Elektro
            dan Teknologi Informasi UGM yang ke-60 lebih tepatnya perayaan
            lustrum yang ke-12. Acara ini dimeriahkan menjadi 3 sub acara besar
            yaitu Tetipendence, Enforian dan Troposfer dengan semua kegiatan
            dinaungi oleh bagian dari DTETI FT UGM.
          </p>
        </div>
        <a
          href="https://lustrumdteti.id/"
          className="w-[50rem] h-[14.4rem] mt-[1.44rem] text-[4.32rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md  flex justify-center items-center hover:translate-y-[-1px] transition-all duration-500 ease-in-out "
        >
          Source
        </a>
      </div>
    </section>
  );
}
