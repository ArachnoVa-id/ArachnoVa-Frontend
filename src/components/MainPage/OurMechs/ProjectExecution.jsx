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
          Title="Meeting"
          List={
            <>
              <li className="mt-[1vw]">
                Diadakan online meeting untuk interaksi yang mendetail antara
                kedua belah pihak.
              </li>
            </>
          }
          Icon={
            <>
              <IoIosPeople size="1.542vw" className="text-[#0891B2]" />
            </>
          }
          Position="absolute right-0 top-0 z-[10]"
        />
        <Content
          Title="Aggrement"
          List={
            <>
              <li className="mt-[0.5vw]">
                Melakukan diskusi dan pertimbangan dalam projects
              </li>
              <li className="mt-[0.4vw]">
                Apabila mencapai kesepakatan, client dan PM akan menandatangani
                MoU.
              </li>
            </>
          }
          Icon={<IoIosArchive size="1.042vw" className="text-[#0891B2]" />}
          Position="absolute top-[7.604vw] -left-[1.51vw] z-[20]"
          Variant="Left"
        />
        <Content
          Title="Production"
          List={
            <>
              <li className="mt-[0.5vw]">
                Saat proses pengerjaan, PM akan mengupdate progress dari project
                secara berkala.
              </li>
              <li className="mt-[0.4vw]">
                Client juga berhak melakukan follow up terbaru dalam grup chat
                yang dibentuk
              </li>
            </>
          }
          Icon={<IoSettings size="1.242vw" className="text-[#0891B2]" />}
          Position="absolute right-[2.031vw] bottom-[2.604vw] z-[30]"
        />
      </div>

      <div className="w-fit h-[143.721vw] flex lg:hidden flex-col justify-between" data-aos="fade-right">
        <div
          className="absolute w-[40vw] aspect-[1037/1070] z-[9] right-[0vw]"
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
              <li className="mt-[3vw]">
                Diadakan online meeting untuk interaksi yang mendetail antara
                kedua belah pihak.
              </li>
            </>
          }
          Icon={
            <>
              <IoIosPeople size="7.674vw" className="text-[#0891B2]" />
            </>
          }
          Variant="Left"
        />
        <Content
          Title="Aggrement"
          List={
            <>
              <li className="mt-[0.5vw]">
                Melakukan diskusi dan pertimbangan dalam projects
              </li>
              <li className="mt-[0.7vw]">
                Apabila mencapai kesepakatan, client dan PM akan menandatangani
                MoU.
              </li>
            </>
          }
          Icon={<IoIosArchive size="5.814vw" className="text-[#0891B2]" />}
        />
        <Content
          Title="Production"
          List={
            <>
             <li className="mt-[0.5vw]">
                Saat proses pengerjaan, PM akan mengupdate progress dari project
                secara berkala.
              </li>
              <li className="mt-[0.4vw]">
                Client juga berhak melakukan follow up terbaru dalam grup chat
                yang dibentuk
              </li>
            </>
          }
          Icon={<IoSettings size="5.581vw" className="text-[#0891B2]" />}
          Variant="Left"
        />
      </div>
    </>
  );
};

export default ProjectExecution;
