"use client";

import { useSettings } from "@/context/DataContext";
import { IoIosMail } from "react-icons/io";
import SocialMediaIcon from "./SocialMediaIcon";
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
  const Description =
    "ArachnoVa adalah perusahaan yang berfokus pada penyediaan layanan desain dan pengembangan website profesional. Dengan tim yang memiliki kompetensi teknis mendalam di bidang teknologi informasi, kami berkomitmen untuk menghadirkan solusi web inovatif yang kreatif, responsif, dan sesuai dengan kebutuhan setiap klien.";
  return (
    <section className="relative w-full lg:min-h-[100vh] flex flex-col justify-center items-center bg-white-MainPage lg:py-[5vw] py-[15vw] overflow-hidden">
      <div className="absolute top-[4.3rem] w-full aspect-[1920/458] z-0 lg:flex hidden">
        <Image src="/image/OurServices/ServicesHero/bg.png" alt="bg" draggable="false" fill className="object-contain" />
      </div>
      <div className="absolute top-[0] w-full aspect-[430/195] z-0 lg:hidden">
        <Image src="/image/OurServices/ServicesHero/bg-mobile.png" alt="bg" draggable="false" fill className="object-contain" />
      </div>

      <div className="relative w-full max-w-[75rem] mx-auto z-10 lg:px-[5vw] px-[5.581vw]">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-[3vw]">
          {/* Left main: header + brand panel stacked */}
          <div className="lg:col-span-8 lg:space-y-[3vw]">
            {/* Header */}
            <div data-aos="fade-right">
              <p className="font-SourceSansProBold lg:text-[1.3rem] text-[4.2rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
                Who We Are
              </p>
              <h1 className="font-SourceSansProBold lg:text-[2.4rem] text-[7.0rem] text-neutral-g lg:mt-[0.3rem]">
                About ArachnoVa
              </h1>
            </div>

            {/* Brand panel */}
            <div data-aos="fade-up" className="relative">
              <div className="absolute -left-[8vw] -bottom-[6vw] lg:w-[25vw] w-[40vw] aspect-[433/235] z-0 lg:flex hidden pointer-events-none">
                <Image src="/image/AboutUs/blur-left.png" alt="blur" draggable="false" fill className="object-contain" />
              </div>
              <div className="relative lg:w-[44rem] w-[90.7rem] lg:p-[2.5rem] p-[5rem] flex flex-col items-center lg:rounded-[0.8rem] rounded-[3.7rem] lg:border border-white z-10"
                style={{
                  background: "rgba(241, 245, 249, 0.50)",
                  boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
                }}>
                <div className="absolute lg:top-[0.6rem] top-[3rem] lg:left-[0.6rem] left-[3rem] flex lg:gap-x-[0.4rem] gap-x-[2.8rem]">
                  <div className="lg:w-[0.6rem] w-[2.8rem] aspect-[1/1] rounded-full" style={{ background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)", boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3" }} />
                  <div className="lg:w-[0.6rem] w-[2.8rem] aspect-[1/1] rounded-full" style={{ background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)", boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A" }} />
                  <div className="lg:w-[0.6rem] w-[2.8rem] aspect-[1/1] rounded-full" style={{ background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)", boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0" }} />
                </div>
                <div className="flex flex-col items-center lg:mb-[0.8rem] mb-[3rem]">
                  <div className="relative lg:w-[3.5rem] w-[18.4rem] lg:aspect-[88/65] aspect-[79/58]">
                    <Image src="/image/AboutUs/logo.png" alt="logo" draggable="false" fill className="object-contain" />
                  </div>
                  <p className="font-CoolveticaReg lg:text-[2rem] text-[9.3rem] text-[#1AB0C8]">ARACHNOVA</p>
                </div>
                <div className="lg:w-[38rem] w-[82.8rem] lg:h-[0.05rem] h-[0.3rem] bg-neutral-d opacity-50 lg:mb-[1rem] mb-[4.2rem]" />
                <p className="lg:w-[38rem] w-[82.8rem] font-SourceSansProSemibold lg:text-[0.9rem] text-[4.2rem] text-neutral-g lg:leading-[1.6rem] leading-[5rem] text-center">
                  {Description}
                </p>
              </div>
            </div>
          </div>

          {/* Right sidebar: Get In Touch vertical */}
          <div className="lg:col-span-4 lg:flex lg:items-center lg:justify-center">
            <div data-aos="fade-left" className="lg:w-[16rem] lg:p-[1.8rem] p-[9.3rem] bg-white lg:rounded-[0.8rem] rounded-[4.7rem] lg:border border-border shadow-[0_10px_40px_-10px_rgba(71,85,105,0.2)] lg:flex lg:flex-col lg:items-center">
              <h2 className="font-SourceSansProBold lg:text-[1.1rem] text-[7.0rem] text-neutral-g lg:text-center">Get In Touch</h2>
              <p className="font-SourceSansProSemibold lg:text-[0.7rem] text-[4.2rem] text-neutral-e lg:text-center lg:mt-[0.3rem] lg:mb-[1.5rem] mb-[5.6rem]">
                Let's Connect
              </p>
              <div className="flex lg:flex-col lg:gap-y-[0.8rem] gap-x-[5.6rem] lg:items-center">
                <SocialMediaIcon Icon={<IoIosMail size="22px" className="text-white" />} href={email} />
                <SocialMediaIcon Icon={<FaInstagram size="20px" className="text-white" />} href={instagram} />
                <SocialMediaIcon Icon={<FaWhatsapp size="20px" className="text-white" />} href={whatsapp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
