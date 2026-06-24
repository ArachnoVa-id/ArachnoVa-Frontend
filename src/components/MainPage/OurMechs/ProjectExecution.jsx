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
          Title="Meeting"
          List={
            <>
              <li className="mt-[1.44rem]">
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
              <li className="mt-[0.72rem]">
                Melakukan diskusi dan pertimbangan dalam projects
              </li>
              <li className="mt-[0.58rem]">
                Apabila mencapai kesepakatan, client dan PM akan menandatangani
                MoU.
              </li>
            </>
          }
          Icon={<IoIosArchive size="4px" className="text-[#1AB0C8]" />}
          Position="absolute top-[10.95rem] -left-[2.17rem] z-[20]"
          Variant="Left"
        />
        <Content
          Title="Production"
          List={
            <>
              <li className="mt-[0.72rem]">
                Saat proses pengerjaan, PM akan mengupdate progress dari project
                secara berkala.
              </li>
              <li className="mt-[0.58rem]">
                Client juga berhak melakukan follow up terbaru dalam grup chat
                yang dibentuk
              </li>
            </>
          }
          Icon={<IoSettings size="5px" className="text-[#1AB0C8]" />}
          Position="absolute right-[2.92rem] bottom-[3.75rem] z-[30]"
        />
      </div>

      <div className="w-fit h-[50rem] flex lg:hidden flex-col justify-between" data-aos="fade-right">
        <div
          className="absolute w-[50rem] aspect-[1037/1070] z-[9] right-[0.7rem]"
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
              <li className="mt-[4.32rem]">
                Diadakan online meeting untuk interaksi yang mendetail antara
                kedua belah pihak.
              </li>
            </>
          }
          Icon={
            <>
              <IoIosPeople size="29px" className="text-[#1AB0C8]" />
            </>
          }
          Variant="Left"
        />
        <Content
          Title="Aggrement"
          List={
            <>
              <li className="mt-[0.72rem]">
                Melakukan diskusi dan pertimbangan dalam projects
              </li>
              <li className="mt-[1.01rem]">
                Apabila mencapai kesepakatan, client dan PM akan menandatangani
                MoU.
              </li>
            </>
          }
          Icon={<IoIosArchive size="22px" className="text-[#1AB0C8]" />}
        />
        <Content
          Title="Production"
          List={
            <>
             <li className="mt-[0.72rem]">
                Saat proses pengerjaan, PM akan mengupdate progress dari project
                secara berkala.
              </li>
              <li className="mt-[0.58rem]">
                Client juga berhak melakukan follow up terbaru dalam grup chat
                yang dibentuk
              </li>
            </>
          }
          Icon={<IoSettings size="21px" className="text-[#1AB0C8]" />}
          Variant="Left"
        />
      </div>
    </>
  );
};

export default ProjectExecution;
