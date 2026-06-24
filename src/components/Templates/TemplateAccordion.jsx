import Image from "@/components/ui/Img";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const TemplateAccordion = ({ number, title, image }) => {
  const initial = () => {
    if (number != 1) {
      return false;
    }
    return true;
  };

  const [toggle, setToggle] = useState(initial);
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="w-full text-black">
      <div
        className="flex flex-col w-full border-border
                   lg:border-[0.16rem] lg:rounded-[0.83rem] lg:shadow-[0_4px_17px_-2px_rgba(0,0,0,0.15)]
                   border-[0.7rem] rounded-[2.8rem] shadow-[0_11px_74px_-11px_rgba(0,0,0,0.15)]"
      >
        <div
          onClick={() => setToggle(!toggle)}
          className="flex justify-between items-center w-full cursor-pointer
                     lg:px-[2.1rem] lg:py-[1.04rem]
                     px-[4.7rem] py-[3.5rem]"
        >
          <div
            className="w-full flex items-center font-SourceSansProBold text-neutral-g
                       lg:gap-[1.25rem] lg:text-[1.25rem]
                       gap-[2.3rem] text-[4.2rem]"
          >
            <p>{number.toString()}.</p>
            <p>{title}</p>
          </div>
          <div
            className="aspect-square
                       lg:w-[1.25rem]
                       w-[5.3rem]"
          >
            {toggle ? (
              <IoIosArrowUp size={"100%"} />
            ) : (
              <IoIosArrowDown size={"100%"} />
            )}
          </div>
        </div>
        <Collapse isOpened={toggle}>
          <div
            className="flex flex-col justify-center items-center w-full
                       lg:gap-[1.04rem] lg:pb-[2.1rem] lg:px-[2.1rem]
                       gap-[3.3rem] pb-[4.7rem] px-[4.7rem]"
          >
            <div
              className="bg-border w-full
                         lg:h-[0.1rem] lg:rounded-[0.1rem]
                         h-[0.47rem] rounded-[0.47rem]"
            ></div>
            <div
              className="flex flex-wrap 
                         lg:flex-row lg:justify-between lg:w-[65.7rem] lg:gap-[1.04rem]
                         flex-col justify-center w-full gap-[2.8rem]"
            >
              {image?.map((image) => {
                return (
                  <div
                    key={image.key}
                    className="flex flex-col overflow-hidden
                               lg:w-[32.3rem]
                               w-[81.4rem]"
                  >
                    <div
                      className="w-full border-border overflow-hidden
                                 lg:border-[0.06rem] lg:border-b-0 lg:rounded-t-[0.21rem]
                                 border-[0.23rem] border-b-0 rounded-t-[0.93rem]"
                    >
                      <Image
                        src={image.src}
                        alt={image.caption}
                        draggable="false"
                        width={5000}
                        height={5000}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div
                      className="w-full flex justify-center items-center bg-[#F4F4F4] border-border 
                                 lg:h-[1.62rem] lg:border-[0.06rem] lg:border-t-0 lg:rounded-b-[0.21rem]
                                 h-[5.3rem] border-[0.23rem] border-t-0 rounded-b-[0.93rem]
                                 "
                    >
                      <p
                        className="font-SourceSansProSemibold text-neutral-g
                                   lg:text-[0.94rem]
                                   text-[2.8rem]"
                      >
                        {image.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default TemplateAccordion;
