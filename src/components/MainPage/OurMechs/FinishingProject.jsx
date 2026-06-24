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
          Title="Deployment"
          List={
            <>
              <li className="mt-[clamp(0.2rem,0.6vw,0.86rem)]">
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
          Position="absolute left-[clamp(1.12rem,7.031vw,10.12rem)] top-0 z-[10]"
        />
        <Content
          Title="Handover"
          List={
            <>
              <li>
                Panduan singkat kepada client untuk prosedur pengelolaan website
              </li>
              <li className="mt-[clamp(0.2rem,0.4vw,0.58rem)]">
                Memberikan pemahaman yang jelas kepada client dalam pengelolaan
                teknis yang diperlukan.
              </li>
            </>
          }
          Icon={<BsBoxFill size="1.042vw" className="text-[#1AB0C8]" />}
          Position="absolute top-[clamp(1.62rem,10.104vw,14.55rem)] -left-[clamp(0.2rem,0.729vw,1.05rem)] z-[20]"
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
              <li className="mt-[clamp(0.2rem,0.4vw,0.58rem)]">
                {" "}
                Client dapat menghubungi kami apabila memiliki problem
                yang terjadi dari website kami
              </li>
            </>
          }
          Icon={<FaLaptopCode size="1.042vw" className="text-[#1AB0C8]" />}
          Position="absolute right-[clamp(0.32rem,2.031vw,2.92rem)] bottom-[clamp(0.21rem,1.304vw,1.88rem)] z-[30]"
        />
      </div>

      <div
        className="w-fit h-[clamp(23.0rem,143.721vw,50rem)] flex lg:hidden flex-col justify-between"
        data-aos="fade-left"
      >
        <Content
          Title="Deployment"
          List={
            <>
              <li className="mt-[clamp(0.2rem,0.6vw,0.86rem)]">
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
              <li className="mt-[clamp(0.2rem,0.4vw,0.58rem)]">
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
              <li className="mt-[clamp(0.2rem,0.4vw,0.58rem)]">
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
