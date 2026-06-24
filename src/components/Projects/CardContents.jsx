"use client";
import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";
import styles from "./CardContents.module.css";

const CardContents = ({ title, description, image, imageMobile }) => {
  const swiper = useSwiper();
  return (
    <section>
      <div className="relative bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]  mx-[2.8rem] rounded-[1.12rem] w-[39.5rem] aspect-[1349/576] flex flex-col justify-end items-center mt-[7.3rem] max-lg:hidden">
        <div
          className="absolute flex cursor-pointer justify-center items-center w-[2.2rem] h-[2.2rem] -left-[1.12rem] top-[24vh] bg-[#84D4E1] rounded-[1.69rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[1.0rem] mr-[0.22rem]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="cursor-pointer flex justify-center items-center absolute w-[2.2rem] h-[2.2rem] -right-[1.12rem] top-[24vh] bg-[#84D4E1] rounded-[1.69rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[1.0rem] ml-[0.22rem]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold text-[1.17rem] text-neutral-a">{title}</div>
        <div className="w-[33.8rem] text-center text-[0.59rem] font-SourceSansProSemibold mb-[1.69rem] text-neutral-a ">
          {description}
        </div>
        <div className="absolute -top-[6.8rem] w-[34.8rem] aspect-[1187/573]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[28.7rem] aspect-[1920/1080] rounded-xl border-white shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[7.2rem] aspect-[245/495] rounded-[1.12rem] bottom-[0.000rem] right-[0.000rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="relative bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] rounded-2xl aspect-[344/304] w-[39.6rem] mx-[5.6rem]  flex flex-col justify-end items-center mt-[16.9rem] lg:hidden">
        <div
          className="absolute flex justify-center items-center w-[4.5rem] aspect-[1/1] -left-[2.2rem] top-[16.9rem] bg-[#84D4E1] rounded-[5.6rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[2.2rem] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="absolute flex justify-center items-center w-[4.5rem] aspect-[1/1] -right-[2.2rem] top-[16.9rem] bg-[#84D4E1] rounded-[5.6rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[2.2rem] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold mb-[1.12rem] text-[3.1rem] text-neutral-a">
          {title}
        </div>
        <div className="w-[33.8rem] text-[1.69rem] text-center font-SourceSansProSemibold mb-[2.8rem] text-neutral-a">
          {description}
        </div>
        <div className="absolute -top-[14.1rem] w-[39.8rem] h-[19.7rem] aspect-[1920/1080]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[32.6rem] aspect-[980/551] rounded-xl border-white border-[0.11rem] ml-[1.12rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[7.2rem] aspect-[245/495] rounded-[1.12rem] bottom-[0.000rem] right-[0.000rem] mr-[1.12rem] shadow-2xl "
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
