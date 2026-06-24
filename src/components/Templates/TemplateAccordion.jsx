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
                   lg:border-[0.037rem] lg:rounded-[1.2rem] lg:shadow-[0_1px_4px_-1px_rgba(0,0,0,0.15)]
                   border-[0.16rem] rounded-[4.02rem] shadow-[0_3px_17px_-3px_rgba(0,0,0,0.15)]"
      >
        <div
          onClick={() => setToggle(!toggle)}
          className="flex justify-between items-center w-full cursor-pointer
                     lg:px-[3.0rem] lg:py-[1.5rem]
                     px-[6.7rem] py-[5.04rem]"
        >
          <div
            className="w-full flex items-center font-SourceSansProBold text-neutral-g
                       lg:gap-[1.8rem] lg:text-[1.8rem]
                       gap-[3.35rem] text-[6.03rem]"
          >
            <p>{number.toString()}.</p>
            <p>{title}</p>
          </div>
          <div
            className="aspect-square
                       lg:w-[1.8rem]
                       w-[7.7rem]"
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
                       lg:gap-[1.5rem] lg:pb-[3.0rem] lg:px-[3.0rem]
                       gap-[4.69rem] pb-[6.7rem] px-[6.7rem]"
          >
            <div
              className="bg-border w-full
                         lg:h-[0.15rem] lg:rounded-[0.15rem]
                         h-[0.67rem] rounded-[0.67rem]"
            ></div>
            <div
              className="flex flex-wrap 
                         lg:flex-row lg:justify-between lg:w-[50rem] lg:gap-[1.5rem]
                         flex-col justify-center w-full gap-[4.02rem]"
            >
              {image?.map((image) => {
                return (
                  <div
                    key={image.key}
                    className="flex flex-col overflow-hidden
                               lg:w-[46.5rem]
                               w-[50rem]"
                  >
                    <div
                      className="w-full border-border overflow-hidden
                                 lg:border-[0.012rem] lg:border-b-0 lg:rounded-t-[0.049rem]
                                 border-[0.055rem] border-b-0 rounded-t-[0.22rem]"
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
                                 lg:h-[2.33rem] lg:border-[0.012rem] lg:border-t-0 lg:rounded-b-[0.049rem]
                                 h-[7.7rem] border-[0.055rem] border-t-0 rounded-b-[0.22rem]
                                 "
                    >
                      <p
                        className="font-SourceSansProSemibold text-neutral-g
                                   lg:text-[1.35rem]
                                   text-[4.02rem]"
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
