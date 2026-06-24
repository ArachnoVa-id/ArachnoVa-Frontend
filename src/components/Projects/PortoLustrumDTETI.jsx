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
        <div className="w-[17.5rem] text-black pt-[1.75rem] mr-[4.4rem]">
          <h1 className="text-[1.75rem] font-SourceSansProBold">Lustrum DTETI</h1>
          <p className="text-[0.88rem]/[1.31rem] font-SourceSansProSemibold text-neutral-e">
            Rangkaian acara besar perayaan ulang tahun Departemen Teknik Elektro
            dan Teknologi Informasi UGM yang ke-60 lebih tepatnya perayaan
            lustrum yang ke-12. Acara ini dimeriahkan menjadi 3 sub acara besar
            yaitu Tetipendence, Enforian dan Troposfer dengan semua kegiatan
            dinaungi oleh bagian dari DTETI FT UGM.
          </p>
          <a
            href="https://lustrumdteti.id/"
            className="w-[4.1rem] mt-[0.88rem] bg-gradient-to-r rounded-[0.44rem] text-[0.73rem] aspect-[90/48] from-[#1AB0C8] to-[#179FB5] font-InterBold text-white flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out "
          >
            Source
          </a>
        </div>

        <div
          className="relative w-[35.0rem] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src="image/Projects/LustrumDTETIDesktop.svg"
            className=" w-[30.3rem] aspect-[669/376] rounded-xl shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/LustrumDTETIMobile.svg"
            className="absolute w-[7.0rem] aspect-[245/495] rounded-[0.88rem] -bottom-[1.75rem] right-[0.000rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-y-[5.2rem]">
        <h1 className="text-[7.0rem] font-SourceSansProBold text-neutral-g ">
          Lustrum DTETI XII
        </h1>
        <div
          className="relative w-[79.4rem] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src="image/Projects/LustrumDTETIDesktop.svg"
            className=" w-[66.1rem] aspect-[669/376] rounded-xl shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/LustrumDTETIMobile.svg"
            className="absolute w-[17.5rem] aspect-[245/495] rounded-[2.6rem] -bottom-[1.75rem] right-[0.000rem] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="justify-center items-center w-[78.8rem]">
          <p className="text-[3.9rem]/[3.9rem] font-SourceSansProSemibold text-neutral-e ">
            Rangkaian acara besar perayaan ulang tahun Departemen Teknik Elektro
            dan Teknologi Informasi UGM yang ke-60 lebih tepatnya perayaan
            lustrum yang ke-12. Acara ini dimeriahkan menjadi 3 sub acara besar
            yaitu Tetipendence, Enforian dan Troposfer dengan semua kegiatan
            dinaungi oleh bagian dari DTETI FT UGM.
          </p>
        </div>
        <a
          href="https://lustrumdteti.id/"
          className="w-[78.8rem] h-[8.8rem] mt-[0.88rem] text-[2.6rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md  flex justify-center items-center hover:translate-y-[-3px] transition-all duration-500 ease-in-out "
        >
          Source
        </a>
      </div>
    </section>
  );
}
