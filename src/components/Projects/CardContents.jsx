"use client";
import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";
import styles from "./CardContents.module.css";

const CardContents = ({ title, description, image, imageMobile }) => {
  const swiper = useSwiper();
  return (
    <section>
      <div className="relative bg-gradient-to-r from-[#7C3AED] to-[#6D28D9]  mx-[5vw] rounded-[2vw] w-[70.260vw] aspect-[1349/576] flex flex-col justify-end items-center mt-[13vw] max-lg:hidden">
        <div
          className="absolute flex cursor-pointer justify-center items-center w-[4vw] h-[4vw] -left-[2vw] top-[24vh] bg-[#A78BFA] rounded-[3vw] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[1.771vw] mr-[0.4vw]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="cursor-pointer flex justify-center items-center absolute w-[4vw] h-[4vw] -right-[2vw] top-[24vh] bg-[#A78BFA] rounded-[3vw] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[1.771vw] ml-[0.4vw]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold text-[2.083vw] text-surface">{title}</div>
        <div className="w-[60vw] text-center text-[1.042vw] font-SourceSansProSemibold mb-[3vw] text-surface ">
          {description}
        </div>
        <div className="absolute -top-[12vw] w-[61.823vw] aspect-[1187/573]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[51.042vw] aspect-[1920/1080] rounded-xl border-white shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[12.760vw] aspect-[245/495] rounded-[2vw] bottom-[0vw] right-[0vw] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="relative bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] rounded-2xl aspect-[344/304] w-[70.442vw] mx-[10vw]  flex flex-col justify-end items-center mt-[30vw] lg:hidden">
        <div
          className="absolute flex justify-center items-center w-[8vw] aspect-[1/1] -left-[4vw] top-[30vw] bg-[#A78BFA] rounded-[10vw] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[4vw] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="absolute flex justify-center items-center w-[8vw] aspect-[1/1] -right-[4vw] top-[30vw] bg-[#A78BFA] rounded-[10vw] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[4vw] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold mb-[2vw] text-[5.581vw] text-surface">
          {title}
        </div>
        <div className="w-[60vw] text-[3vw] text-center font-SourceSansProSemibold mb-[5vw] text-surface">
          {description}
        </div>
        <div className="absolute -top-[25vw] w-[70.744vw] h-[35vw] aspect-[1920/1080]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[58.042vw] aspect-[980/551] rounded-xl border-white border-[0.2vw] ml-[2vw] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[12.760vw] aspect-[245/495] rounded-[2vw] bottom-[0vw] right-[0vw] mr-[2vw] shadow-2xl "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default CardContents;
