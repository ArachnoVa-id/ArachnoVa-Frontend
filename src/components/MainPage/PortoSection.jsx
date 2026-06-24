import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaArrowLeft, FaArrowRight as FaArrowRightIcon } from "react-icons/fa";

const productTypes = [
  { key: "compro", label: "Company Profile", short: "ComPro" },
  { key: "erp", label: "Enterprise System", short: "ERP" },
  { key: "wa-apps", label: "WhatsApp Apps", short: "WA Apps" },
];

export default function PortoSection({ projects }) {
  const [active, setActive] = useState("compro");
  const [projectIndex, setProjectIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const filtered = projects.filter((p) => p.product === active);
  const totalInCategory = filtered.length;
  const currentProject = filtered[projectIndex] || filtered[0];

  const nextProject = () => {
    if (projectIndex >= totalInCategory - 1) return;
    setProjectIndex((i) => i + 1);
  };
  const prevProject = () => {
    if (projectIndex <= 0) return;
    setProjectIndex((i) => i - 1);
  };

  const switchCategory = (key) => {
    setActive(key);
    setProjectIndex(0);
  };

  return (
    <section className="w-full bg-white-MainPage lg:py-[2.5rem] py-[8vw] overflow-hidden">
      {/* Desktop */}
      <div className="max-lg:hidden flex flex-col items-center w-full">
        <p className="font-SourceSansProBold text-[1.2rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
          Our Tractions
        </p>
        <p className="text-neutral-e text-[0.65rem] text-center font-SourceSansProSemibold mt-[0.2rem] mb-[1rem] max-w-[40rem]">
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI.
        </p>

        <div className="flex items-start gap-x-[1.5rem] w-[65rem]">
          {/* Left: Product type cards */}
          <div className="flex flex-col gap-[0.5rem] w-[18rem] shrink-0">
            {productTypes.map((pt) => {
              const count = projects.filter((p) => p.product === pt.key).length;
              const isActive = active === pt.key;
              return (
                <div
                  key={pt.key}
                  onClick={() => switchCategory(pt.key)}
                  className={`w-full lg:h-[3.8rem] flex flex-row lg:p-[0.7rem] gap-x-[0.6rem] rounded-[0.5rem] cursor-pointer border-[0.1rem] transition-all duration-300 ${
                    isActive ? "border-LightBlue-c shadow-sm" : "border-border bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="flex flex-col gap-y-[0.2rem] flex-1 justify-center">
                    <p className={`font-SourceSansProBold lg:text-[0.85rem] transition-all duration-500 ${
                      isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]" : "text-neutral-g"
                    }`}>
                      {pt.label}
                    </p>
                    <p className="font-SourceSansProSemibold lg:text-[0.55rem] text-neutral-d">
                      {count} project{count > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Portfolio preview with slide */}
          <div className="flex-1 relative max-w-[42rem]">
            {currentProject && (
              <div className="bg-border p-[0.12rem] rounded-[0.5rem]">
                <div className="relative bg-[#FBFCFD] shadow-md rounded-[0.5rem] overflow-hidden">
                  {/* Slide track */}
                  <div
                    ref={trackRef}
                    className="flex transition-transform duration-400 ease-in-out"
                    style={{ transform: `translateX(-${projectIndex * 100}%)` }}
                  >
                    {filtered.map((p, i) => (
                      <div key={i} className="w-full flex-shrink-0">
                        <div className="aspect-[16/10] w-full p-[0.5rem]">
                          <img src={p.imageDesktop} alt="" className="w-full h-full object-cover rounded-md" draggable="false" />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Arrows */}
                  {totalInCategory > 1 && (
                    <>
                      <button onClick={prevProject} disabled={projectIndex === 0}
                        className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow transition disabled:opacity-30 disabled:cursor-not-allowed">
                        <FaArrowLeft size={14} />
                      </button>
                      <button onClick={nextProject} disabled={projectIndex >= totalInCategory - 1}
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow transition disabled:opacity-30 disabled:cursor-not-allowed">
                        <FaArrowRight size={14} />
                      </button>
                    </>
                  )}
                  {/* Dots */}
                  {totalInCategory > 1 && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 flex gap-1">
                      {filtered.map((_, i) => (
                        <button key={i} onClick={() => setProjectIndex(i)}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${i === projectIndex ? "bg-LightBlue-c w-3" : "bg-gray-300"}`} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            {currentProject?.imageMobile && (
              <div className="bg-border absolute aspect-[303/514] z-[3] w-[7rem] p-[0.1rem] shadow-md rounded-[0.3rem] -bottom-[2vh] -right-[2rem] flex flex-col">
                <div className="relative w-full h-full bg-white rounded-[0.3rem] overflow-hidden">
                  <img src={currentProject.imageMobile} alt="" className="w-full" draggable="false" />
                </div>
              </div>
            )}
          </div>
        </div>

        <a href="/projects" className="flex items-center gap-x-[0.3rem] mt-[1.8rem] hover:scale-[102%] transition-all duration-300">
          <p className="font-InterBold text-[0.6rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">More Projects</p>
          <FaArrowRightIcon className="text-[#24AAA7] w-[0.8rem]" />
        </a>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col items-center w-full px-[4vw]">
        <p className="font-SourceSansProBold text-[6vw] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5] text-center">Our Tractions</p>
        <p className="text-neutral-e text-[3vw] text-center font-SourceSansProSemibold mt-[1vw] mb-[4vw] max-w-[90vw]">
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI.
        </p>

        <div className="flex gap-[2vw] mb-[4vw] justify-center w-full overflow-x-auto no-scrollbar">
          {productTypes.map((pt) => (
            <button key={pt.key} onClick={() => switchCategory(pt.key)}
              className={`px-[3vw] py-[1.5vw] rounded-[2vw] text-[3vw] font-InterBold whitespace-nowrap transition-all ${
                active === pt.key ? "bg-LightBlue-c text-white" : "bg-border text-neutral-e"
              }`}>{pt.short}</button>
          ))}
        </div>

        {currentProject && (
          <div className="relative w-full max-w-[90vw]">
            <div className="overflow-hidden rounded-[2vw] bg-border p-[0.4vw] shadow-md">
              <div
                className="flex transition-transform duration-400 ease-in-out"
                style={{ transform: `translateX(-${projectIndex * 100}%)` }}
              >
                {filtered.map((p, i) => (
                  <div key={i} className="w-full flex-shrink-0">
                    <div className="aspect-[390/228] bg-[#FBFCFD]">
                      <img src={p.imageDesktop} alt="" className="w-full h-full object-cover" draggable="false" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {totalInCategory > 1 && (
              <div className="flex justify-center gap-1 mt-2">
                {filtered.map((_, i) => (
                  <button key={i} onClick={() => setProjectIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === projectIndex ? "bg-LightBlue-c w-3" : "bg-gray-300"}`} />
                ))}
              </div>
            )}
            {totalInCategory > 1 && (
              <div className="flex justify-between mt-2">
                <button onClick={prevProject} disabled={projectIndex === 0}
                  className="text-sm text-LightBlue-c disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1">
                  <FaArrowLeft size={12} /> Prev
                </button>
                <span className="text-xs text-gray-400">{projectIndex + 1}/{totalInCategory}</span>
                <button onClick={nextProject} disabled={projectIndex >= totalInCategory - 1}
                  className="text-sm text-LightBlue-c disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1">
                  Next <FaArrowRight size={12} />
                </button>
              </div>
            )}
          </div>
        )}

        <a href="/projects" className="flex items-center gap-x-[2vw] mt-[6vw]">
          <p className="font-InterBold text-[3.5vw] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">More Projects</p>
          <FaArrowRightIcon className="text-[#24AAA7] w-[4vw]" />
        </a>
      </div>
    </section>
  );
}
