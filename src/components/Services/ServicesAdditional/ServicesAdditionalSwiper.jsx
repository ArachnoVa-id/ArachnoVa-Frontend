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
                   lg:w-[41.03rem] lg:h-[23.93rem] lg:rounded-[1.12rem] lg:border-[0.037rem] lg:shadow-[0px_1px_8px_-1px_rgba(0,0,0,0.15)
                   w-[50rem] h-[50rem] rounded-[3.35rem] border-[0.082rem] shadow-[0px_3px_35px_-4px_rgba(0,0,0,0.15)"
      >
        <Swiper
          className="overflow-hidden border-border
                     lg:w-[39.45rem] lg:rounded-[0.75rem] lg:border-[0.024rem]
                     w-[50rem] rounded-[2.68rem] border-[0.055rem]"
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
  );
};

export default ServicesAdditionalSwiper;
