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
        className="relative w-[27.5rem] h-[27.4rem] lg:flex hidden flex-col justify-center items-center"
        data-aos="fade-right"
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
          Title="Meeting"
          List={
            <>
              <li className="mt-[0.88rem]">
                Diadakan online meeting untuk interaksi yang mendetail antara
                kedua belah pihak.
              </li>
            </>
          }
          Icon={
            <>
              <IoIosPeople size="22px" className="text-[#1AB0C8]" />
            </>
          }
          Position="absolute right-0 top-0 z-[10]"
        />
        <Content
          Title="Aggrement"
          List={
            <>
              <li className="mt-[0.44rem]">
                Melakukan diskusi dan pertimbangan dalam projects
              </li>
              <li className="mt-[0.35rem]">
                Apabila mencapai kesepakatan, client dan PM akan menandatangani
                MoU.
              </li>
            </>
          }
          Icon={<IoIosArchive size="15px" className="text-[#1AB0C8]" />}
          Position="absolute top-[6.7rem] -left-[1.32rem] z-[20]"
          Variant="Left"
        />
        <Content
          Title="Production"
          List={
            <>
              <li className="mt-[0.44rem]">
                Saat proses pengerjaan, PM akan mengupdate progress dari project
                secara berkala.
              </li>
              <li className="mt-[0.35rem]">
                Client juga berhak melakukan follow up terbaru dalam grup chat
                yang dibentuk
              </li>
            </>
          }
          Icon={<IoSettings size="17px" className="text-[#1AB0C8]" />}
          Position="absolute right-[1.78rem] bottom-[2.3rem] z-[30]"
        />
      </div>

      <div className="w-fit h-[125.8rem] flex lg:hidden flex-col justify-between" data-aos="fade-right">
        <div
          className="absolute w-[35.0rem] aspect-[1037/1070] z-[9] right-[0.000rem]"
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
              <li className="mt-[2.6rem]">
                Diadakan online meeting untuk interaksi yang mendetail antara
                kedua belah pihak.
              </li>
            </>
          }
          Icon={
            <>
              <IoIosPeople size="107px" className="text-[#1AB0C8]" />
            </>
          }
          Variant="Left"
        />
        <Content
          Title="Aggrement"
          List={
            <>
              <li className="mt-[0.44rem]">
                Melakukan diskusi dan pertimbangan dalam projects
              </li>
              <li className="mt-[0.61rem]">
                Apabila mencapai kesepakatan, client dan PM akan menandatangani
                MoU.
              </li>
            </>
          }
          Icon={<IoIosArchive size="81px" className="text-[#1AB0C8]" />}
        />
        <Content
          Title="Production"
          List={
            <>
             <li className="mt-[0.44rem]">
                Saat proses pengerjaan, PM akan mengupdate progress dari project
                secara berkala.
              </li>
              <li className="mt-[0.35rem]">
                Client juga berhak melakukan follow up terbaru dalam grup chat
                yang dibentuk
              </li>
            </>
          }
          Icon={<IoSettings size="78px" className="text-[#1AB0C8]" />}
          Variant="Left"
        />
      </div>
    </>
  );
};

export default ProjectExecution;
