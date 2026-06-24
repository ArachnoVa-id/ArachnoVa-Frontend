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
                  lg:flex-row lg:min-h-0 lg:px-[4.5rem] lg:py-[3.0rem]  lg:gap-[3.0rem] lg:rounded-[1.87rem] lg:border-[0.037rem] lg:shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.15)]
                  flex-col min-h-0 px-[8.04rem] py-[8.04rem] gap-[6.7rem] rounded-[5.36rem] border-[0.11rem] shadow-[0px_2px_17px_-4px_rgba(0,0,0,0.15)]`}
    >
      <div
        className="text-neutral-g font-SourceSansProBold
                     lg:hidden
                     text-[8rem] leading-[117.5%]"
      >
        {title}
      </div>
      <div
        className="flex justify-center items-center
                   lg:gap-[0.6rem]
                   gap-[1.34rem]"
      >
        <div
          className="text-[#9CADB4]
                     lg:w-[3.0rem]
                     w-[7.03rem]"
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
                     lg:w-[46.05rem] lg:h-[26.85rem] lg:rounded-[1.12rem] lg:border-[0.037rem] lg:shadow-[0px_1px_8px_-1px_rgba(0,0,0,0.15)
                     w-[50rem] h-[50rem] rounded-[3.35rem] border-[0.082rem] shadow-[0px_3px_35px_-4px_rgba(0,0,0,0.15)"
        >
          <Swiper
            className="overflow-hidden border-border 
                       lg:w-[44.1rem] lg:rounded-[0.75rem] lg:border-[0.024rem]
                       w-[50rem] aspect-[1920/980] rounded-[2.68rem] border-[0.055rem]"
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
                     lg:w-[3.0rem]
                     w-[7.03rem]"
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
                   lg:gap-[0.75rem]
                   gap-[0.75rem]"
      >
        <div
          className="text-neutral-g font-SourceSansProBold
                     lg:text-[3.0rem] lg:leading-[117.5%] lg:flex
                     hidden"
        >
          {title}
        </div>
        <div
          className="text-neutral-e text-justify font-SourceSansProSemibold
                     lg:text-[1.5rem] lg:w-[38.33rem] lg:leading-[150%]
                     text-[4.69rem] w-[50rem]  leading-[125%]"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
