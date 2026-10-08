"use client";

import { useSettings } from "@/context/DataContext";
import { useWhatsApp, WA_MESSAGES } from "@/lib/whatsapp";
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
  const whatsapp = useWhatsApp(WA_MESSAGES.contact);
  const Description =
    "ArachnoVa adalah bagian dari PT ARAH INOVASI DIGITALOKA, perusahaan yang berfokus pada pengembangan produk digital: website company profile, sistem ERP, aplikasi berbasis WhatsApp, dan tools SaaS. Dengan tim yang memiliki kompetensi teknis mendalam di bidang teknologi informasi, kami berkomitmen menghadirkan solusi digital yang kreatif, andal, dan sesuai dengan kebutuhan setiap klien.";
  return (
    <section className="relative w-full lg:min-h-[100vh] flex flex-col justify-center items-center bg-white-MainPage lg:py-[5vw] pt-28 pb-14 overflow-hidden">
      <div className="absolute top-[4.3rem] w-full aspect-[1920/458] z-0 lg:flex hidden">
        <Image src="/image/OurServices/ServicesHero/bg.webp" alt="bg" draggable="false" fill className="object-contain" />
      </div>
      <div className="absolute top-[0] w-full aspect-[430/195] z-0 lg:hidden">
        <Image src="/image/OurServices/ServicesHero/bg-mobile.png" alt="bg" draggable="false" fill className="object-contain" />
      </div>

      <div className="relative w-full max-w-[75rem] mx-auto z-10 lg:px-[5vw] px-[clamp(1.5rem,5vw,5rem)]">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-[3vw]">
          {/* Left main: header + brand panel stacked */}
          <div className="lg:col-span-8 lg:space-y-[3vw]">
            {/* Header */}
            <div data-aos="fade-right">
              <p className="font-SourceSansProBold lg:text-[1.3rem] text-[clamp(1.15rem,4.5vw,1.6rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
                Who We Are
              </p>
              <h1 className="font-SourceSansProBold lg:text-[2.4rem] text-[clamp(2rem,8.5vw,3.25rem)] leading-tight text-neutral-g lg:mt-[0.3rem] mb-6 lg:mb-0">
                About ArachnoVa
              </h1>
            </div>

            {/* Brand panel */}
            <div data-aos="fade-up" className="relative">
              <div className="absolute -left-[8vw] -bottom-[6vw] lg:w-[25vw] w-[40vw] aspect-[433/235] z-0 lg:flex hidden pointer-events-none">
                <Image src="/image/AboutUs/blur-left.webp" alt="blur" draggable="false" fill className="object-contain" />
              </div>
              <div className="relative w-full lg:max-w-[44rem] lg:p-[2.5rem] px-5 pt-12 pb-7 sm:px-8 flex flex-col items-center lg:rounded-[0.8rem] rounded-3xl lg:border border-white z-10"
                style={{
                  background: "rgba(241, 245, 249, 0.50)",
                  boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
                }}>
                <div className="absolute lg:top-[0.6rem] top-5 lg:left-[0.6rem] left-5 flex lg:gap-x-[0.4rem] gap-x-2">
                  <div className="lg:w-[0.6rem] w-3 aspect-[1/1] rounded-full" style={{ background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)", boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3" }} />
                  <div className="lg:w-[0.6rem] w-3 aspect-[1/1] rounded-full" style={{ background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)", boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A" }} />
                  <div className="lg:w-[0.6rem] w-3 aspect-[1/1] rounded-full" style={{ background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)", boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0" }} />
                </div>
                <div className="flex flex-col items-center lg:mb-[0.8rem] mb-5">
                  <div className="relative lg:w-[3.5rem] w-[clamp(5rem,20vw,18.4rem)] lg:aspect-[88/65] aspect-[79/58]">
                    <Image src="/image/AboutUs/logo.png" alt="logo" draggable="false" fill className="object-contain" />
                  </div>
                  <p className="font-CoolveticaReg lg:text-[2rem] text-[clamp(2.5rem,12vw,9.3rem)] text-[#1AB0C8]">ARACHNOVA</p>
                </div>
                <div className="w-full lg:max-w-[38rem] lg:h-[0.05rem] h-px bg-neutral-d opacity-50 lg:mb-[1rem] mb-5" />
                <p className="w-full lg:max-w-[38rem] font-SourceSansProSemibold lg:text-[0.9rem] text-[clamp(15px,4vw,19px)] text-neutral-g lg:leading-[1.6rem] leading-relaxed text-center">
                  {Description}
                </p>
              </div>
            </div>
          </div>

          {/* Right sidebar: Get In Touch - minimal */}
          <div className="lg:col-span-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[1.5rem]">
            <div data-aos="fade-left" className="mt-12 lg:mt-0 lg:flex lg:flex-col lg:items-center lg:gap-y-[1.2rem]">
              <h2 className="font-SourceSansProBold lg:text-[1.3rem] text-[clamp(1.75rem,7.5vw,2.75rem)] leading-tight text-neutral-g">Get In Touch</h2>
              <p className="font-SourceSansProSemibold lg:text-[0.8rem] text-[clamp(1.05rem,4.5vw,1.5rem)] text-neutral-e mb-4 lg:mb-0">Let's Connect</p>
              <div className="flex lg:flex-col lg:gap-y-[0.8rem] gap-x-[clamp(2rem,8vw,5.6rem)] lg:items-center lg:mt-[0.5rem]">
                <SocialMediaIcon label="Email ArachnoVa" Icon={<IoIosMail size="32px" className="text-white" />} href={email} />
                <SocialMediaIcon label="Instagram ArachnoVa" Icon={<FaInstagram size="30px" className="text-white" />} href={instagram} />
                <SocialMediaIcon label="WhatsApp ArachnoVa" Icon={<FaWhatsapp size="30px" className="text-white" />} href={whatsapp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
