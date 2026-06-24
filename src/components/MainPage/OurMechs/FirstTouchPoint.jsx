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
        className="relative w-[17.7rem] h-[17.6rem] lg:flex hidden flex-col justify-center items-center"
        data-aos="fade-left"
      >
        <div className="absolute w-[30.9rem] aspect-[1037/1070] z-[9] -right-[5.6rem] -top-[11.2rem]">
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
              <li className="pb-[0.11rem]">
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
              <IoCall size="9px" className="text-[#1AB0C8]" />
            </>
          }
          Position="absolute left-0 top-0 z-[10]"
        />
        <Content
          Title="Consultation"
          List={
            <>
              <li className="pb-[0.22rem]">
                Admin akan menanyakan keperluan mendasar dan saran yang sesuai
                dengan kebutuhan client.
              </li>
              <li>
                Pihak client diberi kesempatan untuk berkonsultasi secara
                langsung.
              </li>
            </>
          }
          Icon={<IoChatbubbles size="9px" className="text-[#1AB0C8]" />}
          Position="absolute top-[5.4rem] left-[7.4rem] z-[20]"
          Variant="Left"
        />
        <Content
          Title="Pre-Execution"
          List={
            <>
              <li className="mt-[1.01rem]">
                Apabila berkeinginan untuk mempertimbangkan langkah yang lebih
                lanjut, admin dan client dapat menjadwalkan online meeting.{" "}
              </li>
            </>
          }
          Icon={<IoFolder size="9px" className="text-[#1AB0C8]" />}
          Position="absolute left-[1.67rem] bottom-0 z-[30]"
        />
      </div>
      {/* Mobile Version */}
      <div
        className="relative w-fit h-[80.8rem] flex lg:hidden flex-col justify-between "
        data-aos="fade-left"
      >
        <Content
          Title="Contact Us"
          List={
            <>
              <li className="text-[1.69rem] mb-[0.84rem]">
                Client menghubungi admin melalui DM Instagram maupun Whatsapp
                atau Email yang tertera{" "}
              </li>
              <li className="text-[1.69rem]">
                Client dapat menanyakan terlebih dahulu hal yang ingin di
                diskusikan sebelum memesan.
              </li>
            </>
          }
          Icon={
            <>
              <IoCall size="38px" className="text-[#1AB0C8]" />
            </>
          }
        />
        <Content
          Title="Consultation"
          List={
            <>
              <li className="pb-[0.45rem]">
                Admin akan menanyakan keperluan mendasar dan saran yang sesuai
                dengan kebutuhan client.
              </li>
              <li>
                Pihak client diberi kesempatan untuk berkonsultasi secara
                langsung.
              </li>
            </>
          }
          Icon={<IoChatbubbles size="38px" className="text-[#1AB0C8]" />}
          Variant="Left"
        />
        <Content
          Title="Pre-Execution"
          List={
            <>
             <li className="mt-[1.01rem] text-[1.97rem]">
                Apabila berkeinginan untuk mempertimbangkan langkah yang lebih
                lanjut, admin dan client dapat menjadwalkan online meeting.{" "}
              </li>
            </>
          }
          Icon={<IoFolder size="38px" className="text-[#1AB0C8]" />}
        />
      </div>
    </>
  );
};

export default FirstTouchPoint;
