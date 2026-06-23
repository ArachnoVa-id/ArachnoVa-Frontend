import AOS from "aos";
import "aos/dist/aos.css";
import Image from "@/components/ui/Img";
import { useEffect, useRef } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ServiceDetails = ({ _key, selected, title, description, image }) => {
  const isSelected = (key, selected) => {
    if (key === selected) return "flex";
    return "hidden";
  };

  const swiperRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, [selected]);
  return (
    <div
      data-aos="fade-up"
      className={`flex justify-center items-center bg-[#FAFDFF] border-border 
                  ${isSelected(_key, selected)}
                  lg:flex-row lg:min-h-0 lg:px-[3.125vw] lg:py-[2.083vw]  lg:gap-[2.083vw] lg:rounded-[1.302vw] lg:border-[0.156vw] lg:shadow-[0px_0.469vw_1.042vw_-0.156vw_rgba(0,0,0,0.15)]
                  flex-col min-h-0 px-[5.581vw] py-[5.581vw] gap-[4.651vw] rounded-[3.721vw] border-[0.465vw] shadow-[0px_0.465vw_4.651vw_-1.163vw_rgba(0,0,0,0.15)]`}
    >
      <div
        className="text-ink font-SourceSansProBold
                     lg:hidden
                     text-[5.581vw] leading-[117.5%]"
      >
        {title}
      </div>
      <div
        className="flex justify-center items-center
                   lg:gap-[0.417vw]
                   gap-[0.93vw]"
      >
        <div
          className="text-[#9CADB4]
                     lg:w-[2.083vw]
                     w-[4.884vw]"
        >
          <BsFillCaretLeftFill
            size={"100%"}
            className="cursor-pointer"
            onClick={() => {
              swiperRef.current.slidePrev(250, true);
            }}
          />
        </div>
        <div
          className="flex justify-center items-center bg-[#FBFCFD] border-border
                     lg:w-[31.979vw] lg:h-[18.646vw] lg:rounded-[0.781vw] lg:border-[0.156vw] lg:shadow-[0px_0.208vw_2.083vw_-0.26vw_rgba(0,0,0,0.15)
                     w-[70.233vw] h-[40vw] rounded-[2.326vw] border-[0.349vw] shadow-[0px_0.93vw_9.302vw_-1.163vw_rgba(0,0,0,0.15)"
        >
          <Swiper
            className="overflow-hidden border-border 
                       lg:w-[30.625vw] lg:rounded-[0.521vw] lg:border-[0.104vw]
                       w-[66.977vw] aspect-[1920/980] rounded-[1.86vw] border-[0.233vw]"
            slidesPerView={1}
            spaceBetween={5}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
          >
            {image?.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    draggable="false"
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                    width="1920"
                    height="1080"
                    className=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div
          className="text-[#9CADB4]
                     lg:w-[2.083vw]
                     w-[4.884vw]"
        >
          <BsFillCaretRightFill
            size={"100%"}
            className="cursor-pointer"
            onClick={() => {
              swiperRef.current.slideNext(250, true);
            }}
          />
        </div>
      </div>
      <div
        className="flex flex-col
                   lg:gap-[0.521vw]
                   gap-[0.521vw]"
      >
        <div
          className="text-ink font-SourceSansProBold
                     lg:text-[2.083vw] lg:leading-[117.5%] lg:flex
                     hidden"
        >
          {title}
        </div>
        <div
          className="text-inkLight text-justify font-SourceSansProSemibold
                     lg:text-[1.042vw] lg:w-[26.615vw] lg:leading-[150%]
                     text-[3.256vw] w-[79.536vw]  leading-[125%]"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
