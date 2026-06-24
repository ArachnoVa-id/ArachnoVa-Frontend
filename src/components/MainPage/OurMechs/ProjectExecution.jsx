import Content from "./Content";
import { IoIosPeople } from "react-icons/io";
import { IoIosArchive } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectExecution = () => {
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
          Title="Meeting"
          List={
            <>
              <li className="mt-[0.2rem]">
                Diadakan online meeting untuk interaksi yang mendetail antara
                kedua belah pihak.
              </li>
            </>
          }
          Icon={
            <>
              <IoIosPeople size="6px" className="text-[#1AB0C8]" />
            </>
          }
          Position="absolute right-0 top-0 z-[10]"
        />
        <Content
          Title="Aggrement"
          List={
            <>
              <li className="mt-[0.2rem]">
                Melakukan diskusi dan pertimbangan dalam projects
              </li>
              <li className="mt-[0.2rem]">
                Apabila mencapai kesepakatan, client dan PM akan menandatangani
                MoU.
              </li>
            </>
          }
          Icon={<IoIosArchive size="4px" className="text-[#1AB0C8]" />}
          Position="absolute top-[1.22rem] -left-[0.24rem] z-[20]"
          Variant="Left"
        />
        <Content
          Title="Production"
          List={
            <>
              <li className="mt-[0.2rem]">
                Saat proses pengerjaan, PM akan mengupdate progress dari project
                secara berkala.
              </li>
              <li className="mt-[0.2rem]">
                Client juga berhak melakukan follow up terbaru dalam grup chat
                yang dibentuk
              </li>
            </>
          }
          Icon={<IoSettings size="5px" className="text-[#1AB0C8]" />}
          Position="absolute right-[0.32rem] bottom-[0.42rem] z-[30]"
        />
      </div>

      <div className="w-fit h-[23.0rem] flex lg:hidden flex-col justify-between" data-aos="fade-right">
        <div
          className="absolute w-[6.4rem] aspect-[1037/1070] z-[9] right-[0.2rem]"
        >
          <Image
            src="/image/OurMechs/bg-right.png"
            alt="bg"
            draggable="false"
            fill
            className="object-contain"
          />
        </div>
        <Content
          Title="Meeting"
          List={
            <>
              <li className="mt-[0.48rem]">
                Diadakan online meeting untuk interaksi yang mendetail antara
                kedua belah pihak.
              </li>
            </>
          }
          Icon={
            <>
              <IoIosPeople size="32px" className="text-[#1AB0C8]" />
            </>
          }
          Variant="Left"
        />
        <Content
          Title="Aggrement"
          List={
            <>
              <li className="mt-[0.2rem]">
                Melakukan diskusi dan pertimbangan dalam projects
              </li>
              <li className="mt-[0.2rem]">
                Apabila mencapai kesepakatan, client dan PM akan menandatangani
                MoU.
              </li>
            </>
          }
          Icon={<IoIosArchive size="24px" className="text-[#1AB0C8]" />}
        />
        <Content
          Title="Production"
          List={
            <>
             <li className="mt-[0.2rem]">
                Saat proses pengerjaan, PM akan mengupdate progress dari project
                secara berkala.
              </li>
              <li className="mt-[0.2rem]">
                Client juga berhak melakukan follow up terbaru dalam grup chat
                yang dibentuk
              </li>
            </>
          }
          Icon={<IoSettings size="23px" className="text-[#1AB0C8]" />}
          Variant="Left"
        />
      </div>
    </>
  );
};

export default ProjectExecution;
