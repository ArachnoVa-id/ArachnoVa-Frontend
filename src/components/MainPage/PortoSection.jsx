import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaArrowLeft, FaArrowRight as FaArrowRightIcon } from "react-icons/fa";

const defaultTypes = [
  { key: "compro", label: "Company Profile", short: "ComPro" },
  { key: "erp", label: "Enterprise System", short: "ERP" },
  { key: "wa-apps", label: "WhatsApp Apps", short: "WA Apps" },
];

const productTagMap = { 1: "compro", 2: "erp", 3: "wa-apps" };

export default function PortoSection({ projects, services }) {
  const [active, setActive] = useState("compro");
  const [projectIndex, setProjectIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const productTypes = services?.length ? services.map((s) => ({
    key: productTagMap[s.key] || defaultTypes[s.key - 1]?.key || "compro",
    label: s.title,
    short: s.title.split(" ")[0] || s.title,
    icon: s.icon,
  })) : defaultTypes;

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
    <section className="w-full bg-white-MainPage lg:py-[5vw] py-[13.953vw] overflow-hidden">
      {/* Desktop */}
      <div className="max-lg:hidden mx-auto w-[65rem]">
        <div className="grid grid-cols-[20rem_1fr] gap-x-[2vw]">
          {/* Left: Title + Product type cards + More Projects */}
          <div className="flex flex-col">
            <div className="mb-[1.5vw]">
              <p className="font-SourceSansProBold text-[1.6rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">Our Tractions</p>
              <p className="text-neutral-e text-[0.9rem] font-SourceSansProSemibold mt-[0.3rem] leading-snug">
                ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI.
              </p>
            </div>

            <div className="flex flex-col gap-[0.6vw]">
              {productTypes.map((pt) => {
                const count = projects.filter((p) => p.product === pt.key).length;
                const isActive = active === pt.key;
                return (
                  <div
                    key={pt.key}
                    onClick={() => switchCategory(pt.key)}
                    className={`w-full h-[4.8rem] flex flex-row p-[1vw] gap-x-[0.8vw] rounded-[0.6rem] cursor-pointer border-[0.13rem] transition-all duration-300 ${
                      isActive ? "border-LightBlue-d bg-LightBlue-d/5 shadow-md" : "border-[#C3D4DB] bg-white hover:shadow-md hover:border-LightBlue-c/30"
                    }`}
                  >
                    {pt.icon && (
                      <div className="w-[2.6rem] flex items-center justify-center shrink-0">
                        <img src={pt.icon} alt="" className="w-full h-auto" draggable="false" />
                      </div>
                    )}
                    <div className="flex flex-col gap-y-[0.2vw] flex-1 justify-center">
                      <p className={`font-SourceSansProBold text-[1.05rem] transition-all duration-500 ${
                        isActive ? "text-LightBlue-e" : "text-neutral-g"
                      }`}>
                        {pt.label}
                      </p>
                      <p className="font-SourceSansProSemibold text-[0.65rem] text-neutral-d">
                        {count} project{count > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="/projects" className="flex items-center gap-x-[0.3rem] mt-[1.2vw] hover:scale-[102%] transition-all duration-300 self-start">
              <p className="font-InterBold text-[0.75rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">More Projects</p>
              <FaArrowRightIcon className="text-[#24AAA7] w-[0.8rem]" />
            </a>
          </div>

          {/* Right: Portfolio preview */}
          <div className="relative self-center">
            {currentProject && (
              <div className="bg-border p-[0.12rem] rounded-[0.5rem]">
                <div className="relative bg-[#FBFCFD] shadow-md rounded-[0.5rem] overflow-hidden">
                  <div ref={trackRef} className="flex transition-transform duration-400 ease-in-out" style={{ transform: `translateX(-${projectIndex * 100}%)` }}>
                    {filtered.map((p, i) => (
                      <div key={i} className="w-full flex-shrink-0">
                        <div className="aspect-[16/10] w-full p-[0.5rem]">
                          <img src={p.imageDesktop} alt="" className="w-full h-full object-cover rounded-md" draggable="false" />
                        </div>
                      </div>
                    ))}
                  </div>
                  {totalInCategory > 1 && (
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
                      <button onClick={prevProject} disabled={projectIndex === 0}
                        className="text-gray-500 hover:text-LightBlue-c transition disabled:opacity-30 disabled:cursor-not-allowed">
                        <FaArrowLeft size={11} />
                      </button>
                      {filtered.map((_, i) => (
                        <button key={i} onClick={() => setProjectIndex(i)}
                          className={`rounded-full transition-all ${i === projectIndex ? "bg-LightBlue-c w-[0.55rem] h-[0.55rem]" : "bg-gray-300 w-[0.35rem] h-[0.35rem]"}`} />
                      ))}
                      <button onClick={nextProject} disabled={projectIndex >= totalInCategory - 1}
                        className="text-gray-500 hover:text-LightBlue-c transition disabled:opacity-30 disabled:cursor-not-allowed">
                        <FaArrowRight size={11} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
            {currentProject?.imageMobile && (
              <div key={projectIndex} className="bg-border absolute aspect-[303/514] z-[3] w-[12rem] p-[0.15rem] shadow-md rounded-xl -bottom-[3.1vh] -right-[2rem] flex flex-col transition-all duration-300">
                <div className="relative w-full h-full bg-white rounded-xl overflow-hidden">
                  <img src={currentProject.imageMobile} alt="" className="w-full transition-opacity duration-300" draggable="false" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col items-center w-full px-[5.581vw]">
        <p className="font-SourceSansProBold text-[6.977vw] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5] text-center">Our Tractions</p>
        <p className="text-neutral-e text-[3.5vw] text-center font-SourceSansProSemibold mt-[2vw] mb-[5vw]">
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI.
        </p>

        <div className="flex gap-[3vw] mb-[5vw] justify-center w-full overflow-x-auto no-scrollbar">
          {productTypes.map((pt) => (
            <button key={pt.key} onClick={() => switchCategory(pt.key)}
              className={`px-[4vw] py-[2vw] rounded-[2vw] text-[3.5vw] font-InterBold whitespace-nowrap transition-all ${
                active === pt.key ? "bg-LightBlue-c text-white" : "bg-border text-neutral-e"
              }`}>{pt.short}</button>
          ))}
        </div>

        {currentProject && (
          <div className="relative w-full">
            <div className="overflow-hidden rounded-[3vw] bg-border p-[0.5vw] shadow-md">
              <div className="flex transition-transform duration-400 ease-in-out" style={{ transform: `translateX(-${projectIndex * 100}%)` }}>
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
              <>
                <div className="flex justify-center gap-1.5 mt-2">
                  {filtered.map((_, i) => (
                    <button key={i} onClick={() => setProjectIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === projectIndex ? "bg-LightBlue-c w-4" : "bg-gray-300"}`} />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <button onClick={prevProject} disabled={projectIndex === 0}
                    className="text-sm text-LightBlue-c disabled:opacity-30 disabled:cursor-not-allowed">← Prev</button>
                  <span className="text-xs text-gray-400">{projectIndex + 1}/{totalInCategory}</span>
                  <button onClick={nextProject} disabled={projectIndex >= totalInCategory - 1}
                    className="text-sm text-LightBlue-c disabled:opacity-30 disabled:cursor-not-allowed">Next →</button>
                </div>
              </>
            )}
          </div>
        )}

        <a href="/projects" className="flex items-center gap-x-[3vw] mt-[8vw]">
          <p className="font-InterBold text-[4vw] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">More Projects</p>
          <FaArrowRightIcon className="text-[#24AAA7] w-[4.5vw]" />
        </a>
      </div>
    </section>
  );
}
