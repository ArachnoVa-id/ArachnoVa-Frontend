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
                 lg:gap-[clamp(0.2rem,0.417vw,0.6rem)]
                 gap-[clamp(0.2rem,0.93vw,1.34rem)]"
    >
      <div
        className="text-[#9CADB4]
                     lg:w-[clamp(0.33rem,2.083vw,3.0rem)]
                     w-[clamp(0.78rem,4.884vw,7.03rem)]"
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
                   lg:w-[clamp(4.56rem,28.49vw,41.03rem)] lg:h-[clamp(2.66rem,16.615vw,23.93rem)] lg:rounded-[clamp(0.2rem,0.781vw,1.12rem)] lg:border-[0.156vw] lg:shadow-[0px_0.208vw_2.083vw_-0.26vw_rgba(0,0,0,0.15)
                   w-[clamp(12.65rem,79.07vw,50rem)] h-[clamp(7.29rem,45.581vw,50rem)] rounded-[clamp(0.37rem,2.326vw,3.35rem)] border-[0.349vw] shadow-[0px_0.93vw_9.302vw_-1.163vw_rgba(0,0,0,0.15)"
      >
        <Swiper
          className="overflow-hidden border-border
                     lg:w-[clamp(4.38rem,27.396vw,39.45rem)] lg:rounded-[clamp(0.2rem,0.521vw,0.75rem)] lg:border-[0.104vw]
                     w-[clamp(12.13rem,75.814vw,50rem)] rounded-[clamp(0.3rem,1.86vw,2.68rem)] border-[0.233vw]"
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
                   lg:w-[clamp(0.33rem,2.083vw,3.0rem)]
                   w-[clamp(0.78rem,4.884vw,7.03rem)]"
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
