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
                  lg:flex-row lg:min-h-0 lg:px-[0.5rem] lg:py-[0.33rem]  lg:gap-[0.33rem] lg:rounded-[0.21rem] lg:border-[0.041rem] lg:shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.15)]
                  flex-col min-h-0 px-[0.89rem] py-[0.89rem] gap-[0.74rem] rounded-[0.6rem] border-[0.12rem] shadow-[0px_2px_20px_-5px_rgba(0,0,0,0.15)]`}
    >
      <div
        className="text-neutral-g font-SourceSansProBold
                     lg:hidden
                     text-[0.89rem] leading-[117.5%]"
      >
        {title}
      </div>
      <div
        className="flex justify-center items-center
                   lg:gap-[0.2rem]
                   gap-[0.2rem]"
      >
        <div
          className="text-[#9CADB4]
                     lg:w-[0.33rem]
                     w-[0.78rem]"
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
                     lg:w-[5.12rem] lg:h-[2.98rem] lg:rounded-[0.2rem] lg:border-[0.041rem] lg:shadow-[0px_1px_9px_-1px_rgba(0,0,0,0.15)
                     w-[11.24rem] h-[6.4rem] rounded-[0.37rem] border-[0.09rem] shadow-[0px_4px_39px_-5px_rgba(0,0,0,0.15)"
        >
          <Swiper
            className="overflow-hidden border-border 
                       lg:w-[4.9rem] lg:rounded-[0.2rem] lg:border-[0.027rem]
                       w-[10.72rem] aspect-[1920/980] rounded-[0.3rem] border-[0.06rem]"
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
                     lg:w-[0.33rem]
                     w-[0.78rem]"
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
                   lg:gap-[0.2rem]
                   gap-[0.2rem]"
      >
        <div
          className="text-neutral-g font-SourceSansProBold
                     lg:text-[0.5rem] lg:leading-[117.5%] lg:flex
                     hidden"
        >
          {title}
        </div>
        <div
          className="text-neutral-e text-justify font-SourceSansProSemibold
                     lg:text-[0.5rem] lg:w-[4.26rem] lg:leading-[150%]
                     text-[0.52rem] w-[12.73rem]  leading-[125%]"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
