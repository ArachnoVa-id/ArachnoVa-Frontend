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
        className="relative w-[45.3rem] h-[45.15rem] lg:flex hidden flex-col justify-center items-center"
        data-aos="fade-left"
      >
        <div className="absolute w-[50rem] aspect-[1037/1070] z-[9] -right-[14.4rem] -top-[28.8rem]">
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
              <li className="pb-[0.29rem]">
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
              <IoCall size="4px" className="text-[#1AB0C8]" />
            </>
          }
          Position="absolute left-0 top-0 z-[10]"
        />
        <Content
          Title="Consultation"
          List={
            <>
              <li className="pb-[0.58rem]">
                Admin akan menanyakan keperluan mendasar dan saran yang sesuai
                dengan kebutuhan client.
              </li>
              <li>
                Pihak client diberi kesempatan untuk berkonsultasi secara
                langsung.
              </li>
            </>
          }
          Icon={<IoChatbubbles size="4px" className="text-[#1AB0C8]" />}
          Position="absolute top-[13.8rem] left-[18.97rem] z-[20]"
          Variant="Left"
        />
        <Content
          Title="Pre-Execution"
          List={
            <>
              <li className="mt-[2.59rem]">
                Apabila berkeinginan untuk mempertimbangkan langkah yang lebih
                lanjut, admin dan client dapat menjadwalkan online meeting.{" "}
              </li>
            </>
          }
          Icon={<IoFolder size="4px" className="text-[#1AB0C8]" />}
          Position="absolute left-[4.28rem] bottom-0 z-[30]"
        />
      </div>
      {/* Mobile Version */}
      <div
        className="relative w-fit h-[50rem] flex lg:hidden flex-col justify-between "
        data-aos="fade-left"
      >
        <Content
          Title="Contact Us"
          List={
            <>
              <li className="text-[4.32rem] mb-[2.16rem]">
                Client menghubungi admin melalui DM Instagram maupun Whatsapp
                atau Email yang tertera{" "}
              </li>
              <li className="text-[4.32rem]">
                Client dapat menanyakan terlebih dahulu hal yang ingin di
                diskusikan sebelum memesan.
              </li>
            </>
          }
          Icon={
            <>
              <IoCall size="16px" className="text-[#1AB0C8]" />
            </>
          }
        />
        <Content
          Title="Consultation"
          List={
            <>
              <li className="pb-[1.15rem]">
                Admin akan menanyakan keperluan mendasar dan saran yang sesuai
                dengan kebutuhan client.
              </li>
              <li>
                Pihak client diberi kesempatan untuk berkonsultasi secara
                langsung.
              </li>
            </>
          }
          Icon={<IoChatbubbles size="16px" className="text-[#1AB0C8]" />}
          Variant="Left"
        />
        <Content
          Title="Pre-Execution"
          List={
            <>
             <li className="mt-[2.59rem] text-[5.04rem]">
                Apabila berkeinginan untuk mempertimbangkan langkah yang lebih
                lanjut, admin dan client dapat menjadwalkan online meeting.{" "}
              </li>
            </>
          }
          Icon={<IoFolder size="16px" className="text-[#1AB0C8]" />}
        />
      </div>
    </>
  );
};

export default FirstTouchPoint;
