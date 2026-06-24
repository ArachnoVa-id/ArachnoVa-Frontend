import Image from "@/components/ui/Img";
import { useRef } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ServicesAdditionalSwiper = ({ image }) => {
  const swiperRef = useRef();
  return (
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
                   lg:w-[24.9rem] lg:h-[14.5rem] lg:rounded-[0.68rem] lg:border-[0.14rem] lg:shadow-[0px_3px_29px_-4px_rgba(0,0,0,0.15)
                   w-[69.2rem] h-[39.9rem] rounded-[2.0rem] border-[0.31rem] shadow-[0px_13px_130px_-16px_rgba(0,0,0,0.15)"
      >
        <Swiper
          className="overflow-hidden border-border
                     lg:w-[24.0rem] lg:rounded-[0.46rem] lg:border-[0.09rem]
                     w-[66.3rem] rounded-[1.63rem] border-[0.2rem]"
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
  );
};

export default ServicesAdditionalSwiper;
