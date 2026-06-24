import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaArrowLeft, FaArrowRight as FaArrowRightIcon } from "react-icons/fa";
import data from "./data";

export default function ServicesHero() {
  const [active, setActive] = useState(1);
  const [slideIdx, setSlideIdx] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const current = data.find((d) => d.key === active) || data[0];
  const totalSlides = current?.image?.length || 0;

  const nextSlide = () => {
    if (slideIdx >= totalSlides - 1) return;
    setSlideIdx((i) => i + 1);
  };
  const prevSlide = () => {
    if (slideIdx <= 0) return;
    setSlideIdx((i) => i - 1);
  };

  return (
    <section className="w-full bg-white-MainPage lg:py-[5vw] py-[13.953vw] overflow-hidden">
      {/* Desktop */}
      <div className="max-lg:hidden mx-auto w-[70rem]">
        <div className="grid grid-cols-[22rem_1fr] gap-x-[2.5vw]">
          {/* Left: Title + Service cards + CTA */}
          <div className="flex flex-col">
            <div className="mb-[1.5vw]">
              <p className="font-SourceSansProBold text-[1.6rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
                What We Provide
              </p>
              <p className="text-neutral-e text-[0.9rem] font-SourceSansProSemibold mt-[0.3rem] leading-snug">
                Elevate Your Presence Online — solusi digital terbaik untuk bisnis Anda
              </p>
            </div>

            <div className="flex flex-col gap-[0.6vw]">
              {data.map((item) => {
                const isActive = active === item.key;
                return (
                  <div
                    key={item.key}
                    onClick={() => { setActive(item.key); setSlideIdx(0); }}
                    className={`w-full h-[4.8rem] flex flex-row p-[1vw] gap-x-[0.8vw] rounded-[0.6rem] cursor-pointer border-[0.13rem] transition-all duration-300 ${
                      isActive ? "border-LightBlue-d bg-LightBlue-d/5 shadow-md" : "border-[#C3D4DB] bg-white hover:shadow-md hover:border-LightBlue-c/30"
                    }`}
                  >
                    <div className="w-[2.6rem] flex items-center justify-center">
                      <img src={item.icon} alt="" className="w-full h-auto" draggable="false" />
                    </div>
                    <div className="flex flex-col gap-y-[0.2vw] flex-1 justify-center">
                      <p className={`font-SourceSansProBold text-[1.05rem] transition-all duration-500 ${
                        isActive ? "text-LightBlue-e" : "text-neutral-g"
                      }`}>
                        {item.title}
                      </p>
                      <p className="font-SourceSansProSemibold text-[0.65rem] text-neutral-d">
                        {item.image?.length || 0} templates
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="https://wa.me/6287882832538" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-x-[0.3rem] mt-[1.2vw] hover:scale-[102%] transition-all duration-300 self-start">
              <p className="font-InterBold text-[0.75rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">Talk With Us</p>
              <FaArrowRightIcon className="text-[#24AAA7] w-[0.8rem]" />
            </a>
          </div>

          {/* Right: Image slider */}
          <div className="relative self-center">
            <div className="bg-border p-[0.12rem] rounded-[0.5rem]">
              <div className="relative bg-[#FBFCFD] shadow-md rounded-[0.5rem] overflow-hidden">
                <div ref={trackRef} className="flex transition-transform duration-400 ease-in-out" style={{ transform: `translateX(-${slideIdx * 100}%)` }}>
                  {current?.image?.map((img, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                      <div className="aspect-[16/10] w-full p-[0.5rem]">
                        <img src={img} alt="" className="w-full h-full object-cover rounded-md" draggable="false" />
                      </div>
                    </div>
                  ))}
                </div>
                {totalSlides > 1 && (
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
                    <button onClick={prevSlide} disabled={slideIdx === 0}
                      className="text-gray-500 hover:text-LightBlue-c transition disabled:opacity-30 disabled:cursor-not-allowed">
                      <FaArrowLeft size={11} />
                    </button>
                    {current.image.map((_, i) => (
                      <button key={i} onClick={() => setSlideIdx(i)}
                        className={`rounded-full transition-all ${i === slideIdx ? "bg-LightBlue-c w-[0.55rem] h-[0.55rem]" : "bg-gray-300 w-[0.35rem] h-[0.35rem]"}`} />
                    ))}
                    <button onClick={nextSlide} disabled={slideIdx >= totalSlides - 1}
                      className="text-gray-500 hover:text-LightBlue-c transition disabled:opacity-30 disabled:cursor-not-allowed">
                      <FaArrowRight size={11} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* Description below the image */}
            <div className="mt-[1vw] text-center">
              <p className="font-SourceSansProBold text-[1.2rem] text-neutral-g mb-[0.3vw]">{current?.title}</p>
              <p className="text-neutral-e text-[0.85rem] font-SourceSansProSemibold leading-snug">{current?.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col items-center w-full px-[5.581vw] pt-[25vw]">
        <p className="font-SourceSansProBold text-[6.977vw] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5] text-center">What We Provide</p>
        <p className="text-neutral-e text-[3.5vw] text-center font-SourceSansProSemibold mt-[2vw] mb-[5vw]">Elevate Your Presence Online</p>

        <div className="flex flex-wrap gap-[2vw] mb-[5vw] justify-center">
          {data.map((item) => (
            <button key={item.key} onClick={() => { setActive(item.key); setSlideIdx(0); }}
              className={`px-[4vw] py-[2vw] rounded-[2vw] text-[3vw] font-InterBold transition-all flex items-center gap-[2vw] ${
                active === item.key ? "bg-LightBlue-c text-white" : "bg-border text-neutral-e"
              }`}>
              <img src={item.icon} alt="" className="w-[5vw] h-auto" draggable="false" />
              {item.title}
            </button>
          ))}
        </div>

        {current && (
          <div className="w-full bg-border p-[0.5vw] rounded-[1.781vw] shadow-2xl">
            <div className="relative w-full aspect-[390/228] bg-[#FBFCFD] p-[2.2vw] rounded-[1.781vw] overflow-hidden">
              <div className="flex transition-transform duration-400 ease-in-out h-full" style={{ transform: `translateX(-${slideIdx * 100}%)` }}>
                {current.image?.map((img, i) => (
                  <div key={i} className="w-full flex-shrink-0 h-full">
                    <img src={img} alt="" className="w-full h-full object-cover rounded-md" draggable="false" />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-neutral-g font-SourceSansProBold text-[3.5vw] mt-[2vw]">{current.title}</p>
            <p className="text-center text-neutral-e font-SourceSansProSemibold text-[3vw] mt-[1vw] px-[2vw]">{current.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
