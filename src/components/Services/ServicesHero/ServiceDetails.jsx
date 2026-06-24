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
                  lg:flex-row lg:min-h-0 lg:px-[1.76rem] lg:py-[1.17rem]  lg:gap-[1.17rem] lg:rounded-[0.73rem] lg:border-[0.09rem] lg:shadow-[0px_4px_9px_-1px_rgba(0,0,0,0.15)]
                  flex-col min-h-0 px-[3.1rem] py-[3.1rem] gap-[2.6rem] rounded-[2.1rem] border-[0.26rem] shadow-[0px_4px_42px_-10px_rgba(0,0,0,0.15)]`}
    >
      <div
        className="text-neutral-g font-SourceSansProBold
                     lg:hidden
                     text-[3.1rem] leading-[117.5%]"
      >
        {title}
      </div>
      <div
        className="flex justify-center items-center
                   lg:gap-[0.23rem]
                   gap-[0.52rem]"
      >
        <div
          className="text-[#9CADB4]
                     lg:w-[1.17rem]
                     w-[2.7rem]"
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
                     lg:w-[18.0rem] lg:h-[10.5rem] lg:rounded-[0.44rem] lg:border-[0.09rem] lg:shadow-[0px_2px_19px_-2px_rgba(0,0,0,0.15)
                     w-[39.5rem] h-[22.5rem] rounded-[1.31rem] border-[0.2rem] shadow-[0px_8px_84px_-10px_rgba(0,0,0,0.15)"
        >
          <Swiper
            className="overflow-hidden border-border 
                       lg:w-[17.2rem] lg:rounded-[0.29rem] lg:border-[0.06rem]
                       w-[37.7rem] aspect-[1920/980] rounded-[1.05rem] border-[0.13rem]"
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
                     lg:w-[1.17rem]
                     w-[2.7rem]"
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
                   lg:gap-[0.29rem]
                   gap-[0.29rem]"
      >
        <div
          className="text-neutral-g font-SourceSansProBold
                     lg:text-[1.17rem] lg:leading-[117.5%] lg:flex
                     hidden"
        >
          {title}
        </div>
        <div
          className="text-neutral-e text-justify font-SourceSansProSemibold
                     lg:text-[0.59rem] lg:w-[15.0rem] lg:leading-[150%]
                     text-[1.83rem] w-[44.7rem]  leading-[125%]"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
