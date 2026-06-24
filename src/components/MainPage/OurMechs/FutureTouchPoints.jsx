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
        className="relative w-[5.03rem] h-[5.02rem] lg:flex hidden flex-col justify-center items-center"
        data-aos="fade-right"
      >
        <div className="absolute w-[8.8rem] aspect-[1037/1070] z-[9] -right-[1.6rem] -top-[3.2rem]">
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
              <li className="mt-[0.2rem]">
                Client berhak melaporkan bug apabila ditemukannya error atau
                masalah pada website kami.
              </li>
            </>
          }
          Icon={
            <>
              <BsBugFill size="20px" className="text-[#1AB0C8]" />
            </>
          }
          Position="absolute left-[0.58rem] top-0 z-[10]"
        />
        <Content
          Title="Upgrading"
          List={
            <>
              <li className="mt-[0.2rem]">
                Kami membuka kesempatan apabila Client menginginkan fitur
                tambahan pada website
              </li>
            </>
          }
          Icon={
            <FaScrewdriverWrench size="20px" className="text-[#1AB0C8]" />
          }
          Position="absolute top-[1.47rem] right-0 z-[20]"
          Variant="Left"
        />
        <Content
          Title="More Projects"
          List={
            <>
              <li className="mt-[0.2rem]">
                ArachnoVa selalu terbuka untuk kolaborasi dan project baru
                selanjutnya
              </li>
            </>
          }
          Icon={<FaArchive size="20px" className="text-[#1AB0C8]" />}
          Position="absolute right-[1.26rem] bottom-[0] z-[30]"
        />
      </div>

      <div
        className="w-fit h-[23.0rem] flex lg:hidden flex-col justify-between"
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
              <li className="mt-[0.2rem]">
                Client berhak melaporkan bug apabila ditemukannya error atau
                masalah pada website kami.
              </li>
            </>
          }
          Icon={
            <>
              <BsBugFill size="107px" className="text-[#1AB0C8]" />
            </>
          }
          Variant="Left"
        />
        <Content
          Title="Upgrading"
          List={
            <>
              <li className="mt-[0.2rem]">
                Kami membuka kesempatan apabila Client menginginkan fitur
                tambahan pada website
              </li>
            </>
          }
          Icon={
            <FaScrewdriverWrench size="107px" className="text-[#1AB0C8]" />
          }
        />
        <Content
          Title="More Projects"
          List={
            <>
              <li className="mt-[0.2rem]">
                ArachnoVa selalu terbuka untuk kolaborasi dan project baru
                selanjutnya
              </li>
            </>
          }
          Icon={<FaArchive size="107px" className="text-[#1AB0C8]" />}
          Variant="Left"
        />
      </div>
    </>
  );
};

export default FutureTouchPoints;
