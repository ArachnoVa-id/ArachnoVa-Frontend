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
                   lg:border-[0.041rem] lg:rounded-[0.2rem] lg:shadow-[0_1px_4px_-1px_rgba(0,0,0,0.15)]
                   border-[0.18rem] rounded-[0.45rem] shadow-[0_3px_20px_-3px_rgba(0,0,0,0.15)]"
      >
        <div
          onClick={() => setToggle(!toggle)}
          className="flex justify-between items-center w-full cursor-pointer
                     lg:px-[0.33rem] lg:py-[0.2rem]
                     px-[0.74rem] py-[0.56rem]"
        >
          <div
            className="w-full flex items-center font-SourceSansProBold text-neutral-g
                       lg:gap-[0.2rem] lg:text-[0.5rem]
                       gap-[0.37rem] text-[0.67rem]"
          >
            <p>{number.toString()}.</p>
            <p>{title}</p>
          </div>
          <div
            className="aspect-square
                       lg:w-[0.2rem]
                       w-[0.86rem]"
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
                       lg:gap-[0.2rem] lg:pb-[0.33rem] lg:px-[0.33rem]
                       gap-[0.52rem] pb-[0.74rem] px-[0.74rem]"
          >
            <div
              className="bg-border w-full
                         lg:h-[0.2rem] lg:rounded-[0.2rem]
                         h-[0.2rem] rounded-[0.2rem]"
            ></div>
            <div
              className="flex flex-wrap 
                         lg:flex-row lg:justify-between lg:w-[10.51rem] lg:gap-[0.2rem]
                         flex-col justify-center w-full gap-[0.45rem]"
            >
              {image?.map((image) => {
                return (
                  <div
                    key={image.key}
                    className="flex flex-col overflow-hidden
                               lg:w-[5.17rem]
                               w-[13.02rem]"
                  >
                    <div
                      className="w-full border-border overflow-hidden
                                 lg:border-[0.014rem] lg:border-b-0 lg:rounded-t-[0.05rem]
                                 border-[0.06rem] border-b-0 rounded-t-[0.24rem]"
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
                                 lg:h-[0.26rem] lg:border-[0.014rem] lg:border-t-0 lg:rounded-b-[0.05rem]
                                 h-[0.86rem] border-[0.06rem] border-t-0 rounded-b-[0.24rem]
                                 "
                    >
                      <p
                        className="font-SourceSansProSemibold text-neutral-g
                                   lg:text-[0.5rem]
                                   text-[0.5rem]"
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
