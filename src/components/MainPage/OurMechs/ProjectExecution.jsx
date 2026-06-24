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
        className="relative w-[clamp(5.03rem,31.458vw,45.3rem)] h-[clamp(5.02rem,31.354vw,45.15rem)] lg:flex hidden flex-col justify-center items-center"
        data-aos="fade-right"
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
          Title="Meeting"
          List={
            <>
              <li className="mt-[clamp(0.2rem,1.0vw,1.44rem)]">
                Diadakan online meeting untuk interaksi yang mendetail antara
                kedua belah pihak.
              </li>
            </>
          }
          Icon={
            <>
              <IoIosPeople size="1.542vw" className="text-[#1AB0C8]" />
            </>
          }
          Position="absolute right-0 top-0 z-[10]"
        />
        <Content
          Title="Aggrement"
          List={
            <>
              <li className="mt-[clamp(0.2rem,0.5vw,0.72rem)]">
                Melakukan diskusi dan pertimbangan dalam projects
              </li>
              <li className="mt-[clamp(0.2rem,0.4vw,0.58rem)]">
                Apabila mencapai kesepakatan, client dan PM akan menandatangani
                MoU.
              </li>
            </>
          }
          Icon={<IoIosArchive size="1.042vw" className="text-[#1AB0C8]" />}
          Position="absolute top-[clamp(1.22rem,7.604vw,10.95rem)] -left-[clamp(0.24rem,1.51vw,2.17rem)] z-[20]"
          Variant="Left"
        />
        <Content
          Title="Production"
          List={
            <>
              <li className="mt-[clamp(0.2rem,0.5vw,0.72rem)]">
                Saat proses pengerjaan, PM akan mengupdate progress dari project
                secara berkala.
              </li>
              <li className="mt-[clamp(0.2rem,0.4vw,0.58rem)]">
                Client juga berhak melakukan follow up terbaru dalam grup chat
                yang dibentuk
              </li>
            </>
          }
          Icon={<IoSettings size="1.242vw" className="text-[#1AB0C8]" />}
          Position="absolute right-[clamp(0.32rem,2.031vw,2.92rem)] bottom-[clamp(0.42rem,2.604vw,3.75rem)] z-[30]"
        />
      </div>

      <div className="w-fit h-[clamp(23.0rem,143.721vw,50rem)] flex lg:hidden flex-col justify-between" data-aos="fade-right">
        <div
          className="absolute w-[clamp(6.4rem,40.0vw,50rem)] aspect-[1037/1070] z-[9] right-[clamp(0.2rem,0.0vw,0.7rem)]"
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
              <li className="mt-[clamp(0.48rem,3.0vw,4.32rem)]">
                Diadakan online meeting untuk interaksi yang mendetail antara
                kedua belah pihak.
              </li>
            </>
          }
          Icon={
            <>
              <IoIosPeople size="7.674vw" className="text-[#1AB0C8]" />
            </>
          }
          Variant="Left"
        />
        <Content
          Title="Aggrement"
          List={
            <>
              <li className="mt-[clamp(0.2rem,0.5vw,0.72rem)]">
                Melakukan diskusi dan pertimbangan dalam projects
              </li>
              <li className="mt-[clamp(0.2rem,0.7vw,1.01rem)]">
                Apabila mencapai kesepakatan, client dan PM akan menandatangani
                MoU.
              </li>
            </>
          }
          Icon={<IoIosArchive size="5.814vw" className="text-[#1AB0C8]" />}
        />
        <Content
          Title="Production"
          List={
            <>
             <li className="mt-[clamp(0.2rem,0.5vw,0.72rem)]">
                Saat proses pengerjaan, PM akan mengupdate progress dari project
                secara berkala.
              </li>
              <li className="mt-[clamp(0.2rem,0.4vw,0.58rem)]">
                Client juga berhak melakukan follow up terbaru dalam grup chat
                yang dibentuk
              </li>
            </>
          }
          Icon={<IoSettings size="5.581vw" className="text-[#1AB0C8]" />}
          Variant="Left"
        />
      </div>
    </>
  );
};

export default ProjectExecution;
