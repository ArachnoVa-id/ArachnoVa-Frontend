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
        <div className="w-[20vw] text-black pt-[2vw] mr-[5vw]">
          <h1 className="text-[2vw] font-SourceSansProBold">Lustrum DTETI</h1>
          <p className="text-[1vw]/[1.5vw] font-SourceSansProSemibold text-neutral-e">
            Rangkaian acara besar perayaan ulang tahun Departemen Teknik Elektro
            dan Teknologi Informasi UGM yang ke-60 lebih tepatnya perayaan
            lustrum yang ke-12. Acara ini dimeriahkan menjadi 3 sub acara besar
            yaitu Tetipendence, Enforian dan Troposfer dengan semua kegiatan
            dinaungi oleh bagian dari DTETI FT UGM.
          </p>
          <a
            href="https://lustrumdteti.id/"
            className="w-[4.688vw] mt-[1vw] bg-gradient-to-r rounded-[0.5vw] text-[0.833vw] aspect-[90/48] from-[#1AB0C8] to-[#179FB5] font-InterBold text-white flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out "
          >
            Source
          </a>
        </div>

        <div
          className="relative w-[40vw] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src="image/Projects/LustrumDTETIDesktop.svg"
            className=" w-[34.6vw] aspect-[669/376] rounded-xl shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/LustrumDTETIMobile.svg"
            className="absolute w-[8vw] aspect-[245/495] rounded-[1vw] -bottom-[2vw] right-[0vw] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-y-[6vw]">
        <h1 className="text-[8vw] font-SourceSansProBold text-neutral-g ">
          Lustrum DTETI XII
        </h1>
        <div
          className="relative w-[90.698vw] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src="image/Projects/LustrumDTETIDesktop.svg"
            className=" w-[75.6vw] aspect-[669/376] rounded-xl shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src="/image/Projects/LustrumDTETIMobile.svg"
            className="absolute w-[20vw] aspect-[245/495] rounded-[3vw] -bottom-[2vw] right-[0vw] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="justify-center items-center w-[90vw]">
          <p className="text-[4.5vw]/[4.5vw] font-SourceSansProSemibold text-neutral-e ">
            Rangkaian acara besar perayaan ulang tahun Departemen Teknik Elektro
            dan Teknologi Informasi UGM yang ke-60 lebih tepatnya perayaan
            lustrum yang ke-12. Acara ini dimeriahkan menjadi 3 sub acara besar
            yaitu Tetipendence, Enforian dan Troposfer dengan semua kegiatan
            dinaungi oleh bagian dari DTETI FT UGM.
          </p>
        </div>
        <a
          href="https://lustrumdteti.id/"
          className="w-[90vw] h-[10vw] mt-[1vw] text-[3vw] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md  flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out "
        >
          Source
        </a>
      </div>
    </section>
  );
}
