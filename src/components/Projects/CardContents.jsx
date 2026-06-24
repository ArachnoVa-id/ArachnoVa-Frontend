"use client";
import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";
import styles from "./CardContents.module.css";

const CardContents = ({ title, description, image, imageMobile }) => {
  const swiper = useSwiper();
  return (
    <section>
      <div className="relative bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]  mx-[0.8rem] rounded-[0.32rem] w-[11.24rem] aspect-[1349/576] flex flex-col justify-end items-center mt-[2.08rem] max-lg:hidden">
        <div
          className="absolute flex cursor-pointer justify-center items-center w-[0.64rem] h-[0.64rem] -left-[0.32rem] top-[24vh] bg-[#84D4E1] rounded-[0.48rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[0.28rem] mr-[0.2rem]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="cursor-pointer flex justify-center items-center absolute w-[0.64rem] h-[0.64rem] -right-[0.32rem] top-[24vh] bg-[#84D4E1] rounded-[0.48rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[0.28rem] ml-[0.2rem]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold text-[0.5rem] text-neutral-a">{title}</div>
        <div className="w-[9.6rem] text-center text-[0.5rem] font-SourceSansProSemibold mb-[0.48rem] text-neutral-a ">
          {description}
        </div>
        <div className="absolute -top-[1.92rem] w-[9.89rem] aspect-[1187/573]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[8.17rem] aspect-[1920/1080] rounded-xl border-white shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[2.04rem] aspect-[245/495] rounded-[0.32rem] bottom-[0.2rem] right-[0.2rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="relative bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] rounded-2xl aspect-[344/304] w-[11.27rem] mx-[1.6rem]  flex flex-col justify-end items-center mt-[4.8rem] lg:hidden">
        <div
          className="absolute flex justify-center items-center w-[1.28rem] aspect-[1/1] -left-[0.64rem] top-[4.8rem] bg-[#84D4E1] rounded-[1.6rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[0.64rem] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="absolute flex justify-center items-center w-[1.28rem] aspect-[1/1] -right-[0.64rem] top-[4.8rem] bg-[#84D4E1] rounded-[1.6rem] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[0.64rem] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold mb-[0.32rem] text-[0.89rem] text-neutral-a">
          {title}
        </div>
        <div className="w-[9.6rem] text-[0.5rem] text-center font-SourceSansProSemibold mb-[0.8rem] text-neutral-a">
          {description}
        </div>
        <div className="absolute -top-[4.0rem] w-[11.32rem] h-[5.6rem] aspect-[1920/1080]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[9.29rem] aspect-[980/551] rounded-xl border-white border-[0.05rem] ml-[0.32rem] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[2.04rem] aspect-[245/495] rounded-[0.32rem] bottom-[0.2rem] right-[0.2rem] mr-[0.32rem] shadow-2xl "
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
