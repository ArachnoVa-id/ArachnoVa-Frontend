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
        className="relative w-[clamp(5.03rem,31.458vw,45.3rem)] h-[clamp(5.02rem,31.354vw,45.15rem)] lg:flex hidden flex-col justify-center items-center"
        data-aos="fade-left"
      >
        <div className="absolute w-[clamp(8.8rem,55.0vw,50rem)] aspect-[1037/1070] z-[9] -right-[clamp(1.6rem,10.0vw,14.4rem)] -top-[clamp(3.2rem,20.0vw,28.8rem)]">
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
              <li className="pb-[clamp(0.2rem,0.2vw,0.29rem)]">
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
              <IoCall size="1.042vw" className="text-[#1AB0C8]" />
            </>
          }
          Position="absolute left-0 top-0 z-[10]"
        />
        <Content
          Title="Consultation"
          List={
            <>
              <li className="pb-[clamp(0.2rem,0.4vw,0.58rem)]">
                Admin akan menanyakan keperluan mendasar dan saran yang sesuai
                dengan kebutuhan client.
              </li>
              <li>
                Pihak client diberi kesempatan untuk berkonsultasi secara
                langsung.
              </li>
            </>
          }
          Icon={<IoChatbubbles size="1.042vw" className="text-[#1AB0C8]" />}
          Position="absolute top-[clamp(1.53rem,9.583vw,13.8rem)] left-[clamp(2.11rem,13.177vw,18.97rem)] z-[20]"
          Variant="Left"
        />
        <Content
          Title="Pre-Execution"
          List={
            <>
              <li className="mt-[clamp(0.29rem,1.8vw,2.59rem)]">
                Apabila berkeinginan untuk mempertimbangkan langkah yang lebih
                lanjut, admin dan client dapat menjadwalkan online meeting.{" "}
              </li>
            </>
          }
          Icon={<IoFolder size="1.042vw" className="text-[#1AB0C8]" />}
          Position="absolute left-[clamp(0.48rem,2.969vw,4.28rem)] bottom-0 z-[30]"
        />
      </div>
      {/* Mobile Version */}
      <div
        className="relative w-fit h-[clamp(23.0rem,143.721vw,50rem)] flex lg:hidden flex-col justify-between "
        data-aos="fade-left"
      >
        <Content
          Title="Contact Us"
          List={
            <>
              <li className="text-[clamp(0.5rem,3.0vw,4.32rem)] mb-[clamp(0.24rem,1.5vw,2.16rem)]">
                Client menghubungi admin melalui DM Instagram maupun Whatsapp
                atau Email yang tertera{" "}
              </li>
              <li className="text-[clamp(0.5rem,3.0vw,4.32rem)]">
                Client dapat menanyakan terlebih dahulu hal yang ingin di
                diskusikan sebelum memesan.
              </li>
            </>
          }
          Icon={
            <>
              <IoCall size="4.186vw" className="text-[#1AB0C8]" />
            </>
          }
        />
        <Content
          Title="Consultation"
          List={
            <>
              <li className="pb-[clamp(0.2rem,0.8vw,1.15rem)]">
                Admin akan menanyakan keperluan mendasar dan saran yang sesuai
                dengan kebutuhan client.
              </li>
              <li>
                Pihak client diberi kesempatan untuk berkonsultasi secara
                langsung.
              </li>
            </>
          }
          Icon={<IoChatbubbles size="4.186vw" className="text-[#1AB0C8]" />}
          Variant="Left"
        />
        <Content
          Title="Pre-Execution"
          List={
            <>
             <li className="mt-[clamp(0.29rem,1.8vw,2.59rem)] text-[clamp(0.56rem,3.5vw,5.04rem)]">
                Apabila berkeinginan untuk mempertimbangkan langkah yang lebih
                lanjut, admin dan client dapat menjadwalkan online meeting.{" "}
              </li>
            </>
          }
          Icon={<IoFolder size="4.186vw" className="text-[#1AB0C8]" />}
        />
      </div>
    </>
  );
};

export default FirstTouchPoint;
