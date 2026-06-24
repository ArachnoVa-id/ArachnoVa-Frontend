import Content from "./Content";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { BsBoxFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FinishingProject = () => {
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
          Title="Deployment"
          List={
            <>
              <li className="mt-[0.52rem]">
                Sebelum melakukan deployment, akan dilakukan online meet untuk
                proses penyelesaian kesepakatan.{" "}
              </li>
            </>
          }
          Icon={
            <>
              <BsFillCloudArrowUpFill
                size="15px"
                className="text-[#1AB0C8]"
              />
            </>
          }
          Position="absolute left-[6.2rem] top-0 z-[10]"
        />
        <Content
          Title="Handover"
          List={
            <>
              <li>
                Panduan singkat kepada client untuk prosedur pengelolaan website
              </li>
              <li className="mt-[0.35rem]">
                Memberikan pemahaman yang jelas kepada client dalam pengelolaan
                teknis yang diperlukan.
              </li>
            </>
          }
          Icon={<BsBoxFill size="15px" className="text-[#1AB0C8]" />}
          Position="absolute top-[8.8rem] -left-[0.64rem] z-[20]"
          Variant="Left"
        />
        <Content
          Title="Maintenance"
          List={
            <>
              <li>
                {" "}
                Pemeliharan website yang bersifat teknis masih menjadi tanggung
                jawab kami
              </li>
              <li className="mt-[0.35rem]">
                {" "}
                Client dapat menghubungi kami apabila memiliki problem
                yang terjadi dari website kami
              </li>
            </>
          }
          Icon={<FaLaptopCode size="15px" className="text-[#1AB0C8]" />}
          Position="absolute right-[1.78rem] bottom-[1.14rem] z-[30]"
        />
      </div>

      <div
        className="w-fit h-[125.8rem] flex lg:hidden flex-col justify-between"
        data-aos="fade-left"
      >
        <Content
          Title="Deployment"
          List={
            <>
              <li className="mt-[0.52rem]">
                Sebelum melakukan deployment, akan dilakukan online meet untuk
                proses penyelesaian kesepakatan.{" "}
              </li>
            </>
          }
          Icon={
            <>
              <BsFillCloudArrowUpFill
                size="72px"
                className="text-[#1AB0C8]"
              />
            </>
          }
        />
        <Content
          Title="Handover"
          List={
            <>
              <li>
                Panduan singkat kepada client untuk prosedur pengelolaan website
              </li>
              <li className="mt-[0.35rem]">
                Memberikan pemahaman yang jelas kepada client dalam pengelolaan
                teknis yang diperlukan.
              </li>
            </>
          }
          Icon={<BsBoxFill size="78px" className="text-[#1AB0C8]" />}
          Variant="Left"
        />
        <Content
          Title="Maintenance"
          List={
            <>
              <li>
                {" "}
                Pemeliharan website yang bersifat teknis masih menjadi tanggung
                jawab kami
              </li>
              <li className="mt-[0.35rem]">
                {" "}
                Client dapat menghubungi kami apabila memiliki problem
                yang terjadi dari website kami
              </li>
            </>
          }
          Icon={<FaLaptopCode size="78px" className="text-[#1AB0C8]" />}
        />
      </div>
    </>
  );
};

export default FinishingProject;
