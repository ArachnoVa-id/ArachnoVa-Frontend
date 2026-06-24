"use client";
import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";
import styles from "./CardContents.module.css";

const CardContents = ({ title, description, image, imageMobile }) => {
  const swiper = useSwiper();
  return (
    <section>
      <div className="relative bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]  mx-[5.0rem] rounded-[2.0rem] w-[70.3rem] aspect-[1349/576] flex flex-col justify-end items-center mt-[13.0rem] max-lg:hidden">
        <div
          className="absolute flex cursor-pointer justify-center items-center w-[4.0rem] h-[4.0rem] -left-[2.0rem] top-[24vh] bg-[#84D4E1] rounded-[3.0rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[1.77rem] mr-[0.4rem]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="cursor-pointer flex justify-center items-center absolute w-[4.0rem] h-[4.0rem] -right-[2.0rem] top-[24vh] bg-[#84D4E1] rounded-[3.0rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[1.77rem] ml-[0.4rem]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold text-[2.1rem] text-neutral-a">{title}</div>
        <div className="w-[60.0rem] text-center text-[1.04rem] font-SourceSansProSemibold mb-[3.0rem] text-neutral-a ">
          {description}
        </div>
        <div className="absolute -top-[12.0rem] w-[61.8rem] aspect-[1187/573]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[51.0rem] aspect-[1920/1080] rounded-xl border-white shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[12.8rem] aspect-[245/495] rounded-[2.0rem] bottom-[0.000rem] right-[0.000rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="relative bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] rounded-2xl aspect-[344/304] w-[70.4rem] mx-[10.0rem]  flex flex-col justify-end items-center mt-[30.0rem] lg:hidden">
        <div
          className="absolute flex justify-center items-center w-[8.0rem] aspect-[1/1] -left-[4.0rem] top-[30.0rem] bg-[#84D4E1] rounded-[10.0rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[4.0rem] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="absolute flex justify-center items-center w-[8.0rem] aspect-[1/1] -right-[4.0rem] top-[30.0rem] bg-[#84D4E1] rounded-[10.0rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[4.0rem] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold mb-[2.0rem] text-[5.6rem] text-neutral-a">
          {title}
        </div>
        <div className="w-[60.0rem] text-[3.0rem] text-center font-SourceSansProSemibold mb-[5.0rem] text-neutral-a">
          {description}
        </div>
        <div className="absolute -top-[25.0rem] w-[70.7rem] h-[35.0rem] aspect-[1920/1080]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[58.0rem] aspect-[980/551] rounded-xl border-white border-[0.2rem] ml-[2.0rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[12.8rem] aspect-[245/495] rounded-[2.0rem] bottom-[0.000rem] right-[0.000rem] mr-[2.0rem] shadow-2xl "
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
