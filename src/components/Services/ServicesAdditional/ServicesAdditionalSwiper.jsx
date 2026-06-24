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
                   lg:w-[16.0rem] lg:h-[9.3rem] lg:rounded-[0.44rem] lg:border-[0.09rem] lg:shadow-[0px_2px_19px_-2px_rgba(0,0,0,0.15)
                   w-[44.5rem] h-[25.6rem] rounded-[1.31rem] border-[0.2rem] shadow-[0px_8px_84px_-10px_rgba(0,0,0,0.15)"
      >
        <Swiper
          className="overflow-hidden border-border
                     lg:w-[15.4rem] lg:rounded-[0.29rem] lg:border-[0.06rem]
                     w-[42.6rem] rounded-[1.05rem] border-[0.13rem]"
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
  );
};

export default ServicesAdditionalSwiper;
