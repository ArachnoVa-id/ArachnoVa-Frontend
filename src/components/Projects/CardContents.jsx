"use client";
import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";
import styles from "./CardContents.module.css";

const CardContents = ({ title, description, image, imageMobile }) => {
  const swiper = useSwiper();
  return (
    <section>
      <div className="relative bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]  mx-[clamp(0.8rem,5.0vw,7.2rem)] rounded-[clamp(0.32rem,2.0vw,2.88rem)] w-[clamp(11.24rem,70.260vw,50rem)] aspect-[1349/576] flex flex-col justify-end items-center mt-[clamp(2.08rem,13.0vw,18.72rem)] max-lg:hidden">
        <div
          className="absolute flex cursor-pointer justify-center items-center w-[clamp(0.64rem,4.0vw,5.76rem)] h-[clamp(0.64rem,4.0vw,5.76rem)] -left-[clamp(0.32rem,2.0vw,2.88rem)] top-[24vh] bg-[#84D4E1] rounded-[clamp(0.48rem,3.0vw,4.32rem)] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[clamp(0.28rem,1.771vw,2.55rem)] mr-[clamp(0.2rem,0.4vw,0.58rem)]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="cursor-pointer flex justify-center items-center absolute w-[clamp(0.64rem,4.0vw,5.76rem)] h-[clamp(0.64rem,4.0vw,5.76rem)] -right-[clamp(0.32rem,2.0vw,2.88rem)] top-[24vh] bg-[#84D4E1] rounded-[clamp(0.48rem,3.0vw,4.32rem)] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[clamp(0.28rem,1.771vw,2.55rem)] ml-[clamp(0.2rem,0.4vw,0.58rem)]"
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold text-[clamp(0.5rem,2.083vw,3.0rem)] text-neutral-a">{title}</div>
        <div className="w-[clamp(9.6rem,60.0vw,50rem)] text-center text-[clamp(0.5rem,1.042vw,1.5rem)] font-SourceSansProSemibold mb-[clamp(0.48rem,3.0vw,4.32rem)] text-neutral-a ">
          {description}
        </div>
        <div className="absolute -top-[clamp(1.92rem,12.0vw,17.28rem)] w-[clamp(9.89rem,61.823vw,50rem)] aspect-[1187/573]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[clamp(8.17rem,51.042vw,50rem)] aspect-[1920/1080] rounded-xl border-white shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[clamp(2.04rem,12.760vw,18.37rem)] aspect-[245/495] rounded-[clamp(0.32rem,2.0vw,2.88rem)] bottom-[clamp(0.2rem,0.0vw,0.7rem)] right-[clamp(0.2rem,0.0vw,0.7rem)] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="relative bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] rounded-2xl aspect-[344/304] w-[clamp(11.27rem,70.442vw,50rem)] mx-[clamp(1.6rem,10.0vw,14.4rem)]  flex flex-col justify-end items-center mt-[clamp(4.8rem,30.0vw,43.2rem)] lg:hidden">
        <div
          className="absolute flex justify-center items-center w-[clamp(1.28rem,8.0vw,11.52rem)] aspect-[1/1] -left-[clamp(0.64rem,4.0vw,5.76rem)] top-[clamp(4.8rem,30.0vw,43.2rem)] bg-[#84D4E1] rounded-[clamp(1.6rem,10.0vw,14.4rem)] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/LeftArrow.png"
            className="aspect-[1/1] w-[clamp(0.64rem,4.0vw,5.76rem)] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="absolute flex justify-center items-center w-[clamp(1.28rem,8.0vw,11.52rem)] aspect-[1/1] -right-[clamp(0.64rem,4.0vw,5.76rem)] top-[clamp(4.8rem,30.0vw,43.2rem)] bg-[#84D4E1] rounded-[clamp(1.6rem,10.0vw,14.4rem)] hover:bg-[#cae8ee] duration-500 ease-in-out"
          onClick={() => swiper.slideNext()}
        >
          <Image
            alt="Next Arrow"
            src="/image/Projects/RightArrow.png"
            className="aspect-[1/1] w-[clamp(0.64rem,4.0vw,5.76rem)] "
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
        <div className="font-SourceSansProBold mb-[clamp(0.32rem,2.0vw,2.88rem)] text-[clamp(0.89rem,5.581vw,8rem)] text-neutral-a">
          {title}
        </div>
        <div className="w-[clamp(9.6rem,60.0vw,50rem)] text-[clamp(0.5rem,3.0vw,4.32rem)] text-center font-SourceSansProSemibold mb-[clamp(0.8rem,5.0vw,7.2rem)] text-neutral-a">
          {description}
        </div>
        <div className="absolute -top-[clamp(4.0rem,25.0vw,36.0rem)] w-[clamp(11.32rem,70.744vw,50rem)] h-[clamp(5.6rem,35.0vw,50rem)] aspect-[1920/1080]  ">
          <Image
            alt="Content Prototype"
            src={image}
            className=" w-[clamp(9.29rem,58.042vw,50rem)] aspect-[980/551] rounded-xl border-white border-[0.2vw] ml-[clamp(0.32rem,2.0vw,2.88rem)] shadow-2xl "
            draggable="false"
            width={10000}
            height={10000}
          />
          <Image
            alt="Content Prototype"
            src={imageMobile}
            className="absolute w-[clamp(2.04rem,12.760vw,18.37rem)] aspect-[245/495] rounded-[clamp(0.32rem,2.0vw,2.88rem)] bottom-[clamp(0.2rem,0.0vw,0.7rem)] right-[clamp(0.2rem,0.0vw,0.7rem)] mr-[clamp(0.32rem,2.0vw,2.88rem)] shadow-2xl "
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
