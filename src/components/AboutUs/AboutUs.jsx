import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const email = "mailto:arachnova.id@gmail.com";
  const instagram = "https://www.instagram.com/arachnova.id/";
  const whatsapp = "https://wa.me/6287882832538";

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-white-MainPage lg:py-[6vw] py-[15vw] px-[5vw]">
      {/* Combined card */}
      <div data-aos="fade-up" className="relative w-full max-w-[55rem] bg-white rounded-[1.2rem] border border-border shadow-[0_10px_50px_-15px_rgba(0,0,0,0.12)] overflow-hidden">
        {/* Decorative top gradient line */}
        <div className="h-[0.3rem] w-full bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]" />

        <div className="p-[3rem] sm:p-[3.5rem] flex flex-col items-center text-center">
          {/* Header */}
          <div data-aos="fade-down" className="mb-[2rem]">
            <p className="font-SourceSansProBold text-[0.8rem] tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
              Who We Are
            </p>
            <h1 className="font-SourceSansProBold text-[2rem] sm:text-[2.5rem] text-neutral-g mt-[0.3rem]">
              About ArachnoVa
            </h1>
          </div>

          {/* Logo + Brand */}
          <div className="mb-[1.5rem]">
            <div className="relative w-[4rem] h-[3rem] mx-auto mb-[0.8rem]">
              <Image src="/image/AboutUs/logo.png" alt="logo" fill className="object-contain" draggable="false" />
            </div>
            <p className="font-CoolveticaReg text-[2.2rem] text-[#1AB0C8] tracking-wide">ARACHNOVA</p>
          </div>

          {/* Divider */}
          <div className="w-[4rem] h-[0.15rem] bg-gradient-to-r from-[#1AB0C8] to-[#84D4E1] rounded-full mb-[1.5rem]" />

          {/* Description */}
          <p className="text-[0.95rem] leading-[1.7] text-neutral-e max-w-[40rem]">
            ArachnoVa adalah perusahaan yang berfokus pada penyediaan layanan desain dan pengembangan website profesional. Dengan tim yang memiliki kompetensi teknis mendalam di bidang teknologi informasi, kami berkomitmen untuk menghadirkan solusi web inovatif yang kreatif, responsif, dan sesuai dengan kebutuhan setiap klien.
          </p>

          {/* Divider */}
          <div className="w-full h-[0.05rem] bg-border my-[2rem]" />

          {/* Get In Touch */}
          <div data-aos="fade-up" className="w-full">
            <h2 className="font-SourceSansProBold text-[1.3rem] text-neutral-g mb-[0.3rem]">Get In Touch</h2>
            <p className="text-[0.85rem] text-neutral-e mb-[1.2rem]">Let's Connect and Create Together</p>
            <div className="flex justify-center gap-x-[1.2rem]">
              <a href={email} className="w-[2.8rem] h-[2.8rem] rounded-full bg-[#1AB0C8] hover:bg-LightBlue-d flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md">
                <IoIosMail size="1.4rem" className="text-white" />
              </a>
              <a href={instagram} className="w-[2.8rem] h-[2.8rem] rounded-full bg-[#1AB0C8] hover:bg-LightBlue-d flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md">
                <FaInstagram size="1.3rem" className="text-white" />
              </a>
              <a href={whatsapp} className="w-[2.8rem] h-[2.8rem] rounded-full bg-[#1AB0C8] hover:bg-LightBlue-d flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md">
                <FaWhatsapp size="1.3rem" className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
