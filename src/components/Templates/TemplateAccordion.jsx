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
                   border-2 rounded-2xl shadow-md"
      >
        <div
          onClick={() => setToggle(!toggle)}
          className="flex justify-between items-center w-full cursor-pointer
                     lg:px-[2.1rem] lg:py-[1.04rem]
                     px-5 py-4"
        >
          <div
            className="w-full flex items-center font-SourceSansProBold text-neutral-g
                       lg:gap-[1.25rem] lg:text-[1.25rem]
                       gap-3 text-[17px] sm:text-[19px]"
          >
            <p>{number.toString()}.</p>
            <p>{title}</p>
          </div>
          <div
            className="aspect-square
                       lg:w-[1.25rem]
                       w-5 shrink-0"
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
                       gap-4 pb-5 px-5"
          >
            <div
              className="bg-border w-full
                         lg:h-[0.1rem] lg:rounded-[0.1rem]
                         h-px"
            ></div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4
                         lg:flex lg:flex-wrap lg:flex-row lg:justify-between lg:w-full lg:gap-[1.04rem]"
            >
              {image?.map((image) => {
                return (
                  <div
                    key={image.key}
                    className="flex flex-col overflow-hidden
                               lg:w-[calc(50%-0.52rem)]
                               w-full"
                  >
                    <div
                      className="w-full border-border overflow-hidden
                                 lg:border-[0.06rem] lg:border-b-0 lg:rounded-t-[0.21rem]
                                 border border-b-0 rounded-t-lg"
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
                                 h-10 border border-t-0 rounded-b-lg
                                 "
                    >
                      <p
                        className="font-SourceSansProSemibold text-neutral-g
                                   lg:text-[0.94rem]
                                   text-[14px]"
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
