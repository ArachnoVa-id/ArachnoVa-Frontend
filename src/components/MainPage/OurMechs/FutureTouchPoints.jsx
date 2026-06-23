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
        className="relative w-[31.458vw] h-[31.354vw] lg:flex hidden flex-col justify-center items-center"
        data-aos="fade-right"
      >
        <div className="absolute w-[55vw] aspect-[1037/1070] z-[9] -right-[10vw] -top-[20vw]">
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
              <li className="mt-[0.4vw]">
                Client berhak melaporkan bug apabila ditemukannya error atau
                masalah pada website kami.
              </li>
            </>
          }
          Icon={
            <>
              <BsBugFill size="1.042vw" className="text-[#0891B2]" />
            </>
          }
          Position="absolute left-[3.646vw] top-0 z-[10]"
        />
        <Content
          Title="Upgrading"
          List={
            <>
              <li className="mt-[0.8vw]">
                Kami membuka kesempatan apabila Client menginginkan fitur
                tambahan pada website
              </li>
            </>
          }
          Icon={
            <FaScrewdriverWrench size="1.042vw" className="text-[#0891B2]" />
          }
          Position="absolute top-[9.167vw] right-0 z-[20]"
          Variant="Left"
        />
        <Content
          Title="More Projects"
          List={
            <>
              <li className="mt-[1vw]">
                ArachnoVa selalu terbuka untuk kolaborasi dan project baru
                selanjutnya
              </li>
            </>
          }
          Icon={<FaArchive size="1.042vw" className="text-[#0891B2]" />}
          Position="absolute right-[7.865vw] bottom-[0] z-[30]"
        />
      </div>

      <div
        className="w-fit h-[143.721vw] flex lg:hidden flex-col justify-between"
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
              <li className="mt-[0.4vw]">
                Client berhak melaporkan bug apabila ditemukannya error atau
                masalah pada website kami.
              </li>
            </>
          }
          Icon={
            <>
              <BsBugFill size="5.581vw" className="text-[#0891B2]" />
            </>
          }
          Variant="Left"
        />
        <Content
          Title="Upgrading"
          List={
            <>
              <li className="mt-[0.8vw]">
                Kami membuka kesempatan apabila Client menginginkan fitur
                tambahan pada website
              </li>
            </>
          }
          Icon={
            <FaScrewdriverWrench size="5.581vw" className="text-[#0891B2]" />
          }
        />
        <Content
          Title="More Projects"
          List={
            <>
              <li className="mt-[0.8vw]">
                ArachnoVa selalu terbuka untuk kolaborasi dan project baru
                selanjutnya
              </li>
            </>
          }
          Icon={<FaArchive size="5.581vw" className="text-[#0891B2]" />}
          Variant="Left"
        />
      </div>
    </>
  );
};

export default FutureTouchPoints;
