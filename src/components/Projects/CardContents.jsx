"use client";
import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";
import styles from "./CardContents.module.css";

const CardContents = ({ title, description, image, imageMobile }) => {
  const swiper = useSwiper();
  return (
    <section>
      <div className="relative bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]  mx-[7.2rem] rounded-[2.88rem] w-[50rem] aspect-[1349/576] flex flex-col justify-end items-center mt-[18.72rem] max-lg:hidden">
        <div
          className="absolute flex cursor-pointer justify-center items-center w-[5.76rem] h-[5.76rem] -left-[2.88rem] top-[24vh] bg-[#84D4E1] rounded-[4.32rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[2.55rem] mr-[0.58rem]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="cursor-pointer flex justify-center items-center absolute w-[5.76rem] h-[5.76rem] -right-[2.88rem] top-[24vh] bg-[#84D4E1] rounded-[4.32rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[2.55rem] ml-[0.58rem]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold text-[3.0rem] text-neutral-a">{title}</div>
        <div className="w-[50rem] text-center text-[1.5rem] font-SourceSansProSemibold mb-[4.32rem] text-neutral-a ">
          {description}
        </div>
        <div className="absolute -top-[17.28rem] w-[50rem] aspect-[1187/573]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[50rem] aspect-[1920/1080] rounded-xl border-white shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[18.37rem] aspect-[245/495] rounded-[2.88rem] bottom-[0.7rem] right-[0.7rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="relative bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] rounded-2xl aspect-[344/304] w-[50rem] mx-[14.4rem]  flex flex-col justify-end items-center mt-[43.2rem] lg:hidden">
        <div
          className="absolute flex justify-center items-center w-[11.52rem] aspect-[1/1] -left-[5.76rem] top-[43.2rem] bg-[#84D4E1] rounded-[14.4rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[5.76rem] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="absolute flex justify-center items-center w-[11.52rem] aspect-[1/1] -right-[5.76rem] top-[43.2rem] bg-[#84D4E1] rounded-[14.4rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[5.76rem] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold mb-[2.88rem] text-[8rem] text-neutral-a">
          {title}
        </div>
        <div className="w-[50rem] text-[4.32rem] text-center font-SourceSansProSemibold mb-[7.2rem] text-neutral-a">
          {description}
        </div>
        <div className="absolute -top-[36.0rem] w-[50rem] h-[50rem] aspect-[1920/1080]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[50rem] aspect-[980/551] rounded-xl border-white border-[0.047rem] ml-[2.88rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[18.37rem] aspect-[245/495] rounded-[2.88rem] bottom-[0.7rem] right-[0.7rem] mr-[2.88rem] shadow-2xl "
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
