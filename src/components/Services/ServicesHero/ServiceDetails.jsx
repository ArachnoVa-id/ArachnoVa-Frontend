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
                  lg:flex-row lg:min-h-0 lg:px-[3.1rem] lg:py-[2.1rem]  lg:gap-[2.1rem] lg:rounded-[1.3rem] lg:border-[0.16rem] lg:shadow-[0px_8px_17px_-2px_rgba(0,0,0,0.15)]
                  flex-col min-h-0 px-[5.6rem] py-[5.6rem] gap-[4.7rem] rounded-[3.7rem] border-[0.46rem] shadow-[0px_7px_74px_-19px_rgba(0,0,0,0.15)]`}
    >
      <div
        className="text-neutral-g font-SourceSansProBold
                     lg:hidden
                     text-[5.6rem] leading-[117.5%]"
      >
        {title}
      </div>
      <div
        className="flex justify-center items-center
                   lg:gap-[0.42rem]
                   gap-[0.93rem]"
      >
        <div
          className="text-[#9CADB4]
                     lg:w-[2.1rem]
                     w-[4.9rem]"
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
                     lg:w-[32.0rem] lg:h-[18.6rem] lg:rounded-[0.78rem] lg:border-[0.16rem] lg:shadow-[0px_3px_33px_-4px_rgba(0,0,0,0.15)
                     w-[70.2rem] h-[40.0rem] rounded-[2.3rem] border-[0.35rem] shadow-[0px_15px_149px_-19px_rgba(0,0,0,0.15)"
        >
          <Swiper
            className="overflow-hidden border-border 
                       lg:w-[30.6rem] lg:rounded-[0.52rem] lg:border-[0.1rem]
                       w-[67.0rem] aspect-[1920/980] rounded-[1.86rem] border-[0.23rem]"
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
                     lg:w-[2.1rem]
                     w-[4.9rem]"
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
                   lg:gap-[0.52rem]
                   gap-[0.52rem]"
      >
        <div
          className="text-neutral-g font-SourceSansProBold
                     lg:text-[2.1rem] lg:leading-[117.5%] lg:flex
                     hidden"
        >
          {title}
        </div>
        <div
          className="text-neutral-e text-justify font-SourceSansProSemibold
                     lg:text-[1.04rem] lg:w-[26.6rem] lg:leading-[150%]
                     text-[3.3rem] w-[79.5rem]  leading-[125%]"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
