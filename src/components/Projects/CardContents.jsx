"use client";
import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";
import styles from "./CardContents.module.css";

const CardContents = ({ title, description, image, imageMobile }) => {
  const swiper = useSwiper();
  return (
    <section>
      <div className="relative bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]  mx-[4.4rem] rounded-[1.75rem] w-[61.5rem] aspect-[1349/576] flex flex-col justify-end items-center mt-[11.4rem] max-lg:hidden">
        <div
          className="absolute flex cursor-pointer justify-center items-center w-[3.5rem] h-[3.5rem] -left-[1.75rem] top-[24vh] bg-[#84D4E1] rounded-[2.6rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[1.55rem] mr-[0.35rem]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="cursor-pointer flex justify-center items-center absolute w-[3.5rem] h-[3.5rem] -right-[1.75rem] top-[24vh] bg-[#84D4E1] rounded-[2.6rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[1.55rem] ml-[0.35rem]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold text-[1.82rem] text-neutral-a">{title}</div>
        <div className="w-[52.5rem] text-center text-[0.91rem] font-SourceSansProSemibold mb-[2.6rem] text-neutral-a ">
          {description}
        </div>
        <div className="absolute -top-[10.5rem] w-[54.1rem] aspect-[1187/573]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[44.7rem] aspect-[1920/1080] rounded-xl border-white shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[11.2rem] aspect-[245/495] rounded-[1.75rem] bottom-[0.000rem] right-[0.000rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="relative bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] rounded-2xl aspect-[344/304] w-[61.6rem] mx-[8.8rem]  flex flex-col justify-end items-center mt-[26.2rem] lg:hidden">
        <div
          className="absolute flex justify-center items-center w-[7.0rem] aspect-[1/1] -left-[3.5rem] top-[26.2rem] bg-[#84D4E1] rounded-[8.8rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[3.5rem] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="absolute flex justify-center items-center w-[7.0rem] aspect-[1/1] -right-[3.5rem] top-[26.2rem] bg-[#84D4E1] rounded-[8.8rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[3.5rem] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold mb-[1.75rem] text-[4.9rem] text-neutral-a">
          {title}
        </div>
        <div className="w-[52.5rem] text-[2.6rem] text-center font-SourceSansProSemibold mb-[4.4rem] text-neutral-a">
          {description}
        </div>
        <div className="absolute -top-[21.9rem] w-[61.9rem] h-[30.6rem] aspect-[1920/1080]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[50.8rem] aspect-[980/551] rounded-xl border-white border-[0.18rem] ml-[1.75rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[11.2rem] aspect-[245/495] rounded-[1.75rem] bottom-[0.000rem] right-[0.000rem] mr-[1.75rem] shadow-2xl "
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
