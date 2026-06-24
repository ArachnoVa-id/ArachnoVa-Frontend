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
                   lg:border-[0.156vw] lg:rounded-[clamp(0.2rem,0.833vw,1.2rem)] lg:shadow-[0_0.26vw_1.042vw_-0.156vw_rgba(0,0,0,0.15)]
                   border-[0.6977vw] rounded-[clamp(0.45rem,2.7907vw,4.02rem)] shadow-[0_0.69767vw_4.65116vw_-0.69767vw_rgba(0,0,0,0.15)]"
      >
        <div
          onClick={() => setToggle(!toggle)}
          className="flex justify-between items-center w-full cursor-pointer
                     lg:px-[clamp(0.33rem,2.083vw,3.0rem)] lg:py-[clamp(0.2rem,1.042vw,1.5rem)]
                     px-[clamp(0.74rem,4.65116vw,6.7rem)] py-[clamp(0.56rem,3.5vw,5.04rem)]"
        >
          <div
            className="w-full flex items-center font-SourceSansProBold text-neutral-g
                       lg:gap-[clamp(0.2rem,1.25vw,1.8rem)] lg:text-[clamp(0.5rem,1.25vw,1.8rem)]
                       gap-[clamp(0.37rem,2.32558vw,3.35rem)] text-[clamp(0.67rem,4.18605vw,6.03rem)]"
          >
            <p>{number.toString()}.</p>
            <p>{title}</p>
          </div>
          <div
            className="aspect-square
                       lg:w-[clamp(0.2rem,1.25vw,1.8rem)]
                       w-[clamp(0.86rem,5.34884vw,7.7rem)]"
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
                       lg:gap-[clamp(0.2rem,1.042vw,1.5rem)] lg:pb-[clamp(0.33rem,2.083vw,3.0rem)] lg:px-[clamp(0.33rem,2.083vw,3.0rem)]
                       gap-[clamp(0.52rem,3.25581vw,4.69rem)] pb-[clamp(0.74rem,4.65116vw,6.7rem)] px-[clamp(0.74rem,4.65116vw,6.7rem)]"
          >
            <div
              className="bg-border w-full
                         lg:h-[clamp(0.2rem,0.104vw,0.15rem)] lg:rounded-[clamp(0.2rem,0.104vw,0.15rem)]
                         h-[clamp(0.2rem,0.465116vw,0.67rem)] rounded-[clamp(0.2rem,0.465116vw,0.67rem)]"
            ></div>
            <div
              className="flex flex-wrap 
                         lg:flex-row lg:justify-between lg:w-[clamp(10.51rem,65.677vw,50rem)] lg:gap-[clamp(0.2rem,1.042vw,1.5rem)]
                         flex-col justify-center w-full gap-[clamp(0.45rem,2.790698vw,4.02rem)]"
            >
              {image?.map((image) => {
                return (
                  <div
                    key={image.key}
                    className="flex flex-col overflow-hidden
                               lg:w-[clamp(5.17rem,32.292vw,46.5rem)]
                               w-[clamp(13.02rem,81.39535vw,50rem)]"
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
                                 lg:h-[clamp(0.26rem,1.615vw,2.33rem)] lg:border-[0.052vw] lg:border-t-0 lg:rounded-b-[0.208vw]
                                 h-[clamp(0.86rem,5.348837vw,7.7rem)] border-[0.23256vw] border-t-0 rounded-b-[0.930233vw]
                                 "
                    >
                      <p
                        className="font-SourceSansProSemibold text-neutral-g
                                   lg:text-[clamp(0.5rem,0.938vw,1.35rem)]
                                   text-[clamp(0.5rem,2.7907vw,4.02rem)]"
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
