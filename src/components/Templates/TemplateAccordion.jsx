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
                   lg:border-[0.14rem] lg:rounded-[0.73rem] lg:shadow-[0_4px_15px_-2px_rgba(0,0,0,0.15)]
                   border-[0.61rem] rounded-[2.4rem] shadow-[0_10px_65px_-10px_rgba(0,0,0,0.15)]"
      >
        <div
          onClick={() => setToggle(!toggle)}
          className="flex justify-between items-center w-full cursor-pointer
                     lg:px-[1.82rem] lg:py-[0.91rem]
                     px-[4.1rem] py-[3.1rem]"
        >
          <div
            className="w-full flex items-center font-SourceSansProBold text-neutral-g
                       lg:gap-[1.09rem] lg:text-[1.09rem]
                       gap-[2.0rem] text-[3.7rem]"
          >
            <p>{number.toString()}.</p>
            <p>{title}</p>
          </div>
          <div
            className="aspect-square
                       lg:w-[1.09rem]
                       w-[4.7rem]"
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
                       lg:gap-[0.91rem] lg:pb-[1.82rem] lg:px-[1.82rem]
                       gap-[2.8rem] pb-[4.1rem] px-[4.1rem]"
          >
            <div
              className="bg-border w-full
                         lg:h-[0.09rem] lg:rounded-[0.09rem]
                         h-[0.41rem] rounded-[0.41rem]"
            ></div>
            <div
              className="flex flex-wrap 
                         lg:flex-row lg:justify-between lg:w-[57.5rem] lg:gap-[0.91rem]
                         flex-col justify-center w-full gap-[2.4rem]"
            >
              {image?.map((image) => {
                return (
                  <div
                    key={image.key}
                    className="flex flex-col overflow-hidden
                               lg:w-[28.3rem]
                               w-[71.2rem]"
                  >
                    <div
                      className="w-full border-border overflow-hidden
                                 lg:border-[0.045rem] lg:border-b-0 lg:rounded-t-[0.18rem]
                                 border-[0.2rem] border-b-0 rounded-t-[0.81rem]"
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
                                 lg:h-[1.41rem] lg:border-[0.045rem] lg:border-t-0 lg:rounded-b-[0.18rem]
                                 h-[4.7rem] border-[0.2rem] border-t-0 rounded-b-[0.81rem]
                                 "
                    >
                      <p
                        className="font-SourceSansProSemibold text-neutral-g
                                   lg:text-[0.82rem]
                                   text-[2.4rem]"
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
