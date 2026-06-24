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
                  lg:flex-row lg:min-h-0 lg:px-[2.7rem] lg:py-[1.82rem]  lg:gap-[1.82rem] lg:rounded-[1.14rem] lg:border-[0.14rem] lg:shadow-[0px_7px_15px_-2px_rgba(0,0,0,0.15)]
                  flex-col min-h-0 px-[4.9rem] py-[4.9rem] gap-[4.1rem] rounded-[3.3rem] border-[0.41rem] shadow-[0px_7px_65px_-16px_rgba(0,0,0,0.15)]`}
    >
      <div
        className="text-neutral-g font-SourceSansProBold
                     lg:hidden
                     text-[4.9rem] leading-[117.5%]"
      >
        {title}
      </div>
      <div
        className="flex justify-center items-center
                   lg:gap-[0.36rem]
                   gap-[0.81rem]"
      >
        <div
          className="text-[#9CADB4]
                     lg:w-[1.82rem]
                     w-[4.3rem]"
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
                     lg:w-[28.0rem] lg:h-[16.3rem] lg:rounded-[0.68rem] lg:border-[0.14rem] lg:shadow-[0px_3px_29px_-4px_rgba(0,0,0,0.15)
                     w-[61.5rem] h-[35.0rem] rounded-[2.0rem] border-[0.31rem] shadow-[0px_13px_130px_-16px_rgba(0,0,0,0.15)"
        >
          <Swiper
            className="overflow-hidden border-border 
                       lg:w-[26.8rem] lg:rounded-[0.46rem] lg:border-[0.09rem]
                       w-[58.6rem] aspect-[1920/980] rounded-[1.63rem] border-[0.2rem]"
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
                     lg:w-[1.82rem]
                     w-[4.3rem]"
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
                   lg:gap-[0.46rem]
                   gap-[0.46rem]"
      >
        <div
          className="text-neutral-g font-SourceSansProBold
                     lg:text-[1.82rem] lg:leading-[117.5%] lg:flex
                     hidden"
        >
          {title}
        </div>
        <div
          className="text-neutral-e text-justify font-SourceSansProSemibold
                     lg:text-[0.91rem] lg:w-[23.3rem] lg:leading-[150%]
                     text-[2.8rem] w-[69.6rem]  leading-[125%]"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
