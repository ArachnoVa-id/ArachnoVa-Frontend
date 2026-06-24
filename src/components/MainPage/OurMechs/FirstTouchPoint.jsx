import Content from "./Content";
import { IoCall } from "react-icons/io5";
import { IoChatbubbles } from "react-icons/io5";
import { IoFolder } from "react-icons/io5";
import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FirstTouchPoint = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <div
        className="relative w-[27.5rem] h-[27.4rem] lg:flex hidden flex-col justify-center items-center"
        data-aos="fade-left"
      >
        <div className="absolute w-[48.1rem] aspect-[1037/1070] z-[9] -right-[8.8rem] -top-[17.5rem]">
          <Image
            src="/image/OurMechs/bg-right.png"
            alt="bg"
            fill
            className="object-contain"
            draggable="false"
          />
        </div>
        <Content
          Title="Contact Us"
          List={
            <>
              <li className="pb-[0.18rem]">
                Client menghubungi admin melalui DM Instagram maupun Whatsapp
                atau Email yang tertera{" "}
              </li>
              <li>
                Client dapat menanyakan terlebih dahulu hal yang ingin di
                diskusikan sebelum memesan.
              </li>
            </>
          }
          Icon={
            <>
              <IoCall size="15px" className="text-[#1AB0C8]" />
            </>
          }
          Position="absolute left-0 top-0 z-[10]"
        />
        <Content
          Title="Consultation"
          List={
            <>
              <li className="pb-[0.35rem]">
                Admin akan menanyakan keperluan mendasar dan saran yang sesuai
                dengan kebutuhan client.
              </li>
              <li>
                Pihak client diberi kesempatan untuk berkonsultasi secara
                langsung.
              </li>
            </>
          }
          Icon={<IoChatbubbles size="15px" className="text-[#1AB0C8]" />}
          Position="absolute top-[8.4rem] left-[11.5rem] z-[20]"
          Variant="Left"
        />
        <Content
          Title="Pre-Execution"
          List={
            <>
              <li className="mt-[1.58rem]">
                Apabila berkeinginan untuk mempertimbangkan langkah yang lebih
                lanjut, admin dan client dapat menjadwalkan online meeting.{" "}
              </li>
            </>
          }
          Icon={<IoFolder size="15px" className="text-[#1AB0C8]" />}
          Position="absolute left-[2.6rem] bottom-0 z-[30]"
        />
      </div>
      {/* Mobile Version */}
      <div
        className="relative w-fit h-[125.8rem] flex lg:hidden flex-col justify-between "
        data-aos="fade-left"
      >
        <Content
          Title="Contact Us"
          List={
            <>
              <li className="text-[2.6rem] mb-[1.31rem]">
                Client menghubungi admin melalui DM Instagram maupun Whatsapp
                atau Email yang tertera{" "}
              </li>
              <li className="text-[2.6rem]">
                Client dapat menanyakan terlebih dahulu hal yang ingin di
                diskusikan sebelum memesan.
              </li>
            </>
          }
          Icon={
            <>
              <IoCall size="59px" className="text-[#1AB0C8]" />
            </>
          }
        />
        <Content
          Title="Consultation"
          List={
            <>
              <li className="pb-[0.7rem]">
                Admin akan menanyakan keperluan mendasar dan saran yang sesuai
                dengan kebutuhan client.
              </li>
              <li>
                Pihak client diberi kesempatan untuk berkonsultasi secara
                langsung.
              </li>
            </>
          }
          Icon={<IoChatbubbles size="59px" className="text-[#1AB0C8]" />}
          Variant="Left"
        />
        <Content
          Title="Pre-Execution"
          List={
            <>
             <li className="mt-[1.58rem] text-[3.1rem]">
                Apabila berkeinginan untuk mempertimbangkan langkah yang lebih
                lanjut, admin dan client dapat menjadwalkan online meeting.{" "}
              </li>
            </>
          }
          Icon={<IoFolder size="59px" className="text-[#1AB0C8]" />}
        />
      </div>
    </>
  );
};

export default FirstTouchPoint;
