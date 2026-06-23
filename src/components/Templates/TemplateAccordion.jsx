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
                   lg:border-[0.156vw] lg:rounded-[0.833vw] lg:shadow-[0_0.26vw_1.042vw_-0.156vw_rgba(0,0,0,0.15)]
                   border-[0.6977vw] rounded-[2.7907vw] shadow-[0_0.69767vw_4.65116vw_-0.69767vw_rgba(0,0,0,0.15)]"
      >
        <div
          onClick={() => setToggle(!toggle)}
          className="flex justify-between items-center w-full cursor-pointer
                     lg:px-[2.083vw] lg:py-[1.042vw]
                     px-[4.65116vw] py-[3.5vw]"
        >
          <div
            className="w-full flex items-center font-SourceSansProBold text-neutral-g
                       lg:gap-[1.25vw] lg:text-[1.25vw]
                       gap-[2.32558vw] text-[4.18605vw]"
          >
            <p>{number.toString()}.</p>
            <p>{title}</p>
          </div>
          <div
            className="aspect-square
                       lg:w-[1.25vw]
                       w-[5.34884vw]"
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
                       lg:gap-[1.042vw] lg:pb-[2.083vw] lg:px-[2.083vw]
                       gap-[3.25581vw] pb-[4.65116vw] px-[4.65116vw]"
          >
            <div
              className="bg-border w-full
                         lg:h-[0.104vw] lg:rounded-[0.104vw]
                         h-[0.465116vw] rounded-[0.465116vw]"
            ></div>
            <div
              className="flex flex-wrap 
                         lg:flex-row lg:justify-between lg:w-[65.677vw] lg:gap-[1.042vw]
                         flex-col justify-center w-full gap-[2.790698vw]"
            >
              {image?.map((image) => {
                return (
                  <div
                    key={image.key}
                    className="flex flex-col overflow-hidden
                               lg:w-[32.292vw]
                               w-[81.39535vw]"
                  >
                    <div
                      className="w-full border-border overflow-hidden
                                 lg:border-[0.052vw] lg:border-b-0 lg:rounded-t-[0.208vw]
                                 border-[0.23256vw] border-b-0 rounded-t-[0.930233vw]"
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
                                 lg:h-[1.615vw] lg:border-[0.052vw] lg:border-t-0 lg:rounded-b-[0.208vw]
                                 h-[5.348837vw] border-[0.23256vw] border-t-0 rounded-b-[0.930233vw]
                                 "
                    >
                      <p
                        className="font-SourceSansProSemibold text-neutral-g
                                   lg:text-[0.938vw]
                                   text-[2.7907vw]"
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
