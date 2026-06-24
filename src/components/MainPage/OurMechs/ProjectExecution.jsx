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
        className="relative w-[17.7rem] h-[17.6rem] lg:flex hidden flex-col justify-center items-center"
        data-aos="fade-right"
      >
        <div className="absolute w-[30.9rem] aspect-[1037/1070] z-[9] -right-[5.6rem] -top-[11.2rem]">
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
              <li className="mt-[0.56rem]">
                Diadakan online meeting untuk interaksi yang mendetail antara
                kedua belah pihak.
              </li>
            </>
          }
          Icon={
            <>
              <IoIosPeople size="14px" className="text-[#1AB0C8]" />
            </>
          }
          Position="absolute right-0 top-0 z-[10]"
        />
        <Content
          Title="Aggrement"
          List={
            <>
              <li className="mt-[0.28rem]">
                Melakukan diskusi dan pertimbangan dalam projects
              </li>
              <li className="mt-[0.22rem]">
                Apabila mencapai kesepakatan, client dan PM akan menandatangani
                MoU.
              </li>
            </>
          }
          Icon={<IoIosArchive size="9px" className="text-[#1AB0C8]" />}
          Position="absolute top-[4.3rem] -left-[0.85rem] z-[20]"
          Variant="Left"
        />
        <Content
          Title="Production"
          List={
            <>
              <li className="mt-[0.28rem]">
                Saat proses pengerjaan, PM akan mengupdate progress dari project
                secara berkala.
              </li>
              <li className="mt-[0.22rem]">
                Client juga berhak melakukan follow up terbaru dalam grup chat
                yang dibentuk
              </li>
            </>
          }
          Icon={<IoSettings size="11px" className="text-[#1AB0C8]" />}
          Position="absolute right-[1.14rem] bottom-[1.46rem] z-[30]"
        />
      </div>

      <div className="w-fit h-[80.8rem] flex lg:hidden flex-col justify-between" data-aos="fade-right">
        <div
          className="absolute w-[22.5rem] aspect-[1037/1070] z-[9] right-[0.000rem]"
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
              <li className="mt-[1.69rem]">
                Diadakan online meeting untuk interaksi yang mendetail antara
                kedua belah pihak.
              </li>
            </>
          }
          Icon={
            <>
              <IoIosPeople size="69px" className="text-[#1AB0C8]" />
            </>
          }
          Variant="Left"
        />
        <Content
          Title="Aggrement"
          List={
            <>
              <li className="mt-[0.28rem]">
                Melakukan diskusi dan pertimbangan dalam projects
              </li>
              <li className="mt-[0.39rem]">
                Apabila mencapai kesepakatan, client dan PM akan menandatangani
                MoU.
              </li>
            </>
          }
          Icon={<IoIosArchive size="52px" className="text-[#1AB0C8]" />}
        />
        <Content
          Title="Production"
          List={
            <>
             <li className="mt-[0.28rem]">
                Saat proses pengerjaan, PM akan mengupdate progress dari project
                secara berkala.
              </li>
              <li className="mt-[0.22rem]">
                Client juga berhak melakukan follow up terbaru dalam grup chat
                yang dibentuk
              </li>
            </>
          }
          Icon={<IoSettings size="50px" className="text-[#1AB0C8]" />}
          Variant="Left"
        />
      </div>
    </>
  );
};

export default ProjectExecution;
