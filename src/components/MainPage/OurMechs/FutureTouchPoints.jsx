import { BsBugFill } from "react-icons/bs";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import Content from "./Content";
import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FutureTouchPoints = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <div
        className="relative w-[45.3rem] h-[45.15rem] lg:flex hidden flex-col justify-center items-center"
        data-aos="fade-right"
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
          Title="Problem Fixing"
          List={
            <>
              <li>
                Kami bertanggung jawab terhadap problem yang muncul dalam
                website{" "}
              </li>
              <li className="mt-[0.58rem]">
                Client berhak melaporkan bug apabila ditemukannya error atau
                masalah pada website kami.
              </li>
            </>
          }
          Icon={
            <>
              <BsBugFill size="4px" className="text-[#1AB0C8]" />
            </>
          }
          Position="absolute left-[5.25rem] top-0 z-[10]"
        />
        <Content
          Title="Upgrading"
          List={
            <>
              <li className="mt-[1.15rem]">
                Kami membuka kesempatan apabila Client menginginkan fitur
                tambahan pada website
              </li>
            </>
          }
          Icon={
            <FaScrewdriverWrench size="4px" className="text-[#1AB0C8]" />
          }
          Position="absolute top-[13.2rem] right-0 z-[20]"
          Variant="Left"
        />
        <Content
          Title="More Projects"
          List={
            <>
              <li className="mt-[1.44rem]">
                ArachnoVa selalu terbuka untuk kolaborasi dan project baru
                selanjutnya
              </li>
            </>
          }
          Icon={<FaArchive size="4px" className="text-[#1AB0C8]" />}
          Position="absolute right-[11.33rem] bottom-[0] z-[30]"
        />
      </div>

      <div
        className="w-fit h-[50rem] flex lg:hidden flex-col justify-between"
        data-aos="fade-right"
      >
        <Content
          Title="Problem Fixing"
          List={
            <>
              <li>
                Kami bertanggung jawab terhadap problem yang muncul dalam
                website{" "}
              </li>
              <li className="mt-[0.58rem]">
                Client berhak melaporkan bug apabila ditemukannya error atau
                masalah pada website kami.
              </li>
            </>
          }
          Icon={
            <>
              <BsBugFill size="21px" className="text-[#1AB0C8]" />
            </>
          }
          Variant="Left"
        />
        <Content
          Title="Upgrading"
          List={
            <>
              <li className="mt-[1.15rem]">
                Kami membuka kesempatan apabila Client menginginkan fitur
                tambahan pada website
              </li>
            </>
          }
          Icon={
            <FaScrewdriverWrench size="21px" className="text-[#1AB0C8]" />
          }
        />
        <Content
          Title="More Projects"
          List={
            <>
              <li className="mt-[1.15rem]">
                ArachnoVa selalu terbuka untuk kolaborasi dan project baru
                selanjutnya
              </li>
            </>
          }
          Icon={<FaArchive size="21px" className="text-[#1AB0C8]" />}
          Variant="Left"
        />
      </div>
    </>
  );
};

export default FutureTouchPoints;
