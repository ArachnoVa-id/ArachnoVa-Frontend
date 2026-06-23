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
                   lg:w-[28.49vw] lg:h-[16.615vw] lg:rounded-[0.781vw] lg:border-[0.156vw] lg:shadow-[0px_0.208vw_2.083vw_-0.26vw_rgba(0,0,0,0.15)
                   w-[79.07vw] h-[45.581vw] rounded-[2.326vw] border-[0.349vw] shadow-[0px_0.93vw_9.302vw_-1.163vw_rgba(0,0,0,0.15)"
      >
        <Swiper
          className="overflow-hidden border-border
                     lg:w-[27.396vw] lg:rounded-[0.521vw] lg:border-[0.104vw]
                     w-[75.814vw] rounded-[1.86vw] border-[0.233vw]"
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
  );
};

export default ServicesAdditionalSwiper;
