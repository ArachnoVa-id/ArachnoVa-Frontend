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
                  lg:flex-row lg:min-h-0 lg:px-[clamp(0.5rem,3.125vw,4.5rem)] lg:py-[clamp(0.33rem,2.083vw,3.0rem)]  lg:gap-[clamp(0.33rem,2.083vw,3.0rem)] lg:rounded-[clamp(0.21rem,1.302vw,1.87rem)] lg:border-[0.156vw] lg:shadow-[0px_0.469vw_1.042vw_-0.156vw_rgba(0,0,0,0.15)]
                  flex-col min-h-0 px-[clamp(0.89rem,5.581vw,8.04rem)] py-[clamp(0.89rem,5.581vw,8.04rem)] gap-[clamp(0.74rem,4.651vw,6.7rem)] rounded-[clamp(0.6rem,3.721vw,5.36rem)] border-[0.465vw] shadow-[0px_0.465vw_4.651vw_-1.163vw_rgba(0,0,0,0.15)]`}
    >
      <div
        className="text-neutral-g font-SourceSansProBold
                     lg:hidden
                     text-[clamp(0.89rem,5.581vw,8rem)] leading-[117.5%]"
      >
        {title}
      </div>
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
                     lg:w-[clamp(5.12rem,31.979vw,46.05rem)] lg:h-[clamp(2.98rem,18.646vw,26.85rem)] lg:rounded-[clamp(0.2rem,0.781vw,1.12rem)] lg:border-[0.156vw] lg:shadow-[0px_0.208vw_2.083vw_-0.26vw_rgba(0,0,0,0.15)
                     w-[clamp(11.24rem,70.233vw,50rem)] h-[clamp(6.4rem,40.0vw,50rem)] rounded-[clamp(0.37rem,2.326vw,3.35rem)] border-[0.349vw] shadow-[0px_0.93vw_9.302vw_-1.163vw_rgba(0,0,0,0.15)"
        >
          <Swiper
            className="overflow-hidden border-border 
                       lg:w-[clamp(4.9rem,30.625vw,44.1rem)] lg:rounded-[clamp(0.2rem,0.521vw,0.75rem)] lg:border-[0.104vw]
                       w-[clamp(10.72rem,66.977vw,50rem)] aspect-[1920/980] rounded-[clamp(0.3rem,1.86vw,2.68rem)] border-[0.233vw]"
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
      <div
        className="flex flex-col
                   lg:gap-[clamp(0.2rem,0.521vw,0.75rem)]
                   gap-[clamp(0.2rem,0.521vw,0.75rem)]"
      >
        <div
          className="text-neutral-g font-SourceSansProBold
                     lg:text-[clamp(0.5rem,2.083vw,3.0rem)] lg:leading-[117.5%] lg:flex
                     hidden"
        >
          {title}
        </div>
        <div
          className="text-neutral-e text-justify font-SourceSansProSemibold
                     lg:text-[clamp(0.5rem,1.042vw,1.5rem)] lg:w-[clamp(4.26rem,26.615vw,38.33rem)] lg:leading-[150%]
                     text-[clamp(0.52rem,3.256vw,4.69rem)] w-[clamp(12.73rem,79.536vw,50rem)]  leading-[125%]"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
