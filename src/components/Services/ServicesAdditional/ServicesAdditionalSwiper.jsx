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
                   lg:w-[4.56rem] lg:h-[2.66rem] lg:rounded-[0.2rem] lg:border-[0.041rem] lg:shadow-[0px_1px_9px_-1px_rgba(0,0,0,0.15)
                   w-[12.65rem] h-[7.29rem] rounded-[0.37rem] border-[0.09rem] shadow-[0px_4px_39px_-5px_rgba(0,0,0,0.15)"
      >
        <Swiper
          className="overflow-hidden border-border
                     lg:w-[4.38rem] lg:rounded-[0.2rem] lg:border-[0.027rem]
                     w-[12.13rem] rounded-[0.3rem] border-[0.06rem]"
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
  );
};

export default ServicesAdditionalSwiper;
