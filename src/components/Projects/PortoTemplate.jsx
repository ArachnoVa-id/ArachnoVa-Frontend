"use client";

import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { twMerge } from "tailwind-merge";

export default function PortoTemplate({
  type,
  title,
  desc,
  srcDesktop,
  srcMobile,
  link,
}) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <section
      className={twMerge(
        "w-full lg:aspect-[1920/748] max-lg:aspect-[430/552] flex flex-col items-center justify-center overflow-hidden",
        type === 2 ? "bg-neutral-a" : type === 1 ? "bg-[#F1F4F4]" : ""
      )}
    >
      {/* Desktop */}
      <div
        className={twMerge(
          type === 1 ? "flex" : type === 2 ? "flex flex-row-reverse " : "",
          " max-lg:hidden "
        )}
      >
        <div
          className={twMerge(
            "w-[3.2rem] text-black pt-[0.32rem]",
            type === 2 ? "ml-[0.8rem]" : type === 1 ? "mr-[0.8rem]" : ""
          )}
        >
          <h1
            className={twMerge(
              "text-[0.5rem] font-SourceSansProBold",
              type === 1 ? "text-start" : type === 2 ? "text-end" : ""
            )}
          >
            {title}
          </h1>
          <p
            className={twMerge(
              "text-[0.5rem]/[29px] font-SourceSansProSemibold text-neutral-e",
              type === 1 ? "text-start" : type === 2 ? "text-end" : ""
            )}
          >
            {desc}
          </p>
          <div
            className={twMerge(
              "flex ",
              type === 1 ? "" : type === 2 ? "justify-end" : ""
            )}
          >
            <a
              href={link}
              className={twMerge(
                "w-[0.75rem] mt-[0.2rem] bg-gradient-to-r rounded-[0.2rem] text-[0.5rem] aspect-[90/48] from-[#1AB0C8] to-[#179FB5] font-InterBold text-white",
                "flex justify-center items-center",
                "hover:translate-y-[-4px] transition-all duration-500 ease-in-out "
              )}
            >
              Source
            </a>
          </div>
        </div>

        <div
          className="relative w-[6.4rem] aspect-[824.28/426.9]"
          data-aos="fade-left"
        >
          <Image
            alt="Content Prototype"
            src={srcDesktop}
            className={twMerge("absolute w-[5.54rem] aspect-[669/376] rounded-xl shadow-2xl",
              type === 1 ? "left-[0.2rem]" : type === 2 ? "right-[0.2rem]" : "" 
            )}
            draggable="false"
            width={1000}
            height={1000}
          />
          <Image
            alt="Content Prototype"
            src={srcMobile}
            className={twMerge("absolute w-[1.28rem] aspect-[245/485] rounded-[0.2rem] -bottom-[0.32rem]  shadow-2xl",
              type === 1 ?"right-[0.2rem]" : type === 2 ? "left-[0.2rem]" : ""
            )}
            draggable="false"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-y-[0.96rem]">
        <h1 className="text-[1.28rem] font-SourceSansProBold text-neutral-g ">
          {title}
        </h1>
        <div
          className={twMerge(
            "relative w-[14.51rem] aspect-[824.28/426.9]",
            type === 1 ? "" : type === 2 ? "justify-end items-start flex" : ""
          )}
          data-aos="fade-left"
        >
          {type === 1 ? (
            <>
              <Image
                alt="Content Prototype"
                src={srcDesktop}
                className=" w-[12.1rem] aspect-[669/376] rounded-xl shadow-2xl "
                draggable="false"
                width={1000}
                height={1000}
              />
              <Image
                alt="Content Prototype"
                src={srcMobile}
                className="absolute w-[3.2rem] aspect-[245/495] rounded-[0.48rem] -bottom-[0.32rem] right-[0.2rem] shadow-2xl "
                draggable="false"
                width={1000}
                height={1000}
              />
            </>
          ) : (
            <>
              <Image
                alt="Content Prototype"
                src={srcDesktop}
                className=" w-[12.1rem] aspect-[669/376] rounded-xl border-white border-[4px] shadow-2xl "
                draggable="false"
                width={1000}
                height={1000}
              />
              <Image
                alt="Content Prototype"
                src={srcMobile}
                className="absolute w-[3.2rem] aspect-[245/495] rounded-[0.48rem] -bottom-[0.32rem] left-[0.2rem] shadow-2xl "
                draggable="false"
                width={1000}
                height={1000}
              />
            </>
          )}
        </div>

        <div className="justify-center items-center w-[14.4rem]">
          <p className="text-[0.72rem]/[86px] font-SourceSansProSemibold text-neutral-e ">
            {desc}
          </p>
        </div>
        <a
          href={link}
          className="w-[14.4rem] h-[1.6rem] mt-[0.2rem] text-[0.5rem] bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] font-InterBold text-white rounded-md  flex justify-center items-center hover:translate-y-[-4px] transition-all duration-500 ease-in-out "
        >
          Source
        </a>
      </div>
    </section>
  );
}
