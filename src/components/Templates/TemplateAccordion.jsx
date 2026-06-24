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
                   lg:border-[0.09rem] lg:rounded-[0.47rem] lg:shadow-[0_2px_9px_-1px_rgba(0,0,0,0.15)]
                   border-[0.39rem] rounded-[1.57rem] shadow-[0_6px_42px_-6px_rgba(0,0,0,0.15)]"
      >
        <div
          onClick={() => setToggle(!toggle)}
          className="flex justify-between items-center w-full cursor-pointer
                     lg:px-[1.17rem] lg:py-[0.59rem]
                     px-[2.6rem] py-[1.97rem]"
        >
          <div
            className="w-full flex items-center font-SourceSansProBold text-neutral-g
                       lg:gap-[0.7rem] lg:text-[0.7rem]
                       gap-[1.31rem] text-[2.4rem]"
          >
            <p>{number.toString()}.</p>
            <p>{title}</p>
          </div>
          <div
            className="aspect-square
                       lg:w-[0.7rem]
                       w-[3.0rem]"
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
                       lg:gap-[0.59rem] lg:pb-[1.17rem] lg:px-[1.17rem]
                       gap-[1.83rem] pb-[2.6rem] px-[2.6rem]"
          >
            <div
              className="bg-border w-full
                         lg:h-[0.06rem] lg:rounded-[0.06rem]
                         h-[0.26rem] rounded-[0.26rem]"
            ></div>
            <div
              className="flex flex-wrap 
                         lg:flex-row lg:justify-between lg:w-[36.9rem] lg:gap-[0.59rem]
                         flex-col justify-center w-full gap-[1.57rem]"
            >
              {image?.map((image) => {
                return (
                  <div
                    key={image.key}
                    className="flex flex-col overflow-hidden
                               lg:w-[18.2rem]
                               w-[45.8rem]"
                  >
                    <div
                      className="w-full border-border overflow-hidden
                                 lg:border-[0.029rem] lg:border-b-0 lg:rounded-t-[0.12rem]
                                 border-[0.13rem] border-b-0 rounded-t-[0.52rem]"
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
                                 lg:h-[0.91rem] lg:border-[0.029rem] lg:border-t-0 lg:rounded-b-[0.12rem]
                                 h-[3.0rem] border-[0.13rem] border-t-0 rounded-b-[0.52rem]
                                 "
                    >
                      <p
                        className="font-SourceSansProSemibold text-neutral-g
                                   lg:text-[0.53rem]
                                   text-[1.57rem]"
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
