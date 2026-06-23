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
        className="relative w-[31.458vw] h-[31.354vw] lg:flex hidden flex-col justify-center items-center"
        data-aos="fade-left"
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
          Title="Deployment"
          List={
            <>
              <li className="mt-[0.6vw]">
                Sebelum melakukan deployment, akan dilakukan online meet untuk
                proses penyelesaian kesepakatan.{" "}
              </li>
            </>
          }
          Icon={
            <>
              <BsFillCloudArrowUpFill
                size="1.042vw"
                className="text-[#1AB0C8]"
              />
            </>
          }
          Position="absolute left-[7.031vw] top-0 z-[10]"
        />
        <Content
          Title="Handover"
          List={
            <>
              <li>
                Panduan singkat kepada client untuk prosedur pengelolaan website
              </li>
              <li className="mt-[0.4vw]">
                Memberikan pemahaman yang jelas kepada client dalam pengelolaan
                teknis yang diperlukan.
              </li>
            </>
          }
          Icon={<BsBoxFill size="1.042vw" className="text-[#1AB0C8]" />}
          Position="absolute top-[10.104vw] -left-[0.729vw] z-[20]"
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
              <li className="mt-[0.4vw]">
                {" "}
                Client dapat menghubungi kami apabila memiliki problem
                yang terjadi dari website kami
              </li>
            </>
          }
          Icon={<FaLaptopCode size="1.042vw" className="text-[#1AB0C8]" />}
          Position="absolute right-[2.031vw] bottom-[1.304vw] z-[30]"
        />
      </div>

      <div
        className="w-fit h-[143.721vw] flex lg:hidden flex-col justify-between"
        data-aos="fade-left"
      >
        <Content
          Title="Deployment"
          List={
            <>
              <li className="mt-[0.6vw]">
                Sebelum melakukan deployment, akan dilakukan online meet untuk
                proses penyelesaian kesepakatan.{" "}
              </li>
            </>
          }
          Icon={
            <>
              <BsFillCloudArrowUpFill
                size="5.116vw"
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
              <li className="mt-[0.4vw]">
                Memberikan pemahaman yang jelas kepada client dalam pengelolaan
                teknis yang diperlukan.
              </li>
            </>
          }
          Icon={<BsBoxFill size="5.581vw" className="text-[#1AB0C8]" />}
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
              <li className="mt-[0.4vw]">
                {" "}
                Client dapat menghubungi kami apabila memiliki problem
                yang terjadi dari website kami
              </li>
            </>
          }
          Icon={<FaLaptopCode size="5.581vw" className="text-[#1AB0C8]" />}
        />
      </div>
    </>
  );
};

export default FinishingProject;
